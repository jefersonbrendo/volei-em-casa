import { estado } from '../app/estado'
import { CATEGORIAS, ITENS, itemPorId, soCorpo, usaBola, type Item } from '../app/itens'
import { ChipVolume } from '../components/treinoCasa/ChipVolume'
import { IconesMaterial } from '../components/treinoCasa/IconesMaterial'
import { SilhuetaRegioes } from '../components/treinoCasa/SilhuetaRegioes'
import { TREINOS } from '../data/treinos'
import { ROTULO_REGIAO } from '../lib/treinoCasaTextos'
import { mostrarAviso } from '../ui/aviso'
import { criarBonecoV2 } from '../animacao/bonecoV2'
import { movimentoDoExercicio } from '../animacao/movimentos'
import { registrarAnimacao } from '../animacao/registro'
import { cabecalho } from '../ui/cabecalho'
import { h, svg, ICONES } from '../ui/dom'
import { ICONES_APP } from './comum'

const COR_NIVEL: Record<string, string> = { Iniciante: '#1E9E5A', 'Intermediário': '#E08A00', 'Avançado': '#E5352B' }
const CLASSE_NIVEL: Record<string, string> = { Iniciante: 'ini', 'Intermediário': 'int', 'Avançado': 'ava' }

interface Sequencia { itens: Item[]; nome: string }

/** De onde a pessoa veio decide o "anterior/próximo": o treino, a categoria filtrada ou os salvos. */
function sequenciaDe(item: Item, voltar: string): Sequencia {
  if (voltar.startsWith('treino-')) {
    const t = TREINOS.find((x) => x.id === voltar.slice(7))
    if (t) return { itens: t.itens.map(itemPorId).filter((i): i is Item => !!i), nome: t.nome }
  }
  if (voltar === 'salvos') {
    return { itens: estado.listaSalvos().map(itemPorId).filter((i): i is Item => !!i), nome: 'Salvos' }
  }
  const [rota, material] = voltar.split('~')
  const chave = rota?.startsWith('cat-') ? rota.slice(4) : ''
  const categoria = chave && chave !== 'todos' ? CATEGORIAS[Number(chave)] : item.categoria
  const itens = ITENS.filter((i) =>
    (!categoria || i.categoria === categoria) &&
    (!estado.nivel || i.nivel === estado.nivel) &&
    (material === 'corpo' ? soCorpo(i) : material === 'bola' ? usaBola(i) : true))
  return { itens: itens.some((i) => i.id === item.id) ? itens : ITENS.filter((i) => i.categoria === item.categoria), nome: item.categoria }
}

function botaoSalvar(item: Item): HTMLElement {
  const b = h('button', { cls: `bar-btn${estado.ehSalvo(item.id) ? ' active' : ''}`, html: svg(ICONES_APP.coracao) })
  const rotular = (): void => b.setAttribute('aria-label', estado.ehSalvo(item.id) ? 'Remover dos salvos' : 'Salvar exercício')
  rotular()
  b.addEventListener('click', () => {
    const salvo = estado.alternarSalvo(item.id)
    b.classList.toggle('active', salvo)
    rotular()
    atualizarSeloSalvos()
    mostrarAviso(salvo ? 'Salvo em Meus salvos.' : 'Removido dos salvos.')
  })
  return b
}

export function atualizarSeloSalvos(): void {
  const aba = document.querySelector('.nav-item[data-route="salvos"]')
  if (!aba) return
  let selo = aba.querySelector('.nav-badge')
  const total = estado.totalSalvos()
  if (!total) { selo?.remove(); return }
  if (!selo) { selo = h('span', { cls: 'nav-badge' }); aba.append(selo) }
  selo.textContent = String(total)
}

