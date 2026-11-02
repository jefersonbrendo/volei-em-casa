import { describe, expect, it } from 'vitest'
import { esqueletoEm } from '../src/animacao/boneco'
import { MOVIMENTO_DO_EXERCICIO, MOVIMENTOS } from '../src/animacao/movimentos'
import { TREINO_CASA } from '../src/data/treinoCasa'

describe('animações', () => {
  it('todo exercício de casa tem um movimento', () => {
    const sem = TREINO_CASA.filter((e) => !MOVIMENTOS[MOVIMENTO_DO_EXERCICIO[e.numero] ?? ''])
    expect(sem.map((e) => `${e.numero} ${e.nome}`)).toEqual([])
  })
  it('o mapa não aponta para exercícios que não existem', () => {
    const numeros = new Set(TREINO_CASA.map((e) => e.numero))
    expect(Object.keys(MOVIMENTO_DO_EXERCICIO).map(Number).filter((n) => !numeros.has(n))).toEqual([])
  })
  it('o boneco fica dentro do desenho em todo o ciclo', () => {
    const fora: string[] = []
    for (const [nome, m] of Object.entries(MOVIMENTOS)) {
      ciclo: for (let i = 0; i <= 40; i++) {
        const s = esqueletoEm(m, i / 40)
        for (const [parte, p] of Object.entries(s)) {
          if (!p) continue
          if (p.x < 4 || p.x > 236 || p.y < 4 || p.y > 226 || Number.isNaN(p.x)) { fora.push(`${nome} t=${i / 40} ${parte} (${p.x.toFixed(0)}, ${p.y.toFixed(0)})`); break ciclo }
        }
      }
    }
    expect(fora).toEqual([])
  })
})

describe('bola', () => {
  it('fica dentro do desenho', () => {
    const fora: string[] = []
    for (const [nome, m] of Object.entries(MOVIMENTOS)) {
      if (!m.bola) continue
      for (let i = 0; i <= 80; i++) {
        const t = i / 80
        const b = m.bola(t, { s: esqueletoEm(m, t), em: (tt) => esqueletoEm(m, ((tt % 1) + 1) % 1) })
        if (b && (b.y < 10 || b.x < 6 || b.x > 234)) { fora.push(`${nome} t=${t} (${b.x.toFixed(0)}, ${b.y.toFixed(0)})`); break }
      }
    }
    expect(fora).toEqual([])
  })
})
