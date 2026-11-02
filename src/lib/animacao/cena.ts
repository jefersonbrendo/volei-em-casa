import type { Cena, ElementoCena, Ponto } from './tipos'
import type { Estado } from './linhaDoTempo'

const SVG = 'http://www.w3.org/2000/svg'
/** Quanto a bola "sobe" na tela no ponto mais alto de um arco (unidades da cena). */
const ALTURA_DO_ARCO = 16
/** Com várias bolinhas no desenho, só some a que estiver a menos disso (unidades da cena) de um ponto do caminho da bola animada. */
const RAIO_DE_SUBSTITUICAO = 14
/** Bolinha do desenho a menos disso de um jogador é a que ele segura. */
const RAIO_DA_MAO = 12

function no<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string | number | undefined> = {}): SVGElementTagNameMap[K] {
  const el = document.createElementNS(SVG, tag)
  for (const [k, v] of Object.entries(attrs)) if (v !== undefined) el.setAttribute(k, String(v))
  return el
}

function atributosDoDesenho(e: ElementoCena): Record<string, string | number | undefined> {
  return {
    d: e.d,
    fill: e.f ?? 'none',
    'fill-opacity': e.fo,
    stroke: e.s ?? 'none',
    'stroke-width': e.s ? e.w : undefined,
    'stroke-opacity': e.so,
    'stroke-dasharray': e.da?.join(' '),
    'stroke-linecap': e.lc,
    'fill-rule': e.eo ? 'evenodd' : undefined,
  }
}

const ponto = (p: unknown): Ponto | undefined => (Array.isArray(p) && p.length === 2 ? ([Number(p[0]), Number(p[1])] as const) : undefined)

export interface CenaMontada {
  svg: SVGSVGElement
  /** Desenha o estado de um instante (posições, bola, setas). Só mexe no que mudou. */
  aplicar(estado: Estado): void
}

/**
 * Monta o SVG de uma cena. `setasAnimadas` são as setas que a linha do tempo desenha: elas (e seus
 * números e cabeças) começam escondidas. As demais ficam sempre visíveis, como no diagrama estático.
 */
