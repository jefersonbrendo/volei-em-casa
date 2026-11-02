import { describe, expect, it } from 'vitest'
import { PASSOS } from '../src/data/passos'
import { TREINO_CASA } from '../src/data/treinoCasa'

describe('passo a passo detalhado', () => {
  it('todo exercício de casa tem etapas', () => {
    expect(TREINO_CASA.filter((e) => !PASSOS[e.numero]).map((e) => `${e.numero} ${e.nome}`)).toEqual([])
  })
  it('não sobra passo de exercício que não existe', () => {
    const nums = new Set(TREINO_CASA.map((e) => e.numero))
    expect(Object.keys(PASSOS).map(Number).filter((n) => !nums.has(n))).toEqual([])
  })
  it('etapas completas e com instante válido', () => {
    for (const [n, p] of Object.entries(PASSOS)) {
      expect(p.etapas.length, n).toBeGreaterThanOrEqual(3)
      for (const et of p.etapas) {
        expect(et.titulo.length, n).toBeGreaterThan(2)
        expect(et.texto.length, n).toBeGreaterThan(15)
        expect(et.t >= 0 && et.t <= 1, `${n} ${et.titulo}`).toBe(true)
      }
    }
  })
})
