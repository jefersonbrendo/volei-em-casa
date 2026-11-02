import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/400-italic.css'
import '@fontsource/bebas-neue/400.css'
import '../estilos/app.css'
import './guia.css'
import { criarBonecoV2, type Regiao } from '../animacao/bonecoV2'
import { movimentoDoExercicio } from '../animacao/movimentos'
import { PASSOS } from '../data/passos'
import { CATEGORIAS_CASA, TREINO_CASA, type CategoriaCasa, type ExercicioCasa } from '../data/treinoCasa'
import { formatarVolume, ROTULO_MATERIAL, ROTULO_REGIAO, listarEmTexto } from '../lib/treinoCasaTextos'
import { ICONES_CATEGORIA, h } from '../ui/dom'

/**
 * GUIA EM PDF (plano básico): os 195 exercícios de casa, com a pose do boneco em cada etapa.
 * Abrir /pdf.html no servidor de desenvolvimento e gerar com scripts/gerar-pdf.cjs.
 */

const CLASSE: Record<CategoriaCasa, string> = { 'Com bola': 'c-bola', 'Impulsão': 'c-impulsao', 'Força': 'c-forca', 'Agilidade': 'c-agilidade', 'Coordenação': 'c-coordenacao', 'Mobilidade': 'c-mobilidade' }
const FAIXA: Record<CategoriaCasa, string> = { 'Com bola': '#0e4b75', 'Impulsão': '#0b84c6', 'Força': '#f28a24', 'Agilidade': '#0b84c6', 'Coordenação': '#0e4b75', 'Mobilidade': '#f28a24' }
const DESCRICAO: Record<CategoriaCasa, string> = {
  'Com bola': 'Toque, manchete, saque, ataque e defesa com a bola, na parede ou sozinho.',
  'Impulsão': 'Saltos para chegar mais alto no ataque e no bloqueio.',
  'Força': 'Pernas, core e braços com o peso do corpo, para aguentar a areia.',
  'Agilidade': 'Primeiro passo, mudança de direção e deslocamento de defesa.',
  'Coordenação': 'Ritmo, equilíbrio e controle da bola com as mãos e os pés.',
  'Mobilidade': 'Tornozelo, quadril e ombro soltos antes e depois do treino.',
}
const PILL: Record<string, string> = { Iniciante: 'pill-ini', 'Intermediário': 'pill-int', 'Avançado': 'pill-ava' }
const QUADRA = '<svg class="quadra" viewBox="0 0 210 297" preserveAspectRatio="none" aria-hidden="true"><rect x="20" y="40" width="170" height="220" rx="2"/><line x1="20" y1="150" x2="190" y2="150"/></svg>'
const ico = (path: string): string => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`

function pose(n: number, t: number, regioes: Regiao[]): HTMLElement {
  const m = movimentoDoExercicio(n)
  const fig = h('figure')
  if (m) fig.append(criarBonecoV2(m, { parado: true, t, recorte: true, regioes }).el as unknown as Node)
  return fig
}

function capa(): HTMLElement {
  const el = h('section', { cls: 'pagina capa' })
  el.innerHTML = `${QUADRA}
    <span class="capa-selo">GUIA EM PDF</span>
    <h1>Vôlei de Areia<br><span>em Casa</span></h1>
    <p class="capa-sub">${TREINO_CASA.length} exercícios para treinar sozinho, com ou sem bola, com a imagem de cada etapa do movimento.</p>`
  const bonecos = h('div', { cls: 'capa-bonecos' })
  for (const [n, t] of [[1, 0.42], [31, 0.5], [125, 0.25]] as const) {
    const ex = TREINO_CASA.find((e) => e.numero === n)!
    bonecos.append(pose(n, t, ex.regioes))
  }
  el.append(bonecos, h('div', { cls: 'capa-rodape', html: `<span><b>6 categorias</b> · 3 níveis</span><span>Com bola · Impulsão · Força · Agilidade · Coordenação · Mobilidade</span>` }))
  return el
}

function abertura(): HTMLElement {
  const el = h('section', { cls: 'pagina abertura' })
  el.innerHTML = `
    <h2>Como usar este guia</h2>
    <p>Cada exercício tem o objetivo, o que você vai precisar, quanto fazer e as etapas do movimento com a imagem de cada uma. No fim de cada exercício estão o ritmo, o erro mais comum e como deixar mais fácil ou mais difícil.</p>
    <div class="niveis"><span class="pill pill-ini">Iniciante</span><span class="pill pill-int">Intermediário</span><span class="pill pill-ava">Avançado</span></div>
    <div class="cards">
      <div class="card"><h3>Por onde começar</h3><ul><li>Comece pelos exercícios Iniciante de cada categoria.</li><li>Quando fizer tudo com facilidade, passe para o Intermediário.</li><li>Monte um treino com 1 de mobilidade, 2 ou 3 com bola e 1 ou 2 de impulsão ou força.</li></ul></div>
      <div class="card"><h3>Quantas vezes por semana</h3><ul><li>3 a 4 treinos por semana.</li><li>Um dia de descanso entre os treinos de salto.</li><li>Treinos de 20 a 40 minutos já são suficientes para criar rotina.</li></ul></div>
      <div class="card"><h3>Material</h3><ul><li>Uma bola de vôlei e uma parede livre resolvem a maior parte dos exercícios com bola.</li><li>Cadeira firme, toalha e garrafas de água substituem equipamentos.</li><li>Chinelos servem como marcas no chão.</li></ul></div>
      <div class="card"><h3>Cuidados</h3><ul><li>Faça um aquecimento de mobilidade antes de saltar.</li><li>Pare se sentir dor.</li><li>Em caso de lesão ou condição de saúde, procure um profissional antes de treinar.</li></ul></div>
    </div>
    <h2 style="margin-top:8mm">O que tem no guia</h2>`
  const sum = h('div', { cls: 'sumario' })
  for (const c of CATEGORIAS_CASA) {
    const qtd = TREINO_CASA.filter((e) => e.categoria === c).length
    sum.append(h('div', { style: `background:${FAIXA[c]}` }, c, h('small', null, `${qtd} exercícios`)))
  }
  el.append(sum)
  return el
}

function aberturaCategoria(c: CategoriaCasa, lista: ExercicioCasa[]): HTMLElement {
  const el = h('section', { cls: `pagina cat ${CLASSE[c]}` })
  el.append(
    h('div', { cls: 'cat-ico', html: ico(ICONES_CATEGORIA[c] ?? '') }),
    h('h2', null, c),
    h('p', { cls: 'cat-desc' }, `${DESCRICAO[c]} ${lista.length} exercícios.`),
    h('ol', { cls: 'cat-lista' }, ...lista.map((e, i) => h('li', null, h('b', null, String(i + 1).padStart(2, '0')), `${e.nome} · ${e.nivel}`))),
  )
  return el
}

function exercicio(e: ExercicioCasa, ordem: number): HTMLElement {
  const p = PASSOS[e.numero]
  const el = h('article', { cls: 'ex', style: `--faixa:${FAIXA[e.categoria]}` })
  const material = e.material.map((m) => ROTULO_MATERIAL[m]).join(', ') + (e.materialNota ? ` (${e.materialNota})` : '')
  el.append(
    h('div', { cls: 'ex-topo' }, h('span', { cls: 'ex-num' }, `${e.categoria} · ${String(ordem).padStart(2, '0')}`), h('span', { cls: `pill ${PILL[e.nivel]}` }, e.nivel)),
    h('h3', null, e.nome),
    h('p', { cls: 'ex-obj' }, e.objetivo),
    h('div', { cls: 'ex-info' },
      h('span', null, h('b', null, 'Material: '), material),
      h('span', null, h('b', null, 'Quanto: '), formatarVolume(e.volume) + (e.volumeNota ? ` · ${e.volumeNota}` : '')),
      h('span', null, h('b', null, 'Trabalha: '), listarEmTexto(e.regioes.map((r) => ROTULO_REGIAO[r]))),
    ),
  )
  if (p) {
    const etapas = h('div', { cls: 'etapas', style: `grid-template-columns:repeat(${p.etapas.length}, 1fr)` })
    p.etapas.forEach((et, i) => etapas.append(h('div', { cls: 'etapa' }, pose(e.numero, et.t, e.regioes), h('h4', null, h('b', null, `${i + 1}`), et.titulo), h('p', null, et.texto))))
    el.append(etapas)
  }
  const rodape = h('div', { cls: 'ex-rodape' })
  if (p?.ritmo) rodape.append(h('div', { cls: 'box box-ritmo' + (e.erroComum ? '' : ' largo') }, h('b', null, 'Ritmo'), p.ritmo))
  if (e.erroComum) rodape.append(h('div', { cls: 'box box-erro' + (p?.ritmo ? '' : ' largo') }, h('b', null, 'Erro mais comum'), e.erroComum))
  rodape.append(h('div', { cls: 'box box-facil' }, h('b', null, 'Mais fácil'), e.variacaoFacil), h('div', { cls: 'box box-dificil' }, h('b', null, 'Mais difícil'), e.variacaoDificil))
  el.append(rodape)
  return el
}

function final(): HTMLElement {
  const el = h('section', { cls: 'pagina final' })
  el.innerHTML = `
    <h2>Quer treinar<br>com o app?</h2>
    <p>No plano completo, os exercícios ganham vida no celular:</p>
    <ul>
      <li>Animação de cada exercício, com câmera lenta</li>
      <li>Mais 240 exercícios para a quadra de areia, com o desenho da quadra animado</li>
      <li>Treinos prontos para fazer do começo ao fim</li>
      <li>Busca, filtros por nível e material, e exercícios salvos</li>
    </ul>
    <p class="aviso">Os exercícios deste guia não substituem a orientação de um profissional de educação física.</p>`
  return el
}

const guia = document.getElementById('guia')!
guia.append(capa(), abertura())
for (const c of CATEGORIAS_CASA) {
  const lista = TREINO_CASA.filter((e) => e.categoria === c)
  guia.append(aberturaCategoria(c, lista))
  const bloco = h('section', { cls: 'pagina' }, ...lista.map((e, i) => exercicio(e, i + 1)))
  guia.append(bloco)
}
guia.append(final())
document.body.dataset.pronto = '1'
