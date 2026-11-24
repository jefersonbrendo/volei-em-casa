import * as THREE from 'three'
import { CENTRO_X, CHAO, esqueleto, PAREDE_X, poseEm, type Esqueleto, type Movimento, type Ponto } from './boneco'

/**
 * BONECO 3D: os mesmos movimentos do boneco.ts (mesmas poses-chave), desenhados em 3D com Three.js.
 * O esqueleto 2D dá a posição de cada junta no plano do movimento; a profundidade vem do lado do corpo
 * (perna/braço da frente ou de trás) e, na vista de frente, do quanto a pessoa agacha ou estica os braços.
 * Unidades do desenho 2D convertidas para metros (1 unidade = 1 cm).
 */

const S = 0.01
const COXA = 36, BRACO = 27, ANTEBRACO = 25
const MEIO_QUADRIL = 7.5, MEIO_OMBRO = 13

export interface Opcoes3D {
  /** Cores da roupa. */
  camisa?: string
  bermuda?: string
  pele?: string
  cabelo?: string
  tenis?: string
  /** Fundo da cena. */
  fundo?: string
  /** Gira a câmera devagar em volta do boneco (bom para vídeo). */
  orbitar?: boolean
  /** Chamado a cada repetição completa. */
  aoRepetir?: (n: number) => void
  /** Chamado a cada quadro com o instante do ciclo (0 a 1). */
  aoAtualizar?: (t: number) => void
}

export interface Animacao3D {
  el: HTMLCanvasElement
  renderer: THREE.WebGLRenderer
  destruir: () => void
  /** Desenha o instante t (0 a 1) do ciclo, sem animar. */
  desenharEm: (t: number, segundos?: number) => void
  redimensionar: (largura: number, altura: number) => void
  duracao: number
  velocidade: (v: number) => void
  /** Para no instante t (0 a 1). */
  pausarEm: (t: number) => void
  /** Continua de onde parou. */
  continuar: () => void
}

type V = THREE.Vector3
const v3 = (x = 0, y = 0, z = 0): V => new THREE.Vector3(x, y, z)
/** Ponto do desenho 2D (x para a direita, y para baixo) no espaço 3D, em metros. */
const em3d = (p: Ponto, z = 0): V => v3((p.x - CENTRO_X) * S, (CHAO - p.y) * S, z * S)
const clamp = (n: number, a: number, b: number): number => Math.max(a, Math.min(b, n))

interface Juntas {
  quadril: V; quadrilF: V; quadrilT: V; meioTronco: V; ombro: V; ombroF: V; ombroT: V; cabeca: V
  joelhoF: V; tornF: V; pontaF: V; joelhoT: V; tornT: V; pontaT: V
  cotF: V; maoF: V; cotT: V; maoT: V
  /** Eixo do lado do corpo. lateral × direção da cabeça = para onde o rosto olha. */
  lateral: V
}

/** Quanto o braço está caído ao lado do corpo (1) ou levantado/à frente (0): aproxima as mãos no toque e na manchete. */
function caido(angulo: number): number {
  return clamp(1 - Math.abs(angulo) / 55, 0, 1)
}

function juntasDeLado(s: Esqueleto, bracoF: number, antebracoF: number, bracoT: number, antebracoT: number, comBola: boolean): Juntas {
  const hF = caido(antebracoF), hT = caido(antebracoT)
  // com bola (toque, manchete) as mãos se juntam; sem bola os braços à frente ficam na largura dos ombros
  const maoZ = (h: number): number => (comBola ? 6 + 8 * h : 11.5 + 2.5 * h)
  const zF = MEIO_QUADRIL, zT = -MEIO_QUADRIL
  return {
    quadril: em3d(s.quadril), quadrilF: em3d(s.quadril, zF), quadrilT: em3d(s.quadril, zT),
    meioTronco: em3d(s.meioTronco), ombro: em3d(s.ombro), ombroF: em3d(s.ombro, MEIO_OMBRO), ombroT: em3d(s.ombro, -MEIO_OMBRO),
    cabeca: em3d(s.cabeca),
    joelhoF: em3d(s.joelhoF, zF + 1), tornF: em3d(s.tornF, zF), pontaF: em3d(s.pontaF, zF),
    joelhoT: em3d(s.joelhoT, zT - 1), tornT: em3d(s.tornT, zT), pontaT: em3d(s.pontaT, zT),
    cotF: em3d(s.cotF, 11.5 + 2.5 * caido(bracoF)), maoF: em3d(s.maoF, maoZ(hF)),
    cotT: em3d(s.cotT, -(11.5 + 2.5 * caido(bracoT))), maoT: em3d(s.maoT, -maoZ(hT)),
    lateral: v3(0, 0, -1),
  }
}

