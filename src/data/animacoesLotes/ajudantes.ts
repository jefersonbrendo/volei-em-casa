/**
 * Atalhos para escrever linhas do tempo sem repetir objetos. Cada um devolve exatamente o mesmo
 * objeto que seria escrito à mão em src/data/animacoes.ts (ver o cabeçalho de lá).
 */
import type { Acao, Passo, Ref } from '../../lib/animacao/tipos'

type Extra = { dur?: number; atraso?: number }

/** Jogador `id` se desloca até `para`. */
export const j = (id: string, para: Ref, dur?: number, atraso?: number): Acao => ({ tipo: 'jogador', id, para, dur, atraso })
/** A bola vai (de onde estava, ou de `de`) até `para`. `alta`: em arco. */
export const b = (para: Ref, o: Extra & { de?: Ref; alta?: boolean } = {}): Acao => ({ tipo: 'bola', para, ...o })
/** A seta `id` se desenha. */
export const s = (id: string, dur?: number, atraso?: number, trecho?: { de?: number; ate?: number }): Acao => ({ tipo: 'seta', id, dur, atraso, ...trecho })
/** Espera. */
export const pausa = (dur: number): Acao => ({ tipo: 'pausa', dur })

/** Passo em que nada se move: o jogador só se posiciona ou o texto descreve a postura. */
export const esperar = (texto: number, dur = 1): Passo => ({ texto, acoes: [pausa(dur)] })
/** Dois jogadores trocam de lugar (fim do exercício: "trocam de função"). */
export const trocar = (texto: number, a: string, c: string, dur = 2.4): Passo => ({ texto, acoes: [j(a, c, dur), j(c, a, dur)] })
/** Monta um passo. */
export const passo = (texto: number, acoes: Acao[], o: { seq?: boolean; junto?: number } = {}): Passo => ({ texto, acoes, ...o })
