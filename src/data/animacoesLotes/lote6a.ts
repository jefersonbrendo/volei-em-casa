/** Lote 6 (parte A): exercícios 205 a 220 (jogos condicionados e circuito físico). */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, pausa, s } from './ajudantes'

const MOTIVO_JOGO = 'Diagrama de jogo condicionado: setas escuras misturam bola e deslocamento e há setas amarelas duplicadas; a animação foi montada pelo texto e pela ordem das setas.'
const par = (a: string, c: string, dur = 2.8, atraso = 0) => [j(a, c, dur, atraso), j(c, a, dur, atraso)]

export const LOTE_6A: Record<number, Animacao> = {
  // 205 · Jogo 2x2 condicionado: "Proibido atacar na paralela" (só vale diagonal)
  205: {
    revisar: MOTIVO_JOGO,
    passos: [
      // 1. O saque, a recepção e o levantamento são normais na quadra inteira.
      passo(1, [b('seta1.b', { de: [252, 104], alta: true, dur: 3.0 }), s('seta1', 3.0), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta3', 1.6, 3.2), s('seta4', 1.6, 3.2), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 4.9 }), s('seta5', 1.4, 4.9), s('seta6', 1.4, 4.9)]),
      // 2. Regra de restrição: toda bola de ataque (3º toque) precisa cruzar a quadra em DIAGONAL.
      passo(2, [b('zona2', { de: 'seta9.a', dur: 1.1 }), s('seta9', 1.1)]),
      // 3. Atacar na paralela (mesmo caindo na quadra) é ponto automático do adversário.
      esperar(3, 1.2),
      // 4. Desafio mental: com a diagonal fechada, usar as 3 variações (diagonal longa, cut shot curtíssimo, bola alta nas mãos do bloqueio).
      passo(4, [b('zona1', { de: 'seta7.a', dur: 1.0 }), s('seta7', 1.0), s('seta8', 1.0), b('zona2', { de: 'seta9.a', alta: true, dur: 2.0, atraso: 1.4 })]),
      // 5. Após 7 minutos, invertem a regra: só vale atacar no corredor da paralela.
      esperar(5, 1.4),
    ],
  },

  // 206 · Jogo 2x2 de habilidade pura: "Proibido Cortar Forte" (Festival de Shots)
  206: {
    revisar: MOTIVO_JOGO,
    bolaInicial: 'seta1.a',
    passos: [
      // 1. Partida 2x2 em que é TERMINANTEMENTE PROIBIDO dar cortada forte.
      esperar(1, 1.4),
      // 2. Só valem os golpes de habilidade: cut shot, lob, poke, cobra ou toque limpo perpendicular aos ombros.
      passo(2, [b('seta1.b', { alta: true, dur: 1.6 }), s('seta1', 1.6), s('seta2', 1.6), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.4, atraso: 1.8 }), s('seta3', 1.4, 1.8), s('seta4', 1.4, 1.8), b('zona1', { de: 'seta5.a', dur: 0.9, atraso: 3.4 }), s('seta5', 0.9, 3.4), s('seta6', 0.9, 3.4)]),
      // 3. Apesar de ser proibido bater forte, o atacante salta e arma o braço alto olhando para os defensores.
      passo(3, [j('J1', [53, 44], 0.4), j('J1', [53, 50], 0.4, 0.4)]),
      // 4. Sem cortada, os ralis ficam longos: colocar a bola exatamente onde a areia está vazia.
      passo(4, [b('zona2', { de: 'seta7.a', dur: 1.0 }), s('seta7', 1.0), s('seta8', 1.0), b('zona3', { de: 'seta9.a', alta: true, dur: 2.4, atraso: 1.3 }), s('seta9', 2.4, 1.3), s('seta10', 2.4, 1.3), b('zona4', { de: 'seta11.a', alta: true, dur: 2.4, atraso: 4.0 }), s('seta11', 2.4, 4.0), s('seta12', 2.4, 4.0)]),
      // 5. Qualquer largada ilegal ou batida forte dá ponto ao adversário.
      esperar(5, 1.2),
    ],
  },

  // 207 · Rei da Quadra clássico ("King of the Court" com fila de duplas desafiantes)
  207: {
    revisar: MOTIVO_JOGO,
    bolaInicial: { ref: 'A2', dx: -6, dy: -3 },
    passos: [
      // 1. Só a dupla que está no Lado do Rei (direita) pode somar pontos.
      esperar(1, 1.4),
      // 2. O rali começa com a dupla da fila (ou o treinador) sacando.
      esperar(2, 1.2),
      // 3. Formato dinâmico: um jogador do Lado do Rei (A2) saca contra a dupla Desafiante.
      passo(3, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 4. Se a dupla Desafiante vence, derruba o Rei: sobe ao Trono, e a dupla da fila entra na esquerda.
      passo(4, [b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6 }), s('seta3', 1.6), s('seta4', 1.6), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 1.7 }), s('seta5', 1.4, 1.7), s('seta6', 1.4, 1.7), b('seta7.b', { de: 'seta7.a', dur: 1.1, atraso: 3.2 }), s('seta7', 1.1, 3.2), j('J1', 'A1', 2.4, 4.6), j('J2', 'A2', 2.4, 4.6), j('A1', 'F1', 2.4, 4.6), j('A2', 'F2', 2.4, 4.6), j('F1', 'J1', 2.4, 4.6), j('F2', 'J2', 2.4, 4.6), s('seta9', 2.4, 4.6)]),
      // 5. Se a dupla do Rei defende e vence o rali, marca +1 ponto e continua no Trono contra a próxima dupla.
      esperar(5, 1.4),
    ],
  },

  // 208 · Giro rápido de 4 a 6 duplas: "para subir ao Trono precisa confirmar 2 bolas"
  208: {
    revisar: MOTIVO_JOGO,
    bolaInicial: { ref: 'A2', dx: -6, dy: -3 },
    passos: [
      // 1. Com turma grande, cada desafiante joga 2 bolas encadeadas (confirmação dupla).
      esperar(1, 1.4),
      // 2. Bola 1: A2 (do Trono) saca em J1 + J2; se o Trono vencer, ganha +1 ponto e entra a próxima dupla da fila.
      passo(2, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta3', 1.6, 3.2), s('seta4', 1.6, 3.2), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 4.9 }), s('seta5', 1.4, 4.9), s('seta6', 1.4, 4.9), b('seta7.b', { de: 'seta7.a', dur: 1.1, atraso: 6.4 }), s('seta7', 1.1, 6.4)]),
      // 3. Se os Desafiantes vencerem a Bola 1, o treinador lança uma Bola 2 de confirmação para o Lado do Rei atacar.
      passo(3, [b('seta9.b', { de: 'seta9.a', alta: true, dur: 1.8 }), s('seta9', 1.8), s('seta10', 1.8)]),
      // 4. J1 e J2 defendem o ataque do Rei na Bola 2 e matam o contra-ataque para confirmar a queda do Rei.
      passo(4, [b('seta11.b', { de: 'seta11.a', dur: 1.2 }), s('seta11', 1.2)]),
      // 5. Se o Rei vencer a Bola 2, defende o trono e continua contra a próxima dupla da fila.
      esperar(5, 1.2),
    ],
  },

  // 209 · Jogo situado: rali iniciado a partir de "Recepção Quebrada" (Sufoco Inicial)
  209: {
    revisar: MOTIVO_JOGO,
    passos: [
      // 1. Em vez de saque, o treinador lança a 1ª bola em um dos 3 cones de "Recepção Quebrada".
      passo(1, [b('seta1.b', { de: [252, 83], alta: true, dur: 3.0 }), s('seta1', 3.0), s('seta2', 3.0)]),
      // 2. A bola caindo no Cone A, B ou C já é o 2º TOQUE (levantamento de emergência) da dupla.
      esperar(2, 1.0),
      // 3. J2 corre até o cone, resgata de manchete alta para a zona segura (2 m da rede) e J1 ataca esse levantamento.
      passo(3, [j('J2', 'seta3.b', 1.4), s('seta3', 1.4), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.8, atraso: 1.2 }), s('seta5', 1.8, 1.2), s('seta6', 1.8, 1.2), j('J1', 'seta7.b', 1.2, 1.8), s('seta7', 1.2, 1.8), b('seta9.b', { de: 'seta9.a', dur: 1.0, atraso: 3.0 }), s('seta9', 1.0, 3.0), s('seta10', 1.0, 3.0)]),
      // 4. A partir daí o rali corre livre até a bola cair na areia.
      esperar(4, 1.2),
      // 5. Vencer saindo do sufoco vale 2 pontos; se A1 e A2 contra-atacarem, 1 ponto; trocam a cada 6 bolas.
      passo(5, par('J1', 'A1')),
    ],
  },

  // 210 · Jogo iniciado em "Defesa de Guerra": só entra no rali quem salvar a 1ª pancada
  210: {
    revisar: MOTIVO_JOGO,
    passos: [
      // 1. Nenhum ponto começa com saque: o treinador (T) bate uma bola difícil contra a defesa da Dupla J1 + J2.
      passo(1, [b('seta1.b', { de: [136, 152], dur: 1.6 }), s('seta1', 1.6)]),
      // 2. J1 e J2 defendem a 1ª bola (1º toque), fazem o levantamento de transição (2º) e atacam (3º) contra A1 e A2.
      passo(2, [b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.8 }), s('seta3', 1.8), s('seta4', 1.8), j('J1', 'seta5.b', 1.4, 0.4), s('seta5', 1.4, 0.4), b('seta7.b', { de: 'seta7.a', alta: true, dur: 1.4, atraso: 2.0 }), s('seta7', 1.4, 2.0), s('seta8', 1.4, 2.0), j('J2', 'seta9.b', 1.4, 2.2), s('seta9', 1.4, 2.2), b('seta11.b', { de: 'seta11.a', dur: 1.0, atraso: 3.6 }), s('seta11', 1.0, 3.6)]),
      // 3. A partir do ataque de J1/J2, o rali segue valendo ponto normal entre as duas duplas.
      esperar(3, 1.2),
      // 4. Gatilho de ouro: se J1 e J2 deixarem a 1ª bola cair, o treinador bate imediatamente para A1 e A2 contra-atacarem.
      esperar(4, 1.2),
      // 5. A cada 5 bolas iniciadas na esquerda, o treinador passa a iniciar 5 bolas na direita.
      passo(5, [j('T', [139, 12], 2.0)]),
    ],
  },

  // 211 · Jogo de pontuação agressiva: "Ace, Bloqueio e Bola de 2ª valem 3 Pontos!"
  211: {
    revisar: MOTIVO_JOGO,
    bolaInicial: { ref: 'J1_1', dx: 6, dy: -3 },
    passos: [
      // 1. Set até 21 pontos: o ponto normal vale 1, mas existem 3 jogadas especiais que valem 3 pontos imediatos.
      esperar(1, 1.4),
      // 2. Bônus 1 (saque ace = 3 pts): o saque cai na areia adversária sem toque, ou toca só num receptor sem 2º toque.
      passo(2, [b('zona2', { alta: true, dur: 2.8 })]),
      // 3. Bônus 2 (ponto direto de bloqueio = 3 pts): o bloqueador abafa o ataque adversário e a bola cai na quadra oposta.
      passo(3, [j('J1', [128, 38], 0.35), j('J1', [128, 44], 0.35, 0.35), b('seta7.b', { de: 'seta7.a', dur: 0.8, atraso: 0.2 }), s('seta7', 0.8, 0.2), s('seta8', 0.8, 0.2)]),
      // 4. Bônus 3 (ataque de segunda bola = 3 pts): a recepção sobe boa e o levantador ataca no 2º contato.
      passo(4, [b('seta1.b', { de: 'seta1.a', alta: true, dur: 1.6 }), s('seta1', 1.6), s('seta2', 1.6), j('J2', 'seta3.b', 1.2, 0.3), s('seta3', 1.2, 0.3), b('zona3', { de: 'seta5.a', dur: 1.0, atraso: 1.8 }), s('seta5', 1.0, 1.8)]),
      // 5. Trava tática: cada erro de saque direto dá +2 pontos ao adversário.
      esperar(5, 1.2),
    ],
  },

  // 212 · Duelo 1x1 em quadra inteira (8x8 m) com "Levantador Fixo Neutro" na rede
  212: {
    revisar: MOTIVO_JOGO,
    passos: [
      // 1. Clássico treino dos atletas profissionais: J1 enfrenta A1 no 1x1, valendo toda a quadra de 8x8 m.
      esperar(1, 1.4),
      // 2. L1 e L2 são levantadores fixos: não bloqueiam, não defendem o 1º toque e não atacam.
      esperar(2, 1.2),
      // 3. J1 precisa, sozinho: recepcionar o saque, correr para atacar o levantamento de L1 e voltar para defender.
      passo(3, [b('seta1.b', { de: { ref: 'A1', dx: -6, dy: -3 }, alta: true, dur: 3.0 }), s('seta1', 3.0), s('seta2', 3.0), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta3', 1.6, 3.2), s('seta4', 1.6, 3.2), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 4.9 }), s('seta5', 1.4, 4.9), s('seta6', 1.4, 4.9), j('J1', 'seta7.b', 1.4, 5.0), s('seta7', 1.4, 5.0), b('seta9.b', { de: 'seta9.a', dur: 1.0, atraso: 6.4 }), s('seta9', 1.0, 6.4), s('seta10', 1.0, 6.4)]),
      // 4. Com um único defensor cobrindo 8x8 m, basta ler para onde o adversário corre e colocar a bola no canto oposto.
      passo(4, [b('seta11.b', { de: 'seta11.a', dur: 1.1 }), s('seta11', 1.1), b('seta13.b', { de: 'seta13.a', dur: 1.1, atraso: 1.5 }), s('seta13', 1.1, 1.5)]),
      // 5. Mini-sets de 5 pontos; trocam os papéis: L1 vira o jogador de 1x1 e J1, o levantador fixo.
      passo(5, [...par('J1', 'L1'), ...par('A1', 'L2')]),
    ],
  },

  // 213 · Simulação de fim de set no limite: placar começa em 18x18 (com 1 time-out)
  213: {
    revisar: MOTIVO_JOGO,
    passos: [
      // 1. Muitas duplas jogam bem até o ponto 15 e travam aos 18x18: falta treinar a pressão do fim de set.
      esperar(1, 1.4),
      // 2. Toda partida começa empatada em 18 x 18 (vai até 21, abrindo 2 pontos de vantagem).
      passo(2, [b('seta1.b', { de: { ref: 'A2', dx: -6, dy: -3 }, alta: true, dur: 3.0 }), s('seta1', 3.0), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta3', 1.6, 3.2), s('seta4', 1.6, 3.2), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 4.9 }), s('seta5', 1.4, 4.9), s('seta6', 1.4, 4.9), j('J1', 'seta7.b', 1.4, 5.0), s('seta7', 1.4, 5.0), b('seta9.b', { de: 'seta9.a', dur: 1.0, atraso: 6.4 }), s('seta9', 1.0, 6.4)]),
      // 3. Cada dupla tem 1 pedido de tempo (time-out de 20 s) nos pontos finais e é OBRIGATÓRIO usá-lo antes de o jogo acabar.
      passo(3, [pausa(1.6)]),
      // 4. A soma múltipla de 7 (no 21x21 a soma é 42): as duplas trocam de lado na quadra.
      passo(4, [...par('J1', 'A2'), ...par('J2', 'A1')]),
      // 5. Cada dupla joga 3 finais de set seguidos (um sacando, um recebendo e o terceiro no sorteio).
      passo(5, [b('seta11.b', { de: 'seta11.a', dur: 1.2 }), s('seta11', 1.2)]),
    ],
  },

  // 214 · Desafio supremo de tie-break (12x12 até 15 pontos com confirmação no match point)
  214: {
    revisar: MOTIVO_JOGO,
    passos: [
      // 1. O 3º set (tie-break) vai até 15 pontos, com troca de lado a cada 5 pontos somados.
      esperar(1, 1.4),
      // 2. O jogo começa em 12 x 12: logo após o 1º ponto (13 x 12, soma 25) as duplas já trocam de lado.
      passo(2, [b('seta1.b', { de: { ref: 'A2', dx: -6, dy: -3 }, alta: true, dur: 3.0 }), s('seta1', 3.0), b('seta3.b', { de: 'seta3.a', alta: true, dur: 1.6, atraso: 3.2 }), s('seta3', 1.6, 3.2), s('seta4', 1.6, 3.2), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 4.9 }), s('seta5', 1.4, 4.9), s('seta6', 1.4, 4.9), b('seta7.b', { de: 'seta7.a', dur: 1.1, atraso: 6.4 }), s('seta7', 1.1, 6.4), ...par('J1', 'A2', 2.6, 7.8), ...par('J2', 'A1', 2.6, 7.8)]),
      // 3. Match point confirmado: ao vencer o 15º ponto, o treinador lança a "Bola Final do Campeonato" para confirmar o último ataque.
      passo(3, [b('seta9.b', { de: 'seta9.a', alta: true, dur: 1.8 }), s('seta9', 1.8), s('seta10', 1.8)]),
      // 4. É obrigatório abrir 2 pontos de diferença E confirmar a Bola Final para ser campeão do desafio.
      esperar(4, 1.2),
    ],
  },

  // 215 · Circuito de força de base para pernas (agachamento, afundo e ponte)
  215: {
    passos: [
      // 1. Os jogadores posicionam-se nas estações demarcadas pelos cones.
      esperar(1, 1.2),
      // 2. Estação 1 (agachamento): desce até 90 graus, segura 2 s embaixo e sobe empurrando a areia.
      passo(2, [j('J1', [39, 49], 0.6), j('J1', [39, 45], 0.6, 1.4), j('J1', [39, 49], 0.6, 2.0), j('J1', [39, 45], 0.6, 3.4)]),
      // 3. Estação 2 (afundo estático): passo à frente, desce o joelho de trás, sobe e troca a perna a cada repetição.
      passo(3, [j('J2', [45, 82], 0.6), j('J2', [39, 82], 0.6, 0.8), j('J2', [45, 82], 0.6, 1.6), j('J2', [39, 82], 0.6, 2.4)]),
      // 4. Estação 3 (ponte de glúteo): deitado, eleva o quadril até alinhar joelhos, quadril e ombros, segura 2 s e desce.
      passo(4, [j('J3', [39, 116], 0.6), j('J3', [39, 120], 0.6, 1.4), j('J3', [39, 116], 0.6, 2.0), j('J3', [39, 120], 0.6, 3.4)]),
      // 5. Volume e pausa: 3 voltas nas 3 estações, 40 s de atividade e 30 s de descanso na troca.
      passo(5, [j('J1', 'J2', 2.0), j('J2', 'J3', 2.0), j('J3', 'J1', 2.0), s('seta1', 1.2), s('seta2', 1.2, 0.3), s('seta3', 1.2, 0.6)]),
    ],
  },

  // 217 · Prevenção de tornozelo e joelho: equilíbrio unipodal e alcance em Y
  217: {
    revisar: 'O jogador fica parado sobre uma perna: as setas só mostram o alcance do pé livre, então a animação desenha as setas do "Y" na ordem do texto e não move o jogador.',
    passos: [
      // 1. J1 e J2 apoiam só o pé direito no centro do "Y", joelho destravado e mãos na cintura.
      esperar(1, 1.4),
      // 2. Com a perna esquerda no ar, flexiona o joelho de apoio e toca de leve o Cone 1 (à frente), voltando ao centro.
      passo(2, [s('seta1', 1.0), pausa(0.4), s('seta6', 1.0)]),
      // 3. Leva o pé livre ao Cone 2 (diagonal traseira externa) e depois ao Cone 3 (diagonal traseira cruzando por trás da perna de apoio).
      passo(3, [s('seta2', 1.0), pausa(0.4), s('seta4', 1.0), s('seta7', 1.0, 0.2), pausa(0.4), s('seta9', 1.0)]),
      // 4. Volume e pausa: 3 séries de 8 giros completos no Y, com 40 s de descanso entre as séries.
      esperar(4, 1.4),
    ],
  },

  // 219 · Pliometria básica com aterrissagem amortecida (salto vertical + horizontal)
  219: {
    passos: [
      // 1. J1 e J2 iniciam em base atlética nos cones de saída.
      esperar(1, 1.2),
      // 2. Salto 1 (vertical): braços para cima, salto máximo no lugar, aterrissagem em meio-agachamento e 2 s congelados.
      passo(2, [j('J1', [30, 47], 0.4), j('J1', [30, 53], 0.4, 0.4), j('J2', [30, 108], 0.4), j('J2', [30, 114], 0.4, 0.4)]),
      // 3. Salto 2 (horizontal curto): impulsiona a areia 1,5 m à frente e aterrissa suave e silencioso.
      passo(3, [j('J1', [48, 53], 0.6), j('J2', [48, 114], 0.6)]),
      // 4. Repete a combinação 3 vezes até completar os 4,5 m do corredor (6 saltos por passagem).
      passo(4, [j('J1', 'seta1.b', 2.4), s('seta1', 2.4), j('J2', 'seta2.b', 2.4), s('seta2', 2.4)]),
      // 5. Volume e pausa: 4 séries de 6 saltos, retornando em caminhada lenta durante os 60 s de descanso.
      passo(5, [j('J1', [31.8, 53], 2.4), s('seta3', 2.4), j('J2', [31.8, 114], 2.4)]),
    ],
  },

  // 220 · Pliometria lateral sobre linha de cones (potência frontal e estabilização)
  220: {
    passos: [
      // 1. J1 e J2 posicionam-se de lado para o primeiro cone da sua fileira (pés paralelos na largura dos quadris).
      esperar(1, 1.2),
      // 2. Saltam lateralmente por cima dos 4 cones, com os dois pés juntos (ida = 4 saltos para a direita).
      passo(2, [j('J1', [95, 43], 0.5), j('J1', [95, 66], 0.5, 0.6), j('J1', [95, 90], 0.5, 1.2), j('J1', [95, 113], 0.5, 1.8), j('J2', [51, 43], 0.5), j('J2', [51, 66], 0.5, 0.6), j('J2', [51, 90], 0.5, 1.2), j('J2', [51, 113], 0.5, 1.8), s('seta1', 2.4)]),
      // 3. Ao passar o 4º cone, estabilizam por 1 s e retornam com 4 saltos laterais para a esquerda.
      passo(3, [pausa(1.0), j('J1', [95, 90], 0.5, 1.0), j('J1', [95, 66], 0.5, 1.6), j('J1', [95, 43], 0.5, 2.2), j('J1', [95, 33], 0.5, 2.8), j('J2', [51, 90], 0.5, 1.0), j('J2', [51, 66], 0.5, 1.6), j('J2', [51, 43], 0.5, 2.2), j('J2', [51, 33], 0.5, 2.8), s('seta2', 2.4, 1.0)]),
      // 4. Volume e pausa: 4 séries de 8 saltos laterais, com 60 s de descanso entre cada série.
      esperar(4, 1.4),
    ],
  },
}

/** Exercícios sem animação neste lote (ficam com o diagrama estático). */
export const SEM_ANIMACAO_LOTE_6A: Record<number, string> = {
  216: 'Circuito de pranchas em solo: o diagrama não tem trajetos nem setas, e o movimento (isometria) seria inventado.',
  218: 'Circuito postural Y-T-W deitado: as setas indicam a posição dos braços, não deslocamento; animar seria inventar o movimento.',
}