/** Vista de frente: o desenho é o plano lateral (x) e vertical; a profundidade sai do agachar e do esticar os braços. */
function juntasDeFrente(s: Esqueleto, agacha: number, encolhe: number): Juntas {
  const m = (p: Ponto, z: number): V => v3((p.x - CENTRO_X) * S, (CHAO - p.y) * S, z * S)
  const proj = 1 - 0.55 * agacha
  const recuo = -COXA * Math.sqrt(Math.max(0, 1 - proj * proj)) // quadril vai para trás ao agachar
  const k = 1 - 0.6 * encolhe
  const frenteBraco = BRACO * Math.sqrt(Math.max(0, 1 - k * k))
  const frenteAnte = ANTEBRACO * Math.sqrt(Math.max(0, 1 - k * k))
  const zOmbro = recuo * 0.35
  const tornF = m(s.tornF, 0), tornT = m(s.tornT, 0)
  return {
    quadril: m(s.quadril, recuo), quadrilF: m(s.quadrilD!, recuo), quadrilT: m(s.quadrilE!, recuo),
    meioTronco: m(s.meioTronco, (recuo + zOmbro) / 2), ombro: m(s.ombro, zOmbro), ombroF: m(s.ombroD!, zOmbro), ombroT: m(s.ombroE!, zOmbro),
    cabeca: m(s.cabeca, zOmbro + 1),
    joelhoF: m(s.joelhoF, 2), tornF, pontaF: tornF.clone().add(v3(0, 0, 0.1)),
    joelhoT: m(s.joelhoT, 2), tornT, pontaT: tornT.clone().add(v3(0, 0, 0.1)),
    cotF: m(s.cotF, zOmbro + frenteBraco), maoF: m(s.maoF, zOmbro + frenteBraco + frenteAnte),
    cotT: m(s.cotT, zOmbro + frenteBraco), maoT: m(s.maoT, zOmbro + frenteBraco + frenteAnte),
    lateral: v3(1, 0, 0),
  }
}

/** Juntas do instante t, com o corpo virado para a frente (o giro de `virar` é aplicado no grupo). */
function juntasEm(m: Movimento, t: number): { j: Juntas; virar: number; y: number } {
  const p = poseEm(m, t)
  const vista = m.vista ?? 'lado'
  const s = esqueleto({ ...p, virar: 0 }, vista, m.ancora ?? 'pes', m.deslocar ?? 0)
  const j = vista === 'frente' ? juntasDeFrente(s, p.agacha, p.encolhe) : juntasDeLado(s, p.bracoF, p.antebracoF, p.bracoT, p.antebracoT, !!m.bola)
  return { j, virar: p.virar, y: p.y }
}

/* ------------------------------ MATERIAIS E PEÇAS ------------------------------ */

