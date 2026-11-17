/**
 * DESENHO DA QUADRA DE VÔLEI (9 × 18 m), no mesmo formato de cena dos diagramas da areia.
 * A areia veio do PDF do Código da Areia; aqui o desenho é montado a partir de uma descrição
 * em METROS, para escrever cada exercício sem desenhar nada à mão.
 *
 * Coordenadas: x de 0 (linha de fundo da esquerda) a 18 (linha de fundo da direita), com a rede em 9.
 * Valores negativos ou acima de 18 ficam na zona livre, atrás do fundo (onde se saca).
 * y de 0 (lateral de cima) a 9 (lateral de baixo).
 */
import type { Cena, ElementoCena, Ponto } from '../animacao/tipos'

/** Unidades da cena por metro e onde a quadra começa. */
const ESCALA = 13.2
const X0 = 22
const Y0 = 12.5
const LARGURA = 277.9
const ALTURA = 144.5

const COR = {
  moldura: '#ffffff',
  bordaMoldura: '#e7c9a3',
  livre: '#f8dcae',
  quadra: '#efae64',
  linha: '#ffffff',
  rede: '#0f172a',
  timeA: '#0284c7',
  timeB: '#0f766e',
  bola: '#dc2626',
  desloc: '#0f172a',
  zona: '#10b981',
  zonaBorda: '#059669',
  zonaTexto: '#065f46',
  texto: '#7c2d12',
  cone: '#f97316',
}

/** Converte metros da quadra para coordenadas da cena. Use nas linhas do tempo para pontos fixos. */
export const pt = (x: number, y: number): Ponto => [arred(X0 + x * ESCALA), arred(Y0 + y * ESCALA)]

const arred = (n: number): number => Math.round(n * 10) / 10

export interface DescricaoQuadra {
  jogadores: Array<{ id: string; x: number; y: number; time?: 'a' | 'b'; rotulo?: string }>
  cones?: Array<{ id: string; x: number; y: number }>
  /** Área retangular: x, y é o canto de cima à esquerda; l (largura) e a (altura) em metros. */
  zonas?: Array<{ id: string; x: number; y: number; l: number; a: number; rotulo?: string }>
  /**
   * Setas numeradas. `bola`: trajetória da bola (vermelha, contínua). `jogador`: deslocamento (escura, tracejada).
   * `curva`: quanto a seta se curva, em metros, para o lado esquerdo de quem segue a seta (negativo: para o outro lado).
   */
  setas?: Array<{ id: string; tipo: 'bola' | 'jogador'; de: [number, number]; para: [number, number]; curva?: number; numero?: number }>
  /** Bolas paradas no desenho (cesto, bola na mão etc.). */
  bolas?: Array<[number, number]>
  textos?: Array<{ t: string; x: number; y: number; cor?: string }>
}

function retangulo(x: number, y: number, l: number, a: number): string {
  return `M${arred(x)} ${arred(y)}H${arred(x + l)}V${arred(y + a)}H${arred(x)}Z`
}

/** Ponto de controle de uma curva quadrática que se desvia `curva` metros da reta. */
function controle(a: Ponto, b: Ponto, curva: number): Ponto {
  const mx = (a[0] + b[0]) / 2
  const my = (a[1] + b[1]) / 2
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const n = Math.hypot(dx, dy) || 1
  const desvio = curva * ESCALA * 2
  return [arred(mx + (dy / n) * desvio), arred(my - (dx / n) * desvio)]
}

/** Ponto e direção da curva quadrática no instante t (0..1). */
function naCurva(a: Ponto, c: Ponto, b: Ponto, t: number): { p: Ponto; dir: Ponto } {
  const u = 1 - t
  const p: Ponto = [u * u * a[0] + 2 * u * t * c[0] + t * t * b[0], u * u * a[1] + 2 * u * t * c[1] + t * t * b[1]]
  const dir: Ponto = [2 * u * (c[0] - a[0]) + 2 * t * (b[0] - c[0]), 2 * u * (c[1] - a[1]) + 2 * t * (b[1] - c[1])]
  return { p, dir }
}

