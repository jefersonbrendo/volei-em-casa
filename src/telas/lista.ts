import { estado } from '../app/estado'
import { CATEGORIAS, COR_CATEGORIA, DESCRICAO_CATEGORIA, ITENS, ehCategoriaAreia, pessoasMinimas, soCorpo, usaBola, type Categoria, type Item } from '../app/itens'
import { ICONE_MATERIAL } from '../components/treinoCasa/IconesMaterial'
import { cabecalho } from '../ui/cabecalho'
import { h, svg } from '../ui/dom'
import { ICONES_APP, iconeDaCategoria, linhaDoItem, vazio } from './comum'
import { ajudaDoNivel, chipsDeNivel, rotaDaCategoria } from './inicio'

export type Material = '' | 'corpo' | 'bola' | 'ate2' | '3mais'

const ICONE_PESSOAS = '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
const ICONE_PESSOA = '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'

function passaFiltro(i: Item, f: Material): boolean {
  if (f === 'corpo') return soCorpo(i)
  if (f === 'bola') return usaBola(i)
  if (f === 'ate2') return pessoasMinimas(i) <= 2
  if (f === '3mais') return pessoasMinimas(i) >= 3
  return true
}

/** Exercícios de uma categoria (ou de todas), com filtros de nível e de material. */
export function telaLista(chave: string, materialInicial: Material): DocumentFragment {
  const categoria: Categoria | '' = chave === 'todos' ? '' : (CATEGORIAS[Number(chave)] ?? '')
  let material: Material = materialInicial

  const base = ITENS.filter((i) => !categoria || i.categoria === categoria)
  const passaMaterial = (i: Item): boolean => passaFiltro(i, material)
  const filtrados = (): Item[] => base.filter((i) => passaMaterial(i) && (!estado.nivel || i.nivel === estado.nivel))

  const frag = document.createDocumentFragment()
  frag.append(cabecalho({ titulo: categoria || 'Todos os exercícios', etiqueta: categoria ? 'CATEGORIA' : 'EXERCÍCIOS', voltarPara: 'home' }))

  const page = h('div', { cls: 'page' })
  if (categoria) {
    page.append(h('div', { cls: 'secao-intro' },
      h('div', { cls: `secao-band ${COR_CATEGORIA[categoria]}` },
        h('div', { cls: 'secao-band-row' },
          h('span', { cls: 'secao-band-ico', html: svg(iconeDaCategoria(categoria)) }),
          h('h2', { cls: 'secao-band-nome' }, categoria),
        ),
      ),
      h('p', { cls: 'secao-desc' }, DESCRICAO_CATEGORIA[categoria]),
    ))
  }

  const lista = h('div', null)
  const desenhar = (): void => {
    lista.replaceChildren()
    const rotaAtual = `${rotaDaCategoria(categoria)}${material ? `~${material}` : ''}`
    const itens = filtrados()
    if (itens.length === 0) { lista.append(vazio(naQuadra ? 'Nenhum exercício com esses filtros. Tente outro nível ou número de pessoas.' : 'Nenhum exercício com esses filtros. Tente outro nível ou material.')); return }
    const grupos = categoria ? [categoria] : CATEGORIAS
    for (const g of grupos) {
      const doGrupo = itens.filter((i) => i.categoria === g)
      if (!doGrupo.length) continue
      if (!categoria) lista.append(h('div', { cls: 'grupo-nivel' }, g))
      lista.append(h('div', { cls: 'ex-list' }, ...doGrupo.map((i) => linhaDoItem(i, '', rotaAtual))))
    }
  }

  // Filtro de material
  const filtros = h('div', { cls: 'level-chips vac-filtro-material' })
  const naQuadra = !!categoria && ehCategoriaAreia(categoria)
  const opcoes: Array<[Material, string, string]> = naQuadra
    ? [['', 'Qualquer nº de pessoas', ''], ['ate2', 'Sozinho ou dupla', ICONE_PESSOA], ['3mais', '3 pessoas ou mais', ICONE_PESSOAS]]
    : [['', 'Qualquer material', ''], ['corpo', 'Só o corpo', ICONE_MATERIAL.corpo], ['bola', 'Com bola', ICONES_APP.bola]]
  for (const [valor, rotulo, icone] of opcoes) {
    const qtd = base.filter((i) => passaFiltro(i, valor)).length
    const chip = h('button', { cls: `chip chip-all${material === valor ? ' active' : ''}`, 'data-val': valor, html: `${icone ? svg(icone) : ''}${rotulo}` })
    if (qtd === 0) chip.setAttribute('disabled', '')
    chip.addEventListener('click', () => {
      material = valor
      filtros.querySelectorAll<HTMLElement>('.chip').forEach((b) => b.classList.toggle('active', b.dataset.val === valor))
      history.replaceState(null, '', `#${rotaDaCategoria(categoria)}${valor ? `~${valor}` : ''}`)
      desenhar()
    })
    filtros.append(chip)
  }

  let ajuda = ajudaDoNivel()
  const chips = chipsDeNivel((n) => base.filter((i) => passaMaterial(i) && (!n || i.nivel === n)).length, () => {
    const nova = ajudaDoNivel(); ajuda.replaceWith(nova); ajuda = nova
    desenhar()
  })

  desenhar()
  page.append(filtros, chips, ajuda, lista)
  frag.append(page)
  return frag
}
