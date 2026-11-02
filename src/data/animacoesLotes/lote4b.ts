/** Lote 4 (parte B): exercícios 139 a 155 (bloqueio, defesa) — o 146 está em src/data/animacoes.ts. */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, s, trocar } from './ajudantes'

export const LOTE_4B: Record<number, Animacao> = {
  // 139 · Bloqueio de bola de segunda e reação a ataque rápido do levantador
  139: {
    bolaInicial: { ref: 'D1', dx: -6, dy: -3 },
    passos: [
      // 1. Por que tantos levam bola de segunda na cabeça? O bloqueador corre para a frente do atacante e abre o meio da rede.
      esperar(1, 1.4),
      // 2. D1 saca em A1; A1 faz uma recepção alta que sobe no centro da rede (1 m–1,5 m da fita).
      passo(2, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0), b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.7, atraso: 3.2 }), s('seta2', 1.7, 3.2)]),
      // 3. B1 fica plantado EM FRENTE a L1, no meio da rede, com as mãos altas ("respeitando a segunda bola").
      passo(3, [j('B1', [149, 70], 0.3), j('B1', [149, 72], 0.3, 0.3)]),
      // 4. L1 pode atacar de segunda (B1 salta na cara dele) ou levantar para A1 (e só então B1 usa o passo cruzado).
      passo(4, [b('seta3.b', { de: 'seta3.a', dur: 0.8 }), s('seta3', 0.8), j('B1', [149, 66], 0.4), j('B1', [149, 72], 0.4, 0.4), j('B1', 'seta4.b', 0.9, 1.2), s('seta4', 0.9, 1.2)]),
      // 5. Ponto de segunda por B1 ter saído cedo vale 2 para o ataque; bloquear a bola de segunda vale 2 para a defesa.
      esperar(5, 1.4),
    ],
  },

  // 140 · Bloqueio de opção ("spread block" / "toquinho no bloco"): amortecer para contra-atacar
  140: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. O toque da bola no bloqueio CONTA como o 1º contato da dupla; restam mais 2 contatos.
      esperar(1, 1.4),
      // 2. Quando o levantamento para A1 fica a 2 m da rede, B1 usa duas técnicas avançadas.
      passo(2, [b('seta1.b', { alta: true, dur: 1.9 }), s('seta1', 1.9)]),
      // 3. Técnica A ("spread block"): B1 sobe com as mãos juntas e, no momento da batida, abre os braços em "V".
      passo(3, [b([141.2, 36.1], { dur: 0.6 }), j('B1', [149, 30], 0.4), j('B1', [149, 36], 0.4, 0.4)]),
      // 4. Técnica B ("soft block"): B1 inclina as palmas 20 graus para cima/trás e a bola sobe mansa na própria quadra.
      passo(4, [b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.1 }), s('seta2', 1.1)]),
      // 5. Quando a bola sobe do bloqueio (1º toque), D1 levanta (2º) e o parceiro ataca (3º).
      passo(5, [j('D1', 'seta3.b', 1.4), s('seta3', 1.4), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 0.8 }), s('seta5', 1.4, 0.8), b('seta6.b', { de: 'seta6.a', dur: 1.2, atraso: 2.4 }), s('seta6', 1.2, 2.4)]),
    ],
  },

  // 141 · Bloqueio com vento forte (ajuste de tempo, invasão e "lob trap")
  141: {
    bolaInicial: [113.9, 52.8],
    passos: [
      // 1. Vento nas costas de B1 contra o atacante: B1 atrasa o salto e sobe mais vertical para "caçar" lobs e pokes.
      passo(1, [b('seta1.b', { alta: true, dur: 1.7 }), s('seta1', 1.7), j('B1', [148, 28], 0.5, 1.4), j('B1', [148, 34], 0.5, 1.9), s('seta2', 0.6, 1.4)]),
      // 2. Vento a favor do atacante: B1 fica colado na rede e invade o máximo possível ("telhado fechado").
      passo(2, [j('B1_1', [148, 93], 0.4), j('B1_1', [148, 99], 0.4, 0.4), s('seta3', 0.6)]),
      // 3. Com vento lateral forte, B1 dá meio passo a mais para o lado para onde o vento carrega a bola.
      passo(3, [j('B1', [148, 38], 0.6), j('B1', [148, 34], 0.6, 0.9)]),
      // 4. Executam 6 bolas de cada lado, sentindo a diferença do vento no bloqueio.
      esperar(4, 1.4),
    ],
  },

  // 142 · Bloqueio + Defesa + Contra-ataque: fechando a paralela com transição imediata
  142: {
    bolaInicial: 'seta1.a',
    passos: [
      // 1. D1 saca em A1; B1 mostra 1 dedo (fecha a paralela) e D1 fecha a diagonal.
      esperar(1, 1.4),
      // 2. L1 levanta na ponta para A1; B1 se desloca, estanca os pés e salta trancando a paralela.
      passo(2, [j('B1', [149, 25], 0.4), j('B1', [149, 31], 0.4, 0.4)]),
      // 3. Com a paralela fechada, A1 é forçado a atacar na diagonal, onde D1 já espera.
      passo(3, [b('seta1.b', { dur: 1.4 }), s('seta1', 1.4)]),
      // 4. D1 defende o ataque de A1 subindo a bola alta no centro da quadra (Zona Alvo a 2 m da rede).
      passo(4, [b('zona2', { de: 'seta2.a', alta: true, dur: 1.9 }), s('seta2', 1.9)]),
      // 5. B1, ao tocar a areia, sai da rede em 2 passos até a Zona Alvo e levanta para D1 entrar e cravar o contra-ataque.
      passo(5, [j('B1', 'seta3.b', 1.4), s('seta3', 1.4), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 1.4 }), s('seta5', 1.4, 1.4), j('D1', 'seta6.b', 1.4, 1.4), s('seta6', 1.4, 1.4), b('seta8.b', { de: 'seta8.a', dur: 1.0, atraso: 2.9 }), s('seta8', 1.0, 2.9)]),
    ],
  },

  // 143 · Bloqueio + Defesa + Contra-ataque: reconstrução após toque no bloco ("É dois!")
  143: {
    bolaInicial: 'seta1.a',
    passos: [
      // 1. A1 ataca contra o bloqueio; B1 amortece/raspa na bola (1º toque da dupla) e grita "TOCOU! É DOIS!".
      passo(1, [b('seta1.b', { dur: 0.8 }), s('seta1', 0.8), j('B1', [149, 29], 0.35, 0.3), j('B1', [149, 34], 0.35, 0.65)]),
      // 2. Conforme onde a bola amortecida cair, a dupla executa uma de duas reconstruções.
      esperar(2, 1.0),
      // 3. Caso 1 (bola alta para o meio/fundo): D1 levanta direto para a rede e B1 abre 2 passos e ataca no 3º toque.
      passo(3, [b([193.4, 71.1], { de: 'seta1.b', alta: true, dur: 1.4 }), j('D1', 'seta2.b', 1.4), s('seta2', 1.4), b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.4, atraso: 1.5 }), s('seta4', 1.4, 1.5), j('B1', 'seta5.b', 1.2, 1.7), s('seta5', 1.2, 1.7), b('seta6.b', { de: 'seta6.a', dur: 1.2, atraso: 3.2 }), s('seta6', 1.2, 3.2)]),
      // 4. Caso 2 (bola curtinha atrás de B1): B1 vira e levanta no 2º toque para D1 atacar no 3º.
      passo(4, [b([156, 30], { de: [142, 34], dur: 0.8 }), b([200, 62], { alta: true, dur: 1.6, atraso: 1.0 })]),
      // 5. Realizam 8 lances variando entre o Caso 1 e o Caso 2.
      esperar(5, 1.2),
    ],
  },

  // 144 · Desafio "Rei do Paredão": bloqueio + defesa + transição valendo ponto
  144: {
    bolaInicial: { ref: 'D1', dx: -6, dy: -3 },
    passos: [
      // 1. Disputa de sets até 12 pontos; só a dupla que saca/bloqueia (Paredão) marca pontos especiais de sistema defensivo.
      esperar(1, 1.2),
      // 2. Pontuação do Paredão: bloqueio direto = 3; toque no bloco + contra-ataque = 2; falso bloqueio com defesa e ponto = 2.
      passo(2, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta3', 1.6, 3.2), b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.4, atraso: 4.9 }), s('seta4', 1.4, 4.9), j('B1', 'seta2.b', 1.8, 5.5), s('seta2', 1.8, 5.5), b('seta5.b', { de: 'seta5.a', dur: 1.2, atraso: 7.0 }), s('seta5', 1.2, 7.0)]),
      // 3. Se a Dupla Desafiante virar o side-out, ganha 1 ponto e rouba o lado do Paredão.
      esperar(3, 1.2),
      // 4. Antes de cada saque é obrigatório mostrar o sinal atrás das costas combinando o sistema.
      esperar(4, 1.2),
      // 5. Vence quem alcançar 12 pontos primeiro somando bloqueios e contra-ataques.
      esperar(5, 1.4),
    ],
  },

  // ───── DEFESA ─────
  // 145 · Base de defesa na areia e ativação da plataforma
  145: {
    bolaInicial: { ref: 'A1', dx: 6, dy: -3 },
    passos: [
      // 1. J1 posiciona-se entre os 2 cones a 5 m da rede, pés mais largos que os ombros e quadril baixo.
      esperar(1, 1.2),
      // 2. Os braços de J1 começam semiflexionados e abertos à frente da linha dos joelhos.
      esperar(2, 1.0),
      // 3. Quando A1 levanta o braço para bater, J1 pressiona os antepés contra a areia (ativação da base).
      passo(3, [b([124.5, 66], { alta: true, dur: 0.9 })]),
      // 4. A1 bate a bola controlada na cintura de J1, que une a plataforma e levanta a bola a 4 m para a Zona Alvo central.
      passo(4, [b('seta1.b', { dur: 1.5 }), s('seta1', 1.5), b('zona2', { de: 'seta2.a', alta: true, dur: 2.2, atraso: 1.7 }), s('seta2', 2.2, 1.7)]),
      // 5. Após 10 defesas consecutivas, J1 e A1 trocam de função.
      trocar(5, 'J1', 'A1', 2.4),
    ],
  },

  // 147 · Defesa reflexa na altura do rosto e ombros (toque de defesa / mãos espalmadas)
  147: {
    bolaInicial: { ref: 'A1', dx: 6, dy: -3 },
    passos: [
      // 1. Regra da praia: em ataque forte (hard-driven ball), o toque de defesa por cima é permitido como ação reflexa.
      esperar(1, 1.4),
      // 2. J1 fica na base aos 5 m com as mãos abertas na altura da cintura/peito.
      esperar(2, 1.0),
      // 3. A1 bate bolas rápidas e tensas na linha do peito, ombros e testa de J1.
      passo(3, [b('seta1.b', { dur: 1.0 }), s('seta1', 1.0)]),
      // 4. J1 sobe as duas mãos abertas e tensas acima do peito/testa (polegares formando um escudo) e amortece a bola para o alto.
      passo(4, [j('J1', [215, 70], 0.3), j('J1', [215, 72], 0.3, 0.3), b('zona2', { de: 'seta2.a', alta: true, dur: 2.2 }), s('seta2', 2.2)]),
      // 5. A bola sobe no centro da quadra e cai na Zona Alvo; trocam a cada 8 bolas.
      trocar(5, 'J1', 'A1', 2.4),
    ],
  },

  // 148 · Avanço explosivo na bola curta (pingo e poke) mantendo o equilíbrio
  148: {
    bolaInicial: { ref: 'A1', dx: 5, dy: -1 },
    passos: [
      // 1. J1 aguarda em base baixa aos 5 m da rede, com o peso na ponta dos pés.
      esperar(1, 1.2),
      // 2. A1 simula que vai bater forte, mas aplica um "poke" ou largada curta que cai nos cones de 2 m.
      passo(2, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6)]),
      // 3. J1 lê a desaceleração do braço de A1, explode em 3 passadas rasantes e entra em afundo amplo aos 2 m.
      passo(3, [j('J1', 'seta2.b', 1.3), s('seta2', 1.3)], { junto: 0.5 }),
      // 4. Com a manchete paralela à areia, J1 levanta a bola antes que ela toque o chão, na Zona Alvo ao lado.
      passo(4, [b('zona2', { de: 'seta4.a', alta: true, dur: 1.4 }), s('seta4', 1.4)]),
      // 5. Retorna de costas ao cone de 5 m e repete; trocam a cada 8 bolas.
      passo(5, [j('J1', 'J1', 1.4), j('J1', 'A1', 2.4, 1.8), j('A1', 'J1', 2.4, 1.8)]),
    ],
  },

  // 149 · Recuo com giro de quadril na bola alta no fundo (defesa de lob)
  149: {
    bolaInicial: { ref: 'A1', dx: 5, dy: -2 },
    passos: [
      // 1. J1 inicia no cone de 3,5 m da rede (defensor que adiantou esperando a largada).
      esperar(1, 1.2),
      // 2. A1 aplica um "lob" por cima da cabeça de J1 em direção a um dos cones de 7,5 m.
      passo(2, [b('seta1.b', { alta: true, dur: 2.8 }), s('seta1', 2.8)]),
      // 3. Ao ver a trajetória alta, J1 gira o quadril 135 graus e corre de frente/diagonal olhando por cima do ombro.
      passo(3, [j('J1', 'seta2.b', 1.9), s('seta2', 1.9)], { junto: 0.5 }),
      // 4. No cone de 7,5 m, antes de a bola cair, planta o pé externo, gira os ombros e faz uma manchete alta e longa até a Zona Alvo.
      passo(4, [b('zona2', { de: 'seta4.a', alta: true, dur: 2.4 }), s('seta4', 2.4)]),
      // 5. Alterna um lob no fundo esquerdo e um no direito; trocam a cada 8 bolas.
      trocar(5, 'J1', 'A1', 2.4),
    ],
  },

  // 150 · Leitura do ombro e do cotovelo do atacante (antecipação visual)
  150: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. L1 levanta para A1 na entrada esquerda; J1 mantém o olhar fixo no ombro e no cotovelo de A1 (não só na bola).
      passo(1, [
        b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8),
        b('seta5.b', { de: 'seta5.a', dur: 0.9, atraso: 2.0 }), s('seta5', 0.9, 2.0),
        j('J1', 'seta2.b', 0.9, 2.2), s('seta2', 0.9, 2.2),
        j('J1', 'J1', 0.7, 3.6),
        b('seta6.b', { de: 'seta6.a', dur: 0.9, atraso: 4.4 }), s('seta6', 0.9, 4.4),
        j('J1', 'seta3.b', 0.9, 4.6), s('seta3', 0.9, 4.6),
        j('J1', 'J1', 0.7, 6.0),
        j('J1', 'seta4.b', 0.8, 6.8), s('seta4', 0.8, 6.8),
      ]),
    ],
  },

  // 151 · Leitura da qualidade do levantamento (ajustando a profundidade da base)
  151: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. Regra tática de leitura: a posição do levantamento adversário dita onde a bola pode cair na sua quadra.
      esperar(1, 1.4),
      // 2. A1 passa a bola para L1; L1 varia propositalmente o levantamento entre duas distâncias.
      passo(2, [b('seta1.b', { alta: true, dur: 2.0 }), s('seta1', 2.0)]),
      // 3. Situação A (levantamento perfeito a 1–1,5 m da rede): J1 permanece firme na linha recuada (6 m), em postura baixa.
      esperar(3, 1.0),
      // 4. Situação B (levantamento ruim a 3,5–4 m): A1 não consegue bater para baixo; J1 avança 2 m até a linha adiantada enquanto a bola ainda está no ar.
      passo(4, [j('J1', 'seta2.b', 1.2), s('seta2', 1.2), b('seta3.b', { de: 'seta3.a', alta: true, dur: 2.2 }), s('seta3', 2.2)]),
      // 5. J1 estanca aos 4 m e defende fácil a bola colocada; rodam a cada 8 bolas.
      passo(5, [b('zona2', { de: 'seta4.a', alta: true, dur: 1.6 }), s('seta4', 1.6), j('J1', 'A1', 2.4, 1.8), j('A1', 'J1', 2.4, 1.8)]),
    ],
  },

  // 152 · Técnica segura de peixinho e deslize na areia fofa
  152: {
    bolaInicial: { ref: 'A1', dx: 5, dy: 0 },
    passos: [
      // 1. J1 posiciona-se em base bem baixa aos 5,5 m.
      esperar(1, 1.2),
      // 2. A1 envia uma bola curta e rápida a 2,5–3 m à frente/diagonal de J1.
      passo(2, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6)]),
      // 3. J1 dá 2 passos explosivos e, no último apoio, projeta o corpo horizontalmente rente à areia.
      passo(3, [j('J1', 'seta2.b', 1.3), s('seta2', 1.3)], { junto: 0.3 }),
      // 4. Toca por baixo da bola antes de o corpo tocar o solo e desliza sobre o peito/abdômen.
      passo(4, [b('zona2', { de: 'seta4.a', alta: true, dur: 1.4 }), s('seta4', 1.4)]),
      // 5. Empurra a areia para ficar de pé; trocam a cada 6 peixinhos.
      passo(5, [j('J1', 'J1', 1.4), j('J1', 'A1', 2.4, 1.8), j('A1', 'J1', 2.4, 1.8)]),
    ],
  },

  // 153 · Mergulho lateral com extensão de um braço (alcance máximo nas linhas)
  153: {
    bolaInicial: 'seta1.a',
    passos: [
      // 1. J1 começa no cone central (5 m).
      esperar(1, 1.2),
      // 2. A1 bate ou lança uma bola rápida e baixa, bem aberta, na direção de um dos cones da linha lateral.
      passo(2, [b('seta1.b', { dur: 1.8 }), s('seta1', 1.8)]),
      // 3. J1 dá 1 passo cruzado explosivo e se projeta lateralmente esticando apenas o braço de fora.
      passo(3, [j('J1', 'seta3.b', 1.2), s('seta3', 1.2)], { junto: 0.5 }),
      // 4. Toca por baixo da bola e a traz alta de volta ao centro da quadra (Zona Alvo).
      passo(4, [b('zona2', { de: 'seta5.a', alta: true, dur: 1.8 }), s('seta5', 1.8)]),
      // 5. Amortece a queda e levanta rápido; 4 para a direita e 4 para a esquerda.
      passo(5, [j('J1', 'J1', 1.2), b('seta2.b', { de: 'seta2.a', dur: 1.8, atraso: 1.0 }), s('seta2', 1.8, 1.0), j('J1', 'seta4.b', 1.2, 1.6), s('seta4', 1.2, 1.6), b('zona2', { de: 'seta6.a', alta: true, dur: 1.8, atraso: 3.6 }), s('seta6', 1.8, 3.6)]),
    ],
  },

  // 154 · Defesa no corredor da paralela (com bloqueio fechando a diagonal — Sinal 2)
  154: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. B1 mostra 2 dedos nas costas para J1 (vai trancar a diagonal de A1).
      esperar(1, 1.4),
      // 2. L1 levanta para A1 na ponta; B1 dá um passo para dentro na rede, fechando a sombra da diagonal.
      passo(2, [b('seta1.b', { alta: true, dur: 1.9 }), s('seta1', 1.9), j('B1', [149, 48], 0.8, 0.8)]),
      // 3. J1 ajusta a base a 5,5 m da rede e a 1,2 m da linha lateral, enxergando a bola pela lateral externa do bloqueio.
      passo(3, [j('J1', [221, 33], 0.6), j('J1', [221, 29], 0.6, 0.7)]),
      // 4. A1 ataca no corredor livre da paralela (cortada na linha, lob ou pingo atrás do bloqueio).
      passo(4, [b('seta2.b', { de: 'seta2.a', dur: 1.0 }), s('seta2', 1.0)]),
      // 5. J1 defende no corredor da paralela, subindo a bola na Zona Alvo para B1 levantar; trocam após 8 bolas.
      passo(5, [b('zona2', { de: 'seta3.a', alta: true, dur: 1.8 }), s('seta3', 1.8), j('A1', 'B1', 2.4, 2.0), j('B1', 'A1', 2.4, 2.0)]),
    ],
  },

  // 155 · Defesa na diagonal (com bloqueio fechando a paralela — Sinal 1)
  155: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. B1 mostra 1 dedo nas costas (fecha a paralela de A1).
      esperar(1, 1.4),
      // 2. Quando o levantamento sobe para A1, B1 fecha a linha junto à antena e J1 corre para a defesa na diagonal.
      passo(2, [b('seta1.b', { alta: true, dur: 1.9 }), s('seta1', 1.9), j('B1', [149, 22], 0.8, 0.8), j('J1', [214, 97], 0.8, 0.8)]),
      // 3. Na diagonal, J1 posiciona o corpo VIRADO DE FRENTE PARA O ATACANTE (45 graus).
      passo(3, [j('J1', [211, 98], 0.6)]),
      // 4. Como a diagonal é larga, J1 fica com o peso na ponta dos pés, pronto para o ataque cruzado ou para o cut shot.
      esperar(4, 1.0),
      // 5. J1 defende o ataque cruzado de A1, mandando a bola alta na Zona Alvo central; rodam a cada 8 bolas.
      passo(5, [b('seta2.b', { de: 'seta2.a', dur: 1.0 }), s('seta2', 1.0), b('zona2', { de: 'seta3.a', alta: true, dur: 1.8, atraso: 1.2 }), s('seta3', 1.8, 1.2)]),
    ],
  },
}