function ponta(fim: Ponto, dir: Ponto, tamanho: number): string {
  const n = Math.hypot(dir[0], dir[1]) || 1
  const ux = dir[0] / n
  const uy = dir[1] / n
  const base: Ponto = [fim[0] - ux * tamanho, fim[1] - uy * tamanho]
  const lado = tamanho * 0.55
  return `M${arred(fim[0])} ${arred(fim[1])}L${arred(base[0] - uy * lado)} ${arred(base[1] + ux * lado)}L${arred(base[0] + uy * lado)} ${arred(base[1] - ux * lado)}Z`
}

/** Monta a cena completa da quadra a partir da descrição em metros. */
export function cenaDaQuadra(d: DescricaoQuadra): Cena {
  const el: ElementoCena[] = []
  const q = { x: X0, y: Y0, l: 18 * ESCALA, a: 9 * ESCALA }

  // fundo e quadra
  el.push({ k: 'moldura', d: retangulo(0, 0, LARGURA, ALTURA), f: COR.moldura })
  el.push({ k: 'moldura', d: retangulo(2, 2, LARGURA - 4, ALTURA - 4), f: COR.livre, s: COR.bordaMoldura, w: 0.75 })
  el.push({ k: 'quadra', d: retangulo(q.x, q.y, q.l, q.a), f: COR.quadra, s: COR.linha, w: 1.6 })
  // linhas de ataque (3 m de cada lado da rede)
  for (const xm of [6, 12]) {
    const [x] = pt(xm, 0)
    el.push({ k: 'quadra', d: `M${x} ${arred(q.y)}V${arred(q.y + q.a)}`, s: COR.linha, w: 1.1 })
  }
  // rede: faixa escura sobre a linha central, com os postes fora da quadra
  const [xr] = pt(9, 0)
  el.push({ k: 'rede', d: retangulo(xr - 1.1, q.y - 6, 2.2, q.a + 12), f: COR.rede })
  el.push({ k: 'rede', d: `M${xr - 2.4} ${arred(q.y - 8)}h4.8v3h-4.8ZM${xr - 2.4} ${arred(q.y + q.a + 5)}h4.8v3h-4.8Z`, f: COR.rede })

  // zonas-alvo
  for (const z of d.zonas ?? []) {
    const [x, y] = pt(z.x, z.y)
    const l = z.l * ESCALA
    const a = z.a * ESCALA
    el.push({ k: 'zona', id: z.id, d: retangulo(x, y, l, a), f: COR.zona, fo: 0.26, s: COR.zonaBorda, w: 0.8, da: [2, 1.4], x: arred(x + l / 2), y: arred(y + a / 2) })
    // o nome fica na borda de cima, para não ficar embaixo das setas que chegam no meio da zona
    if (z.rotulo) el.push({ k: 'texto', t: z.rotulo, x: arred(x + l / 2), y: arred(y + 4.6), fs: 4.2, c: COR.zonaTexto, b: 1 })
  }

  // cones
  for (const c of d.cones ?? []) {
    const [x, y] = pt(c.x, c.y)
    el.push({ k: 'cone', id: c.id, d: `M${x} ${arred(y - 3.6)}L${arred(x - 3.3)} ${arred(y + 3.2)}L${arred(x + 3.3)} ${arred(y + 3.2)}Z`, f: COR.cone, s: '#ffffff', w: 0.67, x, y })
  }

  // setas
  const numeros: ElementoCena[] = []
  for (const s of d.setas ?? []) {
    const a = pt(...s.de)
    const b = pt(...s.para)
    const c = controle(a, b, s.curva ?? 0)
    const ehBola = s.tipo === 'bola'
    const cor = ehBola ? COR.bola : COR.desloc
    // a linha termina um pouco antes da ponta, para a ponta ficar limpa
    const { dir: dirFim } = naCurva(a, c, b, 1)
    el.push({
      k: 'seta', id: s.id, d: `M${a[0]} ${a[1]}Q${c[0]} ${c[1]} ${b[0]} ${b[1]}`, s: cor, w: ehBola ? 1.4 : 1.1,
      da: ehBola ? undefined : [2.2, 1.6], lc: 'round', a, b, cor,
    })
    el.push({ k: 'ponta', d: ponta(b, dirFim, ehBola ? 5 : 4.2), f: cor, de: s.id, lado: 'b', x: b[0], y: b[1] })
    if (s.numero !== undefined) {
      const { p, dir } = naCurva(a, c, b, 0.5)
      const n = Math.hypot(dir[0], dir[1]) || 1
      numeros.push({ k: 'numero', seta: s.id, t: String(s.numero), x: arred(p[0] + (dir[1] / n) * 5), y: arred(p[1] - (dir[0] / n) * 5), r: 4.2, f: cor, s: '#ffffff', w: 0.67, fs: 4.7, tc: '#ffffff' })
    }
  }

  // bolas paradas, jogadores e números por cima
  for (const [bx, by] of d.bolas ?? []) {
    const [x, y] = pt(bx, by)
    el.push({ k: 'bola', x, y, r: 3.4, f: '#facc15', s: '#0f172a', w: 0.72 })
  }
  for (const j of d.jogadores) {
    const [x, y] = pt(j.x, j.y)
    el.push({ k: 'jogador', id: j.id, t: j.rotulo ?? j.id, x, y, r: 6.7, f: j.time === 'b' ? COR.timeB : COR.timeA, s: '#ffffff', w: 1.11, fs: 5.1, tc: '#ffffff' })
  }
  el.push(...numeros)

  // textos fixos
  el.push({ k: 'texto', t: 'REDE', x: xr + 10, y: arred(q.y - 6.3), fs: 4.4, c: COR.rede, b: 1 })
  for (const t of d.textos ?? []) {
    const [x, y] = pt(t.x, t.y)
    el.push({ k: 'texto', t: t.t, x, y, fs: 4.6, c: t.cor ?? COR.texto, b: 1 })
  }
  return { w: LARGURA, h: ALTURA, el }
}

