/** Lote 3 (parte B): exercícios 100 a 107. */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, s, trocar } from './ajudantes'

export const LOTE_3B: Record<number, Animacao> = {
  // 100 · Toque com vento lateral (segurando a bola dentro da quadra)
  100: {
    bolaInicial: { ref: 'A1', dx: 7, dy: 0 },
    passos: [
      // 1. Com o vento pelas costas, o toque normal é empurrado para cima da fita ou para a mão do bloqueador.
      esperar(1, 1.4),
      // 2. A1 passa a bola para o centro; L1 se posiciona em diagonal, o ombro direito para dentro da própria quadra.
      passo(2, [b('seta1.b', { alta: true, dur: 2.0 }), s('seta1', 2.0), s('seta2', 1.0, 1.0)]),
      // 3. L1 toca mirando a 2,5 m da rede; o vento empurra a bola 1 m e ela cai na Zona Alvo.
      passo(3, [b('zona1', { de: 'seta4.a', alta: true, dur: 2.2 }), s('seta4', 2.2)]),
      // 4. Trocam de lado (vento da rede para o fundo): L1 mira o toque mais perto da fita (80 cm).
      passo(4, [b('seta1.b', { de: { ref: 'A1', dx: 7, dy: 0 }, alta: true, dur: 2.0 }), b([116, 44], { de: 'seta4.a', alta: true, dur: 2.0, atraso: 2.2 })]),
      // 5. A1 faz a aproximação e salta para pegar ou atacar a bola no ponto ajustado.
      passo(5, [j('A1', [100, 40], 1.4), j('A1', [100, 34], 0.35, 1.4), j('A1', [100, 40], 0.35, 1.75)]),
    ],
  },

  // 101 · Bola de segunda de toque limpa no fundo da quadra
  101: {
    bolaInicial: { ref: 'A1', dx: 7, dy: 2 },
    passos: [
      // 1. Atenção à regra da bola de segunda de toque: sem condução e com a bola perpendicular aos ombros.
      esperar(1, 1.4),
      // 2. A1 faz uma recepção alta que chega perto da rede (1 m ou 1,5 m da fita).
      passo(2, [b('seta1.b', { alta: true, dur: 2.2 }), s('seta1', 2.2)]),
      // 3. Para passar de segunda dentro da regra, L1 alterna duas técnicas legítimas.
      esperar(3, 1.0),
      // 4. Técnica 1 (giro de última hora): gira os pés e os ombros para o canto do fundo e toca alto e limpo.
      passo(4, [b('zona1', { de: 'seta2.a', alta: true, dur: 2.8 }), s('seta2', 2.8)]),
      // 5. Técnica 2 (toque de costas): de frente para A1, dá um toque de costas limpo e alto sobre o bloqueio.
      passo(5, [b('zona2', { de: 'seta3.a', alta: true, dur: 2.8 }), s('seta3', 2.8)]),
    ],
  },

  // 102 · Sequência completa: recepção, toque de frente e ataque (Side-out 1)
  102: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 saca em direção a A1 na meia-quadra esquerda.
      passo(1, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 2. A1 faz uma recepção alta e controlada para o centro da quadra (a 1,5 m da rede).
      passo(2, [b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.7 }), s('seta2', 1.7)]),
      // 3. L1 infiltra rápido, estanca os pés embaixo da bola e levanta de toque limpo de frente para A1.
      passo(3, [j('L1', 'seta3.b', 1.5), s('seta3', 1.5), b('zona1', { de: 'seta5.a', alta: true, dur: 1.6, atraso: 1.4 }), s('seta5', 1.6, 1.4)]),
      // 4. A1 faz a chamada agressiva e ataca na paralela ou na diagonal livre.
      passo(4, [j('A1', 'seta6.b', 1.4), s('seta6', 1.4), b('seta8.b', { de: 'seta8.a', dur: 1.0, atraso: 1.2 }), s('seta8', 1.0, 1.2)]),
      // 5. A cada 6 side-outs, as duplas invertem de lado.
      passo(5, [j('A1', 'S1', 2.8), j('S1', 'A1', 2.8), j('L1', 'B1', 2.8), j('B1', 'L1', 2.8)]),
    ],
  },

  // 103 · Defesa no fundo, transição e levantamento de toque no contra-ataque
  103: {
    bolaInicial: { ref: 'J1', dx: -6, dy: -3 },
    passos: [
      // 1. L1 salta no bloqueio (ou retira rápido); P/T ataca uma bola firme na diagonal em cima de A1.
      passo(1, [j('L1', [129, 47], 0.35), j('L1', [129, 53], 0.35, 0.35), b('seta1.b', { dur: 2.2 }), s('seta1', 2.2)]),
      // 2. A1 amortece a pancada e defende a bola bem alta (5 m) para o centro da quadra.
      passo(2, [b('seta2.b', { de: 'seta2.a', alta: true, dur: 2.4 }), s('seta2', 2.4)]),
      // 3. Como a defesa subiu alta, L1 sai da rede em sprint curto e chega embaixo da bola com tempo de sobra.
      passo(3, [j('L1', 'seta3.b', 1.4), s('seta3', 1.4)]),
      // 4. L1 arma a moldura acima da testa e entrega um levantamento de toque perfeito na Zona Alvo.
      passo(4, [b('zona1', { de: 'seta5.a', alta: true, dur: 1.7 }), s('seta5', 1.7)]),
      // 5. A1 faz a aproximação do fundo e crava o contra-ataque; rodam a cada 6 bolas.
      passo(5, [j('A1', 'seta6.b', 1.6), s('seta6', 1.6), b('seta8.b', { de: 'seta8.a', dur: 0.9, atraso: 1.4 }), s('seta8', 0.9, 1.4), j('L1', 'A1', 2.4, 3.0), j('A1', 'L1', 2.4, 3.0)]),
    ],
  },

  // 104 · Desafio sob pressão: Side-out com toque limpo valendo ponto dobrado
  104: {
    passos: [
      // 1. Disputa de um set até 15 pontos com regra especial de pontuação para o levantamento de toque.
      esperar(1, 1.4),
      // 2. Regra 1 (bônus de toque): ponto após levantamento de toque 100% limpo vale 2 pontos. (Rally completo.)
      passo(2, [
        b('seta1.b', { de: [262, 72], alta: true, dur: 2.8 }), s('seta1', 2.8),
        b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.6, atraso: 3.0 }), s('seta2', 1.6, 3.0),
        j('J2', 'seta3.b', 1.4, 3.6), s('seta3', 1.4, 3.6),
        b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 4.8 }), s('seta5', 1.4, 4.8),
        j('J1', 'seta6.b', 1.4, 5.0), s('seta6', 1.4, 5.0),
        b('seta8.b', { de: 'seta8.a', dur: 0.9, atraso: 6.2 }), s('seta8', 0.9, 6.2),
      ]),
      // 3. Regra 2 (segurança de manchete): ponto com levantamento de manchete vale 1 ponto normal.
      esperar(3, 1.2),
      // 4. Regra 3 (rigor da praia): toque sujo ("SUJA!") faz a dupla perder 1 ponto e entregar o saque.
      esperar(4, 1.2),
      // 5. As duplas equilibram coragem técnica (toque, 2 pontos) e inteligência (manchete quando o passe não permitir).
      esperar(5, 1.4),
    ],
  },

  // ───── ATAQUE ─────
  // 105 · Ritmo de passada de 3 passos e salto vertical na areia fofa
  105: {
    passos: [
      // 1. A1 posiciona-se no cone de 4,5 m, com o pé direito levemente à frente.
      esperar(1, 1.2),
      // 2. Passo 1 (direcionamento): um passo curto com o pé esquerdo na direção da bola.
      passo(2, [j('A1', [76, 36], 0.6)]),
      // 3. Passos 2 e 3 (chamada "direita-esquerda"): acelera os dois últimos passos, braços estendidos para trás.
      passo(3, [j('A1', 'seta1.b', 0.9), s('seta1', 0.9)]),
      // 4. Decolagem: planta os dois pés na Zona de Decolagem, lança os braços e salta na vertical, caindo no mesmo buraco.
      passo(4, [j('A1', [104.5, 31], 0.4), j('A1', [104.5, 36.9], 0.4, 0.4)]),
      // 5. Após 8 saltos na entrada esquerda, 8 na saída direita; depois troca com L1.
      trocar(5, 'A1', 'L1', 2.4),
    ],
  },

  // 106 · Passada curta e explosiva de 2 passos na areia
  106: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. A1 aguarda no cone de 3 m da rede, em base baixa e viva.
      esperar(1, 1.2),
      // 2. L1 lança (ou levanta) a bola a 1,5 m da rede.
      passo(2, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8)]),
      // 3. Como A1 esperou a bola subir, usa a passada rápida de 2 apoios.
      passo(3, [j('A1', 'seta2.b', 0.8), s('seta2', 0.8)]),
      // 4. Impulsiona, agarra a bola no topo do salto e a arremessa por cima da rede na Zona Alvo adversária.
      passo(4, [j('A1', [112.3, 32], 0.35), j('A1', [112.3, 36.9], 0.35, 0.35), b('zona1', { de: 'seta3.a', alta: true, dur: 1.7, atraso: 0.35 }), s('seta3', 1.7, 0.35)]),
      // 5. Realizam 8 repetições e invertem as funções.
      trocar(5, 'A1', 'L1', 2.4),
    ],
  },

  // 107 · Mecânica do braço ("arco e flecha") e contato alto com autolançamento
  107: {
    bolaInicial: 'seta1.a',
    passos: [
      // 1. J1 e J2 posicionam-se nos cones a 2,5 m da rede, segurando uma bola cada um.
      esperar(1, 1.2),
      // 2. Lançam a bola 1 m acima e levemente à frente do ombro de ataque.
      passo(2, [b('seta1.a', { alta: true, dur: 1.1 })]),
      // 3. Armam o "arco e flecha": mão não dominante mira a bola e o cotovelo do braço de ataque puxa alto.
      esperar(3, 1.2),
      // 4. Giram o tronco e golpeiam a bola no ponto mais alto com a palma aberta, envolvendo a bola (topspin).
      esperar(4, 0.8),
      // 5. A bola cruza a rede e cai dentro da Zona Alvo adversária; buscam as bolas e repetem 10 vezes.
      passo(5, [b('seta1.b', { alta: true, dur: 2.4 }), s('seta1', 2.4), b('seta2.b', { de: 'seta2.a', alta: true, dur: 2.4, atraso: 2.6 }), s('seta2', 2.4, 2.6)]),
    ],
  },
}
