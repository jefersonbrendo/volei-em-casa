/** Lote 2 (parte A): exercícios 41 a 58 (o 56 está em src/data/animacoes.ts). */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, pausa, s, trocar } from './ajudantes'

export const LOTE_2A: Record<number, Animacao> = {
  // ───── SAQUE (continuação) ─────
  // 41 · Saque na "costura" (corredor central entre os receptores)
  41: {
    bolaInicial: { ref: 'J1', dx: 7, dy: -3 },
    passos: [
      esperar(1, 1.2),
      // 2. Visualiza o espaço de 1,5 m entre os dois cones que simulam os recebedores.
      esperar(2, 1.2),
      // 3. Saque flutuante rápido e reto pelo meio da rede, dentro da Zona Alvo da costura.
      passo(3, [b('seta1.b', { dur: 2.4 }), s('seta1', 2.4)]),
      // 4. Varia a profundidade: uma bola curta (5,5 m) e outra no fundo da costura (7 m).
      passo(4, [b([212, 72], { de: { ref: 'J1', dx: 7, dy: -3 }, dur: 2.2 }), b([240, 72], { de: { ref: 'J1', dx: 7, dy: -3 }, dur: 2.4, atraso: 2.6 })]),
      // 5. Após 10 saques, trocam de posição.
      trocar(5, 'J1', 'J2', 2.6),
    ],
  },

  // 42 · Saque alto "Jornada nas Estrelas" (usando o sol e o vento)
  42: {
    revisar: 'O desenho tem um "J1" no alto da quadra (símbolo do sol) além do sacador "J1_1"; a bola foi animada a partir de J1_1.',
    bolaInicial: { ref: 'J1_1', dx: 7, dy: -3 },
    passos: [
      // 1. J1 posiciona-se de lado para a rede, pés bem afastados.
      esperar(1, 1.2),
      // 2. Afunda os joelhos e faz um pêndulo longo de baixo para cima.
      esperar(2, 1.4),
      // 3. Bate na parte de baixo da bola usando toda a extensão das pernas, para lançá-la o mais alto possível.
      passo(3, [b('seta1.b', { alta: true, dur: 3.4 }), s('seta1', 3.4)]),
      // 4. A bola desce quase na vertical dentro da Zona Alvo; J2 acompanha a queda protegendo os olhos.
      passo(4, [j('J2', [231, 74], 0.8), j('J2', [231, 72], 0.8, 0.8)]),
      // 5. Realizam 8 saques e trocam de lado.
      trocar(5, 'J1_1', 'J2', 2.6),
    ],
  },

  // 43 · Adaptação ao vento contra e vento a favor
  43: {
    bolaInicial: { ref: 'J1', dx: 7, dy: -3 },
    passos: [
      // 1. J1 (contra o vento) saca agressivo, a 95% da força e trajetória mais baixa e tensa.
      passo(1, [b('seta1.b', { dur: 2.2 }), s('seta1', 2.2)]),
      // 2. J2 agarra a bola na Zona Alvo direita e vai para a linha de fundo.
      passo(2, [b({ ref: 'J2', dx: -6, dy: -3 }, { dur: 1.6 })]),
      // 3. J2 (a favor do vento) reduz a força para 60-70% ou usa um saque curto.
      passo(3, [b('seta2.b', { alta: true, dur: 2.8 }), s('seta2', 2.8)]),
      // 4. Seis saques de cada lado e troca de quadra.
      trocar(4, 'J1', 'J2', 2.6),
      // 5. No primeiro saque após a troca, vale o dobro de pontos.
      esperar(5, 1.0),
    ],
  },

  // 44 · Saque com vento lateral (usando a deriva da brisa)
  44: {
    bolaInicial: { ref: 'J1', dx: 7, dy: -3 },
    passos: [
      // 1. Observa para qual linha lateral o vento está soprando.
      esperar(1, 1.4),
      // 2. Primeiros 5 saques (a favor da corrente lateral): mira no centro com saque flutuante mais alto.
      passo(2, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 3. 5 saques seguintes (contra a corrente): sai do canto superior, mirando quase na antena.
      passo(3, [b('seta2.b', { de: { ref: 'J1_1', dx: 7, dy: -3 }, alta: true, dur: 3.0 }), s('seta2', 3.0)]),
      // 4. J2 observa a curva da bola e dá feedback sobre o ponto de partida da mira.
      passo(4, [j('J2', [231, 80], 0.9), j('J2', [231, 72], 0.9, 1.0)]),
      // 5. Invertem os papéis após 10 saques.
      trocar(5, 'J1', 'J2', 2.6),
    ],
  },

  // 45 · Passada, lançamento alto com giro e saque viagem na areia
  45: {
    bolaInicial: { ref: 'J1', dx: 5, dy: -3 },
    passos: [
      // 1. J1 segura a bola a 2,5 m da linha de fundo.
      esperar(1, 1.2),
      // 2. Dá o primeiro passo e lança a bola alta e à frente, com giro para a frente (topspin).
      passo(2, [j('J1', 'seta1.b', 0.9), s('seta1', 0.9), b([21, 68], { alta: true, dur: 1.4, atraso: 0.3 })]),
      // 3. Dois últimos passos rápidos e potentes, afundando os calcanhares antes da linha de fundo.
      passo(3, [j('J1', [20, 73], 0.7)]),
      // 4. Salta para cima e para a frente e golpeia no ponto mais alto, chicoteando o punho por cima da bola.
      passo(4, [j('J1', [24, 70], 0.4), j('J1', [27, 73], 0.4, 0.4)]),
      // 5. A bola passa rápida sobre a rede e mergulha no fundo da Zona Alvo (efeito Magnus); trocam a cada 8 viagens.
      passo(5, [b('seta2.b', { alta: true, dur: 2.4 }), s('seta2', 2.4), j('J1', 'J2', 2.4, 2.8), j('J2', 'J1', 2.4, 2.8)]),
    ],
  },

  // 46 · Saque viagem potenciado nas diagonais (curta e longa)
  46: {
    bolaInicial: { ref: 'J1', dx: 6, dy: -3 },
    passos: [
      // 1. J1 faz a corrida de aproximação já em ângulo diagonal, apontando para o canto oposto.
      passo(1, [j('J1', 'seta1.b', 1.0), s('seta1', 1.0), b('seta3.a', { alta: true, dur: 1.4, atraso: 0.3 })]),
      // 2. Primeiros 5 saques (diagonal longa): bate cheio atrás/em cima da bola.
      passo(2, [b('seta3.b', { alta: true, dur: 3.0 }), s('seta3', 3.0)]),
      // 3. 5 saques seguintes (diagonal curta): mesmo lançamento e salto, com corte lateral (topspin).
      passo(3, [b('seta4.b', { de: 'seta3.a', alta: true, dur: 2.6 }), s('seta4', 2.6)]),
      // 4. Depois, J1 muda para o canto esquerdo da linha de fundo e repete para a outra diagonal.
      passo(4, [j('J1', [7, 24], 1.8)]),
      // 5. J1 e J2 invertem os papéis após as séries.
      trocar(5, 'J1', 'J2', 2.6),
    ],
  },

  // 47 · Saque híbrido (finta de viagem para flutuante curto)
  47: {
    bolaInicial: { ref: 'J1', dx: 6, dy: -3 },
    passos: [
      // 1. Ritual idêntico ao saque viagem: recua, lança a bola alta para a frente e corre explosivo, saltando alto.
      passo(1, [j('J1', 'seta1.b', 1.0), s('seta1', 1.0), b([20, 70], { alta: true, dur: 1.4, atraso: 0.3 })]),
      // 2. J2, vendo o lançamento alto e a corrida agressiva, firma os calcanhares esperando uma bomba no fundo.
      esperar(2, 1.2),
      // 3. No ar, J1 escolhe: viagem forte no fundo (Zona 1) ou tapa flutuante curto (Zona 2).
      passo(3, [b('seta2.b', { alta: true, dur: 2.6 }), s('seta2', 2.6), b('zona2', { de: [20, 70], alta: true, dur: 2.0, atraso: 3.0 })]),
      // 4. J2 tenta reagir e tocar na bola antes que ela caia na areia.
      passo(4, [j('J2', 'zona2', 1.6)]),
      // 5. A cada 8 saques híbridos, trocam as funções.
      trocar(5, 'J1', 'J2', 2.6),
    ],
  },

  // 48 · Saque tático no "ombro ruim" e no atacante escolhido
  48: {
    bolaInicial: { ref: 'J1', dx: 7, dy: -3 },
    passos: [
      // 1. A tática da rodada determina que R1 é o alvo obrigatório.
      esperar(1, 1.4),
      // 2. Nos 4 primeiros saques, na altura do ombro esquerdo de R1 (perto da linha lateral).
      passo(2, [b('seta1.b', { alta: true, dur: 2.8 }), s('seta1', 2.8)]),
      // 3. Nos 4 saques seguintes, na altura do ombro direito de R1 (invadindo o meio da quadra).
      passo(3, [b('seta2.b', { de: { ref: 'J1', dx: 7, dy: -3 }, alta: true, dur: 2.8 }), s('seta2', 2.8)]),
      // 4. R1 faz o passe de manchete ou toque alto para o centro da rede.
      passo(4, [b([153, 72], { alta: true, dur: 1.8 })]),
      // 5. Rodam as posições a cada 8 saques.
      trocar(5, 'J1', 'R1', 2.6),
    ],
  },

  // ───── SAQUE + RECEPÇÃO ─────
  // 49 · Saque tirando o receptor do lugar + passe na rede (Saque + Recepção 1)
  49: {
    bolaInicial: { ref: 'J1', dx: 7, dy: -3 },
    passos: [
      // 1. J1 saca buscando obrigar R1 a se deslocar na areia.
      passo(1, [b('seta1.b', { alta: true, dur: 2.6 }), s('seta1', 2.6)]),
      // 2. J1 escolhe sacar na curta diagonal (3 m da rede) ou na lateral funda (7 m).
      esperar(2, 0.8),
      // 3. R1 lê a saída, destrava, vai para trás da bola, estanca os pés e passa de manchete para J2 na Zona Alvo.
      passo(3, [j('R1', 'seta2.b', 1.2), s('seta2', 1.2), b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.6, atraso: 0.8 }), s('seta4', 1.6, 0.8)]),
      // 4. Contagem competitiva: ponto do sacador ou do receptor, conforme o passe.
      esperar(4, 1.2),
      // 5. A cada 6 bolas, rodam entre sacador, receptor e levantador.
      passo(5, [j('J1', 'R1', 2.4), j('R1', 'J2', 2.4), j('J2', 'J1', 2.4)]),
    ],
  },

  // 50 · Saque na costura contra dupla receptora real (Saque + Recepção 2)
  50: {
    bolaInicial: { ref: 'J1', dx: 7, dy: -3 },
    passos: [
      // 1. J1 saca buscando a faixa central de 2 m entre R1 e R2.
      passo(1, [b('seta1.b', { alta: true, dur: 2.6 }), s('seta1', 2.6)]),
      // 2. R1 e R2 definem em voz alta quem vai na bola antes de ela cruzar a rede.
      esperar(2, 0.8),
      // 3. Quem chamou fecha o passo para o meio e passa a bola alta para a Zona Alvo da rede.
      passo(3, [j('R1', 'seta2.b', 0.8), s('seta2', 0.8), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.6, atraso: 0.6 }), s('seta5', 1.6, 0.6)]),
      // 4. O parceiro que não recepcionou arranca para a Zona Alvo, estanca os pés e agarra a bola.
      passo(4, [j('R2', 'seta3.b', 1.6), s('seta3', 1.6)]),
      // 5. Rodam as funções a cada 6 saques (J1 entra na recepção, R1 vai para o saque).
      passo(5, [j('J1', 'R1', 2.4), j('R1', 'J1', 2.4)]),
    ],
  },

  // 51 · Saque combinado com sinal do bloqueador e corrida de defesa (Saque + Recepção 3)
  51: {
    bolaInicial: { ref: 'J1', dx: 7, dy: -3 },
    passos: [
      // 1. J2, na rede, faz o sinal nas costas com as mãos, indicando em qual receptor J1 deve sacar.
      esperar(1, 1.6),
      // 2. J1 confirma o sinal e saca no receptor combinado.
      passo(2, [b('seta1.b', { alta: true, dur: 2.6 }), s('seta1', 2.6)]),
      // 3. No instante em que a bola sai da mão, J1 arranca para o cone de defesa do corredor livre.
      passo(3, [j('J1', 'seta2.b', 1.8), s('seta2', 1.8)], { junto: 0.4 }),
      // 4. Do outro lado, R1 passa, R2 levanta e R1 ataca na direção onde J2 bloqueia e J1 defende.
      passo(4, [b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6 }), s('seta3', 1.6), b([105, 50], { dur: 0.9, atraso: 1.8 })]),
      // 5. Jogam o ponto até o fim; após 5 saques, a Dupla B passa a sacar.
      passo(5, [j('J1', 'R1', 2.6), j('R1', 'J1', 2.6), j('J2', 'R2', 2.6), j('R2', 'J2', 2.6)]),
    ],
  },

  // 52 · Desafio sob pressão: "Fechando o Set"
  52: {
    passos: [
      // 1. Antes de cada saque, J1 corre até o cone de 4 m, toca a areia e volta de costas até a linha de fundo.
      passo(1, [j('J1', 'seta1.b', 1.4), s('seta1', 1.4), j('J1', 'seta2.b', 1.4, 1.8), s('seta2', 1.4, 1.8)]),
      // 2. Na linha de fundo, J1 tem exatamente 5 segundos para respirar, olhar o alvo e sacar.
      esperar(2, 1.6),
      // 3. J2 grita qual dos 4 alvos J1 precisa acertar.
      esperar(3, 1.0),
      // 4. Acertar a Zona Alvo chamada vale +2; cair na quadra fora do alvo +1; errar -2.
      passo(4, [b('seta3.b', { de: { ref: 'J1', dx: 7, dy: -3 }, alta: true, dur: 2.2 }), s('seta3', 2.2), b('seta4.b', { de: { ref: 'J1', dx: 7, dy: -3 }, alta: true, dur: 2.6, atraso: 2.6 }), s('seta4', 2.6, 2.6), b('seta5.b', { de: { ref: 'J1', dx: 7, dy: -3 }, alta: true, dur: 2.6, atraso: 5.6 }), s('seta5', 2.6, 5.6)]),
      // 5. Vence quem atingir 10 pontos primeiro.
      esperar(5, 1.0),
    ],
  },

  // ───── RECEPÇÃO / MANCHETE (continuação) ─────
  // 53 · Travamento de plataforma e base de manchete na areia
  53: {
    bolaInicial: { ref: 'J2', dx: -6, dy: -4 },
    passos: [
      // 1. J1 posiciona-se no cone de 5 m com os pés mais largos que os ombros e joelhos flexionados.
      esperar(1, 1.2),
      // 2. Antes do lançamento, mantém as mãos soltas à frente da cintura.
      esperar(2, 1.0),
      // 3. J2 lança a bola em arco suave na linha do umbigo de J1.
      passo(3, [b('seta1.b', { alta: true, dur: 1.7 }), s('seta1', 1.7)]),
      // 4. J1 une as mãos, gira os cotovelos para dentro e eleva os ombros.
      esperar(4, 1.2),
      // 5. Com a extensão suave dos joelhos, devolve a bola alta nas mãos de J2; trocam a cada 10 bolas.
      passo(5, [b('seta2.b', { alta: true, dur: 1.9 }), s('seta2', 1.9), j('J1', 'J2', 2.4, 2.4), j('J2', 'J1', 2.4, 2.4)]),
    ],
  },

  // 54 · Amortecimento e controle de arco alto no centro
  54: {
    bolaInicial: { ref: 'J2', dx: -6, dy: -3 },
    passos: [
      // 1. J2 lança a bola com uma mão, firme, direto no peito/cintura de J1.
      passo(1, [b('seta1.b', { dur: 1.7 }), s('seta1', 1.7)]),
      // 2. J1 faz o destrave, firma os pés e apresenta a plataforma a cerca de 45 graus.
      passo(2, [j('J1', [54, 70], 0.25), j('J1', [54, 72], 0.25, 0.25), pausa(0.4)]),
      // 3. J1 não empurra a bola: sustenta os ombros ou cede 2 cm, absorvendo o impacto.
      esperar(3, 0.8),
      // 4. A bola sobe no mínimo 1,5 m acima da antena e cai macia dentro da Zona Alvo central.
      passo(4, [b('zona1', { de: 'seta2.a', alta: true, dur: 2.2 }), s('seta2', 2.2)]),
      // 5. Após 8 bolas, invertem as funções.
      trocar(5, 'J1', 'J2', 2.6),
    ],
  },

  // 55 · Inclinação de ombros: direcionando dos cantos para o centro
  55: {
    bolaInicial: { ref: 'J2', dx: -6, dy: -3 },
    passos: [
      // 1. J1 começa no Cone 1 (corredor esquerdo, a 5,5 m da rede).
      esperar(1, 1.2),
      // 2. J2 lança a bola por cima da rede em cima do Cone 1.
      passo(2, [b('seta1.b', { alta: true, dur: 2.2 }), s('seta1', 2.2)]),
      // 3. J1 inclina o ombro de fora e cria um "espelho" para a direita, em direção à Zona Alvo.
      passo(3, [b('zona1', { de: 'seta3.a', alta: true, dur: 1.7 }), s('seta3', 1.7)]),
      // 4. Após 5 bolas, J1 vai para o Cone 2 e faz o oposto, levantando o ombro direito.
      passo(4, [j('J1', 'J1_1', 1.6), b('seta2.b', { de: { ref: 'J2', dx: -6, dy: -3 }, alta: true, dur: 2.2, atraso: 1.8 }), s('seta2', 2.2, 1.8), b('zona1', { de: 'seta4.a', alta: true, dur: 1.7, atraso: 4.2 }), s('seta4', 1.7, 4.2)]),
      // 5. Trocam de função após 10 recepções completas.
      trocar(5, 'J1', 'J2', 2.6),
    ],
  },

  // 57 · Recepção com deslocamento lateral e parada de dois pés
  57: {
    bolaInicial: { ref: 'J2', dx: -6, dy: -3 },
    passos: [
      // 1. J1 começa no cone central em postura de prontidão.
      esperar(1, 1.2),
      // 2. J2 saca mirando em um dos dois cones laterais.
      passo(2, [b('seta1.b', { alta: true, dur: 2.6 }), s('seta1', 2.6)]),
      // 3. J1 identifica o lado e usa passada lateral rápida para chegar ao cone antes da bola.
      passo(3, [j('J1', 'seta2.b', 1.4), s('seta2', 1.4)], { junto: 0.6 }),
      // 4. Crava os dois pés, levanta o ombro de fora e passa a bola alta para a Zona Alvo central.
      passo(4, [b('zona1', { de: 'seta4.a', alta: true, dur: 1.7 }), s('seta4', 1.7)]),
      // 5. Volta trotando ao cone central (e atende o outro lado); trocam a cada 8 bolas.
      passo(5, [j('J1', 'J1', 1.4), j('J1', 'seta3.b', 1.4, 1.8), s('seta3', 1.4, 1.8), j('J1', 'J1', 1.4, 3.4), j('J1', 'J2', 2.6, 5.2), j('J2', 'J1', 2.6, 5.2)]),
    ],
  },

  // 58 · Avanço explosivo para recepção de saque curto
  58: {
    bolaInicial: { ref: 'J2', dx: -6, dy: -3 },
    passos: [
      // 1. J1 aguarda na base normal de recepção a 6 m da rede.
      esperar(1, 1.2),
      // 2. J2 executa um saque curto que cruza a fita e cai entre 2,5 e 3 m da rede.
      passo(2, [b('seta1.b', { alta: true, dur: 2.4 }), s('seta1', 2.4)]),
      // 3. J1 faz o destrave, empurra a areia com o pé de trás e corre de frente com o quadril baixo.
      passo(3, [j('J1', 'seta2.b', 1.5), s('seta2', 1.5)], { junto: 0.6 }),
      // 4. No último passo, entra em afundo longo para frear a corrida.
      esperar(4, 0.7),
      // 5. Apresenta a plataforma para o céu: a bola sobe vertical e cai na Zona Alvo; trocam a cada 8 bolas.
      passo(5, [b('zona1', { de: 'seta4.a', alta: true, dur: 1.7 }), s('seta4', 1.7), j('J1', 'J2', 2.6, 2.2), j('J2', 'J1', 2.6, 2.2)]),
    ],
  },
}
