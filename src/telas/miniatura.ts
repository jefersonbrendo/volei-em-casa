import type { Item } from '../app/itens'
import { PREVIAS } from '../data/previas'
import { DIAGRAMAS_QUADRA } from '../data/quadraDiagramas'
import { cenaDaQuadra, urlDaCena } from '../lib/quadra/cena'
import { h } from '../ui/dom'

/**
 * Endereço da ilustração do exercício. A grande (960×600, formato 16:10) é para capas e destaques.
 * Exercício de quadra ainda sem ilustração própria usa o desenho da quadra.
 */
export function urlDaPrevia(item: Item, grande = false): string {
  const previa = PREVIAS[item.id]
  if (!previa && item.tipo === 'quadra') {
    const desenho = DIAGRAMAS_QUADRA[item.ex.numero]
    if (desenho) return urlDaCena(cenaDaQuadra(desenho.cena))
  }
  return `/previa/${grande ? 'g/' : ''}${previa}.webp`
}

/** Prévia do exercício: ilustração do gesto, em casa ou na quadra de areia. */
export function miniaturaDoItem(item: Item): HTMLElement {
  return h('figure', { cls: 'foto mini previa' },
    h('img', { src: urlDaPrevia(item), alt: '', loading: 'lazy', decoding: 'async', width: 480, height: 360 }),
  )
}
