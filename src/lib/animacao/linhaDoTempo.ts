import type { Animacao, Cena, ElementoCena, Ponto, Ref } from './tipos'

export const DUR_JOGADOR = 1.3
export const DUR_BOLA = 0.9
export const DUR_BOLA_ALTA = 1.4
export const DUR_SETA = 0.8
export const PAUSA_ENTRE_PASSOS = 0.6
export const PAUSA_FINAL = 2

/* ---------- posições na cena ---------- */

function achar(cena: Cena, id: string): ElementoCena | undefined {
  return cena.el.find((e) => e.id === id && e.k !== 'ponta' && !e.junto)
}

/** Resolve uma referência para coordenadas da cena. Lança erro se o id não existir (a validação dos dados usa isso). */
export function resolverRef(cena: Cena, ref: Ref): Ponto {
  if (Array.isArray(ref)) return ref as Ponto
  const { ref: id, dx = 0, dy = 0 } = typeof ref === 'string' ? { ref } : (ref as { ref: string; dx?: number; dy?: number })
  const [base, ponta] = id.split('.')
  const el = achar(cena, base)
  if (!el) throw new Error(`referência "${id}" não existe na cena`)
  if (el.k === 'seta') {
    const p = ponta === 'a' ? el.a : ponta === 'b' ? (Array.isArray(el.b) ? (el.b as Ponto) : undefined) : undefined
    if (!p) throw new Error(`use "${base}.a" ou "${base}.b" para um ponto de seta`)
    return [p[0] + dx, p[1] + dy]
  }
  if (el.x === undefined || el.y === undefined) throw new Error(`"${id}" não tem posição`)
  return [el.x + dx, el.y + dy]
}

/** Comprimento de um ponto a outro. */
export const distancia = (a: Ponto, b: Ponto): number => Math.hypot(b[0] - a[0], b[1] - a[1])

/* ---------- compilação ---------- */

interface Mover { inicio: number; fim: number; de: Ponto; para: Ponto }
interface Voo { inicio: number; fim: number; de: Ponto; para: Ponto; alta: boolean }
/** Um trecho do desenho de uma seta: vai de `de` a `ate` (0..1 do comprimento) entre `inicio` e `fim`. */
interface Desenho { inicio: number; fim: number; de: number; ate: number }
export interface PassoCompilado { texto: number; inicio: number; fim: number }

export interface Compilada {
  duracao: number
  passos: PassoCompilado[]
  movimentos: Map<string, Mover[]>
  voos: Voo[]
  bolaInicial: Ponto | null
  desenhos: Map<string, Desenho[]>
  inicioDosJogadores: Map<string, Ponto>
}

export function compilar(animacao: Animacao, cena: Cena): Compilada {
  const entre = animacao.pausaEntrePassos ?? PAUSA_ENTRE_PASSOS
  const final = animacao.pausaFinal ?? PAUSA_FINAL
  const movimentos = new Map<string, Mover[]>()
  const voos: Voo[] = []
  const desenhos = new Map<string, Desenho[]>()
  const passos: PassoCompilado[] = []

  const inicioDosJogadores = new Map<string, Ponto>()
  for (const e of cena.el) if (e.k === 'jogador' && e.id && e.x !== undefined && e.y !== undefined) inicioDosJogadores.set(e.id, [e.x, e.y])

  const posicaoAtual = new Map<string, Ponto>(inicioDosJogadores)
  let bolaAgora: Ponto | null = animacao.bolaInicial ? resolverRef(cena, animacao.bolaInicial) : null
  const bolaInicial = bolaAgora

  let fimGeral = 0
  let inicioAnterior = 0
  for (const [indice, passo] of animacao.passos.entries()) {
    const inicioPasso = indice === 0 ? 0 : passo.junto !== undefined ? inicioAnterior + passo.junto : fimGeral + entre
    let fimPasso = inicioPasso
    let cursor = inicioPasso // para ações em sequência
    for (const acao of passo.acoes) {
      const atraso = 'atraso' in acao && acao.atraso ? acao.atraso : 0
      const inicio = (passo.seq ? cursor : inicioPasso) + atraso
      let fim = inicio
      if (acao.tipo === 'jogador') {
        const de = posicaoAtual.get(acao.id)
        if (!de) throw new Error(`jogador "${acao.id}" não existe na cena`)
        const para = resolverRef(cena, acao.para)
        fim = inicio + (acao.dur ?? DUR_JOGADOR)
        movimentos.set(acao.id, [...(movimentos.get(acao.id) ?? []), { inicio, fim, de, para }])
        posicaoAtual.set(acao.id, para)
      } else if (acao.tipo === 'bola') {
        const de = acao.de ? resolverRef(cena, acao.de) : bolaAgora
        if (!de) throw new Error('a bola não tem origem: defina bolaInicial ou "de"')
        const para = resolverRef(cena, acao.para)
        fim = inicio + (acao.dur ?? (acao.alta ? DUR_BOLA_ALTA : DUR_BOLA))
        voos.push({ inicio, fim, de, para, alta: !!acao.alta })
        bolaAgora = para
      } else if (acao.tipo === 'seta') {
        const seta = achar(cena, acao.id)
        if (!seta || seta.k !== 'seta') throw new Error(`seta "${acao.id}" não existe na cena`)
        fim = inicio + (acao.dur ?? DUR_SETA)
        const anteriores = desenhos.get(acao.id) ?? []
        const de = acao.de ?? (anteriores.length ? anteriores[anteriores.length - 1].ate : 0)
        desenhos.set(acao.id, [...anteriores, { inicio, fim, de, ate: acao.ate ?? 1 }])
      } else {
        fim = inicio + acao.dur
      }
      cursor = fim
      fimPasso = Math.max(fimPasso, fim)
    }
    passos.push({ texto: passo.texto, inicio: inicioPasso, fim: fimPasso })
    fimGeral = Math.max(fimGeral, fimPasso)
    inicioAnterior = inicioPasso
  }
  const duracao = fimGeral + final
  return { duracao, passos, movimentos, voos, bolaInicial, desenhos, inicioDosJogadores }
}

