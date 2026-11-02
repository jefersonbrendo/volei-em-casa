/** Cena vetorial de um diagrama (gerada por scripts/extrair-diagramas.py a partir do PDF). */
export type Ponto = readonly [number, number]

export interface ElementoCena {
  k: 'moldura' | 'quadra' | 'rede' | 'zona' | 'cone' | 'jogador' | 'numero' | 'bola' | 'seta' | 'ponta' | 'texto' | 'fundo'
  id?: string
  d?: string
  f?: string
  s?: string
  w?: number
  /** Opacidade do preenchimento / do traço. */
  fo?: number
  so?: number
  /** Tracejado (stroke-dasharray). */
  da?: number[]
  lc?: string
  eo?: number
  x?: number
  y?: number
  r?: number
  t?: string
  fs?: number
  /** Cor do texto (jogador/número) ou do texto solto. */
  tc?: string
  c?: string
  /** texto: 1 = negrito. seta: ponto de chegada. */
  b?: number | Ponto
  /** seta: ponto de partida. */
  a?: Ponto
  cor?: string
  /** seta feita de forma preenchida (pontilhada). */
  pre?: number
  /** peça da mesma seta (id da seta principal). */
  junto?: string
  /** ponta: id da seta e o lado em que está. */
  de?: string
  lado?: 'a' | 'b'
  /** numero: id da seta que ele numera. */
  seta?: string
}

export interface Cena {
  w: number
  h: number
  el: ElementoCena[]
}

/** Referência a um ponto da cena: um id (jogador, cone, zona, seta.a, seta.b), um ponto fixo ou id com deslocamento. */
export type Ref = string | Ponto | { ref: string; dx?: number; dy?: number }

export type Acao =
  /** O jogador se desloca até `para`. */
  | { tipo: 'jogador'; id: string; para: Ref; dur?: number; atraso?: number }
  /** A bola vai de `de` (ou de onde estava) até `para`. `alta`: trajetória em arco. */
  | { tipo: 'bola'; de?: Ref; para: Ref; alta?: boolean; dur?: number; atraso?: number }
  /** A seta se desenha. `de`/`ate` (0..1) desenham só um trecho dela, para setas em zigue-zague seguidas pela bola. */
  | { tipo: 'seta'; id: string; dur?: number; atraso?: number; de?: number; ate?: number }
  /** Espera, para dar tempo de entender. */
  | { tipo: 'pausa'; dur: number }

export interface Passo {
  /** Número do item do "Passo a passo" que este passo ilustra (1, 2, 3...). */
  texto: number
  acoes: Acao[]
  /** true: as ações rodam uma depois da outra. Padrão: todas juntas. */
  seq?: boolean
  /**
   * Para coisas que acontecem ao mesmo tempo que o passo anterior (ex.: "no instante em que ele bate
   * na bola, o outro dá um pulinho"): o passo começa X segundos DEPOIS DO INÍCIO do anterior, em vez
   * de esperar o anterior terminar.
   */
  junto?: number
}

export interface Animacao {
  /** Onde a bola está no começo. Sem isso, ela só aparece no primeiro voo. */
  bolaInicial?: Ref
  passos: Passo[]
  /** Segundos de pausa entre passos e no fim (antes de repetir). */
  pausaEntrePassos?: number
  pausaFinal?: number
  /** Marca para revisão humana (ver docs/animacoes-revisao.md). */
  revisar?: string
}
