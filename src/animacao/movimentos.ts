import { CENTRO_X, CHAO, PAREDE_X, type Esqueleto, type Movimento, type Pose, type Ponto } from './boneco'

/* =====================================================================
 * BIBLIOTECA DE MOVIMENTOS
 * Cada movimento é uma lista de poses-chave ao longo do ciclo (t de 0 a 1).
 * Ângulos e convenções: veja boneco.ts. A primeira e a última pose são iguais para o loop não pular.
 * ===================================================================== */

type P = Partial<Pose>
type Quadro = [number, P]

function mov(duracao: number, quadros: Quadro[], extra: Partial<Movimento> = {}): Movimento {
  return { ...extra, duracao, poses: quadros.map(([t, p]) => ({ t, p })) }
}
const frente = (duracao: number, quadros: Quadro[], extra: Partial<Movimento> = {}): Movimento => mov(duracao, quadros, { vista: 'frente', ...extra })
const com = (...ps: P[]): P => Object.assign({}, ...ps)

/* ---------- Bola ---------- */
type Alvo = Ponto | ((s: Esqueleto) => Ponto)
interface Trecho { de: number; ate: number; a: Alvo; b: Alvo; alt?: number }
const TOPO_BOLA = 14
const val = (a: Alvo, s: Esqueleto): Ponto => (typeof a === 'function' ? a(s) : a)

/** Bola presa a um ponto do corpo, exceto nos trechos em que voa (arco de parábola com altura `alt`). */
function trajeto(trechos: Trecho[], parada: Alvo | null): Movimento['bola'] {
  return (t, c) => {
    for (const g of trechos) {
      for (const tt of [t, t + 1]) {
        if (tt >= g.de && tt <= g.ate) {
          const k = (tt - g.de) / (g.ate - g.de)
          const A = val(g.a, c.em(g.de)), B = val(g.b, c.em(g.ate))
          // bolas altas sobem só até o topo do quadro
          let alt = g.alt ?? 0
          for (let j = 1; j < 20; j++) {
            const kk = j / 20
            alt = Math.min(alt, (A.y + (B.y - A.y) * kk - TOPO_BOLA) / (4 * kk * (1 - kk)))
          }
          alt = Math.max(0, alt)
          return { x: A.x + (B.x - A.x) * k, y: A.y + (B.y - A.y) * k - 4 * alt * k * (1 - k) }
        }
      }
    }
    return parada ? val(parada, c.s) : null
  }
}
const ACIMA: Alvo = (s) => ({ x: s.maos.x + 3, y: s.maos.y - 9 }) // toque: bola acima das mãos
const PLATAFORMA: Alvo = (s) => ({ x: s.maos.x + 1, y: s.maos.y - 9 }) // manchete
const NA_MAO_F: Alvo = (s) => ({ x: s.maoF.x + 2, y: s.maoF.y - 8 })
const NA_MAO_T: Alvo = (s) => ({ x: s.maoT.x - 2, y: s.maoT.y - 8 })
const ENTRE_MAOS: Alvo = (s) => ({ x: s.maos.x, y: s.maos.y - 6 })
const parede = (y: number): Ponto => ({ x: PAREDE_X - 9, y })
const chao = (x: number): Ponto => ({ x, y: CHAO - 9 })
const aoLado = (a: Alvo, dx: number, dy = 0): Alvo => (s) => { const p = val(a, s); return { x: p.x + dx, y: p.y + dy } }
/** Toque/manchete para cima, saindo e voltando ao mesmo ponto. */
const paraCima = (de: number, ate: number, a: Alvo, alt: number): Trecho => ({ de, ate, a, b: a, alt })
const quatroToques = (a: Alvo, alt: number): Movimento['bola'] => trajeto([paraCima(0, 0.25, a, alt), paraCima(0.25, 0.5, a, alt), paraCima(0.5, 0.75, a, alt), paraCima(0.75, 1, a, alt)], a)

/* =====================================================================
 * POSES DE LADO (olhando para a direita)
 * ===================================================================== */
const EM_PE: P = {}
const PRONTO: P = { tronco: 24, coxaF: 44, canelaF: -24, coxaT: 34, canelaT: -30, bracoF: 40, antebracoF: 72, bracoT: 34, antebracoT: 66 }
const TOQUE: P = { tronco: 2, coxaF: 26, canelaF: -16, coxaT: 10, canelaT: -22, bracoF: 128, antebracoF: 172, bracoT: 124, antebracoT: 168 }
const TOQUE_DESCE: P = { tronco: 4, coxaF: 36, canelaF: -22, coxaT: 18, canelaT: -28, bracoF: 122, antebracoF: 166, bracoT: 118, antebracoT: 162 }
const TOQUE_SOBE: P = { tronco: 2, coxaF: 8, canelaF: -6, coxaT: -2, canelaT: -10, bracoF: 152, antebracoF: 154, bracoT: 148, antebracoT: 150 }
const BRACOS_TOQUE: P = { bracoF: 128, antebracoF: 172, bracoT: 124, antebracoT: 168 }
const BRACOS_TOQUE_DESCE: P = { bracoF: 122, antebracoF: 166, bracoT: 118, antebracoT: 162 }
const BRACOS_TOQUE_SOBE: P = { bracoF: 150, antebracoF: 152, bracoT: 146, antebracoT: 148 }
const MANCHETE: P = { tronco: 26, coxaF: 52, canelaF: -28, coxaT: 30, canelaT: -38, bracoF: 52, antebracoF: 54, bracoT: 50, antebracoT: 52 }
const MANCHETE_DESCE: P = { tronco: 28, coxaF: 60, canelaF: -30, coxaT: 36, canelaT: -40, bracoF: 48, antebracoF: 50, bracoT: 46, antebracoT: 48 }
const MANCHETE_SOBE: P = { tronco: 16, coxaF: 32, canelaF: -18, coxaT: 16, canelaT: -26, bracoF: 70, antebracoF: 72, bracoT: 68, antebracoT: 70 }
const DEFESA: P = { tronco: 36, coxaF: 78, canelaF: -30, coxaT: 56, canelaT: -44, bracoF: 44, antebracoF: 46, bracoT: 42, antebracoT: 44 }
const AGACHA: P = { tronco: 36, coxaF: 88, canelaF: -24, coxaT: 84, canelaT: -28, bracoF: 92, antebracoF: 92, bracoT: 88, antebracoT: 90 }
const MEIO_AGACHA: P = { tronco: 22, coxaF: 52, canelaF: -20, coxaT: 48, canelaT: -24, bracoF: 70, antebracoF: 80, bracoT: 66, antebracoT: 78 }
const BRACOS_FRENTE: P = { bracoF: 70, antebracoF: 80, bracoT: 66, antebracoT: 78 }
const PRE_SALTO: P = { tronco: 32, coxaF: 64, canelaF: -24, coxaT: 60, canelaT: -28, bracoF: -40, antebracoF: -30, bracoT: -46, antebracoT: -36 }
const NO_AR: P = { tronco: 0, coxaF: 4, canelaF: -12, coxaT: -2, canelaT: -16, bracoF: 165, antebracoF: 168, bracoT: 160, antebracoT: 164 }
const ATERRISSA: P = { tronco: 22, coxaF: 46, canelaF: -18, coxaT: 42, canelaT: -22, bracoF: 40, antebracoF: 50, bracoT: 34, antebracoT: 44 }
const BRACOS_CIMA: P = { bracoF: 172, antebracoF: 176, bracoT: 168, antebracoT: 172 }
const BLOQUEIO: P = { bracoF: 162, antebracoF: 170, bracoT: 158, antebracoT: 166 }
const MAOS_OMBRO: P = { bracoF: 150, antebracoF: 200, bracoT: 146, antebracoT: 196 } // mãos na altura dos ombros (rede)
// ataque / saque por cima (braço da frente bate, o de trás aponta a bola)
const ARMA: P = { tronco: -6, bracoF: 205, antebracoF: 285, bracoT: 160, antebracoT: 166 }
const BATE: P = { tronco: 8, bracoF: 168, antebracoF: 162, bracoT: 60, antebracoT: 40 }
const FINALIZA: P = { tronco: 24, bracoF: 60, antebracoF: 40, bracoT: -10, antebracoT: 0 }
const PASSO_A: P = { coxaF: 26, canelaF: 4, coxaT: -18, canelaT: -34 }
const PASSO_B: P = { coxaF: -18, canelaF: -34, coxaT: 26, canelaT: 4 }
const CORRE_A: P = { tronco: 16, coxaF: 50, canelaF: -10, coxaT: -26, canelaT: -70, bracoF: -40, antebracoF: 40, bracoT: 50, antebracoT: 120 }
const CORRE_B: P = { tronco: 16, coxaF: -26, canelaF: -70, coxaT: 50, canelaT: -10, bracoF: 50, antebracoF: 120, bracoT: -40, antebracoT: 40 }
const SENTADO_CHAO: P = { tronco: -6, coxaF: 132, canelaF: 46, coxaT: 128, canelaT: 44, peF: -46, peT: -44 }
const AJOELHADO: P = { tronco: 2, coxaF: 0, canelaF: -90, coxaT: -2, canelaT: -92, peF: -90, peT: -90 }
const SENTADO_CADEIRA: P = { tronco: 0, coxaF: 90, canelaF: 2, coxaT: 88, canelaT: -2 }
const UM_PE: P = { coxaT: 50, canelaT: -40 } // perna de trás dobrada no ar
const AFUNDO: P = { tronco: 2, coxaF: 70, canelaF: -10, coxaT: -30, canelaT: -100, peT: -60 }
// no chão
const COSTAS_JOELHOS: P = { tronco: -90, coxaF: 135, canelaF: 45, coxaT: 133, canelaT: 44, peF: -45, peT: -44, bracoF: 90, antebracoF: 90, bracoT: 92, antebracoT: 92 }
const COSTAS_RETO: P = { tronco: -90, coxaF: 90, canelaF: 90, coxaT: 90, canelaT: 90, bracoF: 90, antebracoF: 90, bracoT: 92, antebracoT: 92 }
const PRANCHA_ALTA: P = { tronco: 65, coxaF: -65, canelaF: -65, coxaT: -66, canelaT: -66, bracoF: 0, antebracoF: 0, bracoT: 2, antebracoT: 2 }
const PRANCHA_COTOVELO: P = { tronco: 78, coxaF: -78, canelaF: -78, coxaT: -79, canelaT: -79, bracoF: 0, antebracoF: 90, bracoT: 2, antebracoT: 92 }
const FLEXAO_BAIXO: P = { tronco: 84, coxaF: -84, canelaF: -84, coxaT: -85, canelaT: -85, bracoF: -40, antebracoF: 40, bracoT: -38, antebracoT: 42 }
const QUATRO_APOIOS: P = { tronco: 72, coxaF: 0, canelaF: -90, coxaT: 2, canelaT: -88, bracoF: 0, antebracoF: 0, bracoT: 2, antebracoT: 2, peF: -90, peT: -90 }
const BRUCOS: P = { tronco: 90, coxaF: -90, canelaF: -90, coxaT: -91, canelaT: -91, bracoF: 92, antebracoF: 92, bracoT: 90, antebracoT: 90 }
const AGACHA_APOIO: P = { tronco: 60, coxaF: 100, canelaF: -24, coxaT: 96, canelaT: -28, bracoF: 10, antebracoF: 10, bracoT: 12, antebracoT: 12 }

/* =====================================================================
 * POSES DE FRENTE
 * ===================================================================== */
const F_PE: P = {}
const F_ABERTO: P = { coxaE: 22, canelaE: 22, coxaD: 22, canelaD: 22 }
const F_BASE: P = { coxaE: 14, canelaE: 14, coxaD: 14, canelaD: 14 }
const F_DEFESA: P = { agacha: 0.45, coxaE: 34, canelaE: 6, coxaD: 34, canelaD: 6, encolhe: 0.6, bracoE: 30, antebracoE: 20, bracoD: 30, antebracoD: 20 }
const F_SUMO: P = { agacha: 0.7, coxaE: 62, canelaE: 14, coxaD: 62, canelaD: 14 }
const F_BRACOS_CIMA: P = { bracoE: 165, antebracoE: 172, bracoD: 165, antebracoD: 172 }
const F_BRACOS_LADO: P = { bracoE: 90, antebracoE: 90, bracoD: 90, antebracoD: 90 }
const F_MAOS_FRENTE: P = { encolhe: 0.7, bracoE: 25, antebracoE: -10, bracoD: 25, antebracoD: -10 } // mãos juntas à frente da barriga
const F_SENTADO: P = { coxaE: 150, canelaE: 30, coxaD: 150, canelaD: 30, agacha: 0.6 } // sentado no chão, joelhos para cima
const F_MAOS_OMBRO: P = { bracoE: 120, antebracoE: 175, bracoD: 120, antebracoD: 175 }

/* =====================================================================
 * FAMÍLIAS
 * ===================================================================== */
function toqueParede(duracao = 1.6, extra: P = {}, olhar = false): Movimento {
  const x = { x: 34, ...extra }
  return mov(duracao, [
    [0, com(TOQUE, x)], [0.25, com(TOQUE_DESCE, x, olhar ? { pescoco: -20 } : {})], [0.42, com(TOQUE_SOBE, x, { y: 2 })],
    [0.75, com(TOQUE, x, olhar ? { pescoco: 20 } : {})], [1, com(TOQUE_DESCE, x)],
  ], { parede: true, bola: trajeto([{ de: 0.38, ate: 0.82, a: ACIMA, b: parede(60), alt: 8 }, { de: 0.82, ate: 1.25, a: parede(60), b: ACIMA, alt: 4 }], ACIMA) })
}

function toqueCima(duracao = 1.4, alt = 30, extra: P = {}): Movimento {
  return mov(duracao, [
    [0, com(TOQUE, extra)], [0.2, com(TOQUE_DESCE, extra)], [0.38, com(TOQUE_SOBE, extra)], [0.7, com(TOQUE, extra)], [1, com(TOQUE, extra)],
  ], { bola: trajeto([paraCima(0.3, 1.2, ACIMA, alt)], ACIMA) })
}

