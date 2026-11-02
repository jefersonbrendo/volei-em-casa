import { estado } from '../app/estado'
import { ABREV_CATEGORIA, CATEGORIAS, COR_CATEGORIA, GRUPOS_AREIA, ITENS, NIVEIS, SECOES_AREIA, type Categoria } from '../app/itens'
import { CATEGORIAS_CASA } from '../data/treinoCasa'
import { TREINOS } from '../data/treinos'
import { h, svg, ICONES } from '../ui/dom'
import { ICONES_APP, QUADRA_SVG, iconeDaCategoria, topoDaMarca } from './comum'
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
    const chip = h('button', { cls: `chip ${CLASSE_CHIP[nivel]}${estado.nivel === nivel ? ' active' : ''}`, 'data-val': nivel, html: `${nivel || 'Todos'}<span class="chip-count">${qtd}</span>` })
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
  const tile = h('button', { cls: `sec-tile ${COR_CATEGORIA[c]}${qtd ? '' : ' vazio'}` })
  tile.innerHTML = `
    <div class="sec-tile-top">${QUADRA_SVG}<svg class="sec-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconeDaCategoria(c)}</svg><span class="sec-abrev">${ABREV_CATEGORIA[c]}</span></div>
    <div class="sec-tile-body"><span class="sec-tile-nome"></span>${barraDeNiveis(c)}</div>`
  tile.querySelector(".sec-tile-nome")!.textContent = c
  tile.addEventListener('click', () => { window.location.hash = `#${rotaDaCategoria(c)}` })
  return tile
}

/** Categorias de casa (6 blocos) e, abaixo, a quadra de areia agrupada como no Código da Areia. */
function blocoCategorias(): HTMLElement {
  const wrap = h('div', null)
  const totalCasa = ITENS.filter((i) => i.tipo === 'casa').length
  const totalAreia = ITENS.filter((i) => i.tipo === 'areia').length
  wrap.append(
    h('h2', { cls: 'bloco-titulo' }, 'Em casa'),
    h('p', { cls: 'bloco-sub' }, `${totalCasa} exercícios para fazer sozinho, com ou sem bola.`),
    h('div', { cls: 'sec-tiles' }, ...CATEGORIAS_CASA.map(tileDaCategoria)),
  )
  const intro = h('div', { cls: 'vac-areia-intro', id: 'na-quadra' })
  intro.innerHTML = `
    ${QUADRA_SVG}
    <span class="vac-areia-selo">NA QUADRA DE AREIA</span>
    <h2 class="vac-areia-titulo">Para quem já joga</h2>
    <p class="vac-areia-txt"></p>`
  intro.querySelector('.vac-areia-txt')!.textContent = `${totalAreia} exercícios do Código da Areia com o desenho da quadra, para treinar sozinho, em dupla ou com os amigos.`
  wrap.append(intro)
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
  frag.append(topoDaMarca())
  const page = h('div', { cls: 'page page-home' })

  const hero = h('div', { cls: 'hero' })
  hero.innerHTML = `
    <div class="banner">
      ${QUADRA_SVG}
      <div class="banner-txt">
        <h2 class="banner-title">Treine vôlei de areia sozinho</h2>
        <p>${ITENS.filter((i) => i.tipo === 'casa').length} exercícios para fazer em casa e ${ITENS.filter((i) => i.tipo === 'areia').length} para a quadra de areia, com passo a passo, correção e variações.</p>
        <button class="banner-cta" data-go="treino-parede-1">Começar o primeiro treino ${svg(ICONES.avancar)}</button>
      </div>
    </div>
    <ol class="passos">
      <li><b>1</b>Escolha um treino pronto ou o que quer treinar</li>
      <li><b>2</b>Filtre pelo seu nível e pelo que tem em casa</li>
      <li><b>3</b>Siga o passo a passo e aumente a dificuldade</li>
    </ol>`
  hero.querySelector<HTMLElement>('[data-go]')!.addEventListener('click', () => { window.location.hash = '#treino-parede-1' })
  page.append(hero)

  // Busca
  const busca = h('div', { cls: 'search-wrap', html: svg(ICONES_APP.busca) })
  const campo = h('input', { type: 'search', cls: 'search-input', placeholder: 'Buscar exercício, material, objetivo...', 'aria-label': 'Buscar exercício' })
  campo.addEventListener('input', () => {
    const q = campo.value.trim()
    if (q) window.location.hash = `#buscar~${encodeURIComponent(q)}`
  })
  busca.append(campo)
  page.append(busca)

  // Atalhos
  const atalhos = h('div', { cls: 'atalhos' })
  const lista: Array<[string, string, string, string]> = [
    ['treinos', 'at-azul', ICONES_APP.calendario, 'Treinos prontos'],
    ['cat-todos~corpo', 'at-ceu', ICONES_APP.corpo, 'Sem material nenhum'],
    ['na-quadra', 'at-coral', ICONES_APP.areia, 'Na quadra de areia'],
  ]
  for (const [rota, cor, icone, rotulo] of lista) {
    const b = h('button', { cls: 'atalho', html: `<span class="at-ico ${cor}">${svg(icone)}</span><span class="at-label"></span>` })
    b.querySelector('.at-label')!.textContent = rotulo
    b.addEventListener('click', () => {
      if (rota === 'na-quadra') { document.getElementById('na-quadra')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); return }
      window.location.hash = `#${rota}`
    })
    atalhos.append(b)
  }
  page.append(atalhos)

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

  // Treinos prontos
  page.append(
    h('h2', { cls: 'bloco-titulo' }, 'Treinos prontos'),
    h('p', { cls: 'bloco-sub' }, 'Sequências de exercícios para fazer do começo ao fim.'),
    h('div', { cls: 'vac-treinos' }, ...TREINOS.slice(0, 3).map(cartaoDoTreino)),
  )
  const verTodos = h('button', { cls: 'vac-ver-todos' }, `Ver os ${TREINOS.length} treinos prontos`)
  verTodos.addEventListener('click', () => { window.location.hash = '#treinos' })
  page.append(verTodos)

  frag.append(page)
  return frag
}
