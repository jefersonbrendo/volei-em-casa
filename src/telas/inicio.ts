import { dataLocal, estado } from '../app/estado'
import { CATEGORIAS, GRUPOS_AREIA, ITENS, NIVEIS, SECOES_AREIA, type Categoria, type Item } from '../app/itens'
import { minutosDoTreino } from '../app/tempo'
import { CATEGORIAS_CASA } from '../data/treinoCasa'
import { TREINOS, type TreinoPronto } from '../data/treinos'
import { tituloDaPagina } from '../ui/cabecalho'
import { h, svg } from '../ui/dom'
import { ICONES_APP, iconeDaCategoria, topoDaMarca } from './comum'
import { urlDaPrevia } from './miniatura'
import { abrirBuscaComFoco } from './outras'
import { itensDo } from './treinos'

const CLASSE_CHIP: Record<string, string> = { '': 'chip-all', Iniciante: 'chip-ini', 'Intermediário': 'chip-int', 'Avançado': 'chip-ava' }
const SIGLA_NIVEL: Record<string, string> = { Iniciante: 'ini', 'Intermediário': 'int', 'Avançado': 'ava' }

export const AJUDA_NIVEL: Record<string, string> = {
  Iniciante: 'Está começando agora. Exercícios simples, devagar e com bastante repetição.',
  'Intermediário': 'Já joga e controla a bola. Mais velocidade, deslocamento e combinação de movimentos.',
  'Avançado': 'Joga com frequência. Bola rápida, reação e saltos mais exigentes.',
}

export function rotaDaCategoria(c: Categoria | ''): string {
  return c ? `cat-${CATEGORIAS.indexOf(c)}` : 'cat-todos'
}

/** Chips de nível (Todos, Iniciante, Intermediário, Avançado). A escolha fica guardada no aparelho. */
export function chipsDeNivel(contar: (nivel: string) => number, aoMudar: () => void): HTMLElement {
  const wrap = h('div', { cls: 'level-chips' })
  for (const nivel of ['', ...NIVEIS]) {
    const qtd = contar(nivel)
    const chip = h('button', { cls: `chip ${CLASSE_CHIP[nivel]}${estado.nivel === nivel ? ' active' : ''}`, 'data-val': nivel, html: nivel || 'Todos' })
    if (nivel && qtd === 0) chip.setAttribute('disabled', '')
    chip.addEventListener('click', () => {
      estado.definirNivel(nivel)
      wrap.querySelectorAll<HTMLElement>('.chip').forEach((b) => b.classList.toggle('active', b.dataset.val === nivel))
      aoMudar()
    })
    wrap.append(chip)
  }
  return wrap
}

export function ajudaDoNivel(): HTMLElement {
  if (!estado.nivel) return h('div', { style: 'display:none' })
  return h('div', { cls: 'nivel-ajuda' }, h('span', { cls: 'fs-dot', style: `background:var(--c-${SIGLA_NIVEL[estado.nivel]})` }), h('span', null, AJUDA_NIVEL[estado.nivel]))
}

/* ---------- Treinos ---------- */

/** Exercício que ilustra o treino: o primeiro que não é aquecimento nem alongamento. */
function capaDoTreino(itens: Item[]): Item | undefined {
  return itens.find((i) => i.categoria !== 'Mobilidade' && i.categoria !== 'Aquecimento') ?? itens[0]
}

function imagem(item: Item | undefined, grande: boolean): HTMLElement | null {
  return item ? h('img', { src: urlDaPrevia(item, grande), alt: '', loading: 'lazy', decoding: 'async' }) : null
}

function abrirTreino(t: TreinoPronto): void {
  window.location.hash = `#treino-${t.id}`
}

/* ---------- Exercícios do dia ---------- */

/** Número do dia no fuso do aparelho: muda à meia-noite local. */
function numeroDoDia(): number {
  return Math.floor((Date.now() - new Date().getTimezoneOffset() * 60_000) / 86_400_000)
}

