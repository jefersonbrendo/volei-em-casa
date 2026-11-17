/** Todas as seções do vôlei de quadra escritas no formato "texto + desenho juntos". */
import { AQUECIMENTO } from './aquecimento'
import { ATAQUE } from './ataque'
import { BLOQUEIO } from './bloqueio'
import { COMUNICACAO } from './comunicacao'
import { CONDICIONAMENTO } from './condicionamento'
import { DEFESA } from './defesa'
import { DESLOCAMENTO } from './deslocamento'
import { JOGOS } from './jogos'
import { LEVANTAMENTO } from './levantamento'
import { RECEPCAO } from './recepcao'
import { RODIZIO } from './rodizio'
import { TRANSICAO } from './transicao'
import type { ExercicioComDesenho } from './tipos'

export const EXERCICIOS_COM_DESENHO: ExercicioComDesenho[] = [
  ...AQUECIMENTO, ...DESLOCAMENTO, ...RECEPCAO, ...LEVANTAMENTO, ...ATAQUE, ...BLOQUEIO, ...DEFESA,
  ...RODIZIO, ...TRANSICAO, ...COMUNICACAO, ...JOGOS, ...CONDICIONAMENTO,
]