function textoBola(): THREE.CanvasTexture {
  const c = document.createElement('canvas')
  c.width = 512; c.height = 256
  const g = c.getContext('2d')!
  const faixas = ['#FFC60B', '#1F5FA8', '#FFFFFF', '#FFC60B', '#1F5FA8', '#FFFFFF']
  faixas.forEach((cor, i) => { g.fillStyle = cor; g.fillRect(0, (i * 256) / 6, 512, 256 / 6 + 1) })
  g.strokeStyle = 'rgba(0,0,0,.25)'; g.lineWidth = 3
  for (let i = 1; i < 6; i++) { g.beginPath(); g.moveTo(0, (i * 256) / 6); g.lineTo(512, (i * 256) / 6); g.stroke() }
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

function textoPiso(): THREE.CanvasTexture {
  const c = document.createElement('canvas')
  c.width = 512; c.height = 512
  const g = c.getContext('2d')!
  for (let i = 0; i < 8; i++) {
    const l = 62 + ((i * 37) % 9)
    g.fillStyle = `hsl(30 42% ${l}%)`
    g.fillRect(0, i * 64, 512, 64)
    g.fillStyle = 'rgba(80,50,20,.18)'
    g.fillRect(0, i * 64, 512, 2)
    g.fillRect(((i * 173) % 512), i * 64, 2, 64)
  }
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(3, 3)
  t.anisotropy = 8
  return t
}

/** Perfil do tronco (raio relativo × altura relativa), girado em volta do eixo do tronco. */
const PERFIL_TRONCO = [
  [0, -0.06], [0.7, -0.04], [0.86, 0.06], [0.84, 0.22], [0.74, 0.4], [0.8, 0.58], [0.94, 0.76], [1, 0.88], [0.86, 0.98], [0.42, 1.04], [0, 1.06],
].map(([x, y]) => new THREE.Vector2(x!, y!))
const PERFIL_BERMUDA = [
  [0, -0.08], [0.76, -0.06], [0.92, 0.04], [0.9, 0.2], [0.8, 0.3], [0, 0.3],
].map(([x, y]) => new THREE.Vector2(x!, y!))

const EIXO_Y = v3(0, 1, 0)

class Membro {
  readonly mesh: THREE.Mesh
  constructor(geo: THREE.BufferGeometry, mat: THREE.Material, grupo: THREE.Object3D, readonly raio: number, readonly raio2 = raio) {
    this.mesh = new THREE.Mesh(geo, mat)
    this.mesh.castShadow = true
    grupo.add(this.mesh)
  }
  /** Estica a peça de a até b. */
  entre(a: V, b: V): void {
    const d = b.clone().sub(a)
    const len = d.length() || 1e-4
    this.mesh.position.copy(a).add(b).multiplyScalar(0.5)
    this.mesh.quaternion.setFromUnitVectors(EIXO_Y, d.divideScalar(len))
    this.mesh.scale.set(this.raio * S, len, this.raio * S)
  }
}

/** Peça com seção oval que segue um eixo (tronco, bermuda): precisa saber para onde é o lado do corpo. */
class PecaOval {
  readonly mesh: THREE.Mesh
  constructor(geo: THREE.BufferGeometry, mat: THREE.Material, grupo: THREE.Object3D, readonly largura: number, readonly espessura: number) {
    this.mesh = new THREE.Mesh(geo, mat)
    this.mesh.castShadow = true
    this.mesh.matrixAutoUpdate = false
    grupo.add(this.mesh)
  }
  posicionar(base: V, topo: V, lateral: V): void {
    const y = topo.clone().sub(base)
    const len = y.length() || 1e-4
    y.divideScalar(len)
    const x = lateral.clone().sub(y.clone().multiplyScalar(lateral.dot(y))).normalize()
    const z = x.clone().cross(y)
    const m = new THREE.Matrix4().makeBasis(x, y, z)
    m.scale(v3(this.largura * S, len, this.espessura * S))
    m.setPosition(base)
    this.mesh.matrix.copy(m)
  }
}

/* ------------------------------ CENA ------------------------------ */

export function criarBoneco3D(m: Movimento, opcoes: Opcoes3D = {}): Animacao3D {
  const cores = {
    camisa: opcoes.camisa ?? '#FFD21F',
    bermuda: opcoes.bermuda ?? '#1B2A3A',
    pele: opcoes.pele ?? '#C98B62',
    cabelo: opcoes.cabelo ?? '#2B1D14',
    tenis: opcoes.tenis ?? '#F4F4F4',
    fundo: opcoes.fundo ?? '#EFE6D6',
  }
  const canvas = document.createElement('canvas')
  canvas.className = 'boneco3d'
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05

  const cena = new THREE.Scene()
  cena.background = new THREE.Color(cores.fundo)
  cena.fog = new THREE.Fog(cores.fundo, 6, 14)

  // luzes: céu + sol de janela + contraluz
  cena.add(new THREE.HemisphereLight('#FFF6E8', '#8A6A4A', 1.1))
  const sol = new THREE.DirectionalLight('#FFFFFF', 2.2)
  sol.position.set(2.2, 4, 3)
  sol.castShadow = true
  sol.shadow.mapSize.set(2048, 2048)
  sol.shadow.camera.left = -2.5; sol.shadow.camera.right = 2.5; sol.shadow.camera.top = 2.5; sol.shadow.camera.bottom = -1
  sol.shadow.radius = 6
  sol.shadow.bias = -0.0005
  cena.add(sol)
  const contra = new THREE.DirectionalLight('#BFE3FF', 1.2)
  contra.position.set(-3, 2.5, -3)
  cena.add(contra)

  // sala: piso de madeira e parede do fundo
  const piso = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.MeshStandardMaterial({ map: textoPiso(), roughness: 0.75 }))
  piso.rotation.x = -Math.PI / 2
  piso.receiveShadow = true
  cena.add(piso)
  const fundo = new THREE.Mesh(new THREE.PlaneGeometry(20, 8), new THREE.MeshStandardMaterial({ color: '#E9DCC6', roughness: 1 }))
  fundo.position.set(0, 4, -2.6)
  fundo.receiveShadow = true
  cena.add(fundo)
  const rodape = new THREE.Mesh(new THREE.BoxGeometry(20, 0.1, 0.03), new THREE.MeshStandardMaterial({ color: '#FFFFFF' }))
  rodape.position.set(0, 0.05, -2.58)
  cena.add(rodape)

  const sala = new THREE.Group()
  cena.add(sala)
  {
    const m2 = (cor: string, r = 0.8): THREE.MeshStandardMaterial => new THREE.MeshStandardMaterial({ color: cor, roughness: r })
    const bloco = (w: number, h: number, d: number, mat: THREE.Material, x: number, y: number, z: number): void => {
      const b2 = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
      b2.position.set(x, y, z); b2.castShadow = true; b2.receiveShadow = true
      sala.add(b2)
    }
    // sofá no fundo, à esquerda
    const tecido = m2('#3F6E73', 0.95)
    bloco(1.9, 0.42, 0.85, tecido, -2.3, 0.21, -2.1)
    bloco(1.9, 0.5, 0.22, tecido, -2.3, 0.62, -2.45)
    bloco(0.22, 0.3, 0.85, tecido, -3.15, 0.57, -2.1)
    bloco(0.22, 0.3, 0.85, tecido, -1.45, 0.57, -2.1)
    bloco(0.4, 0.3, 0.12, m2('#E8A33D', 0.95), -2.75, 0.6, -2.28)
    // planta à direita
    const vaso = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.34, 20), m2('#C8643B', 0.7))
    vaso.position.set(2.2, 0.17, -2.2); vaso.castShadow = true
    sala.add(vaso)
    for (const [dx, dy, r] of [[0, 0.62, 0.26], [-0.14, 0.5, 0.2], [0.15, 0.52, 0.2], [0.02, 0.82, 0.18]] as const) {
      const folha = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), m2('#4E8B4A', 0.9))
      folha.position.set(2.2 + dx, dy, -2.2); folha.castShadow = true
      sala.add(folha)
    }
    // janela clara na parede do fundo
    const janela = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.1), new THREE.MeshBasicMaterial({ color: '#FFF8EA' }))
    janela.position.set(0.6, 1.75, -2.59)
    sala.add(janela)
    const moldura = m2('#FFFFFF', 0.6)
    bloco(1.42, 0.06, 0.04, moldura, 0.6, 2.33, -2.57); bloco(1.42, 0.06, 0.04, moldura, 0.6, 1.17, -2.57)
    bloco(0.06, 1.2, 0.04, moldura, -0.08, 1.75, -2.57); bloco(0.06, 1.2, 0.04, moldura, 1.28, 1.75, -2.57); bloco(0.04, 1.1, 0.04, moldura, 0.6, 1.75, -2.57)
  }

  const props = new THREE.Group()
  cena.add(props)
  const matProp = (cor: string, r = 0.7): THREE.MeshStandardMaterial => new THREE.MeshStandardMaterial({ color: cor, roughness: r })
  const caixa = (w: number, h: number, d: number, mat: THREE.Material, x: number, y: number, z: number): THREE.Mesh => {
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
    b.position.set(x, y, z)
    b.castShadow = true; b.receiveShadow = true
    props.add(b)
    return b
  }
  const X = (x: number): number => (x - CENTRO_X) * S
  if (m.tapete) {
    const ver = m.vista === 'frente'
    caixa(ver ? 0.9 : 1.9, 0.012, ver ? 1.7 : 0.75, matProp('#2E8C8C', 0.95), X(120), 0.006, 0)
  }
  if (m.parede) {
    const x = m.parede === 'esq' ? X(20) - 0.07 : X(PAREDE_X) + 0.07
    caixa(0.14, 2.2, 1.3, matProp('#F2EADF', 1), x, 1.1, 0)
  }
  if (m.cadeira) {
    const { x, virada } = m.cadeira
    const sx = virada ? -1 : 1
    const madeira = matProp('#7A4E2D', 0.6)
    const x0 = X(x), x1 = X(x + 30 * sx)
    const cx = (x0 + x1) / 2
    caixa(0.36, 0.04, 0.4, madeira, cx, 0.46, 0)
    for (const dx of [x0, x1]) for (const dz of [-0.17, 0.17]) caixa(0.03, 0.46, 0.03, madeira, dx + (dx === x0 ? 0.015 : -0.015) * sx, 0.23, dz)
    caixa(0.03, 0.5, 0.4, madeira, x0 + 0.015 * sx, 0.71, 0)
  }
  if (m.degrau !== undefined) caixa(0.46, 0.18, 0.6, matProp('#9C6B43', 0.6), X(m.degrau + 23), 0.09, 0)
  for (const cx of m.marcas ?? []) caixa(0.16, 0.025, 0.08, matProp('#FF6B2C', 0.6), (cx - CENTRO_X) * S, 0.0125, m.vista === 'frente' ? 0.15 : 0)
  if (m.linha) {
    const fita = new THREE.Mesh(new THREE.PlaneGeometry(m.vista === 'frente' ? 0.04 : 0.04, 1.2), matProp('#FFFFFF', 0.9))
    fita.rotation.x = -Math.PI / 2
    fita.position.set(0, 0.003, 0)
    fita.receiveShadow = true
    props.add(fita)
  }

  /* boneco */
  const giro = new THREE.Group()
  const corpo = new THREE.Group()
  giro.add(corpo)
  cena.add(giro)
  const mat = (cor: string, r = 0.55): THREE.MeshStandardMaterial => new THREE.MeshStandardMaterial({ color: cor, roughness: r })
  const pele = mat(cores.pele, 0.5), camisa = mat(cores.camisa, 0.7), bermuda = mat(cores.bermuda, 0.8), cabelo = mat(cores.cabelo, 0.9), tenis = mat(cores.tenis, 0.6)
  const cil = new THREE.CylinderGeometry(1, 1, 1, 20, 1, true)
  const cilFino = new THREE.CylinderGeometry(0.86, 1, 1, 20, 1, true)
  const esfera = new THREE.SphereGeometry(1, 24, 16)

  const juntaSph = (r: number, m2: THREE.Material): THREE.Mesh => {
    const s = new THREE.Mesh(esfera, m2)
    s.scale.setScalar(r * S)
    s.castShadow = true
    corpo.add(s)
    return s
  }

  const tronco = new PecaOval(new THREE.LatheGeometry(PERFIL_TRONCO, 32), camisa, corpo, 17, 11.5)
  const shorts = new PecaOval(new THREE.LatheGeometry(PERFIL_BERMUDA, 32), bermuda, corpo, 17.5, 12.5)
  const pescoco = new Membro(cil, pele, corpo, 3.6)
  const cabeca = juntaSph(9.2, pele)
  const capelo = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.52), cabelo)
  capelo.castShadow = true
  corpo.add(capelo)

  const nariz = juntaSph(1.5, pele)
  const olhos = [juntaSph(1.15, mat('#1A1410', 0.3)), juntaSph(1.15, mat('#1A1410', 0.3))]
  const orelhas = [juntaSph(1.9, pele), juntaSph(1.9, pele)]
  const coxaF = new Membro(cilFino, pele, corpo, 7.4), coxaT = new Membro(cilFino, pele, corpo, 7.4)
  const perna = { F: new Membro(cilFino, bermuda, corpo, 8.6), T: new Membro(cilFino, bermuda, corpo, 8.6) }
  const canelaF = new Membro(cilFino, pele, corpo, 5.4), canelaT = new Membro(cilFino, pele, corpo, 5.4)
  const joelhos = { F: juntaSph(6.2, pele), T: juntaSph(6.2, pele) }
  const tornozelos = { F: juntaSph(4.4, tenis), T: juntaSph(4.4, tenis) }
  const pes = { F: new Membro(cil, tenis, corpo, 4.2), T: new Membro(cil, tenis, corpo, 4.2) }
  const pontas = { F: juntaSph(4.2, tenis), T: juntaSph(4.2, tenis) }
  const ombros = { F: juntaSph(6.2, pele), T: juntaSph(6.2, pele) }
  const bracos = { F: new Membro(cilFino, pele, corpo, 5), T: new Membro(cilFino, pele, corpo, 5) }
  const cotovelos = { F: juntaSph(4.3, pele), T: juntaSph(4.3, pele) }
  const antebracos = { F: new Membro(cilFino, pele, corpo, 4.2), T: new Membro(cilFino, pele, corpo, 4.2) }
  const maos = { F: juntaSph(4.6, pele), T: juntaSph(4.6, pele) }


  const bola = new THREE.Mesh(new THREE.SphereGeometry(9 * S, 32, 20), new THREE.MeshStandardMaterial({ map: textoBola(), roughness: 0.45 }))
  bola.castShadow = true
  cena.add(bola)

  const garrafas = m.garrafas ? [0, 1].map(() => {
    const g = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.18, 16), new THREE.MeshPhysicalMaterial({ color: '#7FC8F8', roughness: 0.1, transmission: 0.6, thickness: 0.05 }))
    g.castShadow = true
    corpo.add(g)
    return g
  }) : []
  const toalha = m.toalha ? new Membro(cil, mat('#E85D4A', 0.95), corpo, 2.5) : null
  const elastico = m.elastico ? new Membro(cil, mat('#2E8C8C', 0.6), cena, 0.7) : null

  /* câmera: enquadra o movimento inteiro, de 3/4 */
  const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 50)
  const caixaMov = new THREE.Box3()
  for (let i = 0; i <= 24; i++) {
    const { j, virar } = juntasEm(m, i / 24)
    const rot = new THREE.Matrix4().makeRotationY(-Math.PI * virar)
    for (const v of Object.values(j)) if (v instanceof THREE.Vector3 && v !== j.lateral) caixaMov.expandByPoint(v.clone().applyMatrix4(rot))
  }
  caixaMov.expandByPoint(v3(caixaMov.min.x, 0, 0))
  const centro = caixaMov.getCenter(v3())
  const tam = caixaMov.getSize(v3())
  const frente = m.vista === 'frente'
  const azimute = frente ? -0.45 : m.parede ? 0.02 : 0.72 // radianos a partir do eixo z
  let largura = 1, altura = 1

  function posicionarCamera(segundos: number): void {
    const az = azimute + (opcoes.orbitar ? Math.sin(segundos * 0.35) * 0.35 : 0)
    const aspect = largura / altura
    const deitado = tam.y < 0.95
    const alturaVisivel = Math.max(tam.y, deitado ? 0.75 : 1.15) * 1.35
    const larguraVisivel = Math.max(tam.x, tam.z, 0.9) * 1.35
    const fov = THREE.MathUtils.degToRad(camera.fov)
    const dist = Math.max(alturaVisivel / 2 / Math.tan(fov / 2), larguraVisivel / 2 / (Math.tan(fov / 2) * aspect)) + 0.4
    const alvo = v3(centro.x, deitado ? Math.max(0.2, centro.y) : Math.max(0.55, centro.y * 0.95), 0)
    camera.position.set(alvo.x + Math.sin(az) * dist, alvo.y + dist * (deitado ? 0.42 : 0.12), Math.cos(az) * dist)
    camera.lookAt(alvo)
  }

  function desenharEm(t: number, segundos = 0): void {
    const { j, virar } = juntasEm(m, t)
    // meia-volta (virar) em volta do quadril
    giro.position.set(j.quadril.x, 0, j.quadril.z)
    giro.rotation.y = -Math.PI * virar
    corpo.position.set(-j.quadril.x, 0, -j.quadril.z)

    const quadrilBase = j.quadril.clone().add(j.ombro.clone().sub(j.quadril).normalize().multiplyScalar(-0.04))
    tronco.posicionar(quadrilBase.clone().add(j.ombro.clone().sub(j.quadril).multiplyScalar(0.12)), j.ombro.clone().add(j.ombro.clone().sub(j.quadril).normalize().multiplyScalar(0.03)), j.lateral)
    shorts.posicionar(quadrilBase, quadrilBase.clone().add(j.ombro.clone().sub(j.quadril).multiplyScalar(1.45)), j.lateral)
    const dirTronco = j.ombro.clone().sub(j.quadril).normalize()
    const dirCabeca = j.cabeca.clone().sub(j.ombro).normalize()
    const baseCabeca = j.cabeca.clone()
    pescoco.entre(j.ombro.clone().add(dirTronco.clone().multiplyScalar(0.02)), baseCabeca)
    cabeca.position.copy(baseCabeca)
    capelo.position.copy(baseCabeca).add(dirCabeca.clone().multiplyScalar(0.004))
    capelo.scale.setScalar(9.8 * S)
    // cabelo um pouco para trás (o rosto fica livre)
    const rosto = j.lateral.clone().cross(dirCabeca).normalize()
    const tras = rosto.clone().multiplyScalar(-1)
    capelo.quaternion.setFromUnitVectors(EIXO_Y, dirCabeca.clone().add(tras.clone().multiplyScalar(0.55)).normalize())
    nariz.position.copy(baseCabeca).add(rosto.clone().multiplyScalar(9.3 * S)).add(dirCabeca.clone().multiplyScalar(-0.8 * S))
    for (const [k, o] of olhos.entries()) o.position.copy(baseCabeca).add(rosto.clone().multiplyScalar(8.4 * S)).add(dirCabeca.clone().multiplyScalar(2 * S)).add(j.lateral.clone().multiplyScalar((k ? 3.4 : -3.4) * S))
    orelhas[0]!.position.copy(baseCabeca).add(j.lateral.clone().multiplyScalar(9 * S))
    orelhas[1]!.position.copy(baseCabeca).add(j.lateral.clone().multiplyScalar(-9 * S))

    for (const lado of ['F', 'T'] as const) {
      const q = lado === 'F' ? j.quadrilF : j.quadrilT
      const joelho = lado === 'F' ? j.joelhoF : j.joelhoT
      const torn = lado === 'F' ? j.tornF : j.tornT
      const ponta = lado === 'F' ? j.pontaF : j.pontaT
      ;(lado === 'F' ? coxaF : coxaT).entre(q, joelho)
      perna[lado].entre(q.clone().add(dirTronco.clone().multiplyScalar(0.03)), q.clone().lerp(joelho, 0.42))
      ;(lado === 'F' ? canelaF : canelaT).entre(joelho, torn)
      joelhos[lado].position.copy(joelho)
      tornozelos[lado].position.copy(torn)
      pes[lado].entre(torn, ponta)
      pontas[lado].position.copy(ponta)
      const ombro = lado === 'F' ? j.ombroF : j.ombroT
      const cot = lado === 'F' ? j.cotF : j.cotT
      const mao = lado === 'F' ? j.maoF : j.maoT
      ombros[lado].position.copy(ombro)
      bracos[lado].entre(ombro, cot)
      cotovelos[lado].position.copy(cot)
      antebracos[lado].entre(cot, mao)
      maos[lado].position.copy(mao)
    }
    if (garrafas.length) {
      garrafas[0]!.position.copy(j.maoF); garrafas[1]!.position.copy(j.maoT)
    }
    if (toalha) toalha.entre(j.maoT, j.maoF)

    // bola: mesmo ponto do desenho 2D, no meio do corpo
    const s2 = esqueleto({ ...poseEm(m, t) }, m.vista ?? 'lado', m.ancora ?? 'pes', m.deslocar ?? 0)
    const pb = m.bola?.(t, { s: s2, em: (tt) => esqueleto({ ...poseEm(m, ((tt % 1) + 1) % 1) }, m.vista ?? 'lado', m.ancora ?? 'pes', m.deslocar ?? 0) }) ?? null
    if (pb) {
      bola.visible = true
      bola.position.copy(em3d(pb, frente ? (j.maoF.z / S) : 0))
      bola.rotation.set(t * Math.PI * 4, t * Math.PI * 2, 0)
    } else bola.visible = false
    if (elastico && m.elastico) { giro.updateMatrixWorld(); elastico.entre(em3d(m.elastico), j.maoF.clone().applyMatrix4(corpo.matrixWorld)) }

    posicionarCamera(segundos)
    renderer.render(cena, camera)
  }

  function redimensionar(w: number, hgt: number): void {
    largura = w; altura = hgt
    renderer.setSize(w, hgt, false)
    camera.aspect = w / hgt
    camera.updateProjectionMatrix()
  }

  // relógio próprio: permite câmera lenta, pausa e continuar sem pular
  let quadro = 0
  let parado = false
  let destruido = false
  let vel = 1
  let fase = 0 // tempo do movimento, em ciclos (a parte inteira conta as repetições)
  let relogio = 0 // segundos para a órbita da câmera
  let antes = performance.now()
  let repeticoes = 0
  const laco = (agora: number): void => {
    if (destruido || parado) return
    const dt = Math.min(0.1, (agora - antes) / 1000)
    antes = agora
    fase += (dt * vel) / m.duracao
    relogio += dt * vel
    const n = Math.floor(fase)
    if (n > repeticoes) { repeticoes = n; opcoes.aoRepetir?.(n) }
    const t = fase - n
    desenharEm(t, relogio)
    opcoes.aoAtualizar?.(t)
    quadro = requestAnimationFrame(laco)
  }
  const iniciar = (): void => { cancelAnimationFrame(quadro); parado = false; antes = performance.now(); quadro = requestAnimationFrame(laco) }

  const obs = new ResizeObserver(() => {
    const r = canvas.getBoundingClientRect()
    if (r.width > 0 && r.height > 0) {
      redimensionar(Math.round(r.width), Math.round(r.height))
      if (parado) desenharEm(fase % 1, relogio)
    }
  })
  obs.observe(canvas)
  redimensionar(640, 640)
  iniciar()

  return {
    el: canvas,
    renderer,
    duracao: m.duracao,
    desenharEm: (t, seg) => { parado = true; cancelAnimationFrame(quadro); desenharEm(t, seg) },
    redimensionar,
    velocidade: (v) => { vel = v },
    pausarEm: (t) => {
      parado = true
      cancelAnimationFrame(quadro)
      fase = Math.floor(fase) + t
      desenharEm(t, relogio)
      opcoes.aoAtualizar?.(t)
    },
    continuar: () => { if (parado && !destruido) iniciar() },
    destruir: () => {
      destruido = true
      cancelAnimationFrame(quadro)
      obs.disconnect()
      renderer.dispose()
      renderer.forceContextLoss()
    },
  }
}
