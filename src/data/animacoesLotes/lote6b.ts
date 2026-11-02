/** Lote 6 (parte B): exercícios 221 a 240 (circuito físico, treino solo e em dupla). */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, s, trocar } from './ajudantes'

const MOTIVO_SOLO = 'Diagrama de treino solo/dupla: setas escuras misturam bola e deslocamento e há setas amarelas duplicadas; a animação foi montada pelo texto e pela ordem das setas.'

export const LOTE_6B: Record<number, Animacao> = {
  // 221 · Sprints curtos de 3 m, 5 m e 8 m (vai-e-vem de aceleração e frenagem)
  221: {
    passos: [
      // 1. J1 e J2 partem da linha de fundo (0 m) em posição baixa de largada.
      esperar(1, 1.2),
      // 2. Arrancada 1 (3 m): explodem até o cone de 3 m, freiam afundando o quadril, tocam a areia e voltam ao fundo.
      passo(2, [j('J1', [64.8, 60], 1.0), s('seta1', 1.0), j('J1', 'J1', 1.0, 1.3), s('seta2', 1.0, 1.3), j('J2', [64.8, 118], 1.0), j('J2', 'J2', 1.0, 1.3)]),
      // 3. Arrancada 2 (5 m): sem parar, viram e explodem até o cone de 5 m, tocam a areia com a outra mão e voltam.
      passo(3, [j('J1', [93.6, 60], 1.3), s('seta3', 1.3), j('J1', 'J1', 1.3, 1.6), s('seta4', 1.3, 1.6), j('J2', [93.6, 118], 1.3), j('J2', 'J2', 1.3, 1.6)]),
      // 4. Arrancada 3 (8 m): sprint final até a rede, simulam um salto curto de bloqueio na fita e encerram a passagem.
      passo(4, [j('J1', [132.5, 60], 1.8), s('seta5', 1.8), j('J1', [132.5, 55], 0.3, 1.9), j('J1', [132.5, 60], 0.3, 2.2), j('J2', [132.5, 118], 1.8), j('J2', [132.5, 113], 0.3, 1.9), j('J2', [132.5, 118], 0.3, 2.2)]),
      // 5. Volume e pausa: 4 séries de 1 percurso completo, com 60 a 75 s de descanso caminhando de volta ao fundo.
      passo(5, [j('J1', 'J1', 3.0), j('J2', 'J2', 3.0)]),
    ],
  },

  // 222 · Agilidade multidirecional no padrão em "T" na areia
  222: {
    passos: [
      // 1. J1 inicia no Cone A (base do T, na linha de fundo).
      esperar(1, 1.2),
      // 2. Trecho 1: corre de frente em velocidade por 5 m até o Cone B (centro) e toca sua ponta.
      passo(2, [j('J1', 'cone2', 1.4), s('seta1', 1.4)]),
      // 3. Trecho 2: olhando para a rede, desloca-se em passada lateral por 3 m para a esquerda até tocar o Cone C.
      passo(3, [j('J1', 'cone3', 1.0), s('seta2', 1.0)]),
      // 4. Trecho 3: inverte a direção e atravessa os 6 m de largura em passada lateral/cruzada até tocar o Cone D.
      passo(4, [j('J1', 'cone4', 1.8), s('seta3', 1.8)]),
      // 5. Trecho 4: volta lateralmente 3 m até o Cone B e finaliza recuando por 5 m até cruzar o Cone A.
      passo(5, [j('J1', 'cone2', 1.0), j('J1', 'cone1', 1.4, 1.1), s('seta4', 1.4, 1.1)]),
      // 6. Volume e pausa: 4 séries de 2 passagens pelo T, descansando enquanto o parceiro J2 executa a sua vez.
      trocar(6, 'J1', 'J2', 2.4),
    ],
  },

  // 223 · Agilidade no padrão em "X" (cortes em diagonais curtas e longas)
  223: {
    passos: [
      // 1. J1 começa no Cone 1 (fundo superior).
      esperar(1, 1.2),
      // 2. Perna 1 (diagonal de 8,5 m): sprint diagonal cruzando a quadra até o Cone 2 e freia com o pé externo.
      passo(2, [j('J1', 'cone2', 1.8), s('seta1', 1.8)]),
      // 3. Perna 2 (lateral na rede, 6 m): passada lateral/cruzada paralela à rede até o Cone 3, com 1 salto de bloqueio.
      passo(3, [j('J1', 'cone3', 1.4), j('J1', [123, 31], 0.35, 1.4), j('J1', 'cone3', 0.35, 1.75)]),
      // 4. Perna 3 (diagonal de recuo de 8,5 m): ao aterrissar, abre o quadril e recua em diagonal até o Cone 4.
      passo(4, [j('J1', 'cone4', 1.8), s('seta3', 1.8)]),
      // 5. Perna 4 (fundo, 6 m): desloca-se lateralmente na linha de fundo do Cone 4 de volta ao Cone 1, fechando o X.
      passo(5, [j('J1', 'cone1', 1.4)]),
      // 6. Volume e pausa: 4 séries de 1 volta completa no X, com 60 s de descanso enquanto J2 realiza o circuito.
      trocar(6, 'J1', 'J2', 2.4),
    ],
  },

  // 224 · Impulsão de bloqueio em sequência (3 pontos da rede)
  224: {
    passos: [
      // 1. J1 começa no Cone 1 (esquerda) em postura pronta de bloqueio.
      esperar(1, 1.2),
      // 2. Executa o 1º salto vertical máximo, invadindo os braços por cima da fita.
      passo(2, [j('J1', [128, 38], 0.4), j('J1', [128, 44], 0.4, 0.4)]),
      // 3. Aterrissa amortecido, usa o passo lateral/cruzado por 2,5 m até o Cone 2 (centro) e executa o 2º salto máximo.
      passo(3, [j('J1', 'cone2', 1.0), s('seta1', 1.0), j('J1', [128, 77], 0.4, 1.0), j('J1', [128, 83], 0.4, 1.4)]),
      // 4. Desloca-se até o Cone 3 para o 3º salto; depois faz o caminho inverso (4º no Cone 3, 5º no Cone 2 e 6º no Cone 1).
      passo(4, [j('J1', 'cone3', 1.0), s('seta2', 1.0), j('J1', [128, 117], 0.4, 1.0), j('J1', [128, 122], 0.4, 1.4), j('J1', 'cone2', 1.0, 2.0), s('seta3', 1.0, 2.0), j('J1', 'cone1', 1.0, 3.2), s('seta4', 1.0, 3.2)]),
      // 5. Volume e pausa: 4 séries de 6 saltos máximos de bloqueio, com 60 s de descanso (revezando com J2).
      trocar(5, 'J1', 'J2', 2.4),
    ],
  },

  // 225 · Impulsão de ataque após recuo em V e chamada de 3 passos
  225: {
    passos: [
      // 1. J1 começa no cone de 1,5 m da rede, na ponta esquerda.
      esperar(1, 1.2),
      // 2. Abre o quadril e recua rápido na areia até o cone de 4,5 m, onde planta o pé de trás.
      passo(2, [j('J1', 'seta1.b', 1.2), s('seta1', 1.2)]),
      // 3. Sem pausa, acelera a chamada de 3 passos, lança os braços para cima e salta no máximo a 1,5 m da rede.
      passo(3, [j('J1', 'seta2.b', 1.0), s('seta2', 1.0), j('J1', [113.5, 44], 0.4, 1.0), j('J1', [113.5, 50.7], 0.4, 1.4)]),
      // 4. Repete o recuo e o salto mais 2 vezes na ponta esquerda e atravessa trotando para mais 3 na ponta direita.
      passo(4, [j('J1', 'seta1.b', 1.0), j('J1', 'seta2.b', 0.9, 1.1), j('J1', 'seta3.b', 1.6, 2.2), s('seta3', 1.6, 2.2), j('J1', 'seta4.b', 1.0, 3.9), s('seta4', 1.0, 3.9), j('J1', 'seta5.b', 0.9, 5.0), s('seta5', 0.9, 5.0)]),
      // 5. Volume e pausa: 4 séries de 6 saltos de ataque após recuo, com 75 s de descanso enquanto J2 trabalha.
      trocar(5, 'J1', 'J2', 2.4),
    ],
  },

  // 226 · Agilidade reativa em Estrela (5 pontas de velocidade e reação)
  226: {
    passos: [
      // 1. J1 posiciona-se no cone base central em skipping baixo; J2 fica na rede controlando o tempo.
      passo(1, [j('J1', [76, 85], 0.3), j('J1', [76, 83], 0.3, 0.3), j('J1', [76, 85], 0.3, 0.6), j('J1', [76, 83], 0.3, 0.9)]),
      // 2. Ao iniciar o cronômetro de 20 s, J2 grita aleatoriamente um número de 1 a 5 (ex.: "4!").
      esperar(2, 1.0),
      // 3. J1 explode do centro até o cone chamado, usando a passada técnica daquele ângulo, toca-o e volta ao centro.
      passo(3, [j('J1', 'seta6.b', 1.2), s('seta6', 1.2), j('J1', 'J1', 1.2, 1.3)]),
      // 4. Assim que J1 pisa na base, J2 já chama o próximo número, sem deixar J1 parar.
      passo(4, [j('J1', 'seta3.b', 1.0), s('seta3', 1.0), j('J1', 'J1', 1.0, 1.1), j('J1', 'seta8.b', 1.2, 2.2), s('seta8', 1.2, 2.2), j('J1', 'J1', 1.2, 3.5), j('J1', 'seta1.b', 1.0, 4.7), s('seta1', 1.0, 4.7), j('J1', 'J1', 1.0, 5.8), j('J1', 'seta4.b', 1.0, 6.9), s('seta4', 1.0, 6.9), j('J1', 'J1', 1.0, 8.0)]),
      // 5. Volume e pausa: 4 séries de 20 s de estímulo máximo por 40 s de recuperação (revezando com J2).
      trocar(5, 'J1', 'J2', 2.4),
    ],
  },

  // 227 · Intervalado específico de rali (15 s de alta intensidade por 20 s de pausa)
  227: {
    passos: [
      // 1. Ao apito inicial (15 s de esforço máximo), J1 e J2 executam encadeadamente a simulação física de um rali pesado.
      esperar(1, 1.2),
      // 2. Segundos 0 a 4: 1 salto máximo de bloqueio no Ponto 1 e retirada em sprint até o Ponto 2 (5,5 m).
      passo(2, [j('J1', [127, 43], 0.35), j('J1', [127, 49], 0.35, 0.35), j('J1', 'seta1.b', 1.8, 0.8), s('seta1', 1.8, 0.8)]),
      // 3. Segundos 5 a 9: do Ponto 2, arrancam até o Ponto 3 (2 m) e fazem uma descida rápida de peito/mãos na areia.
      passo(3, [j('J1', 'seta3.b', 1.4), s('seta3', 1.4)]),
      // 4. Segundos 10 a 15: levantam, recuam 2 passos, fazem a chamada e encerram com 1 salto máximo de ataque no Ponto 4.
      passo(4, [j('J1', 'seta5.b', 1.4), s('seta5', 1.4), j('J1', [113.5, 44], 0.4, 1.4), j('J1', [113.5, 50], 0.4, 1.8)]),
      // 5. Pausa ativa (20 s): caminham até a linha de fundo, controlam a respiração e voltam ao Ponto 1 para o próximo apito.
      passo(5, [j('J1', [36, 83], 2.2), j('J1', 'J1', 2.2, 2.4)]),
      // 6. Volume e pausa: 2 blocos de 6 repetições de 15 s:20 s, com 2 min de intervalo entre eles.
      esperar(6, 1.2),
    ],
  },

  // 228 · Circuito Físico + Bola 1: pliometria lateral e defesa reativa
  228: {
    passos: [
      // 1. J1 posiciona-se nos cones de 5,5 m e executa 4 saltos pliométricos laterais rápidos sobre os cones.
      passo(1, [j('J1', 'cone1', 0.5), j('J1', 'cone2', 0.5, 0.6), j('J1', 'cone3', 0.5, 1.2), j('J1', [58, 84], 0.5, 1.8), s('seta1', 2.3)]),
      // 2. No instante em que J1 aterrissa do 4º salto, T/J2 bate ou lança uma bola difícil.
      passo(2, [b('seta4.b', { de: 'seta4.a', dur: 1.2 }), s('seta4', 1.2), s('seta5', 1.2)]),
      // 3. J1 transforma o amortecimento do 4º salto em arrancada, salva a bola (manchete ou peixinho) e a põe alta na Zona Alvo.
      passo(3, [j('J1', 'seta2.b', 1.2), s('seta2', 1.2), b('zona1', { de: 'seta6.a', alta: true, dur: 1.8, atraso: 0.9 }), s('seta6', 1.8, 0.9), s('seta7', 1.8, 0.9)]),
      // 4. Sem pausa, J1 volta aos cones e repete o ciclo (4 saltos + 1 defesa difícil) por 4 bolas seguidas.
      passo(4, [j('J1', 'J1', 2.0)]),
      // 5. Volume e pausa: 4 séries de 4 bolas, descansando enquanto atua como lançador para o parceiro.
      trocar(5, 'J1', 'T', 2.4),
    ],
  },

  // 229 · Circuito Físico + Bola 2: agilidade em triângulo, recepção e ataque
  229: {
    passos: [
      // 1. J1 inicia no triângulo de cones e executa um giro explosivo tocando os 3 cones.
      passo(1, [j('J1', 'cone2', 1.0), j('J1', 'cone1', 1.0, 1.1), j('J1', 'cone3', 1.0, 2.2), s('seta1', 3.2)]),
      // 2. Assim que J1 toca no 3º cone, T envia um saque/bola alta na direção de J1.
      passo(2, [b('seta2.b', { de: { ref: 'T', dx: -6, dy: -3 }, alta: true, dur: 2.6 }), s('seta2', 2.6)]),
      // 3. J1 freia a corrida, planta os dois pés e faz a recepção de manchete para J2 na rede.
      passo(3, [b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.6 }), s('seta4', 1.6), s('seta5', 1.6)]),
      // 4. Imediatamente após passar, J1 faz a aproximação até a rede, salta e ataca o levantamento de J2.
      passo(4, [j('J1', 'seta6.b', 1.4), s('seta6', 1.4), b('seta8.b', { de: 'seta8.a', alta: true, dur: 1.4 }), s('seta8', 1.4), s('seta9', 1.4), b('seta10.b', { de: 'seta10.a', dur: 1.0, atraso: 1.6 }), s('seta10', 1.0, 1.6)]),
      // 5. Assim que aterrissa do ataque, J1 corre de volta ao triângulo e emenda a 2ª e a 3ª sequência sem parar.
      passo(5, [j('J1', 'cone3', 2.2)]),
      // 6. Volume e pausa: 4 séries de 3 sequências contínuas, com 75 s de descanso trocando de função com os parceiros.
      trocar(6, 'J1', 'J2', 2.4),
    ],
  },

  // 230 · Circuito Físico + Bola 3: resistência de Tie-Break (bloqueio, retirada, defesa e contra-ataque)
  230: {
    passos: [
      // 1. J1 começa na rede e faz 2 saltos máximos de bloqueio, deslocando-se entre os dois cones da fita.
      passo(1, [j('J1', [127, 33], 0.35), j('J1', [127, 39], 0.35, 0.35), j('J1', 'cone2', 1.0, 0.9), s('seta1', 1.0, 0.9), j('J1', [127, 60], 0.35, 1.9), j('J1', [127, 66], 0.35, 2.25)]),
      // 2. Ao aterrissar do 2º bloqueio, J1 abre o quadril e faz a retirada em sprint máximo até o cone de 6 m no fundo.
      passo(2, [j('J1', 'seta2.b', 1.8), s('seta2', 1.8)]),
      // 3. Quando J1 planta os pés no cone de 6 m, T bate/lança uma bola de ataque na direção de J1.
      passo(3, [b('seta3.b', { de: { ref: 'T', dx: -6, dy: -3 }, dur: 1.4 }), s('seta3', 1.4)]),
      // 4. J1 defende a bola alta para o centro, arranca do fundo de volta à rede e salta para atacar o levantamento de J2.
      passo(4, [b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.6 }), s('seta5', 1.6), s('seta6', 1.6), b('seta7.b', { de: 'seta7.a', alta: true, dur: 1.4, atraso: 1.7 }), s('seta7', 1.4, 1.7), s('seta8', 1.4, 1.7), j('J1', 'seta9.b', 1.4, 1.8), s('seta9', 1.4, 1.8), b('seta10.b', { de: 'seta10.a', dur: 1.0, atraso: 3.4 }), s('seta10', 1.0, 3.4)]),
      // 5. Sem descanso, assim que pousa do ataque, J1 já refaz os 2 saltos de bloqueio, iniciando a 2ª, 3ª e 4ª bola da bateria.
      passo(5, [j('J1', 'cone1', 2.0), j('J1', [127, 33], 0.35, 2.1), j('J1', [127, 39], 0.35, 2.45)]),
      // 6. Volume e pausa: 3 séries de 4 transições completas ininterruptas, seguidas de 90 s de descanso na sombra.
      esperar(6, 1.2),
    ],
  },

  // 231 · Controle individual de manchete e toque em deslocamento pelas linhas (solo)
  231: {
    revisar: 'As setas verticais (travessia junto à rede e fechamento no fundo) não foram reconhecidas e ficam fixas; o percurso foi montado pelos cones.',
    passos: [
      // 1. J1 começa no Cone 1 (canto do fundo) e alterna 1 toque de manchete e 1 toque de dedos acima da testa, para si mesmo.
      esperar(1, 1.4),
      // 2. Trecho 1 (linha lateral até a rede, 8 m): avança de frente controlando a bola a 3 m de altura até o Cone 2.
      passo(2, [j('J1', 'cone2', 2.2), s('seta1', 2.2), s('seta3', 2.2), s('seta4', 2.2)]),
      // 3. Trecho 2 (travessia junto à rede, 8 m): desloca-se lateralmente, paralelo à fita, do Cone 2 até o Cone 3.
      passo(3, [j('J1', 'cone3', 2.2)]),
      // 4. Trecho 3 (recuo pela outra lateral, 8 m): recua em passos laterais/diagonais do Cone 3 até o Cone 4.
      passo(4, [j('J1', 'cone4', 2.2), s('seta2', 2.2)]),
      // 5. Trecho 4 (fechamento na linha de fundo, 8 m): fecha o circuito, do Cone 4 de volta ao Cone 1 (32 m de perímetro).
      passo(5, [j('J1', 'cone1', 2.2)]),
    ],
  },

  // 232 · Auto-lançamento, passada na areia e ataque em alvos (solo)
  232: {
    bolaInicial: { ref: 'J1', dx: 5, dy: -3 },
    passos: [
      // 1. J1 posiciona-se no cone de 4 m da rede segurando uma bola.
      esperar(1, 1.2),
      // 2. Auto-lançamento alto (4,5 m): a bola sobe e cai a 1,5 m da rede e a 1 m da antena.
      passo(2, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8), s('seta2', 1.8)]),
      // 3. Enquanto a bola sobe, J1 aguarda na base e explode na passada de 3 apoios na areia fofa.
      passo(3, [j('J1', 'seta3.b', 1.3), s('seta3', 1.3)]),
      // 4. Salta a 1,5 m da rede e ataca os alvos em ordem: Alvo 1 (paralela), Alvo 2 (cut shot curto), Alvo 3 (diagonal longa).
      passo(4, [b('zona2', { de: 'seta4.a', dur: 1.0 }), s('seta4', 1.0), b('zona3', { de: 'seta6.a', dur: 1.1, atraso: 1.4 }), s('seta6', 1.1, 1.4), s('seta7', 1.1, 1.4), b('zona4', { de: 'seta8.a', dur: 1.1, atraso: 3.0 }), s('seta8', 1.1, 3.0)]),
      // 5. Depois de bater as bolas da entrada esquerda, recolhe as bolas e repete a série saindo da ponta direita.
      passo(5, [j('J1', 'cone2', 2.0)]),
    ],
  },

  // 233 · Rotina individual de saque em alvos com coleta ativa em sprint (solo)
  233: {
    bolaInicial: { ref: 'J1', dx: 5, dy: -3 },
    passos: [
      // 1. J1 saca uma bateria de 4 bolas na sequência: Zona 1, Zona 2, Zona 3 e Zona 4.
      passo(1, [b('seta1.b', { alta: true, dur: 2.0 }), s('seta1', 2.0), s('seta2', 2.0), b('seta3.b', { de: { ref: 'J1', dx: 5, dy: -3 }, alta: true, dur: 2.0, atraso: 2.2 }), s('seta3', 2.0, 2.2), s('seta4', 2.0, 2.2), b('seta5.b', { de: { ref: 'J1', dx: 5, dy: -3 }, alta: true, dur: 2.2, atraso: 4.4 }), s('seta5', 2.2, 4.4), b('seta7.b', { de: { ref: 'J1', dx: 5, dy: -3 }, alta: true, dur: 2.0, atraso: 6.8 }), s('seta7', 2.0, 6.8), s('seta8', 2.0, 6.8)]),
      // 2. Coleta ativa: é PROIBIDO buscar as bolas caminhando; J1 passa por baixo da rede em sprint, recolhe agachando e volta trotando.
      passo(2, [j('J1', 'seta9.b', 2.4), s('seta9', 2.4)]),
      // 3. Na linha de fundo oposta (agora do outro lado do vento e do sol), tem 10 s para respirar e sacar de volta.
      esperar(3, 1.4),
      // 4. Com uma única bola: saca, corre até a linha de 5,5 m (entrada de defesa pós-saque), atravessa, pega a bola e saca do lado oposto.
      passo(4, [j('J1', [100, 83], 1.6), j('J1', [258, 83], 2.4, 1.8)]),
    ],
  },

  // 234 · Controle contínuo em dupla com toque na linha e chamada
  234: {
    revisar: MOTIVO_SOLO,
    bolaInicial: { ref: 'J1', dx: -3, dy: 6 },
    passos: [
      // 1. J1 e J2 trocam passes contínuos (manchete ou toque limpo), mantendo a bola alta (mínimo 4 m) no centro.
      passo(1, [b('seta1.b', { alta: true, dur: 1.9 }), s('seta1', 1.9), s('seta2', 1.9), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.9, atraso: 2.1 }), s('seta3', 1.9, 2.1), s('seta4', 1.9, 2.1)]),
      // 2. Deslocamento obrigatório: após tocar a bola, o jogador abre o quadril, corre 2 m para trás, toca o cone da lateral e volta ao centro.
      passo(2, [j('J1', 'seta5.b', 0.7), s('seta5', 0.7), j('J1', 'J1', 0.7, 0.8), j('J2', 'seta6.b', 0.7, 0.4), s('seta6', 0.7, 0.4), j('J2', 'J2', 0.7, 1.2)]),
      // 3. Enquanto o outro corre, o parceiro grita a orientação ("DIREITA!", "ESQUERDA!" ou "CURTA!") e envia a bola 1 m deslocada.
      passo(3, [b([86, 112], { de: 'seta1.a', alta: true, dur: 1.9 })]),
      // 4. O jogador retorna, freia os dois pés, responde "MINHA!" e devolve a bola alta no centro, antes de tocar o cone de novo.
      passo(4, [b([85.2, 56.5], { alta: true, dur: 1.9 })]),
    ],
  },

  // 235 · Auto-defesa de reação na rede, giro e transição individual (solo)
  235: {
    bolaInicial: { ref: 'J1', dx: 5, dy: -2 },
    passos: [
      // 1. Dica de ouro do treino solo: a malha central da rede funciona como um "paredão elástico".
      esperar(1, 1.4),
      // 2. Passo 1 (o rebote na rede): J1 a 2,5 m da rede arremessa a bola com força contra o meio da malha.
      passo(2, [b('seta1.b', { dur: 1.0 }), s('seta1', 1.0)]),
      // 3. Passo 2 (1º toque, defesa reflexa): a rede devolve a bola rápida e baixa e J1 defende de manchete, 4 m para o alto.
      passo(3, [b('seta3.b', { de: 'seta3.a', dur: 1.0 }), s('seta3', 1.0), s('seta4', 1.0), j('J1', [100, 85], 0.3, 0.6), j('J1', [100, 83], 0.3, 0.9)]),
      // 4. Passo 3 (2º toque, autolevantamento): J1 entra embaixo da bola e levanta para a entrada da rede (a 1,5 m da fita).
      passo(4, [b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.6 }), s('seta5', 1.6), s('seta6', 1.6)]),
      // 5. Passo 4 (3º toque, ataque): J1 dá os 2 passos finais, salta e ataca nas Zonas Alvo do lado direito.
      passo(5, [j('J1', 'seta7.b', 1.3), s('seta7', 1.3), b('seta9.b', { de: 'seta9.a', dur: 1.0, atraso: 1.2 }), s('seta9', 1.0, 1.2)]),
    ],
  },

  // 236 · Saque, recepção na zona alvo e auto-ataque entre parceiros (dupla)
  236: {
    revisar: MOTIVO_SOLO,
    bolaInicial: { ref: 'J2', dx: -6, dy: -3 },
    passos: [
      // 1. Com só 2 jogadores, treina-se o side-out com a regra do "auto-side-out de 3 toques individuais".
      esperar(1, 1.4),
      // 2. J2 saca da linha de fundo direita (8 m), buscando dificultar a recepção de J1.
      passo(2, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 3. 1º toque de J1 (recepção): destrava, desloca-se e recepciona de manchete alta para a zona de recepção perfeita.
      passo(3, [b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6 }), s('seta3', 1.6), s('seta4', 1.6)]),
      // 4. 2º toque de J1 (autolevantamento): corre atrás da própria bola até a zona central, para os pés e levanta para a sua ponta.
      passo(4, [j('J1', 'seta5.b', 1.2), s('seta5', 1.2), b('seta7.b', { de: 'seta7.a', alta: true, dur: 1.4, atraso: 1.2 }), s('seta7', 1.4, 1.2), s('seta8', 1.4, 1.2)]),
      // 5. 3º toque de J1 (ataque): dá os 2 passos finais e ataca para a quadra direita, onde J2 já entrou para defender.
      passo(5, [j('J1', 'seta9.b', 1.0), s('seta9', 1.0), b('seta11.b', { de: 'seta11.a', dur: 1.0, atraso: 1.0 }), s('seta11', 1.0, 1.0), j('J2', 'seta13.b', 1.4, 1.0), s('seta13', 1.4, 1.0)]),
    ],
  },

  // 237 · Sequência cooperativa-competitiva em dupla: lançamento de defesa, levantamento e ataque
  237: {
    revisar: MOTIVO_SOLO,
    bolaInicial: { ref: 'J1', dx: -5, dy: -3 },
    passos: [
      // 1. Sem adversário do outro lado da rede, o próprio levantador (J1) inicia a jogada batendo contra o defensor (J2).
      esperar(1, 1.4),
      // 2. Passo 1 (estímulo de defesa): J1, na rede, bate uma cortada controlada, uma largada curta ou um lob nas costas de J2.
      passo(2, [b('seta1.b', { dur: 1.4 }), s('seta1', 1.4)]),
      // 3. Passo 2 (1º toque, defesa de J2): J2 lê o golpe, desloca-se e defende a bola alta (4,5 m) de volta ao centro da rede.
      passo(3, [b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.8 }), s('seta3', 1.8), s('seta4', 1.8)]),
      // 4. Passo 3 (2º toque, levantamento de J1): J1 entra embaixo da defesa de J2, para os pés e levanta na medida.
      passo(4, [b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4 }), s('seta5', 1.4), s('seta6', 1.4)]),
      // 5. Passo 4 (3º toque, ataque + canto de alvo): J2 corre para atacar e crava a bola no alvo pedido por J1.
      passo(5, [j('J2', 'seta7.b', 1.4), s('seta7', 1.4), b('seta9.b', { de: 'seta9.a', dur: 1.0, atraso: 1.4 }), s('seta9', 1.0, 1.4), s('seta10', 1.0, 1.4), b('seta11.b', { de: 'seta11.a', alta: true, dur: 2.0, atraso: 3.0 }), s('seta11', 2.0, 3.0)]),
    ],
  },

  // 238 · Transição completa em dupla saindo da rede: bloqueio, retirada, defesa e ataque
  238: {
    passos: [
      // 1. J1 começa colado na rede (bloqueador que vai retirar e atacar); J2 fica a 2 m da rede com uma bola nas mãos.
      esperar(1, 1.2),
      // 2. Passo 1 (salto de bloqueio + retirada): J1 salta na fita e, ao tocar a areia, dispara em retirada até o cone de 5,5 m.
      passo(2, [j('J1', [127, 38], 0.35), j('J1', [127, 44], 0.35, 0.35), j('J1', 'seta1.b', 1.6, 0.8), s('seta1', 1.6, 0.8)]),
      // 3. Passo 2 (ataque simulado de J2): quando J1 planta os pés no cone, J2 bate ou lança uma bola difícil na direção de J1.
      passo(3, [b('seta2.b', { de: { ref: 'J2', dx: -5, dy: -3 }, dur: 1.2 }), s('seta2', 1.2)]),
      // 4. Passo 3 (defesa + levantamento): J1 defende alto para o centro (2 m da rede) e J2 levanta na ponta.
      passo(4, [b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.6 }), s('seta4', 1.6), s('seta5', 1.6), b('seta6.b', { de: 'seta6.a', alta: true, dur: 1.4, atraso: 1.7 }), s('seta6', 1.4, 1.7), s('seta7', 1.4, 1.7)]),
      // 5. Passo 4 (contra-ataque): J1 arranca de volta até a rede, salta e finaliza; fazem 6 repetições e invertem os papéis.
      passo(5, [j('J1', 'seta8.b', 1.4), s('seta8', 1.4), b('seta9.b', { de: 'seta9.a', dur: 1.0, atraso: 1.3 }), s('seta9', 1.0, 1.3), j('J1', 'J2', 2.4, 3.0), j('J2', 'J1', 2.4, 3.0)]),
    ],
  },

  // 239 · Desafio cooperativo-competitivo em dupla: "Rali de 3 Toques + Jogo Livre"
  239: {
    revisar: MOTIVO_SOLO,
    bolaInicial: { ref: 'J1', dx: 5, dy: -3 },
    passos: [
      // 1. Com só 1 amigo, une-se cooperação e competição no mesmo rali.
      esperar(1, 1.4),
      // 2. Fase 1 (cooperação obrigatória): cada jogador faz 3 toques individuais (recepciona, auto-levanta e devolve na direção do outro).
      passo(2, [b('seta2.b', { alta: true, dur: 2.4 }), s('seta2', 2.4), s('seta3', 2.4), b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.2, atraso: 2.6 }), s('seta4', 1.2, 2.6), s('seta5', 1.2, 2.6), b('seta6.b', { de: 'seta6.a', alta: true, dur: 2.2, atraso: 4.0 }), s('seta6', 2.2, 4.0), s('seta7', 2.2, 4.0)]),
      // 3. Fase 2 ("VALENDO!"): a partir da 3ª travessia da bola pela rede, quem está com ela grita "VALENDO!" e a competição abre.
      passo(3, [b('seta8.b', { de: 'seta8.a', alta: true, dur: 1.2 }), s('seta8', 1.2), s('seta9', 1.2)]),
      // 4. Depois do grito, vale matar o ponto nos cantos (2 ou 3 toques individuais, cut shot, lob na linha de 8 m ou poke curto).
      passo(4, [b('seta10.b', { de: 'seta10.a', dur: 1.2 }), s('seta10', 1.2)]),
      // 5. Erro na fase cooperativa custa 1 ponto; vencer o rali da fase competitiva vale +2 pontos.
      esperar(5, 1.2),
    ],
  },

  // 240 · Treino autônomo completo de 30 minutos para dupla (o "treino perfeito" sem professor)
  240: {
    revisar: 'O desenho mostra os 4 blocos do protocolo em painéis separados; animei um exemplo de cada bloco, sem inventar a sequência completa de 30 minutos.',
    bolaInicial: { ref: 'J1', dx: 5, dy: -3 },
    passos: [
      // 1. Quando estiverem só em dois, sigam o Protocolo Oficial de 30 Minutos em 4 blocos.
      esperar(1, 1.4),
      // 2. Bloco 1 (min 0–6): mobilidade articular na areia + controle contínuo com toque nos cones laterais.
      passo(2, [b('seta2.b', { alta: true, dur: 1.4 }), s('seta2', 1.4), s('seta3', 1.4), b({ ref: 'J1', dx: 5, dy: -3 }, { alta: true, dur: 1.4, atraso: 1.6 })]),
      // 3. Bloco 2 (min 6–13): 20 levantamentos de manchete e 20 de toque limpo, do fundo até a rede, na Zona Alvo.
      passo(3, [b('zona1', { de: { ref: 'J1_1', dx: 5, dy: -3 }, alta: true, dur: 1.8 })]),
      // 4. Bloco 3 (min 13–21): 10 saques de J1 contra a recepção, auto-levantamento e ataque de J2, e depois 10 de J2 contra J1.
      passo(4, [b('seta4.b', { de: { ref: 'J2_2', dx: -6, dy: -3 }, alta: true, dur: 2.2 }), s('seta4', 2.2), s('seta5', 2.2)]),
      // 5. Bloco 4 (min 21–30): transição de bloqueio + retirada + defesa + ataque e tie-break até 15 no corredor 1x1.
      passo(5, [b('seta6.b', { de: { ref: 'J1_3', dx: 6, dy: -3 }, alta: true, dur: 1.8 }), s('seta6', 1.8), s('seta7', 1.8)]),
    ],
  },
}

/** Exercícios sem animação neste lote (ficam com o diagrama estático). */
export const SEM_ANIMACAO_LOTE_6B: Record<number, string> = {}
