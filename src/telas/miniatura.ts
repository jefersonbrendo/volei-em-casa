import { criarAtleta } from '../animacao/atleta'
import { MOVIMENTOS, movimentoDoExercicio } from '../animacao/movimentos'
import type { Movimento } from '../animacao/boneco'
import type { Item } from '../app/itens'
import { h } from '../ui/dom'

/** Poses usadas na prévia dos exercícios de quadra, que não têm boneco próprio. Variam pelo número do exercício. */
const POSES_DA_QUADRA: Record<string, string[]> = {
  'Aquecimento': ['polichinelo', 'afundo', 'circulosOmbro'],
  'Deslocamento': ['deslocamentoLateral', 'arrancada', 'passosArrancada'],
  'Saque': ['saqueCimaParede', 'saqueViagem', 'saqueBaixoParede'],
  'Recepção': ['mancheteCima', 'manchetePassoFrente', 'mancheteParede'],
  'Levantamento de manchete': ['mancheteCima', 'mancheteBaixaCima'],
  'Levantamento de toque': ['toqueCima', 'levantamentoSuspensao', 'toquePassoFrente'],
  'Ataque': ['ataqueParede', 'aproximacaoAtaque', 'ataqueChao'],
  'Bloqueio': ['saltoBloqueio'],
  'Defesa': ['defesaParede', 'diagonalDefesa', 'defesaUmaMao'],
  'Side-out': ['mancheteCima', 'toqueCima', 'ataqueParede'],
  'Comunicação': ['toqueCima', 'mancheteCima'],
  'Tática': ['saqueCimaParede', 'ataqueParede', 'saltoBloqueio'],
  'Jogos reduzidos': ['ataqueParede', 'toqueCima', 'defesaParede'],
  'Condicionamento': ['agachamentoSalto', 'afundo', 'saltoAgrupado'],
  'Sozinho ou em dupla': ['toqueCima', 'lancamentoSaque', 'mancheteCima'],
}

const REDE = Array.from({ length: 12 }, (_, i) => `<line x1="${6 + i * 10}" y1="30" x2="${6 + i * 10}" y2="46"/>`).join('')
const CENA = `<svg class="cena-fundo" viewBox="0 0 120 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <circle class="cena-sol" cx="92" cy="22" r="15"/>
  <path class="cena-chao" d="M0 66 Q60 58 120 66 V90 H0 Z"/>
  <path class="cena-linha" d="M0 80 L120 72"/>
  <g class="cena-rede">${REDE}<line x1="4" y1="30" x2="116" y2="30"/><line x1="4" y1="38" x2="116" y2="38"/><line x1="4" y1="46" x2="116" y2="46"/></g>
  <line class="cena-poste" x1="4" y1="26" x2="4" y2="68"/><line class="cena-poste" x1="116" y1="26" x2="116" y2="68"/>
</svg>`

const CENA_CASA = `<svg class="cena-fundo" viewBox="0 0 120 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <rect class="cena-piso" x="0" y="68" width="120" height="22"/>
  <line class="cena-rodape" x1="0" y1="68" x2="120" y2="68"/>
  <path class="cena-tabua" d="M0 75 H120 M0 82 H120 M22 68 L14 90 M60 68 V90 M98 68 L106 90"/>
  <rect class="cena-janela" x="82" y="12" width="28" height="34" rx="1.5"/>
  <path class="cena-caixilho" d="M96 12 V46 M82 29 H110"/>
  <path class="cena-cortina" d="M78 9 H90 Q84 28 80 50 H78 Z M114 9 H102 Q108 28 112 50 H114 Z"/>
  <rect class="cena-quadro" x="30" y="16" width="16" height="12" rx="1"/>
  <path class="cena-movel" d="M4 68 V52 Q4 46 10 46 H26 Q32 46 32 52 V68 Z"/>
  <path class="cena-planta" d="M112 68 V60 M112 60 Q104 54 106 46 Q112 52 112 60 Q120 54 118 46 Q112 52 112 60"/>
</svg>`

function movimentoDoItem(item: Item): Movimento | undefined {
  if (item.tipo === 'casa') return movimentoDoExercicio(item.ex.numero)
  const poses = POSES_DA_QUADRA[item.categoria] ?? ['toqueCima']
  return MOVIMENTOS[poses[item.ex.numero % poses.length]!]
}

/** Prévia do exercício: atleta na pose do movimento, sobre uma cena de quadra. */
export function miniaturaDoItem(item: Item): HTMLElement {
  const emCasa = item.tipo === 'casa'
  const fig = h('figure', { cls: `foto mini cena cena-${item.ex.numero % 3}${emCasa ? ' cena-casa' : ''}`, html: emCasa ? CENA_CASA : CENA })
  const m = movimentoDoItem(item)
  if (m) fig.append(criarAtleta(m) as unknown as Node)
  return fig
}
