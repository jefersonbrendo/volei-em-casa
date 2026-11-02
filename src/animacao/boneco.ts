import { animate } from 'motion'

/**
 * BONECO ANIMADO: demonstração do movimento de cada exercício, em loop.
 *
 * Duas vistas:
 *  - 'lado' (padrão): o boneco olha para a direita. Ângulos em graus, todos ABSOLUTOS:
 *      tronco ........ a partir da vertical para cima (positivo = inclina para a frente; 90 = deitado de bruços olhando à direita)
 *      coxa, canela .. a partir da vertical para baixo (positivo = para a frente; 90 = horizontal à frente; -90 = horizontal atrás)
 *      braco, antebraco: idem (180 = apontando para cima)
 *      F = perna/braço da frente (escuro), T = de trás (claro)
 *      curva: arredonda o tronco (positivo = costas arredondadas); pescoco: gira a cabeça em relação ao tronco
 *      peF/peT: gira o pé (180 = ponta do pé para trás, útil deitado de costas)
 *  - 'frente': boneco de frente. E = lado esquerdo da tela, D = lado direito.
 *      coxa/canela/braco/antebraco a partir da vertical para baixo; positivo = PARA FORA do corpo (180 = para cima).
 *      agacha (0–1) encurta as coxas (joelhos vindo na direção de quem olha); encolhe (0–1) encurta os braços (braços à frente).
 *      inclina: tronco para o lado; cabeca: inclina só a cabeça.
 *
 * O ponto mais baixo do corpo sempre encosta no chão (menos o salto `y`). Na horizontal, os pés ficam
 * presos no lugar (âncora 'pes'); com 'maos' ficam as mãos; com 'quadril', o quadril. `x` desloca a âncora.
 */
export interface Pose {
  x: number; y: number
  // vista de lado
  tronco: number; curva: number; pescoco: number
  coxaF: number; canelaF: number; coxaT: number; canelaT: number
  bracoF: number; antebracoF: number; bracoT: number; antebracoT: number
  peF: number; peT: number
  // vista de frente
  inclina: number; agacha: number; encolhe: number; cabeca: number
  coxaE: number; canelaE: number; coxaD: number; canelaD: number
  bracoE: number; antebracoE: number; bracoD: number; antebracoD: number
  // as duas
  virar: number // 0 = como desenhado, 1 = espelhado (meia-volta)
}

export type Ponto = { x: number; y: number }

export interface Esqueleto {
  quadril: Ponto; ombro: Ponto; cabeca: Ponto; meioTronco: Ponto
  joelhoF: Ponto; tornF: Ponto; pontaF: Ponto; joelhoT: Ponto; tornT: Ponto; pontaT: Ponto
  cotF: Ponto; maoF: Ponto; cotT: Ponto; maoT: Ponto
  maos: Ponto; pes: Ponto
  // só na vista de frente
  quadrilE?: Ponto; quadrilD?: Ponto; ombroE?: Ponto; ombroD?: Ponto
}

export interface ContextoBola {
  s: Esqueleto
  /** Esqueleto em outro instante do ciclo (para trajetórias que não tremem com o corpo). */
  em: (t: number) => Esqueleto
}

export interface Movimento {
  duracao: number
  vista?: 'lado' | 'frente'
  ancora?: 'pes' | 'maos' | 'quadril' | 'peF' | 'peT'
  /** Desloca o boneco inteiro na horizontal (para caber no quadro). */
  deslocar?: number
  poses: Array<{ t: number; p: Partial<Pose> }>
  bola?: (t: number, c: ContextoBola) => Ponto | null
  legenda?: string
  // cenário
  parede?: boolean | 'esq'
  cadeira?: { x: number; virada?: boolean }
  degrau?: number // x do degrau
  marcas?: number[] // chinelos/cones no chão
  linha?: boolean
  tapete?: boolean
  toalha?: boolean // entre as duas mãos
  garrafas?: boolean // uma em cada mão
  elastico?: Ponto // ponto onde o elástico está preso (vai até a mão da frente)
  olhosFechados?: boolean
}

