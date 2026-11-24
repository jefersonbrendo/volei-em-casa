import type { Movimento } from './boneco'
import { criarBonecoV2, type OpcoesV2 } from './bonecoV2'

/**
 * Animação da tela do exercício de casa: o boneco 3D (Three.js, baixado só quando abre um exercício).
 * Sem WebGL, ou com "reduzir movimento" ligado, fica o boneco 2D.
 * A interface é a mesma do 2D, então a tela não precisa saber qual dos dois está rodando.
 */
export interface DemoDoExercicio {
  el: HTMLElement
  velocidade: (v: number) => void
  pausarEm: (t: number) => void
  continuar: () => void
  destruir: () => void
  temRastro: boolean
  /** true quando é o 3D (sem halo de região nem rastro). */
  em3d: boolean
}

function temWebGL(): boolean {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') ?? c.getContext('webgl'))
  } catch {
    return false
  }
}

export function criarDemoDoExercicio(m: Movimento, opcoes: OpcoesV2): DemoDoExercicio {
  const reduzir = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (reduzir || !temWebGL()) {
    const a = criarBonecoV2(m, opcoes)
    return { ...a, el: a.el as unknown as HTMLElement, em3d: false }
  }

  const palco = document.createElement('div')
  palco.className = 'vac-3d carregando'
  // enquanto o 3D carrega, a ordem mais recente fica guardada e é aplicada quando ele chegar
  let vel = 1
  let pausa: number | null = null
  let destruido = false
  let real: Awaited<ReturnType<typeof import('./boneco3d')['criarBoneco3D']>> | null = null

  void import('./boneco3d').then(({ criarBoneco3D }) => {
    if (destruido) return
    real = criarBoneco3D(m, { orbitar: true, aoRepetir: opcoes.aoRepetir, aoAtualizar: opcoes.aoAtualizar })
    palco.append(real.el)
    palco.classList.remove('carregando')
    real.velocidade(vel)
    if (pausa !== null) real.pausarEm(pausa)
  }).catch(() => {
    // falhou ao baixar o 3D: mostra o 2D
    if (destruido) return
    const a = criarBonecoV2(m, opcoes)
    palco.classList.remove('carregando', 'vac-3d')
    palco.append(a.el as unknown as HTMLElement)
  })

  return {
    el: palco,
    em3d: true,
    temRastro: false,
    velocidade: (v) => { vel = v; real?.velocidade(v) },
    pausarEm: (t) => { pausa = t; real?.pausarEm(t) },
    continuar: () => { pausa = null; real?.continuar() },
    destruir: () => { destruido = true; real?.destruir() },
  }
}
