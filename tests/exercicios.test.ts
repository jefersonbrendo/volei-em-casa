import { describe, expect, it } from 'vitest'
import { TREINO_CASA } from '../src/data/treinoCasa'
import { NA_AREIA } from '../src/data/areia'

describe('exercícios de casa', () => {
  it('somam 200 com os da areia', () => {
    expect(TREINO_CASA.length + NA_AREIA.length).toBe(200)
  })
  it('têm números e nomes únicos', () => {
    expect(new Set(TREINO_CASA.map((e) => e.numero)).size).toBe(TREINO_CASA.length)
    expect(new Set(TREINO_CASA.map((e) => e.nome.toLowerCase())).size).toBe(TREINO_CASA.length)
  })
  it('usam "corpo" só sozinho e têm campos preenchidos', () => {
    for (const e of TREINO_CASA) {
      if (e.material.includes('corpo')) expect(e.material, e.nome).toEqual(['corpo'])
      expect(e.passoAPasso.length, e.nome).toBeGreaterThan(1)
      expect(e.objetivo && e.variacaoFacil && e.variacaoDificil, e.nome).toBeTruthy()
      expect(Object.keys(e.volume).length, e.nome).toBeGreaterThan(0)
    }
  })
})
