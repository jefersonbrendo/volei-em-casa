/** Todas as seções do vôlei de quadra escritas no formato "texto + desenho juntos". */
import { AQUECIMENTO } from './aquecimento'
import { DESLOCAMENTO } from './deslocamento'
import { RECEPCAO } from './recepcao'
import type { ExercicioComDesenho } from './tipos'

export const EXERCICIOS_COM_DESENHO: ExercicioComDesenho[] = [...AQUECIMENTO, ...DESLOCAMENTO, ...RECEPCAO]
