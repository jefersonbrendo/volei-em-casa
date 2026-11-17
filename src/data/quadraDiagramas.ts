/**
 * Desenho (em metros) e linha do tempo de cada exercício do vôlei de quadra (src/data/quadra.ts).
 * Mesmo motor de animação da areia (ver o cabeçalho de src/data/animacoes.ts): `texto` é o item
 * do passo a passo; ids de jogador valem a posição INICIAL do desenho; 'seta2.b' é a chegada da seta 2.
 *
 * Desenho: o time que saca fica à esquerda (jogadores azuis) e a recepção à direita (verdes).
 * Para quem saca, a lateral de baixo (y = 9) fica à direita; para quem recebe, a de cima (y = 0).
 */
import type { Animacao } from '../lib/animacao/tipos'
import { pt, type DescricaoQuadra } from '../lib/quadra/cena'
import { b, esperar, j, passo, pausa, s } from './animacoesLotes/ajudantes'
import { EXERCICIOS_COM_DESENHO } from './quadraSecoes'

export interface DiagramaQuadra {
  cena: DescricaoQuadra
  animacao?: Animacao
}

/** A bola na mão de quem saca (um pouco à frente e acima do jogador). */
const naMao = (id: string, dy = -2): { ref: string; dx: number; dy: number } => ({ ref: id, dx: 3, dy })

