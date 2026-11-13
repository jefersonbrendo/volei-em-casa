import { iniciarInstalacao } from './ui/instalar'
import './estilos/base.css'
import './estilos/acesso.css'
import './estilos/treino-casa.css'
import './estilos/animacao.css'
import './estilos/app.css'
import './estilos/marca.css'
import { aplicarTema } from './telas/comum'
import { atualizarSeloSalvos, telaExercicio } from './telas/exercicio'
import { telaInicio } from './telas/inicio'
import { telaLista, type Material } from './telas/lista'
import { telaBuscar, telaComoUsar, telaSalvos } from './telas/outras'
import { telaTreino, telaTreinos } from './telas/treinos'
import { telaComparar, telaDemo, telaRevisao } from './telas/demo'
import { pararBonecos } from './animacao/registro'
import { animarDiagramaDoExercicio, pararAnimacao } from './ui/animacaoNaTela'

/** Endereços: #home, #cat-N[~corpo|~bola], #ex-ID[~voltar], #treinos, #treino-ID, #buscar[~termo], #salvos, #como-usar */
function abaDaRota(rota: string): string {
  if (rota.startsWith('treino')) return 'treinos'
  if (rota.startsWith('buscar')) return 'buscar'
  if (rota === 'salvos' || rota === 'como-usar') return rota
  return 'home'
}

function desenhar(): void {
  const bruto = decodeURIComponent(window.location.hash.replace(/^#/, '')) || 'home'
  const corte = bruto.indexOf('~')
  const rota = corte >= 0 ? bruto.slice(0, corte) : bruto
  const extra = corte >= 0 ? bruto.slice(corte + 1) : ''

  pararBonecos()
  let tela: DocumentFragment
  if (rota.startsWith('cat-')) tela = telaLista(rota.slice(4), (['corpo', 'bola', 'ate2', '3mais'].includes(extra) ? extra : '') as Material)
  else if (rota.startsWith('ex-')) tela = telaExercicio(rota.slice(3), extra)
  else if (rota === 'treinos') tela = telaTreinos()
  else if (rota.startsWith('treino-')) tela = telaTreino(rota.slice(7))
  else if (rota === 'buscar') tela = telaBuscar(extra)
  else if (rota === 'salvos') tela = telaSalvos()
  else if (rota === 'como-usar') tela = telaComoUsar()
  else if (rota === 'demo') tela = telaDemo()
  else if (rota === 'comparar') tela = telaComparar(extra)
  else if (rota === 'revisao') tela = telaRevisao(extra)
  else tela = telaInicio()

  pararAnimacao()
  const main = document.getElementById('main')!
  main.replaceChildren(tela)

  const aba = abaDaRota(rota)
  document.querySelectorAll<HTMLElement>('.nav-item').forEach((b) => b.classList.toggle('active', b.dataset.route === aba))
  atualizarSeloSalvos()
  window.scrollTo(0, 0)

  // Exercícios na areia: o diagrama da quadra ganha animação (mesmo motor do Código da Areia).
  if (rota.startsWith('ex-a')) void animarDiagramaDoExercicio(main, Number(rota.slice(4)))
}

document.querySelectorAll<HTMLElement>('.nav-item').forEach((b) => {
  b.addEventListener('click', () => {
    const destino = `#${b.dataset.route}`
    if (window.location.hash === destino) desenhar()
    else window.location.hash = destino
  })
})

iniciarInstalacao()
aplicarTema()
window.addEventListener('hashchange', desenhar)
desenhar()

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('/sw.js').catch(() => undefined) })
}
