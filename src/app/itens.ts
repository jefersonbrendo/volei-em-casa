import { NA_AREIA, type ExercicioAreia } from '../data/areia'
import { CATEGORIAS_CASA, TREINO_CASA, type CategoriaCasa, type ExercicioCasa, type NivelCasa } from '../data/treinoCasa'
import { ehSoCorpo } from '../lib/treinoCasaTextos'

/**
 * Lista única do app: os exercícios de casa (Treino em Casa) e os da quadra de areia (Código da Areia).
 * O id vira o endereço da tela: "c12" (casa nº 12) e "a231" (areia nº 231).
 */
/** Seções do Código da Areia (número da seção → categoria na quadra). */
export const SECOES_AREIA = [
  { n: 1, nome: 'Aquecimento', abrev: 'AQU', cor: 'g-prep', desc: 'Prepare pés, tornozelos e ombros para a areia antes de qualquer bola mais forte.' },
  { n: 2, nome: 'Deslocamento', abrev: 'DES', cor: 'g-prep', desc: 'Movimentação na areia: primeiro passo, mudança de direção e chegada equilibrada na bola.' },
  { n: 3, nome: 'Saque', abrev: 'SAQ', cor: 'g-fund', desc: 'Do saque por baixo ao saque viagem, com foco em direção e consistência.' },
  { n: 4, nome: 'Recepção', abrev: 'REC', cor: 'g-fund', desc: 'Receber o saque com a manchete e entregar a bola alta e no lugar certo para quem levanta.' },
  { n: 5, nome: 'Levantamento de manchete', abrev: 'LMA', cor: 'g-fund', desc: 'Levantar de manchete com controle de altura e distância da rede.' },
  { n: 6, nome: 'Levantamento de toque', abrev: 'LTO', cor: 'g-fund', desc: 'Levantar de toque com mãos firmes, bola limpa e dentro da regra.' },
  { n: 7, nome: 'Ataque', abrev: 'ATQ', cor: 'g-fund', desc: 'Aproximação, salto e golpe: ataque forte, largada e bola de segurança.' },
  { n: 8, nome: 'Bloqueio', abrev: 'BLQ', cor: 'g-fund', desc: 'Tempo de salto, posição das mãos e leitura do atacante adversário.' },
  { n: 9, nome: 'Defesa', abrev: 'DEF', cor: 'g-fund', desc: 'Posicionamento, leitura e reação para defender ataques e largadas.' },
  { n: 10, nome: 'Side-out', abrev: 'SDO', cor: 'g-jogo', desc: 'Sequência recepção, levantamento e ataque para virar o ponto.' },
  { n: 11, nome: 'Comunicação', abrev: 'COM', cor: 'g-jogo', desc: 'Chamadas, sinais e conversa com a dupla durante o rali.' },
  { n: 12, nome: 'Tática', abrev: 'TAT', cor: 'g-jogo', desc: 'Decisões de jogo: onde sacar, quem bloqueia e como se posicionar.' },
  { n: 13, nome: 'Jogos reduzidos', abrev: 'JOG', cor: 'g-jogo', desc: 'Jogos em espaço menor para repetir muito e decidir rápido.' },
  { n: 14, nome: 'Condicionamento', abrev: 'FIS', cor: 'g-prep', desc: 'Força, explosão e resistência específicas para a areia.' },
  { n: 15, nome: 'Sozinho ou em dupla', abrev: 'SOL', cor: 'g-solo', desc: 'Rotinas para treinar sozinho ou só com a sua dupla.' },
] as const
export type CategoriaAreia = (typeof SECOES_AREIA)[number]['nome']
export const CATEGORIAS_AREIA: readonly CategoriaAreia[] = SECOES_AREIA.map((s) => s.nome)

