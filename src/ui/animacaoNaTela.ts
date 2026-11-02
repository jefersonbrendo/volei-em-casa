import { criarDiagramaAnimado, type DiagramaAnimado } from '../components/diagramaAnimado/DiagramaAnimado'
import { ANIMACOES } from '../data/animacoes'
import type { Cena } from '../lib/animacao/tipos'

/** Anima o diagrama do exercício da tela, se ele tiver linha do tempo. Senão, fica a imagem estática. */
let atual: DiagramaAnimado | null = null

export function reduzirMovimento(): boolean {
  return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export async function animarDiagramaDoExercicio(main: ParentNode, numero: number, buscar: typeof fetch = fetch): Promise<void> {
  atual?.destruir()
  atual = null

  const animacao = ANIMACOES[numero]
  if (!animacao || reduzirMovimento()) return
  const figura = main.querySelector('.diag-hero')
  const imagem = figura?.querySelector('img')
  if (!figura || !imagem) return

  let cena: Cena
  try {
    const r = await buscar(`/gem/diagramas/${String(numero).padStart(3, '0')}.json`)
    if (!r.ok) return
    cena = (await r.json()) as Cena
  } catch {
    return // sem a cena, o diagrama estático continua
  }
  if (!imagem.isConnected) return // a pessoa já saiu desta tela

  const totalPassos = (figura.closest('.ex-page') ?? main).querySelectorAll('.step-list .step-item').length || undefined
  try {
    const diagrama = criarDiagramaAnimado({ numero, cena, animacao, totalPassos })
    imagem.replaceWith(diagrama.el)
    atual = diagrama
  } catch (erro) {
    console.warn('Animação indisponível para o exercício', numero, erro)
  }
}

export function pararAnimacao(): void {
  atual?.destruir()
  atual = null
}