const esc = (t: string): string => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')

/** O desenho parado, em texto SVG: vira a imagem estática e a miniatura do exercício. */
export function svgDaCena(cena: Cena): string {
  const partes: string[] = []
  const texto = (t: string, x: number, y: number, fs: number, cor: string, peso = 700): string =>
    `<text x="${x}" y="${y}" font-size="${fs}" fill="${cor}" text-anchor="middle" dominant-baseline="central" font-family="Inter, Arial, sans-serif" font-weight="${peso}">${esc(t)}</text>`
  for (const e of cena.el) {
    if (e.k === 'jogador' || e.k === 'numero') {
      partes.push(`<circle cx="${e.x}" cy="${e.y}" r="${e.r}" fill="${e.f}" stroke="${e.s}" stroke-width="${e.w}"/>`)
      if (e.t) partes.push(texto(e.t, e.x ?? 0, e.y ?? 0, e.fs ?? 5, e.tc ?? '#ffffff'))
    } else if (e.k === 'bola') {
      partes.push(`<circle cx="${e.x}" cy="${e.y}" r="${e.r}" fill="${e.f}" stroke="${e.s}" stroke-width="${e.w}"/>`)
    } else if (e.k === 'texto') {
      partes.push(texto(e.t ?? '', e.x ?? 0, e.y ?? 0, e.fs ?? 5, e.c ?? '#0f172a', e.b ? 700 : 600))
    } else if (e.d) {
      const at = [`d="${e.d}"`, `fill="${e.f ?? 'none'}"`]
      if (e.fo !== undefined) at.push(`fill-opacity="${e.fo}"`)
      if (e.s) at.push(`stroke="${e.s}"`, `stroke-width="${e.w}"`)
      if (e.da) at.push(`stroke-dasharray="${e.da.join(' ')}"`)
      if (e.lc) at.push(`stroke-linecap="${e.lc}"`)
      partes.push(`<path ${at.join(' ')}/>`)
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${cena.w} ${cena.h}">${partes.join('')}</svg>`
}

/** O desenho parado como endereço de imagem (para <img src>). */
export function urlDaCena(cena: Cena): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgDaCena(cena))}`
}
