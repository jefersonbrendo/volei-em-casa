/**
 * Seção 11 · Comunicação (quadra). Referência: seção Comunicação da areia, adaptada a 6 em quadra.
 * O time que treina fica à esquerda (azul): posição 4 em cima, 2 embaixo; zona 5 em cima, 1 embaixo.
 */
import { pt } from '../../lib/quadra/cena'
import { b, esperar, j, passo, s } from '../animacoesLotes/ajudantes'
import { naMao, type ExercicioComDesenho } from './tipos'

export const COMUNICACAO: ExercicioComDesenho[] = [
  {
    numero: 1101, secao: 11, nivel: 'Iniciante',
    nome: '"Minha!": a bola entre dois',
    jogadores: '3 jogadores (1 lançador e 2 receptores)', tempo: '8 minutos', material: '6 bolas',
    objetivo: 'Criar o hábito de chamar a bola cedo e alto, para nunca cair uma bola entre dois jogadores.',
    comoMontar: 'J1 e J2 ficam lado a lado no fundo da quadra, a 3 metros um do outro. J3 fica do outro lado da rede e lança as bolas.',
    passoAPasso: [
      'J3 lança uma bola alta no meio entre J1 e J2.',
      'Quem vai pegar grita "minha!" antes de a bola passar a rede; o outro responde "sua!" e abre espaço.',
      'Quem chamou manda a bola alta para o meio da quadra.',
      'Depois de 10 bolas, trocam as funções. Bola sem chamada vale ponto para J3.',
    ],
    pontosAtencao: [
      'Uma palavra só, curta e alta.',
      'Chamar antes da bola passar a rede.',
      'Quem não chamou se vira para acompanhar o passe.',
    ],
    erroComum: 'Os dois gritarem "minha!" ao mesmo tempo. Corrija com a regra de prioridade combinada: na dúvida, a bola é de quem está indo em direção ao meio.',
    variacaoFacil: 'J3 lança a bola mais perto de um dos dois.',
    variacaoDificil: 'J3 saca em vez de lançar.',
    meta: '10 bolas seguidas com chamada certa e nenhuma bola caindo entre os dois.',
    cena: {
      jogadores: [{ id: 'J1', x: 2.5, y: 3 }, { id: 'J2', x: 2.5, y: 6 }, { id: 'J3', x: 13, y: 4.5, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [12.6, 4.4], para: [2.8, 4.4], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [2.5, 3.4], para: [2.6, 4], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [2.8, 4.3], para: [6, 4.6], curva: -0.5, numero: 2 },
      ],
      textos: [{ t: '"MINHA!"', x: 1, y: 2.2 }, { t: '"SUA!"', x: 1, y: 7.2 }],
    },
    animacao: {
      bolaInicial: naMao('J3', -1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6)]),
        passo(2, [j('J1', 'seta2.b', 0.5), s('seta2', 0.5), j('J2', pt(2.2, 6.8), 0.5)], { junto: 0.6 }),
        passo(3, [b('seta3.b', { alta: true, dur: 1.2 }), s('seta3', 1.2)]),
        passo(4, [j('J1', 'J1', 0.8), j('J2', 'J2', 0.8)]),
      ],
    },
  },
  {
    numero: 1102, secao: 11, nivel: 'Iniciante',
    nome: 'Quem não recebe avisa: "fora!" ou "dentro!"',
    jogadores: '3 jogadores (1 sacador e 2 receptores)', tempo: '8 minutos', material: '6 bolas',
    objetivo: 'Usar o colega que não vai receber como "juiz de linha", avisando se a bola vai cair fora.',
    comoMontar: 'J1 e J2 recebem no fundo da quadra, J1 perto da linha lateral e J2 no meio. Do outro lado, J3 saca perto das linhas.',
    passoAPasso: [
      'J3 saca perto da linha lateral ou da linha de fundo.',
      'Quem está mais perto da linha (e de lado para a bola) avisa "fora!" ou "dentro!" antes de a bola chegar.',
      'O receptor confia no aviso: deixa sair ou recebe.',
      'Depois de 10 saques, trocam. Conte quantos avisos foram certos.',
    ],
    pontosAtencao: [
      'Quem está de lado para a linha vê melhor do que quem recebe.',
      'Avisar cedo, com uma palavra só.',
      'Na dúvida, avisar "dentro!": é melhor receber do que perder o ponto.',
    ],
    erroComum: 'O aviso chegar depois do receptor já ter decidido. Corrija pedindo o aviso no momento em que a bola passa a rede.',
    variacaoFacil: 'J3 lança a bola alta em vez de sacar.',
    variacaoDificil: 'J3 saca forte e flutuante, perto das linhas.',
    meta: 'Acertar 8 de 10 avisos.',
    cena: {
      jogadores: [{ id: 'J1', x: 2.5, y: 7.6 }, { id: 'J2', x: 2.5, y: 4.5 }, { id: 'J3', x: 18.8, y: 4.5, time: 'b' }],
      setas: [{ id: 'seta1', tipo: 'bola', de: [18.4, 4.5], para: [2.2, 9.4], curva: 0.3, numero: 1 }],
      textos: [{ t: '"FORA!"', x: 4.4, y: 8.4 }],
    },
    animacao: {
      bolaInicial: naMao('J3', -1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8)]),
        passo(2, [j('J1', pt(2.8, 8.2), 0.6)], { junto: 0.8 }),
        passo(3, [j('J2', pt(2.2, 4.2), 0.4)], { junto: 0.4 }),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 1103, secao: 11, nivel: 'Iniciante',
    nome: 'O levantador chama a jogada antes do saque',
    jogadores: '4 jogadores (1 levantador, 1 passador e 2 atacantes)', tempo: '10 minutos', material: '6 bolas',
    objetivo: 'Combinar a jogada antes do saque com nomes simples, para todos os atacantes saberem onde atacar.',
    comoMontar: 'L fica na zona do levantador. J1 passa do fundo. J2 fica na posição 4 e J3 no meio. O time combina 3 nomes: "alta" (bola alta na 4), "rápida" (bola rápida no meio) e "costas" (bola de costas na 2).',
    passoAPasso: [
      'Antes de cada bola, L fala baixo (ou mostra com os dedos) a jogada: "alta" ou "rápida".',
      'Os atacantes confirmam com um "ok!".',
      'Um lançador manda a bola para J1, que passa para L.',
      'L levanta a jogada combinada e o atacante certo ataca. Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'Nomes curtos, que todos conhecem.',
      'Confirmar a jogada antes de a bola entrar em jogo.',
      'Se o passe sair ruim, a jogada muda para "alta" automaticamente.',
    ],
    erroComum: 'O atacante não ouvir a jogada e ir para o lugar errado. Corrija exigindo o "ok!" de cada atacante antes do lançamento.',
    variacaoFacil: 'Só 2 jogadas ("alta" e "rápida").',
    variacaoDificil: 'L usa sinais com os dedos atrás das costas, como no jogo.',
    meta: '9 de 10 jogadas com o atacante certo no lugar certo.',
    cena: {
      jogadores: [
        { id: 'L', x: 8.1, y: 5.8, rotulo: 'L' }, { id: 'J1', x: 2.5, y: 6 }, { id: 'J2', x: 5.6, y: 0.6 }, { id: 'J3', x: 5.8, y: 4.2, rotulo: 'C' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [2.9, 6], para: [7.8, 5.6], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [6.1, 4.3], para: [7.9, 4.6], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [8.1, 5.4], para: [8.2, 4.8], numero: 2 },
      ],
      textos: [{ t: '"RÁPIDA!"', x: 10.4, y: 6.8 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        esperar(1, 1.2),
        esperar(2, 0.8),
        passo(3, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4), j('J3', 'seta2.b', 0.8, 0.7), s('seta2', 0.8, 0.7)]),
        passo(4, [b('seta3.b', { dur: 0.3 }), s('seta3', 0.3), b(pt(14, 3), { dur: 0.5, atraso: 0.3 }), j('J3', 'J3', 1.0, 1.0)]),
      ],
    },
  },
  {
    numero: 1104, secao: 11, nivel: 'Intermediário',
    nome: 'Sinal de bloqueio para a defesa',
    jogadores: '4 jogadores (1 bloqueador, 2 defensores e 1 atacante)', tempo: '10 minutos', material: '8 bolas',
    objetivo: 'O bloqueador mostra, com a mão atrás das costas, o que vai fechar, e a defesa se posiciona de acordo.',
    comoMontar: 'B1 bloqueia na posição 2. J1 defende na zona 1 e J2 na zona 5. Do outro lado, J3 ataca na entrada de rede deles. Combinem: 1 dedo = fecho a paralela; punho fechado = fecho a diagonal.',
    passoAPasso: [
      'Antes da bola, B1 mostra o sinal com a mão atrás das costas, virada para a própria quadra.',
      'J1 e J2 confirmam com "ok!" e se posicionam: se B1 fecha a paralela, J2 cobre a diagonal com mais atenção, e vice-versa.',
      'Alguém levanta para J3, que ataca.',
      'Quem estiver no lado aberto defende. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'O sinal é mostrado de costas para o adversário.',
      'Os defensores sempre confirmam que viram.',
      'O bloqueador cumpre o que sinalizou, mesmo que pareça errado na hora.',
    ],
    erroComum: 'B1 mudar o bloqueio na hora e a defesa ficar no lugar errado. Corrija valendo ponto para o ataque sempre que o bloqueio não cumprir o sinal.',
    variacaoFacil: 'Sinal falado em vez de mostrado.',
    variacaoDificil: 'Dois bloqueadores, cada um com seu sinal.',
    meta: '8 bolas seguidas com bloqueio e defesa combinados.',
    cena: {
      jogadores: [
        { id: 'B1', x: 8.4, y: 7.6 }, { id: 'J1', x: 2.4, y: 7.6 }, { id: 'J2', x: 3, y: 1.6 },
        { id: 'J3', x: 10.4, y: 7.8, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [10.1, 7.6], para: [3.3, 1.8], numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [3.3, 1.8], para: [5.8, 4.4], curva: -0.5, numero: 2 },
      ],
      textos: [{ t: '1 DEDO = PARALELA', x: 5.2, y: 9.5 }, { t: 'PUNHO = DIAGONAL', x: 5.2, y: 6.2 }],
    },
    animacao: {
      bolaInicial: naMao('J3', 1, -3),
      passos: [
        esperar(1, 1.4),
        passo(2, [j('J2', pt(3.4, 1.4), 0.6), j('J1', pt(2.2, 8), 0.6)]),
        esperar(3, 0.6),
        passo(4, [b('seta1.b', { dur: 0.7 }), s('seta1', 0.7), b('seta2.b', { alta: true, dur: 1.2, atraso: 0.7 }), s('seta2', 1.2, 0.7)]),
      ],
    },
  },
  {
    numero: 1105, secao: 11, nivel: 'Intermediário',
    nome: '"Largou!": o aviso da rede para o fundo',
    jogadores: '4 jogadores (1 jogador da rede, 2 do fundo e 1 atacante)', tempo: '10 minutos', material: '8 bolas',
    objetivo: 'O jogador da rede que vê a largada primeiro avisa o fundo, ganhando um passo de vantagem.',
    comoMontar: 'J1 fica na posição 4, perto da linha dos 3 metros. J2 e J3 defendem no fundo. Do outro lado, J4 ataca ou larga, alternando.',
    passoAPasso: [
      'J4 se prepara para atacar.',
      'Se J4 larga, J1 grita "largou!" no instante do toque na bola.',
      'J1 e o defensor do fundo mais perto saem para a bola; o primeiro a chegar defende alto.',
      'Se J4 ataca forte, ninguém grita e o fundo defende normalmente. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'Quem está mais perto da rede vê a largada antes.',
      'O aviso é no toque da bola, não quando ela já está caindo.',
      'Quem chega primeiro, defende; o outro cobre.',
    ],
    erroComum: 'Os defensores do fundo esperarem o aviso e saírem atrasados. Corrija combinando que o aviso confirma, mas a leitura do braço do atacante continua.',
    variacaoFacil: 'J4 só larga.',
    variacaoDificil: 'J4 também pode fingir a largada e atacar forte.',
    meta: 'Recuperar 6 de 8 largadas.',
    cena: {
      jogadores: [{ id: 'J1', x: 6.4, y: 1.8 }, { id: 'J2', x: 2.5, y: 2.5 }, { id: 'J3', x: 2.5, y: 6.5 }, { id: 'J4', x: 10.3, y: 4.5, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [10, 4.4], para: [7.2, 3.6], curva: 0.5, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [6.6, 2.2], para: [7, 3.2], numero: 1 },
        { id: 'seta3', tipo: 'jogador', de: [2.9, 2.8], para: [5.4, 3.4], numero: 2 },
      ],
      textos: [{ t: '"LARGOU!"', x: 5.4, y: 0.6 }],
    },
    animacao: {
      bolaInicial: naMao('J4', -1, -4),
      passos: [
        esperar(1, 1.0),
        passo(2, [b('seta1.b', { alta: true, dur: 1.0 }), s('seta1', 1.0)]),
        passo(3, [j('J1', 'seta2.b', 0.7), s('seta2', 0.7), j('J2', 'seta3.b', 0.9), s('seta3', 0.9), b(pt(5.4, 4.8), { alta: true, dur: 1.0, atraso: 0.8 })], { junto: 0.2 }),
        passo(4, [j('J1', 'J1', 0.8), j('J2', 'J2', 0.8)]),
      ],
    },
  },
  {
    numero: 1106, secao: 11, nivel: 'Intermediário',
    nome: '"Cobre!": proteger quem ataca',
    jogadores: '5 jogadores (1 levantador, 1 atacante, 2 na cobertura e 1 bloqueador)', tempo: '10 minutos', material: '8 bolas',
    objetivo: 'Chamar a cobertura no momento do levantamento, para ninguém ficar parado assistindo o ataque.',
    comoMontar: 'L levanta para J1 na posição 4. J2 e J3 ficam no meio da quadra. Do outro lado, B1 bloqueia com as mãos firmes e devolve algumas bolas.',
    passoAPasso: [
      'L levanta para J1 e grita "cobre!".',
      'J2 e J3 se aproximam de J1, baixos, um perto da rede e outro mais atrás.',
      'J1 ataca contra o bloqueio de B1.',
      'Se a bola voltar do bloqueio, a cobertura defende e o time ataca de novo. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'O grito sai junto com o levantamento.',
      'Cobertura baixa, com os braços prontos.',
      'Depois da cobertura, todos voltam para suas posições.',
    ],
    erroComum: 'A cobertura chegar em pé e a bola do bloqueio passar por baixo. Corrija pedindo que os dois toquem o chão com a mão ao chegar.',
    variacaoFacil: 'B1 devolve a bola lançando, sempre para o mesmo lugar.',
    variacaoDificil: 'A cobertura é chamada pelo próprio atacante, que diz "cobre!" na passada.',
    meta: 'Cobertura montada em 8 de 8 ataques e 4 bolas recuperadas.',
    cena: {
      jogadores: [
        { id: 'L', x: 8.1, y: 5.8, rotulo: 'L' }, { id: 'J1', x: 7.8, y: 1.2 }, { id: 'J2', x: 4.5, y: 3.5 }, { id: 'J3', x: 3, y: 5.5 },
        { id: 'B1', x: 9.8, y: 1.2, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [7.8, 5.5], para: [7.9, 1.6], curva: 0.6, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [4.8, 3.3], para: [6.6, 2.4], numero: 1 },
        { id: 'seta3', tipo: 'jogador', de: [3.3, 5.2], para: [5, 2], numero: 2 },
      ],
      textos: [{ t: '"COBRE!"', x: 10.4, y: 6.8 }],
    },
    animacao: {
      bolaInicial: naMao('L', -1, -2),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.5 }), s('seta1', 1.5)]),
        passo(2, [j('J2', 'seta2.b', 0.9), s('seta2', 0.9), j('J3', 'seta3.b', 1.1), s('seta3', 1.1)], { junto: 0.2 }),
        passo(3, [b(pt(9.6, 1.2), { dur: 0.3 }), b(pt(6.4, 2.6), { dur: 0.6, atraso: 0.3 })]),
        passo(4, [b(pt(6, 4.5), { alta: true, dur: 1.1 }), j('J2', 'J2', 1.0, 1.2), j('J3', 'J3', 1.0, 1.2)]),
      ],
    },
  },
  {
    numero: 1107, secao: 11, nivel: 'Intermediário',
    nome: 'Contar o bloqueio: "um!" ou "dois!"',
    jogadores: '5 jogadores (1 levantador, 1 atacante e 3 bloqueadores)', tempo: '10 minutos', material: '8 bolas',
    objetivo: 'O levantador (ou o colega mais perto) avisa o atacante quantos bloqueadores vão subir, para ele escolher o golpe.',
    comoMontar: 'L levanta para J1 na posição 4. Do outro lado, B1, B2 e B3 decidem a cada bola se bloqueiam com um ou com dois.',
    passoAPasso: [
      'L levanta para J1.',
      'L olha o bloqueio e grita "um!" (bloqueio simples) ou "dois!" (bloqueio duplo).',
      'Com "um!", J1 ataca forte no lado aberto; com "dois!", usa a largada ou a mão de fora.',
      'Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'O aviso precisa chegar durante a passada do atacante.',
      'O atacante já tem a decisão pronta para cada aviso.',
      'Quem avisa olha o bloqueio, não a bola.',
    ],
    erroComum: 'O aviso chegar tarde, com o atacante já no ar. Corrija pedindo que L grite no instante em que a bola sai das mãos dele.',
    variacaoFacil: 'Os bloqueadores avisam antes quantos vão subir.',
    variacaoDificil: 'O central dos bloqueadores pode chegar atrasado e transformar "um" em "dois".',
    meta: 'Escolher o golpe certo para o aviso em 6 de 8 ataques.',
    cena: {
      jogadores: [
        { id: 'L', x: 8.1, y: 5.8, rotulo: 'L' }, { id: 'J1', x: 5, y: -0.3 },
        { id: 'B1', x: 9.8, y: 1.2, time: 'b' }, { id: 'B2', x: 9.8, y: 4.5, time: 'b', rotulo: 'C' }, { id: 'B3', x: 9.8, y: 7.8, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [7.8, 5.5], para: [7.8, 1.3], curva: 0.6, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [9.8, 4], para: [9.8, 2.1], numero: 1 },
        { id: 'seta3', tipo: 'jogador', de: [5.3, 0], para: [7.4, 1.1], numero: 2 },
      ],
      textos: [{ t: '"DOIS!"', x: 5.4, y: 6.8 }],
    },
    animacao: {
      bolaInicial: naMao('L', -1, -2),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6), j('J1', 'seta3.b', 1.0, 0.7), s('seta3', 1.0, 0.7)]),
        passo(2, [j('B2', 'seta2.b', 0.8), s('seta2', 0.8)], { junto: 0.4 }),
        passo(3, [b(pt(12.4, 3.4), { alta: true, dur: 0.8 })]),
        passo(4, [j('B2', 'B2', 1.0), j('J1', 'J1', 1.0)]),
      ],
    },
  },
  {
    numero: 1108, secao: 11, nivel: 'Intermediário',
    nome: 'O capitão confere o rodízio e o sacador',
    jogadores: '6 jogadores', tempo: '8 minutos', material: '1 bola',
    objetivo: 'Criar a rotina do capitão antes de cada saque: conferir as posições e dizer quem saca.',
    comoMontar: 'Seis jogadores nas posições. Um deles é o capitão. O treinador muda o rodízio a cada rodada.',
    passoAPasso: [
      'O treinador diz: "roda!" e o time gira uma posição.',
      'O capitão olha o time e diz em voz alta quem saca e quem é o levantador da vez.',
      'Cada jogador confere o vizinho da frente (ou de trás) e o do lado, e diz "ok!".',
      'Só depois dos 6 "ok!" o sacador vai para a linha de fundo. Repetir em todos os rodízios.',
    ],
    pontosAtencao: [
      'Rotina rápida: menos de 8 segundos.',
      'Todos falam, não só o capitão.',
      'Dúvida resolvida antes do apito, nunca depois.',
    ],
    erroComum: 'Só o capitão olhar e os outros ficarem distraídos. Corrija exigindo os 6 "ok!" em voz alta.',
    variacaoFacil: 'Usar cones numerados nas posições.',
    variacaoDificil: 'O treinador coloca um jogador fora de ordem de propósito, e o time tem que achar.',
    meta: 'Fazer a rotina em menos de 8 segundos nos 6 rodízios.',
    cena: {
      jogadores: [
        { id: 'P4', x: 7.3, y: 1.5, rotulo: '4' }, { id: 'P3', x: 7.3, y: 4.5, rotulo: '3' }, { id: 'P2', x: 7.3, y: 7.5, rotulo: '2' },
        { id: 'P5', x: 2.5, y: 1.5, rotulo: '5' }, { id: 'P6', x: 2.5, y: 4.5, rotulo: 'K' }, { id: 'P1', x: 2.5, y: 7.5, rotulo: '1' },
      ],
      setas: [
        { id: 'seta1', tipo: 'jogador', de: [2.9, 4.2], para: [6.8, 1.7] },
        { id: 'seta2', tipo: 'jogador', de: [2.9, 4.8], para: [2.6, 6.9] },
      ],
      textos: [{ t: 'K = CAPITÃO', x: 4.9, y: 3.2 }, { t: '"QUEM SACA É O 1!"', x: 4.9, y: 8.8 }],
    },
    animacao: {
      passos: [
        esperar(1, 1.0),
        passo(2, [s('seta1', 0.8), s('seta2', 0.8, 0.4)]),
        esperar(3, 1.2),
        passo(4, [j('P1', pt(-0.8, 7.5), 1.2)]),
      ],
    },
  },
  {
    numero: 1109, secao: 11, nivel: 'Avançado',
    nome: 'Jogo falado: ponto só vale com chamada',
    jogadores: '12 jogadores (6 contra 6)', tempo: '20 minutos', material: '1 bola',
    objetivo: 'Jogar com a comunicação como regra: toda bola precisa de chamada, ou o ponto não vale.',
    comoMontar: 'Dois times de 6 jogam normalmente. O treinador fica de fora ouvindo as chamadas.',
    passoAPasso: [
      'Cada toque na bola precisa de uma chamada: "minha!" no passe, a jogada no levantamento e "cobre!" no ataque.',
      'Se um time ganhar o rali sem as chamadas, o ponto não conta.',
      'Se perder o rali e também faltar chamada, o adversário ganha 2 pontos.',
      'Set até 15 pontos. No fim, cada time diz qual chamada mais esqueceu.',
    ],
    pontosAtencao: [
      'Falar alto e curto.',
      'Todos chamam, não só o levantador.',
      'Depois do ponto, todos se juntam e combinam a próxima.',
    ],
    erroComum: 'Os jogadores falarem só nos primeiros ralis e depois esquecerem. Corrija com o treinador anulando o ponto na hora, desde o começo.',
    variacaoFacil: 'Só a chamada "minha!" é obrigatória.',
    variacaoDificil: 'Também é obrigatória a chamada do bloqueio ("um!" ou "dois!").',
    meta: 'Terminar o set com no máximo 2 pontos anulados.',
    cena: {
      jogadores: [
        { id: 'A4', x: 7.3, y: 1.5 }, { id: 'A3', x: 7.3, y: 4.5 }, { id: 'A2', x: 7.3, y: 7.5 },
        { id: 'A5', x: 2.5, y: 1.5 }, { id: 'A6', x: 2.5, y: 4.5 }, { id: 'A1', x: 2.5, y: 7.5 },
        { id: 'B2', x: 10.7, y: 1.5, time: 'b' }, { id: 'B3', x: 10.7, y: 4.5, time: 'b' }, { id: 'B4', x: 10.7, y: 7.5, time: 'b' },
        { id: 'B1', x: 15.5, y: 1.5, time: 'b' }, { id: 'B6', x: 15.5, y: 4.5, time: 'b' }, { id: 'B5', x: 15.5, y: 7.5, time: 'b' },
      ],
      setas: [{ id: 'seta1', tipo: 'bola', de: [15.1, 1.6], para: [2.9, 4.3], curva: 0.3, numero: 1 }],
      textos: [{ t: '"MINHA!"', x: 2.5, y: 3.2 }],
    },
    animacao: {
      bolaInicial: naMao('B1', -1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.7 }), s('seta1', 1.7)]),
        esperar(2, 1.0),
        esperar(3, 1.0),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 1110, secao: 11, nivel: 'Avançado',
    nome: 'Mudança de jogada no meio do rali',
    jogadores: '6 jogadores (1 levantador, 3 atacantes, 1 passador e 1 lançador)', tempo: '15 minutos', material: '8 bolas',
    objetivo: 'Trocar a jogada combinada quando o passe sai ruim, com uma palavra que todos entendem ("alta!").',
    comoMontar: 'L, três atacantes (posições 4, 3 e 2) e um passador. Antes de cada bola, L combina uma jogada rápida. O lançador do outro lado manda bolas boas e ruins.',
    passoAPasso: [
      'L combina a jogada (por exemplo, "rápida" com o central).',
      'O lançador manda a bola; o passador recebe.',
      'Se o passe sair longe da rede, L grita "alta!" e todos mudam: o central só finge, e as pontas se preparam para a bola alta.',
      'L levanta e o atacante certo ataca. Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'A palavra de mudança é uma só e vale para todo o time.',
      'Quem ouve "alta!" ajusta a passada para uma bola mais lenta.',
      'O central continua fazendo a passada para enganar o bloqueio.',
    ],
    erroComum: 'O central saltar para a rápida mesmo com o passe ruim. Corrija valendo ponto para a defesa toda vez que o central saltar sem bola depois do "alta!".',
    variacaoFacil: 'Mudança sempre para a bola alta na posição 4.',
    variacaoDificil: 'L muda para jogadas diferentes, com códigos combinados.',
    meta: 'Mudar a jogada certa em 8 de 10 passes ruins.',
    cena: {
      jogadores: [
        { id: 'L', x: 8.1, y: 5.8, rotulo: 'L' }, { id: 'J1', x: 2.5, y: 6 }, { id: 'P', x: 5.4, y: 0.4, rotulo: 'P' }, { id: 'C', x: 5.8, y: 4.2, rotulo: 'C' }, { id: 'O', x: 5.4, y: 8.6, rotulo: 'O' },
        { id: 'J2', x: 13, y: 4.5, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [12.6, 4.4], para: [2.9, 5.8], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [2.9, 5.8], para: [5, 4.9], curva: -0.5, numero: 2 },
        { id: 'seta3', tipo: 'jogador', de: [7.9, 5.9], para: [5.6, 5.1], numero: 1 },
        { id: 'seta4', tipo: 'bola', de: [5, 4.7], para: [7.6, 1.2], curva: 0.6, numero: 3 },
      ],
      textos: [{ t: '"ALTA!"', x: 4.4, y: 7 }],
    },
    animacao: {
      bolaInicial: naMao('J2', -1),
      passos: [
        esperar(1, 1.0),
        passo(2, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6), b('seta2.b', { alta: true, dur: 1.1, atraso: 1.7 }), s('seta2', 1.1, 1.7)]),
        passo(3, [j('L', 'seta3.b', 0.8), s('seta3', 0.8), j('C', pt(7.5, 4.4), 0.8)]),
        passo(4, [b('seta4.b', { alta: true, dur: 1.4 }), s('seta4', 1.4), j('P', pt(7.4, 1.1), 1.0, 0.6), b(pt(15, 6), { dur: 0.5, atraso: 1.6 })]),
      ],
    },
  },
]