export const POSE_LADO: Pose = {
  x: 0, y: 0, tronco: 4, curva: 0, pescoco: 0,
  coxaF: 2, canelaF: -2, coxaT: -4, canelaT: -6,
  bracoF: 10, antebracoF: 20, bracoT: -8, antebracoT: 4, peF: 0, peT: 0,
  inclina: 0, agacha: 0, encolhe: 0, cabeca: 0,
  coxaE: 6, canelaE: 2, coxaD: 6, canelaD: 2, bracoE: 12, antebracoE: 8, bracoD: 12, antebracoD: 8,
  virar: 0,
}
export const POSE_BASE = POSE_LADO

// Medidas (unidades do desenho 240 × 230)
const TRONCO = 52, PESCOCO = 7, CABECA = 10, BRACO = 27, ANTEBRACO = 25, COXA = 36, CANELA = 36, PE = 9
export const CHAO = 214
export const LARGURA = 240
export const CENTRO_X = 116
export const PAREDE_X = 206
const MEIO_QUADRIL = 7, MEIO_OMBRO = 13
const ESPESSURA = 4.5

const rad = (g: number): number => (g * Math.PI) / 180
const desce = (o: Ponto, comp: number, ang: number): Ponto => ({ x: o.x + comp * Math.sin(rad(ang)), y: o.y + comp * Math.cos(rad(ang)) })
const sobe = (o: Ponto, comp: number, ang: number): Ponto => ({ x: o.x + comp * Math.sin(rad(ang)), y: o.y - comp * Math.cos(rad(ang)) })
export const meio = (a: Ponto, b: Ponto): Ponto => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 })

function esqueletoLado(p: Pose): Esqueleto {
  const quadril = { x: 0, y: 0 }
  const joelhoF = desce(quadril, COXA, p.coxaF), tornF = desce(joelhoF, CANELA, p.canelaF)
  const joelhoT = desce(quadril, COXA, p.coxaT), tornT = desce(joelhoT, CANELA, p.canelaT)
  const pontaF = { x: tornF.x + PE * Math.cos(rad(p.canelaF + p.peF)), y: tornF.y - PE * Math.sin(rad(p.canelaF + p.peF)) }
  const pontaT = { x: tornT.x + PE * Math.cos(rad(p.canelaT + p.peT)), y: tornT.y - PE * Math.sin(rad(p.canelaT + p.peT)) }
  const ombro = sobe(quadril, TRONCO, p.tronco)
  const m = meio(quadril, ombro)
  const meioTronco = { x: m.x - p.curva * Math.cos(rad(p.tronco)), y: m.y - p.curva * Math.sin(rad(p.tronco)) }
  const cabeca = sobe(ombro, PESCOCO + CABECA, p.tronco + p.pescoco)
  const cotF = desce(ombro, BRACO, p.bracoF), maoF = desce(cotF, ANTEBRACO, p.antebracoF)
  const cotT = desce(ombro, BRACO, p.bracoT), maoT = desce(cotT, ANTEBRACO, p.antebracoT)
  return { quadril, ombro, cabeca, meioTronco, joelhoF, tornF, pontaF, joelhoT, tornT, pontaT, cotF, maoF, cotT, maoT, maos: meio(maoF, maoT), pes: meio(tornF, tornT) }
}

function esqueletoFrente(p: Pose): Esqueleto {
  const centro = { x: 0, y: 0 }
  const lado = (s: -1 | 1, o: Ponto, comp: number, ang: number): Ponto => ({ x: o.x + s * comp * Math.sin(rad(ang)), y: o.y + comp * Math.cos(rad(ang)) })
  const quadrilE = { x: -MEIO_QUADRIL, y: 0 }, quadrilD = { x: MEIO_QUADRIL, y: 0 }
  const coxa = COXA * (1 - 0.55 * p.agacha)
  const joelhoE = lado(-1, quadrilE, coxa, p.coxaE), tornE = lado(-1, joelhoE, CANELA, p.canelaE)
  const joelhoD = lado(1, quadrilD, coxa, p.coxaD), tornD = lado(1, joelhoD, CANELA, p.canelaD)
  const ombroC = sobe(centro, TRONCO, p.inclina)
  const perp = { x: Math.cos(rad(p.inclina)), y: Math.sin(rad(p.inclina)) }
  const ombroE = { x: ombroC.x - perp.x * MEIO_OMBRO, y: ombroC.y - perp.y * MEIO_OMBRO }
  const ombroD = { x: ombroC.x + perp.x * MEIO_OMBRO, y: ombroC.y + perp.y * MEIO_OMBRO }
  const k = 1 - 0.6 * p.encolhe
  const cotE = lado(-1, ombroE, BRACO * k, p.bracoE), maoE = lado(-1, cotE, ANTEBRACO * k, p.antebracoE)
  const cotD = lado(1, ombroD, BRACO * k, p.bracoD), maoD = lado(1, cotD, ANTEBRACO * k, p.antebracoD)
  const cabeca = sobe(ombroC, PESCOCO + CABECA, p.inclina + p.cabeca)
  return {
    quadril: centro, ombro: ombroC, cabeca, meioTronco: meio(centro, ombroC),
    joelhoF: joelhoD, tornF: tornD, pontaF: { x: tornD.x + 6, y: tornD.y }, joelhoT: joelhoE, tornT: tornE, pontaT: { x: tornE.x - 6, y: tornE.y },
    cotF: cotD, maoF: maoD, cotT: cotE, maoT: maoE, maos: meio(maoE, maoD), pes: meio(tornE, tornD),
    quadrilE, quadrilD, ombroE, ombroD,
  }
}

