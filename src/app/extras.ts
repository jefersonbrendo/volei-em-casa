import { sha256Hex } from './sha256'

/**
 * Extras vendidos à parte (order bump). Cada um é liberado no aparelho com uma senha.
 * Aqui fica só o hash SHA-256 da senha (minúscula, sem espaços), nunca a senha.
 * Gerar hash: node -e "console.log(require('crypto').createHash('sha256').update('senha'.trim().toLowerCase()).digest('hex'))"
 */
export interface Extra {
  id: string
  nome: string
  resumo: string
  /** Ex.: "R$ 9,90". Vazio = não mostra preço. */
  preco: string
  /** Link do checkout. Vazio = não mostra o botão de compra. */
  checkoutUrl: string
  hashes: string[]
}

export const EXTRA_COMPETICAO: Extra = {
  id: 'competicao',
  nome: 'Modo Competição',
  resumo: 'Placar inteligente + 17 jogos de competição para o racha, em casa, na quadra e na areia.',
  preco: '',
  checkoutUrl: '',
  hashes: ['2e213949f1053ba27e6f1610aafeb03d522b2c3a9543b57426b94744e9dcefe5'],
}

export const EXTRAS: Extra[] = [EXTRA_COMPETICAO]

const CHAVE = 'vac-extras'
const PARAMETRO = 'desbloquear'
const memoria = new Set<string>()

function lerLiberados(): Set<string> {
  const ids = new Set(memoria)
  try {
    const lista: unknown = JSON.parse(localStorage.getItem(CHAVE) ?? '[]')
    if (Array.isArray(lista)) for (const id of lista) if (typeof id === 'string') ids.add(id)
  } catch { /* sem armazenamento: vale só a memória desta visita */ }
  return ids
}

function liberar(id: string): void {
  memoria.add(id)
  try { localStorage.setItem(CHAVE, JSON.stringify([...lerLiberados(), id].filter((v, i, a) => a.indexOf(v) === i))) } catch { /* idem */ }
}

export function estaLiberado(id: string): boolean {
  return lerLiberados().has(id)
}

/** Confere a senha contra todos os extras e libera os que baterem. */
export function tentarSenha(senha: string): Extra[] {
  const limpa = senha.trim().toLowerCase()
  if (!limpa) return []
  const hash = sha256Hex(limpa)
  const certos = EXTRAS.filter((e) => e.hashes.includes(hash))
  for (const e of certos) liberar(e.id)
  return certos
}

/** Link com ?desbloquear=SENHA (para mandar no e-mail ou WhatsApp): libera e limpa a barra de endereços. */
export function aplicarSenhaDaUrl(): Extra[] {
  const url = new URL(window.location.href)
  const senha = url.searchParams.get(PARAMETRO)
  if (senha === null) return []
  const liberados = tentarSenha(senha)
  url.searchParams.delete(PARAMETRO)
  if (liberados.length && !url.hash) url.hash = `#comp`
  history.replaceState(null, '', url.pathname + url.search + url.hash)
  return liberados
}
