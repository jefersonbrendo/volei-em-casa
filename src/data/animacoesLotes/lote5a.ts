/** Lote 5 (parte A): exercícios 165 a 174 (transição e side-out) — o 167 está em src/data/animacoes.ts. */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, pausa, s } from './ajudantes'

export const LOTE_5A: Record<number, Animacao> = {
  // 165 · Defesa + Levantamento + Contra-ataque 4: transição a partir de 2 defensores no fundo
  165: {
    bolaInicial: 'seta2.a',
    passos: [
      // 1. Sem bloqueio, é mais fácil defender, mas o levantamento fica mais difícil: os dois estão longe da rede.
      passo(1, [j('J2', [148.9, 33.8], 0.01), pausa(1.4)]),
      // 2. L1 levanta para A1; J2 retira da rede e para aos 5,5 m ao lado de J1.
      passo(2, [j('J2', 'seta1.b', 1.4), s('seta1', 1.4)]),
      // 3. A1 ataca (ex.: bate forte em cima de J1).
      passo(3, [b('seta2.b', { de: 'seta2.a', dur: 1.4 }), s('seta2', 1.4)]),
      // 4. No instante em que a bola vai na direção de J1, J2 dispara em sprint rumo à Zona de Levantamento.
      passo(4, [j('J2', 'seta4.b', 1.4), s('seta4', 1.4)], { junto: 0.2 }),
      // 5. J1 defende bem alto, J2 freia, levanta e J1 conclui o contra-ataque.
      passo(5, [b('seta3.b', { de: 'seta3.a', alta: true, dur: 2.2 }), s('seta3', 2.2), b('seta6.b', { de: 'seta6.a', alta: true, dur: 1.4, atraso: 2.3 }), s('seta6', 1.4, 2.3), j('J1', 'seta7.b', 1.4, 1.4), s('seta7', 1.4, 1.4), b('seta9.b', { de: 'seta9.a', dur: 1.0, atraso: 3.8 }), s('seta9', 1.0, 3.8)]),
    ],
  },

  // 166 · Desafio sob pressão "Muralha da Areia": só pontua quem defende e vira!
  166: {
    passos: [
      // 1. Só o lado direito (Muralha) marca pontos: saca, defende o ataque e converte o contra-ataque.
      esperar(1, 1.4),
      // 2. Bônus de defesa espetacular: contra-ataque após peixinho ou busca de lob na linha de 8 m vale 2 pontos.
      esperar(2, 1.2),
      // 3. Se a Muralha defende e vira o ponto, o treinador lança uma "bola extra de pressão" (rally completo ao lado).
      passo(3, [
        b('seta1.b', { de: [262, 72], alta: true, dur: 3.0 }), s('seta1', 3.0),
        b('seta2.b', { de: 'seta2.a', dur: 1.4, atraso: 3.2 }), s('seta2', 1.4, 3.2),
        b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.9, atraso: 4.8 }), s('seta3', 1.9, 4.8),
        b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.4, atraso: 6.8 }), s('seta4', 1.4, 6.8),
        b('seta5.b', { de: 'seta5.a', dur: 1.0, atraso: 8.3 }), s('seta5', 1.0, 8.3),
      ]),
      // 4. Se a dupla atacante mata o side-out, não ganha ponto, mas rouba o lado da Muralha.
      esperar(4, 1.2),
      // 5. Vence a primeira dupla a alcançar 10 pontos de defesa + contra-ataque.
      esperar(5, 1.4),
    ],
  },

  // ───── SIDE-OUT (continuação) ─────
  // 168 · Side-out completo em ritmo de jogo a partir de saque real
  168: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 executa um saque por cima oficial da linha de 8 m, buscando qualquer ponto da meia-quadra esquerda.
      passo(1, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 2. J1 e J2 definem na chamada verbal ("MINHA!" / "VAI!") antes da bola cruzar a rede.
      esperar(2, 0.9),
      // 3. O receptor escolhido se desloca, planta os pés e envia a recepção alta para a zona central.
      passo(3, [b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.7 }), s('seta2', 1.7)]),
      // 4. O parceiro chega ao centro e levanta na medida; o receptor faz a aproximação e finaliza fugindo de B1.
      passo(4, [j('J1', 'seta3.b', 1.4), s('seta3', 1.4), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 1.4 }), s('seta5', 1.4, 1.4), j('J2', 'seta6.b', 1.4, 1.5), s('seta6', 1.4, 1.5), b('seta8.b', { de: 'seta8.a', dur: 1.0, atraso: 2.9 }), s('seta8', 1.0, 2.9)]),
      // 5. Após 6 saques (3 em J1 e 3 em J2), as duplas invertem de função.
      passo(5, [j('J1', 'S1', 2.8), j('S1', 'J1', 2.8), j('J2', 'B1', 2.8), j('B1', 'J2', 2.8)]),
    ],
  },

  // 169 · Side-out com recepção fora da zona (passe preso aos 4 e 5 metros)
  169: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 saca forte em J1; J1 amortece, fazendo a bola subir alta no cone de 4,5 m (passe preso no meio-fundo).
      passo(1, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0), b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.4, atraso: 3.2 }), s('seta2', 1.4, 3.2)]),
      // 2. J2 não corre para a fita: lê o passe curto, vai direto ao cone de 4,5 m e levanta em diagonal, de dentro para fora.
      passo(2, [j('J2', 'seta3.b', 1.2), s('seta3', 1.2), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.6, atraso: 1.0 }), s('seta5', 1.6, 1.0)]),
      // 3. Vendo que J2 levanta lá dos 4,5 m, J1 espera no fundo e freia a chamada mais longe da rede.
      passo(3, [j('J1', 'seta6.b', 1.4), s('seta6', 1.4)]),
      // 4. J1 salta aos 2,5 m da rede e ataca com arco alto e topspin, enquanto B1 faz o "pulling".
      passo(4, [b('seta8.b', { de: 'seta8.a', alta: true, dur: 2.0 }), s('seta8', 2.0), j('B1', 'seta9.b', 1.4), s('seta9', 1.4)]),
      // 5. Realizam 8 bolas e trocam de lado.
      passo(5, [j('J1', 'S1', 2.8), j('S1', 'J1', 2.8), j('J2', 'B1', 2.8), j('B1', 'J2', 2.8)]),
    ],
  },

  // 170 · Side-out com recepção espirrada na lateral (levantamento de ponta a ponta)
  170: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 saca aberto na linha lateral de J1; a recepção espirra para fora, na direção do cone lateral externo.
      passo(1, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0), b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.4, atraso: 3.2 }), s('seta2', 1.4, 3.2)]),
      // 2. J2 dispara até o cone fora da linha lateral, planta o pé externo e levanta alto para dentro da quadra.
      passo(2, [j('J2', 'seta3.b', 1.8), s('seta3', 1.8), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.6, atraso: 1.8 }), s('seta5', 1.6, 1.8)]),
      // 3. J1 dá 2 passos para DENTRO da quadra antes de virar para atacar (entrando de dentro para fora).
      passo(3, [j('J1', 'seta6.b', 1.4), s('seta6', 1.4)]),
      // 4. J1 salta equilibrado, longe da antena, e ataca na diagonal ou na paralela da quadra direita.
      passo(4, [b('seta7.b', { de: 'seta7.a', dur: 1.1 }), s('seta7', 1.1)]),
      // 5. 4 bolas espirradas na esquerda e 4 na direita; depois invertem as duplas.
      passo(5, [j('J1', 'S1', 2.8), j('S1', 'J1', 2.8), j('J2', 'D1', 2.8), j('D1', 'J2', 2.8)]),
    ],
  },

  // 171 · Side-out contra bloqueio e defesa viva (leitura + chamada do levantador)
  171: {
    bolaInicial: { ref: 'D1', dx: -6, dy: -3 },
    passos: [
      // 1. Antes do saque de D1, B1 faz o sinal secreto nas costas (fechar linha, fechar diagonal ou retirar em falso bloqueio).
      esperar(1, 1.4),
      // 2. D1 saca firme; J1 (ou J2) recepciona no centro da quadra, a 1,5 m da rede.
      passo(2, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0), j('D1', 'seta2.b', 1.8, 1.0), s('seta2', 1.8, 1.0), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta3', 1.6, 3.2)]),
      // 3. Enquanto o parceiro levanta a bola, ele já levanta os olhos para ler o que B1 e D1 fazem do outro lado.
      passo(3, [b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.4 }), s('seta4', 1.4)]),
      // 4. Assim que a bola sobe, o levantador grita a chamada tática ("LINHA LIVRE!", "CRUZADO CURTO!", ...).
      passo(4, [j('J1', 'seta5.b', 1.4), s('seta5', 1.4)]),
      // 5. O atacante combina a visão periférica com o grito do parceiro e finaliza o side-out; trocam a cada 6 saques.
      passo(5, [b('seta7.b', { de: 'seta7.a', dur: 1.0 }), s('seta7', 1.0), j('J1', 'D1', 2.8, 1.6), j('D1', 'J1', 2.8, 1.6), j('J2', 'B1', 2.8, 1.6), j('B1', 'J2', 2.8, 1.6)]),
    ],
  },

  // 172 · Transição básica da defesa para o contra-ataque (defender, abrir e atacar)
  172: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. L1 levanta para A1 na esquerda; B1 salta no bloqueio na rede direita.
      passo(1, [b([119.5, 34.5], { alta: true, dur: 1.8 }), j('B1', [149, 25], 0.4, 1.2), j('B1', [149, 31], 0.4, 1.6)]),
      // 2. A1 ataca na direção de J1 aos 5,5 m da rede.
      passo(2, [b('seta1.b', { de: 'seta1.a', dur: 1.4 }), s('seta1', 1.4)]),
      // 3. Passo 1 (a defesa alta): J1 sobe um arco alto (4,5 m) para a Zona Alvo central e grita "SUBIU!".
      passo(3, [b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.9 }), s('seta2', 1.9)]),
      // 4. Passo 2 (saída da rede do bloqueador): B1 aterrissa, gira os ombros, corre até a Zona Alvo e para os pés para levantar.
      passo(4, [j('B1', 'seta3.b', 1.4), s('seta3', 1.4), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 1.4 }), s('seta5', 1.4, 1.4)]),
      // 5. Passo 3 (abertura e ataque do defensor): J1 abre 1 passo para a lateral, chama a bola e acelera para o contra-ataque.
      passo(5, [j('J1', 'seta6.b', 1.4), s('seta6', 1.4), b('seta7.b', { de: 'seta7.a', dur: 1.0, atraso: 1.4 }), s('seta7', 1.0, 1.4)]),
    ],
  },

  // 173 · Transição do bloqueador que sai da rede para atacar (após toque no bloco ou defesa do parceiro)
  173: {
    bolaInicial: 'seta1.a',
    passos: [
      // 1. Quando o bloqueador tem que atacar o contra-ataque: toque no bloqueio ou "BATE VOCÊ!" de J1 caído no fundo.
      esperar(1, 1.4),
      // 2. A1 ataca e a bola raspa no bloqueio de B1 (ou J1 salva caindo longe no fundo).
      passo(2, [b('seta1.b', { dur: 0.7 }), s('seta1', 0.7), j('B1', [149, 28], 0.35, 0.2), j('B1', [149, 33], 0.35, 0.55)]),
      // 3. Assim que B1 toca o chão após o salto, J1 grita "ABRE QUE EU LEVANTO!".
      passo(3, [b([210.1, 93.4], { de: [141.2, 33.3], alta: true, dur: 2.2 })]),
      // 4. B1 não fica colado na fita: abre o quadril e recua em 2 passadas na diagonal até o cone de 2,5 m.
      passo(4, [j('B1', 'seta2.b', 1.4), s('seta2', 1.4)]),
      // 5. Do cone, B1 vira de frente e faz a chamada de 2 passos, atacando o levantamento de J1.
      passo(5, [b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.8 }), s('seta4', 1.8), j('B1', 'seta5.b', 1.0, 0.8), s('seta5', 1.0, 0.8), b('seta7.b', { de: 'seta7.a', dur: 1.0, atraso: 2.0 }), s('seta7', 1.0, 2.0)]),
    ],
  },

  // 174 · Quebra de padrão: inversão de papéis quando o bloqueador defende a 1ª bola na rede
  174: {
    bolaInicial: 'seta1.a',
    passos: [
      // 1. No padrão normal, J1 defende e B1 levanta; e se o PRÓPRIO B1 der o 1º toque de defesa?
      esperar(1, 1.4),
      // 2. A1 joga a bola em cima de B1 aos 2,5 m da rede (B1 iniciando a retirada ou um buraco curto).
      passo(2, [b('seta1.b', { dur: 1.2 }), s('seta1', 1.2)]),
      // 3. B1 reage no reflexo, defende a bola para o alto no centro da quadra e grita "AJUDA! LEVANTA!".
      passo(3, [b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.8 }), s('seta2', 1.8)]),
      // 4. Gatilho de inversão: J1 vê o 1º toque de B1 e dispara em sprint do fundo até a rede para levantar.
      passo(4, [j('J1', 'seta3.b', 1.5), s('seta3', 1.5)], { junto: 0.3 }),
      // 5. B1 se levanta da areia, abre 2 passos para a lateral e ATACA a bola no 3º toque.
      passo(5, [j('B1', 'seta5.b', 1.0), s('seta5', 1.0), b('seta6.b', { de: 'seta6.a', alta: true, dur: 1.4 }), s('seta6', 1.4), b('seta7.b', { de: 'seta7.a', dur: 1.0, atraso: 1.5 }), s('seta7', 1.0, 1.5)]),
    ],
  },
}
