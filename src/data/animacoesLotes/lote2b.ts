/** Lote 2 (parte B): exercícios 59 a 68. */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, s, trocar } from './ajudantes'

export const LOTE_2B: Record<number, Animacao> = {
  // 59 · Recuo para bola funda e leitura de linha ("dentro ou fora")
  59: {
    bolaInicial: { ref: 'J2', dx: -6, dy: -3 },
    passos: [
      // 1. J1 começa a 4,5 m da rede (simulando quem estava cobrindo o saque curto).
      esperar(1, 1.2),
      // 2. J2 bate um saque longo em direção aos últimos 2 metros do fundo da quadra esquerda.
      passo(2, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 3. J1 gira o quadril (de lado para a rede) e recua rápido em passo cruzado até a linha de fundo.
      passo(3, [j('J1', 'seta2.b', 1.8), s('seta2', 1.8)], { junto: 0.5 }),
      // 4. Decisão em décimos de segundo: bola dentro ("DENTRO!") → manchete alta para a Zona Alvo.
      passo(4, [b('zona1', { de: 'seta4.a', alta: true, dur: 1.8 }), s('seta4', 1.8)]),
      // 5. Cada leitura certa vale 1 ponto; trocam a cada 10 saques.
      trocar(5, 'J1', 'J2', 2.6),
    ],
  },

  // 60 · Divisão básica da quadra em dupla e chamada precoce
  60: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. J1 e J2 assumem a base de recepção lado a lado a 5,5 m da rede.
      esperar(1, 1.2),
      // 2. S1 saca por cima controlado, variando entre o lado de J1 e o de J2.
      passo(2, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 3. Quem a bola procura grita "MINHA!" antes de ela cruzar a fita da rede.
      esperar(3, 0.9),
      // 4. Ao ouvir o grito, o outro jogador corre em diagonal para a Zona Alvo, para ser o levantador.
      passo(4, [j('J2', 'seta3.b', 1.6), s('seta3', 1.6)]),
      // 5. O passador coloca a bola na Zona Alvo e o parceiro a agarra; rodam a cada 8 saques.
      passo(5, [b('zona1', { de: 'seta2.a', alta: true, dur: 1.7 }), s('seta2', 1.7), j('J1', 'J2', 2.4, 2.2), j('J2', 'J1', 2.4, 2.2)]),
    ],
  },

  // 61 · Recepção de saque por cima nos dois corredores mirando o centro
  61: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 saca por cima, firme, alternando entre o corredor de J1 e o de J2.
      passo(1, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0), b('seta2.b', { de: { ref: 'S1', dx: -6, dy: -3 }, alta: true, dur: 3.0, atraso: 3.4 }), s('seta2', 3.0, 3.4)]),
      // 2. Quando o saque vai perto da linha lateral, o receptor se desloca e inclina o ombro de fora.
      passo(2, [j('J1', 'seta3.b', 1.2), s('seta3', 1.2), j('J2', 'seta4.b', 1.2, 0.3), s('seta4', 1.2, 0.3)]),
      // 3. O passador manda a bola em arco alto para a Zona Alvo central.
      passo(3, [b('zona1', { de: 'seta5.a', alta: true, dur: 1.7 }), s('seta5', 1.7), b('zona1', { de: 'seta6.a', alta: true, dur: 1.7, atraso: 2.2 }), s('seta6', 1.7, 2.2)]),
      // 4. O parceiro que não passou infiltra até a Zona Alvo e faz um toque de controle para o alto.
      passo(4, [j('J2', 'zona1', 1.6)]),
      // 5. A cada 10 saques, rodam as funções entre os três.
      passo(5, [j('J1', 'S1', 2.6), j('S1', 'J2', 2.6), j('J2', 'J1', 2.6)]),
    ],
  },

  // 62 · Dominando a bola na "costura" (regra de conflito entre a dupla)
  62: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. A dupla define a regra da costura (quem a "fecha").
      esperar(1, 1.4),
      // 2. S1 saca todas as bolas exatamente no meio entre J1 e J2.
      passo(2, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 3. O responsável pela costura dá 1 passo firme em diagonal para dentro, gritando "MINHA!".
      passo(3, [j('J1', 'seta2.b', 1.0), s('seta2', 1.0)]),
      // 4. O parceiro recolhe os braços e contorna rumo à Zona Alvo na rede.
      passo(4, [j('J2', 'seta4.b', 1.6), s('seta4', 1.6), b('zona1', { de: 'seta6.a', alta: true, dur: 1.5, atraso: 0.4 }), s('seta6', 1.5, 0.4)]),
      // 5. Após 6 bolas, invertem a combinação: J2 assume a costura por mais 6 bolas.
      trocar(5, 'J1', 'J2', 2.4),
    ],
  },

  // 63 · Recepção em "V": alternando saque curto e saque fundo
  63: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. J1 começa no cone base (5,5 m).
      esperar(1, 1.2),
      // 2. S1 saca curto; J1 arranca para a frente, freia baixo e passa a bola alta na Zona Alvo.
      passo(2, [b('seta1.b', { alta: true, dur: 2.8 }), s('seta1', 2.8), j('J1', 'seta3.b', 1.3, 1.6), s('seta3', 1.3, 1.6), b('zona1', { de: 'seta7.a', alta: true, dur: 1.4, atraso: 3.0 }), s('seta7', 1.4, 3.0)]),
      // 3. Assim que a bola sai do braço de J1, S2 já lança para sacar fundo.
      passo(3, [b('seta2.b', { de: { ref: 'S2', dx: -6, dy: -3 }, alta: true, dur: 3.2 }), s('seta2', 3.2)], { junto: 2.8 }),
      // 4. J1 abre o quadril e corre dos 2,5 m até os 7,5 m, planta o pé de trás e passa a segunda bola.
      passo(4, [j('J1', 'seta5.b', 2.2), s('seta5', 2.2)], { junto: 0.8 }),
      // 5. Séries de 6 bolas alternadas (curta - funda); depois rodam os jogadores.
      passo(5, [b('zona1', { de: 'seta5.b', alta: true, dur: 1.8 }), j('J1', 'S1', 2.6, 2.2), j('S1', 'S2', 2.6, 2.2), j('S2', 'J1', 2.6, 2.2)]),
    ],
  },

  // 64 · Recepção de saque flutuante: pés vivos até o último segundo
  64: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. J1 aguarda em postura ativa, com os braços separados e relaxados.
      esperar(1, 1.2),
      // 2. S1 bate um saque flutuante seco que oscila com o vento.
      passo(2, [b('seta1.b', { dur: 3.0 }), s('seta1', 3.0)]),
      // 3. Enquanto a bola viaja, J1 faz micro-passos rápidos acompanhando o desvio da bola.
      passo(3, [j('J1', 'seta2.b', 2.0), s('seta2', 2.0)], { junto: 0.8 }),
      // 4. Só no último metro fecha e trava a plataforma, devolvendo a bola à Zona Alvo.
      passo(4, [b('zona1', { de: 'seta3.a', alta: true, dur: 1.7 }), s('seta3', 1.7)]),
      // 5. Trocam de função a cada 8 saques flutuantes.
      trocar(5, 'J1', 'S1', 2.6),
    ],
  },

  // 65 · Manchete alta lateral (recurso para saque rápido no peito e ombro)
  65: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 envia bolas rápidas e retas na linha dos ombros e do peito de J1.
      passo(1, [b('seta1.b', { dur: 2.4 }), s('seta1', 2.4)]),
      // 2. J1 treina a "manchete alta de ombro" em vez de tentar o toque de dedos.
      esperar(2, 1.0),
      // 3. Gira o tronco levemente de lado, afasta o quadril da trajetória e inclina a plataforma na altura do ombro.
      passo(3, [j('J1', 'seta2.b', 0.9), s('seta2', 0.9)]),
      // 4. A bola bate no antebraço inclinado e sobe amortecida em direção à Zona Alvo central.
      passo(4, [b('zona1', { de: 'seta3.a', alta: true, dur: 1.8 }), s('seta3', 1.8)]),
      // 5. 5 bolas no ombro direito e 5 no esquerdo; depois invertem os papéis.
      trocar(5, 'J1', 'S1', 2.6),
    ],
  },

  // 66 · Recepção limpa de toque de dedos (quando e como usar na praia)
  66: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 saca com arco médio/alto, acima da linha da testa de J1.
      passo(1, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 2. J1 se desloca rápido para colocar a testa debaixo da bola, com os dois pés plantados.
      passo(2, [j('J1', 'seta2.b', 1.0), s('seta2', 1.0)]),
      // 3. Levanta as duas mãos acima da testa em formato de concha firme.
      esperar(3, 1.0),
      // 4. Toque rápido, simultâneo e simétrico com os 10 dedos, enviando a bola para a Zona Alvo.
      passo(4, [b('zona1', { de: 'seta4.a', alta: true, dur: 1.7 }), s('seta4', 1.7)]),
      // 5. Regra de rigor da praia: mais de 1 giro completo no ar é falta.
      esperar(5, 1.4),
    ],
  },

  // 67 · Recepção do saque alto "Jornada nas Estrelas" contra o sol e vento
  67: {
    revisar: 'O desenho tem um "J1" no alto da quadra (símbolo do sol) além do receptor "J1_1"; o movimento foi animado em J1_1.',
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 bate o saque altíssimo por baixo, a bola sobe de 12 a 15 m.
      passo(1, [b('seta1.b', { alta: true, dur: 3.8 }), s('seta1', 3.8)]),
      // 2. J1 não corre desesperado: acompanha a trajetória com a mão livre como viseira até o ápice.
      esperar(2, 1.4),
      // 3. Quando a bola começa a descer, ajusta com passadas rápidas, mantendo a bola à frente do corpo.
      passo(3, [j('J1_1', 'seta2.b', 1.0), s('seta2', 1.0)]),
      // 4. Flexiona bem os joelhos e leva a bola até a Zona Alvo com a subida das pernas.
      passo(4, [b('zona1', { de: 'seta3.a', alta: true, dur: 1.9 }), s('seta3', 1.9)]),
      // 5. Trocam de lado a cada 8 bolas.
      trocar(5, 'J1_1', 'S1', 2.6),
    ],
  },

  // 68 · Ajuste de profundidade da recepção: vento contra vs. vento a favor
  68: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. J1 começa recebendo na meia-quadra esquerda (S1 saca a favor do vento).
      passo(1, [b('seta1.b', { alta: true, dur: 3.2 }), s('seta1', 3.2)]),
      // 2. J1 posiciona-se no cone de 6,5 m (1 m mais ao fundo que o normal).
      esperar(2, 1.2),
      // 3. No passe, com o vento nas costas, manda a bola mais contida (2 m da rede).
      passo(3, [b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.7 }), s('seta2', 1.7)]),
      // 4. Após 5 bolas, J1 corre para a meia-quadra direita (S2 saca da esquerda contra o vento).
      passo(4, [j('J1', 'J1_1', 2.6)]),
      // 5. Na quadra direita, J1 se adianta para o cone de 4,5 m e empurra o passe mais forte até a Zona Alvo.
      passo(5, [b('seta3.b', { de: { ref: 'S2', dx: 6, dy: -3 }, alta: true, dur: 3.2 }), s('seta3', 3.2), b('zona2', { alta: true, dur: 1.8, atraso: 3.4 })]),
    ],
  },
}
