/**
 * Seção 12 · Jogos reduzidos (quadra). Referência: seção Jogos reduzidos da areia, adaptada ao ginásio:
 * quadras menores e menos jogadores para cada um tocar muito na bola e decidir rápido.
 */
import { pt } from '../../lib/quadra/cena'
import { b, esperar, j, passo, s } from '../animacoesLotes/ajudantes'
import { naMao, type ExercicioComDesenho } from './tipos'

export const JOGOS: ExercicioComDesenho[] = [
  {
    numero: 1201, secao: 12, nivel: 'Iniciante',
    nome: '1 contra 1 na quadra pequena',
    jogadores: '2 jogadores', tempo: '10 minutos', material: '1 bola e 4 cones',
    objetivo: 'Tocar muitas vezes na bola, com controle, num jogo simples e divertido.',
    comoMontar: 'Use só a faixa entre a rede e a linha dos 3 metros, na metade da largura da quadra (3 × 4,5 metros de cada lado). Marque os cantos com cones.',
    passoAPasso: [
      'J1 começa com um toque por cima da rede para dentro da quadra pequena de J2.',
      'Cada um pode dar até 2 toques: o primeiro para controlar e o segundo para mandar.',
      'Vale toque e manchete; não vale ataque.',
      'Jogo até 11 pontos. Depois, trocam de lado ou de adversário.',
    ],
    pontosAtencao: [
      'Usar o primeiro toque para ajeitar a bola alta.',
      'Procurar o espaço vazio da quadra do outro.',
      'Voltar para o meio da quadra pequena depois de cada toque.',
    ],
    erroComum: 'Mandar tudo de primeira, sem controle. Corrija valendo ponto duplo para o ponto feito com os 2 toques.',
    variacaoFacil: 'Permitir 3 toques e um quique no chão.',
    variacaoDificil: 'Só vale toque por cima (sem manchete).',
    meta: 'Ralis com pelo menos 4 passagens de rede em média.',
    cena: {
      jogadores: [{ id: 'J1', x: 7.4, y: 2.2 }, { id: 'J2', x: 10.6, y: 2.2, time: 'b' }],
      zonas: [{ id: 'zA', x: 6, y: 0, l: 3, a: 4.5, rotulo: 'QUADRA J1' }, { id: 'zB', x: 9, y: 0, l: 3, a: 4.5, rotulo: 'QUADRA J2' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [7.7, 2.3], para: [10.6, 3.6], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [10.6, 3.6], para: [6.8, 3.4], curva: 0.5, numero: 2 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.3 }), s('seta1', 1.3)]),
        passo(2, [j('J2', pt(10.6, 3.2), 0.6), b(pt(10.6, 3.1), { alta: true, dur: 0.8, atraso: 0.6 })]),
        passo(3, [b('seta2.b', { alta: true, dur: 1.3 }), s('seta2', 1.3), j('J1', pt(7, 3.2), 0.9, 0.3)]),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 1202, secao: 12, nivel: 'Iniciante',
    nome: '2 contra 2 com 3 toques obrigatórios',
    jogadores: '4 jogadores (2 contra 2)', tempo: '15 minutos', material: '1 bola e 4 cones',
    objetivo: 'Jogar passe, levantamento e ataque em todas as bolas, numa quadra menor.',
    comoMontar: 'Use a quadra da rede até a linha dos 3 metros, em toda a largura, de cada lado (3 × 9 metros). Dois jogadores de cada lado.',
    passoAPasso: [
      'Um jogador põe a bola em jogo com um saque por baixo de dentro da quadra pequena.',
      'O time que recebe tem que usar os 3 toques: passe, levantamento e ataque (o ataque pode ser em pé, sem salto).',
      'Bola que passa com menos de 3 toques é ponto do adversário.',
      'Jogo até 15 pontos, trocando o sacador a cada ponto.',
    ],
    pontosAtencao: [
      'Passe alto para o parceiro, não para o outro lado.',
      'Quem não passa, levanta.',
      'Ataque em pé, mirando o espaço vazio.',
    ],
    erroComum: 'Passar a bola de primeira para o outro lado quando ela vem fácil. Corrija mantendo a regra dos 3 toques até o fim.',
    variacaoFacil: 'Permitir que o primeiro toque seja segurado.',
    variacaoDificil: 'Quadra maior (até a linha de fundo) e ataque com salto.',
    meta: 'Completar os 3 toques em 7 de cada 10 ralis.',
    cena: {
      jogadores: [
        { id: 'A1', x: 6.8, y: 2.5 }, { id: 'A2', x: 6.8, y: 6.5 },
        { id: 'B1', x: 11, y: 2.5, time: 'b' }, { id: 'B2', x: 11, y: 6.5, time: 'b' },
      ],
      zonas: [{ id: 'zA', x: 6, y: 0, l: 3, a: 9 }, { id: 'zB', x: 9, y: 0, l: 3, a: 9 }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [10.7, 2.6], para: [7.1, 6.3], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [7.1, 6.3], para: [7.6, 4], curva: -0.5, numero: 2 },
        { id: 'seta3', tipo: 'bola', de: [7.4, 3.8], para: [8.2, 2.6], curva: 0.5, numero: 3 },
        { id: 'seta4', tipo: 'bola', de: [8.2, 2.6], para: [11.4, 4.6], numero: 4 },
      ],
      textos: [{ t: '3 TOQUES', x: 4.4, y: 4.5 }],
    },
    animacao: {
      bolaInicial: naMao('B1', -1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        passo(2, [b('seta2.b', { alta: true, dur: 1.0 }), s('seta2', 1.0), j('A1', pt(7.6, 3.6), 0.8), b('seta3.b', { alta: true, dur: 1.0, atraso: 1.1 }), s('seta3', 1.0, 1.1), j('A2', pt(7.8, 3.2), 1.0, 1.0)]),
        passo(3, [b('seta4.b', { dur: 0.6 }), s('seta4', 0.6)]),
        passo(4, [j('A1', 'A1', 0.8), j('A2', 'A2', 0.8)]),
      ],
    },
  },
  {
    numero: 1203, secao: 12, nivel: 'Intermediário',
    nome: '3 contra 3 em meia quadra',
    jogadores: '6 jogadores (3 contra 3)', tempo: '15 minutos', material: '1 bola',
    objetivo: 'Jogar com funções simples (passador, levantador, atacante) em meia quadra, com muitos toques para cada um.',
    comoMontar: 'Use só metade da largura da quadra (4,5 metros), da rede até a linha de fundo, dos dois lados. Três jogadores de cada lado: dois no fundo e um na rede (que levanta).',
    passoAPasso: [
      'O jogo começa com saque por baixo da linha de fundo.',
      'Os dois do fundo recebem; o da rede levanta; quem não passou ataca.',
      'Depois de cada ponto, o time que ganhou roda: o levantador vai para o fundo.',
      'Jogo até 15 pontos.',
    ],
    pontosAtencao: [
      'O levantador da vez chama a bola e se coloca antes do passe.',
      'Os do fundo dividem a quadra ao meio e chamam "minha!".',
      'Atacar no espaço vazio da meia quadra adversária.',
    ],
    erroComum: 'O levantador ir para o passe e o time ficar sem levantamento. Corrija combinando que o jogador da rede nunca recebe o saque.',
    variacaoFacil: 'Saque lançado com as mãos.',
    variacaoDificil: 'Ataque só de fora da linha dos 3 metros (ataque de fundo).',
    meta: 'Usar os 3 toques em 8 de cada 10 ralis.',
    cena: {
      jogadores: [
        { id: 'A1', x: 2.5, y: 2 }, { id: 'A2', x: 2.5, y: 3.6 }, { id: 'A3', x: 7.6, y: 2.8, rotulo: 'L' },
        { id: 'B1', x: 16.5, y: 2.2, time: 'b' }, { id: 'B2', x: 14.5, y: 3.4, time: 'b' }, { id: 'B3', x: 10.4, y: 2.8, time: 'b', rotulo: 'L' },
      ],
      zonas: [{ id: 'meia', x: 0, y: 0, l: 18, a: 4.5, rotulo: 'MEIA QUADRA' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [16.1, 2.3], para: [2.8, 2.2], curva: 0.3, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [2.8, 2.2], para: [7.3, 2.7], curva: -0.4, numero: 2 },
        { id: 'seta3', tipo: 'bola', de: [7.4, 2.9], para: [5.6, 3.7], curva: -0.5, numero: 3 },
      ],
    },
    animacao: {
      bolaInicial: naMao('B1', -1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.7 }), s('seta1', 1.7)]),
        passo(2, [b('seta2.b', { alta: true, dur: 1.2 }), s('seta2', 1.2), b('seta3.b', { alta: true, dur: 1.0, atraso: 1.3 }), s('seta3', 1.0, 1.3), j('A2', pt(5.6, 3.9), 1.0, 1.0), b(pt(15, 1.2), { dur: 0.6, atraso: 2.4 })]),
        passo(3, [j('A3', pt(2.5, 1), 1.0), j('A1', pt(2.5, 3.4), 1.0), j('A2', pt(7.6, 2.8), 1.0)]),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 1204, secao: 12, nivel: 'Intermediário',
    nome: '4 contra 4 sem levantador fixo',
    jogadores: '8 jogadores (4 contra 4)', tempo: '15 minutos', material: '1 bola',
    objetivo: 'Fazer todos levantarem: quem não deu o primeiro toque e está mais perto da rede vira o levantador.',
    comoMontar: 'Quadra inteira, com 4 jogadores de cada lado: 2 na rede e 2 no fundo.',
    passoAPasso: [
      'O jogo começa com saque.',
      'Quem dá o primeiro toque grita "passe!"; o jogador da rede mais perto da bola grita "levanto!" e levanta.',
      'Os outros dois atacam ou fazem cobertura.',
      'Jogo até 21 pontos, com rodízio a cada saque recuperado.',
    ],
    pontosAtencao: [
      'Decisão rápida de quem levanta, com chamada.',
      'Levantamento alto e simples: não há especialista.',
      'Os 4 se mexem em todas as bolas.',
    ],
    erroComum: 'Dois jogadores irem levantar a mesma bola. Corrija com a regra: levanta quem estiver mais perto da rede entre os que não passaram.',
    variacaoFacil: '3 contra 3 em quadra inteira.',
    variacaoDificil: 'Só vale ponto de ataque com salto.',
    meta: 'Ter levantamentos feitos por pelo menos 3 jogadores diferentes de cada time em um jogo.',
    cena: {
      jogadores: [
        { id: 'A1', x: 7.4, y: 2.5 }, { id: 'A2', x: 7.4, y: 6.5 }, { id: 'A3', x: 2.5, y: 2.5 }, { id: 'A4', x: 2.5, y: 6.5 },
        { id: 'B1', x: 10.6, y: 2.5, time: 'b' }, { id: 'B2', x: 10.6, y: 6.5, time: 'b' }, { id: 'B3', x: 15.5, y: 2.5, time: 'b' }, { id: 'B4', x: 18.8, y: 6.5, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [18.4, 6.4], para: [2.8, 6.3], curva: 0.3, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [2.8, 6.3], para: [7.4, 6], curva: -0.4, numero: 2 },
        { id: 'seta3', tipo: 'bola', de: [7.4, 6], para: [7.4, 2.9], curva: 0.6, numero: 3 },
      ],
      textos: [{ t: '"LEVANTO!"', x: 9.6, y: 8.6 }],
    },
    animacao: {
      bolaInicial: naMao('B4', -1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8)]),
        passo(2, [b('seta2.b', { alta: true, dur: 1.2 }), s('seta2', 1.2), b('seta3.b', { alta: true, dur: 1.3, atraso: 1.3 }), s('seta3', 1.3, 1.3)]),
        passo(3, [b(pt(14, 5), { dur: 0.6 })]),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 1205, secao: 12, nivel: 'Intermediário',
    nome: 'Rei da quadra em duplas',
    jogadores: '8 a 12 jogadores (duplas)', tempo: '20 minutos', material: '2 bolas',
    objetivo: 'Jogar ralis curtos e decisivos, com muitas duplas se revezando: quem ganha fica, quem perde sai.',
    comoMontar: 'Quadra reduzida (da rede até a linha dos 3 metros, largura inteira). Um lado é o do "rei". As outras duplas fazem fila fora da quadra, do lado do desafiante.',
    passoAPasso: [
      'A dupla desafiante saca (por baixo) para a dupla do rei.',
      'Joga-se um rali só, com até 3 toques.',
      'Se o rei ganha, marca 1 ponto e continua; se o desafiante ganha, troca de lado e vira o rei (sem marcar).',
      'A dupla que perdeu vai para o fim da fila. Vence quem chegar primeiro a 7 pontos.',
    ],
    pontosAtencao: [
      'Ralis rápidos: a próxima dupla já está pronta.',
      'Só o rei marca ponto: o desafiante precisa ganhar duas vezes seguidas para pontuar.',
      'Comunicação entre a dupla em todas as bolas.',
    ],
    erroComum: 'A fila demorar para entrar e o ritmo cair. Corrija com a próxima dupla entrando no instante em que o rali acaba.',
    variacaoFacil: 'Ralis com 2 bolas: se errar a primeira, joga a segunda.',
    variacaoDificil: 'Quadra maior (até a linha de fundo) e ataque com salto.',
    meta: 'Ser o rei por pelo menos 3 ralis seguidos.',
    cena: {
      jogadores: [
        { id: 'R1', x: 7.2, y: 2.5, rotulo: 'R' }, { id: 'R2', x: 7.2, y: 6.5, rotulo: 'R' },
        { id: 'D1', x: 11, y: 2.5, time: 'b' }, { id: 'D2', x: 11, y: 6.5, time: 'b' },
        { id: 'F1', x: 14, y: 9.4, time: 'b' }, { id: 'F2', x: 15.6, y: 9.4, time: 'b' }, { id: 'F3', x: 17.2, y: 9.4, time: 'b' },
      ],
      zonas: [{ id: 'zA', x: 6, y: 0, l: 3, a: 9, rotulo: 'REI' }, { id: 'zB', x: 9, y: 0, l: 3, a: 9, rotulo: 'DESAFIANTE' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [10.7, 2.6], para: [7.5, 6.3], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [13.6, 9.2], para: [11.4, 7.2], numero: 1 },
      ],
      textos: [{ t: 'FILA', x: 15.6, y: 8.1 }],
    },
    animacao: {
      bolaInicial: naMao('D1', -1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.3 }), s('seta1', 1.3)]),
        passo(2, [b(pt(7.4, 3.6), { alta: true, dur: 0.9 }), b(pt(10.5, 5), { dur: 0.6, atraso: 1.0 })]),
        esperar(3, 0.8),
        passo(4, [j('D2', pt(14, 9.4), 1.0), j('F1', 'seta2.b', 1.0), s('seta2', 1.0)]),
      ],
    },
  },
  {
    numero: 1206, secao: 12, nivel: 'Intermediário',
    nome: 'Jogo da bola rápida: ponto do meio vale 2',
    jogadores: '12 jogadores (6 contra 6)', tempo: '20 minutos', material: '1 bola',
    objetivo: 'Incentivar o uso do central no jogo: ponto feito pela bola rápida do meio vale dobrado.',
    comoMontar: 'Dois times de 6, quadra inteira, cada um com seu sistema.',
    passoAPasso: [
      'Jogo normal, com saque e rodízio.',
      'Ponto feito por ataque do central na bola rápida vale 2 pontos.',
      'Ponto feito por bloqueio do central adversário contra a bola rápida também vale 2.',
      'Set até 25 pontos.',
    ],
    pontosAtencao: [
      'Passe na zona do levantador abre a bola rápida: caprichar no passe.',
      'O central faz a passada em todas as bolas, mesmo quando não recebe.',
      'O bloqueio adversário precisa acompanhar o central.',
    ],
    erroComum: 'O levantador forçar a rápida com o passe ruim. Corrija lembrando que a bola rápida só vale com passe bom.',
    variacaoFacil: 'Ponto do meio vale 2 também em bola alta de meio.',
    variacaoDificil: 'Ponto de ataque de fundo também vale 2.',
    meta: 'Fazer pelo menos 4 pontos de bola rápida no set.',
    cena: {
      jogadores: [
        { id: 'L', x: 8.1, y: 5.8, rotulo: 'L' }, { id: 'C', x: 7.9, y: 4.4, rotulo: 'C' }, { id: 'J1', x: 2.5, y: 6 },
        { id: 'B3', x: 9.8, y: 4.5, time: 'b', rotulo: 'C' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [2.9, 6], para: [7.8, 5.7], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [8.1, 5.4], para: [8.2, 4.7], numero: 2 },
        { id: 'seta3', tipo: 'bola', de: [8.3, 4.5], para: [14, 2.4], numero: 3 },
      ],
      textos: [{ t: 'VALE 2', x: 13.6, y: 1.2 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        passo(2, [b('seta2.b', { dur: 0.3 }), s('seta2', 0.3)]),
        passo(3, [b('seta3.b', { dur: 0.5 }), s('seta3', 0.5)]),
        esperar(4, 1.2),
      ],
    },
  },
  {
    numero: 1207, secao: 12, nivel: 'Intermediário',
    nome: 'Jogo que começa com bola de graça',
    jogadores: '12 jogadores (6 contra 6) e 1 treinador', tempo: '20 minutos', material: '10 bolas',
    objetivo: 'Treinar a transição: cada rali começa com o treinador mandando uma bola fácil para um dos times.',
    comoMontar: 'Dois times de 6. O treinador fica fora da quadra, ao lado da rede, com as bolas.',
    passoAPasso: [
      'O treinador manda uma bola de graça (fácil, alta) para o time A.',
      'O time A grita "de graça!", se organiza e ataca; o rali segue até o fim.',
      'O próximo rali começa com a bola de graça para o time B.',
      'Set até 25 pontos, com rodízio a cada 3 pontos.',
    ],
    pontosAtencao: [
      'A bola de graça é chance de ponto: atacar com combinação.',
      'Quem recebe a bola fácil precisa de um passe perfeito.',
      'O outro time se organiza rápido para bloquear.',
    ],
    erroComum: 'O time que recebe a bola de graça atacar sem organização e errar. Corrija valendo ponto extra para o time que defender o ataque da bola de graça.',
    variacaoFacil: 'Só um time recebe as bolas de graça por 5 ralis seguidos.',
    variacaoDificil: 'O treinador alterna bola de graça e ataque forte.',
    meta: 'Vencer pelo menos 60% dos ralis em que o time recebeu a bola de graça.',
    cena: {
      jogadores: [
        { id: 'A4', x: 7.3, y: 1.5 }, { id: 'A3', x: 7.3, y: 4.5 }, { id: 'A2', x: 7.3, y: 7.5 },
        { id: 'A5', x: 2.5, y: 1.5 }, { id: 'A6', x: 2.5, y: 4.5 }, { id: 'A1', x: 2.5, y: 7.5 },
        { id: 'T', x: 9, y: 9.4, time: 'b', rotulo: 'T' },
      ],
      setas: [{ id: 'seta1', tipo: 'bola', de: [8.7, 9.1], para: [2.9, 4.6], curva: -0.5, numero: 1 }],
      textos: [{ t: '"DE GRAÇA!"', x: 4.9, y: 6.2 }],
    },
    animacao: {
      bolaInicial: naMao('T', -1, -1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8)]),
        passo(2, [j('A4', pt(5.4, 1), 0.8), b(pt(7.8, 5.8), { alta: true, dur: 1.3 })]),
        esperar(3, 1.0),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 1208, secao: 12, nivel: 'Avançado',
    nome: '6 contra 6 com bônus de bloqueio',
    jogadores: '12 jogadores (6 contra 6)', tempo: '25 minutos', material: '1 bola',
    objetivo: 'Valorizar o bloqueio e a defesa no jogo: ponto de bloqueio vale 2 e defesa que vira contra-ataque vale 2.',
    comoMontar: 'Dois times de 6, quadra inteira, cada um com seu sistema.',
    passoAPasso: [
      'Jogo normal, com saque e rodízio.',
      'Ponto de bloqueio direto vale 2 pontos.',
      'Ponto de contra-ataque depois de uma defesa de ataque forte também vale 2.',
      'Set até 25 pontos.',
    ],
    pontosAtencao: [
      'O bloqueio se organiza com comunicação antes de cada saque.',
      'A defesa se posiciona fora da sombra do bloqueio.',
      'Contra-ataque rápido depois da defesa.',
    ],
    erroComum: 'O time continuar jogando só pelo ataque. Corrija anotando à parte os pontos de bloqueio e contra-ataque de cada time.',
    variacaoFacil: 'Só o ponto de bloqueio vale 2.',
    variacaoDificil: 'Erro de saque vale 2 para o adversário.',
    meta: 'Fazer pelo menos 5 pontos com bônus no set.',
    cena: {
      jogadores: [
        { id: 'A4', x: 8.4, y: 1.5 }, { id: 'A3', x: 8.4, y: 4.5 }, { id: 'A2', x: 8.4, y: 7.2 },
        { id: 'A5', x: 3, y: 1.5 }, { id: 'A6', x: 1.2, y: 4.5 }, { id: 'A1', x: 2.5, y: 8.2 },
        { id: 'B4', x: 10.4, y: 7.8, time: 'b' }, { id: 'BL', x: 9.9, y: 3.2, time: 'b', rotulo: 'L' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [10.2, 3.6], para: [10.2, 7.4], curva: -0.6, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [8.4, 5], para: [8.4, 6.6], numero: 1 },
      ],
      textos: [{ t: 'BLOQUEIO VALE 2', x: 5.4, y: 6.3 }],
    },
    animacao: {
      bolaInicial: naMao('BL', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6), j('A3', 'seta2.b', 0.8, 0.5), s('seta2', 0.8, 0.5)]),
        passo(2, [b(pt(9.2, 7.2), { dur: 0.3 }), b(pt(12, 8.4), { dur: 0.5, atraso: 0.3 })]),
        esperar(3, 1.0),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 1209, secao: 12, nivel: 'Avançado',
    nome: '5 contra 5: quem dá o segundo toque levanta',
    jogadores: '10 jogadores (5 contra 5)', tempo: '20 minutos', material: '1 bola',
    objetivo: 'Jogar sem líbero e sem levantador fixo, decidindo na hora quem levanta, para treinar leitura e comunicação.',
    comoMontar: 'Quadra inteira com 5 de cada lado: 3 na rede e 2 no fundo. Não há levantador definido.',
    passoAPasso: [
      'O jogo começa com saque.',
      'Depois do primeiro toque, o jogador mais perto da bola entre os da rede grita "levanto!" e levanta.',
      'Os outros escolhem quem ataca com chamadas ("minha!", "alta!").',
      'Set até 21 pontos, com rodízio normal.',
    ],
    pontosAtencao: [
      'O primeiro toque vai sempre para o meio da quadra, perto da rede.',
      'Quem levanta decide rápido e chama.',
      'Os atacantes abrem para as pontas logo depois do passe.',
    ],
    erroComum: 'Todos esperarem alguém levantar e a bola cair. Corrija com a regra: o primeiro a gritar "levanto!" levanta.',
    variacaoFacil: '4 contra 4, com 2 na rede e 2 no fundo.',
    variacaoDificil: 'Ataque só da ponta: o central não pode atacar.',
    meta: 'Completar o set com ralis de pelo menos 2 passagens de rede em média.',
    cena: {
      jogadores: [
        { id: 'A1', x: 7.4, y: 1.5 }, { id: 'A2', x: 7.4, y: 4.5 }, { id: 'A3', x: 7.4, y: 7.5 }, { id: 'A4', x: 2.5, y: 2.8 }, { id: 'A5', x: 2.5, y: 6.2 },
        { id: 'B1', x: 10.6, y: 1.5, time: 'b' }, { id: 'B2', x: 10.6, y: 4.5, time: 'b' }, { id: 'B3', x: 10.6, y: 7.5, time: 'b' }, { id: 'B4', x: 15.5, y: 2.8, time: 'b' }, { id: 'B5', x: 18.8, y: 6.2, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [18.4, 6.1], para: [2.8, 2.9], curva: 0.3, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [2.8, 2.9], para: [7, 4.3], curva: -0.4, numero: 2 },
        { id: 'seta3', tipo: 'bola', de: [7, 4.3], para: [7.2, 7.1], curva: -0.6, numero: 3 },
      ],
      textos: [{ t: '"LEVANTO!"', x: 4.9, y: 4.5 }],
    },
    animacao: {
      bolaInicial: naMao('B5', -1),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8)]),
        passo(2, [b('seta2.b', { alta: true, dur: 1.2 }), s('seta2', 1.2), b('seta3.b', { alta: true, dur: 1.2, atraso: 1.3 }), s('seta3', 1.2, 1.3)]),
        passo(3, [b(pt(15, 3), { dur: 0.6 })]),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 1210, secao: 12, nivel: 'Avançado',
    nome: 'Sets de 5 pontos em todos os rodízios',
    jogadores: '12 jogadores (6 contra 6)', tempo: '30 minutos', material: '1 bola',
    objetivo: 'Jogar sob pressão em cada rodízio: sets curtos para descobrir em qual rodízio o time é mais fraco.',
    comoMontar: 'Dois times de 6. Os dois começam no rodízio 1 (levantador na posição 1).',
    passoAPasso: [
      'Joga-se um set de 5 pontos com os dois times fixos nesse rodízio (sem rodar).',
      'Quem saca é sempre o jogador da posição 1, alternando os times.',
      'Ao fim do set curto, os dois times rodam e jogam outro set de 5 pontos.',
      'Depois dos 6 rodízios, cada time soma os sets ganhos e anota o rodízio mais difícil.',
    ],
    pontosAtencao: [
      'Cada set curto é uma "final": concentração desde o primeiro ponto.',
      'Anotar o placar de cada rodízio.',
      'O rodízio mais fraco vira prioridade do próximo treino.',
    ],
    erroComum: 'O time não saber em qual rodízio está e se montar errado. Corrija com o capitão anunciando o rodízio antes de cada set curto.',
    variacaoFacil: 'Sets de 3 pontos.',
    variacaoDificil: 'Sets de 5 pontos com vantagem de 2.',
    meta: 'Ganhar pelo menos 4 dos 6 sets curtos.',
    cena: {
      jogadores: [
        { id: 'A4', x: 7.3, y: 1.5, rotulo: 'O' }, { id: 'A3', x: 7.3, y: 4.5, rotulo: 'C' }, { id: 'A2', x: 7.3, y: 7.5, rotulo: 'P' },
        { id: 'A5', x: 2.5, y: 1.5, rotulo: 'P' }, { id: 'A6', x: 2.5, y: 4.5, rotulo: 'Lb' }, { id: 'A1', x: 2.5, y: 7.5, rotulo: 'L' },
        { id: 'B2', x: 10.7, y: 1.5, time: 'b', rotulo: 'P' }, { id: 'B3', x: 10.7, y: 4.5, time: 'b', rotulo: 'C' }, { id: 'B4', x: 10.7, y: 7.5, time: 'b', rotulo: 'O' },
        { id: 'B1', x: 15.5, y: 1.5, time: 'b', rotulo: 'L' }, { id: 'B6', x: 15.5, y: 4.5, time: 'b', rotulo: 'Lb' }, { id: 'B5', x: 15.5, y: 7.5, time: 'b', rotulo: 'P' },
      ],
      setas: [],
      textos: [{ t: 'RODÍZIO 1 · SET DE 5', x: 4.5, y: 9.6 }],
    },
    animacao: {
      passos: [esperar(1, 1.4), esperar(2, 1.0), esperar(3, 1.0), esperar(4, 1.0)],
    },
  },
]
