/** Lote 4 (parte C): exercícios 156 a 164 (defesa e transição). */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, s } from './ajudantes'

export const LOTE_4C: Record<number, Animacao> = {
  // 156 · Defesa com dois jogadores no fundo (divisão 50/50 após saída do bloqueio)
  156: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. J2 mostra a mão fechada atrás das costas (vai retirar da rede e jogar com 2 defensores no fundo).
      esperar(1, 1.4),
      // 2. Assim que L1 levanta a bola para A1, J1 ocupa o cone da metade inferior e grita "VEM PRA LINHA!".
      passo(2, [b('seta1.b', { alta: true, dur: 1.9 }), s('seta1', 1.9), j('J1', [214, 102], 0.6, 0.6)]),
      // 3. J2 retira rápido da rede até o cone da metade superior e estanca os pés ao mesmo tempo que J1.
      passo(3, [j('J2', 'seta2.b', 1.6), s('seta2', 1.6)]),
      // 4. Com os dois plantados lado a lado cobrindo 4 m cada um, A1 ataca em qualquer lugar da quadra.
      passo(4, [b('seta3.b', { de: 'seta3.a', dur: 1.0 }), s('seta3', 1.0)]),
      // 5. Quem está do lado da bola defende alto para a Zona Alvo central e o parceiro avança para levantar.
      passo(5, [b('zona3', { de: 'seta4.a', alta: true, dur: 1.8 }), s('seta4', 1.8), j('J2', 'zona3', 1.4, 0.5)]),
    ],
  },

  // 157 · Cobertura do ataque do próprio parceiro (recuperando o bloqueio adversário)
  157: {
    bolaInicial: { ref: 'J1', dx: 0, dy: -6 },
    passos: [
      // 1. J1 faz o levantamento para A1 na ponta esquerda.
      passo(1, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8)]),
      // 2. O que 90% dos amadores fazem após levantar? Ficam em pé olhando o ataque e levam o ponto.
      esperar(2, 1.4),
      // 3. J1 dá 2 passos em semicírculo atrás de A1 (a 2,5 m) e ABAIXA o quadril, quase tocando a areia.
      passo(3, [j('J1', 'seta2.b', 1.2), s('seta2', 1.2)]),
      // 4. A1 bate propositalmente contra o paredão de mãos de B1, para a bola rebater de volta na quadra esquerda.
      passo(4, [b('seta3.b', { de: 'seta3.a', dur: 0.6 }), s('seta3', 0.6), j('B1', [148, 27], 0.35, 0.2), j('B1', [148, 32], 0.35, 0.55), b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.4, atraso: 0.7 }), s('seta4', 1.4, 0.7)]),
      // 5. J1 salva a bola do bloqueio (1º toque) bem alta no centro, A1 levanta (2º) e J1 ataca (3º).
      passo(5, [b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4 }), s('seta5', 1.4)]),
    ],
  },

  // 158 · Defesa de bola que desvia na borda do bloqueio (reação e mudança de direção)
  158: {
    bolaInicial: 'seta1.a',
    passos: [
      // 1. Uma das bolas mais difíceis de defender: já armou a defesa na diagonal e a bola raspa no dedo do bloqueador.
      esperar(1, 1.4),
      // 2. L1 levanta para A1; B1 salta no bloqueio tentando tocar na bola e J1 faz o destrave no fundo.
      passo(2, [j('B1', [149, 28], 0.4), j('B1', [149, 34], 0.4, 0.4), j('J1', [225, 100], 0.3), j('J1', [225, 103], 0.3, 0.3)]),
      // 3. A1 bate mirando nas bordas das mãos de B1 (ou B1 abre as mãos em "spread block" para raspar na bola).
      passo(3, [b('seta1.b', { dur: 0.7 }), s('seta1', 0.7)]),
      // 4. Ao desviar na mão de B1 (1º toque), J1 freia, muda de direção, persegue a bola e a levanta alta para B1 atacar.
      passo(4, [j('J1', 'seta2.b', 1.4), s('seta2', 1.4), b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.6, atraso: 1.2 }), s('seta4', 1.6, 1.2)]),
      // 5. Lembrete: como tocou no bloqueio, o contato de J1 já é o 2º toque da dupla.
      esperar(5, 1.2),
    ],
  },

  // 159 · Defesa do "cut shot" extremo (diagonal curtíssima junto à antena)
  159: {
    bolaInicial: 'seta1.a',
    passos: [
      // 1. Com B1 trancando a paralela, o "cut shot" é a jogada favorita dos atacantes avançados.
      esperar(1, 1.4),
      // 2. J1 posiciona-se na diagonal a 4,5–5 m da rede.
      esperar(2, 1.0),
      // 3. Quando A1 sobe, J1 observa a velocidade do braço e o giro do polegar; ao ver o corte, dispara em diagonal.
      passo(3, [b('seta1.b', { dur: 1.4 }), s('seta1', 1.4), j('J1', 'seta2.b', 1.4, 0.5), s('seta2', 1.4, 0.5)]),
      // 4. No último passo, dentro da Zona Crítica, J1 mergulha estendendo o braço por baixo da bola.
      esperar(4, 0.8),
      // 5. A bola sobe alta para a Zona Alvo central, onde B1 (saindo do bloqueio) levanta para J1.
      passo(5, [b('zona2', { de: 'seta4.a', alta: true, dur: 1.8 }), s('seta4', 1.8), j('B1', 'zona2', 1.4, 0.8)]),
    ],
  },

  // 160 · Jogo de "Gato e Rato": finta de defesa para induzir o erro do atacante
  160: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. O atacante olha rápido para a defesa quando o levantamento sobe e depois precisa voltar os olhos para a bola.
      esperar(1, 1.4),
      // 2. Antes do saque, B1 mostra 1 dedo (vai bloquear a paralela); J1 sabe que defende a DIAGONAL.
      esperar(2, 1.0),
      // 3. Finta ("o queijo"): enquanto o levantamento sobe, J1 fica parado atrás de B1 na paralela, deixando a diagonal vazia.
      passo(3, [j('J1', 'zona3', 1.0)]),
      // 4. A1 vê a diagonal vazia e decide bater nela.
      passo(4, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8)]),
      // 5. Quando A1 levanta a cabeça para saltar, J1 corre em silêncio para a diagonal e a bola vem direto no peito dele.
      passo(5, [j('J1', 'seta2.b', 1.4), s('seta2', 1.4), b('seta3.b', { de: 'seta3.a', dur: 1.0, atraso: 0.8 }), s('seta3', 1.0, 0.8), b('zona2', { de: 'seta4.a', alta: true, dur: 1.8, atraso: 1.9 }), s('seta4', 1.8, 1.9)]),
    ],
  },

  // 161 · Defesa com vento forte (ajuste de profundidade contra o vento e a favor)
  161: {
    bolaInicial: [121.2, 36.1],
    passos: [
      // 1. O vento muda completamente a geometria da defesa no vôlei de praia.
      esperar(1, 1.4),
      // 2. Cenário 1 (A1 ataca CONTRA o vento): a bola é freada e cai mais curta, então J1 adianta a base para os 4,5 m.
      passo(2, [j('J1', [185, 78], 0.9), b('seta2.b', { dur: 1.4, atraso: 0.6 }), s('seta2', 1.4, 0.6)]),
      // 3. Na defesa do Cenário 1, J1 amortece a bola para os 2,5 m da rede para o vento não jogá-la para o outro lado.
      passo(3, [b('zona2', { de: 'seta3.a', alta: true, dur: 1.6 }), s('seta3', 1.6)]),
      // 4. Cenário 2 (ataque A FAVOR do vento): J1 recua a base para os 6,5 m e deixa sair as bolas fortes na altura do peito.
      passo(4, [j('J1', 'seta1.b', 1.0), s('seta1', 1.0)]),
      // 5. Após 6 bolas no Cenário 1, as duplas trocam de lado para treinar 6 bolas no Cenário 2.
      passo(5, [j('A1', 'J1', 2.6), j('J1', 'A1', 2.6)]),
    ],
  },

  // 162 · Defesa + Levantamento + Contra-ataque 1: pancada na diagonal e transição padrão
  162: {
    bolaInicial: 'seta1.a',
    passos: [
      // 1. L1 levanta para A1 na ponta; B1 fecha a linha paralela.
      passo(1, [j('B1', [149, 23], 0.4), j('B1', [149, 29], 0.4, 0.4)]),
      // 2. A1 bate uma cortada forte na diagonal contra J1.
      passo(2, [b('seta1.b', { dur: 1.4 }), s('seta1', 1.4)]),
      // 3. 1º contato (defesa): J1 planta os pés, amortece recolhendo o abdômen e faz a bola subir 4,5 m no centro da quadra.
      passo(3, [b('zona2', { de: 'seta2.a', alta: true, dur: 1.9 }), s('seta2', 1.9)]),
      // 4. 2º contato (transição do bloqueador): B1 aterrissa, corre até o centro, para os pés e levanta na ponta.
      passo(4, [j('B1', 'seta3.b', 1.4), s('seta3', 1.4), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 1.4 }), s('seta5', 1.4, 1.4)]),
      // 5. 3º contato (contra-ataque): J1 abre meio passo, acelera na areia e finaliza o contra-ataque.
      passo(5, [j('J1', 'seta6.b', 1.4), s('seta6', 1.4), b('seta8.b', { de: 'seta8.a', dur: 1.0, atraso: 1.4 }), s('seta8', 1.0, 1.4)]),
    ],
  },

  // 163 · Defesa + Levantamento + Contra-ataque 2: mergulho na curta, levantar da areia e atacar
  163: {
    bolaInicial: 'seta1.a',
    passos: [
      // 1. L1 levanta para A1; B1 salta no bloqueio.
      passo(1, [j('B1', [149, 26], 0.4), j('B1', [149, 31], 0.4, 0.4)]),
      // 2. A1 aplica uma largada curta (poke ou cut shot) que cai aos 2,5 m da rede.
      passo(2, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6)]),
      // 3. J1 arranca dos 5,5 m e mergulha de peixinho, salvando a bola bem alta (5 m) para o meio da quadra.
      passo(3, [j('J1', 'seta2.b', 1.3), s('seta2', 1.3), b('seta3.b', { de: 'seta3.a', alta: true, dur: 2.0, atraso: 1.3 }), s('seta3', 2.0, 1.3)], { junto: 0.3 }),
      // 4. B1 sai da rede para levantar; J1 empurra a areia, fica de pé e dá 1 passo rápido para trás/fora (3,5 m).
      passo(4, [j('J1', 'seta4.b', 1.0), s('seta4', 1.0), j('B1', [160, 70], 1.4)]),
      // 5. B1 levanta a bola alta a 1,5–2 m da rede e J1 entra atacando para fechar o ponto.
      passo(5, [b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4 }), s('seta5', 1.4), b('seta6.b', { de: 'seta6.a', dur: 1.0, atraso: 1.5 }), s('seta6', 1.0, 1.5)]),
    ],
  },

  // 164 · Defesa + Levantamento + Contra-ataque 3: busca do lob no fundo e inversão de atacante
  164: {
    bolaInicial: 'seta1.a',
    passos: [
      // 1. A1 solta um "lob" perfeito por cobertura até o canto de 8 m da linha de fundo.
      passo(1, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 2. J1 abre o quadril e corre em velocidade máxima até a linha de fundo, perseguindo a bola.
      passo(2, [j('J1', 'seta2.b', 2.2), s('seta2', 2.2)], { junto: 0.4 }),
      // 3. Lá na linha de 8 m, a dupla treina as duas soluções táticas de alto nível.
      esperar(3, 1.0),
      // 4. Solução A (padrão): J1 defende alto até os 2,5 m; B1 sai do bloqueio e levanta; J1 corre os 6,5 m e ataca.
      passo(4, [b('seta4.b', { de: 'seta4.a', alta: true, dur: 2.2 }), s('seta4', 2.2), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 2.3 }), s('seta5', 1.4, 2.3), j('J1', 'seta6.b', 2.2, 1.2), s('seta6', 2.2, 1.2), b('seta7.b', { de: 'seta7.a', dur: 1.0, atraso: 4.0 }), s('seta7', 1.0, 4.0)]),
      // 5. Solução B ("BATE VOCÊ!"): J1 está longe demais para atacar a tempo; o 1º toque vai para B1 abrir e atacar na rede.
      passo(5, [b([165, 70], { de: [247.9, 112.3], alta: true, dur: 2.0 }), j('B1', [168, 70], 1.4), b([54.5, 80], { de: [168, 70], dur: 1.0, atraso: 2.2 })]),
    ],
  },
}
