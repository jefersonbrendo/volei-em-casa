/** Lote 4 (parte A): exercícios 125 a 138 (ataque na costura e bloqueio). */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, s, trocar } from './ajudantes'

export const LOTE_4A: Record<number, Animacao> = {
  // 125 · Ataque após recepção na "costura" com cruzamento ou abertura rápida
  125: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 saca na costura central; A1 fecha para o meio e termina o passe exatamente no centro da quadra.
      passo(1, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0), j('A1', 'seta2.b', 1.0, 1.6), s('seta2', 1.0, 1.6), b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.6, atraso: 2.7 }), s('seta4', 1.6, 2.7)]),
      // 2. A1 e L1 treinam duas chamadas táticas de ataque para confundir o bloqueador B1.
      esperar(2, 1.0),
      // 3. Jogada 1 ("Abre!"): A1 dá 2 passos rápidos para trás/fora, voltando à antena; L1 levanta de dentro para fora.
      passo(3, [j('A1', 'seta5.b', 1.6), s('seta5', 1.6), b([121.2, 28.9], { alta: true, dur: 1.6, atraso: 0.4 }), b('seta7.b', { de: 'seta7.a', dur: 0.9, atraso: 2.0 }), s('seta7', 0.9, 2.0)]),
      // 4. Jogada 2 ("Cruza!"/"Meio!"): A1 continua a corrida pelo centro (ou cruza por trás de L1) e L1 levanta uma bola curta.
      passo(4, [j('A1', [61.8, 75], 0.8), j('A1', 'seta6.b', 1.6, 0.8), s('seta6', 1.6, 0.8), b([121.2, 101.2], { de: [110.1, 71.1], alta: true, dur: 1.6, atraso: 1.0 }), b('seta8.b', { de: 'seta8.a', dur: 0.9, atraso: 2.8 }), s('seta8', 0.9, 2.8)]),
      // 5. 4 bolas abrindo para a ponta e 4 atacando no meio/cruzando; depois trocam.
      trocar(5, 'A1', 'L1', 2.4),
    ],
  },

  // 126 · Desafio valendo ponto: "Só Golpes de Jeito" vs. "Só Pancada" contra defesa real
  126: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. A Dupla A ataca uma série de 9 bolas, divididas em 3 blocos de 3, valendo ponto real.
      esperar(1, 1.4),
      // 2. Bloco 1 ("Proibido Bater Forte"): só golpes colocados (cut shot, lob no fundo, poke ou cobra).
      passo(2, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8), j('A1', 'seta2.b', 1.4, 0.6), s('seta2', 1.4, 0.6), b('zona1', { de: 'seta3.a', dur: 1.1, atraso: 2.2 }), s('seta3', 1.1, 2.2), b('zona3', { de: 'seta5.a', alta: true, dur: 2.4, atraso: 3.6 }), s('seta5', 2.4, 3.6)]),
      // 3. Bloco 2 ("Proibido Largar"): cortada potente de mão aberta, a mais de 80% de força.
      passo(3, [b('zona2', { de: 'seta4.a', dur: 0.9 }), s('seta4', 0.9)]),
      // 4. Bloco 3 ("Arsenal Livre"): mistura tudo o que aprendeu para enganar B1 e D1.
      passo(4, [b('zona1', { de: [121.2, 35.6], dur: 1.0 }), b('zona3', { de: [121.2, 31.1], alta: true, dur: 2.2, atraso: 1.4 })]),
      // 5. Ao final das 9 bolas, contam-se os pontos e as duplas invertem de lado.
      passo(5, [j('A1', 'B1', 2.8), j('B1', 'A1', 2.8), j('L1', 'D1', 2.8), j('D1', 'L1', 2.8)]),
    ],
  },

  // 127 · Sequência valendo ponto: Side-out completo contra bloqueio e defesa agressiva
  127: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. A Dupla B tem 8 saques seguidos contra a Dupla A.
      esperar(1, 1.2),
      // 2. A Dupla B combina antes de cada saque o seu sistema defensivo (bloqueio e defesa).
      passo(2, [j('B1', [149, 40], 0.6), j('B1', [149, 34], 0.6, 0.8)]),
      // 3. A Dupla A recebe o saque, constrói o levantamento e lê o esquema para matar o ponto no primeiro ataque.
      passo(3, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0), j('S1', 'seta2.b', 1.6, 0.8), s('seta2', 1.6, 0.8), b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta4', 1.6, 3.2), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 4.9 }), s('seta5', 1.4, 4.9), j('A1', 'seta6.b', 1.4, 5.0), s('seta6', 1.4, 5.0)]),
      // 4. Placar: matar de primeira = +2; segunda tentativa = +1; bloqueio ou erro = 0 (e +2 para a Dupla B).
      passo(4, [b('seta8.b', { de: 'seta8.a', dur: 1.0 }), s('seta8', 1.0), b('seta9.b', { de: 'seta9.a', dur: 1.1, atraso: 1.6 }), s('seta9', 1.1, 1.6)]),
      // 5. Após os 8 saques, as duplas invertem de papel e vence quem somar mais pontos.
      passo(5, [j('A1', 'S1', 2.8), j('S1', 'A1', 2.8), j('L1', 'B1', 2.8), j('B1', 'L1', 2.8)]),
    ],
  },

  // 128 · Desafio final "Tríplice Coroa do Ataque": 3 bolas seguidas valendo o trono
  128: {
    bolaInicial: { ref: 'D1', dx: -6, dy: -3 },
    passos: [
      // 1. Para conquistar o "Trono do Ataque", A1 + L1 precisam vencer 3 bolas de ataque ininterruptas.
      esperar(1, 1.4),
      // 2. Bola 1 (side-out real): D1 saca; A1 recepciona, L1 levanta e A1 ataca para pontuar.
      passo(2, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0), j('A1', 'seta4.b', 1.4, 3.2), s('seta4', 1.4, 3.2), b('seta5.b', { de: 'seta5.a', dur: 0.9, atraso: 4.3 }), s('seta5', 0.9, 4.3)]),
      // 3. Bola 2 (bola de sufoco): o professor lança uma bola difícil aos 4 m; L1 levanta do fundo e A1 ataca a bola afastada.
      passo(3, [b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.8 }), s('seta2', 1.8), b('seta6.b', { de: 'seta6.a', dur: 1.0, atraso: 2.0 }), s('seta6', 1.0, 2.0)]),
      // 4. Bola 3 (contra-ataque sob fadiga): o professor bate uma bola em cima de A1; A1 defende, L1 levanta e A1 fecha.
      passo(4, [b('seta3.b', { de: 'seta3.a', dur: 1.8 }), s('seta3', 1.8), b([121.2, 34], { de: [48.9, 98.9], alta: true, dur: 1.6, atraso: 2.0 }), b([232.3, 30.6], { de: [121.2, 34], dur: 0.9, atraso: 3.8 })]),
      // 5. A dupla que converter pelo menos 2 das 3 bolas assume o lado do Trono.
      passo(5, [j('A1', 'B1', 2.8), j('B1', 'A1', 2.8), j('L1', 'D1', 2.8), j('D1', 'L1', 2.8)]),
    ],
  },

  // ───── BLOQUEIO ─────
  // 129 · Posição de base na rede, mãos altas e tempo de salto vertical
  129: {
    bolaInicial: { ref: 'A1', dx: 6, dy: 0 },
    passos: [
      // 1. B1 assume a posição de base na rede, a 40 cm da linha central, com as mãos abertas na altura das orelhas.
      esperar(1, 1.2),
      // 2. A1 lança a bola 1 m para o alto e salta como se fosse atacar.
      passo(2, [b('seta2.b', { alta: true, dur: 1.2 }), s('seta2', 1.2), j('A1', [118, 66], 0.4, 0.4), j('A1', [118, 72], 0.4, 0.8)]),
      // 3. Regra de ouro do tempo na areia: B1 espera os pés de A1 saírem da areia para então explodir.
      esperar(3, 1.0),
      // 4. B1 sobe reto, sem jogar os cotovelos para trás, e toca as duas mãos na bola que A1 segura no ponto mais alto.
      passo(4, [j('B1', [149, 66], 0.4), j('B1', [149, 72], 0.4, 0.4), s('seta1', 0.6)]),
      // 5. Realizam 10 repetições e invertem os papéis.
      trocar(5, 'A1', 'B1', 2.4),
    ],
  },

  // 130 · Deslocamento lateral na rede (passo lateral e passo cruzado) antes do salto
  130: {
    passos: [
      // 1. B1 começa sempre no cone central da rede.
      esperar(1, 1.2),
      // 2. Primeiros 5 saltos (deslocamento curto de 1,5 m): 2 passadas laterais, planta o pé de fora e salta em frente a A1.
      passo(2, [j('B1', 'seta1.b', 0.9), s('seta1', 0.9), j('B1', [149.7, 34], 0.35, 0.9), j('B1', 'seta1.b', 0.35, 1.25)]),
      // 3. 5 saltos seguintes (deslocamento longo de 3 m até a antena): 1 passo cruzado amplo, enquadra os pés no cone da ponta e salta.
      passo(3, [j('B1', 'B1', 0.8), j('B1', 'cone2', 1.4, 0.8), j('B1', [149, 26], 0.35, 2.2), j('B1', 'cone2', 0.35, 2.55)]),
      // 4. No topo do salto, B1 deve estar 100% equilibrado, sem continuar voando para fora da antena.
      esperar(4, 0.9),
      // 5. Volta ao cone central e repete para a ponta oposta; trocam a cada 10 saltos.
      passo(5, [j('B1', 'B1', 1.0), j('B1', 'seta2.b', 1.4, 1.0), s('seta2', 1.4, 1.0), j('B1', 'A1', 2.4, 3.2), j('A1', 'B1', 2.4, 3.2)]),
    ],
  },

  // 131 · Penetração agressiva das mãos sobre a rede ("invadir o telhado")
  131: {
    bolaInicial: { ref: 'A1', dx: 6, dy: 0 },
    passos: [
      // 1. Regra da praia: o bloqueador pode invadir por cima da rede se não tocar a bola antes do golpe do atacante.
      esperar(1, 1.4),
      // 2. A1 lança uma bola alta a 40–50 cm da fita e dá um tapa controlado em direção ao topo da rede.
      passo(2, [b('seta2.b', { alta: true, dur: 1.2 }), s('seta2', 1.2)]),
      // 3. B1 salta, sobe os ombros até as orelhas e, passando a fita, projeta os braços para a frente/baixo ("telhado" de 45 graus).
      passo(3, [j('B1', [147, 64], 0.5), j('B1', [147, 72], 0.5, 0.5), s('seta1', 0.8)]),
      // 4. Com os 10 dedos abertos e duros, B1 abafa a bola, que cai na Zona Alvo aos pés de A1.
      passo(4, [b('zona1', { de: 'seta3.a', dur: 0.9 }), s('seta3', 0.9)]),
      // 5. Trocam de função a cada 8 bolas abafadas.
      trocar(5, 'A1', 'B1', 2.4),
    ],
  },

  // 132 · Bloqueio direcional: fechar o corredor da paralela
  132: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. A1 passa a bola para L1 e se prepara para atacar na ponta esquerda; L1 levanta a 1,5 m da rede.
      passo(1, [b('seta2.b', { alta: true, dur: 1.9 }), s('seta2', 1.9)]),
      // 2. B1 se desloca na rede até posicionar o ombro de fora exatamente na linha da bola e do braço de ataque de A1.
      passo(2, [j('B1', 'seta4.b', 0.7), s('seta4', 0.7)]),
      // 3. B1 salta e vira a palma da mão externa 30 graus para dentro da quadra.
      passo(3, [j('B1', [149, 21], 0.35), j('B1', [149, 27], 0.35, 0.35), s('seta1', 0.6)]),
      // 4. A1 tenta atacar só no corredor da paralela: passando por B1 e caindo na Zona Protegida, ponto de A1.
      passo(4, [j('A1', 'seta3.b', 1.4), s('seta3', 1.4), b('seta5.b', { de: 'seta5.a', dur: 0.5, atraso: 1.8 }), s('seta5', 0.5, 1.8), b('zona1', { dur: 1.0, atraso: 2.3 })]),
      // 5. Realizam 8 ataques na paralela e rodam as posições.
      trocar(5, 'A1', 'B1', 2.4),
    ],
  },

  // 133 · Bloqueio direcional: fechar a diagonal e proteger o meio de quadra
  133: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. Para fechar a diagonal, B1 se posiciona 1 passo mais para o CENTRO da rede em relação à bola.
      passo(1, [j('B1', [149, 49], 0.9)]),
      // 2. A1 passa para L1 e entra para atacar na ponta com ângulo de 45 graus.
      passo(2, [b('seta2.b', { alta: true, dur: 1.9 }), s('seta2', 1.9), j('A1', 'seta3.b', 1.4, 0.6), s('seta3', 1.4, 0.6)]),
      // 3. B1 lê a linha do peito e do ombro de A1 e alinha as duas mãos na frente do ombro de ataque.
      esperar(3, 0.8),
      // 4. No salto, B1 invade os braços em diagonal na direção de A1.
      passo(4, [j('B1', [149, 43], 0.35), j('B1', [149, 49], 0.35, 0.35), s('seta1', 0.7)]),
      // 5. A1 tenta bater forte na diagonal: se B1 tocar na bola ou A1 mandar fora, ponto de B1.
      passo(5, [b('seta4.b', { de: 'seta4.a', dur: 0.6 }), s('seta4', 0.6)]),
    ],
  },

  // 134 · Sinais de bloqueio atrás das costas e combinação com o defensor
  134: {
    bolaInicial: { ref: 'D1', dx: -6, dy: -3 },
    passos: [
      // 1. Antes de cada saque de D1, B1 coloca as duas mãos atrás da lombar para mostrar o plano tático.
      esperar(1, 1.4),
      // 2. Código universal: mão esquerda de B1 para A1, direita para L1; 1 dedo = fecha a paralela, 2 dedos = fecha a diagonal.
      esperar(2, 1.4),
      // 3. Exemplo da rodada: 1 dedo na mão esquerda e 2 dedos na mão direita.
      esperar(3, 1.0),
      // 4. D1 lê o sinal, saca em A1 e já corre para defender a DIAGONAL.
      passo(4, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0), j('D1', 'seta3.b', 1.8, 1.0), s('seta3', 1.8, 1.0), b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta4', 1.6, 3.2)]),
      // 5. B1 cumpre 100% o sinal, fechando a paralela de A1; a cada 6 saques as duplas trocam de função.
      passo(5, [j('B1', 'seta2.b', 0.9), s('seta2', 0.9), j('A1', 'D1', 2.8, 1.6), j('D1', 'A1', 2.8, 1.6), j('L1', 'B1', 2.8, 1.6), j('B1', 'L1', 2.8, 1.6)]),
    ],
  },

  // 135 · Falso bloqueio (finta na rede e retirada para defender com 2 no fundo)
  135: {
    bolaInicial: { ref: 'D1', dx: -6, dy: -3 },
    passos: [
      // 1. No sinal atrás das costas, B1 mostra o "punho fechado" (falso bloqueio / retirada).
      esperar(1, 1.4),
      // 2. D1 saca em A1 e já se posiciona no cone de 5,5 m da diagonal.
      passo(2, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0), j('D1', 'seta2.b', 1.8, 1.0), s('seta2', 1.8, 1.0)]),
      // 3. Enquanto A1 recepciona e L1 se prepara, B1 encena que vai bloquear: mãos altas e um pequeno passo ameaçador.
      passo(3, [b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.6 }), s('seta4', 1.6), j('B1', [152, 34], 0.5), j('B1', [149, 34], 0.5, 0.6)]),
      // 4. No instante em que a bola sai das mãos de L1, B1 abre o quadril em silêncio e dispara até o cone de 5,5 m.
      passo(4, [b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4 }), s('seta5', 1.4), j('B1', 'seta6.b', 1.8, 0.3), s('seta6', 1.8, 0.3)]),
      // 5. B1 estanca os pés aos 5,5 m antes da batida de A1, defendendo com os dois jogadores no fundo.
      passo(5, [b('seta7.b', { de: 'seta7.a', dur: 1.0 }), s('seta7', 1.0)]),
    ],
  },

  // 136 · Sair do bloqueio ("pulling") ao ler levantamento longe da rede
  136: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -5 },
    passos: [
      // 1. Regra de ouro: nunca salte para bloquear se a bola foi levantada a mais de 2,5–3 m da fita.
      esperar(1, 1.4),
      // 2. A1 passa para L1; L1 varia a qualidade do levantamento: ora na rede (1,2 m), ora afastado (3,5 m).
      passo(2, [b('seta1.b', { alta: true, dur: 2.0 }), s('seta1', 2.0)]),
      // 3. Se a bola for na rede (1,2 m), B1 mantém a decisão, salta e bloqueia firme.
      passo(3, [j('B1', [149, 32], 0.4), j('B1', [149, 38], 0.4, 0.4)]),
      // 4. Se a bola saiu da mão de L1 para trás (3,5 m), B1 grita "SAÍ! LIVRE!", aborta o salto e faz o "pulling".
      passo(4, [j('B1', 'seta2.b', 1.6), s('seta2', 1.6)]),
      // 5. Após a defesa de B1 ou D1, a dupla constrói o contra-ataque.
      passo(5, [b('seta3.b', { de: 'seta3.a', dur: 1.3 }), s('seta3', 1.3)]),
    ],
  },

  // 137 · Leitura do atacante: observar a passada de aproximação e a linha do ombro
  137: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. Sequência visual de 3 etapas: o recebedor, as mãos do levantador e, por fim, o olhar cravado no atacante.
      esperar(1, 1.4),
      // 2. A1 passa para L1 e escolhe um de dois padrões claros de corrida na areia.
      passo(2, [b('seta1.b', { alta: true, dur: 1.9 }), s('seta1', 1.9)]),
      // 3. Padrão A: A1 abre fora e corre em ângulo fechado para a DIAGONAL; B1 lê os pés e o ombro e fecha a diagonal.
      passo(3, [j('A1_1', 'seta3.b', 1.4), s('seta3', 1.4), j('B1', [149, 48], 0.9, 0.6)]),
      // 4. Padrão B: A1 corre reto, paralelo à linha lateral, com o ombro para a PARALELA; B1 lê o alinhamento e fecha a linha.
      passo(4, [j('A1', 'seta2.b', 1.4), s('seta2', 1.4), j('B1', [149, 26], 0.9, 0.6)]),
      // 5. No último milissegundo no ar, se A1 baixar o cotovelo para largar, B1 abre as mãos altas para abafar.
      passo(5, [j('B1', [149, 30], 0.35), j('B1', [149, 26], 0.35, 0.35)]),
    ],
  },

  // 138 · Leitura do levantamento: bola colada na fita ("bola 50/50") vs. bola passada na antena
  138: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. L1 envia dois tipos de levantamento que dão total vantagem ao bloqueador se ele souber ler.
      esperar(1, 1.4),
      // 2. Situação 1 (bola colada na fita): B1 se aproxima a 20 cm da rede, salta no mesmo tempo de A1 e "encapsula" a bola.
      passo(2, [b('seta3.b', { alta: true, dur: 1.6 }), s('seta3', 1.6), j('B1_1', [146, 100], 0.4, 1.0), j('B1_1', [146, 107], 0.4, 1.4), s('seta4', 0.6, 1.0)]),
      // 3. Situação 2 (bola passada para fora da antena): A1 só pode cruzar por dentro, e B1 fecha 100% a DIAGONAL.
      passo(3, [b('seta1.b', { de: { ref: 'L1', dx: 0, dy: -6 }, alta: true, dur: 2.0 }), s('seta1', 2.0), j('B1', [149.6, 20], 0.5), j('B1', 'seta2.b', 0.8, 0.5), s('seta2', 0.8, 0.5)]),
      // 4. 5 bolas coladas na fita e 5 passadas na antena; depois rodam.
      trocar(4, 'A1', 'B1', 2.4),
    ],
  },
}
