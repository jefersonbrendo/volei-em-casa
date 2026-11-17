/**
 * Um exercício de quadra com o desenho junto, para escrever texto, cena e animação no mesmo lugar.
 * Numeração: seção N usa os números N×100 + 1, N×100 + 2... (ex.: Aquecimento, seção 2: 201, 202...).
 * Assim dá para incluir exercícios numa seção sem mudar o número dos outros.
 */
import type { Animacao } from '../../lib/animacao/tipos'
import type { DescricaoQuadra } from '../../lib/quadra/cena'
import type { ExercicioQuadra } from '../quadra'

export interface ExercicioComDesenho extends ExercicioQuadra {
  cena: DescricaoQuadra
  animacao?: Animacao
}

/** A bola na mão de quem está virado para a direita (dx +3) ou para a esquerda (lado: -1). */
export const naMao = (id: string, lado: 1 | -1 = 1, dy = -2): { ref: string; dx: number; dy: number } => ({ ref: id, dx: 3 * lado, dy })
