/** Jogos de competição do Modo Competição (order bump). Para o racha, em casa, na quadra e na areia. */

export type Ambiente = 'casa' | 'quadra' | 'areia'

export interface ConfigPlacar {
  /** Pontos para fechar o set. */
  pts: number
  /** 1 = set único, 3 = melhor de 3. */
  sets: 1 | 3
  /** Mostra o botão "+2" no placar (jogos em que um tipo de ponto vale dobrado). */
  vale2?: string
  /** Fecha no ponto exato, sem precisar de 2 de diferença (jogos de contagem). */
  semVantagem?: boolean
}

export interface JogoCompeticao {
  id: string
  nome: string
  ambiente: Ambiente
  /** Ex.: "1 contra 1", "Duplas", "6 contra 6". */
  formato: string
  jogadores: string
  material: string
  tempo: string
  objetivo: string
  como: string[]
  pontuacao: string
  niveis: { iniciante: string; intermediario: string; avancado: string }
  placar: ConfigPlacar
}

export const AMBIENTES: { id: Ambiente; nome: string; sub: string }[] = [
  { id: 'casa', nome: 'Em casa', sub: 'Duelos com parede, corda e pouco espaço. Para jogar com irmão, pai ou amigo.' },
  { id: 'quadra', nome: 'Na quadra', sub: 'Regras para o racha de quadra ficar mais disputado e você treinar jogando.' },
  { id: 'areia', nome: 'Na areia', sub: 'Disputas em dupla e mano a mano para o racha da areia.' },
]

