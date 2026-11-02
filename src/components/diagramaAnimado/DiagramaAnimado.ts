import { animate } from 'motion'
import { montarCena } from '../../lib/animacao/cena'
import { compilar, estadoEm } from '../../lib/animacao/linhaDoTempo'
import type { Animacao, Cena, Ponto } from '../../lib/animacao/tipos'
import { h, svg as icone } from '../../ui/dom'

/** Relógio mestre da animação (por trás usa a biblioteca motion). Separado para poder testar. */
export interface Relogio {
  tocar(): void
  pausar(): void
  /** Volta ao começo (sem mudar se está tocando ou pausado). */
  reiniciar(): void
  velocidade: number
  parar(): void
  readonly tempo: number
}
export type FabricaRelogio = (duracao: number, aoAtualizar: (tempo: number) => void) => Relogio

export const relogioMotion: FabricaRelogio = (duracao, aoAtualizar) => {
  const c = animate(0, duracao, { duration: duracao, ease: 'linear', repeat: Infinity, onUpdate: aoAtualizar })
  c.pause()
  return {
    tocar: () => c.play(),
    pausar: () => c.pause(),
    reiniciar: () => {
      c.time = 0
      aoAtualizar(0)
    },
    get velocidade() { return c.speed },
    set velocidade(v: number) { c.speed = v },
    parar: () => c.stop(),
    get tempo() { return c.time },
  }
}

export const VELOCIDADE_LENTA = 0.5
export const CLASSE_PASSO_ATIVO = 'cda-passo-ativo'

const ICONES = {
  tocar: '<polygon points="7 4 20 12 7 20 7 4" fill="currentColor"/>',
  pausar: '<rect x="6" y="4" width="4.5" height="16" rx="1" fill="currentColor"/><rect x="13.5" y="4" width="4.5" height="16" rx="1" fill="currentColor"/>',
  repetir: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
}

export interface OpcoesDiagrama {
  numero: number
  cena: Cena
  animacao: Animacao
  /** Quantos itens tem o "Passo a passo" (para escrever "Passo 2 de 5"). */
  totalPassos?: number
  fabricaRelogio?: FabricaRelogio
  /** Sem IntersectionObserver (testes), a animação começa na hora. */
  observarVisibilidade?: boolean
}

export interface DiagramaAnimado {
  el: HTMLElement
  destruir(): void
}

