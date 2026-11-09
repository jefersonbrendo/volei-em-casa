import { cenario, CHAO, esqueletoEm, LARGURA, NS, poseEm, type Esqueleto, type Movimento, type Ponto } from './boneco'

/**
 * ATLETA: a figura humana das prévias. Usa o mesmo esqueleto do boneco, mas desenha o corpo com
 * anatomia (músculos, cintura, mãos, pés, perfil do rosto, rabo de cavalo e viseira), em um único instante.
 */

const f = (n: number): string => n.toFixed(1)
const soma = (a: Ponto, b: Ponto, k = 1): Ponto => ({ x: a.x + b.x * k, y: a.y + b.y * k })
const dif = (a: Ponto, b: Ponto): Ponto => ({ x: a.x - b.x, y: a.y - b.y })
const lerp = (a: Ponto, b: Ponto, k: number): Ponto => ({ x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k })
const unit = (v: Ponto): Ponto => { const d = Math.hypot(v.x, v.y) || 1; return { x: v.x / d, y: v.y / d } }
const xy = (p: Ponto): string => `${f(p.x)} ${f(p.y)}`

/** Peça do corpo: vai de `a` a `b`, com raios nas pontas e o volume `bojo` no ponto `k` do caminho. */
function peca(classe: string, a: Ponto, b: Ponto, ra: number, rb: number, bojo: number, k = 0.45, curva: Ponto = { x: 0, y: 0 }): string {
  const d = unit(dif(b, a)), n = { x: -d.y, y: d.x }
  const m = soma(lerp(a, b, k), curva)
  const c = 2 * bojo - (ra + rb) / 2
  return `<path class="${classe}" d="M${xy(soma(a, n, ra))} Q${xy(soma(m, n, c))} ${xy(soma(b, n, rb))} A${f(rb)} ${f(rb)} 0 0 0 ${xy(soma(b, n, -rb))} Q${xy(soma(m, n, -c))} ${xy(soma(a, n, -ra))} A${f(ra)} ${f(ra)} 0 0 0 ${xy(soma(a, n, ra))} Z"/>`
}
const bola = (classe: string, c: Ponto, r: number): string => `<circle class="${classe}" cx="${f(c.x)}" cy="${f(c.y)}" r="${f(r)}"/>`

function perna(pele: string, roupa: string, q: Ponto, j: Ponto, t: Ponto, ponta: Ponto): string {
  const v = dif(ponta, t)
  return peca(pele, q, j, 10, 6.6, 10.2, 0.38)
    + peca(pele, j, t, 6.2, 3.4, 7.4, 0.32)
    + peca(pele, t, soma(ponta, v, 0.5), 4.6, 2.6, 4.4)
    + peca(roupa, q, lerp(q, j, 0.56), 11, 8.8, 11)
}

function braco(pele: string, o: Ponto, c: Ponto, m: Ponto): string {
  const d = unit(dif(m, c)), n = { x: -d.y, y: d.x }
  return peca(pele, o, c, 6, 4.2, 6.3, 0.35)
    + peca(pele, c, m, 4.4, 2.8, 5.1, 0.3)
    + peca(pele, soma(m, d, -1), soma(m, d, 6.5), 3.5, 2.3, 4.2)
    + peca(pele, m, soma(soma(m, d, 3.5), n, 5.2), 1.6, 1.2, 1.7)
}

function cabecaDeLado(s: Esqueleto, lado: number): string {
  const c = s.cabeca, nu = unit(dif(c, s.ombro)), fr = { x: -nu.y * lado, y: nu.x * lado }
  const em = (a: number, b: number): Ponto => soma(soma(c, fr, a), nu, b)
  return peca('at-pele', s.ombro, em(0, -8), 5.2, 4.2, 4.5)
    + `<path class="at-cabelo" d="M${xy(em(-7, 3))} Q${xy(em(-24, 5))} ${xy(em(-19, -12))} Q${xy(em(-14, -3))} ${xy(em(-7, -3))} Z"/>`
    + bola('at-pele', c, 9.8)
    + peca('at-pele', em(3, 0), em(4.5, -9.5), 6.5, 3.1, 5.6)
    + `<path class="at-pele" d="M${xy(em(9, 2.5))} L${xy(em(13, -1.8))} L${xy(em(9, -3.2))} Z"/>`
    + `<path class="at-cabelo" d="M${xy(em(-10, -3))} Q${xy(em(-12, 12))} ${xy(em(0, 11.5))} Q${xy(em(8, 11))} ${xy(em(9.5, 5))} Q${xy(em(0, 7))} ${xy(em(-4, 2))} Q${xy(em(-6, -2))} ${xy(em(-10, -3))} Z"/>`
    + bola('at-cabelo', em(6, 1.5), 1.25)
    + `<path class="at-boca" d="M${xy(em(9, -5.8))} Q${xy(em(7, -6.8))} ${xy(em(5, -6))}"/>`
    + peca('at-roupa', em(4, 6.2), em(18, 3.8), 2, 1.2, 1.8)
    + peca('at-roupa', em(-9.4, 2.8), em(5, 6.2), 1.7, 1.9, 1.9)
}

function corpoDeLado(s: Esqueleto, lado: number): string {
  const nu = unit(dif(s.ombro, s.quadril)), fr = { x: -nu.y * lado, y: nu.x * lado }
  const curva = dif(s.meioTronco, lerp(s.quadril, s.ombro, 0.5))
  return braco('at-tras', s.ombro, s.cotT, s.maoT)
    + perna('at-tras', 'at-bermuda-tras', s.quadril, s.joelhoT, s.tornT, s.pontaT)
    + bola('at-bermuda', soma(s.quadril, fr, -3), 11)
    + peca('at-roupa', s.quadril, s.ombro, 11.5, 10, 9.4, 0.5, curva)
    + perna('at-pele', 'at-bermuda', s.quadril, s.joelhoF, s.tornF, s.pontaF)
    + cabecaDeLado(s, lado)
    + bola('at-pele', s.ombro, 7)
    + braco('at-pele', s.ombro, s.cotF, s.maoF)
}

