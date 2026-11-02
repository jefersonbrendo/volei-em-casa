import type { VolumeCasa } from '../data/treinoCasa'
import type { Item } from './itens'

const DESCANSO_ENTRE_SERIES = 30
const TROCA_DE_EXERCICIO = 30
const SEGUNDOS_POR_REPETICAO = 3

/** "30s" -> 30, "20–30s" -> 25, "5 min" -> 300, "8 minutos" -> 480. */
export function segundosDoTexto(texto: string): number {
  const numeros = (texto.match(/\d+/g) ?? []).map(Number)
  if (numeros.length === 0) return 0
  const media = numeros.reduce((a, b) => a + b, 0) / numeros.length
  return /min/i.test(texto) ? media * 60 : media
}

function segundosDoVolume(v: VolumeCasa): number {
  const series = v.series ?? 1
  const porSerie = v.tempo !== undefined ? segundosDoTexto(v.tempo) : (v.repeticoes ?? 10) * SEGUNDOS_POR_REPETICAO
  if (v.tempo !== undefined && v.series === undefined) return porSerie
  return series * porSerie + (series - 1) * DESCANSO_ENTRE_SERIES
}

/** Estimativa do tempo de um exercício, em segundos. */
export function duracaoDoItem(item: Item): number {
  return item.tipo === 'areia' ? segundosDoTexto(item.ex.tempo) : segundosDoVolume(item.ex.volume)
}

/** Estimativa de um treino inteiro, arredondada para múltiplos de 5 minutos. */
export function minutosDoTreino(itens: readonly Item[]): number {
  const total = itens.reduce((s, i) => s + duracaoDoItem(i) + TROCA_DE_EXERCICIO, 0)
  return Math.max(5, Math.round(total / 60 / 5) * 5)
}
