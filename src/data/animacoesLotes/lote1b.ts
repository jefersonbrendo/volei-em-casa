/** Lote 1 (parte B): exercícios 15 a 30. */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, pausa, s, trocar } from './ajudantes'

export const LOTE_1B: Record<number, Animacao> = {
  // 15 · Passada lateral curta entre cones
  15: {
    passos: [
      esperar(1, 1.0),
      // 2. Ao sinal, deslocam-se em passada lateral até o cone da direita, peito para a rede.
      passo(2, [j('J1', 'seta1.b', 1.8), j('J2', 'seta3.b', 1.8), s('seta1', 1.8), s('seta3', 1.8)]),
      // 3. Pé da direção do movimento abre rasante e o oposto empurra, sem juntar os calcanhares.
      esperar(3, 1.4),
      // 4. No cone da direita simulam a plataforma de manchete e voltam em passada lateral.
      passo(4, [pausa(0.8), j('J1', 'seta2.b', 1.8, 0.8), j('J2', 'seta4.b', 1.8, 0.8), s('seta2', 1.8, 0.8), s('seta4', 1.8, 0.8)]),
      // 5. Após 6 idas e vindas, trocam de linha.
      trocar(5, 'J1', 'J2', 2.0),
    ],
  },

  // 16 · Virada de quadril e passo cruzado longo
  16: {
    passos: [
      esperar(1, 1.2),
      // 2. Ao sinal, J1 gira o pé e o quadril e cruza a perna pela frente.
      passo(2, [j('J1', [62, 31], 0.7)]),
      // 3. Corre de lado pelos 6 metros de largura, olhando para a rede.
      passo(3, [j('J1', [66.3, 100], 2.0), s('seta1', 2.0)]),
      // 4. Nos últimos 80 cm volta o quadril para a rede e planta os dois pés em base de defesa.
      passo(4, [j('J1', 'seta1.b', 0.8), pausa(0.6)]),
      // 5. Passo cruzado para o lado oposto, voltando ao cone inicial, e dá lugar a J2.
      passo(5, [j('J1', 'seta2.b', 2.0), s('seta2', 2.0), j('J2', 'J1', 1.6, 2.2)]),
    ],
  },

  // 17 · Arrancada para bola curta (pingo na frente)
  17: {
    passos: [
      esperar(1, 1.2),
      // 2. Ao sinal de J2, J1 arranca em velocidade máxima por 4 metros.
      passo(2, [pausa(0.5), j('J1', 'seta1.b', 1.4, 0.5), s('seta1', 1.4, 0.5)]),
      // 3. No último passo, passada longa em afundo.
      esperar(3, 0.8),
      // 4. Toca a parte de baixo da bola com o dorso da mão ou manchete.
      esperar(4, 0.8),
      // 5. Trota de costas de volta ao cone de 6 m para atacar o cone do outro lado.
      passo(5, [j('J1', 'seta3.b', 1.6), s('seta3', 1.6), j('J1', 'seta5.b', 1.6, 1.8), s('seta5', 1.6, 1.8)]),
    ],
  },

  // 18 · Recuo em diagonal para bola funda (lob)
  18: {
    passos: [
      esperar(1, 1.2),
      // 2. J2 aponta o canto do fundo (simulando o lob por cima da cabeça de J1).
      esperar(2, 1.2),
      // 3. J1 abre o quadril imediatamente e corre em diagonal até o cone do fundo.
      passo(3, [j('J1', 'seta1.b', 2.2), s('seta1', 2.2)]),
      // 4. Durante a corrida mantém o queixo sobre o ombro olhando para o alto.
      esperar(4, 0.8),
      // 5. No cone do fundo gira para a rede, simula a manchete alta e retorna ao cone de 3 m; depois repete para o outro canto.
      passo(5, [pausa(0.6), j('J1', 'seta3.b', 1.8, 0.6), s('seta3', 1.8, 0.6), j('J1', 'seta5.b', 2.2, 2.6), s('seta5', 2.2, 2.6)]),
    ],
  },

  // 19 · Frenagem na areia fofa e troca de direção em V
  19: {
    revisar: 'As setas 5 e 7 (braço direito do V) estão sobrepostas no desenho e a 5 foi extraída ao contrário; o percurso foi montado pelo texto.',
    passos: [
      // 1. J1 sai em explosão do cone central até o cone frontal esquerdo.
      passo(1, [j('J1', 'seta1.b', 1.4), s('seta1', 1.4)]),
      // 2. Baixa o quadril e crava o calcanhar para frear.
      esperar(2, 0.8),
      // 3. Muda de direção em diagonal para trás voltando ao cone central.
      passo(3, [j('J1', 'seta3.b', 1.4), s('seta3', 1.4)]),
      // 4. No cone central freia e explode para o cone frontal direito, completando o V.
      passo(4, [pausa(0.4), j('J1', [94.5, 108.4], 1.4, 0.4), s('seta5', 1.4, 0.4), j('J1', [47.8, 73.4], 1.4, 2.2), s('seta7', 1.4, 2.2)]),
      // 5. Após ida e volta nos dois braços do V, J2 assume a estação.
      passo(5, [j('J2', 'J1', 1.8)]),
    ],
  },

  // 20 · Vai-e-vem frente-fundo (gangorra de defesa)
  20: {
    passos: [
      esperar(1, 1.2),
      // 2. Ao sinal, J1 explode até o cone C e toca o chão com as duas mãos.
      passo(2, [j('J1', 'seta1.b', 1.2), s('seta1', 1.2)]),
      // 3. Abre o quadril e corre em velocidade máxima até o cone A (6,5 m).
      passo(3, [j('J1', 'seta2.b', 2.2), s('seta2', 2.2)]),
      // 4. No cone A vira e arranca de novo até o cone C, terminando no cone B.
      passo(4, [j('J1', 'seta3.b', 2.2), s('seta3', 2.2), j('J1', 'seta4.b', 1.2, 2.4), s('seta4', 1.2, 2.4)]),
      // 5. J1 e J2 revezam a cada série completa.
      trocar(5, 'J1', 'J2', 2.2),
    ],
  },

  // 21 · Toca no cone e recupera para a base central
  21: {
    passos: [
      esperar(1, 1.2),
      // 2. J2 chama um número de 1 a 4.
      esperar(2, 1.0),
      // 3. J1 usa o deslocamento correto para o canto e toca o cone chamado.
      passo(3, [j('J1', 'seta3.b', 1.4), s('seta3', 1.4)]),
      // 4. Recupera até o cone central e faz o destrave de frente para J2.
      passo(4, [j('J1', 'J1', 1.4)]),
      // 5. No instante em que J1 pisa na base, J2 chama o próximo número.
      passo(5, [j('J1', 'seta5.b', 1.6), s('seta5', 1.6), j('J1', 'J1', 1.4, 1.8), j('J1', 'seta7.b', 1.6, 3.6), s('seta7', 1.6, 3.6), j('J1', 'J1', 1.4, 5.4)]),
    ],
  },

  // 22 · Saída por estímulo visual do parceiro
  22: {
    passos: [
      esperar(1, 1.2),
      // 2. J2 mostra o sinal silencioso com os dedos e salta para bloquear na rede.
      passo(2, [pausa(1.0), j('J2', [129, 66], 0.35, 1.0), j('J2', [129, 72], 0.35, 1.35)]),
      // 3. No momento em que J2 salta, J1 faz o destrave e explode para o cone do sinal.
      passo(3, [j('J1', 'seta1.b', 1.3), s('seta1', 1.3)], { junto: 1.0 }),
      // 4. Chega ao cone plantando a base baixa e recupera ao centro.
      passo(4, [pausa(0.5), j('J1', 'J1', 1.4, 0.5)]),
      // 5. Após 6 repetições silenciosas, trocam de função.
      trocar(5, 'J1', 'J2', 2.4),
    ],
  },

  // 23 · Deslocamento ao comando de voz na transição (J2 está do outro lado da rede; só aparece o texto "J2")
  23: {
    bolaInicial: [156, 66],
    passos: [
      esperar(1, 1.2),
      // 2. J2 lança a bola para o alto para si mesmo.
      passo(2, [b([156, 66], { alta: true, dur: 1.5 })]),
      // 3. No ponto mais alto do salto, J2 grita o destino.
      esperar(3, 0.8),
      // 4. J1 destrava e explode para tocar o cone do grito.
      passo(4, [j('J1', 'seta1.b', 1.2), s('seta1', 1.2)]),
      // 5. Toca o cone na postura correta e volta ao centro para a próxima chamada.
      passo(5, [pausa(0.4), j('J1', 'J1', 1.2, 0.4), j('J1', 'seta3.b', 1.4, 2.0), s('seta3', 1.4, 2.0), j('J1', 'J1', 1.2, 3.8)]),
    ],
  },

  // 24 · Retirada simples do bloqueio para a diagonal
  24: {
    passos: [
      esperar(1, 1.2),
      // 2. Ao sinal de J2, J1 faz o salto vertical de bloqueio sem tocar na rede.
      passo(2, [pausa(0.6), j('J1', [129, 64], 0.35, 0.6), j('J1', [129, 72], 0.35, 0.95)]),
      // 3. Ao tocar a areia na descida, abre o pé esquerdo e o quadril para o cone da diagonal.
      esperar(3, 0.6),
      // 4. Corre 4 passadas explosivas olhando por cima do ombro, mantendo a rede à vista.
      passo(4, [j('J1', 'seta1.b', 1.8), s('seta1', 1.8)]),
      // 5. A 1 m do cone gira de frente para a rede, afunda a base e estanca os pés.
      passo(5, [j('J1', 'seta2.b', 0.8), s('seta2', 0.8)]),
    ],
  },

  // 25 · Retirada do bloqueio com escolha de corredor
  25: {
    passos: [
      esperar(1, 1.2),
      // 2. J2 grita qual corredor vai cobrir e corre para aquele cone.
      passo(2, [j('J2', 'seta1.b', 1.5), s('seta1', 1.5)]),
      // 3. J1 ameaça o bloqueio, ouve a chamada e retira para o corredor oposto, livre.
      passo(3, [j('J1', [129, 66], 0.3), j('J1', [129, 72], 0.3, 0.3), j('J1', 'seta3.b', 2.0, 0.6), s('seta3', 2.0, 0.6)]),
      // 4. Ambos estancam os pés ao mesmo tempo a 5 m da rede.
      esperar(4, 1.0),
      // 5. Após 6 repetições, trocam quem começa na rede e quem começa no fundo.
      trocar(5, 'J1', 'J2', 2.4),
    ],
  },

  // 26 · Arrancada lateral com recepção de manchete na zona alvo
  26: {
    bolaInicial: { ref: 'J2', dx: -6, dy: 0 },
    passos: [
      esperar(1, 1.0),
      // 2. J2 lança uma bola alta arqueada por cima da rede em direção ao cone da direita.
      passo(2, [b('seta1.b', { alta: true, dur: 2.4 }), s('seta1', 2.4)]),
      // 3. Assim que a bola sai da mão de J2, J1 gira o quadril e cruza os 4 metros até atrás da bola.
      passo(3, [j('J1', 'seta2.b', 1.8), s('seta2', 1.8)], { junto: 0.3 }),
      // 4. J1 estanca os pés e faz a manchete alta para a Zona Alvo junto à rede.
      passo(4, [b('zona1', { de: 'seta3.a', alta: true, dur: 1.6 }), s('seta3', 1.6)]),
      // 5. Recupera para o cone inicial; a cada 6 bolas trocam as funções.
      passo(5, [j('J1', 'J1', 1.4), j('J1', 'J2', 2.4, 1.8), j('J2', 'J1', 2.4, 1.8)]),
    ],
  },

  // 27 · Entrada na bola curta com defesa controlada
  27: {
    bolaInicial: 'seta1.a',
    passos: [
      esperar(1, 1.2),
      // 2. J2 finge que vai bater forte e solta uma bola curta (pingo) para o cone de 2 m.
      passo(2, [b('seta1.b', { alta: true, dur: 1.1 }), s('seta1', 1.1)]),
      // 3. J1 destrava, explode 4 m para a frente e entra em afundo no último passo.
      passo(3, [j('J1', 'seta2.b', 1.5), s('seta2', 1.5)], { junto: 0.3 }),
      // 4. Entra por baixo da bola e levanta com arco alto para a Zona Alvo central.
      passo(4, [b('zona1', { de: 'seta4.a', alta: true, dur: 1.4 }), s('seta4', 1.4)]),
      // 5. Levanta da areia e se posiciona para atacar; trocam a cada 8 bolas.
      passo(5, [j('J1', [70, 70], 1.0), j('J1', 'J2', 2.2, 1.4), j('J2', 'J1', 2.2, 1.4)]),
    ],
  },

  // 28 · Recuo para bola de lob com resposta de manchete
  28: {
    bolaInicial: 'seta1.a',
    passos: [
      esperar(1, 1.2),
      // 2. J2 lança uma bola alta por cobertura (lob) em direção ao cone de 7,5 m no fundo.
      passo(2, [b('seta1.b', { alta: true, dur: 2.4 }), s('seta1', 2.4)]),
      // 3. J1 abre o quadril, corre olhando a bola por cima do ombro e ultrapassa a linha de queda.
      passo(3, [j('J1', 'seta2.b', 2.0), s('seta2', 2.0)], { junto: 0.3 }),
      // 4. No último passo planta o pé, gira os ombros e faz a manchete alta para a Zona Alvo.
      passo(4, [b('zona1', { de: 'seta4.a', alta: true, dur: 1.6 }), s('seta4', 1.6)]),
      // 5. 6 bolas para cada canto, depois invertem os papéis.
      trocar(5, 'J1', 'J2', 2.2),
    ],
  },

  // 29 · Deslocamento do levantador saindo do fundo até a rede
  29: {
    bolaInicial: 'seta1.a',
    passos: [
      esperar(1, 1.2),
      // 2. J1 lança a bola alta para o centro e grita "SEU LEVANTE!".
      passo(2, [b('seta1.b', { alta: true, dur: 1.9 }), s('seta1', 1.9)]),
      // 3. No instante em que a bola sobe, J2 arranca em diagonal até o cone de levantamento.
      passo(3, [j('J2', 'seta2.b', 1.6), s('seta2', 1.6)], { junto: 0.2 }),
      // 4. J2 estanca os pés, vira os ombros para a entrada da rede e levanta para a Zona Alvo.
      passo(4, [b('zona1', { de: 'seta4.a', alta: true, dur: 1.3 }), s('seta4', 1.3)]),
      // 5. Após 8 repetições, invertem de lado e de função.
      trocar(5, 'J1', 'J2', 2.4),
    ],
  },

  // 30 · Sequência completa: retirada de bloqueio, defesa e aproximação de transição
  30: {
    bolaInicial: 'seta1.a',
    passos: [
      // 1. J1 salta ou finta o bloqueio; quando P/T prepara o ataque, abre o quadril e retira até o cone de 5,5 m.
      passo(1, [j('J1', [129, 47], 0.35), j('J1', [129, 53], 0.35, 0.35), j('J1', 'seta2.b', 1.8, 0.8), s('seta2', 1.8, 0.8)]),
      // 2. J1 estanca os pés exatamente quando P/T ataca a bola firme na diagonal dele.
      passo(2, [b('seta1.b', { dur: 1.2 }), s('seta1', 1.2)]),
      // 3. J1 defende de manchete alta para o centro, onde J2 se posiciona para levantar.
      passo(3, [b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.6 }), s('seta4', 1.6)]),
      // 4. Sem admirar a defesa, J1 abre 2 passos para fora e acelera para a Zona Alvo, para receber o levantamento de J2.
      passo(4, [j('J1', 'seta5.b', 1.8), s('seta5', 1.8), b('zona1', { de: 'seta6.a', alta: true, dur: 1.3, atraso: 0.7 }), s('seta6', 1.3, 0.7)]),
      // 5. J1 salta na Zona Alvo e passa a bola controlada; a cada 5 sequências rodam as posições.
      passo(5, [b([165, 40], { alta: true, dur: 1.4 }), j('J1', 'J2', 2.2, 1.6), j('J2', 'J1', 2.2, 1.6)]),
    ],
  },
}
