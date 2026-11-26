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
  30: video('elevacao-de-joelho', [0.03, 1.25, 1.48], 0.47), // Elevação de joelho no lugar (só a parte "Correto" do vídeo)
  31: video('salto-vertical-bracos', [0.05, 1.9, 2.35, 3.2], 5.8), // Salto vertical com braços (uma repetição por volta do vídeo)
  32: video('salto-lateral', [0.0, 0.2, 0.5, 0.75], 1.07), // Salto lateral (side to side pogos)
  33: video('afundo-com-salto', [4.8, 5.0, 5.2, 5.5], 1.2), // Afundo com salto
  34: video('saltinhos-de-tornozelo', [0.0, 0.5, 0.7], 0.53), // Saltinhos de tornozelo (pogo hops)
  41: video('elevacao-de-calcanhar', [1.5, 2.4, 3.3], 1.9), // Elevação de calcanhar (wall-supported calf raise)
  141: video('aterrissagem-controlada', [2.75, 3.3, 3.7, 4.6], 5.4), // Aterrissagem controlada (uma repetição por volta do vídeo)
  143: video('queda-do-degrau', [3.8, 4.6, 4.9, 5.75], 6.6), // Queda do degrau e salto (uma repetição por volta do vídeo)
  144: video('subida-no-degrau', [0.05, 0.6, 1.0, 1.5], 2.0), // Subida no degrau alternada (duas repetições, uma com cada perna)
  145: video('saltos-laterais-uma-perna', [0.0, 0.2, 0.5, 0.75], 1.03), // Saltos laterais em uma perna (single leg side to side pogos)
  200: video('afundo-para-tras', [0.05, 1.5, 2.3], 2.8), // Afundo para trás com halteres (vídeo sem halteres, uma repetição por volta)
  201: video('subida-no-caixote', [0.0, 0.5, 2.37, 3.3], 4.55), // Subida no caixote com halteres (vídeo sem halteres, uma repetição por volta)
  204: video('panturrilha-com-halteres', [0.3, 1.4, 1.8, 2.6], 2.15), // Panturrilha em pé com halteres
}
