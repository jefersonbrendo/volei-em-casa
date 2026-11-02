import { criarBoneco } from '../animacao/boneco'
import { MOVIMENTO_DO_EXERCICIO, MOVIMENTOS, movimentoDoExercicio } from '../animacao/movimentos'
import { criarBonecoV2 } from '../animacao/bonecoV2'
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
    if (m) for (const t of [0, 0.25, 0.5, 0.75]) tira.append(criarBonecoV2(m, { parado: true, t, regioes: ex.regioes }).el as unknown as HTMLElement)
    page.append(h('div', { cls: 'vac-rev-item' }, h('h4', null, `${ex.numero} · ${ex.nome} → ${nome}`), tira))
  }
  frag.append(page)
  return frag
}

/** #comparar~1,44,125 : boneco atual × boneco novo, lado a lado, com controles do novo. */
export function telaComparar(param: string): DocumentFragment {
  const frag = document.createDocumentFragment()
  frag.append(topoSimples('Boneco atual × novo', 'Prévia do visual melhorado'))
  const page = h('div', { cls: 'page' })
  for (const n of param.split(',').map(Number)) {
    const ex = TREINO_CASA.find((e) => e.numero === n)
    const m = movimentoDoExercicio(n)
    if (!ex || !m) continue
    const velho = criarBoneco(m)
    registrarAnimacao(velho.destruir)
    const reps = h('span', { cls: 'vac-demo-reps' }, 'Repetição ', h('b', null, '1'), ` de ${ex.volume.repeticoes ?? 10}`)
    const novo = criarBonecoV2(m, { regioes: ex.regioes, aoRepetir: (r) => { reps.querySelector('b')!.textContent = String((r % (ex.volume.repeticoes ?? 10)) + 1) } })
    registrarAnimacao(novo.destruir)
    const lento = h('button', { cls: 'vac-lento', 'aria-pressed': 'false' }, '🐢 Câmera lenta')
    lento.addEventListener('click', () => { const on = lento.getAttribute('aria-pressed') !== 'true'; lento.setAttribute('aria-pressed', String(on)); novo.velocidade(on ? 0.4 : 1) })
    page.append(
      h('h3', { cls: 'ex-titulo', style: 'font-size:1.1rem;margin:18px 0 8px' }, ex.nome),
      h('div', { cls: 'vac-comp' },
        h('div', null, h('h5', null, 'Atual'), h('div', { cls: 'vac-demo' }, velho.el as unknown as HTMLElement)),
        h('div', null, h('h5', null, 'Novo'), h('div', { cls: 'vac-demo' }, novo.el as unknown as HTMLElement)),
      ),
      h('div', { cls: 'vac-demo', style: 'margin-top:8px' },
        h('div', { cls: 'vac-demo-legenda' }, h('span', null, h('i', { cls: 'lg-halo' }), 'Região que trabalha'), h('span', null, h('i', { cls: 'lg-rastro' }), 'Trajetória')),
        h('div', { cls: 'vac-demo-ctrl' }, reps, lento),
      ),
    )
  }
  frag.append(page)
  return frag
}
