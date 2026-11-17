import { describe, expect, it } from 'vitest'
import { NA_QUADRA } from '../src/data/quadra'
import { DIAGRAMAS_QUADRA } from '../src/data/quadraDiagramas'
import { compilar } from '../src/lib/animacao/linhaDoTempo'
import { cenaDaQuadra } from '../src/lib/quadra/cena'

describe('vôlei de quadra', () => {
  it('todo exercício tem desenho e os números não se repetem', () => {
    const numeros = NA_QUADRA.map((e) => e.numero)
    expect(new Set(numeros).size).toBe(numeros.length)
    expect(NA_QUADRA.filter((e) => !DIAGRAMAS_QUADRA[e.numero]).map((e) => e.nome)).toEqual([])
  })

  it('cada animação usa só o que existe no desenho e aponta para itens do passo a passo', () => {
    const problemas: string[] = []
    for (const e of NA_QUADRA) {
      const d = DIAGRAMAS_QUADRA[e.numero]
      if (!d?.animacao) continue
      try {
        compilar(d.animacao, cenaDaQuadra(d.cena))
      } catch (erro) {
        problemas.push(`${e.numero}: ${(erro as Error).message}`)
      }
      for (const p of d.animacao.passos) {
        if (p.texto < 1 || p.texto > e.passoAPasso.length) problemas.push(`${e.numero}: passo ${p.texto} não existe no texto`)
      }
    }
    expect(problemas).toEqual([])
  })

  it('o desenho fica dentro do quadro', () => {
    const fora: string[] = []
    for (const [n, d] of Object.entries(DIAGRAMAS_QUADRA)) {
      const cena = cenaDaQuadra(d.cena)
      for (const el of cena.el) {
        if (el.x === undefined || el.y === undefined) continue
        const r = el.r ?? 0
        if (el.x - r < 0 || el.x + r > cena.w || el.y - r < 0 || el.y + r > cena.h) fora.push(`${n}: ${el.k} ${el.id ?? el.t ?? ''} (${el.x}, ${el.y})`)
      }
    }
    expect(fora).toEqual([])
  })
})
