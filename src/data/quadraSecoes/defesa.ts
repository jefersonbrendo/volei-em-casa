/**
 * Seção 8 · Defesa (quadra). Referência: seção Defesa da areia, adaptada à defesa com 6 e ao piso.
 * Quem defende fica à esquerda (azul). Para ele, a zona 5 (fundo à esquerda) é a de cima, a 6 é o
 * meio do fundo e a 1 (fundo à direita) é a de baixo. Quem ataca fica à direita (verde).
 */
import { pt } from '../../lib/quadra/cena'
import { b, esperar, j, passo, s } from '../animacoesLotes/ajudantes'
import { naMao, type ExercicioComDesenho } from './tipos'

/** Bola chegando ao "alvo" da defesa: alta, no meio da quadra, perto da linha dos 3 metros. */
const ALVO_DEFESA = { id: 'alvo', x: 5.2, y: 3.4, l: 2.6, a: 2.6, rotulo: 'ALVO' }

export const DEFESA: ExercicioComDesenho[] = [
  {
    numero: 801, secao: 8, nivel: 'Iniciante',
    nome: 'Base de defesa contra ataque em pé',
    jogadores: '2 jogadores (1 atacante e 1 defensor)', tempo: '10 minutos', material: '8 bolas',
    objetivo: 'Montar a base baixa de defesa e mandar para cima a bola atacada, sem recuar o corpo.',
    comoMontar: 'J1 fica no fundo da quadra, na zona 6, em base de defesa. J2 fica do outro lado, perto da linha dos 3 metros, e ataca em pé (sem salto), com força média.',
    passoAPasso: [
      'J1 fica em base baixa: pés afastados além da largura dos ombros, peso à frente e braços soltos à frente do corpo.',
      'J2 levanta a bola para si mesmo e ataca em pé na direção de J1.',
      'J1 recebe a bola com os braços juntos e firmes, sem balançar, deixando a bola subir na própria quadra.',
      'J1 volta para a base. Depois de 10 bolas, os dois trocam.',
    ],
    pontosAtencao: [
      'Base mais baixa do que a da recepção.',
      'O peso fica para frente: quem defende "ataca" a bola com o corpo.',
      'A bola sobe na própria quadra, não volta para o outro lado.',
    ],
    erroComum: 'Ficar em pé e recuar o corpo quando a bola vem forte. Corrija pedindo que J1 toque o chão com as mãos antes de cada ataque, para lembrar a altura da base.',
    variacaoFacil: 'J2 lança a bola com as mãos, de cima para baixo.',
    variacaoDificil: 'J2 ataca um passo para a direita ou para a esquerda de J1.',
    meta: 'Mandar 7 de 10 defesas para cima, dentro da própria quadra.',
    cena: {
      jogadores: [{ id: 'J1', x: 2.5, y: 4.5 }, { id: 'J2', x: 12.4, y: 4.5, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [12, 4.3], para: [3, 4.4], numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [3, 4.6], para: [5.6, 5.2], curva: 0.6, numero: 2 },
      ],
      textos: [{ t: 'ZONA 6', x: 1, y: 6.2 }],
    },
    animacao: {
      bolaInicial: naMao('J2', -1),
      passos: [
        esperar(1, 1.2),
        passo(2, [b(naMao('J2', -1, -7), { dur: 0.5 }), b('seta1.b', { dur: 0.6, atraso: 0.6 }), s('seta1', 0.6, 0.6)]),
        passo(3, [b('seta2.b', { alta: true, dur: 1.2 }), s('seta2', 1.2)]),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 802, secao: 8, nivel: 'Iniciante',
    nome: 'Defesa para o alvo: alta e no meio da quadra',
    jogadores: '3 jogadores (1 atacante, 1 defensor e 1 alvo)', tempo: '10 minutos', material: '8 bolas e fita ou cones',
    objetivo: 'Mandar a defesa para um lugar útil: alta e no meio da quadra, onde o levantador consegue chegar.',
    comoMontar: 'Marque um quadrado no meio da quadra, perto da linha dos 3 metros (o alvo). J1 defende no fundo, na zona 1. J3 fica no alvo. Do outro lado, J2 ataca em pé.',
    passoAPasso: [
      'J1 fica em base na zona 1, de frente para J2.',
      'J2 ataca em pé na direção de J1.',
      'J1 defende inclinando os ombros e a plataforma para o alvo, no meio da quadra.',
      'J3 segura a bola se ela cair no alvo. Depois de 10 bolas, rodam as funções.',
    ],
    pontosAtencao: [
      'Ombro de fora mais baixo, plataforma apontando para o meio.',
      'Bola alta dá tempo ao time: vale mais que bola rápida.',
      'Na dúvida, mandar para o meio, nunca para o outro lado da rede.',
    ],
    erroComum: 'Defender "para frente" e devolver a bola de graça para o adversário. Corrija pedindo a plataforma virada para o meio da própria quadra.',
    variacaoFacil: 'J2 lança a bola em vez de atacar.',
    variacaoDificil: 'J1 defende na zona 5, do outro lado, e o alvo continua no meio.',
    meta: 'Acertar o alvo em 6 de 10 defesas.',
    cena: {
      jogadores: [{ id: 'J1', x: 2, y: 7.6 }, { id: 'J2', x: 12.4, y: 3, time: 'b' }, { id: 'J3', x: 6.5, y: 4.7 }],
      zonas: [ALVO_DEFESA],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [12, 3.1], para: [2.5, 7.4], numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [2.5, 7.4], para: [6.1, 4.8], curva: -0.6, numero: 2 },
      ],
      textos: [{ t: 'ZONA 1', x: 2, y: 8.7 }],
    },
    animacao: {
      bolaInicial: naMao('J2', -1),
      passos: [
        esperar(1, 1.0),
        passo(2, [b(naMao('J2', -1, -7), { dur: 0.5 }), b('seta1.b', { dur: 0.6, atraso: 0.6 }), s('seta1', 0.6, 0.6)]),
        passo(3, [b('seta2.b', { alta: true, dur: 1.3 }), s('seta2', 1.3)]),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 803, secao: 8, nivel: 'Iniciante',
    nome: 'Defesa da largada: avanço e bola para cima',
    jogadores: '2 jogadores (1 atacante e 1 defensor)', tempo: '8 minutos', material: '8 bolas',
    objetivo: 'Sair do fundo e chegar na largada que cai atrás do bloqueio, mandando a bola alta.',
    comoMontar: 'J1 fica no fundo da quadra, em base de defesa. J2 fica do outro lado, junto à rede, e larga bolas curtas por cima da rede.',
    passoAPasso: [
      'J1 fica em base no fundo da quadra, com o peso na ponta dos pés.',
      'J2 simula um ataque e larga a bola curta, logo depois da rede.',
      'J1 arranca com passos curtos e rápidos e chega baixo na bola, com o pé de dentro à frente.',
      'J1 manda a bola alta, de manchete, para o meio da quadra, e volta para o fundo. Depois de 10 bolas, trocam.',
    ],
    pontosAtencao: [
      'Sair no momento do contato de J2, não depois.',
      'Chegar baixo: o último passo é longo, quase um afundo.',
      'Bola alta, mesmo chegando no limite.',
    ],
    erroComum: 'Chegar e tentar defender de toque uma bola baixa. Corrija pedindo manchete sempre que a bola estiver abaixo do peito.',
    variacaoFacil: 'J1 começa na linha dos 3 metros, mais perto.',
    variacaoDificil: 'J2 alterna largada e ataque em pé, e J1 decide se sai ou fica.',
    meta: 'Chegar e mandar para cima 7 de 10 largadas.',
    cena: {
      jogadores: [{ id: 'J1', x: 2, y: 4.5 }, { id: 'J2', x: 10, y: 4.5, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [9.7, 4.3], para: [7.4, 4.2], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [2.4, 4.5], para: [6.9, 4.5], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [7.3, 4.3], para: [4.8, 5.8], curva: -0.6, numero: 2 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J2', -1, -3),
      passos: [
        esperar(1, 1.0),
        passo(2, [b('seta1.b', { alta: true, dur: 1.1 }), s('seta1', 1.1)]),
        passo(3, [j('J1', 'seta2.b', 1.0), s('seta2', 1.0)], { junto: 0.1 }),
        passo(4, [b('seta3.b', { alta: true, dur: 1.2 }), s('seta3', 1.2), j('J1', 'J1', 1.2, 1.2)]),
      ],
    },
  },
  {
    numero: 804, secao: 8, nivel: 'Intermediário',
    nome: 'Defensor da paralela fora da sombra do bloqueio',
    jogadores: '4 jogadores (1 bloqueador, 1 defensor, 1 levantador e 1 atacante)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Posicionar-se na zona 1 (ou 5) fora da sombra do bloqueio, enxergando a bola e o atacante.',
    comoMontar: 'Do lado da defesa: B1 bloqueia na posição 2 e J1 defende na zona 1, perto da lateral. Do outro lado, L levanta para J2, que ataca na entrada de rede deles.',
    passoAPasso: [
      'L levanta para J2. B1 se posiciona para bloquear.',
      'J1 se desloca para a lateral, ficando um passo para fora da sombra do bloqueio, de onde vê a bola.',
      'J1 para em base antes do ataque, com o pé de fora mais atrás.',
      'J2 ataca na paralela (rente ao bloqueio) e J1 defende para o meio da quadra. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'Se você não vê a bola, está na sombra do bloqueio: dê um passo para fora.',
      'Parar antes do ataque é mais importante do que estar no lugar perfeito.',
      'A defesa sai para o meio da quadra, nunca para fora.',
    ],
    erroComum: 'Ficar atrás do bloqueador, sem ver a bola, e ser surpreendido. Corrija pedindo que J1 diga "vejo!" antes de cada ataque.',
    variacaoFacil: 'Sem o bloqueador, só um cone marcando a posição dele.',
    variacaoDificil: 'J2 alterna paralela e largada atrás do bloqueio.',
    meta: 'Estar parado fora da sombra do bloqueio em 7 de 8 ataques.',
    cena: {
      jogadores: [
        { id: 'B1', x: 8.4, y: 7.8 }, { id: 'J1', x: 2.4, y: 6.6 },
        { id: 'L', x: 9.9, y: 3.2, time: 'b', rotulo: 'L' }, { id: 'J2', x: 10.4, y: 7.8, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [10.2, 3.6], para: [10.2, 7.4], curva: -0.6, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [2.4, 7], para: [2.2, 8.2], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [10, 7.8], para: [2.5, 8.2], numero: 2 },
        { id: 'seta4', tipo: 'bola', de: [2.5, 8.2], para: [5.6, 5], curva: -0.5, numero: 3 },
      ],
      textos: [{ t: 'FORA DA SOMBRA', x: 3.4, y: 9.5 }],
    },
    animacao: {
      bolaInicial: naMao('L', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6)]),
        passo(2, [j('J1', 'seta2.b', 0.8), s('seta2', 0.8)], { junto: 0.5 }),
        esperar(3, 0.4),
        passo(4, [b('seta3.b', { dur: 0.6 }), s('seta3', 0.6), b('seta4.b', { alta: true, dur: 1.2, atraso: 0.6 }), s('seta4', 1.2, 0.6)]),
      ],
    },
  },
  {
    numero: 805, secao: 8, nivel: 'Intermediário',
    nome: 'Defesa da diagonal curta',
    jogadores: '3 jogadores (1 levantador, 1 atacante e 1 defensor)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Defender o ataque em diagonal curta, que cai perto da linha dos 3 metros, um dos mais difíceis de alcançar.',
    comoMontar: 'J1 defende na zona 5 do seu lado (fundo, à esquerda de quem olha para a rede). Do outro lado, L levanta para J2 na entrada de rede deles.',
    passoAPasso: [
      'J1 fica em base na zona 5, um pouco mais à frente que o normal.',
      'L levanta para J2, que ataca com ângulo, cruzado e curto.',
      'J1 dá um passo diagonal para frente, baixa o corpo e defende com a plataforma virada para o meio.',
      'J1 volta para a zona 5. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'Contra atacante que bate cruzado, adiantar um passo na zona 5.',
      'Plataforma inclinada para dentro da quadra.',
      'Ler o ombro do atacante: ombro fechado indica diagonal curta.',
    ],
    erroComum: 'Esperar a bola parado no fundo e ela cair na frente. Corrija pedindo que J1 comece um passo à frente e reaja à virada do ombro do atacante.',
    variacaoFacil: 'J2 ataca de bola lançada, em pé.',
    variacaoDificil: 'J2 alterna diagonal curta e diagonal longa.',
    meta: 'Defender 5 de 8 ataques na diagonal curta, mandando para cima.',
    cena: {
      jogadores: [
        { id: 'J1', x: 3, y: 1.8 },
        { id: 'L', x: 9.9, y: 3.2, time: 'b', rotulo: 'L' }, { id: 'J2', x: 10.4, y: 7.8, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [10.2, 3.6], para: [10.2, 7.4], curva: -0.6, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [10, 7.6], para: [4.8, 1.6], numero: 2 },
        { id: 'seta3', tipo: 'jogador', de: [3.3, 1.9], para: [4.4, 1.6], numero: 1 },
        { id: 'seta4', tipo: 'bola', de: [4.6, 1.8], para: [5.8, 4.6], curva: -0.5, numero: 3 },
      ],
      textos: [{ t: 'ZONA 5', x: 1, y: 0.6 }],
    },
    animacao: {
      bolaInicial: naMao('L', 1, 0),
      passos: [
        esperar(1, 0.8),
        passo(2, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6), b('seta2.b', { dur: 0.6, atraso: 1.9 }), s('seta2', 0.6, 1.9)]),
        passo(3, [j('J1', 'seta3.b', 0.6), s('seta3', 0.6), b('seta4.b', { alta: true, dur: 1.2, atraso: 0.4 }), s('seta4', 1.2, 0.4)], { junto: 1.8 }),
        passo(4, [j('J1', 'J1', 1.0)]),
      ],
    },
  },
  {
    numero: 806, secao: 8, nivel: 'Intermediário',
    nome: 'Bola longe: deslize lateral para defender',
    jogadores: '2 jogadores (1 lançador e 1 defensor)', tempo: '10 minutos', material: '8 bolas e joelheiras',
    objetivo: 'Alcançar a bola longe do corpo com um passo longo e o deslize no chão, sem bater os joelhos.',
    comoMontar: 'J1 fica no meio do fundo da quadra, em base. J2 fica a 5 metros, do mesmo lado, com as bolas.',
    passoAPasso: [
      'J1 fica em base no fundo. J2 segura a bola na altura da cintura.',
      'J2 lança uma bola baixa e rápida, 2 a 3 metros para o lado de J1.',
      'J1 dá um passo longo para o lado, estica o braço ou os dois braços por baixo da bola e manda a bola para cima.',
      'J1 desliza de lado no chão, sobre o quadril e a coxa, e se levanta rápido. Depois de 8 bolas, trocam.',
    ],
    pontosAtencao: [
      'Primeiro alcançar a bola, depois deslizar: a defesa vem antes da queda.',
      'Cair de lado, nunca de joelho.',
      'Levantar rápido: a jogada continua.',
    ],
    erroComum: 'Se jogar no chão antes de chegar perto da bola. Corrija pedindo o passo longo primeiro e o deslize só no fim.',
    variacaoFacil: 'Lançamentos a 1,5 metro, sem o deslize.',
    variacaoDificil: 'J2 lança para os dois lados, sem avisar.',
    meta: 'Mandar para cima 6 de 8 bolas longe, levantando em até 2 segundos depois do deslize.',
    cena: {
      jogadores: [{ id: 'J1', x: 2.5, y: 4.5 }, { id: 'J2', x: 7.4, y: 4.5, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [7, 4.3], para: [2.7, 1.8], numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [2.5, 4], para: [2.5, 2.3], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [2.7, 1.8], para: [4.6, 3.4], curva: -0.5, numero: 2 },
      ],
      textos: [{ t: 'DESLIZE', x: 1, y: 1.4 }],
    },
    animacao: {
      bolaInicial: naMao('J2', -1, 0),
      passos: [
        esperar(1, 1.0),
        passo(2, [b('seta1.b', { dur: 0.9 }), s('seta1', 0.9)]),
        passo(3, [j('J1', 'seta2.b', 0.7), s('seta2', 0.7), b('seta3.b', { alta: true, dur: 1.1, atraso: 0.4 }), s('seta3', 1.1, 0.4)], { junto: 0.3 }),
        passo(4, [j('J1', 'J1', 1.0)]),
      ],
    },
  },
  {
    numero: 807, secao: 8, nivel: 'Intermediário',
    nome: 'Cobertura do próprio ataque',
    jogadores: '4 jogadores (1 atacante, 2 na cobertura e 1 bloqueador)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Proteger o atacante quando a bola volta do bloqueio, ficando baixo e perto dele.',
    comoMontar: 'J1 ataca na posição 4. J2 e J3 fazem a cobertura em volta dele, baixos, um perto da rede e outro mais atrás. Do outro lado, B1 bloqueia com uma bola na mão (ou um colega lança a bola de volta).',
    passoAPasso: [
      'Um levantador (ou um lançador) manda a bola para J1, na posição 4.',
      'Enquanto J1 sobe para atacar, J2 e J3 se aproximam e ficam baixos, com os braços prontos, em semicírculo.',
      'B1 "devolve" a bola do bloqueio (lançando para baixo, perto da rede, do lado de J1).',
      'J2 ou J3 defende para cima, e o time pode atacar de novo. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'Cobertura é baixa: a bola do bloqueio vem perto do chão.',
      'Olhar as mãos do bloqueador, não o atacante.',
      'Cada um cobre um pedaço: um perto da rede, outro mais fundo.',
    ],
    erroComum: 'Os colegas ficarem parados assistindo o ataque. Corrija combinando que todo ataque tem pelo menos 2 jogadores na cobertura.',
    variacaoFacil: 'B1 devolve a bola sempre no mesmo lugar.',
    variacaoDificil: 'B1 devolve forte e em lugares diferentes.',
    meta: 'Recuperar 5 de 8 bolas devolvidas pelo bloqueio.',
    cena: {
      jogadores: [
        { id: 'J1', x: 8, y: 1.3 }, { id: 'J2', x: 6.6, y: 2.8 }, { id: 'J3', x: 5, y: 1.4 },
        { id: 'B1', x: 9.8, y: 1.3, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [9.6, 1.5], para: [7, 2.4], numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [7, 2.4], para: [6.4, 4.4], curva: -0.5, numero: 2 },
      ],
      textos: [{ t: 'COBERTURA BAIXA', x: 4.2, y: 3.6 }],
    },
    animacao: {
      bolaInicial: pt(8.1, 0.8),
      passos: [
        esperar(1, 0.8),
        passo(2, [j('J2', pt(7, 2.6), 0.6), j('J3', pt(6, 1.6), 0.6)]),
        passo(3, [b(pt(9.6, 1.4), { dur: 0.3 }), b('seta1.b', { dur: 0.5, atraso: 0.3 }), s('seta1', 0.5, 0.3)]),
        passo(4, [b('seta2.b', { alta: true, dur: 1.1 }), s('seta2', 1.1)]),
      ],
    },
  },
  {
    numero: 808, secao: 8, nivel: 'Intermediário',
    nome: 'Defesa alta por cima da cabeça',
    jogadores: '2 jogadores (1 atacante e 1 defensor)', tempo: '8 minutos', material: '8 bolas',
    objetivo: 'Defender a bola que vem alta, na altura do rosto ou acima, usando as mãos juntas e firmes (sem conduzir a bola).',
    comoMontar: 'J1 fica no fundo da quadra, em base um pouco mais alta. J2 fica do outro lado, perto da linha dos 3 metros, e ataca em pé na altura do rosto de J1.',
    passoAPasso: [
      'J1 fica em base, com as mãos à frente do peito.',
      'J2 ataca em pé uma bola alta, na direção do rosto de J1.',
      'J1 leva as mãos juntas à frente da testa (uma por cima da outra ou de dedos abertos e firmes) e deixa a bola bater, mandando-a para cima.',
      'Depois de 10 bolas, os dois trocam.',
    ],
    pontosAtencao: [
      'Mãos firmes: a bola bate e sobe, sem ser segurada.',
      'Usar só em bola rápida acima do peito.',
      'Corpo atrás das mãos, com os joelhos flexionados.',
    ],
    erroComum: 'Tentar uma manchete com a bola na altura do rosto e mandar a bola para trás. Corrija combinando: acima do peito, mãos; abaixo, manchete.',
    variacaoFacil: 'J2 lança a bola com as mãos.',
    variacaoDificil: 'J2 alterna bolas altas e baixas.',
    meta: 'Mandar para cima, dentro da quadra, 7 de 10 bolas altas.',
    cena: {
      jogadores: [{ id: 'J1', x: 2.8, y: 4.5 }, { id: 'J2', x: 12.4, y: 4.5, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [12, 4.3], para: [3.2, 4.3], curva: 0.15, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [3.2, 4.3], para: [5, 6.2], curva: -0.7, numero: 2 },
      ],
      textos: [{ t: 'MÃOS FIRMES', x: 2.8, y: 2.6 }],
    },
    animacao: {
      bolaInicial: naMao('J2', -1),
      passos: [
        esperar(1, 1.0),
        passo(2, [b(naMao('J2', -1, -7), { dur: 0.5 }), b('seta1.b', { dur: 0.7, atraso: 0.6 }), s('seta1', 0.7, 0.6)]),
        passo(3, [b('seta2.b', { alta: true, dur: 1.2 }), s('seta2', 1.2)]),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 809, secao: 8, nivel: 'Avançado',
    nome: 'Defesa em trio: zonas 5, 6 e 1 contra a entrada de rede',
    jogadores: '5 jogadores (3 defensores, 1 levantador e 1 atacante)', tempo: '15 minutos', material: '10 bolas',
    objetivo: 'Organizar os 3 defensores do fundo contra o ataque da entrada de rede adversária, cada um com sua área e chamando a bola.',
    comoMontar: 'Do lado da defesa: J1 na zona 5, J2 na zona 6 e J3 na zona 1. Do outro lado, L levanta para J4, que ataca na entrada de rede deles.',
    passoAPasso: [
      'L levanta para J4. Os três defensores se ajustam: J3 vai para a paralela, J1 para a diagonal, J2 fica no fundo.',
      'Todos param em base antes do ataque.',
      'J4 ataca para onde quiser; quem está na direção da bola grita "minha!" e defende para o meio.',
      'Os outros dois se viram para acompanhar a bola. Depois de 10 ataques, rodam.',
    ],
    pontosAtencao: [
      'Cada um sabe sua área antes do levantamento.',
      'O fundo (zona 6) cobre as bolas no final da quadra.',
      'Bola entre dois: de quem vai em direção ao meio da quadra.',
    ],
    erroComum: 'Os três ficarem em linha, no mesmo nível. Corrija pedindo J1 e J3 mais à frente, nas laterais, e J2 bem no fundo.',
    variacaoFacil: 'J4 ataca em pé, de bola lançada.',
    variacaoDificil: 'J4 pode largar, e o defensor mais perto tem que sair para a largada.',
    meta: 'Mandar para cima 6 de 10 ataques, sem bola caindo entre dois defensores.',
    cena: {
      jogadores: [
        { id: 'J1', x: 3.6, y: 1.6 }, { id: 'J2', x: 1, y: 4.5 }, { id: 'J3', x: 3.6, y: 7.6 },
        { id: 'L', x: 9.9, y: 3.2, time: 'b', rotulo: 'L' }, { id: 'J4', x: 10.4, y: 7.8, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [10.2, 3.6], para: [10.2, 7.4], curva: -0.6, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [10, 7.6], para: [1.4, 4.7], numero: 2 },
        { id: 'seta3', tipo: 'bola', de: [1.4, 4.7], para: [5, 5.4], curva: -0.6, numero: 3 },
      ],
      textos: [{ t: 'ZONA 5', x: 3.6, y: 0.4 }, { t: 'ZONA 6', x: 1, y: 3.2 }, { t: 'ZONA 1', x: 3.6, y: 8.8 }],
    },
    animacao: {
      bolaInicial: naMao('L', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6), j('J3', pt(3.2, 8.2), 0.8, 0.4), j('J1', pt(3.9, 1.2), 0.8, 0.4)]),
        esperar(2, 0.5),
        passo(3, [b('seta2.b', { dur: 0.7 }), s('seta2', 0.7), b('seta3.b', { alta: true, dur: 1.2, atraso: 0.7 }), s('seta3', 1.2, 0.7)]),
        passo(4, [j('J1', 'J1', 0.8), j('J3', 'J3', 0.8)]),
      ],
    },
  },
  {
    numero: 810, secao: 8, nivel: 'Avançado',
    nome: 'Três defesas seguidas: forte, largada e bola longe',
    jogadores: '2 jogadores (1 atacante e 1 defensor)', tempo: '12 minutos', material: '10 bolas',
    objetivo: 'Encadear defesas diferentes em sequência, voltando para a base entre cada uma, como num rali longo.',
    comoMontar: 'J1 fica no meio do fundo da quadra. J2 fica do outro lado, perto da rede, com as bolas à mão.',
    passoAPasso: [
      'J2 ataca em pé uma bola forte em J1, que defende para cima.',
      'Logo em seguida, J2 larga uma bola curta; J1 arranca e defende.',
      'J1 volta para a base e J2 lança uma bola longe, perto da lateral; J1 alcança com passo longo ou deslize.',
      'Descanso de 20 segundos e nova série. Depois de 4 séries, os dois trocam.',
    ],
    pontosAtencao: [
      'Voltar para a base entre uma bola e outra, sempre.',
      'Cada defesa vai alta e para o meio.',
      'Respirar durante a volta para a base.',
    ],
    erroComum: 'Ficar no chão depois da defesa e perder a bola seguinte. Corrija com J2 lançando a próxima bola assim que J1 levantar.',
    variacaoFacil: 'Intervalo de 3 segundos entre as bolas.',
    variacaoDificil: 'J2 muda a ordem das bolas a cada série.',
    meta: 'Completar 4 séries com pelo menos 2 das 3 defesas para cima em cada uma.',
    cena: {
      jogadores: [{ id: 'J1', x: 2.5, y: 4.5 }, { id: 'J2', x: 10.2, y: 4.5, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [9.8, 4.3], para: [2.9, 4.4], numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [9.8, 4.6], para: [7, 5.4], curva: -0.4, numero: 2 },
        { id: 'seta3', tipo: 'jogador', de: [2.9, 4.7], para: [6.5, 5.4], numero: 1 },
        { id: 'seta4', tipo: 'bola', de: [9.8, 4], para: [2.6, 0.8], curva: 0.4, numero: 3 },
        { id: 'seta5', tipo: 'jogador', de: [2.5, 4], para: [2.6, 1.3], numero: 2 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J2', -1, -3),
      passos: [
        passo(1, [b('seta1.b', { dur: 0.6 }), s('seta1', 0.6), b(pt(4.4, 3.4), { alta: true, dur: 1.0, atraso: 0.6 })]),
        passo(2, [b('seta2.b', { de: naMao('J2', -1, -3), alta: true, dur: 1.0 }), s('seta2', 1.0), j('J1', 'seta3.b', 0.9, 0.1), s('seta3', 0.9, 0.1), b(pt(6, 3.4), { alta: true, dur: 1.0, atraso: 1.0 })]),
        passo(3, [j('J1', 'J1', 0.9), b('seta4.b', { de: naMao('J2', -1, -3), dur: 1.0, atraso: 0.5 }), s('seta4', 1.0, 0.5), j('J1', 'seta5.b', 0.6, 1.0), s('seta5', 0.6, 1.0)]),
        passo(4, [j('J1', 'J1', 1.0)]),
      ],
    },
  },
]
