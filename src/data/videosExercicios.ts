/**
 * Exercícios que mostram um VÍDEO real no lugar da animação do boneco.
 * `etapas`: o segundo do vídeo que mostra cada etapa do passo a passo (mesma ordem de PASSOS).
 * `periodo`: duração de uma repetição no vídeo, em segundos (para a legenda e o contador).
 * As fotos das etapas ficam em public/videos/<nome>-1.webp, -2.webp...
 */
export interface VideoExercicio { src: string; fotoEtapa: (i: number) => string; etapas: number[]; periodo: number }

const video = (nome: string, etapas: number[], periodo: number): VideoExercicio => ({
  src: `/videos/${nome}.mp4`,
  fotoEtapa: (i) => `/videos/${nome}-${i + 1}.webp`,
  etapas,
  periodo,
})

export const VIDEOS_EXERCICIO: Record<number, VideoExercicio> = {
  2: video('agachamento-com-salto', [0.8, 1.1, 1.6, 2.0], 1.3), // Agachamento com salto
  27: video('saltos-no-lugar', [0.73, 0.8, 1.05, 1.4], 0.72), // Saltos no lugar
  33: video('afundo-com-salto', [4.8, 5.0, 5.2, 5.5], 1.2), // Afundo com salto
  143: video('queda-do-degrau', [3.8, 4.6, 4.9, 5.75], 6.6), // Queda do degrau e salto (uma repetição por volta do vídeo)
}
