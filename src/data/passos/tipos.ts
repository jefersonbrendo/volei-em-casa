/**
 * PASSO A PASSO DETALHADO
 * Cada exercício tem etapas com título curto + explicação. O `t` (0 a 1) é o instante da animação
 * que mostra aquela etapa: ao tocar na etapa, o boneco para nesse momento.
 * `ritmo` é uma linha final com cadência e respiração.
 *
 * ATENÇÃO: textos sujeitos à mesma revisão profissional do resto do conteúdo. Sem promessa de resultado.
 */
export interface Etapa { titulo: string; texto: string; t: number }
export interface PassoDetalhado { etapas: Etapa[]; ritmo?: string }

export const e = (titulo: string, texto: string, t: number): Etapa => ({ titulo, texto, t })
