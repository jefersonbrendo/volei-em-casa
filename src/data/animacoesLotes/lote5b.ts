/** Lote 5 (parte B): exercícios 175 a 190 (transição, comunicação e tática de jogo). */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, pausa, s } from './ajudantes'

export const LOTE_5B: Record<number, Animacao> = {
  // 175 · Transição relâmpago após defesa de bola curta (com opção de ataque de 2ª bola)
  175: {
    bolaInicial: 'seta1.a',
    passos: [
      // 1. A1 aplica um "poke" ou "cut shot" curto e J1 corre até a frente para salvar a bola a 1,5 m da rede.
      passo(1, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6), j('J1', 'seta2.b', 1.4, 0.5), s('seta2', 1.4, 0.5)]),
      // 2. Se a defesa de J1 subir alta e próxima à fita, B1 (que acabou de descer do bloqueio) tem duas opções letais.
      passo(2, [b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.4 }), s('seta4', 1.4)]),
      // 3. Opção 1: B1 grita "DEIXA!" e ataca a bola de segunda no espaço vazio.
      passo(3, [b('seta5.b', { de: 'seta5.a', dur: 1.0 }), s('seta5', 1.0)]),
      // 4. Opção 2: se a defesa adversária já recuou, B1 levanta uma bola curta para J1 saltar em 1 passo e cravar.
      passo(4, [b('seta6.b', { de: 'seta6.a', dur: 1.2 }), s('seta6', 1.2)]),
      // 5. Executam 8 bolas curtas alternando o ataque de segunda de B1 e a bola rápida para J1.
      esperar(5, 1.2),
    ],
  },

  // 176 · Desafio dos "5 Side-outs em Linha" (consistência máxima sob pressão)
  176: {
    passos: [
      // 1. Objetivo: virar 5 bolas seguidas sem erros não forçados, mesmo quando o sacador muda de estratégia.
      esperar(1, 1.4),
      // 2. Regra de pressão: com 3 ou 4 side-outs seguidos, errar 1 ataque ou sofrer 1 contra-ataque zera o contador.
      esperar(2, 1.2),
      // 3. Distribuição obrigatória dos 5 saques: 2 em J1, 2 em J2 e 1 na costura central.
      passo(3, [b('seta1.b', { de: { ref: 'S1', dx: -6, dy: -3 }, alta: true, dur: 2.4 }), s('seta1', 2.4), b('seta3.b', { de: { ref: 'S1', dx: -6, dy: -3 }, alta: true, dur: 2.4, atraso: 2.6 }), s('seta3', 2.4, 2.6), b('seta2.b', { de: { ref: 'S1', dx: -6, dy: -3 }, alta: true, dur: 2.4, atraso: 5.2 }), s('seta2', 2.4, 5.2)]),
      // 4. Mesmo que S1 defenda o primeiro ataque, vencer o ponto na segunda tentativa mantém a sequência viva.
      passo(4, [b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.6 }), s('seta4', 1.6), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 1.7 }), s('seta5', 1.4, 1.7), b('seta6.b', { de: 'seta6.a', dur: 1.0, atraso: 3.2 }), s('seta6', 1.0, 3.2)]),
      // 5. Assim que batem os 5 seguidos (ou após 8 minutos), invertem os lados.
      passo(5, [j('J1', 'S1', 2.8), j('S1', 'J1', 2.8), j('J2', 'B1', 2.8), j('B1', 'J2', 2.8)]),
    ],
  },

  // 177 · Side-out e transição com "Bingo de Zonas" (vencer nos 3 setores da quadra)
  177: {
    passos: [
      // 1. Para vencer a rodada, a dupla precisa marcar 1 ponto em CADA setor (curto, diagonal/meio e fundo) e 1 de contra-ataque.
      esperar(1, 1.4),
      // 2. D1 saca e o rally corre livre valendo tudo.
      passo(2, [b('seta1.b', { de: [262, 72], alta: true, dur: 3.0 }), s('seta1', 3.0), b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta2', 1.6, 3.2), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.4, atraso: 4.9 }), s('seta3', 1.4, 4.9)]),
      // 3. Se J1 mata o primeiro side-out com um cut shot no Setor 1 (curto), o setor já está "ticado".
      passo(3, [b('seta4.b', { de: 'seta4.a', dur: 1.1 }), s('seta4', 1.1)]),
      // 4. Nos últimos pontos, B1 e D1 já sabem qual setor falta e tentam proteger aquela zona com tudo.
      passo(4, [j('B1', [149, 40], 0.6), j('D1', [214, 75], 1.0), b('seta5.b', { de: 'seta5.a', dur: 1.0, atraso: 1.2 }), s('seta5', 1.0, 1.2)]),
      // 5. Quem completar os 3 setores + 1 transição primeiro vence o set.
      passo(5, [b('seta6.b', { de: 'seta6.a', alta: true, dur: 1.8 }), s('seta6', 1.8)]),
    ],
  },

  // 178 · Jogo de "Wash" clássico (side-out + bola de transição para validar o ponto)
  178: {
    bolaInicial: { ref: 'D1', dx: -6, dy: -3 },
    passos: [
      // 1. No sistema "WASH", para ganhar 1 ponto grande a dupla precisa vencer DUAS bolas seguidas (side-out + transição).
      esperar(1, 1.4),
      // 2. Bola 1 (side-out): D1 saca na Dupla A, e eles jogam o ponto até o fim.
      passo(2, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0), b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta2', 1.6, 3.2), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.4, atraso: 4.9 }), s('seta3', 1.4, 4.9), b('seta4.b', { de: 'seta4.a', dur: 1.0, atraso: 6.4 }), s('seta4', 1.0, 6.4)]),
      // 3. Se a Dupla B vencer a Bola 1, recebe uma bola lançada na sua quadra para atacar e ganhar o ponto grande.
      esperar(3, 1.2),
      // 4. Se a Dupla A virar o side-out, o treinador lança já uma Bola 2 de ataque contra a defesa de J1 e J2.
      passo(4, [b([60, 101.2], { de: [186.2, 102.8], dur: 1.6 }), s('seta5', 1.6)]),
      // 5. J1 e J2 defendem a Bola 2, levantam e matam o contra-ataque (senão dá "Wash": empate e troca o saque).
      passo(5, [b('seta6.b', { de: 'seta6.a', alta: true, dur: 1.6 }), s('seta6', 1.6), b('seta7.b', { de: 'seta7.a', alta: true, dur: 1.4, atraso: 1.7 }), s('seta7', 1.4, 1.7), b('seta8.b', { de: 'seta8.a', dur: 1.0, atraso: 3.2 }), s('seta8', 1.0, 3.2)]),
    ],
  },

  // 179 · Maratona de Pontuação Tripla (side-out + defesa de forte + defesa de curta/lob)
  179: {
    passos: [
      // 1. Cada entrada da Dupla A é uma sequência ininterrupta de 3 bolas valendo até 3 pontos.
      esperar(1, 1.4),
      // 2. Bola 1 (side-out oficial): D1 saca; J1 e J2 recepcionam, levantam e viram o ataque.
      passo(2, [b('seta1.b', { de: [262, 64], alta: true, dur: 3.0 }), s('seta1', 3.0), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta3', 1.6, 3.2), b('seta4.b', { de: 'seta4.a', dur: 1.0, atraso: 4.9 }), s('seta4', 1.0, 4.9)]),
      // 3. Bola 2 (transição de pancada): o treinador bate uma cortada forte no fundo; amortecem, levantam e atacam.
      passo(3, [b('seta2.b', { de: 'seta2.a', dur: 1.6 }), s('seta2', 1.6), b('seta5.b', { de: 'seta5.a', dur: 1.0, atraso: 2.0 }), s('seta5', 1.0, 2.0)]),
      // 4. Bola 3 (transição de bola curta ou lob): o treinador solta um pingo curto (ou um lob); a dupla salva, levanta alto e finaliza.
      passo(4, [b([113, 72], { de: [186.2, 134.5], alta: true, dur: 1.8 }), j('J1_1', [105, 76], 1.0, 0.6)]),
      // 5. Se a Dupla A vencer as 3 bolas, ganha +1 ponto bônus; depois invertem os lados.
      passo(5, [j('J1', 'D1', 2.8), j('D1', 'J1', 2.8), j('J2', 'B1', 2.8), j('B1', 'J2', 2.8)]),
    ],
  },

  // 180 · Cenário de fim de set (19x20): side-out de sobrevivência e contra-ataque do título
  180: {
    passos: [
      // 1. O placar começa sempre em 19 x 20 contra a dupla receptora (Dupla A).
      esperar(1, 1.4),
      // 2. Momento 1: a Dupla B saca com tudo; a Dupla A mantém a cabeça fria, passa na zona de segurança e vira o side-out.
      passo(2, [b('seta2.b', { de: { ref: 'D1', dx: -6, dy: -3 }, alta: true, dur: 3.0 }), s('seta2', 3.0), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta3', 1.6, 3.2), b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.4, atraso: 4.9 }), s('seta4', 1.4, 4.9), b('seta5.b', { de: 'seta5.a', dur: 1.0, atraso: 6.4 }), s('seta5', 1.0, 6.4)]),
      // 3. Momento 2: no 20x20 o saque passa para a Dupla A, que combina o sinal, saca, defende e mata o contra-ataque.
      passo(3, [b('seta6.b', { de: 'seta6.a', alta: true, dur: 1.6 }), s('seta6', 1.6), b('seta7.b', { de: 'seta7.a', dur: 1.0, atraso: 1.8 }), s('seta7', 1.0, 1.8)]),
      // 4. Momento 3: o mini-set segue a regra oficial (2 pontos de vantagem) até uma dupla fechar.
      esperar(4, 1.4),
      // 5. Ao terminar cada mini-set, invertem quem começa no 19x20 e quem começa no 20x19.
      passo(5, [j('J1', 'D1', 2.8), j('D1', 'J1', 2.8), j('J2', 'B1', 2.8), j('B1', 'J2', 2.8)]),
    ],
  },

  // ───── COMUNICAÇÃO ─────
  // 181 · Chamada na costura e regra de prioridade ("Minha!" / "Sua!")
  181: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. A dupla estabelece a regra de prioridade da costura (quem tem prioridade nas bolas de dúvida no meio).
      esperar(1, 1.4),
      // 2. S1 saca ou lança todas as bolas buscando o corredor central de 2 m entre J1 e J2.
      passo(2, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 3. Protocolo de dupla voz: quem vai tocar grita "MINHA!" e o parceiro responde "VAI!"/"SUA!" e já dispara para a rede.
      passo(3, [j('J2', 'seta4.b', 1.5), s('seta4', 1.5)], { junto: 1.0 }),
      // 4. Quem gritou "MINHA!" fecha o passo em diagonal e passa para a Zona Alvo a 1,5 m da rede.
      passo(4, [j('J1', 'seta2.b', 1.0), s('seta2', 1.0), b('zona1', { de: 'seta6.a', alta: true, dur: 1.7, atraso: 0.6 }), s('seta6', 1.7, 0.6)]),
      // 5. Quem respondeu "VAI!" chega na Zona Alvo, estanca os pés e levanta; a cada 6 bolas invertem os lados.
      passo(5, [j('J2', 'zona1', 0.9), j('J1', 'J2', 2.4, 1.4), j('J2', 'J1', 2.4, 1.4)]),
    ],
  },

  // 182 · Dicionário prático de sinais de bloqueio atrás das costas (2 mãos)
  182: {
    bolaInicial: { ref: 'D1', dx: -6, dy: -3 },
    passos: [
      // 1. Antes do saque, B1 posiciona as duas mãos atrás do quadril: esquerda contra A1, direita contra A2.
      passo(1, [s('seta1', 1.4), pausa(1.4)]),
      // 2. A dupla treina os 4 sinais oficiais: 1 dedo (fecha a paralela), 2 dedos (fecha a diagonal), punho (vai na bola) e mão aberta (falso bloqueio).
      esperar(2, 1.4),
      // 3. D1 lê as duas mãos de B1, confirma e saca (ex.: [1 | 2]: se saca em A1, B1 fecha a linha e D1 corre para a diagonal).
      passo(3, [b('seta2.b', { alta: true, dur: 3.0 }), s('seta2', 3.0), j('B1', 'seta3.b', 0.9, 1.0), s('seta3', 0.9, 1.0), j('D1', 'seta4.b', 1.8, 1.0), s('seta4', 1.8, 1.0)]),
      // 4. Para indicar em QUEM D1 deve sacar, B1 "pisca" os dedos da mão do receptor escolhido.
      esperar(4, 1.0),
      // 5. Executam 8 saques passando pelos 4 códigos e depois trocam com A1 e A2.
      passo(5, [j('A1', 'D1', 2.8), j('D1', 'A1', 2.8), j('A2', 'B1', 2.8), j('B1', 'A2', 2.8)]),
    ],
  },

  // 183 · O levantador como "olhos" do atacante: chamada precoce do espaço vazio
  183: {
    bolaInicial: 'seta1.a',
    passos: [
      // 1. J1 faz a recepção para o centro da quadra (1,5 m da rede) e inicia a corrida de ataque.
      passo(1, [b('seta1.b', { alta: true, dur: 1.7 }), s('seta1', 1.7)]),
      // 2. J2 levanta e, no instante em que a bola deixa as mãos, vira o rosto para B1 e D1.
      passo(2, [b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.4 }), s('seta2', 1.4), s('seta5', 1.0, 1.4)]),
      // 3. Enquanto J1 faz os dois últimos passos, B1 e D1 se movimentam para fechar uma parte da quadra e deixar outra aberta.
      passo(3, [j('J1', 'seta3.b', 1.4), s('seta3', 1.4), j('B1', [149, 25], 0.8), j('D1', [231, 70], 1.0)]),
      // 4. Antes de J1 atingir o topo do salto, J2 grita UMA das 4 palavras-código.
      esperar(4, 1.2),
      // 5. J1 ataca obedecendo cegamente ao comando de voz de J2; a cada 8 ataques trocam de função.
      passo(5, [b('seta6.b', { de: 'seta6.a', dur: 1.1 }), s('seta6', 1.1), j('J1', 'J2', 2.4, 1.6), j('J2', 'J1', 2.4, 1.6)]),
    ],
  },

  // 184 · Radar na rede: avisando a movimentação do bloqueador ("Subiu!", "Saiu!", "Dois atrás!")
  184: {
    bolaInicial: { ref: 'J2', dx: 0, dy: -6 },
    passos: [
      // 1. Muitas vezes o atacante dá um lob/poke por cima de um bloqueio que não existe mais ("pulling").
      esperar(1, 1.4),
      // 2. D1 saca em J1; J1 recepciona e J2 vai levantar.
      passo(2, [b('seta1.b', { alta: true, dur: 1.7 }), s('seta1', 1.7)]),
      // 3. Assim que a bola sai da mão de J2, B1 faz uma de três ações na rede (fica e salta, retira na paralela ou na diagonal).
      passo(3, [j('B1', 'seta3.b', 1.8), s('seta3', 1.8)]),
      // 4. J2 acompanha B1 e grita o status do bloqueio: "SUBIU BLOCO!", "SAIU LINHA!" ou "DOIS ATRÁS!".
      passo(4, [s('seta4', 1.0), j('J1', 'seta2.b', 1.4), s('seta2', 1.4)]),
      // 5. Ouvindo "SAIU LINHA!" ou "DOIS ATRÁS!", J1 não dá lob no fundo: bate forte ou solta a largada curta aos 2 m.
      passo(5, [b('zona1', { de: 'seta5.a', dur: 1.0 }), s('seta5', 1.0)]),
    ],
  },

  // 185 · Comunicação ativa de saque e chamada de "pulling" na transição defensiva
  185: {
    bolaInicial: { ref: 'D1', dx: -6, dy: -3 },
    passos: [
      // 1. Fase 1 (pré-saque): B1 mostra o sinal atrás das costas e "pisca" os dedos indicando onde D1 deve sacar.
      passo(1, [s('seta1', 1.4), pausa(1.4)]),
      // 2. D1 confirma e executa o saque tático combinado.
      passo(2, [b('seta2.b', { alta: true, dur: 3.0 }), s('seta2', 3.0)]),
      // 3. Fase 2: se o passe de A1 foi perfeito na rede, B1 grita "MEU BLOCO!" e salta para fechar o corredor prometido.
      passo(3, [j('B1', [149, 34], 0.4), j('B1', [149, 40], 0.4, 0.4), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6, atraso: 0.2 }), s('seta3', 1.6, 0.2)]),
      // 4. Se o saque quebrou o passe para longe da rede (3,5 m ou mais), B1 cancela o sinal gritando "SAÍ! LIVRE!" enquanto recua.
      passo(4, [j('B1', 'seta4.b', 1.6), s('seta4', 1.6)]),
      // 5. D1 responde "VEM PRA LINHA, TÔ NA DIAGO!", coordenando a divisão do fundo sem baterem cabeça.
      passo(5, [j('D1', 'seta5.b', 1.8), s('seta5', 1.8)]),
    ],
  },

  // 186 · Código visual silencioso para dias de vento forte e barulho na arena
  186: {
    passos: [
      // 1. Com vento forte ou arena barulhenta, o parceiro a 5 m não escuta: as duplas usam códigos visuais rápidos.
      esperar(1, 1.4),
      // 2. Código visual de ataque (o receptor toca o próprio corpo antes do saque): ombro, peito, coxa ou 2 dedos na barriga.
      passo(2, [j('J1', [54, 38], 0.4), j('J1', [54, 40], 0.4, 0.4), j('J2', [54, 102], 0.4, 0.8), j('J2', [54, 104], 0.4, 1.2)]),
      // 3. Nos primeiros 5 minutos é proibido falar: toda a combinação do side-out é feita só por toques e sinais.
      passo(3, [
        b('seta1.b', { de: { ref: 'A2', dx: -6, dy: -3 }, alta: true, dur: 3.0 }), s('seta1', 3.0),
        b('seta2.b', { de: 'seta2.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta2', 1.6, 3.2),
        j('J2', 'seta3.b', 1.4, 3.4), s('seta3', 1.4, 3.4),
        b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.0, atraso: 5.0 }), s('seta5', 1.0, 5.0),
        j('J1', 'seta6.b', 1.3, 5.2), s('seta6', 1.3, 5.2),
        b('seta8.b', { de: 'seta8.a', dur: 1.0, atraso: 6.6 }), s('seta8', 1.0, 6.6),
      ]),
      // 4. Nos 5 minutos finais libera-se apenas 1 grito curto de direção no ar, somado ao código gestual prévio.
      esperar(4, 1.2),
    ],
  },

  // 187 · Ritual dos 12 segundos entre os pontos: leitura, ajuste tático e reset mental
  187: {
    passos: [
      // 1. Entre TODOS os pontos, as duplas têm 12 segundos para se encontrar no centro da quadra e cumprir o ritual de 3 passos.
      passo(1, [j('J1', [52.8, 37.8], 0.01), j('J2', [108.4, 102.8], 0.01), pausa(1.4)]),
      // 2. Segundos 1 a 4 (o toque físico + reset): bater as mãos olhando nos olhos e soltar o ar.
      passo(2, [j('J1', 'seta1.b', 1.2), s('seta1', 1.2), j('J2', 'seta3.b', 1.2), s('seta3', 1.2)]),
      // 3. Segundos 5 a 8: uma frase de leitura do que aconteceu, só dados objetivos e sem culpa.
      esperar(3, 1.4),
      // 4. Segundos 9 a 12: a decisão para o próximo ponto (ação exata da próxima bola).
      esperar(4, 1.4),
      // 5. No segundo 12 o professor apita autorizando o saque; sem o toque de mãos e a jogada combinada, perde 1 ponto.
      passo(5, [j('J1', 'seta5.b', 1.4), s('seta5', 1.4), j('J2', 'seta6.b', 1.4), s('seta6', 1.4)]),
    ],
  },

  // 188 · Desafio "Ponto Mudo Não Vale": jogo real onde a comunicação decide o placar
  188: {
    passos: [
      // 1. Disputa de um set até 15 pontos em que a qualidade da comunicação multiplica ou anula os pontos.
      esperar(1, 1.2),
      // 2. Checklist dos 3 elos obrigatórios em cada rali: sinal de bloqueio, grito "MINHA! — VAI!" e chamada do levantador.
      passo(2, [s('seta1', 1.2), b('seta2.b', { de: { ref: 'A2', dx: -6, dy: -3 }, alta: true, dur: 3.0, atraso: 1.4 }), s('seta2', 3.0, 1.4), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6, atraso: 4.6 }), s('seta3', 1.6, 4.6), b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.4, atraso: 6.3 }), s('seta4', 1.4, 6.3), j('J1', 'seta5.b', 1.4, 6.4), s('seta5', 1.4, 6.4), b('seta7.b', { de: 'seta7.a', dur: 1.0, atraso: 7.8 }), s('seta7', 1.0, 7.8)]),
      // 3. "Ponto Mudo Anulado": ganhar o rali sem cumprir qualquer um dos 3 elos zera o ponto e passa o saque.
      esperar(3, 1.2),
      // 4. "Bônus de Sintonia Perfeita" (+2): cumprir os 3 elos em voz alta e atacar exatamente na zona cantada.
      esperar(4, 1.2),
      // 5. Em bola que toca no bloqueio, o grito "TOCOU! É DOIS!" também é obrigatório para validar o contra-ataque.
      esperar(5, 1.2),
    ],
  },

  // ───── TÁTICA ─────
  // 189 · Sorteio de quadra, sol de frente e escolha tática de lado e função
  189: {
    revisar: 'O desenho mistura setas do sol/olhar, setas duplicadas em amarelo e as setas do rali; animei só saque, recepção, levantamento e ataque, e as demais ficam fixas.',
    passos: [
      // 1. O treinador reúne as duas duplas na rede e explica a "regra de ouro do sorteio": lado bom = contra o vento e com o sol pelas costas.
      esperar(1, 1.4),
      // 2. A2 saca do lado direito; J1 e J2 (no lado ruim, com o sol no rosto) aplicam as 3 adaptações táticas.
      passo(2, [b('seta5.b', { de: { ref: 'A2', dx: -6, dy: -3 }, alta: true, dur: 3.0 }), s('seta5', 3.0), s('seta6', 3.0)]),
      // 3. Adaptação 1 (recepção): J1 passa a bola mais baixa/média (3 m) e 1 m à frente de J2, para J2 não olhar para o sol.
      passo(3, [b('seta7.b', { de: 'seta7.a', alta: true, dur: 1.8 }), s('seta7', 1.8), s('seta8', 1.8)]),
      // 4. Adaptação 2 (levantamento): J2 vira os ombros em diagonal e levanta a bola mais esticada para a ponta.
      passo(4, [j('J2', 'seta9.b', 1.4), s('seta9', 1.4), b('seta11.b', { de: 'seta11.a', alta: true, dur: 1.6, atraso: 1.2 }), s('seta11', 1.6, 1.2), s('seta12', 1.6, 1.2)]),
      // 5. Adaptação 3 (ataque): J1 usa a mão guia como viseira e aplica um golpe de segurança; a cada 5 saques trocam de lado.
      passo(5, [j('J1', 'seta13.b', 1.4), s('seta13', 1.4), b('seta15.b', { de: 'seta15.a', dur: 1.0, atraso: 1.2 }), s('seta15', 1.0, 1.2)]),
    ],
  },

  // 190 · Tática do "Lado Bom" vs. "Lado Ruim" do vento (vento contra e a favor)
  190: {
    revisar: 'O desenho tem setas duplicadas em amarelo e uma seta sem ligação; animei só saque, recepção, levantamento e ataque, e as demais ficam fixas.',
    passos: [
      // 1. Explicação tática: jogar CONTRA o vento é o "lado bom"; A FAVOR do vento é o "lado ruim".
      esperar(1, 1.4),
      // 2. Mini-set até 14 pontos, com troca de lado obrigatória a cada 7 pontos somados.
      esperar(2, 1.2),
      // 3. Quem está na esquerda ("lado ruim"): saque mais curto ou topspin suave, passe seguro a 2,5 m e ataque com topspin ou largada.
      passo(3, [
        b('seta1.b', { de: { ref: 'A2', dx: -6, dy: -3 }, alta: true, dur: 3.0 }), s('seta1', 3.0),
        b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta3', 1.6, 3.2), s('seta4', 1.6, 3.2),
        j('J2', 'seta5.b', 1.4, 3.4), s('seta5', 1.4, 3.4),
        b('seta7.b', { de: 'seta7.a', alta: true, dur: 1.4, atraso: 5.0 }), s('seta7', 1.4, 5.0), s('seta8', 1.4, 5.0),
        j('J1', 'seta9.b', 1.3, 5.2), s('seta9', 1.3, 5.2),
        b('seta11.b', { de: 'seta11.a', dur: 1.0, atraso: 6.6 }), s('seta11', 1.0, 6.6), s('seta12', 1.0, 6.6),
      ]),
      // 4. Quem está na direita ("lado bom"): saque flutuante agressivo, passe perto da rede e cortada ou pingo contra o vento.
      esperar(4, 1.2),
      // 5. Errar saque ou ataque para fora no fundo no "lado ruim" custa 2 pontos.
      esperar(5, 1.2),
    ],
  },
}
