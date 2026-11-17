/**
 * Seção 6 · Ataque (quadra). Referência: seção Ataque da areia, adaptada às posições da rede.
 * Quem ataca fica à esquerda (azul). Posição 4 em cima (y perto de 0), 3 no meio, 2 embaixo.
 * Do outro lado (verde), diagonal é o canto de baixo e paralela é o canto de cima.
 */
import { pt } from '../../lib/quadra/cena'
import { b, esperar, j, passo, s } from '../animacoesLotes/ajudantes'
import { naMao, type ExercicioComDesenho } from './tipos'

const L = { id: 'L', x: 8.1, y: 5.8, rotulo: 'L' }

export const ATAQUE: ExercicioComDesenho[] = [
  {
    numero: 601, secao: 6, nivel: 'Iniciante',
    nome: 'Passada de ataque sem bola',
    jogadores: '2 jogadores (revezando)', tempo: '8 minutos', material: '2 cones',
    objetivo: 'Aprender a passada de ataque (3 ou 4 passos) e o salto com os dois pés, antes de juntar a bola.',
    comoMontar: 'Coloque um cone fora da quadra, 3 metros atrás da linha dos 3 metros, perto da lateral da posição 4 (ponto de partida). Coloque outro a 1 metro da rede, na posição 4 (ponto do salto).',
    passoAPasso: [
      'J1 começa no cone de partida, de frente para a rede, com o pé do braço de ataque um pouco atrás.',
      'Faz a passada para destros: esquerda (curta), direita (longa) e esquerda (fecha, ao lado da direita).',
      'No último passo, leva os dois braços para trás e salta com os dois pés, subindo os braços juntos.',
      'No alto, arma o braço de ataque como num arco e cai com os dois pés no mesmo lugar. J2 faz em seguida. 10 passadas cada.',
    ],
    pontosAtencao: [
      'O penúltimo passo é o mais longo e o mais rápido.',
      'Os braços vão bem para trás no último passo e sobem juntos no salto.',
      'Cair equilibrado, sem encostar na rede.',
    ],
    erroComum: 'Saltar com um pé só, como na corrida. Corrija pedindo o "fechamento" do último passo, com os dois pés lado a lado antes do salto.',
    variacaoFacil: 'Fazer só os 2 últimos passos e o salto.',
    variacaoDificil: 'Fazer a passada saindo da rede (depois de um bloqueio).',
    meta: 'Fazer 10 passadas seguidas com salto de dois pés e queda no mesmo lugar.',
    cena: {
      jogadores: [{ id: 'J1', x: 3, y: -0.3 }, { id: 'J2', x: 1.5, y: -0.3 }],
      cones: [{ id: 'partida', x: 3, y: 0.6 }, { id: 'salto', x: 8, y: 1.6 }],
      setas: [{ id: 'seta1', tipo: 'jogador', de: [3.4, 0], para: [7.6, 1.2], curva: -0.3, numero: 1 }],
      textos: [{ t: 'ESQ · DIR · ESQ', x: 5.4, y: 2.6 }],
    },
    animacao: {
      passos: [
        esperar(1, 1.0),
        passo(2, [j('J1', 'seta1.b', 1.3), s('seta1', 1.3)]),
        esperar(3, 0.8),
        passo(4, [j('J1', 'J1', 1.4), j('J2', 'seta1.b', 1.3, 1.6)]),
      ],
    },
  },
  {
    numero: 602, secao: 6, nivel: 'Iniciante',
    nome: 'Ataque na entrada de rede com bola lançada',
    jogadores: '2 jogadores (1 lançador e 1 atacante)', tempo: '10 minutos', material: '8 bolas',
    objetivo: 'Juntar a passada com o golpe, batendo na bola no ponto mais alto, à frente do ombro.',
    comoMontar: 'L fica na zona do levantador com as bolas e lança (com as duas mãos) uma bola alta na posição 4. J1 começa fora da quadra, na posição 4, atrás da linha dos 3 metros.',
    passoAPasso: [
      'L lança uma bola alta, a 1 metro da rede, na posição 4.',
      'J1 começa a passada quando a bola chega no ponto mais alto.',
      'J1 salta e bate na bola com a mão aberta, à frente do ombro, no ponto mais alto que alcança.',
      'O punho fecha por cima da bola, mandando-a para baixo, dentro da quadra adversária. Depois de 10 bolas, trocam.',
    ],
    pontosAtencao: [
      'Sair na hora certa: bola no alto, começa a passada.',
      'Contato à frente do ombro, nunca atrás da cabeça.',
      'Mão firme e aberta, cobrindo a bola.',
    ],
    erroComum: 'Chegar embaixo da bola e bater com ela atrás da cabeça, mandando-a para fora. Corrija com a bola um pouco mais afastada da rede e a saída da passada um pouco mais tarde.',
    variacaoFacil: 'Atacar sem salto, em pé, de uma bola lançada baixa.',
    variacaoDificil: 'L levanta de toque em vez de lançar.',
    meta: '7 de 10 ataques dentro da quadra adversária.',
    cena: {
      jogadores: [L, { id: 'J1', x: 4.6, y: -0.3 }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [7.8, 5.5], para: [7.8, 1.2], curva: 0.6, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [5, 0], para: [7.4, 1.1], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [8, 1.1], para: [15, 5.5], numero: 2 },
      ],
      textos: [{ t: 'POSIÇÃO 4', x: 6.2, y: 2.4 }],
    },
    animacao: {
      bolaInicial: naMao('L', -1, -2),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6)]),
        passo(2, [j('J1', 'seta2.b', 1.0), s('seta2', 1.0)], { junto: 0.7 }),
        passo(3, [b('seta3.b', { dur: 0.6 }), s('seta3', 0.6)]),
        passo(4, [j('J1', 'J1', 1.2)]),
      ],
    },
  },
  {
    numero: 603, secao: 6, nivel: 'Iniciante',
    nome: 'Ataque com alvo: diagonal e paralela',
    jogadores: '3 jogadores (1 levantador, 1 atacante e 1 recolhedor)', tempo: '12 minutos', material: '8 bolas e fita ou cones',
    objetivo: 'Mudar a direção do ataque virando o corpo na passada e o punho no golpe.',
    comoMontar: 'Do outro lado da rede, marque dois alvos de 3 × 3 metros no fundo: um no canto da diagonal e outro no canto da paralela. L levanta para a posição 4. J1 ataca. J2 recolhe as bolas do outro lado.',
    passoAPasso: [
      'L levanta uma bola alta na posição 4.',
      'J1 ataca 5 bolas no alvo da diagonal, com a passada vindo de fora da quadra e o corpo virado para o meio.',
      'Depois, ataca 5 bolas no alvo da paralela, com a passada mais reta e o punho virando para fora.',
      'J2 conta os acertos de cada alvo. Depois de 2 séries, rodam.',
    ],
    pontosAtencao: [
      'A direção começa na passada, não só no braço.',
      'Na paralela, o ombro do braço de ataque fica mais à frente.',
      'Bater forte, mas dentro: alvo antes da força.',
    ],
    erroComum: 'Tentar a paralela só com o punho e errar para fora. Corrija pedindo a passada mais reta, de frente para a paralela.',
    variacaoFacil: 'Alvos de 4 × 4 metros e bola lançada.',
    variacaoDificil: 'L grita o alvo só quando J1 já está saltando.',
    meta: 'Acertar 3 de 5 ataques em cada alvo.',
    cena: {
      jogadores: [L, { id: 'J1', x: 4.6, y: -0.3 }, { id: 'J2', x: 16, y: 4.5, time: 'b' }],
      zonas: [
        { id: 'diagonal', x: 14.5, y: 6, l: 3, a: 3, rotulo: 'DIAGONAL' },
        { id: 'paralela', x: 14.5, y: 0, l: 3, a: 3, rotulo: 'PARALELA' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [7.8, 5.5], para: [7.8, 1.2], curva: 0.6, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [5, 0], para: [7.4, 1.1], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [8, 1.1], para: [16, 7.4], numero: 2 },
        { id: 'seta4', tipo: 'bola', de: [8, 1.1], para: [16, 1.6], numero: 3 },
      ],
    },
    animacao: {
      bolaInicial: naMao('L', -1, -2),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6), j('J1', 'seta2.b', 1.0, 0.7), s('seta2', 1.0, 0.7)]),
        passo(2, [b('seta3.b', { dur: 0.6 }), s('seta3', 0.6), j('J1', 'J1', 1.0, 0.8)]),
        passo(3, [b('seta1.b', { de: naMao('L', -1, -2), alta: true, dur: 1.6 }), j('J1', 'seta2.b', 1.0, 0.7), b('seta4.b', { dur: 0.6, atraso: 1.7 }), s('seta4', 0.6, 1.7)]),
        passo(4, [j('J1', 'J1', 1.0)]),
      ],
    },
  },
  {
    numero: 604, secao: 6, nivel: 'Intermediário',
    nome: 'Ataque de bola rápida pelo meio',
    jogadores: '3 jogadores (1 passador, 1 levantador e 1 central)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Atacar a bola rápida no meio: saltar antes do levantamento e bater rápido, com pouco braço.',
    comoMontar: 'L fica na zona do levantador. J1 passa do fundo. J2 (central) começa na linha dos 3 metros, no meio da quadra.',
    passoAPasso: [
      'J1 manda o passe para L.',
      'J2 faz uma passada curta (2 ou 3 passos) e salta à frente de L quando a bola chega nas mãos dele.',
      'L coloca a bola na mão de J2, logo acima da rede.',
      'J2 bate rápido, com o braço curto, mirando o espaço entre os defensores. Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'Saltar antes do levantamento: o central "chama" a bola.',
      'Braço armado cedo e golpe curto.',
      'Saltar a um braço de distância de L, sem cruzar na frente dele.',
    ],
    erroComum: 'Esperar a bola para saltar. Corrija pedindo que J2 já esteja no ar quando a bola tocar as mãos de L.',
    variacaoFacil: 'Meia-bola, um pouco mais alta.',
    variacaoDificil: 'Bola rápida às costas de L (china), na posição 2.',
    meta: '6 de 10 ataques de bola rápida dentro da quadra.',
    cena: {
      jogadores: [L, { id: 'J1', x: 2.5, y: 6 }, { id: 'J2', x: 6, y: 4.2, rotulo: 'C' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [2.9, 6], para: [7.8, 5.6], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [6.3, 4.3], para: [7.9, 4.6], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [8.1, 5.4], para: [8.2, 4.7], numero: 2 },
        { id: 'seta4', tipo: 'bola', de: [8.3, 4.6], para: [13.5, 3.4], numero: 3 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        passo(2, [j('J2', 'seta2.b', 0.8), s('seta2', 0.8)], { junto: 0.7 }),
        passo(3, [b('seta3.b', { dur: 0.3 }), s('seta3', 0.3)]),
        passo(4, [b('seta4.b', { dur: 0.5 }), s('seta4', 0.5), j('J2', 'J2', 1.0, 0.7)]),
      ],
    },
  },
  {
    numero: 605, secao: 6, nivel: 'Intermediário',
    nome: 'Ataque do oposto na saída de rede',
    jogadores: '3 jogadores (1 passador, 1 levantador e 1 oposto)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Atacar na posição 2, com a bola vindo de costas do levantador, ajustando a passada ao lado diferente.',
    comoMontar: 'L fica na zona do levantador. J1 passa do fundo. J2 (oposto) começa fora da quadra, atrás da linha dos 3 metros, na lateral da posição 2.',
    passoAPasso: [
      'J1 manda o passe para L.',
      'L levanta de costas uma bola alta para a posição 2.',
      'J2 faz a passada de fora para dentro da quadra e salta com a bola à frente do ombro de ataque.',
      'J2 ataca na diagonal ou na paralela. Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'O destro na posição 2 deixa a bola chegar um pouco mais para dentro da quadra.',
      'Passada começando mais de fora, para ter ângulo.',
      'Olhar a bola desde a saída das mãos de L.',
    ],
    erroComum: 'Deixar a bola passar do corpo e bater atrás da cabeça. Corrija pedindo uma passada mais curta e a saída um pouco depois.',
    variacaoFacil: 'L lança a bola com as mãos, em vez de levantar de costas.',
    variacaoDificil: 'Ataque do fundo pela posição 1 (atrás da linha dos 3 metros).',
    meta: '7 de 10 ataques da saída de rede dentro da quadra.',
    cena: {
      jogadores: [L, { id: 'J1', x: 2.5, y: 4.5 }, { id: 'J2', x: 4.6, y: 9.3, rotulo: 'O' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [2.9, 4.6], para: [7.8, 5.6], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [7.9, 6.1], para: [7.8, 7.9], curva: -0.5, numero: 2 },
        { id: 'seta3', tipo: 'jogador', de: [5, 9], para: [7.4, 8], numero: 1 },
        { id: 'seta4', tipo: 'bola', de: [8, 7.9], para: [15.5, 2.2], numero: 3 },
      ],
      textos: [{ t: 'POSIÇÃO 2', x: 6.2, y: 6.9 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        passo(2, [b('seta2.b', { alta: true, dur: 1.4 }), s('seta2', 1.4)]),
        passo(3, [j('J2', 'seta3.b', 1.0), s('seta3', 1.0)], { junto: 0.5 }),
        passo(4, [b('seta4.b', { dur: 0.6 }), s('seta4', 0.6), j('J2', 'J2', 1.2, 0.8)]),
      ],
    },
  },
  {
    numero: 606, secao: 6, nivel: 'Intermediário',
    nome: 'Largada por cima do bloqueio',
    jogadores: '4 jogadores (1 levantador, 1 atacante, 1 bloqueador e 1 defensor)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Trocar o ataque forte pela largada (bola tocada com a ponta dos dedos) quando o bloqueio fecha e a defesa fica recuada.',
    comoMontar: 'L levanta para a posição 4. J1 ataca. Do outro lado, B1 bloqueia na frente de J1 e D1 defende no fundo da quadra.',
    passoAPasso: [
      'L levanta uma bola alta na posição 4.',
      'J1 faz a passada e o salto de um ataque normal; B1 salta para bloquear.',
      'No alto, J1 troca o golpe por uma largada: toca a bola com a ponta dos dedos, por cima das mãos de B1, para cair logo atrás do bloqueio.',
      'D1 tenta chegar na bola curta. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'O movimento é igual ao do ataque até o último instante.',
      'Largada com a ponta dos dedos, sem segurar a bola.',
      'Mirar o espaço atrás do bloqueio ou no meio da quadra.',
    ],
    erroComum: 'Largar sempre no mesmo lugar e o defensor se adiantar. Corrija alternando largada curta e largada funda, no fundo da quadra.',
    variacaoFacil: 'Sem bloqueador, só o defensor.',
    variacaoDificil: 'J1 decide entre atacar forte e largar, de acordo com a posição de D1.',
    meta: '5 de 8 largadas que caem no chão sem D1 alcançar.',
    cena: {
      jogadores: [L, { id: 'J1', x: 4.6, y: -0.3 }, { id: 'B1', x: 9.8, y: 1.2, time: 'b' }, { id: 'D1', x: 15.5, y: 4, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [7.8, 5.5], para: [7.8, 1.2], curva: 0.6, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [5, 0], para: [7.4, 1.1], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [8, 1.1], para: [11.4, 2.6], curva: 0.4, numero: 2 },
        { id: 'seta4', tipo: 'jogador', de: [15.1, 3.9], para: [12.4, 2.9], numero: 2 },
      ],
      textos: [{ t: 'LARGADA', x: 11.6, y: 3.8 }],
    },
    animacao: {
      bolaInicial: naMao('L', -1, -2),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6)]),
        passo(2, [j('J1', 'seta2.b', 1.0), s('seta2', 1.0)], { junto: 0.7 }),
        passo(3, [b('seta3.b', { alta: true, dur: 0.8 }), s('seta3', 0.8)]),
        passo(4, [j('D1', 'seta4.b', 0.9), s('seta4', 0.9), j('D1', 'D1', 1.0, 1.2), j('J1', 'J1', 1.0, 1.2)], { junto: 0.3 }),
      ],
    },
  },
  {
    numero: 607, secao: 6, nivel: 'Intermediário',
    nome: 'Ataque de fundo pelo meio (pipe)',
    jogadores: '3 jogadores (1 passador, 1 levantador e 1 atacante de fundo)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Atacar vindo do fundo, saltando atrás da linha dos 3 metros, para ter mais uma opção de ataque com 3 na rede ocupados.',
    comoMontar: 'L fica na zona do levantador. J1 passa do fundo. J2 começa na zona 6, perto da linha de fundo.',
    passoAPasso: [
      'J1 manda o passe para L.',
      'J2 começa a passada vindo do fundo, mirando um ponto 1 metro atrás da linha dos 3 metros.',
      'L levanta a bola do ataque de fundo, afastada da rede.',
      'J2 salta atrás da linha e ataca para frente e para baixo, caindo dentro da quadra. Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'Pé de impulsão sempre atrás da linha dos 3 metros.',
      'O salto vai para frente: J2 pode cair depois da linha.',
      'Golpe com a bola à frente do corpo, mandando para o fundo da quadra adversária.',
    ],
    erroComum: 'Pisar na linha no salto, o que é falta. Corrija com um cone 1 metro atrás da linha, marcando o último apoio.',
    variacaoFacil: 'J2 pega a bola no alto, sem atacar.',
    variacaoDificil: 'Ataque de fundo da posição 1, pela saída de rede.',
    meta: '7 de 10 ataques de fundo sem pisar na linha e dentro da quadra.',
    cena: {
      jogadores: [L, { id: 'J1', x: 1.5, y: 7 }, { id: 'J2', x: 1, y: 4 }],
      cones: [{ id: 'cone1', x: 5, y: 5 }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [1.9, 6.9], para: [7.8, 5.7], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [1.4, 4.1], para: [4.6, 4.2], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [7.8, 5.4], para: [5, 4], curva: 0.5, numero: 2 },
        { id: 'seta4', tipo: 'bola', de: [5.2, 4], para: [15.5, 4.5], numero: 3 },
      ],
      textos: [{ t: 'SALTO ATRÁS DA LINHA', x: 3.2, y: 1.4 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        passo(2, [j('J2', 'seta2.b', 1.2), s('seta2', 1.2)], { junto: 0.5 }),
        passo(3, [b('seta3.b', { alta: true, dur: 1.1 }), s('seta3', 1.1)], { junto: 0.3 }),
        passo(4, [b('seta4.b', { dur: 0.6 }), s('seta4', 0.6), j('J2', pt(6.2, 4.2), 0.6), j('J2', 'J2', 1.2, 1.0)]),
      ],
    },
  },
  {
    numero: 608, secao: 6, nivel: 'Intermediário',
    nome: 'Explorar a mão de fora do bloqueio',
    jogadores: '3 jogadores (1 levantador, 1 atacante e 1 bloqueador)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Usar o bloqueio a favor: bater na mão de fora do bloqueador para a bola sair da quadra (ponto de quem ataca).',
    comoMontar: 'L levanta para a posição 4, bem perto da antena. J1 ataca. Do outro lado, B1 bloqueia na frente de J1.',
    passoAPasso: [
      'L levanta uma bola alta perto da antena, na posição 4.',
      'J1 salta e olha a mão de fora de B1 (a mais perto da antena).',
      'J1 bate na bola mirando essa mão, de dentro para fora, para a bola tocar no bloqueio e sair pela lateral.',
      'Vale ponto de J1 se a bola tocar no bloqueio e sair. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'Mirar a mão, não o espaço entre a mão e a antena.',
      'Golpe firme, um pouco de dentro para fora.',
      'Bola levantada perto da antena facilita o ângulo.',
    ],
    erroComum: 'Bater por fora da antena, o que é erro de ataque. Corrija pedindo que J1 mire a mão de B1, que fica sempre dentro da quadra.',
    variacaoFacil: 'B1 fica parado com os braços levantados, sem saltar.',
    variacaoDificil: 'B1 tira a mão no último instante, e J1 tem que ler e mudar para a diagonal.',
    meta: '4 de 8 ataques que tocam no bloqueio e saem.',
    cena: {
      jogadores: [L, { id: 'J1', x: 4.6, y: -0.3 }, { id: 'B1', x: 9.8, y: 1, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [7.8, 5.5], para: [7.9, 0.7], curva: 0.6, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [5, 0], para: [7.4, 0.6], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [8, 0.7], para: [9.6, 0.5], numero: 2 },
        { id: 'seta4', tipo: 'bola', de: [9.6, 0.5], para: [13, -0.4], curva: 0.3, numero: 3 },
      ],
      textos: [{ t: 'MÃO DE FORA', x: 11.6, y: 1.6 }],
    },
    animacao: {
      bolaInicial: naMao('L', -1, -2),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6)]),
        passo(2, [j('J1', 'seta2.b', 1.0), s('seta2', 1.0)], { junto: 0.7 }),
        passo(3, [b('seta3.b', { dur: 0.3 }), s('seta3', 0.3), b('seta4.b', { alta: true, dur: 0.9, atraso: 0.3 }), s('seta4', 0.9, 0.3)]),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 609, secao: 6, nivel: 'Avançado',
    nome: 'Ataque de bola alta de recuperação',
    jogadores: '3 jogadores (1 lançador, 1 levantador e 1 atacante)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Atacar a bola alta e afastada da rede que sobra depois de uma defesa ruim, sem errar.',
    comoMontar: 'J1 lança bolas para lugares ruins da quadra. L (ou outro jogador) corre e levanta de onde estiver. J2 ataca na posição 4.',
    passoAPasso: [
      'J1 lança a bola longe da zona do levantador, simulando uma defesa ruim.',
      'L corre e levanta alto, longe da rede, para a posição 4.',
      'J2 ajusta a passada à bola afastada: começa mais longe e salta mais longe da rede.',
      'J2 ataca para o fundo da quadra adversária, com segurança. Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'Bola longe da rede pede ataque mais para o fundo, com rotação.',
      'Ajustar a passada à bola, e não o contrário.',
      'Errar menos é mais importante do que bater forte nessa bola.',
    ],
    erroComum: 'Tentar bater forte para baixo e mandar a bola na rede. Corrija pedindo o ataque mirando a linha de fundo adversária.',
    variacaoFacil: 'O levantamento sai da zona do levantador, só mais alto.',
    variacaoDificil: 'J2 decide entre atacar e mandar uma bola de segurança (largada funda).',
    meta: '8 de 10 ataques de recuperação dentro da quadra.',
    cena: {
      jogadores: [{ id: 'L', x: 8.1, y: 5.8, rotulo: 'L' }, { id: 'J1', x: 1.5, y: 4.5 }, { id: 'J2', x: 4, y: -0.3 }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [1.9, 4.6], para: [4.4, 6.6], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [7.7, 6], para: [4.8, 6.6], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [4.6, 6.4], para: [6.8, 1.4], curva: 0.7, numero: 2 },
        { id: 'seta4', tipo: 'jogador', de: [4.2, 0.1], para: [6.4, 1.1], numero: 2 },
        { id: 'seta5', tipo: 'bola', de: [6.9, 1.3], para: [16.8, 4.5], numero: 3 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.3 }), s('seta1', 1.3)]),
        passo(2, [j('L', 'seta2.b', 1.0), s('seta2', 1.0), b('seta3.b', { alta: true, dur: 1.6, atraso: 1.1 }), s('seta3', 1.6, 1.1)], { junto: 0.2 }),
        passo(3, [j('J2', 'seta4.b', 1.0), s('seta4', 1.0)], { junto: 1.8 }),
        passo(4, [b('seta5.b', { dur: 0.7 }), s('seta5', 0.7), j('L', 'L', 1.0, 0.8), j('J2', 'J2', 1.0, 0.8)]),
      ],
    },
  },
  {
    numero: 610, secao: 6, nivel: 'Avançado',
    nome: 'Ler o bloqueio: diagonal ou paralela',
    jogadores: '4 jogadores (1 levantador, 1 atacante, 1 bloqueador e 1 defensor)', tempo: '15 minutos', material: '8 bolas',
    objetivo: 'Olhar onde o bloqueador se posiciona e atacar no lado aberto, decidindo no ar.',
    comoMontar: 'L levanta para a posição 4. J1 ataca. Do outro lado, B1 bloqueia e escolhe, a cada bola, fechar a paralela ou a diagonal. D1 defende o lado que B1 deixar aberto, no fundo.',
    passoAPasso: [
      'L levanta uma bola alta na posição 4.',
      'B1 se posiciona para fechar a paralela ou a diagonal, sem avisar.',
      'J1 olha a posição de B1 durante a passada e ataca no lado aberto.',
      'D1 tenta defender. Ponto de J1 se a bola cair ou se D1 não conseguir mandar para cima. Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'Olhar o bloqueio no último passo, e não só a bola.',
      'Decidir cedo e bater firme no lado escolhido.',
      'Se o bloqueio fechar tudo, usar a mão de fora ou a largada.',
    ],
    erroComum: 'Decidir antes de olhar e bater no bloqueio. Corrija combinando que B1 só se posiciona quando J1 começar a passada.',
    variacaoFacil: 'B1 se posiciona antes do levantamento.',
    variacaoDificil: 'B1 pode tirar o bloqueio no último instante (bloqueio "fake").',
    meta: 'Atacar no lado aberto em 7 de 10 bolas.',
    cena: {
      jogadores: [L, { id: 'J1', x: 4.6, y: -0.3 }, { id: 'B1', x: 9.8, y: 1.6, time: 'b' }, { id: 'D1', x: 15.5, y: 6, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [7.8, 5.5], para: [7.8, 1.2], curva: 0.6, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [9.8, 2], para: [9.8, 0.8], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [8, 1.2], para: [16, 7.6], numero: 2 },
      ],
      textos: [{ t: 'FECHA A PARALELA?', x: 13, y: 0.6 }],
    },
    animacao: {
      bolaInicial: naMao('L', -1, -2),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6), j('J1', pt(7.4, 1.1), 1.0, 0.7)]),
        passo(2, [j('B1', 'seta2.b', 0.6), s('seta2', 0.6)], { junto: 0.9 }),
        passo(3, [b('seta3.b', { dur: 0.6 }), s('seta3', 0.6)]),
        passo(4, [j('D1', pt(16, 7.2), 0.5), j('J1', 'J1', 1.0, 0.6), j('B1', 'B1', 1.0, 0.6)]),
      ],
    },
  },
]
