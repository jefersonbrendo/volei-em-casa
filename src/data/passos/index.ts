import { PASSOS_AGILIDADE_COORDENACAO } from './agilidadeCoordenacao'
import { PASSOS_BOLA } from './bola'
import { PASSOS_IMPULSAO_FORCA } from './impulsaoForca'
import { PASSOS_MOBILIDADE } from './mobilidade'
import type { PassoDetalhado } from './tipos'

export type { Etapa, PassoDetalhado } from './tipos'

/** Passo a passo detalhado de cada exercício de casa (número → etapas). */
export const PASSOS: Record<number, PassoDetalhado> = { ...PASSOS_BOLA, ...PASSOS_IMPULSAO_FORCA, ...PASSOS_AGILIDADE_COORDENACAO, ...PASSOS_MOBILIDADE }
