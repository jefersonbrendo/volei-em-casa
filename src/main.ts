import { iniciarInstalacao } from './ui/instalar'
import './estilos/base.css'
import './estilos/acesso.css'
import './estilos/treino-casa.css'
import './estilos/animacao.css'
import './estilos/app.css'
import './estilos/marca.css'
import './estilos/competicao.css'
import { aplicarTema } from './telas/comum'
import { atualizarSeloSalvos, telaExercicio } from './telas/exercicio'
import { telaInicio } from './telas/inicio'
import { telaLista, type Material } from './telas/lista'
import { telaBuscar, telaComoUsar, telaConfig, telaSalvos } from './telas/outras'
import { telaTreino, telaTreinos } from './telas/treinos'
import { telaComparar, telaDemo, telaFluidez, telaRevisao } from './telas/demo'
import { telaDemo3d } from './telas/demo3d'
import { telaCompeticao, telaJogoCompeticao, telaPlacar, liberarTela } from './telas/competicao'
import { aplicarSenhaDaUrl, estaLiberado, EXTRA_COMPETICAO } from './app/extras'
import { pararBonecos } from './animacao/registro'
import { animarDiagramaDaQuadra, animarDiagramaDoExercicio, pararAnimacao } from './ui/animacaoNaTela'

/** Endereços: #home, #cat-N[~corpo|~bola], #ex-ID[~voltar], #treinos, #treino-ID, #buscar[~termo], #salvos, #como-usar, #config */
function abaDaRota(rota: string): string {
  if (rota === 'comp' || rota.startsWith('jogo-') || rota === 'placar') return 'comp'
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
  if (rota !== 'placar') liberarTela()
  document.body.classList.toggle('modo-placar', rota === 'placar')
  let tela: DocumentFragment
  if (rota.startsWith('cat-')) tela = telaLista(rota.slice(4), (['corpo', 'bola', 'ate2', '3mais'].includes(extra) ? extra : '') as Material)
  else if (rota.startsWith('ex-')) tela = telaExercicio(rota.slice(3), extra)
  else if (rota === 'treinos') tela = telaTreinos()
  else if (rota.startsWith('treino-')) tela = telaTreino(rota.slice(7))
  else if (rota === 'buscar') tela = telaBuscar(extra)
  else if (rota === 'salvos') tela = telaSalvos()
  else if (rota === 'como-usar') tela = telaComoUsar()
  else if (rota === 'config') tela = telaConfig()
  else if (rota === 'comp') tela = telaCompeticao(extra)
  else if (rota.startsWith('jogo-')) tela = telaJogoCompeticao(rota.slice(5))
  else if (rota === 'placar') tela = telaPlacar(extra)
  else if (rota === 'demo') tela = telaDemo()
  else if (rota === 'demo3d') tela = telaDemo3d(extra)
  else if (rota === 'fluidez') tela = telaFluidez(extra)
  else if (rota === 'comparar') tela = telaComparar(extra)
  else if (rota === 'revisao') tela = telaRevisao(extra)
  else tela = telaInicio()

  pararAnimacao()
  const main = document.getElementById('main')!
  main.replaceChildren(tela)

  const abaComp = document.querySelector<HTMLElement>('.nav-item[data-route="comp"]')
  if (abaComp) abaComp.hidden = !estaLiberado(EXTRA_COMPETICAO.id)
  const aba = abaDaRota(rota)
  document.querySelectorAll<HTMLElement>('.nav-item').forEach((b) => b.classList.toggle('active', b.dataset.route === aba))
  atualizarSeloSalvos()
  window.scrollTo(0, 0)

  // Exercícios na areia: o diagrama da quadra ganha animação (mesmo motor do Código da Areia).
  if (rota.startsWith('ex-a')) void animarDiagramaDoExercicio(main, Number(rota.slice(4)))
  // Vôlei de quadra: a cena é montada no app, com o mesmo motor.
  if (rota.startsWith('ex-q')) animarDiagramaDaQuadra(main, Number(rota.slice(4).split('~')[0]))
}

document.querySelectorAll<HTMLElement>('.nav-item').forEach((b) => {
  b.addEventListener('click', () => {
    const destino = `#${b.dataset.route}`
    if (window.location.hash === destino) desenhar()
    else window.location.hash = destino
  })
})

aplicarSenhaDaUrl()
iniciarInstalacao()
aplicarTema()
window.addEventListener('hashchange', desenhar)
desenhar()

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('/sw.js').catch(() => undefined) })
}
