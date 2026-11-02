/** Lote 3 (parte D): exercícios 117 a 124 (ataque com leitura). */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, s, trocar } from './ajudantes'

export const LOTE_3D: Record<number, Animacao> = {
  // 117 · Ataque de bola baixa ou passada demais perto da antena
  117: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -5 },
    passos: [
      // 1. L1 envia propositalmente dois tipos de "bolas de sufoco" na ponta esquerda.
      esperar(1, 1.4),
      // 2. Bola 1 (baixa/chutada): A1 dá 1 passo rápido, sobe enxuto e usa o "poke" ou "cobra" na Zona Alvo 2 (diagonal curta).
      passo(2, [b('seta1.b', { dur: 1.2 }), s('seta1', 1.2), j('A1', 'seta2.b', 0.9, 0.3), s('seta2', 0.9, 0.3), b('zona2', { de: 'seta5.a', dur: 1.1, atraso: 1.5 }), s('seta5', 1.1, 1.5)]),
      // 3. Bola 2 (passada na antena): A1 abre os passos para fora, não bate na paralela e vira o punho para a Zona Alvo 1.
      passo(3, [j('A1', 'A1', 1.2), b('seta1.b', { de: { ref: 'L1', dx: 0, dy: -5 }, alta: true, dur: 1.8, atraso: 1.2 }), b('zona1', { de: 'seta4.a', dur: 1.2, atraso: 3.2 }), s('seta4', 1.2, 3.2)]),
      // 4. Realizam 8 bolas de sufoco e invertem as funções.
      trocar(4, 'A1', 'L1', 2.4),
    ],
  },

  // 118 · Leitura visual do bloqueio fixo (fechando paralela vs. fechando diagonal)
  118: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. A1 passa a bola para L1; L1 levanta alto, a 1,5 m–2 m da rede.
      passo(1, [b('seta1.b', { alta: true, dur: 1.9 }), s('seta1', 1.9)]),
      // 2. Com a bola saindo da mão de L1, A1 faz a chamada de pés na areia; B1 dá um passo claro na rede.
      passo(2, [j('A1', 'seta2.b', 1.4), s('seta2', 1.4)]),
      // 3. Opção A: B1 fecha a PARALELA; A1 enxerga o movimento e ataca na Zona 2 (diagonal).
      passo(3, [j('B1', 'seta3.b', 0.7), s('seta3', 0.7), b('zona2', { de: 'seta6.a', dur: 1.1, atraso: 0.9 }), s('seta6', 1.1, 0.9)]),
      // 4. Opção B: B1 fecha a DIAGONAL; A1 lê o corredor livre na linha e ataca na Zona 1 (paralela).
      passo(4, [j('B1', [149.6, 34.5], 0.4), j('B1', 'seta4.b', 0.7, 0.4), s('seta4', 0.7, 0.4), b('zona1', { de: 'seta5.a', dur: 1.1, atraso: 1.3 }), s('seta5', 1.1, 1.3)]),
      // 5. Bater em cima das mãos de B1 é ponto do bloqueador; atacar o corredor aberto é ponto de A1. Rodam a cada 8 bolas.
      trocar(5, 'A1', 'L1', 2.4),
    ],
  },

  // 119 · Ataque guiado pelo chamado verbal do parceiro ("Linha!" ou "Cruzado!")
  119: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. Quem tem a visão limpa do adversário é o levantador, enquanto o atacante olha a bola no céu.
      esperar(1, 1.4),
      // 2. A1 passa a bola para L1; L1 levanta alto para a entrada.
      passo(2, [b('seta1.b', { alta: true, dur: 1.9 }), s('seta1', 1.9), j('A1', 'seta2.b', 1.4, 0.6), s('seta2', 1.4, 0.6)]),
      // 3. Assim que a bola sai das mãos, L1 olha imediatamente para B1 do outro lado da rede.
      passo(3, [j('B1', [147, 48], 0.8)]),
      // 4. Quando B1 se move para fechar um lado, L1 grita "LINHA!" (paralela livre) ou "CRUZADO!" (diagonal livre).
      esperar(4, 1.2),
      // 5. A1 confia na voz do parceiro, ajusta o punho/ombro no ar e coloca a bola na zona chamada.
      passo(5, [b('zona1', { de: 'seta3.a', dur: 1.1 }), s('seta3', 1.1), j('B1', [149, 22], 0.8, 1.6), b('zona2', { de: 'seta4.a', dur: 1.1, atraso: 2.4 }), s('seta4', 1.1, 2.4)]),
    ],
  },

  // 120 · Leitura periférica do defensor no fundo (cortada forte vs. bola curta)
  120: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. A1 passa para L1 e faz a aproximação olhando pelo canto do olho para D1.
      passo(1, [b('seta1.b', { alta: true, dur: 1.9 }), s('seta1', 1.9), j('A1', 'seta2.b', 1.4, 0.6), s('seta2', 1.4, 0.6)]),
      // 2. Quando A1 inicia a chamada de salto, D1 faz uma das três movimentações claras.
      esperar(2, 0.8),
      // 3. Movimento 1: D1 recua para os 7 m; A1 freia o braço e aplica "poke" ou "cut shot" na Zona Curta.
      passo(3, [j('D1', 'seta4.b', 0.9), s('seta4', 0.9), b('zona1', { de: 'seta5.a', dur: 0.9, atraso: 0.8 }), s('seta5', 0.9, 0.8)]),
      // 4. Movimento 2: D1 corre para a frente; A1 aplica "lob/cobra" alto ou cortada longa na Zona Fundo, nas costas de D1.
      passo(4, [j('D1', [214, 72], 0.6), j('D1', 'seta3.b', 0.9, 0.6), s('seta3', 0.9, 0.6), b('zona2', { de: 'seta6.a', alta: true, dur: 2.2, atraso: 1.4 }), s('seta6', 2.2, 1.4)]),
      // 5. Movimento 3: D1 fica plantado no meio; A1 solta a cortada potente na Zona Lateral, longe do alcance dele.
      passo(5, [j('D1', [214, 72], 0.6), b('zona3', { de: 'seta7.a', dur: 1.0, atraso: 0.8 }), s('seta7', 1.0, 0.8)]),
    ],
  },

  // 121 · Ataque com vento contra (cortada chapada para baixo e bola curta de poke ou cut)
  121: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. Atacar contra o vento é vantajoso por dois motivos.
      esperar(1, 1.4),
      // 2. Vantagem 1: o vento freia a bola; nos primeiros 5 ataques, A1 bate a 100% de potência na Zona 1.
      passo(2, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8), j('A1', 'seta2.b', 1.4, 0.6), s('seta2', 1.4, 0.6), b('zona1', { de: 'seta3.a', dur: 1.2, atraso: 2.2 }), s('seta3', 1.2, 2.2)]),
      // 3. Vantagem 2: poke ou cut contra o vento; o vento derruba a bola na areia aos 2 m (Zona 2).
      passo(3, [b('seta1.b', { de: { ref: 'L1', dx: 0, dy: -6 }, alta: true, dur: 1.8 }), b('zona2', { de: 'seta4.a', dur: 1.0, atraso: 2.0 }), s('seta4', 1.0, 2.0)]),
      // 4. Como o vento sopra o levantamento para trás, A1 espera meio passo atrás para a bola não passar da cabeça.
      passo(4, [j('A1', [58, 36], 0.7)]),
      // 5. Trocam após 10 ataques.
      trocar(5, 'A1', 'L1', 2.4),
    ],
  },

  // 122 · Ataque com vento a favor e lateral (topspin máximo e margem de segurança)
  122: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. Atacar a favor do vento é quando mais se erra para fora: a brisa faz a bola "planar".
      esperar(1, 1.4),
      // 2. Ajuste 1 (na corrida): A1 acelera a entrada para pegar a bola antes que passe para o outro lado.
      passo(2, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8), j('A1', 'seta2.b', 1.0, 0.3), s('seta2', 1.0, 0.3)]),
      // 3. Ajuste 2 (na batida): entra com a mão por CIMA da bola, com chicote exagerado de punho (topspin máximo).
      passo(3, [b('seta3.b', { de: 'seta3.a', dur: 1.0 }), s('seta3', 1.0)]),
      // 4. Ajuste 3 (golpes colocados): com lob ou cobra, mira no MEIO da quadra adversária; o vento leva até o fundo.
      passo(4, [b('seta4.b', { de: 'seta4.a', alta: true, dur: 2.2 }), s('seta4', 2.2)]),
      // 5. Bola fora das linhas desconta 2 pontos; acertar a Zona Segura vale 1.
      esperar(5, 1.4),
    ],
  },

  // 123 · Explorando as mãos altas e laterais do bloqueio ("block-out" técnico)
  123: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. Levantamento perto da rede (80 cm–1 m) com B1 fechando os espaços: tentar passar por baixo dá ponto de bloqueio.
      esperar(1, 1.4),
      // 2. A1 sobe equilibrado, mantém o olhar nas mãos de B1 e aplica uma das duas técnicas de "explorar o bloqueio".
      passo(2, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8), j('A1', 'seta2.b', 1.4, 0.6), s('seta2', 1.4, 0.6)]),
      // 3. Técnica 1: mira nos últimos 5 cm da ponta dos dedos de B1; a bola raspa na mão e vai para fora do fundo.
      passo(3, [b([145.6, 31], { dur: 0.7 }), b('seta5.b', { de: [145.6, 32.2], dur: 1.8, atraso: 0.7 }), s('seta5', 1.8, 0.7)]),
      // 4. Técnica 2: gira o punho para fora, batendo na borda externa da mão de B1; a bola ricocheteia para fora da lateral.
      passo(4, [b('seta4.b', { de: 'seta4.a', dur: 1.3 }), s('seta4', 1.3)]),
      // 5. Só vale ponto se a bola tocar em B1 e cair fora da quadra (ou se B1 encolher a mão e a bola cair na linha).
      passo(5, [s('seta3', 0.8)]),
    ],
  },

  // 124 · Finta de cortada máxima (braço rápido) mudando para "cut" ou "poke" no ar
  124: {
    bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
    passos: [
      // 1. O grande defensor lê a velocidade do cotovelo: braço mole faz D1 disparar para a frente antes do toque.
      esperar(1, 1.4),
      // 2. A1 recebe o levantamento, faz uma corrida explosiva, salta alto e abre o peito ("arco e flecha").
      passo(2, [b('seta1.b', { alta: true, dur: 1.8 }), s('seta1', 1.8), j('A1', 'seta2.b', 1.4, 0.6), s('seta2', 1.4, 0.6)]),
      // 3. Vendo o braço armado para a pancada, D1 crava os calcanhares nos 6 m para defender o tiro.
      passo(3, [j('D1', [235, 79], 0.4), j('D1', [235, 82], 0.4, 0.4)]),
      // 4. A 20 cm da bola, A1 freia o ombro: "cut shot" curto na diagonal ou "poke" por cima de B1 na paralela curta.
      passo(4, [b('zona2', { de: 'seta5.a', dur: 1.1 }), s('seta5', 1.1), b('zona1', { de: 'seta4.a', dur: 1.0, atraso: 1.6 }), s('seta4', 1.0, 1.6)]),
      // 5. Se D1 conseguir correr e alcançar a bola curta porque leu que A1 ia largar, o ponto é da defesa.
      passo(5, [j('D1', 'seta3.b', 1.8), s('seta3', 1.8)]),
    ],
  },
}
