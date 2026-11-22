import { h, svg, ICONES } from '../ui/dom'
import { cabecalho, tituloDaPagina } from '../ui/cabecalho'
import { AMBIENTES, JOGOS_COMPETICAO, jogoPorId, type Ambiente, type JogoCompeticao } from '../data/competicao'
import { EXTRA_COMPETICAO, estaLiberado, tentarSenha } from '../app/extras'
import { SUPORTE_WHATSAPP } from './outras'

const ICO = {
  trofeu: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
  placar: '<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="12" y1="5" x2="12" y2="19"/><path d="M6 10h2v4M15 10h3v2h-3v2h3"/>',
  casa: '<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>',
  quadra: '<rect x="3" y="5" width="18" height="14" rx="1"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="8" y1="5" x2="8" y2="19"/><line x1="16" y1="5" x2="16" y2="19"/>',
  areia: '<circle cx="17" cy="7" r="3"/><path d="M2 18c3-2 6-2 9 0s6 2 9 0"/><path d="M2 14c3-2 6-2 9 0"/>',
  pessoas: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.5A5 5 0 0 1 21 19"/>',
  desfazer: '<path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>',
  trocar: '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
  ajustes: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  reiniciar: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><polyline points="3 3 3 8 8 8"/>',
}
const ICO_AMBIENTE: Record<Ambiente, string> = { casa: ICO.casa, quadra: ICO.quadra, areia: ICO.areia }

/* ================== CARTÃO NA TELA INICIAL ================== */

export function cartaoModoCompeticao(): HTMLElement {
  const liberado = estaLiberado(EXTRA_COMPETICAO.id)
  const cartao = h('button', { cls: `comp-home${liberado ? ' liberado' : ''}` },
    h('span', { cls: 'comp-home-ico', html: svg(ICO.trofeu) }),
    h('span', { cls: 'comp-home-texto' },
      h('span', { cls: 'comp-home-etiqueta' }, liberado ? 'Liberado' : 'Extra'),
      h('strong', null, EXTRA_COMPETICAO.nome),
      h('small', null, 'Placar inteligente + jogos de competição para o racha'),
    ),
    h('span', { cls: 'comp-home-seta', html: svg(liberado ? ICONES.avancar : ICONES.cadeado) }),
  )
  cartao.addEventListener('click', () => { window.location.hash = '#comp' })
  return h('div', null, h('h2', { cls: 'bloco-titulo' }, 'Extras'), cartao)
}

/* ================== TELA BLOQUEADA ================== */

