/**
 * NA AREIA: exercícios do Código da Areia que uma pessoa faz sozinha na quadra.
 * Vêm do app principal (mesmo número), com o diagrama da quadra em /gem/diagrams/NNN.png
 * e a animação em /gem/diagramas/NNN.json.
 */
export interface ExercicioAreia {
  numero: number
  nome: string
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado'
  tempo: string
  material: string
  objetivo: string
  comoMontar: string
  passoAPasso: string[]
  pontosAtencao: string[]
  erroComum: string
  variacaoFacil: string
  variacaoDificil: string
  meta: string
}

export const NA_AREIA: ExercicioAreia[] = [
  {
    "numero": 1,
    "nome": "Caminhada de ativação do pé e tornozelo",
    "nivel": "Iniciante",
    "tempo": "5 minutos",
    "material": "4 cones",
    "objetivo": "Ativar a musculatura intrínseca dos pés e preparar os tornozelos para a instabilidade da areia fofa.",
    "comoMontar": "Posicione 2 cones na linha de fundo do lado esquerdo da quadra e outros 2 cones a 8 metros de distância (junto à linha da rede), formando dois corredores paralelos de 8 metros de comprimento na parte de areia mais fofa.",
    "passoAPasso": [
      "Os dois jogadores começam na linha de fundo, cada um alinhado ao seu cone de saída.",
      "Na primeira ida até a rede (8m), caminham apenas na ponta dos pés, empurrando a areia para baixo a cada passo; voltam caminhando normalmente de frente.",
      "Na segunda ida, caminham apenas sobre os calcanhares, mantendo a ponta do pé bem levantada; voltam caminhando normalmente.",
      "Na terceira ida, caminham apoiando a borda externa dos pés com passos curtos e controlados.",
      "Na quarta ida, caminham afundando o pé inteiro e 'agarrando' a areia com os dedos antes de impulsionar o próximo passo."
    ],
    "pontosAtencao": [
      "Manter os joelhos sempre levemente flexionados (destravados) durante todo o trajeto.",
      "Postura alta e peito aberto, olhando para a linha da rede e não para os pés.",
      "Sentir os dedos do pé empurrarem a areia no final de cada passada."
    ],
    "erroComum": "Andar rápido demais com o joelho travado e perder o equilíbrio lateral; corrija pedindo passos lentos de 2 segundos cada e leve flexão de joelho.",
    "variacaoFacil": "Reduzir o corredor para 5 metros e realizar o exercício na faixa de areia mais batida e firme.",
    "variacaoDificil": "Fazer a ida segurando uma bola acima da cabeça com os cotovelos estendidos e voltar caminhando de costas na ponta dos pés.",
    "meta": "Completar as 4 passagens de 8 metros sem desequilibrar ou apoiar a parte errada do pé na areia."
  },
  {
    "numero": 231,
    "nome": "Controle individual de manchete e toque em deslocamento pelas linhas",
    "nivel": "Iniciante",
    "tempo": "8 minutos",
    "material": "1 bola e 4 cones nos cantos da meia-quadra",
    "objetivo": "Calibrar o controle de força da manchete e a limpeza do toque de dedos enquanto caminha e corre sobre as linhas da meia-quadra de 8x8m.",
    "comoMontar": "Na meia-quadra esquerda, posicione 4 cones nos 4 vértices do quadrado de 8 x 8 metros (Cone 1 no canto fundo superior, Cone 2 na antena superior, Cone 3 na antena inferior e Cone 4 no canto fundo inferior). J1 inicia no Cone 1 com 1 bola.",
    "passoAPasso": [
      "J1 começa no Cone 1 (canto fundo) e inicia uma sequência contínua alternando obrigatoriamente 1 toque de manchete e 1 toque de dedos acima da testa para si mesmo.",
      "Trecho 1 (Linha Lateral até a Rede - 8m): avança de frente ao longo da fita lateral controlando a bola a 3 metros de altura até chegar ao Cone 2 junto à rede.",
      "Trecho 2 (Travessia junto à Rede - 8m): desloca-se lateralmente paralelo à fita da rede do Cone 2 até o Cone 3 sem deixar a bola tocar na rede.",
      "Trecho 3 (Recuo pela outra Lateral - 8m): recua em passos laterais/diagonais do Cone 3 até o Cone 4 no fundo mantendo a bola sempre à frente da testa.",
      "Trecho 4 (Fechamento na Linha de Fundo - 8m): fecha o circuito em passada lateral baixa do Cone 4 de volta ao Cone 1, totalizando 32 metros de perímetro sem a bola cair."
    ],
    "pontosAtencao": [
      "Mesmo caminhando pelo perímetro da quadra, pare os dois pés por uma fração de segundo no exato instante de cada toque de dedos para não cometer condução.",
      "Se houver vento na arena, incline levemente a plataforma contra o vento para que a bola não fuja para fora da linha.",
      "Mantenha todos os toques na mesma altura padrão (entre 2,5m e 3m) para ter tempo de olhar os cones no chão com a visão periférica."
    ],
    "erroComum": "Bater na bola baixo demais (a 1 metro da cabeça), sendo obrigado a correr desesperado e perder a linha das fitas; corrija exigindo altura mínima da borda superior da rede em cada toque.",
    "variacaoFacil": "Realizar o percurso usando exclusivamente toques de manchete contínua e permitindo 1 quique na areia batida caso perca o equilíbrio.",
    "variacaoDificil": "Incluir 1 giro completo de 360 graus na areia a cada 4 toques ou alternar: 1 manchete + 1 toque de dedos + 1 controle com um braço só (direito/esquerdo).",
    "meta": "Completar 2 voltas inteiras no quadrado de 8x8m (64 metros totais e cerca de 40 toques alternados) sem deixar a bola cair na areia."
  },
  {
    "numero": 232,
    "nome": "Auto-lançamento, passada na areia e ataque em alvos",
    "nivel": "Iniciante",
    "tempo": "10 minutos",
    "material": "3 a 6 bolas (ou 1 bola com busca rápida) e 6 cones demarcando 3 zonas alvo",
    "objetivo": "Treinar sozinho o tempo de entrada na bola, o salto equilibrado na areia e a pontaria dos golpes de ataque (cortada, cut shot e lob) nos cantos da quadra.",
    "comoMontar": "Na meia-quadra esquerda, coloque 1 cone de saída para J1 a 4 metros da rede na entrada esquerda (e outro na saída direita). Na meia-quadra direita, demarque 3 Zonas Alvo com cones: Alvo 1 (Paralela Funda a 7m), Alvo 2 (Cut Shot na Diagonal Curta a 2m) e Alvo 3 (Diagonal Longa a 7m).",
    "passoAPasso": [
      "J1 posiciona-se no cone de 4 metros da rede segurando uma bola nas mãos.",
      "Executa um auto-lançamento alto (4,5 metros de altura) com as duas mãos para a frente, fazendo a bola subir e cair exatamente a 1,5 metro da rede e 1 metro da antena.",
      "Enquanto a bola sobe ao ponto mais alto, J1 aguarda um instante na base e explode na passada de 3 apoios ('esquerda-direita-esquerda') na areia fofa.",
      "Salta verticalmente a 1,5m da rede e finaliza o ataque mirando nos alvos em ordem obrigatória: 1ª bola no Alvo 1 (Paralela), 2ª bola no Alvo 2 (Cut Shot curto) e 3ª bola no Alvo 3 (Diagonal longa).",
      "Após bater as bolas da entrada esquerda, J1 recolhe as bolas e executa a mesma série saindo da ponta direita."
    ],
    "pontosAtencao": [
      "O segredo para treinar ataque sozinho na praia é o AUTO- LANÇAMENTO: lance a bola alta e sem giro (como se fosse um levantamento de manchete do seu parceiro) para dar tempo de você fazer a passada completa de 3 passos!",
      "Não lance a bola baixa e saia correndo junto com ela: primeiro lance alto, veja o ápice da bola e só então acelere os dois últimos passos.",
      "Alterne entre cortada potente de mão aberta e golpes colocados (poke, cobra e cut shot)."
    ],
    "erroComum": "Lançar a bola muito colada na rede ou muito para frente, saltando desequilibrado e tocando na fita; corrija desenhando um X na areia a 1,5m da rede onde a bola lançada deveria cair.",
    "variacaoFacil": "Iniciar a apenas 2,5 metros da rede, fazer o auto-lançamento mais curto e atacar usando a passada rápida de 2 apoios.",
    "variacaoDificil": "Substituir o auto-lançamento com as mãos por um 'auto- levantamento de manchete': J1 joga a bola na própria frente, dá uma manchete alta para a rede, corre em transição e ataca!",
    "meta": "Acertar pelo menos 7 de 10 ataques dentro das 3 Zonas Alvo demarcadas (acertando no mínimo 2 vezes cada alvo)."
  },
  {
    "numero": 233,
    "nome": "Rotina individual de saque em alvos com coleta ativa em sprint",
    "nivel": "Iniciante",
    "tempo": "10 minutos",
    "material": "2 a 5 bolas e 8 cones demarcando 4 zonas táticas de saque",
    "objetivo": "Aprimorar a precisão do saque em zonas específicas sob batimento cardíaco elevado, simulando o cansaço real de uma partida quando você treina sozinho.",
    "comoMontar": "J1 posiciona-se atrás da linha de fundo esquerda (8m da rede). Na meia-quadra direita, monte 4 Zonas Alvo estratégicas do vôlei de praia: Zona 1 (Curta Esquerda a 2m), Zona 2 (Costura Central a 5,5m), Zona 3 (Fundo Linha Direita a 7,5m) e Zona 4 (Curta Direita a 2,5m).",
    "passoAPasso": [
      "J1 saca uma bateria de 4 bolas (ou saca 1 bola por vez caso só tenha uma bola na arena) mirando na sequência numérica: Saque 1 na Zona 1, Saque 2 na Zona 2, Saque 3 na Zona 3 e Saque 4 na Zona 4.",
      "Regra de Coleta Ativa (Simulador de Jogo): após bater os saques da série, é PROIBIDO ir caminhando devagar buscar as bolas! J1 passa por baixo da rede em sprint, recolhe as bolas fazendo agachamento baixo na areia e volta trotando até a linha de fundo oposta.",
      "Ao chegar na linha de fundo direita (agora no lado oposto do vento e do sol!), J1 tem exatamente 10 segundos para respirar fundo e sacar de volta para o outro lado!",
      "Se J1 estiver treinando com apenas 1 única bola: ele saca da esquerda para a direita, corre em transição até a linha de 5,5m da sua quadra (simulando a entrada de defesa pós- saque!), depois atravessa para pegar a bola e já saca do lado direito para o esquerdo!"
    ],
    "pontosAtencao": [
      "Quando treinamos saque parados e descansados, acertamos tudo; no jogo real, sacamos ofegantes!",
      "A corrida de coleta ativa eleva a frequência cardíaca para deixar o treino idêntico ao jogo.",
      "A cada corrida para buscar a bola no outro lado, aproveite para sacar de volta de lá mesmo: assim você treina 50% dos saques contra o vento e 50% a favor do vento!",
      "Use os 5 segundos antes de cada saque para fazer sua rotina respiratória."
    ],
    "erroComum": "Sacar rápido demais assim que pega a bola na mão ainda correndo, errando o lançamento; corrija parando os dois pés atrás da linha de 8m e soltando o ar antes de alçar a bola.",
    "variacaoFacil": "Ampliar o tamanho das 4 Zonas Alvo para 3x3 metros e caminhar nos últimos 4 metros antes da linha de saque.",
    "variacaoDificil": "Exigir saque viagem ou flutuante rasante: toda bola que errar o alvo exige 1 sprint extra de rede a fundo antes do próximo saque.",
    "meta": "Acertar pelo menos 12 de 16 saques (4 passagens pelas 4 zonas) mantendo o ritmo de coleta ativa entre os lados."
  },
  {
    "numero": 235,
    "nome": "Auto-defesa de reação na rede, giro e transição individual",
    "nivel": "Intermediário",
    "tempo": "9 minutos",
    "material": "1 ou 2 bolas, 2 cones e 2 zonas alvo do outro lado",
    "objetivo": "Usar o rebote da malha da rede como um 'parceiro lançador' para treinar defesa reflexa, auto-levantamento e ataque quando você está sozinho na quadra.",
    "comoMontar": "Certifique-se de que a rede da quadra esteja bem esticada. Na meia-quadra esquerda, coloque 1 cone a 2,5 metros da rede no centro. Na meia-quadra direita, demarque 2 Zonas Alvo nos cantos de fundo.",
    "passoAPasso": [
      "Dica de Ouro do Treino Solo na Areia: quando você não tem ninguém para bater bola em você, a malha central da rede funciona como um 'paredão elástico' que devolve a bola de forma imprevisível!",
      "Passo 1 (O Rebote na Rede): J1 posiciona-se a 2,5 metros da rede e arremessa (ou bate) a bola com força contra o meio da malha da rede (a cerca de 30 cm abaixo da fita branca superior).",
      "Passo 2 (1º Toque — Defesa Reflexa): a rede estufa e cospe a bola de volta rápida e baixa! J1 faz o split-step na areia e defende de manchete amortecida jogando a bola 4 metros para o alto no centro da sua quadra.",
      "Passo 3 (2º Toque — Auto-levantamento): J1 entra embaixo da bola que subiu, planta os dois pés e faz um levantamento de toque limpo (ou manchete) para a entrada da rede (a 1,5m da fita).",
      "Passo 4 (3º Toque — Ataque): J1 dá os 2 passos finais na areia, salta e ataca a bola por cima da rede acertando as Zonas Alvo do lado direito!"
    ],
    "pontosAtencao": [
      "Jogue a bola contra a malha da rede em um ângulo levemente de baixo para cima para que a rede devolva a bola subindo um pouco, e não cravada no seu pé.",
      "Como você está sozinho fazendo os 3 toques reais (Defesa + Levantamento + Ataque), capriche na altura da defesa e do levantamento para ter tempo de saltar!",
      "Se a bola voltar muito curta da rede, use o mergulho controlado (peixinho) para subi-la bem alta."
    ],
    "erroComum": "Bater a bola fraco na rede ou na fita branca superior (que não tem elasticidade), fazendo a bola morrer colada na rede; corrija mirando na malha preta a um palmo abaixo da fita superior.",
    "variacaoFacil": "Pular o 2º toque: após defender o rebote da rede no 1º toque bem alto perto da fita, já atacar direto no 2º toque.",
    "variacaoDificil": "Antes de jogar a bola na malha da rede, J1 dá 1 salto de bloqueio na fita, aterrissa recuando aos 3 metros, arremessa na rede com giro de 360 graus e defende no reflexo!",
    "meta": "Completar 8 de 10 sequências completas de Rebote na Rede + Defesa + Auto-levantamento + Ataque válido nas Zonas Alvo."
  }
]
