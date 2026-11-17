/**
 * Seção 7 · Bloqueio (quadra). Referência: seção Bloqueio da areia, adaptada ao bloqueio de 2 e de 3.
 * Quem bloqueia fica à esquerda (azul), junto à rede: posição 4 em cima, 3 no meio, 2 embaixo.
 * Quem ataca fica à direita (verde). A entrada de rede deles (posição 4) fica embaixo, de frente
 * para a nossa posição 2.
 */
import { pt } from '../../lib/quadra/cena'
import { b, esperar, j, passo, pausa, s } from '../animacoesLotes/ajudantes'
import { naMao, type ExercicioComDesenho } from './tipos'

export const BLOQUEIO: ExercicioComDesenho[] = [
  {
    numero: 701, secao: 7, nivel: 'Iniciante',
    nome: 'Mãos de bloqueio: salto parado na rede',
    jogadores: '2 jogadores (um de cada lado da rede)', tempo: '8 minutos', material: '1 bola',
    objetivo: 'Aprender a posição das mãos e a "invasão" do bloqueio: braços passando para o outro lado, por cima da rede, sem tocar nela.',
    comoMontar: 'J1 fica junto à rede, no meio, em posição de bloqueio. Do outro lado, J2 sobe numa cadeira ou num banco firme e segura a bola acima da rede.',
    passoAPasso: [
      'J1 fica a um palmo da rede, com as mãos na altura dos ombros e os cotovelos à frente do corpo.',
      'J1 salta com os dois pés e leva os braços por cima da rede, para o lado de J2.',
      'No alto, as mãos ficam firmes e abertas, viradas para baixo, e "fecham" em cima da bola que J2 segura.',
      'J1 cai no mesmo lugar, sem tocar na rede. Depois de 10 saltos, os dois trocam.',
    ],
    pontosAtencao: [
      'As mãos sobem já à frente do corpo, sem fazer movimento de ataque.',
      'Dedos abertos e firmes, polegares para cima.',
      'Ombros encolhidos junto às orelhas no alto do salto.',
    ],
    erroComum: 'Saltar para frente e encostar na rede. Corrija marcando no chão a posição dos pés e pedindo para cair exatamente nela.',
    variacaoFacil: 'Fazer o movimento sem salto, na ponta dos pés.',
    variacaoDificil: 'J2 movimenta a bola um pouco para os lados antes de J1 saltar.',
    meta: '10 saltos seguidos com as mãos passando por cima da rede e sem tocar nela.',
    cena: {
      jogadores: [{ id: 'J1', x: 8.4, y: 4.5 }, { id: 'J2', x: 10, y: 4.5, time: 'b' }],
      bolas: [[9.3, 4.5]],
      setas: [{ id: 'seta1', tipo: 'jogador', de: [7.8, 3.6], para: [8.8, 3.6], numero: 1 }],
      textos: [{ t: 'MÃOS PARA O OUTRO LADO', x: 6.2, y: 6.4 }],
    },
    animacao: {
      passos: [
        esperar(1, 1.2),
        passo(2, [s('seta1', 0.6), pausa(0.3)]),
        esperar(3, 1.2),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 702, secao: 7, nivel: 'Iniciante',
    nome: 'Passada lateral de bloqueio e salto',
    jogadores: '2 jogadores (revezando)', tempo: '8 minutos', material: '3 cones',
    objetivo: 'Deslocar-se ao longo da rede com a passada lateral e saltar equilibrado no ponto certo.',
    comoMontar: 'Coloque 3 cones junto à rede: um em cada posição (4, 3 e 2). J1 começa no cone do meio. J2 espera para revezar.',
    passoAPasso: [
      'J1 fica no cone do meio, em posição de bloqueio.',
      'Faz 2 passos laterais até o cone da posição 4, sem cruzar as pernas, e salta para bloquear.',
      'Cai, volta com passos laterais até o meio e salta de novo.',
      'Repete para o cone da posição 2. Depois de 3 ciclos, troca com J2.',
    ],
    pontosAtencao: [
      'Ombros sempre de frente para a rede.',
      'Último passo freia o corpo: o salto é vertical.',
      'Mãos na altura dos ombros durante o deslocamento.',
    ],
    erroComum: 'Saltar ainda de lado, levando o corpo em direção à antena. Corrija pedindo uma parada completa com os dois pés antes de cada salto.',
    variacaoFacil: 'Fazer o deslocamento sem os saltos.',
    variacaoDificil: 'J2 aponta o cone, e J1 só sabe para onde ir na hora.',
    meta: 'Completar 3 ciclos sem tocar na rede e com os saltos sempre na frente dos cones.',
    cena: {
      jogadores: [{ id: 'J1', x: 8.4, y: 4.5 }, { id: 'J2', x: 5.5, y: 4.5 }],
      cones: [{ id: 'p4', x: 7.6, y: 1.5 }, { id: 'p3', x: 7.6, y: 4.5 }, { id: 'p2', x: 7.6, y: 7.5 }],
      setas: [
        { id: 'seta1', tipo: 'jogador', de: [8.4, 4], para: [8.4, 1.9], numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [8.4, 5], para: [8.4, 7.1], numero: 2 },
      ],
      textos: [{ t: 'POSIÇÃO 4', x: 6.2, y: 1.5 }, { t: 'POSIÇÃO 2', x: 6.2, y: 7.5 }],
    },
    animacao: {
      passos: [
        esperar(1, 1.0),
        passo(2, [j('J1', 'seta1.b', 0.9), s('seta1', 0.9), pausa(0.6)]),
        passo(3, [j('J1', 'J1', 0.9), pausa(0.6)]),
        passo(4, [j('J1', 'seta2.b', 0.9), s('seta2', 0.9), j('J1', 'J1', 0.9, 1.5)]),
      ],
    },
  },
  {
    numero: 703, secao: 7, nivel: 'Iniciante',
    nome: 'Passada cruzada do central até a ponta',
    jogadores: '2 jogadores (revezando)', tempo: '8 minutos', material: '2 cones',
    objetivo: 'Chegar do meio até a ponta a tempo, usando a passada cruzada (3 passos) para distâncias longas.',
    comoMontar: 'Coloque um cone junto à rede na posição 3 e outro na posição 4, perto da antena. J1 começa no cone do meio.',
    passoAPasso: [
      'J1 fica no meio, em posição de bloqueio.',
      'Abre com um passo lateral curto, cruza a perna de trás pela frente e fecha com o terceiro passo, já de frente para a rede.',
      'Salta com os dois pés na frente do cone da posição 4, com as mãos por cima da rede.',
      'Volta ao meio e faz o mesmo para a posição 2. Depois de 6 saltos, troca com J2.',
    ],
    pontosAtencao: [
      'No passo cruzado, o quadril vira; os ombros continuam de frente para a rede.',
      'O último passo "fecha" o corpo para o salto ser vertical.',
      'Saltar com a mão de fora mais alta, virada para dentro da quadra adversária.',
    ],
    erroComum: 'Chegar de lado e saltar caindo para a antena. Corrija pedindo que o último passo deixe os dois pés paralelos à rede.',
    variacaoFacil: 'Usar só passos laterais, com o cone mais perto.',
    variacaoDificil: 'J2 grita "4" ou "2" no momento em que J1 cai de um salto no meio.',
    meta: 'Chegar e saltar na ponta em menos de 2 segundos, sem tocar na rede.',
    cena: {
      jogadores: [{ id: 'J1', x: 8.4, y: 4.5, rotulo: 'C' }, { id: 'J2', x: 5.5, y: 4.5 }],
      cones: [{ id: 'p3', x: 7.6, y: 4.5 }, { id: 'p4', x: 7.6, y: 1 }],
      setas: [{ id: 'seta1', tipo: 'jogador', de: [8.4, 4], para: [8.4, 1.4], curva: 0.2, numero: 1 }],
      textos: [{ t: 'LATERAL · CRUZA · FECHA', x: 4.4, y: 2.6 }],
    },
    animacao: {
      passos: [
        esperar(1, 1.0),
        passo(2, [j('J1', 'seta1.b', 1.0), s('seta1', 1.0)]),
        esperar(3, 1.0),
        passo(4, [j('J1', 'J1', 1.0), j('J1', pt(8.4, 7.6), 1.0, 1.2), j('J1', 'J1', 1.0, 2.6)]),
      ],
    },
  },
  {
    numero: 704, secao: 7, nivel: 'Intermediário',
    nome: 'Bloqueio duplo: a ponta marca, o meio fecha',
    jogadores: '4 jogadores (2 bloqueadores, 1 levantador e 1 atacante)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Montar o bloqueio duplo sem buraco no meio: o bloqueador da ponta marca a posição, o central chega e encosta.',
    comoMontar: 'Do lado do bloqueio: B1 na posição 2 e B2 (central) na posição 3, junto à rede. Do outro lado, L levanta para a entrada de rede deles, onde está J1, de frente para B1.',
    passoAPasso: [
      'L levanta uma bola alta para J1, na entrada de rede adversária.',
      'B1 se posiciona na frente do braço de ataque de J1, marcando o lugar do bloqueio.',
      'B2 desloca-se do meio com a passada cruzada e encosta o ombro em B1.',
      'Os dois saltam juntos, com as mãos coladas, e J1 ataca contra o bloqueio duplo. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'Quem marca é a ponta; o central se ajusta a ela.',
      'Saltar ao mesmo tempo, contando "um, dois" juntos.',
      'Mãos coladas no meio: a bola não pode passar entre os dois.',
    ],
    erroComum: 'O central chegar e saltar longe da ponta, deixando um buraco no meio do bloqueio. Corrija pedindo que B2 encoste o ombro em B1 antes do salto.',
    variacaoFacil: 'L lança a bola com as mãos, bem alta, para dar mais tempo a B2.',
    variacaoDificil: 'L levanta mais rápido para a ponta.',
    meta: 'Montar o bloqueio duplo sem buraco em 7 de 8 bolas.',
    cena: {
      jogadores: [
        { id: 'B1', x: 8.4, y: 7.5 }, { id: 'B2', x: 8.4, y: 4.5, rotulo: 'C' },
        { id: 'L', x: 9.9, y: 3.4, time: 'b', rotulo: 'L' }, { id: 'J1', x: 13, y: 9.2, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [10.2, 3.6], para: [10.2, 7.6], curva: -0.6, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [8.4, 5], para: [8.4, 6.7], numero: 1 },
        { id: 'seta3', tipo: 'jogador', de: [12.6, 9], para: [10.4, 7.8], numero: 2 },
      ],
      textos: [{ t: 'MÃOS COLADAS', x: 6.4, y: 6.9 }],
    },
    animacao: {
      bolaInicial: naMao('L', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6)]),
        passo(2, [j('B1', pt(8.4, 7.9), 0.5), j('J1', 'seta3.b', 1.1), s('seta3', 1.1)], { junto: 0.6 }),
        passo(3, [j('B2', 'seta2.b', 0.8), s('seta2', 0.8)], { junto: 0.3 }),
        passo(4, [b(pt(8.9, 7.3), { dur: 0.4 }), b(pt(12, 6.5), { alta: true, dur: 0.9, atraso: 0.4 }), j('B2', 'B2', 1.0, 1.4), j('J1', 'J1', 1.0, 1.4)]),
      ],
    },
  },
  {
    numero: 705, secao: 7, nivel: 'Intermediário',
    nome: 'Central lendo o levantador',
    jogadores: '4 jogadores (1 central, 1 passador, 1 levantador e 2 atacantes)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Bloquear "lendo" a bola: o central só sai depois de ver para onde o levantador mandou.',
    comoMontar: 'B1 (central) fica no meio da rede. Do outro lado: J1 passa do fundo, L levanta, J2 está na entrada de rede e J3 na saída de rede deles.',
    passoAPasso: [
      'J1 passa para L. B1 fica no meio, com os olhos na bola.',
      'B1 olha as mãos de L no momento do levantamento.',
      'Assim que vê a direção da bola, B1 sai com a passada cruzada para aquele lado.',
      'B1 salta na frente do atacante que recebeu a bola. Depois de 10 bolas, descansa.',
    ],
    pontosAtencao: [
      'Não adivinhar: sair só depois de ver a bola sair das mãos de L.',
      'Olhos na sequência: passe, levantador, bola, atacante.',
      'Os primeiros passos são os mais rápidos.',
    ],
    erroComum: 'Sair antes para o lado "provável" e ficar fora da jogada quando L muda. Corrija pedindo a L que levante para o lado contrário sempre que B1 sair cedo.',
    variacaoFacil: 'L levanta sempre alto para as pontas.',
    variacaoDificil: 'L inclui bolas rápidas pelo meio, e B1 tem que bloquear o meio também.',
    meta: 'Chegar a tempo de saltar na frente do atacante em 7 de 10 bolas.',
    cena: {
      jogadores: [
        { id: 'B1', x: 8.4, y: 4.5, rotulo: 'C' },
        { id: 'J1', x: 15.5, y: 4.5, time: 'b' }, { id: 'L', x: 9.9, y: 3.2, time: 'b', rotulo: 'L' },
        { id: 'J2', x: 10.2, y: 8, time: 'b' }, { id: 'J3', x: 10.2, y: 1, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [15.1, 4.4], para: [10.3, 3.3], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [10.2, 3.6], para: [10.4, 7.6], curva: -0.6, numero: 2 },
        { id: 'seta3', tipo: 'jogador', de: [8.4, 5], para: [8.4, 7.4], numero: 1 },
      ],
      textos: [{ t: 'OLHE AS MÃOS DO LEVANTADOR', x: 4.5, y: 8.4 }],
    },
    animacao: {
      bolaInicial: naMao('J1', -1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        esperar(2, 0.4),
        passo(3, [b('seta2.b', { alta: true, dur: 1.4 }), s('seta2', 1.4), j('B1', 'seta3.b', 0.9, 0.3), s('seta3', 0.9, 0.3)]),
        passo(4, [pausa(0.6), j('B1', 'B1', 1.0, 0.6)]),
      ],
    },
  },
  {
    numero: 706, secao: 7, nivel: 'Intermediário',
    nome: 'Fechar a paralela e deixar a diagonal para a defesa',
    jogadores: '4 jogadores (1 bloqueador, 1 defensor, 1 levantador e 1 atacante)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Combinar bloqueio e defesa: o bloqueio fecha a paralela e o defensor fica pronto na diagonal.',
    comoMontar: 'B1 bloqueia na posição 2. D1 defende no fundo, na diagonal (zona 5 do seu lado). Do outro lado, L levanta para J1 na entrada de rede deles.',
    passoAPasso: [
      'L levanta uma bola alta para J1.',
      'B1 se posiciona com a mão de fora em frente à paralela (perto da antena) e salta para fechar esse lado.',
      'D1 fica parado na diagonal, fora da sombra do bloqueio, em base baixa.',
      'J1 ataca; se for na diagonal, D1 defende para cima. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'B1 não persegue a bola: fecha a paralela e confia na defesa.',
      'D1 se posiciona onde enxerga a bola, ao lado do bloqueio.',
      'Combinar antes de cada bola: "fecho a paralela!".',
    ],
    erroComum: 'B1 tentar fechar tudo, saltando no meio, e abrir a paralela. Corrija pedindo que a mão de fora de B1 fique sempre em frente à antena.',
    variacaoFacil: 'J1 ataca de bola lançada, em pé.',
    variacaoDificil: 'B1 e D1 trocam a combinação (fechar a diagonal) a cada 2 bolas.',
    meta: 'Nenhum ponto de J1 na paralela em 8 bolas.',
    cena: {
      jogadores: [
        { id: 'B1', x: 8.4, y: 7.8 }, { id: 'D1', x: 2.5, y: 1.6 },
        { id: 'L', x: 9.9, y: 3.2, time: 'b', rotulo: 'L' }, { id: 'J1', x: 10.4, y: 7.8, time: 'b' },
      ],
      zonas: [{ id: 'diag', x: 0.5, y: 0.2, l: 4, a: 3, rotulo: 'DIAGONAL' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [10.2, 3.6], para: [10.2, 7.4], curva: -0.6, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [10.2, 7.6], para: [2.8, 2], numero: 2 },
        { id: 'seta3', tipo: 'bola', de: [2.8, 2], para: [6.5, 4.2], curva: -0.5, numero: 3 },
      ],
      textos: [{ t: 'PARALELA FECHADA', x: 5.4, y: 8.6 }],
    },
    animacao: {
      bolaInicial: naMao('L', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6)]),
        passo(2, [j('B1', pt(8.4, 8.1), 0.5)], { junto: 0.9 }),
        esperar(3, 0.5),
        passo(4, [b('seta2.b', { dur: 0.6 }), s('seta2', 0.6), b('seta3.b', { alta: true, dur: 1.2, atraso: 0.6 }), s('seta3', 1.2, 0.6)]),
      ],
    },
  },
  {
    numero: 707, secao: 7, nivel: 'Intermediário',
    nome: 'Bloqueio da bola rápida do meio',
    jogadores: '3 jogadores (1 central de cada lado e 1 levantador)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Bloquear o central adversário na bola rápida, saltando junto com ele.',
    comoMontar: 'B1 bloqueia no meio da rede. Do outro lado, L levanta bolas rápidas para J1 (central adversário), que ataca na frente de L.',
    passoAPasso: [
      'B1 fica no meio, de frente para J1.',
      'J1 começa a passada curta para a bola rápida; B1 acompanha J1 com os olhos, não a bola.',
      'B1 salta junto com J1, com as mãos na frente do braço de ataque dele.',
      'L coloca a bola rápida e J1 ataca contra o bloqueio. Depois de 10 bolas, rodam.',
    ],
    pontosAtencao: [
      'Contra a bola rápida, o bloqueador salta com o atacante, não com a bola.',
      'Mãos já altas antes do salto: não há tempo de levantar os braços.',
      'Saltar em frente ao ombro do braço de ataque do central.',
    ],
    erroComum: 'Esperar a bola sair das mãos do levantador e saltar atrasado. Corrija pedindo que B1 olhe só para J1 durante a passada.',
    variacaoFacil: 'Bola de meio mais alta (meia-bola).',
    variacaoDificil: 'L alterna bola rápida e bola alta na ponta, e B1 tem que decidir.',
    meta: 'Tocar na bola rápida (bloquear ou amortecer) em 5 de 10 ataques.',
    cena: {
      jogadores: [
        { id: 'B1', x: 8.4, y: 4.5, rotulo: 'C' },
        { id: 'L', x: 9.9, y: 3.2, time: 'b', rotulo: 'L' }, { id: 'J1', x: 12.6, y: 4.6, time: 'b', rotulo: 'C' },
      ],
      setas: [
        { id: 'seta1', tipo: 'jogador', de: [12.2, 4.6], para: [10.2, 4.5], numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [10, 3.6], para: [9.9, 4.3], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [9.7, 4.4], para: [9.2, 4.5], numero: 2 },
      ],
      textos: [{ t: 'SALTE COM O ATACANTE', x: 5.4, y: 2.6 }],
    },
    animacao: {
      bolaInicial: naMao('L', 1, -1),
      passos: [
        esperar(1, 1.0),
        passo(2, [j('J1', 'seta1.b', 0.8), s('seta1', 0.8)]),
        passo(3, [pausa(0.3)], { junto: 0.6 }),
        passo(4, [b('seta2.b', { dur: 0.3 }), s('seta2', 0.3), b('seta3.b', { dur: 0.3, atraso: 0.3 }), s('seta3', 0.3, 0.3), b(pt(11.5, 6), { alta: true, dur: 0.8, atraso: 0.6 }), j('J1', 'J1', 1.0, 1.4)]),
      ],
    },
  },
  {
    numero: 708, secao: 7, nivel: 'Intermediário',
    nome: 'Bloqueio defensivo: amortecer em vez de pontuar',
    jogadores: '3 jogadores (1 bloqueador, 1 levantador e 1 atacante)', tempo: '10 minutos', material: '8 bolas',
    objetivo: 'Quando o bloqueador é mais baixo que o atacante, amortecer a bola para cima, para a própria defesa, em vez de tentar o ponto.',
    comoMontar: 'B1 bloqueia na posição 4. Do outro lado, L levanta para J1, que ataca na saída de rede deles, de frente para B1.',
    passoAPasso: [
      'L levanta uma bola alta para J1.',
      'B1 salta com as mãos acima da rede, mas sem invadir o lado de J1.',
      'No contato, B1 deixa as mãos inclinadas para trás (palmas para cima), para a bola subir no seu lado.',
      'A bola amortecida sobe e B1 ou um colega a recupera. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'Mãos altas e inclinadas para trás, como uma rampa.',
      'Usar contra atacantes mais altos ou bolas muito altas.',
      'Avisar a defesa: "amorteço!".',
    ],
    erroComum: 'Deixar as mãos moles e a bola cair entre o bloqueio e a rede. Corrija pedindo mãos firmes, só inclinadas, e não soltas.',
    variacaoFacil: 'J1 ataca em pé, de bola lançada.',
    variacaoDificil: 'B1 decide entre bloqueio ofensivo e defensivo de acordo com a altura do levantamento.',
    meta: 'Amortecer 5 de 8 ataques, com a bola subindo no próprio lado.',
    cena: {
      jogadores: [
        { id: 'B1', x: 8.4, y: 1.4 },
        { id: 'L', x: 9.9, y: 3.2, time: 'b', rotulo: 'L' }, { id: 'J1', x: 10.4, y: 1.3, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [10.1, 3], para: [10.2, 1.5], curva: 0.5, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [10.1, 1.4], para: [8.9, 1.4], numero: 2 },
        { id: 'seta3', tipo: 'bola', de: [8.9, 1.4], para: [6.6, 2.6], curva: 0.6, numero: 3 },
      ],
      textos: [{ t: 'AMORTECER', x: 6.5, y: 3.8 }],
    },
    animacao: {
      bolaInicial: naMao('L', 1, -1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.3 }), s('seta1', 1.3)]),
        passo(2, [pausa(0.4)]),
        passo(3, [b('seta2.b', { dur: 0.3 }), s('seta2', 0.3), b('seta3.b', { alta: true, dur: 1.1, atraso: 0.3 }), s('seta3', 1.1, 0.3)]),
        passo(4, [j('B1', pt(6.9, 2.4), 0.8)]),
      ],
    },
  },
  {
    numero: 709, secao: 7, nivel: 'Avançado',
    nome: 'Bloqueio triplo na bola alta da ponta',
    jogadores: '5 jogadores (3 bloqueadores, 1 levantador e 1 atacante)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Fechar o ataque da ponta com três bloqueadores quando a bola é alta e lenta.',
    comoMontar: 'B1, B2 e B3 ficam nas posições 4, 3 e 2. Do outro lado, L levanta alto para J1 na entrada de rede deles, de frente para B3.',
    passoAPasso: [
      'L levanta uma bola bem alta para J1.',
      'B3 marca a posição, na frente do braço de ataque de J1.',
      'B2 encosta em B3 com a passada cruzada, e B1 vem da outra ponta e fecha o lado de dentro.',
      'Os três saltam juntos, com as mãos coladas. Depois de 8 bolas, rodam.',
    ],
    pontosAtencao: [
      'Só vale o triplo em bola alta: dá tempo de os três chegarem.',
      'Quem marca é quem está na frente do atacante.',
      'Saltar juntos, ao comando da ponta: "e... já!".',
    ],
    erroComum: 'Os três saltarem em momentos diferentes. Corrija com a ponta dando o comando de voz para o salto.',
    variacaoFacil: 'Só o bloqueio duplo (B3 e B2) e B1 cobrindo a largada.',
    variacaoDificil: 'L alterna bola alta (triplo) e bola rápida na ponta (duplo).',
    meta: 'Montar o triplo, com os três saltando juntos, em 6 de 8 bolas.',
    cena: {
      jogadores: [
        { id: 'B1', x: 8.4, y: 1.5 }, { id: 'B2', x: 8.4, y: 4.5, rotulo: 'C' }, { id: 'B3', x: 8.4, y: 7.8 },
        { id: 'L', x: 9.9, y: 3.2, time: 'b', rotulo: 'L' }, { id: 'J1', x: 10.4, y: 7.8, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [10.2, 3.6], para: [10.2, 7.4], curva: -0.7, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [8.4, 5], para: [8.4, 6.9], numero: 1 },
        { id: 'seta3', tipo: 'jogador', de: [8.4, 2], para: [8.4, 5.9], curva: -0.4, numero: 2 },
      ],
      textos: [{ t: 'BOLA ALTA: TRIPLO', x: 5.6, y: 3.2 }],
    },
    animacao: {
      bolaInicial: naMao('L', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 2.0 }), s('seta1', 2.0)]),
        passo(2, [j('B3', pt(8.4, 8), 0.4)], { junto: 0.4 }),
        passo(3, [j('B2', 'seta2.b', 0.8), s('seta2', 0.8), j('B1', 'seta3.b', 1.2), s('seta3', 1.2)]),
        passo(4, [b(pt(9.4, 7.2), { dur: 0.4 }), b(pt(12.5, 5.6), { alta: true, dur: 1.0, atraso: 0.4 }), j('B1', 'B1', 1.2, 1.5), j('B2', 'B2', 1.0, 1.5)]),
      ],
    },
  },
  {
    numero: 710, secao: 7, nivel: 'Avançado',
    nome: 'Duelo de bloqueio com placar',
    jogadores: '6 jogadores (2 bloqueadores, 1 defensor, 1 levantador e 2 atacantes)', tempo: '15 minutos', material: '10 bolas',
    objetivo: 'Pôr em jogo tudo do bloqueio (leitura, deslocamento e combinação com a defesa) valendo pontos.',
    comoMontar: 'Do lado do bloqueio: B1 (central) no meio, B2 na posição 2 e D1 defendendo no fundo. Do outro lado: L levanta para J1 (entrada de rede) ou J2 (meio).',
    passoAPasso: [
      'L levanta para J1 ou J2, sem avisar.',
      'B1 lê o levantamento e forma o bloqueio duplo com B2 na ponta, ou bloqueia sozinho a bola do meio.',
      'D1 se posiciona fora da sombra do bloqueio.',
      'Ponto do bloqueio: bloqueio que volta para o outro lado ou bola amortecida e defendida. Ponto do ataque: bola no chão ou para fora depois de tocar no bloqueio. Jogo até 10, depois trocam.',
    ],
    pontosAtencao: [
      'Comunicação antes de cada bola: quem marca e quem fecha.',
      'O central sempre lê antes de sair.',
      'A defesa conta com o bloqueio, e não o contrário.',
    ],
    erroComum: 'O bloqueio pular em todas as bolas, inclusive nas que estão longe da rede. Corrija combinando que bola afastada da rede não tem bloqueio: os bloqueadores recuam para defender.',
    variacaoFacil: 'L só levanta para a ponta.',
    variacaoDificil: 'Entra um terceiro atacante na saída de rede adversária.',
    meta: 'Fazer pelo menos 4 pontos de bloqueio em um jogo de 10.',
    cena: {
      jogadores: [
        { id: 'B1', x: 8.4, y: 4.5, rotulo: 'C' }, { id: 'B2', x: 8.4, y: 7.8 }, { id: 'D1', x: 2.5, y: 2 },
        { id: 'L', x: 9.9, y: 3.2, time: 'b', rotulo: 'L' }, { id: 'J1', x: 10.4, y: 7.8, time: 'b' }, { id: 'J2', x: 11.5, y: 4.8, time: 'b', rotulo: 'C' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [10.2, 3.6], para: [10.2, 7.4], curva: -0.7, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [8.4, 5], para: [8.4, 6.9], numero: 1 },
        { id: 'seta3', tipo: 'jogador', de: [3, 2.3], para: [4, 1.3], numero: 2 },
      ],
      textos: [{ t: 'PLACAR ATÉ 10', x: 14.5, y: 1.5 }],
    },
    animacao: {
      bolaInicial: naMao('L', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6)]),
        passo(2, [j('B1', 'seta2.b', 0.8), s('seta2', 0.8)], { junto: 0.4 }),
        passo(3, [j('D1', 'seta3.b', 0.6), s('seta3', 0.6)]),
        passo(4, [b(pt(9.4, 7.2), { dur: 0.4 }), b(pt(12.4, 6), { alta: true, dur: 1.0, atraso: 0.4 }), j('B1', 'B1', 1.0, 1.5), j('D1', 'D1', 1.0, 1.5)]),
      ],
    },
  },
]