/** Como as seções da areia aparecem agrupadas na tela inicial (igual ao Código da Areia). */
export const GRUPOS_AREIA: ReadonlyArray<{ titulo: string; sub: string; secoes: number[] }> = [
  { titulo: 'Preparação', sub: 'Comece por aqui em qualquer treino na quadra', secoes: [1, 2, 14] },
  { titulo: 'Fundamentos', sub: 'Escolha um por treino e faça 2 a 3 exercícios em sequência', secoes: [3, 4, 5, 6, 7, 8, 9] },
  { titulo: 'Jogo e tática', sub: 'Leve o fundamento do dia para uma situação de jogo', secoes: [10, 11, 12, 13] },
  { titulo: 'Por conta própria', sub: 'Só você ou você e a sua dupla', secoes: [15] },
]

export type Categoria = CategoriaCasa | CategoriaAreia
export const CATEGORIAS: readonly Categoria[] = [...CATEGORIAS_CASA, ...CATEGORIAS_AREIA]
export const ehCategoriaAreia = (c: string): c is CategoriaAreia => (CATEGORIAS_AREIA as readonly string[]).includes(c)
export const secaoDaCategoria = (c: CategoriaAreia): number => SECOES_AREIA.find((s) => s.nome === c)!.n

export type Item =
  | { id: string; tipo: 'casa'; categoria: CategoriaCasa; nome: string; nivel: NivelCasa; ex: ExercicioCasa }
  | { id: string; tipo: 'areia'; categoria: CategoriaAreia; nome: string; nivel: NivelCasa; ex: ExercicioAreia }

export const ITENS: readonly Item[] = [
  ...TREINO_CASA.map((ex): Item => ({ id: `c${ex.numero}`, tipo: 'casa', categoria: ex.categoria, nome: ex.nome, nivel: ex.nivel, ex })),
  ...NA_AREIA.map((ex): Item => ({ id: `a${ex.numero}`, tipo: 'areia', categoria: SECOES_AREIA[ex.secao - 1]!.nome, nome: ex.nome, nivel: ex.nivel, ex })),
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

/** Quantas pessoas o exercício pede, no mínimo (1 = dá para fazer sozinho). */
export function pessoasMinimas(item: Item): number {
  if (item.tipo === 'casa') return 1
  const j = item.ex.jogadores.toLowerCase()
  if (/individual|sozinho|1 jogador\b/.test(j)) return 1
  const n = j.match(/\d+/)
  return n ? Number(n[0]) : 2
}

/** Texto curto de jogadores: "2 jogadores", "4 jogadores"... */
export function jogadoresCurto(item: Item): string {
  if (item.tipo === 'casa') return 'Só você'
  return item.ex.jogadores.split(' (')[0] || '—'
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
export const DESCRICAO_CATEGORIA = {
  'Com bola': 'Toque, manchete, saque e defesa com a bola, na parede ou sozinho.',
  'Impulsão': 'Saltos para chegar mais alto no ataque e no bloqueio.',
  'Força': 'Pernas, core e braços com o peso do corpo, para aguentar a areia.',
  'Agilidade': 'Primeiro passo, mudança de direção e deslocamento de defesa.',
  'Coordenação': 'Ritmo, equilíbrio e controle da bola com as mãos e os pés.',
  'Mobilidade': 'Tornozelo, quadril e ombro soltos antes e depois do treino.',
  ...Object.fromEntries(SECOES_AREIA.map((x) => [x.nome, x.desc])),
} as Record<Categoria, string>

/** Cor do bloco da categoria (classes de cor do app). */
export const COR_CATEGORIA = {
  'Com bola': 'g-fund',
  'Impulsão': 'g-jogo',
  'Força': 'g-prep',
  'Agilidade': 'g-jogo',
  'Coordenação': 'g-fund',
  'Mobilidade': 'g-prep',
  ...Object.fromEntries(SECOES_AREIA.map((x) => [x.nome, x.cor])),
} as Record<Categoria, string>

export const ABREV_CATEGORIA = {
  'Com bola': 'BOL',
  'Impulsão': 'IMP',
  'Força': 'FOR',
  'Agilidade': 'AGI',
  'Coordenação': 'COO',
  'Mobilidade': 'MOB',
  ...Object.fromEntries(SECOES_AREIA.map((x) => [x.nome, x.abrev])),
} as Record<Categoria, string>

export const NIVEIS: readonly NivelCasa[] = ['Iniciante', 'Intermediário', 'Avançado']
