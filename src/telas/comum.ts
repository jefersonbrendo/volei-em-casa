import { ChipVolume } from '../components/treinoCasa/ChipVolume'
import { IconesMaterial } from '../components/treinoCasa/IconesMaterial'
import { SilhuetaRegioes } from '../components/treinoCasa/SilhuetaRegioes'
import { estado } from '../app/estado'
import type { Item } from '../app/itens'
import { tituloDaPagina } from '../ui/cabecalho'
import { h, svg, ICONES, ICONES_CATEGORIA } from '../ui/dom'
import { miniaturaDoItem } from './miniatura'

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
  check: '<polyline points="20 6 9 17 4 12"/>',
  relogio: ICONES.relogio,
} as const

export const QUADRA_SVG = '<svg class="quadra-bg" viewBox="0 0 320 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect x="20" y="20" width="280" height="120" rx="2"/><line x1="160" y1="10" x2="160" y2="150"/><circle cx="160" cy="10" r="3"/><circle cx="160" cy="150" r="3"/></svg>'

/** Ícones das seções da quadra (os mesmos do Código da Areia). */
const ICONES_SECAO: Record<string, string> = {
  'Aquecimento': '<path d="M12 22c4 0 7-2.7 7-7 0-3.5-2.3-5.6-3.6-7.6-.4 2-1.4 3.2-2.6 3.6.4-3.4-1.2-6.5-4-8 .3 3.2-1.3 5.2-2.8 7C4.8 11.6 5 13 5 15c0 4.3 3 7 7 7z"/><path d="M12 22c-1.7 0-3-1.3-3-3.2 0-1.8 1.4-2.8 2.2-4 .3 1 .9 1.6 1.6 1.8.8-1.2 2.2-.2 2.2 2.2 0 1.9-1.3 3.2-3 3.2z"/>',
  'Deslocamento': '<path d="M5 18c-1.7 0-2.5-1.6-2-3.6l1-4C4.5 8.6 6 8 7 8.5s1.3 1.7 1 3.2l-1 4.3c-.3 1.3-1 2-2 2z"/><path d="M15 12c-1 0-1.7-.7-2-2l-1-4.3c-.3-1.5 0-2.7 1-3.2s2.5.1 3 1.9l1 4c.5 2-.3 3.6-2 3.6z"/><path d="M18 21h4m-2-2 2 2-2 2"/>',
  'Saque': '<circle cx="12" cy="12" r="10"/><path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4"/><path d="M12 12a12.6 12.6 0 0 1-8.7 5"/><path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5"/><path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"/><path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"/>',
  'Recepção': '<path d="M4 14l8 6 8-6"/><path d="M4 9l8 6 8-6"/><circle cx="12" cy="4" r="2"/>',
  'Levantamento de manchete': '<path d="M3 17h18"/><path d="M6 17l3-4h6l3 4"/><circle cx="12" cy="6" r="3"/><path d="M12 9v2"/>',
  'Levantamento de toque': '<circle cx="12" cy="5" r="3"/><path d="M6 21v-5c0-1 .5-2 1.5-2.5L10 12"/><path d="M18 21v-5c0-1-.5-2-1.5-2.5L14 12"/><path d="M9 11l3-2 3 2"/>',
  'Ataque': '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>',
  'Bloqueio': '<path d="M2 20h20"/><path d="M12 20V4"/><path d="M7 4v6a2 2 0 0 0 2 2"/><path d="M17 4v6a2 2 0 0 1-2 2"/><path d="M5 6h4M15 6h4"/>',
  'Defesa': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
  'Side-out': '<path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/>',
  'Comunicação': '<path d="M3 11v2a1 1 0 0 0 1 1h3l6 5V5L7 10H4a1 1 0 0 0-1 1z"/><path d="M17 8.5a5 5 0 0 1 0 7"/><path d="M19.5 6a8.5 8.5 0 0 1 0 12"/>',
  'Tática': '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8l3 3m0-3-3 3"/><circle cx="15.5" cy="15.5" r="2"/><path d="M11 14c1-3 2-4 4-5"/>',
  'Jogos reduzidos': '<rect x="2" y="5" width="20" height="14" rx="1.5"/><path d="M12 5v14"/><path d="M2 12h20"/>',
  'Condicionamento': '<path d="M6.5 6.5v11M17.5 6.5v11"/><path d="M3 9v6M21 9v6"/><path d="M6.5 12h11"/>',
  'Sozinho ou em dupla': '<circle cx="9" cy="7" r="3.5"/><path d="M2.5 21v-1.5A5.5 5.5 0 0 1 8 14h2a5.5 5.5 0 0 1 5.5 5.5V21"/><circle cx="18" cy="9" r="2.5"/><path d="M17 14.2a4.5 4.5 0 0 1 4.5 4.5V21"/>',
}