function mancheteParede(duracao = 1.8, base: P = MANCHETE, desce: P = MANCHETE_DESCE, sobe: P = MANCHETE_SOBE): Movimento {
  const x = { x: 14 }
  return mov(duracao, [[0, com(base, x)], [0.35, com(desce, x)], [0.5, com(sobe, x)], [1, com(base, x)]], {
    parede: true,
    bola: trajeto([{ de: 0.45, ate: 0.9, a: PLATAFORMA, b: parede(70), alt: 22 }, { de: 0.9, ate: 1.4, a: parede(70), b: PLATAFORMA, alt: 6 }], PLATAFORMA),
  })
}

function mancheteCima(duracao = 1.5, alt = 40): Movimento {
  return mov(duracao, [[0, MANCHETE], [0.3, MANCHETE_DESCE], [0.45, MANCHETE_SOBE], [0.75, MANCHETE], [1, MANCHETE]], {
    bola: trajeto([paraCima(0.42, 1.3, PLATAFORMA, alt)], PLATAFORMA),
  })
}

/** Anda para a direita, vira e volta (de `de` até `ate`). */
function andando(base: P, duracao: number, extra: Partial<Movimento> = {}, de = -46, ate = 46): Movimento {
  const q: Quadro[] = []
  const n = 4
  for (let i = 0; i <= n; i++) q.push([(i / n) * 0.45, com(base, i % 2 ? PASSO_A : PASSO_B, { x: de + ((ate - de) * i) / n })])
  q.push([0.5, com(base, { x: ate, virar: 1 })])
  for (let i = 0; i <= n; i++) q.push([0.5 + (i / n) * 0.45, com(base, i % 2 ? PASSO_A : PASSO_B, { x: ate - ((ate - de) * i) / n, virar: 1 })])
  q.push([1, com(base, { x: de, virar: 0 })])
  return mov(duracao, q, extra)
}

function saltoComBraco(extra: P = {}): Quadro[] {
  return [[0, com(EM_PE, extra)], [0.3, com(PRE_SALTO, extra)], [0.45, com(NO_AR, { y: 16 }, extra)], [0.6, com(NO_AR, { y: 16 }, extra)], [0.75, com(ATERRISSA, extra)], [1, com(EM_PE, extra)]]
}

/** Deslocamento lateral de frente: abre e fecha as pernas indo e voltando. */
function lateral(duracao: number, base: P, abre: P, dist: number, extra: Partial<Movimento> = {}, passos = 3): Movimento {
  const q: Quadro[] = []
  for (let i = 0; i <= passos; i++) q.push([(i / passos) * 0.5, com(base, i % 2 ? abre : {}, { x: -dist + (2 * dist * i) / passos })])
  for (let i = 1; i <= passos; i++) q.push([0.5 + (i / passos) * 0.5, com(base, i % 2 ? abre : {}, { x: dist - (2 * dist * i) / passos })])
  return frente(duracao, q, extra)
}

function corridaIdaVolta(duracao: number, dist = 50, extra: Partial<Movimento> = {}): Movimento {
  const q: Quadro[] = []
  const n = 4
  for (let i = 0; i <= n; i++) q.push([(i / n) * 0.42, com(i % 2 ? CORRE_A : CORRE_B, { x: -dist + (2 * dist * i) / n })])
  q.push([0.5, com(PRONTO, { x: dist, virar: 1 })])
  for (let i = 0; i <= n; i++) q.push([0.5 + (i / n) * 0.42, com(i % 2 ? CORRE_A : CORRE_B, { x: dist - (2 * dist * i) / n, virar: 1 })])
  q.push([1, com(PRONTO, { x: -dist, virar: 0 })])
  return mov(duracao, q, extra)
}

/** Repete uma pose de força parada, só "respirando" (isometria). */
function isometria(duracao: number, a: P, b: P, extra: Partial<Movimento> = {}): Movimento {
  return mov(duracao, [[0, a], [0.5, b], [1, a]], extra)
}

/* =====================================================================
 * MOVIMENTOS
 * ===================================================================== */