function telaBloqueada(): DocumentFragment {
  const frag = document.createDocumentFragment()
  const erro = h('p', { cls: 'comp-erro', role: 'alert' })
  const campo = h('input', { cls: 'comp-senha', type: 'text', placeholder: 'Digite a senha', autocomplete: 'off', autocapitalize: 'characters', spellcheck: 'false', 'aria-label': 'Senha de desbloqueio' })
  const enviar = (): void => {
    if (tentarSenha(campo.value).some((e) => e.id === EXTRA_COMPETICAO.id)) {
      window.location.hash = '#comp'
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    } else {
      erro.textContent = campo.value.trim() ? 'Senha incorreta. Confira no e-mail da compra.' : 'Digite a senha que chegou no seu e-mail.'
      campo.classList.add('erro'); campo.focus()
    }
  }
  campo.addEventListener('keydown', (e) => { if (e.key === 'Enter') enviar() })
  campo.addEventListener('input', () => { erro.textContent = ''; campo.classList.remove('erro') })
  const botao = h('button', { cls: 'comp-btn', onclick: enviar, html: `${svg(ICONES.cadeadoAberto)}<span>Desbloquear</span>` })

  const itens: Array<[string, string, string]> = [
    [ICO.placar, 'Placar inteligente', 'Sets, vantagem de 2, aviso de troca de lado e desfazer ponto. A tela não apaga durante o jogo.'],
    [ICO.casa, `${JOGOS_COMPETICAO.filter((j) => j.ambiente === 'casa').length} jogos em casa`, 'Duelos com parede e corda para jogar com alguém da família.'],
    [ICO.quadra, `${JOGOS_COMPETICAO.filter((j) => j.ambiente === 'quadra').length} jogos na quadra`, 'Regras para o racha ficar disputado e você treinar jogando.'],
    [ICO.areia, `${JOGOS_COMPETICAO.filter((j) => j.ambiente === 'areia').length} jogos na areia`, 'Disputas em dupla e mano a mano.'],
  ]
  const compra = EXTRA_COMPETICAO.checkoutUrl
    ? h('a', { cls: 'comp-btn comp-btn-sol', href: EXTRA_COMPETICAO.checkoutUrl, target: '_blank', rel: 'noopener' },
      `Liberar o Modo Competição${EXTRA_COMPETICAO.preco ? ` por ${EXTRA_COMPETICAO.preco}` : ''}`)
    : null
  const ajuda = h('a', { cls: 'comp-ajuda', href: `https://wa.me/${SUPORTE_WHATSAPP}?text=${encodeURIComponent('Olá! Comprei o Modo Competição e preciso da senha.')}`, target: '_blank', rel: 'noopener' },
    'Comprou e não achou a senha? Fale com o suporte')

  frag.append(cabecalho('home'), tituloDaPagina(EXTRA_COMPETICAO.nome, 'Conteúdo extra do Código da Areia'),
    h('div', { cls: 'page comp-page' },
      h('section', { cls: 'comp-cadeado' },
        h('span', { cls: 'comp-cadeado-ico', html: svg(ICONES.cadeado) }),
        h('h2', null, 'Este conteúdo está bloqueado'),
        h('p', null, 'Quem comprou o Modo Competição recebeu uma senha no e-mail. Digite aqui para liberar neste celular.'),
        h('div', { cls: 'comp-form' }, campo, botao), erro,
      ),
      h('ul', { cls: 'comp-inclui' }, ...itens.map(([ico, t, d]) => h('li', null, h('span', { cls: 'comp-inclui-ico', html: svg(ico) }), h('span', null, h('strong', null, t), h('small', null, d))))),
      compra, ajuda,
    ))
  return frag
}

/* ================== LISTA DE JOGOS ================== */

export function telaCompeticao(extra: string): DocumentFragment {
  if (!estaLiberado(EXTRA_COMPETICAO.id)) return telaBloqueada()
  const ambiente = (AMBIENTES.some((a) => a.id === extra) ? extra : 'quadra') as Ambiente
  const frag = document.createDocumentFragment()
  const info = AMBIENTES.find((a) => a.id === ambiente)!

  const abas = h('div', { cls: 'comp-abas', role: 'tablist' }, ...AMBIENTES.map((a) => {
    const b = h('button', { cls: `comp-aba${a.id === ambiente ? ' ativa' : ''}`, role: 'tab', 'aria-selected': String(a.id === ambiente), html: `${svg(ICO_AMBIENTE[a.id])}<span>${a.nome}</span>` })
    b.addEventListener('click', () => { window.location.hash = `#comp~${a.id}` })
    return b
  }))

  const placarLivre = h('button', { cls: 'comp-placar-livre', html: `${svg(ICO.placar)}<span><strong>Abrir o placar</strong><small>Para qualquer jogo, com as suas regras</small></span>${svg(ICONES.avancar)}` })
  placarLivre.addEventListener('click', () => { window.location.hash = '#placar' })

  frag.append(cabecalho('home'), tituloDaPagina(EXTRA_COMPETICAO.nome, 'Jogos para o racha e placar na palma da mão'),
    h('div', { cls: 'page comp-page' },
      placarLivre, abas,
      h('p', { cls: 'bloco-sub comp-amb-sub' }, info.sub),
      h('div', { cls: 'comp-lista' }, ...JOGOS_COMPETICAO.filter((j) => j.ambiente === ambiente).map(linhaDoJogo)),
    ))
  return frag
}

function linhaDoJogo(j: JogoCompeticao): HTMLElement {
  const b = h('button', { cls: 'comp-jogo' },
    h('span', { cls: 'comp-jogo-ico', html: svg(ICO_AMBIENTE[j.ambiente]) }),
    h('span', { cls: 'comp-jogo-corpo' },
      h('strong', null, j.nome),
      h('small', null, j.objetivo),
      h('span', { cls: 'comp-jogo-meta' }, h('span', null, j.formato), h('span', null, `Até ${j.placar.pts}`)),
    ),
    h('span', { cls: 'chev', html: svg(ICONES.avancar) }),
  )
  b.addEventListener('click', () => { window.location.hash = `#jogo-${j.id}` })
  return b
}

