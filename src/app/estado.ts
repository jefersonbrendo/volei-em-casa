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
const diasTreinados = new Set<string>(ler<string[]>('vac-dias', []))

/** Data no fuso do aparelho, no formato 2026-11-10. */
export function dataLocal(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

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

  /** Marca hoje como dia de treino (a pessoa concluiu um exercício). Guarda só os últimos 120 dias. */
  registrarTreino(): void {
    diasTreinados.add(dataLocal(new Date()))
    gravar('vac-dias', [...diasTreinados].sort().slice(-120))
  },
  treinouEm: (dia: string): boolean => diasTreinados.has(dia),

  nivel: ler<string>('vac-nivel', ''),
  definirNivel(n: string): void {
    this.nivel = n
    gravar('vac-nivel', n)
  },
}