export const MOVIMENTOS: Record<string, Movimento> = {
  /* ------------------------------ COM BOLA ------------------------------ */
  toqueParede: toqueParede(),
  toqueParedeOlhar: toqueParede(1.8, {}, true),
  toqueParedeRapido: toqueParede(1.0, { x: 50 }),
  toqueCima: toqueCima(),
  toqueAltoBaixo: mov(2.6, [
    [0, TOQUE], [0.1, TOQUE_DESCE], [0.2, TOQUE_SOBE], [0.45, TOQUE], [0.55, TOQUE_DESCE], [0.62, TOQUE_SOBE], [0.8, TOQUE], [1, TOQUE],
  ], { bola: trajeto([paraCima(0.16, 0.56, ACIMA, 46), paraCima(0.58, 1.12, ACIMA, 18)], ACIMA) }),
  toqueQuique: mov(2.2, [[0, TOQUE], [0.12, TOQUE_DESCE], [0.22, TOQUE_SOBE], [0.5, PRONTO], [0.8, TOQUE_DESCE], [1, TOQUE]], {
    bola: trajeto([
      { de: 0.2, ate: 0.48, a: ACIMA, b: aoLado(ACIMA, 10, -40), alt: 0 },
      { de: 0.48, ate: 0.68, a: aoLado(ACIMA, 10, -40), b: chao(CENTRO_X + 40), alt: 0 },
      { de: 0.68, ate: 1.1, a: chao(CENTRO_X + 40), b: ACIMA, alt: 30 },
    ], ACIMA),
  }),
  toqueGiro: mov(2.4, [
    [0, TOQUE], [0.1, TOQUE_DESCE], [0.2, TOQUE_SOBE], [0.3, com(EM_PE, { virar: 0 })], [0.45, com(EM_PE, { virar: 1 })], [0.6, com(EM_PE, { virar: 2 })],
    [0.85, com(TOQUE, { virar: 2 })], [0.99, com(TOQUE, { virar: 2 })], [1, TOQUE],
  ], { bola: trajeto([paraCima(0.18, 1.05, ACIMA, 80)], ACIMA) }),
  toqueAndando: andando(TOQUE, 4.4, { bola: quatroToques(ACIMA, 30) }),
  toqueRecuando: andando(TOQUE, 4.4, { bola: quatroToques(ACIMA, 30) }, 46, -46),
  toqueUmPe: toqueCima(1.2, 24, UM_PE),
  marcharTocando: mov(2.4, [
    [0, com(TOQUE, { coxaF: 60, canelaF: -10 })], [0.25, com(TOQUE, { coxaF: 2, canelaF: -2 })], [0.5, com(TOQUE, { coxaT: 60, canelaT: -10, coxaF: 2 })], [0.75, com(TOQUE, { coxaT: -4, coxaF: 2 })], [1, com(TOQUE, { coxaF: 60, canelaF: -10 })],
  ], { bola: trajeto([paraCima(0, 0.5, ACIMA, 26), paraCima(0.5, 1, ACIMA, 26)], ACIMA) }),
  toqueDeitado: mov(1.4, [
    [0, com(COSTAS_JOELHOS, { bracoF: 168, antebracoF: 205, bracoT: 166, antebracoT: 203 })],
    [0.3, com(COSTAS_JOELHOS, { bracoF: 170, antebracoF: 212, bracoT: 168, antebracoT: 210 })],
    [0.45, com(COSTAS_JOELHOS, { bracoF: 180, antebracoF: 180, bracoT: 178, antebracoT: 178 })],
    [1, com(COSTAS_JOELHOS, { bracoF: 168, antebracoF: 205, bracoT: 166, antebracoT: 203 })],
  ], { tapete: true, ancora: 'quadril', bola: trajeto([paraCima(0.4, 1.2, (s) => ({ x: s.maos.x, y: s.maos.y - 10 }), 40)], (s) => ({ x: s.maos.x, y: s.maos.y - 10 })) }),
  toqueAjoelhado: mov(1.4, [
    [0, com(AJOELHADO, BRACOS_TOQUE)], [0.25, com(AJOELHADO, BRACOS_TOQUE_DESCE)], [0.42, com(AJOELHADO, BRACOS_TOQUE_SOBE)], [1, com(AJOELHADO, BRACOS_TOQUE)],
  ], { tapete: true, bola: trajeto([paraCima(0.38, 1.2, ACIMA, 36)], ACIMA) }),
  toqueSentadoParede: mov(1.6, [
    [0, com(SENTADO_CHAO, BRACOS_TOQUE, { x: 20 })], [0.25, com(SENTADO_CHAO, BRACOS_TOQUE_DESCE, { x: 20 })], [0.42, com(SENTADO_CHAO, BRACOS_TOQUE_SOBE, { x: 20 })], [1, com(SENTADO_CHAO, BRACOS_TOQUE, { x: 20 })],
  ], { parede: true, ancora: 'quadril', bola: trajeto([{ de: 0.38, ate: 0.8, a: ACIMA, b: parede(110), alt: 8 }, { de: 0.8, ate: 1.25, a: parede(110), b: ACIMA, alt: 4 }], ACIMA) }),
  mancheteCadeira: mov(1.5, [
    [0, com(SENTADO_CADEIRA, { tronco: 14, bracoF: 52, antebracoF: 54, bracoT: 50, antebracoT: 52 })], [0.3, com(SENTADO_CADEIRA, { tronco: 16, bracoF: 46, antebracoF: 48, bracoT: 44, antebracoT: 46 })],
    [0.45, com(SENTADO_CADEIRA, { tronco: 8, bracoF: 72, antebracoF: 74, bracoT: 70, antebracoT: 72 })], [1, com(SENTADO_CADEIRA, { tronco: 14, bracoF: 52, antebracoF: 54, bracoT: 50, antebracoT: 52 })],
  ], { cadeira: { x: 96 }, ancora: 'quadril', bola: trajeto([paraCima(0.42, 1.3, PLATAFORMA, 34)], PLATAFORMA) }),
  toqueAgachamento: mov(2.6, [
    [0, TOQUE], [0.1, TOQUE_DESCE], [0.2, TOQUE_SOBE], [0.35, com(AGACHA, { bracoF: 60, antebracoF: 70, bracoT: 56, antebracoT: 66 })], [0.6, TOQUE_DESCE], [0.7, TOQUE], [1, TOQUE],
  ], { bola: trajeto([paraCima(0.18, 1.1, ACIMA, 80)], ACIMA) }),
  toqueSentaLevanta: mov(3, [
    [0, TOQUE], [0.08, TOQUE_DESCE], [0.16, TOQUE_SOBE], [0.24, AGACHA], [0.38, com(SENTADO_CHAO, { bracoF: 40, antebracoF: 50 })], [0.52, AGACHA], [0.68, TOQUE_DESCE], [0.78, TOQUE], [1, TOQUE],
  ], { bola: trajeto([paraCima(0.14, 1.1, ACIMA, 90)], ACIMA) }),
  levantamentoSuspensao: mov(2.2, [
    [0, TOQUE], [0.12, TOQUE_SOBE], [0.3, com(PRE_SALTO, { bracoF: 110, antebracoF: 150, bracoT: 106, antebracoT: 146 })], [0.45, com(TOQUE_SOBE, { y: 18, coxaF: 4, canelaF: -12 })],
    [0.5, com(TOQUE_SOBE, { y: 18, coxaF: 4, canelaF: -12 })], [0.68, ATERRISSA], [0.85, TOQUE], [1, TOQUE],
  ], { bola: trajeto([paraCima(0.1, 0.48, ACIMA, 60), paraCima(0.48, 1.1, ACIMA, 50)], ACIMA) }),
  toqueCostas: mov(1.8, [
    [0, com(TOQUE, { x: -20 })], [0.2, com(TOQUE_DESCE, { x: -20 })], [0.4, com(TOQUE_SOBE, { x: -20, tronco: -16, bracoF: 168, antebracoF: 190, bracoT: 164, antebracoT: 186 })], [0.7, com(TOQUE, { x: -20 })], [1, com(TOQUE, { x: -20 })],
  ], { parede: 'esq', bola: trajeto([{ de: 0.38, ate: 0.75, a: ACIMA, b: { x: 43, y: 60 }, alt: 30 }, { de: 0.75, ate: 1.15, a: { x: 43, y: 60 }, b: ACIMA, alt: 10 }], ACIMA) }),
  toquePassoFrente: mov(2.2, [
    [0, com(TOQUE, { x: 0 })], [0.3, com(TOQUE_DESCE, PASSO_A, { x: 24 })], [0.42, com(TOQUE_SOBE, { x: 24 })], [0.7, com(TOQUE, { x: 0 })], [1, com(TOQUE, { x: 0 })],
  ], { parede: true, bola: trajeto([{ de: 0.4, ate: 0.75, a: ACIMA, b: parede(60), alt: 10 }, { de: 0.75, ate: 1.3, a: parede(60), b: ACIMA, alt: 4 }], ACIMA) }),
  mancheteParede: mancheteParede(),
  defesaParede: mancheteParede(1.6, DEFESA, com(DEFESA, { coxaF: 86, canelaF: -32, tronco: 40 }), com(DEFESA, { bracoF: 64, antebracoF: 66, bracoT: 62, antebracoT: 64, tronco: 30 })),
  manchetePassoFrente: mov(2.2, [
    [0, com(PRONTO, { x: -20 })], [0.3, com(DEFESA, { x: 12, coxaF: 80, canelaF: -10, coxaT: -30, canelaT: -70 })], [0.42, com(MANCHETE_SOBE, { x: 12 })], [0.7, com(PRONTO, { x: -20 })], [1, com(PRONTO, { x: -20 })],
  ], { parede: true, bola: trajeto([{ de: 0.1, ate: 0.38, a: parede(140), b: PLATAFORMA, alt: 10 }, { de: 0.38, ate: 0.75, a: PLATAFORMA, b: parede(80), alt: 30 }, { de: 0.75, ate: 1.1, a: parede(80), b: parede(140), alt: 0 }], null) }),
  defesaUmaMao: mov(2, [
    [0, PRONTO], [0.3, com(DEFESA, { x: 10, bracoF: 70, antebracoF: 72, bracoT: 10, antebracoT: 30 })], [0.42, com(DEFESA, { x: 10, bracoF: 90, antebracoF: 92, bracoT: 10, antebracoT: 30 })], [0.75, PRONTO], [1, PRONTO],
  ], { parede: true, bola: trajeto([{ de: 0.05, ate: 0.38, a: parede(120), b: (s) => ({ x: s.maoF.x, y: s.maoF.y - 9 }), alt: 0 }, { de: 0.38, ate: 0.8, a: (s) => ({ x: s.maoF.x, y: s.maoF.y - 9 }), b: parede(120), alt: 50 }], null) }),
  mancheteCima: mancheteCima(),
  mancheteBaixaCima: mov(1.4, [[0, DEFESA], [0.3, com(DEFESA, { coxaF: 86, tronco: 40 })], [0.45, com(DEFESA, { bracoF: 60, antebracoF: 62, bracoT: 58, antebracoT: 60 })], [1, DEFESA]], {
    bola: trajeto([paraCima(0.42, 1.25, PLATAFORMA, 22)], PLATAFORMA),
  }),
  mancheteQuique: mov(2.2, [[0, MANCHETE], [0.12, MANCHETE_DESCE], [0.22, MANCHETE_SOBE], [0.5, PRONTO], [0.8, MANCHETE_DESCE], [1, MANCHETE]], {
    bola: trajeto([
      { de: 0.2, ate: 0.45, a: PLATAFORMA, b: aoLado(PLATAFORMA, 14, -30), alt: 0 },
      { de: 0.45, ate: 0.65, a: aoLado(PLATAFORMA, 14, -30), b: chao(CENTRO_X + 44), alt: 0 },
      { de: 0.65, ate: 1.1, a: chao(CENTRO_X + 44), b: PLATAFORMA, alt: 26 },
    ], PLATAFORMA),
  }),
  mancheteToqueCima: mov(2.6, [
    [0, MANCHETE], [0.12, MANCHETE_DESCE], [0.2, MANCHETE_SOBE], [0.42, TOQUE], [0.55, TOQUE_DESCE], [0.62, TOQUE_SOBE], [0.85, MANCHETE], [1, MANCHETE],
  ], { bola: trajeto([{ de: 0.18, ate: 0.58, a: PLATAFORMA, b: ACIMA, alt: 40 }, { de: 0.58, ate: 1.18, a: ACIMA, b: PLATAFORMA, alt: 40 }], PLATAFORMA) }),
  mancheteAndando: andando(MANCHETE, 4.4, { bola: quatroToques(PLATAFORMA, 26) }),
  mancheteLateral: lateral(2.6, com(F_DEFESA, { encolhe: 0.7, bracoE: 20, antebracoE: -14, bracoD: 20, antebracoD: -14 }), { coxaE: 44, coxaD: 44 }, 34, {
    bola: trajeto([paraCima(0.4, 0.6, (s) => ({ x: s.maos.x, y: s.maos.y - 6 }), 40), paraCima(0.9, 1.1, (s) => ({ x: s.maos.x, y: s.maos.y - 6 }), 40)], (s) => ({ x: s.maos.x, y: s.maos.y - 6 })),
  }, 2),
  saqueBaixoParede: mov(2, [
    [0, { x: -30, tronco: 14, coxaF: 20, canelaF: -8, coxaT: -20, canelaT: -24, bracoF: -50, antebracoF: -40, bracoT: 50, antebracoT: 60 }],
    [0.3, { x: -30, tronco: 16, coxaF: 20, canelaF: -8, coxaT: -20, canelaT: -24, bracoF: -70, antebracoF: -60, bracoT: 50, antebracoT: 60 }],
    [0.42, { x: -30, tronco: 10, coxaF: 24, canelaF: -10, coxaT: -14, canelaT: -26, bracoF: 60, antebracoF: 70, bracoT: 30, antebracoT: 40 }],
    [1, { x: -30, tronco: 14, coxaF: 20, canelaF: -8, coxaT: -20, canelaT: -24, bracoF: -50, antebracoF: -40, bracoT: 50, antebracoT: 60 }],
  ], { parede: true, bola: trajeto([{ de: 0.4, ate: 0.7, a: NA_MAO_T, b: parede(70), alt: 20 }, { de: 0.7, ate: 1.0, a: parede(70), b: NA_MAO_T, alt: 6 }], NA_MAO_T) }),
  sombraSaque: mov(1.8, [[0, EM_PE], [0.3, ARMA], [0.45, BATE], [0.6, FINALIZA], [1, EM_PE]]),
  sombraAtaqueToalha: mov(1.8, [[0, com(EM_PE, { bracoT: 40, antebracoT: 60 })], [0.3, ARMA], [0.45, BATE], [0.6, FINALIZA], [1, com(EM_PE, { bracoT: 40, antebracoT: 60 })]]),
  saqueCimaParede: mov(2.2, [
    [0, { x: -40, bracoT: 60, antebracoT: 70 }], [0.2, { x: -40, bracoT: 165, antebracoT: 170 }], [0.4, com(ARMA, { x: -40 })], [0.5, com(BATE, { x: -40 })], [0.62, com(FINALIZA, { x: -40 })], [1, { x: -40, bracoT: 60, antebracoT: 70 }],
  ], { parede: true, bola: trajeto([
    { de: 0.15, ate: 0.5, a: NA_MAO_T, b: (s) => ({ x: s.maoF.x + 6, y: s.maoF.y - 8 }), alt: 30 },
    { de: 0.5, ate: 0.68, a: (s) => ({ x: s.maoF.x + 6, y: s.maoF.y - 8 }), b: parede(60), alt: 0 },
    { de: 0.68, ate: 1.15, a: parede(60), b: NA_MAO_T, alt: 10 },
  ], NA_MAO_T) }),
  lancamentoSaque: mov(2.2, [
    [0, { bracoT: 60, antebracoT: 70 }], [0.2, { bracoT: 145, antebracoT: 150 }], [0.5, { bracoT: 30, antebracoT: 40 }], [0.8, { tronco: 24, bracoT: 40, antebracoT: 60 }], [1, { bracoT: 60, antebracoT: 70 }],
  ], { marcas: [CENTRO_X + 26], bola: trajeto([{ de: 0.15, ate: 0.6, a: NA_MAO_T, b: chao(CENTRO_X + 26), alt: 120 }, { de: 0.6, ate: 0.95, a: chao(CENTRO_X + 26), b: NA_MAO_T, alt: 0 }], NA_MAO_T) }),
  saqueViagem: mov(3, [
    [0, { x: -60 }], [0.15, { x: -60, bracoF: 145, antebracoF: 150 }], [0.3, com(CORRE_A, { x: -30 })], [0.42, com(PRE_SALTO, { x: 0 })], [0.52, com(NO_AR, { x: 10, y: 12, bracoF: 150, antebracoF: 156, bracoT: 146, antebracoT: 152 })],
    [0.6, com(NO_AR, { x: 14, y: 12, bracoF: 150, antebracoF: 156, bracoT: 146, antebracoT: 152 })], [0.72, com(ATERRISSA, { x: 20 })], [0.9, { x: -20 }], [1, { x: -60 }],
  ], { bola: trajeto([{ de: 0.12, ate: 0.55, a: NA_MAO_F, b: (s) => ({ x: s.maos.x + 4, y: s.maos.y - 10 }), alt: 70 }], (s) => (s.maos.y < s.ombro.y ? { x: s.maos.x + 4, y: s.maos.y - 10 } : val(NA_MAO_F, s))) }),
  largadaParede: mov(1.8, [
    [0, { x: 10, bracoF: 60, antebracoF: 70 }], [0.25, { x: 10, bracoF: 140, antebracoF: 150 }], [0.4, { x: 10, bracoF: 160, antebracoF: 120, y: 3 }], [1, { x: 10, bracoF: 60, antebracoF: 70 }],
  ], { parede: true, bola: trajeto([
    { de: 0.1, ate: 0.38, a: NA_MAO_F, b: (s) => ({ x: s.maoF.x + 4, y: s.maoF.y - 10 }), alt: 26 },
    { de: 0.38, ate: 0.65, a: (s) => ({ x: s.maoF.x + 4, y: s.maoF.y - 10 }), b: parede(110), alt: 14 },
    { de: 0.65, ate: 1.0, a: parede(110), b: NA_MAO_F, alt: 4 },
  ], NA_MAO_F) }),
  ataqueChao: mov(1.8, [
    [0, { bracoT: 90, antebracoT: 90, bracoF: 10 }], [0.3, com(ARMA, { bracoT: 90, antebracoT: 90 })], [0.42, com(BATE, { bracoT: 60, antebracoT: 50 })], [0.55, FINALIZA], [1, { bracoT: 90, antebracoT: 90, bracoF: 10 }],
  ], { bola: trajeto([
    { de: 0.42, ate: 0.52, a: NA_MAO_T, b: chao(CENTRO_X + 50), alt: 0 },
    { de: 0.52, ate: 0.95, a: chao(CENTRO_X + 50), b: NA_MAO_T, alt: 40 },
  ], NA_MAO_T) }),
  ataqueParede: mov(1.6, [
    [0, { x: -40 }], [0.25, com(ARMA, { x: -40 })], [0.38, com(BATE, { x: -40 })], [0.5, com(FINALIZA, { x: -40 })], [1, { x: -40 }],
  ], { parede: true, bola: trajeto([
    { de: 0.38, ate: 0.5, a: (s) => ({ x: s.maoF.x + 4, y: s.maoF.y - 6 }), b: chao(160), alt: 0 },
    { de: 0.5, ate: 0.7, a: chao(160), b: parede(60), alt: 0 },
    { de: 0.7, ate: 1.38, a: parede(60), b: (s) => ({ x: s.maoF.x + 4, y: s.maoF.y - 6 }), alt: 20 },
  ], null) }),
  mancheteToqueAtaque: mov(3.2, [
    [0, MANCHETE], [0.08, MANCHETE_SOBE], [0.28, TOQUE], [0.36, TOQUE_SOBE], [0.55, ARMA], [0.65, BATE], [0.75, FINALIZA], [0.92, MANCHETE], [1, MANCHETE],
  ], { bola: trajeto([
    { de: 0.06, ate: 0.36, a: PLATAFORMA, b: ACIMA, alt: 40 },
    { de: 0.36, ate: 0.65, a: ACIMA, b: (s) => ({ x: s.maoF.x + 4, y: s.maoF.y - 6 }), alt: 60 },
    { de: 0.65, ate: 0.72, a: (s) => ({ x: s.maoF.x + 4, y: s.maoF.y - 6 }), b: chao(CENTRO_X + 54), alt: 0 },
    { de: 0.72, ate: 1.06, a: chao(CENTRO_X + 54), b: PLATAFORMA, alt: 50 },
  ], PLATAFORMA) }),
  encaixeToque: mov(1.8, [[0, BRACOS_TOQUE], [0.5, BRACOS_TOQUE_SOBE], [1, BRACOS_TOQUE]], { bola: trajeto([paraCima(0.45, 0.9, ACIMA, 14)], ACIMA) }),
  plataformaEquilibrio: mov(2.6, [[0, { bracoF: 60, antebracoF: 62, bracoT: 58, antebracoT: 60 }], [0.5, com(MANCHETE_DESCE, { coxaF: 80, canelaF: -26, coxaT: 70, canelaT: -30, tronco: 34, bracoF: 60, antebracoF: 62, bracoT: 58, antebracoT: 60 })], [1, { bracoF: 60, antebracoF: 62, bracoT: 58, antebracoT: 60 }]], {
    bola: (_t, c) => ({ x: c.s.maos.x - 10, y: c.s.maos.y - 10 }),
  }),
  pegarNoAlto: mov(2.6, [
    [0, BRACOS_FRENTE], [0.15, BRACOS_CIMA], [0.4, PRE_SALTO], [0.55, com(NO_AR, { y: 18 })], [0.65, com(NO_AR, { y: 18 })], [0.8, ATERRISSA], [1, BRACOS_FRENTE],
  ], { bola: trajeto([{ de: 0.12, ate: 0.58, a: ENTRE_MAOS, b: ENTRE_MAOS, alt: 70 }], ENTRE_MAOS) }),

  /* ------------------------------ IMPULSÃO ------------------------------ */
  salto: mov(2, saltoComBraco()),
  agachamentoSalto: mov(2.2, [[0, EM_PE], [0.35, com(AGACHA, { bracoF: -30, antebracoF: -20, bracoT: -36, antebracoT: -26 })], [0.5, com(NO_AR, { y: 20 })], [0.6, com(NO_AR, { y: 20 })], [0.75, ATERRISSA], [1, EM_PE]]),
  saltoPausa: mov(2.8, [[0, EM_PE], [0.2, com(AGACHA, BRACOS_FRENTE)], [0.5, com(AGACHA, BRACOS_FRENTE)], [0.6, com(NO_AR, { y: 18 })], [0.68, com(NO_AR, { y: 18 })], [0.8, ATERRISSA], [1, EM_PE]]),
  aterrissagem: mov(2.6, [[0, EM_PE], [0.15, PRE_SALTO], [0.28, com(NO_AR, { y: 10 })], [0.4, com(AGACHA, BRACOS_FRENTE, { coxaF: 70, coxaT: 66, tronco: 28 })], [0.75, com(AGACHA, BRACOS_FRENTE, { coxaF: 70, coxaT: 66, tronco: 28 })], [1, EM_PE]]),
  tresSaltos: mov(2.4, [
    [0, EM_PE], [0.12, PRE_SALTO], [0.22, com(NO_AR, { y: 14 })], [0.32, ATERRISSA], [0.42, com(NO_AR, { y: 14 })], [0.52, ATERRISSA], [0.62, com(NO_AR, { y: 14 })], [0.75, ATERRISSA], [1, EM_PE],
  ]),
  saltosLugar: mov(0.9, [[0, { bracoF: 30, antebracoF: 60, bracoT: 26, antebracoT: 56 }], [0.25, { coxaF: 24, coxaT: 20, canelaF: -14, canelaT: -16, tronco: 10, bracoF: 30, antebracoF: 60, bracoT: 26, antebracoT: 56 }], [0.55, { y: 10, bracoF: 40, antebracoF: 70, bracoT: 36, antebracoT: 66 }], [1, { bracoF: 30, antebracoF: 60, bracoT: 26, antebracoT: 56 }]]),
  saltinhosTornozelo: mov(0.6, [[0, { bracoF: 30, antebracoF: 80, bracoT: 26, antebracoT: 76 }], [0.5, { y: 6, canelaF: -8, canelaT: -10, peF: -30, peT: -30, bracoF: 30, antebracoF: 80, bracoT: 26, antebracoT: 76 }], [1, { bracoF: 30, antebracoF: 80, bracoT: 26, antebracoT: 76 }]]),
  cordaImaginaria: mov(0.7, [[0, { bracoF: 30, antebracoF: 90, bracoT: 26, antebracoT: 86 }], [0.5, { y: 7, canelaF: -8, canelaT: -10, peF: -30, peT: -30, bracoF: 34, antebracoF: 120, bracoT: 30, antebracoT: 116 }], [1, { bracoF: 30, antebracoF: 90, bracoT: 26, antebracoT: 86 }]]),
  meioAgachamento: mov(1.2, [[0, BRACOS_FRENTE], [0.5, MEIO_AGACHA], [1, BRACOS_FRENTE]]),
  saltoFrente: mov(2.6, [
    [0, { x: -40 }], [0.2, com(PRE_SALTO, { x: -40 })], [0.35, com(NO_AR, { x: -5, y: 22, coxaF: 40, canelaF: -10, coxaT: 30, canelaT: -20, bracoF: 120, antebracoF: 130, bracoT: 116, antebracoT: 126 })], [0.5, com(ATERRISSA, { x: 34 })], [0.7, { x: 34 }], [1, { x: -40 }],
  ], { marcas: [CENTRO_X - 40, CENTRO_X + 34] }),
  elevacaoJoelho: mov(0.9, [
    [0, { coxaF: 88, canelaF: -2, bracoF: -40, antebracoF: 40, bracoT: 50, antebracoT: 120 }], [0.5, { coxaT: 88, canelaT: -2, coxaF: 2, bracoF: 50, antebracoF: 120, bracoT: -40, antebracoT: 40 }], [1, { coxaF: 88, canelaF: -2, bracoF: -40, antebracoF: 40, bracoT: 50, antebracoT: 120 }],
  ]),
  saltoTesoura: mov(1.6, [
    [0, com(AFUNDO, { bracoF: 30, antebracoF: 60, bracoT: -20, antebracoT: 10 })],
    [0.25, { y: 18, coxaF: 10, canelaF: -10, coxaT: 0, canelaT: -20, bracoF: 60, antebracoF: 90, bracoT: 50, antebracoT: 80 }],
    [0.5, { tronco: 2, coxaT: 70, canelaT: -10, coxaF: -30, canelaF: -100, peF: -60, bracoT: 30, antebracoT: 60, bracoF: -20, antebracoF: 10 }],
    [0.75, { y: 18, coxaF: 0, canelaF: -20, coxaT: 10, canelaT: -10, bracoF: 60, antebracoF: 90, bracoT: 50, antebracoT: 80 }],
    [1, com(AFUNDO, { bracoF: 30, antebracoF: 60, bracoT: -20, antebracoT: 10 })],
  ], { ancora: 'quadril' }),
  afundo: mov(2.4, [
    [0, EM_PE], [0.25, AFUNDO], [0.5, EM_PE], [0.75, { tronco: 2, coxaT: 70, canelaT: -10, coxaF: -30, canelaF: -100, peF: -60 }], [1, EM_PE],
  ], { ancora: 'quadril' }),
  afundoTras: mov(2.2, [[0, EM_PE], [0.45, com(AFUNDO, BRACOS_FRENTE)], [0.6, com(AFUNDO, BRACOS_FRENTE)], [1, EM_PE]], { ancora: 'peF' }),
  saltoAgrupado: mov(1.8, [[0, EM_PE], [0.3, PRE_SALTO], [0.45, com(NO_AR, { y: 26, coxaF: 100, canelaF: -10, coxaT: 96, canelaT: -14, tronco: 10, bracoF: 80, antebracoF: 60, bracoT: 76, antebracoT: 56 })], [0.55, com(NO_AR, { y: 26, coxaF: 100, canelaF: -10, coxaT: 96, canelaT: -14, tronco: 10, bracoF: 80, antebracoF: 60, bracoT: 76, antebracoT: 56 })], [0.7, ATERRISSA], [1, EM_PE]]),
  saltoMeiaVolta: mov(2.6, [
    [0, EM_PE], [0.18, PRE_SALTO], [0.3, com(NO_AR, { y: 18, virar: 0.5 })], [0.4, com(ATERRISSA, { virar: 1 })], [0.5, { virar: 1 }],
    [0.68, com(PRE_SALTO, { virar: 1 })], [0.8, com(NO_AR, { y: 18, virar: 1.5 })], [0.9, com(ATERRISSA, { virar: 2 })], [0.99, { virar: 2 }], [1, EM_PE],
  ]),
  saltoBloqueio: mov(2, [[0, com(MAOS_OMBRO, { x: 50 })], [0.3, com(MEIO_AGACHA, MAOS_OMBRO, { x: 50 })], [0.45, com(NO_AR, BLOQUEIO, { x: 50, y: 18 })], [0.55, com(NO_AR, BLOQUEIO, { x: 50, y: 18 })], [0.7, com(MEIO_AGACHA, MAOS_OMBRO, { x: 50 })], [1, com(MAOS_OMBRO, { x: 50 })]], { parede: true }),
  saltoToqueParede: mov(2, [[0, { x: 56 }], [0.3, com(PRE_SALTO, { x: 56 })], [0.45, com(NO_AR, { x: 56, y: 20, bracoF: 175, antebracoF: 178, bracoT: 20, antebracoT: 20 })], [0.55, com(NO_AR, { x: 56, y: 20, bracoF: 175, antebracoF: 178, bracoT: 20, antebracoT: 20 })], [0.72, com(ATERRISSA, { x: 56 })], [1, { x: 56 }]], { parede: true }),
  aproximacaoAtaque: mov(3, [
    [0, { x: -70 }], [0.15, com(CORRE_A, { x: -50 })], [0.3, com(CORRE_B, { x: -20, bracoF: -60, antebracoF: -50, bracoT: -66, antebracoT: -56 })], [0.42, com(PRE_SALTO, { x: 0 })],
    [0.55, com(NO_AR, ARMA, { x: 10, y: 20, tronco: -4 })], [0.62, com(NO_AR, BATE, { x: 14, y: 18 })], [0.75, com(ATERRISSA, { x: 18 })], [0.9, { x: -30 }], [1, { x: -70 }],
  ]),
  saltoUmaPerna: mov(1.4, [[0, UM_PE], [0.3, com(UM_PE, { coxaF: 40, canelaF: -24, tronco: 18, bracoF: -30, antebracoF: -20, bracoT: -30, antebracoT: -20 })], [0.5, com(UM_PE, { y: 14, bracoF: 150, antebracoF: 160, bracoT: 146, antebracoT: 156 })], [0.7, com(UM_PE, { coxaF: 30, canelaF: -20, tronco: 14 })], [1, UM_PE]]),
  elevacaoCalcanhar: mov(1.6, [[0, { x: 36, bracoF: 80, antebracoF: 90 }], [0.5, { x: 36, y: 8, canelaF: -10, canelaT: -12, bracoF: 80, antebracoF: 90, peF: -30, peT: -30 }], [1, { x: 36, bracoF: 80, antebracoF: 90 }]], { parede: true }),
  quedaDegrau: mov(2.4, [
    [0, { x: -54, y: 18 }], [0.2, { x: -30, y: 14, coxaF: 30, canelaF: 0 }], [0.35, com(MEIO_AGACHA, { x: 0, bracoF: -40, antebracoF: -30, bracoT: -46, antebracoT: -36 })], [0.5, com(NO_AR, { x: 4, y: 22 })], [0.65, com(ATERRISSA, { x: 6 })], [0.85, { x: -54, y: 18 }], [1, { x: -54, y: 18 }],
  ], { degrau: CENTRO_X - 76 }),
  subidaDegrau: mov(2.4, [
    [0, { x: 0 }], [0.25, { x: 6, coxaF: 60, canelaF: -10 }], [0.5, { x: 30, y: 18 }], [0.75, { x: 24, y: 10, coxaT: -20, canelaT: -10 }], [1, { x: 0 }],
  ], { degrau: CENTRO_X + 12 }),
  saltoFrenteAtrasLinha: mov(1, [[0, { x: -12, bracoF: 30, antebracoF: 70, bracoT: 26, antebracoT: 66 }], [0.25, { x: 0, y: 10, coxaF: 20, canelaF: -20, coxaT: 16, canelaT: -24, bracoF: 30, antebracoF: 70, bracoT: 26, antebracoT: 66 }], [0.5, { x: 12, bracoF: 30, antebracoF: 70, bracoT: 26, antebracoT: 66 }], [0.75, { x: 0, y: 10, coxaF: 20, canelaF: -20, coxaT: 16, canelaT: -24, bracoF: 30, antebracoF: 70, bracoT: 26, antebracoT: 66 }], [1, { x: -12, bracoF: 30, antebracoF: 70, bracoT: 26, antebracoT: 66 }]], { linha: true }),
  // de frente
  saltoLateral: frente(1.4, [[0, com(F_BASE, { x: -24, agacha: 0.3 })], [0.25, com(F_BRACOS_LADO, { x: 0, y: 16 })], [0.5, com(F_BASE, { x: 24, agacha: 0.3 })], [0.75, com(F_BRACOS_LADO, { x: 0, y: 16 })], [1, com(F_BASE, { x: -24, agacha: 0.3 })]], { linha: true }),
  saltoLateralMarcas: frente(1.4, [[0, com(F_BASE, { x: -40, agacha: 0.3 })], [0.25, com(F_BRACOS_LADO, { x: 0, y: 20 })], [0.5, com(F_BASE, { x: 40, agacha: 0.3 })], [0.75, com(F_BRACOS_LADO, { x: 0, y: 20 })], [1, com(F_BASE, { x: -40, agacha: 0.3 })]], { marcas: [CENTRO_X - 40, CENTRO_X + 40] }),
  saltoLateralUmaPerna: frente(1.4, [[0, { x: -22, coxaD: 60, canelaD: -40, agacha: 0.3 }], [0.25, com(F_BRACOS_LADO, { x: 0, y: 12, coxaD: 60, canelaD: -40 })], [0.5, { x: 22, coxaD: 60, canelaD: -40, agacha: 0.3 }], [0.75, com(F_BRACOS_LADO, { x: 0, y: 12, coxaD: 60, canelaD: -40 })], [1, { x: -22, coxaD: 60, canelaD: -40, agacha: 0.3 }]], { linha: true }),
  zigueZagueLinha: frente(2.4, [[0, { x: -50 }], [0.12, { x: -36, y: 10 }], [0.25, { x: -20 }], [0.37, { x: -6, y: 10 }], [0.5, { x: 10 }], [0.62, { x: 24, y: 10 }], [0.75, { x: 40 }], [0.87, { x: -5 }], [1, { x: -50 }]], { linha: true }),
  saltoEstrela: frente(1.6, [[0, { agacha: 0.4, coxaE: 14, coxaD: 14, encolhe: 0.6, bracoE: -10, antebracoE: -40, bracoD: -10, antebracoD: -40 }], [0.35, { y: 26, coxaE: 32, canelaE: 32, coxaD: 32, canelaD: 32, bracoE: 140, antebracoE: 140, bracoD: 140, antebracoD: 140 }], [0.5, { y: 14 }], [0.65, { agacha: 0.4, coxaE: 14, coxaD: 14 }], [1, { agacha: 0.4, coxaE: 14, coxaD: 14, encolhe: 0.6, bracoE: -10, antebracoE: -40, bracoD: -10, antebracoD: -40 }]]),
  bloqueioDeslocamento: frente(3, [
    [0, com(F_MAOS_OMBRO, { x: 0 })], [0.1, com(F_MAOS_OMBRO, F_BASE, { x: 20 })], [0.2, com(F_MAOS_OMBRO, { x: 40 })], [0.28, com(F_MAOS_OMBRO, { x: 40, agacha: 0.4, coxaE: 20, coxaD: 20 })], [0.38, com(F_BRACOS_CIMA, { x: 40, y: 20 })], [0.48, com(F_MAOS_OMBRO, { x: 40 })],
    [0.6, com(F_MAOS_OMBRO, F_BASE, { x: 0 })], [0.7, com(F_MAOS_OMBRO, { x: -40 })], [0.78, com(F_MAOS_OMBRO, { x: -40, agacha: 0.4, coxaE: 20, coxaD: 20 })], [0.88, com(F_BRACOS_CIMA, { x: -40, y: 20 })], [1, com(F_MAOS_OMBRO, { x: 0 })],
  ]),

  /* ------------------------------ FORÇA ------------------------------ */
  agachamento: mov(2.6, [[0, BRACOS_FRENTE], [0.45, AGACHA], [0.6, AGACHA], [1, BRACOS_FRENTE]]),
  agachamentoGarrafa: mov(2.6, [[0, { bracoF: 30, antebracoF: 160, bracoT: 26, antebracoT: 156 }], [0.45, com(AGACHA, { bracoF: 60, antebracoF: 170, bracoT: 56, antebracoT: 166 })], [0.6, com(AGACHA, { bracoF: 60, antebracoF: 170, bracoT: 56, antebracoT: 166 })], [1, { bracoF: 30, antebracoF: 160, bracoT: 26, antebracoT: 156 }]], { garrafas: true }),
  isometricoParede: isometria(3, { x: -20, tronco: -4, coxaF: 90, canelaF: 0, coxaT: 88, canelaT: -2, bracoF: 10, antebracoF: 60, bracoT: 8, antebracoT: 58 }, { x: -20, tronco: -2, coxaF: 90, canelaF: 0, coxaT: 88, canelaT: -2, bracoF: 12, antebracoF: 64, bracoT: 10, antebracoT: 62 }, { parede: 'esq', ancora: 'quadril' }),
  sentarLevantar: mov(2.8, [[0, com(BRACOS_FRENTE, { x: 10 })], [0.4, com(SENTADO_CADEIRA, BRACOS_FRENTE, { tronco: 20, x: 10 })], [0.6, com(SENTADO_CADEIRA, BRACOS_FRENTE, { tronco: 20, x: 10 })], [1, com(BRACOS_FRENTE, { x: 10 })]], { cadeira: { x: 92 }, ancora: 'quadril' }),
  bulgaro: mov(2.6, [[0, { tronco: 4, coxaF: 10, canelaF: -4, coxaT: -30, canelaT: -100, peT: -60 }], [0.5, com(BRACOS_FRENTE, { tronco: 12, coxaF: 74, canelaF: -14, coxaT: 10, canelaT: -100, peT: -60 })], [1, { tronco: 4, coxaF: 10, canelaF: -4, coxaT: -30, canelaT: -100, peT: -60 }]], { ancora: 'peF', cadeira: { x: 50 } }),
  agachamentoUmaPernaCadeira: mov(3, [[0, com(BRACOS_FRENTE, { coxaF: 50, canelaF: 40 })], [0.45, com(SENTADO_CADEIRA, BRACOS_FRENTE, { tronco: 26, coxaF: 80, canelaF: 50, coxaT: 88, canelaT: -2 })], [0.6, com(SENTADO_CADEIRA, BRACOS_FRENTE, { tronco: 26, coxaF: 80, canelaF: 50, coxaT: 88, canelaT: -2 })], [1, com(BRACOS_FRENTE, { coxaF: 50, canelaF: 40 })]], { cadeira: { x: 92 }, ancora: 'quadril' }),
  flexaoParede: mov(2.2, [[0, { x: 84, tronco: 22, coxaF: -18, canelaF: -18, coxaT: -19, canelaT: -19, bracoF: 92, antebracoF: 92, bracoT: 90, antebracoT: 90 }], [0.5, { x: 84, tronco: 28, coxaF: -24, canelaF: -24, coxaT: -25, canelaT: -25, bracoF: 40, antebracoF: 130, bracoT: 38, antebracoT: 128 }], [1, { x: 84, tronco: 22, coxaF: -18, canelaF: -18, coxaT: -19, canelaT: -19, bracoF: 92, antebracoF: 92, bracoT: 90, antebracoT: 90 }]], { parede: true, ancora: 'maos' }),
  flexao: mov(2.2, [[0, PRANCHA_ALTA], [0.5, FLEXAO_BAIXO], [1, PRANCHA_ALTA]], { deslocar: 40, tapete: true, ancora: 'maos' }),
  flexaoJoelhos: mov(2.2, [[0, { tronco: 60, coxaF: -60, canelaF: -150, coxaT: -61, canelaT: -151, bracoF: 0, antebracoF: 0, bracoT: 2, antebracoT: 2 }], [0.5, { tronco: 80, coxaF: -80, canelaF: -170, coxaT: -81, canelaT: -171, bracoF: -40, antebracoF: 40, bracoT: -38, antebracoT: 42 }], [1, { tronco: 60, coxaF: -60, canelaF: -150, coxaT: -61, canelaT: -151, bracoF: 0, antebracoF: 0, bracoT: 2, antebracoT: 2 }]], { deslocar: 40, tapete: true, ancora: 'maos' }),
  flexaoToqueOmbro: mov(2.4, [[0, PRANCHA_ALTA], [0.25, com(PRANCHA_ALTA, { bracoF: 120, antebracoF: 220 })], [0.5, PRANCHA_ALTA], [0.75, com(PRANCHA_ALTA, { bracoT: 120, antebracoT: 220 })], [1, PRANCHA_ALTA]], { deslocar: 40, tapete: true, ancora: 'maos' }),
  prancha: isometria(3, PRANCHA_COTOVELO, com(PRANCHA_COTOVELO, { tronco: 76, coxaF: -76, canelaF: -76 }), { deslocar: 64, tapete: true, ancora: 'maos' }),
  pranchaLateral: isometria(3, { tronco: 70, coxaF: -70, canelaF: -70, coxaT: -70, canelaT: -70, bracoF: 0, antebracoF: 90, bracoT: 170, antebracoT: 175 }, { tronco: 74, coxaF: -74, canelaF: -74, coxaT: -74, canelaT: -74, bracoF: 0, antebracoF: 90, bracoT: 170, antebracoT: 175 }, { deslocar: 52, tapete: true, ancora: 'maos' }),
  pranchaAlcance: mov(2.6, [[0, PRANCHA_ALTA], [0.25, com(PRANCHA_ALTA, { bracoT: 150, antebracoT: 150 })], [0.5, PRANCHA_ALTA], [0.75, com(PRANCHA_ALTA, { bracoT: 150, antebracoT: 150 })], [1, PRANCHA_ALTA]], { deslocar: 40, tapete: true, ancora: 'maos' }),
  escalador: mov(1, [[0, com(PRANCHA_ALTA, { coxaF: 40, canelaF: -60 })], [0.5, com(PRANCHA_ALTA, { coxaT: 40, canelaT: -60 })], [1, com(PRANCHA_ALTA, { coxaF: 40, canelaF: -60 })]], { deslocar: 40, tapete: true, ancora: 'maos' }),
  burpee: mov(3, [
    [0, EM_PE], [0.15, AGACHA_APOIO], [0.3, PRANCHA_ALTA], [0.45, PRANCHA_ALTA], [0.6, AGACHA_APOIO], [0.75, com(NO_AR, { y: 20 })], [0.88, ATERRISSA], [1, EM_PE],
  ], { deslocar: 40, tapete: true, ancora: 'maos' }),
  abdominal: mov(2, [[0, COSTAS_JOELHOS], [0.45, com(COSTAS_JOELHOS, { tronco: -64, curva: 6, bracoF: 70, antebracoF: 70, bracoT: 72, antebracoT: 72 })], [0.6, com(COSTAS_JOELHOS, { tronco: -64, curva: 6, bracoF: 70, antebracoF: 70, bracoT: 72, antebracoT: 72 })], [1, COSTAS_JOELHOS]], { tapete: true, ancora: 'quadril' }),
  bicicleta: mov(1.6, [
    [0, com(COSTAS_RETO, { tronco: -72, coxaF: 140, canelaF: 60, coxaT: 100, canelaT: 100, bracoF: 200, antebracoF: 330, bracoT: 200, antebracoT: 330, peF: -60, peT: -100 })],
    [0.5, com(COSTAS_RETO, { tronco: -72, coxaT: 140, canelaT: 60, coxaF: 100, canelaF: 100, bracoF: 200, antebracoF: 330, bracoT: 200, antebracoT: 330, peT: -60, peF: -100 })],
    [1, com(COSTAS_RETO, { tronco: -72, coxaF: 140, canelaF: 60, coxaT: 100, canelaT: 100, bracoF: 200, antebracoF: 330, bracoT: 200, antebracoT: 330, peF: -60, peT: -100 })],
  ], { tapete: true, ancora: 'quadril' }),
  elevacaoPernas: mov(2.4, [[0, com(COSTAS_RETO, { coxaF: 100, canelaF: 100, coxaT: 100, canelaT: 100, peF: -100, peT: -100 })], [0.5, com(COSTAS_RETO, { coxaF: 175, canelaF: 175, coxaT: 175, canelaT: 175, peF: -175, peT: -175 })], [1, com(COSTAS_RETO, { coxaF: 100, canelaF: 100, coxaT: 100, canelaT: 100, peF: -100, peT: -100 })]], { tapete: true, ancora: 'quadril' }),
  ponte: mov(2.4, [[0, COSTAS_JOELHOS], [0.45, com(COSTAS_JOELHOS, { tronco: -110, coxaF: 100, canelaF: 0, coxaT: 98, canelaT: -2, peF: 0, peT: 0, bracoF: 72, antebracoF: 72, bracoT: 70, antebracoT: 70 })], [0.6, com(COSTAS_JOELHOS, { tronco: -110, coxaF: 100, canelaF: 0, coxaT: 98, canelaT: -2, peF: 0, peT: 0, bracoF: 72, antebracoF: 72, bracoT: 70, antebracoT: 70 })], [1, COSTAS_JOELHOS]], { deslocar: 34, tapete: true, ancora: 'peF' }),
  ponteUmaPerna: mov(2.4, [[0, com(COSTAS_JOELHOS, { coxaT: 140, canelaT: 140, peT: -140 })], [0.45, com(COSTAS_JOELHOS, { tronco: -110, coxaF: 100, canelaF: 0, peF: 0, coxaT: 110, canelaT: 110, peT: -110, bracoF: 72, antebracoF: 72, bracoT: 70, antebracoT: 70 })], [0.6, com(COSTAS_JOELHOS, { tronco: -110, coxaF: 100, canelaF: 0, peF: 0, coxaT: 110, canelaT: 110, peT: -110, bracoF: 72, antebracoF: 72, bracoT: 70, antebracoT: 70 })], [1, com(COSTAS_JOELHOS, { coxaT: 140, canelaT: 140, peT: -140 })]], { deslocar: 34, tapete: true, ancora: 'peF' }),
  superman: mov(2.4, [[0, BRUCOS], [0.45, com(BRUCOS, { tronco: 80, coxaF: -80, canelaF: -80, coxaT: -81, canelaT: -81, bracoF: 105, antebracoF: 105, bracoT: 103, antebracoT: 103, curva: -6 })], [0.6, com(BRUCOS, { tronco: 80, coxaF: -80, canelaF: -80, coxaT: -81, canelaT: -81, bracoF: 105, antebracoF: 105, bracoT: 103, antebracoT: 103, curva: -6 })], [1, BRUCOS]], { tapete: true, ancora: 'quadril' }),
  remadaGarrafas: mov(2, [[0, { tronco: 60, coxaF: 30, canelaF: -10, coxaT: 26, canelaT: -14, bracoF: 0, antebracoF: 0, bracoT: 2, antebracoT: 2 }], [0.5, { tronco: 60, coxaF: 30, canelaF: -10, coxaT: 26, canelaT: -14, bracoF: -70, antebracoF: 10, bracoT: -68, antebracoT: 12 }], [1, { tronco: 60, coxaF: 30, canelaF: -10, coxaT: 26, canelaT: -14, bracoF: 0, antebracoF: 0, bracoT: 2, antebracoT: 2 }]], { garrafas: true }),
  tricepsCadeira: mov(2.2, [[0, { tronco: 2, coxaF: 82, canelaF: 15, coxaT: 80, canelaT: 13, bracoF: -20, antebracoF: -20, bracoT: -18, antebracoT: -18 }], [0.5, { tronco: 6, coxaF: 109, canelaF: 15, coxaT: 107, canelaT: 13, bracoF: -80, antebracoF: 10, bracoT: -78, antebracoT: 12 }], [1, { tronco: 2, coxaF: 82, canelaF: 15, coxaT: 80, canelaT: 13, bracoF: -20, antebracoF: -20, bracoT: -18, antebracoT: -18 }]], { cadeira: { x: 84 }, ancora: 'maos' }),
  afundoLateral: frente(2.6, [[0, F_PE], [0.25, com(F_MAOS_FRENTE, { coxaE: 4, coxaD: 70, canelaD: 10, agacha: 0.25, x: 18 })], [0.5, F_PE], [0.75, com(F_MAOS_FRENTE, { coxaD: 4, coxaE: 70, canelaE: 10, agacha: 0.25, x: -18 })], [1, F_PE]]),
  sumo: frente(2.4, [[0, com(F_MAOS_FRENTE, { coxaE: 20, canelaE: 20, coxaD: 20, canelaD: 20 })], [0.5, com(F_SUMO, F_MAOS_FRENTE)], [1, com(F_MAOS_FRENTE, { coxaE: 20, canelaE: 20, coxaD: 20, canelaD: 20 })]]),
  desenvolvimento: frente(2, [[0, { bracoE: 90, antebracoE: 180, bracoD: 90, antebracoD: 180 }], [0.5, F_BRACOS_CIMA], [1, { bracoE: 90, antebracoE: 180, bracoD: 90, antebracoD: 180 }]], { garrafas: true }),
  elevacaoLateral: frente(2, [[0, { bracoE: 8, antebracoE: 8, bracoD: 8, antebracoD: 8 }], [0.5, F_BRACOS_LADO], [1, { bracoE: 8, antebracoE: 8, bracoD: 8, antebracoD: 8 }]], { garrafas: true }),
  rotacaoElastico: frente(2, [[0, { bracoD: 6, antebracoD: -80, encolhe: 0.2 }], [0.5, { bracoD: 6, antebracoD: 60, encolhe: 0.2 }], [1, { bracoD: 6, antebracoD: -80, encolhe: 0.2 }]], { elastico: { x: 30, y: CHAO - 96 } }),
  rotacaoTroncoBola: frente(2, [[0, com(F_SENTADO, { inclina: -6, encolhe: 0.5, bracoE: 10, antebracoE: -50, bracoD: 60, antebracoD: 70 })], [0.5, com(F_SENTADO, { inclina: 6, encolhe: 0.5, bracoE: 60, antebracoE: 70, bracoD: 10, antebracoD: -50 })], [1, com(F_SENTADO, { inclina: -6, encolhe: 0.5, bracoE: 10, antebracoE: -50, bracoD: 60, antebracoD: 70 })]], { tapete: true, bola: (_t, c) => ({ x: c.s.maos.x, y: c.s.maos.y - 4 }) }),

  /* ------------------------------ AGILIDADE ------------------------------ */
  deslocamentoLateral: lateral(2.6, F_DEFESA, { coxaE: 44, coxaD: 44 }, 50, { marcas: [CENTRO_X - 62, CENTRO_X + 62] }),
  deslocamentoDefesa: lateral(2.2, com(F_DEFESA, { agacha: 0.6 }), { coxaE: 48, coxaD: 48 }, 34),
  zigueZagueLateral: lateral(2.2, F_DEFESA, { coxaE: 44, coxaD: 44 }, 40, { marcas: [CENTRO_X - 52, CENTRO_X, CENTRO_X + 52] }, 4),
  deslocamentoX: lateral(2.2, F_DEFESA, { coxaE: 44, coxaD: 44, y: 4 }, 46, { marcas: [CENTRO_X - 56, CENTRO_X, CENTRO_X + 56] }, 2),
  passosRapidos: frente(0.6, [[0, com(F_DEFESA, { coxaE: 30, canelaE: -10 })], [0.25, com(F_DEFESA, { y: 4 })], [0.5, com(F_DEFESA, { coxaD: 30, canelaD: -10 })], [0.75, com(F_DEFESA, { y: 4 })], [1, com(F_DEFESA, { coxaE: 30, canelaE: -10 })]]),
  escada: frente(2.4, [[0, { x: -40, coxaE: 30, canelaE: -10 }], [0.12, { x: -30, coxaD: 30, canelaD: -10 }], [0.25, { x: -20, coxaE: 30, canelaE: -10 }], [0.37, { x: -10, coxaD: 30, canelaD: -10 }], [0.5, { x: 0, coxaE: 30, canelaE: -10 }], [0.62, { x: 10, coxaD: 30, canelaD: -10 }], [0.75, { x: 20, coxaE: 30, canelaE: -10 }], [0.87, { x: -10 }], [1, { x: -40, coxaE: 30, canelaE: -10 }]], { marcas: [CENTRO_X - 30, CENTRO_X - 10, CENTRO_X + 10, CENTRO_X + 30] }),
  entraSaiQuadrado: frente(1.2, [[0, F_PE], [0.25, { y: 10 }], [0.5, { coxaE: 26, canelaE: 26, coxaD: 26, canelaD: 26 }], [0.75, { y: 10 }], [1, F_PE]], { marcas: [CENTRO_X - 30, CENTRO_X + 30] }),
  passoCruzado: frente(2, [[0, com(F_DEFESA, { x: -30 })], [0.25, com(F_DEFESA, { x: -10, coxaE: -14, canelaE: -14, coxaD: 10 })], [0.5, com(F_DEFESA, { x: 10, coxaE: 30, coxaD: 30 })], [0.75, com(F_DEFESA, { x: 30, coxaD: -14, canelaD: -14 })], [1, com(F_DEFESA, { x: -30 })]]),
  passoBloqueio: frente(2.4, [[0, com(F_MAOS_OMBRO, { x: -20 })], [0.15, com(F_MAOS_OMBRO, F_BASE, { x: 0 })], [0.3, com(F_MAOS_OMBRO, { x: 20 })], [0.4, com(F_BRACOS_CIMA, { x: 20, y: 6 })], [0.5, com(F_MAOS_OMBRO, { x: 20 })], [0.65, com(F_MAOS_OMBRO, F_BASE, { x: 0 })], [0.8, com(F_MAOS_OMBRO, { x: -20 })], [0.9, com(F_BRACOS_CIMA, { x: -20, y: 6 })], [1, com(F_MAOS_OMBRO, { x: -20 })]]),
  passosArrancada: frente(2.4, [[0, com(F_DEFESA, { coxaE: 30 })], [0.1, com(F_DEFESA, { coxaD: 30 })], [0.2, com(F_DEFESA, { coxaE: 30 })], [0.3, com(F_DEFESA, { coxaD: 30 })], [0.45, com(F_DEFESA, { x: 46, coxaE: 46, coxaD: 46 })], [0.55, com(F_DEFESA, { x: 46 })], [0.8, com(F_DEFESA, { x: 0, coxaE: 40, coxaD: 40 })], [1, com(F_DEFESA, { coxaE: 30 })]]),
  defesaTresPontos: frente(3, [[0, F_DEFESA], [0.15, com(F_DEFESA, { x: -46, inclina: -40, agacha: 0.6, bracoE: 10, antebracoE: 10, encolhe: 0 })], [0.33, F_DEFESA], [0.48, com(F_DEFESA, { agacha: 0.8, coxaE: 60, coxaD: 60, encolhe: 0.8, bracoE: 0, bracoD: 0 })], [0.66, F_DEFESA], [0.81, com(F_DEFESA, { x: 46, inclina: 40, agacha: 0.6, bracoD: 10, antebracoD: 10, encolhe: 0 })], [1, F_DEFESA]], { marcas: [CENTRO_X - 62, CENTRO_X, CENTRO_X + 62] }),
  corridaIdaVolta: corridaIdaVolta(2.6, 40, { marcas: [CENTRO_X - 62, CENTRO_X + 62] }),
  corridaFreada: mov(2.6, [[0, { x: -60 }], [0.12, com(CORRE_A, { x: -40 })], [0.24, com(CORRE_B, { x: -10 })], [0.36, com(CORRE_A, { x: 20 })], [0.48, com(DEFESA, { x: 40, coxaF: 70, canelaF: 10, coxaT: -10, canelaT: -60 })], [0.7, com(DEFESA, { x: 40 })], [0.9, { x: -20 }], [1, { x: -60 }]]),
  arrancada: mov(2.4, [[0, com(PRONTO, { x: -60 })], [0.15, com(CORRE_A, { x: -40, tronco: 30 })], [0.3, com(CORRE_B, { x: -10, tronco: 22 })], [0.45, com(CORRE_A, { x: 30 })], [0.6, { x: 50 }], [0.8, { x: -10 }], [1, com(PRONTO, { x: -60 })]]),
  giroArrancada: mov(3, [[0, com(PRONTO, { x: 0, virar: 1 })], [0.15, com(PRONTO, { x: 0, virar: 2 })], [0.25, com(CORRE_A, { x: 24, virar: 2 })], [0.38, com(CORRE_B, { x: 40, virar: 2 })], [0.5, { x: 46, virar: 2 }], [0.8, { x: 0, virar: 3 }], [1, com(PRONTO, { x: 0, virar: 3 })]]),
  recuoAvanco: mov(2.6, [[0, com(PRONTO, { x: 40 })], [0.12, com(PRONTO, PASSO_B, { x: 24 })], [0.24, com(PRONTO, PASSO_A, { x: 8 })], [0.36, com(PRONTO, PASSO_B, { x: -10 })], [0.5, com(PRONTO, { x: -30 })], [0.65, com(CORRE_A, { x: -6 })], [0.8, com(CORRE_B, { x: 22 })], [1, com(PRONTO, { x: 40 })]], { marcas: [CENTRO_X - 38, CENTRO_X + 46] }),
  diagonalDefesa: mov(2.4, [[0, com(DEFESA, { x: -20 })], [0.15, com(DEFESA, PASSO_A, { x: 0, coxaF: 80 })], [0.3, com(DEFESA, { x: 20, coxaF: 90, canelaF: -10, bracoF: 30, antebracoF: 20 })], [0.5, com(DEFESA, { x: 20 })], [0.7, com(DEFESA, PASSO_B, { x: 0 })], [1, com(DEFESA, { x: -20 })]]),
  chaoDefesa: mov(2.6, [[0, BRUCOS], [0.2, BRUCOS], [0.35, { tronco: 60, coxaF: 90, canelaF: -10, coxaT: 0, canelaT: -90, bracoF: 0, antebracoF: 0, bracoT: 2, antebracoT: 2 }], [0.5, DEFESA], [0.75, DEFESA], [0.9, { tronco: 60, coxaF: 90, canelaF: -10, coxaT: 0, canelaT: -90, bracoF: 0, antebracoF: 0, bracoT: 2, antebracoT: 2 }], [1, BRUCOS]], { tapete: true, ancora: 'quadril' }),
  arrancadaSentado: mov(3, [[0, com(SENTADO_CHAO, { x: -50 })], [0.1, com(SENTADO_CHAO, { x: -50 })], [0.22, com(AGACHA_APOIO, { x: -40 })], [0.34, com(CORRE_A, { x: -14, tronco: 30 })], [0.46, com(CORRE_B, { x: 20 })], [0.58, com(CORRE_A, { x: 54 })], [0.7, { x: 60 }], [0.9, com(SENTADO_CHAO, { x: -50 })], [1, com(SENTADO_CHAO, { x: -50 })]], { ancora: 'quadril' }),
  corridaVirada: mov(2.4, [[0, CORRE_A], [0.12, CORRE_B], [0.24, CORRE_A], [0.32, com(CORRE_B, { virar: 0.5, y: 6 })], [0.4, com(CORRE_A, { virar: 1 })], [0.52, com(CORRE_B, { virar: 1 })], [0.64, com(CORRE_A, { virar: 1 })], [0.76, com(CORRE_B, { virar: 1 })], [0.86, com(CORRE_A, { virar: 1.5, y: 6 })], [0.99, com(CORRE_B, { virar: 2 })], [1, CORRE_A]]),
  pegarSegundoQuique: mov(2.6, [[0, { bracoF: 90, antebracoF: 90 }], [0.1, { bracoF: 90, antebracoF: 90 }], [0.3, com(CORRE_A, { x: 20 })], [0.5, com(AGACHA, { x: 46, bracoF: 40, antebracoF: 40, bracoT: 38, antebracoT: 38 })], [0.7, com(BRACOS_FRENTE, { x: 46 })], [0.9, { x: 0, bracoF: 90, antebracoF: 90 }], [1, { bracoF: 90, antebracoF: 90 }]], {
    bola: trajeto([
      { de: 0.1, ate: 0.28, a: NA_MAO_F, b: chao(CENTRO_X + 46), alt: 0 },
      { de: 0.28, ate: 0.5, a: chao(CENTRO_X + 46), b: (s) => ({ x: s.maos.x + 4, y: s.maos.y - 8 }), alt: 40 },
    ], (s) => (s.quadril.x < CENTRO_X + 20 && s.maoF.y < s.ombro.y + 30 ? val(NA_MAO_F, s) : { x: s.maos.x + 4, y: s.maos.y - 8 })),
  }),

  /* ------------------------------ COORDENAÇÃO ------------------------------ */
  polichinelo: frente(1, [[0, F_PE], [0.5, com(F_ABERTO, F_BRACOS_CIMA, { y: 4 })], [1, F_PE]]),
  polichineloCruzado: frente(1.2, [[0, F_ABERTO], [0.25, { y: 6, coxaE: -8, canelaE: -8, coxaD: 14, canelaD: 14, encolhe: 0.4, bracoE: -20, antebracoE: -40, bracoD: -20, antebracoD: -40 }], [0.5, com(F_ABERTO, F_BRACOS_LADO)], [0.75, { y: 6, coxaD: -8, canelaD: -8, coxaE: 14, canelaE: 14, encolhe: 0.4, bracoE: -20, antebracoE: -40, bracoD: -20, antebracoD: -40 }], [1, F_ABERTO]]),
  marchaBracoOposto: mov(1.2, [[0, { coxaF: 70, canelaF: -10, bracoF: -30, antebracoF: -20, bracoT: 80, antebracoT: 90 }], [0.25, EM_PE], [0.5, { coxaT: 70, canelaT: -10, bracoT: -30, antebracoT: -20, bracoF: 80, antebracoF: 90 }], [0.75, EM_PE], [1, { coxaF: 70, canelaF: -10, bracoF: -30, antebracoF: -20, bracoT: 80, antebracoT: 90 }]]),
  maoJoelhoOposto: frente(1.2, [[0, F_BRACOS_CIMA], [0.25, { coxaD: -30, canelaD: 10, agacha: 0.4, bracoE: 20, antebracoE: -40, inclina: 6, bracoD: 165, antebracoD: 172 }], [0.5, F_BRACOS_CIMA], [0.75, { coxaE: -30, canelaE: 10, agacha: 0.4, bracoD: 20, antebracoD: -40, inclina: -6, bracoE: 165, antebracoE: 172 }], [1, F_BRACOS_CIMA]]),
  controlePes: mov(1.2, [[0, { coxaF: 30, canelaF: 10, bracoF: 30, antebracoF: 40 }], [0.25, { coxaF: 20, canelaF: 0 }], [0.5, { coxaT: 30, canelaT: 10, coxaF: -2, bracoT: 30, antebracoT: 40 }], [0.75, { coxaT: 20, canelaT: 0 }], [1, { coxaF: 30, canelaF: 10, bracoF: 30, antebracoF: 40 }]], { ancora: 'quadril', bola: (_t, c) => ({ x: c.s.quadril.x + 24, y: CHAO - 9 }) }),
  lancarPegar: mov(1.6, [[0, BRACOS_FRENTE], [0.2, { bracoF: 130, antebracoF: 140, bracoT: 126, antebracoT: 136 }], [0.5, { bracoF: 110, antebracoF: 120, bracoT: 106, antebracoT: 116 }], [0.8, BRACOS_FRENTE], [1, BRACOS_FRENTE]], { bola: trajeto([paraCima(0.18, 0.78, ENTRE_MAOS, 70)], ENTRE_MAOS) }),
  lancarPalma: mov(1.8, [[0, BRACOS_FRENTE], [0.15, { bracoF: 130, antebracoF: 140, bracoT: 126, antebracoT: 136 }], [0.3, { bracoF: 80, antebracoF: 80, bracoT: 50, antebracoT: 60 }], [0.38, { bracoF: 60, antebracoF: 70, bracoT: 64, antebracoT: 72 }], [0.48, { bracoF: 80, antebracoF: 80, bracoT: 50, antebracoT: 60 }], [0.7, { bracoF: 110, antebracoF: 120, bracoT: 106, antebracoT: 116 }], [0.85, BRACOS_FRENTE], [1, BRACOS_FRENTE]], { bola: trajeto([paraCima(0.12, 0.78, ENTRE_MAOS, 90)], ENTRE_MAOS) }),
  maoFraca: mov(1.4, [[0, { bracoF: 30, antebracoF: 90 }], [0.2, { bracoF: 40, antebracoF: 130 }], [0.7, { bracoF: 34, antebracoF: 110 }], [1, { bracoF: 30, antebracoF: 90 }]], { bola: trajeto([paraCima(0.18, 0.75, NA_MAO_F, 50)], NA_MAO_F) }),
  lancarTocarChao: mov(2.2, [[0, BRACOS_FRENTE], [0.15, { bracoF: 130, antebracoF: 140, bracoT: 126, antebracoT: 136 }], [0.38, com(AGACHA_APOIO, { bracoT: 60, antebracoT: 60 })], [0.62, { bracoF: 110, antebracoF: 120, bracoT: 106, antebracoT: 116 }], [0.8, BRACOS_FRENTE], [1, BRACOS_FRENTE]], { bola: trajeto([paraCima(0.12, 0.72, ENTRE_MAOS, 90)], ENTRE_MAOS) }),
  lancarPorTras: mov(2, [[0, { bracoF: -40, antebracoF: -30, bracoT: -38, antebracoT: -28 }], [0.2, { tronco: 10, bracoF: -60, antebracoF: -50, bracoT: -58, antebracoT: -48 }], [0.32, { tronco: -4, bracoF: 20, antebracoF: 30, bracoT: 22, antebracoT: 32 }], [0.7, BRACOS_FRENTE], [0.85, BRACOS_FRENTE], [1, { bracoF: -40, antebracoF: -30, bracoT: -38, antebracoT: -28 }]], {
    bola: trajeto([{ de: 0.24, ate: 0.75, a: (s) => ({ x: s.maos.x, y: s.maos.y }), b: ENTRE_MAOS, alt: 80 }], (s) => (s.maos.x < s.quadril.x ? { x: s.maos.x - 4, y: s.maos.y } : val(ENTRE_MAOS, s))),
  }),
  quiqueGiro: mov(2.4, [[0, BRACOS_FRENTE], [0.12, { bracoF: 30, antebracoF: 20, bracoT: 26, antebracoT: 16, tronco: 14 }], [0.3, { virar: 0.5 }], [0.5, { virar: 1 }], [0.68, { virar: 1.5 }], [0.85, com(BRACOS_FRENTE, { virar: 2 })], [0.99, com(BRACOS_FRENTE, { virar: 2 })], [1, BRACOS_FRENTE]], {
    bola: trajeto([{ de: 0.12, ate: 0.24, a: ENTRE_MAOS, b: chao(CENTRO_X + 22), alt: 0 }, { de: 0.24, ate: 0.85, a: chao(CENTRO_X + 22), b: ENTRE_MAOS, alt: 110 }], ENTRE_MAOS),
  }),
  lancarLevantar: mov(3, [[0, com(SENTADO_CHAO, BRACOS_FRENTE)], [0.12, com(SENTADO_CHAO, { bracoF: 140, antebracoF: 150, bracoT: 136, antebracoT: 146 })], [0.3, AGACHA_APOIO], [0.5, { bracoF: 120, antebracoF: 130, bracoT: 116, antebracoT: 126 }], [0.7, BRACOS_FRENTE], [0.85, AGACHA_APOIO], [1, com(SENTADO_CHAO, BRACOS_FRENTE)]], {
    bola: trajeto([{ de: 0.1, ate: 0.55, a: ENTRE_MAOS, b: ENTRE_MAOS, alt: 80 }], ENTRE_MAOS), ancora: 'quadril',
  }),
  quicarAndando: andando({ bracoF: 40, antebracoF: 60 }, 4.4, { bola: (t, c) => { const k = (t * 8) % 1; const m = c.s.maoF; const dir = m.x >= c.s.quadril.x ? 1 : -1; return { x: m.x + 8 * dir, y: m.y + 8 + (CHAO - 9 - m.y - 8) * Math.sin(k * Math.PI) } } }),
  andarLinha: andando(com(BRACOS_FRENTE, { coxaF: 10, coxaT: -10 }), 5, { linha: true, bola: quatroToques(ENTRE_MAOS, 30) }, -30, 30),
  lancarParedeOutraMao: mov(2, [[0, { x: 20, bracoF: 60, antebracoF: 80, bracoT: 20, antebracoT: 30 }], [0.2, { x: 20, bracoF: 100, antebracoF: 120, bracoT: 20, antebracoT: 30 }], [0.5, { x: 20, bracoF: 20, antebracoF: 30, bracoT: 70, antebracoT: 90 }], [0.7, { x: 20, bracoF: 20, antebracoF: 30, bracoT: 100, antebracoT: 120 }], [1, { x: 20, bracoF: 60, antebracoF: 80, bracoT: 20, antebracoT: 30 }]], {
    parede: true,
    bola: trajeto([{ de: 0.18, ate: 0.33, a: NA_MAO_F, b: parede(100), alt: 6 }, { de: 0.33, ate: 0.5, a: parede(100), b: NA_MAO_T, alt: 6 }, { de: 0.68, ate: 0.83, a: NA_MAO_T, b: parede(100), alt: 6 }, { de: 0.83, ate: 1.0, a: parede(100), b: NA_MAO_F, alt: 6 }], (s) => (s.maoF.y < s.maoT.y ? val(NA_MAO_F, s) : val(NA_MAO_T, s))),
  }),
  equilibrioUmPe: isometria(3, com(UM_PE, { bracoF: 70, antebracoF: 80, bracoT: -40, antebracoT: -40, tronco: 2 }), com(UM_PE, { bracoF: 76, antebracoF: 86, bracoT: -46, antebracoT: -46, tronco: 6 }), { ancora: 'peF' }),
  equilibrioOlhosFechados: isometria(3, com(UM_PE, { bracoF: 70, antebracoF: 80, bracoT: -40, antebracoT: -40, tronco: 2 }), com(UM_PE, { bracoF: 76, antebracoF: 86, bracoT: -46, antebracoT: -46, tronco: 6 }), { ancora: 'peF', olhosFechados: true }),
  aviao: mov(3, [[0, { bracoF: 80, antebracoF: 80, bracoT: -60, antebracoT: -60 }], [0.45, { tronco: 84, coxaF: 0, canelaF: 0, coxaT: -84, canelaT: -84, bracoF: 90, antebracoF: 90, bracoT: -90, antebracoT: -90, peT: -40 }], [0.6, { tronco: 84, coxaF: 0, canelaF: 0, coxaT: -84, canelaT: -84, bracoF: 90, antebracoF: 90, bracoT: -90, antebracoT: -90, peT: -40 }], [1, { bracoF: 80, antebracoF: 80, bracoT: -60, antebracoT: -60 }]], { ancora: 'peF' }),
  saltosAlternados: mov(0.9, [[0, com(UM_PE, { bracoF: 30, antebracoF: 70 })], [0.25, { y: 8, coxaT: 20, canelaT: -20, coxaF: 10, canelaF: -10 }], [0.5, { coxaF: 50, canelaF: -40, coxaT: -4, bracoT: 30, antebracoT: 70 }], [0.75, { y: 8, coxaT: 20, canelaT: -20, coxaF: 10, canelaF: -10 }], [1, com(UM_PE, { bracoF: 30, antebracoF: 70 })]]),
  passos4Tempos: frente(2.4, [[0, F_PE], [0.25, { x: -14, coxaE: 16, canelaE: 16 }], [0.5, F_BASE], [0.75, { x: 14, coxaD: 16, canelaD: 16 }], [1, F_PE]], { marcas: [CENTRO_X - 24, CENTRO_X + 24] }),
  bolaCintura: frente(1.6, [[0, F_MAOS_FRENTE], [0.25, { bracoE: 40, antebracoE: 40, bracoD: 10, antebracoD: 10 }], [0.5, { bracoE: 10, antebracoE: -60, bracoD: 10, antebracoD: -60, encolhe: 0.5 }], [0.75, { bracoD: 40, antebracoD: 40, bracoE: 10, antebracoE: 10 }], [1, F_MAOS_FRENTE]], {
    bola: (t, c) => { const a = t * Math.PI * 2; return { x: c.s.quadril.x - Math.sin(a) * 32, y: c.s.quadril.y - 12 } },
  }),
  oitoPernas: frente(2.4, [[0, com(F_ABERTO, { agacha: 0.5, encolhe: 0.3, bracoE: 30, antebracoE: 0, bracoD: 30, antebracoD: 0 })], [0.5, com(F_ABERTO, { agacha: 0.5, encolhe: 0.3, bracoE: 0, antebracoE: -20, bracoD: 0, antebracoD: -20 })], [1, com(F_ABERTO, { agacha: 0.5, encolhe: 0.3, bracoE: 30, antebracoE: 0, bracoD: 30, antebracoD: 0 })]], {
    bola: (t, c) => { const a = t * Math.PI * 2; return { x: c.s.quadril.x + Math.sin(a) * 26, y: c.s.joelhoF.y + Math.sin(2 * a) * 10 } },
  }),
  quiqueAlternado: frente(1.2, [[0, { bracoE: 30, antebracoE: 10, bracoD: 20, antebracoD: 40 }], [0.5, { bracoD: 30, antebracoD: 10, bracoE: 20, antebracoE: 40 }], [1, { bracoE: 30, antebracoE: 10, bracoD: 20, antebracoD: 40 }]], {
    bola: (t, c) => { const k = (t * 2) % 1; const de = t < 0.5 ? c.s.maoT : c.s.maoF; const para = t < 0.5 ? c.s.maoF : c.s.maoT; return { x: de.x + (para.x - de.x) * k, y: de.y + 9 + (CHAO - 9 - de.y - 9) * Math.sin(k * Math.PI) } },
  }),

  /* ------------------------------ MOBILIDADE ------------------------------ */
  circulosTornozelo: mov(2, [[0, { coxaF: 40, canelaF: 10, peF: 0, bracoF: 80, antebracoF: 90 }], [0.25, { coxaF: 40, canelaF: 10, peF: 40, bracoF: 80, antebracoF: 90 }], [0.5, { coxaF: 40, canelaF: 10, peF: 0, bracoF: 80, antebracoF: 90 }], [0.75, { coxaF: 40, canelaF: 10, peF: -40, bracoF: 80, antebracoF: 90 }], [1, { coxaF: 40, canelaF: 10, peF: 0, bracoF: 80, antebracoF: 90 }]], { ancora: 'peT' }),
  circulosQuadril: frente(2.4, [[0, com(F_BASE, { inclina: -8, x: 8, bracoE: 30, antebracoE: 60, bracoD: 30, antebracoD: 60 })], [0.25, com(F_BASE, { y: 3, bracoE: 30, antebracoE: 60, bracoD: 30, antebracoD: 60 })], [0.5, com(F_BASE, { inclina: 8, x: -8, bracoE: 30, antebracoE: 60, bracoD: 30, antebracoD: 60 })], [0.75, com(F_BASE, { bracoE: 30, antebracoE: 60, bracoD: 30, antebracoD: 60 })], [1, com(F_BASE, { inclina: -8, x: 8, bracoE: 30, antebracoE: 60, bracoD: 30, antebracoD: 60 })]]),
  circulosOmbro: mov(2.4, [[0, { bracoF: 0, antebracoF: 0, bracoT: 180, antebracoT: 180 }], [0.25, { bracoF: 90, antebracoF: 90, bracoT: 270, antebracoT: 270 }], [0.5, { bracoF: 180, antebracoF: 180, bracoT: 360, antebracoT: 360 }], [0.75, { bracoF: 270, antebracoF: 270, bracoT: 450, antebracoT: 450 }], [1, { bracoF: 360, antebracoF: 360, bracoT: 540, antebracoT: 540 }]]),
  gatoCamelo: mov(3.2, [[0, com(QUATRO_APOIOS, { curva: 9, pescoco: 40 })], [0.5, com(QUATRO_APOIOS, { curva: -9, pescoco: -30 })], [1, com(QUATRO_APOIOS, { curva: 9, pescoco: 40 })]], { tapete: true, ancora: 'maos' }),
  panturrilhaParede: isometria(3, { x: 84, tronco: 20, coxaF: 30, canelaF: 10, coxaT: -30, canelaT: -30, peT: 10, bracoF: 88, antebracoF: 90, bracoT: 86, antebracoT: 88 }, { x: 84, tronco: 24, coxaF: 36, canelaF: 14, coxaT: -32, canelaT: -32, peT: 12, bracoF: 84, antebracoF: 100, bracoT: 82, antebracoT: 98 }, { parede: true, ancora: 'maos' }),
  frenteCoxa: isometria(3, { x: 50, coxaT: -6, canelaT: -170, bracoF: 80, antebracoF: 80, bracoT: -40, antebracoT: -150 }, { x: 50, coxaT: -14, canelaT: -172, bracoF: 80, antebracoF: 80, bracoT: -44, antebracoT: -150 }, { parede: true, ancora: 'peF' }),
  trasCoxa: mov(3, [[0, { tronco: 20, coxaF: 30, canelaF: 30, peF: -60, coxaT: -2, canelaT: -14, bracoF: 30, antebracoF: 30, bracoT: 28, antebracoT: 28 }], [0.5, { tronco: 60, coxaF: 30, canelaF: 30, peF: -60, coxaT: -6, canelaT: -18, bracoF: 30, antebracoF: 40, bracoT: 28, antebracoT: 38 }], [1, { tronco: 20, coxaF: 30, canelaF: 30, peF: -60, coxaT: -2, canelaT: -14, bracoF: 30, antebracoF: 30, bracoT: 28, antebracoT: 28 }]], { ancora: 'peT' }),
  peitoParede: isometria(3, { x: -50, bracoT: -90, antebracoT: -90, bracoF: 20, antebracoF: 30 }, { x: -46, tronco: 8, bracoT: -100, antebracoT: -100, bracoF: 20, antebracoF: 30, coxaF: 14, canelaF: -4 }, { parede: 'esq' }),
  agachamentoProfundo: mov(3, [[0, { x: 30, bracoF: 80, antebracoF: 80, bracoT: 78, antebracoT: 78 }], [0.45, { x: 30, tronco: 20, coxaF: 110, canelaF: -30, coxaT: 106, canelaT: -34, bracoF: 80, antebracoF: 80, bracoT: 78, antebracoT: 78 }], [0.65, { x: 30, tronco: 20, coxaF: 110, canelaF: -30, coxaT: 106, canelaT: -34, bracoF: 80, antebracoF: 80, bracoT: 78, antebracoT: 78 }], [1, { x: 30, bracoF: 80, antebracoF: 80, bracoT: 78, antebracoT: 78 }]], { parede: true }),
  afundoRotacao: mov(3, [[0, EM_PE], [0.3, com(AFUNDO, { bracoF: 90, antebracoF: 90, bracoT: 90, antebracoT: 90 })], [0.5, com(AFUNDO, { bracoF: 30, antebracoF: 30, bracoT: -60, antebracoT: -60 })], [0.7, com(AFUNDO, { bracoF: 90, antebracoF: 90, bracoT: 90, antebracoT: 90 })], [1, EM_PE]], { ancora: 'peF' }),
  ombroToalha: frente(3, [[0, { bracoE: 30, antebracoE: 30, bracoD: 30, antebracoD: 30 }], [0.5, { bracoE: 150, antebracoE: 150, bracoD: 150, antebracoD: 150 }], [1, { bracoE: 30, antebracoE: 30, bracoD: 30, antebracoD: 30 }]], { toalha: true }),
  extensaoColuna: mov(3, [[0, com(BRUCOS, { bracoF: -20, antebracoF: 90, bracoT: -18, antebracoT: 92 })], [0.5, com(BRUCOS, { tronco: 50, curva: -6, pescoco: -10, bracoF: 0, antebracoF: 20, bracoT: 2, antebracoT: 22 })], [1, com(BRUCOS, { bracoF: -20, antebracoF: 90, bracoT: -18, antebracoT: 92 })]], { tapete: true, ancora: 'quadril' }),
  passadaAlcance: mov(3, [[0, EM_PE], [0.4, com(AFUNDO, BRACOS_CIMA, { tronco: -4 })], [0.6, com(AFUNDO, BRACOS_CIMA, { tronco: -4 })], [1, EM_PE]], { ancora: 'peT' }),
  crianca: mov(3.2, [[0, com(AJOELHADO, { bracoF: 0, antebracoF: 0 })], [0.45, { tronco: 115, curva: 6, coxaF: 95, canelaF: -90, coxaT: 93, canelaT: -92, peF: -90, peT: -90, bracoF: 100, antebracoF: 100, bracoT: 98, antebracoT: 98 }], [0.7, { tronco: 115, curva: 6, coxaF: 95, canelaF: -90, coxaT: 93, canelaT: -92, peF: -90, peT: -90, bracoF: 100, antebracoF: 100, bracoT: 98, antebracoT: 98 }], [1, com(AJOELHADO, { bracoF: 0, antebracoF: 0 })]], { tapete: true, ancora: 'peT' }),
  punhos: mov(1.6, [[0, { bracoF: 90, antebracoF: 80, bracoT: 88, antebracoT: 78 }], [0.25, { bracoF: 90, antebracoF: 100, bracoT: 88, antebracoT: 98 }], [0.5, { bracoF: 90, antebracoF: 80, bracoT: 88, antebracoT: 78 }], [0.75, { bracoF: 90, antebracoF: 60, bracoT: 88, antebracoT: 58 }], [1, { bracoF: 90, antebracoF: 80, bracoT: 88, antebracoT: 78 }]]),
  antebraco: isometria(3, { bracoF: 90, antebracoF: 90, bracoT: 50, antebracoT: 120 }, { bracoF: 90, antebracoF: 92, bracoT: 54, antebracoT: 124 }),
  ombroCruzado: frente(3, [[0, { bracoE: -80, antebracoE: -80, bracoD: 20, antebracoD: -70 }], [0.5, { bracoE: -86, antebracoE: -86, bracoD: 24, antebracoD: -74 }], [1, { bracoE: -80, antebracoE: -80, bracoD: 20, antebracoD: -70 }]]),
  triceps: frente(3, [[0, { bracoE: 170, antebracoE: 330, bracoD: 120, antebracoD: 200, cabeca: -6 }], [0.5, { bracoE: 175, antebracoE: 335, bracoD: 124, antebracoD: 204, cabeca: -8 }], [1, { bracoE: 170, antebracoE: 330, bracoD: 120, antebracoD: 200, cabeca: -6 }]]),
  portao: frente(2.4, [[0, { bracoE: 90, antebracoE: 90 }], [0.25, { bracoE: 90, antebracoE: 90, coxaD: 0, canelaD: 0 }], [0.5, { bracoE: 90, antebracoE: 90, coxaD: 80, canelaD: -10 }], [0.75, { bracoE: 90, antebracoE: 90, coxaD: 30, canelaD: -20 }], [1, { bracoE: 90, antebracoE: 90 }]], { ancora: 'peT' }),
  borboleta: frente(1.6, [[0, com(F_SENTADO, { coxaE: 120, canelaE: 150, coxaD: 120, canelaD: 150, agacha: 0.7, encolhe: 0.6, bracoE: 20, antebracoE: -10, bracoD: 20, antebracoD: -10 })], [0.5, com(F_SENTADO, { coxaE: 100, canelaE: 150, coxaD: 100, canelaD: 150, agacha: 0.7, encolhe: 0.6, bracoE: 20, antebracoE: -10, bracoD: 20, antebracoD: -10 })], [1, com(F_SENTADO, { coxaE: 120, canelaE: 150, coxaD: 120, canelaD: 150, agacha: 0.7, encolhe: 0.6, bracoE: 20, antebracoE: -10, bracoD: 20, antebracoD: -10 })]], { tapete: true }),
  pescoco: frente(3, [[0, { cabeca: 0 }], [0.25, { cabeca: -28 }], [0.5, { cabeca: 0 }], [0.75, { cabeca: 28 }], [1, { cabeca: 0 }]]),
  lateralEmPe: frente(3, [[0, com(F_BASE, { bracoE: 165, antebracoE: 172 })], [0.25, com(F_BASE, { inclina: 24, bracoE: 165, antebracoE: 200, bracoD: 20, antebracoD: 10 })], [0.5, F_BASE], [0.75, com(F_BASE, { inclina: -24, bracoD: 165, antebracoD: 200, bracoE: 20, antebracoE: 10 })], [1, com(F_BASE, { bracoE: 165, antebracoE: 172 })]]),
  rotacaoTroncoCadeira: frente(3, [[0, com(F_SENTADO, { coxaE: 160, canelaE: 10, coxaD: 160, canelaD: 10, encolhe: 0.4, bracoE: 90, antebracoE: 90, bracoD: 30, antebracoD: -60 })], [0.5, com(F_SENTADO, { coxaE: 160, canelaE: 10, coxaD: 160, canelaD: 10, encolhe: 0.4, bracoD: 90, antebracoD: 90, bracoE: 30, antebracoE: -60 })], [1, com(F_SENTADO, { coxaE: 160, canelaE: 10, coxaD: 160, canelaD: 10, encolhe: 0.4, bracoE: 90, antebracoE: 90, bracoD: 30, antebracoD: -60 })]]),
  livroAberto: mov(3, [[0, { tronco: -90, coxaF: 30, canelaF: 140, coxaT: 32, canelaT: 142, peF: -140, peT: -142, bracoF: 90, antebracoF: 90, bracoT: 92, antebracoT: 92 }], [0.5, { tronco: -90, coxaF: 30, canelaF: 140, coxaT: 32, canelaT: 142, peF: -140, peT: -142, bracoF: 90, antebracoF: 90, bracoT: 250, antebracoT: 250 }], [1, { tronco: -90, coxaF: 30, canelaF: 140, coxaT: 32, canelaT: 142, peF: -140, peT: -142, bracoF: 90, antebracoF: 90, bracoT: 92, antebracoT: 92 }]], { tapete: true, ancora: 'quadril' }),
  gluteoDeitado: mov(3, [[0, com(COSTAS_JOELHOS, { coxaT: 170, canelaT: 80, peT: -80 })], [0.5, com(COSTAS_JOELHOS, { tronco: -84, coxaF: 165, canelaF: 70, coxaT: 185, canelaT: 95, peT: -95, peF: -70, bracoF: 150, antebracoF: 120, bracoT: 150, antebracoT: 120 })], [1, com(COSTAS_JOELHOS, { coxaT: 170, canelaT: 80, peT: -80 })]], { tapete: true, ancora: 'quadril' }),
  cachorro: mov(3, [[0, QUATRO_APOIOS], [0.4, { tronco: 135, coxaF: -40, canelaF: -40, coxaT: -41, canelaT: -41, bracoF: 45, antebracoF: 45, bracoT: 46, antebracoT: 46, peF: 40, peT: 40 }], [0.7, { tronco: 135, coxaF: -40, canelaF: -40, coxaT: -41, canelaT: -41, bracoF: 45, antebracoF: 45, bracoT: 46, antebracoT: 46, peF: 40, peT: 40 }], [1, QUATRO_APOIOS]], { deslocar: 40, tapete: true, ancora: 'maos' }),
  balancoPerna: mov(1.6, [[0, { x: -50, bracoT: -90, antebracoT: -100, coxaF: -30, canelaF: -40 }], [0.5, { x: -50, bracoT: -90, antebracoT: -100, coxaF: 70, canelaF: 60 }], [1, { x: -50, bracoT: -90, antebracoT: -100, coxaF: -30, canelaF: -40 }]], { parede: 'esq', ancora: 'peT' }),
}