function blocoVisualCasa(item: Extract<Item, { tipo: 'casa' }>): HTMLElement {
  const ex = item.ex
  const parte = (rotulo: string, ...filhos: Array<HTMLElement | null>) => h('div', { cls: 'cda-visual-parte' }, h('p', { cls: 'cda-visual-rotulo' }, rotulo), ...filhos)
  const mov = movimentoDoExercicio(ex.numero)
  let demo: HTMLElement | null = null
  if (mov) {
    const total = ex.volume.repeticoes ?? 0
    const contador = h('b', null, '1')
    const reps = total ? h('span', { cls: 'vac-demo-reps' }, 'Repetição ', contador, ` de ${total}`) : h('span', { cls: 'vac-demo-reps' }, ex.volume.tempo ? `${ex.volume.series ? `${ex.volume.series} × ` : ''}${ex.volume.tempo}` : 'Em loop')
    const a = criarBonecoV2(mov, { regioes: ex.regioes, aoRepetir: (r) => { if (total) contador.textContent = String((r % total) + 1) } })
    registrarAnimacao(a.destruir)
    const lento = h('button', { cls: 'vac-lento', 'aria-pressed': 'false', type: 'button' }, '🐢 Câmera lenta')
    lento.addEventListener('click', () => {
      const on = lento.getAttribute('aria-pressed') !== 'true'
      lento.setAttribute('aria-pressed', String(on))
      a.velocidade(on ? 0.4 : 1)
    })
    demo = h('div', { cls: 'vac-demo' },
      h('p', { cls: 'vac-demo-rotulo' }, 'Veja o movimento'),
      a.el as unknown as HTMLElement,
      h('div', { cls: 'vac-demo-legenda' }, h('span', null, h('i', { cls: 'lg-halo' }), 'Região que trabalha'), a.temRastro ? h('span', null, h('i', { cls: 'lg-rastro' }), 'Trajetória') : null),
      h('div', { cls: 'vac-demo-ctrl' }, reps, lento),
    )
  }
  return h('div', null, demo, h('div', { cls: 'cda-visual' },
    parte('Material', IconesMaterial(ex.material, { comNome: true }), ex.materialNota ? h('p', { cls: 'cda-visual-nota' }, ex.materialNota) : null),
    parte('Volume', ChipVolume(ex.volume), ex.volumeNota ? h('p', { cls: 'cda-visual-nota' }, ex.volumeNota) : null),
    parte('Trabalha', h('div', { cls: 'cda-trabalha' }, SilhuetaRegioes(ex.regioes, { altura: 120 }), h('ul', { cls: 'cda-regioes-lista' }, ...ex.regioes.map((r) => h('li', null, ROTULO_REGIAO[r]))))),
  ))
}

function blocoVisualAreia(item: Extract<Item, { tipo: 'areia' }>): HTMLElement {
  const ex = item.ex
  const num = String(ex.numero).padStart(3, '0')
  const wrap = h('div', null)
  wrap.innerHTML = `
    <div class="ex-hero"><figure class="diag-hero"><img src="/gem/diagrams/${num}.png" alt=""><figcaption>${svg('<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/>')} Montagem na quadra</figcaption></figure></div>
    <div class="info-grid">
      <div class="info-tile">${svg(ICONES.relogio)}<div><small>Tempo</small><strong></strong></div></div>
      <div class="info-tile">${svg('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>')}<div><small>Jogadores</small><strong>Só você</strong></div></div>
      <div class="info-tile full">${svg(ICONES.caixa)}<div><small>Material</small><strong></strong></div></div>
    </div>`
  wrap.querySelector('img')!.setAttribute('alt', `Diagrama da quadra: ${ex.nome}`)
  const fortes = wrap.querySelectorAll('.info-tile strong')
  fortes[0]!.textContent = ex.tempo
  fortes[2]!.textContent = ex.material
  return wrap
}

