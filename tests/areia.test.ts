import { existsSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { CATEGORIAS, ITENS } from '../src/app/itens'
import { NA_AREIA } from '../src/data/areia'

const n3 = (n: number): string => String(n).padStart(3, '0')

describe('exercícios da quadra (Código da Areia)', () => {
  it('toda categoria tem exercícios', () => {
    expect(CATEGORIAS.filter((c) => !ITENS.some((i) => i.categoria === c))).toEqual([])
  })
  it('todo exercício tem diagrama, miniatura e cena animada', () => {
    const faltando = NA_AREIA.filter((e) => !existsSync(`public/gem/diagrams/${n3(e.numero)}.webp`) || !existsSync(`public/gem/thumbs/${n3(e.numero)}.webp`) || !existsSync(`public/gem/diagramas/${n3(e.numero)}.json`))
    expect(faltando.map((e) => e.numero)).toEqual([])
  })
  it('ids únicos e campos principais preenchidos', () => {
    expect(new Set(ITENS.map((i) => i.id)).size).toBe(ITENS.length)
    for (const e of NA_AREIA) {
      expect(e.passoAPasso.length, String(e.numero)).toBeGreaterThan(0)
      expect(e.objetivo && e.comoMontar, String(e.numero)).toBeTruthy()
    }
  })
})
