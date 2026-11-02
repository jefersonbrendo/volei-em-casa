/**
 * TREINOS PRONTOS: sequências de exercícios que já existem no app.
 * Cada item é o id do exercício: "c12" (casa nº 12) ou "a231" (areia nº 231).
 * A ordem é a ordem do treino: começa soltando o corpo e termina no exercício mais exigente.
 */
export interface TreinoPronto {
  id: string
  nome: string
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado'
  /** Uma frase: para que serve. */
  resumo: string
  /** Onde fazer e o que precisa. */
  onde: string
  itens: readonly string[]
}

export const TREINOS: readonly TreinoPronto[] = [
  {
    id: 'parede-1',
    nome: 'Primeiro treino com bola na parede',
    nivel: 'Iniciante',
    resumo: 'Toque, manchete e saque por baixo usando só uma parede.',
    onde: 'Em casa ou no quintal · bola e parede',
    itens: ['c95', 'c97', 'c1', 'c4', 'c8', 'c21'],
  },
  {
    id: 'bola-sem-parede',
    nome: 'Controle de bola sem parede',
    nivel: 'Iniciante',
    resumo: 'Para quem tem uma bola, mas não tem parede livre.',
    onde: 'Em qualquer lugar · só a bola',
    itens: ['c96', 'c5', 'c13', 'c10', 'c83', 'c91'],
  },
  {
    id: 'sem-nada',
    nome: 'Treino sem bola e sem material',
    nivel: 'Iniciante',
    resumo: 'Saltos, deslocamento e força só com o peso do corpo.',
    onde: 'Em qualquer lugar · nenhum material',
    itens: ['c95', 'c96', 'c27', 'c44', 'c3', 'c49', 'c53'],
  },
  {
    id: 'manchete-toque',
    nome: 'Manchete e toque com mais controle',
    nivel: 'Intermediário',
    resumo: 'Altura, direção e troca entre manchete e toque.',
    onde: 'Em casa ou no quintal · bola e parede',
    itens: ['c97', 'c6', 'c14', 'c17', 'c20', 'c23'],
  },
  {
    id: 'saque-recepcao',
    nome: 'Saque e recepção',
    nivel: 'Intermediário',
    resumo: 'Movimento do saque e a recepção da bola que volta.',
    onde: 'Em casa ou no quintal · bola e parede',
    itens: ['c97', 'c9', 'c8', 'c19', 'c15'],
  },
  {
    id: 'impulsao',
    nome: 'Impulsão para ataque e bloqueio',
    nivel: 'Intermediário',
    resumo: 'Aproximação de três passos e salto para atacar e bloquear.',
    onde: 'Em casa · uma parede',
    itens: ['c95', 'c96', 'c31', 'c39', 'c38', 'c37', 'c41'],
  },
  {
    id: 'defesa',
    nome: 'Agilidade de defesa',
    nivel: 'Intermediário',
    resumo: 'Primeiro passo, freada e defesa baixa.',
    onde: 'Em casa · bola e parede no último exercício',
    itens: ['c95', 'c72', 'c70', 'c78', 'c69', 'c15'],
  },
  {
    id: 'forca-areia',
    nome: 'Força para jogar na areia',
    nivel: 'Iniciante',
    resumo: 'Pernas, glúteos e core para aguentar o jogo na areia fofa.',
    onde: 'Em qualquer lugar · uma parede',
    itens: ['c44', 'c45', 'c53', 'c49', 'c50', 'c41', 'c59'],
  },
  {
    id: 'desafio',
    nome: 'Desafio avançado',
    nivel: 'Avançado',
    resumo: 'Bola rápida, reação e saltos mais exigentes.',
    onde: 'Em casa ou no quintal · bola e parede',
    itens: ['c104', 'c7', 'c22', 'c25', 'c71', 'c35', 'c36'],
  },
  {
    id: 'areia-sozinho',
    nome: 'Treino sozinho na quadra de areia',
    nivel: 'Intermediário',
    resumo: 'Para o dia em que você chega na arena e não tem parceiro.',
    onde: 'Na quadra de areia · bolas e cones',
    itens: ['a1', 'a231', 'a233', 'a232', 'a235'],
  },
]
