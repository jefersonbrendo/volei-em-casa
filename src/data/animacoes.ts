/**
 * LINHAS DO TEMPO DAS ANIMAÇÕES, indexadas pelo número do exercício.
 * Ficam separadas dos dados do exercício: o texto (como montar, passo a passo...) não é alterado.
 *
 * COMO FUNCIONA
 * - A cena (quadra, jogadores, cones, zonas e setas) vem do PDF: public/gem/diagramas/NNN.json.
 *   Para ver os ids de um exercício:
 *     python scripts/extrair-diagramas.py "<caminho do PDF>" --resumo 146
 * - Convenção do guia: seta VERMELHA = trajetória da bola; seta ESCURA pontilhada = deslocamento
 *   de jogador. Os números nos círculos dão a ordem (o 1.º círculo vermelho é a 1.ª seta vermelha).
 * - Cada passo da linha do tempo tem `texto: N`, o número do item do "Passo a passo" que ele ilustra.
 *   Enquanto o passo acontece, esse item fica destacado no texto.
 * - Ações de um passo rodam juntas (ou em sequência, com `seq: true`). `atraso` empurra uma ação.
 *   `junto: 0.8` faz o passo começar 0,8 s depois do INÍCIO do anterior (coisas simultâneas).
 * - Posições (`para`, `de`): id de jogador/cone/zona ('J1', 'cone1', 'zona1'), ponta de seta
 *   ('seta2.b' = chegada, 'seta2.a' = partida), ponto fixo [x, y] ou { ref, dx, dy } com deslocamento.
 *   Ids de jogador valem a posição INICIAL do desenho.
 * - Setas citadas aqui começam escondidas e se desenham no momento certo; as não citadas ficam
 *   sempre visíveis.
 * - Sem linha do tempo, ou com "reduzir movimento" ativado, o app mostra o diagrama estático.
 */
import type { Animacao } from '../lib/animacao/tipos'

