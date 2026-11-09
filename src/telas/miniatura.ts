import type { Item } from '../app/itens'
import { PREVIAS } from '../data/previas'
import { h } from '../ui/dom'

/** Prévia do exercício: ilustração do gesto, em casa ou na quadra de areia. */
export function miniaturaDoItem(item: Item): HTMLElement {
  return h('figure', { cls: 'foto mini previa' },
    h('img', { src: `/previa/${PREVIAS[item.id]}.webp`, alt: '', loading: 'lazy', decoding: 'async', width: 480, height: 360 }),
  )
}