export function iconeDaCategoria(categoria: string): string {
  return ICONES_SECAO[categoria] ?? ICONES_CATEGORIA[categoria] ?? ICONES_APP.bola
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

/** Barra de topo da tela inicial: logo à esquerda, marca no centro e botão de tema à direita. */
export function topoDaMarca(): HTMLElement {
  const marca = h('div', { cls: 'hdr-brand-box' },
    h('div', { cls: 'hdr-brand-text' }, h('span', { cls: 'hdr-brand-title' }, 'Código da ', h('span', { cls: 'hdr-brand-destaque' }, 'Areia'))),
  )
  const btnTema = h('button', { cls: 'hdr-btn theme-btn', title: 'Alternar tema', 'aria-label': 'Alternar tema' })
  const pintar = (): void => { btnTema.innerHTML = svg(temaEscuro() ? ICONES_APP.sol : ICONES_APP.lua) }
  pintar()
  btnTema.addEventListener('click', () => { alternarTema(); pintar() })
  const logo = h('img', { cls: 'hdr-brand-logo', src: '/logo.webp', alt: '' })
  return h('header', { cls: 'top-bar top-bar-home' }, logo, marca, h('div', { cls: 'hdr-actions-group' }, btnTema))
}

/** Topo das abas (Buscar, Treinos, Salvos, Como usar): header da marca e o título grande da página. */
export function topoSimples(titulo: string, sub?: string): DocumentFragment {
  const frag = document.createDocumentFragment()
  frag.append(topoDaMarca(), tituloDaPagina(titulo, sub))
  return frag
}

/* ---------- LISTAS ---------- */
export function selo(nivel: string): HTMLElement {
  return h('span', { cls: `nivel-badge nivel-${nivel}` }, nivel)
}

/** Linha de exercício (mesmo visual do Código da Areia). */
export function linhaDoItem(item: Item, rotulo: string, voltar?: string): HTMLElement {
  const miniatura = miniaturaDoItem(item)

  const visual = item.tipo === 'casa'
    ? h('div', { cls: 'cda-card-visual' }, IconesMaterial(item.ex.material, { comNome: false }), ChipVolume(item.ex.volume), SilhuetaRegioes(item.ex.regioes, { altura: 32 }))
    : h('div', { cls: 'ex-row-mat' }, `${item.ex.jogadores.split(' (')[0]} · ${item.ex.tempo.split(' (')[0].replace(/minutos?/, 'min')}`)

  const corpo = h('div', { cls: 'ex-row-body' },
    rotulo ? h('div', { cls: 'ex-ordem' }, rotulo) : null,
    h('div', { cls: 'ex-row-nome' }, item.nome),
    h('div', { cls: 'ex-row-meta' }, selo(item.nivel),
      estado.ehFeitoHoje(item.id) ? h('span', { cls: 'ex-row-feito', html: `${svg(ICONES_APP.check)} Feito hoje` }) : null,
      estado.ehSalvo(item.id) ? h('span', { cls: 'ex-row-salvo', html: svg(ICONES_APP.coracao) }) : null),
    visual,
  )
  const botao = h('button', { cls: 'ex-row', 'data-id': item.id }, miniatura, corpo, h('span', { cls: 'chev', html: svg(ICONES.avancar) }))
  botao.addEventListener('click', () => { window.location.hash = `#ex-${item.id}${voltar ? `~${voltar}` : ''}` })
  return botao
}

export function vazio(texto: string): HTMLElement {
  return h('div', { cls: 'search-empty' }, texto)
}