const SAQUE: Record<number, DiagramaQuadra> = {
  // 1 · Saque por baixo com aproximação progressiva
  1: {
    cena: {
      jogadores: [{ id: 'J1', x: 3, y: 4.5 }, { id: 'J2', x: 15.5, y: 4.5, time: 'b' }],
      cones: [{ id: 'cone1', x: 3, y: 6.3 }, { id: 'cone2', x: 0, y: 6.3 }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [3.3, 4.3], para: [14, 4], curva: 0.6, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [3, 4.5], para: [-0.7, 4.5], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [14.6, 5.2], para: [9.6, 6.6], numero: 2 },
      ],
      textos: [{ t: '6 m DA REDE', x: 3, y: 7.4 }, { t: 'FUNDO', x: 0, y: 7.4 }],
    },
    animacao: {
      bolaInicial: naMao('J1', 2),
      passos: [
        esperar(1, 1.2),
        passo(2, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        passo(3, [j('J1', pt(1.5, 4.5), 1.0), s('seta2', 1.0, 0, { ate: 0.4 })]),
        passo(4, [j('J1', 'seta2.b', 1.0), s('seta2', 1.0, 0, { de: 0.4 }), b(pt(14.5, 5.5), { de: pt(-0.4, 4.4), alta: true, dur: 1.5, atraso: 1.1 })]),
        passo(5, [j('J2', 'seta3.a', 0.9), b('seta3.b', { dur: 1.4, atraso: 0.9 }), s('seta3', 1.4, 0.9)]),
      ],
    },
  },

  // 2 · Saque por cima parado da linha de fundo
  2: {
    cena: {
      jogadores: [{ id: 'J1', x: -0.8, y: 4.5 }, { id: 'J2', x: 15.5, y: 4.5, time: 'b' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [-0.4, 4.2], para: [14.2, 3.8], curva: 0.5, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [-0.8, 4.5], para: [1.8, 7.3], curva: -0.3, numero: 1 },
      ],
      textos: [{ t: 'POSIÇÃO 1', x: 1.8, y: 8.4 }],
    },
    animacao: {
      bolaInicial: naMao('J1'),
      passos: [
        esperar(1, 1.2),
        passo(2, [b(naMao('J1', -9), { dur: 0.6 }), pausa(0.3)]),
        passo(3, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        passo(4, [j('J1', 'seta2.b', 1.3), s('seta2', 1.3)]),
        passo(5, [j('J2', 'seta1.b', 0.9)]),
      ],
    },
  },

  // 3 · Saque nas zonas de fundo: 1, 6 e 5
  3: {
    cena: {
      jogadores: [{ id: 'J1', x: -0.8, y: 4.5 }, { id: 'J2', x: 13.4, y: -0.35, time: 'b' }],
      zonas: [
        { id: 'zona1', x: 15, y: 0, l: 3, a: 3, rotulo: 'ZONA 1' },
        { id: 'zona6', x: 15, y: 3, l: 3, a: 3, rotulo: 'ZONA 6' },
        { id: 'zona5', x: 15, y: 6, l: 3, a: 3, rotulo: 'ZONA 5' },
      ],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [-0.4, 4.2], para: [16.2, 1.4], curva: 0.5, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [-0.4, 4.2], para: [16.2, 4.4], curva: 0.4, numero: 2 },
        { id: 'seta3', tipo: 'bola', de: [-0.4, 4.2], para: [16.2, 7.5], curva: 0.2, numero: 3 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J1'),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        passo(2, [b('seta2.b', { de: naMao('J1'), alta: true, dur: 1.4 }), s('seta2', 1.4)]),
        passo(3, [b('seta3.b', { de: naMao('J1'), alta: true, dur: 1.4 }), s('seta3', 1.4)]),
        esperar(4, 1.6),
      ],
    },
  },

  // 4 · Saque flutuante: bola sem rotação
  4: {
    cena: {
      jogadores: [{ id: 'J1', x: -0.8, y: 4.5 }, { id: 'J2', x: 16, y: 4.5, time: 'b' }],
      zonas: [{ id: 'zona6', x: 15, y: 3, l: 3, a: 3, rotulo: 'ZONA 6' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [-0.4, 4.2], para: [15.4, 4.4], curva: 0.15, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [15.6, 5], para: [10.6, 6.4], curva: -0.5, numero: 2 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J1'),
      passos: [
        passo(1, [b(naMao('J1', -6), { dur: 0.5 }), pausa(0.2)]),
        passo(2, [b('seta1.b', { dur: 1.3 }), s('seta1', 1.3)]),
        esperar(3, 0.8),
        passo(4, [b('seta2.b', { alta: true, dur: 1.3 }), s('seta2', 1.3)]),
        esperar(5, 1),
      ],
    },
  },

  // 5 · Saque na paralela: corredor da linha lateral
  5: {
    cena: {
      jogadores: [{ id: 'J1', x: -0.8, y: 7.8 }, { id: 'J2', x: 16, y: 3.5, time: 'b' }],
      zonas: [{ id: 'corredor', x: 12, y: 7.5, l: 6, a: 1.5, rotulo: 'CORREDOR' }],
      cones: [{ id: 'cone1', x: 12, y: 7.5 }, { id: 'cone2', x: 18, y: 7.5 }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [-0.4, 7.6], para: [16.8, 8.2], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [-0.3, 7.2], para: [-0.3, 1.4], curva: -0.4, numero: 1 },
      ],
      textos: [{ t: '2 PONTOS', x: 15, y: 6.9 }],
    },
    animacao: {
      bolaInicial: naMao('J1'),
      passos: [
        esperar(1, 1.2),
        passo(2, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        esperar(3, 1.4),
        passo(4, [j('J1', 'seta2.b', 1.6), s('seta2', 1.6)]),
        passo(5, [j('J2', 'seta1.b', 1.1)]),
      ],
    },
  },

  // 6 · Saque curto na zona de ataque
  6: {
    cena: {
      jogadores: [{ id: 'J1', x: -0.8, y: 4.5 }, { id: 'J2', x: 15.5, y: 4.5, time: 'b' }],
      zonas: [{ id: 'faixa', x: 9, y: 0, l: 3, a: 9, rotulo: 'ZONA DE ATAQUE' }],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [-0.4, 4.2], para: [10.6, 4.2], curva: 0.7, numero: 1 },
        { id: 'seta2', tipo: 'jogador', de: [15.5, 4.5], para: [11.8, 4.9], numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [-0.4, 4.2], para: [16.2, 1.8], curva: 0.4, numero: 2 },
      ],
    },
    animacao: {
      bolaInicial: naMao('J1'),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6)]),
        passo(2, [j('J2', 'seta2.b', 0.9), s('seta2', 0.9)], { junto: 0.8 }),
        passo(3, [b(pt(11.4, 2.6), { alta: true, dur: 1.1 })]),
        passo(4, [j('J2', 'J2', 1.0), b('seta3.b', { de: naMao('J1'), alta: true, dur: 1.4, atraso: 0.4 }), s('seta3', 1.4, 0.4)]),
        esperar(5, 1),
      ],
    },
  },

  // 7 · Saque viagem com salto
  7: {
    cena: {
      jogadores: [{ id: 'J1', x: -1.1, y: 4.5 }, { id: 'J2', x: 15.6, y: 3, time: 'b' }],
      cones: [{ id: 'cone1', x: -1.1, y: 6 }],
      setas: [
        { id: 'seta1', tipo: 'jogador', de: [-1.1, 4.5], para: [0.7, 4.5], numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [0.6, 4.2], para: [15.2, 3.2], curva: 0.3, numero: 1 },
        { id: 'seta3', tipo: 'bola', de: [15.2, 3.2], para: [10.8, 2.6], curva: 0.6, numero: 2 },
      ],
      textos: [{ t: 'SALTO ATRÁS DA LINHA', x: 0.8, y: 2.6 }],
    },
    animacao: {
      bolaInicial: naMao('J1'),
      passos: [
        esperar(1, 1.2),
        passo(2, [b(pt(0.6, 4.2), { alta: true, dur: 1.3 })]),
        passo(3, [j('J1', 'seta1.b', 1.0), s('seta1', 1.0)], { junto: 0.3 }),
        passo(4, [b('seta2.b', { de: pt(0.6, 4.2), dur: 1.0 }), s('seta2', 1.0)]),
        passo(5, [b('seta3.b', { alta: true, dur: 1.3 }), s('seta3', 1.3)]),
      ],
    },
  },

  // 8 · Saque sob pressão: duelo com placar
  8: {
    cena: {
      jogadores: [
        { id: 'J1', x: -0.8, y: 2.5 }, { id: 'J2', x: -0.8, y: 6.5 },
        { id: 'J3', x: 15.5, y: 2.2, time: 'b' }, { id: 'J4', x: 15.5, y: 6.8, time: 'b' },
      ],
      zonas: [{ id: 'passe', x: 9.3, y: 0.8, l: 2.4, a: 4.6, rotulo: 'PASSE' }],
      bolas: [[-1.3, 4.2], [-0.9, 4.7], [-1.4, 4.9]],
      setas: [
        { id: 'seta1', tipo: 'bola', de: [-0.4, 2.3], para: [15.1, 2.6], curva: 0.4, numero: 1 },
        { id: 'seta2', tipo: 'bola', de: [15.1, 2.6], para: [10.5, 3.1], curva: 0.6, numero: 2 },
        { id: 'seta3', tipo: 'bola', de: [-0.4, 6.3], para: [15.1, 6.5], curva: 0.4, numero: 3 },
        { id: 'seta4', tipo: 'bola', de: [15.1, 6.5], para: [10.5, 4.2], curva: 0.5, numero: 4 },
      ],
      textos: [{ t: 'CESTO', x: -1.1, y: 5.8 }],
    },
    animacao: {
      bolaInicial: naMao('J1'),
      passos: [
        passo(1, [b('seta1.b', { alta: true, dur: 1.4 }), s('seta1', 1.4)]),
        passo(2, [b('seta2.b', { alta: true, dur: 1.2 }), s('seta2', 1.2)]),
        esperar(3, 1.4),
        passo(4, [j('J1', pt(-1.1, 3.7), 0.7), j('J1', 'J1', 0.7, 0.8), b('seta3.b', { de: naMao('J2'), alta: true, dur: 1.4 }), s('seta3', 1.4)]),
        passo(5, [b('seta4.b', { alta: true, dur: 1.2 }), s('seta4', 1.2)]),
      ],
    },
  },
}

export const DIAGRAMAS_QUADRA: Record<number, DiagramaQuadra> = {
  ...SAQUE,
  ...Object.fromEntries(EXERCICIOS_COM_DESENHO.map((e) => [e.numero, { cena: e.cena, animacao: e.animacao }])),
}
