/** Lote 1 (parte A): exercícios 1 a 14. */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, pausa, s, trocar } from './ajudantes'

export const LOTE_1A: Record<number, Animacao> = {
  // ───── ATIVAÇÃO ─────
  // 1 · Caminhada de ativação do pé e tornozelo
  1: {
    passos: [
      esperar(1, 1.2),
      // 2. Ida na ponta dos pés; volta caminhando normal.
      passo(2, [j('J1', 'seta1.b', 1.8), j('J2', 'seta3.b', 1.8), s('seta1', 1.8), s('seta3', 1.8), j('J1', 'seta2.b', 1.4, 2.0), j('J2', 'seta4.b', 1.4, 2.0), s('seta2', 1.4, 2.0), s('seta4', 1.4, 2.0), j('J1', 'J1', 0.4, 3.5), j('J2', 'J2', 0.4, 3.5)]),
      // 3, 4, 5. Mesma ida e volta com outro apoio do pé (calcanhares, borda externa, pé inteiro).
      passo(3, [j('J1', 'seta1.b', 1.8), j('J2', 'seta3.b', 1.8), j('J1', 'seta2.b', 1.4, 2.0), j('J2', 'seta4.b', 1.4, 2.0), j('J1', 'J1', 0.4, 3.5), j('J2', 'J2', 0.4, 3.5)]),
      passo(4, [j('J1', 'seta1.b', 1.8), j('J2', 'seta3.b', 1.8), j('J1', 'seta2.b', 1.4, 2.0), j('J2', 'seta4.b', 1.4, 2.0), j('J1', 'J1', 0.4, 3.5), j('J2', 'J2', 0.4, 3.5)]),
      passo(5, [j('J1', 'seta1.b', 1.8), j('J2', 'seta3.b', 1.8), j('J1', 'seta2.b', 1.4, 2.0), j('J2', 'seta4.b', 1.4, 2.0), j('J1', 'J1', 0.4, 3.5), j('J2', 'J2', 0.4, 3.5)]),
    ],
  },

  // 2 · Afundo na areia com rotação de tronco (cada jogador segura uma bola: ela acompanha o jogador)
  2: {
    passos: [
      esperar(1, 1.2),
      // 2. Passo amplo à frente em afundo.
      passo(2, [j('J1', [37, 42], 1.0), j('J2', [37, 103], 1.0)]),
      // 3. Gira o tronco com a bola e volta ao centro.
      esperar(3, 1.6),
      // 4. Avança alternando as pernas até o cone de 6 m.
      passo(4, [j('J1', 'seta1.b', 3.0), j('J2', 'seta2.b', 3.0), s('seta1', 3.0), s('seta2', 3.0)]),
    ],
  },

  // 3 · Despertar de ombros e escápulas com bola
  3: {
    bolaInicial: { ref: 'J1', dx: 6, dy: 6 },
    passos: [
      // 1. J1 leva a bola atrás da nuca e lança com as duas mãos para J2.
      passo(1, [b({ ref: 'J2', dx: 6, dy: -6 }, { alta: true, dur: 1.8 }), s('seta1', 1.8)]),
      // 2. J2 recebe, faz a circundução e devolve o lançamento de nuca.
      passo(2, [b({ ref: 'J1', dx: -6, dy: 6 }, { alta: true, dur: 1.8 }), s('seta2', 1.8)]),
      // 3. Arremesso unilateral com o braço de ataque, direto no peito do parceiro.
      passo(3, [b({ ref: 'J2', dx: 6, dy: -6 }, { dur: 1.1 })]),
      // 4. Lança com quique forte na areia, a 1 m dos pés do parceiro.
      passo(4, [b({ ref: 'J1', dx: 0, dy: 12 }, { dur: 1.3 })]),
    ],
  },

  // 4 · Passada lateral baixa arrastando a areia
  4: {
    revisar: 'No desenho J1 começa no meio da faixa e não no cone da esquerda, e as setas pontilhadas não foram reconhecidas (ficam fixas).',
    passos: [
      esperar(1, 1.2),
      // 2. J1 desloca-se lateralmente até o cone da direita, sem cruzar as pernas.
      passo(2, [j('J1', [75, 106], 1.6)]),
      // 3. Toca o topo do cone e retorna em passada lateral.
      passo(3, [pausa(0.4), j('J1', [75, 38], 2.0, 0.4)]),
      // 4. Após 4 idas e vindas, entrega a vez para J2.
      trocar(4, 'J1', 'J2', 2.0),
    ],
  },

  // 5 · Corrida com toque nos cones e abertura de quadril
  5: {
    passos: [
      esperar(1, 1.0),
      // 2. Correm de frente até o cone da frente e fazem 2 aberturas de quadril.
      passo(2, [j('J1', 'seta1.b', 1.8), j('J2', 'seta2.b', 1.8), s('seta1', 1.8), s('seta2', 1.8)]),
      // 3. Deslocam-se lateralmente trocando de lugar entre os cones da frente.
      passo(3, [j('J1', 'seta3.b', 1.6), j('J2', 'seta3.a', 1.6), s('seta3', 1.6)]),
      // 4. Voltam de costas até os cones traseiros.
      passo(4, [j('J1', 'seta4.b', 2.0), j('J2', [52.8, 100], 2.0), s('seta4', 2.0)]),
      // 5. Tocam o cone de fundo e iniciam o próximo giro invertendo o sentido.
      esperar(5, 1.2),
    ],
  },

  // 6 · Jogo de espelho na rede
  6: {
    revisar: 'As setas pontilhadas (deslocamento lateral) não foram reconhecidas e ficam fixas; o movimento foi montado pelo texto.',
    passos: [
      esperar(1, 1.2),
      // 2. J1 se movimenta livremente entre seus dois cones.
      passo(2, [j('J1', [125, 42], 1.0), j('J1', [125, 100], 1.6, 1.0), j('J1', [125, 70], 1.0, 2.6)]),
      // 3. J2 copia a posição de J1 em tempo real, alinhado peito a peito.
      passo(3, [j('J1', [125, 50], 0.9), j('J2', [153, 50], 0.9, 0.2), j('J1', [125, 92], 1.4, 1.0), j('J2', [153, 92], 1.4, 1.2), j('J1', [125, 70], 0.9, 2.6), j('J2', [153, 70], 0.9, 2.8)]),
      // 4. Quando J1 salta junto à fita, J2 salta no mesmo ponto; a cada 30 s trocam os papéis.
      passo(4, [j('J1', [125, 64], 0.3), j('J2', [153, 64], 0.3), j('J1', [125, 70], 0.3, 0.3), j('J2', [153, 70], 0.3, 0.3), j('J1', 'J2', 2.2, 1.0), j('J2', 'J1', 2.2, 1.0)]),
    ],
  },

  // ───── FORÇA E COORDENAÇÃO COM BOLA ─────
  // 7 · Prancha dinâmica na areia com disputa de bola
  7: {
    bolaInicial: [81, 72],
    passos: [
      esperar(1, 1.2),
      // 2. Toques alternados nos ombros e quadris (sem deslocamento).
      esperar(2, 1.6),
      // 3. Dois passos laterais curtos em prancha para um lado e dois para o outro, voltando ao centro.
      passo(3, [j('J1', 'seta1.b', 1.0), j('J2', 'seta2.b', 1.0), s('seta1', 1.0), s('seta2', 1.0), j('J1', [61, 54], 1.4, 1.2), j('J2', [100, 54], 1.4, 1.2), j('J1', 'J1', 0.8, 2.8), j('J2', 'J2', 0.8, 2.8)]),
      // 4. No grito de "BOLA!", vence quem puxar a bola para o seu lado primeiro.
      passo(4, [pausa(0.5), b([70, 72], { dur: 0.7, atraso: 0.5 })]),
    ],
  },

  // 8 · Controle de manchete e toque caminhando na areia (a bola segue o zigue-zague da seta vermelha)
  8: {
    bolaInicial: 'seta3.a',
    passos: [
      esperar(1, 1.0),
      // 2. J1 passa de manchete para J2; ambos dão dois passos laterais em direção à rede.
      passo(2, [b([52.8, 97.3], { alta: true, dur: 1.5 }), s('seta3', 1.5, 0, { ate: 0.25 }), j('J1', [50, 42], 1.2, 0.8), j('J2', [50, 103], 1.2, 0.8)]),
      // 3. J2 devolve de toque limpo; a dupla continua avançando sem parar.
      passo(3, [b([75, 47.2], { alta: true, dur: 1.5 }), s('seta3', 1.5, 0, { ate: 0.5 }), j('J1', [75, 42], 1.4), j('J2', [75, 103], 1.4)]),
      // 4. Ao tocar a rede, retornam à linha de fundo mantendo a bola no ar.
      passo(4, [b([97.3, 97.3], { alta: true, dur: 1.4 }), s('seta3', 1.4, 0, { ate: 0.75 }), b([119.5, 47.2], { alta: true, dur: 1.4, atraso: 1.4 }), s('seta3', 1.4, 1.4, { ate: 1 }), j('J1', 'seta1.b', 2.2), j('J2', 'seta2.b', 2.2), s('seta1', 2.2), s('seta2', 2.2), j('J1', 'J1', 2.0, 3.0), j('J2', 'J2', 2.0, 3.0)]),
    ],
  },

  // 9 · Mergulho curto controlado (peixinho de aquecimento)
  9: {
    bolaInicial: { ref: 'J1', dx: -3, dy: 0 },
    passos: [
      esperar(1, 1.0),
      // 2. J1 lança uma bola curta e baixa, 1,5 m à frente e na diagonal de J2.
      passo(2, [b('seta1.b', { alta: true, dur: 1.2 }), s('seta1', 1.2)]),
      // 3. J2 dá um passo rasante, toca a bola de baixo para cima em direção à zona alvo e desliza no chão.
      passo(3, [j('J2', 'seta2.b', 1.0), s('seta2', 1.0), b('zona1', { alta: true, dur: 1.5, atraso: 0.9 }), s('seta4', 1.5, 0.9)]),
      // 4. J2 levanta rápido e volta à base; trocam de função a cada 6 bolas.
      passo(4, [j('J2', 'J2', 1.2), j('J1', 'J2', 2.2, 1.6), j('J2', 'J1', 2.2, 1.6)]),
    ],
  },

  // 10 · Toque de costas e giro rápido de pescoço e tronco
  10: {
    bolaInicial: { ref: 'J1', dx: 8, dy: -4 },
    passos: [
      // 1. J1 (no fundo) passa a bola alta para J2.
      passo(1, [b({ ref: 'J2', dx: 4, dy: -6 }, { alta: true, dur: 1.7 }), s('seta1', 1.7)]),
      // 2. J2 estabiliza os pés e levanta de costas para J3.
      passo(2, [b({ ref: 'J3', dx: -6, dy: -4 }, { alta: true, dur: 1.5 }), s('seta2', 1.5)]),
      // 3. Assim que a bola sai das mãos, J2 gira 180 graus para ficar de frente para J3.
      passo(3, [j('J2', 'seta3.b', 0.9), s('seta3', 0.9)]),
      // 4. J3 devolve; J2 faz novo toque de costas para J1 e gira de novo.
      passo(4, [b({ ref: 'J2', dx: 6, dy: -6 }, { alta: true, dur: 1.4 }), b({ ref: 'J1', dx: 8, dy: -4 }, { alta: true, dur: 1.7, atraso: 1.5 }), j('J2', 'seta3.a', 0.9, 1.6)]),
    ],
  },

  // 11 · Mini-jogo de aquecimento só com poke e largada de falange
  11: {
    bolaInicial: 'seta1.a',
    passos: [
      // 1. J1 inicia o rally passando a bola por cima da rede.
      passo(1, [b('seta1.b', { alta: true, dur: 2.0 }), s('seta1', 2.0)]),
      // 2. No máximo 2 toques por jogador: manchete para o alto e passe para o outro lado.
      passo(2, [j('J2', 'seta4.b', 0.9), s('seta4', 0.9), b('seta2.b', { alta: true, dur: 2.0, atraso: 0.6 }), s('seta2', 2.0, 0.6)]),
      // 3. Para passar por cima da rede só vale poke, cobra ou manchete.
      passo(3, [j('J1', 'seta3.b', 0.9), s('seta3', 0.9), b('seta1.b', { alta: true, dur: 2.0, atraso: 0.6 })]),
      // 4. Vence o rally quem fizer a bola tocar na areia dentro do quadrado de 4x4 m adversário.
      passo(4, [b('zona2', { alta: true, dur: 1.3 })]),
    ],
  },

  // 12 · Circuito reativo de sol, vento e bola curta
  12: {
    revisar: 'O desenho mostra J1 em dois lugares (J1 e J1_1) e uma seta de deslocamento a menos que o texto; ida ao cone lateral e retorno foram montados pelo texto.',
    bolaInicial: { ref: 'J2', dx: -5, dy: 0 },
    passos: [
      // 1. J1 em skipping baixo na base central; J2 na rede com 3 bolas.
      esperar(1, 1.2),
      // 2. Ao comando de J2, J1 corre até o cone lateral e toca nele.
      passo(2, [j('J1_1', 'seta1.b', 1.2), s('seta1', 1.2), pausa(0.3)]),
      // 3. J2 lança uma bola alta no centro, seguida de uma bola curta perto da rede.
      passo(3, [b('seta6.b', { alta: true, dur: 1.8 }), s('seta6', 1.8), j('J1_1', 'seta2.b', 1.4), s('seta2', 1.4)]),
      // 4. J1 passa de manchete para a zona alvo, arranca e salva a bola curta de poke.
      passo(4, [b('zona1', { de: 'seta7.a', alta: true, dur: 1.5 }), s('seta7', 1.5), j('J1_1', 'seta4.b', 1.2, 0.8), s('seta4', 1.2, 0.8)]),
      // 5. Após 3 bolas, invertem as funções.
      trocar(5, 'J1_1', 'J2', 2.2),
    ],
  },

  // ───── POTÊNCIA E REAÇÃO ─────
  // 13 · Base ativa e destrave na areia
  13: {
    bolaInicial: [118, 70],
    passos: [
      // 1. J1 assume a posição de base.
      esperar(1, 1.2),
      // 2. Mantém os pés vivos mexendo levemente a areia.
      passo(2, [j('J1', [62, 45.5], 0.3), j('J1', [62, 43], 0.3, 0.3), j('J1', [62, 45.5], 0.3, 0.6), j('J1', [62, 44], 0.3, 0.9)]),
      // 3. J2 levanta a bola e bate com a palma da mão.
      passo(3, [b({ ref: 'J2', dx: -4, dy: -8 }, { alta: true, dur: 0.8 }), b({ ref: 'J2', dx: -8, dy: -2 }, { dur: 0.4, atraso: 0.8 })]),
      // 4. No instante da batida, J1 faz o destrave e dá 1 passo curto de leitura à frente.
      passo(4, [j('J1', [62, 46.5], 0.2), j('J1', 'seta1.b', 0.6, 0.2), s('seta1', 0.6, 0.2)], { junto: 0.9 }),
      // 5. Após 10 repetições, J1 muda para o cone da direita.
      passo(5, [j('J1', 'seta2.b', 1.8), s('seta2', 1.8)]),
    ],
  },

  // 14 · Primeiro passo explosivo de empurrão
  14: {
    passos: [
      esperar(1, 1.0),
      // 2. Ao sinal, empurram a areia e projetam peito e joelho rumo ao cone de 3 m.
      passo(2, [j('J1', [62, 44], 0.5), j('J2', [62, 99.5], 0.5), s('seta1', 1.2), s('seta2', 1.2)]),
      // 3. Chegam ao cone da frente em no máximo 3 passadas e param em postura baixa.
      passo(3, [j('J1', 'seta1.b', 0.9), j('J2', 'seta2.b', 0.9)]),
      // 4. Retornam caminhando devagar até a marca de 6 m.
      passo(4, [j('J1', 'seta3.b', 2.2), s('seta3', 2.2), j('J2', [47.7, 99], 2.2)]),
    ],
  },
}
