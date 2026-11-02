import { h } from './dom'

/** Aviso rápido no pé da tela (fica sobre a barra de navegação). */
export function mostrarAviso(texto: string, ms = 3200): void {
  document.querySelectorAll('.cda-aviso').forEach((n) => n.remove())
  const aviso = h('div', { cls: 'cda-aviso', role: 'status' }, texto)
  document.body.append(aviso)
  window.setTimeout(() => aviso.remove(), ms)
}
