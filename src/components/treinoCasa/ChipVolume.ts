import { formatarVolume } from '../../lib/treinoCasaTextos'
import type { VolumeCasa } from '../../data/treinoCasa'
import { h, svg, ICONES } from '../../ui/dom'

export { formatarVolume }

/** Chip arredondado com o volume ("3 × 12", "3 × 30s", "5 min"), no estilo dos chips de tempo do app. */
export function ChipVolume(volume: VolumeCasa): HTMLElement {
  const texto = formatarVolume(volume)
  return h('span', { cls: 'cda-chip-volume', title: 'Volume', 'aria-label': `Volume: ${texto}` },
    h('span', { cls: 'cda-chip-ico', html: svg(ICONES.relogio), 'aria-hidden': 'true' }),
    texto,
  )
}
