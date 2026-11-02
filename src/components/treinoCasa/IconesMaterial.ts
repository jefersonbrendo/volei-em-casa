import type { MaterialCasa } from '../../data/treinoCasa'
import { ROTULO_MATERIAL } from '../../lib/treinoCasaTextos'
import { h, svg } from '../../ui/dom'

/** Ícones de traço, no mesmo estilo (24×24, traço 2) dos ícones do app. */
export const ICONE_MATERIAL: Record<MaterialCasa, string> = {
  corpo: '<circle cx="12" cy="5" r="2.5"/><path d="M12 8v7"/><path d="M6.5 10.5 12 8l5.5 2.5"/><path d="M12 15l-3 6.5M12 15l3 6.5"/>',
  bola: '<circle cx="12" cy="12" r="9"/><path d="M12 3a14 14 0 0 0 0 18M3 12h18"/><path d="M5 5.5c4 3.5 10 3.5 14 0M5 18.5c4-3.5 10-3.5 14 0"/>',
  parede: '<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9.3h18M3 14.6h18M9 4v5.3M15 9.3v5.3M9 14.6V20"/>',
  cadeira: '<path d="M7 3v9h10"/><path d="M7 12v9M17 12v9"/><path d="M7 16.5h10"/>',
  toalha: '<path d="M4 6c3-2 5 2 8 0s5 2 8 0v12c-3 2-5-2-8 0s-5-2-8 0z"/><path d="M4 12c3-2 5 2 8 0s5 2 8 0"/>',
  garrafa: '<path d="M10 2h4v3l1.5 2.5V21a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V7.5L10 5z"/><path d="M8.5 13h7"/>',
  elastico: '<rect x="2.5" y="7" width="19" height="10" rx="5"/><rect x="6.5" y="10" width="11" height="4" rx="2"/>',
}

interface Opcoes {
  /** Mostra o nome curto embaixo de cada ícone (tela de detalhe). Sem nome: só os ícones (card da lista). */
  comNome?: boolean
}

export function IconesMaterial(materiais: readonly MaterialCasa[], { comNome = true }: Opcoes = {}): HTMLElement {
  const itens = materiais.map((m) =>
    h('span', { cls: 'cda-mat', 'data-material': m, title: ROTULO_MATERIAL[m], 'aria-label': ROTULO_MATERIAL[m] },
      h('span', { cls: 'cda-mat-ico', html: svg(ICONE_MATERIAL[m]), 'aria-hidden': 'true' }),
      comNome ? h('span', { cls: 'cda-mat-nome' }, ROTULO_MATERIAL[m]) : null,
    ),
  )
  return h('span', { cls: `cda-materiais${comNome ? '' : ' cda-materiais-so-icone'}` }, ...itens)
}
