import { estado } from '../app/estado'
import { CATEGORIAS, GRUPOS_AREIA, ITENS, NIVEIS, SECOES_AREIA, type Categoria } from '../app/itens'
import { CATEGORIAS_CASA } from '../data/treinoCasa'
import { TREINOS } from '../data/treinos'
import { tituloDaPagina } from '../ui/cabecalho'
import { h, svg } from '../ui/dom'
import { ICONES_APP, iconeDaCategoria, topoDaMarca } from './comum'
import { cartaoDoTreino } from './treinos'

const CLASSE_CHIP: Record<string, string> = { '': 'chip-all', Iniciante: 'chip-ini', 'Intermediário': 'chip-int', 'Avançado': 'chip-ava' }

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
  return h('div', { cls: 'nivel-ajuda' }, h('span', { cls: 'fs-dot', style: `background:var(--c-${estado.nivel === 'Iniciante' ? 'ini' : estado.nivel === 'Avançado' ? 'ava' : 'int'})` }), h('span', null, AJUDA_NIVEL[estado.nivel]))
}

function barraDeNiveis(categoria: Categoria): string {
  const todos = ITENS.filter((i) => i.categoria === categoria)
  const t = todos.length || 1
  const c = (n: string): number => todos.filter((i) => i.nivel === n).length
  return `<div class="nivel-barra"><i class="nb-ini" style="width:${(c('Iniciante') / t) * 100}%"></i><i class="nb-int" style="width:${(c('Intermediário') / t) * 100}%"></i><i class="nb-ava" style="width:${(c('Avançado') / t) * 100}%"></i></div>`
}

function tileDaCategoria(c: Categoria): HTMLElement {
  const qtd = ITENS.filter((i) => i.categoria === c && (!estado.nivel || i.nivel === estado.nivel)).length
  const tile = h('button', { cls: `sec-tile${qtd ? '' : ' vazio'}` })
  tile.innerHTML = `
    <span class="at-ico">${svg(iconeDaCategoria(c))}</span>
    <span class="sec-tile-nome"></span>${barraDeNiveis(c)}`
  tile.querySelector(".sec-tile-nome")!.textContent = c
  tile.addEventListener('click', () => { window.location.hash = `#${rotaDaCategoria(c)}` })
  return tile
}

/** Categorias de casa (6 blocos) e, abaixo, a quadra de areia agrupada como no Código da Areia. */
function blocoCategorias(): HTMLElement {
  const wrap = h('div', null)
  wrap.append(
    h('h2', { cls: 'bloco-titulo' }, 'Em casa'),
    h('p', { cls: 'bloco-sub' }, 'Para fazer sozinho, com ou sem bola.'),
    h('div', { cls: 'sec-tiles' }, ...CATEGORIAS_CASA.map(tileDaCategoria)),
  )
  wrap.append(
    h('h2', { cls: 'bloco-titulo vac-na-quadra' }, 'Na quadra de areia'),
    h('p', { cls: 'bloco-sub' }, 'Com o desenho da quadra, para treinar sozinho, em dupla ou com os amigos.'),
  )
  for (const g of GRUPOS_AREIA) {
    wrap.append(
      h('h3', { cls: 'bloco-titulo vac-grupo-titulo' }, g.titulo),
      h('p', { cls: 'bloco-sub' }, g.sub),
      h('div', { cls: 'sec-tiles' }, ...g.secoes.map((n) => tileDaCategoria(SECOES_AREIA[n - 1]!.nome))),
    )
  }
  return wrap
}

export function telaInicio(): DocumentFragment {
  const frag = document.createDocumentFragment()
  frag.append(topoDaMarca(), tituloDaPagina('Bora treinar', 'Escolha um treino, um nível ou uma categoria'))
  const page = h('div', { cls: 'page page-home' })

  // Busca
  const busca = h('div', { cls: 'search-wrap', html: svg(ICONES_APP.busca) })
  const campo = h('input', { type: 'search', cls: 'search-input', placeholder: 'Buscar exercício, material, objetivo...', 'aria-label': 'Buscar exercício' })
  campo.addEventListener('input', () => {
    const q = campo.value.trim()
    if (q) window.location.hash = `#buscar~${encodeURIComponent(q)}`
  })
  busca.append(campo)
  page.append(busca)

  // Treinos prontos
  const verTodos = h('button', { cls: 'bloco-link' }, 'Ver todos')
  verTodos.addEventListener('click', () => { window.location.hash = '#treinos' })
  page.append(
    h('div', { cls: 'bloco-topo' }, h('h2', { cls: 'bloco-titulo' }, 'Treinos prontos'), verTodos),
    h('div', { cls: 'vac-treinos carrossel' }, ...TREINOS.slice(0, 3).map(cartaoDoTreino)),
  )

  // Nível + categorias
  page.append(h('h2', { cls: 'bloco-titulo' }, 'Qual é o seu nível?'))
  let ajuda = ajudaDoNivel()
  let categorias = blocoCategorias()
  const chips = chipsDeNivel(
    (n) => ITENS.filter((i) => !n || i.nivel === n).length,
    () => {
      const novaAjuda = ajudaDoNivel(); ajuda.replaceWith(novaAjuda); ajuda = novaAjuda
      const novas = blocoCategorias(); categorias.replaceWith(novas); categorias = novas
    },
  )
  page.append(chips, ajuda)
  page.append(categorias)

  frag.append(page)
  return frag
}
