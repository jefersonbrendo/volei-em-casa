/** Lote 3 (parte C): exercícios 109 a 116 (ataque). */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, s, trocar } from './ajudantes'

export const LOTE_3C: Record<number, Animacao> = {
  // 109 · Golpe de nó dos dedos ("poke" / coquinho) na zona curta
  109: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. Instrução técnica: o "POKE", com os nós rígidos das falanges médias e o polegar fechado ao lado.
      esperar(1, 1.4),
      // 2. L1 levanta a bola para a entrada esquerda (a 1,5 m da rede).
      passo(2, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8)]),
      // 3. A1 faz a passada normal de ataque e sobe armando o braço alto como numa cortada forte.
      passo(3, [j('A1', 'seta2.b', 1.0), s('seta2', 1.0)]),
      // 4. No topo do salto fecha os dedos em "poke" e dá um toque seco e curto, que cai morto na Zona Alvo 1.
      passo(4, [j('A1', [109.5, 30], 0.35), j('A1', [109.5, 35.2], 0.35, 0.35), b('zona1', { de: 'seta3.a', dur: 0.9, atraso: 0.3 }), s('seta3', 0.9, 0.3)]),
      // 5. Após 10 repetições (5 na paralela curta e 5 no meio curto), invertem os papéis.
      passo(5, [b('zona2', { de: 'seta4.a', dur: 0.9 }), s('seta4', 0.9), j('A1', 'L1', 2.4, 1.4), j('L1', 'A1', 2.4, 1.4)]),
    ],
  },

  // 110 · Golpe de ponta de dedos rígidos ("cobra") mirando as linhas
  110: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. Explicação técnica: na "COBRA", os 5 dedos colados e rígidos, punho travado, dão 10 cm a mais de alcance.
      esperar(1, 1.4),
      // 2. L1 levanta a bola alta a 1,5 m da rede.
      passo(2, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8)]),
      // 3. A1 faz a chamada de salto, estende o braço ao máximo e toca com as pontas dos dedos rígidas.
      passo(3, [j('A1', 'seta2.b', 1.0), s('seta2', 1.0), j('A1', [109.5, 30], 0.35, 1.0), j('A1', [109.5, 35.2], 0.35, 1.35)]),
      // 4. Primeiros 5 ataques: empurra a "cobra" com arco por cima de um bloqueio imaginário, na Zona Alvo 1 (fundo da paralela).
      passo(4, [b('zona1', { de: 'seta3.a', alta: true, dur: 2.0 }), s('seta3', 2.0)]),
      // 5. 5 ataques seguintes: gira o ombro no ar e aplica a "cobra" na Zona Alvo 2 (diagonal); depois trocam.
      passo(5, [b('zona2', { de: 'seta4.a', alta: true, dur: 2.0 }), s('seta4', 2.0), j('A1', 'L1', 2.4, 2.2), j('L1', 'A1', 2.4, 2.2)]),
    ],
  },

  // 111 · Cortada potente no corredor da paralela
  111: {
    bolaInicial: { ref: 'A1', dx: 6, dy: 4 },
    passos: [
      // 1. A1 passa a bola para L1 e se posiciona aberto, perto da linha lateral esquerda.
      passo(1, [b('seta1.b', { alta: true, dur: 1.9 }), s('seta1', 1.9)]),
      // 2. L1 levanta a bola alta até 1 m da antena esquerda (1,5 m da rede).
      passo(2, [b('seta2.b', { de: 'seta2.a', alta: true, dur: 2.0 }), s('seta2', 2.0)]),
      // 3. Para atacar na paralela sem jogar na antena nem para fora, A1 mantém a bola em frente ao ombro direito.
      passo(3, [j('A1', 'seta3.b', 1.2), s('seta3', 1.2)]),
      // 4. No ar, aponta a mão guia para o corredor e bate de mão aberta, quebrando o punho reto na linha da coxa.
      passo(4, [j('A1', [110.6, 20], 0.35), j('A1', [110.6, 25.7], 0.35, 0.35), b('zona1', { de: 'seta4.a', dur: 1.0, atraso: 0.3 }), s('seta4', 1.0, 0.3)]),
      // 5. Após 6 ataques na paralela esquerda, mudam para a saída de rede direita e treinam na paralela direita.
      passo(5, [j('A1', [62, 117], 2.0), b('zona2', { de: [122.3, 119], dur: 1.0, atraso: 2.4 })]),
    ],
  },

  // 112 · Cortada potente na diagonal longa
  112: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. A1 começa a corrida de aproximação abrindo 1 passo para fora da linha lateral, ganhando ângulo de diagonal.
      passo(1, [j('A1', 'seta1.b', 1.8), s('seta1', 1.8)]),
      // 2. L1 levanta a bola a 1,5 m da rede e 1,5 m da antena.
      passo(2, [b('seta2.b', { alta: true, dur: 1.9 }), s('seta2', 1.9)], { junto: 0.6 }),
      // 3. A1 entra em um ângulo de 45 graus em relação à rede (pés e peito apontam para a Zona Alvo na diagonal oposta).
      esperar(3, 0.8),
      // 4. No ponto mais alto do salto, solta o braço em potência máxima na direção do peito, cruzando a quadra até a diagonal longa.
      passo(4, [j('A1', [112.1, 28], 0.35), j('A1', [112.1, 33.6], 0.35, 0.35), b('zona1', { de: 'seta3.a', dur: 1.0, atraso: 0.3 }), s('seta3', 1.0, 0.3)]),
      // 5. 6 ataques da esquerda para a diagonal direita e 6 da direita para a diagonal esquerda; depois trocam com L1.
      passo(5, [b('zona2', { de: [122.3, 109], dur: 1.0 }), j('A1', 'L1', 2.4, 1.4), j('L1', 'A1', 2.4, 1.4)]),
    ],
  },

  // 113 · Bola de "cut shot" (diagonal curtíssima rente à rede)
  113: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. O "cut shot" é um dos golpes mais letais da praia quando o bloqueador fecha a paralela.
      esperar(1, 1.4),
      // 2. A1 faz a aproximação igual à da cortada forte na diagonal (peito a 45 graus).
      passo(2, [j('A1', 'seta1.b', 1.8), s('seta1', 1.8), b('seta2.b', { alta: true, dur: 1.9, atraso: 0.6 }), s('seta2', 1.9, 0.6)]),
      // 3. No topo do salto, desacelera o braço a 30% e "corta" a face externa da bola, girando o polegar para baixo.
      passo(3, [j('A1', [112.5, 30], 0.35), j('A1', [112.5, 35.5], 0.35, 0.35), b('zona1', { de: 'seta3.a', dur: 1.2, atraso: 0.3 }), s('seta3', 1.2, 0.3)]),
      // 4. A bola sai com efeito lateral, cruza a fita em ângulo agudo e cai a 2 m da rede, perto da linha lateral oposta.
      esperar(4, 1.2),
      // 5. 6 cuts da esquerda e 6 da direita; depois trocam.
      trocar(5, 'A1', 'L1', 2.4),
    ],
  },

  // 114 · Bola alta por cima do bloqueio ("lob" / chute para o canto de fundo)
  114: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. A1 passa a bola para L1 e inicia a aproximação de ataque.
      passo(1, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8), j('A1', 'seta2.b', 1.4, 0.8), s('seta2', 1.4, 0.8)]),
      // 2. B1 fecha a frente de A1 e salta com os braços bem altos.
      passo(2, [j('B1', [149, 26], 0.35), j('B1', [149, 32], 0.35, 0.35)]),
      // 3. Vendo o paredão de B1, A1 mantém o braço alto e executa o "Lob de Praia".
      esperar(3, 0.8),
      // 4. A bola passa 1 m acima da ponta dos dedos do bloqueio e cai no canto de fundo da paralela.
      passo(4, [b('zona1', { de: 'seta3.a', alta: true, dur: 2.6 }), s('seta3', 2.6)]),
      // 5. Alterna 4 lobs no canto da paralela e 4 no da diagonal; rodam a cada 8 bolas.
      passo(5, [b('zona2', { de: 'seta4.a', alta: true, dur: 2.6 }), s('seta4', 2.6), j('A1', 'L1', 2.4, 2.8), j('L1', 'A1', 2.4, 2.8)]),
    ],
  },

  // 115 · Ataque de segunda bola (surpresa após recepção alta no centro)
  115: {
    bolaInicial: { ref: 'D1', dx: -6, dy: -3 },
    passos: [
      // 1. D1 saca ou envia uma bola para A1 na meia-quadra esquerda.
      passo(1, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 2. A1 faz uma recepção alta e perfeita, que sobe a 1,5 m da rede no centro da quadra.
      passo(2, [b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.8 }), s('seta2', 1.8)]),
      // 3. J2 lê que a bola está perfeita, grita "MINHA DE SEGUNDA!" e acelera em ritmo de passada de ataque.
      passo(3, [j('J2', 'seta3.b', 1.5), s('seta3', 1.5)]),
      // 4. J2 salta no ponto mais alto e ataca a segunda bola, mirando nas Zonas Alvo da quadra direita.
      passo(4, [b('zona1', { de: 'seta5.a', dur: 1.0 }), s('seta5', 1.0)]),
      // 5. A cada 6 bolas, invertem quem passa e quem ataca de segunda.
      passo(5, [b('zona2', { de: 'seta6.a', dur: 1.0 }), s('seta6', 1.0), j('A1', 'J2', 2.4, 1.4), j('J2', 'A1', 2.4, 1.4)]),
    ],
  },

  // 116 · Ataque de bola mal levantada: afastada da rede (a 3,5 metros)
  116: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -5 },
    passos: [
      // 1. A1 passa para L1; L1 simula um levantamento ruim que cai no cone de 3,5 m, longe da fita.
      passo(1, [b('seta1.b', { alta: true, dur: 2.0 }), s('seta1', 2.0)]),
      // 2. Disciplina de pés: A1 não corre até a rede; faz só 1 ou 2 passos curtos, freando aos 3,5 m.
      passo(2, [j('A1', 'seta2.b', 0.9), s('seta2', 0.9)]),
      // 3. A1 salta equilibrado aos 3,5 m e golpeia a bola de baixo para a frente e para cima, com máximo topspin.
      passo(3, [j('A1', [78.9, 34], 0.35), j('A1', [78.9, 40.7], 0.35, 0.35), b('zona1', { de: 'seta3.a', alta: true, dur: 2.4, atraso: 0.3 }), s('seta3', 2.4, 0.3)]),
      // 4. A bola faz um arco que limpa a rede e mergulha pesada nas Zonas Alvo do fundo da quadra direita.
      passo(4, [b('zona2', { de: 'seta4.a', alta: true, dur: 2.4 }), s('seta4', 2.4)]),
      // 5. Após 8 bolas afastadas, trocam os papéis.
      trocar(5, 'A1', 'L1', 2.4),
    ],
  },
}
