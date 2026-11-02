/** Lote 1 (parte C): exercícios 31 a 40 (o 35 está em src/data/animacoes.ts). */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, pausa, s, trocar } from './ajudantes'

export const LOTE_1C: Record<number, Animacao> = {
  // ───── SAQUE ─────
  // 31 · Mecânica e pêndulo do saque por baixo
  31: {
    bolaInicial: { ref: 'J1', dx: 6, dy: -4 },
    passos: [
      esperar(1, 1.2),
      // 2. Segura a bola na altura da cintura, mão de apoio estendida à frente do quadril.
      esperar(2, 1.0),
      // 3. Leva o braço dominante para trás (pêndulo) e transfere o peso para a perna de trás.
      esperar(3, 1.2),
      // 4. Avança o braço sem jogar a bola para o alto e bate por baixo com a mão fechada.
      esperar(4, 0.8),
      // 5. A bola passa por cima da rede e cai na Zona Alvo de J2, que agarra e saca de volta.
      passo(5, [b('seta1.b', { alta: true, dur: 2.4 }), s('seta1', 2.4), b({ ref: 'J2', dx: -6, dy: -4 }, { dur: 0.6, atraso: 2.4 }), b('seta2.b', { alta: true, dur: 2.4, atraso: 3.4 }), s('seta2', 2.4, 3.4)]),
    ],
  },

  // 32 · Saque por baixo direcionado: esquerda e direita
  32: {
    bolaInicial: { ref: 'J1', dx: 6, dy: -3 },
    passos: [
      esperar(1, 1.2),
      // 2. Para os 5 primeiros saques (Alvo 2, paralela), aponta o pé da frente e o quadril para a zona alvo 2.
      esperar(2, 1.2),
      // 3. Executa o pêndulo acompanhando o braço na linha reta do pé da frente.
      passo(3, [b('seta2.b', { alta: true, dur: 2.4 }), s('seta2', 2.4)]),
      // 4. Para os 5 saques seguintes (Alvo 1, diagonal), gira a base e os ombros para a zona alvo 1.
      passo(4, [pausa(0.6), b('seta1.b', { de: { ref: 'J1', dx: 6, dy: -3 }, alta: true, dur: 2.4, atraso: 0.6 }), s('seta1', 2.4, 0.6)]),
      // 5. Após os 10 saques, invertem as funções.
      trocar(5, 'J1', 'J2', 2.4),
    ],
  },

  // 33 · Lançamento consistente para o saque por cima
  33: {
    bolaInicial: { ref: 'J1', dx: 8, dy: -3 },
    passos: [
      esperar(1, 1.2),
      // 2. Sem dobrar o punho, elevam a bola suavemente 40 a 50 cm acima do ponto de contato.
      // 3. Na primeira série NÃO batem na bola: mantêm o braço armado e deixam a bola cair no chão.
      passo(2, [b([27, 42], { alta: true, dur: 1.5 })]),
      esperar(3, 1.2),
      // 4. A bola deve cair exatamente sobre a marca desenhada na areia.
      esperar(4, 0.8),
      // 5. Na segunda série lançam a bola e a agarram no ponto mais alto com o braço estendido.
      passo(5, [b({ ref: 'J1', dx: 8, dy: -3 }, { alta: true, dur: 1.5 })]),
    ],
  },

  // 34 · Saque por cima parado a curta distância
  34: {
    bolaInicial: { ref: 'J1', dx: 6, dy: -4 },
    passos: [
      esperar(1, 1.2),
      // 2. Lança a bola meio metro à frente do ombro direito com pouca altura.
      passo(2, [b({ ref: 'J1', dx: 11, dy: -6 }, { alta: true, dur: 0.9 })]),
      // 3. Transfere o peso do pé de trás para o da frente e leva a palma aberta ao centro da bola.
      esperar(3, 0.8),
      // 4. A bola passa por cima da rede, firme, até a Zona Alvo de J2.
      passo(4, [b('seta1.b', { dur: 2.0 }), s('seta1', 2.0)]),
      // 5. J2 recebe a bola, posiciona-se no cone de 5 m e saca de volta.
      passo(5, [b({ ref: 'J2', dx: -6, dy: -4 }, { dur: 0.6 }), b('seta2.b', { dur: 2.0, atraso: 1.0 }), s('seta2', 2.0, 1.0)]),
    ],
  },

  // 36 · Contato seco para o saque flutuante (sem rotação)
  36: {
    bolaInicial: { ref: 'J1', dx: 7, dy: -3 },
    passos: [
      // 1. J1 prepara o saque por cima e lança a bola totalmente parada, sem rotação.
      passo(1, [b({ ref: 'J1', dx: 11, dy: -9 }, { alta: true, dur: 1.0 })]),
      // 2. Golpeia o centro da bola com a base da palma rígida e freia o braço logo após o contato.
      passo(2, [b('seta1.b', { alta: true, dur: 2.6 }), s('seta1', 2.6)]),
      // 3. O punho não deve dobrar para baixo no final do movimento.
      esperar(3, 0.8),
      // 4. J2 acompanha a bola e grita "FLUTUOU!" ou "GIROU!".
      esperar(4, 1.2),
      // 5. Só conta ponto se cair na Zona Alvo e J2 confirmar que veio sem rotação; trocam a cada 8 saques.
      trocar(5, 'J1', 'J2', 2.4),
    ],
  },

  // 37 · Saque flutuante rasante à fita da rede
  37: {
    bolaInicial: { ref: 'J1', dx: 6, dy: -3 },
    passos: [
      // 1. J1 recua 1 metro além da linha de fundo (9 m da rede).
      esperar(1, 1.2),
      // 2. Fixa o olhar 30 cm acima da fita branca da rede.
      esperar(2, 1.0),
      // 3. Lança baixo e dá o golpe flutuante horizontal, mirando rasante à fita.
      passo(3, [b('seta1.b', { dur: 2.4 }), s('seta1', 2.4)]),
      // 4. J2, ao lado do poste, valida se a bola passou na "janela baixa" e caiu na Zona Alvo.
      esperar(4, 1.2),
      // 5. Após 10 tentativas, invertem as funções.
      trocar(5, 'J1', 'J2', 2.4),
    ],
  },

  // 38 · Saque curto ("pingado") logo atrás da rede
  38: {
    bolaInicial: { ref: 'J1', dx: 7, dy: -3 },
    passos: [
      // 1. Mesma postura e mesmo lançamento de um saque forte de fundo.
      passo(1, [b({ ref: 'J1', dx: 11, dy: -9 }, { alta: true, dur: 1.0 })]),
      // 2. Inicia o movimento do braço rápido, mas desacelera o ombro no último instante.
      esperar(2, 0.7),
      // 3. A bola sobe só o suficiente para vencer a fita e morre logo depois de cruzar (zonas curtas 1 e 2).
      passo(3, [b('seta1.b', { alta: true, dur: 2.0 }), s('seta1', 2.0), b('seta2.b', { de: { ref: 'J1', dx: 7, dy: -3 }, alta: true, dur: 2.0, atraso: 2.6 }), s('seta2', 2.0, 2.6)]),
      // 4. Sempre que a bola cair na zona curta, J2 arranca dos 6 m para sentir a dificuldade.
      passo(4, [j('J2', 'seta3.b', 1.4), s('seta3', 1.4), j('J2', 'J2', 1.2, 1.8)]),
      // 5. Trocam de função a cada 8 saques.
      trocar(5, 'J1', 'J2', 2.4),
    ],
  },

  // 39 · Saque profundo no último metro da linha de fundo
  39: {
    bolaInicial: { ref: 'J1', dx: 7, dy: -3 },
    passos: [
      // 1. J1 posiciona-se na linha de fundo olhando para a fita de fundo adversária.
      esperar(1, 1.2),
      // 2. Saque flutuante tenso com 85% de potência, na altura do peito de um recebedor imaginário.
      passo(2, [b('seta1.b', { alta: true, dur: 2.8 }), s('seta1', 2.8)]),
      // 3. A bola deve passar da linha de recepção normal e cair nos últimos 1,5 m da quadra.
      passo(3, [pausa(0.6), b('seta2.b', { de: { ref: 'J1', dx: 7, dy: -3 }, alta: true, dur: 2.8, atraso: 0.6 }), s('seta2', 2.8, 0.6)]),
      // 4. Se bater exatamente na fita da linha de fundo, vale 2 pontos extras.
      esperar(4, 1.0),
      // 5. Trocam de lado a cada 10 saques.
      trocar(5, 'J1', 'J2', 2.6),
    ],
  },

  // 40 · Saque nas linhas laterais (corredor externo de 1 metro)
  40: {
    bolaInicial: { ref: 'J1', dx: 7, dy: -3 },
    passos: [
      // 1. J1 posiciona-se num canto da linha de fundo para sacar na paralela.
      esperar(1, 1.2),
      // 2. Alinha o pé da frente e o ombro com a antena e saca 5 bolas no corredor de 1 m.
      passo(2, [b('seta1.b', { alta: true, dur: 2.6 }), s('seta1', 2.6)]),
      // 3. Desloca-se para o outro canto e saca 5 bolas na paralela oposta.
      passo(3, [b('seta2.b', { de: { ref: 'J1_1', dx: 7, dy: -3 }, alta: true, dur: 2.6 }), s('seta2', 2.6)]),
      // 4. Na segunda rodada, saca do meio da linha buscando abrir ângulo nas diagonais.
      passo(4, [j('J1', [10, 72], 1.2), b('seta2.b', { de: [17, 69], alta: true, dur: 2.6, atraso: 1.2 }), b('seta1.b', { de: [17, 69], alta: true, dur: 2.6, atraso: 4.0 })]),
      // 5. Trocam de função após as duas rodadas.
      trocar(5, 'J1', 'J2', 2.6),
    ],
  },
}