function mapear(s: Esqueleto, fn: (p: Ponto) => Ponto): Esqueleto {
  const r: Record<string, Ponto> = {}
  for (const [k, v] of Object.entries(s)) if (v) r[k] = fn(v as Ponto)
  return r as unknown as Esqueleto
}

/** Pontos do esqueleto já posicionados no desenho. */
export function esqueleto(p: Pose, vista: 'lado' | 'frente' = 'lado', ancora: Movimento['ancora'] = 'pes', deslocar = 0): Esqueleto {
  let s = vista === 'frente' ? esqueletoFrente(p) : esqueletoLado(p)
  const ref = ancora === 'maos' ? s.maos : ancora === 'quadril' ? s.quadril : ancora === 'peF' ? s.tornF : ancora === 'peT' ? s.tornT : s.pes
  const dx = CENTRO_X + deslocar + p.x - ref.x
  const pts = Object.values(s).filter(Boolean) as Ponto[]
  const maisBaixo = Math.max(...pts.map((v) => v.y)) + ESPESSURA
  const dy = CHAO - maisBaixo - p.y
  s = mapear(s, (v) => ({ x: v.x + dx, y: v.y + dy }))
  if (p.virar) {
    const c = Math.cos(Math.PI * p.virar), cx = s.quadril.x
    s = mapear(s, (v) => ({ x: cx + (v.x - cx) * c, y: v.y }))
  }
  return s
}

const CAMPOS = Object.keys(POSE_LADO) as Array<keyof Pose>
function misturar(a: Pose, b: Pose, k: number): Pose {
  const r = { ...a }
  for (const c of CAMPOS) r[c] = a[c] + (b[c] - a[c]) * k
  return r
}
const suave = (k: number): number => k * k * (3 - 2 * k)

export function poseEm(m: Movimento, t: number): Pose {
  const quadros = m.poses.map((q) => ({ t: q.t, p: { ...POSE_LADO, ...q.p } as Pose }))
  if (quadros.length === 1 || t <= quadros[0]!.t) return quadros[0]!.p
  for (let i = 0; i < quadros.length - 1; i++) {
    const a = quadros[i]!, b = quadros[i + 1]!
    if (t >= a.t && t <= b.t) return misturar(a.p, b.p, suave((t - a.t) / (b.t - a.t || 1)))
  }
  return quadros[quadros.length - 1]!.p
}

export function esqueletoEm(m: Movimento, t: number): Esqueleto {
  return esqueleto(poseEm(m, t), m.vista ?? 'lado', m.ancora ?? 'pes', m.deslocar ?? 0)
}

/* ------------------------------ DESENHO ------------------------------ */
export const NS = 'http://www.w3.org/2000/svg'
function el<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string | number> = {}): SVGElementTagNameMap[K] {
  const e = document.createElementNS(NS, tag)
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, String(v))
  return e
}
const f = (n: number): string => n.toFixed(1)
const pontos = (...ps: Ponto[]): string => ps.map((p) => `${f(p.x)},${f(p.y)}`).join(' ')