/** Sorteio repetível: o mesmo dia sempre dá os mesmos exercícios. */
function sorteador(semente: number): () => number {
  let s = semente >>> 0
  return () => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4_294_967_296
  }
}

/** Dois exercícios de casa e dois de areia, intercalados, com ilustrações diferentes. Ficam de fora aquecimento e alongamento. */
function exerciciosDoDia(): Item[] {
  const sortear = sorteador(numeroDoDia())
  const usadas = new Set<string>()
  const escolher = (tipo: Item['tipo']): Item[] => {
    const lista = ITENS.filter((i) => i.tipo === tipo && i.categoria !== 'Mobilidade' && i.categoria !== 'Aquecimento')
      .map((i) => [sortear(), i] as const).sort((a, b) => a[0] - b[0]).map(([, i]) => i)
    const achados: Item[] = []
    for (const i of lista) {
      const img = urlDaPrevia(i)
      if (usadas.has(img)) continue
      usadas.add(img); achados.push(i)
      if (achados.length === 2) break
    }
    return achados
  }
  const casa = escolher('casa')
  const areia = escolher('areia')
  return [casa[0], areia[0], casa[1], areia[1]].filter((i): i is Item => !!i)
}

function cartaoDoDia(item: Item): HTMLElement {
  const cartao = h('button', { cls: 'hero-treino', 'aria-label': `Exercício do dia: ${item.nome}` },
    imagem(item, true),
    h('span', { cls: 'hero-sombra' }),
    h('span', { cls: 'hero-corpo' },
      h('span', { cls: 'hero-selo' }, item.tipo === 'casa' ? 'Do dia · em casa' : 'Do dia · na areia'),
      h('span', { cls: 'hero-nome' }, item.nome),
      h('span', { cls: 'hero-rodape' },
        h('span', { cls: 'hero-meta' }, `${item.categoria} · ${item.nivel}`),
        h('span', { cls: 'hero-cta', html: `${svg(ICONES_APP.play)} Treinar` }),
      ),
    ),
  )
  cartao.addEventListener('click', () => { window.location.hash = `#ex-${item.id}~home` })
  return cartao
}

/** Carrossel do topo, com bolinhas que mostram em qual cartão a pessoa está. */
function carrosselDoDia(): HTMLElement {
  const itens = exerciciosDoDia()
  const trilho = h('div', { cls: 'hero-carrossel' }, ...itens.map(cartaoDoDia))
  const pontos = h('div', { cls: 'hero-pontos', 'aria-hidden': 'true' }, ...itens.map((_, n) => h('i', { cls: n === 0 ? 'on' : '' })))
  trilho.addEventListener('scroll', () => {
    const primeiro = trilho.firstElementChild as HTMLElement | null
    if (!primeiro) return
    const atual = Math.round(trilho.scrollLeft / (primeiro.offsetWidth + 10))
    pontos.querySelectorAll('i').forEach((p, n) => p.classList.toggle('on', n === atual))
  }, { passive: true })
  return h('div', null, trilho, pontos)
}

/* ---------- Sequência da semana ---------- */

const ICONE_CHECK = '<polyline points="20 6 9 17 4 12"/>'

/** Dias seguidos com treino até hoje. Se hoje ainda não treinou, a sequência de ontem continua valendo. */
function diasSeguidos(): number {
  const d = new Date()
  if (!estado.treinouEm(dataLocal(d))) d.setDate(d.getDate() - 1)
  let n = 0
  while (estado.treinouEm(dataLocal(d))) { n++; d.setDate(d.getDate() - 1) }
  return n
}