export function montarCena(cena: Cena, setasAnimadas: ReadonlySet<string>, prefixo: string, pontosDaBola?: readonly Ponto[]): CenaMontada {
  const svg = no('svg', { viewBox: `0 0 ${cena.w} ${cena.h}`, role: 'img', 'aria-label': 'Diagrama animado da quadra', preserveAspectRatio: 'xMidYMid meet' })
  svg.setAttribute('class', 'cda-anim-svg')
  const defs = no('defs')
  svg.append(defs)

  const mascaras = new Map<string, SVGPathElement>()
  const jogadores = new Map<string, { g: SVGGElement; x0: number; y0: number }>()
  const cabecas = new Map<string, SVGElement[]>()
  const numeros = new Map<string, SVGElement[]>()
  const pecasDaSeta = new Map<string, SVGElement[]>()

  const principais = new Map<string, ElementoCena>()
  for (const e of cena.el) if (e.k === 'seta' && e.id && !e.junto) principais.set(e.id, e)

  // máscara de cada seta animada: um traço branco que "cresce" da partida até a chegada
  for (const id of setasAnimadas) {
    const s = principais.get(id)
    if (!s) continue
    const a = s.a ?? [0, 0]
    const b = ponto(s.b) ?? a
    const caminho = s.pre ? `M${a[0]} ${a[1]}L${b[0]} ${b[1]}` : (s.d ?? '')
    const m = no('mask', { id: `${prefixo}-m-${id}`, maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: cena.w, height: cena.h })
    // ponta reta e tracejado "1 2": com o desenho em 0% não sobra nenhum pontinho no fim do traço
    const tr = no('path', { d: caminho, fill: 'none', stroke: '#fff', 'stroke-width': 11, 'stroke-linecap': 'butt', 'stroke-linejoin': 'round', pathLength: 1, 'stroke-dasharray': '1 2', 'stroke-dashoffset': 1, visibility: 'hidden' })
    m.append(tr)
    defs.append(m)
    mascaras.set(id, tr)
  }

  const idDaSeta = (e: ElementoCena): string | undefined => (e.junto ?? e.id)

  for (const e of cena.el) {
    let n: SVGElement | null = null
    if (e.k === 'jogador') {
      const g = no('g', { 'data-jogador': e.id })
      g.append(no('circle', { cx: e.x, cy: e.y, r: e.r, fill: e.f, stroke: e.s, 'stroke-width': e.w }))
      if (e.t) g.append(rotulo(e.t, e.x ?? 0, e.y ?? 0, e.fs ?? 5, e.tc ?? '#ffffff'))
      jogadores.set(e.id ?? '', { g, x0: e.x ?? 0, y0: e.y ?? 0 })
      n = g
    } else if (e.k === 'numero') {
      const g = no('g', { 'data-numero': e.seta ?? '' })
      g.append(no('circle', { cx: e.x, cy: e.y, r: e.r, fill: e.f, stroke: e.s, 'stroke-width': e.w }))
      if (e.t) g.append(rotulo(e.t, e.x ?? 0, e.y ?? 0, e.fs ?? 4.7, e.tc ?? '#ffffff'))
      if (e.seta && setasAnimadas.has(e.seta)) {
        g.setAttribute('opacity', '0')
        numeros.set(e.seta, [...(numeros.get(e.seta) ?? []), g])
      }
      n = g
    } else if (e.k === 'bola') {
      n = no('circle', { cx: e.x, cy: e.y, r: e.r, fill: e.f, stroke: e.s, 'stroke-width': e.w, class: 'cda-bola-estatica', 'data-x': e.x, 'data-y': e.y })
    } else if (e.k === 'texto') {
      const t = rotulo(e.t ?? '', e.x ?? 0, e.y ?? 0, e.fs ?? 5, e.c ?? '#0f172a')
      t.setAttribute('font-weight', e.b ? '700' : '600')
      n = t
    } else if (e.d) {
      const p = no('path', atributosDoDesenho(e))
      p.setAttribute('data-k', e.k)
      if (e.x !== undefined && e.y !== undefined) { p.setAttribute('data-x', String(e.x)); p.setAttribute('data-y', String(e.y)) }
      n = p
      if (e.k === 'seta') {
        const id = idDaSeta(e)
        if (id && setasAnimadas.has(id)) {
          p.setAttribute('mask', `url(#${prefixo}-m-${id})`)
          pecasDaSeta.set(id, [...(pecasDaSeta.get(id) ?? []), p])
        }
      } else if (e.k === 'ponta' && e.de && setasAnimadas.has(e.de)) {
        p.setAttribute('opacity', '0')
        cabecas.set(e.de, [...(cabecas.get(e.de) ?? []), p])
      }
    }
    if (n) svg.append(n)
  }

  // a bola animada fica por cima de tudo
  const sombra = no('ellipse', { rx: 3, ry: 1.5, fill: '#0f172a', opacity: 0.28 })
  const corpoDaBola = no('circle', { r: 3.3, fill: '#ffffff', stroke: '#0f172a', 'stroke-width': 0.8 })
  const costura = no('path', { d: 'M-3.3 0Q0 -1.6 3.3 0M0 -3.3Q1.6 0 0 3.3', fill: 'none', stroke: '#0f172a', 'stroke-width': 0.5, opacity: 0.55 })
  const bola = no('g', { class: 'cda-bola', visibility: 'hidden' })
  bola.append(sombra, corpoDaBola, costura)
  svg.append(bola)

  // a bolinha amarela do desenho (e o arquinho que a acompanha) dão lugar à bola animada. Sem bola na
  // linha do tempo, ou longe do caminho dela (ex.: cada jogador segurando a sua), continuam no desenho.
  const umaSoBola = cena.el.filter((e) => e.k === 'bola').length <= 1
  const substituida = (x: number, y: number): boolean =>
    pontosDaBola === undefined || (pontosDaBola.length > 0 && umaSoBola) || pontosDaBola.some((p) => Math.hypot(p[0] - x, p[1] - y) < RAIO_DE_SUBSTITUICAO)
  const escondidas = cena.el.filter((e) => e.k === 'bola' && substituida(e.x ?? 0, e.y ?? 0))
  svg.querySelectorAll('.cda-bola-estatica').forEach((el) => {
    if (substituida(Number(el.getAttribute('data-x')), Number(el.getAttribute('data-y')))) el.setAttribute('display', 'none')
  })
  svg.querySelectorAll<SVGElement>('[data-k="fundo"]').forEach((el) => {
    const cx = Number(el.getAttribute('data-x'))
    const cy = Number(el.getAttribute('data-y'))
    if (escondidas.some((b) => Math.hypot((b.x ?? 0) - cx, (b.y ?? 0) - cy) < 5)) el.setAttribute('display', 'none')
  })

  // bolinha que o jogador segura (ex.: "cada jogador com uma bola") acompanha o jogador
  const acompanhantes = new Map<string, SVGElement[]>()
  svg.querySelectorAll<SVGElement>('.cda-bola-estatica').forEach((el) => {
    if (el.getAttribute('display') === 'none') return
    const x = Number(el.getAttribute('data-x'))
    const y = Number(el.getAttribute('data-y'))
    let dono: string | null = null
    let menor = RAIO_DA_MAO
    for (const [id, j] of jogadores) {
      const d = Math.hypot(j.x0 - x, j.y0 - y)
      if (d < menor) { menor = d; dono = id }
    }
    if (dono) acompanhantes.set(dono, [...(acompanhantes.get(dono) ?? []), el])
  })

  // cache para só escrever no DOM o que mudou
  const ultimo = new Map<string, string>()
  const escrever = (el: Element, chave: string, nome: string, valor: string): void => {
    const k = `${chave}|${nome}`
    if (ultimo.get(k) === valor) return
    ultimo.set(k, valor)
    el.setAttribute(nome, valor)
  }

  const aplicar = (estado: Estado): void => {
    for (const [id, pos] of estado.jogadores) {
      const j = jogadores.get(id)
      if (!j) continue
      const mover = `translate(${(pos[0] - j.x0).toFixed(2)} ${(pos[1] - j.y0).toFixed(2)})`
      escrever(j.g, `j${id}`, 'transform', mover)
      acompanhantes.get(id)?.forEach((el, i) => escrever(el, `a${id}${i}`, 'transform', mover))
    }
    const b = estado.bola
    escrever(bola, 'bola', 'visibility', b.visivel ? 'visible' : 'hidden')
    if (b.visivel) {
      const sobe = b.altura * ALTURA_DO_ARCO
      const escala = 1 + b.altura * 0.55
      escrever(sombra, 'sombra', 'transform', `translate(${b.x.toFixed(2)} ${b.y.toFixed(2)}) scale(${(1 - b.altura * 0.35).toFixed(3)})`)
      escrever(corpoDaBola, 'corpo', 'transform', `translate(${b.x.toFixed(2)} ${(b.y - sobe).toFixed(2)}) scale(${escala.toFixed(3)})`)
      escrever(costura, 'costura', 'transform', `translate(${b.x.toFixed(2)} ${(b.y - sobe).toFixed(2)}) scale(${escala.toFixed(3)})`)
    }
    for (const [id, p] of estado.setas) {
      const m = mascaras.get(id)
      if (m) {
        escrever(m, `m${id}`, 'stroke-dashoffset', (1 - p).toFixed(3))
        escrever(m, `v${id}`, 'visibility', p > 0 ? 'visible' : 'hidden')
      }
      for (const c of cabecas.get(id) ?? []) escrever(c, `c${id}${cabecas.get(id)?.indexOf(c)}`, 'opacity', p >= 0.97 ? '1' : '0')
      for (const n of numeros.get(id) ?? []) escrever(n, `n${id}${numeros.get(id)?.indexOf(n)}`, 'opacity', p > 0 ? '1' : '0')
    }
  }

  return { svg, aplicar }
}

function rotulo(texto: string, x: number, y: number, tamanho: number, cor: string): SVGTextElement {
  const t = no('text', { x, y, 'font-size': tamanho, fill: cor, 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-family': 'Inter, Arial, sans-serif', 'font-weight': 700 })
  t.textContent = texto
  return t
}
