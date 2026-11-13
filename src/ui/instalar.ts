import { h, svg } from './dom'

/**
 * Botão "Instalar o app" do topo.
 * - Android/Chrome: usa o pedido de instalação do navegador (beforeinstallprompt).
 * - iPhone e navegadores sem esse pedido: abre um passo a passo curto.
 * - Some quando o app já está aberto instalado (modo standalone) ou depois de instalar.
 */
interface PedidoInstalacao extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const ICONE = '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>'
const CHAVE_AVISO = 'cda-aviso-instalar-visto'

let pedido: PedidoInstalacao | null = null
let instalado = false

function abertoComoApp(): boolean {
  const nav = navigator as Navigator & { standalone?: boolean }
  return instalado || nav.standalone === true || (typeof window.matchMedia === 'function' && window.matchMedia('(display-mode: standalone)').matches)
}

function ehIphone(): boolean {
  const ua = navigator.userAgent
  return /iPhone|iPad|iPod/.test(ua) || (ua.includes('Mac') && navigator.maxTouchPoints > 1)
}

function sumirBotoes(): void {
  document.querySelectorAll('.install-btn, .install-aviso').forEach((el) => el.remove())
}

/** Chamar uma vez, no início do app. */
export function iniciarInstalacao(): void {
  window.addEventListener('beforeinstallprompt', (ev) => {
    ev.preventDefault()
    pedido = ev as PedidoInstalacao
  })
  window.addEventListener('appinstalled', () => {
    instalado = true
    pedido = null
    sumirBotoes()
  })
}

function lerVisto(): boolean {
  try { return localStorage.getItem(CHAVE_AVISO) === '1' } catch { return true }
}
function marcarVisto(): void {
  try { localStorage.setItem(CHAVE_AVISO, '1') } catch { /* sem armazenamento: o aviso só não fica lembrado */ }
}

function fecharPainel(): void {
  document.querySelector('.install-painel-fundo')?.remove()
}

function abrirPassoAPasso(): void {
  fecharPainel()
  const iphone = ehIphone()
  const passos = iphone
    ? ['Toque no botão Compartilhar do Safari (o quadrado com a seta para cima).', 'Role e toque em "Adicionar à Tela de Início".', 'Toque em "Adicionar". O app aparece na sua tela inicial.']
    : ['Toque nos três pontinhos do navegador, no canto de cima.', 'Toque em "Instalar app" ou "Adicionar à tela inicial".', 'Confirme. O app aparece na sua tela inicial.']
  const fundo = h('div', { cls: 'install-painel-fundo', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Como instalar o app' })
  const fechar = h('button', { cls: 'install-painel-ok', type: 'button' }, 'Entendi')
  const painel = h('div', { cls: 'install-painel' },
    h('span', { cls: 'install-painel-alca', 'aria-hidden': 'true' }),
    h('h2', { cls: 'install-painel-titulo' }, 'Instale o app no celular'),
    h('p', { cls: 'install-painel-sub' }, 'Ele fica na sua tela inicial e abre com um toque, sem precisar procurar o link.'),
    h('ol', { cls: 'install-painel-passos' }, ...passos.map((p, i) => h('li', null, h('span', { cls: 'install-painel-num' }, String(i + 1)), h('span', null, p)))),
    fechar,
  )
  fundo.append(painel)
  fundo.addEventListener('click', (ev) => { if (ev.target === fundo) fecharPainel() })
  fechar.addEventListener('click', fecharPainel)
  document.body.append(fundo)
  fechar.focus()
}

async function instalar(): Promise<void> {
  marcarVisto()
  document.querySelectorAll('.install-aviso').forEach((el) => el.remove())
  if (pedido) {
    const p = pedido
    pedido = null // o navegador só deixa usar o pedido uma vez
    try {
      await p.prompt()
      const escolha = await p.userChoice
      if (escolha.outcome === 'accepted') { instalado = true; sumirBotoes() }
    } catch {
      abrirPassoAPasso()
    }
    return
  }
  abrirPassoAPasso()
}

/** Botão de instalar para o grupo de ações do topo. Devolve null se o app já está instalado. */
export function botaoInstalar(): HTMLElement | null {
  if (abertoComoApp()) return null
  const btn = h('button', { cls: 'hdr-btn install-btn', type: 'button', title: 'Instalar o app', 'aria-label': 'Instalar o app no celular', html: svg(ICONE) })
  btn.addEventListener('click', () => { void instalar() })
  if (lerVisto()) return btn
  // Na primeira visita, um aviso curto aponta para o botão.
  const aviso = h('button', { cls: 'install-aviso', type: 'button' }, 'Instale o app no celular')
  aviso.addEventListener('click', () => { void instalar() })
  const caixa = h('div', { cls: 'install-caixa' }, btn, aviso)
  window.setTimeout(() => { aviso.classList.add('saindo'); window.setTimeout(() => aviso.remove(), 400); marcarVisto() }, 7000)
  return caixa
}
