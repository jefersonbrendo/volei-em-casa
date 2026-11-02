import { animate } from 'motion'
import { cenario, CHAO, CENTRO_X, esqueletoEm, LARGURA, NS, poseEm, type Esqueleto, type Movimento, type Ponto } from './boneco'

/**
 * BONECO V2: mesmo esqueleto e mesmos movimentos do boneco.ts, com outro visual:
 *  - corpo com volume (membros mais grossos, contorno, mãos e pés)
 *  - regata e bermuda nas cores da marca, cabelo
 *  - destaque pulsando na região que o exercício trabalha
 *  - rastro da trajetória da parte do corpo que mais se move
 *  - câmera lenta e contador de repetições (controles fora do SVG)
 */

export type Regiao = 'pernas' | 'gluteos' | 'core' | 'bracos' | 'ombros' | 'costas' | 'corpo_inteiro'

export interface OpcoesV2 {
  regioes?: Regiao[]
  parado?: boolean
  t?: number
  /** Miniatura: enquadra só o boneco (com `parado`). */
  recorte?: boolean
  /** Chamado a cada repetição completa (fim de um ciclo). */
  aoRepetir?: (n: number) => void
}

export interface AnimacaoV2 {
  el: SVGSVGElement
  destruir: () => void
  velocidade: (v: number) => void
  /** Se o desenho mostra a linha de trajetória. */
  temRastro: boolean
}

function el<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string | number> = {}): SVGElementTagNameMap[K] {
  const e = document.createElementNS(NS, tag)
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, String(v))
  return e
}
const f = (n: number): string => n.toFixed(1)
const pts = (...ps: Ponto[]): string => ps.map((p) => `${f(p.x)},${f(p.y)}`).join(' ')
const sub = (a: Ponto, b: Ponto): Ponto => ({ x: a.x - b.x, y: a.y - b.y })
const len = (v: Ponto): number => Math.hypot(v.x, v.y) || 1
const lerp = (a: Ponto, b: Ponto, k: number): Ponto => ({ x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k })

/** Uma peça do corpo: contorno + preenchimento (+ halo de destaque opcional). */
class Peca {
  readonly halo: SVGPolylineElement
  readonly borda: SVGPolylineElement
  readonly cor: SVGPolylineElement
  constructor(public largura: number, classe: string, public destacada: boolean) {
    this.halo = el('polyline', { class: 'b2-halo', 'stroke-width': largura + 12 })
    this.borda = el('polyline', { class: 'b2-borda', 'stroke-width': largura + 3.2 })
    this.cor = el('polyline', { class: classe, 'stroke-width': largura })
  }
  /** Halo e contorno vão para camadas de baixo, a cor para a de cima: assim não aparecem emendas entre as peças. */
  noGrupo(g: SVGGElement): void {
    const camadas = g as SVGGElement & { halos?: SVGGElement; bordas?: SVGGElement; cores?: SVGGElement }
    if (!camadas.cores) {
      camadas.halos = el('g'); camadas.bordas = el('g'); camadas.cores = el('g')
      g.append(camadas.halos, camadas.bordas, camadas.cores)
    }
    if (this.destacada) camadas.halos!.append(this.halo)
    camadas.bordas!.append(this.borda)
    camadas.cores!.append(this.cor)
  }
  pontos(...p: Ponto[]): void {
    const s = pts(...p)
    if (this.destacada) this.halo.setAttribute('points', s)
    this.borda.setAttribute('points', s)
    this.cor.setAttribute('points', s)
  }
}

/** Qual ponto do corpo mais se move no ciclo (para desenhar o rastro). */
function pontoQueMaisMove(m: Movimento): (s: Esqueleto) => Ponto {
  const opcoes: Array<(s: Esqueleto) => Ponto> = m.vista === 'frente' ? [(s) => s.maoF, (s) => s.quadril, (s) => s.tornF] : [(s) => s.maos, (s) => s.quadril, (s) => s.pes]
  let melhor = opcoes[0]!, maior = -1
  for (const op of opcoes) {
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity
    for (let i = 0; i <= 24; i++) {
      const p = op(esqueletoEm(m, i / 24))
      x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x); y0 = Math.min(y0, p.y); y1 = Math.max(y1, p.y)
    }
    const d = Math.hypot(x1 - x0, y1 - y0)
    if (d > maior) { maior = d; melhor = op }
  }
  return melhor
}

