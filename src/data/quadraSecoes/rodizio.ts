/**
 * Seção 9 · Rodízio e sistemas (quadra). Conteúdo próprio do vôlei de 6, sem equivalente na areia.
 * O time que treina fica à esquerda (azul), de frente para a rede: posições 4, 3 e 2 na rede
 * (de cima para baixo) e 5, 6 e 1 no fundo. Rodízio no sentido horário: 2→1→6→5→4→3→2.
 * Funções: L levantador, O oposto, P ponteiro, C central, Lb líbero.
 */
import { pt } from '../../lib/quadra/cena'
import { b, esperar, j, passo, pausa, s } from '../animacoesLotes/ajudantes'
import { naMao, type ExercicioComDesenho } from './tipos'

/** Lugar de cada posição (em metros) para o time da esquerda. */
const POS: Record<number, [number, number]> = { 4: [7.3, 1.5], 3: [7.3, 4.5], 2: [7.3, 7.5], 5: [2.5, 1.5], 6: [2.5, 4.5], 1: [2.5, 7.5] }
/** Próxima posição no rodízio. */
const PROXIMA: Record<number, number> = { 2: 1, 1: 6, 6: 5, 5: 4, 4: 3, 3: 2 }

/** Seta do rodízio de uma posição para a próxima, encurtada para não passar por cima dos jogadores. */
function setaDoRodizio(de: number, id: string): { id: string; tipo: 'jogador'; de: [number, number]; para: [number, number] } {
  const [x1, y1] = POS[de]!
  const [x2, y2] = POS[PROXIMA[de]!]!
  const dx = x2 - x1
  const dy = y2 - y1
  const n = Math.hypot(dx, dy)
  const k = 0.8 / n
  return { id, tipo: 'jogador', de: [x1 + dx * k, y1 + dy * k], para: [x2 - dx * k, y2 - dy * k] }
}

/** Seis jogadores nas posições, com o rótulo de cada um. */
const time = (rotulos: Record<number, string>): Array<{ id: string; x: number; y: number; rotulo: string }> =>
  [4, 3, 2, 5, 6, 1].map((p) => ({ id: `P${p}`, x: POS[p]![0], y: POS[p]![1], rotulo: rotulos[p]! }))

/** Todos andam uma posição no rodízio. */
const rodar = (dur = 1.4): ReturnType<typeof j>[] => [4, 3, 2, 5, 6, 1].map((p) => j(`P${p}`, pt(...POS[PROXIMA[p]!]!), dur))