/* ================== DETALHE DO JOGO ================== */

export function telaJogoCompeticao(id: string): DocumentFragment {
  if (!estaLiberado(EXTRA_COMPETICAO.id)) return telaBloqueada()
  const j = jogoPorId(id)
  if (!j) { window.location.hash = '#comp'; return document.createDocumentFragment() }
  const frag = document.createDocumentFragment()
  const ficha: Array<[string, string, string]> = [
    [ICO.pessoas, 'Jogadores', j.jogadores],
    [ICONES.caixa, 'Material', j.material],
    [ICONES.relogio, 'Duração', j.tempo],
  ]
  const abrir = h('button', { cls: 'comp-btn comp-btn-sol comp-abrir', html: `${svg(ICO.placar)}<span>Abrir placar deste jogo</span>` })
  abrir.addEventListener('click', () => { window.location.hash = `#placar~${j.id}` })

  frag.append(cabecalho(`comp~${j.ambiente}`), tituloDaPagina(j.nome, `${AMBIENTES.find((a) => a.id === j.ambiente)!.nome} · ${j.formato}`),
    h('div', { cls: 'page comp-page' },
      h('p', { cls: 'comp-objetivo' }, j.objetivo),
      h('div', { cls: 'comp-ficha' }, ...ficha.map(([ico, r, v]) => h('div', null, h('span', { html: svg(ico) }), h('small', null, r), h('strong', null, v)))),
      h('section', { cls: 'bloco vac-card' }, h('h3', null, 'Como jogar'), h('ol', { cls: 'comp-passos' }, ...j.como.map((p) => h('li', null, p)))),
      h('section', { cls: 'comp-pontos' }, h('span', { html: svg(ICO.trofeu) }), h('div', null, h('small', null, 'Pontuação'), h('strong', null, j.pontuacao))),
      h('section', { cls: 'bloco vac-card' }, h('h3', null, 'Ajuste para o seu nível'),
        ...([['Iniciante', j.niveis.iniciante], ['Intermediário', j.niveis.intermediario], ['Avançado', j.niveis.avancado]] as const)
          .map(([n, d]) => h('div', { cls: 'comp-nivel' }, h('span', { cls: `nivel-badge nivel-${n}` }, n), h('p', null, d)))),
      abrir,
    ))
  return frag
}

/* ================== PLACAR ================== */

interface Placar {
  jogoId: string
  nome: string
  nomes: [string, string]
  pts: number
  sets: 1 | 3
  vantagem: boolean
  /** Troca de lado a cada N pontos somados no set (0 = desligado). */
  troca: number
  vale2: string
  pontos: [number, number]
  setsGanhos: [number, number]
  parciais: Array<[number, number]>
  invertido: boolean
  /** null = jogando · 'set' = acabou um set · 'fim' = acabou a partida. */
  pausa: null | 'set' | 'fim'
}

const CHAVE_PLACAR = 'vac-placar'
let pilha: string[] = []

function salvar(p: Placar): void { try { localStorage.setItem(CHAVE_PLACAR, JSON.stringify(p)) } catch { /* sem armazenamento */ } }
function carregar(): Placar | null {
  try { const p = JSON.parse(localStorage.getItem(CHAVE_PLACAR) ?? 'null') as Placar | null; return p && Array.isArray(p.pontos) ? p : null } catch { return null }
}

function trocaPadrao(j?: JogoCompeticao): number {
  if (!j || j.ambiente !== 'areia') return 0
  return j.placar.pts >= 21 ? 7 : 5
}

function novoPlacar(j?: JogoCompeticao, base?: Placar): Placar {
  const p: Placar = {
    jogoId: j?.id ?? '',
    nome: j?.nome ?? 'Placar livre',
    nomes: base?.nomes ?? (j && /1 contra 1|recorde/i.test(j.formato) ? ['Jogador 1', 'Jogador 2'] : ['Time A', 'Time B']),
    pts: j?.placar.pts ?? base?.pts ?? 21,
    sets: j?.placar.sets ?? base?.sets ?? 1,
    vantagem: j ? !j.placar.semVantagem : base?.vantagem ?? true,
    troca: j ? trocaPadrao(j) : base?.troca ?? 0,
    vale2: j?.placar.vale2 ?? '',
    pontos: [0, 0], setsGanhos: [0, 0], parciais: [], invertido: false, pausa: null,
  }
  pilha = []
  salvar(p)
  return p
}

