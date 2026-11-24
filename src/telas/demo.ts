import { criarBoneco, POSE_LADO, type Movimento, type Pose } from '../animacao/boneco'
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

/* ---------- #fluidez~nome: o mesmo movimento com a transição antiga (freando em cada pose) e a nova ---------- */

const suaveAntigo = (k: number): number => k * k * (3 - 2 * k)

/** Reproduz o jeito antigo: cada trecho entre poses começava e terminava parado. Vira uma lista densa de poses. */
function comoEraAntes(m: Movimento): Movimento {
  const quadros = m.poses.map((q) => ({ t: q.t, p: { ...POSE_LADO, ...q.p } as Pose }))
  const campos = Object.keys(POSE_LADO) as Array<keyof Pose>
  const em = (t: number): Pose => {
    for (let i = 0; i < quadros.length - 1; i++) {
      const a = quadros[i]!, b = quadros[i + 1]!
      if (t >= a.t && t <= b.t) {
        const k = suaveAntigo((t - a.t) / (b.t - a.t || 1))
        const r = { ...a.p }
        for (const c of campos) r[c] = a.p[c] + (b.p[c] - a.p[c]) * k
        return r
      }
    }
    return quadros[quadros.length - 1]!.p
  }
  const N = 120
  return { ...m, poses: Array.from({ length: N + 1 }, (_, i) => ({ t: i / N, p: em(i / N) })) }
}

export function telaFluidez(param: string): DocumentFragment {
  const nomes = Object.keys(MOVIMENTOS)
  const nome = nomes.includes(param) ? param : 'toqueAltoBaixo'
  const m = MOVIMENTOS[nome]!
  const frag = document.createDocumentFragment()
  frag.append(topoSimples('Antes × agora', 'Compare a fluidez do movimento'))
  const escolha = h('select', { cls: 'demo3d-select' }, ...nomes.map((n) => {
    const o = h('option', { value: n }, n) as HTMLOptionElement
    if (n === nome) o.selected = true
    return o
  }))
  escolha.addEventListener('change', () => { window.location.hash = `#fluidez~${(escolha as HTMLSelectElement).value}` })
  const antes = criarBonecoV2(comoEraAntes(m))
  const agora = criarBonecoV2(m)
  registrarAnimacao(antes.destruir)
  registrarAnimacao(agora.destruir)
  const lento = h('button', { cls: 'vac-lento', 'aria-pressed': 'false' }, 'Câmera lenta')
  lento.addEventListener('click', () => {
    const on = lento.getAttribute('aria-pressed') !== 'true'
    lento.setAttribute('aria-pressed', String(on))
    antes.velocidade(on ? 0.35 : 1); agora.velocidade(on ? 0.35 : 1)
  })
  frag.append(h('div', { cls: 'page' }, escolha,
    h('div', { cls: 'vac-comp' },
      h('div', null, h('h5', null, 'Antes'), h('div', { cls: 'vac-demo' }, antes.el as unknown as HTMLElement)),
      h('div', null, h('h5', null, 'Agora'), h('div', { cls: 'vac-demo' }, agora.el as unknown as HTMLElement)),
    ),
    h('div', { cls: 'vac-demo-ctrl', style: 'padding:12px 0' }, h('span', { cls: 'vac-demo-reps' }, 'Os dois começam juntos'), lento),
  ))
  return frag
}