export function criarDiagramaAnimado(op: OpcoesDiagrama): DiagramaAnimado {
  const compilada = compilar(op.animacao, op.cena)
  const caminhoDaBola = [compilada.bolaInicial, ...compilada.voos.flatMap((v) => [v.de, v.para])].filter((p): p is Ponto => p !== null)
  const montada = montarCena(op.cena, new Set(compilada.desenhos.keys()), `d${op.numero}`, caminhoDaBola)

  const botao = (acao: string, rotulo: string, html: string, texto?: string): HTMLButtonElement => {
    const b = h('button', { cls: 'cda-anim-btn', type: 'button', 'data-acao': acao, 'aria-label': rotulo, title: rotulo })
    b.innerHTML = html + (texto ? `<span>${texto}</span>` : '')
    return b
  }
  const bTocar = botao('tocar', 'Pausar animação', icone(ICONES.pausar))
  const bVelocidade = botao('velocidade', 'Velocidade normal. Toque para deixar lenta', '', '1×')
  bVelocidade.setAttribute('aria-pressed', 'false')
  const bRepetir = botao('repetir', 'Repetir do começo', icone(ICONES.repetir), 'Repetir')
  const rotuloPasso = h('span', { cls: 'cda-anim-passo' })
  const controles = h('div', { cls: 'cda-anim-controles', role: 'group', 'aria-label': 'Controles da animação' }, bTocar, bVelocidade, bRepetir, rotuloPasso)
  const el = h('div', { cls: 'cda-anim', 'data-numero': String(op.numero) }, h('div', { cls: 'cda-anim-quadro' }, montada.svg), controles)

  let passoAtual: number | null = null
  let pausadoPeloUsuario = false
  let visivel = true
  let destruido = false

  const raizDosPassos = (): ParentNode => el.closest('.ex-page') ?? document

  const destacarPasso = (): void => {
    const itens = raizDosPassos().querySelectorAll('.step-list .step-item')
    itens.forEach((item, i) => {
      const ativo = passoAtual !== null && i + 1 === passoAtual
      item.classList.toggle(CLASSE_PASSO_ATIVO, ativo)
      if (ativo) item.setAttribute('aria-current', 'step')
      else item.removeAttribute('aria-current')
    })
  }

  const escreverRotuloDoPasso = (): void => {
    rotuloPasso.textContent = passoAtual === null ? '' : op.totalPassos ? `Passo ${passoAtual} de ${op.totalPassos}` : `Passo ${passoAtual}`
  }

  // declarados antes do relógio: ele chama aoAtualizar (e destruir) já na criação
  let observador: IntersectionObserver | null = null
  let vigia: MutationObserver | null = null
  let jaFoiParaATela = false

  const aoAtualizar = (tempo: number): void => {
    if (destruido) return
    if (el.isConnected) jaFoiParaATela = true
    else if (jaFoiParaATela) { destruir(); return }
    const estado = estadoEm(compilada, tempo)
    montada.aplicar(estado)
    if (estado.passo !== passoAtual) {
      passoAtual = estado.passo
      escreverRotuloDoPasso()
      destacarPasso()
    }
  }

  const relogio = (op.fabricaRelogio ?? relogioMotion)(compilada.duracao, aoAtualizar)
  aoAtualizar(0)

  const sincronizar = (): void => {
    const deveTocar = visivel && !pausadoPeloUsuario && !document.hidden
    if (deveTocar) relogio.tocar()
    else relogio.pausar()
    const tocando = deveTocar
    bTocar.innerHTML = icone(tocando ? ICONES.pausar : ICONES.tocar)
    const rotulo = pausadoPeloUsuario ? 'Reproduzir animação' : 'Pausar animação'
    bTocar.setAttribute('aria-label', rotulo)
    bTocar.title = rotulo
    bTocar.setAttribute('data-estado', pausadoPeloUsuario ? 'pausado' : 'tocando')
  }

  bTocar.addEventListener('click', () => { pausadoPeloUsuario = !pausadoPeloUsuario; sincronizar() })
  bVelocidade.addEventListener('click', () => {
    const lenta = relogio.velocidade !== VELOCIDADE_LENTA
    relogio.velocidade = lenta ? VELOCIDADE_LENTA : 1
    bVelocidade.setAttribute('aria-pressed', String(lenta))
    bVelocidade.setAttribute('aria-label', lenta ? 'Velocidade lenta (0,5×). Toque para voltar ao normal' : 'Velocidade normal. Toque para deixar lenta')
    bVelocidade.querySelector('span')!.textContent = lenta ? '0,5×' : '1×'
  })
  bRepetir.addEventListener('click', () => { relogio.reiniciar(); pausadoPeloUsuario = false; sincronizar() })

  // começa quando o diagrama aparece na tela e pausa quando sai
  if (op.observarVisibilidade !== false && typeof IntersectionObserver !== 'undefined') {
    visivel = false
    observador = new IntersectionObserver((entradas) => {
      visivel = entradas[entradas.length - 1].isIntersecting
      sincronizar()
    }, { threshold: 0.35 })
    observador.observe(el)
  }
  const aoMudarVisibilidadeDaAba = (): void => sincronizar()
  document.addEventListener('visibilitychange', aoMudarVisibilidadeDaAba)

  // o texto dos passos é redesenhado ao trocar de aba (Como fazer / Corrigir / Variações)
  queueMicrotask(() => {
    const raiz = el.closest('.ex-page')
    if (!raiz || destruido) return
    vigia = new MutationObserver(destacarPasso)
    vigia.observe(raiz, { childList: true, subtree: true })
  })

  sincronizar()

  function destruir(): void {
    if (destruido) return
    destruido = true
    relogio.parar()
    observador?.disconnect()
    vigia?.disconnect()
    document.removeEventListener('visibilitychange', aoMudarVisibilidadeDaAba)
    passoAtual = null
    destacarPasso()
  }

  return { el, destruir }
}
