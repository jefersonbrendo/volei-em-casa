type Valor = string | number | boolean | EventListener | undefined | null
export type Atributos = Record<string, Valor>
export type Filho = Node | string | null | undefined | false

/**
 * Cria um elemento. `cls` define a classe, `html` define conteúdo FIXO do próprio código
 * (ícones SVG), `onXxx` registra evento e o resto vira atributo.
 * Textos vindos de dados entram sempre como filhos string (textContent), nunca em `html`.
 */
export function h<K extends keyof HTMLElementTagNameMap>(tag: K, attrs?: Atributos | null, ...filhos: Filho[]): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag)
  for (const [chave, valor] of Object.entries(attrs ?? {})) {
    if (valor === undefined || valor === null || valor === false) continue
    if (chave === 'cls') el.className = String(valor)
    else if (chave === 'html') el.innerHTML = String(valor)
    else if (chave.startsWith('on') && typeof valor === 'function') el.addEventListener(chave.slice(2).toLowerCase(), valor)
    else el.setAttribute(chave, valor === true ? '' : String(valor))
  }
  for (const f of filhos) {
    if (f === null || f === undefined || f === false) continue
    el.append(typeof f === 'string' ? document.createTextNode(f) : f)
  }
  return el
}

export function svg(conteudo: string, classe = ''): string {
  return `<svg class="${classe}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${conteudo}</svg>`
}

/** Ícones usados nas telas novas (mesmo traço dos ícones do app). */
export const ICONES = {
  voltar: '<polyline points="15 18 9 12 15 6"/>',
  avancar: '<polyline points="9 18 15 12 9 6"/>',
  cadeado: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  cadeadoAberto: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/>',
  relogio: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  caixa: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
  alvo: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  ferramenta: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  lista: '<line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
  alerta: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  camadas: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  compartilhar: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
  chat: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/>',
  chave: '<circle cx="8" cy="15" r="4"/><line x1="10.85" y1="12.15" x2="19" y2="4"/><line x1="18" y1="5" x2="20" y2="7"/><line x1="15" y1="8" x2="17" y2="10"/>',
  engrenagem: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
} as const

/** Ícone de cada categoria do Treino em Casa. */
export const ICONES_CATEGORIA: Record<string, string> = {
  'Com bola': '<circle cx="12" cy="12" r="9"/><path d="M12 3a14 14 0 0 0 0 18M3 12h18"/><path d="M5 5.5c4 3.5 10 3.5 14 0M5 18.5c4-3.5 10-3.5 14 0"/>',
  'Impulsão': '<line x1="12" y1="20" x2="12" y2="5"/><polyline points="6 11 12 5 18 11"/><line x1="7" y1="21" x2="17" y2="21"/>',
  'Força': '<path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11"/>',
  'Agilidade': '<polyline points="4 17 9 9 14 17 20 6"/><polyline points="15 6 20 6 20 11"/>',
  'Coordenação': '<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>',
  'Mobilidade': '<path d="M20 12a8 8 0 1 1-2.4-5.7"/><polyline points="20 4 20 9 15 9"/>',
}
