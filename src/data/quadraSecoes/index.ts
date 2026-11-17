/** Todas as seções do vôlei de quadra escritas no formato "texto + desenho juntos". */
import { AQUECIMENTO } from './aquecimento'
import { ATAQUE } from './ataque'
import { BLOQUEIO } from './bloqueio'
import { DEFESA } from './defesa'
import { DESLOCAMENTO } from './deslocamento'
import { LEVANTAMENTO } from './levantamento'
import { RECEPCAO } from './recepcao'
import { RODIZIO } from './rodizio'
import { TRANSICAO } from './transicao'
import type { ExercicioComDesenho } from './tipos'

export const EXERCICIOS_COM_DESENHO: ExercicioComDesenho[] = [
  ...AQUECIMENTO, ...DESLOCAMENTO, ...RECEPCAO, ...LEVANTAMENTO, ...ATAQUE, ...BLOQUEIO, ...DEFESA, ...RODIZIO, ...TRANSICAO,
]