export const RODIZIO: ExercicioComDesenho[] = [
  {
    numero: 901, secao: 9, nivel: 'Iniciante',
    nome: 'As 6 posições e o sentido do rodízio',
    jogadores: '6 jogadores', tempo: '8 minutos', material: 'Nenhum',
    objetivo: 'Conhecer as 6 posições da quadra e girar no sentido certo a cada vez que o time recupera o saque.',
    comoMontar: 'Seis jogadores ocupam as posições: 4, 3 e 2 junto à rede (da esquerda para a direita de quem olha a rede) e 5, 6 e 1 no fundo. Cada um diz em voz alta o número da sua posição.',
    passoAPasso: [
      'Cada jogador fica na sua posição e fala o número dela: 4, 3 e 2 na rede; 5, 6 e 1 no fundo.',
      'Alguém grita "roda!" e todos andam uma posição no sentido horário: quem está na 2 vai para a 1, a 1 vai para a 6, e assim por diante.',
      'Quem chegou na posição 1 é quem saca.',
      'Repetir até o time voltar à posição inicial (6 rodízios), falando o número da nova posição a cada vez.',
    ],
    pontosAtencao: [
      'O rodízio só acontece quando o time ganha o direito de sacar.',
      'Sentido horário: da rede para o fundo pela direita, do fundo para a rede pela esquerda.',
      'Quem saca é sempre quem está na posição 1.',
    ],
    erroComum: 'Girar no sentido contrário. Corrija lembrando: "a 2 vai sacar", ou seja, quem está na rede à direita é o próximo sacador.',
    variacaoFacil: 'Marcar as posições com cones numerados.',
    variacaoDificil: 'Rodar de olhos fechados para a nova posição e conferir depois.',
    meta: 'Fazer os 6 rodízios seguidos sem ninguém errar a posição.',
    cena: {
      jogadores: time({ 4: '4', 3: '3', 2: '2', 5: '5', 6: '6', 1: '1' }),
      setas: [setaDoRodizio(2, 'seta1'), setaDoRodizio(1, 'seta2'), setaDoRodizio(6, 'seta3'), setaDoRodizio(5, 'seta4'), setaDoRodizio(4, 'seta5'), setaDoRodizio(3, 'seta6')],
      textos: [{ t: 'SENTIDO HORÁRIO', x: 4.9, y: 3 }, { t: 'SACA', x: 2.5, y: 8.8 }],
    },
    animacao: {
      passos: [
        esperar(1, 1.6),
        passo(2, [s('seta1', 0.8), s('seta2', 0.8), s('seta3', 0.8), s('seta4', 0.8), s('seta5', 0.8), s('seta6', 0.8), ...rodar(1.4).map((a) => ({ ...a, atraso: 0.9 }))]),
        esperar(3, 1.4),
        passo(4, [4, 3, 2, 5, 6, 1].map((p) => j(`P${p}`, `P${p}`, 1.2))),
      ],
    },
  },
  {
    numero: 902, secao: 9, nivel: 'Iniciante',
    nome: 'Na hora do saque: ninguém fora de ordem',
    jogadores: '6 jogadores', tempo: '8 minutos', material: 'Nenhum',
    objetivo: 'Entender a regra de posição no momento do saque: cada jogador da rede à frente do seu par do fundo, e a ordem da esquerda para a direita respeitada.',
    comoMontar: 'Seis jogadores nas posições. Um sétimo jogador (ou o treinador) fica fora da quadra e dá o comando "saque!".',
    passoAPasso: [
      'Os jogadores se espalham pela quadra, longe das suas posições.',
      'No comando "saque!", todos param onde quiserem, mas respeitando a ordem: 4 à frente do 5, 3 à frente do 6, 2 à frente do 1.',
      'Também da esquerda para a direita: 4 à esquerda do 3, 3 à esquerda do 2 (e 5, 6 e 1 no fundo, na mesma ordem).',
      'O treinador confere os pares. Depois de cada acerto, o time roda e repete.',
    ],
    pontosAtencao: [
      'A regra vale só no momento do saque: depois, cada um vai para onde quiser.',
      'Basta um pé à frente do pé do par para estar certo.',
      'Isso permite "esconder" jogadores e fazer formações de recepção.',
    ],
    erroComum: 'Achar que cada jogador tem que estar dentro do "quadrado" da sua posição. Corrija mostrando que só a ordem entre vizinhos importa.',
    variacaoFacil: 'Conferir só os pares da frente e do fundo.',
    variacaoDificil: 'Montar uma formação de recepção (3 no fundo, 2 escondidos na rede) sem ficar fora de ordem.',
    meta: 'Montar 6 rodízios seguidos sem nenhuma falta de posição.',
    cena: {
      jogadores: [
        { id: 'P4', x: 6.6, y: 1, rotulo: '4' }, { id: 'P3', x: 7.8, y: 3.6, rotulo: '3' }, { id: 'P2', x: 6.4, y: 7.4, rotulo: '2' },
        { id: 'P5', x: 3, y: 2.6, rotulo: '5' }, { id: 'P6', x: 1.6, y: 4.8, rotulo: '6' }, { id: 'P1', x: 3.6, y: 8.2, rotulo: '1' },
      ],
      setas: [
        { id: 'seta1', tipo: 'jogador', de: [3.5, 2.4], para: [6.1, 1.2] },
        { id: 'seta2', tipo: 'jogador', de: [2.1, 4.7], para: [7.3, 3.8] },
        { id: 'seta3', tipo: 'jogador', de: [4.1, 8.1], para: [5.9, 7.5] },
      ],
      textos: [{ t: 'FRENTE × FUNDO', x: 4.8, y: 6.2 }],
    },
    animacao: {
      passos: [
        esperar(1, 1.2),
        passo(2, [s('seta1', 0.8), s('seta2', 0.8), s('seta3', 0.8)]),
        esperar(3, 1.4),
        esperar(4, 1.0),
      ],
    },
  },
  {
    numero: 903, secao: 9, nivel: 'Intermediário',
    nome: 'Sistema 5x1: as duplas em diagonal',
    jogadores: '6 jogadores', tempo: '10 minutos', material: 'Nenhum',
    objetivo: 'Montar o time no sistema 5x1 (um levantador e cinco atacantes) e entender por que cada dupla fica em diagonal.',
    comoMontar: 'Distribua as funções: L (levantador) na posição 1, P (ponteiro) na 2, C (central) na 3, O (oposto) na 4, outro P na 5 e outro C na 6.',
    passoAPasso: [
      'Confira as diagonais: L e O (posições 1 e 4), os dois P (2 e 5) e os dois C (3 e 6).',
      'O time roda uma posição e todos conferem: as duplas continuam em diagonal.',
      'Contem quantos atacantes estão na rede: com L no fundo são 3 (O, C e P); com L na rede, são 2.',
      'Rodar as 6 vezes, dizendo a cada uma quem está na rede e quantos atacam lá.',
    ],
    pontosAtencao: [
      'Em diagonal, os dois de cada função nunca estão juntos na rede.',
      'Sempre há um ponteiro e um central na rede.',
      'O oposto é a "outra ponta" do levantador: quando um está na rede, o outro está no fundo.',
    ],
    erroComum: 'Colocar os dois centrais lado a lado. Corrija desenhando no chão (ou num papel) a diagonal de cada dupla.',
    variacaoFacil: 'Usar coletes de cores diferentes para cada função.',
    variacaoDificil: 'O treinador grita um rodízio ("L na 3!") e o time se monta direto nele.',
    meta: 'Montar os 6 rodízios do 5x1 sem errar nenhuma diagonal.',
    cena: {
      jogadores: time({ 4: 'O', 3: 'C', 2: 'P', 5: 'P', 6: 'C', 1: 'L' }),
      setas: [
        { id: 'seta1', tipo: 'jogador', de: [3.1, 7], para: [6.7, 2] },
        { id: 'seta2', tipo: 'jogador', de: [3.1, 2], para: [6.7, 7] },
      ],
      textos: [{ t: 'L E O EM DIAGONAL', x: 4.9, y: 8.7 }],
    },
    animacao: {
      passos: [
        passo(1, [s('seta1', 1.0), s('seta2', 1.0, 0.6)]),
        passo(2, [...rodar(1.4)]),
        esperar(3, 1.6),
        passo(4, [...rodar(1.4)]),
      ],
    },
  },
  {
    numero: 904, secao: 9, nivel: 'Intermediário',
    nome: 'Infiltração: o levantador sai do fundo para a rede',
    jogadores: '7 jogadores (6 do time e 1 sacador)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Quando o levantador está no fundo, fazer ele chegar à zona do levantador a tempo, sem atrapalhar a recepção.',
    comoMontar: 'O time se monta com L na posição 1. Do outro lado, J1 saca. Marque a zona do levantador junto à rede, entre as posições 2 e 3.',
    passoAPasso: [
      'L fica na posição 1, atrás do jogador da posição 2, respeitando a ordem do saque.',
      'No momento do saque de J1, L corre pela lateral até a zona do levantador.',
      'Os receptores mandam a bola para a zona; L chega antes da bola e levanta.',
      'O time ataca. Depois de 6 saques, o time roda e repete com L na posição 6 e depois na 5.',
    ],
    pontosAtencao: [
      'L só pode sair depois do contato do saque (antes, é falta de posição).',
      'Correr pela lateral, sem passar na frente dos receptores.',
      'Da posição 1 o caminho é curto; da 5, é o mais longo.',
    ],
    erroComum: 'L sair antes do saque e cometer falta de posição. Corrija pedindo para L esperar o som da mão na bola.',
    variacaoFacil: 'J1 lança a bola em vez de sacar, bem alta.',
    variacaoDificil: 'J1 saca na direção do caminho de L, para atrapalhar a infiltração.',
    meta: 'L chega à zona antes da bola em 5 de 6 saques, em cada rodízio.',
    cena: {
      jogadores: [...time({ 4: 'O', 3: 'C', 2: 'P', 5: 'P', 6: 'C', 1: 'L' }), { id: 'J1', x: 18.8, y: 4.5, time: 'b' }],
      zonas: [{ id: 'zonaL', x: 6.6, y: 4.6, l: 2.4, a: 2.6, rotulo: 'LEVANTADOR' }],
      setas: [
        { id: 'seta1', tipo: 'jogador', de: [2.9, 7.8], para: [7.6, 6.3], curva: 0.3, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [18.4, 4.4], para: [2.9, 2], curva: 0.4, numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [2.9, 2], para: [7.9, 5.6], curva: 0.5, numero: 2 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J1', -1),
      passos: [
        esperar(1, 1.0),
        passo(2, [b('seta2.b', { alta: true, dur: 1.8 }), s('seta2', 1.8), j('P1', 'seta1.b', 1.3, 0.1), s('seta1', 1.3, 0.1)]),
        passo(3, [b('seta3.b', { alta: true, dur: 1.3 }), s('seta3', 1.3)]),
        passo(4, [b(pt(7.6, 1.5), { alta: true, dur: 1.2 }), b(pt(15, 3), { dur: 0.5, atraso: 1.4 }), j('P1', 'P1', 1.2, 1.8)]),
      ],
    },
  },
  {
    numero: 905, secao: 9, nivel: 'Intermediário',
    nome: 'Recepção em 3 com o líbero',
    jogadores: '7 jogadores (6 do time e 1 sacador)', tempo: '12 minutos', material: '8 bolas',
    objetivo: 'Montar a recepção com três passadores (dois ponteiros e o líbero) e "esconder" quem não recebe.',
    comoMontar: 'O time se monta com o líbero (Lb) no lugar do central do fundo. Os passadores são P, Lb e P, em linha no fundo. O levantador, o central da rede e o oposto ficam perto da rede, sem atrapalhar.',
    passoAPasso: [
      'P, Lb e P se espalham no fundo da quadra, cada um com um terço da largura.',
      'Quem não recebe se encosta na rede ou na lateral, respeitando a ordem do saque.',
      'J1 saca e o passador da vez manda a bola para a zona do levantador.',
      'O time ataca e, a cada 5 saques, roda e remonta a recepção.',
    ],
    pontosAtencao: [
      'O líbero fica no meio: é o melhor passador e pega mais bolas.',
      'Quem está escondido não pode atrapalhar os passadores.',
      'Os três chamam "minha!" cedo nas bolas entre dois.',
    ],
    erroComum: 'O oposto ou o central tentarem receber e se atrapalharem com os passadores. Corrija combinando: só P, Lb e P recebem.',
    variacaoFacil: 'Recepção em 4 (com o oposto ajudando no fundo).',
    variacaoDificil: 'Recepção em 2 (só o líbero e um ponteiro), contra saque fraco.',
    meta: 'Mandar 6 de 10 recepções para a zona do levantador, sem bolas entre dois passadores.',
    cena: {
      jogadores: [
        { id: 'P5', x: 3, y: 1.6, rotulo: 'P' }, { id: 'Lb', x: 2.2, y: 4.5, rotulo: 'Lb' }, { id: 'P1', x: 3, y: 7.4, rotulo: 'P' },
        { id: 'L', x: 8.2, y: 6.4, rotulo: 'L' }, { id: 'C', x: 8.4, y: 3.8, rotulo: 'C' }, { id: 'O', x: 8.4, y: 8.4, rotulo: 'O' },
        { id: 'J1', x: 18.8, y: 4.5, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [18.4, 4.4], para: [2.6, 4.6], curva: 0.3, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [2.6, 4.6], para: [7.8, 6.1], curva: -0.5, numero: 2 },
      ],
      textos: [{ t: 'ESCONDIDOS NA REDE', x: 6.4, y: 0.6 }, { t: 'PASSADORES', x: 1, y: 6.2 }],
    },
    animacao: {
      bolaInicial: naMao('J1', -1),
      passos: [
        esperar(1, 1.2),
        esperar(2, 1.0),
        passo(3, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8), b('seta2.b', { alta: true, dur: 1.3, atraso: 1.9 }), s('seta2', 1.3, 1.9)]),
        passo(4, [b(pt(7.6, 1.5), { alta: true, dur: 1.2 }), b(pt(15, 3), { dur: 0.5, atraso: 1.4 })]),
      ],
    },
  },
  {
    numero: 906, secao: 9, nivel: 'Intermediário',
    nome: 'Troca de posição depois do saque',
    jogadores: '6 jogadores', tempo: '10 minutos', material: '4 bolas',
    objetivo: 'Depois do saque, levar cada jogador para a posição em que ele joga melhor (ponteiro na 4, central na 3, oposto na 2, levantador na 1).',
    comoMontar: 'Monte o time no sistema 5x1 neste rodízio: na rede, C na posição 4, P na 3 e O na 2; no fundo, L na 5, P na 6 e C na 1. O central da posição 1 é quem saca.',
    passoAPasso: [
      'O central da posição 1 saca.',
      'Logo depois do contato do saque, na rede, P (posição 3) e C (posição 4) trocam: P vai para a 4 e C para a 3. O oposto já está na 2.',
      'No fundo, L vai da posição 5 para a 1, de onde defende e infiltra mais fácil, e quem sacou vai para a 5.',
      'O time fica em base de defesa nas novas posições. Depois de cada saque, o time roda e confere as trocas do novo rodízio.',
    ],
    pontosAtencao: [
      'Trocar só depois do saque: antes é falta de posição.',
      'Trocar rápido, cruzando por trás um do outro, para não se chocar.',
      'Cada um já sabe, antes do saque, para onde vai.',
    ],
    erroComum: 'Esquecer a troca e defender fora da posição de costume. Corrija com o treinador gritando "troca!" no momento do saque nas primeiras vezes.',
    variacaoFacil: 'Fazer só a troca da rede.',
    variacaoDificil: 'O adversário ataca logo depois do saque, e o time tem que trocar e defender.',
    meta: 'Fazer as trocas certas nos 6 rodízios, sem bater um no outro.',
    cena: {
      jogadores: [...time({ 4: 'C', 3: 'P', 2: 'O', 5: 'L', 6: 'P', 1: 'C' })],
      setas: [
        { id: 'seta1', tipo: 'jogador', de: [7.9, 4], para: [7.9, 2.1], curva: -0.3, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [6.6, 2], para: [6.6, 3.9], curva: -0.3, numero: 2 },
        { id: 'seta3', tipo: 'jogador', de: [2.9, 2.1], para: [2.9, 6.9], curva: 0.4, numero: 3 },
        { id: 'seta4', tipo: 'jogador', de: [2.1, 6.9], para: [2.1, 2.1], curva: 0.4, numero: 4 },
      ],
      textos: [{ t: 'SACA', x: 2.5, y: 8.8 }],
    },
    animacao: {
      passos: [
        passo(1, [b(pt(14, 4), { de: pt(2.9, 7.3), alta: true, dur: 1.4 })]),
        passo(2, [j('P3', pt(7.3, 1.5), 1.2), j('P4', pt(7.3, 4.5), 1.2), s('seta1', 1.2), s('seta2', 1.2)]),
        passo(3, [j('P5', pt(2.5, 7.5), 1.2), j('P1', pt(2.5, 1.5), 1.2), s('seta3', 1.2), s('seta4', 1.2)]),
        esperar(4, 1.2),
      ],
    },
  },
  {
    numero: 907, secao: 9, nivel: 'Intermediário',
    nome: 'Entrada e saída do líbero',
    jogadores: '7 jogadores (6 do time e 1 líbero)', tempo: '10 minutos', material: 'Nenhum',
    objetivo: 'Treinar a troca do líbero com o central que vai para o fundo, sem atrasar o jogo.',
    comoMontar: 'O time em quadra com os dois centrais. O líbero (Lb) espera fora da quadra, na lateral do banco, entre a linha dos 3 metros e a linha de fundo (zona de substituição do líbero).',
    passoAPasso: [
      'O time roda e o central chega ao fundo da quadra.',
      'Assim que a bola fica fora de jogo, o central sai pela lateral, na zona de substituição, e o líbero entra no lugar dele.',
      'O líbero joga no fundo; quando o central voltaria para a rede (rodando para a posição 4), o líbero sai e o central entra.',
      'Repetir os 6 rodízios, fazendo cada troca no momento certo.',
    ],
    pontosAtencao: [
      'Troca rápida, pela lateral, entre a linha dos 3 metros e a de fundo.',
      'O líbero nunca vai para a rede: ele sai antes.',
      'O líbero não saca no lugar do central (em várias competições, pode sacar por um único jogador: combine a regra do seu campeonato).',
    ],
    erroComum: 'Esquecer de trocar o líbero quando o central volta para a rede. Corrija com o líbero dizendo em voz alta "saio!" sempre que o central chega à posição 5.',
    variacaoFacil: 'Fazer as trocas parados, sem bola.',
    variacaoDificil: 'Jogar um set curto com as trocas valendo.',
    meta: 'Fazer todas as entradas e saídas do líbero certas em 6 rodízios.',
    cena: {
      jogadores: [...time({ 4: 'O', 3: 'C', 2: 'P', 5: 'P', 6: 'C', 1: 'L' }), { id: 'Lb', x: 4, y: 9.4, rotulo: 'Lb' }],
      zonas: [{ id: 'subst', x: 0, y: 9.05, l: 6, a: 0.35 }],
      setas: [
        { id: 'seta1', tipo: 'jogador', de: [2.8, 5], para: [3.2, 8.6], curva: 0.3, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [4, 8.8], para: [3, 5], curva: 0.3, numero: 2 },
      ],
      textos: [{ t: 'ZONA DE TROCA', x: 6.6, y: 9.6 }],
    },
    animacao: {
      passos: [
        esperar(1, 1.2),
        passo(2, [j('P6', pt(3.2, 9.6), 1.2), s('seta1', 1.2), j('Lb', 'P6', 1.2, 0.6), s('seta2', 1.2, 0.6)]),
        esperar(3, 1.4),
        passo(4, [pausa(0.4)]),
      ],
    },
  },
  {
    numero: 908, secao: 9, nivel: 'Avançado',
    nome: 'Os 6 rodízios do 5x1 na recepção',
    jogadores: '7 jogadores (6 do time e 1 sacador)', tempo: '15 minutos', material: '10 bolas',
    objetivo: 'Montar a formação de recepção certa em cada um dos 6 rodízios, com o levantador infiltrando e os passadores no fundo.',
    comoMontar: 'O time no sistema 5x1, com líbero. J1 saca do outro lado. Comece com L na posição 1.',
    passoAPasso: [
      'O time monta a recepção do rodízio: passadores no fundo, quem não recebe escondido, sem falta de posição.',
      'J1 saca; o time recebe, levanta e ataca.',
      'Ganhando o ponto, o time roda e monta a recepção do próximo rodízio.',
      'Seguir até passar pelos 6 rodízios. Errou a formação? Volta um rodízio.',
    ],
    pontosAtencao: [
      'Cada rodízio tem uma "fotografia": treine até todos saberem onde ficar.',
      'Os rodízios com L na rede (2, 3 e 4) só têm 2 atacantes na rede.',
      'Conferir os pares (frente e fundo, esquerda e direita) antes de cada saque.',
    ],
    erroComum: 'O time demorar para se montar e o árbitro apitar o saque com gente fora do lugar. Corrija com 5 segundos de prazo para montar.',
    variacaoFacil: 'Montar sem saque, só a formação, conferida pelo treinador.',
    variacaoDificil: 'O adversário saca forte e o rodízio só avança se o time fizer o ponto de primeira.',
    meta: 'Passar pelos 6 rodízios voltando no máximo 2 vezes.',
    cena: {
      jogadores: [...time({ 4: 'O', 3: 'C', 2: 'P', 5: 'P', 6: 'Lb', 1: 'L' }), { id: 'J1', x: 18.8, y: 4.5, time: 'b' }],
      setas: [setaDoRodizio(2, 'seta1'), setaDoRodizio(1, 'seta2'), setaDoRodizio(6, 'seta3'), setaDoRodizio(5, 'seta4'), setaDoRodizio(4, 'seta5'), setaDoRodizio(3, 'seta6')],
      textos: [{ t: '6 RODÍZIOS', x: 4.9, y: 3 }],
    },
    animacao: {
      bolaInicial: naMao('J1', -1),
      passos: [
        esperar(1, 1.2),
        passo(2, [b(pt(2.6, 4.7), { alta: true, dur: 1.8 }), b(pt(7.8, 5.8), { alta: true, dur: 1.3, atraso: 1.9 })]),
        passo(3, [s('seta1', 0.8), s('seta2', 0.8), s('seta3', 0.8), s('seta4', 0.8), s('seta5', 0.8), s('seta6', 0.8), ...rodar(1.4).map((a) => ({ ...a, atraso: 0.9 }))]),
        esperar(4, 1.4),
      ],
    },
  },
  {
    numero: 909, secao: 9, nivel: 'Avançado',
    nome: 'Sistema de defesa contra a entrada de rede',
    jogadores: '8 jogadores (6 na defesa, 1 levantador e 1 atacante)', tempo: '15 minutos', material: '10 bolas',
    objetivo: 'Organizar os 6 na defesa: bloqueio duplo, um jogador da rede recuando para a largada e três no fundo.',
    comoMontar: 'O time em posição de defesa. Do outro lado, L levanta para J1 na entrada de rede deles (de frente para a posição 2 do time).',
    passoAPasso: [
      'L levanta para J1. O jogador da posição 2 e o central formam o bloqueio duplo.',
      'O jogador da posição 4 recua até a linha dos 3 metros para cobrir a largada e a diagonal curta.',
      'No fundo: posição 1 na paralela, posição 5 na diagonal longa e posição 6 no fundo da quadra.',
      'J1 ataca; quem defender manda para o meio e o time contra-ataca. Depois de 10 bolas, roda.',
    ],
    pontosAtencao: [
      'Cada um sai da sombra do bloqueio para ver a bola.',
      'Todos param em base antes do ataque.',
      'O jogador recuado da rede cobre a largada, não o ataque forte.',
    ],
    erroComum: 'O jogador da posição 4 ficar na rede sem função. Corrija pedindo que ele recue logo que a bola for levantada para o outro lado da quadra.',
    variacaoFacil: 'J1 ataca em pé, de bola lançada.',
    variacaoDificil: 'O levantador adversário alterna entrada e saída de rede, e o time muda a formação.',
    meta: 'Defender 5 de 10 ataques e contra-atacar pelo menos 3 vezes.',
    cena: {
      jogadores: [
        ...time({ 4: '4', 3: 'C', 2: '2', 5: '5', 6: '6', 1: '1' }),
        { id: 'L', x: 9.9, y: 3.2, time: 'b', rotulo: 'L' }, { id: 'J1', x: 10.4, y: 7.8, time: 'b' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [10.2, 3.6], para: [10.2, 7.4], curva: -0.6, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [7.3, 5], para: [7.6, 6.7], numero: 1 },
        { id: 'seta3', tipo: 'jogador', de: [7, 2], para: [5.4, 2.4], numero: 2 },
        { id: 'seta4', tipo: 'jogador', de: [2.5, 2], para: [3.2, 0.9], numero: 3 },
        { id: 'seta5', tipo: 'jogador', de: [2.5, 5], para: [1.2, 5], numero: 4 },
      ],
      textos: [{ t: 'BLOQUEIO DUPLO', x: 5.2, y: 8.7 }],
    },
    animacao: {
      bolaInicial: naMao('L', 1, 0),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6), j('P3', pt(7.6, 7.1), 0.8, 0.4), s('seta2', 0.8, 0.4)]),
        passo(2, [j('P4', 'seta3.b', 0.8), s('seta3', 0.8)], { junto: 0.6 }),
        passo(3, [j('P5', 'seta4.b', 0.6), s('seta4', 0.6), j('P6', 'seta5.b', 0.6), s('seta5', 0.6), j('P1', pt(2.2, 8.3), 0.6)], { junto: 0.2 }),
        passo(4, [b(pt(3.2, 1.2), { dur: 0.6 }), b(pt(6, 4.6), { alta: true, dur: 1.2, atraso: 0.6 })]),
      ],
    },
  },
  {
    numero: 910, secao: 9, nivel: 'Avançado',
    nome: 'Jogo 6 contra 6 valendo o rodízio',
    jogadores: '12 jogadores (6 contra 6)', tempo: '20 minutos', material: '1 bola e 1 apito',
    objetivo: 'Jogar um set curto em que o rodízio e a ordem do saque são cobrados com rigor, para fixar tudo da seção.',
    comoMontar: 'Dois times de 6, cada um no sistema que treina (5x1 ou outro). Um árbitro (ou o treinador) confere as posições antes de cada saque.',
    passoAPasso: [
      'Antes de cada saque, os dois times se montam e o árbitro confere a ordem.',
      'Time fora de posição no saque perde o ponto, como na regra oficial.',
      'Time que recupera o saque roda antes de sacar.',
      'Set até 15 pontos. No fim, cada time conta quantos pontos perdeu por posição e quantos rodízios fez certo.',
    ],
    pontosAtencao: [
      'Conferir o vizinho antes do saque: frente, fundo e lados.',
      'Rodar sempre antes de sacar, não depois.',
      'O capitão confirma com o árbitro quem é o sacador.',
    ],
    erroComum: 'Sacar o jogador errado depois de uma sequência longa de pontos. Corrija com o capitão dizendo o nome do sacador em voz alta a cada rodízio.',
    variacaoFacil: 'Pausa de 10 segundos antes de cada saque para todos conferirem.',
    variacaoDificil: 'Ponto perdido por posição vale 2.',
    meta: 'Terminar o set sem nenhum ponto perdido por falta de posição.',
    cena: {
      jogadores: [
        ...time({ 4: '4', 3: '3', 2: '2', 5: '5', 6: '6', 1: '1' }),
        { id: 'B4', x: 10.7, y: 7.5, time: 'b', rotulo: '4' }, { id: 'B3', x: 10.7, y: 4.5, time: 'b', rotulo: '3' }, { id: 'B2', x: 10.7, y: 1.5, time: 'b', rotulo: '2' },
        { id: 'B5', x: 15.5, y: 7.5, time: 'b', rotulo: '5' }, { id: 'B6', x: 15.5, y: 4.5, time: 'b', rotulo: '6' }, { id: 'B1', x: 18.8, y: 1.5, time: 'b', rotulo: '1' },
      ],
      setas: [{ id: 'seta1', tipo: 'bola', de: [18.4, 1.6], para: [2.9, 4.3], curva: 0.3, numero: 1 }],
      textos: [{ t: 'SACA', x: 18.8, y: 2.8 }],
    },
    animacao: {
      bolaInicial: naMao('B1', -1),
      passos: [
        esperar(1, 1.6),
        esperar(2, 0.8),
        passo(3, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8)]),
        esperar(4, 1.2),
      ],
    },
  },
]
