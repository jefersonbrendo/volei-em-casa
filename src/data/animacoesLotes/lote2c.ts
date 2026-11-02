/** Lote 2 (parte C): exercícios 69 a 76. */
import type { Animacao } from '../../lib/animacao/tipos'
import { b, esperar, j, passo, s, trocar } from './ajudantes'

export const LOTE_2C: Record<number, Animacao> = {
  // 69 · Recepção seguida de transição imediata de pés para o ataque
  69: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 saca em direção a J1 (a 5,5 m da rede).
      passo(1, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 2. J1 para os pés e faz a manchete alta para a Zona Alvo 1 (onde está J2).
      passo(2, [b('zona1', { de: 'seta2.a', alta: true, dur: 1.7 }), s('seta2', 1.7)]),
      // 3. No instante em que a bola sai dos antebraços, J1 dá 1 passo de reajuste passando pelo cone lateral de 4 m.
      passo(3, [j('J1', [78, 31], 1.0)]),
      // 4. Enquanto J2 levanta, J1 acelera os dois últimos passos e entra na Zona Alvo 2, saltando em equilíbrio.
      passo(4, [j('J1', 'seta3.b', 1.5), s('seta3', 1.5), b('zona2', { de: 'seta4.a', alta: true, dur: 1.2, atraso: 0.5 }), s('seta4', 1.2, 0.5)]),
      // 5. No ar, J1 agarra a bola levantada por J2, com os dois braços, no ponto mais alto.
      passo(5, [j('J1', [107, 25], 0.4), j('J1', [107, 28], 0.4, 0.4)]),
    ],
  },

  // 70 · Recepção de saque viagem forte: "tirando o peso" da bola
  70: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 lança a bola alto para o viagem; J1 já recua meio passo para os 6,5 m e baixa o quadril.
      passo(1, [j('S1', 'seta1.b', 0.9), s('seta1', 0.9), b({ ref: 'S1', dx: -12, dy: -14 }, { alta: true, dur: 1.4, atraso: 0.2 }), j('J1', [37, 72], 0.8)]),
      // 2. No momento da batida, J1 faz o destrave cravando as plantas dos pés na areia.
      esperar(2, 0.8),
      // 3. A bola vem rápida e girando para a frente; J1 inclina o tronco, fechando o ângulo da manchete.
      passo(3, [b('seta2.b', { dur: 2.2 }), s('seta2', 2.2)]),
      // 4. No instante do impacto, "tira o peso" da bola: recolhe os ombros ou afunda 3 cm os joelhos.
      esperar(4, 0.7),
      // 5. A bola sobe controlada no centro da quadra (Zona Alvo a 2 m da rede); trocam a cada 8 viagens.
      passo(5, [b('zona1', { de: 'seta3.a', alta: true, dur: 1.8 }), s('seta3', 1.8), j('J1', 'S1', 2.6, 2.2), j('S1', 'J1', 2.6, 2.2)]),
    ],
  },

  // 71 · Passe de segurança no próprio corredor (quando o saque te joga pra fora)
  71: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 bate um saque agressivo na linha lateral que obriga J1 a correr para fora da quadra.
      passo(1, [b('seta1.b', { alta: true, dur: 3.2 }), s('seta1', 3.2), j('J1', 'seta2.b', 1.4, 1.6), s('seta2', 1.4, 1.6)]),
      // 2. Tática: chegando atrasado e fora da quadra, forçar o passe até o meio da rede dá a bola de graça ao bloqueio.
      esperar(2, 1.2),
      // 3. "Passe no próprio ombro": joga a bola bem alta, reto à frente, dentro da Zona Alvo B.
      passo(3, [b('zona2', { de: 'seta3.a', alta: true, dur: 2.2 }), s('seta3', 2.2)]),
      // 4. J2 corre até a Zona B, para os pés e levanta na paralela para J1.
      passo(4, [j('J2', 'seta4.b', 1.6), s('seta4', 1.6)]),
      // 5. Se o saque vier fácil dentro da quadra, J1 passa normalmente na Zona A.
      esperar(5, 1.4),
    ],
  },

  // 72 · Recepção + Levantamento + Ataque no corredor (Side-out completo 1)
  72: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 executa um saque flutuante agressivo em J1.
      passo(1, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 2. J1 grita "MINHA!", estabiliza a base e passa a bola alta na Zona Alvo central.
      passo(2, [b('zona1', { de: 'seta2.a', alta: true, dur: 1.7 }), s('seta2', 1.7)]),
      // 3. J2 infiltra até a Zona Alvo central, para os dois pés e levanta para a entrada da rede de J1.
      passo(3, [j('J2', 'seta3.b', 1.5), s('seta3', 1.5), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.2, atraso: 1.4 }), s('seta5', 1.2, 1.4)]),
      // 4. J1 faz a aproximação, salta equilibrado e ataca uma das Zonas Alvo de Ataque.
      passo(4, [j('J1', 'seta6.b', 1.4), s('seta6', 1.4), b('seta8.b', { de: 'seta8.a', dur: 0.9, atraso: 1.2 }), s('seta8', 0.9, 1.2)]),
      // 5. Cada dupla executa 6 side-outs e depois troca com S1.
      passo(5, [j('J1', 'S1', 2.6), j('S1', 'J1', 2.6)]),
    ],
  },

  // 73 · Recepção de saque curto + Levantamento e Ataque em tempo curto (Side-out 2)
  73: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 saca curto logo atrás da rede, no lado de J1 (aos 2,5 m da fita).
      passo(1, [b('seta1.b', { alta: true, dur: 2.8 }), s('seta1', 2.8)]),
      // 2. J1 arranca dos 5,5 m até os 2,5 m, freia em afundo e levanta a recepção bem alta no centro.
      passo(2, [j('J1', 'seta2.b', 1.3), s('seta2', 1.3), b('zona1', { de: 'seta4.a', alta: true, dur: 2.2, atraso: 1.4 }), s('seta4', 2.2, 1.4)]),
      // 3. Sem espaço para corrida longa, J1 dá 1 passo rápido para trás/fora (abrindo para os 3,5 m).
      passo(3, [j('J1', 'seta5.b', 1.4), s('seta5', 1.4)]),
      // 4. J2 chega na bola, levanta na medida e J1 explode em 2 passos atacando sobre a rede.
      passo(4, [b('seta6.b', { de: 'seta6.a', alta: true, dur: 1.1 }), s('seta6', 1.1), b('seta7.b', { de: 'seta7.a', dur: 0.9, atraso: 1.2 }), s('seta7', 0.9, 1.2)]),
      // 5. 4 bolas curtas em J1 e 4 em J2, depois rodam.
      trocar(5, 'J1', 'J2', 2.4),
    ],
  },

  // 74 · Recepção de viagem + Levantamento de dentro para fora + Ataque (Side-out 3)
  74: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. S1 bate um saque viagem forte em J1.
      passo(1, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0)]),
      // 2. J1 amortece a pancada, jogando a bola alta no centro da sua quadra (Zona Segura a 3 m da rede).
      passo(2, [b('zona1', { de: 'seta2.a', alta: true, dur: 1.8 }), s('seta2', 1.8)]),
      // 3. J2 corre até o centro, planta os pés e levanta "de dentro para fora" até a entrada da rede.
      passo(3, [j('J2', 'seta3.b', 1.4), s('seta3', 1.4), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.4, atraso: 1.5 }), s('seta5', 1.4, 1.5)]),
      // 4. J1 faz a chamada de ataque observando o bloqueador B1 e finaliza na paralela ou na diagonal livre.
      passo(4, [j('J1', 'seta6.b', 1.4), s('seta6', 1.4), b('seta8.b', { de: 'seta8.a', dur: 1.0, atraso: 1.3 }), s('seta8', 1.0, 1.3)]),
      // 5. Após 6 side-outs, a Dupla A e a Dupla B trocam de função.
      passo(5, [j('J1', 'S1', 2.8), j('S1', 'J1', 2.8), j('J2', 'B1', 2.8), j('B1', 'J2', 2.8)]),
    ],
  },

  // 75 · Desafio sob pressão: "Quebra-Passe vs. Virada de Side-out" (Side-out 4)
  75: {
    bolaInicial: { ref: 'S1', dx: -6, dy: -3 },
    passos: [
      // 1. A Dupla B (receptora) quer 7 pontos de side-out antes que a Dupla A faça 7.
      esperar(1, 1.4),
      // 2. A Dupla A saca livremente buscando a costura, as linhas ou a curta.
      passo(2, [b('seta1.b', { alta: true, dur: 3.0 }), s('seta1', 3.0), j('S1', 'seta2.b', 1.6, 0.8), s('seta2', 1.6, 0.8)]),
      // 3. Passar na mão do levantador e virar o ataque de primeira vale +2; virar com passe ruim, +1.
      passo(3, [b('zona1', { de: 'seta4.a', alta: true, dur: 1.7 }), s('seta4', 1.7), b('seta5.b', { de: 'seta5.a', alta: true, dur: 1.2, atraso: 1.8 }), s('seta5', 1.2, 1.8), b('seta6.b', { de: 'seta6.a', dur: 0.9, atraso: 3.2 }), s('seta6', 0.9, 3.2)]),
      // 4. Ace direto ou recepção de graça por cima da rede zera os pontos da Dupla B.
      esperar(4, 1.4),
      // 5. Ao final do set, invertem quem saca e quem recebe.
      passo(5, [j('J1', 'S1', 2.8), j('S1', 'J1', 2.8), j('J2', 'B1', 2.8), j('B1', 'J2', 2.8)]),
    ],
  },

  // 76 · Maratona do Receptor: 4 saques diferentes seguidos com finalização
  76: {
    passos: [
      // 1. J1 vai receber uma bateria ininterrupta de 4 saques diferentes.
      esperar(1, 1.4),
      // 2. Bola 1: S1 bate um saque flutuante tenso no meio; J1 passa na Zona Alvo, aproxima e ataca.
      passo(2, [b('seta1.b', { de: { ref: 'S1', dx: -6, dy: -3 }, alta: true, dur: 3.0 }), s('seta1', 3.0), b('zona1', { alta: true, dur: 1.6, atraso: 3.2 })]),
      // 3. Bola 2 (imediata): S2 solta um saque curto aos 2,5 m; J1 arranca, passa alto, reajusta e ataca.
      passo(3, [b('seta2.b', { de: { ref: 'S2', dx: -6, dy: -3 }, alta: true, dur: 2.8 }), s('seta2', 2.8), j('J1', [95, 40], 1.3, 1.4), b('zona1', { alta: true, dur: 1.6, atraso: 3.0 })]),
      // 4. Bola 3 (imediata): S1 manda um saque alto "Jornada nas Estrelas" no fundo; J1 recua, passa e ataca.
      passo(4, [b('seta3.b', { de: { ref: 'S1', dx: -6, dy: -3 }, alta: true, dur: 3.8 }), s('seta3', 3.8), j('J1', 'seta5.b', 2.0, 1.6), s('seta5', 2.0, 1.6), b('zona1', { alta: true, dur: 2.0, atraso: 4.0 })]),
      // 5. Bola 4 (final): S2 bate um saque viagem forte no peito; J1 tira o peso da bola e finaliza o 4º ataque.
      passo(5, [b('seta4.b', { de: { ref: 'S2', dx: -6, dy: -3 }, dur: 2.2 }), s('seta4', 2.2), j('J1', [51, 80], 1.0, 0.8), b('zona1', { alta: true, dur: 1.6, atraso: 2.4 })]),
      // 6. Após a maratona, J1 descansa e o próximo jogador entra no teste.
      esperar(6, 1.4),
    ],
  },
}
