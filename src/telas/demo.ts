import { criarBoneco } from '../animacao/boneco'
import { MOVIMENTO_DO_EXERCICIO, MOVIMENTOS } from '../animacao/movimentos'
import { registrarAnimacao } from '../animacao/registro'
import { TREINO_CASA } from '../data/treinoCasa'
import { h } from '../ui/dom'
import { topoSimples } from './comum'

/**
 * Telas internas de conferência (não aparecem no menu):
 *  #demo .......... todos os movimentos animados
 *  #revisao~N ..... folha de quadros parados dos exercícios, de 20 em 20 (N = página)
 */
export function telaDemo(): DocumentFragment {
  const frag = document.createDocumentFragment()
  frag.append(topoSimples('Prévia das animações', `${Object.keys(MOVIMENTOS).length} movimentos`))
  const grade = h('div', { cls: 'vac-demo-grade' })
  for (const [nome, m] of Object.entries(MOVIMENTOS)) {
    const a = criarBoneco(m)
    registrarAnimacao(a.destruir)
    grade.append(h('div', { cls: 'vac-demo' }, a.el as unknown as HTMLElement, h('p', { cls: 'vac-demo-nome' }, nome)))
  }
  frag.append(h('div', { cls: 'page' }, grade))
  return frag
}

export function telaRevisao(param: string): DocumentFragment {
  const frag = document.createDocumentFragment()
  const lista = param.includes(',') ? param.split(',').map(Number).map((n) => TREINO_CASA.find((e) => e.numero === n)!).filter(Boolean) : TREINO_CASA.slice(Number(param || 0) * 20, Number(param || 0) * 20 + 20)
  const page = h('div', { cls: 'page vac-rev' })
  for (const ex of lista) {
    const nome = MOVIMENTO_DO_EXERCICIO[ex.numero] ?? '?'
    const m = MOVIMENTOS[nome]
    const tira = h('div', { cls: 'vac-rev-tira' })
    if (m) for (const t of [0, 0.25, 0.5, 0.75]) tira.append(criarBoneco(m, { parado: true, t }).el as unknown as HTMLElement)
    page.append(h('div', { cls: 'vac-rev-item' }, h('h4', null, `${ex.numero} · ${ex.nome} → ${nome}`), tira))
  }
  frag.append(page)
  return frag
}
