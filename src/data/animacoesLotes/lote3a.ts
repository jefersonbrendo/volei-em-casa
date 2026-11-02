/** Lote 3 (parte A): exercícios 85 a 99 (levantamento e toque). */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, s, trocar } from './ajudantes'

export const LOTE_3A: Record<number, Animacao> = {
  // 85 · Ajuste de altura e distância do levantamento conforme o vento
  85: {
    bolaInicial: { ref: 'A1', dx: 7, dy: 0 },
    passos: [
      // 1. Cenário 1 (contra o vento lateral): L1 baixa o arco (3,5 m) e empurra com 30% a mais de perna.
      passo(1, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8), b('zona1', { de: 'seta2.a', alta: true, dur: 1.8, atraso: 2.0 }), s('seta2', 1.8, 2.0)]),
      // 2. Cenário 2 (a favor do vento lateral): L1 amortece o toque, mirando no meio do caminho.
      passo(2, [b('seta1.b', { de: { ref: 'A1', dx: 7, dy: 0 }, alta: true, dur: 1.8 }), b('zona2', { de: [108, 79], alta: true, dur: 2.2, atraso: 2.0 })]),
      // 3. Cenário 3 (vento das costas para a rede): L1 mira a 2 m da rede para o vento empurrar até 1,2 m.
      passo(3, [b('seta1.b', { de: { ref: 'A1', dx: 7, dy: 0 }, alta: true, dur: 1.8 }), b([111, 56], { de: [108, 66], alta: true, dur: 1.5, atraso: 2.0 })]),
      // 4. 6 levantamentos contra o vento e 6 a favor, seguidos de chamada de ataque de A1.
      esperar(4, 1.4),
      // 5. Invertem os papéis após as 12 bolas.
      trocar(5, 'L1', 'A1', 2.4),
    ],
  },

  // 86 · Levantamento alto e descolado (2 m da rede) para leitura de golpe do atacante
  86: {
    bolaInicial: { ref: 'A1', dx: 7, dy: 2 },
    passos: [
      // 1. A1 passa a bola dos 5,5 m para L1 no centro da quadra.
      passo(1, [b('seta1.b', { alta: true, dur: 2.0 }), s('seta1', 2.0)]),
      // 2. L1 estabiliza os pés e levanta de manchete, a 4,5 m de altura, para a Zona Descolada (2 m da rede).
      passo(2, [b('zona1', { de: 'seta2.a', alta: true, dur: 2.4 }), s('seta2', 2.4)]),
      // 3. Com a bola a 2 m da fita, A1 salta enxergando o bloqueador/defensor D1 pela visão periférica.
      passo(3, [j('A1', 'seta3.b', 1.4), s('seta3', 1.4)]),
      // 4. Quando A1 está no ar, D1 faz um movimento claro (fecha a paralela ou recua na diagonal).
      passo(4, [j('D1', [153, 52], 0.9), j('D1', [153, 36], 0.9, 1.2)]),
      // 5. A1 aproveita o espaço do levantamento descolado e coloca a bola na Zona Alvo que ficou vazia.
      passo(5, [b('zona3', { de: 'seta5.a', dur: 1.0 }), s('seta5', 1.0), s('seta6', 0.9, 1.4)]),
    ],
  },

  // 87 · Saída do bloqueio na rede e levantamento de transição + Ataque (Transição 1)
  87: {
    bolaInicial: { ref: 'J1', dx: -6, dy: -3 },
    passos: [
      // 1. L1 salta para bloquear (ou finta) enquanto P/T envia uma bola de ataque na diagonal para A1.
      passo(1, [j('L1', [129, 47], 0.35), j('L1', [129, 53], 0.35, 0.35), b('seta1.b', { dur: 2.2 }), s('seta1', 2.2)]),
      // 2. A1 defende a bola de manchete alta para o meio da sua quadra (por volta dos 3 m da rede).
      passo(2, [b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.8 }), s('seta2', 1.8)]),
      // 3. Ao aterrissar, L1 localiza a defesa, sai da rede em corrida rápida até o centro e para os dois pés.
      passo(3, [j('L1', 'seta3.b', 1.4), s('seta3', 1.4)]),
      // 4. L1 faz o levantamento de manchete de transição para a Zona Alvo (1,5 m da rede).
      passo(4, [b('zona1', { de: 'seta5.a', alta: true, dur: 1.7 }), s('seta5', 1.7)]),
      // 5. A1 corre em transição, salta na Zona Alvo e finaliza o contra-ataque; rodam a cada 6 bolas.
      passo(5, [j('A1', 'seta6.b', 1.6), s('seta6', 1.6), b('seta8.b', { de: 'seta8.a', dur: 0.9, atraso: 1.4 }), s('seta8', 0.9, 1.4), j('L1', 'A1', 2.4, 3.0), j('A1', 'L1', 2.4, 3.0)]),
    ],
  },

  // 88 · Defesa difícil, levantamento de compensação e ataque de largada/corte (Transição 2)
  88: {
    bolaInicial: { ref: 'J1', dx: -6, dy: -3 },
    passos: [
      // 1. L1 retira da rede para a paralela; P/T ataca uma bola difícil que A1 defende, fazendo a bola subir atrás dos 4,5 m.
      passo(1, [b('seta1.b', { dur: 1.7 }), s('seta1', 1.7), b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.9, atraso: 1.9 }), s('seta2', 1.9, 1.9)]),
      // 2. L1 corre até o cone de 4,5 m, planta o pé de trás e empurra o levantamento por 3 m até a Zona Alvo.
      passo(2, [j('L1', 'seta3.b', 1.4), s('seta3', 1.4), b('zona1', { de: 'seta5.a', alta: true, dur: 1.9, atraso: 1.5 }), s('seta5', 1.9, 1.5)]),
      // 3. Enquanto a bola viaja alta, A1 se levanta rápido da areia e acelera para a rede.
      passo(3, [j('A1', 'seta6.b', 1.6), s('seta6', 1.6)], { junto: 1.6 }),
      // 4. A1 salta e finaliza o contra-ataque com "cut shot" na diagonal curta (ou "poke").
      passo(4, [b('seta7.b', { de: 'seta7.a', dur: 0.9 }), s('seta7', 0.9)]),
      // 5. Realizam 6 transições e invertem quem defende e quem levanta.
      trocar(5, 'L1', 'A1', 2.4),
    ],
  },

  // 89 · Levantamento guiado pelo grito do atacante ("Ponta!" ou "Meio!") + Ataque
  89: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 saca em direção a A1 na meia-quadra esquerda.
      passo(1, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 2. A1 recepciona a bola para o centro da quadra, onde L1 já infiltrou.
      passo(2, [b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.7 }), s('seta2', 1.7)]),
      // 3. Com a bola da recepção subindo, A1 lê o bloqueador B1 e grita sua escolha: "PONTA!" ou "MEIO!".
      esperar(3, 1.2),
      // 4. L1 ajusta só o impulso das pernas: mais perna para alongar na "Ponta" ou amortecimento para o "Meio".
      passo(4, [b('zona1', { de: 'seta4.a', alta: true, dur: 2.2 }), s('seta4', 2.2), s('seta3', 0.8, 2.4)]),
      // 5. A1 entra no ponto pedido e ataca fugindo do bloqueio de B1.
      passo(5, [j('A1', 'seta5.b', 1.4), s('seta5', 1.4), b('seta9.b', { de: 'seta9.a', dur: 1.0, atraso: 1.3 }), s('seta9', 1.0, 1.3), s('seta7', 0.8, 2.6)]),
    ],
  },

  // 90 · Desafio do Levantador de Ouro: 3 passes quebrados + Side-out valendo ponto
  90: {
    passos: [
      // 1. Cada dupla tem uma sequência de 3 bolas lançadas exatamente nos 3 cones de sufoco.
      esperar(1, 1.4),
      // 2. Bola 1 (colada na rede): L1 corre, freia de lado para não tocar na fita e levanta na Caixa de Ouro.
      passo(2, [j('L1', 'seta1.b', 1.5), s('seta1', 1.5), b('zona1', { de: 'seta7.a', alta: true, dur: 2.0, atraso: 1.5 }), s('seta7', 2.0, 1.5)]),
      // 3. Bola 2 (no fundo, aos 6,5 m): L1 recua rápido, gira o quadril e coloca a bola na Caixa de Ouro.
      passo(3, [j('L1', 'L1', 1.0), j('L1', 'seta3.b', 1.8, 1.2), s('seta3', 1.8, 1.2), b('zona1', { de: 'seta8.a', alta: true, dur: 2.2, atraso: 2.8 }), s('seta8', 2.2, 2.8)]),
      // 4. Bola 3 (fora da lateral): L1 sai da quadra e resgata trazendo a bola para a Caixa de Ouro sem passar pela antena.
      passo(4, [j('L1', 'L1', 1.0), j('L1', 'seta5.b', 2.2, 1.2), s('seta5', 2.2, 1.2), b('zona1', { de: 'seta9.a', alta: true, dur: 2.0, atraso: 3.0 }), s('seta9', 2.0, 3.0)]),
      // 5. Se a bola cair na Caixa de Ouro e a dupla vencer o rally, vale 2 pontos; A1 finaliza o ponto.
      passo(5, [b('seta10.b', { de: 'seta10.a', dur: 1.0 }), s('seta10', 1.0)]),
    ],
  },

  // ───── TOQUE (técnica) ─────
  // 91 · Moldura das mãos e entrada embaixo da bola
  91: {
    bolaInicial: { ref: 'A1', dx: 6, dy: 3 },
    passos: [
      // 1. L1 posiciona-se no cone central, pés na largura dos ombros e pé direito meio passo à frente.
      esperar(1, 1.2),
      // 2. Antes do lançamento, eleva as mãos 15 cm acima da testa, formando o "diamante" com polegares e indicadores.
      esperar(2, 1.0),
      // 3. A1 lança em arco alto a 50 cm de L1, que dá 1 passo curto para colocar a testa embaixo da bola.
      passo(3, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8), j('L1', 'seta2.b', 0.8, 0.6), s('seta2', 0.8, 0.6)]),
      // 4. Primeira metade: deixa a bola encaixar na moldura e congela por 1 segundo.
      esperar(4, 1.2),
      // 5. Segunda metade: recebe na moldura alta e devolve com extensão de pernas e braços; trocam a cada 10 bolas.
      passo(5, [b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.8 }), s('seta3', 1.8), j('L1', 'A1', 2.4, 2.2), j('A1', 'L1', 2.4, 2.2)]),
    ],
  },

  // 92 · Toque limpo na regra da areia: zero giro
  92: {
    bolaInicial: { ref: 'J2', dx: -5, dy: -6 },
    passos: [
      // 1. Explicação prática: as duas faltas do toque, "Dois Toques" e "Condução".
      esperar(1, 1.4),
      // 2. J2 lança a bola para o alto na direção de L1.
      passo(2, [b('seta1.b', { alta: true, dur: 1.9 }), s('seta1', 1.9)]),
      // 3. L1 entra embaixo da bola, para os pés e faz um toque elástico e único acima da testa, congelando o acabamento.
      passo(3, [b('seta2.b', { alta: true, dur: 1.9 }), s('seta2', 1.9)]),
      // 4. J2 observa os gomos da bola: "LIMPA!" (+1) ou "FALTA!".
      esperar(4, 1.2),
      // 5. Séries de 10 toques cada um tentando zerar as faltas.
      trocar(5, 'L1', 'J2', 2.4),
    ],
  },

  // 93 · Levantamento de toque de frente na zona ideal
  93: {
    bolaInicial: { ref: 'A1', dx: 6, dy: 3 },
    passos: [
      // 1. A1 faz um passe controlado de manchete dos 5 m em direção a L1.
      passo(1, [b('seta1.b', { alta: true, dur: 1.9 }), s('seta1', 1.9)]),
      // 2. L1 enquadra os pés e os ombros de frente para a Zona Alvo antes que a bola desça.
      esperar(2, 0.9),
      // 3. Com a testa embaixo da bola, flexiona levemente os joelhos e estende pernas, cotovelos e punhos juntos.
      passo(3, [j('L1', [116, 70], 0.3), j('L1', [116, 72], 0.3, 0.3)]),
      // 4. A bola faz uma parábola limpa de 3,5 a 4 m e cai na Zona Alvo a 1,5 m da rede.
      passo(4, [b('zona1', { de: 'seta2.a', alta: true, dur: 2.0 }), s('seta2', 2.0)]),
      // 5. Após 8 bolas na entrada esquerda, invertem o lado; depois trocam de função.
      trocar(5, 'L1', 'A1', 2.4),
    ],
  },

  // 94 · Deslocamento para frente e parada equilibrada antes do toque
  94: {
    bolaInicial: { ref: 'A1', dx: 7, dy: 3 },
    passos: [
      // 1. L1 começa no fundo (5 m da rede) ao lado de A1.
      esperar(1, 1.2),
      // 2. Quando A1 passa a bola alta para o cone de 1,5 m, L1 dispara em velocidade pela areia fofa.
      passo(2, [b('seta1.b', { alta: true, dur: 2.2 }), s('seta1', 2.2), j('L1', 'seta2.b', 1.5, 0.5), s('seta2', 1.5, 0.5)]),
      // 3. L1 precisa chegar ao cone antes da bola descer, cravar os dois pés e fazer uma pausa visível de equilíbrio.
      esperar(3, 0.9),
      // 4. Com o corpo 100% estático, executa o toque de dedos limpo para a Zona Alvo.
      passo(4, [b('zona1', { de: 'seta4.a', alta: true, dur: 1.8 }), s('seta4', 1.8)]),
      // 5. Se L1 ainda estiver dando passo na hora do toque, o ponto é anulado; trocam a cada 8 bolas.
      trocar(5, 'L1', 'A1', 2.4),
    ],
  },

  // 95 · Deslocamento lateral e giro de ombros para o parceiro
  95: {
    bolaInicial: { ref: 'A1', dx: 7, dy: 3 },
    passos: [
      // 1. A1 passa a bola deslocada para o lado direito da quadra, em direção ao cone lateral direito.
      passo(1, [b('seta1.b', { alta: true, dur: 2.6 }), s('seta1', 2.6)]),
      // 2. L1 está no centro e precisa correr 3 m para a direita (de costas para A1).
      passo(2, [j('L1', 'seta2.b', 1.6), s('seta2', 1.6)], { junto: 0.6 }),
      // 3. No último passo, planta o pé direito por fora da bola e gira 180 graus o quadril e os ombros de frente para A1.
      passo(3, [j('L1', [111, 113], 0.9), s('seta4', 0.9)]),
      // 4. Enquadrado para a Zona Alvo esquerda, faz um levantamento de toque longo até a Zona Alvo de A1.
      passo(4, [b('zona1', { de: 'seta5.a', alta: true, dur: 2.6 }), s('seta5', 2.6)]),
      // 5. Trocam de função a cada 8 repetições.
      trocar(5, 'L1', 'A1', 2.6),
    ],
  },

  // 96 · Recuo em diagonal e toque de dentro para fora (a 4 metros da rede)
  96: {
    bolaInicial: { ref: 'A1', dx: 7, dy: 2 },
    passos: [
      // 1. L1 começa perto da rede; A1 envia uma recepção alta que fica curta, no cone de 4 m.
      passo(1, [b('seta1.b', { alta: true, dur: 2.0 }), s('seta1', 2.0)]),
      // 2. L1 abre o quadril e recua rápido até o cone de 4 m, ultrapassando meio passo a linha da bola.
      passo(2, [j('L1', 'seta2.b', 1.4), s('seta2', 1.4)], { junto: 0.5 }),
      // 3. Antes do toque, planta o pé esquerdo atrás e aponta o pé direito e os ombros em diagonal para a Zona Alvo.
      esperar(3, 0.8),
      // 4. Transfere o peso das pernas de trás para a frente e faz um toque firme dos 4 m até a Zona Alvo.
      passo(4, [b('zona1', { de: 'seta3.a', alta: true, dur: 1.8 }), s('seta3', 1.8)]),
      // 5. Trocam de função a cada 8 bolas.
      trocar(5, 'L1', 'A1', 2.4),
    ],
  },

  // 97 · Levantamento de toque de costas (inversão de jogo)
  97: {
    bolaInicial: { ref: 'A1', dx: 7, dy: 0 },
    passos: [
      // 1. A1 passa a bola alta para L1 e imediatamente corre para atacar na saída direita (atrás das costas de L1).
      passo(1, [b('seta1.b', { alta: true, dur: 2.0 }), s('seta1', 2.0), j('A1', 'seta2.b', 1.8, 1.5), s('seta2', 1.8, 1.5)]),
      // 2. L1 olha para a Zona Alvo 1, mas deixa a bola entrar 5 cm mais para trás (no topo da testa).
      esperar(2, 0.9),
      // 3. No contato, empurra a areia com as pernas, projeta o quadril, arqueia as costas e estende os braços para cima e para trás.
      passo(3, [j('L1', [116, 70], 0.3), j('L1', [116, 72], 0.3, 0.3)]),
      // 4. A bola sai limpa e sem giro por cima da cabeça de L1, caindo na Zona Alvo 2, para A1.
      passo(4, [b('zona2', { de: 'seta3.a', alta: true, dur: 2.0 }), s('seta3', 2.0)]),
      // 5. A1 varia a chamada: "FRENTE!" → Zona 1; "BOLA DE COSTAS!" → Zona 2.
      esperar(5, 1.4),
    ],
  },

  // 98 · Decisão rápida no ar: toque ou manchete?
  98: {
    revisar: 'A seta de deslocamento 2 (de A1 até o centro) não tem passo correspondente no texto e fica fixa no desenho.',
    bolaInicial: { ref: 'A1', dx: 7, dy: 3 },
    passos: [
      // 1. Regra de ouro do levantador de praia: só decidir se levanta de toque depois de ver o passe do parceiro.
      esperar(1, 1.4),
      // 2. A1 envia bolas variadas para o centro da quadra, misturando dois tipos de passe sem avisar.
      passo(2, [b('seta1.b', { alta: true, dur: 2.0 }), s('seta1', 2.0)]),
      // 3. Tipo A ("Bola Limpa"): passe alto e L1 com a testa embaixo da bola é obrigado a levantar de TOQUE.
      passo(3, [j('L1', 'seta3.b', 1.4), s('seta3', 1.4), b('zona1', { de: 'seta5.a', alta: true, dur: 1.9, atraso: 1.2 }), s('seta5', 1.9, 1.2)]),
      // 4. Tipo B ("Bola Armadilha"): passe baixo, rápido ou girando; L1 é obrigado a levantar de MANCHETE.
      passo(4, [b('seta1.b', { de: { ref: 'A1', dx: 7, dy: 3 }, dur: 1.2 }), b('zona1', { alta: true, dur: 1.9, atraso: 1.4 })]),
      // 5. Pontuação: escolha técnica certa + Zona Alvo = +1; toque numa bola armadilha com falta = -2.
      esperar(5, 1.4),
    ],
  },

  // 99 · Toque de dedos com vento contra e vento a favor
  99: {
    bolaInicial: { ref: 'A1', dx: 7, dy: 0 },
    passos: [
      // 1. O vento afeta a bola antes de tocar a mão (na descida do passe) e depois que ela sai da mão.
      esperar(1, 1.4),
      // 2. Primeiros 6 levantamentos (Zona 1, contra o vento): espera um milissegundo a mais e toca firme, com arco mais baixo.
      passo(2, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8), b('zona1', { de: 'seta2.a', alta: true, dur: 1.8, atraso: 2.0 }), s('seta2', 1.8, 2.0)]),
      // 3. 6 seguintes (Zona 2, a favor do vento): meio passo à frente e toque curto e suave, deixando o vento levar a bola.
      passo(3, [b('seta1.b', { de: { ref: 'A1', dx: 7, dy: 0 }, alta: true, dur: 1.8 }), j('L1', [113, 75], 0.5, 1.4), b('zona2', { de: [113.4, 79], alta: true, dur: 2.2, atraso: 2.0 })]),
      // 4. Durante todo o exercício, L1 mantém os pés plantados na areia.
      esperar(4, 1.2),
      // 5. Trocam de função após as 12 bolas.
      trocar(5, 'L1', 'A1', 2.4),
    ],
  },
}
