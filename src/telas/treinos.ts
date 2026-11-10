import { itemPorId, type Item } from '../app/itens'
import { minutosDoTreino } from '../app/tempo'
import { TREINOS, type TreinoPronto } from '../data/treinos'
import { cabecalho, tituloDaPagina } from '../ui/cabecalho'
import { h, svg, ICONES } from '../ui/dom'
import { ICONES_APP, linhaDoItem, selo, topoSimples } from './comum'

export function itensDo(t: TreinoPronto): Item[] {
  return t.itens.map(itemPorId).filter((i): i is Item => !!i)
}

export function cartaoDoTreino(t: TreinoPronto): HTMLElement {
  const itens = itensDo(t)
  const b = h('button', { cls: 'vac-treino', 'data-id': t.id },
    h('span', { cls: 'vac-treino-ico', html: svg(ICONES_APP.calendario) }),
    h('span', { cls: 'vac-treino-corpo' },
      h('span', { cls: 'vac-treino-nome' }, t.nome),
      h('span', { cls: 'vac-treino-meta' }, selo(t.nivel), h('span', null, `Cerca de ${minutosDoTreino(itens)} min`)),
      h('span', { cls: 'vac-treino-onde' }, t.onde),
    ),
    h('span', { cls: 'chev', html: svg(ICONES.avancar) }),
  )
  b.addEventListener('click', () => { window.location.hash = `#treino-${t.id}` })
  return b
}

export function telaTreinos(): DocumentFragment {
  const frag = document.createDocumentFragment()
  frag.append(topoSimples('Treinos prontos', 'Sequências para fazer do começo ao fim'))
  const page = h('div', { cls: 'page' })
  page.append(
    h('div', { cls: 'vac-treinos' }, ...TREINOS.map(cartaoDoTreino)),
  )
  frag.append(page)
  return frag
}

export function telaTreino(id: string): DocumentFragment {
  const t = TREINOS.find((x) => x.id === id)
  const frag = document.createDocumentFragment()
  if (!t) { window.location.hash = '#treinos'; return frag }
  const itens = itensDo(t)

  frag.append(cabecalho('treinos'), tituloDaPagina(t.nome))
  const page = h('div', { cls: 'page' })
  page.append(
    h('div', { cls: 'vac-treino-topo' },
      h('p', { cls: 'vac-treino-resumo' }, t.resumo),
      h('p', { cls: 'vac-treino-meta' }, selo(t.nivel), h('span', null, `Cerca de ${minutosDoTreino(itens)} min`)),
      h('p', { cls: 'vac-treino-onde' }, t.onde),
    ),
  )
  const comecar = h('button', { cls: 'btn-pri vac-comecar', html: `${svg(ICONES_APP.play)} Começar o treino` })
  comecar.addEventListener('click', () => { if (itens[0]) window.location.hash = `#ex-${itens[0].id}~treino-${t.id}` })
  page.append(comecar, h('div', { cls: 'ex-list' }, ...itens.map((i) => linhaDoItem(i, '', `treino-${t.id}`))))
  frag.append(page)
  return frag
}
