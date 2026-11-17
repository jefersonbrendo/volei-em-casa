/**
 * Seção 4 · Recepção (quadra). Referência: seção Recepção da areia, adaptada ao jogo de 6.
 * No desenho, quem recebe fica à direita (verde). Para esse time, a zona 1 é a de cima (y perto de 0),
 * a 5 é a de baixo, e a zona do levantador fica junto à rede, entre as posições 2 e 3.
 */
import { pt } from '../../lib/quadra/cena'
import { b, esperar, j, passo, s } from '../animacoesLotes/ajudantes'
import { naMao, type ExercicioComDesenho } from './tipos'

/** Área-alvo do passe: junto à rede, entre as posições 2 e 3 de quem recebe. */
const ZONA_LEVANTADOR = { id: 'alvo', x: 9.2, y: 1.6, l: 2.4, a: 2.8, rotulo: 'LEVANTADOR' }

export const RECEPCAO: ExercicioComDesenho[] = [
  {
    numero: 401, secao: 4, nivel: 'Iniciante',
    nome: 'Plataforma firme: manchete de bola lançada',
    jogadores: '2 jogadores (1 lançador e 1 receptor)', tempo: '8 minutos', material: '1 bola',
    objetivo: 'Montar a plataforma da manchete (braços juntos e estendidos) e devolver a bola alta sem balançar os braços.',
    comoMontar: 'J1 fica perto da rede com a bola. J2 fica a 4 metros dele, no fundo da quadra, em base de recepção.',
    passoAPasso: [
      'J2 fica em base de recepção: pés afastados, joelhos flexionados, braços juntos e estendidos, polegares lado a lado.',
      'J1 lança a bola por baixo, com as duas mãos, na altura da cintura de J2.',
      'J2 recebe a bola na parte de dentro dos antebraços, sem balançar os braços, e devolve alta nas mãos de J1.',
      'Depois de 20 bolas, os dois trocam de função.',
    ],
    pontosAtencao: [
      'O movimento vem das pernas, não dos braços.',
      'Braços travados e retos; a bola bate na "tábua" dos antebraços.',
      'Olhar a bola até ela tocar nos braços.',
    ],
    erroComum: 'Balançar os braços para cima a cada bola, o que manda a bola para qualquer lado. Corrija pedindo para J2 segurar a plataforma parada e só empurrar com as pernas.',
    variacaoFacil: 'J1 lança mais perto e mais devagar.',
    variacaoDificil: 'J1 lança um passo para a direita ou para a esquerda de J2.',
    meta: 'Devolver 16 de 20 bolas nas mãos de J1, sem ele precisar se mexer.',
    cena: {
      jogadores: [{ id: 'J1', x: 10.6, y: 4.5 }, { id: 'J2', x: 14.6, y: 4.5, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [11, 4.3], para: [14.2, 4.3], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [14.2, 4.7], para: [11, 4.7], curva: 0.5, numero: 2 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        esperar(1, 1.2),
        passo(2, [b('seta1.b', { alta: true, dur: 1.2 }), s('seta1', 1.2)]),
        passo(3, [b('seta2.b', { alta: true, dur: 1.3 }), s('seta2', 1.3)]),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 402, secao: 4, nivel: 'Iniciante',
    nome: 'Recepção de saque por baixo na zona do levantador',
    jogadores: '3 jogadores (1 sacador, 1 receptor e 1 alvo)', tempo: '10 minutos', material: '6 bolas e fita ou cones',
    objetivo: 'Receber um saque de verdade e mandar a bola alta para a zona do levantador, junto à rede.',
    comoMontar: 'Marque a zona do levantador junto à rede, entre as posições 2 e 3, do lado da recepção. J1 saca por baixo do outro lado. J2 recebe na zona 6. J3 fica na zona do levantador e segura as bolas.',
    passoAPasso: [
      'J1 saca por baixo, de trás da linha de fundo, na direção de J2.',
      'J2 se ajusta com passos curtos e fica de frente para a bola.',
      'J2 faz a manchete alta, mirando a zona do levantador.',
      'J3 segura a bola sem sair da zona: se precisou sair, a recepção não valeu. Depois de 10 saques, rodam as funções.',
    ],
    pontosAtencao: [
      'Chegar parado na bola, com os pés já virados para o alvo.',
      'Inclinar os ombros para a zona do levantador.',
      'Passe alto, acima da rede, para dar tempo ao levantador.',
    ],
    erroComum: 'Receber de frente para o sacador e mandar a bola de volta para ele. Corrija pedindo os ombros e a plataforma virados para a zona do levantador.',
    variacaoFacil: 'J1 lança a bola por cima da rede em vez de sacar.',
    variacaoDificil: 'J1 saca por cima.',
    meta: 'Mandar 7 de 10 recepções para dentro da zona do levantador.',
    cena: {
      jogadores: [{ id: 'J1', x: -0.8, y: 4.5 }, { id: 'J2', x: 15.5, y: 4.5, time: 'b' }, { id: 'J3', x: 10.4, y: 3, time: 'b', rotulo: 'L' }],
      zonas: [ZONA_LEVANTADOR],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [-0.4, 4.3], para: [15.1, 4.4], curva: 0.5, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [15.1, 4.6], para: [10.8, 3.3], curva: -0.5, numero: 2 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6)]),
        esperar(2, 0.6),
        passo(3, [b('seta2.b', { alta: true, dur: 1.4 }), s('seta2', 1.4)]),
        esperar(4, 1.2),
      ],
    },
  },
  {
    numero: 403, secao: 4, nivel: 'Iniciante',
    nome: 'Recepção com deslocamento lateral e parada nos dois pés',
    jogadores: '2 jogadores (1 lançador e 1 receptor)', tempo: '8 minutos', material: '6 bolas',
    objetivo: 'Chegar parado na bola que vem para o lado, em vez de receber esticando os braços.',
    comoMontar: 'J2 fica no meio do fundo da quadra, em base de recepção. J1 fica do mesmo lado, perto da rede, com as bolas.',
    passoAPasso: [
      'J2 fica em base no meio do fundo da quadra.',
      'J1 lança uma bola 2 metros para a direita de J2; J2 vai de passada lateral, para com os dois pés e faz manchete de volta para J1.',
      'J2 volta para o meio e J1 lança para a esquerda.',
      'Depois de 12 bolas, os dois trocam de função.',
    ],
    pontosAtencao: [
      'Chegar antes da bola e parar: receber em movimento tira o controle.',
      'O pé de fora fica um pouco à frente, virando o corpo para dentro da quadra.',
      'A plataforma só se forma quando o corpo já parou.',
    ],
    erroComum: 'Esticar os braços para o lado sem mexer os pés. Corrija exigindo que a bola chegue no meio do corpo de J2.',
    variacaoFacil: 'Lançamentos a 1 metro de J2.',
    variacaoDificil: 'J1 não avisa o lado.',
    meta: 'Devolver 10 de 12 bolas nas mãos de J1, sempre recebendo parado.',
    cena: {
      jogadores: [{ id: 'J1', x: 10.6, y: 4.5 }, { id: 'J2', x: 15, y: 4.5, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [11, 4.3], para: [14.8, 2.6], curva: 0.3, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [15, 4], para: [15, 2.9], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [11, 4.7], para: [14.8, 6.4], curva: -0.3, numero: 2 },
        { id: 'seta4', tipo: 'jogador', de: [15, 5], para: [15, 6.1], numero: 2 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        esperar(1, 1.0),
        passo(2, [b('seta1.b', { alta: true, dur: 1.3 }), s('seta1', 1.3), j('J2', 'seta2.b', 0.8, 0.2), s('seta2', 0.8, 0.2), b(naMao('J1', 1, 0), { alta: true, dur: 1.2, atraso: 1.4 })]),
        passo(3, [j('J2', 'J2', 0.7), b('seta3.b', { alta: true, dur: 1.3, atraso: 0.5 }), s('seta3', 1.3, 0.5), j('J2', 'seta4.b', 0.8, 0.7), s('seta4', 0.8, 0.7), b(naMao('J1', 1, 0), { alta: true, dur: 1.2, atraso: 1.9 })]),
        passo(4, [j('J2', 'J2', 0.7)]),
      ],
    },
  },
  {
    numero: 404, secao: 4, nivel: 'Iniciante',
    nome: 'Saque curto: avanço rápido para receber',
    jogadores: '3 jogadores (1 sacador, 1 receptor e 1 alvo)', tempo: '10 minutos', material: '6 bolas',
    objetivo: 'Sair do fundo e receber o saque que cai perto da linha dos 3 metros, mandando a bola para o levantador.',
    comoMontar: 'J1 saca do outro lado. J2 recebe na zona 6, no fundo. J3 fica na zona do levantador e segura as bolas.',
    passoAPasso: [
      'J1 saca curto, mirando logo depois da linha dos 3 metros do lado de J2.',
      'J2 lê a bola curta e avança com passos rápidos, chegando baixo.',
      'J2 faz manchete alta para a zona do levantador.',
      'J2 volta para o fundo; J1 alterna saque curto e saque normal. Depois de 10 saques, rodam.',
    ],
    pontosAtencao: [
      'Ler a bola cedo: saque curto sai mais devagar da mão.',
      'Chegar parado, com o joelho de trás baixo.',
      'Mandar a bola alta, mesmo correndo para frente.',
    ],
    erroComum: 'Chegar atrasado e receber a bola com ela já descendo perto do chão. Corrija pedindo que J2 saia no momento do contato do saque, e não quando a bola passa a rede.',
    variacaoFacil: 'J1 lança a bola curta em vez de sacar.',
    variacaoDificil: 'J2 começa na zona 1 ou 5, mais longe.',
    meta: 'Mandar 6 de 10 saques curtos para a zona do levantador.',
    cena: {
      jogadores: [{ id: 'J1', x: -0.8, y: 4.5 }, { id: 'J2', x: 15.5, y: 4.5, time: 'b' }, { id: 'J3', x: 10.4, y: 3, time: 'b', rotulo: 'L' }],
      zonas: [ZONA_LEVANTADOR],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [-0.4, 4.3], para: [12.4, 5], curva: 0.7, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [15.1, 4.7], para: [12.9, 5], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [12.4, 5], para: [10.8, 3.4], curva: -0.4, numero: 2 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.7 }), s('seta1', 1.7)]),
        passo(2, [j('J2', 'seta2.b', 1.0), s('seta2', 1.0)], { junto: 0.5 }),
        passo(3, [b('seta3.b', { alta: true, dur: 1.2 }), s('seta3', 1.2)]),
        passo(4, [j('J2', 'J2', 1.0)]),
      ],
    },
  },
  {
    numero: 405, secao: 4, nivel: 'Iniciante',
    nome: 'Bola funda: dentro ou fora?',
    jogadores: '2 jogadores (1 sacador e 1 receptor)', tempo: '8 minutos', material: '6 bolas',
    objetivo: 'Ler a profundidade do saque e decidir rápido entre receber e deixar a bola sair.',
    comoMontar: 'J1 saca de trás da linha de fundo. J2 fica do outro lado, um pouco à frente do meio do fundo da quadra.',
    passoAPasso: [
      'J1 saca fundo, mirando perto da linha de fundo de J2.',
      'J2 recua com passos curtos, sem tirar os olhos da bola.',
      'Se a bola vai cair fora, J2 grita "fora!" e sai da frente sem encostar nela; se vai cair dentro, recebe de manchete alta.',
      'Depois de 10 saques, os dois conferem quantas decisões J2 acertou e trocam.',
    ],
    pontosAtencao: [
      'Decidir cedo, com o corpo atrás da bola.',
      'Bola que chega acima do peito costuma ir para fora.',
      'Na dúvida, receber: errar o "fora" custa o ponto.',
    ],
    erroComum: 'Ficar parado e receber a bola com os braços acima da cabeça. Corrija pedindo os 2 passos para trás logo que J1 saca.',
    variacaoFacil: 'J1 lança a bola em vez de sacar.',
    variacaoDificil: 'J1 saca flutuante, que muda a trajetória no fim.',
    meta: 'Acertar a decisão em 8 de 10 saques.',
    cena: {
      jogadores: [{ id: 'J1', x: -0.8, y: 4.5 }, { id: 'J2', x: 14, y: 4.5, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [-0.4, 4.3], para: [17.6, 3.8], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [14.4, 4.4], para: [16.2, 4], numero: 1 },
      ],
      textos: [{ t: 'DENTRO OU FORA?', x: 16, y: 1.2 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8)]),
        passo(2, [j('J2', 'seta2.b', 1.0), s('seta2', 1.0)], { junto: 0.6 }),
        passo(3, [b(pt(13, 3.6), { alta: true, dur: 1.2 })]),
        passo(4, [j('J2', 'J2', 1.0)]),
      ],
    },
  },
  {
    numero: 406, secao: 4, nivel: 'Intermediário',
    nome: 'Recepção em três: de quem é a bola do meio?',
    jogadores: '4 jogadores (1 sacador e 3 receptores)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Dividir a quadra entre 3 receptores e resolver a bola entre dois com uma chamada antecipada.',
    comoMontar: 'J1 saca de um lado. Do outro, J2, J3 e J4 recebem em linha, no fundo da quadra: zona 1, zona 6 e zona 5. A zona do levantador fica marcada junto à rede.',
    passoAPasso: [
      'J1 saca mirando a divisa entre dois receptores (a "costura").',
      'Quem vai receber grita "minha!" antes de a bola passar a rede; quem está ao lado abre espaço e grita "sua!".',
      'O receptor manda a bola alta para a zona do levantador.',
      'Regra combinada: na dúvida entre dois, a bola é de quem está mais atrás ou de quem se desloca em direção ao meio. Depois de 15 saques, roda o sacador.',
    ],
    pontosAtencao: [
      'Chamar cedo e alto, com uma palavra só.',
      'Quem não vai receber se vira para acompanhar o passe.',
      'Cada um cuida da sua faixa e de metade da costura.',
    ],
    erroComum: 'Dois receptores irem na mesma bola, ou nenhum. Corrija treinando primeiro só a chamada: J1 lança, os três chamam e ninguém toca na bola.',
    variacaoFacil: 'Só 2 receptores, cada um com metade da quadra.',
    variacaoDificil: 'J1 saca forte e alterna saque curto e fundo.',
    meta: 'Zero bolas caindo entre dois receptores em 15 saques.',
    cena: {
      jogadores: [
        { id: 'J1', x: -0.8, y: 4.5 },
        { id: 'J2', x: 15, y: 1.6, time: 'b' }, { id: 'J3', x: 15.6, y: 4.5, time: 'b' }, { id: 'J4', x: 15, y: 7.4, time: 'b' },
      ],
      zonas: [ZONA_LEVANTADOR],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [-0.4, 4.3], para: [15.1, 3], curva: 0.5, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [15.6, 4], para: [15.3, 3.3], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [15.1, 3], para: [10.7, 3], curva: -0.5, numero: 2 },
      ],
      textos: [{ t: 'MINHA!', x: 17.2, y: 3.2 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.7 }), s('seta1', 1.7)]),
        passo(2, [j('J3', 'seta2.b', 0.7), s('seta2', 0.7), j('J2', pt(15.4, 0.9), 0.6)], { junto: 0.6 }),
        passo(3, [b('seta3.b', { alta: true, dur: 1.3 }), s('seta3', 1.3)]),
        passo(4, [j('J3', 'J3', 0.8), j('J2', 'J2', 0.8)]),
      ],
    },
  },
  {
    numero: 407, secao: 4, nivel: 'Intermediário',
    nome: 'Recepção do saque flutuante: pés vivos até o fim',
    jogadores: '3 jogadores (1 sacador, 1 receptor e 1 alvo)', tempo: '10 minutos', material: '6 bolas',
    objetivo: 'Receber a bola que muda de trajetória no ar, ajustando os pés até o último instante.',
    comoMontar: 'J1 saca flutuante do outro lado. J2 recebe na zona 6. J3 fica na zona do levantador.',
    passoAPasso: [
      'J2 fica em base com pequenos passos no lugar ("pés vivos").',
      'J1 saca flutuante na direção de J2.',
      'J2 ajusta a posição com passos curtos até a bola chegar, sem montar a plataforma cedo demais.',
      'J2 recebe com os braços firmes e quase parados, mandando a bola para J3. Depois de 10 saques, rodam.',
    ],
    pontosAtencao: [
      'Montar a plataforma só no último momento.',
      'Receber a bola na frente do corpo, nunca do lado.',
      'Flutuante não pede força: os braços só "oferecem" a superfície.',
    ],
    erroComum: 'Travar os pés cedo e a bola fugir no fim. Corrija contando em voz alta os passos de ajuste: pelo menos 2 depois da bola passar a rede.',
    variacaoFacil: 'J1 saca por cima comum, com rotação.',
    variacaoDificil: 'J1 saca flutuante mirando a costura com outro receptor.',
    meta: 'Mandar 6 de 10 flutuantes para a zona do levantador.',
    cena: {
      jogadores: [{ id: 'J1', x: -0.8, y: 4.5 }, { id: 'J2', x: 15.5, y: 4.5, time: 'b' }, { id: 'J3', x: 10.4, y: 3, time: 'b', rotulo: 'L' }],
      zonas: [ZONA_LEVANTADOR],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [-0.4, 4.3], para: [15.1, 5], curva: 0.15, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [15.5, 4.9], para: [15.5, 5.4], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [15.1, 5], para: [10.8, 3.4], curva: -0.5, numero: 2 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 1),
      passos: [
        esperar(1, 0.8),
        passo(2, [b('seta1.b', { dur: 1.5 }), s('seta1', 1.5)]),
        passo(3, [j('J2', 'seta2.b', 0.5), s('seta2', 0.5)], { junto: 1.0 }),
        passo(4, [b('seta3.b', { alta: true, dur: 1.3 }), s('seta3', 1.3)]),
      ],
    },
  },
  {
    numero: 408, secao: 4, nivel: 'Intermediário',
    nome: 'Recepção de toque no saque alto e lento',
    jogadores: '3 jogadores (1 sacador, 1 receptor e 1 alvo)', tempo: '8 minutos', material: '6 bolas',
    objetivo: 'Usar o toque por cima para receber saques altos e fracos, que dão mais precisão do que a manchete.',
    comoMontar: 'J1 saca por baixo ou por cima fraco, em arco alto. J2 recebe na zona 6. J3 fica na zona do levantador.',
    passoAPasso: [
      'J1 saca uma bola alta e lenta em direção a J2.',
      'J2 se posiciona embaixo da bola, com as mãos acima da testa.',
      'J2 recebe de toque, com as mãos firmes, mandando a bola alta para J3.',
      'Se a bola vier forte ou baixa, J2 recebe de manchete. Depois de 10 saques, rodam.',
    ],
    pontosAtencao: [
      'Toque de recepção tem que ser limpo: bola que gira ou é carregada é falta.',
      'Usar o toque só em bola alta e fraca.',
      'Pernas fazem a força; as mãos direcionam.',
    ],
    erroComum: 'Tentar receber de toque um saque forte e cometer falta (bola "conduzida"). Corrija combinando: acima da cabeça e devagar é toque; o resto é manchete.',
    variacaoFacil: 'J1 lança a bola em vez de sacar.',
    variacaoDificil: 'J1 alterna saque alto e saque forte, e J2 escolhe o fundamento certo.',
    meta: 'Fazer 8 de 10 recepções limpas na zona do levantador.',
    cena: {
      jogadores: [{ id: 'J1', x: -0.8, y: 4.5 }, { id: 'J2', x: 15, y: 4.5, time: 'b' }, { id: 'J3', x: 10.4, y: 3, time: 'b', rotulo: 'L' }],
      zonas: [ZONA_LEVANTADOR],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [-0.4, 4.3], para: [14.6, 4.4], curva: 0.9, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [14.6, 4.4], para: [10.8, 3.4], curva: -0.5, numero: 2 },
      ],
      textos: [{ t: 'TOQUE', x: 15, y: 6 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 2.0 }), s('seta1', 2.0)]),
        esperar(2, 0.6),
        passo(3, [b('seta2.b', { alta: true, dur: 1.3 }), s('seta2', 1.3)]),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 409, secao: 4, nivel: 'Intermediário',
    nome: 'Receber e abrir para atacar na entrada de rede',
    jogadores: '3 jogadores (1 sacador, 1 ponteiro e 1 levantador)', tempo: '12 minutos', material: '6 bolas',
    objetivo: 'Treinar o que o ponteiro faz no jogo: receber no fundo e abrir rápido para atacar na posição 4.',
    comoMontar: 'J1 saca de um lado. Do outro, J2 (ponteiro) recebe na zona 5, no fundo, e J3 (levantador) fica na zona do levantador.',
    passoAPasso: [
      'J1 saca na direção de J2, na zona 5.',
      'J2 recebe de manchete alta para J3.',
      'Logo depois do passe, J2 abre para fora da quadra, perto da lateral, atrás da linha dos 3 metros.',
      'J3 levanta uma bola alta para a posição 4.',
      'J2 faz a passada e ataca. Depois de 8 jogadas, trocam de função.',
    ],
    pontosAtencao: [
      'Primeiro o passe: só sai para atacar depois que a bola deixou os braços.',
      'Abrir para fora da quadra para ganhar ângulo de passada.',
      'Olhar o levantador enquanto abre.',
    ],
    erroComum: 'Sair para o ataque antes de terminar a recepção. Corrija valendo a jogada só se o passe chegar na zona do levantador.',
    variacaoFacil: 'J3 lança a bola em vez de levantar, e J2 só pega no alto.',
    variacaoDificil: 'J1 saca forte e J3 pode levantar para a posição 4 ou para o fundo (ataque de fundo).',
    meta: 'Completar 6 de 8 jogadas com passe na zona e ataque dentro da quadra.',
    cena: {
      jogadores: [{ id: 'J1', x: -0.8, y: 4.5 }, { id: 'J2', x: 15, y: 7.3, time: 'b' }, { id: 'J3', x: 10.4, y: 3, time: 'b', rotulo: 'L' }],
      zonas: [ZONA_LEVANTADOR],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [-0.4, 4.6], para: [14.6, 7.2], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [14.6, 7.2], para: [10.8, 3.5], curva: -0.4, numero: 2 },
        { id: 'seta3', tipo: 'jogador', de: [15, 7.8], para: [12.8, 8.9], numero: 1 },
        { id: 'seta4', tipo: 'bola', de: [10.6, 3.4], para: [9.9, 7.6], curva: -0.6, numero: 3 },
        { id: 'seta5', tipo: 'jogador', de: [12.6, 8.8], para: [10.4, 7.6], numero: 2 },
      ],
      textos: [{ t: 'POSIÇÃO 4', x: 10.6, y: 9.4 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6)]),
        passo(2, [b('seta2.b', { alta: true, dur: 1.3 }), s('seta2', 1.3)]),
        passo(3, [j('J2', 'seta3.b', 1.0), s('seta3', 1.0)], { junto: 0.4 }),
        passo(4, [b('seta4.b', { alta: true, dur: 1.4 }), s('seta4', 1.4)]),
        passo(5, [j('J2', 'seta5.b', 0.9), s('seta5', 0.9), b(pt(3, 2), { dur: 0.6, atraso: 0.9 })], { junto: 0.6 }),
      ],
    },
  },
  {
    numero: 410, secao: 4, nivel: 'Avançado',
    nome: 'Recepção do saque viagem: tirar a força da bola',
    jogadores: '3 jogadores (1 sacador, 1 receptor e 1 alvo)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Receber o saque viagem forte amortecendo a bola, para ela subir na zona do levantador e não voltar para o outro lado.',
    comoMontar: 'J1 saca viagem do outro lado. J2 recebe um pouco mais fundo que o normal, perto da linha de fundo. J3 fica na zona do levantador.',
    passoAPasso: [
      'J2 se posiciona 1 passo mais atrás que na recepção normal, em base baixa.',
      'J1 saca viagem na direção de J2.',
      'J2 recebe com a plataforma firme e "tira o peso" da bola, recuando levemente os braços no contato.',
      'A bola sobe em direção à zona do levantador; J3 segura. Depois de 10 saques, rodam.',
    ],
    pontosAtencao: [
      'Base mais baixa e mais funda contra saque forte.',
      'Nenhum balanço de braço: a bola já vem com força.',
      'Mirar o meio da quadra se o passe perfeito não for possível.',
    ],
    erroComum: 'Empurrar os braços contra a bola forte, que volta direto para o outro lado. Corrija pedindo os braços parados e o peso do corpo indo levemente para trás no contato.',
    variacaoFacil: 'J1 saca por cima comum, com força média.',
    variacaoDificil: 'J1 alterna saque viagem e saque curto.',
    meta: 'Manter 6 de 10 recepções do saque viagem dentro da própria quadra, alta e perto da zona do levantador.',
    cena: {
      jogadores: [{ id: 'J1', x: -1.1, y: 4.5 }, { id: 'J2', x: 16.6, y: 4.5, time: 'b' }, { id: 'J3', x: 10.4, y: 3, time: 'b', rotulo: 'L' }],
      zonas: [ZONA_LEVANTADOR],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [0.6, 4.3], para: [16.2, 4.5], curva: 0.25, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [16.2, 4.5], para: [10.8, 3.4], curva: -0.5, numero: 2 },
      ],
      textos: [{ t: 'BASE MAIS FUNDA', x: 16.4, y: 7 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 1),
      passos: [
        esperar(1, 1.0),
        passo(2, [j('J1', pt(0.6, 4.5), 0.8), b('seta1.b', { de: pt(0.6, 4.3), dur: 1.0, atraso: 0.8 }), s('seta1', 1.0, 0.8)]),
        passo(3, [b('seta2.b', { alta: true, dur: 1.4 }), s('seta2', 1.4)]),
        passo(4, [j('J1', 'J1', 1.0)]),
      ],
    },
  },
]
