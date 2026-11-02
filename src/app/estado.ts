/** Preferências guardadas no aparelho: exercícios salvos, tema e filtros. */
function ler<T>(chave: string, padrao: T): T {
  try {
    const v = localStorage.getItem(chave)
    return v !== null ? (JSON.parse(v) as T) : padrao
  } catch {
    return padrao
  }
}

function gravar(chave: string, valor: unknown): void {
  try {
    localStorage.setItem(chave, JSON.stringify(valor))
  } catch {
    /* modo anônimo ou armazenamento cheio: o app segue funcionando sem guardar */
  }
}

const salvos = new Set<string>(ler<string[]>('vac-salvos', []))

export const estado = {
  ehSalvo: (id: string): boolean => salvos.has(id),
  alternarSalvo(id: string): boolean {
    if (salvos.has(id)) salvos.delete(id)
    else salvos.add(id)
    gravar('vac-salvos', [...salvos])
    return salvos.has(id)
  },
  limparSalvos(): void {
    salvos.clear()
    gravar('vac-salvos', [])
  },
  listaSalvos: (): string[] => [...salvos],
  totalSalvos: (): number => salvos.size,

  tema: ler<'' | 'light' | 'dark'>('vac-tema', ''),
  definirTema(t: '' | 'light' | 'dark'): void {
    this.tema = t
    gravar('vac-tema', t)
  },

  nivel: ler<string>('vac-nivel', ''),
  definirNivel(n: string): void {
    this.nivel = n
    gravar('vac-nivel', n)
  },
}