/** No 3º set de uma melhor de 3, o set é mais curto (15), como no vôlei oficial. */
function alvoDoSet(p: Placar): number {
  const setAtual = p.parciais.length + 1
  return p.sets === 3 && setAtual === 3 && p.pts > 15 ? 15 : p.pts
}

function fechouSet(p: Placar): 0 | 1 | null {
  const alvo = alvoDoSet(p)
  for (const t of [0, 1] as const) {
    const o = t === 0 ? 1 : 0
    if (p.pontos[t] >= alvo && (!p.vantagem || p.pontos[t] - p.pontos[o] >= 2)) return t
  }
  return null
}

function precisaTrocar(p: Placar): boolean {
  const soma = p.pontos[0] + p.pontos[1]
  return p.troca > 0 && soma > 0 && soma % p.troca === 0
}

let wakeLock: { release(): Promise<void> } | null = null
async function manterTelaAcesa(): Promise<void> {
  try {
    const nav = navigator as Navigator & { wakeLock?: { request(t: 'screen'): Promise<{ release(): Promise<void> }> } }
    if (nav.wakeLock && !wakeLock) wakeLock = await nav.wakeLock.request('screen')
  } catch { /* sem suporte: segue normal */ }
}
export function liberarTela(): void {
  if (wakeLock) { void wakeLock.release().catch(() => undefined); wakeLock = null }
}
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && window.location.hash.startsWith('#placar')) { wakeLock = null; void manterTelaAcesa() }
})

function vibrar(ms: number | number[]): void { try { navigator.vibrate?.(ms) } catch { /* sem vibração */ } }

