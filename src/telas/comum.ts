import { ChipVolume } from '../components/treinoCasa/ChipVolume'
import { IconesMaterial } from '../components/treinoCasa/IconesMaterial'
import { SilhuetaRegioes } from '../components/treinoCasa/SilhuetaRegioes'
import { estado } from '../app/estado'
import type { Item } from '../app/itens'
import { h, svg, ICONES, ICONES_CATEGORIA } from '../ui/dom'

export const NOME_APP = 'VÔLEI DE AREIA'
export const SUB_APP = 'EM CASA · TREINE SOZINHO'

/** Ícones extras das telas deste app. */
export const ICONES_APP = {
  coracao: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  calendario: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  corpo: '<circle cx="12" cy="4.5" r="2"/><path d="M12 7v7M8 10h8M12 14l-3 7M12 14l3 7"/>',
  busca: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  areia: '<rect x="3" y="5" width="18" height="14" rx="1"/><line x1="12" y1="3" x2="12" y2="21"/>',
  sol: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
  lua: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  bola: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20M2 12h20"/><path d="M4.5 4.5c4 4 11 4 15 0M4.5 19.5c4-4 11-4 15 0"/>',
  play: '<polygon points="6 4 20 12 6 20 6 4"/>',
  relogio: ICONES.relogio,
} as const

export const QUADRA_SVG = '<svg class="quadra-bg" viewBox="0 0 320 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect x="20" y="20" width="280" height="120" rx="2"/><line x1="160" y1="10" x2="160" y2="150"/><circle cx="160" cy="10" r="3"/><circle cx="160" cy="150" r="3"/></svg>'

export function iconeDaCategoria(categoria: string): string {
  return categoria === 'Na areia' ? ICONES_APP.areia : (ICONES_CATEGORIA[categoria] ?? ICONES_APP.bola)
}

/* ---------- TEMA ---------- */
export function aplicarTema(): void {
  if (estado.tema) document.documentElement.setAttribute('data-theme', estado.tema)
  else document.documentElement.removeAttribute('data-theme')
}
function temaEscuro(): boolean {
  if (estado.tema) return estado.tema === 'dark'
  return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches
}
function alternarTema(): void {
  estado.definirTema(temaEscuro() ? 'light' : 'dark')
  aplicarTema()
}

/** Barra de topo da tela inicial: marca + botão de tema. */
export function topoDaMarca(): HTMLElement {
  const marca = h('div', { cls: 'hdr-brand-box' },
    h('div', { cls: 'hdr-brand-logo', html: svg(ICONES_APP.bola) }),
    h('div', { cls: 'hdr-brand-text' }, h('span', { cls: 'hdr-brand-title' }, NOME_APP), h('span', { cls: 'hdr-brand-sub' }, SUB_APP)),
  )
  const btnTema = h('button', { cls: 'hdr-btn theme-btn', title: 'Alternar tema', 'aria-label': 'Alternar tema' })
  const pintar = (): void => { btnTema.innerHTML = svg(temaEscuro() ? ICONES_APP.sol : ICONES_APP.lua) }
  pintar()
  btnTema.addEventListener('click', () => { alternarTema(); pintar() })
  return h('header', { cls: 'top-bar top-bar-home' }, marca, h('div', { cls: 'hdr-actions-group' }, btnTema))
}

/** Barra de topo simples das abas (Buscar, Treinos, Salvos, Como usar). */
export function topoSimples(titulo: string, sub?: string): HTMLElement {
  return h('header', { cls: 'top-bar top-bar-secao' },
    h('div', { cls: 'hdr-ctx-box' }, h('span', { cls: 'hdr-ctx-title' }, titulo), sub ? h('span', { cls: 'hdr-ctx-sub' }, h('span', null, sub)) : null),
  )
}

/* ---------- LISTAS ---------- */
export function selo(nivel: string): HTMLElement {
  return h('span', { cls: `nivel-badge nivel-${nivel}` }, nivel)
}

/** Linha de exercício (mesmo visual do Código da Areia). */
export function linhaDoItem(item: Item, rotulo: string, voltar?: string): HTMLElement {
  const miniatura = item.tipo === 'areia'
    ? h('figure', { cls: 'foto r-1x1 mini thumb-diag' }, h('img', { src: `/gem/diagrams/${String(item.ex.numero).padStart(3, '0')}.png`, alt: '', loading: 'lazy' }))
    : h('figure', { cls: 'foto r-1x1 mini thumb-diag sem-img cda-thumb', html: svg(iconeDaCategoria(item.categoria)) })

  const visual = item.tipo === 'casa'
    ? h('div', { cls: 'cda-card-visual' }, IconesMaterial(item.ex.material, { comNome: false }), ChipVolume(item.ex.volume), SilhuetaRegioes(item.ex.regioes, { altura: 32 }))
    : h('div', { cls: 'ex-row-mat' }, `${item.ex.tempo} · ${item.ex.material}`)

  const corpo = h('div', { cls: 'ex-row-body' },
    h('div', { cls: 'ex-ordem' }, rotulo),
    h('div', { cls: 'ex-row-nome' }, item.nome),
    h('div', { cls: 'ex-row-meta' }, selo(item.nivel), estado.ehSalvo(item.id) ? h('span', { cls: 'ex-row-salvo', html: svg(ICONES_APP.coracao) }) : null),
    visual,
  )
  const botao = h('button', { cls: 'ex-row', 'data-id': item.id }, miniatura, corpo, h('span', { cls: 'chev', html: svg(ICONES.avancar) }))
  botao.addEventListener('click', () => { window.location.hash = `#ex-${item.id}${voltar ? `~${voltar}` : ''}` })
  return botao
}

export function vazio(texto: string): HTMLElement {
  return h('div', { cls: 'search-empty' }, texto)
}
