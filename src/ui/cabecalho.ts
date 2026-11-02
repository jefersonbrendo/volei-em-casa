import { h, svg, ICONES } from './dom'

interface OpcoesCabecalho {
  titulo: string
  /** Etiqueta colorida (ex.: "BÔNUS"). */
  etiqueta: string
  /** Texto depois da etiqueta (ex.: "• 3 exercícios"). */
  detalhe?: string
  corEtiqueta?: string
  /** Rota do botão voltar; sem ela, volta no histórico. */
  voltarPara: string
}

/** Barra de topo igual à das seções do app (mesmas classes), com botão voltar. */
export function cabecalho(op: OpcoesCabecalho): HTMLElement {
  const voltar = h('button', { cls: 'hdr-btn', title: 'Voltar', 'aria-label': 'Voltar', onclick: () => { window.location.hash = `#${op.voltarPara}` } })
  voltar.innerHTML = svg(ICONES.voltar)
  const etiqueta = h('span', { cls: 'hdr-pill-badge', style: `background:${op.corEtiqueta ?? '#FF9F1C'}; color:${op.corEtiqueta ? '#fff' : '#000'};` }, op.etiqueta)
  const sub = h('span', { cls: 'hdr-ctx-sub' }, etiqueta, op.detalhe ? h('span', null, op.detalhe) : null)
  const contexto = h('div', { cls: 'hdr-ctx-box' }, h('span', { cls: 'hdr-ctx-title' }, op.titulo), sub)
  return h('header', { cls: 'top-bar top-bar-secao' }, voltar, contexto)
}
