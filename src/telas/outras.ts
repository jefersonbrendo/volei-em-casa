import { estado } from '../app/estado'
import { ITENS, itemPorId, normalizar, textoDeBusca, type Item } from '../app/itens'
import { h, svg } from '../ui/dom'
import { atualizarSeloSalvos } from './exercicio'
import { ICONES_APP, linhaDoItem, topoSimples, vazio } from './comum'

export function telaBuscar(consulta: string): DocumentFragment {
  const frag = document.createDocumentFragment()
  frag.append(topoSimples('Buscar', `${ITENS.length} exercícios`))
  const page = h('div', { cls: 'page' })
  const busca = h('div', { cls: 'search-wrap', html: svg(ICONES_APP.busca) })
  const campo = h('input', { type: 'search', cls: 'search-input', placeholder: 'Ex.: manchete, salto, parede, sem bola', 'aria-label': 'Buscar exercício' })
  campo.value = consulta
  busca.append(campo)
  const resultado = h('div', null)

  const indice = ITENS.map((i) => [i, textoDeBusca(i)] as const)
  const desenhar = (): void => {
    resultado.replaceChildren()
    const termos = normalizar(campo.value).split(/\s+/).filter(Boolean)
    if (!termos.length) { resultado.append(vazio('Digite o que quer treinar: manchete, toque, saque, salto, agilidade...')); return }
    const achados = indice.filter(([, texto]) => termos.every((t) => texto.includes(t))).map(([i]) => i)
    if (!achados.length) { resultado.append(vazio('Nenhum exercício encontrado. Tente outra palavra.')); return }
    resultado.append(h('div', { cls: 'grupo-nivel' }, 'Resultados ', h('small', null, String(achados.length))),
      h('div', { cls: 'ex-list' }, ...achados.map((i) => linhaDoItem(i, i.categoria, 'buscar'))))
  }
  campo.addEventListener('input', () => {
    history.replaceState(null, '', `#buscar~${encodeURIComponent(campo.value)}`)
    desenhar()
  })
  desenhar()
  page.append(busca, resultado)
  frag.append(page)
  setTimeout(() => { campo.focus(); campo.setSelectionRange(campo.value.length, campo.value.length) }, 50)
  return frag
}

export function telaSalvos(): DocumentFragment {
  const frag = document.createDocumentFragment()
  frag.append(topoSimples('Meus salvos', 'Toque no coração de um exercício para salvar'))
  const page = h('div', { cls: 'page' })
  const itens = estado.listaSalvos().map(itemPorId).filter((i): i is Item => !!i)
  if (!itens.length) {
    page.append(vazio('Você ainda não salvou nenhum exercício. Abra um exercício e toque no coração lá em cima.'))
  } else {
    const limpar = h('button', null, 'Limpar todos')
    let confirmar = false
    limpar.addEventListener('click', () => {
      if (!confirmar) { confirmar = true; limpar.textContent = 'Toque de novo para confirmar'; return }
      estado.limparSalvos(); atualizarSeloSalvos(); window.dispatchEvent(new HashChangeEvent('hashchange'))
    })
    page.append(h('div', { cls: 'fav-clear' }, limpar), h('div', { cls: 'ex-list' }, ...itens.map((i, n) => linhaDoItem(i, `${n + 1}º salvo`, 'salvos'))))
  }
  frag.append(page)
  return frag
}

export function telaComoUsar(): DocumentFragment {
  const frag = document.createDocumentFragment()
  frag.append(topoSimples('Como usar', 'Treine sozinho, com ou sem bola'))
  const page = h('div', { cls: 'page vac-uso' })
  const cards: Array<[string, string[]]> = [
    ['Por onde começar', [
      'Se nunca treinou sozinho, abra "Treinos prontos" e faça o "Primeiro treino com bola na parede".',
      'Não tem bola? Faça o "Treino sem bola e sem material".',
      'Toque em "Próximo exercício" para seguir a sequência até o fim.',
    ]],
    ['Na quadra de areia', [
      'Já joga e vai à quadra? Role a tela inicial até "Na quadra de areia" e escolha o fundamento do dia.',
      'Cada exercício mostra o desenho da quadra com a montagem. Toque no play para ver a movimentação.',
      'Use o filtro "Sozinho ou dupla" quando estiver só você ou com mais uma pessoa.',
      'Uma boa ordem: 1 de aquecimento, 2 ou 3 do fundamento escolhido e termine com um jogo reduzido.',
    ]],
    ['Quantas vezes por semana', [
      '3 a 4 treinos por semana, com um dia de descanso entre os treinos de salto.',
      'Comece pelo nível Iniciante. Quando conseguir fazer tudo com facilidade, passe para o Intermediário.',
    ]],
    ['Como ler cada exercício', [
      'Como fazer: o objetivo e o passo a passo.',
      'Corrigir: os pontos de atenção e o erro mais comum.',
      'Variações: como deixar mais fácil ou mais difícil.',
      'Os ícones mostram o material, a quantidade (séries × repetições ou tempo) e a parte do corpo que trabalha.',
    ]],
    ['Filtros', [
      'Escolha o seu nível na tela inicial: as categorias e as listas passam a mostrar só esse nível.',
      'Nas listas, use "Só o corpo" quando não tiver nada em casa, ou "Com bola" para treinar os fundamentos.',
    ]],
    ['Instalar no celular', [
      'iPhone: abra no Safari, toque em Compartilhar e depois em "Adicionar à Tela de Início".',
      'Android: abra no Chrome, toque nos três pontinhos e depois em "Instalar app" ou "Adicionar à tela inicial".',
    ]],
    ['Cuidados', [
      'Faça um aquecimento de mobilidade antes de saltar.',
      'Pare se sentir dor. Em caso de lesão ou condição de saúde, procure um profissional antes de treinar.',
    ]],
  ]
  for (const [titulo, linhas] of cards) {
    page.append(h('section', { cls: 'bloco vac-card' }, h('h3', null, titulo), h('ul', { cls: 'bullet-list' }, ...linhas.map((l) => h('li', { cls: 'bullet-item' }, h('span', { cls: 'bullet-dot' }), h('span', null, l))))))
  }
  frag.append(page)
  return frag
}