function blocoSemana(): HTMLElement {
  const hoje = new Date()
  const segunda = new Date(hoje)
  segunda.setDate(hoje.getDate() - ((hoje.getDay() + 6) % 7))
  const dias = [...'STQQSSD'].map((letra, k) => {
    const d = new Date(segunda)
    d.setDate(segunda.getDate() + k)
    const feito = estado.treinouEm(dataLocal(d))
    const ehHoje = dataLocal(d) === dataLocal(hoje)
    return h('span', { cls: `semana-dia${ehHoje ? ' hoje' : ''}` },
      h('span', { cls: 'semana-letra' }, letra),
      h('span', { cls: `semana-marca${feito ? ' feito' : ''}`, html: feito ? svg(ICONE_CHECK) : '' }),
    )
  })
  const n = diasSeguidos()
  return h('section', { cls: 'semana' },
    h('div', { cls: 'semana-topo' },
      h('strong', null, 'Esta semana'),
      h('span', { cls: `semana-seq${n ? '' : ' zerada'}`, html: svg(iconeDaCategoria('Aquecimento')) }, textoDaSequencia(n)),
    ),
    h('div', { cls: 'semana-dias' }, ...dias),
    n ? null : h('p', { cls: 'semana-dica' }, 'Conclua um exercício para marcar o dia de hoje.'),
  )
}

function textoDaSequencia(n: number): string {
  if (!n) return 'Comece hoje'
  return n === 1 ? '1 dia seguido' : `${n} dias seguidos`
}

function cartaoComCapa(t: TreinoPronto): HTMLElement {
  const itens = itensDo(t)
  const cartao = h('button', { cls: 'treino-capa' },
    h('span', { cls: 'treino-capa-img' }, imagem(capaDoTreino(itens), true), h('span', { cls: `capa-nivel cn-${SIGLA_NIVEL[t.nivel]}` }, t.nivel)),
    h('span', { cls: 'treino-capa-corpo' },
      h('span', { cls: 'treino-capa-nome' }, t.nome),
      h('span', { cls: 'treino-capa-meta', html: `${svg(ICONES_APP.relogio)} Cerca de ${minutosDoTreino(itens)} min` }),
    ),
  )
  cartao.addEventListener('click', () => abrirTreino(t))
  return cartao
}

/* ---------- Nível ---------- */

const NIVEL_CARTAO: Array<[string, string]> = [['Iniciante', 'Começando agora'], ['Intermediário', 'Já joga'], ['Avançado', 'Joga sempre']]

/** Três cartões coloridos. Tocar no escolhido de novo volta a mostrar todos os níveis. */
function cartoesDeNivel(aoMudar: () => void): HTMLElement {
  const wrap = h('div', { cls: `nivel-cards${estado.nivel ? ' tem-escolha' : ''}` })
  NIVEL_CARTAO.forEach(([nivel, desc], n) => {
    const sinal = h('span', { cls: 'nivel-sinal', 'aria-hidden': 'true' }, ...[0, 1, 2].map((k) => h('i', { cls: k <= n ? 'on' : '' })))
    const cartao = h('button', { cls: `nivel-card nc-${SIGLA_NIVEL[nivel]}${estado.nivel === nivel ? ' active' : ''}`, 'data-val': nivel, 'aria-pressed': String(estado.nivel === nivel) },
      sinal, h('strong', null, nivel), h('small', null, desc))
    cartao.addEventListener('click', () => {
      const novo = estado.nivel === nivel ? '' : nivel
      estado.definirNivel(novo)
      wrap.classList.toggle('tem-escolha', !!novo)
      wrap.querySelectorAll<HTMLElement>('.nivel-card').forEach((b) => {
        b.classList.toggle('active', b.dataset.val === novo)
        b.setAttribute('aria-pressed', String(b.dataset.val === novo))
      })
      aoMudar()
    })
    wrap.append(cartao)
  })
  return wrap
}

/* ---------- Categorias ---------- */

function barraDeNiveis(categoria: Categoria): string {
  const todos = ITENS.filter((i) => i.categoria === categoria)
  const t = todos.length || 1
  const c = (n: string): number => todos.filter((i) => i.nivel === n).length
  return `<div class="nivel-barra"><i class="nb-ini" style="width:${(c('Iniciante') / t) * 100}%"></i><i class="nb-int" style="width:${(c('Intermediário') / t) * 100}%"></i><i class="nb-ava" style="width:${(c('Avançado') / t) * 100}%"></i></div>`
}

