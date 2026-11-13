import { h, svg, ICONES } from './dom'
import { botaoInstalar } from './instalar'

/** Barra de topo das telas internas: voltar à esquerda e a marca no centro, como na tela inicial. */
export function cabecalho(voltarPara: string): HTMLElement {
  const voltar = h('button', { cls: 'hdr-btn hdr-voltar', title: 'Voltar', 'aria-label': 'Voltar', onclick: () => { window.location.hash = `#${voltarPara}` } })
  voltar.innerHTML = svg(ICONES.voltar)
  const marca = h('div', { cls: 'hdr-brand-box' },
    h('img', { cls: 'hdr-brand-logo-mini', src: '/logo.webp', alt: '' }),
    h('span', { cls: 'hdr-brand-title' }, 'Código da ', h('span', { cls: 'hdr-brand-destaque' }, 'Areia')),
  )
  const instalar = botaoInstalar()
  return h('header', { cls: 'top-bar top-bar-home' }, voltar, marca, instalar ? h('div', { cls: 'hdr-actions-group' }, instalar) : null)
}

/** Rede de vôlei em diagonal no canto do título, sumindo para a esquerda. */
const MALHA = Array.from({ length: 15 }, (_, i) => `M${4 + i * 11} 15V86`).join('') + Array.from({ length: 7 }, (_, i) => `M0 ${26 + i * 11}H170`).join('')
const REDE = `<svg class="pagina-rede" viewBox="0 0 160 120" aria-hidden="true"><defs><linearGradient id="rede-fade" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="0.45" stop-color="#fff"/></linearGradient><mask id="rede-mask"><rect width="160" height="120" fill="url(#rede-fade)"/></mask></defs><g mask="url(#rede-mask)" transform="skewY(-10) translate(0 30)"><rect class="rede-fita" x="0" y="8" width="170" height="7"/><path class="rede-malha" d="${MALHA}"/></g></svg>`

/** Título grande da página, logo abaixo do header. */
export function tituloDaPagina(titulo: string, sub?: string): HTMLElement {
  return h('div', { cls: 'page pagina-topo', html: REDE },
    h('h1', { cls: 'pagina-titulo' }, titulo),
    sub ? h('p', { cls: 'pagina-sub' }, sub) : null,
    h('span', { cls: 'pagina-traco', 'aria-hidden': 'true' }),
  )
}
