/** Lote 2 (parte D): exercícios 77 a 84 (levantamento). */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, s, trocar } from './ajudantes'

export const LOTE_2D: Record<number, Animacao> = {
  // ───── LEVANTAMENTO ─────
  // 77 · Base estática e elevação suave de ombros
  77: {
    bolaInicial: { ref: 'A1', dx: 6, dy: 3 },
    passos: [
      // 1. L1 posiciona-se no cone central, a 1,5 m da rede, com o pé direito ligeiramente à frente.
      esperar(1, 1.2),
      // 2. A1 lança a bola com as duas mãos, em arco suave, na linha da cintura de L1.
      passo(2, [b('seta1.b', { alta: true, dur: 1.7 }), s('seta1', 1.7)]),
      // 3. L1 flexiona os joelhos, monta a plataforma plana e não balança os braços para cima.
      esperar(3, 0.9),
      // 4. No contato, L1 só estende os joelhos e dá um leve encolhimento de ombros.
      passo(4, [j('L1', [116, 70], 0.3), j('L1', [116, 72], 0.3, 0.3)]),
      // 5. A bola faz um arco de 4 m e cai na Zona Alvo; trocam de função a cada 10 bolas.
      passo(5, [b('zona1', { de: 'seta2.a', alta: true, dur: 2.0 }), s('seta2', 2.0), j('L1', 'A1', 2.4, 2.4), j('A1', 'L1', 2.4, 2.4)]),
    ],
  },

  // 78 · Levantamento parado com arco alto e distância segura da rede
  78: {
    bolaInicial: { ref: 'A1', dx: 7, dy: 0 },
    passos: [
      // 1. A1 envia uma bola controlada dos 5 m para as mãos de L1 aos 2 m da rede.
      passo(1, [b('seta1.b', { alta: true, dur: 1.9 }), s('seta1', 1.9)]),
      // 2. L1 enquadra os ombros para a Zona Alvo 1 e levanta com arco alto (1,5 m acima da rede).
      passo(2, [b('zona1', { de: 'seta2.a', alta: true, dur: 2.2 }), s('seta2', 2.2)]),
      // 3. A bola deve cair dentro da Zona Alvo 1, sem nunca invadir a faixa proibida de 50 cm da fita.
      esperar(3, 0.9),
      // 4. Na repetição seguinte, L1 gira a base e levanta na Zona Alvo 2.
      passo(4, [b('seta1.b', { de: { ref: 'A1', dx: 7, dy: 0 }, alta: true, dur: 1.9 }), b('zona2', { de: 'seta3.a', alta: true, dur: 2.2, atraso: 2.1 }), s('seta3', 2.2, 2.1)]),
      // 5. Após 10 bolas alternadas, A1 e L1 invertem as funções.
      trocar(5, 'L1', 'A1', 2.4),
    ],
  },

  // 79 · Avanço do meio da quadra para levantar bola curta
  79: {
    bolaInicial: { ref: 'A1', dx: 7, dy: 2 },
    passos: [
      // 1. L1 e A1 começam no fundo/meio da quadra (simulando a posição de recepção).
      esperar(1, 1.2),
      // 2. A1 joga a bola alta em direção ao cone de 1,5 m da rede.
      passo(2, [b('seta1.b', { alta: true, dur: 2.2 }), s('seta1', 2.2)]),
      // 3. Assim que a bola sai das mãos de A1, L1 arranca do cone de 4,5 m em diagonal até o cone da rede.
      passo(3, [j('L1', 'seta2.b', 1.5), s('seta2', 1.5)], { junto: 0.4 }),
      // 4. Um passo antes da bola, L1 crava os dois pés na areia, anulando a velocidade da corrida.
      esperar(4, 0.7),
      // 5. Com os pés parados, L1 levanta de manchete alta para a Zona Alvo de A1; trocam a cada 8 bolas.
      passo(5, [b('zona1', { de: 'seta4.a', alta: true, dur: 1.8 }), s('seta4', 1.8), j('L1', 'A1', 2.4, 2.2), j('A1', 'L1', 2.4, 2.2)]),
    ],
  },

  // 80 · Recuo rápido da rede para levantar passe que ficou curto
  80: {
    bolaInicial: { ref: 'A1', dx: 7, dy: 2 },
    passos: [
      // 1. L1 começa adiantado, no cone a 1 m da rede.
      esperar(1, 1.2),
      // 2. A1 envia um passe mais curto e alto, que cai no cone de 3,5 m da rede.
      passo(2, [b('seta1.b', { alta: true, dur: 2.2 }), s('seta1', 2.2)]),
      // 3. L1 abre o quadril e recua em passadas laterais/cruzadas rápidas até o cone de 3,5 m.
      passo(3, [j('L1', 'seta2.b', 1.4), s('seta2', 1.4)], { junto: 0.5 }),
      // 4. Atrás da bola, planta o pé de trás e inclina o tronco levemente em direção à rede.
      esperar(4, 0.7),
      // 5. Empurra a bola em diagonal, de dentro para fora, até a Zona Alvo; trocam a cada 8 repetições.
      passo(5, [b('zona1', { de: 'seta3.a', alta: true, dur: 1.8 }), s('seta3', 1.8), j('L1', 'A1', 2.4, 2.2), j('A1', 'L1', 2.4, 2.2)]),
    ],
  },

  // ───── DESLOCAMENTO E RESGATE ─────
  // 81 · Corrida longa do meio para o fundo: resgate na linha de 7 metros
  81: {
    bolaInicial: { ref: 'A1', dx: 7, dy: 2 },
    passos: [
      // 1. L1 aguarda aos 2,5 m; A1 simula uma recepção que espirrou alta para trás, rumo ao cone de 7 m.
      passo(1, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 2. L1 abre o quadril e corre em velocidade máxima rumo ao fundo, acompanhando a bola por cima do ombro.
      passo(2, [j('L1', 'seta2.b', 2.0), s('seta2', 2.0)]),
      // 3. Ultrapassa a linha da bola, planta o pé de trás quase na linha de fundo e vira o peito para a Zona Alvo.
      esperar(3, 0.8),
      // 4. Com o empurrão das pernas, lança a bola de manchete por 5 m até a Zona Alvo.
      passo(4, [b('zona1', { de: 'seta4.a', alta: true, dur: 2.2 }), s('seta4', 2.2)]),
      // 5. Trocam de função a cada 6 resgates.
      trocar(5, 'L1', 'A1', 2.6),
    ],
  },

  // 82 · Resgate de passe espirrado fora da linha lateral (cuidado com a antena)
  82: {
    bolaInicial: { ref: 'A1', dx: 7, dy: -4 },
    passos: [
      // 1. A1 simula um passe que escapou pela lateral esquerda, em direção ao cone fora da quadra.
      passo(1, [b('seta1.b', { alta: true, dur: 2.6 }), s('seta1', 2.6)]),
      // 2. L1 arranca do centro, cruza a linha lateral e chega ao cone externo.
      passo(2, [j('L1', 'seta2.b', 2.0), s('seta2', 2.0)]),
      // 3. Planta o pé esquerdo por fora da bola e aponta os ombros para dentro da quadra.
      esperar(3, 0.8),
      // 4. Manchete alta trazendo a bola para a Zona Alvo, longe da antena.
      passo(4, [b('zona1', { de: 'seta4.a', alta: true, dur: 2.0 }), s('seta4', 2.0)]),
      // 5. A1 ajusta a passada (de dentro para fora) para receber a bola na Zona Alvo; trocam a cada 8 bolas.
      passo(5, [j('A1', [96, 50], 1.4), j('L1', 'A1', 2.4, 1.8), j('A1', 'L1', 2.4, 1.8)]),
    ],
  },

  // 83 · Levantamento lateral de manchete com inclinação de ombros
  83: {
    bolaInicial: { ref: 'A1', dx: 6, dy: -3 },
    passos: [
      // 1. A1 envia um passe mais rápido e baixo para o cone central (a 2 m da rede).
      passo(1, [b('seta1.b', { dur: 2.0 }), s('seta1', 2.0)]),
      // 2. L1 sai da esquerda correndo em direção à direita.
      passo(2, [j('L1', 'seta2.b', 1.4), s('seta2', 1.4)]),
      // 3. Estanca os dois pés de frente para a lateral direita (ou usa a manchete lateral) e manda a bola à Zona Alvo.
      passo(3, [b('zona1', { de: 'seta4.a', alta: true, dur: 1.8 }), s('seta4', 1.8)]),
      // 4. Na segunda metade da série, A1 pede a bola de volta na esquerda; L1 inclina os braços lateralmente para a esquerda.
      passo(4, [b('seta1.b', { de: { ref: 'A1', dx: 6, dy: -3 }, dur: 1.6 }), b([104, 38], { alta: true, dur: 1.6, atraso: 1.8 })]),
      // 5. Trocam de função a cada 10 bolas.
      trocar(5, 'L1', 'A1', 2.4),
    ],
  },

  // 84 · Levantamento de manchete de costas (inversão de lado)
  84: {
    bolaInicial: { ref: 'A1', dx: 6, dy: 0 },
    passos: [
      // 1. L1 olha para a linha lateral esquerda; A1 envia o passe alto no centro e corre para atacar na direita.
      passo(1, [b('seta1.b', { alta: true, dur: 2.2 }), s('seta1', 2.2), j('A1', 'seta2.b', 1.8, 1.4), s('seta2', 1.8, 1.4)]),
      // 2. L1 deixa a bola cair um pouco mais perto do peito/ombro.
      esperar(2, 0.8),
      // 3. No contato, estende os joelhos, projeta o quadril, arqueia o topo das costas e sobe os ombros.
      passo(3, [j('L1', [116, 70], 0.3), j('L1', [116, 72], 0.3, 0.3)]),
      // 4. A bola sobe limpa por cima da cabeça de L1 e cai na Zona Alvo 2, às suas costas.
      passo(4, [b('zona2', { de: 'seta3.a', alta: true, dur: 2.0 }), s('seta3', 2.0)]),
      // 5. Alternam levantamentos de frente (Zona 1) e de costas (Zona 2); rodam a cada 8 bolas.
      trocar(5, 'L1', 'A1', 2.4),
    ],
  },
}
