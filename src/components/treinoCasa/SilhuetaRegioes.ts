import type { RegiaoCasa } from '../../data/treinoCasa'
import { ROTULO_REGIAO, listarEmTexto, precisaVistaDeCostas } from '../../lib/treinoCasaTextos'
import { h } from '../../ui/dom'

type Regiao = Exclude<RegiaoCasa, 'corpo_inteiro'>

/**
 * Silhueta simples (sem rosto) dividida nas regiões. Cada parte tem data-regiao.
 * Cores: partes trabalhadas = laranja do app; o resto = cinza apagado do tema (claro e escuro).
 * Cada vista cabe numa caixa 80 × 180.
 */
function vistaDeFrente(): Array<[Regiao | null, string]> {
  return [
    [null, '<circle cx="40" cy="13" r="10"/>'],
    [null, '<rect x="35" y="22" width="10" height="8" rx="3"/>'],
    ['core', '<rect x="24" y="32" width="32" height="56" rx="10"/>'],
    ['ombros', '<ellipse cx="22" cy="37" rx="10" ry="8"/><ellipse cx="58" cy="37" rx="10" ry="8"/>'],
    ['bracos', '<rect x="9" y="45" width="10" height="58" rx="5"/><rect x="61" y="45" width="10" height="58" rx="5"/>'],
    [null, '<rect x="24" y="86" width="32" height="12" rx="6"/>'],
    ['pernas', '<rect x="25" y="96" width="14" height="78" rx="7"/><rect x="41" y="96" width="14" height="78" rx="7"/>'],
  ]
}

function vistaDeCostas(): Array<[Regiao | null, string]> {
  return [
    [null, '<circle cx="40" cy="13" r="10"/>'],
    [null, '<rect x="35" y="22" width="10" height="8" rx="3"/>'],
    ['costas', '<rect x="24" y="32" width="32" height="32" rx="10"/>'],
    ['core', '<rect x="24" y="62" width="32" height="26" rx="8"/>'],
    ['ombros', '<ellipse cx="22" cy="37" rx="10" ry="8"/><ellipse cx="58" cy="37" rx="10" ry="8"/>'],
    ['bracos', '<rect x="9" y="45" width="10" height="58" rx="5"/><rect x="61" y="45" width="10" height="58" rx="5"/>'],
    ['gluteos', '<ellipse cx="33" cy="96" rx="9.5" ry="10"/><ellipse cx="47" cy="96" rx="9.5" ry="10"/>'],
    ['pernas', '<rect x="25" y="104" width="14" height="70" rx="7"/><rect x="41" y="104" width="14" height="70" rx="7"/>'],
  ]
}

function desenhar(partes: Array<[Regiao | null, string]>, ativas: ReadonlySet<RegiaoCasa>, todas: boolean, deslocamento: number, vista: string): string {
  const grupos = partes.map(([regiao, formas]) => {
    if (!regiao) return `<g class="sil-neutro">${formas}</g>`
    const ativa = todas || ativas.has(regiao)
    return `<g class="sil-parte ${ativa ? 'sil-ativa' : 'sil-inativa'}" data-regiao="${regiao}" data-vista="${vista}">${formas}</g>`
  })
  return `<g transform="translate(${deslocamento} 0)">${grupos.join('')}</g>`
}

/**
 * Silhueta de frente. Se o exercício trabalha costas ou glúteos, mostra também a de costas,
 * lado a lado. `altura` em pixels (card ≈ 32, detalhe ≈ 120).
 */
export function SilhuetaRegioes(regioes: readonly RegiaoCasa[], { altura = 32 }: { altura?: number } = {}): HTMLElement {
  const ativas = new Set<RegiaoCasa>(regioes)
  const todas = ativas.has('corpo_inteiro')
  const comCostas = precisaVistaDeCostas(regioes)
  const largura = comCostas ? 170 : 80
  const nomes = listarEmTexto(regioes.map((r) => ROTULO_REGIAO[r].toLowerCase()))
  const corpo = desenhar(vistaDeFrente(), ativas, todas, 0, 'frente') + (comCostas ? desenhar(vistaDeCostas(), ativas, todas, 90, 'costas') : '')
  const el = h('span', { cls: 'cda-silhueta', role: 'img', 'aria-label': `Regiões trabalhadas: ${nomes}`, 'data-vistas': comCostas ? '2' : '1' })
  el.innerHTML = `<svg viewBox="0 0 ${largura} 180" height="${altura}" width="${Math.round((altura * largura) / 180)}" focusable="false" aria-hidden="true">${corpo}</svg>`
  return el
}
