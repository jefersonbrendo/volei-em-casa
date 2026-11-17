/**
 * Seção 10 · Transição e contra-ataque (quadra). Referência: seção Side-out da areia, adaptada ao 6×6:
 * side-out (receber o saque e atacar) e contra-ataque (defender e atacar de novo).
 * O time que treina fica à esquerda (azul): posição 4 em cima, 2 embaixo, zona do levantador entre 2 e 3.
 */
import { pt } from '../../lib/quadra/cena'
import { b, esperar, j, passo, s } from '../animacoesLotes/ajudantes'
import { naMao, type ExercicioComDesenho } from './tipos'

const ZONA_LEV = { id: 'zonaL', x: 6.6, y: 4.6, l: 2.4, a: 2.6, rotulo: 'LEVANTADOR' }

export const TRANSICAO: ExercicioComDesenho[] = [
  {
    numero: 1001, secao: 10, nivel: 'Iniciante',
    nome: 'Side-out em trio: receber, levantar e atacar',
    jogadores: '4 jogadores (1 sacador, 1 passador, 1 levantador e 1 atacante)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Fazer a sequência básica do side-out: a recepção chega no levantador e a bola termina em ataque.',
    comoMontar: 'Do lado do time: J1 recebe na zona 6, L fica na zona do levantador e J2 espera para atacar na posição 4. Do outro lado, J3 saca.',
    passoAPasso: [
      'J3 saca na direção de J1.',
      'J1 recebe de manchete alta para a zona do levantador.',
      'L levanta alto para a posição 4.',
      'J2 ataca (ou manda a bola para o outro lado com segurança). Depois de 8 saques, rodam.',
    ],
    pontosAtencao: [
      'Cada toque prepara o próximo: passe alto, levantamento afastado da rede, ataque dentro.',
      'J2 só começa a passada quando a bola sai das mãos de L.',
      'Contar os toques em voz alta: "um, dois, três!".',
    ],
    erroComum: 'Querer fazer tudo rápido e errar o passe. Corrija valendo a jogada só quando os três toques são bons, mesmo que lentos.',
    variacaoFacil: 'J3 lança a bola em vez de sacar.',
    variacaoDificil: 'J3 saca forte e conta ponto para cada side-out errado.',
    meta: 'Completar 6 de 8 side-outs com ataque dentro da quadra.',
    cena: {
      jogadores: [{ id: 'J1', x: 2.5, y: 4.5 }, { id: 'L', x: 8.1, y: 5.8, rotulo: 'L' }, { id: 'J2', x: 4.8, y: -0.3 }, { id: 'J3', x: 18.8, y: 4.5, time: 'b' }],
      zonas: [ZONA_LEV],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [18.4, 4.4], para: [2.9, 4.4], curva: 0.3, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [2.9, 4.6], para: [7.8, 5.7], curva: -0.4, numero: 2 },
        { id: 'seta3', tipo: 'bola', de: [7.8, 5.5], para: [7.8, 1.2], curva: 0.6, numero: 3 },
        { id: 'seta4', tipo: 'jogador', de: [5.1, 0], para: [7.4, 1.1], numero: 1 },
        { id: 'seta5', tipo: 'bola', de: [8, 1.1], para: [15.5, 6], numero: 4 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J3', -1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8)]),
        passo(2, [b('seta2.b', { alta: true, dur: 1.3 }), s('seta2', 1.3)]),
        passo(3, [b('seta3.b', { alta: true, dur: 1.5 }), s('seta3', 1.5), j('J2', 'seta4.b', 1.0, 0.6), s('seta4', 1.0, 0.6)]),
        passo(4, [b('seta5.b', { dur: 0.6 }), s('seta5', 0.6), j('J2', 'J2', 1.2, 0.8)]),
      ],
    },
  },
  {
    numero: 1002, secao: 10, nivel: 'Iniciante',
    nome: 'Contra-ataque em trio: defender, levantar e atacar',
    jogadores: '4 jogadores (1 atacante adversário, 1 defensor, 1 levantador e 1 atacante)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Transformar a defesa em ponto: defesa alta para o meio, levantamento e contra-ataque.',
    comoMontar: 'Do lado do time: J1 defende no fundo, na zona 5, L fica na zona do levantador e J2 espera na posição 4, recuado. Do outro lado, J3 ataca em pé perto da linha dos 3 metros.',
    passoAPasso: [
      'J3 ataca em pé na direção de J1.',
      'J1 defende alto, para o meio da quadra.',
      'L vai até a bola e levanta para a posição 4; J2 abre para fora e faz a passada.',
      'J2 contra-ataca. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'A defesa não precisa ser perfeita: alta e no meio já basta.',
      'O atacante abre para fora da quadra assim que a bola é defendida.',
      'L chega na bola parado e virado para a posição 4.',
    ],
    erroComum: 'J2 ficar parado na rede esperando a defesa e não ter espaço para atacar. Corrija pedindo que J2 comece recuado, fora da linha dos 3 metros.',
    variacaoFacil: 'J3 lança a bola com as mãos.',
    variacaoDificil: 'J3 alterna ataque forte e largada.',
    meta: 'Contra-atacar com sucesso 5 de 8 bolas.',
    cena: {
      jogadores: [{ id: 'J1', x: 2.5, y: 1.8 }, { id: 'L', x: 8.1, y: 5.8, rotulo: 'L' }, { id: 'J2', x: 5, y: 0.6 }, { id: 'J3', x: 12.4, y: 4.5, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [12, 4.3], para: [2.9, 1.9], numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [2.9, 1.9], para: [5.6, 4.8], curva: -0.5, numero: 2 },
        { id: 'seta3', tipo: 'jogador', de: [7.8, 5.6], para: [6, 4.9], numero: 1 },
        { id: 'seta4', tipo: 'bola', de: [5.6, 4.6], para: [7.8, 1.2], curva: 0.6, numero: 3 },
        { id: 'seta5', tipo: 'jogador', de: [5.3, 0.6], para: [7.4, 1.1], numero: 2 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J3', -1),
      passos: [
        passo(1, [b(naMao('J3', -1, -7), { dur: 0.5 }), b('seta1.b', { dur: 0.6, atraso: 0.6 }), s('seta1', 0.6, 0.6)]),
        passo(2, [b('seta2.b', { alta: true, dur: 1.3 }), s('seta2', 1.3), j('L', 'seta3.b', 1.0, 0.2), s('seta3', 1.0, 0.2)]),
        passo(3, [b('seta4.b', { alta: true, dur: 1.4 }), s('seta4', 1.4), j('J2', 'seta5.b', 1.0, 0.6), s('seta5', 1.0, 0.6)]),
        passo(4, [b(pt(16, 6), { dur: 0.6 }), j('L', 'L', 1.0, 0.6), j('J2', 'J2', 1.0, 0.6)]),
      ],
    },
  },
  {
    numero: 1003, secao: 10, nivel: 'Intermediário',
    nome: 'Transição do central: bloquear, retirar e atacar a rápida',
    jogadores: '4 jogadores (1 central, 1 levantador, 1 lançador e 1 defensor)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Depois de bloquear, o central retira rápido e chega a tempo de atacar a bola rápida no contra-ataque.',
    comoMontar: 'C (central) fica no meio da rede. L fica na zona do levantador. J1 defende no fundo. Do outro lado, J2 lança bolas de ataque por cima da rede.',
    passoAPasso: [
      'C salta para bloquear no meio.',
      'Cai e retira em diagonal até perto da linha dos 3 metros, de frente para a quadra.',
      'J2 lança uma bola para J1, que defende para L.',
      'C faz a passada curta e salta para a bola rápida; L coloca a bola na mão dele. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'Retirar pouco: o central ataca perto do levantador, não precisa de passada longa.',
      'Olhar a defesa enquanto retira, para saber quando sair.',
      'Saltar antes do levantamento, como na bola rápida do side-out.',
    ],
    erroComum: 'O central ficar parado na rede depois do bloqueio. Corrija pedindo que ele toque a linha dos 3 metros com o pé antes de cada ataque.',
    variacaoFacil: 'Meia-bola em vez de bola rápida.',
    variacaoDificil: 'L escolhe entre a rápida e a ponta, de acordo com a defesa.',
    meta: 'Chegar a tempo de atacar a rápida em 6 de 8 contra-ataques.',
    cena: {
      jogadores: [{ id: 'C', x: 8.4, y: 4.5, rotulo: 'C' }, { id: 'L', x: 8.1, y: 6.3, rotulo: 'L' }, { id: 'J1', x: 2.5, y: 4.5 }, { id: 'J2', x: 12.4, y: 4.5, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'jogador', de: [8.1, 4.2], para: [6.2, 3.7], numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [12, 4.4], para: [2.9, 4.3], curva: 0.4, numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [2.9, 4.5], para: [7.8, 6], curva: -0.5, numero: 2 },
        { id: 'seta4', tipo: 'jogador', de: [6.4, 3.9], para: [7.9, 4.8], numero: 2 },
        { id: 'seta5', tipo: 'bola', de: [8, 6], para: [8.2, 5.1], numero: 3 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J2', -1),
      passos: [
        esperar(1, 0.8),
        passo(2, [j('C', 'seta1.b', 0.9), s('seta1', 0.9)]),
        passo(3, [b('seta2.b', { alta: true, dur: 1.4 }), s('seta2', 1.4), b('seta3.b', { alta: true, dur: 1.3, atraso: 1.5 }), s('seta3', 1.3, 1.5)]),
        passo(4, [j('C', 'seta4.b', 0.7), s('seta4', 0.7), b('seta5.b', { dur: 0.3, atraso: 0.6 }), s('seta5', 0.3, 0.6), b(pt(13.5, 3), { dur: 0.5, atraso: 0.9 })], { junto: 0.4 }),
      ],
    },
  },
  {
    numero: 1004, secao: 10, nivel: 'Intermediário',
    nome: 'Ponteiro que não bloqueia: recuar, defender e atacar',
    jogadores: '4 jogadores (1 ponteiro, 1 levantador e 2 adversários)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Quando o ataque adversário vai para o outro lado da quadra, o ponteiro recua para defender e já fica pronto para o contra-ataque.',
    comoMontar: 'P (ponteiro) fica na posição 4, na rede. L fica na zona do levantador. Do outro lado, um adversário levanta e outro ataca do lado oposto ao de P (na entrada de rede deles).',
    passoAPasso: [
      'O adversário levanta para o lado contrário ao de P.',
      'P recua da rede até a linha dos 3 metros, em base, cuidando da largada e da diagonal curta.',
      'O adversário ataca ou larga; se a bola vier para P, ele defende para L.',
      'P abre para fora e ataca na posição 4 com o levantamento de L. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'Recuar de frente para a quadra adversária, olhando a bola.',
      'Parar em base antes do ataque adversário.',
      'Da defesa para o ataque: abrir para fora antes de começar a passada.',
    ],
    erroComum: 'P ficar na rede sem função quando o ataque é do outro lado. Corrija com P tocando a linha dos 3 metros sempre que a bola for levantada para longe dele.',
    variacaoFacil: 'O adversário só larga, sem ataque forte.',
    variacaoDificil: 'O adversário alterna os lados, e P tem que decidir se bloqueia ou recua.',
    meta: 'Recuar e contra-atacar em 6 de 8 jogadas.',
    cena: {
      jogadores: [
        { id: 'P', x: 8.3, y: 1.5, rotulo: 'P' }, { id: 'L', x: 8.1, y: 5.8, rotulo: 'L' },
        { id: 'A1', x: 9.9, y: 3.2, time: 'b', rotulo: 'L' }, { id: 'A2', x: 10.4, y: 7.8, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [10.2, 3.6], para: [10.2, 7.4], curva: -0.6, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [8, 1.7], para: [6.2, 2.3], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [10, 7.6], para: [6, 2.6], curva: 0.3, numero: 2 },
        { id: 'seta4', tipo: 'bola', de: [6, 2.6], para: [7.8, 5.5], curva: -0.5, numero: 3 },
        { id: 'seta5', tipo: 'bola', de: [7.8, 5.5], para: [7.8, 1.2], curva: 0.6, numero: 4 },
      ],
    },
    animacao: {
      bolaInicial: naMao('A1', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6)]),
        passo(2, [j('P', 'seta2.b', 0.9), s('seta2', 0.9)], { junto: 0.4 }),
        passo(3, [b('seta3.b', { alta: true, dur: 0.9 }), s('seta3', 0.9), b('seta4.b', { alta: true, dur: 1.2, atraso: 0.9 }), s('seta4', 1.2, 0.9)]),
        passo(4, [j('P', pt(5.4, 0.4), 0.7), b('seta5.b', { alta: true, dur: 1.4 }), s('seta5', 1.4), j('P', pt(7.4, 1.1), 0.8, 0.8)]),
      ],
    },
  },
  {
    numero: 1005, secao: 10, nivel: 'Intermediário',
    nome: 'Quando o levantador defende: outro levanta',
    jogadores: '4 jogadores (1 levantador, 1 oposto ou líbero, 1 atacante e 1 adversário)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Combinar quem levanta quando o levantador faz a primeira defesa, sem o time ficar perdido.',
    comoMontar: 'L defende na posição 1, no fundo. O (oposto) ou o líbero fica no meio da quadra, perto da linha dos 3 metros. J1 espera para atacar na posição 4. Do outro lado, J2 ataca em pé na direção de L.',
    passoAPasso: [
      'J2 ataca em pé na direção de L, no fundo.',
      'L defende alto para o meio da quadra e grita "levanta!".',
      'O (ou o líbero) vai até a bola e levanta alto para a posição 4 (o líbero levanta de manchete ou de toque atrás da linha dos 3 metros).',
      'J1 ataca. Depois de 8 bolas, rodam as funções.',
    ],
    pontosAtencao: [
      'Regra combinada: se L defende, quem levanta é sempre a mesma pessoa.',
      'Levantamento alto e afastado da rede, para dar tempo ao atacante.',
      'O líbero só pode levantar de toque à frente da linha dos 3 metros se a bola não for atacada acima da rede: atrás dela, pode tudo.',
    ],
    erroComum: 'Dois jogadores irem levantar a mesma bola. Corrija com a chamada "levanta!" de L e o nome de quem vai.',
    variacaoFacil: 'J2 lança a bola em vez de atacar.',
    variacaoDificil: 'A defesa de L vai para lugares diferentes, e quem levanta tem que correr.',
    meta: 'Completar 6 de 8 contra-ataques com o levantamento de outro jogador.',
    cena: {
      jogadores: [{ id: 'L', x: 2.5, y: 7.5, rotulo: 'L' }, { id: 'O', x: 5.2, y: 5.2, rotulo: 'O' }, { id: 'J1', x: 5, y: 0.5 }, { id: 'J2', x: 12.4, y: 4.5, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [12, 4.6], para: [2.9, 7.3], numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [2.9, 7.3], para: [4.6, 4.2], curva: -0.5, numero: 2 },
        { id: 'seta3', tipo: 'jogador', de: [5.1, 4.9], para: [4.9, 4.4], numero: 1 },
        { id: 'seta4', tipo: 'bola', de: [4.7, 4.2], para: [7.6, 1.2], curva: 0.6, numero: 3 },
        { id: 'seta5', tipo: 'jogador', de: [5.3, 0.6], para: [7.3, 1.1], numero: 2 },
      ],
      textos: [{ t: '"LEVANTA!"', x: 2.5, y: 8.8 }],
    },
    animacao: {
      bolaInicial: naMao('J2', -1),
      passos: [
        passo(1, [b(naMao('J2', -1, -7), { dur: 0.5 }), b('seta1.b', { dur: 0.6, atraso: 0.6 }), s('seta1', 0.6, 0.6)]),
        passo(2, [b('seta2.b', { alta: true, dur: 1.3 }), s('seta2', 1.3)]),
        passo(3, [j('O', 'seta3.b', 0.5), s('seta3', 0.5), b('seta4.b', { alta: true, dur: 1.5, atraso: 0.5 }), s('seta4', 1.5, 0.5), j('J1', 'seta5.b', 1.0, 1.0), s('seta5', 1.0, 1.0)]),
        passo(4, [b(pt(15.5, 6.5), { dur: 0.6 }), j('O', 'O', 1.0, 0.6), j('J1', 'J1', 1.0, 0.6)]),
      ],
    },
  },
  {
    numero: 1006, secao: 10, nivel: 'Intermediário',
    nome: 'Bola de graça: organizar o ataque',
    jogadores: '7 jogadores (6 do time e 1 lançador)', tempo: '12 minutos', material: '10 bolas',
    objetivo: 'Aproveitar a bola fácil que o adversário manda (sem ataque): o time grita "de graça!", se arruma e ataca com tudo.',
    comoMontar: 'O time em posição de defesa. Do outro lado, J1 manda bolas altas e fáceis por cima da rede, com a mão ou de manchete.',
    passoAPasso: [
      'J1 manda uma bola alta e fácil para o lado do time.',
      'Quem vê primeiro grita "de graça!": os atacantes da rede recuam para fora da linha dos 3 metros e L corre para a zona do levantador.',
      'Um passador recebe de manchete para L.',
      'L levanta para quem estiver mais bem colocado e o time ataca. Depois de 10 bolas, o time roda.',
    ],
    pontosAtencao: [
      'Bola de graça é chance de ponto: atacar com combinação, não só com bola alta.',
      'Atacantes recuam rápido para ter passada.',
      'O passe tem que ser perfeito: não há pressão do ataque adversário.',
    ],
    erroComum: 'O time continuar parado na posição de bloqueio e desperdiçar a bola fácil. Corrija com o grito obrigatório "de graça!" antes de qualquer toque.',
    variacaoFacil: 'Só 4 jogadores no time (L, um passador e dois atacantes).',
    variacaoDificil: 'J1 alterna bola de graça e ataque de verdade, e o time decide como se organizar.',
    meta: 'Fazer ponto em 7 de 10 bolas de graça.',
    cena: {
      jogadores: [
        { id: 'P4', x: 8.2, y: 1.5, rotulo: 'P' }, { id: 'P3', x: 8.2, y: 4.5, rotulo: 'C' }, { id: 'P2', x: 8.2, y: 7.5, rotulo: 'O' },
        { id: 'P5', x: 2.5, y: 1.5, rotulo: 'P' }, { id: 'P6', x: 2.5, y: 4.5, rotulo: 'Lb' }, { id: 'P1', x: 2.5, y: 7.5, rotulo: 'L' },
        { id: 'J1', x: 13, y: 4.5, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [12.6, 4.4], para: [2.9, 4.6], curva: 0.6, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [7.8, 1.6], para: [5.3, 0.8], numero: 1 },
        { id: 'seta3', tipo: 'jogador', de: [2.9, 7.3], para: [7.6, 6.1], numero: 2 },
        { id: 'seta4', tipo: 'jogador', de: [7.8, 4.5], para: [5.8, 4], numero: 3 },
      ],
      textos: [{ t: '"DE GRAÇA!"', x: 4.4, y: 8.7 }],
    },
    animacao: {
      bolaInicial: naMao('J1', -1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 2.0 }), s('seta1', 2.0)]),
        passo(2, [j('P4', 'seta2.b', 1.0), s('seta2', 1.0), j('P1', 'seta3.b', 1.1), s('seta3', 1.1), j('P3', 'seta4.b', 0.9), s('seta4', 0.9), j('P2', pt(5.8, 8.2), 1.0)], { junto: 0.3 }),
        passo(3, [b(pt(7.8, 5.8), { alta: true, dur: 1.3 })]),
        passo(4, [b(pt(7.6, 1.4), { alta: true, dur: 1.4 }), j('P4', pt(7.4, 1.2), 0.9, 0.6), b(pt(15.5, 6), { dur: 0.6, atraso: 1.5 })]),
      ],
    },
  },
  {
    numero: 1007, secao: 10, nivel: 'Intermediário',
    nome: 'Do saque direto para a defesa',
    jogadores: '4 jogadores (1 sacador, 1 adversário que recebe e ataca, 2 defensores)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Depois de sacar, entrar rápido na quadra e chegar parado na posição de defesa antes do ataque adversário.',
    comoMontar: 'J1 saca da posição 1. J2 defende na zona 5. Do outro lado, J3 recebe, levanta para si mesmo e ataca em pé.',
    passoAPasso: [
      'J1 saca para J3.',
      'Logo depois do saque, J1 entra na quadra e vai para a posição de defesa (zona 1), parando em base.',
      'J3 recebe, se ajeita e ataca em pé para o lado de J1 ou de J2.',
      'Quem estiver na direção da bola defende para o meio. Depois de 8 saques, rodam.',
    ],
    pontosAtencao: [
      'Não ficar admirando o saque: entrar já no passo seguinte.',
      'Parar em base antes do ataque adversário, mesmo que não esteja no lugar perfeito.',
      'Quem saca defende normalmente a zona 1.',
    ],
    erroComum: 'O sacador ficar parado atrás da linha olhando a bola. Corrija valendo ponto para J3 sempre que J1 não estiver dentro da quadra no momento do ataque.',
    variacaoFacil: 'J3 recebe e devolve a bola com as mãos, sem atacar.',
    variacaoDificil: 'J3 ataca de verdade, com levantamento de outro jogador.',
    meta: 'Estar parado na zona 1 antes do ataque em 7 de 8 saques.',
    cena: {
      jogadores: [{ id: 'J1', x: -0.8, y: 7.5 }, { id: 'J2', x: 2.5, y: 1.6 }, { id: 'J3', x: 14.5, y: 4.5, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [-0.4, 7.3], para: [14.1, 4.6], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [-0.4, 7.4], para: [2.3, 7.4], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [13.4, 4.4], para: [2.8, 7.2], numero: 2 },
      ],
      textos: [{ t: 'ZONA 1', x: 2.5, y: 8.7 }],
    },
    animacao: {
      bolaInicial: naMao('J1'),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.7 }), s('seta1', 1.7)]),
        passo(2, [j('J1', 'seta2.b', 1.0), s('seta2', 1.0)], { junto: 0.3 }),
        passo(3, [b(pt(13.6, 4.2), { alta: true, dur: 0.9 }), b('seta3.b', { dur: 0.6, atraso: 1.0 }), s('seta3', 0.6, 1.0)]),
        passo(4, [b(pt(5.5, 5), { alta: true, dur: 1.2 }), j('J1', 'J1', 1.0, 1.4)]),
      ],
    },
  },
  {
    numero: 1008, secao: 10, nivel: 'Avançado',
    nome: 'Contra-ataque com bola rápida depois da defesa perfeita',
    jogadores: '5 jogadores (1 atacante adversário, 1 defensor, 1 levantador, 1 central e 1 ponteiro)', tempo: '15 minutos', material: '10 bolas',
    objetivo: 'Quando a defesa chega perfeita no levantador, usar a bola rápida e não só a bola alta na ponta.',
    comoMontar: 'Do lado do time: J1 defende no fundo, L na zona do levantador, C retira do bloqueio para atacar a rápida e P abre na posição 4. Do outro lado, J2 ataca em pé.',
    passoAPasso: [
      'J2 ataca em pé na direção de J1; C e P se preparam fora da linha dos 3 metros.',
      'J1 defende para a zona do levantador.',
      'Se a defesa chegou perfeita, L usa a bola rápida com C; se chegou longe, levanta alto para P.',
      'O atacante escolhido ataca. Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'Os dois atacantes fazem a passada em todas as bolas: o bloqueio não sabe quem vai atacar.',
      'L decide pela qualidade da defesa, não pela preferência.',
      'C salta antes do levantamento, como sempre na rápida.',
    ],
    erroComum: 'O central não fazer a passada quando a defesa é ruim, entregando a jogada. Corrija combinando que C sempre ataca ou finge atacar.',
    variacaoFacil: 'J2 lança a bola alta e fácil, para a defesa chegar perfeita.',
    variacaoDificil: 'Um bloqueador do outro lado tenta adivinhar a escolha de L.',
    meta: 'Usar a bola rápida em pelo menos metade das defesas perfeitas e acertar 6 contra-ataques em 10.',
    cena: {
      jogadores: [
        { id: 'J1', x: 2.5, y: 4.5 }, { id: 'L', x: 8.1, y: 6, rotulo: 'L' }, { id: 'C', x: 5.6, y: 4.6, rotulo: 'C' }, { id: 'P', x: 5, y: 0.5, rotulo: 'P' },
        { id: 'J2', x: 12.4, y: 4.5, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [12, 4.4], para: [2.9, 4.4], numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [2.9, 4.4], para: [7.8, 5.9], curva: -0.5, numero: 2 },
        { id: 'seta3', tipo: 'jogador', de: [5.9, 4.7], para: [7.9, 5], numero: 1 },
        { id: 'seta4', tipo: 'jogador', de: [5.3, 0.6], para: [7.4, 1.1], numero: 2 },
        { id: 'seta5', tipo: 'bola', de: [8.1, 5.6], para: [8.2, 5.2], numero: 3 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J2', -1),
      passos: [
        passo(1, [b(naMao('J2', -1, -7), { dur: 0.5 }), b('seta1.b', { dur: 0.6, atraso: 0.6 }), s('seta1', 0.6, 0.6)]),
        passo(2, [b('seta2.b', { alta: true, dur: 1.4 }), s('seta2', 1.4), j('C', 'seta3.b', 0.8, 0.8), s('seta3', 0.8, 0.8), j('P', 'seta4.b', 1.0, 0.6), s('seta4', 1.0, 0.6)]),
        passo(3, [b('seta5.b', { dur: 0.3 }), s('seta5', 0.3)]),
        passo(4, [b(pt(14, 2.5), { dur: 0.5 }), j('C', 'C', 1.0, 0.6), j('P', 'P', 1.0, 0.6)]),
      ],
    },
  },
  {
    numero: 1009, secao: 10, nivel: 'Avançado',
    nome: 'Ondas: side-out e contra-ataque em seguida',
    jogadores: '12 jogadores (6 contra 6)', tempo: '20 minutos', material: '10 bolas',
    objetivo: 'Ganhar o side-out e logo depois o contra-ataque: o time só pontua se vencer as duas bolas seguidas.',
    comoMontar: 'Dois times de 6. O time A recebe o saque do time B. Assim que o primeiro rali acaba, o treinador lança uma segunda bola (de graça ou atacada) para o time A.',
    passoAPasso: [
      'O time B saca e o rali acontece normalmente.',
      'Quando o rali acaba, o treinador lança na hora uma segunda bola para o time A, que joga o contra-ataque.',
      'O time A só ganha a "onda" se vencer os dois ralis; se vencer um, ninguém pontua.',
      'A cada onda ganha, o time A roda. Quem completar 6 rodízios primeiro vence.',
    ],
    pontosAtencao: [
      'Reorganizar rápido depois do primeiro rali: a segunda bola vem logo.',
      'Comunicação alta para todo mundo saber sua função na segunda bola.',
      'A segunda bola costuma decidir: concentração até o fim.',
    ],
    erroComum: 'O time comemorar o primeiro ponto e ser surpreendido pela segunda bola. Corrija com o treinador lançando a segunda bola sempre no instante em que a primeira cai.',
    variacaoFacil: 'Segunda bola sempre de graça.',
    variacaoDificil: 'Segunda bola sempre atacada pelo time B.',
    meta: 'Ganhar 4 ondas seguidas em algum momento do jogo.',
    cena: {
      jogadores: [
        { id: 'A4', x: 7.3, y: 1.5, rotulo: 'P' }, { id: 'A3', x: 7.3, y: 4.5, rotulo: 'C' }, { id: 'A2', x: 7.3, y: 7.5, rotulo: 'O' },
        { id: 'A5', x: 2.5, y: 1.5, rotulo: 'P' }, { id: 'A6', x: 2.5, y: 4.5, rotulo: 'Lb' }, { id: 'A1', x: 2.5, y: 7.5, rotulo: 'L' },
        { id: 'B1', x: 18.8, y: 1.5, time: 'b' }, { id: 'TR', x: 12.5, y: 9.4, time: 'b', rotulo: 'T' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [18.4, 1.6], para: [2.9, 4.3], curva: 0.3, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [12.2, 9.2], para: [2.9, 2.2], curva: 0.4, numero: 2 },
      ],
      textos: [{ t: '1º SIDE-OUT, 2º CONTRA-ATAQUE', x: 13.5, y: 5.6 }],
    },
    animacao: {
      bolaInicial: naMao('B1', -1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8)]),
        passo(2, [b(naMao('TR', -1, -1), { de: pt(14, 3), dur: 0.1 }), b('seta2.b', { alta: true, dur: 1.6, atraso: 0.3 }), s('seta2', 1.6, 0.3)]),
        esperar(3, 1.0),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 1010, secao: 10, nivel: 'Avançado',
    nome: 'Duelo side-out contra transição com placar',
    jogadores: '12 jogadores (6 contra 6)', tempo: '20 minutos', material: '10 bolas',
    objetivo: 'Medir as duas fases do jogo: um time só joga side-out (recebe sempre) e o outro só joga transição (saca sempre).',
    comoMontar: 'O time A recebe todos os saques; o time B saca todos. A cada 5 ralis, os times trocam de papel.',
    passoAPasso: [
      'O time B saca e o rali é jogado até o fim.',
      'Ponto do time A se ganhar o rali (side-out); ponto do time B se ganhar (transição).',
      'O time B roda a cada saque; o time A roda a cada 2 side-outs.',
      'Depois de 5 ralis, invertem os papéis. Jogo até 25 pontos somados.',
    ],
    pontosAtencao: [
      'Quem recebe: passe alto e ataque sem pressa.',
      'Quem saca: saque forçado e bloqueio organizado para defender o side-out.',
      'Anotar o placar de cada fase para saber onde o time está melhor.',
    ],
    erroComum: 'O time de transição sacar só "para passar" e perder todos os pontos. Corrija valendo 2 pontos para cada ace e saque que impede o ataque.',
    variacaoFacil: 'O time de transição tem 2 bolas por rali (se perder a primeira, o treinador lança outra).',
    variacaoDificil: 'O side-out só vale se for de primeira (no primeiro ataque).',
    meta: 'Fazer pelo menos 60% de side-out e 40% de transição.',
    cena: {
      jogadores: [
        { id: 'A4', x: 7.3, y: 1.5, rotulo: 'P' }, { id: 'A3', x: 7.3, y: 4.5, rotulo: 'C' }, { id: 'A2', x: 7.3, y: 7.5, rotulo: 'O' },
        { id: 'A5', x: 2.5, y: 1.5, rotulo: 'P' }, { id: 'A6', x: 2.5, y: 4.5, rotulo: 'Lb' }, { id: 'A1', x: 2.5, y: 7.5, rotulo: 'L' },
        { id: 'B4', x: 10.7, y: 7.5, time: 'b', rotulo: 'P' }, { id: 'B3', x: 10.7, y: 4.5, time: 'b', rotulo: 'C' }, { id: 'B2', x: 10.7, y: 1.5, time: 'b', rotulo: 'O' },
        { id: 'B5', x: 15.5, y: 7.5, time: 'b', rotulo: 'P' }, { id: 'B6', x: 15.5, y: 4.5, time: 'b', rotulo: 'C' }, { id: 'B1', x: 18.8, y: 1.5, time: 'b', rotulo: 'L' },
      ],
      setas: [{ id: 'seta1', tipo: 'bola', de: [18.4, 1.6], para: [2.9, 4.3], curva: 0.3, numero: 1 }],
      textos: [{ t: 'SIDE-OUT', x: 4.9, y: 8.7 }, { t: 'TRANSIÇÃO', x: 13.1, y: 8.7 }],
    },
    animacao: {
      bolaInicial: naMao('B1', -1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8)]),
        passo(2, [b(pt(7.8, 5.8), { alta: true, dur: 1.2 }), b(pt(7.6, 1.4), { alta: true, dur: 1.3, atraso: 1.3 }), b(pt(14, 6), { dur: 0.5, atraso: 2.7 })]),
        esperar(3, 1.0),
        esperar(4, 1.0),
      ],
    },
  },
]