/* ---------- estado em cada instante ---------- */

const limitar = (v: number, min = 0, max = 1): number => Math.min(max, Math.max(min, v))
export const suave = (p: number): number => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2)
export const saida = (p: number): number => 1 - (1 - p) * (1 - p)

export interface EstadoBola {
  visivel: boolean
  /** Posição no chão (a sombra fica aqui). */
  x: number
  y: number
  /** Altura 0..1 (0 = no chão). Na tela a bola sobe e cresce. */
  altura: number
}

export interface Estado {
  jogadores: Map<string, Ponto>
  bola: EstadoBola
  /** Progresso de desenho de cada seta citada na linha do tempo (0..1). */
  setas: Map<string, number>
  /** Item do "Passo a passo" em andamento (null antes do primeiro passo). */
  passo: number | null
}

export function estadoEm(c: Compilada, tempo: number): Estado {
  const t = limitar(tempo, 0, c.duracao)

  const jogadores = new Map<string, Ponto>()
  for (const [id, inicio] of c.inicioDosJogadores) {
    let pos = inicio
    for (const m of c.movimentos.get(id) ?? []) {
      if (t >= m.fim) pos = m.para
      else if (t > m.inicio) {
        const p = suave((t - m.inicio) / (m.fim - m.inicio))
        pos = [m.de[0] + (m.para[0] - m.de[0]) * p, m.de[1] + (m.para[1] - m.de[1]) * p]
        break
      } else break
    }
    jogadores.set(id, pos)
  }

  let bola: EstadoBola = c.bolaInicial ? { visivel: true, x: c.bolaInicial[0], y: c.bolaInicial[1], altura: 0 } : { visivel: false, x: 0, y: 0, altura: 0 }
  for (const v of c.voos) {
    if (t >= v.fim) bola = { visivel: true, x: v.para[0], y: v.para[1], altura: 0 }
    else if (t >= v.inicio) {
      const p = (t - v.inicio) / (v.fim - v.inicio)
      const e = v.alta ? p : saida(p)
      bola = {
        visivel: true,
        x: v.de[0] + (v.para[0] - v.de[0]) * e,
        y: v.de[1] + (v.para[1] - v.de[1]) * e,
        altura: v.alta ? Math.sin(Math.PI * p) : Math.sin(Math.PI * p) * 0.25,
      }
      break
    } else break
  }

  const setas = new Map<string, number>()
  for (const [id, trechos] of c.desenhos) {
    let p = 0
    for (const d of trechos) {
      if (t >= d.fim) p = d.ate
      else if (t > d.inicio) { p = d.de + (d.ate - d.de) * limitar((t - d.inicio) / (d.fim - d.inicio)); break } else break
    }
    setas.set(id, p)
  }

  let passo: number | null = null
  for (const p of c.passos) if (t >= p.inicio) passo = p.texto
  return { jogadores, bola, setas, passo }
}