export function telaPlacar(extra: string): DocumentFragment {
  if (!estaLiberado(EXTRA_COMPETICAO.id)) return telaBloqueada()
  const jogo = extra ? jogoPorId(extra) : undefined
  let p = carregar()
  if (!p || p.jogoId !== (jogo?.id ?? '')) p = novoPlacar(jogo, p ?? undefined)
  void manterTelaAcesa()

  const raiz = h('div', { cls: 'plc' })
  const frag = document.createDocumentFragment()
  frag.append(raiz)

  const mudar = (fn: (q: Placar) => void): void => {
    pilha.push(JSON.stringify(p)); if (pilha.length > 80) pilha.shift()
    fn(p!); salvar(p!); desenhar()
  }

  const marcar = (t: 0 | 1, n: number): void => {
    if (p!.pausa) return
    mudar((q) => {
      q.pontos[t] = Math.max(0, q.pontos[t] + n)
      const venc = fechouSet(q)
      if (venc !== null) {
        q.setsGanhos[venc]++
        q.parciais.push([q.pontos[0], q.pontos[1]])
        q.pausa = q.setsGanhos[venc] > q.sets / 2 ? 'fim' : 'set'
        vibrar([80, 60, 160])
      } else if (n > 0) vibrar(precisaTrocar(q) ? [60, 40, 60] : 25)
    })
  }

  function lado(t: 0 | 1): HTMLElement {
    const q = p!
    const alvo = alvoDoSet(q)
    const o = t === 0 ? 1 : 0
    const setPoint = !q.pausa && q.pontos[t] >= alvo - 1 && q.pontos[t] >= q.pontos[o] + (q.vantagem ? 1 : 0)
    const area = h('button', { cls: `plc-lado plc-t${t}`, 'aria-label': `Ponto para ${q.nomes[t]}` },
      h('span', { cls: 'plc-nome' }, q.nomes[t]),
      q.sets === 3 ? h('span', { cls: 'plc-sets', 'aria-label': `${q.setsGanhos[t]} sets` }, ...[0, 1].map((k) => h('i', { cls: k < q.setsGanhos[t] ? 'on' : '' }))) : null,
      h('span', { cls: 'plc-num' }, String(q.pontos[t])),
      setPoint ? h('span', { cls: 'plc-setpoint' }, q.sets === 3 && q.setsGanhos[t] === 1 ? 'Match point' : 'Set point') : h('span', { cls: 'plc-toque' }, 'Toque para +1'),
    )
    area.addEventListener('click', () => marcar(t, 1))
    const menos = h('button', { cls: 'plc-mini', 'aria-label': `Tirar ponto de ${q.nomes[t]}`, onclick: () => marcar(t, -1) }, '−1')
    const mais2 = q.vale2 ? h('button', { cls: 'plc-mini plc-mais2', title: q.vale2, 'aria-label': `Mais 2 para ${q.nomes[t]}: ${q.vale2}`, onclick: () => marcar(t, 2) }, '+2') : null
    return h('div', { cls: 'plc-col' }, area, h('div', { cls: 'plc-minis' }, menos, mais2))
  }

  function painelAjustes(): HTMLElement {
    const q = p!
    const nomeA = h('input', { cls: 'plc-input', value: q.nomes[0], maxlength: '14', 'aria-label': 'Nome do primeiro time' })
    const nomeB = h('input', { cls: 'plc-input', value: q.nomes[1], maxlength: '14', 'aria-label': 'Nome do segundo time' })
    const escolha = <T extends string | number>(rotulo: string, opcoes: Array<[T, string]>, atual: T, set: (v: T) => void): HTMLElement =>
      h('div', { cls: 'plc-opcao' }, h('small', null, rotulo), h('div', { cls: 'plc-chips' }, ...opcoes.map(([v, txt]) => {
        const b = h('button', { cls: `plc-chip${v === atual ? ' on' : ''}` }, txt)
        b.addEventListener('click', () => { set(v); b.parentElement!.querySelectorAll('.plc-chip').forEach((c) => c.classList.toggle('on', c === b)) })
        return b
      })))
    const rascunho = { pts: q.pts, sets: q.sets, troca: q.troca, vantagem: q.vantagem }
    const salvarAjustes = h('button', { cls: 'comp-btn comp-btn-sol' }, 'Salvar')
    salvarAjustes.addEventListener('click', () => {
      const mudouRegra = rascunho.pts !== q.pts || rascunho.sets !== q.sets || rascunho.vantagem !== q.vantagem
      mudar((x) => {
        x.nomes = [nomeA.value.trim() || 'Time A', nomeB.value.trim() || 'Time B']
        Object.assign(x, rascunho)
        if (mudouRegra && x.pausa) { x.pausa = null }
      })
      painelAberto = false; desenhar()
    })
    const fechar = h('button', { cls: 'comp-btn' }, 'Cancelar')
    fechar.addEventListener('click', () => { painelAberto = false; desenhar() })
    return h('div', { cls: 'plc-sheet-fundo' }, h('div', { cls: 'plc-sheet', role: 'dialog', 'aria-label': 'Ajustes do placar' },
      h('h3', null, 'Ajustes do placar'),
      h('div', { cls: 'plc-nomes' }, nomeA, nomeB),
      escolha('Pontos por set', [[11, '11'], [15, '15'], [21, '21'], [25, '25']], q.pts, (v) => { rascunho.pts = v }),
      escolha('Sets', [[1, 'Set único'], [3, 'Melhor de 3']] as Array<[1 | 3, string]>, q.sets, (v) => { rascunho.sets = v }),
      escolha('Diferença de 2 pontos', [['s', 'Sim'], ['n', 'Não']], q.vantagem ? 's' : 'n', (v) => { rascunho.vantagem = v === 's' }),
      escolha('Aviso de troca de lado', [[0, 'Desligado'], [5, 'A cada 5'], [7, 'A cada 7']], q.troca, (v) => { rascunho.troca = v }),
      h('div', { cls: 'plc-sheet-acoes' }, fechar, salvarAjustes),
    ))
  }

  function aviso(): HTMLElement | null {
    const q = p!
    if (q.pausa) {
      const ult = q.parciais[q.parciais.length - 1]!
      const venc = ult[0] > ult[1] ? 0 : 1
      const botoes = q.pausa === 'set'
        ? [h('button', { cls: 'comp-btn comp-btn-sol', onclick: () => mudar((x) => { x.pontos = [0, 0]; x.pausa = null; x.invertido = !x.invertido }) }, 'Começar próximo set')]
        : [h('button', { cls: 'comp-btn comp-btn-sol', onclick: () => { const j = jogoPorId(q.jogoId); p = novoPlacar(j, q); p.nomes = q.nomes; salvar(p); desenhar() } }, 'Jogar de novo'),
          h('button', { cls: 'comp-btn', onclick: () => { window.location.hash = q.jogoId ? `#jogo-${q.jogoId}` : '#comp' } }, 'Voltar aos jogos')]
      return h('div', { cls: 'plc-sheet-fundo' }, h('div', { cls: 'plc-sheet plc-resultado', role: 'dialog' },
        h('span', { cls: 'plc-res-ico', html: svg(ICO.trofeu) }),
        h('small', null, q.pausa === 'fim' ? 'Fim de jogo' : `Fim do ${q.parciais.length}º set`),
        h('h3', null, q.pausa === 'fim' ? `${q.nomes[venc]} venceu!` : `Set para ${q.nomes[venc]}`),
        h('div', { cls: 'plc-parciais' }, ...q.parciais.map((s, i) => h('span', null, `${i + 1}º set  ${s[0]} × ${s[1]}`))),
        h('div', { cls: 'plc-sheet-acoes' }, ...botoes),
        h('button', { cls: 'plc-link', onclick: desfazer }, 'Foi engano? Desfazer o último ponto'),
      ))
    }
    if (precisaTrocar(q)) return h('div', { cls: 'plc-troca', role: 'status', html: `${svg(ICO.trocar)}<span>Hora de trocar de lado</span>` })
    return null
  }

  function desfazer(): void {
    const anterior = pilha.pop()
    if (!anterior) return
    p = JSON.parse(anterior) as Placar; salvar(p); desenhar()
  }

  let painelAberto = false
  let confirmarReinicio = false

  function desenhar(): void {
    const q = p!
    const ordem: Array<0 | 1> = q.invertido ? [1, 0] : [0, 1]
    const voltar = h('button', { cls: 'plc-topo-btn', 'aria-label': 'Voltar', html: svg(ICONES.voltar) })
    voltar.addEventListener('click', () => { window.location.hash = q.jogoId ? `#jogo-${q.jogoId}` : '#comp' })
    const setTxt = q.sets === 3 ? `${q.parciais.length + (q.pausa ? 0 : 1)}º set · até ${alvoDoSet(q)}` : `Set até ${q.pts}`
    const reiniciar = h('button', { cls: `plc-acao${confirmarReinicio ? ' alerta' : ''}`, html: `${svg(ICO.reiniciar)}<span>${confirmarReinicio ? 'Confirmar' : 'Zerar'}</span>` })
    reiniciar.addEventListener('click', () => {
      if (!confirmarReinicio) { confirmarReinicio = true; desenhar(); setTimeout(() => { if (confirmarReinicio) { confirmarReinicio = false; desenhar() } }, 3000); return }
      confirmarReinicio = false
      mudar((x) => { x.pontos = [0, 0]; x.setsGanhos = [0, 0]; x.parciais = []; x.pausa = null; x.invertido = false })
    })
    const acao = (ico: string, txt: string, fn: () => void, desabilitado = false): HTMLElement =>
      h('button', { cls: 'plc-acao', disabled: desabilitado, onclick: fn, html: `${svg(ico)}<span>${txt}</span>` })

    const filhos: Array<Node | null> = [
      h('div', { cls: 'plc-topo' }, voltar,
        h('div', { cls: 'plc-topo-txt' }, h('strong', null, q.nome), h('small', null, `${setTxt}${q.vantagem ? ' · 2 de diferença' : ''}`)),
        h('span', { cls: 'plc-topo-btn', 'aria-hidden': 'true' })),
      q.vale2 ? h('p', { cls: 'plc-regra' }, h('b', null, '+2'), ` ${q.vale2}`) : null,
      h('div', { cls: 'plc-campo' }, lado(ordem[0]), lado(ordem[1])),
      q.pausa ? null : aviso(),
      h('div', { cls: 'plc-acoes' },
        acao(ICO.desfazer, 'Desfazer', desfazer, pilha.length === 0),
        acao(ICO.trocar, 'Trocar lado', () => mudar((x) => { x.invertido = !x.invertido })),
        acao(ICO.ajustes, 'Ajustes', () => { painelAberto = true; desenhar() }),
        reiniciar,
      ),
      q.pausa ? aviso() : null,
      painelAberto ? painelAjustes() : null,
    ]
    raiz.replaceChildren(...filhos.filter((f): f is Node => f !== null))
  }

  desenhar()
  return frag
}
