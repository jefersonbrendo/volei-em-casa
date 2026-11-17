/**
 * Seção 5 · Levantamento (quadra). Referência: seções de levantamento da areia, adaptadas ao 6×6.
 * No desenho, o time que treina fica à esquerda (azul), de frente para a rede. Para ele, a posição 4
 * (entrada de rede) é a de cima (y perto de 0), a 3 é o meio e a 2 (saída de rede) é a de baixo.
 * O levantador (L) trabalha junto à rede, entre as posições 2 e 3.
 */
import { pt } from '../../lib/quadra/cena'
import { b, esperar, j, passo, s } from '../animacoesLotes/ajudantes'
import { naMao, type ExercicioComDesenho } from './tipos'

const ZONA_LEV = { id: 'zonaL', x: 6.6, y: 4.6, l: 2.4, a: 2.6, rotulo: 'LEVANTADOR' }

export const LEVANTAMENTO: ExercicioComDesenho[] = [
  {
    numero: 501, secao: 5, nivel: 'Iniciante',
    nome: 'Levantamento de frente para a entrada de rede',
    jogadores: '3 jogadores (1 lançador, 1 levantador e 1 alvo)', tempo: '10 minutos', material: '6 bolas',
    objetivo: 'Levantar de toque para a posição 4 com a bola alta, a um metro da rede e sempre no mesmo lugar.',
    comoMontar: 'L fica na zona do levantador, junto à rede, entre as posições 2 e 3. J1 fica no fundo da quadra com as bolas. J2 fica na posição 4, perto da antena, e segura as bolas levantadas.',
    passoAPasso: [
      'L fica na zona do levantador, de frente para a posição 4, com o ombro direito voltado para a rede.',
      'J1 lança uma bola alta, como um passe, na direção de L.',
      'L se coloca embaixo da bola, com as mãos acima da testa, e levanta de toque para a posição 4.',
      'J2 segura a bola acima da cabeça, sem sair do lugar, se o levantamento foi bom. Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'Pés virados para a posição 4 antes de a bola chegar.',
      'Bola sai acima da testa, com as pernas empurrando junto com os braços.',
      'Alvo: 1 metro afastado da rede e 2 metros acima dela.',
    ],
    erroComum: 'Levantar com a bola na frente do rosto, que sai baixa e colada na rede. Corrija pedindo que L "espere" a bola chegar acima da testa antes de tocar.',
    variacaoFacil: 'J1 lança mais perto e mais devagar, quase nas mãos de L.',
    variacaoDificil: 'J1 lança a bola 1 metro para fora da zona e L tem que se deslocar antes de levantar.',
    meta: '8 de 10 levantamentos que J2 segura sem sair do lugar.',
    cena: {
      jogadores: [{ id: 'L', x: 8.1, y: 5.8 }, { id: 'J1', x: 3, y: 4.5 }, { id: 'J2', x: 7.9, y: 0.8 }],
      zonas: [ZONA_LEV],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [3.4, 4.6], para: [7.8, 5.6], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [7.9, 5.4], para: [7.9, 1.2], curva: 0.6, numero: 2 },
      ],
      textos: [{ t: 'POSIÇÃO 4', x: 5.9, y: 0.7 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        esperar(1, 1.0),
        passo(2, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        passo(3, [b('seta2.b', { alta: true, dur: 1.5 }), s('seta2', 1.5)]),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 502, secao: 5, nivel: 'Iniciante',
    nome: 'Levantamento de costas para a saída de rede',
    jogadores: '3 jogadores (1 lançador, 1 levantador e 1 alvo)', tempo: '10 minutos', material: '6 bolas',
    objetivo: 'Levantar para trás (posição 2) sem virar o corpo, para o bloqueio não adivinhar a jogada.',
    comoMontar: 'L fica na zona do levantador. J1 lança do fundo da quadra. J2 fica na posição 2, perto da antena do lado de L, e segura as bolas.',
    passoAPasso: [
      'L fica na zona do levantador, na mesma posição de corpo do levantamento de frente.',
      'J1 lança uma bola alta na direção de L.',
      'L leva o quadril à frente, arqueia levemente as costas e solta a bola por cima da cabeça, para trás.',
      'J2 segura a bola sem sair do lugar se o levantamento foi bom. Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'O corpo é o mesmo do levantamento de frente: a diferença está no fim do movimento.',
      'Bola tocada acima da testa, um pouco mais para trás.',
      'Braços terminam apontando para cima e para trás.',
    ],
    erroComum: 'Virar o corpo para a posição 2 antes de levantar, o que entrega a jogada. Corrija pedindo a mesma posição dos pés para os dois levantamentos.',
    variacaoFacil: 'J2 fica mais perto, a 2 metros de L.',
    variacaoDificil: 'L alterna frente e costas sem avisar, e J2 e outro jogador na posição 4 reagem.',
    meta: '7 de 10 levantamentos de costas que J2 segura sem sair do lugar.',
    cena: {
      jogadores: [{ id: 'L', x: 8.1, y: 5.4 }, { id: 'J1', x: 3, y: 4.5 }, { id: 'J2', x: 7.9, y: 8.3 }],
      zonas: [ZONA_LEV],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [3.4, 4.6], para: [7.8, 5.2], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [7.9, 5.8], para: [7.9, 7.9], curva: -0.6, numero: 2 },
      ],
      textos: [{ t: 'POSIÇÃO 2', x: 5.9, y: 8.4 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        esperar(1, 1.0),
        passo(2, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        passo(3, [b('seta2.b', { alta: true, dur: 1.4 }), s('seta2', 1.4)]),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 503, secao: 5, nivel: 'Iniciante',
    nome: 'Chegar antes da bola: saída do levantador para a zona',
    jogadores: '2 jogadores (1 lançador e 1 levantador)', tempo: '8 minutos', material: '6 bolas',
    objetivo: 'Chegar à zona do levantador antes da bola, já parado e virado para a posição 4.',
    comoMontar: 'L começa no fundo da quadra, na posição 1. J1 fica do outro lado da rede com as bolas.',
    passoAPasso: [
      'L começa na posição 1, no fundo da quadra.',
      'No momento em que J1 lança a bola por cima da rede, L corre até a zona do levantador.',
      'L para antes de a bola chegar, de frente para a posição 4 e com o ombro direito voltado para a rede.',
      'L levanta para a posição 4 e volta para a posição 1. Depois de 8 bolas, trocam.',
    ],
    pontosAtencao: [
      'Correr de frente, olhando a bola, e frear com passos curtos.',
      'Chegar e parar: levantar correndo tira a precisão.',
      'Os pés apontam para a posição 4 na chegada.',
    ],
    erroComum: 'Chegar junto com a bola e levantar desequilibrado. Corrija pedindo que L saia no instante do lançamento, e não quando a bola já está no ar do seu lado.',
    variacaoFacil: 'L começa no meio da quadra, mais perto da zona.',
    variacaoDificil: 'J1 lança em lugares diferentes, perto e longe da rede.',
    meta: 'Chegar parado antes da bola em 7 de 8 lançamentos.',
    cena: {
      jogadores: [{ id: 'L', x: 1.5, y: 7.5 }, { id: 'J1', x: 11.5, y: 4.5, time: 'b' }],
      zonas: [ZONA_LEV],
      setas: [
        { id: 'seta1', tipo: 'jogador', de: [1.9, 7.3], para: [7.6, 5.9], curva: 0.2, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [11.1, 4.4], para: [8.2, 5.6], curva: 0.4, numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [7.9, 5.6], para: [7.8, 1.2], curva: 0.6, numero: 2 },
      ],
      textos: [{ t: 'POSIÇÃO 1', x: 1.5, y: 8.6 }],
    },
    animacao: {
      bolaInicial: naMao('J1', -1),
      passos: [
        esperar(1, 1.0),
        passo(2, [j('L', 'seta1.b', 1.3), s('seta1', 1.3), b('seta2.b', { alta: true, dur: 1.6 }), s('seta2', 1.6)]),
        esperar(3, 0.5),
        passo(4, [b('seta3.b', { alta: true, dur: 1.4 }), s('seta3', 1.4), j('L', 'L', 1.3, 1.5)]),
      ],
    },
  },
  {
    numero: 504, secao: 5, nivel: 'Intermediário',
    nome: 'Bola rápida para o meio',
    jogadores: '3 jogadores (1 passador, 1 levantador e 1 central)', tempo: '12 minutos', material: '6 bolas',
    objetivo: 'Combinar o tempo da bola rápida com o central: levantamento curto e baixo, logo acima da mão do atacante.',
    comoMontar: 'L fica na zona do levantador. J1 passa do fundo da quadra. J2 (central) começa fora da linha dos 3 metros, no meio da quadra.',
    passoAPasso: [
      'J1 manda um passe alto e preciso para L.',
      'J2 começa a passada quando a bola sai das mãos de J1 e salta à frente de L, perto da rede, antes do levantamento.',
      'L levanta curto e baixo, colocando a bola na altura da mão de J2 no alto do salto.',
      'J2 ataca (ou só toca a bola para o outro lado, no começo). Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'Quem salta primeiro é o central; o levantador "entrega" a bola na mão dele.',
      'Levantamento rápido: menos braço, mais punho e dedos.',
      'Central salta perto de L, a um braço de distância.',
    ],
    erroComum: 'O central esperar o levantamento para saltar, o que faz a bola rápida virar uma bola alta lenta. Corrija combinando a contagem: passe, passada, salto, e só então o toque.',
    variacaoFacil: 'Bola de meio um pouco mais alta (meia-bola), dando meio segundo a mais ao central.',
    variacaoDificil: 'L alterna bola rápida à frente e bola rápida às costas.',
    meta: 'Acertar o tempo da bola rápida em 6 de 10 tentativas.',
    cena: {
      jogadores: [{ id: 'L', x: 8.1, y: 5.8, rotulo: 'L' }, { id: 'J1', x: 2.5, y: 6 }, { id: 'J2', x: 5.4, y: 4.2, rotulo: 'C' }],
      zonas: [ZONA_LEV],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [2.9, 6], para: [7.8, 5.7], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [5.8, 4.3], para: [7.9, 4.5], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [8.1, 5.4], para: [8.2, 4.6], curva: 0.2, numero: 2 },
      ],
      textos: [{ t: 'CENTRAL', x: 5.4, y: 3 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        passo(2, [j('J2', 'seta2.b', 0.9), s('seta2', 0.9)], { junto: 0.6 }),
        passo(3, [b('seta3.b', { dur: 0.4 }), s('seta3', 0.4)]),
        passo(4, [b(pt(13, 3.5), { dur: 0.5 }), j('J2', 'J2', 1.0, 0.6)]),
      ],
    },
  },
  {
    numero: 505, secao: 5, nivel: 'Intermediário',
    nome: 'Levantar do passe ruim, longe da rede',
    jogadores: '3 jogadores (1 lançador, 1 levantador e 1 alvo)', tempo: '10 minutos', material: '6 bolas',
    objetivo: 'Transformar um passe ruim, afastado da rede, num levantamento alto e seguro para a ponta.',
    comoMontar: 'L começa na zona do levantador. J1 lança do fundo da quadra, sempre longe da rede. J2 fica na posição 4 e segura as bolas.',
    passoAPasso: [
      'J1 lança a bola para perto da linha dos 3 metros, longe de L.',
      'L corre até a bola e chega de frente para a posição 4.',
      'L levanta alto, em arco, para a posição 4, mesmo de longe.',
      'J2 segura a bola sem sair do lugar se o levantamento foi bom. Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'De longe da rede, a bola tem que ser mais alta e mais afastada da rede.',
      'Se a bola vier baixa, use a manchete para levantar.',
      'Virar o corpo inteiro para o alvo antes do toque.',
    ],
    erroComum: 'Tentar uma bola rápida de longe e errar. Corrija combinando que passe fora da zona sempre vira bola alta para a ponta.',
    variacaoFacil: 'J1 lança perto da zona, a 2 metros da rede.',
    variacaoDificil: 'J1 lança perto da linha de fundo.',
    meta: '7 de 10 levantamentos de longe que J2 segura sem sair do lugar.',
    cena: {
      jogadores: [{ id: 'L', x: 8.1, y: 5.8 }, { id: 'J1', x: 1.5, y: 6.5 }, { id: 'J2', x: 7.9, y: 0.8 }],
      zonas: [ZONA_LEV],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [1.9, 6.3], para: [5.4, 5.5], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [7.7, 5.8], para: [5.8, 5.6], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [5.4, 5.3], para: [7.7, 1.2], curva: 0.6, numero: 2 },
      ],
      textos: [{ t: 'PASSE RUIM', x: 4, y: 7.5 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        passo(2, [j('L', 'seta2.b', 1.0), s('seta2', 1.0)], { junto: 0.3 }),
        passo(3, [b('seta3.b', { alta: true, dur: 1.6 }), s('seta3', 1.6)]),
        passo(4, [j('L', 'L', 1.0)]),
      ],
    },
  },
  {
    numero: 506, secao: 5, nivel: 'Intermediário',
    nome: 'Levantamento em suspensão para as duas pontas',
    jogadores: '4 jogadores (1 passador, 1 levantador e 2 alvos)', tempo: '12 minutos', material: '6 bolas',
    objetivo: 'Levantar saltando, para acelerar a jogada e poder também atacar de segunda bola.',
    comoMontar: 'L fica na zona do levantador. J1 passa do fundo da quadra. J2 fica na posição 4 e J3 na posição 2, segurando as bolas.',
    passoAPasso: [
      'J1 manda um passe alto e perto da rede para L.',
      'L salta com os dois pés e encontra a bola no alto do salto, acima da testa.',
      'No alto do salto, levanta para a posição 4 ou, de costas, para a posição 2.',
      'L cai equilibrado no mesmo lugar. Depois de 12 bolas, rodam.',
    ],
    pontosAtencao: [
      'Saltar um pouco antes da bola chegar, para tocar no ponto mais alto.',
      'Saltar para cima, não para frente ou para a rede.',
      'Levantamento suave: no alto, os braços fazem menos força.',
    ],
    erroComum: 'Saltar atrasado e tocar a bola caindo. Corrija pedindo o salto quando a bola começar a descer.',
    variacaoFacil: 'Levantar em suspensão só para a posição 4.',
    variacaoDificil: 'J1 manda passes mais longe da rede, e L decide se salta ou não.',
    meta: '8 de 12 levantamentos em suspensão que os alvos seguram sem sair do lugar.',
    cena: {
      jogadores: [{ id: 'L', x: 8.1, y: 5.8 }, { id: 'J1', x: 2.5, y: 6 }, { id: 'J2', x: 7.9, y: 0.8 }, { id: 'J3', x: 7.9, y: 8.3 }],
      zonas: [ZONA_LEV],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [2.9, 6], para: [7.8, 5.6], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [7.9, 5.4], para: [7.8, 1.2], curva: 0.6, numero: 2 },
        { id: 'seta3', tipo: 'bola', de: [7.9, 6.1], para: [7.8, 7.9], curva: -0.5, numero: 3 },
      ],
      textos: [{ t: 'SALTO', x: 9.9, y: 6.9 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        esperar(2, 0.5),
        passo(3, [b('seta2.b', { alta: true, dur: 1.4 }), s('seta2', 1.4), b('seta1.b', { de: naMao('J1', 1, 0), alta: true, dur: 1.4, atraso: 2.0 }), b('seta3.b', { alta: true, dur: 1.2, atraso: 3.6 }), s('seta3', 1.2, 3.6)]),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 507, secao: 5, nivel: 'Intermediário',
    nome: 'Levantamento de manchete do passe baixo',
    jogadores: '3 jogadores (1 lançador, 1 levantador e 1 alvo)', tempo: '10 minutos', material: '6 bolas',
    objetivo: 'Levantar de manchete quando o passe chega baixo demais para o toque, mantendo a bola alta para a ponta.',
    comoMontar: 'L fica na zona do levantador. J1 lança do fundo, bolas baixas e rápidas. J2 fica na posição 4 e segura as bolas.',
    passoAPasso: [
      'J1 lança uma bola baixa, abaixo da cintura de L.',
      'L chega com o corpo virado para a posição 4 e monta a plataforma.',
      'L levanta de manchete, alto e em arco, empurrando com as pernas e inclinando os ombros para o alvo.',
      'J2 segura a bola sem sair do lugar se o levantamento foi bom. Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'Ombros e plataforma apontam para o alvo.',
      'Mais altura do que no levantamento de toque, para compensar a imprecisão.',
      'Pernas fazem o trabalho, braços só direcionam.',
    ],
    erroComum: 'Bater de manchete com força e mandar a bola longe. Corrija pedindo uma bola "lenta e alta", com o corpo subindo junto.',
    variacaoFacil: 'J1 lança a bola um pouco mais alta, na altura da cintura.',
    variacaoDificil: 'J1 lança longe da rede, e L levanta de manchete de longe.',
    meta: '7 de 10 levantamentos de manchete que J2 segura sem sair do lugar.',
    cena: {
      jogadores: [{ id: 'L', x: 8.1, y: 5.8 }, { id: 'J1', x: 3, y: 4.5 }, { id: 'J2', x: 7.9, y: 0.8 }],
      zonas: [ZONA_LEV],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [3.4, 4.6], para: [7.7, 5.7], curva: 0.15, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [7.8, 5.5], para: [7.7, 1.2], curva: 0.8, numero: 2 },
      ],
      textos: [{ t: 'MANCHETE', x: 10, y: 6.8 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { dur: 1.0 }), s('seta1', 1.0)]),
        esperar(2, 0.5),
        passo(3, [b('seta2.b', { alta: true, dur: 1.6 }), s('seta2', 1.6)]),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 508, secao: 5, nivel: 'Intermediário',
    nome: 'Levantamento para o ataque de fundo',
    jogadores: '3 jogadores (1 passador, 1 levantador e 1 atacante de fundo)', tempo: '12 minutos', material: '6 bolas',
    objetivo: 'Levantar a bola do ataque de fundo (no meio, atrás da linha dos 3 metros) na altura e distância certas.',
    comoMontar: 'L fica na zona do levantador. J1 passa do fundo da quadra. J2 começa na zona 6, no fundo, e faz a passada para atacar antes da linha dos 3 metros.',
    passoAPasso: [
      'J1 manda um passe alto para L.',
      'J2 começa a passada vindo do fundo, sem pisar na linha dos 3 metros.',
      'L levanta uma bola média, mais afastada da rede: ela deve cair 1 metro atrás da linha dos 3 metros.',
      'J2 salta antes da linha e ataca (ou pega no alto, no começo). Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'O atacante de fundo salta atrás da linha dos 3 metros: pisar nela é falta.',
      'A bola fica mais longe da rede do que nos levantamentos de ponta.',
      'L olha a passada de J2 de rabo de olho para ajustar o tempo.',
    ],
    erroComum: 'Levantar perto da rede e o atacante invadir a linha para alcançar. Corrija marcando com cone o ponto da bola, 1 metro atrás da linha dos 3 metros.',
    variacaoFacil: 'J2 só pega a bola no alto, sem atacar.',
    variacaoDificil: 'L alterna ataque de fundo e bola na posição 4, e J2 reage.',
    meta: '7 de 10 levantamentos que J2 ataca sem pisar na linha dos 3 metros.',
    cena: {
      jogadores: [{ id: 'L', x: 8.1, y: 5.8, rotulo: 'L' }, { id: 'J1', x: 1.5, y: 6.8 }, { id: 'J2', x: 1.5, y: 3.8 }],
      zonas: [ZONA_LEV],
      cones: [{ id: 'cone1', x: 5, y: 5 }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [1.9, 6.7], para: [7.8, 5.7], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [1.9, 3.9], para: [4.6, 4], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [7.8, 5.4], para: [5, 3.8], curva: 0.5, numero: 2 },
      ],
      textos: [{ t: 'LINHA DOS 3 m', x: 6, y: 8.6 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        passo(2, [j('J2', 'seta2.b', 1.2), s('seta2', 1.2)], { junto: 0.5 }),
        passo(3, [b('seta3.b', { alta: true, dur: 1.2 }), s('seta3', 1.2)], { junto: 0.4 }),
        passo(4, [b(pt(14, 5), { dur: 0.6 }), j('J2', 'J2', 1.2, 0.7)]),
      ],
    },
  },
  {
    numero: 509, secao: 5, nivel: 'Avançado',
    nome: 'Leitura do bloqueio: levantar para o bloqueio simples',
    jogadores: '6 jogadores (1 passador, 1 levantador, 2 atacantes e 2 bloqueadores)', tempo: '15 minutos', material: '8 bolas',
    objetivo: 'Olhar o bloqueio adversário e levantar para a ponta onde só vai sobrar um bloqueador.',
    comoMontar: 'Do lado do levantador: L na zona, J1 passando do fundo, J2 na posição 4 e J3 na posição 2. Do outro lado, B1 e B2 ficam na rede, um de frente para cada ponta.',
    passoAPasso: [
      'J1 manda o passe para L.',
      'Enquanto a bola vem, B1 e B2 se juntam de um dos lados da rede (combinam entre eles sem avisar L).',
      'L olha rapidamente para o bloqueio e levanta para a ponta do lado contrário, onde ficou um bloqueador só.',
      'O atacante daquele lado ataca contra o bloqueio simples. Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'Olhar o bloqueio com o canto do olho, sem tirar a atenção da bola.',
      'O corpo não muda: só a decisão final.',
      'Se o bloqueio não se mexer, levantar para o atacante mais forte.',
    ],
    erroComum: 'L olhar o bloqueio por tempo demais e perder a bola. Corrija pedindo uma olhada rápida no meio do caminho do passe, e não no fim.',
    variacaoFacil: 'Os bloqueadores se juntam bem antes do passe.',
    variacaoDificil: 'Os bloqueadores só se mexem quando a bola chega em L.',
    meta: 'Levantar para o lado do bloqueio simples em 7 de 10 jogadas.',
    cena: {
      jogadores: [
        { id: 'L', x: 8.1, y: 5.8, rotulo: 'L' }, { id: 'J1', x: 2.5, y: 6 }, { id: 'J2', x: 7.6, y: 0.8 }, { id: 'J3', x: 7.6, y: 8.2 },
        { id: 'B1', x: 9.8, y: 1.5, time: 'b' }, { id: 'B2', x: 9.8, y: 4.5, time: 'b' },
      ],
      zonas: [ZONA_LEV],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [2.9, 6], para: [7.8, 5.6], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [9.8, 4.9], para: [9.8, 2.6], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [7.9, 6.1], para: [7.7, 7.8], curva: -0.5, numero: 2 },
      ],
      textos: [{ t: 'BLOQUEIO SIMPLES', x: 12.6, y: 8 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.5 }), s('seta1', 1.5)]),
        passo(2, [j('B2', 'seta2.b', 0.9), s('seta2', 0.9)], { junto: 0.4 }),
        passo(3, [b('seta3.b', { alta: true, dur: 1.3 }), s('seta3', 1.3)]),
        passo(4, [b(pt(14.5, 6), { dur: 0.6 }), j('B2', 'B2', 1.0, 0.8)]),
      ],
    },
  },
  {
    numero: 510, secao: 5, nivel: 'Avançado',
    nome: 'Segunda bola: finta de levantamento e largada',
    jogadores: '4 jogadores (1 passador, 1 levantador e 2 defensores)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Usar a segunda bola para surpreender: o levantador finge que vai levantar e larga a bola na quadra adversária.',
    comoMontar: 'L fica na zona do levantador, na rede. J1 passa do fundo da quadra. Do outro lado, D1 e D2 defendem no fundo da quadra.',
    passoAPasso: [
      'J1 manda um passe alto e perto da rede para L.',
      'L se prepara como se fosse levantar, com as mãos acima da testa.',
      'No último instante, L empurra a bola com uma das mãos por cima da rede, curta, no espaço entre a rede e os defensores.',
      'D1 e D2 tentam defender. Só vale largada se L usou o mesmo movimento do levantamento. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'O corpo e as mãos sobem como no levantamento: a finta é o que engana.',
      'Usar só quando o passe chega perto da rede.',
      'Mirar o espaço vazio, perto da linha dos 3 metros adversária.',
    ],
    erroComum: 'Largar sempre e o adversário se acostumar. Corrija combinando que L larga no máximo 1 em cada 3 bolas boas.',
    variacaoFacil: 'Sem defensores, só mirando um alvo no chão.',
    variacaoDificil: 'Um bloqueador do outro lado acompanha L e tenta bloquear a largada.',
    meta: '5 de 8 largadas que caem no chão sem os defensores alcançarem.',
    cena: {
      jogadores: [{ id: 'L', x: 8.3, y: 5.6, rotulo: 'L' }, { id: 'J1', x: 2.5, y: 6 }, { id: 'D1', x: 15, y: 3, time: 'b' }, { id: 'D2', x: 15, y: 6.5, time: 'b' }],
      zonas: [{ id: 'alvo', x: 9.4, y: 3.2, l: 2.6, a: 4, rotulo: 'LARGADA' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [2.9, 6], para: [8, 5.4], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [8.4, 5.2], para: [10.8, 4.6], curva: 0.4, numero: 2 },
        { id: 'seta3', tipo: 'jogador', de: [14.6, 3.3], para: [12.4, 4.2], numero: 1 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        esperar(2, 0.6),
        passo(3, [b('seta2.b', { alta: true, dur: 0.8 }), s('seta2', 0.8)]),
        passo(4, [j('D1', 'seta3.b', 0.8), s('seta3', 0.8), j('D1', 'D1', 1.0, 1.4)], { junto: 0.3 }),
      ],
    },
  },
]