function tileDaCategoria(c: Categoria): HTMLElement {
  const qtd = ITENS.filter((i) => i.categoria === c && (!estado.nivel || i.nivel === estado.nivel)).length
  const tile = h('button', { cls: `cat-tile${qtd ? '' : ' vazio'}` },
    h('span', { cls: 'cat-tile-img' }, imagem(ITENS.find((i) => i.categoria === c), false), h('span', { cls: 'cat-tile-ico', html: svg(iconeDaCategoria(c)) })),
    h('span', { cls: 'cat-tile-corpo', html: barraDeNiveis(c) }),
  )
  tile.querySelector('.cat-tile-corpo')!.prepend(h('span', { cls: 'cat-tile-nome' }, c))
  tile.addEventListener('click', () => { window.location.hash = `#${rotaDaCategoria(c)}` })
  return tile
}

/** Categorias de casa e, abaixo, a quadra de areia agrupada. */
function blocoCategorias(): HTMLElement {
  const wrap = h('div', null)
  wrap.append(
    h('h2', { cls: 'bloco-titulo' }, 'Em casa'),
    h('p', { cls: 'bloco-sub' }, 'Para fazer sozinho, com ou sem bola.'),
    h('div', { cls: 'cat-tiles' }, ...CATEGORIAS_CASA.map(tileDaCategoria)),
  )
  wrap.append(
    h('h2', { cls: 'bloco-titulo vac-na-quadra' }, 'Na quadra de areia'),
    h('p', { cls: 'bloco-sub' }, 'Com o desenho da quadra, para treinar sozinho, em dupla ou com os amigos.'),
  )
  for (const g of GRUPOS_AREIA) {
    wrap.append(
      h('h3', { cls: 'bloco-titulo vac-grupo-titulo' }, g.titulo),
      h('p', { cls: 'bloco-sub' }, g.sub),
      h('div', { cls: 'cat-tiles' }, ...g.secoes.map((n) => tileDaCategoria(SECOES_AREIA[n - 1]!.nome))),
    )
  }
  return wrap
}

export function telaInicio(): DocumentFragment {
  const frag = document.createDocumentFragment()
  frag.append(topoDaMarca(), tituloDaPagina('Bora treinar', 'Escolha um treino, um nível ou uma categoria'))
  const page = h('div', { cls: 'page page-home' })

  const busca = h('button', { cls: 'busca-atalho', html: `${svg(ICONES_APP.busca)}<span>O que você quer treinar hoje?</span>` })
  busca.addEventListener('click', abrirBuscaComFoco)
  page.append(busca, carrosselDoDia(), blocoSemana())

  const verTodos = h('button', { cls: 'bloco-link' }, 'Ver todos')
  verTodos.addEventListener('click', () => { window.location.hash = '#treinos' })
  page.append(
    h('div', { cls: 'bloco-topo' }, h('h2', { cls: 'bloco-titulo' }, 'Treinos prontos'), verTodos),
    h('div', { cls: 'vac-treinos carrossel' }, ...TREINOS.map(cartaoComCapa)),
  )

  let ajuda = ajudaDoNivel()
  let categorias = blocoCategorias()
  const cartoes = cartoesDeNivel(() => {
    const novaAjuda = ajudaDoNivel(); ajuda.replaceWith(novaAjuda); ajuda = novaAjuda
    const novas = blocoCategorias(); categorias.replaceWith(novas); categorias = novas
  })
  page.append(
    h('h2', { cls: 'bloco-titulo' }, 'Seu nível'),
    h('p', { cls: 'bloco-sub' }, 'Toque para ver só os exercícios do seu nível.'),
    cartoes, ajuda, categorias,
  )

  frag.append(page)
  return frag
}