export const JOGOS_COMPETICAO: JogoCompeticao[] = [
  /* ---------------- EM CASA ---------------- */
  {
    id: 'duelo-parede', nome: 'Duelo da Parede', ambiente: 'casa', formato: '1 contra 1',
    jogadores: '2 pessoas', material: '1 bola e uma parede livre', tempo: '10 a 15 min',
    objetivo: 'Controlar a bola na parede sob pressão, porque agora o erro dá ponto para o outro.',
    como: [
      'Marquem uma linha no chão a 2 passos da parede. Ninguém passa dela.',
      'Um começa tocando a bola na parede. O outro devolve, sempre alternando.',
      'Cada um só pode dar um toque por vez: manchete ou toque.',
      'Quem deixar cair, pisar na linha ou tocar duas vezes perde o ponto.',
    ],
    pontuacao: '1 ponto por erro do adversário. Set até 15, com 2 de diferença.',
    niveis: {
      iniciante: 'Pode deixar quicar uma vez no chão antes de tocar.',
      intermediario: 'Regra normal, sem quique.',
      avancado: 'Só vale manchete ou só vale toque, combinado antes do set.',
    },
    placar: { pts: 15, sets: 3 },
  },
  {
    id: 'alvo-na-parede', nome: 'Alvo na Parede', ambiente: 'casa', formato: '1 contra 1',
    jogadores: '2 pessoas', material: '1 bola, fita crepe e uma parede', tempo: '10 min',
    objetivo: 'Mirar o toque e a manchete, que é o que faz a bola chegar certa no levantador.',
    como: [
      'Faça um quadrado de fita na parede, mais ou menos na altura da cabeça, do tamanho de uma folha de jornal.',
      'Cada jogador tem 10 tentativas por rodada, alternando com o outro.',
      'Joga a bola para cima e manda na parede de manchete ou de toque.',
      'Acertou dentro do quadrado: +2. Acertou na fita da borda: +1.',
    ],
    pontuacao: 'Dentro = 2 pontos · Na borda = 1 ponto. Quem chegar a 21 primeiro vence.',
    niveis: {
      iniciante: 'Quadrado grande e distância de 2 passos.',
      intermediario: 'Quadrado do tamanho de uma folha de caderno e 3 passos.',
      avancado: 'A bola tem que voltar e você tem que dominar sem deixar cair, senão o ponto não vale.',
    },
    placar: { pts: 21, sets: 1, vale2: 'Dentro do alvo', semVantagem: true },
  },
  {
    id: 'volei-de-joelhos', nome: 'Vôlei de Joelhos na Corda', ambiente: 'casa', formato: '1 contra 1',
    jogadores: '2 pessoas', material: 'Bola leve ou balão, uma corda e duas cadeiras', tempo: '15 min',
    objetivo: 'Jogar ponto de verdade dentro de casa, treinando leitura da bola e reação.',
    como: [
      'Amarre a corda entre duas cadeiras, na altura do peito de quem está ajoelhado.',
      'Cada um fica de joelhos de um lado, numa área de mais ou menos 2 por 2 metros.',
      'Saque por baixo e jogo normal: até 2 toques por lado.',
      'Bola no chão do adversário ou fora da área dele é ponto seu.',
    ],
    pontuacao: '1 ponto por rally. Set até 11, com 2 de diferença.',
    niveis: {
      iniciante: 'Com balão, que cai devagar.',
      intermediario: 'Com bola leve de plástico.',
      avancado: 'Obrigatório usar os 2 toques: o primeiro controla, o segundo passa.',
    },
    placar: { pts: 11, sets: 3 },
  },
  {
    id: 'cascata-21', nome: 'Cascata 21', ambiente: 'casa', formato: 'Corrida de recorde',
    jogadores: '2 ou mais (um de cada vez)', material: '1 bola e uma parede', tempo: '10 min',
    objetivo: 'Ganhar resistência no controle: quanto mais seguido, melhor fica seu toque.',
    como: [
      'Cada jogador tem uma tentativa por vez.',
      'Conte em voz alta os toques seguidos na parede, alternando manchete e toque.',
      'Errou a sequência ou deixou cair: a vez passa para o próximo.',
      'Marque no placar quantos toques cada um fez. Soma as tentativas até alguém chegar a 21.',
    ],
    pontuacao: 'Cada toque certo na sequência = 1 ponto. Quem somar 21 primeiro vence.',
    niveis: {
      iniciante: 'Só manchete, pode repetir o mesmo fundamento.',
      intermediario: 'Alternando manchete e toque.',
      avancado: 'Alternando, e a cada 5 toques bate uma palma antes do próximo.',
    },
    placar: { pts: 21, sets: 1, semVantagem: true },
  },
  {
    id: 'rei-do-tapete', nome: 'Rei do Tapete', ambiente: 'casa', formato: '1 contra 1',
    jogadores: '2 pessoas', material: '1 bola e um tapete ou quadrado de fita no chão', tempo: '10 min',
    objetivo: 'Controlar a bola parado no lugar, sem correr atrás dela.',
    como: [
      'Cada jogador fica dentro do próprio tapete ou quadrado, um de frente para o outro, a 3 passos.',
      'Vocês trocam a bola em toques ou manchetes, sem sair do quadrado.',
      'Pisou fora para alcançar a bola ou deixou cair: ponto do outro.',
      'Mandou fora do alcance do outro (sem ele precisar sair do quadrado) também é ponto dele.',
    ],
    pontuacao: '1 ponto por erro. Set até 15.',
    niveis: {
      iniciante: 'Quadrado grande e pode dominar com 2 toques.',
      intermediario: 'Um toque só por vez.',
      avancado: 'Quadrado pequeno e um toque por vez, intercalando toque e manchete.',
    },
    placar: { pts: 15, sets: 3 },
  },

  /* ---------------- NA QUADRA ---------------- */
  {
    id: 'rei-da-quadra', nome: 'Rei da Quadra', ambiente: 'quadra', formato: 'Times que revezam',
    jogadores: '3 times ou mais', material: 'Quadra e 1 bola', tempo: '20 a 30 min',
    objetivo: 'Fazer todo rally valer: quem perde sai, então ninguém joga relaxado.',
    como: [
      'Dois times jogam e os outros esperam na fila.',
      'O time que perde o rally sai, e o próximo da fila entra do lado de quem saiu, já sacando.',
      'O time que ganha fica e marca 1 ponto a cada rally que vence.',
      'Quem acumular mais pontos ao fim do tempo combinado é o rei da quadra.',
    ],
    pontuacao: '1 ponto por rally vencido enquanto o time está em quadra. Vence quem chegar a 15.',
    niveis: {
      iniciante: 'O time que entra pode escolher sacar ou receber.',
      intermediario: 'Regra normal.',
      avancado: 'O time que está em quadra só marca ponto se o rally tiver os 3 toques.',
    },
    placar: { pts: 15, sets: 1 },
  },
  {
    id: 'ataque-vale-2', nome: 'Ataque Vale Dobrado', ambiente: 'quadra', formato: '6 contra 6 ou menos',
    jogadores: '4 a 12', material: 'Quadra e 1 bola', tempo: 'Um set',
    objetivo: 'Parar de passar a bola de graça e construir a jogada até o ataque.',
    como: [
      'Jogo normal de racha.',
      'Ponto feito de ataque depois de usar os 3 toques vale 2.',
      'Qualquer outro ponto (erro do adversário, bola de graça, saque) vale 1.',
      'Na dúvida, quem decide é o time que sofreu o ponto, na esportiva.',
    ],
    pontuacao: 'Ataque após 3 toques = 2 pontos · Outros = 1 ponto. Set até 25.',
    niveis: {
      iniciante: 'Vale 2 qualquer ponto feito depois de 2 ou 3 toques.',
      intermediario: 'Regra normal.',
      avancado: 'Bloqueio que fecha o ponto também vale 2.',
    },
    placar: { pts: 25, sets: 3, vale2: 'Ataque com 3 toques' },
  },
  {
    id: 'saque-na-zona', nome: 'Saque na Zona', ambiente: 'quadra', formato: '6 contra 6 ou menos',
    jogadores: '4 a 12', material: 'Quadra, 1 bola e 4 cones ou chinelos', tempo: 'Um set',
    objetivo: 'Sacar com direção em vez de só passar a bola para o outro lado.',
    como: [
      'Marque com cones um quadrado no fundo da quadra adversária, perto da linha.',
      'Jogo normal de racha.',
      'Saque que cai direto dentro do quadrado vale 2 pontos.',
      'Saque que o outro time não consegue passar também vale 2.',
    ],
    pontuacao: 'Saque na zona ou ace = 2 pontos · Resto = 1 ponto. Set até 21.',
    niveis: {
      iniciante: 'Zona grande, de lado a lado no fundo da quadra.',
      intermediario: 'Quadrado de uns 3 por 3 metros.',
      avancado: 'Zona nos cantos e saque por cima obrigatório.',
    },
    placar: { pts: 21, sets: 3, vale2: 'Saque na zona / ace' },
  },
  {
    id: 'desafio-do-perdedor', nome: 'Desafio do Perdedor', ambiente: 'quadra', formato: '6 contra 6 ou menos',
    jogadores: '4 a 12', material: 'Quadra e 1 bola', tempo: 'Um set',
    objetivo: 'Jogar com regras que mudam no meio do set e te obrigam a se adaptar rápido.',
    como: [
      'Jogo normal até 21.',
      'A cada 5 pontos somados no placar, o time que está perdendo escolhe uma regra.',
      'Exemplos: só saque por baixo, proibido largar, ataque só de trás da linha dos 3 metros, levantamento obrigatório de toque.',
      'A regra vale até a próxima escolha.',
    ],
    pontuacao: 'Set até 21, com 2 de diferença. Regra nova a cada 5 pontos somados.',
    niveis: {
      iniciante: 'Escolha só entre regras de saque e de passe.',
      intermediario: 'Qualquer regra da lista.',
      avancado: 'O time pode trocar a regra que está valendo, mas nunca repetir uma que já saiu.',
    },
    placar: { pts: 21, sets: 1 },
  },
  {
    id: 'sequencia-bonus', nome: 'Sequência Bônus', ambiente: 'quadra', formato: '6 contra 6 ou menos',
    jogadores: '4 a 12', material: 'Quadra e 1 bola', tempo: 'Um set',
    objetivo: 'Treinar a cabeça para fechar o set: quem engata sequência é premiado.',
    como: [
      'Jogo normal de racha.',
      'Quando o time faz 3 pontos seguidos, ganha 1 ponto extra.',
      'O adversário zera a sequência quando marca.',
      'Use o botão +2 do placar no terceiro ponto seguido (o ponto mais o bônus).',
    ],
    pontuacao: '3 pontos seguidos = +1 de bônus. Set até 25.',
    niveis: {
      iniciante: '2 pontos seguidos já dão o bônus.',
      intermediario: 'Regra normal.',
      avancado: 'O bônus só vale se a sequência tiver pelo menos um ponto de ataque.',
    },
    placar: { pts: 25, sets: 3, vale2: '3º ponto seguido' },
  },
  {
    id: 'tres-contra-tres', nome: '3 contra 3 Relâmpago', ambiente: 'quadra', formato: '3 contra 3',
    jogadores: '6 ou mais', material: 'Meia quadra (ou quadra inteira) e 1 bola', tempo: '5 a 8 min por jogo',
    objetivo: 'Tocar muito mais na bola do que no 6 contra 6, ideal quando o racha está cheio.',
    como: [
      'Times de 3. Se tiver muita gente, usem as duas metades da quadra com a rede ao meio.',
      'Sets rápidos até 11 pontos.',
      'Todo mundo tem que tocar na bola pelo menos uma vez a cada 3 rallies do time.',
      'Quem perde sai e o próximo time da fila entra.',
    ],
    pontuacao: 'Set até 11, com 2 de diferença.',
    niveis: {
      iniciante: 'Pode passar a bola de graça no terceiro toque.',
      intermediario: 'Terceiro toque tem que ser ataque.',
      avancado: 'Saque por cima obrigatório e sem largada.',
    },
    placar: { pts: 11, sets: 1 },
  },

  /* ---------------- NA AREIA ---------------- */
  {
    id: 'rei-da-praia', nome: 'Rei da Praia', ambiente: 'areia', formato: 'Duplas que revezam',
    jogadores: '3 duplas ou mais', material: 'Quadra de areia e 1 bola', tempo: '20 a 30 min',
    objetivo: 'Jogar sob pressão de eliminação, como em torneio.',
    como: [
      'Duas duplas jogam e as outras esperam.',
      'A dupla que perde o rally sai, e a próxima entra sacando.',
      'A dupla que fica em quadra marca 1 ponto por rally vencido.',
      'Vence quem acumular mais pontos ao fim do tempo, ou quem chegar a 21 primeiro.',
    ],
    pontuacao: '1 ponto por rally vencido em quadra. Vence quem chegar a 21.',
    niveis: {
      iniciante: 'Rally com no máximo 8 toques por lado.',
      intermediario: 'Regra normal.',
      avancado: 'A dupla que errar o saque sai sem jogar o rally.',
    },
    placar: { pts: 21, sets: 1 },
  },
  {
    id: 'diagonal-vale-2', nome: 'Diagonal Vale 2', ambiente: 'areia', formato: '2 contra 2',
    jogadores: '4', material: 'Quadra de areia e 1 bola', tempo: 'Um set',
    objetivo: 'Usar a diagonal, que é o ataque mais difícil de defender na areia.',
    como: [
      'Jogo normal em dupla.',
      'Ataque que cai na diagonal vale 2 pontos.',
      'Ataque na paralela vale 1.',
      'Erro do adversário vale 1.',
    ],
    pontuacao: 'Diagonal = 2 · Paralela = 1 · Erro = 1. Set até 21.',
    niveis: {
      iniciante: 'Inverta: a paralela vale 2, para treinar a outra direção.',
      intermediario: 'Regra normal.',
      avancado: 'Diagonal curta, perto da rede, vale 3 (use +2 e +1).',
    },
    placar: { pts: 21, sets: 3, vale2: 'Ataque na diagonal' },
  },
  {
    id: 'sem-pancada', nome: 'Só Vale Largada', ambiente: 'areia', formato: '2 contra 2',
    jogadores: '4', material: 'Quadra de areia e 1 bola', tempo: 'Um set',
    objetivo: 'Ganhar repertório no ataque: colocar a bola onde o outro não está.',
    como: [
      'Jogo normal em dupla, mas o ataque forte está proibido.',
      'Só vale largada, bola de toque colocada ou ataque de meia força.',
      'Quem bater forte perde o ponto.',
      'Ponto de largada que cai sem ninguém tocar vale 2.',
    ],
    pontuacao: 'Largada indefensável = 2 · Outros = 1. Set até 15.',
    niveis: {
      iniciante: 'Pode passar a bola de graça no terceiro toque.',
      intermediario: 'Regra normal.',
      avancado: 'Antes de largar, o atacante tem que dizer em voz alta "linha" ou "meio", e acertar o lugar.',
    },
    placar: { pts: 15, sets: 3, vale2: 'Largada sem toque' },
  },
  {
    id: 'saque-no-chinelo', nome: 'Saque no Chinelo', ambiente: 'areia', formato: '2 contra 2',
    jogadores: '4', material: 'Quadra de areia, 1 bola e 2 chinelos', tempo: 'Um set',
    objetivo: 'Sacar onde a dupla adversária tem mais dificuldade.',
    como: [
      'Coloque um chinelo em cada canto do fundo da quadra adversária.',
      'Jogo normal em dupla.',
      'Saque que cai a até um passo do chinelo vale 2.',
      'Ace (saque que o outro não consegue passar) também vale 2.',
    ],
    pontuacao: 'Saque no chinelo ou ace = 2 · Resto = 1. Set até 21.',
    niveis: {
      iniciante: 'Vale 2 tudo que cair no fundo, atrás do meio da quadra.',
      intermediario: 'Um passo do chinelo.',
      avancado: 'Antes de sacar, diga em qual chinelo vai mirar. Errou o lado, o ponto vale 1.',
    },
    placar: { pts: 21, sets: 3, vale2: 'Saque no chinelo / ace' },
  },
  {
    id: 'tres-toques', nome: 'Três Toques Obrigatórios', ambiente: 'areia', formato: '2 contra 2',
    jogadores: '4', material: 'Quadra de areia e 1 bola', tempo: 'Um set',
    objetivo: 'Criar o hábito de passe, levantamento e ataque, que é o que separa racha de jogo.',
    como: [
      'Jogo normal em dupla.',
      'O ponto só vale se a dupla usar os 3 toques.',
      'Mandou de 1 ou 2 toques: ponto para o adversário.',
      'Bola que vem de graça do outro lado também tem que ser jogada em 3.',
    ],
    pontuacao: '3 toques exatos para o ponto valer. Set até 15.',
    niveis: {
      iniciante: 'Mínimo de 2 toques.',
      intermediario: 'Exatamente 3.',
      avancado: '3 toques e o terceiro tem que ser ataque, sem largada de toque.',
    },
    placar: { pts: 15, sets: 3 },
  },
  {
    id: 'mano-a-mano', nome: 'Mano a Mano na Meia Quadra', ambiente: 'areia', formato: '1 contra 1',
    jogadores: '2', material: 'Meia quadra de areia (corte no comprido) e 1 bola', tempo: '10 min',
    objetivo: 'Fazer os três toques sozinho e cobrir a quadra, o melhor condicionamento para a areia.',
    como: [
      'Use só metade da quadra, cortada no comprido (do lado da rede até o fundo).',
      'Cada jogador defende sozinho a sua metade.',
      'Você tem até 3 toques seguidos: domina, se levanta e ataca.',
      'Bola fora da meia quadra é ponto do outro.',
    ],
    pontuacao: '1 ponto por rally. Set até 11, com 2 de diferença.',
    niveis: {
      iniciante: 'Pode deixar quicar uma vez na areia.',
      intermediario: 'Regra normal.',
      avancado: 'Obrigatório usar os 3 toques e atacar pulando.',
    },
    placar: { pts: 11, sets: 3 },
  },
]

export function jogoPorId(id: string): JogoCompeticao | undefined {
  return JOGOS_COMPETICAO.find((j) => j.id === id)
}