export function cenario(svg: SVGSVGElement, m: Movimento): void {
  if (m.tapete) svg.append(el('rect', { x: 30, y: CHAO - 2, width: 180, height: 5, rx: 2.5, class: 'bn-tapete' }))
  svg.append(el('line', { x1: 12, y1: CHAO, x2: LARGURA - 12, y2: CHAO, class: 'bn-chao' }))
  if (m.linha) svg.append(el('line', { x1: CENTRO_X, y1: CHAO - 2, x2: CENTRO_X, y2: CHAO + 7, class: 'bn-linha' }))
  if (m.parede) {
    const x = m.parede === 'esq' ? 20 : PAREDE_X
    svg.append(el('rect', { x, y: 20, width: 14, height: CHAO - 20, class: 'bn-parede' }))
  }
  if (m.cadeira) {
    const x = m.cadeira.x, s = m.cadeira.virada ? -1 : 1
    const g = el('g', { class: 'bn-cadeira' })
    g.append(el('path', { d: `M${x} ${CHAO} L${x} ${CHAO - 46} L${x + 30 * s} ${CHAO - 46} L${x + 30 * s} ${CHAO} M${x} ${CHAO - 46} L${x} ${CHAO - 94}` }))
    svg.append(g)
  }
  if (m.degrau !== undefined) svg.append(el('rect', { x: m.degrau, y: CHAO - 18, width: 46, height: 18, rx: 2, class: 'bn-degrau' }))
  for (const cx of m.marcas ?? []) svg.append(el('rect', { x: cx - 8, y: CHAO - 3, width: 16, height: 5, rx: 2.5, class: 'bn-marca' }))
}

export interface Animacao { el: SVGSVGElement; destruir: () => void }