function corpoDeFrente(s: Esqueleto): string {
  const oE = s.ombroE!, oD = s.ombroD!, qE = s.quadrilE!, qD = s.quadrilD!
  const p = unit(dif(oD, oE)), nu = unit(dif(s.cabeca, s.ombro)), c = s.cabeca
  const cintura = lerp(s.quadril, s.ombro, 0.35)
  const em = (a: number, b: number): Ponto => soma(soma(c, p, a), nu, b)
  return perna('at-pele', 'at-bermuda', qE, s.joelhoT, s.tornT, s.pontaT)
    + perna('at-pele', 'at-bermuda', qD, s.joelhoF, s.tornF, s.pontaF)
    + peca('at-bermuda', qE, qD, 9, 9, 9.5, 0.5)
    + peca('at-pele', s.ombro, em(0, -8), 5.6, 4.6, 5)
    + `<path class="at-roupa at-tronco" d="M${xy(soma(oE, p, -1))} L${xy(soma(oD, p, 1))} Q${xy(soma(cintura, p, 9))} ${xy(soma(qD, p, 3))} L${xy(soma(qE, p, -3))} Q${xy(soma(cintura, p, -9))} ${xy(soma(oE, p, -1))} Z"/>`
    + bola('at-pele', c, 9.8)
    + peca('at-pele', em(0, 0), em(0, -9.8), 8, 4, 7)
    + `<path class="at-cabelo" d="M${xy(em(8, 3))} Q${xy(em(21, 2))} ${xy(em(16, -13))} Q${xy(em(13, -3))} ${xy(em(8, -3))} Z"/>`
    + `<path class="at-cabelo" d="M${xy(em(-10, 2))} Q${xy(em(-10, 12))} ${xy(em(0, 11.5))} Q${xy(em(10, 12))} ${xy(em(10, 2))} Q${xy(em(0, 8))} ${xy(em(-10, 2))} Z"/>`
    + bola('at-cabelo', em(-3.6, 0.5), 1.25) + bola('at-cabelo', em(3.6, 0.5), 1.25)
    + `<path class="at-boca" d="M${xy(em(-2.6, -5.4))} Q${xy(em(0, -7))} ${xy(em(2.6, -5.4))}"/>`
    + peca('at-roupa', em(-9.6, 5.2), em(9.6, 5.2), 2.2, 2.2, 3.2, 0.5)
    + bola('at-pele', oE, 7) + bola('at-pele', oD, 7)
    + braco('at-pele', oE, s.cotT, s.maoT)
    + braco('at-pele', oD, s.cotF, s.maoF)
}

/** O instante mais expressivo do ciclo: o mais distante da posição média do corpo. */
function instanteForte(m: Movimento): number {
  const N = 24
  const juntas = (s: Esqueleto): Ponto[] => [s.maoF, s.maoT, s.cabeca, s.quadril, s.joelhoF, s.tornF]
  const amostras = Array.from({ length: N }, (_, i) => juntas(esqueletoEm(m, i / N)))
  const media = amostras[0]!.map((_, j) => ({
    x: amostras.reduce((t, a) => t + a[j]!.x, 0) / N,
    y: amostras.reduce((t, a) => t + a[j]!.y, 0) / N,
  }))
  let melhor = 0, maior = -1
  amostras.forEach((a, i) => {
    const d = a.reduce((t, p, j) => t + Math.hypot(p.x - media[j]!.x, p.y - media[j]!.y), 0)
    if (d > maior) { maior = d; melhor = i }
  })
  return melhor / N
}

/** SVG do atleta no instante mais forte do movimento, enquadrado só nele. */
export function criarAtleta(m: Movimento): SVGSVGElement {
  const t = instanteForte(m)
  const s = esqueletoEm(m, t)
  const lado = Math.cos(Math.PI * poseEm(m, t).virar) >= 0 ? 1 : -1
  const svg = document.createElementNS(NS, 'svg')
  svg.setAttribute('class', 'boneco atleta')
  svg.setAttribute('viewBox', `0 0 ${LARGURA} 230`)
  svg.setAttribute('aria-hidden', 'true')
  cenario(svg, m)
  let corpo = m.vista === 'frente' ? corpoDeFrente(s) : corpoDeLado(s, lado)
  const b = m.bola?.(t, { s, em: (tt) => esqueletoEm(m, ((tt % 1) + 1) % 1) }) ?? null
  if (b) corpo += `<g class="bn-bola" transform="translate(${f(b.x)} ${f(b.y)})"><circle r="9"/><path d="M-9 0 H9 M0 -9 C5 -4 5 4 0 9 M0 -9 C-5 -4 -5 4 0 9"/></g>`
  svg.insertAdjacentHTML('beforeend', corpo)

  const ps = Object.values(s).filter(Boolean) as Ponto[]
  if (b) ps.push(b)
  const x0 = Math.min(...ps.map((p) => p.x)) - 16, x1 = Math.max(...ps.map((p) => p.x)) + 16
  const y0 = Math.min(...ps.map((p) => p.y)) - 16, y1 = Math.max(CHAO + 4, ...ps.map((p) => p.y + 8))
  const q = Math.max(x1 - x0, y1 - y0, 130)
  svg.setAttribute('viewBox', `${f((x0 + x1) / 2 - q / 2)} ${f(y1 - q)} ${f(q)} ${f(q)}`)
  return svg
}
