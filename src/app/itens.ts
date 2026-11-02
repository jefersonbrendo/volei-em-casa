import { NA_AREIA, type ExercicioAreia } from '../data/areia'
import { CATEGORIAS_CASA, TREINO_CASA, type CategoriaCasa, type ExercicioCasa, type NivelCasa } from '../data/treinoCasa'
import { ehSoCorpo } from '../lib/treinoCasaTextos'

/**
 * Lista única do app: os exercícios de casa (Treino em Casa) e os de areia (Na areia).
 * O id vira o endereço da tela: "c12" (casa nº 12) e "a231" (areia nº 231).
 */
export type Categoria = CategoriaCasa | 'Na areia'
export const CATEGORIAS: readonly Categoria[] = [...CATEGORIAS_CASA, 'Na areia']

export type Item =
  | { id: string; tipo: 'casa'; categoria: CategoriaCasa; nome: string; nivel: NivelCasa; ex: ExercicioCasa }
  | { id: string; tipo: 'areia'; categoria: 'Na areia'; nome: string; nivel: NivelCasa; ex: ExercicioAreia }

export const ITENS: readonly Item[] = [
  ...TREINO_CASA.map((ex): Item => ({ id: `c${ex.numero}`, tipo: 'casa', categoria: ex.categoria, nome: ex.nome, nivel: ex.nivel, ex })),
  ...NA_AREIA.map((ex): Item => ({ id: `a${ex.numero}`, tipo: 'areia', categoria: 'Na areia', nome: ex.nome, nivel: ex.nivel, ex })),
]

export function itemPorId(id: string): Item | undefined {
  return ITENS.find((i) => i.id === id)
}

export function usaBola(item: Item): boolean {
  return item.tipo === 'areia' ? /bola/i.test(item.ex.material) : item.ex.material.includes('bola')
}

export function soCorpo(item: Item): boolean {
  return item.tipo === 'casa' && ehSoCorpo(item.ex.material)
}

/** Texto usado na busca: nome, categoria, objetivo e material. */
export function textoDeBusca(item: Item): string {
  const material = item.tipo === 'casa' ? item.ex.material.join(' ') : item.ex.material
  return `${item.nome} ${item.categoria} ${item.ex.objetivo} ${material}`
    .normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}

export function normalizar(texto: string): string {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()
}

/** Descrição curta de cada categoria (tela inicial e topo da lista). */
export const DESCRICAO_CATEGORIA: Record<Categoria, string> = {
  'Com bola': 'Toque, manchete, saque e defesa com a bola, na parede ou sozinho.',
  'Impulsão': 'Saltos para chegar mais alto no ataque e no bloqueio.',
  'Força': 'Pernas, core e braços com o peso do corpo, para aguentar a areia.',
  'Agilidade': 'Primeiro passo, mudança de direção e deslocamento de defesa.',
  'Coordenação': 'Ritmo, equilíbrio e controle da bola com as mãos e os pés.',
  'Mobilidade': 'Tornozelo, quadril e ombro soltos antes e depois do treino.',
  'Na areia': 'Para quando você for à quadra sozinho: controle, ataque, saque e defesa.',
}

/** Cor do bloco da categoria (classes de cor do app). */
export const COR_CATEGORIA: Record<Categoria, string> = {
  'Com bola': 'g-fund',
  'Impulsão': 'g-jogo',
  'Força': 'g-prep',
  'Agilidade': 'g-jogo',
  'Coordenação': 'g-fund',
  'Mobilidade': 'g-prep',
  'Na areia': 'g-solo',
}

export const ABREV_CATEGORIA: Record<Categoria, string> = {
  'Com bola': 'BOL',
  'Impulsão': 'IMP',
  'Força': 'FOR',
  'Agilidade': 'AGI',
  'Coordenação': 'COO',
  'Mobilidade': 'MOB',
  'Na areia': 'ARE',
}

export const NIVEIS: readonly NivelCasa[] = ['Iniciante', 'Intermediário', 'Avançado']
