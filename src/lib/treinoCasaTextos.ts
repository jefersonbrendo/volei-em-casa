import type { MaterialCasa, RegiaoCasa, VolumeCasa } from '../data/treinoCasa'

/** "3 × 12", "3 × 30s", "5 min", "6 rep.", "4 séries". */
export function formatarVolume(v: VolumeCasa): string {
  const { series, repeticoes, tempo } = v
  if (series !== undefined && repeticoes !== undefined) return `${series} × ${repeticoes}`
  if (series !== undefined && tempo !== undefined) return `${series} × ${tempo}`
  if (tempo !== undefined) return tempo
  if (repeticoes !== undefined) return `${repeticoes} rep.`
  if (series !== undefined) return `${series} ${series === 1 ? 'série' : 'séries'}`
  return ''
}

export const ROTULO_MATERIAL: Record<MaterialCasa, string> = {
  corpo: 'Só o corpo',
  bola: 'Bola',
  parede: 'Parede',
  cadeira: 'Cadeira',
  toalha: 'Toalha',
  garrafa: 'Garrafa',
  elastico: 'Elástico',
}

export const ROTULO_REGIAO: Record<RegiaoCasa, string> = {
  pernas: 'Pernas',
  gluteos: 'Glúteos',
  core: 'Core',
  bracos: 'Braços',
  ombros: 'Ombros',
  costas: 'Costas',
  corpo_inteiro: 'Corpo inteiro',
}

/** ["a", "b", "c"] -> "a, b e c". */
export function listarEmTexto(itens: readonly string[]): string {
  if (itens.length <= 1) return itens.join('')
  return `${itens.slice(0, -1).join(', ')} e ${itens[itens.length - 1]}`
}

/** "bola e parede", "só o corpo": para frases corridas (ex.: texto do WhatsApp). */
export function materialEmTexto(materiais: readonly MaterialCasa[]): string {
  return listarEmTexto(materiais.map((m) => ROTULO_MATERIAL[m].toLowerCase()))
}

/** Só o peso do corpo: único material é "corpo". Alimenta o filtro "Só o corpo". */
export function ehSoCorpo(materiais: readonly MaterialCasa[]): boolean {
  return materiais.length === 1 && materiais[0] === 'corpo'
}

/** Costas e glúteos não aparecem de frente: nesses casos mostramos também a silhueta de costas. */
export function precisaVistaDeCostas(regioes: readonly RegiaoCasa[]): boolean {
  return regioes.includes('costas') || regioes.includes('gluteos')
}