export function telaExercicio(id: string, voltar: string): DocumentFragment {
  const item = itemPorId(id)
  const frag = document.createDocumentFragment()
  if (!item) { window.location.hash = '#home'; return frag }

  const destinoVoltar = voltar || `cat-${CATEGORIAS.indexOf(item.categoria)}`
  const seq = sequenciaDe(item, destinoVoltar)
  const pos = seq.itens.findIndex((i) => i.id === item.id)

  const topo = cabecalho({ titulo: item.nome, etiqueta: item.categoria.toUpperCase(), corEtiqueta: COR_NIVEL[item.nivel], detalhe: `• ${item.nivel}`, voltarPara: destinoVoltar })
  topo.append(h('div', { cls: 'hdr-actions-group' }, botaoSalvar(item)))
  frag.append(topo)

  const page = h('div', { cls: 'page ex-page' })
  if (pos >= 0) {
    page.insertAdjacentHTML('beforeend', `<div class="progresso"><div class="progresso-txt"><span></span></div><div class="progresso-barra"><i style="width:${((pos + 1) / seq.itens.length) * 100}%"></i></div></div>`)
    page.querySelector('.progresso-txt span')!.textContent = `Exercício ${pos + 1} de ${seq.itens.length} em ${seq.nome}`
  }
  page.append(
    h('h2', { cls: 'ex-titulo' }, item.nome),
    h('div', { cls: 'ex-sub' }, h('span', { cls: `pill pill-${CLASSE_NIVEL[item.nivel]}` }, item.nivel)),
    item.tipo === 'casa' ? blocoVisualCasa(item) : blocoVisualAreia(item),
  )

  type Aba = 'fazer' | 'corrigir' | 'variar'
  const ex = item.ex
  const abas: Array<[Aba, string]> = [['fazer', 'Como fazer']]
  if (ex.pontosAtencao?.length || ex.erroComum) abas.push(['corrigir', 'Corrigir'])
  abas.push(['variar', 'Variações'])
  let aba: Aba = 'fazer'

  const seg = h('div', { cls: 'seg', role: 'tablist' })
  const conteudo = h('div', null)
  const bloco = (icone: string, titulo: string, ...filhos: HTMLElement[]) => h('section', { cls: 'bloco' }, h('h3', { html: svg(icone) }, titulo), ...filhos)
  const caixa = (cls: string, texto: string, rotulo?: string) => h('div', { cls: `caixa ${cls}` }, rotulo ? h('strong', null, rotulo) : null, texto)
  const passos = (lista: string[]) => h('ul', { cls: 'step-list' }, ...lista.map((p, i) => h('li', { cls: 'step-item' }, h('span', { cls: 'step-num' }, String(i + 1)), h('span', { cls: 'step-text' }, p))))

  const pintar = (): void => {
    seg.querySelectorAll<HTMLElement>('button').forEach((b) => {
      const ativa = b.dataset.k === aba
      b.classList.toggle('active', ativa)
      b.setAttribute('aria-selected', String(ativa))
    })
    conteudo.replaceChildren()
    if (aba === 'fazer') {
      conteudo.append(bloco(ICONES.alvo, 'Objetivo', caixa('caixa-objetivo', ex.objetivo)))
      if (item.tipo === 'areia' && item.ex.comoMontar) conteudo.append(bloco(ICONES.ferramenta, 'Como montar', h('p', null, item.ex.comoMontar)))
      conteudo.append(bloco(ICONES.lista, 'Passo a passo', passos(ex.passoAPasso)))
      if (item.tipo === 'areia' && item.ex.meta) conteudo.append(bloco(ICONES.alvo, 'Meta para avançar', caixa('caixa-objetivo', item.ex.meta)))
    } else if (aba === 'corrigir') {
      if (ex.pontosAtencao?.length) {
        conteudo.append(bloco(ICONES.alerta, 'Pontos de atenção', h('ul', { cls: 'bullet-list' }, ...ex.pontosAtencao.map((p) => h('li', { cls: 'bullet-item' }, h('span', { cls: 'bullet-dot' }), h('span', null, p))))))
      }
      if (ex.erroComum) conteudo.append(bloco(ICONES.alerta, 'Erro mais comum', caixa('caixa-erro', ex.erroComum)))
    } else {
      conteudo.append(bloco(ICONES.camadas, 'Ajustar a dificuldade',
        caixa('caixa-facil', ex.variacaoFacil, 'Mais fácil'), h('div', { style: 'height:8px' }), caixa('caixa-dificil', ex.variacaoDificil, 'Mais difícil')))
    }
  }
  for (const [k, rotulo] of abas) {
    const b = h('button', { role: 'tab', 'data-k': k }, rotulo)
    b.addEventListener('click', () => { aba = k; pintar() })
    seg.append(b)
  }
  pintar()
  page.append(seg, conteudo)
  frag.append(page)

  // Barra de ações: anterior · salvar · próximo
  const anterior = pos > 0 ? seq.itens[pos - 1] : undefined
  const proximo = pos >= 0 && pos < seq.itens.length - 1 ? seq.itens[pos + 1] : undefined
  const ir = (alvo: Item): void => { window.location.hash = `#ex-${alvo.id}~${destinoVoltar}` }
  const bAnt = h('button', { cls: 'btn-sec', 'aria-label': 'Exercício anterior', html: svg(ICONES.voltar) })
  const bProx = h('button', { cls: 'btn-pri', 'aria-label': 'Próximo exercício', html: proximo ? `Próximo exercício ${svg(ICONES.avancar)}` : 'Fim da sequência' })
  if (anterior) bAnt.addEventListener('click', () => ir(anterior)); else bAnt.setAttribute('disabled', '')
  if (proximo) bProx.addEventListener('click', () => ir(proximo)); else bProx.addEventListener('click', () => { window.location.hash = `#${destinoVoltar}` })
  frag.append(h('div', { cls: 'acao-bar' }, h('div', { cls: 'acao-bar-inner' }, bAnt, bProx)))
  return frag
}
