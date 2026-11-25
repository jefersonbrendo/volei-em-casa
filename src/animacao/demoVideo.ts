import type { AnimacaoV2 } from './bonecoV2'
import type { VideoExercicio } from '../data/videosExercicios'

interface OpcoesVideo {
  /** Instantes (0 a 1) das etapas no PASSOS, na mesma ordem de `video.etapas`. */
  etapasT: number[]
  aoRepetir?: (r: number) => void
  /** t de 0 a 1 dentro da repetição atual, no mesmo formato do boneco. */
  aoAtualizar?: (t: number) => void
}

/** Vídeo real com a mesma interface da animação do boneco (pausar numa etapa, câmera lenta, contador). */
export function criarDemoVideo(v: VideoExercicio, op: OpcoesVideo): AnimacaoV2 {
  const el = document.createElement('video')
  el.className = 'vac-video'
  el.src = v.src
  el.muted = true
  el.loop = true
  el.autoplay = true
  el.playsInline = true
  el.setAttribute('playsinline', '')
  el.setAttribute('preload', 'auto')
  el.setAttribute('aria-label', 'Vídeo do exercício')
  const inicio = v.etapas[0] ?? 0
  let ultimaRep = -1
  let raf = 0
  const tNaRepeticao = (seg: number): number => {
    const k = (((seg - inicio) % v.periodo) + v.periodo) % v.periodo
    // converte a posição dentro da repetição para os instantes das etapas do PASSOS
    const desloc = v.etapas.map((s) => (((s - inicio) % v.periodo) + v.periodo) % v.periodo)
    let i = 0
    for (let j = 0; j < desloc.length; j++) if (desloc[j]! <= k + 1e-3) i = j
    const t0 = op.etapasT[i] ?? 0
    const t1 = op.etapasT[i + 1] ?? 1
    const d0 = desloc[i]!, d1 = desloc[i + 1] ?? v.periodo
    return t0 + (t1 - t0) * Math.min(1, Math.max(0, (k - d0) / ((d1 - d0) || 1)))
  }
  const quadro = (): void => {
    const seg = el.currentTime
    const rep = Math.max(0, Math.floor((seg - inicio) / v.periodo))
    if (rep !== ultimaRep) { ultimaRep = rep; op.aoRepetir?.(rep) }
    op.aoAtualizar?.(tNaRepeticao(seg))
    raf = requestAnimationFrame(quadro)
  }
  raf = requestAnimationFrame(quadro)
  void el.play().catch(() => undefined)
  return {
    el: el as unknown as SVGSVGElement,
    destruir: () => { cancelAnimationFrame(raf); el.pause(); el.removeAttribute('src'); el.load() },
    velocidade: (x) => { el.playbackRate = x },
    pausarEm: (t) => {
      let i = 0, melhor = Infinity
      op.etapasT.forEach((et, j) => { const d = Math.abs(et - t); if (d < melhor) { melhor = d; i = j } })
      el.pause()
      el.currentTime = v.etapas[i] ?? 0
    },
    continuar: () => { void el.play().catch(() => undefined) },
    temRastro: false,
  }
}