export function criarBonecoV2(m: Movimento, opcoes: OpcoesV2 = {}): AnimacaoV2 {
  const vista = m.vista ?? 'lado'
  const reg = new Set(opcoes.regioes ?? [])
  const tudo = reg.has('corpo_inteiro')
  const d = (r: Regiao): boolean => tudo || reg.has(r)

  const svg = el('svg', { viewBox: `0 0 ${LARGURA} 230`, class: 'boneco boneco-v2', role: 'img', 'aria-label': m.legenda ?? 'Demonstração do movimento' })
  cenario(svg, m)
  const sombra = el('ellipse', { cx: CENTRO_X, cy: CHAO + 1, rx: 26, ry: 3.5, class: 'bn-sombra' })
  const rastro = el('path', { class: 'b2-rastro' })
  svg.append(sombra, rastro)

  // peças
  const peleT = vista === 'lado' ? 'b2-pele-tras' : 'b2-pele'
  const coxaT = new Peca(12, peleT, d('pernas')), canelaT = new Peca(9.5, peleT, d('pernas')), peT = new Peca(6, peleT, false)
  const coxaF = new Peca(12, 'b2-pele', d('pernas')), canelaF = new Peca(9.5, 'b2-pele', d('pernas')), peF = new Peca(6, 'b2-pele', false)
  const bermudaT = new Peca(14, vista === 'lado' ? 'b2-bermuda-tras' : 'b2-bermuda', d('gluteos')), bermudaF = new Peca(14, 'b2-bermuda', d('gluteos'))
  const bracoT = new Peca(8.5, peleT, d('bracos') || d('ombros')), antebracoT = new Peca(7.5, peleT, d('bracos'))
  const bracoF = new Peca(8.5, 'b2-pele', d('bracos') || d('ombros')), antebracoF = new Peca(7.5, 'b2-pele', d('bracos'))
  const tronco = new Peca(vista === 'lado' ? 17 : 22, 'b2-regata', d('core') || d('costas'))
  const pescoco = new Peca(6, 'b2-pele', false)
  const ombros = new Peca(9, 'b2-regata', d('ombros')) // só de frente: linha dos ombros
  const quadril = new Peca(11, 'b2-bermuda', d('gluteos')) // só de frente: linha do quadril

  const maoT = el('circle', { r: 4.6, class: vista === 'lado' ? 'b2-mao-tras' : 'b2-mao' }), maoF = el('circle', { r: 4.6, class: 'b2-mao' })
  const cabeca = el('circle', { r: 10.5, class: 'b2-cabeca' })
  const cabelo = el('path', { class: 'b2-cabelo' })
  const olho = el('circle', { r: 1.4, class: 'b2-olho' })

  const tras = el('g'), corpo = el('g'), frente = el('g')
  if (vista === 'lado') {
    bracoT.noGrupo(tras); antebracoT.noGrupo(tras); tras.append(maoT)
    coxaT.noGrupo(tras); bermudaT.noGrupo(tras); canelaT.noGrupo(tras); peT.noGrupo(tras)
    pescoco.noGrupo(corpo); tronco.noGrupo(corpo)
    coxaF.noGrupo(frente); bermudaF.noGrupo(frente); canelaF.noGrupo(frente); peF.noGrupo(frente)
    frente.append(cabeca, cabelo, olho)
    bracoF.noGrupo(frente); antebracoF.noGrupo(frente); frente.append(maoF)
  } else {
    for (const p of [coxaT, canelaT, peT, coxaF, canelaF, peF]) p.noGrupo(tras)
    for (const p of [bermudaT, bermudaF, quadril]) p.noGrupo(tras)
    pescoco.noGrupo(corpo); tronco.noGrupo(corpo); ombros.noGrupo(corpo)
    corpo.append(cabeca, cabelo)
    for (const p of [bracoT, antebracoT, bracoF, antebracoF]) p.noGrupo(frente)
    frente.append(maoT, maoF)
  }
  svg.append(tras, corpo, frente)

  // objetos (iguais ao boneco.ts)
  const bola = el('g', { class: 'bn-bola' })
  bola.append(el('circle', { r: 9 }), el('path', { d: 'M-9 0 H9 M0 -9 C5 -4 5 4 0 9 M0 -9 C-5 -4 -5 4 0 9' }))
  const toalha = m.toalha ? el('path', { class: 'bn-toalha' }) : null
  const garrafas = m.garrafas ? [el('rect', { width: 7, height: 16, rx: 2.5, class: 'bn-garrafa' }), el('rect', { width: 7, height: 16, rx: 2.5, class: 'bn-garrafa' })] : null
  const elastico = m.elastico ? el('line', { class: 'bn-elastico' }) : null
  if (elastico) svg.insertBefore(elastico, tras)
  if (toalha) svg.append(toalha)
  if (garrafas) svg.append(...garrafas)
  svg.append(bola)

  // rastro: caminho completo do ponto que mais se move
  const ponto = pontoQueMaisMove(m)
  const caminho: Ponto[] = []
  for (let i = 0; i <= 48; i++) caminho.push(ponto(esqueletoEm(m, i / 48)))
  const xs = caminho.map((p) => p.x), ys = caminho.map((p) => p.y)
  if (Math.hypot(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)) > 14) {
    rastro.setAttribute('d', 'M' + caminho.map((p) => `${f(p.x)} ${f(p.y)}`).join(' L'))
  }

  const desenhar = (t: number): void => {
    const s = esqueletoEm(m, t)
    const pose = poseEm(m, t)
    const olhaDireita = Math.cos(Math.PI * pose.virar) >= 0
    if (vista === 'lado') {
      coxaT.pontos(s.quadril, s.joelhoT); canelaT.pontos(s.joelhoT, s.tornT); peT.pontos(s.tornT, s.pontaT)
      coxaF.pontos(s.quadril, s.joelhoF); canelaF.pontos(s.joelhoF, s.tornF); peF.pontos(s.tornF, s.pontaF)
      bermudaT.pontos(s.quadril, lerp(s.quadril, s.joelhoT, 0.5)); bermudaF.pontos(s.quadril, lerp(s.quadril, s.joelhoF, 0.5))
      const ctrl = { x: 2 * s.meioTronco.x - (s.quadril.x + s.ombro.x) / 2, y: 2 * s.meioTronco.y - (s.quadril.y + s.ombro.y) / 2 }
      const tr: Ponto[] = []
      for (let i = 0; i <= 6; i++) {
        const k = i / 6
        tr.push({ x: (1 - k) ** 2 * s.quadril.x + 2 * (1 - k) * k * ctrl.x + k * k * s.ombro.x, y: (1 - k) ** 2 * s.quadril.y + 2 * (1 - k) * k * ctrl.y + k * k * s.ombro.y })
      }
      tronco.pontos(...tr)
      bracoT.pontos(s.ombro, s.cotT); antebracoT.pontos(s.cotT, s.maoT)
      bracoF.pontos(s.ombro, s.cotF); antebracoF.pontos(s.cotF, s.maoF)
    } else {
      coxaT.pontos(s.quadrilE!, s.joelhoT); canelaT.pontos(s.joelhoT, s.tornT); peT.pontos(s.tornT, s.pontaT)
      coxaF.pontos(s.quadrilD!, s.joelhoF); canelaF.pontos(s.joelhoF, s.tornF); peF.pontos(s.tornF, s.pontaF)
      bermudaT.pontos(s.quadrilE!, lerp(s.quadrilE!, s.joelhoT, 0.45)); bermudaF.pontos(s.quadrilD!, lerp(s.quadrilD!, s.joelhoF, 0.45))
      quadril.pontos(s.quadrilE!, s.quadrilD!)
      // regata de frente: tronco largo = vários traços entre quadril e ombros
      tronco.pontos(lerp(s.quadril, s.ombro, 0.22), lerp(s.quadril, s.ombro, 0.84))
      ombros.pontos(s.ombroE!, s.ombroD!)
      bracoT.pontos(s.ombroE!, s.cotT); antebracoT.pontos(s.cotT, s.maoT)
      bracoF.pontos(s.ombroD!, s.cotF); antebracoF.pontos(s.cotF, s.maoF)
    }
    // pescoço e cabeça
    const u = sub(s.cabeca, s.ombro), nu = { x: u.x / len(u), y: u.y / len(u) }
    pescoco.pontos(s.ombro, { x: s.cabeca.x - nu.x * 9, y: s.cabeca.y - nu.y * 9 })
    cabeca.setAttribute('cx', f(s.cabeca.x)); cabeca.setAttribute('cy', f(s.cabeca.y))
    // cabelo: calota em volta do topo da cabeça (de lado, puxada para trás)
    const R = 11
    const lado = olhaDireita ? 1 : -1
    const frenteV = vista === 'lado' ? { x: -nu.y * lado, y: nu.x * lado } : { x: 0, y: 0 }
    const c = vista === 'lado' ? { x: nu.x - frenteV.x * 0.9, y: nu.y - frenteV.y * 0.9 } : nu
    const ac = Math.atan2(c.y, c.x), abre = vista === 'lado' ? 1.55 : 1.3
    const p0 = { x: s.cabeca.x + R * Math.cos(ac - abre), y: s.cabeca.y + R * Math.sin(ac - abre) }
    const p1 = { x: s.cabeca.x + R * Math.cos(ac + abre), y: s.cabeca.y + R * Math.sin(ac + abre) }
    const dentro = { x: s.cabeca.x + c.x * 3, y: s.cabeca.y + c.y * 3 }
    cabelo.setAttribute('d', `M${f(p0.x)} ${f(p0.y)} A${R} ${R} 0 ${2 * abre > Math.PI ? 1 : 0} 1 ${f(p1.x)} ${f(p1.y)} Q${f(dentro.x)} ${f(dentro.y)} ${f(p0.x)} ${f(p0.y)} Z`)
    if (vista === 'lado') {
      const o = { x: s.cabeca.x + frenteV.x * 5.5 + nu.x * 1.5, y: s.cabeca.y + frenteV.y * 5.5 + nu.y * 1.5 }
      olho.setAttribute('cx', f(o.x)); olho.setAttribute('cy', f(o.y))
      olho.style.display = m.olhosFechados ? 'none' : ''
    }
    maoT.setAttribute('cx', f(s.maoT.x)); maoT.setAttribute('cy', f(s.maoT.y))
    maoF.setAttribute('cx', f(s.maoF.x)); maoF.setAttribute('cy', f(s.maoF.y))

    if (toalha) { const mm = { x: (s.maoT.x + s.maoF.x) / 2, y: (s.maoT.y + s.maoF.y) / 2 }; toalha.setAttribute('d', `M${f(s.maoT.x)} ${f(s.maoT.y)} Q${f(mm.x)} ${f(mm.y + 6)} ${f(s.maoF.x)} ${f(s.maoF.y)}`) }
    if (garrafas) { [s.maoF, s.maoT].forEach((mao, i) => { garrafas[i]!.setAttribute('x', f(mao.x - 3.5)); garrafas[i]!.setAttribute('y', f(mao.y - 8)) }) }
    if (elastico && m.elastico) { elastico.setAttribute('x1', f(m.elastico.x)); elastico.setAttribute('y1', f(m.elastico.y)); elastico.setAttribute('x2', f(s.maoF.x)); elastico.setAttribute('y2', f(s.maoF.y)) }
    const altura = CHAO - 4.5 - Math.max(s.tornF.y, s.tornT.y)
    sombra.setAttribute('cx', f(s.quadril.x)); sombra.setAttribute('rx', f(Math.max(12, 26 - Math.max(0, altura) * 0.25)))
    const b = m.bola?.(t, { s, em: (tt) => esqueletoEm(m, ((tt % 1) + 1) % 1) }) ?? null
    if (b) { bola.setAttribute('transform', `translate(${f(b.x)} ${f(b.y)})`); bola.style.display = '' } else bola.style.display = 'none'
  }

  if (opcoes.parado) {
    desenhar(opcoes.t ?? 0.5)
    if (opcoes.recorte) {
      rastro.removeAttribute('d')
      const s = esqueletoEm(m, opcoes.t ?? 0.5)
      const ps = Object.values(s).filter(Boolean) as Ponto[]
      const x0 = Math.min(...ps.map((p) => p.x)) - 16, x1 = Math.max(...ps.map((p) => p.x)) + 16
      const y0 = Math.min(...ps.map((p) => p.y)) - 18, y1 = CHAO + 6
      const ladoQ = Math.max(x1 - x0, y1 - y0), cx = (x0 + x1) / 2
      svg.setAttribute('viewBox', `${f(cx - ladoQ / 2)} ${f(y1 - ladoQ)} ${f(ladoQ)} ${f(ladoQ)}`)
    }
    return { el: svg, destruir: () => undefined, velocidade: () => undefined, temRastro: rastro.hasAttribute('d') }
  }
  desenhar(0)
  let anterior = 0, reps = 0
  const controle = animate(0, 1, {
    duration: m.duracao, ease: 'linear', repeat: Infinity,
    onUpdate: (t) => {
      if (t < anterior - 0.5) { reps++; opcoes.aoRepetir?.(reps) }
      anterior = t
      desenhar(t)
    },
  })
  return { el: svg, destruir: () => controle.stop(), velocidade: (v) => { controle.speed = v }, temRastro: rastro.hasAttribute('d') }
}