/** Cria o SVG do movimento. Animado em loop; com `parado`, mostra só o instante `t` (padrão 0.5). */
export function criarBoneco(m: Movimento, opcoes: { parado?: boolean; t?: number; recorte?: boolean } = {}): Animacao {
  const vista = m.vista ?? 'lado'
  const svg = el('svg', { viewBox: `0 0 ${LARGURA} 230`, class: 'boneco', role: 'img', 'aria-label': m.legenda ?? 'Demonstração do movimento' })
  cenario(svg, m)
  const sombra = el('ellipse', { cx: CENTRO_X, cy: CHAO + 1, rx: 26, ry: 3.5, class: 'bn-sombra' })
  svg.append(sombra)

  const elastico = m.elastico ? el('line', { class: 'bn-elastico' }) : null
  const trasG = el('g', { class: vista === 'lado' ? 'bn-tras' : 'bn-frente' })
  const pernaT = el('polyline', { class: 'bn-membro' }), bracoT = el('polyline', { class: 'bn-membro' })
  const frenteG = el('g', { class: 'bn-frente' })
  const tronco = el('path', { class: 'bn-tronco' }), pernaF = el('polyline', { class: 'bn-membro' }), bracoF = el('polyline', { class: 'bn-membro' })
  const cabeca = el('circle', { r: CABECA, class: 'bn-cabeca' })
  const olhos = m.olhosFechados ? el('path', { class: 'bn-olhos' }) : null
  const toalha = m.toalha ? el('path', { class: 'bn-toalha' }) : null
  const garrafaF = m.garrafas ? el('rect', { width: 7, height: 16, rx: 2.5, class: 'bn-garrafa' }) : null
  const garrafaT = m.garrafas ? el('rect', { width: 7, height: 16, rx: 2.5, class: 'bn-garrafa' }) : null
  if (vista === 'lado') {
    trasG.append(pernaT, bracoT)
    frenteG.append(pernaF, tronco, cabeca, bracoF)
  } else {
    frenteG.append(pernaT, tronco, cabeca, bracoT, bracoF)
  }
  if (olhos) frenteG.append(olhos)
  const bola = el('g', { class: 'bn-bola' })
  bola.append(el('circle', { r: 9 }), el('path', { d: 'M-9 0 H9 M0 -9 C5 -4 5 4 0 9 M0 -9 C-5 -4 -5 4 0 9' }))
  if (elastico) svg.append(elastico)
  if (vista === 'lado') svg.append(trasG)
  svg.append(frenteG)
  if (toalha) svg.append(toalha)
  if (garrafaT && garrafaF) svg.append(garrafaT, garrafaF)
  svg.append(bola)

  const posicionarGarrafa = (g: SVGRectElement, mao: Ponto): void => { g.setAttribute('x', f(mao.x - 3.5)); g.setAttribute('y', f(mao.y - 8)) }

  const desenhar = (t: number): void => {
    const s = esqueletoEm(m, t)
    if (vista === 'lado') {
      pernaT.setAttribute('points', pontos(s.quadril, s.joelhoT, s.tornT, s.pontaT))
      pernaF.setAttribute('points', pontos(s.quadril, s.joelhoF, s.tornF, s.pontaF))
      const ctrl = { x: 2 * s.meioTronco.x - (s.quadril.x + s.ombro.x) / 2, y: 2 * s.meioTronco.y - (s.quadril.y + s.ombro.y) / 2 }
      tronco.setAttribute('d', `M${f(s.quadril.x)} ${f(s.quadril.y)} Q${f(ctrl.x)} ${f(ctrl.y)} ${f(s.ombro.x)} ${f(s.ombro.y)}`)
      bracoT.setAttribute('points', pontos(s.ombro, s.cotT, s.maoT))
      bracoF.setAttribute('points', pontos(s.ombro, s.cotF, s.maoF))
    } else {
      pernaT.setAttribute('points', pontos(s.pontaT, s.tornT, s.joelhoT, s.quadrilE!, s.quadrilD!, s.joelhoF, s.tornF, s.pontaF))
      tronco.setAttribute('d', `M${f(s.quadril.x)} ${f(s.quadril.y)} L${f(s.ombro.x)} ${f(s.ombro.y)} M${f(s.ombroE!.x)} ${f(s.ombroE!.y)} L${f(s.ombroD!.x)} ${f(s.ombroD!.y)}`)
      bracoT.setAttribute('points', pontos(s.ombroE!, s.cotT, s.maoT))
      bracoF.setAttribute('points', pontos(s.ombroD!, s.cotF, s.maoF))
    }
    cabeca.setAttribute('cx', f(s.cabeca.x)); cabeca.setAttribute('cy', f(s.cabeca.y))
    if (olhos) olhos.setAttribute('d', `M${f(s.cabeca.x - 6)} ${f(s.cabeca.y)} h4 M${f(s.cabeca.x + 2)} ${f(s.cabeca.y)} h4`)
    if (toalha) {
      const a = s.maoT, b = s.maoF, mm = meio(a, b)
      toalha.setAttribute('d', `M${f(a.x)} ${f(a.y)} Q${f(mm.x)} ${f(mm.y + 6)} ${f(b.x)} ${f(b.y)}`)
    }
    if (garrafaF && garrafaT) { posicionarGarrafa(garrafaF, s.maoF); posicionarGarrafa(garrafaT, s.maoT) }
    if (elastico && m.elastico) {
      elastico.setAttribute('x1', f(m.elastico.x)); elastico.setAttribute('y1', f(m.elastico.y))
      elastico.setAttribute('x2', f(s.maoF.x)); elastico.setAttribute('y2', f(s.maoF.y))
    }
    const pePosto = Math.max(s.tornF.y, s.tornT.y)
    const altura = CHAO - ESPESSURA - pePosto
    sombra.setAttribute('cx', f(s.quadril.x))
    sombra.setAttribute('rx', f(Math.max(12, 26 - Math.max(0, altura) * 0.25)))
    const b = m.bola?.(t, { s, em: (tt) => esqueletoEm(m, ((tt % 1) + 1) % 1) }) ?? null
    if (b) { bola.setAttribute('transform', `translate(${f(b.x)} ${f(b.y)})`); bola.style.display = '' }
    else bola.style.display = 'none'
  }

  if (opcoes.parado) {
    desenhar(opcoes.t ?? 0.5)
    if (opcoes.recorte) {
      // miniatura: enquadra só o boneco (quadrado, com folga)
      const s = esqueletoEm(m, opcoes.t ?? 0.5)
      const pts = Object.values(s).filter(Boolean) as Ponto[]
      const x0 = Math.min(...pts.map((p) => p.x)) - 14, x1 = Math.max(...pts.map((p) => p.x)) + 14
      const y0 = Math.min(...pts.map((p) => p.y)) - 14, y1 = CHAO + 6
      const lado = Math.max(x1 - x0, y1 - y0)
      const cx = (x0 + x1) / 2
      svg.setAttribute('viewBox', `${f(cx - lado / 2)} ${f(y1 - lado)} ${f(lado)} ${f(lado)}`)
    }
    return { el: svg, destruir: () => undefined }
  }
  desenhar(0)
  const controle = animate(0, 1, { duration: m.duracao, ease: 'linear', repeat: Infinity, onUpdate: desenhar })
  return { el: svg, destruir: () => controle.stop() }
}
