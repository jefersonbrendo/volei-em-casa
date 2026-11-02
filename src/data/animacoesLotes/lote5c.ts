/** Lote 5 (parte C): exercícios 191 a 204 (tática de jogo e jogos adaptados). */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, pausa, s, trocar } from './ajudantes'

const MOTIVO_TATICO = 'Diagrama tático: as setas escuras misturam bola e deslocamento e há setas amarelas duplicadas; a animação foi montada pelo texto e pela ordem das setas.'
const MOTIVO_JOGO = 'Diagrama de jogo adaptado: as duas primeiras setas marcam limites da quadra (não são movimento); animei só o rali de exemplo, na ordem do texto.'

export const LOTE_5C: Record<number, Animacao> = {
  // 191 · Jogar com vento lateral: a tática do "Corredor que Ajuda" vs. "Corredor que Expulsa"
  191: {
    revisar: MOTIVO_TATICO,
    passos: [
      // 1. Quando o vento sopra forte de uma lateral para a outra, os dois jogadores da dupla têm experiências opostas na rede.
      esperar(1, 1.4),
      // 2. Regra 1 (levantamento): no corredor para onde o vento sopra, a bola deve parar 1,5 m ANTES da antena.
      passo(2, [b('seta1.b', { de: 'seta1.a', alta: true, dur: 1.6 }), s('seta1', 1.6), s('seta2', 1.6), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.6, atraso: 2.0 }), s('seta5', 1.6, 2.0), s('seta6', 1.6, 2.0)]),
      // 3. Regra 2 (em quem sacar): no receptor que ataca no corredor onde o vento atrapalha a chegada da bola.
      esperar(3, 1.2),
      // 4. Regra 3 (ataque e bloqueio): no corredor superior bate-se na paralela; no inferior prioriza-se a diagonal contra o vento.
      passo(4, [b('seta3.b', { de: 'seta3.a', dur: 1.0 }), s('seta3', 1.0), b('seta7.b', { de: 'seta7.a', dur: 1.1, atraso: 1.4 }), s('seta7', 1.1, 1.4)]),
      // 5. Joguem 6 bolas explorando essa leitura e troquem de posição.
      trocar(5, 'J1', 'J2', 2.4),
    ],
  },

  // 192 · Escolha tática do alvo de saque: sobrecarregar um atacante ("isolamento") vs. quebrar o ritmo
  192: {
    revisar: MOTIVO_TATICO,
    bolaInicial: { ref: 'J2', dx: 5, dy: -3 },
    passos: [
      // 1. Nunca se saca "uma em cada um": a tática profissional é o ISOLAMENTO seguido da QUEBRA DE RITMO.
      esperar(1, 1.4),
      // 2. Saques 1 a 4: J2 saca 4 bolas seguidas em A1, mudando o local dentro da metade dele.
      passo(2, [
        b('seta1.b', { alta: true, dur: 2.2 }), s('seta1', 2.2), s('seta2', 2.2),
        b('seta3.b', { de: { ref: 'J2', dx: 5, dy: -3 }, alta: true, dur: 2.4, atraso: 2.4 }), s('seta3', 2.4, 2.4), s('seta4', 2.4, 2.4),
        b('seta5.b', { de: { ref: 'J2', dx: 5, dy: -3 }, alta: true, dur: 2.2, atraso: 5.0 }), s('seta5', 2.2, 5.0),
        b('seta7.b', { de: { ref: 'J2', dx: 5, dy: -3 }, alta: true, dur: 2.2, atraso: 7.4 }), s('seta7', 2.2, 7.4),
      ]),
      // 3. A1 corre na areia fofa, recepciona e salta para atacar 4 vezes seguidas, enquanto A2 só levanta e fica "frio".
      passo(3, [j('A1', [200, 60], 0.8), j('A1', [211, 53], 0.8, 0.9), j('A1', [200, 60], 0.8, 1.8), j('A1', [211, 53], 0.8, 2.7)]),
      // 4. Saque 5 (a armadilha): J1 pisca o sinal nas costas e J2 crava um saque rápido no peito de A2.
      passo(4, [b('seta9.b', { de: { ref: 'J2', dx: 5, dy: -3 }, alta: true, dur: 2.4 }), s('seta9', 2.4)]),
      // 5. Jogam os 5 pontos completos e depois invertem as duplas.
      passo(5, [j('J2', 'A1', 2.8), j('A1', 'J2', 2.8), j('J1', 'A2', 2.8), j('A2', 'J1', 2.8)]),
    ],
  },

  // 193 · Explorar o elo fraco: sacar no pior passador vs. sacar no melhor levantador
  193: {
    revisar: MOTIVO_TATICO,
    bolaInicial: { ref: 'J2', dx: 5, dy: -3 },
    passos: [
      // 1. Enigma tático: A1 ataca muito bem mas levanta mal; A2 levanta perfeitamente na mão de A1.
      esperar(1, 1.4),
      // 2. Sacando em A1, A2 faz um levantamento perfeito e A1 crava a bola na cabeça de quem sacou.
      esperar(2, 1.2),
      // 3. Rodada 1: sacar exclusivamente em A2 (o bom levantador) obriga A1 a levantar e A2 a atacar contra o bloqueio alto.
      passo(3, [b('seta1.b', { alta: true, dur: 2.6 }), s('seta1', 2.6), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6, atraso: 2.8 }), s('seta3', 1.6, 2.8), s('seta4', 1.6, 2.8), j('A1', 'seta5.b', 1.4, 3.0), s('seta5', 1.4, 3.0), b('seta7.b', { de: 'seta7.a', alta: true, dur: 1.4, atraso: 4.5 }), s('seta7', 1.4, 4.5), s('seta8', 1.4, 4.5)]),
      // 4. Rodada 2: J2 saca tirando A1 para fora da linha lateral, para que ele não consiga entrar para atacar.
      passo(4, [j('A2', 'seta9.b', 1.4), s('seta9', 1.4), b('seta10.b', { de: 'seta10.a', dur: 1.0, atraso: 1.0 }), s('seta10', 1.0, 1.0), s('seta11', 1.0, 1.0)]),
      // 5. Ao final das 10 bolas, analisam em qual tática marcaram mais pontos de bloqueio e defesa.
      esperar(5, 1.4),
    ],
  },

  // 194 · Mapear e trancar o golpe nº 1 do atacante adversário (tirar o "golpe de estimação")
  194: {
    revisar: MOTIVO_TATICO,
    bolaInicial: { ref: 'A2', dx: 0, dy: -6 },
    passos: [
      // 1. Todo jogador tem um "golpe de estimação" que usa em 70% das bolas difíceis.
      esperar(1, 1.4),
      // 2. Nos primeiros 4 ataques, A1 e A2 usam o golpe favorito, enquanto J1 e J2 leem o padrão.
      passo(2, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6), s('seta2', 1.6), b('seta4.b', { de: 'seta4.a', dur: 1.2, atraso: 1.8 }), s('seta4', 1.2, 1.8)]),
      // 3. A partir do 5º ataque, J1 e J2 ajustam os sinais para TRANCAR o golpe nº 1 daquele atacante.
      passo(3, [j('J1', 'seta3.b', 0.8), s('seta3', 0.8)]),
      // 4. Regra de ouro: "Nós não deixamos o adversário nos vencer com o melhor golpe dele!"
      esperar(4, 1.2),
      // 5. Contam quantas defesas e bloqueios surgem assim que tiram a opção nº 1 do atacante.
      passo(5, [b('seta6.b', { de: 'seta6.a', alta: true, dur: 1.6 }), s('seta6', 1.6), s('seta7', 1.6), b('seta8.b', { de: [127.8, 54.7], alta: true, dur: 1.4, atraso: 1.7 }), s('seta8', 1.4, 1.7), b('seta10.b', { de: 'seta10.a', dur: 1.2, atraso: 3.2 }), s('seta10', 1.2, 3.2), s('seta11', 1.2, 3.2)]),
    ],
  },

  // 195 · Atacar o defensor mais lento e explorar a retirada do bloqueador
  195: {
    revisar: MOTIVO_TATICO,
    passos: [
      // 1. Quando a dupla adversária é bem posicionada, como abrir buracos? Com 3 táticas de ataque de leitura.
      passo(1, [b('seta1.b', { de: [229, 104], alta: true, dur: 2.4 }), s('seta1', 2.4), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6, atraso: 2.6 }), s('seta3', 1.6, 2.6), s('seta4', 1.6, 2.6), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 4.3 }), s('seta5', 1.4, 4.3), s('seta6', 1.4, 4.3)]),
      // 2. Tática 1: atacar o bloqueador que retira (pulling), nos pés ou no contrapé da corrida dele.
      passo(2, [j('A1', 'seta7.b', 1.6), s('seta7', 1.6), b('seta10.b', { de: 'seta10.a', dur: 1.0, atraso: 1.2 }), s('seta10', 1.0, 1.2)]),
      // 3. Tática 2: pingar atrás do bloqueador alto, que salta inteiro (poke por cima de A1).
      passo(3, [b('seta8.b', { de: 'seta8.a', dur: 1.0 }), s('seta8', 1.0), s('seta9', 1.0), j('A1', [150, 36], 0.4, 0.2), j('A1', [150, 43], 0.4, 0.6)]),
      // 4. Tática 3: cut shot curto para obrigar A2 a mergulhar; no rali seguinte, lob ou bomba no fundo, nas costas dele.
      passo(4, [b('zona1', { de: [121.4, 40.8], dur: 0.9 }), b([240, 40], { de: [121.4, 40.8], alta: true, dur: 2.2, atraso: 1.5 })]),
      // 5. Disputam 8 ralis aplicando essa construção sequencial de ataques.
      esperar(5, 1.2),
    ],
  },

  // 196 · Mudança de plano tático durante o set ("Plano A para Plano B")
  196: {
    revisar: MOTIVO_TATICO,
    passos: [
      // 1. Um dos maiores erros das duplas amadoras é perder o set repetindo o mesmo plano do início ao fim.
      esperar(1, 1.4),
      // 2. Exemplo de Plano A (início do set): sacar em A1 na linha, bloquear a paralela com J1 e atacar bolas altas na ponta.
      passo(2, [b('seta2.b', { de: { ref: 'J2', dx: 5, dy: -3 }, alta: true, dur: 2.6 }), s('seta2', 2.6)]),
      // 3. Exemplo de Plano B (mudança radical): sacar na costura ou em A2 curto, J1 finge bloqueio e retira (dois no fundo).
      passo(3, [b('seta4.b', { de: { ref: 'J2_1', dx: 5, dy: -3 }, alta: true, dur: 2.4 }), s('seta4', 2.4), s('seta5', 2.4), j('J1_1', 'seta6.b', 1.6, 0.8), s('seta6', 1.6, 0.8)]),
      // 4. Gatilho de mudança: após 3 pontos seguidos do adversário, é obrigatório pedir um "tempo tático" de 15 s e ativar o Plano B.
      passo(4, [s('seta1', 1.4), pausa(1.4)]),
      // 5. A dupla que continuar repetindo o Plano A após sofrer 3 pontos seguidos perde mais 1 ponto de penalidade tática.
      esperar(5, 1.2),
    ],
  },

  // 197 · Gestão do placar ("Semáforo de Risco"): quando arriscar e quando jogar seguro
  197: {
    revisar: MOTIVO_TATICO,
    passos: [
      // 1. O "semáforo de risco" do placar tem 3 cenários, jogados em sequência (4 minutos cada).
      esperar(1, 1.4),
      // 2. Sinal VERDE (14 x 9): há margem para arriscar: saque viagem/flutuante na linha, bola de segunda, soltar o braço.
      passo(2, [
        b('seta1.b', { de: { ref: 'A2', dx: -6, dy: -3 }, alta: true, dur: 3.0 }), s('seta1', 3.0), s('seta2', 3.0),
        b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta3', 1.6, 3.2), s('seta4', 1.6, 3.2),
        b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 4.9 }), s('seta5', 1.4, 4.9), s('seta6', 1.4, 4.9),
        b('seta7.b', { de: 'seta7.a', dur: 1.0, atraso: 6.4 }), s('seta7', 1.0, 6.4),
      ]),
      // 3. Sinal AMARELO (10 x 10): equilíbrio total, jogo tático padrão com margem de 50 cm das linhas.
      esperar(3, 1.2),
      // 4. Sinal VERMELHO (19 x 19): proibido dar ponto de graça; erro de saque ou ataque fora custa o dobro (-2).
      passo(4, [b('seta9.b', { de: 'seta9.a', dur: 1.0 }), s('seta9', 1.0)]),
      // 5. Vence a dupla que somar mais vitórias nos 3 cenários aplicando a gestão correta.
      esperar(5, 1.2),
    ],
  },

  // 198 · Desafio "Missão Tática Secreta": jogo real com execução de plano antes do ponto
  198: {
    revisar: MOTIVO_TATICO,
    passos: [
      // 1. Antes de cada bloco de 2 pontos, a dupla vai até o treinador (T) e recebe em segredo uma missão que vale 3 pontos.
      passo(1, [j('J1', 'T', 1.5), j('J2', 'T', 2.0), j('J1', 'J1', 1.5, 2.4), j('J2', 'J2', 2.0, 2.4)]),
      // 2. Missão 1 ("Isca curta + bomba fundo"): no 1º ponto atacar uma bola curta aos 2 m; no 2º, atacar o fundo às costas do defensor.
      passo(2, [b('seta1.b', { de: { ref: 'J1', dx: 6, dy: 0 }, alta: true, dur: 2.6 }), s('seta1', 2.6)]),
      // 3. Missão 2 ("Armadilha de falso bloqueio"): saca na linha, mostra bloqueio pesado, retira no último segundo e defende o fundo.
      passo(3, [j('J1', 'seta7.b', 1.6), s('seta7', 1.6), b('seta9.b', { de: 'seta9.a', dur: 1.4, atraso: 0.8 }), s('seta9', 1.4, 0.8)]),
      // 4. Missão 3 ("Congelamento + ataque de 2ª"): sacar no melhor levantador e, quando a defesa subir na mão, atacar de segunda.
      passo(4, [b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6 }), s('seta3', 1.6), s('seta4', 1.6), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 1.7 }), s('seta5', 1.4, 1.7), s('seta6', 1.4, 1.7)]),
      // 5. Missão 4 ("Gato e rato na diagonal"): J1 fecha a linha, J2 se esconde atrás do bloco e corre no último instante para a diagonal.
      passo(5, [j('J2', 'seta8.b', 1.4), s('seta8', 1.4), b('seta11.b', { de: 'seta11.a', alta: true, dur: 1.6, atraso: 1.0 }), s('seta11', 1.6, 1.0), s('seta12', 1.6, 1.0)]),
      // 6. A cada 2 pontos é a vez da Dupla A1 + A2 receber uma missão; vence quem chegar a 15 pontos primeiro.
      passo(6, [b('seta13.b', { de: 'seta13.a', dur: 1.0 }), s('seta13', 1.0), j('J1', 'A1', 2.8, 1.4), j('A1', 'J1', 2.8, 1.4), j('J2', 'A2', 2.8, 1.4), j('A2', 'J2', 2.8, 1.4)]),
    ],
  },

  // 199 · Jogo 2x2 de iniciação com bola lançada e 1 agarrada permitida no passe
  199: {
    revisar: MOTIVO_JOGO,
    bolaInicial: { ref: 'A2', dx: -6, dy: -3 },
    passos: [
      // 1. O ponto começa com A2 lançando a bola com as duas mãos por cima da rede, da linha de 6 m.
      passo(1, [b('seta3.b', { alta: true, dur: 2.4 }), s('seta3', 2.4), s('seta4', 2.4)]),
      // 2. Regra adaptada do 1º toque: manchete direta ou AGARRAR a bola em posição baixa de manchete e lançá-la para o alto.
      passo(2, [b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.6 }), s('seta5', 1.6), s('seta6', 1.6)]),
      // 3. O 2º toque (levantamento de J2) e o 3º (ataque de J1) são executados normalmente, sem segurar a bola.
      passo(3, [j('J2', 'seta7.b', 1.2), s('seta7', 1.2), b('seta9.b', { de: 'seta9.a', alta: true, dur: 1.4, atraso: 1.0 }), s('seta9', 1.4, 1.0), s('seta10', 1.4, 1.0), b('seta11.b', { de: 'seta11.a', dur: 1.0, atraso: 2.6 }), s('seta11', 1.0, 2.6)]),
      // 4. Do outro lado, A1 e A2 têm a mesma regra (só o 1º contato de defesa pode ser segurado).
      esperar(4, 1.2),
      // 5. Sets curtos até 11 pontos: ponto de 3 toques sem agarrar a 1ª bola vale 2 pontos.
      esperar(5, 1.4),
    ],
  },

  // 200 · Duelo 1x1 em mini-corredor curto (4x4 m) com autolevantamento
  200: {
    revisar: MOTIVO_JOGO,
    bolaInicial: 'seta5.a',
    passos: [
      // 1. O jogo acontece exclusivamente dentro do quadrado de 4x4 m.
      esperar(1, 1.4),
      // 2. Regra de 2 toques obrigatórios por jogador: o 1º toque é para o alto, para si mesmo; o 2º envia a bola ao quadrado adversário.
      passo(2, [b('seta5.b', { alta: true, dur: 1.0 }), s('seta5', 1.0), s('seta6', 1.0), b('seta7.b', { de: 'seta7.a', alta: true, dur: 1.6, atraso: 1.2 }), s('seta7', 1.6, 1.2), s('seta8', 1.6, 1.2)]),
      // 3. O ponto começa com um saque de toque ou por baixo atrás da linha de 4 m.
      passo(3, [b('seta3.b', { de: { ref: 'A1', dx: -6, dy: -3 }, alta: true, dur: 1.6 }), s('seta3', 1.6), s('seta4', 1.6)]),
      // 4. Para passar a bola no 2º toque valem só golpes controlados da praia (manchete, toque limpo, poke ou cobra).
      passo(4, [b('seta9.b', { de: 'seta9.a', alta: true, dur: 1.6 }), s('seta9', 1.6), s('seta10', 1.6)]),
      // 5. Sets de 7 pontos; depois os vencedores de cada corredor se enfrentam.
      esperar(5, 1.2),
    ],
  },

  // 201 · 1x1 em meia-quadra longitudinal (8x4 m) com 2 ou 3 toques individuais
  201: {
    revisar: MOTIVO_JOGO,
    passos: [
      // 1. Cada jogador defende sozinho um corredor de 8 m de profundidade por 4 m de largura.
      esperar(1, 1.4),
      // 2. O saque é feito normalmente atrás da linha de fundo de 8 m.
      passo(2, [b('seta1.b', { de: { ref: 'A1', dx: -6, dy: -3 }, alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 3. O jogador pode usar 2 OU 3 toques seguidos sozinho: recepciona, corre atrás da própria bola, levanta e ataca.
      passo(3, [b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6 }), s('seta3', 1.6), s('seta4', 1.6), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.2, atraso: 1.8 }), s('seta5', 1.2, 1.8), b('seta7.b', { de: 'seta7.a', dur: 1.0, atraso: 3.2 }), s('seta7', 1.0, 3.2), s('seta8', 1.0, 3.2)]),
      // 4. A estratégia vencedora: fazer o adversário correr para a frente (largada aos 2 m) e na bola seguinte jogar no fundo (lob aos 8 m).
      passo(4, [b('zona1', { de: [113, 48.6], dur: 0.9 }), b('zona2', { de: [113, 48.6], alta: true, dur: 2.0, atraso: 1.3 })]),
      // 5. Partidas de 4 minutos por bateria, trocando de adversário (rali da pista de baixo).
      passo(5, [b('seta9.b', { de: 'seta9.a', alta: true, dur: 2.2 }), s('seta9', 2.2), s('seta10', 2.2)]),
    ],
  },

  // 202 · Jogo 2x2 na "Caixa Curta" (zona até 5 metros) para domínio de jogo curto
  202: {
    revisar: MOTIVO_JOGO,
    bolaInicial: { ref: 'A2', dx: -6, dy: -3 },
    passos: [
      // 1. Toda bola que cair além da linha de 5 m é considerada FORA.
      esperar(1, 1.4),
      // 2. O saque deve ser feito atrás da linha de 5 m, por baixo ou flutuante curto controlado.
      passo(2, [b('seta3.b', { alta: true, dur: 2.2 }), s('seta3', 2.2), s('seta4', 2.2)]),
      // 3. Com só 5 m de fundo, é proibido dar cortada forte: o jogo exige precisão nas laterais, diagonais curtas e pingos.
      esperar(3, 1.2),
      // 4. A dupla é obrigada a usar os 3 toques: recepção, levantamento e golpe colocado dentro dos 5 m.
      passo(4, [b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.6 }), s('seta5', 1.6), s('seta6', 1.6), j('J2', 'seta7.b', 1.2, 0.3), s('seta7', 1.2, 0.3), b('seta9.b', { de: 'seta9.a', alta: true, dur: 1.4, atraso: 1.6 }), s('seta9', 1.4, 1.6), s('seta10', 1.4, 1.6), b('zona1', { de: 'seta11.a', dur: 1.0, atraso: 3.2 }), s('seta11', 1.0, 3.2), s('seta12', 1.0, 3.2)]),
      // 5. Jogam sets até 11 pontos.
      esperar(5, 1.2),
    ],
  },

  // 203 · Duelo 1x1 cruzado (só vale diagonal de meia-quadra)
  203: {
    revisar: MOTIVO_JOGO,
    bolaInicial: { ref: 'J1', dx: 6, dy: -3 },
    passos: [
      // 1. J1 (corredor superior esquerdo) saca cruzado em diagonal para o corredor inferior direito de A1.
      passo(1, [b('zona2', { alta: true, dur: 2.8 })]),
      // 2. Toda a partida acontece exclusivamente na diagonal cruzada; bola na paralela é FORA.
      passo(2, [s('seta3', 1.4), pausa(1.0)]),
      // 3. Cada jogador tem 2 toques: o 1º amortece na própria diagonal e o 2º ataca cruzado de volta.
      passo(3, [b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.6 }), s('seta5', 1.6), s('seta6', 1.6), s('seta7', 1.6)]),
      // 4. O jogador cobre desde o "cut shot" curtíssimo perto do centro da rede até a diagonal longa no canto de 8 m.
      passo(4, [b('seta9.b', { de: 'seta9.a', dur: 1.2 }), s('seta9', 1.2), s('seta10', 1.2), b('seta11.b', { de: 'seta11.a', alta: true, dur: 2.0, atraso: 1.5 }), s('seta11', 2.0, 1.5)]),
      // 5. Sets de 9 pontos; depois invertem a diagonal para treinar os dois ângulos do corpo.
      passo(5, [j('J1', 'A1', 2.8), j('A1', 'J1', 2.8)]),
    ],
  },

  // 204 · Jogo 2x2 em quadra estreita (corredor de 16x5 m) para precisão linear
  204: {
    revisar: MOTIVO_JOGO,
    passos: [
      // 1. Com 5 m de largura quase não há espaço lateral: o jogo vira um duelo vertical de frente vs. fundo.
      esperar(1, 1.4),
      // 2. Na recepção, J1 e J2 dividem os 5 m (2,5 m para cada um) com altíssima precisão.
      passo(2, [b('seta2.b', { de: { ref: 'A2', dx: -6, dy: -3 }, alta: true, dur: 3.0 }), s('seta2', 3.0), b('seta4.b', { de: 'seta4.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta4', 1.6, 3.2), s('seta5', 1.6, 3.2)]),
      // 3. Na defesa, o bloqueador fecha metade do corredor de 5 m enquanto o defensor cuida do restante e dos lobs no fundo.
      passo(3, [j('A1', [150, 52], 0.4), j('A1', [150, 58], 0.4, 0.4)]),
      // 4. Qualquer levantamento ou ataque que espalhe para os lados vai para fora: exige ombros alinhados com a linha lateral.
      passo(4, [j('J2', 'seta6.b', 1.2), s('seta6', 1.2), b('seta8.b', { de: 'seta8.a', alta: true, dur: 1.4, atraso: 1.0 }), s('seta8', 1.4, 1.0), s('seta9', 1.4, 1.0)]),
      // 5. Jogam um set até 15 pontos.
      passo(5, [b('zona1', { de: 'seta10.a', dur: 0.9 }), s('seta10', 0.9), s('seta11', 0.9), b('zona2', { de: 'seta12.a', alta: true, dur: 1.8, atraso: 1.2 }), s('seta12', 1.8, 1.2)]),
    ],
  },
}