/** Qual movimento cada exercício de casa mostra (número do exercício → movimento). */
export const MOVIMENTO_DO_EXERCICIO: Record<number, string> = {
  // Com bola
  1: 'toqueParede', 4: 'mancheteParede', 5: 'toqueCima', 6: 'mancheteToqueCima', 7: 'toqueParedeOlhar', 8: 'saqueBaixoParede', 9: 'sombraSaque',
  10: 'toqueDeitado', 11: 'mancheteCadeira', 12: 'toqueAjoelhado', 13: 'mancheteQuique', 14: 'toqueAltoBaixo', 15: 'defesaParede', 16: 'largadaParede',
  17: 'mancheteLateral', 18: 'toqueAgachamento', 19: 'defesaParede', 20: 'toqueParede', 21: 'toqueCima', 22: 'toquePassoFrente', 23: 'mancheteBaixaCima',
  24: 'toqueParedeRapido', 25: 'mancheteParede', 26: 'mancheteToqueCima',
  113: 'encaixeToque', 114: 'toqueQuique', 115: 'mancheteCima', 116: 'plataformaEquilibrio', 117: 'ataqueChao', 118: 'lancamentoSaque', 119: 'toqueSentadoParede',
  120: 'toqueAndando', 121: 'mancheteAndando', 122: 'mancheteLateral', 123: 'toquePassoFrente', 124: 'manchetePassoFrente', 125: 'ataqueParede',
  126: 'saqueCimaParede', 127: 'pegarNoAlto', 128: 'largadaParede', 129: 'defesaUmaMao', 130: 'mancheteCima', 131: 'toqueParede', 132: 'toqueGiro',
  133: 'toqueCostas', 134: 'toqueSentaLevanta', 135: 'levantamentoSuspensao', 136: 'mancheteToqueAtaque', 137: 'saqueViagem', 138: 'sombraAtaqueToalha', 139: 'toqueRecuando',
  // Impulsão
  2: 'agachamentoSalto', 27: 'saltosLugar', 28: 'meioAgachamento', 29: 'saltoFrente', 30: 'elevacaoJoelho', 31: 'salto', 32: 'saltoLateral', 33: 'saltoTesoura',
  34: 'saltinhosTornozelo', 35: 'saltoAgrupado', 36: 'saltoMeiaVolta', 37: 'saltoBloqueio', 38: 'aproximacaoAtaque', 39: 'aproximacaoAtaque', 40: 'saltoUmaPerna',
  41: 'elevacaoCalcanhar', 42: 'saltoPausa', 43: 'agachamentoSalto',
  140: 'tresSaltos', 141: 'aterrissagem', 142: 'saltoToqueParede', 143: 'quedaDegrau', 144: 'subidaDegrau', 145: 'saltoLateralUmaPerna', 146: 'saltoFrenteAtrasLinha',
  147: 'saltoEstrela', 148: 'bloqueioDeslocamento', 149: 'zigueZagueLinha', 150: 'saltoTesoura',
  // Força
  44: 'agachamento', 45: 'afundo', 46: 'flexaoParede', 47: 'flexaoJoelhos', 48: 'flexao', 49: 'prancha', 50: 'pranchaLateral', 51: 'abdominal', 52: 'elevacaoPernas',
  53: 'ponte', 54: 'isometricoParede', 55: 'sentarLevantar', 56: 'bulgaro', 57: 'agachamentoGarrafa', 58: 'remadaGarrafas', 59: 'superman', 60: 'escalador',
  61: 'flexaoToqueOmbro', 62: 'agachamentoUmaPernaCadeira', 63: 'agachamento',
  151: 'ponteUmaPerna', 152: 'afundoTras', 153: 'afundoLateral', 154: 'sumo', 155: 'desenvolvimento', 156: 'elevacaoLateral', 157: 'tricepsCadeira',
  158: 'rotacaoElastico', 159: 'bicicleta', 160: 'rotacaoTroncoBola', 161: 'pranchaAlcance',
  // Agilidade
  3: 'deslocamentoLateral', 64: 'passosRapidos', 65: 'zigueZagueLateral', 66: 'corridaIdaVolta', 67: 'entraSaiQuadrado', 68: 'entraSaiQuadrado', 69: 'corridaFreada',
  70: 'deslocamentoDefesa', 71: 'defesaParede', 72: 'corridaIdaVolta', 73: 'passoCruzado', 74: 'saltoLateralMarcas', 75: 'arrancada', 76: 'escada', 77: 'giroArrancada',
  78: 'defesaTresPontos',
  162: 'recuoAvanco', 163: 'chaoDefesa', 164: 'pegarSegundoQuique', 165: 'deslocamentoX', 166: 'passosArrancada', 167: 'passoBloqueio', 168: 'corridaIdaVolta',
  169: 'burpee', 170: 'corridaVirada', 171: 'diagonalDefesa', 172: 'arrancadaSentado', 173: 'deslocamentoLateral',
  // Coordenação
  79: 'cordaImaginaria', 80: 'polichinelo', 81: 'marchaBracoOposto', 82: 'controlePes', 83: 'lancarPegar', 84: 'lancarPalma', 85: 'oitoPernas', 86: 'equilibrioUmPe',
  87: 'bolaCintura', 88: 'saltosAlternados', 89: 'passos4Tempos', 90: 'polichineloCruzado', 91: 'quiqueAlternado', 92: 'lancarParedeOutraMao', 93: 'marcharTocando',
  94: 'lancarPegar',
  174: 'lancarTocarChao', 175: 'bolaCintura', 176: 'equilibrioOlhosFechados', 177: 'toqueUmPe', 178: 'lancarPorTras', 179: 'quiqueGiro', 180: 'maoJoelhoOposto',
  181: 'lancarLevantar', 182: 'aviao', 183: 'quicarAndando', 184: 'maoFraca', 185: 'andarLinha',
  // Mobilidade
  95: 'circulosTornozelo', 96: 'circulosQuadril', 97: 'circulosOmbro', 98: 'gatoCamelo', 99: 'panturrilhaParede', 100: 'frenteCoxa', 101: 'trasCoxa',
  102: 'peitoParede', 103: 'rotacaoTroncoCadeira', 104: 'agachamentoProfundo', 105: 'afundoRotacao', 106: 'ombroToalha', 107: 'borboleta', 108: 'pescoco',
  109: 'extensaoColuna', 110: 'passadaAlcance', 111: 'crianca', 112: 'gatoCamelo',
  186: 'punhos', 187: 'antebraco', 188: 'ombroCruzado', 189: 'triceps', 190: 'portao', 191: 'livroAberto', 192: 'gluteoDeitado', 193: 'lateralEmPe',
  194: 'cachorro', 195: 'balancoPerna',
}

/** Movimento de um exercício de casa (todo exercício tem um). */
export function movimentoDoExercicio(numero: number): Movimento | undefined {
  return MOVIMENTOS[MOVIMENTO_DO_EXERCICIO[numero] ?? '']
}
