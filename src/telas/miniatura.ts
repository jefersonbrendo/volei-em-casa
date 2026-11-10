import type { Item } from '../app/itens'
import { PREVIAS } from '../data/previas'
import { h } from '../ui/dom'

/** Endereço da ilustração do exercício. A grande (960×600, formato 16:10) é para capas e destaques. */
export function urlDaPrevia(item: Item, grande = false): string {
  return `/previa/${grande ? 'g/' : ''}${PREVIAS[item.id]}.webp`
}

/** Prévia do exercício: ilustração do gesto, em casa ou na quadra de areia. */
export function miniaturaDoItem(item: Item): HTMLElement {
  return h('figure', { cls: 'foto mini previa' },
    h('img', { src: urlDaPrevia(item), alt: '', loading: 'lazy', decoding: 'async', width: 480, height: 360 }),
  )
}