/** Os 5 primeiros exercícios, aprovados na etapa 1 (não mexer). */
const PRIMEIROS_CINCO: Record<number, Animacao> = {
  // ───── SAQUE ─────
  // 35 · Saque por cima parado da linha de fundo (8 metros)
  35: {
    bolaInicial: { ref: 'J1', dx: 3, dy: -2 },
    passos: [
      // 1. J1 começa 1 passo atrás da linha de fundo entre os dois cones.
      { texto: 1, acoes: [{ tipo: 'pausa', dur: 1.2 }] },
      // 2. Arma o cotovelo, lança a bola à frente e dá 1 passo firme em direção à linha de fundo.
      {
        texto: 2,
        acoes: [
          { tipo: 'jogador', id: 'J1', para: [14, 72], dur: 0.9 },
          { tipo: 'seta', id: 'seta1', dur: 0.9 },
          { tipo: 'bola', de: { ref: 'J1', dx: 3, dy: -2 }, para: [19, 72], alta: true, dur: 0.9 },
        ],
      },
      // 3. Impulsiona, gira o quadril e o ombro e golpeia a bola no ponto mais alto.
      { texto: 3, acoes: [{ tipo: 'pausa', dur: 0.7 }] },
      // 4. A bola atravessa a quadra e cai na Zona Alvo.
      {
        texto: 4,
        acoes: [
          { tipo: 'bola', para: 'seta2.b', alta: true, dur: 2.0 },
          { tipo: 'seta', id: 'seta2', dur: 2.0 },
        ],
      },
      // 5. Após 8 saques, J1 corre para o outro lado e J2 assume a linha de saque.
      {
        texto: 5,
        acoes: [
          { tipo: 'jogador', id: 'J1', para: 'J2', dur: 2.4 },
          { tipo: 'jogador', id: 'J2', para: 'J1', dur: 2.4 },
        ],
      },
    ],
  },

  // ───── RECEPÇÃO / MANCHETE ─────
  // 56 · Recepção de saque por baixo oficial na zona de levantamento
  56: {
    bolaInicial: { ref: 'J2', dx: -4 },
    passos: [
      // 1. J2 executa um saque por baixo da linha de fundo direita, para a metade onde está J1.
      {
        texto: 1,
        acoes: [
          { tipo: 'bola', para: 'seta1.b', alta: true, dur: 2.2 },
          { tipo: 'seta', id: 'seta1', dur: 2.2 },
        ],
      },
      // 2. No instante em que J2 bate na bola, J1 faz o destrave (split-step).
      {
        texto: 2,
        junto: 0.15,
        seq: true,
        acoes: [
          { tipo: 'jogador', id: 'J1', para: [54, 69.5], dur: 0.2 },
          { tipo: 'jogador', id: 'J1', para: [54, 72], dur: 0.25 },
        ],
      },
      // 3. J1 lê a bola e ajusta os pés com passadas curtas, parando atrás dela.
      { texto: 3, junto: 1.0, acoes: [{ tipo: 'jogador', id: 'J1', para: [61, 70], dur: 1.0 }] },
      // 4. Manchete alta para a Zona Alvo a 1,5 m da rede.
      {
        texto: 4,
        acoes: [
          { tipo: 'bola', de: 'seta2.a', para: 'zona1', alta: true, dur: 1.3 },
          { tipo: 'seta', id: 'seta2', dur: 1.3 },
        ],
      },
      // 5. Após 8 saques, invertem sacador e receptor.
      {
        texto: 5,
        acoes: [
          { tipo: 'jogador', id: 'J1', para: 'J2', dur: 2.4 },
          { tipo: 'jogador', id: 'J2', para: 'J1', dur: 2.4 },
        ],
      },
    ],
  },

  // ───── ATAQUE ─────
  // 108 · Cortada de mão aberta a partir de bola lançada pelo levantador
  108: {
    bolaInicial: { ref: 'L1', dy: -3 },
    passos: [
      // 1. A1 aguarda no cone de 4 metros olhando para L1.
      { texto: 1, acoes: [{ tipo: 'pausa', dur: 1.0 }] },
      // 2. L1 lança a bola em arco alto para cair a 1,5 m da rede, na frente de A1.
      {
        texto: 2,
        acoes: [
          { tipo: 'bola', para: 'seta1.b', alta: true, dur: 1.8 },
          { tipo: 'seta', id: 'seta1', dur: 1.8 },
        ],
      },
      // 3. A1 espera a bola atingir o ponto mais alto e só então acelera os dois últimos passos.
      {
        texto: 3,
        junto: 0.9,
        acoes: [
          { tipo: 'jogador', id: 'A1', para: 'seta2.b', dur: 1.1 },
          { tipo: 'seta', id: 'seta2', dur: 1.1 },
        ],
      },
      // 4. A1 salta equilibrado e executa a cortada de mão aberta na Zona Alvo.
      {
        texto: 4,
        acoes: [
          { tipo: 'jogador', id: 'A1', para: [111, 31.5], dur: 0.3 },
          { tipo: 'jogador', id: 'A1', para: [113, 35.5], dur: 0.35, atraso: 0.3 },
          { tipo: 'bola', para: 'zona1', dur: 0.8, atraso: 0.25 },
          { tipo: 'seta', id: 'seta3', dur: 0.8, atraso: 0.25 },
        ],
      },
      // 5. Após 8 ataques de A1, trocam de função.
      {
        texto: 5,
        acoes: [
          { tipo: 'jogador', id: 'A1', para: 'L1', dur: 2.2 },
          { tipo: 'jogador', id: 'L1', para: 'A1', dur: 2.2 },
        ],
      },
    ],
  },

  // ───── DEFESA ─────
  // 146 · Defesa de ataque forte no corpo (amortecimento de ombros e quadril)
  146: {
    bolaInicial: { ref: 'A1', dy: -3 },
    passos: [
      // 1. J1 assume a base baixa aos 5,5 metros da rede.
      { texto: 1, acoes: [{ tipo: 'pausa', dur: 1.0 }] },
      // 2. A1 faz o autolançamento e bate uma cortada forte na linha do estômago/quadril de J1.
      {
        texto: 2,
        acoes: [
          { tipo: 'bola', para: 'seta1.a', alta: true, dur: 0.9 },
          { tipo: 'bola', para: 'seta1.b', dur: 0.55, atraso: 0.9 },
          { tipo: 'seta', id: 'seta1', dur: 0.55, atraso: 0.9 },
        ],
      },
      // 3. No contato, J1 NÃO empurra os braços: contrai o abdômen em "C" e cede com a plataforma.
      {
        texto: 3,
        junto: 1.3,
        acoes: [
          { tipo: 'jogador', id: 'J1', para: [231, 72], dur: 0.6 },
          { tipo: 'seta', id: 'seta2', dur: 0.6 },
        ],
      },
      // 4. A energia é absorvida e a bola sobe macia, caindo na Zona Alvo do centro da quadra.
      {
        texto: 4,
        acoes: [
          { tipo: 'bola', de: 'seta3.a', para: 'zona2', alta: true, dur: 1.9 },
          { tipo: 'seta', id: 'seta3', dur: 1.9 },
        ],
      },
      // 5. Realizam 8 pancadas seguidas e invertem os papéis.
      {
        texto: 5,
        acoes: [
          { tipo: 'jogador', id: 'A1', para: 'J1', dur: 2.4 },
          { tipo: 'jogador', id: 'J1', para: 'A1', dur: 2.4 },
        ],
      },
    ],
  },

  // ───── SIDE-OUT ─────
  // 167 · Engrenagem de side-out em ritmo controlado (passe, infiltração e ataque)
  167: {
    bolaInicial: { ref: 'S1', dx: -3 },
    passos: [
      // 1. S1 envia uma bola lançada em arco na direção de J1, aos 5,5 metros.
      {
        texto: 1,
        acoes: [
          { tipo: 'bola', para: 'seta1.b', alta: true, dur: 1.9 },
          { tipo: 'seta', id: 'seta1', dur: 1.9 },
        ],
      },
      // 2. J1 grita "MINHA!" e J2 inicia a corrida diagonal de infiltração até o cone central.
      {
        texto: 2,
        junto: 1.0,
        acoes: [
          { tipo: 'jogador', id: 'J2', para: 'seta3.b', dur: 1.5 },
          { tipo: 'seta', id: 'seta3', dur: 1.5 },
        ],
      },
      // 3. J1 recepciona alto para o centro, com 1 passo calmo de ajuste, esperando J2.
      {
        texto: 3,
        acoes: [
          { tipo: 'jogador', id: 'J1', para: [60, 44], dur: 0.9 },
          { tipo: 'bola', de: 'seta2.a', para: 'seta2.b', alta: true, dur: 1.4 },
          { tipo: 'seta', id: 'seta2', dur: 1.4 },
        ],
      },
      // 4. J2 estanca os pés no cone central e levanta alto para a entrada, a 1,5 m da rede.
      {
        texto: 4,
        acoes: [
          { tipo: 'bola', para: 'seta5.b', alta: true, dur: 1.2 },
          { tipo: 'seta', id: 'seta5', dur: 1.2 },
        ],
      },
      // 5. J1 acelera os dois últimos passos, salta e ataca mirando as Zonas Alvo do fundo direito.
      {
        texto: 5,
        acoes: [
          { tipo: 'jogador', id: 'J1', para: 'seta6.b', dur: 1.1 },
          { tipo: 'seta', id: 'seta6', dur: 1.1 },
          { tipo: 'bola', para: 'zona1', dur: 0.9, atraso: 1.0 },
          { tipo: 'seta', id: 'seta8', dur: 0.9, atraso: 1.0 },
          { tipo: 'seta', id: 'seta9', dur: 0.9, atraso: 1.0 },
        ],
      },
    ],
  },
}

/**
 * Os lotes (src/data/animacoesLotes/lote*.ts) entram sozinhos. Cada arquivo exporta `LOTE_*` (linhas do tempo por
 * número do exercício) e, se for o caso, `SEM_ANIMACAO_*` (exercícios que ficam estáticos, com o motivo).
 */
const LOTES = import.meta.glob<Record<string, Record<number, unknown>>>('./animacoesLotes/lote*.ts', { eager: true })

const exportados = (prefixo: string): Record<number, unknown>[] =>
  Object.values(LOTES).flatMap((m) => Object.entries(m).filter(([nome]) => nome.startsWith(prefixo)).map(([, v]) => v))

/** Todas as linhas do tempo, por número do exercício. */
export const ANIMACOES: Record<number, Animacao> = Object.assign({}, PRIMEIROS_CINCO, ...(exportados('LOTE_') as Record<number, Animacao>[]))

/** Exercícios que ficam só com o diagrama estático, e o motivo. */
export const SEM_ANIMACAO: Record<number, string> = Object.assign({}, ...(exportados('SEM_ANIMACAO_') as Record<number, string>[]))
