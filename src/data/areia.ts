/**
 * NA AREIA: os 240 exercícios do Código da Areia, para quem já joga e treina na quadra
 * (sozinho, em dupla ou com amigos). Mesmo número do app principal.
 * Diagrama da quadra em /gem/diagrams/NNN.webp, miniatura em /gem/thumbs/NNN.webp
 * e animação em /gem/diagramas/NNN.json. Gerado de voleideareia/mc-src/src/data/exercicios.json.
 */
export interface ExercicioAreia {
  numero: number
  /** Seção do Código da Areia (1 a 15): vira a categoria. */
  secao: number
  nome: string
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado'
  jogadores: string
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
    "secao": 1,
    "nome": "Caminhada de ativação do pé e tornozelo",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (ou individual, lado a lado)",
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
    "erroComum": "Andar rápido demais com o joelho travado e perder o equilíbrio lateral; corrija pedindo passos lentos de 2 segundos cada e leve flexão de joelho. Variações",
    "variacaoFacil": "Reduzir o corredor para 5 metros e realizar o exercício na faixa de areia mais batida e firme.",
    "variacaoDificil": "Fazer a ida segurando uma bola acima da cabeça com os cotovelos estendidos e voltar caminhando de costas na ponta dos pés.",
    "meta": "Completar as 4 passagens de 8 metros sem desequilibrar ou apoiar a parte errada do pé na areia."
  },
  {
    "numero": 2,
    "secao": 1,
    "nome": "Afundo na areia com rotação de tronco",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (lado a lado)",
    "tempo": "6 minutos",
    "material": "2 bolas e 4 cones",
    "objetivo": "Destravar os flexores de quadril e ganhar mobilidade na coluna torácica para os giros de levantamento e ataque.",
    "comoMontar": "Coloque 2 cones na linha de fundo e 2 cones a 6 metros de distância em direção ao centro da meia- quadra esquerda. Cada jogador segura uma bola de vôlei de praia nas mãos.",
    "passoAPasso": [
      "J1 e J2 saem da linha de fundo segurando a bola à frente do peito com os braços semiflexionados.",
      "Dão um passo amplo à frente entrando em afundo até o joelho de trás quase tocar a areia.",
      "Com a base firme na areia, giram o tronco e a bola lentamente para o lado da perna que está na frente e voltam ao centro.",
      "Impulsionam o pé da frente contra a areia para subir e avançam com a outra perna, repetindo o giro para o novo lado até chegar ao cone de 6 metros."
    ],
    "pontosAtencao": [
      "O joelho da frente deve apontar na mesma direção da ponta do pé, sem cair para dentro.",
      "Girar apenas os ombros e o tórax com a bola, mantendo o quadril firme apontado para a rede.",
      "Soltar o ar pela boca no momento de máxima rotação do tronco."
    ],
    "erroComum": "Curvar as costas para frente ao descer no afundo; corrija pedindo para manter o umbigo firme e a bola na altura dos ombros. Variações",
    "variacaoFacil": "Realizar o afundo mais curto sem bola nas mãos, mantendo as mãos apoiadas nos ombros.",
    "variacaoDificil": "Estender os braços completamente à frente e, após girar para o lado, elevar a bola acima da cabeça olhando para o céu (simulando a busca da bola sob o sol).",
    "meta": "Executar 12 afundos completos (6 para cada perna) em cada série mantendo o equilíbrio na subida."
  },
  {
    "numero": 3,
    "secao": 1,
    "nome": "Despertar de ombros e escápulas com bola",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (frente a frente)",
    "tempo": "6 minutos",
    "material": "1 bola e 2 cones",
    "objetivo": "Lubrificar a articulação do ombro e ativar o manguito rotador antes dos movimentos de saque e ataque.",
    "comoMontar": "No centro de uma meia-quadra, posicione 2 cones frente a frente a 4 metros de distância um do outro. J1 fica em um cone e J2 no outro, paralelos à linha lateral.",
    "passoAPasso": [
      "J1 segura a bola com as duas mãos, leva atrás da nuca abrindo bem os cotovelos e o peito, e lança com as duas mãos para o alto em direção a J2.",
      "J2 recebe a bola com os braços estendidos acima da cabeça, faz uma circundução ampla dos ombros e repete o lançamento de nuca para J1 (10 repetições).",
      "Em seguida, trocam para arremesso unilateral com o braço de ataque: armam o cotovelo alto atrás da linha da orelha e lançam a bola direto no peito do parceiro.",
      "Finalizam lançando a bola com quique forte na areia a 1 metro dos pés do parceiro, mas como a areia amortece a bola, o colega precisa baixar o quadril rápido para apanhá- la antes que pare."
    ],
    "pontosAtencao": [
      "Manter o cotovelo do braço de ataque sempre acima da linha do ombro na fase de armar.",
      "Usar a mão não dominante apontando para o parceiro para alinhar os ombros.",
      "Acompanhar o movimento até o final após soltar a bola, cruzando o braço à frente do corpo."
    ],
    "erroComum": "Arremessar apenas com a força do braço e cotovelo baixo; corrija pedindo para girar o tronco e levantar o cotovelo antes de soltar a bola. Variações",
    "variacaoFacil": "Diminuir a distância entre os cones para 2,5 metros e fazer todos os lançamentos com as duas mãos.",
    "variacaoDificil": "Antes de cada lançamento unilateral, o jogador deve dar um pequeno salto na areia e lançar a bola no ponto mais alto antes de tocar o solo.",
    "meta": "Completar 20 arremessos certos na mão do parceiro (10 com duas mãos e 10 unilaterais) sem deixar a bola cair na areia."
  },
  {
    "numero": 4,
    "secao": 1,
    "nome": "Passada lateral baixa arrastando a areia",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (revezando na mesma estação)",
    "tempo": "6 minutos",
    "material": "2 cones e 1 bola",
    "objetivo": "Aquecer adutores, glúteos e quadríceps na postura baixa de defesa específica da areia.",
    "comoMontar": "Coloque 2 cones no meio da meia-quadra esquerda, afastados 4 metros lateralmente (um próximo à linha lateral esquerda e outro próximo ao centro da quadra).",
    "passoAPasso": [
      "J1 começa no cone da esquerda em base baixa de defesa (quadril baixo, costas retas, mãos à frente). J2 aguarda a 2 metros de distância marcando o ritmo.",
      "J1 se desloca lateralmente até o cone da direita sem cruzar as pernas e sem saltar, mantendo os pés próximos da superfície e empurrando a areia lateralmente.",
      "Ao chegar no cone da direita, J1 toca o topo do cone com a mão de fora e retorna imediatamente em passada lateral para o cone da esquerda.",
      "Após 4 idas e vindas contínuas, J1 entrega a vez para J2 enquanto recupera o fôlego por 20 segundos."
    ],
    "pontosAtencao": [
      "Nunca cruzar os pés nem bater um calcanhar no outro durante o deslocamento lateral.",
      "Manter a cabeça na mesma altura do início ao fim, sem subir e descer o quadril (evitar 'galopar').",
      "Tocar o cone flexionando os joelhos e o quadril, e não dobrando apenas a coluna para baixo."
    ],
    "erroComum": "Saltitar para cima em vez de deslizar baixo na areia; corrija pedindo para deixar um rastro contínuo na areia com a lateral do pé. Variações",
    "variacaoFacil": "Diminuir a distância entre os cones para 3 metros e tocar o cone apenas na altura da cintura.",
    "variacaoDificil": "J2 fica junto à rede com uma bola e, toda vez que J1 toca um cone, J2 mostra 1 ou 2 dedos para J1 gritar o número em voz alta enquanto muda de direção.",
    "meta": "Realizar 6 toques nos cones em menos de 18 segundos mantendo o quadril abaixo da linha do quadril inicial."
  },
  {
    "numero": 5,
    "secao": 1,
    "nome": "Corrida com toque nos cones e abertura de quadril",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores",
    "tempo": "7 minutos",
    "material": "4 cones",
    "objetivo": "Aumentar a frequência cardíaca e ganhar amplitude articular no quadril para saídas de bola curta e bolas no fundo.",
    "comoMontar": "Monte um quadrado de 4 x 4 metros no centro da meia-quadra esquerda usando os 4 cones (2 cones mais próximos da rede e 2 cones mais próximos do fundo).",
    "passoAPasso": [
      "J1 inicia no cone traseiro esquerdo; J2 inicia no cone traseiro direito.",
      "Ao sinal, correm de frente até o cone da frente e realizam 2 movimentos amplos de abertura de quadril (elevando o joelho à frente e girando para fora).",
      "Deslocam-se lateralmente trocando de lugar com o parceiro entre os cones da frente.",
      "Voltam de costas até os cones traseiros realizando abertura de quadril de fora para dentro (fechando a porteira) a cada dois passos.",
      "Tocam o cone de fundo com a mão e iniciam o próximo giro invertendo o sentido."
    ],
    "pontosAtencao": [
      "No recuo de costas, manter o peso do corpo na ponta dos pés e o tronco levemente inclinado à frente para não sentar na areia.",
      "Fazer o giro do joelho bem amplo, como se estivesse passando a perna por cima de um obstáculo baixo.",
      "Olhar por cima do ombro ao recuar para localizar o cone de fundo."
    ],
    "erroComum": "Correr de costas apoiando o calcanhar e cair sentado na areia; corrija pedindo que o queixo fique alinhado à frente dos joelhos no recuo. Variações",
    "variacaoFacil": "Fazer todo o trajeto em trote leve, realizando a abertura de quadril parado ao chegar em cada cone.",
    "variacaoDificil": "Adicionar um salto vertical simulando bloqueio nos cones da frente antes de fazer a troca lateral.",
    "meta": "Completar 5 voltas completas no quadrado sem esbarrar no parceiro e mantendo a coordenação do quadril."
  },
  {
    "numero": 6,
    "secao": 1,
    "nome": "Jogo de espelho na rede",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (1 líder e 1 espelho, um de cada lado da rede)",
    "tempo": "7 minutos",
    "material": "4 cones",
    "objetivo": "Ativar a velocidade de reação visual, a leitura periférica e a explosão lateral curta junto à rede.",
    "comoMontar": "Coloque 2 cones de cada lado da rede (a 50 cm da linha central), afastados 5 metros um do outro, delimitando a faixa de atuação do bloqueador.",
    "passoAPasso": [
      "J1 (líder) e J2 (espelho) posicionam-se frente a frente, separados pela rede, com as mãos altas na altura da fita.",
      "J1 se movimenta livremente entre seus dois cones usando passadas laterais, passadas cruzadas curtas ou fintas de corpo.",
      "J2 precisa copiar exatamente a posição de J1 em tempo real, mantendo-se sempre alinhado peito a peito com ele através da rede.",
      "Sempre que J1 saltar para tocar próximo à fita superior, J2 deve saltar junto no mesmo ponto; a cada 30 segundos, invertem-se os papéis."
    ],
    "pontosAtencao": [
      "Manter as mãos sempre acima da linha dos ombros durante todo o deslocamento na rede.",
      "Frear na areia cravando a borda interna do pé de fora antes de mudar de direção ou saltar.",
      "Focar o olhar no centro do peito do adversário, e não nos pés ou nas mãos."
    ],
    "erroComum": "Tocar na rede por projetar o corpo para frente ao saltar; corrija exigindo salto estritamente vertical após estancar a passada na areia. Variações",
    "variacaoFacil": "Apenas deslocamento lateral sem saltos, em faixa reduzida de 3 metros.",
    "variacaoDificil": "O líder segura uma bola e pode fingir que vai passá-la por cima da fita ou abaixar rapidamente tocando a areia, obrigando o espelho a reagir ao nível alto e baixo.",
    "meta": "Acompanhar o líder durante 3 séries de 25 segundos com atraso visual mínimo e realizar pelo menos 4 saltos simultâneos sem tocar na rede."
  },
  {
    "numero": 7,
    "secao": 1,
    "nome": "Prancha dinâmica na areia com disputa de bola",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (frente a frente)",
    "tempo": "6 minutos",
    "material": "1 bola e 2 cones",
    "objetivo": "Ativar intensamente o core (abdômen e lombar), a estabilidade escapular e o tempo de reação rápida.",
    "comoMontar": "Na meia-quadra esquerda, posicione 2 cones afastados 1,5 metro para marcar onde ficam os apoios de mão de cada jogador e coloque 1 bola parada na areia exatamente no meio entre eles.",
    "passoAPasso": [
      "J1 e J2 ficam em posição de prancha alta (apoio nas mãos e na ponta dos pés na areia), de frente um para o outro, com a bola no chão a igual distância dos dois.",
      "Ao comando, ambos tocam alternadamente: mão direita no ombro esquerdo, mão esquerda no ombro direito, mão direita no quadril, mão esquerda no quadril.",
      "Em seguida, realizam 2 passos laterais curtos em prancha (mão e pé juntos) para a direita e 2 para a esquerda, voltando ao centro.",
      "Quando um dos jogadores (ou o professor) gritar 'BOLA!', vence o ponto quem puxar a bola para o seu lado primeiro sem apoiar os joelhos na areia."
    ],
    "pontosAtencao": [
      "Manter os pés afastados na largura dos ombros para impedir que o quadril balance ao tirar uma mão da areia.",
      "Empurrar a areia com força com a mão de apoio, mantendo o ombro longe da orelha.",
      "Contrair o abdômen e os glúteos para não deixar a lombar afundar em direção à areia."
    ],
    "erroComum": "Levantar demais o quadril formando uma pirâmide para facilitar o apoio; corrija alinhando ombros, quadril e tornozelos numa linha reta. Variações",
    "variacaoFacil": "Apoiar os joelhos na areia durante os toques no ombro e só tirar os joelhos no momento do comando final.",
    "variacaoDificil": "Antes do comando 'BOLA!', incluir uma flexão de braço rápida com subida explosiva em um pé só antes de puxar a bola.",
    "meta": "Vencer 3 disputas de bola em uma melhor de 5 séries mantendo a postura de prancha íntegra sem cair com o quadril na areia."
  },
  {
    "numero": 8,
    "secao": 1,
    "nome": "Controle de manchete e toque caminhando na areia",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "8 minutos",
    "material": "1 bola e 4 cones",
    "objetivo": "Calibrar o toque na bola em movimento enquanto as pernas vencem a resistência da areia fofa.",
    "comoMontar": "Coloque 2 cones na linha de fundo (afastados 3 metros entre si) e outros 2 cones junto à rede (também afastados 3 metros), criando uma pista da linha de fundo até a rede.",
    "passoAPasso": [
      "J1 e J2 posicionam-se nos cones da linha de fundo, de frente um para o outro (a 3 metros de distância lateral).",
      "J1 inicia passando a bola de manchete para J2; imediatamente após tocar na bola, ambos dão dois passos laterais em direção à rede.",
      "J2 devolve a bola de toque limpo (mãos acima da testa) para a frente de J1, obrigando a dupla a continuar avançando sem parar de caminhar na areia.",
      "Ao tocarem a linha da rede após 8 metros de troca contínua, retornam até a linha de fundo mantendo a bola no ar."
    ],
    "pontosAtencao": [
      "Sempre parar os pés na areia por uma fração de segundo no instante exato do contato com a bola, voltando a caminhar logo depois.",
      "Direcionar a bola meio metro à frente do ombro do parceiro para guiar o avanço rumo à rede.",
      "No toque, finalizar com as duas mãos simétricas e limpas, respeitando o rigor da arbitragem de praia."
    ],
    "erroComum": "Golpear a bola enquanto ainda está dando o passo, fazendo a bola escapar para trás; corrija com a regra 'desloca, planta os pés na areia, toca na bola'. Variações",
    "variacaoFacil": "Permitir que cada jogador dê um controle para o alto para si mesmo antes de passar a bola ao colega.",
    "variacaoDificil": "Exigir que todo passe seja precedido por uma batida de palmas atrás das costas ou um toque de uma mão na areia antes de entrar debaixo da bola.",
    "meta": "Completar o trajeto de ida e volta (16 metros totais) com pelo menos 14 contatos consecutivos sem deixar a bola cair na areia."
  },
  {
    "numero": 9,
    "secao": 1,
    "nome": "Mergulho curto controlado (peixinho de aquecimento)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (1 lançador e 1 defensor)",
    "tempo": "8 minutos",
    "material": "2 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Perder o receio de ir ao chão e aquecer a mecânica segura de queda e recuperação rápida na areia.",
    "comoMontar": "J1 (lançador) fica junto à rede no centro da quadra com as bolas e uma zona alvo demarcada ao seu lado. J2 (defensor) posiciona-se a 4 metros da rede, entre 2 cones afastados 2 metros lateralmente.",
    "passoAPasso": [
      "J2 começa em postura bem baixa de defesa, com um joelho quase tocando a areia.",
      "J1 lança uma bola curta e baixa, cerca de 1,5 metro à frente e na diagonal de J2.",
      "J2 dá um passo rasante afundando a perna da frente, toca a bola de baixo para cima (manchete ou dorso da mão) em direção à zona alvo na rede e desliza o peito/abdômen na areia amortecendo com as mãos.",
      "Imediatamente após tocar a areia, J2 empurra o chão, levanta rápido e volta à base para receber a segunda bola no lado oposto; trocam de função a cada 6 bolas."
    ],
    "pontosAtencao": [
      "Deslizar para frente sobre o peito e abdômen com o queixo erguido, nunca batendo a ponta do joelho ou o cotovelo de cima para baixo na areia.",
      "Tocar na bola antes que o peito encoste na areia.",
      "Usar o impulso dos braços contra a areia para já levantar em posição atlética."
    ],
    "erroComum": "Saltar para o alto e cair pesado de barriga na areia; corrija pedindo para afundar o centro de gravidade próximo ao chão antes de projetar o corpo à frente. Variações",
    "variacaoFacil": "Iniciar o movimento já ajoelhado na areia para treinar apenas o deslizamento de peito e o toque na bola sem impacto.",
    "variacaoDificil": "J2 começa de costas para a rede; J1 bate na bola fazendo barulho e J2 vira rápido para buscar a bola curta no peixinho.",
    "meta": "Recuperar 7 de 10 bolas curtas enviando-as com altura mínima da fita da rede até a zona alvo ao lado do lançador."
  },
  {
    "numero": 10,
    "secao": 1,
    "nome": "Toque de costas e giro rápido de pescoço e tronco",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (ou 2 jogadores usando 2 alvos fixos)",
    "tempo": "8 minutos",
    "material": "1 bola e 3 cones",
    "objetivo": "Ativar a mobilidade cervical, o equilíbrio na areia fofa e a orientação espacial após giros de 180 graus.",
    "comoMontar": "Disponha 3 cones em linha reta do fundo até a rede na meia-quadra esquerda, com 3,5 metros entre cada cone (cone 1 a 1m do fundo, cone 2 no centro a 4,5m, cone 3 junto à rede). J1 no fundo, J2 no meio e J3 na rede.",
    "passoAPasso": [
      "J1 (no fundo) passa a bola alta para J2 (no centro), que está de frente para J1.",
      "J2 entra embaixo da bola, estabiliza os pés na areia e executa um levantamento de toque de costas limpo para J3 (na rede).",
      "Assim que a bola sai de suas mãos, J2 gira 180 graus rapidamente na areia para ficar de frente para J3.",
      "J3 devolve a bola para J2, que agora faz novo toque de costas enviando a bola de volta para J1 no fundo e gira 180 graus novamente; trocam o jogador do meio a cada 90 segundos."
    ],
    "pontosAtencao": [
      "Entrar bem embaixo da bola para que ela esteja exatamente acima da testa antes de arquear levemente a coluna torácica.",
      "Não girar o corpo durante o toque de costas; o giro de 180 graus acontece somente depois que a bola sai limpa das mãos.",
      "Usar passos curtos de ajuste na areia após cada giro para achar a bola no ar rapidamente."
    ],
    "erroComum": "Deixar a bola cair atrás da cabeça e carregar (conduzir) a bola para trás; corrija exigindo parada total dos pés e finalização rápida de punhos para cima. Variações",
    "variacaoFacil": "Fazer o exercício usando manchete para frente, depois girar 180 graus para receber do outro lado também de manchete.",
    "variacaoDificil": "Antes de J2 tocar de costas, o jogador que vai receber grita 'DIREITA' ou 'ESQUERDA', e J2 precisa deslocar 1 metro para o lado pedido após o giro.",
    "meta": "Executar 10 levantamentos de costas limpos e precisos seguidos na mão dos colegas sem cometer dupla falta ou condução."
  },
  {
    "numero": 11,
    "secao": 1,
    "nome": "Mini-jogo de aquecimento só com poke e largada de falange",
    "nivel": "Avançado",
    "jogadores": "2 jogadores (1 contra 1 em quadra curta)",
    "tempo": "9 minutos",
    "material": "1 bola e 4 cones",
    "objetivo": "Aquecer as articulações dos dedos e a explosão de pernas usando exclusivamente os golpes curtos oficiais da praia.",
    "comoMontar": "Use os 4 cones para demarcar uma quadra curta de 4 x 4 metros de cada lado da rede (da linha central até 4 metros de profundidade e 4 metros de largura).",
    "passoAPasso": [
      "J1 e J2 iniciam o rally passando a bola por cima da rede a partir da linha de 4 metros.",
      "O jogo acontece com no máximo 2 toques seguidos por jogador (1º contato de manchete para o alto e 2º contato passando a bola para o outro lado).",
      "Regra obrigatória: para passar a bola por cima da rede, só vale usar 'poke' (cotovelada/nó dos dedos rígidos), 'cobra' (pontas dos dedos unidas e rígidas) ou manchete.",
      "É proibido largar a bola com a palma da mão aberta ou empurrá-la com os dedos moles (infração na praia); vence o rally quem fizer a bola tocar na areia dentro do quadrado de 4x4m adversário."
    ],
    "pontosAtencao": [
      "Manter os dedos rigidamente unidos no golpe de cobra ou as falanges dobradas e firmes no poke para não caracterizar condução.",
      "Elevar bem o cotovelo como se fosse atacar forte antes de aplicar o poke curto para enganar o adversário.",
      "Voltar imediatamente ao centro do quadrado de 4x4m após cada golpe na rede."
    ],
    "erroComum": "Empurrar a bola com a ponta dos dedos mole (largada de quadra indoor); corrija parando o ponto imediatamente e mostrando o contato seco com os nós dos dedos (falanges). Variações",
    "variacaoFacil": "Permitir exclusivamente 2 contatos obrigatórios e diminuir a largura da mini-quadra para 3 x 3 metros.",
    "variacaoDificil": "Permitir passar de primeira ou de segunda bola, obrigando o jogador a tocar a mão na linha da rede após cada bola enviada para o outro lado.",
    "meta": "Disputar um set curto até 7 pontos sem cometer nenhuma infração de toque irregular ou largada aberta."
  },
  {
    "numero": 12,
    "secao": 1,
    "nome": "Circuito reativo de sol, vento e bola curta",
    "nivel": "Avançado",
    "jogadores": "2 jogadores (ou trio em rodízio)",
    "tempo": "10 minutos",
    "material": "3 bolas, 4 cones e 1 zona alvo na rede",
    "objetivo": "Concluir o aquecimento integrando explosão máxima na areia, leitura visual contra o sol/vento e precisão de manchete.",
    "comoMontar": "Escolha o lado da quadra em que o jogador olhe contra o sol ou contra o vento. Coloque 1 cone central a 5 metros da rede (base), 1 cone na lateral esquerda, 1 cone na lateral direita e uma zona alvo junto à rede.",
    "passoAPasso": [
      "J1 fica na base central (a 5m da rede) em skipping baixo (trote acelerado no lugar movendo a areia); J2 fica na rede com 3 bolas.",
      "Ao comando de J2 ('ESQUERDA!' ou 'DIREITA!'), J1 corre em velocidade máxima até o cone lateral correspondente e toca-o com a mão.",
      "Imediatamente após o toque no cone, J2 lança uma bola alta no centro da quadra (forçando J1 a olhar para o alto contra o sol/vento) seguida de uma bola curta próxima à rede.",
      "J1 ajusta os passos conforme o vento, passa a bola alta de manchete para a zona alvo, arranca para frente e salva a bola curta de poke sobre a rede.",
      "Após a sequência de 3 bolas, J1 e J2 invertem as funções."
    ],
    "pontosAtencao": [
      "Dar o último passo largo e estável na areia antes de fazer a manchete na bola alta, compensando a ação do vento.",
      "Usar a mão livre como viseira rápida ou virar levemente a linha dos ombros para não perder a bola no sol antes do contato.",
      "Não esperar a primeira bola cair no alvo para já iniciar a arrancada rumo à bola curta na rede."
    ],
    "erroComum": "Correr olhando para o chão e perder o tempo da bola alta que o vento carrega; corrija pedindo para localizar a bola no instante em que ela sai da mão do lançador. Variações",
    "variacaoFacil": "Fazer apenas 1 bola por saída (alternando uma saída para bola alta e outra para bola curta) com intervalo de 10 segundos.",
    "variacaoDificil": "J1 começa deitado de peito na areia; ao sinal, levanta, toca no cone lateral e executa a sequência de bola alta + bola curta sem pausa.",
    "meta": "Acertar pelo menos 5 das 6 bolas da série (3 altas na zona alvo e 3 curtas por cima da rede) em ritmo máximo."
  },
  {
    "numero": 13,
    "secao": 2,
    "nome": "Base ativa e destrave na areia",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 em base de defesa e 1 dando o estímulo na rede)",
    "tempo": "6 minutos",
    "material": "2 cones e 1 bola",
    "objetivo": "Automatizar a postura de prontidão e o micro-passo de destrave ('split-step' da areia) no instante do contato adversário.",
    "comoMontar": "Na meia-quadra esquerda, posicione 2 cones a 5 metros da rede, afastados 3 metros entre si (um na diagonal e outro na paralela). J1 fica sobre um dos cones e J2 fica junto à rede de frente para ele segurando uma bola.",
    "passoAPasso": [
      "J1 assume a posição de base: pés ligeiramente mais largos que os ombros, joelhos flexionados, quadril baixo, tronco inclinado à frente e mãos livres à frente da cintura.",
      "J1 mantém os pés vivos mexendo levemente a areia com a ponta dos pés, sem enterrar os calcanhares.",
      "J2 levanta a bola acima da cabeça e bate com a palma da mão nela (simulando o momento exato do ataque ou saque).",
      "No exato instante da batida na bola, J1 executa o destrave (pequena abertura rápida dos dois pés na areia baixando 5 cm o quadril) e dá 1 passo curto de leitura para frente estabilizando a base.",
      "Após 10 repetições no cone da esquerda, J1 muda para o cone da direita; depois invertem os papéis."
    ],
    "pontosAtencao": [
      "Manter 70% do peso corporal nas pontas dos pés (antepé) e os calcanhares apenas roçando na areia.",
      "O destrave não é um pulo alto para cima: é um desbloqueio rápido das articulações de tornozelo e joelho rente à areia.",
      "Os cotovelos devem ficar à frente da linha das costelas, prontos para fechar a manchete ou subir para a cabeça."
    ],
    "erroComum": "Ficar com os pés chapados e enterrados na areia esperando a bola sair; corrija exigindo que os dois pés abram um dedo de largura exatamente quando a mão de J2 tocar a bola. Variações",
    "variacaoFacil": "J2 conta '1, 2 e 3!' em voz alta antes de bater na bola para ajudar J1 a sincronizar o tempo do destrave.",
    "variacaoDificil": "Após o destrave, J2 aponta para a esquerda ou para a direita e J1 precisa cravar o primeiro passo lateral além do avanço.",
    "meta": "Sincronizar 9 de 10 destraves exatamente no milissegundo da batida na bola sem atrasar nem pular alto."
  },
  {
    "numero": 14,
    "secao": 2,
    "nome": "Primeiro passo explosivo de empurrão",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (lado a lado)",
    "tempo": "7 minutos",
    "material": "4 cones",
    "objetivo": "Aprender a tracionar a areia empurrando com a borda interna do pé de trás sem dar passo em falso para trás.",
    "comoMontar": "Coloque 2 cones de saída a 6 metros da rede na meia- quadra esquerda e outros 2 cones de chegada 3 metros à frente (a 3 metros da rede), formando duas raias curtas de explosão.",
    "passoAPasso": [
      "J1 e J2 posicionam-se nos cones de saída (a 6m da rede) em base baixa de defesa.",
      "Ao sinal visual ou sonoro, empurram a areia com força usando a bola do pé e a borda interna do pé de trás, projetando o peito e o joelho da frente rumo ao cone de 3 metros.",
      "Chegam ao cone da frente em no máximo 3 passadas rápidas e param equilibrados em postura baixa de manchete, tocando a ponta do cone.",
      "Retornam caminhando devagar até a marca de 6 metros, alisam a areia com o pé no ponto de saída e repetem trocando a perna que inicia a explosão."
    ],
    "pontosAtencao": [
      "Proibido dar o 'passo negativo' (recuar um pé para trás antes de arrancar para frente).",
      "Inclinarem o tronco a 45 graus à frente no primeiro passo para vencer a inércia da areia fofa.",
      "Usar os braços de forma vigorosa (cotovelo puxando para trás) no primeiro segundo de arrancada."
    ],
    "erroComum": "Tentar puxar o chão com o pé da frente em vez de empurrar a areia com o pé de trás; corrija observando o buraco na areia que deve ficar atrás do pé de impulsão. Variações",
    "variacaoFacil": "Iniciar já com um pé 20 cm à frente do outro (base assimétrica) para facilitar a aplicação de força.",
    "variacaoDificil": "Sair sentado de frente na areia; ao sinal, levantar sem apoiar os dois joelhos juntos e explodir nos 3 metros.",
    "meta": "Completar 8 de 10 saídas de 3 metros sem nenhum passo em falso para trás e parando equilibrado no cone final."
  },
  {
    "numero": 15,
    "secao": 2,
    "nome": "Passada lateral curta entre cones",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (trabalhando simultaneamente em faixas paralelas)",
    "tempo": "7 minutos",
    "material": "4 cones",
    "objetivo": "Dominar o deslocamento lateral curto de ajuste mantendo o quadril nivelado e o peito voltado para a rede.",
    "comoMontar": "Na meia-quadra esquerda, monte duas linhas laterais de 3 metros de largura: 2 cones a 3 metros da rede (para J1) e 2 cones a 6 metros da rede (para J2).",
    "passoAPasso": [
      "J1 posiciona-se no cone esquerdo da linha de 3m; J2 posiciona-se no cone esquerdo da linha de 6m.",
      "Ao sinal, deslocam-se em passada lateral ('abre-fecha') até o cone da direita (3 metros), mantendo o peito sempre apontado para a rede.",
      "O pé da direção do movimento abre rasante na areia e o pé oposto empurra a areia aproximando-se sem encostar um calcanhar no outro.",
      "Ao chegar no cone da direita, cravam a borda interna do pé de fora na areia, simulam a plataforma de manchete por 1 segundo e voltam em passada lateral para a esquerda.",
      "Realizam 6 idas e vindas contínuas e depois trocam de linha (quem estava nos 3m vai para os 6m)."
    ],
    "pontosAtencao": [
      "O pé que avança nunca deve cruzar à frente ou atrás do outro pé nem tocar os tornozelos.",
      "Manter os olhos na fita superior da rede durante todo o percurso, nunca olhando para os cones no chão.",
      "Sentir a coxa trabalhando com o quadril sempre na mesma altura, sem quicar a cabeça para cima."
    ],
    "erroComum": "Juntar os dois pés no meio da passada ficando com a base estreita; corrija exigindo que sempre exista pelo menos um palmo e meio de distância entre os pés. Variações",
    "variacaoFacil": "Reduzir a distância entre os cones para 2 metros e diminuir a velocidade de execução.",
    "variacaoDificil": "Segurar uma bola com os braços estendidos à frente na posição de manchete durante todo o deslocamento lateral.",
    "meta": "Fazer as 6 travessias de 3 metros em menos de 16 segundos sem cruzar os pés e sem levantar o quadril."
  },
  {
    "numero": 16,
    "secao": 2,
    "nome": "Virada de quadril e passo cruzado longo",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (revezando na largura total da quadra)",
    "tempo": "8 minutos",
    "material": "2 cones",
    "objetivo": "Aprender quando e como girar o quadril e cruzar a perna para cobrir grandes distâncias laterais na areia fofa.",
    "comoMontar": "Coloque 2 cones a 5 metros da rede na meia-quadra esquerda, afastados 6 metros um do outro (quase de uma linha lateral até a outra).",
    "passoAPasso": [
      "J1 começa no cone da esquerda em base baixa olhando para a rede; J2 aguarda atrás da linha de fundo pronto para entrar na vez seguinte.",
      "Ao sinal, J1 gira rapidamente a ponta do pé direito e o quadril para a direita, cruzando a perna esquerda de forma ampla pela frente do corpo (passo cruzado).",
      "Corre de lado/frente com passadas longas e potentes pelos 6 metros da largura da quadra, mantendo apenas a cabeça e o olhar virados para a rede.",
      "Nos últimos 80 centímetros antes do cone da direita, J1 volta o quadril de frente para a rede e planta os dois pés paralelos na areia em base de defesa.",
      "Na sequência imediata, faz o passo cruzado para o lado oposto retornando ao cone inicial e dá lugar a J2."
    ],
    "pontosAtencao": [
      "Para distâncias acima de 2,5 metros na areia, o passo lateral é lento demais: é obrigatório girar o quadril e usar o passo cruzado seguido de corrida.",
      "Desacoplar o tronco do quadril: as pernas correm para a lateral, mas os olhos continuam vigiando o outro lado da rede.",
      "A parada final deve ser com os dois pés equilibrados e o quadril voltado para o centro da rede."
    ],
    "erroComum": "Chegar no cone ainda correndo de lado e tentar fazer a manchete com as pernas cruzadas; corrija exigindo que os dois últimos apoios squared (enquadrem) o quadril para a rede. Variações",
    "variacaoFacil": "Diminuir a distância entre os cones para 4,5 metros e fazer uma parada completa de 3 segundos em cada cone.",
    "variacaoDificil": "J2 fica na rede com uma bola e só aponta o lado no último instante; J1 cruza a quadra e precisa tocar a bola parada na mão de um terceiro colega ou num cone alto.",
    "meta": "Cruzar os 6 metros de areia em no máximo 4 passadas amplas e terminar 100% equilibrado de frente para a rede em 8 de 10 tentativas."
  },
  {
    "numero": 17,
    "secao": 2,
    "nome": "Arrancada para bola curta (pingo na frente)",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 defensor e 1 marcador de alvo)",
    "tempo": "7 minutos",
    "material": "3 cones e 1 bola",
    "objetivo": "Desenvolver a explosão frontal e a entrada baixa de afundo para salvar bolas largadas perto da rede.",
    "comoMontar": "Coloque 1 cone central a 6 metros da rede (saída de J1) e 2 cones próximos da rede (a 2 metros da linha central, um na diagonal esquerda e outro na diagonal direita). J2 fica junto à rede segurando 1 bola na altura do quadril.",
    "passoAPasso": [
      "J1 posiciona-se no cone de 6 metros em base de defesa; J2 fica perto de um dos cones de 2 metros segurando a bola a 30 cm da areia.",
      "Ao sinal de J2 (quando ele estende o braço com a bola para baixo), J1 arranca em velocidade máxima de frente por 4 metros.",
      "No último passo antes de chegar ao cone de 2 metros, J1 dá uma passada longa em afundo (perna da frente dobrada e braço estendido rente à areia).",
      "J1 toca a parte de baixo da bola que está na mão de J2 com o dorso da mão ou manchete sem deixar o peito desabar na areia.",
      "J1 empurra a areia com a perna da frente e trota de costas de volta ao cone de 6 metros para atacar o cone do outro lado."
    ],
    "pontosAtencao": [
      "Manter o centro de gravidade baixo desde o primeiro passo: não suba o corpo para depois tentar abaixar em cima da bola.",
      "No último passo, deslizar o pé da frente na areia fofa como um esqui para frear sem travar o joelho.",
      "Estender o braço longe do corpo para ganhar 50 cm extras de alcance na bola curta."
    ],
    "erroComum": "Correr ereto e dobrar apenas a coluna para baixo na última hora, perdendo o alcance; corrija pedindo para afundar o joelho de trás quase até a areia no último passo. Variações",
    "variacaoFacil": "Posicionar o cone de saída a 4,5 metros da rede (deslocamento de apenas 2,5 metros).",
    "variacaoDificil": "J2 solta a bola da altura da cintura e J1 precisa tocar nela antes que a bola encoste na areia.",
    "meta": "Alcançar e tocar por baixo da bola em 9 de 10 saídas mantendo o equilíbrio na frenagem."
  },
  {
    "numero": 18,
    "secao": 2,
    "nome": "Recuo em diagonal para bola funda (lob)",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores",
    "tempo": "8 minutos",
    "material": "3 cones",
    "objetivo": "Aprender a abrir o quadril e correr de frente olhando por cima do ombro para buscar bolas que encobrem o defensor.",
    "comoMontar": "Coloque 1 cone central a 3 metros da rede (posição adiantada) e 2 cones nos dois cantos da linha de fundo (a 8 metros da rede) na meia-quadra esquerda.",
    "passoAPasso": [
      "J1 começa no cone de 3 metros da rede em base baixa; J2 fica junto à rede de frente para J1.",
      "J2 aponta com o braço estendido para o canto esquerdo ou direito do fundo da quadra (simulando um lob por cima da cabeça de J1).",
      "J1 abre imediatamente o quadril para o lado indicado (girando 135 graus) e corre de frente/diagonal em direção ao cone da linha de fundo, nunca correndo de costas.",
      "Durante a corrida até o fundo (cerca de 5,5 metros), J1 mantém o queixo sobre o ombro interno olhando para o alto como se acompanhasse a bola no céu.",
      "Ao chegar no cone do fundo, J1 gira o quadril de frente para a rede, planta os dois pés na areia simulando uma manchete alta para o meio da quadra e retorna ao cone de 3m."
    ],
    "pontosAtencao": [
      "Jamais recuar correndo de costas para bolas longas na areia: correr de costas é lento e faz o jogador tropeçar nos montinhos de areia.",
      "No final do recuo, o pé mais próximo da linha lateral deve plantar atrás da linha da bola para virar o corpo de volta para o centro da quadra.",
      "Manter os braços livres para correr forte e só juntar as mãos da manchete quando parar os pés no fundo."
    ],
    "erroComum": "Dar 3 passos de costas antes de virar o corpo; corrija exigindo que o primeiro movimento já seja o giro completo do quadril apontando o peito para o cone de fundo. Variações",
    "variacaoFacil": "Marcar os cones de fundo a 6,5 metros da rede (diagonal mais curta) e fazer em velocidade moderada.",
    "variacaoDificil": "J1 começa ajoelhado a 3 metros da rede de frente para a fita; ao sinal, levanta já abrindo o quadril e corre até o canto de 8 metros.",
    "meta": "Chegar aos cones da linha de fundo em menos de 3 segundos com os dois pés virados de volta para a rede em 8 de 10 repetições."
  },
  {
    "numero": 19,
    "secao": 2,
    "nome": "Frenagem na areia fofa e troca de direção em V",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (revezando na estação)",
    "tempo": "8 minutos",
    "material": "3 cones",
    "objetivo": "Treinar a técnica de estancar o movimento afundando a borda do pé na areia para mudar de direção sem escorregar.",
    "comoMontar": "Monte um formato de 'V' na meia-quadra esquerda: 1 cone central a 6,5 metros da rede (vértice de saída) e 2 cones a 2,5 metros da rede afastados 5 metros entre si (pontas do V).",
    "passoAPasso": [
      "J1 sai em explosão do cone central (6,5m) em direção ao cone frontal esquerdo (2,5m).",
      "Ao chegar no cone esquerdo, J1 baixa o quadril e crava o calcanhar e a borda interna do pé esquerdo (pé de fora) na areia, levantando um leque de areia para frear.",
      "Usando essa mesma perna esquerda como mola, J1 muda de direção imediatamente em diagonal para trás voltando ao cone central de 6,5m.",
      "No cone central, freia com o pé de trás e já explode para o cone frontal direito (2,5m), completando o desenho do 'V' completo.",
      "Após completar ida e volta nos dois braços do V, J2 assume a estação enquanto J1 descansa."
    ],
    "pontosAtencao": [
      "Sempre frear com o pé de fora (mais distante do novo destino) para que o peso do corpo já fique inclinado para a direção de volta.",
      "Baixar o quadril no penúltimo passo antes do cone: se tentar frear com a perna esticada, o pé desliza demais na areia fofa.",
      "Tocar a base do cone com a mão de fora para garantir o abaixamento real do centro de gravidade."
    ],
    "erroComum": "Dar vários passinhos miúdos ao redor do cone fazendo uma curva redonda em vez de um corte seco em ângulo agudo; corrija exigindo uma única travada firme com o pé de fora. Variações",
    "variacaoFacil": "Fazer apenas um lado do V por vez, com 10 segundos de pausa no cone central.",
    "variacaoDificil": "Fazer o retorno do cone da frente até o cone central abrindo o quadril para fora como se buscasse uma bola de lob após uma finta curta.",
    "meta": "Completar o circuito em 'V' completo (4 pernas de deslocamento) abaixo de 9 segundos com frenagens limpas nos 3 cones."
  },
  {
    "numero": 20,
    "secao": 2,
    "nome": "Vai-e-vem frente-fundo (gangorra de defesa)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "8 minutos",
    "material": "3 cones",
    "objetivo": "Condicionar a troca rápida de padrão motor entre a arrancada frontal baixa e o recuo profundo na mesma linha.",
    "comoMontar": "Alinhe 3 cones em linha reta do fundo até a rede no corredor esquerdo da meia-quadra: Cone A na linha de fundo (8m da rede), Cone B no meio (4,5m da rede) e Cone C próximo à rede (1,5m da rede).",
    "passoAPasso": [
      "J1 inicia no Cone B (meio da quadra, a 4,5m da rede) em base baixa; J2 fica ao lado marcando o tempo e corrigindo a postura.",
      "Ao sinal, J1 explode de frente até o Cone C (1,5m da rede) e toca o chão com as duas mãos simulando salvar uma bola curta.",
      "Imediatamente abre o quadril e corre em velocidade máxima até o Cone A na linha de fundo (8m da rede), percorrendo 6,5 metros.",
      "Ao pisar no Cone A, vira de frente para a rede, toca a areia e arranca novamente até o Cone C (1,5m) e termina recuperando no Cone B (4,5m).",
      "J1 e J2 revezam a cada série completa."
    ],
    "pontosAtencao": [
      "Na transição da rede para o fundo (do Cone C para o Cone A), não recuar de costas: gire os quadris 180 graus e corra de frente olhando por cima do ombro.",
      "No Cone A (fundo), frear plantando o pé de trás sobre a linha de fundo para não sair da quadra pela inércia.",
      "Respirar de forma ritmada durante a corrida para não travar os ombros."
    ],
    "erroComum": "Apoiar as mãos nos joelhos ou levantar o tronco totalmente ao chegar no cone do meio; corrija exigindo que a finalização no Cone B seja em posição pronta de defesa. Variações",
    "variacaoFacil": "Reduzir as distâncias colocando o Cone A a 7 metros e o Cone C a 2,5 metros da rede.",
    "variacaoDificil": "Realizar duas passagens contínuas (Rede -> Fundo -> Rede -> Fundo -> Base) antes de trocar com o parceiro.",
    "meta": "Cumprir a sequência (Meio -> Rede -> Fundo -> Rede -> Meio) em menos de 11 segundos mantendo a técnica de giro."
  },
  {
    "numero": 21,
    "secao": 2,
    "nome": "Toca no cone e recupera para a base central",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (1 executante e 1 comandante na rede)",
    "tempo": "9 minutos",
    "material": "5 cones",
    "objetivo": "Criar o hábito automático de nunca admirar a própria jogada e sempre voltar imediatamente ao ponto central de leitura.",
    "comoMontar": "Monte uma estrela na meia-quadra esquerda: 1 cone central a 5 metros da rede (base) e 4 cones ao redor formando os 4 cantos (curta esquerda a 2m, curta direita a 2m, fundo esquerdo a 7,5m e fundo direito a 7,5m), numerados de 1 a 4.",
    "passoAPasso": [
      "J1 fica no cone central (5m da rede) em base ativa; J2 fica junto à rede de frente para J1.",
      "J2 chama um número de 1 a 4 (por exemplo: '2!').",
      "J1 usa o deslocamento correto para aquele canto (arrancada frontal para os cones 1 e 2; giro de quadril e recuo para os cones 3 e 4) e toca o cone chamado.",
      "Assim que toca o cone periférico, J1 recupera em velocidade até o cone central (5m) e já faz o destrave de frente para J2.",
      "No exato instante em que J1 pisa na base central, J2 chama o próximo número (sequência de 5 chamadas seguidas por série)."
    ],
    "pontosAtencao": [
      "Ao retornar dos cones da frente (1 e 2) para o centro, recuar em diagonal olhando para J2 na rede sem dar as costas para a bola.",
      "Ao retornar dos cones de fundo (3 e 4) para o centro, avançar de frente e já desacelerar no último passo para fazer o destrave equilibrado.",
      "Nunca parar em cima do cone periférico: o toque no cone já é o impulso de volta para a base."
    ],
    "erroComum": "Voltar caminhando devagar para o cone central como se o ponto tivesse acabado; corrija chamando o próximo número antes mesmo de o jogador chegar ao centro caso ele diminua o ritmo. Variações",
    "variacaoFacil": "Chamar os 4 cones na ordem fixa (1, 2, 3 e 4) para o jogador focar apenas na qualidade dos apoios.",
    "variacaoDificil": "J2 chama dois números seguidos ('1 e 4!'), obrigando J1 a ir na curta, passar pela base central e já buscar o fundo oposto.",
    "meta": "Completar a série de 5 chamadas aleatórias com retorno perfeito à base central em menos de 15 segundos."
  },
  {
    "numero": 22,
    "secao": 2,
    "nome": "Saída por estímulo visual do parceiro",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (1 bloqueador sinalizando na rede e 1 defensor no fundo)",
    "tempo": "8 minutos",
    "material": "4 cones",
    "objetivo": "Treinar a partida explosiva guiada exclusivamente pela visão periférica e pelo sinal tático na rede, sem comando de voz.",
    "comoMontar": "J2 fica junto à rede (simulando o bloqueador de costas para J1, com as mãos atrás do quadril). J1 fica no cone central de leitura a 5,5 metros da rede. Posicione 3 cones de destino: Cone Esquerdo (paralela), Cone Frontal (curta a 2,5m) e Cone Direito (diagonal).",
    "passoAPasso": [
      "J1 mantém o foco visual nas mãos de J2 atrás das costas enquanto movimenta a ponta dos pés na areia.",
      "J2 mostra um sinal silencioso com os dedos e depois salta para bloquear na rede: 1 dedo = sair para a Paralela (cone esquerdo); 2 dedos = sair para a Diagonal (cone direito); mão fechada = avançar na Bola Curta (cone frontal).",
      "No momento em que J2 salta na rede, J1 faz o destrave e explode para o cone correspondente ao sinal que acabou de ler.",
      "J1 chega ao cone de destino plantando a base baixa de defesa como se fosse amortecer uma pancada e recupera ao centro.",
      "Realizam 6 repetições silenciosas seguidas e depois trocam de função."
    ],
    "pontosAtencao": [
      "Não sair antes do salto do parceiro na rede para não entregar a movimentação de defesa ao atacante adversário.",
      "Sincronizar o destrave na areia com o momento em que os pés do bloqueador saem do chão.",
      "Chegar no cone de destino e parar 100% imóvel antes do momento imaginário do ataque."
    ],
    "erroComum": "Começar a correr assim que vê os dedos nas costas do parceiro (saindo cedo demais); corrija instruindo: 'Lê o sinal primeiro, espera o parceiro saltar, explode para o ponto'. Variações",
    "variacaoFacil": "Usar apenas duas opções de saída (Paralela esquerda ou Diagonal direita).",
    "variacaoDificil": "J2 muda o sinal no último segundo antes de saltar, exigindo leitura rápida e adaptação imediata da direção de saída.",
    "meta": "Acertar 10 de 10 leituras visuais no tempo exato do salto do parceiro sem que nenhuma palavra seja dita na quadra."
  },
  {
    "numero": 23,
    "secao": 2,
    "nome": "Deslocamento ao comando de voz na transição",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (1 atacante/chamador do outro lado da rede e 1 defensor)",
    "tempo": "8 minutos",
    "material": "3 cones e 1 bola",
    "objetivo": "Reagir instantaneamente ao chamado verbal do parceiro quando o defensor está olhando para o atacante adversário.",
    "comoMontar": "Coloque 3 cones na meia-quadra esquerda: Paralela Curta (a 2,5m da rede), Diagonal Média (a 5m da rede) e Fundo Linha (a 7,5m da rede). J1 começa no centro da quadra (a 5m da rede). J2 fica do outro lado da rede com uma bola nas mãos.",
    "passoAPasso": [
      "J1 fica em base de defesa olhando para J2 através da rede.",
      "J2 lança a bola para o alto para si mesmo e salta como se fosse atacar.",
      "No ponto mais alto do salto, J2 grita em voz alta um dos três destinos: 'CURTA!', 'DIAGONAL!' ou 'FUNDO!'.",
      "J1 destrava os pés no ar e explode imediatamente para tocar o cone correspondente ao grito antes que J2 toque os pés de volta na areia após uma segunda bola imaginária.",
      "Após tocar o cone na postura correta (afundo na curta, base baixa na diagonal ou giro de quadril no fundo), J1 volta ao centro para a próxima chamada."
    ],
    "pontosAtencao": [
      "Manter os olhos na bola e no ombro de J2 até ouvir a chamada, unindo visão e audição.",
      "Na chamada 'FUNDO!', girar imediatamente o quadril e correr de frente até a linha de 7,5 metros.",
      "Na chamada 'DIAGONAL!', usar 2 passos cruzados rápidos e estancar a base antes que a bola imaginária chegue."
    ],
    "erroComum": "Adivinhar o lado antes do grito e ficar com o peso no pé errado; corrija fazendo J2 gritar exatamente para o lado oposto caso perceba que J1 adiantou o corpo. Variações",
    "variacaoFacil": "J2 não salta: apenas levanta o braço no chão e grita o destino com antecedência de 1 segundo.",
    "variacaoDificil": "Adicionar um 3º jogador (ou o professor) atrás de J1 que dá o comando de voz nas costas dele enquanto J2 salta em silêncio do outro lado da rede.",
    "meta": "Reagir e tocar no cone chamado em menos de 1,8 segundo em pelo menos 8 de 10 chamadas."
  },
  {
    "numero": 24,
    "secao": 2,
    "nome": "Retirada simples do bloqueio para a diagonal",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (revezando na função de bloqueador que retira)",
    "tempo": "9 minutos",
    "material": "2 cones",
    "objetivo": "Aprender a mecânica de sair da rede (pull-off) após o salto ou finta de bloqueio para defender a quadra aberta.",
    "comoMontar": "Coloque 1 cone junto à rede no centro da meia-quadra esquerda (ponto de bloqueio) e 1 cone a 5,5 metros da rede na diagonal esquerda (ponto de defesa pós- retirada).",
    "passoAPasso": [
      "J1 posiciona-se no cone da rede com os dois pés paralelos a 30 cm da linha central e as mãos na altura dos ombros.",
      "Ao sinal de J2, J1 realiza um salto vertical rápido de bloqueio (ou finta alta de braços) sem tocar na rede.",
      "Assim que as pontas dos pés tocam a areia na descida, J1 já abre o pé esquerdo e o quadril apontando o peito para o cone de 5,5 metros na diagonal.",
      "J1 corre de frente/diagonal por 4 passadas explosivas olhando por cima do ombro direito (mantendo a rede no campo de visão).",
      "A 1 metro do cone de 5,5m, J1 gira o quadril de frente para a rede, afunda a base na areia e estanca os dois pés prontos para defender."
    ],
    "pontosAtencao": [
      "Nunca recuar da rede pulando de costas: você perde totalmente a velocidade na areia fofa.",
      "O segredo da retirada rápida está na aterrissagem do bloqueio: desça já girando o quadril 120 graus para a diagonal de saída.",
      "É obrigatório parar totalmente os dois pés no cone de 5,5m antes do momento do ataque adversário."
    ],
    "erroComum": "Continuar correndo para trás na hora em que o atacante bate na bola; corrija com o comando verbal 'CORRE, CORRE, PLANTA!' exigindo congelamento total no cone final. Variações",
    "variacaoFacil": "Não saltar na rede: fazer apenas a finta de braços no chão (ameaça de bloqueio) e já abrir o quadril para retirar.",
    "variacaoDificil": "Após parar na base aos 5,5 metros, J2 dá um segundo sinal obrigando J1 a mergulhar 1,5 metro à frente para buscar uma largada curta.",
    "meta": "Sair da aterrissagem na rede e estar com os dois pés plantados no cone de 5,5m em menos de 2,2 segundos em 8 de 10 repetições."
  },
  {
    "numero": 25,
    "secao": 2,
    "nome": "Retirada do bloqueio com escolha de corredor",
    "nivel": "Avançado",
    "jogadores": "2 jogadores (1 bloqueador na rede e 1 defensor de fundo coordenando a dupla)",
    "tempo": "9 minutos",
    "material": "3 cones",
    "objetivo": "Coordenar a retirada da rede com a movimentação do parceiro de fundo, cobrindo o corredor que ficar livre.",
    "comoMontar": "Na meia-quadra esquerda, coloque 1 cone na rede (posição de J1) e 2 cones a 5 metros da rede: um no corredor da Paralela (esquerda) e outro no corredor da Diagonal (direita). J2 (defensor) inicia a 6 metros da rede no centro.",
    "passoAPasso": [
      "J1 está na rede apresentando bloqueio; J2 está no fundo a 6 metros da rede.",
      "Ao iniciar a jogada, J2 grita qual corredor ELE vai cobrir no fundo ('MINHA PARALELA!' ou 'MINHA DIAGONAL!') e corre para aquele cone.",
      "J1 ameaça o bloqueio na rede, ouve a chamada de J2, abre o quadril para o corredor oposto que sobrou livre e retira em velocidade até a linha de 5 metros.",
      "Ambos estancam os pés simultaneamente a 5 metros da rede ocupando perfeitamente as duas metades da quadra sem deixar buraco nem bater cabeça.",
      "Após 6 repetições, trocam quem começa na rede e quem começa no fundo."
    ],
    "pontosAtencao": [
      "A comunicação de J2 precisa ser alta, curta e acontecer antes de J1 iniciar o giro de retirada.",
      "Se J1 retirar para a paralela (linha reta para trás), ainda assim deve abrir o quadril lateralmente e correr de lado/frente olhando para a bola.",
      "Os dois jogadores devem terminar alinhados na profundidade de 5 metros com 4 metros de distância lateral entre si."
    ],
    "erroComum": "Os dois jogadores correrem para o mesmo cone por falta de escuta ou chamada tardia; corrija obrigando J2 a gritar no instante em que faz o primeiro passo. Variações",
    "variacaoFacil": "Combinar antes da saída por sinais de dedos nas costas quem vai para qual lado, treinando primeiro a mecânica coordenada.",
    "variacaoDificil": "Incluir uma 3ª chamada: 'FICA!', na qual J1 salta de verdade para bloquear na rede e J2 cruza o fundo sozinho cobrindo a diagonal longa.",
    "meta": "Executar 9 de 10 retiradas coordenadas com ocupação correta dos dois cones opostos sem nenhuma confusão de lado."
  },
  {
    "numero": 26,
    "secao": 2,
    "nome": "Arrancada lateral com recepção de manchete na zona alvo",
    "nivel": "Avançado",
    "jogadores": "2 jogadores (1 lançador/sacador e 1 passador)",
    "tempo": "10 minutos",
    "material": "3 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Unir o passo cruzado de deslocamento na areia com a parada total dos pés para entregar uma recepção perfeita na rede.",
    "comoMontar": "Na meia-quadra esquerda, coloque 1 cone de saída próximo à linha lateral esquerda (a 6m da rede) e 1 cone de recepção a 4 metros de distância lateral para o lado direito (também a 6m da rede). Demarque uma Zona Alvo junto à rede no centro da quadra. J2 fica do outro lado da rede com as bolas.",
    "passoAPasso": [
      "J1 começa no cone esquerdo (a 6m da rede) em postura de recepção.",
      "J2 lança (ou saca fácil) uma bola alta arqueada por cima da rede em direção ao cone da direita (4 metros longe de J1).",
      "Assim que a bola sai da mão de J2, J1 gira o quadril, usa o passo cruzado rápido para atravessar os 4 metros de areia fofa e chega atrás da linha da bola.",
      "Antes de a bola descer na altura da cintura, J1 estanca completamente os dois pés na areia, nivela os ombros e executa a manchete alta direcionada para a Zona Alvo junto à rede.",
      "J1 recupera para o cone inicial e repete; a cada 6 bolas, trocam as funções."
    ],
    "pontosAtencao": [
      "Regra de ouro na areia: chegue cedo com as pernas para poder tocar na bola com os pés 100% parados no chão.",
      "Incline o ombro de fora (ombro direito) levemente para cima na hora da manchete para que a bola volte para o centro da rede e não escape para a antena.",
      "Use o empurrão das pernas na areia para dar altura à bola, sem balançar os braços acima do ombro."
    ],
    "erroComum": "Tocar na bola ainda correndo de lado, fazendo a bola espirrar para fora da quadra; corrija exigindo um 'freio de dois pés' audível na areia um instante antes do contato. Variações",
    "variacaoFacil": "Diminuir o deslocamento lateral para 2,5 metros e fazer lançamento alto com as duas mãos.",
    "variacaoDificil": "J1 começa no centro da linha de 6m e J2 saca sem avisar se a bola vai nos 3 metros da esquerda ou nos 3 metros da direita.",
    "meta": "Colocar 7 de 10 bolas altas dentro da Zona Alvo junto à rede após o deslocamento de 4 metros."
  },
  {
    "numero": 27,
    "secao": 2,
    "nome": "Entrada na bola curta com defesa controlada",
    "nivel": "Avançado",
    "jogadores": "2 jogadores (1 lançador na rede e 1 defensor)",
    "tempo": "10 minutos",
    "material": "3 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Transformar a arrancada máxima para frente em uma defesa alta e jogável no centro da quadra após uma largada curta.",
    "comoMontar": "Coloque 1 cone a 6 metros da rede no centro da meia- quadra esquerda (base de J1) e 1 cone a 2 metros da rede (ponto da largada curta). Demarque uma Zona Alvo no meio da quadra (a 3 metros da rede). J2 fica junto à rede com as bolas.",
    "passoAPasso": [
      "J1 inicia a 6 metros da rede em base baixa, movendo os pés na areia.",
      "J2 finge que vai bater forte e solta uma bola curta ('pingo') que cai em direção ao cone de 2 metros da rede.",
      "J1 destrava, explode 4 metros para frente em velocidade máxima e entra em afundo rasante no último passo.",
      "Com a base baixa e o pulso firme, J1 entra por baixo da bola (de manchete ou toque de uma mão fechada/dorso) levantando a bola com arco alto para dentro da Zona Alvo central.",
      "Imediatamente após o contato, J1 levanta da areia e já se posiciona para atacar a bola se necessário; trocam a cada 8 bolas."
    ],
    "pontosAtencao": [
      "Como o jogador vem correndo forte para frente, se ele balançar o braço a bola vai passar direto para o outro lado de graça: apenas apresente a plataforma firme e deixe a bola subir.",
      "Colocar o ângulo da manchete apontado quase para o céu (70 graus) para amortecer a velocidade da corrida frontal.",
      "Manter o queixo alto para enxergar o contato da bola no antebraço."
    ],
    "erroComum": "Bater na bola para frente em cima da rede enquanto corre; corrija pedindo para frear o pé da frente na areia e apontar os polegares para baixo criando um 'trampolim' para o alto. Variações",
    "variacaoFacil": "J1 sai de 4,5 metros da rede e J2 lança a bola com um arco um pouco mais alto.",
    "variacaoDificil": "J1 toca primeiro a mão na linha de fundo (8m) antes de J2 soltar a bola curta aos 2,5 metros da rede.",
    "meta": "Salvar 7 de 10 bolas curtas fazendo a bola subir acima da altura da fita e cair dentro da Zona Alvo central."
  },
  {
    "numero": 28,
    "secao": 2,
    "nome": "Recuo para bola de lob com resposta de manchete",
    "nivel": "Avançado",
    "jogadores": "2 jogadores (1 lançador na rede e 1 defensor)",
    "tempo": "10 minutos",
    "material": "3 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Dominar a corrida de costas virando de frente para buscar o 'lob' no fundo da quadra e devolver a bola alta no centro.",
    "comoMontar": "Na meia-quadra esquerda, coloque 1 cone a 3 metros da rede (posição adiantada de J1) e 1 cone no canto do fundo a 7,5 metros da rede. Demarque a Zona Alvo no centro da meia-quadra (a 3m da rede). J2 fica junto à rede com as bolas.",
    "passoAPasso": [
      "J1 começa adiantado no cone de 3 metros da rede (como se tivesse fechado para a largada curta).",
      "J2 lança uma bola alta por cobertura (lob) encobrindo a cabeça de J1 em direção ao cone de 7,5 metros no fundo da quadra.",
      "J1 abre o quadril instantaneamente, corre de frente olhando para a bola por cima do ombro e ultrapassa a linha de queda da bola.",
      "No último passo antes da linha de fundo, J1 planta o pé de fora na areia, gira os ombros de frente para o centro da quadra e executa uma manchete alta de recuperação para a Zona Alvo.",
      "Realizam 6 bolas para o canto esquerdo e 6 bolas para o canto direito, depois invertem os papéis."
    ],
    "pontosAtencao": [
      "Não tente tocar na bola correndo de costas para a rede a menos que seja o último recurso: tente sempre dar um passo a mais para contornar a bola e virar o peito para o alvo.",
      "Se não der tempo de virar o corpo todo, gire fortemente os ombros na direção da Zona Alvo no momento da manchete lateral.",
      "Mandar a bola bem alta (mínimo 4 metros de altura) para dar tempo ao parceiro de chegar para levantar."
    ],
    "erroComum": "Correr olhando exatamente para baixo do ponto onde a bola vai cair e a bola passar por cima da cabeça; corrija pedindo para correr mirando 1 metro atrás do ponto de queda previsto (compensando o vento e o arco). Variações",
    "variacaoFacil": "J1 começa a 4,5 metros da rede (recuo mais curto de apenas 3 metros até o fundo).",
    "variacaoDificil": "J2 primeiro mostra a bola curta obrigando J1 a dar 1 passo à frente e só então lança o lob no fundo.",
    "meta": "Recuperar 7 de 10 bolas de lob no fundo da quadra colocando-as dentro da Zona Alvo a 3m da rede."
  },
  {
    "numero": 29,
    "secao": 2,
    "nome": "Deslocamento do levantador saindo do fundo até a rede",
    "nivel": "Avançado",
    "jogadores": "2 jogadores (1 passador/defensor e 1 levantador infiltrando)",
    "tempo": "10 minutos",
    "material": "2 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Treinar a corrida longa de transição do jogador que não passou a bola, freando com equilíbrio junto à rede para levantar sem conduzir.",
    "comoMontar": "Coloque 2 cones a 6 metros da rede (J1 na esquerda como passador e J2 na direita como levantador que vai infiltrar). Coloque 1 cone de referência de levantamento a 1,5 metro da rede no centro e uma Zona Alvo de ataque na entrada da rede (esquerda).",
    "passoAPasso": [
      "J1 e J2 começam alinhados no fundo a 6 metros da rede.",
      "J1 lança a bola alta para o centro da quadra (simulando uma recepção ou defesa que subiu a 2 metros da rede) e grita 'SEU LEVANTE!'.",
      "No instante em que a bola sobe da mão de J1, J2 arranca em diagonal do fundo (6m) até o cone de levantamento (1,5m da rede), percorrendo cerca de 5 metros na areia.",
      "J2 chega meio segundo antes da bola cair, estanca completamente os dois pés na areia (pé direito ligeiramente à frente), vira os ombros para a entrada da rede e levanta de toque limpo ou manchete para a Zona Alvo de J1.",
      "Após 8 repetições, invertem de lado e de função."
    ],
    "pontosAtencao": [
      "No vôlei de praia, se você tocar de dedos ainda correndo, a bola quase sempre gira ou caracteriza condução: pare os dois pés na areia antes de tocar na bola.",
      "Corra olhando primeiro para o ponto onde a bola vai cair e ajuste os últimos dois passos curtos ('passos de freio') debaixo da bola.",
      "Nunca cole na fita da rede: pare a 1 ou 1,5 metro de distância da rede para não tocar nela e deixar espaço para o atacante."
    ],
    "erroComum": "Correr em linha reta para a rede e depois ter que correr de lado perseguindo a bola; corrija ensinando a ler a trajetória da bola no primeiro segundo e correr em linha reta diretamente para o ponto de queda. Variações",
    "variacaoFacil": "J2 inicia a 4 metros da rede e realiza todos os levantamentos de manchete estancando os pés.",
    "variacaoDificil": "J1 varia a qualidade do passe (ora mais colado na rede, ora a 3,5 metros da rede), obrigando J2 a ajustar o freio e escolher entre toque ou manchete.",
    "meta": "Chegar com os dois pés parados e acertar 8 de 10 levantamentos limpos dentro da Zona Alvo de ataque."
  },
  {
    "numero": 30,
    "secao": 2,
    "nome": "Sequência completa: retirada de bloqueio, defesa e aproximação de transição",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (ou 2 jogadores + professor/lançador do outro lado da rede)",
    "tempo": "12 minutos",
    "material": "3 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Encadear os três deslocamentos mais exigentes da areia em um único ponto: sair do bloqueio, defender no fundo e abrir para atacar.",
    "comoMontar": "J1 começa no cone junto à rede (bloqueador); J2 começa a 5 metros da rede no lado direito (parceiro/levantador); P/T (ou 3º jogador) fica do outro lado da rede com bolas. Coloque 1 cone de defesa na diagonal esquerda a 5,5m da rede e uma Zona Alvo junto à rede na esquerda.",
    "passoAPasso": [
      "J1 salta ou finta o bloqueio na rede; quando P/T prepara o ataque do outro lado, J1 abre o quadril e retira em velocidade até o cone de 5,5m na diagonal.",
      "J1 estanca os dois pés na areia aos 5,5m exatamente quando P/T ataca/lança a bola firme na diagonal dele.",
      "J1 defende a bola de manchete alta para o centro da quadra (onde J2 já está se posicionando para levantar).",
      "Sem admirar a defesa, J1 imediatamente abre 2 passos para fora da linha lateral (ajustando o ângulo de entrada) e acelera em direção à Zona Alvo na rede para receber o levantamento de J2.",
      "J1 salta equilibrado na Zona Alvo e passa a bola controlada para o outro lado; a cada 5 sequências completas, rodam as posições."
    ],
    "pontosAtencao": [
      "Existem duas paradas obrigatórias de pés nessa sequência: a parada da defesa aos 5,5m e os dois últimos passos de chamada do salto de ataque na rede.",
      "Após defender a bola para o alto, não corra reto para a rede debaixo da bola: abra ligeiramente para a linha lateral para enxergar o levantador e a quadra adversária.",
      "Mantenha a comunicação constante com o parceiro ('Subiu!', 'Aqui na entrada!')."
    ],
    "erroComum": "Gastar toda a energia na retirada e na defesa, ficando parado no fundo sem perna para entrar no ataque; corrija exigindo que o impulso de recuperação após a defesa já seja o primeiro passo de abertura para o ataque. Variações",
    "variacaoFacil": "P/T lança uma bola mais lenta em arco na diagonal e J1 apenas faz a aproximação de passada até a rede sem precisar saltar.",
    "variacaoDificil": "P/T pode alternar entre bater na diagonal funda (5,5m) ou soltar um pingo curto na diagonal (3m) durante a retirada de J1.",
    "meta": "Completar 6 de 8 sequências completas (retirada + defesa alta + chamada de ataque equilibrada na Zona Alvo) sem a bola cair."
  },
  {
    "numero": 31,
    "secao": 3,
    "nome": "Mecânica e pêndulo do saque por baixo",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 sacador de cada lado da rede, frente a frente)",
    "tempo": "8 minutos",
    "material": "2 bolas, 4 cones e 2 zonas alvo",
    "objetivo": "Aprender a coordenação de base na areia, o movimento de pêndulo do braço e o contato limpo no saque por baixo.",
    "comoMontar": "Posicione 1 cone a 5 metros da rede no lado esquerdo (para J1) e 1 cone a 5 metros da rede no lado direito (para J2). Demarque uma grande Zona Alvo de 4x4 metros no centro de cada meia-quadra.",
    "passoAPasso": [
      "J1 posiciona-se no cone de 5 metros da rede com o pé contrário ao braço que bate à frente (destros colocam o pé esquerdo na frente) bem firme na areia.",
      "Segura a bola na altura da cintura com a mão não dominante estendida à frente do quadril do braço de batida.",
      "Leva o braço dominante esticado para trás (movimento de pêndulo de relógio) enquanto transfere o peso para a perna de trás.",
      "Avança o braço de trás para frente sem jogar a bola para o alto (apenas tira a mão de apoio no último instante) e bate por baixo da bola com a base firme da mão fechada.",
      "A bola passa por cima da rede e cai na Zona Alvo de J2, que agarra a bola e executa o mesmo movimento de volta."
    ],
    "pontosAtencao": [
      "Não lance a bola para o alto no saque por baixo: no vento da praia ela sai do lugar; apenas solte a mão da frente milissegundos antes do impacto.",
      "Mantenha o cotovelo do braço de batida estendido e o punho travado no momento do contato.",
      "Transfira o peso do pé de trás para o pé da frente acompanhando a bola em direção à rede."
    ],
    "erroComum": "Dobrar o cotovelo na hora de bater, fazendo a bola subir verticalmente sem passar a rede; corrija pedindo para terminar o movimento com a mão apontando para a fita superior da rede. Variações",
    "variacaoFacil": "Posicionar o cone de saída a 3,5 metros da rede para reduzir a força exigida.",
    "variacaoDificil": "Dar um passo para trás na areia a cada 2 acertos até chegar à linha de fundo real (8 metros da rede).",
    "meta": "Acertar 8 de 10 saques por baixo passando sobre a rede e caindo dentro da Zona Alvo central."
  },
  {
    "numero": 32,
    "secao": 3,
    "nome": "Saque por baixo direcionado: esquerda e direita",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 sacador na linha de fundo e 1 coletor/receptor)",
    "tempo": "8 minutos",
    "material": "4 bolas, 4 cones e 2 zonas alvo",
    "objetivo": "Controlar o alinhamento dos pés e do ombro para direcionar o saque por baixo na paralela ou na diagonal da linha de fundo.",
    "comoMontar": "J1 posiciona-se atrás da linha de fundo esquerda (a 8 metros da rede). No lado direito da quadra, monte duas Zonas Alvo de 3x3 metros no meio da quadra (a 4,5m da rede): Alvo 1 na esquerda (diagonal) e Alvo 2 na direita (paralela). J2 fica entre os alvos recolhendo as bolas.",
    "passoAPasso": [
      "J1 começa atrás da linha de fundo no corredor direito da sua quadra.",
      "Para os 5 primeiros saques (Alvo 2 - Paralela), J1 aponta a ponta do pé da frente e o quadril diretamente em linha reta para a Zona Alvo 2.",
      "Executa o pêndulo do saque por baixo acompanhando o braço na linha reta do pé da frente.",
      "Para os 5 saques seguintes (Alvo 1 - Diagonal), J1 gira a base na areia apontando a ponta do pé da frente e os ombros na diagonal para a Zona Alvo 1.",
      "Após os 10 saques, J1 e J2 invertem as funções."
    ],
    "pontosAtencao": [
      "Na areia, a bola vai para onde o seu pé da frente e o seu ombro apontam: alinhe a base antes de iniciar o movimento.",
      "Como agora o saque sai de 8 metros (linha de fundo), use mais o impulso da perna de trás empurrando a areia.",
      "Finalize com o braço de batida apontado exatamente para o cone central da zona escolhida."
    ],
    "erroComum": "Tentar virar o punho na última hora para mudar a direção da bola sem virar os pés; corrija obrigando o aluno a desenhar um risco na areia com o pé da frente apontando para o alvo. Variações",
    "variacaoFacil": "Permitir dar 1 passo dentro da quadra (sacar a 6,5 metros da rede) para alunos que ainda não têm força para vencer os 8 metros.",
    "variacaoDificil": "J2 grita 'PARALELA!' ou 'DIAGONAL!' quando J1 já está preparando a base na linha de fundo.",
    "meta": "Acertar pelo menos 7 de 10 saques nas zonas chamadas (mínimo de 3 na paralela e 3 na diagonal)."
  },
  {
    "numero": 33,
    "secao": 3,
    "nome": "Lançamento consistente para o saque por cima",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (lado a lado na linha de fundo)",
    "tempo": "7 minutos",
    "material": "2 bolas e 4 cones (ou 2 aros/marcas na areia)",
    "objetivo": "Automatizar a alçada (lançamento) baixa e precisa da bola à frente do ombro de ataque, evitando que o vento da praia espalhe a bola.",
    "comoMontar": "Na linha de fundo esquerda, posicione 2 cones para marcar os pés de J1 e J2. Exatamente 50 cm à frente do pé direito de cada jogador (para destros), desenhe um círculo na areia ou coloque um cone chato como alvo de queda da bola.",
    "passoAPasso": [
      "J1 e J2 ficam em posição de saque por cima: pé esquerdo à frente, pé direito atrás, bola na mão esquerda na altura do peito e braço direito já armado alto com o cotovelo acima da linha da orelha.",
      "Sem dobrar o punho da mão que segura a bola, elevam a bola suavemente apenas 40 a 50 cm acima do ponto de contato (muito mais baixo do que na quadra indoor).",
      "Na primeira série de 8 repetições, o jogador NÃO bate na bola: ele mantém o braço direito armado lá no alto e deixa a bola cair no chão.",
      "A bola deve cair exatamente sobre a marca desenhada na areia (50 cm à frente do ombro direito) sem rolar para os lados.",
      "Na segunda série, lançam a bola e a agarram no ponto mais alto com a mão direita totalmente estendida, conferindo o alcance."
    ],
    "pontosAtencao": [
      "No vôlei de praia é proibido lançar a bola e pegá-la de volta após o apito do árbitro: por isso o lançamento precisa ser curto, limpo e sem giro.",
      "Levante a bola com o braço esticado usando o ombro (como um elevador), sem jogar com os dedos para ela não girar no vento.",
      "Arme o cotovelo do braço de batida ANTES de levantar a bola."
    ],
    "erroComum": "Lançar a bola 2 metros para o alto ou atrás da cabeça, obrigando o jogador a arquear as costas e perder a bola no vento; corrija limitando a altura da alçada a dois palmos acima da mão estendida. Variações",
    "variacaoFacil": "Fazer o exercício a 3 metros da rede olhando para a fita para ter referência visual de altura.",
    "variacaoDificil": "Fazer o lançamento de olhos fechados no momento de soltar a bola e abrir os olhos para cravar a mão no ponto mais alto.",
    "meta": "Fazer 8 de 10 lançamentos caírem exatamente dentro do círculo de 30 cm na areia à frente do ombro de batida."
  },
  {
    "numero": 34,
    "secao": 3,
    "nome": "Saque por cima parado a curta distância",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (um de cada lado da rede a 5 metros)",
    "tempo": "8 minutos",
    "material": "2 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Conectar o lançamento curto com a batida de mão aberta e rígida por cima da rede sem precisar forçar o ombro.",
    "comoMontar": "Coloque 1 cone a 5 metros da rede na meia-quadra esquerda (J1) e 1 cone a 5 metros da rede na meia- quadra direita (J2). Marque uma Zona Alvo entre os 4 e 6 metros de cada lado.",
    "passoAPasso": [
      "J1 posiciona-se no cone de 5 metros com a bola na mão esquerda e o cotovelo direito já armado alto.",
      "Lança a bola meio metro à frente do ombro direito com pouca altura.",
      "Transfere o peso do pé de trás para o pé da frente na areia enquanto gira o tronco e leva a palma da mão aberta e dura contra o centro da bola.",
      "A bola passa por cima da rede em trajetória firme até a Zona Alvo de J2.",
      "J2 recebe a bola, posiciona-se no seu cone de 5 metros e executa o saque por cima de volta para J1."
    ],
    "pontosAtencao": [
      "Dedos da mão de batida abertos mas totalmente rígidos, batendo com a base da palma da mão no centro da bola.",
      "Não cruzar o braço para baixo após o contato: empurre a bola para frente em direção ao alvo.",
      "Manter os dois pés plantados na areia (o calcanhar de trás levanta na transferência de peso, mas não sai do lugar)."
    ],
    "erroComum": "Bater na bola com a mão mole ou dedos dobrados, perdendo potência; corrija pedindo para bater na bola parada na mão do parceiro antes para sentir a rigidez do punho. Variações",
    "variacaoFacil": "Começar a 3,5 metros da rede focando exclusivamente no som seco da palma da mão na bola.",
    "variacaoDificil": "Exigir que a bola passe a no máximo 1 metro acima da fita da rede antes de cair na zona de 5 metros.",
    "meta": "Conseguir 8 de 10 saques por cima limpos que passem a rede e caiam dentro da zona de 4 a 6 metros."
  },
  {
    "numero": 35,
    "secao": 3,
    "nome": "Saque por cima parado da linha de fundo (8 metros)",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 sacador na linha de fundo e 1 no lado oposto)",
    "tempo": "9 minutos",
    "material": "4 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Executar o saque por cima na distância oficial da quadra de areia (8 metros até a rede) usando a cadeia cinética das pernas e tronco.",
    "comoMontar": "Posicione 2 cones na linha de fundo esquerda (a 8 metros da rede) formando um portal de saída para J1. Na meia-quadra direita, demarque uma grande Zona Alvo no centro-fundo (entre 4 e 7,5 metros da rede). J2 fica no lado direito recolhendo e devolvendo as bolas.",
    "passoAPasso": [
      "J1 começa 1 passo atrás da linha de fundo (a 8,5m da rede) entre os dois cones.",
      "Armar o cotovelo alto, lançar a bola à frente e dar 1 passo firme com o pé contrário ao braço de batida em direção à linha de fundo (sem pisar na fita).",
      "Impulsionar a areia com a perna de trás, girar o quadril e o ombro com velocidade e golpear a bola no ponto mais alto.",
      "Fazer a bola atravessar os 8 metros da sua quadra mais 5 a 7 metros da quadra adversária, caindo na Zona Alvo.",
      "Após 8 saques, J1 corre para o outro lado e J2 assume a linha de saque."
    ],
    "pontosAtencao": [
      "A força para vencer os 14 metros totais na areia vem do passo à frente e do giro de quadril, não apenas do ombro.",
      "Aponte o contato levemente de baixo para o centro da bola (cerca de 15 graus para cima) para vencer a altura da rede.",
      "Cuidado para não pisar sobre ou por baixo da fita da linha de fundo antes de tocar na bola (falta de pé)."
    ],
    "erroComum": "Jogar a cabeça para baixo no momento da batida, fazendo a bola bater no meio da rede; corrija pedindo para manter o queixo alto olhando para o fundo da quadra adversária. Variações",
    "variacaoFacil": "Dar 2 passos de embalada antes do lançamento (caminhar e sacar) para gerar mais inércia para frente.",
    "variacaoDificil": "Dividir a Zona Alvo ao meio (metade esquerda e metade direita) e exigir alternância a cada saque.",
    "meta": "Colocar 7 de 10 saques por cima oficiais dentro da Zona Alvo de fundo sem cometer falta na linha."
  },
  {
    "numero": 36,
    "secao": 3,
    "nome": "Contato seco para o saque flutuante (sem rotação)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (1 sacador e 1 observador/receptor do efeito)",
    "tempo": "9 minutos",
    "material": "4 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Eliminar o giro da bola através de um impacto curto e seco no centro de gravidade da bola, fazendo-a oscilar no ar.",
    "comoMontar": "J1 atrás da linha de fundo esquerda (8m). Na meia- quadra direita, demarque uma Zona Alvo central (a 5m da rede). J2 fica a 6 metros da rede no lado direito com a missão de observar os gomos da bola no ar.",
    "passoAPasso": [
      "J1 prepara o saque por cima e lança a bola com as duas mãos (ou uma mão em bandeja) totalmente parada, sem nenhuma rotação.",
      "Golpeia exatamente o centro da bola com a base da palma da mão rígida e freia o braço imediatamente após o contato (como um 'tapa seco' ou soco de karatê com a mão aberta).",
      "O punho não deve dobrar para baixo no final do movimento.",
      "J2 acompanha a bola cruzando a rede e grita 'FLUTUOU!' se a válvula/costura da bola vier parada no ar (sem girar), ou 'GIROU!' se ela vier rodando.",
      "Só conta ponto no exercício se a bola cair na Zona Alvo E J2 confirmar que ela veio sem rotação; trocam a cada 8 saques."
    ],
    "pontosAtencao": [
      "O segredo do saque flutuante é o tempo de contato mínimo: bata no centro da bola e congele a mão aberta apontada para o alvo.",
      "Se você 'pentear' a bola dobrando o punho, ela vai girar com topspin e perderá o efeito de flutuação.",
      "Contra o vento da praia, o saque flutuante balança duas vezes mais do que na quadra coberta."
    ],
    "erroComum": "Continuar o movimento do braço até bater na própria coxa, gerando rotação na bola; corrija pedindo para terminar o golpe com a palma da mão parada à frente do rosto como se dissesse 'PARE'. Variações",
    "variacaoFacil": "Realizar o saque a 6 metros da rede para focar 100% na freada do punho e na bola sem giro.",
    "variacaoDificil": "Dar um pequeno salto para frente (flutuante em suspensão) mantendo o contato seco sem rotação.",
    "meta": "Conseguir 6 de 10 saques que caiam na Zona Alvo com rotação zero (flutuando visivelmente no ar)."
  },
  {
    "numero": 37,
    "secao": 3,
    "nome": "Saque flutuante rasante à fita da rede",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "4 bolas, 2 cones de antena e 1 zona alvo",
    "objetivo": "Baixar o arco da trajetória do saque flutuante para que a bola passe no máximo a 50 cm acima da fita superior, tirando o tempo de reação do passador.",
    "comoMontar": "J1 posiciona-se a 1 metro atrás da linha de fundo esquerda (a 9 metros da rede). Na meia-quadra direita, marque uma Zona Alvo entre os 5 e 7 metros da rede. J2 fica na lateral da rede olhando a altura de passagem da bola sobre a fita.",
    "passoAPasso": [
      "J1 recua 1 metro além da linha de fundo (totalizando 9 metros da rede): na física da areia, afastar-se um pouco da linha permite bater mais reto na bola sem que ela saia no fundo.",
      "Fixa o olhar exatamente 30 cm acima da fita branca superior da rede.",
      "Lança a bola baixa e executa o golpe flutuante horizontal, mirando rasante à fita.",
      "J2, posicionado ao lado do poste da rede, valida se a bola passou dentro da 'janela baixa' (até 50 cm acima da fita) e caiu na Zona Alvo.",
      "Realizam 10 tentativas e invertem as funções."
    ],
    "pontosAtencao": [
      "Quando você saca colado na linha de fundo, precisa bater para cima e a bola faz um balão lento; recuando 1 metro, você bate reto e a bola passa rápida e baixa.",
      "Contato no centro-superior da bola com o tronco firme.",
      "Se a bola tocar na fita e cair do outro lado, no vôlei de praia o ponto vale normalmente — não tenha medo de raspar a fita."
    ],
    "erroComum": "Bater de baixo para cima fazendo a bola subir 3 metros acima da rede; corrija pedindo para mirar na borda superior da fita branca. Variações",
    "variacaoFacil": "Permitir uma janela de até 1 metro acima da fita superior da rede.",
    "variacaoDificil": "Amarrar um elástico ou fita entre as duas antenas a 60 cm acima da rede para criar um túnel físico real por onde a bola deve passar.",
    "meta": "Passar 7 de 10 saques flutuantes rasantes (abaixo de 50-60 cm da fita) caindo dentro da Zona Alvo."
  },
  {
    "numero": 38,
    "secao": 3,
    "nome": "Saque curto ('pingado') logo atrás da rede",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "5 bolas, 4 cones e 2 zonas alvo curtas",
    "objetivo": "Dominar o amortecimento do contato para derrubar a bola entre os 1,5 e 3 metros da rede, obrigando o adversário a correr na areia fofa.",
    "comoMontar": "J1 na linha de fundo esquerda (8m). No lado direito da rede, monte duas Zonas Alvo curtas (de 1,5m a 3m da rede): uma na esquerda e outra na direita, demarcadas com cones. J2 fica a 6 metros da rede no lado direito.",
    "passoAPasso": [
      "J1 prepara a mesma postura e o mesmo lançamento de um saque forte de fundo (para não denunciar que vai sacar curto).",
      "Inicia o movimento do braço rápido, mas desacelera o ombro no último instante ou toca levemente na parte inferior-traseira da bola.",
      "A bola deve subir apenas o suficiente para vencer a fita da rede e 'morrer' logo depois de cruzar, caindo dentro da faixa de 1,5 a 3 metros.",
      "Como exercício complementar, sempre que a bola cair na zona curta, J2 tenta arrancar dos 6 metros apenas para sentir o quão difícil é buscar essa bola na areia.",
      "Trocam de função a cada 8 saques."
    ],
    "pontosAtencao": [
      "Nunca mude a postura nem o lançamento antes de sacar curto: o adversário lê o seu braço lento se você desacelerar cedo demais.",
      "Mire para a bola atingir seu ponto mais alto ANTES de cruzar a rede, para que ela já esteja caindo quando passar a fita.",
      "O saque curto na diagonal é mais seguro porque o caminho sobre a rede é mais longo."
    ],
    "erroComum": "Empurrar a bola com medo de bater na rede, fazendo ela viajar até os 5 metros (direto no peito do recebedor); corrija pedindo para aceitar errar 1 bola na fita até calibrar a mão leve. Variações",
    "variacaoFacil": "Colocar uma fileira de cones a 3,5 metros da rede: qualquer bola que cair entre a rede e a linha de 3,5m vale ponto.",
    "variacaoDificil": "Alternar obrigatoriamente 1 saque curto (até 3m) na diagonal esquerda e 1 saque curto na paralela direita.",
    "meta": "Fazer 6 de 10 saques caírem dentro da zona curta (entre a rede e a marca de 3 metros)."
  },
  {
    "numero": 39,
    "secao": 3,
    "nome": "Saque profundo no último metro da linha de fundo",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "5 bolas, 4 cones e 1 faixa alvo de fundo",
    "objetivo": "Calibrar a força do saque para que a bola caia no corredor de 1,5 metro antes da linha de fundo adversária, gerando dúvida se a bola vai dentro ou fora.",
    "comoMontar": "J1 atrás da linha de fundo esquerda (8m). Na meia- quadra direita, coloque 4 cones a 6,5 metros da rede, criando uma faixa alvo de 1,5m de profundidade colada à linha de fundo (dos 6,5m aos 8m). J2 fica próximo à linha de fundo direita conferindo o quique na fita.",
    "passoAPasso": [
      "J1 posiciona-se na linha de fundo olhando para a fita de fundo adversária (a 16 metros de distância total).",
      "Executa o saque flutuante tenso com potência de 85%, mirando na altura do peito de um recebedor que estaria a 5 metros da rede.",
      "A bola deve passar da linha de recepção normal e cair nos últimos 1,5 metro da quadra (entre os cones de 6,5m e a fita de 8m).",
      "Se a bola bater exatamente em cima da fita da linha de fundo (que mexe na areia), vale 2 pontos extras.",
      "Trocam de lado a cada 10 saques."
    ],
    "pontosAtencao": [
      "No vôlei de praia, o receptor fica a 5 ou 5,5 metros da rede; uma bola que vai a 7,5 metros na altura do ombro dele o obriga a decidir em meio segundo se mancheta alto ou se abaixa para a bola sair.",
      "Bata com o braço rápido e punho firme, usando o passo à frente na areia.",
      "Observe a fita de fundo adversária: se o vento estiver mexendo a fita, ajuste 10% da força."
    ],
    "erroComum": "Subir demais o arco da bola para ela chegar no fundo, dando tempo de o adversário recuar tranquilo; corrija exigindo trajetória tensa que passe a até 80 cm da rede. Variações",
    "variacaoFacil": "Ampliar a faixa alvo de fundo para os últimos 2 metros da quadra (dos 6m aos 8m da rede).",
    "variacaoDificil": "Colocar 2 alvos específicos de 2x1,5m apenas nos dois cantos extremos da linha de fundo.",
    "meta": "Acertar 6 de 10 saques dentro da faixa final de 1,5 metro sem ultrapassar a linha de fundo."
  },
  {
    "numero": 40,
    "secao": 3,
    "nome": "Saque nas linhas laterais (corredor externo de 1 metro)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "5 bolas, 6 cones e 2 corredores alvo",
    "objetivo": "Acertar os corredores laterais de 1 metro de largura para afastar o recebedor do centro da quadra e alongar o levantamento dele.",
    "comoMontar": "J1 saca da linha de fundo esquerda. Na meia-quadra direita, posicione cones a 1 metro de distância de cada linha lateral (entre os 4m e 7m de profundidade), formando dois corredores estreitos de 1m de largura colados às fitas laterais. J2 fica no centro recolhendo as bolas.",
    "passoAPasso": [
      "J1 posiciona-se no canto direito da sua linha de fundo para sacar na paralela (corredor lateral direito adversário).",
      "Alinha o pé da frente e o ombro com a antena da direita e saca 5 bolas buscando o corredor de 1 metro ao longo da linha lateral.",
      "Em seguida, J1 se desloca para o canto esquerdo da sua linha de fundo e saca outras 5 bolas na paralela oposta (corredor lateral esquerdo adversário).",
      "Na segunda rodada, J1 saca do meio da linha de fundo buscando abrir ângulo para as duas laterais em diagonal.",
      "Trocam de função após as duas rodadas."
    ],
    "pontosAtencao": [
      "Quando você tira o recebedor para a linha lateral na areia, o parceiro dele precisa correr o dobro para levantar ou o levantamento vem de longe da rede.",
      "Use a antena como mira vertical: a bola na paralela deve passar a 30-50 cm por dentro da antena.",
      "Mantenha o equilíbrio na perna da frente para o corpo não cair para o lado no momento do golpe."
    ],
    "erroComum": "Cruzar o braço na frente do peito na hora da batida, puxando a bola para o meio da quadra; corrija pedindo para terminar com a mão apontada para a bandeirinha/canto da linha lateral. Variações",
    "variacaoFacil": "Aumentar a largura dos corredores laterais para 1,5 metro.",
    "variacaoDificil": "Colocar 3 cones em pé sobre a linha lateral e dar pontuação bônus para quem derrubar um cone com o saque.",
    "meta": "Colocar 6 de 10 saques dentro dos corredores laterais de 1 metro de largura."
  },
  {
    "numero": 41,
    "secao": 3,
    "nome": "Saque na 'costura' (corredor central entre os receptores)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (ou 3 jogadores posicionando os alvos humanos)",
    "tempo": "9 minutos",
    "material": "5 bolas, 4 cones e 1 zona alvo central",
    "objetivo": "Cravar o saque exatamente na faixa central de 1,5 metro entre os dois recebedores para gerar hesitação e conflito de comunicação.",
    "comoMontar": "J1 saca da linha de fundo esquerda. Na meia-quadra direita, a 5,5 metros da rede, coloque 2 cones grandes representando a posição padrão dos dois recebedores (a 2m de cada lateral) e demarque uma Zona Alvo de 1,5m de largura exatamente no meio entre eles (a 'costura'). J2 fica atrás da zona central.",
    "passoAPasso": [
      "J1 posiciona-se no centro da linha de fundo esquerda (a 8,5m da rede).",
      "Visualiza o espaço exato de 1,5 metro entre os dois cones que simulam os recebedores adversários.",
      "Executa um saque flutuante rápido e reto que passe pelo meio da rede e caia exatamente dentro da Zona Alvo da costura.",
      "Varie a profundidade dentro da costura: 1 bola na altura dos pés da linha de passe (5,5m) e 1 bola no fundo da costura (7m, passando entre os ombros deles).",
      "Após 10 saques, J1 e J2 trocam de posição."
    ],
    "pontosAtencao": [
      "No vôlei de praia, 70% dos aces acontecem na costura central porque um jogador acha que é do parceiro ou os dois se fecham e perdem a linha de corrida para atacar.",
      "A bola na costura precisa ter velocidade ou flutuação: se for um balão alto no meio, facilita a chamada deles.",
      "Varie o seu ponto de saída na linha de fundo (ora do meio, ora da ponta) mas continue mirando no centro da quadra."
    ],
    "erroComum": "Espalhar o saque para a esquerda ou direita caindo direto no peito do cone/receptor; corrija alinhando o umbigo e a ponta do pé da frente exatamente com o centro da quadra. Variações",
    "variacaoFacil": "Sacar sempre do centro da linha de fundo com faixa alvo central de 2 metros de largura.",
    "variacaoDificil": "J1 precisa correr da lateral esquerda até o canto direito da linha de fundo, parar em 2 segundos e cravar o saque em diagonal dentro da costura.",
    "meta": "Acertar 7 de 10 saques dentro do corredor central de 1,5 metro (a costura)."
  },
  {
    "numero": 42,
    "secao": 3,
    "nome": "Saque alto 'Jornada nas Estrelas' (usando o sol e o vento)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "10 minutos",
    "material": "5 bolas, 4 cones e 1 zona alvo",
    "objetivo": "Executar o saque altíssimo por baixo (ou lateral) para fazer a bola subir acima de 12 metros, cruzar a linha do sol e despencar quase verticalmente com o vento.",
    "comoMontar": "Escolha o lado da quadra em que o recebedor (J2) tenha que olhar diretamente contra o sol ou onde haja vento lateral/contra. J1 fica na linha de fundo esquerda (8m). Na meia-quadra direita, demarque uma Zona Alvo de 5m a 7,5m da rede.",
    "passoAPasso": [
      "J1 posiciona-se de lado para a rede (ombro esquerdo apontado para a rede se for destro) com os pés bem afastados na areia.",
      "Afunda bem os joelhos, segura a bola na linha do quadril de trás e faz um pêndulo longo de baixo para cima em ângulo de 75 a 80 graus.",
      "Bate na parte de baixo da bola com a base da mão fechada (ou punho firme lateral) usando toda a extensão das pernas para lançar a bola o mais alto possível no céu.",
      "A bola deve subir acima da linha dos postes de iluminação/sol e descer quase na vertical dentro da Zona Alvo, onde J2 tenta acompanhar a queda protegendo os olhos do sol.",
      "Realizam 8 saques e trocam de lado."
    ],
    "pontosAtencao": [
      "Para a bola subir 12 a 15 metros e ainda atravessar a quadra, você precisa empurrar o chão com as pernas de baixo para cima no momento do impacto.",
      "Quando a bola desce de uma altura extrema na praia, o vento atua sobre ela na queda e ela chega pesada nos braços do passador.",
      "Bata com a articulação rígida do punho/base do polegar para não machucar os dedos."
    ],
    "erroComum": "Bater só para o alto sem transferência mínima para frente, fazendo a bola cair na própria quadra ou na rede; corrija inclinando o ombro da frente levemente para o lado adversário na subida. Variações",
    "variacaoFacil": "Sacar a 6 metros da rede focando primeiro em atingir pelo menos o dobro da altura da antena.",
    "variacaoDificil": "Colocar uma Zona Alvo nos últimos 2 metros da linha de fundo para que o saque alto caia quase verticalmente sobre a linha final.",
    "meta": "Acertar 6 de 10 saques com arco altíssimo (mínimo 3 vezes a altura da rede) caindo dentro da Zona Alvo."
  },
  {
    "numero": 43,
    "secao": 3,
    "nome": "Adaptação ao vento contra e vento a favor",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (1 sacando a favor do vento e 1 sacando contra o vento)",
    "tempo": "10 minutos",
    "material": "6 bolas, 4 cones e 2 zonas alvo",
    "objetivo": "Ajustar o ângulo de saída e a força da batida ao trocar de lado na quadra em dias de vento forte na praia.",
    "comoMontar": "Identifique a direção do vento na arena. J1 posiciona- se na linha de fundo que saca CONTRA o vento (lado esquerdo); J2 posiciona-se na linha de fundo que saca A FAVOR do vento (lado direito). Marque uma Zona Alvo no meio-fundo (4,5m a 7m) de cada lado.",
    "passoAPasso": [
      "J1 (sacando CONTRA o vento) executa um saque agressivo com 95% de força e trajetória mais baixa e tensa: o vento contra vai frear a bola e fazê-la cair dentro da quadra no final.",
      "J2 agarra a bola na Zona Alvo direita e vai para a linha de fundo para sacar A FAVOR do vento.",
      "J2 (sacando A FAVOR do vento) reduz a força para 60- 70% ou usa um saque curto/com rotação para baixo (topspin), pois o vento pelas costas empurra qualquer bola forte para fora.",
      "Ambos fazem 6 saques consecutivos de cada lado e imediatamente trocam de quadra (simulando a troca de lado a cada 7 pontos do jogo).",
      "Na troca de lado, o primeiro saque após a mudança vale o dobro de pontos para treinar a adaptação imediata do cérebro."
    ],
    "pontosAtencao": [
      "Regra clássica da areia: CONTRA o vento você pode bater forte e fundo; A FAVOR do vento você deve sacar curto na rede ou usar topspin controlado.",
      "Contra o vento, o saque flutuante oscila muito mais e cai de repente como uma pedra.",
      "A favor do vento, lance a bola um pouco mais baixa porque o vento já empurra a bola para frente na alçada."
    ],
    "erroComum": "Trocar de lado da quadra e continuar batendo com a mesma força que usava contra o vento, mandando a bola 2 metros para fora; corrija obrigando o aluno a olhar as fitas das antenas antes de cada saque. Variações",
    "variacaoFacil": "Fazer 8 saques seguidos no mesmo lado antes de trocar de quadra para acostumar o braço.",
    "variacaoDificil": "Obrigar os jogadores a trocarem de lado da quadra a cada 2 saques correndo por fora dos postes.",
    "meta": "Manter 7 de 10 saques dentro da Zona Alvo somando os 5 saques contra o vento e os 5 saques a favor do vento."
  },
  {
    "numero": 44,
    "secao": 3,
    "nome": "Saque com vento lateral (usando a deriva da brisa)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "5 bolas, 4 cones e 2 zonas alvo nas laterais",
    "objetivo": "Aprender a mirar no meio para o vento levar a bola até a linha lateral, ou mirar fora da antena para a bola fazer curva para dentro.",
    "comoMontar": "J1 atrás da linha de fundo esquerda (8m). Na meia- quadra direita, marque duas Zonas Alvo junto às duas linhas laterais (Alvo Superior e Alvo Inferior). J2 fica no centro da quadra direita.",
    "passoAPasso": [
      "Observe para qual linha lateral o vento está soprando (ou imagine que o vento sopra de cima para baixo na quadra).",
      "Nos primeiros 5 saques (a favor da corrente lateral), J1 mira no centro da quadra com um saque flutuante mais alto para que o vento empurre a bola nos últimos metros até cair na Zona Alvo lateral inferior.",
      "Nos 5 saques seguintes (contra a corrente lateral), J1 posiciona-se no canto superior e mira na direção da própria linha lateral (ou quase na antena), deixando o vento empurrar a bola de volta para dentro da Zona Alvo superior.",
      "J2 observa a curva da bola e dá feedback imediato sobre o ponto de partida da mira.",
      "Invertem os papéis após 10 saques."
    ],
    "pontosAtencao": [
      "O vento lateral é o mais traiçoeiro para o passador porque a bola sai na direção do peito dele e foge meio metro para o lado no último segundo.",
      "Quanto mais tempo a bola ficar no ar (arco um pouco mais alto), mais o vento lateral vai carregá-la.",
      "Nunca mire colado na linha para onde o vento já está soprando, senão a bola sai pela lateral."
    ],
    "erroComum": "Ignorar o vento lateral e mirar direto na linha onde o vento empurra para fora; corrija colocando um cone de 'mira visual' 1,5 metro antes da zona onde a bola deve cair. Variações",
    "variacaoFacil": "Usar apenas o saque do meio deixando o vento carregar para o lado favorável.",
    "variacaoDificil": "Colocar J2 como receptor real que tenta passar de manchete a bola que faz curva com o vento lateral.",
    "meta": "Acertar 6 de 10 saques nas zonas laterais calculando corretamente a deriva do vento."
  },
  {
    "numero": 45,
    "secao": 3,
    "nome": "Passada, lançamento alto com giro e saque viagem na areia",
    "nivel": "Avançado",
    "jogadores": "2 jogadores",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo no fundo",
    "objetivo": "Dominar o lançamento com rotação para frente (topspin), a chamada de 2 ou 3 passos na areia fofa e a mucada no ar do saque viagem.",
    "comoMontar": "J1 começa a 2,5 metros atrás da linha de fundo esquerda (a 10,5 metros da rede), com 2 cones marcando seu corredor de aproximação. Na meia- quadra direita, demarque uma Zona Alvo nos últimos 3 metros do fundo (5m a 8m da rede). J2 aguarda no fundo direito.",
    "passoAPasso": [
      "J1 segura a bola com a mão dominante (ou ambas as mãos) a 2,5 metros da linha de fundo.",
      "Dá o primeiro passo e lança a bola para o alto e para frente (para cair próximo à linha de fundo) rodando o punho para a bola já subir girando para frente (topspin).",
      "Executa os dois últimos passos rápidos e potentes na areia ('esquerda-direita' para destros) afundando os calcanhares antes da linha de fundo para saltar.",
      "Salta para cima e para frente (sem pisar na linha antes de decolar) e golpeia a bola no ponto mais alto chicoteando o punho por cima da bola para gerar máxima rotação.",
      "A bola passa rápida sobre a rede e mergulha no fundo da Zona Alvo pelo efeito Magnus (topspin); trocam a cada 8 viagens."
    ],
    "pontosAtencao": [
      "Na areia fofa você salta menos do que na quadra dura: por isso o lançamento do viagem na praia não pode ser exageradamente alto nem muito longe para frente.",
      "O giro de punho ('quebrada de munheca') por cima da bola é obrigatório para fazer a bola mergulhar dentro dos 8 metros.",
      "Plante os dois pés quase juntos no último passo para não afundar um pé só na areia antes do salto."
    ],
    "erroComum": "Lançar a bola muito para dentro da quadra e ter que saltar para frente quase de peixinho, batendo na bola baixa na rede; corrija marcando na areia que o lançamento deve subir a apenas 1 passo da linha de fundo. Variações",
    "variacaoFacil": "Fazer o 'meio-viagem' (apenas 1 passo curto e salto vertical com giro de punho) para ganhar tempo de bola na areia.",
    "variacaoDificil": "Exigir saque viagem com potência acima de 80% mirando exclusivamente nos cantos de fundo.",
    "meta": "Colocar 6 de 10 saques viagem com rotação evidente (topspin) dentro da Zona Alvo de fundo sem pisar na linha."
  },
  {
    "numero": 46,
    "secao": 3,
    "nome": "Saque viagem potenciado nas diagonais (curta e longa)",
    "nivel": "Avançado",
    "jogadores": "2 jogadores",
    "tempo": "10 minutos",
    "material": "5 bolas, 4 cones e 2 zonas alvo na diagonal",
    "objetivo": "Usar o maior comprimento da diagonal da quadra para bater o saque viagem com máxima potência ou cortar o ângulo na diagonal curta.",
    "comoMontar": "J1 posiciona-se no canto direito da linha de fundo esquerda. Na meia-quadra direita, monte duas Zonas Alvo na diagonal esquerda (superior): Alvo 1 na Diagonal Longa (canto de fundo a 7,5m) e Alvo 2 na Diagonal Curta (junto à linha lateral a 3,5m da rede). J2 fica entre os dois alvos.",
    "passoAPasso": [
      "J1 faz a corrida de aproximação já em ângulo diagonal apontando para o canto oposto da quadra.",
      "Nos primeiros 5 saques (Diagonal Longa), J1 bate cheio atrás/em cima da bola aproveitando que a diagonal tem quase 18 metros de espaço útil.",
      "Nos 5 saques seguintes (Diagonal Curta), J1 usa o mesmo lançamento e salto, mas gira o polegar para baixo na batida ('corte lateral' com topspin), fazendo a bola cruzar a rede e sair pela linha lateral aos 3,5 metros.",
      "Depois, J1 muda para o canto esquerdo da linha de fundo e repete o trabalho para a outra diagonal.",
      "J1 e J2 invertem os papéis após as séries."
    ],
    "pontosAtencao": [
      "A diagonal da quadra 16x8m é quase 2 metros mais longa que a paralela: é o caminho mais seguro para soltar o braço a 100% no saque viagem.",
      "Para a diagonal curta, entre com a mão na 'orelha externa' da bola e puxe o punho para baixo para ela cair rápido perto da linha lateral.",
      "Não denuncie com o corpo antes do salto se a bola vai longa ou curta."
    ],
    "erroComum": "Deixar a bola atrás do ombro na hora do salto e tentar puxar para a diagonal, mandando a bola na antena; corrija mantendo a bola sempre à frente do ombro de ataque. Variações",
    "variacaoFacil": "Treinar apenas a diagonal longa de fundo dos dois lados da linha de saque.",
    "variacaoDificil": "Colocar 1 cone alto dentro de cada zona alvo e pontuar 3x quando acertar o cone.",
    "meta": "Acertar 6 de 10 saques viagem somando as tentativas na diagonal longa e na diagonal curta."
  },
  {
    "numero": 47,
    "secao": 3,
    "nome": "Saque híbrido (finta de viagem para flutuante curto)",
    "nivel": "Avançado",
    "jogadores": "2 jogadores (1 sacador e 1 receptor lendo a finta)",
    "tempo": "10 minutos",
    "material": "5 bolas, 4 cones e 2 zonas alvo",
    "objetivo": "Enganar o recebedor que recua esperando uma pancada de saque viagem, mudando a batida no ar para um flutuante curto.",
    "comoMontar": "J1 atrás da linha de fundo esquerda. Na meia-quadra direita, marque a Zona Alvo 1 no fundo (7m da rede) e a Zona Alvo 2 curta (2,5m da rede). J2 posiciona-se a 6,5 metros da rede preparado para defender saque viagem.",
    "passoAPasso": [
      "J1 realiza o ritual idêntico ao saque viagem: recua 2,5 metros, lança a bola alta para frente e corre explosivo na areia saltando alto.",
      "Ao ver o lançamento alto e a corrida agressiva de J1, J2 naturalmente firma os calcanhares aos 6,5 metros esperando uma bomba no fundo.",
      "No ar, J1 escolhe: ou solta o braço no viagem forte na Zona Alvo 1 (fundo), ou abre a mão rígida desacelerando o braço e dá um tapa flutuante curto que cai na Zona Alvo 2 (2,5m).",
      "J2 tenta reagir e tocar na bola antes que ela caia na areia.",
      "A cada 8 saques híbridos, trocam as funções."
    ],
    "pontosAtencao": [
      "O lançamento do saque híbrido precisa ser neutro (com pouco giro ou giro leve) para permitir tanto o tapa flutuante quanto a batida com topspin no ar.",
      "Mantenha a velocidade de corrida e a elevação do cotovelo idênticas até o último milissegundo no ar.",
      "Mire o híbrido curto sempre na diagonal ou nos pés do receptor que está longe da bola."
    ],
    "erroComum": "Lançar a bola diferente ou pular baixinho quando vai fazer o curto, avisando o recebedor; corrija dando ponto para J2 toda vez que ele adivinhar o saque curto antes do contato na bola. Variações",
    "variacaoFacil": "Fazer o híbrido a partir do saque flutuante em suspensão (1 passo e salto curto, variando entre fundo tenso e largada curta).",
    "variacaoDificil": "J2 ganha ponto se conseguir passar a bola híbrida na zona de levantamento da rede; J1 ganha ponto se quebrar o passe ou fizer ace.",
    "meta": "Conseguir 6 de 10 saques híbridos bem disfarçados que caiam nas duas zonas alvo (3 longos e 3 curtos)."
  },
  {
    "numero": 48,
    "secao": 3,
    "nome": "Saque tático no 'ombro ruim' e no atacante escolhido",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (1 sacador e 2 receptores posicionados)",
    "tempo": "10 minutos",
    "material": "5 bolas, 4 cones e 2 zonas alvo específicas",
    "objetivo": "Treinar a precisão cirúrgica de sacar sempre no jogador designado pela estratégia e especificamente no ombro externo ou interno dele.",
    "comoMontar": "J1 saca da linha de fundo esquerda. Na meia-quadra direita, R1 (na esquerda) e R2 (na direita) ficam a 5,5 metros da rede. Coloque 2 cones ao lado de R1: um a 1 metro à esquerda dele (ombro externo/linha) e outro a 1 metro à direita dele (ombro interno/costura).",
    "passoAPasso": [
      "A tática da rodada determina que R1 é o alvo obrigatório (por exemplo: o jogador mais cansado, o mais baixo na rede ou o menos regular no passe).",
      "Nos 4 primeiros saques, J1 precisa sacar na altura do ombro esquerdo de R1 (forçando-o a manchetar fora do corpo perto da linha lateral).",
      "Nos 4 saques seguintes, J1 precisa sacar na altura do ombro direito de R1 (invadindo o meio da quadra para atrapalhar a chamada com R2).",
      "R1 e R2 não podem trocar de lado antes do saque, mas R1 precisa realizar o passe de manchete ou toque alto para o centro da rede.",
      "Rodam as posições a cada 8 saques para que todos passem pelo saque tático."
    ],
    "pontosAtencao": [
      "No vôlei de praia, você quase nunca saca 'na quadra': você saca em um dos dois jogadores conforme o plano de jogo.",
      "Sacar na altura do ombro (meia-altura rápida) é muito mais difícil de passar na areia do que sacar na altura da cintura, pois força o adversário a decidir entre manchete alta ou toque de dedos.",
      "Se você sacar no ombro externo de R1, ele é obrigado a entrar para atacar vindo de fora da antena."
    ],
    "erroComum": "Errar o lado e entregar a bola de graça para R2 (o jogador que a dupla combinou de NÃO acionar); corrija penalizando em -1 ponto qualquer saque que vá na metade de quadra de R2. Variações",
    "variacaoFacil": "Mirar apenas na metade de quadra de R1 sem exigir o ombro específico.",
    "variacaoDificil": "Antes de J1 sacar, R1 dá 1 passo lateral para tentar esconder o ombro alvo e J1 precisa ajustar a mira no último segundo.",
    "meta": "Acertar 7 de 10 saques exatamente no receptor escolhido e no ombro determinado pela tática."
  },
  {
    "numero": 49,
    "secao": 3,
    "nome": "Saque tirando o receptor do lugar + passe na rede (Saque + Recepção 1)",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (1 sacador, 1 receptor e 1 levantador na rede)",
    "tempo": "11 minutos",
    "material": "5 bolas, 3 cones e 1 zona alvo de levantamento",
    "objetivo": "Combinar o saque que obriga o receptor a dar pelo menos 2 passos na areia com a resposta real de recepção para a zona de levantamento.",
    "comoMontar": "J1 atrás da linha de fundo esquerda. Na meia-quadra direita, R1 começa no cone central da sua metade (a 5,5m da rede). A 2,5m para a frente e 2m para a lateral de R1, marque duas zonas onde J1 deve sacar. J2 (levantador) aguarda junto à rede dentro da Zona Alvo de passe.",
    "passoAPasso": [
      "J1 saca da linha de fundo esquerda buscando obrigar R1 a se deslocar na areia (proibido sacar em cima do cone onde R1 está parado).",
      "J1 escolhe sacar ou na curta diagonal (3m da rede) ou na lateral funda (7m perto da linha).",
      "R1 lê a saída da bola da mão de J1, faz o destrave na areia, desloca-se rápido para trás da bola, estanca os pés e realiza a recepção de manchete para J2 na Zona Alvo da rede.",
      "Contagem competitiva: se o saque de J1 fizer R1 dar 2 ou mais passos e o passe não chegar na Zona Alvo de J2, ponto do sacador (J1); se R1 deslocar e colocar a bola na mão de J2, ponto do receptor (R1).",
      "A cada 6 bolas, rodam entre sacador, receptor e levantador."
    ],
    "pontosAtencao": [
      "Para o sacador (J1): observe a posição inicial de R1 antes de sacar e mire no espaço vazio mais distante dele.",
      "Para o receptor (R1): mesmo quando o saque vem curto ou longe, pare os dois pés na areia no último milissegundo antes da manchete.",
      "Um saque que faz o atacante correr 3 metros na areia fofa já reduz em 40% a impulsão de ataque dele."
    ],
    "erroComum": "O sacador bater forte demais no peito do receptor parado, facilitando o passe perfeito; corrija validando o ponto do sacador somente se o saque cair fora do raio de 1,5 metro do cone inicial de R1. Variações",
    "variacaoFacil": "J1 avisa antes se o saque será curto ou fundo no corredor lateral.",
    "variacaoDificil": "R1, após passar a bola para J2, precisa continuar a corrida para atacar a bola levantada por J2 por cima da rede.",
    "meta": "Sacador: forçar deslocamento e quebrar 5 de 10 passes; Receptor: colocar 6 de 10 bolas deslocadas na Zona Alvo de J2."
  },
  {
    "numero": 50,
    "secao": 3,
    "nome": "Saque na costura contra dupla receptora real (Saque + Recepção 2)",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (1 sacador contra 2 receptores R1 e R2)",
    "tempo": "11 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo na rede",
    "objetivo": "Testar o saque flutuante ou viagem no corredor central contra dois recebedores reais, treinando quem chama a bola e quem infiltra para levantar.",
    "comoMontar": "J1 na linha de fundo esquerda. Na meia-quadra direita, R1 (esquerda) e R2 (direita) posicionam-se a 5,5 metros da rede. Demarque uma Zona Alvo de levantamento no centro da rede (a 1,5m da fita).",
    "passoAPasso": [
      "J1 saca buscando exclusivamente a faixa central de 2 metros entre R1 e R2 (variando entre bola curta no meio, meia-altura nos ombros internos ou fundo na costura).",
      "Assim que a bola sai da mão de J1, R1 e R2 precisam definir em voz alta ('MINHA!' / 'VAI!') antes de a bola cruzar a linha da rede.",
      "O jogador que chamou a bola fecha o passo para o meio e passa a bola alta para a Zona Alvo da rede.",
      "O parceiro que NÃO recepcionou arranca imediatamente para a Zona Alvo na rede, estanca os pés e agarra a bola em posição de levantamento.",
      "Rodam as funções a cada 6 saques (J1 entra na recepção, R1 vai para o saque)."
    ],
    "pontosAtencao": [
      "Para o sacador: mude o ponto de saída na linha de fundo a cada saque (canto esquerdo, meio, canto direito) para mudar o ângulo de entrada da bola na costura.",
      "Para a dupla receptora: na dúvida na costura, a regra mais usada na praia é 'quem está com o ombro de dentro mais próximo da rede ou quem tem o braço dominante no meio chama primeiro'.",
      "Chamada tardia na areia resulta nos dois jogadores parando os pés e olhando a bola cair."
    ],
    "erroComum": "Os dois receptores darem o primeiro passo para a bola e pararem juntos com medo de bater cabeça; corrija exigindo o grito 'MINHA!' antes da bola passar por cima da fita. Variações",
    "variacaoFacil": "J1 saca apenas flutuante do centro da linha de fundo em velocidade moderada.",
    "variacaoDificil": "Após o segundo jogador agarrar/levantar a bola na rede, o passador precisa completar a batida de ataque para o outro lado.",
    "meta": "Sacador: causar indecisão ou passe fora do alvo em 5 de 10 saques; Dupla: comunicar e acertar 7 de 10 passes na Zona Alvo."
  },
  {
    "numero": 51,
    "secao": 3,
    "nome": "Saque combinado com sinal do bloqueador e corrida de defesa (Saque + Recepção 3)",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Dupla A: sacador + bloqueador x Dupla B: 2 receptores)",
    "tempo": "12 minutos",
    "material": "5 bolas e 4 cones",
    "objetivo": "Conectar o saque tático com o sinal do parceiro na rede e a entrada imediata do sacador na posição de defesa na quadra.",
    "comoMontar": "No lado esquerdo: J1 na linha de fundo para sacar e J2 junto à rede pronto para bloquear (com as mãos atrás das costas). No lado direito: R1 e R2 em posição de recepção a 5,5 metros da rede. Coloque 2 cones de referência de defesa no lado esquerdo (a 5,5m da rede).",
    "passoAPasso": [
      "Antes do saque, J2 (na rede) faz o sinal nas costas com ambas as mãos: a mão esquerda mostra o que ele vai bloquear para R1 e a mão direita para R2, além de piscar os dedos indicando em qual receptor J1 deve sacar.",
      "J1 confirma visualmente o sinal, saca taticamente no receptor combinado (por exemplo, forçando R1 para a linha lateral).",
      "No exato instante em que a bola sai de sua mão no saque, J1 NÃO fica parado na linha de fundo olhando a bola: ele arranca para dentro da quadra até o cone de defesa do corredor livre (deixado pelo bloqueio de J2).",
      "Do outro lado, R1 passa a bola, R2 levanta e R1 ataca na direção onde J2 bloqueia e J1 já está plantado defendendo.",
      "Jogam o ponto até o fim; após 5 saques, a Dupla B passa a sacar."
    ],
    "pontosAtencao": [
      "O maior erro de jogadores amadores após sacar é dar 2 passos preguiçosos e ainda estar andando quando o adversário ataca de segunda ou de terceira bola.",
      "O saque precisa 'conversar' com o bloqueio: se J2 vai fechar a paralela, J1 saca perto da linha lateral para empurrar o atacante para cima do bloqueio de J2.",
      "J1 deve fazer o destrave (split-step) no cone de defesa aos 5,5m exatamente quando o atacante adversário salta."
    ],
    "erroComum": "Sacar no jogador errado (diferente do que o bloqueador pediu no sinal), deixando o parceiro na rede vendido; corrija dando ponto automático para a dupla receptora se o saque for na metade errada da quadra. Variações",
    "variacaoFacil": "Finalizar a jogada logo após o levantamento de R2, avaliando se J1 já chegou equilibrado no cone de defesa correto.",
    "variacaoDificil": "Permitir que a dupla receptora passe a bola de segunda (ataque de segunda bola), obrigando J1 a entrar na quadra em sprint máximo após o saque.",
    "meta": "Acertar 8 de 10 saques no receptor combinado no sinal e estar 100% plantado no cone de defesa antes do ataque adversário."
  },
  {
    "numero": 52,
    "secao": 3,
    "nome": "Desafio sob pressão: 'Fechando o Set' com frequência cardíaca alta",
    "nivel": "Avançado",
    "jogadores": "2 a 4 jogadores",
    "tempo": "12 minutos",
    "material": "6 bolas, 6 cones e 4 zonas alvo nos cantos",
    "objetivo": "Manter a rotina respiratória e a precisão técnica do saque quando as pernas estão pesadas pela areia e o ponto decide o jogo.",
    "comoMontar": "Marque 4 Zonas Alvo de alto valor na meia-quadra direita: Curta Esquerda (Alvo 1), Curta Direita (Alvo 2), Fundo Esquerdo (Alvo 3) e Fundo Direito (Alvo 4). Na meia-quadra esquerda, coloque 1 cone a 4 metros da rede para o sprint pré-saque.",
    "passoAPasso": [
      "Simulação de fim de jogo (placar em 19x19): antes de cada saque, J1 precisa correr da linha de fundo até o cone de 4 metros da rede, tocar a mão na areia e voltar de costas até a linha de fundo (elevando o batimento cardíaco).",
      "Ao chegar na linha de fundo, J1 tem exatamente 5 segundos (tempo oficial da regra do vôlei de praia após o apito) para controlar a respiração, olhar o alvo e sacar.",
      "J2 (ou o parceiro) grita qual dos 4 alvos J1 precisa acertar para 'fechar o jogo' (ex.: 'FUNDO DIREITO!').",
      "Se J1 acertar a Zona Alvo chamada: +2 pontos; se cair na quadra mas fora do alvo: +1 ponto; se errar o saque na rede ou fora: -2 pontos.",
      "Vence o desafio quem atingir 10 pontos primeiro após os sprints na areia."
    ],
    "pontosAtencao": [
      "Na praia, você quase sempre vai sacar ofegante depois de um rally longo no sol: crie um ritual fixo de soltar o ar lentamente pela boca antes de lançar a bola.",
      "Quando as pernas estão cansadas da corrida na areia, a tendência é não usar as pernas no saque e bater só com o braço (mandando na rede): force a transferência de peso do pé de trás para o da frente.",
      "Nunca apresse a alçada da bola: use os seus 5 segundos para limpar a areia da mão e focar na mira."
    ],
    "erroComum": "Pegar a bola ainda correndo e já jogar para cima sem estabilizar a respiração e a base na areia; corrija exigindo uma parada estática de 2 segundos com uma expiração profunda antes do lançamento. Variações",
    "variacaoFacil": "Fazer apenas um deslocamento lateral de 3 metros na linha de fundo antes de cada saque e valer qualquer uma das 4 zonas.",
    "variacaoDificil": "Para fechar o desafio no último ponto (Match Point), o jogador é obrigado a acertar dois saques seguidos (1 curto e 1 no fundo) após o sprint.",
    "meta": "Alcançar os 10 pontos do desafio acertando pelo menos 7 de 10 saques em quadra (e 5 nas zonas chamadas) mesmo sob fadiga."
  },
  {
    "numero": 53,
    "secao": 4,
    "nome": "Travamento de plataforma e base de manchete na areia",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 lançador e 1 receptor frente a frente)",
    "tempo": "7 minutos",
    "material": "2 bolas e 2 cones",
    "objetivo": "Construir a prancha plana dos antebraços com ombros projetados à frente e base firme na areia fofa.",
    "comoMontar": "Na meia-quadra esquerda, posicione 1 cone a 5 metros da rede (J1 - receptor) e 1 cone junto à rede no centro (J2 - lançador), separados por 4 metros de distância.",
    "passoAPasso": [
      "J1 posiciona-se no cone de 5m com os pés ligeiramente mais largos que os ombros, um pé meio passo à frente do outro na areia e joelhos flexionados.",
      "Antes do lançamento, J1 mantém as mãos soltas à frente da cintura (não junta as mãos antes da hora).",
      "J2 lança a bola com as duas mãos em arco suave diretamente na linha do umbigo de J1.",
      "J1 une as mãos (polegares paralelos apontando para a areia), gira os cotovelos para dentro expondo a parte carnuda e plana dos antebraços e eleva os ombros até quase encostar no queixo.",
      "Usando apenas a extensão suave dos joelhos na areia (sem chicotear os braços), J1 devolve a bola alta nas mãos de J2; trocam a cada 10 bolas."
    ],
    "pontosAtencao": [
      "Apontar a ponta dos polegares para baixo em direção à areia: isso trava automaticamente os cotovelos e deixa a plataforma reta.",
      "Manter um espaço constante de um palmo entre os cotovelos e o tronco (não colar os braços na barriga).",
      "Empurrar a areia com as pernas de baixo para cima sem balançar os braços acima da linha dos ombros."
    ],
    "erroComum": "Dobrar os cotovelos no momento do contato jogando a bola para trás da própria cabeça; corrija pedindo para congelar a prancha dos braços por 2 segundos após a bola sair. Variações",
    "variacaoFacil": "Diminuir a distância para 3 metros e permitir que a bola dê um quique em uma tábua ou na areia batida antes do contato.",
    "variacaoDificil": "J2 lança a bola meio metro à esquerda ou à direita do corpo de J1, exigindo 1 passo de ajuste mantendo a bola sempre no meio do umbigo.",
    "meta": "Devolver 9 de 10 bolas lançadas diretamente nas mãos do parceiro na altura da testa sem dobrar os cotovelos."
  },
  {
    "numero": 54,
    "secao": 4,
    "nome": "Amortecimento e controle de arco alto no centro",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 lançador do outro lado da rede e 1 receptor)",
    "tempo": "8 minutos",
    "material": "3 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Aprender a controlar a velocidade da bola que cruza a rede, transformando um lançamento tenso em uma bola alta com tempo para o parceiro chegar.",
    "comoMontar": "J2 fica do outro lado da rede (a 3 metros da fita, na meia-quadra direita) com as bolas. J1 fica no cone a 5,5 metros da rede na meia-quadra esquerda. Demarque uma Zona Alvo de 2x2 metros no centro da quadra esquerda, a 1,5 metro da rede.",
    "passoAPasso": [
      "J2 lança a bola com uma mão (como um arremesso firme por cima da rede) diretamente no peito/cintura de J1 aos 5,5 metros.",
      "J1 faz o destrave na areia, firma os dois pés e apresenta a plataforma de manchete com ângulo de cerca de 45 graus para o alto.",
      "Como a bola já vem com velocidade, J1 NÃO empurra a bola para frente: ele apenas sustenta os ombros firmes ou cede levemente 2 centímetros absorvendo o impacto.",
      "A bola deve subir no mínimo 1,5 metro acima da antena e cair macia dentro da Zona Alvo central (a 1,5m da rede).",
      "Após 8 bolas, J1 e J2 invertem as funções."
    ],
    "pontosAtencao": [
      "Na praia, passe baixo e rápido (passe 'tenso' de quadra) é ruim porque o seu parceiro vem correndo da areia fofa: o passe precisa ter arco alto (entre 3,5m e 4,5m de altura).",
      "Para dar altura sem mandar a bola para o outro lado da rede, pare o movimento dos braços abaixo da linha do peito.",
      "Acompanhe a bola com os olhos até ela tocar exatamente o terço médio do antebraço."
    ],
    "erroComum": "Balançar os braços contra uma bola que já vem forte, devolvendo a bola de primeira para a quadra adversária ('bola de graça'); corrija pedindo para deixar a bola bater nos braços parados. Variações",
    "variacaoFacil": "J2 lança a bola com as duas mãos por cima da cabeça em trajetória mais lenta.",
    "variacaoDificil": "J2 alterna entre uma bola lançada forte e tensa (exigindo amortecimento) e uma bola lançada fraca (exigindo empurrão de pernas).",
    "meta": "Colocar 8 de 10 bolas dentro da Zona Alvo central com arco alto (acima do topo da antena)."
  },
  {
    "numero": 55,
    "secao": 4,
    "nome": "Inclinação de ombros: direcionando dos cantos para o centro",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores",
    "tempo": "8 minutos",
    "material": "4 bolas, 3 cones e 1 zona alvo",
    "objetivo": "Aprender a inclinar o ombro de fora para direcionar a bola em diagonal das laterais da quadra para a zona central de levantamento.",
    "comoMontar": "Na meia-quadra esquerda, coloque 2 cones de recepção a 5,5 metros da rede: Cone 1 perto da linha lateral esquerda (entrada) e Cone 2 perto da linha lateral direita (saída). Demarque a Zona Alvo no centro da quadra a 1,5 metro da rede. J2 lança do outro lado da rede.",
    "passoAPasso": [
      "J1 começa no Cone 1 (corredor esquerdo, a 5,5m da rede).",
      "J2 lança a bola por cima da rede em cima do Cone 1.",
      "Como a Zona Alvo está à direita de J1 (no centro da rede), J1 mantém os pés apontados para o centro ou levanta levemente o ombro esquerdo (ombro de fora), criando um 'espelho' inclinado para a direita.",
      "Após acertar 5 bolas no alvo a partir do Cone 1, J1 vai para o Cone 2 (corredor direito) e faz o oposto: levanta levemente o ombro direito para redirecionar a bola para o centro.",
      "Trocam de função após 10 recepções completas."
    ],
    "pontosAtencao": [
      "Pense na sua manchete como um espelho: a bola bate e reflete para onde os dois antebraços estão inclinados.",
      "Sempre levante o ombro de fora (o ombro mais próximo da linha lateral) para trazer a bola para dentro da quadra.",
      "Nunca gire os braços chicoteando para o lado: monte a inclinação dos ombros ANTES de a bola tocar no antebraço."
    ],
    "erroComum": "Manter a manchete reta de frente para a linha lateral, mandando o passe para cima da antena; corrija pedindo para apontar o esterno (meio do peito) diretamente para a Zona Alvo central. Variações",
    "variacaoFacil": "Virar os dois pés completamente na diagonal apontando para a Zona Alvo antes de a bola chegar.",
    "variacaoDificil": "J1 começa no meio entre os dois cones e J2 escolhe em qual dos dois cantos vai lançar a bola.",
    "meta": "Direcionar 7 de 10 bolas dos corredores laterais para dentro da Zona Alvo central a 1,5m da rede."
  },
  {
    "numero": 56,
    "secao": 4,
    "nome": "Recepção de saque por baixo oficial na zona de levantamento",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 sacador na linha de 8m e 1 receptor)",
    "tempo": "9 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Fazer a leitura de trajetória e tempo de bola de um saque real vindo da linha de fundo (8m) até a zona de levantamento.",
    "comoMontar": "J2 (sacador) fica atrás da linha de fundo direita (a 8 metros da rede). Na meia-quadra esquerda, J1 fica no cone de base a 5,5 metros da rede. Demarque a Zona Alvo central de 2x2 metros a 1,5 metro da rede.",
    "passoAPasso": [
      "J2 executa um saque por baixo oficial da linha de fundo direita buscando a metade de quadra onde está J1.",
      "No instante em que a mão de J2 bate na bola lá no fundo, J1 executa o destrave (split-step) na areia.",
      "J1 lê a velocidade e a profundidade da bola nos primeiros 2 metros de voo, ajusta os pés com passadas curtas para ficar exatamente atrás da bola e para os dois pés.",
      "Executa a manchete alta colocando a bola dentro da Zona Alvo central a 1,5 metro da rede (sem encostar na fita).",
      "Após 8 saques, invertem sacador e receptor."
    ],
    "pontosAtencao": [
      "Nunca passe a bola colada na fita da rede na praia: o vento pode jogar a bola para o outro lado e seu parceiro fica sem espaço para levantar.",
      "O ponto perfeito é a 1,5m da rede.",
      "Comece a se mexer quando a bola sai da mão do sacador, não quando ela já passou da rede.",
      "Toque na bola sempre à frente da linha dos seus quadris."
    ],
    "erroComum": "Esperar a bola chegar parado no lugar e tentar alcançar esticando os braços para o lado sem mexer os pés; corrija exigindo que a bola sempre seja recebida entre os dois joelhos. Variações",
    "variacaoFacil": "J2 saca por baixo a partir de 6 metros da rede para reduzir o tempo de voo e aumentar a precisão do envio.",
    "variacaoDificil": "Reduzir a Zona Alvo na rede para um quadrado de 1,5 x 1,5 metro.",
    "meta": "Acertar 8 de 10 recepções de saque por baixo dentro da Zona Alvo a 1,5m da rede."
  },
  {
    "numero": 57,
    "secao": 4,
    "nome": "Recepção com deslocamento lateral e parada de dois pés",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "5 bolas, 3 cones e 1 zona alvo",
    "objetivo": "Coordenar 2 a 3 metros de deslocamento lateral na areia com a frenagem completa dos pés antes do contato da manchete.",
    "comoMontar": "Na meia-quadra esquerda, coloque 1 cone central a 5,5m da rede (saída de J1) e 2 cones laterais a 2,5 metros para cada lado (também a 5,5m da rede). Zona Alvo a 1,5m da rede no centro. J2 saca da linha de fundo direita.",
    "passoAPasso": [
      "J1 começa no cone central (a 5,5m da rede) em postura de prontidão.",
      "J2 saca por baixo ou por cima controlado mirando em um dos dois cones laterais (2,5 metros à esquerda ou à direita de J1).",
      "J1 identifica o lado, usa passada lateral rápida ou passo cruzado curto para chegar ao cone lateral ANTES da bola.",
      "Crava os dois pés na areia ('direita-esquerda' parando o corpo), levanta o ombro de fora e passa a bola alta para a Zona Alvo central.",
      "Volta trotando ao cone central para o saque seguinte; trocam a cada 8 bolas."
    ],
    "pontosAtencao": [
      "Deslocar e passar são duas fases separadas: primeiro você corre na areia, depois você planta os pés e só então a bola toca no seu braço.",
      "Se você ainda estiver deslizando para o lado no momento do contato, a bola vai fugir na direção da sua corrida.",
      "Use o pé de fora (mais próximo da linha lateral) como freio na areia e pivô para apontar os ombros para o alvo."
    ],
    "erroComum": "Cruzar a perna na última passada e bater na bola com os pés cruzados e desequilibrados; corrija pedindo para ouvir o barulho dos dois pés cravando paralelos na areia antes do toque na bola. Variações",
    "variacaoFacil": "J2 avisa antes do saque para qual dos dois cones laterais vai enviar a bola.",
    "variacaoDificil": "Aumentar a distância dos cones laterais para 3,5 metros do centro (quase sobre as linhas laterais).",
    "meta": "Recepcionar 7 de 10 bolas deslocadas com os pés parados no momento do impacto e caindo na Zona Alvo."
  },
  {
    "numero": 58,
    "secao": 4,
    "nome": "Avanço explosivo para recepção de saque curto",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Arrancar para frente na areia fofa, frear em afundo baixo e levantar a bola curta no centro sem devolvê-la de graça.",
    "comoMontar": "Na meia-quadra esquerda, coloque 1 cone de base a 6 metros da rede (J1) e 1 cone de referência curta a 2,5 metros da rede. Demarque a Zona Alvo central a 1,5m da rede. J2 fica na linha de fundo direita (ou a 6m no lado direito) para executar saques curtos.",
    "passoAPasso": [
      "J1 aguarda na base normal de recepção a 6 metros da rede.",
      "J2 executa um saque curto ('pingado') que cruza a fita e cai por volta dos 2,5 a 3 metros da rede.",
      "J1 faz o destrave, empurra a areia com o pé de trás e corre de frente com o quadril baixo.",
      "No último passo (aos 2,5m), J1 entra em afundo longo afundando a perna da frente na areia para frear a corrida horizontal.",
      "Apresenta a plataforma quase paralela à areia (apontando para o céu) para a bola subir verticalmente e cair na Zona Alvo ao lado; trocam a cada 8 bolas."
    ],
    "pontosAtencao": [
      "Quando você corre rápido para frente, a sua velocidade já empurra a bola para a rede: por isso, na bola curta, aponte a manchete quase para trás/para o alto.",
      "Se a bola estiver muito baixa perto da areia, não tenha vergonha de apoiar o joelho de trás no chão para estabilizar a plataforma.",
      "Depois de passar a bola curta, levante rápido da areia porque você já está perto da rede para atacar."
    ],
    "erroComum": "Tocar na bola ainda correndo para frente com a manchete inclinada, jogando a bola direto na rede ou no braço do bloqueador adversário; corrija exigindo que os polegares apontem para a areia abrindo o ângulo da plataforma. Variações",
    "variacaoFacil": "J1 começa um pouco mais adiantado (a 4,5 metros da rede) para encurtar a corrida até a bola curta.",
    "variacaoDificil": "J2 pode variar livremente entre o saque curto aos 2,5m e o saque normal no peito aos 6m, proibindo J1 de adivinhar e sair antes.",
    "meta": "Colocar 7 de 10 saques curtos para o alto dentro da Zona Alvo sem que nenhuma bola passe direto para o outro lado."
  },
  {
    "numero": 59,
    "secao": 4,
    "nome": "Recuo para bola funda e leitura de linha ('dentro ou fora')",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "5 bolas, 3 cones e 1 zona alvo",
    "objetivo": "Recuar em passo lateral/cruzado sem correr de costas, passando as bolas que vão dentro e deixando sair as bolas longas demais.",
    "comoMontar": "Na meia-quadra esquerda, coloque 1 cone de base a 4,5 metros da rede (posição adiantada de J1) e 2 cones sobre a linha de fundo (8m). Demarque a Zona Alvo a 1,5m da rede. J2 saca da linha de fundo direita.",
    "passoAPasso": [
      "J1 começa a 4,5 metros da rede (simulando quem estava cobrindo o saque curto).",
      "J2 bate um saque longo em direção aos últimos 2 metros do fundo da quadra esquerda (algumas bolas caindo aos 7,5m dentro e outras passando 50 cm fora da linha de 8m).",
      "J1 gira o quadril imediatamente (ficando de lado para a rede) e recua rápido em passo cruzado/lateral até a linha de fundo.",
      "Décimos de segundo antes do contato, J1 toma a decisão e grita: se a bola vai cair dentro, grita 'DENTRO!', planta o pé de trás e faz uma manchete alta para a Zona Alvo; se a bola veio na altura do ombro/cabeça lá nos 7,5m com força, grita 'FORA!' e se esquiva.",
      "Cada leitura certa de bola fora ou passe certo na Zona Alvo vale 1 ponto; trocam a cada 10 saques."
    ],
    "pontosAtencao": [
      "Regra prática da linha de fundo na praia: se você está a 1 passo da linha de fundo e o saque vem rápido acima da linha do seu peito/ombro, 95% das vezes é bola FORA.",
      "Ao recuar para passar uma bola funda que vai cair dentro, incline o tronco para frente no momento da manchete para a bola viajar os 6 metros até a rede.",
      "Nunca recue dando pulinhos de costas: vire o quadril de lado para enxergar a bola e a linha de fundo com a visão periférica."
    ],
    "erroComum": "Passar de manchete bolas que iam cair 1 metro fora da quadra ou recuar com o tronco inclinado para trás mandando o passe curto no meio do caminho; corrija exigindo que o pé de trás pare em cima da linha de fundo. Variações",
    "variacaoFacil": "J2 lança as bolas fundas a partir do meio da sua quadra para facilitar a leitura do arco.",
    "variacaoDificil": "Se a bola cair dentro da quadra sem que J1 toque nela (erro de leitura achando que ia fora), J1 perde 2 pontos e paga 3 burpees na areia.",
    "meta": "Acertar 8 de 10 decisões (somando passes colocados na Zona Alvo e bolas fora deixadas sair corretamente)."
  },
  {
    "numero": 60,
    "secao": 4,
    "nome": "Divisão básica da quadra em dupla e chamada precoce",
    "nivel": "Iniciante",
    "jogadores": "3 jogadores (1 sacador e 2 receptores J1 e J2)",
    "tempo": "9 minutos",
    "material": "5 bolas, 4 cones e 1 zona alvo",
    "objetivo": "Organizar o posicionamento inicial lado a lado (4 metros para cada um) e criar o reflexo de gritar 'MINHA!' antes da bola passar da rede.",
    "comoMontar": "Na meia-quadra esquerda, divida a quadra ao meio no sentido do comprimento com 2 cones imaginários e posicione J1 no centro da metade esquerda (a 5,5m da rede e 2m da lateral) e J2 no centro da metade direita. Zona Alvo a 1,5m da rede. S1 saca do lado direito.",
    "passoAPasso": [
      "J1 e J2 assumem a base de recepção lado a lado a 5,5m da rede, mantendo 4 metros de distância entre si e 2 metros de cada linha lateral.",
      "S1 saca por cima controlado variando entre o lado de J1 e o lado de J2.",
      "Regra obrigatória: o jogador na direção de quem a bola saiu precisa gritar alto 'MINHA!' ANTES que a bola cruze por cima da fita da rede.",
      "No exato instante em que ouve o grito 'MINHA!' do parceiro, o outro jogador abandona a postura de recepção e corre em diagonal para a Zona Alvo na rede para ser o levantador.",
      "O passador coloca a bola na Zona Alvo e o parceiro a agarra acima da testa em posição de levantamento; rodam a cada 8 saques."
    ],
    "pontosAtencao": [
      "No vôlei de praia, o grito 'MINHA!' não serve só para evitar que os dois batam cabeça: ele é o gatilho que avisa o seu parceiro que ele já pode correr para a rede para levantar!",
      "Se você demorar para gritar 'MINHA!', o seu parceiro fica preso lá no fundo e chega atrasado para levantar.",
      "Mantenha a disciplina espacial: cada um cuida dos seus 4 metros de largura."
    ],
    "erroComum": "Recepcionar a bola em silêncio absoluto, deixando o parceiro parado no fundo sem saber se vai levantar; corrija invalidando o ponto toda vez que o grito acontecer depois que a bola já passou da rede. Variações",
    "variacaoFacil": "S1 lança a bola com as duas mãos do meio da quadra adversária dando mais tempo para a leitura e o grito.",
    "variacaoDificil": "Se nenhum dos dois gritar antes da bola cruzar a fita, ambos precisam tocar a mão na linha de fundo antes do próximo saque.",
    "meta": "Completar 8 de 10 recepções com chamada audível antes da rede e parceiro esperando na Zona Alvo."
  },
  {
    "numero": 61,
    "secao": 4,
    "nome": "Recepção de saque por cima nos dois corredores mirando o centro",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (1 sacador e 2 receptores)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Calibrar o peso e o ângulo da manchete contra saques por cima reais enviados nos corredores laterais da dupla.",
    "comoMontar": "S1 atrás da linha de fundo direita (8m). Na meia- quadra esquerda, J1 (entrada/esquerda) e J2 (saída/direita) posicionados a 5,5 metros da rede. Demarque a Zona Alvo de levantamento no centro a 1,5m da rede.",
    "passoAPasso": [
      "S1 executa saques por cima firmes alternando entre o corredor lateral de J1 e o corredor lateral de J2.",
      "Quando o saque vai perto da linha lateral, o receptor se desloca, planta o pé externo próximo à fita lateral e inclina o ombro de fora.",
      "O passador envia a bola com arco alto mirando exatamente a Zona Alvo central (a 1,5m da rede) para que o parceiro não precise correr até a antena para levantar.",
      "O parceiro que não passou infiltra até a Zona Alvo e faz um toque de controle para o alto confirmando que a bola chegou limpa na zona.",
      "A cada 10 saques, rodam as funções entre os três."
    ],
    "pontosAtencao": [
      "Quanto mais perto da linha lateral você estiver recebendo, mais cuidado precisa ter para não passar a bola reta (porque se o parceiro vem do outro lado, ele não alcança na antena).",
      "Mire sempre o passe 1 metro para dentro do centro da quadra, nunca colado na antena.",
      "Contra saque por cima firme, trave o abdômen no momento do impacto."
    ],
    "erroComum": "Receber na linha lateral e mandar o passe cruzado demais, atravessando toda a quadra até o outro lado; corrija pedindo para amortecer a força e mirar no centro da rede. Variações",
    "variacaoFacil": "S1 saca do centro da linha de fundo com 70% de força.",
    "variacaoDificil": "S1 saca dos cantos da linha de fundo cruzando em diagonal forte nos ombros externos de J1 e J2.",
    "meta": "Colocar 7 de 10 recepções de saque por cima dentro da Zona Alvo central a 1,5m da rede."
  },
  {
    "numero": 62,
    "secao": 4,
    "nome": "Dominando a bola na 'costura' (regra de conflito entre a dupla)",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (1 sacador mirando o meio e 2 receptores)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Eliminar a hesitação nas bolas sacadas exatamente no meio entre os dois jogadores aplicando uma regra clara de prioridade da dupla.",
    "comoMontar": "S1 na linha de fundo direita com a missão de sacar exclusivamente na faixa central de 2 metros ('costura'). Na meia-quadra esquerda, J1 (esquerda) e J2 (direita) a 5,5m da rede. Coloque 2 cones delimitando o corredor central e a Zona Alvo a 1,5m da rede.",
    "passoAPasso": [
      "Antes de começar, a dupla define a regra oficial da costura: Regra A (padrão de dois destros): J1 (jogador da esquerda) dá meio passo à frente e é o dono da costura porque entra com o lado direito/forehand e já abre para atacar na entrada; ou Regra B: quem o sacador NÃO está olhando fecha a costura.",
      "S1 saca todas as bolas exatamente no meio entre J1 e J2.",
      "Aplicando a regra combinada, o responsável pela costura (ex.: J1) dá 1 passo firme em diagonal para dentro gritando 'MINHA!' e toma a frente do parceiro.",
      "J2 imediatamente recolhe os braços para não atrapalhar e já contorna por trás ou pela frente rumo à Zona Alvo na rede.",
      "Após 6 bolas com J1 responsável pela costura, invertem a combinação fazendo J2 assumir a costura por mais 6 bolas."
    ],
    "pontosAtencao": [
      "Quando você chama a bola na costura, dê um passo levemente para FRENTE e para dentro (corte a trajetória da bola antes do seu parceiro).",
      "Se os dois derem um passo para trás na costura, os dois vão esperar um pelo outro e a bola vai cair no meio.",
      "Depois de passar uma bola na costura central, o passador precisa abrir rápido de volta para o seu lado da quadra para não atacar embolado no meio."
    ],
    "erroComum": "Tocar na bola na costura apenas esticando o braço de lado sem levar o corpo para trás da bola; corrija exigindo que o umbigo do passador chegue na linha central dos cones. Variações",
    "variacaoFacil": "S1 saca da marca de 6 metros com trajetória arqueada no centro.",
    "variacaoDificil": "S1 pode sacar na costura curta (3,5m) ou na costura funda (7,5m), exigindo comunicação de quem entra na frente e quem fecha atrás.",
    "meta": "Resolver 8 de 10 saques na costura sem choque entre os parceiros e com passe dentro da Zona Alvo."
  },
  {
    "numero": 63,
    "secao": 4,
    "nome": "Recepção em 'V': alternando saque curto e saque fundo",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (2 sacadores alternados e 1 receptor em trabalho intenso)",
    "tempo": "10 minutos",
    "material": "6 bolas, 3 cones e 1 zona alvo",
    "objetivo": "Desenvolver a leitura rápida de profundidade (curto vs. longo) e a recuperação imediata para a base central após cada passe.",
    "comoMontar": "No lado direito, S1 e S2 ficam com 3 bolas cada na linha de saque. No lado esquerdo, J1 começa no cone central a 5,5m da rede. Coloque 1 cone a 2,5m da rede na diagonal esquerda (curta) e 1 cone a 7,5m da rede na diagonal direita (funda). Zona Alvo a 1,5m da rede.",
    "passoAPasso": [
      "J1 começa no cone base (5,5m).",
      "S1 executa um saque curto em direção ao cone de 2,5m; J1 arranca para frente, freia baixo e passa a bola alta na Zona Alvo.",
      "Assim que a bola sai do braço de J1, S2 já lança a bola para sacar fundo em direção ao cone de 7,5m.",
      "J1 abre o quadril, corre dos 2,5m até os 7,5m no fundo, planta o pé de trás e passa a segunda bola na Zona Alvo.",
      "Cada série tem 6 bolas alternadas sem pausa (Curta - Funda - Curta - Funda - Curta - Funda); depois rodam os jogadores."
    ],
    "pontosAtencao": [
      "Na bola curta, a manchete aponta para o alto para amortecer a corrida; na bola funda, o tronco inclina à frente para empurrar a bola até a rede.",
      "Não fique parado olhando se a sua primeira recepção caiu no alvo: passe a bola e já vire os olhos para o segundo sacador.",
      "Controle a respiração soltando o ar no momento de cada manchete."
    ],
    "erroComum": "Usar o mesmo golpe de braço na bola curta e na bola funda (mandando a curta de graça para o outro lado e deixando a funda morrer no meio da quadra); corrija gritando 'AMORTECE!' na curta e 'PERNA!' na funda. Variações",
    "variacaoFacil": "Dar 3 segundos de intervalo entre o saque de S1 e o saque de S2 para J1 voltar ao cone de 5,5m primeiro.",
    "variacaoDificil": "S1 e S2 não seguem ordem fixa: cada um pode escolher na hora se saca curto ou fundo, exigindo leitura visual pura de J1.",
    "meta": "Colocar pelo menos 4 das 6 bolas de cada série contínua dentro da Zona Alvo a 1,5m da rede."
  },
  {
    "numero": 64,
    "secao": 4,
    "nome": "Recepção de saque flutuante: pés vivos até o último segundo",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (ou 3 com levantador na rede)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Evitar montar a manchete cedo demais contra saques flutuantes que mudam de direção no ar, ajustando os pés para manter a bola na linha do umbigo.",
    "comoMontar": "S1 atrás da linha de fundo direita (a 9 metros da rede) batendo saques flutuantes rasantes e sem giro. J1 no cone de recepção a 5,5 metros da rede na meia-quadra esquerda. Zona Alvo a 1,5m da rede.",
    "passoAPasso": [
      "J1 aguarda em postura ativa com os braços SEPARADOS e relaxados ao lado do corpo (proibido juntar as mãos antes de a bola cruzar a rede).",
      "S1 bate um saque flutuante seco que oscila com o vento da praia.",
      "Enquanto a bola viaja, J1 faz micro-passos rápidos na areia ('pés de boxeador') acompanhando o desvio de última hora da bola para mantê-la alinhada com o centro do seu corpo.",
      "Somente no último metro antes do impacto, J1 fecha e trava a plataforma firme, recebendo a bola com um contato sólido e curto para a Zona Alvo.",
      "Trocam de função a cada 8 saques flutuantes."
    ],
    "pontosAtencao": [
      "Contra saque flutuante na praia, quem junta as mãos cedo demais corre com os braços travados e toma ace quando a bola desvia 30 cm no último metro.",
      "Mova os pés até o último instante para receber a bola no meio do corpo: manchete lateral fora do corpo contra saque flutuante quase sempre espirra.",
      "Faça uma plataforma 'dura' e firme para vencer a oscilação da bola."
    ],
    "erroComum": "Cruzar os braços e esticá-los para frente assim que o sacador bate na bola, ficando lento nas pernas; corrija pedindo para bater uma palma rápida quando a bola passar por cima da fita da rede e só então montar a manchete. Variações",
    "variacaoFacil": "S1 saca flutuante com velocidade moderada mirando na metade de quadra de J1.",
    "variacaoDificil": "J1 usa óculos escuros e S1 saca contra o vento (fazendo a bola flutuar e cair de repente no meio do caminho).",
    "meta": "Dominar 7 de 10 saques flutuantes enviando a bola limpa e alta para dentro da Zona Alvo."
  },
  {
    "numero": 65,
    "secao": 4,
    "nome": "Manchete alta lateral (recurso para saque rápido no peito e ombro)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Dominar a manchete alta na linha do ombro/rosto para defender saques tensos sem cometer falta de toque sujo da regra da praia.",
    "comoMontar": "S1 posiciona-se mais perto (a 6 metros da rede no lado direito, sobre um caixote ou sacando firme do chão) para enviar bolas tensas na altura do peito/ombro. J1 fica a 6 metros da rede no lado esquerdo. Zona Alvo a 1,5m da rede.",
    "passoAPasso": [
      "J1 fica na linha de 6 metros; S1 envia bolas rápidas e retas mirando especificamente na linha dos ombros e do peito de J1.",
      "Como no vôlei de praia é muito arriscado tentar recepcionar um saque rápido de toque de dedos (o árbitro marca dois toques ou condução ao menor deslize), J1 treina a 'manchete alta de ombro'.",
      "J1 gira o tronco levemente de lado, afasta o quadril da trajetória da bola, levanta um dos cotovelos e inclina a plataforma na altura do ombro/pescoço.",
      "A bola bate no antebraço inclinado ao lado do rosto e sobe amortecida em direção à Zona Alvo central.",
      "Realizam 5 bolas no ombro direito e 5 bolas no ombro esquerdo; depois invertem os papéis."
    ],
    "pontosAtencao": [
      "Esse é um movimento 100% típico do vôlei de praia: na quadra indoor o atleta usaria o toque de dedos, mas na areia você gira o tronco e usa a manchete alta lateral.",
      "Nunca tente fazer manchete alta na frente do nariz com os dois cotovelos apontados para frente (a bola bate no seu rosto); vire os dois braços para um dos lados do corpo.",
      "Relaxar os ombros no impacto para a bola não voltar forte para o outro lado."
    ],
    "erroComum": "Dar um passo para trás tentando baixar a bola até a cintura e ser atingido no peito; corrija pedindo para manter a base e girar os braços para a lateral na altura do ombro. Variações",
    "variacaoFacil": "S1 lança a bola com uma mão na altura do ombro de J1 avisando antes qual ombro vai acionar.",
    "variacaoDificil": "S1 saca da linha de fundo (8m) mirando alto e tenso na linha da cabeça de J1, que precisa decidir em meio segundo entre abaixar (se for fora) ou usar a manchete alta (se for dentro).",
    "meta": "Amortecer e colocar 7 de 10 bolas altas na altura do ombro dentro da Zona Alvo central sem usar os dedos."
  },
  {
    "numero": 66,
    "secao": 4,
    "nome": "Recepção limpa de toque de dedos (quando e como usar na praia)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Executar a recepção por cima com as duas mãos perfeitamente simétricas e firmes em bolas altas ou freadas pelo vento, sem cometer dois toques.",
    "comoMontar": "J1 no cone a 5 metros da rede na meia-quadra esquerda. S1 na linha de fundo direita enviando saques mais altos ou saques que sobem contra o vento acima da cabeça de J1. Zona Alvo a 1,5m da rede.",
    "passoAPasso": [
      "S1 saca bolas com arco médio/alto que chegam acima da linha da testa de J1 com velocidade moderada.",
      "J1 se desloca rápido na areia para colocar a testa exatamente debaixo da bola com os dois pés 100% plantados no chão.",
      "Levanta as duas mãos acima da testa em formato de concha firme (dedos mais rígidos do que no levantamento comum).",
      "Executa um toque rápido, simultâneo e simétrico com os 10 dedos, sem deixar a bola girar nem afundar na palma da mão, enviando-a para a Zona Alvo.",
      "Regra de rigor da praia: se a bola der mais de 1 giro completo no ar após sair da mão de J1, conta como falta (dois toques) e não vale ponto."
    ],
    "pontosAtencao": [
      "Quando vale a pena usar toque na recepção na praia?",
      "Apenas quando o saque vem mais lento/alto (ou freado pelo vento contra) e você consegue parar os dois pés debaixo da bola.",
      "Nunca tente recepcionar de toque na praia se estiver correndo ou com os braços esticados longe da testa — nesses casos, use a manchete alta do exercício anterior.",
      "Deixe os punhos mais firmes (toque 'seco') para que os dois polegares e indicadores toquem a bola no exato mesmo milissegundo."
    ],
    "erroComum": "Amortecer demais a bola descendo as mãos até o peito (condução/carregada); corrija exigindo o contato alto acima da testa com expulsão rápida da bola. Variações",
    "variacaoFacil": "S1 lança a bola alta a partir do outro lado da rede para J1 calibrar a limpeza do toque.",
    "variacaoDificil": "S1 alterna entre um saque forte (obrigando J1 a usar manchete) e um saque mais alto acima da cabeça (permitindo o toque limpo).",
    "meta": "Executar 7 de 10 recepções de toque acima da testa totalmente limpas (sem giro da bola) caindo na Zona Alvo."
  },
  {
    "numero": 67,
    "secao": 4,
    "nome": "Recepção do saque alto 'Jornada nas Estrelas' contra o sol e vento",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (ou 3 com levantador na rede)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo (recomendado uso de boné/viseira e óculos)",
    "objetivo": "Aprender a rastrear a bola que sobe 15 metros no céu sob o sol e o vento, posicionando- se com passos curtos para amortecer a queda vertical.",
    "comoMontar": "Coloque o receptor (J1) no lado da quadra que olha contra o sol. S1 fica na linha de fundo oposta batendo o saque 'Jornada nas Estrelas' (ou lançando altíssimo do meio da quadra). Zona Alvo a 1,5m da rede.",
    "passoAPasso": [
      "S1 bate o saque altíssimo por baixo fazendo a bola subir entre 12 e 15 metros de altura.",
      "Assim que a bola sobe, J1 NÃO corre desesperado para onde acha que ela vai cair (pois o vento vai mexer nela lá no alto): J1 acompanha a trajetória usando a mão livre como viseira contra o sol até a bola atingir o ponto mais alto (ápice).",
      "Quando a bola começa a descer do ápice, J1 ajusta a posição com passadas rápidas mantendo a bola à frente do corpo (nunca em cima da cabeça).",
      "Como a bola cai quase a 90 graus (vertical) e muito pesada, J1 flexiona bem os joelhos na areia e apresenta a plataforma firme e levemente inclinada à frente, usando a subida das pernas para levar a bola até a Zona Alvo.",
      "Trocam de lado a cada 8 bolas."
    ],
    "pontosAtencao": [
      "Se você ficar exatamente debaixo da bola que cai verticalmente do céu, ela vai bater no seu braço e subir para trás da sua cabeça: pare meio passo ATRÁS da linha de queda da bola.",
      "Na hora em que a bola cruza a frente do sol, olhe de relance para a sombra da bola na areia ou espere meio segundo para ela sair do disco solar.",
      "Use as pernas no momento do impacto, pois a bola que cai verticalmente não tem impulso horizontal para chegar sozinha até a rede."
    ],
    "erroComum": "Tentar pegar o saque 'Jornada nas Estrelas' de toque de dedos (a bola vem pesada demais de 15m de altura e dobra os dedos, dando dois toques); corrija exigindo 100% de recepção de manchete com base baixa. Variações",
    "variacaoFacil": "S1 fica a 4 metros da rede do outro lado e lança a bola o mais alto possível com as duas mãos.",
    "variacaoDificil": "O parceiro (J2) fica junto e grita orientações de vento ('Vento levando pra linha!', 'Tá caindo curta!') enquanto J1 olha para o céu.",
    "meta": "Colocar 6 de 10 bolas de 'Jornada nas Estrelas' dentro da Zona Alvo sem perder a bola no sol."
  },
  {
    "numero": 68,
    "secao": 4,
    "nome": "Ajuste de profundidade da recepção: vento contra vs. vento a favor",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (2 sacadores — um em cada fundo — e 1 ou 2 receptores que trocam de lado)",
    "tempo": "10 minutos",
    "material": "6 bolas, 4 cones e 2 zonas alvo",
    "objetivo": "Aprender a adiantar ou recuar a linha base de recepção na areia conforme o saque adversário venha contra o vento ou a favor do vento.",
    "comoMontar": "Considere que o vento sopra da direita para a esquerda. Na meia-quadra esquerda (onde o saque adversário vem A FAVOR do vento, voando longe), coloque o cone de recepção recuado a 6,5m da rede. Na meia-quadra direita (onde o saque adversário vem CONTRA o vento, caindo curto), coloque o cone de recepção adiantado a 4,5m da rede.",
    "passoAPasso": [
      "J1 começa recebendo na meia-quadra esquerda (o sacador S1 na direita está sacando A FAVOR do vento).",
      "J1 posiciona-se no cone de 6,5 metros da rede (1 metro mais ao fundo que o normal) porque o vento nas costas da bola faz o saque viajar rápido e fundo.",
      "No passe, como o vento está soprando pelas costas de J1 em direção à rede, J1 passa a bola mais contida (a 2 metros da rede) para o vento não jogar o passe para o outro lado.",
      "Após 5 bolas, J1 corre para a meia-quadra direita (agora S2 saca da esquerda CONTRA o vento).",
      "Na quadra direita, J1 se adianta para o cone de 4,5 metros da rede (pois o vento freia o saque e o derruba curto) e empurra o passe mais forte contra o vento até a Zona Alvo."
    ],
    "pontosAtencao": [
      "Anote essa regra de ouro da areia: se o vento bate no seu PEITO quando você olha para o sacador, recue para 6-6,5m e segure o passe; se o vento bate nas suas COSTAS, adiante-se para 4,5m e empurre mais o passe.",
      "Com vento batendo nas suas costas, nunca mire o passe a 1 metro da rede porque a rajada joga a bola na mão do bloqueador adversário.",
      "Reajuste seu cérebro imediatamente a cada troca de lado da quadra."
    ],
    "erroComum": "Ficar plantado sempre aos 5,5 metros nos dois lados da quadra sem respeitar o vento, tomando ace curto de um lado e ace no peito do outro; corrija marcando os cones em profundidades diferentes. Variações",
    "variacaoFacil": "Treinar 8 bolas seguidas de um lado e depois 8 bolas do outro antes de alternar rápido.",
    "variacaoDificil": "Trocar de lado da quadra a cada 2 recepções correndo por fora do poste.",
    "meta": "Acertar 7 de 10 passes nas Zonas Alvo somando as recepções nos dois lados do vento sem deixar nenhum passe passar direto pela rede."
  },
  {
    "numero": 69,
    "secao": 4,
    "nome": "Recepção seguida de transição imediata de pés para o ataque",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (1 sacador, 1 receptor/atacante e 1 levantador)",
    "tempo": "10 minutos",
    "material": "5 bolas, 3 cones e 2 zonas alvo",
    "objetivo": "Conectar o término da manchete de recepção com o primeiro passo de abertura e aproximação para o salto de ataque na areia.",
    "comoMontar": "S1 saca da linha de fundo direita. Na meia-quadra esquerda, J1 fica a 5,5m da rede no lado esquerdo e J2 (levantador) já fica próximo à Zona Alvo 1 (centro da rede a 1,5m). Coloque 1 cone de transição perto da linha lateral aos 4m e uma Zona Alvo 2 de chamada de ataque na rede esquerda.",
    "passoAPasso": [
      "S1 saca em direção a J1 (a 5,5m da rede).",
      "J1 para os pés, realiza a recepção de manchete alta para a Zona Alvo 1 (onde está J2).",
      "No instante em que a bola sai dos antebraços, J1 NÃO fica parado olhando o passe: ele dá 1 passo de reajuste passando pelo cone lateral de 4m (abrindo espaço e mantendo a bola à sua frente).",
      "Enquanto J2 agarra ou levanta a bola na Zona Alvo 1, J1 acelera os dois últimos passos ('esquerda-direita' na areia) entrando na Zona Alvo 2 junto à rede e salta em equilíbrio máximo.",
      "No ar, J1 agarra a bola levantada por J2 com os dois braços no ponto mais alto (treinando apenas a transição de pés antes de bater na bola nos exercícios seguintes)."
    ],
    "pontosAtencao": [
      "Na praia, como a bola é levantada de mais longe da rede, você nunca corre para a rede ANTES de o seu parceiro tocar na bola: passe, faça 1 passo lento de leitura ('passo de espera') e só exploda quando a bola sair da mão do levantador.",
      "Se você recebeu uma bola perto do meio da quadra, dê o primeiro passo abrindo para a linha lateral para recuperar o seu ângulo de ataque.",
      "Pare os dois pés juntos na areia antes de saltar verticalmente na Zona Alvo 2."
    ],
    "erroComum": "Correr desesperado para debaixo da rede logo após a manchete, chegando cedo demais e ficando embaixo da bola sem espaço para atacar; corrija exigindo o passo lento no cone de 4m até J2 tocar na bola. Variações",
    "variacaoFacil": "S1 lança a bola fácil para J1 passar e focar 100% no ritmo da passada de aproximação até a rede.",
    "variacaoDificil": "S1 saca deslocando J1 para o fundo (7m) ou para a curta (3m), obrigando J1 a adaptar o comprimento da corrida de ataque após o passe.",
    "meta": "Completar 8 de 10 sequências (passe na Zona 1 + chegada no tempo certo saltando equilibrado na Zona 2)."
  },
  {
    "numero": 70,
    "secao": 4,
    "nome": "Recepção de saque viagem forte: 'tirando o peso' da bola",
    "nivel": "Avançado",
    "jogadores": "2 ou 3 jogadores (1 sacador de viagem e 1 ou 2 receptores)",
    "tempo": "10 minutos",
    "material": "6 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Absorver a potência e o efeito topspin do saque viagem recuando a base na areia e encolhendo levemente os ombros no impacto.",
    "comoMontar": "S1 atrás da linha de fundo direita batendo saques viagem fortes (ou batendo em cima de um caixote na linha de 6m do lado direito para simular viagem pesado). Na meia-quadra esquerda, J1 posiciona-se recuado a 6,5 metros da rede em base muito baixa. Zona Alvo a 2m da rede no centro.",
    "passoAPasso": [
      "Quando S1 lança a bola alto para o saque viagem, J1 já recua meio passo para os 6,5m, afasta bem os pés na areia e baixa o quadril.",
      "No momento da batida de S1 lá no alto, J1 faz o destrave cravando as plantas dos pés na areia.",
      "Como a bola do viagem vem rápida e girando para frente (topspin, que faz a bola subir e espirrar para trás se bater num braço duro), J1 inclina o tronco mais à frente (fechando o ângulo da manchete).",
      "No exato milissegundo do impacto, J1 'tira o peso' da bola: recolhe suavemente os ombros ou afunda 3 cm os joelhos para amortecer a pancada.",
      "A bola sobe controlada no centro da quadra (Zona Alvo a 2m da rede); trocam a cada 8 viagens."
    ],
    "pontosAtencao": [
      "Contra saque viagem com topspin, a rotação da bola tenta fazer ela subir pelas suas costas ou passar direto pela rede: feche o queixo no peito e incline os ombros para frente.",
      "Contra saque viagem, você não precisa balançar os braços um milímetro sequer para cima: a própria velocidade do saque já faz a bola subir 4 metros.",
      "Não tente passar o saque viagem colado na rede (1m); mire a Zona Alvo a 2 ou 2,5 metros da rede para ter margem de segurança."
    ],
    "erroComum": "Levantar o tronco assustado quando a bola vem forte, abrindo o ângulo da manchete e jogando a bola lá no alambrado de trás; corrija pedindo para manter o nariz à frente da linha dos joelhos. Variações",
    "variacaoFacil": "S1 bate o viagem com 75% de força da linha de fundo diretamente na direção do corpo de J1.",
    "variacaoDificil": "S1 varia entre o saque viagem forte no fundo (6,5m) e o saque híbrido largado aos 3 metros.",
    "meta": "Amortecer e manter em jogo dentro da Zona Alvo pelo menos 6 de 10 saques viagem potentes."
  },
  {
    "numero": 71,
    "secao": 4,
    "nome": "Passe de segurança no próprio corredor (quando o saque te joga pra fora)",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (1 sacador tático, 1 receptor e 1 levantador)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Saber quando abandonar o alvo central e passar a bola reta à própria frente (a 2,5m da rede) quando o saque te tira totalmente da quadra.",
    "comoMontar": "S1 no canto da linha de fundo direita sacando em diagonal curta/lateral extrema para tirar J1 da quadra. Na meia-quadra esquerda, J1 começa a 5,5m da rede. Marque a Zona Alvo A (centro da rede a 1,5m) e a Zona Alvo B ('Zona de Segurança' na frente de J1, a 2,5m da rede e 2m da lateral). J2 é o levantador.",
    "passoAPasso": [
      "S1 bate um saque agressivo na linha lateral esquerda que obriga J1 a correr para fora da fita lateral para alcançar a bola em desequilíbrio.",
      "Inteligência tática de praia: quando J1 chega atrasado e fora da quadra, tentar forçar um passe longo até o meio da rede (Zona A) quase sempre faz a bola passar de graça para o bloqueador adversário.",
      "Nesse cenário de sufoco, J1 aplica o 'Passe no Próprio Ombro': joga a bola bem alta (5m de altura) reto à sua própria frente dentro da Zona Alvo B (a 2,5m da rede no seu corredor).",
      "J2 (levantador), vendo que J1 foi jogado para fora da quadra, corre até a Zona B, para os pés e levanta na paralela para J1.",
      "Se o saque de S1 vier fácil dentro da quadra, J1 passa normalmente na Zona A."
    ],
    "pontosAtencao": [
      "Na praia, quando você está no sufoco fora da quadra, a única proibição é mandar a bola baixa ou perto da rede: jogue um balão alto na sua própria frente (Zona B) que dá tempo de o seu parceiro chegar e de você levantar da areia.",
      "Chame o parceiro logo após o passe de sufoco: 'Ajuda aqui na frente!'.",
      "O levantador (J2) nunca deve correr cego para o meio da rede: ele primeiro olha onde o saque pegou o parceiro e só então vai para a bola."
    ],
    "erroComum": "Caindo na areia fora da quadra, tentar empurrar a bola para o centro da rede e entregar um 'overpass' (bola de graça) na mão do adversário; corrija premiando com 2 pontos o passe alto vertical na Zona B quando o saque for extremo. Variações",
    "variacaoFacil": "S1 lança a bola manualmente fora da linha lateral para J1 treinar a escolha da Zona B.",
    "variacaoDificil": "Completar o ponto inteiro com ataque de J1 após o levantamento de emergência de J2 na Zona B.",
    "meta": "Salvar 7 de 10 bolas extremas fora da quadra colocando-as altas e jogáveis na Zona de Segurança B sem dar bola de graça."
  },
  {
    "numero": 72,
    "secao": 4,
    "nome": "Recepção + Levantamento + Ataque no corredor (Side-out completo 1)",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (1 sacador/defensor do outro lado e 1 dupla fazendo o side-out)",
    "tempo": "11 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Encadear a recepção de saque flutuante agressivo com o levantamento na rede e a finalização de ataque no corredor.",
    "comoMontar": "S1 atrás da linha de fundo direita. Na meia-quadra esquerda, J1 (esquerda) e J2 (direita) a 5,5m da rede. Marque a Zona Alvo de Recepção no centro (a 1,5m da rede) e duas Zonas Alvo de Ataque no fundo da quadra direita (Corredor Paralelo e Diagonal).",
    "passoAPasso": [
      "S1 executa um saque flutuante agressivo em J1 (ou em J2).",
      "J1 grita 'MINHA!', estabiliza a base na areia e passa a bola alta dentro da Zona Alvo central (1,5m da rede).",
      "J2 infiltra em velocidade até a Zona Alvo central, para os dois pés e realiza o levantamento (de toque limpo ou manchete) para a entrada da rede de J1.",
      "J1 faz a aproximação de pés na areia, salta equilibrado e ataca (mão cheia ou shot controlado) acertando uma das Zonas Alvo de Ataque no lado de S1.",
      "Cada dupla executa 6 side-outs (3 recebidos por J1 e 3 recebidos por J2) e depois troca com S1."
    ],
    "pontosAtencao": [
      "A qualidade do ataque começa na altura da recepção: se o passe de J1 for baixo e corrido, J2 vai chegar correndo e o levantamento vai sair impreciso.",
      "Mantenha a bola sempre entre você e o seu levantador (nunca passe a bola para o lado de lá do levantador).",
      "Após o passe, avise ao levantador que tipo de bola você quer ('Bola no ponto!', 'Meia bola!')."
    ],
    "erroComum": "Apressar a corrida de ataque após a recepção e passar por baixo da bola antes de ela cair; corrija obrigando o atacante a esperar a bola tocar na mão do levantador para dar os dois últimos passos. Variações",
    "variacaoFacil": "Finalizar o ataque apenas com 'shots' (cortes de punho e largadas de ponta de dedo rígida) nas zonas alvo.",
    "variacaoDificil": "S1, após sacar, entra na quadra para defender de verdade o ataque da dupla.",
    "meta": "Converter 7 de 10 sequências completas (passe na zona + levantamento limpo + ataque dentro das zonas alvo)."
  },
  {
    "numero": 73,
    "secao": 4,
    "nome": "Recepção de saque curto + Levantamento e Ataque em tempo curto (Side-out 2)",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (1 sacador e 1 dupla receptora)",
    "tempo": "11 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Transformar uma recepção difícil de bola curta perto da rede em uma transição rápida de ataque sem perder o tempo de salto.",
    "comoMontar": "S1 na linha de fundo direita especializado em saques curtos ('pingados' entre 2m e 3m da rede). Na meia- quadra esquerda, J1 e J2 na base normal a 5,5m da rede. Zona Alvo de levantamento a 1,5m da rede.",
    "passoAPasso": [
      "S1 saca curto logo atrás da rede no lado de J1 (aos 2,5m da fita).",
      "J1 arranca dos 5,5m até os 2,5m, freia em afundo baixo e levanta a recepção com pelo menos 4 metros de altura no centro (para dar tempo a si mesmo de recompor a passada).",
      "Como J1 já terminou o passe a apenas 2,5 metros da rede (muito perto da fita), ele NÃO tem espaço para uma corrida longa: ele dá 1 passo rápido para trás/fora (abrindo para os 3,5m) para tomar impulso.",
      "J2 chega na bola, levanta na medida e J1 explode em 2 passos atacando sobre a rede.",
      "Realizam 4 bolas curtas em J1 e 4 bolas curtas em J2, depois rodam."
    ],
    "pontosAtencao": [
      "Detalhe técnico crucial da praia: quando você recebe um saque curto aos 2 metros da rede, você está 'colado' demais na fita para atacar.",
      "Se você não passar a bola ALTA e não der 1 passo para trás/lado após o passe, você vai saltar sem embalo nenhum.",
      "Capriche na altura da recepção da bola curta: passe baixo na curta mata o próprio atacante.",
      "O levantador (J2) deve deixar a bola 1,5m afastada da rede para ajudar o parceiro que estava no chão."
    ],
    "erroComum": "Receber a bola curta aos 2 metros da rede e continuar andando para frente até encostar a barriga na fita, ficando impossibilitado de atacar; corrija colocando um cone aos 3,5m onde o passador precisa pisar após passar a curta. Variações",
    "variacaoFacil": "Permitir que J1 comece aos 4,5 metros da rede.",
    "variacaoDificil": "S1 alterna sem aviso entre saque curto (2,5m) e saque fundo no peito (6,5m).",
    "meta": "Virar 6 de 10 bolas curtas com passe alto, passo de reajuste para trás e ataque efetivo dentro da quadra adversária."
  },
  {
    "numero": 74,
    "secao": 4,
    "nome": "Recepção de viagem + Levantamento de dentro para fora + Ataque (Side-out 3)",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Dupla A sacando e bloqueando/defendendo x Dupla B no side-out)",
    "tempo": "12 minutos",
    "material": "5 bolas e 2 cones",
    "objetivo": "Executar o side-out completo contra saque viagem ou flutuante pesado quando a recepção fica no meio da quadra (a 3-4 metros da rede).",
    "comoMontar": "No lado direito: S1 no saque viagem e B1 na rede para bloquear. No lado esquerdo: J1 e J2 a 6 metros da rede. Marque uma Zona de Recepção Segura no centro da meia-quadra esquerda (entre 2,5m e 3,5m da rede).",
    "passoAPasso": [
      "S1 bate um saque viagem forte (ou flutuante máximo) em J1.",
      "J1 amortece a pancada jogando a bola alta no centro da sua quadra (Zona Segura a 3 metros da rede).",
      "J2 corre até o centro da quadra (a 3m da rede), planta os pés de frente para a linha lateral de J1 e executa um levantamento 'de dentro para fora' (empurrando a bola do centro aos 3m em diagonal até a entrada da rede aos 1,5m).",
      "J1 faz a chamada de ataque observando a posição do bloqueador B1 e finaliza na paralela ou na diagonal livre.",
      "Após 6 side-outs, a Dupla A e a Dupla B trocam de função."
    ],
    "pontosAtencao": [
      "No alto nível do vôlei de praia, contra um saque viagem a 90 km/h, passar a bola aos 3 metros da rede no meio da quadra é considerado um EXCELENTE passe.",
      "Quando o passe fica aos 3m da rede, o levantador precisa empurrar a bola em diagonal na direção da antena/rede para aproximar a bola para o atacante.",
      "O atacante deve esperar meio segundo a mais porque a bola levantada dos 3m demora mais para chegar na rede."
    ],
    "erroComum": "O passador tentar cravar o saque viagem a 1 metro da rede e dar a bola de graça no bloqueio de B1; corrija dando ponto extra sempre que a recepção do viagem subir alta no meio da quadra (aos 3m). Variações",
    "variacaoFacil": "B1 apenas apresenta o bloqueio fixo na paralela ou na diagonal para J1 ler e atacar no corredor livre.",
    "variacaoDificil": "Ponto real completo até a bola cair na areia, valendo contra- ataque.",
    "meta": "Converter 6 de 10 side-outs contra saque forte usando o passe seguro no centro e ataque inteligente contra o bloqueio."
  },
  {
    "numero": 75,
    "secao": 4,
    "nome": "Desafio sob pressão: 'Quebra-Passe vs. Virada de Side-out' (Side-out 4)",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (2 contra 2 em desafio pontuado)",
    "tempo": "12 minutos",
    "material": "5 bolas e 4 cones",
    "objetivo": "Manter a agressividade da chamada e a qualidade do passe sob pressão de placar quando um erro na costura ou de comunicação custa o dobro.",
    "comoMontar": "Quadra oficial 16x8m limpa para jogo 2x2. Dupla A (S1 e B1) no lado direito sacando; Dupla B (J1 e J2) no lado esquerdo recepcionando.",
    "passoAPasso": [
      "A Dupla B (receptora) começa com a missão de conquistar 7 pontos de side-out antes que a Dupla A conquiste 7 pontos.",
      "A Dupla A saca livremente buscando a costura, as linhas ou a curta.",
      "Sistema de pontuação de pressão na recepção: se a Dupla B passar na mão do levantador e virar o ataque de primeira = +2 pontos para a Dupla B; se virar o ponto mas com passe ruim = +1 ponto.",
      "Penalidade máxima de recepção: se a Dupla B tomar um ace direto sem tocar na bola (indecisão na costura) ou mandar a recepção de graça por cima da rede ('overpass'), a Dupla B ZERA os seus pontos acumulados e volta para 0!",
      "Ao final do set, invertem quem saca e quem recebe."
    ],
    "pontosAtencao": [
      "A regra de 'zerar o placar se a bola cair sem ninguém tocar' obriga os dois jogadores a se comunicarem em 100% dos saques e a mergulharem em qualquer bola duvidosa.",
      "Em momentos de pressão (5 ou 6 pontos acumulados), priorize o passe alto no meio da quadra em vez de arriscar colar a bola na fita.",
      "Se o sacador adversário engatar uma sequência difícil, mude imediatamente a profundidade da base de recepção ou chame um ajuste com o parceiro."
    ],
    "erroComum": "Ficar tenso quando está perto de bater a meta e encolher o braço na hora do passe, deixando a bola morrer curta; corrija exigindo respiração profunda e chamado alto de 'MINHA!' antes da rede. Variações",
    "variacaoFacil": "Em vez de zerar o placar no ace/overpass, apenas descontar 2 pontos da dupla receptora.",
    "variacaoDificil": "O mesmo receptor (escolhido pela dupla que saca) precisa receber todos os saques até conseguir virar 2 pontos seguidos na linha paralela.",
    "meta": "Atingir os 7 pontos de side-out sem sofrer nenhum 'reset' (nenhum ace sem toque e nenhum passe entregue de graça)."
  },
  {
    "numero": 76,
    "secao": 4,
    "nome": "Maratona do Receptor: 4 saques diferentes seguidos com finalização",
    "nivel": "Avançado",
    "jogadores": "3 ou 4 jogadores (2 sacadores, 1 levantador e 1 receptor em teste físico-técnico)",
    "tempo": "12 minutos",
    "material": "8 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Manter a precisão da plataforma de manchete e a perna para atacar quando o adversário saca 4 bolas seguidas variando todos os golpes em cima de você.",
    "comoMontar": "No lado direito, S1 e S2 ficam com 4 bolas cada na linha de fundo. No lado esquerdo, J1 é o receptor avaliado e J2 é o seu levantador. Zona Alvo de passe no centro a 1,5m da rede.",
    "passoAPasso": [
      "J1 vai receber uma bateria ininterrupta de 4 saques diferentes (um após o outro, assim que finalizar o ataque anterior):",
      "Bola 1: S1 bate um saque flutuante tenso no meio; J1 passa na Zona Alvo, aproxima e ataca.",
      "Bola 2 (imediata): S2 solta um saque curto aos 2,5m da rede; J1 arranca da rede de volta aos 5m e explode na curta, passa alto, reajusta e ataca.",
      "Bola 3 (imediata): S1 manda um saque alto 'Jornada nas Estrelas' no fundo aos 7,5m; J1 recua olhando contra o sol, passa do fundo para a rede, corre 6 metros na areia e ataca.",
      "Bola 4 (final): S2 bate um saque viagem forte no peito; J1 tira o peso da bola colocando no centro e finaliza o 4º ataque com toda a energia restante.",
      "Após a maratona de 4 bolas, J1 descansa e o próximo jogador entra no teste."
    ],
    "pontosAtencao": [
      "Na 3ª e 4ª bolas, as pernas vão queimar por causa da areia fofa: não compense a fadiga das pernas jogando os braços para cima na manchete — continue baixando o quadril.",
      "Na transição entre o ataque da bola anterior e o saque seguinte, volte rápido aos 5,5m já olhando para a mão do próximo sacador.",
      "Peça ao seu levantador (J2) bolas um pouco mais altas e seguras nas duas últimas bolas da série."
    ],
    "erroComum": "Desistir de parar os pés na 3ª e 4ª recepções por cansaço, tocando na bola em movimento; corrija com o incentivo vocal do parceiro ('Planta os pés na última!'). Variações",
    "variacaoFacil": "Dar 5 segundos de recuperação entre cada uma das 4 bolas da bateria.",
    "variacaoDificil": "Se J1 errar qualquer um dos 4 passes ou ataques, precisa repetir aquela bola específica imediatamente até acertar para poder sair da quadra.",
    "meta": "Completar pelo menos 3 das 4 bolas da maratona com passe na Zona Alvo e ataque válido na quadra adversária."
  },
  {
    "numero": 77,
    "secao": 5,
    "nome": "Base estática e elevação suave de ombros",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 levantador L1 e 1 parceiro lançador A1)",
    "tempo": "7 minutos",
    "material": "2 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Isolar o impulso das pernas e a leve elevação de ombros no levantamento de manchete, eliminando o hábito de chicotear os braços.",
    "comoMontar": "Na meia-quadra esquerda, posicione 1 cone para o levantador (L1) no centro, a 1,5 metro da rede. Posicione 1 cone para o parceiro (A1) a 4 metros da rede na entrada esquerda. Demarque uma Zona Alvo de 1,5x1,5m na frente de A1, a 1,5 metro da rede e 1,5 metro da linha lateral.",
    "passoAPasso": [
      "L1 posiciona-se no cone central (a 1,5m da rede) com o pé direito ligeiramente à frente (virado de frente para a entrada esquerda, de costas diagonais para a rede).",
      "A1 lança a bola com as duas mãos em arco suave diretamente na linha da cintura de L1.",
      "L1 flexiona os joelhos na areia, monta a plataforma plana e NÃO balança os braços para cima.",
      "No contato com a bola, L1 apenas estende os joelhos empurrando a areia e faz um leve 'encolhimento' dos ombros para cima (em direção às orelhas), fazendo a bola subir macia.",
      "A bola deve fazer um arco de 4 metros de altura e cair dentro da Zona Alvo a 1,5m da rede; trocam de função a cada 10 bolas."
    ],
    "pontosAtencao": [
      "O pé mais próximo da rede (pé direito quando levanta para a esquerda; pé esquerdo quando levanta para a direita) deve estar meio passo à frente para impedir que a bola escape para o lado adversário.",
      "O movimento dos antebraços é de apenas 10 centímetros guiado pelos ombros; todo o resto da força vem das coxas empurrando a areia.",
      "Congele a plataforma apontando para o alvo por 1 segundo inteiro após a bola sair."
    ],
    "erroComum": "Bater seco na bola subindo os braços até a altura do rosto, fazendo a bola viajar rápida demais e sair pela antena; corrija pedindo para manter os pulsos apontados para baixo durante todo o toque. Variações",
    "variacaoFacil": "Colocar A1 parado dentro da Zona Alvo a apenas 2 metros de L1 para agarrar a bola acima da cabeça.",
    "variacaoDificil": "L1 realiza a mesma sequência do outro lado da quadra (virado para a saída de rede direita, com o pé esquerdo à frente).",
    "meta": "Colocar 8 de 10 levantamentos de manchete dentro da Zona Alvo a 1,5m da rede com arco suave e sem balançar os braços."
  },
  {
    "numero": 78,
    "secao": 5,
    "nome": "Levantamento parado com arco alto e distância segura da rede",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 atacante/passador A1 e 1 levantador L1)",
    "tempo": "8 minutos",
    "material": "3 bolas, 3 cones e 2 zonas alvo",
    "objetivo": "Calibrar a altura mínima de 4 metros e a distância de 1 a 1,5 metro da fita para que o parceiro tenha tempo de aproximar na areia sem tocar na rede.",
    "comoMontar": "Coloque L1 no centro da meia-quadra esquerda, a 2 metros da rede. Marque duas Zonas Alvo (1,5x1,5m) a 1,5 metro de distância da rede: Zona 1 na esquerda e Zona 2 na direita. Coloque 2 cones a 50 cm da rede como 'zona proibida' (muito colada na fita). A1 começa a 5 metros da rede.",
    "passoAPasso": [
      "A1 envia uma bola controlada de manchete (ou lançamento alto) dos 5 metros para as mãos de L1 aos 2 metros da rede.",
      "L1 enquadra os dois ombros de frente para a Zona Alvo 1 (esquerda), aguarda a bola descer até a linha do quadril e levanta com arco alto (pelo menos 1,5m acima do bordo superior da rede).",
      "A bola deve cair dentro da Zona Alvo 1 (entre 1m e 1,5m da rede), sem nunca invadir a faixa proibida de 50 cm da fita.",
      "Na repetição seguinte, L1 gira a base na areia de frente para a direita e levanta na Zona Alvo 2.",
      "Após 10 bolas alternadas (5 na esquerda e 5 na direita), A1 e L1 invertem as funções."
    ],
    "pontosAtencao": [
      "Na quadra dura levanta-se a 50 cm da rede; na areia isso é um erro grave porque o atacante salta para frente e toca na rede ou leva bloqueio fechado: mantenha sempre 1 a 1,5 metro de distância da fita.",
      "Sempre vire o peito e a linha dos dois pés para o alvo ANTES de tocar na bola.",
      "Um levantamento alto na areia dá tempo para o seu parceiro ler a defesa adversária."
    ],
    "erroComum": "Levantar a bola com trajetória baixa e reta ('bola chutada'), não dando tempo ao atacante de sair do fundo; corrija exigindo que a bola ultrapasse a altura do topo das antenas. Variações",
    "variacaoFacil": "Fazer 5 bolas seguidas para o mesmo lado antes de virar a base para o lado oposto.",
    "variacaoDificil": "A1 avança após o passe e salta dentro da Zona Alvo para agarrar a bola no ponto mais alto com os dois braços estendidos.",
    "meta": "Acertar 8 de 10 levantamentos dentro das Zonas Alvo (1 a 1,5m da rede) com altura superior à antena."
  },
  {
    "numero": 79,
    "secao": 5,
    "nome": "Avanço do meio da quadra para levantar bola curta",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores",
    "tempo": "8 minutos",
    "material": "4 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Sair em velocidade do meio da quadra (4,5m), estancar os dois pés na areia aos 1,5m da rede e levantar sem que a inércia da corrida jogue a bola para o outro lado.",
    "comoMontar": "Na meia-quadra esquerda, coloque 1 cone de saída para L1 a 4,5 metros da rede (lado direito) e 1 cone de ponto de levantamento a 1,5 metro da rede no centro. A1 fica a 5,5 metros da rede (lado esquerdo). Zona Alvo na entrada esquerda a 1,5m da rede.",
    "passoAPasso": [
      "L1 e A1 começam no fundo/meio da quadra (simulando a posição de recepção).",
      "A1 joga ou passa a bola alta em direção ao cone de 1,5 metro da rede.",
      "Assim que a bola sai das mãos de A1, L1 arranca do cone de 4,5 metros em diagonal até o cone de 1,5 metro da rede.",
      "Um passo antes de chegar na bola, L1 crava os dois pés na areia fofa (pé direito à frente virando o peito para a linha lateral esquerda) anulando totalmente a velocidade da corrida.",
      "Com os pés 100% parados, L1 levanta de manchete alta para a Zona Alvo de A1; trocam a cada 8 bolas."
    ],
    "pontosAtencao": [
      "Se você tocar na bola enquanto ainda está correndo em direção à rede, a bola vai passar direto por cima da fita ('bola de graça').",
      "Use os dois últimos passos ('direita-esquerda' ou 'esquerda-direita') como freio na areia e já gire o quadril de frente para o atacante.",
      "Incline a plataforma um pouco mais para trás do que o normal para compensar o seu avanço."
    ],
    "erroComum": "Correr olhando para os pés e chegar atrasado, tocando na bola quase ajoelhado em movimento; corrija fazendo L1 sair no exato instante em que a bola sobe da mão de A1. Variações",
    "variacaoFacil": "L1 começa mais perto (a 3 metros da rede) para ter mais tempo de frear os pés.",
    "variacaoDificil": "A1 avança após o passe e realiza um ataque controlado (shot) por cima da rede após o levantamento de L1.",
    "meta": "Estancar os pés e colocar 7 de 10 levantamentos na Zona Alvo sem deixar nenhuma bola passar direto para o outro lado da rede."
  },
  {
    "numero": 80,
    "secao": 5,
    "nome": "Recuo rápido da rede para levantar passe que ficou curto",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores",
    "tempo": "8 minutos",
    "material": "4 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Corrigir o erro de já ter corrido até a rede quando a recepção do parceiro fica curta no meio da quadra (aos 3,5m), recuando e levantando na paralela.",
    "comoMontar": "Posicione 1 cone junto à rede (a 1m da fita) onde L1 começa, e 1 cone a 3,5 metros da rede no centro (onde o passe curto vai cair). A1 fica a 6 metros da rede na esquerda. Demarque a Zona Alvo na entrada esquerda a 1,5m da rede.",
    "passoAPasso": [
      "L1 começa adiantado no cone a 1 metro da rede (como quem se antecipou achando que o passe viria perfeito na fita).",
      "A1 envia um passe mais curto e alto que vai cair no cone de 3,5 metros da rede.",
      "L1 abre imediatamente o quadril ficando de lado para a rede (peito virado para A1) e recua em passadas laterais/cruzadas rápidas até o cone de 3,5m.",
      "Ao chegar atrás da bola aos 3,5m, L1 planta o pé esquerdo (pé de trás) firme na areia e inclina o tronco e o ombro direito levemente em direção à rede.",
      "L1 empurra a bola em diagonal de dentro para fora para que ela caia na Zona Alvo a 1,5m da rede; trocam a cada 8 repetições."
    ],
    "pontosAtencao": [
      "Nunca recue de costas olhando para a fita: vire de lado desde o primeiro passo para enxergar a bola e o seu atacante ao mesmo tempo.",
      "Como você está levantando dos 3,5m da rede e quer colocar a bola aos 1,5m da rede, você precisa avançar o peso do pé de trás para o pé da frente em direção à Zona Alvo.",
      "Avise o parceiro em voz alta: 'Bola vindo de dentro!'."
    ],
    "erroComum": "Levantar a bola reto para a linha lateral (deixando a bola longe da rede aos 3,5m); corrija apontando o pé da frente de L1 diretamente para o cone da Zona Alvo perto da rede. Variações",
    "variacaoFacil": "L1 começa a 2 metros da rede e o passe cai a 3 metros (recuo curto de apenas 1 metro).",
    "variacaoDificil": "A1 varia sem avisar entre um passe na rede (1,5m) e um passe curto atrás de L1 (3,5m).",
    "meta": "Resgatar 7 de 10 bolas que ficaram aos 3,5m colocando-as dentro da Zona Alvo a 1,5m da rede."
  },
  {
    "numero": 81,
    "secao": 5,
    "nome": "Corrida longa do meio para o fundo: resgate na linha de 7 metros",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "4 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Perseguir uma recepção ou defesa que espirrou para o fundo da quadra (7m), girar o corpo e devolver uma bola alta e atacável perto da rede.",
    "comoMontar": "Coloque 1 cone a 2,5m da rede (posição inicial de L1) e 1 cone lá no fundo a 7 metros da rede. A1 fica a 5,5m da rede na esquerda. Demarque uma Zona Alvo de ataque a 2 metros da rede na entrada esquerda.",
    "passoAPasso": [
      "L1 aguarda aos 2,5m da rede; A1 simula uma recepção de saque viagem que espirrou alta para trás em direção ao cone de 7 metros no fundo da quadra.",
      "L1 abre o quadril e corre de frente em velocidade máxima rumo ao fundo da quadra, acompanhando a bola por cima do ombro.",
      "L1 ultrapassa a linha da bola um passo antes de ela cair aos 7 metros, planta o pé de trás quase na linha de fundo e vira o peito para a Zona Alvo lá na frente.",
      "Usando um empurrão potente das pernas na areia e transferência de tronco para frente, L1 lança a bola de manchete por 5 metros até cair na Zona Alvo (a 2m da rede).",
      "Trocam de função a cada 6 resgates de fundo."
    ],
    "pontosAtencao": [
      "No resgate do fundo da quadra (7m), não tente colocar a bola colada na fita (1m) porque qualquer erro de força faz a bola passar de graça: mire a 2 ou 2,5 metros da rede.",
      "Você precisa chegar ATRÁS da bola e virar o peito para a rede; se tentar levantar de costas lá dos 7 metros, a bola não chega na frente.",
      "Dê bastante altura (mínimo 5 metros) para que o seu parceiro tenha tempo de se posicionar."
    ],
    "erroComum": "Bater na bola ainda correndo para o fundo sem parar o pé de trás, fazendo a bola subir apenas 2 metros para frente; corrija exigindo a parada do pé direito atrás da bola antes do contato. Variações",
    "variacaoFacil": "Posicionar o cone de resgate a 5,5 metros da rede com lançamento mais alto de A1.",
    "variacaoDificil": "Após o levantamento longo de L1 do fundo, A1 precisa atacar a bola de terceira por cima da rede.",
    "meta": "Conseguir 6 de 10 levantamentos longos saindo dos 7m e caindo na Zona Alvo a 2m da rede."
  },
  {
    "numero": 82,
    "secao": 5,
    "nome": "Resgate de passe espirrado fora da linha lateral (cuidado com a antena)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "4 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Buscar a bola na área livre fora da quadra e levantá-la de volta para dentro em uma rota segura que não passe por cima nem por fora da antena.",
    "comoMontar": "Coloque 1 cone para L1 no centro da quadra (a 2,5m da rede) e 1 cone a 1,5 metro PARA FORA da linha lateral esquerda (na altura dos 3,5m da rede). Demarque a Zona Alvo dentro da quadra a 2 metros da rede e 2 metros da linha lateral. A1 começa a 5,5m da rede.",
    "passoAPasso": [
      "A1 simula um passe que escapou pela lateral esquerda em direção ao cone fora da quadra.",
      "L1 arranca do centro (2,5m), cruza a linha lateral e chega ao cone externo.",
      "Ao chegar na bola fora da quadra, L1 planta o pé esquerdo por fora da bola e aponta os ombros para dentro da quadra (em ângulo diagonal afastado da rede).",
      "L1 executa a manchete alta trazendo a bola para a Zona Alvo (a 2m da rede e 2m da lateral), garantindo que a trajetória da bola passe longe da antena.",
      "A1 ajusta a passada (entrando de dentro para fora) para receber a bola na Zona Alvo; trocam a cada 8 bolas."
    ],
    "pontosAtencao": [
      "Regra de ouro quando você levanta de fora da quadra: NUNCA levante em direção à fita da rede (1m), porque a bola vai passar exatamente por cima da antena e o árbitro vai apitar bola fora!",
      "Traga a bola sempre para 2 a 2,5 metros da rede (para dentro da quadra).",
      "Levante o ombro externo (ombro esquerdo quando está fora na esquerda) para inclinar a plataforma para o centro da quadra."
    ],
    "erroComum": "Parar de lado olhando para a antena e jogar a bola colada na rede em cima da antena; corrija pedindo para L1 mirar o levantamento no centro da quadra aos 2,5m. Variações",
    "variacaoFacil": "Colocar o cone exatamente em cima da fita da linha lateral.",
    "variacaoDificil": "Fazer o resgate a 3 metros fora da linha lateral e exigir que A1 finalize o ponto atacando na paralela.",
    "meta": "Trazer 7 de 10 bolas de fora da quadra para dentro da Zona Alvo (2x2m) sem nenhuma bola cruzar a linha da antena."
  },
  {
    "numero": 83,
    "secao": 5,
    "nome": "Levantamento lateral de manchete com inclinação de ombros",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "4 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Usar a inclinação lateral da plataforma quando a bola é baixa/rápida e o levantador só consegue chegar de frente para a linha lateral oposta.",
    "comoMontar": "Coloque L1 no cone na lateral esquerda a 2,5m da rede e o cone de contato no centro a 2m da rede. A1 fica na direita a 5,5m da rede. Demarque a Zona Alvo na direita (saída de rede) a 1,5m da fita.",
    "passoAPasso": [
      "A1 envia um passe mais rápido e baixo para o cone central (a 2m da rede).",
      "L1 sai da esquerda correndo em direção à direita (peito apontado para a linha lateral direita).",
      "Como a bola veio baixa, L1 estanca os dois pés de frente para a lateral direita (na mesma direção da Zona Alvo) ou, se a bola ficou atrás no centro, usa a manchete lateral inclinando o ombro esquerdo para baixo e o direito para cima.",
      "Na segunda metade da série, A1 pede a bola de volta na ESQUERDA (atrás da corrida de L1): L1 para os pés no centro e inclina os dois braços lateralmente para a esquerda, devolvendo a bola de manchete lateral sem precisar girar todo o corpo.",
      "Trocam de função a cada 10 bolas."
    ],
    "pontosAtencao": [
      "A manchete lateral na praia é feita mudando a altura dos ombros (abaixe o ombro para onde você quer que a bola vá e suba o ombro oposto), nunca dobrando os cotovelos.",
      "Mantenha o quadril baixo no último passo na areia para entrar por baixo da bola rápida.",
      "Evite balançar os braços para o lado como um taco de beisebol: posicione o ângulo e empurre com as pernas."
    ],
    "erroComum": "Girar o tronco violentamente batendo na bola de lado, perdendo totalmente o controle da distância da rede; corrija pedindo para travar o ângulo dos ombros antes do toque. Variações",
    "variacaoFacil": "Realizar o movimento saindo a apenas 1,5 metro do cone central.",
    "variacaoDificil": "A1 só grita 'FRENTE!' ou 'COSTAS/LADO!' quando L1 já está no meio da corrida até o centro.",
    "meta": "Acertar 7 de 10 levantamentos laterais de manchete dentro da Zona Alvo a 1,5m da rede."
  },
  {
    "numero": 84,
    "secao": 5,
    "nome": "Levantamento de manchete de costas (inversão de lado)",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (1 passador/atacante na esquerda, 1 levantador e 1 atacante/alvo na direita)",
    "tempo": "9 minutos",
    "material": "4 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Executar o levantamento de manchete para trás da cabeça com precisão quando o levantador está de costas para o parceiro ou quer enganar o bloqueio.",
    "comoMontar": "Posicione L1 no centro da quadra a 1,5 metro da rede, virado de frente para a entrada esquerda (de costas para a saída direita). Marque a Zona Alvo 1 na frente dele (esquerda) e a Zona Alvo 2 atrás das costas dele (direita), ambas a 1,5m da rede. A1 fica a 5m da rede.",
    "passoAPasso": [
      "L1 posiciona-se no centro olhando para a linha lateral esquerda; A1 envia o passe alto no centro e corre para atacar na direita (atrás das costas de L1) — ou J2 aguarda na Zona Alvo 2.",
      "L1 deixa a bola cair um pouco mais perto do peito/ombro (não tão longe à frente quanto no levantamento frontal).",
      "No momento do contato, L1 estende os joelhos, projeta o quadril levemente para frente, arqueia o topo das costas e sobe os ombros apontando os polegares para cima/trás.",
      "A bola sobe limpa por cima da cabeça de L1 e cai dentro da Zona Alvo 2 às suas costas (a 1,5m da rede).",
      "Alternam levantamentos de frente (Zona 1) e de costas (Zona 2) para manter a mesma leitura corporal; rodam a cada 8 bolas."
    ],
    "pontosAtencao": [
      "Para levantar de manchete de costas, NUNCA dobre os cotovelos tentando jogar a bola para trás (se dobrar os cotovelos, a bola bate na sua testa ou vai para a rede): mantenha os cotovelos 100% travados e arqueie a coluna torácica jogando o quadril para frente.",
      "Entre meio passo mais para debaixo da bola do que no levantamento normal.",
      "Olhe para a bola no contato e só vire o pescoço depois que a bola sair dos braços."
    ],
    "erroComum": "Jogar a cabeça para trás cedo demais antes de tocar na bola, errando o meio do antebraço; corrija mantendo o queixo firme até sentir a bola tocar no antebraço. Variações",
    "variacaoFacil": "L1 recebe a bola lançada a 2 metros de distância e foca apenas na mecânica de costas para a Zona 2.",
    "variacaoDificil": "A1 passa do meio da quadra e escolhe em silêncio correr para a Zona 1 ou para a Zona 2; L1 olha de relance antes do toque e levanta onde A1 entrou.",
    "meta": "Colocar 7 de 10 levantamentos de manchete de costas dentro da Zona Alvo 2 sem dobrar os cotovelos."
  },
  {
    "numero": 85,
    "secao": 5,
    "nome": "Ajuste de altura e distância do levantamento conforme o vento",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "10 minutos",
    "material": "5 bolas, 4 cones e 2 zonas alvo",
    "objetivo": "Adaptar a altura do arco e a mira do levantamento de manchete para neutralizar o vento lateral ou o vento que sopra contra/a favor da rede.",
    "comoMontar": "Observe a direção real do vento na arena. Monte a estação na meia-quadra esquerda com L1 no centro (a 2m da rede) e duas Zonas Alvo nas pontas (Zona Contra o Vento e Zona A Favor do Vento, ou com vento soprando da quadra para a rede).",
    "passoAPasso": [
      "Cenário 1 (Levantando CONTRA o vento lateral): quando A1 passa a bola e pede o levantamento para o lado de onde o vento vem soprando, L1 baixa o arco da bola (3,5m de altura) e empurra com 30% a mais de perna, mirando 1 metro mais para fora porque o vento vai frear e devolver a bola.",
      "Cenário 2 (Levantando A FAVOR do vento lateral): quando o levantamento vai na mesma direção do vento, L1 amortece o toque mirando no meio do caminho, pois o vento vai carregar a bola até a antena.",
      "Cenário 3 (Vento soprando das costas para a rede): L1 mira todos os levantamentos a 2 metros da rede para o vento empurrá-los até os 1,2m ideais sem passar para o bloqueio adversário.",
      "A dupla faz 6 levantamentos para o lado contra o vento e 6 para o lado a favor do vento, seguidos de chamada de ataque de A1.",
      "Invertem os papéis após as 12 bolas."
    ],
    "pontosAtencao": [
      "Na praia, quanto mais alto você levantar em dia de vendaval, mais a bola vai 'dançar' no ar e tirar o tempo de salto do seu atacante: com vento forte, levante mais baixo e tenso.",
      "O levantador deve sempre deixar a bola 'contra o vento' em relação ao atacante (para que a bola venha na direção do atacante e não fuja dele).",
      "Olhe para a fita superior da antena antes do rally para lembrar para onde a brisa está puxando."
    ],
    "erroComum": "Levantar uma bola altíssima a favor do vento, fazendo a bola passar da antena e sair da quadra; corrija reduzindo a altura do arco para apenas 1 metro acima da rede nos dias de vento forte. Variações",
    "variacaoFacil": "Treinar apenas um lado por vez com o professor indicando o ponto de mira compensado no chão.",
    "variacaoDificil": "A cada 3 bolas, a dupla troca para o outro lado da rede (mudando completamente a relação com o vento) e precisa acertar de primeira.",
    "meta": "Acertar 7 de 10 levantamentos dentro das Zonas Alvo compensando a deriva do vento sem que a bola saia pela antena."
  },
  {
    "numero": 86,
    "secao": 5,
    "nome": "Levantamento alto e descolado (2m da rede) para leitura de golpe do atacante",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (1 levantador L1, 1 atacante A1 e 1 defensor/bloqueador D1 do outro lado)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo de ataque",
    "objetivo": "Colocar a bola propositalmente a 2 metros da rede com bom arco para abrir todos os ângulos de visão e golpes para o atacante.",
    "comoMontar": "Na meia-quadra esquerda, marque a Zona de Levantamento Ideal um pouco mais afastada da rede (entre 1,8m e 2,2m da fita) na entrada esquerda. No lado direito, D1 atua como bloqueador/defensor e há 2 Zonas Alvo de ataque (Diagonal Curta e Fundo Paralela).",
    "passoAPasso": [
      "A1 passa a bola dos 5,5m para L1 no centro da quadra.",
      "L1 estabiliza os pés e levanta de manchete com 4,5 metros de altura exatamente para a Zona Descolada (a 2 metros da rede).",
      "Como a bola está a 2 metros da fita (e não colada na rede), A1 consegue saltar enxergando perfeitamente o bloqueador/defensor D1 com a visão periférica sem ficar preso no bloqueio.",
      "Quando A1 está no ar, D1 faz um movimento claro (ex.: fecha a linha paralela ou recua na diagonal).",
      "A1 usa o espaço que o levantamento descolado deu e coloca a bola (ataque ou shot de ponta de dedo rígida) na Zona Alvo que ficou vazia do outro lado."
    ],
    "pontosAtencao": [
      "Bola colada na fita na praia só permite 1 golpe (bater para baixo em cima do bloqueio); bola a 2 metros da rede permite bater forte, dar cut shot na diagonal curta ou lob por cima do bloqueio!",
      "Para o levantador: pense em deixar a bola 'no ombro de trás' do atacante para ele entrar batendo para frente.",
      "Para o atacante: não reclame de bola a 2 metros da rede — na areia, essa é a bola que mais gera ponto."
    ],
    "erroComum": "O levantador tentar 'caprichar demais' colando a bola a 30 cm da fita e trancar o próprio atacante no bloqueio de D1; corrija invalidando o ponto se o levantamento cair a menos de 1,5m da rede. Variações",
    "variacaoFacil": "D1 escolhe sua posição na quadra antes de A1 saltar para facilitar a leitura visual.",
    "variacaoDificil": "Colocar uma dupla completa do outro lado (bloqueador + defensor) reagindo ao levantamento descolado.",
    "meta": "Colocar 8 de 10 levantamentos na zona de 2 metros da rede e converter 6 de 10 ataques nas zonas livres."
  },
  {
    "numero": 87,
    "secao": 5,
    "nome": "Saída do bloqueio na rede e levantamento de transição + Ataque (Transição 1)",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (L1 bloqueador/levantador, A1 defensor/atacante e P/T atacando do outro lado)",
    "tempo": "11 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Treinar a transição clássica do vôlei de praia: o bloqueador sai da rede depois que a bola passa por ele, vira levantador de manchete no meio da quadra e prepara o contra-ataque do defensor.",
    "comoMontar": "L1 começa junto à rede (bloqueador); A1 começa no fundo a 6 metros da rede (defensor). Do outro lado da rede, P/T (professor ou 3º jogador) fica com bolas. Marque a Zona Alvo de levantamento na entrada esquerda a 1,5m da rede.",
    "passoAPasso": [
      "L1 salta para bloquear na rede (ou faz finta de bloqueio) enquanto P/T envia uma bola de ataque na diagonal para A1 no fundo.",
      "A1 defende a bola de manchete alta para o meio da sua quadra (por volta dos 3 metros da rede).",
      "Assim que L1 aterrissa do bloqueio na rede, ele vira o pescoço, localiza a defesa de A1 subindo, sai da rede em corrida rápida até o centro (3m) e para os dois pés de frente para A1.",
      "L1 executa o levantamento de manchete de transição para a Zona Alvo (a 1,5m da rede).",
      "A1, que defendeu lá no fundo, corre em transição, salta na Zona Alvo e finaliza o contra-ataque para o outro lado; rodam a cada 6 bolas."
    ],
    "pontosAtencao": [
      "No vôlei de praia, quem bloqueia na rede e não toca na bola é SEMPRE o levantador do contra-ataque: saia da rede imediatamente assim que a bola cruzar por você.",
      "Como a defesa de A1 nem sempre sobe no lugar perfeito, L1 precisa ser muito rápido de pernas para chegar debaixo da bola e parar os pés.",
      "Se L1 perceber que a defesa de A1 foi difícil e A1 caiu na areia, L1 deve levantar a bola 1 metro mais alta para dar tempo ao parceiro de levantar do chão e atacar!"
    ],
    "erroComum": "L1 ficar na rede olhando para o adversário após o bloqueio e demorar para virar para trás, chegando atrasado na defesa do parceiro; corrija exigindo que L1 já aterrisse do salto olhando para o fundo da própria quadra. Variações",
    "variacaoFacil": "L1 apenas faz a ameaça de bloqueio sem saltar antes de abrir para levantar a defesa.",
    "variacaoDificil": "P/T varia o ataque entre bola forte no fundo e largada curta, obrigando L1 a buscar o levantamento em qualquer parte da quadra.",
    "meta": "Converter 6 de 10 contra-ataques completos com levantamento de manchete preciso após o salto de bloqueio."
  },
  {
    "numero": 88,
    "secao": 5,
    "nome": "Defesa difícil, levantamento de compensação e ataque de largada/corte (Transição 2)",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (Dupla A1 + L1 contra 1 lançador/defensor P/T)",
    "tempo": "11 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Aprender a 'consertar' uma defesa que subiu longe da rede (aos 4,5m) com um levantamento de manchete que deixe o atacante em condições de pontuar.",
    "comoMontar": "Na meia-quadra esquerda, A1 na defesa (6m) e L1 retirando da rede para a paralela (5m). Coloque 1 cone aos 4,5m da rede onde a defesa deve subir. Zona Alvo de levantamento aos 1,8m da rede e Zonas de Ataque do outro lado.",
    "passoAPasso": [
      "L1 faz a retirada da rede para a paralela; P/T ataca uma bola difícil que A1 defende caindo na areia, fazendo a bola subir atrás da linha de 4,5 metros.",
      "L1 corre até o cone de 4,5m, planta o pé de trás e usa o impulso completo de pernas e tronco para empurrar o levantamento de manchete por 3 metros até a Zona Alvo perto da rede (1,8m).",
      "Enquanto a bola viaja alta no ar, A1 se levanta rápido da areia e acelera para a rede.",
      "A1 salta equilibrado e finaliza o contra-ataque usando um golpe técnico da areia: 'cut shot' (corte de punho na diagonal curta) ou 'poke' (nó dos dedos rígidos por cima do bloqueio).",
      "Realizam 6 transições e invertem quem defende e quem levanta."
    ],
    "pontosAtencao": [
      "Quando o seu parceiro está caído na areia depois de um peixinho ou defesa difícil, a pior coisa que o levantador pode fazer é levantar uma bola baixa e rápida: dê ALTURA para o seu parceiro respirar e entrar na bola!",
      "Levantar dos 4,5m até os 1,8m exige que L1 termine o movimento dando um passo à frente na direção do alvo (depois que a bola saiu do braço).",
      "Lembre-se da regra da praia no ataque final: largada com a ponta dos dedos mole é falta; use mão cheia, corte de punho ou falanges rígidas (poke/cobra)."
    ],
    "erroComum": "O levantador ter medo de empurrar a bola dos 4,5m e deixar o levantamento morrer aos 3,5m da rede, obrigando o parceiro a passar a bola de manchete; corrija premiando com ponto duplo todo levantamento que chegar na faixa de 1,5m a 2m da rede. Variações",
    "variacaoFacil": "A1 não precisa ir ao chão na defesa: apenas passa a bola alta para o cone de 4,5 metros.",
    "variacaoDificil": "P/T defende os ataques do outro lado mantendo o rally vivo até a bola cair na areia.",
    "meta": "Conseguir 6 de 10 levantamentos de compensação que cheguem na Zona Alvo (1,8m) seguidos de ataque válido."
  },
  {
    "numero": 89,
    "secao": 5,
    "nome": "Levantamento guiado pelo grito do atacante ('Ponta!' ou 'Meio!') + Ataque",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Dupla A1 + L1 contra Sacador S1 + Bloqueador B1)",
    "tempo": "11 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo na rede",
    "objetivo": "Desenvolver a sintonia auditiva e a capacidade do levantador de mudar a distância do levantamento de manchete (na antena ou no meio) conforme o pedido do atacante.",
    "comoMontar": "Na meia-quadra esquerda, marque duas Zonas Alvo de levantamento a 1,5m da rede: Zona 'Ponta' (a 1m da antena esquerda) e Zona 'Meio' (no centro da rede, perto de L1). Do outro lado, S1 saca e B1 bloqueia na rede.",
    "passoAPasso": [
      "S1 saca em direção a A1 na meia-quadra esquerda.",
      "A1 recepciona a bola para o centro da quadra onde L1 já infiltrou.",
      "Enquanto a bola da recepção está subindo (antes de L1 tocar nela), A1 lê a posição do bloqueador B1 na rede e grita em voz alta a sua escolha: 'PONTA!' (bola alongada até a Zona da antena) ou 'MEIO!' (bola curta subindo quase em cima da cabeça de L1 no centro).",
      "L1 ouve o comando e ajusta apenas o impulso das pernas na manchete: mais perna para alongar na 'Ponta', ou amortecimento vertical para subir no 'Meio'.",
      "A1 entra no ponto pedido e ataca fugindo do bloqueio de B1."
    ],
    "pontosAtencao": [
      "A chamada de 'Meio!' (bola chutada/curta no centro perto do levantador) é uma arma letal na praia porque deixa o bloqueador adversário sem saber se fecha o meio ou a antena.",
      "Para o levantador: mantenha exatamente a mesma postura até o último instante para não denunciar ao bloqueador B1 onde a bola vai.",
      "Para o atacante: o grito ('Ponta!' ou 'Meio!') precisa sair logo após a sua manchete de recepção, nunca quando o levantador já está tocando na bola."
    ],
    "erroComum": "O levantador empurrar demais a bola quando o atacante pediu 'Meio!', jogando a bola no lugar errado da corrida do parceiro; corrija na bola de 'Meio' apontando a plataforma a 80 graus quase vertical. Variações",
    "variacaoFacil": "Combinar antes do saque se a bola será na Ponta ou no Meio usando sinal visual.",
    "variacaoDificil": "Incluir uma 3ª chamada: 'CHUTADA!' (bola mais rápida e baixa na ponta para vencer o bloqueio no tempo).",
    "meta": "Acertar 7 de 10 levantamentos na zona pedida ('Ponta' ou 'Meio') com finalização de ataque efetiva."
  },
  {
    "numero": 90,
    "secao": 5,
    "nome": "Desafio do Levantador de Ouro: 3 passes quebrados + Side-out valendo ponto",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (2 contra 2 + lançamentos de dificuldade)",
    "tempo": "12 minutos",
    "material": "6 bolas, 4 cones e 1 'Caixa de Ouro' (zona alvo de 1,5x1,5m)",
    "objetivo": "Transformar três situações críticas de recepção quebrada em levantamentos de manchete perfeitos dentro da 'Caixa de Ouro' para vencer o rally sob pressão.",
    "comoMontar": "Na meia-quadra esquerda (Dupla A1 + L1), demarque a 'Caixa de Ouro' (1,5x1,5m a 1,5m da rede na entrada) e posicione 3 cones que representam os 3 passes ruins: Cone 1 (colado na rede na direita), Cone 2 (no fundo aos 6,5m) e Cone 3 (aberto fora da lateral). Dupla adversária (D1 + D2) no lado direito.",
    "passoAPasso": [
      "Cada dupla tem uma sequência de 3 bolas lançadas (pelo treinador ou por D1) exatamente nos 3 cones de sufoco, simulando passes quebrados de A1:",
      "Bola 1 (No Cone 1 - colada na rede): L1 corre, freia de lado para não tocar na fita e levanta de manchete na Caixa de Ouro para A1 atacar; o rally segue valendo ponto.",
      "Bola 2 (No Cone 2 - lá no fundo aos 6,5m): L1 recua rápido até o fundo, gira o quadril e coloca a bola de manchete lá dos 6,5m dentro da Caixa de Ouro para A1 atacar.",
      "Bola 3 (No Cone 3 - fora da lateral): L1 sai da quadra e resgata de manchete trazendo para a Caixa de Ouro sem passar pela antena, e A1 finaliza o ponto.",
      "Pontuação: se o levantamento de manchete cair na Caixa de Ouro E a dupla vencer o rally = 2 pontos; vence a dupla que somar 10 pontos primeiro."
    ],
    "pontosAtencao": [
      "Este é o teste definitivo do levantador de areia: transformar uma bola ruim (onde o adversário acha que você só vai passar de graça) em uma bola cravada na mão do seu atacante!",
      "Em todas as 3 bolas de sufoco, a prioridade número 1 de L1 é chegar cedo com as pernas para tocar na bola com a base equilibrada.",
      "O atacante A1 deve aguardar 1 segundo a mais no fundo antes de entrar, dando tempo de a bola longa chegar na Caixa de Ouro."
    ],
    "erroComum": "Tentar usar toque de dedos desequilibrado nas bolas dos cones 2 e 3 e cometer falta de condução; neste desafio é OBRIGATÓRIO usar levantamento de manchete nas 3 bolas. Variações",
    "variacaoFacil": "Realizar as 3 bolas sem bloqueio adversário na rede (apenas contra os 2 defensores no fundo).",
    "variacaoDificil": "Se L1 errar o levantamento (não colocar na zona atacável ou tocar na rede), a dupla adversária ganha 2 pontos automáticos.",
    "meta": "Colocar pelo menos 2 das 3 bolas de cada rodada dentro da Caixa de Ouro e converter 60% dos ataques."
  },
  {
    "numero": 91,
    "secao": 6,
    "nome": "Moldura das mãos e entrada embaixo da bola",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 levantador L1 e 1 lançador A1)",
    "tempo": "7 minutos",
    "material": "2 bolas e 2 cones L1 A1",
    "objetivo": "Formar a concha simétrica dos dedos acima da testa e automatizar a entrada da cabeça exatamente embaixo do eixo da bola na areia.",
    "comoMontar": "Na meia-quadra esquerda, posicione 1 cone a 1,5 metro da rede no centro (para L1) e 1 cone a 4 metros da rede na entrada esquerda (para A1).",
    "passoAPasso": [
      "L1 posiciona-se no cone central (a 1,5m da rede) com os pés afastados na largura dos ombros e o pé direito meio passo à frente.",
      "Antes de A1 lançar a bola, L1 já eleva as duas mãos 15 cm acima da testa, formando um 'triângulo/diamante' entre os polegares e indicadores, com os dedos abertos e curvos no formato da bola.",
      "A1 lança a bola em arco alto a cerca de 50 cm de distância de L1, obrigando L1 a dar 1 passo curto na areia para colocar a testa exatamente embaixo da bola.",
      "Na primeira metade (5 bolas), L1 deixa a bola encaixar na moldura das mãos acima da testa (sem deixar bater na palma) e congela por 1 segundo para checar se os dois cotovelos e punhos estão simétricos.",
      "Na segunda metade (5 bolas), L1 recebe na moldura alta e devolve com extensão coordenada de pernas e braços para A1; trocam a cada 10 bolas."
    ],
    "pontosAtencao": [
      "Na areia, se a bola for tocada na altura do queixo ou do peito, o árbitro marca condução (carregada) imediatamente: o contato é SEMPRE acima da testa.",
      "Os polegares devem apontar um para o outro (e levemente para os olhos), nunca apontados para frente.",
      "Toque na bola com as falanges dos dedos (especialmente polegar, indicador e médio), deixando um espaço oco na palma da mão."
    ],
    "erroComum": "Esperar a bola com os braços abaixados e subir as mãos atrasado enquanto a bola já está caindo no rosto; corrija exigindo que as mãos subam para a testa assim que a bola atinge o ponto mais alto do lançamento. Variações",
    "variacaoFacil": "A1 lança a bola diretamente em cima da cabeça de L1 sem exigir deslocamento.",
    "variacaoDificil": "L1 começa sentado na areia; A1 lança a bola alta, L1 levanta rápido, forma a moldura acima da testa e executa o toque.",
    "meta": "Realizar 9 de 10 entradas embaixo da bola com a moldura formada acima da testa antes do contato."
  },
  {
    "numero": 92,
    "secao": 6,
    "nome": "Toque limpo na regra da areia: zero giro",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 levantador e 1 fiscal/receptor da rotação)",
    "tempo": "8 minutos",
    "material": "2 bolas coloridas (com gomos visíveis) e 2 cones L1",
    "objetivo": "Dominar a saída simultânea das duas mãos para que a bola suba sem rodar no ar, respeitando o critério de arbitragem do vôlei de praia.",
    "comoMontar": "Coloque 2 cones frente a frente a 3,5 metros de distância no meio da meia-quadra esquerda (paralelos à rede). L1 em um cone e J2 no outro.",
    "passoAPasso": [
      "Explicação prática na areia: no vôlei de praia existem duas faltas no toque — 'Dois Toques' (quando uma mão toca antes da outra e a bola sai rodando muito) e 'Condução' (quando a bola descansa ou é empurrada de baixo para cima desde o peito).",
      "J2 lança a bola para o alto na direção de L1.",
      "L1 entra embaixo da bola, para os dois pés na areia e executa um toque elástico e único acima da testa, finalizando com as duas palmas viradas para o alvo ('congelando' o acabamento das mãos no alto).",
      "J2 observa atentamente os gomos da bola no ar: se a bola der no máximo 1 giro até chegar nele, J2 grita 'LIMPA!' (+1 ponto); se a bola vier girando rápido ou fizer barulho de tapa, J2 apita 'FALTA!'.",
      "Realizam séries de 10 toques cada um tentando zerar as faltas."
    ],
    "pontosAtencao": [
      "Para a bola sair sem giro (zero spin), a mão direita e a mão esquerda precisam aplicar exatamente a mesma pressão e sair da bola no mesmo milissegundo.",
      "Não bata seco nas pontas dos dedos (isso gera dois toques) e não afunde a bola até o nariz (isso gera condução): faça um amortecimento elástico rápido de punhos.",
      "Mantenha o acabamento das mãos estendidas apontando para o céu por 1 segundo após a bola sair."
    ],
    "erroComum": "Tirar uma mão antes da outra ou girar o punho para o lado no final do toque, fazendo a bola rodar como um pião; corrija pedindo para terminar com os dois indicadores apontando exatamente para a trajetória da bola. Variações",
    "variacaoFacil": "L1 faz um autoteste lançando a bola para si mesmo e dando um toque vertical de 3 metros de altura sem giro antes de passar para J2.",
    "variacaoDificil": "J2 lança a bola já girando muito no ar (simulando um passe com efeito), e L1 precisa 'matar o giro' com um toque limpo e simétrico.",
    "meta": "Conseguir 8 de 10 toques validados pelo parceiro como 100% limpos (sem giro e sem condução)."
  },
  {
    "numero": 93,
    "secao": 6,
    "nome": "Levantamento de toque de frente na zona ideal",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 passador/atacante A1 e 1 levantador L1)",
    "tempo": "8 minutos",
    "material": "4 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Calibrar a altura (3,5m a 4m) e a distância da rede (1,5m) no levantamento de toque frontal para o parceiro.",
    "comoMontar": "Na meia-quadra esquerda, posicione L1 no cone central a 1,5 metro da rede. A1 fica no cone a 5 metros da rede na entrada esquerda. Demarque uma Zona Alvo de 1,5x1,5m na entrada da rede (a 1,5m da fita e 1,5m da linha lateral).",
    "passoAPasso": [
      "A1 faz um passe controlado de manchete dos 5 metros em direção a L1 no centro da rede.",
      "L1 enquadra os pés e os ombros de frente para a Zona Alvo antes que a bola desça.",
      "Com a testa embaixo da bola, L1 flexiona levemente os joelhos na areia e estende pernas, cotovelos e punhos simultaneamente em um ângulo de 70 graus.",
      "A bola faz uma parábola limpa de 3,5 a 4 metros de altura e cai dentro da Zona Alvo a 1,5 metro da rede.",
      "Após 8 bolas na entrada esquerda, invertem o lado treinando para a saída direita; depois trocam de função."
    ],
    "pontosAtencao": [
      "A direção do toque é dada pelo alinhamento da sua testa, do seu umbigo e da ponta dos seus pés: aponte tudo para a Zona Alvo.",
      "Na areia fofa, se você usar apenas a força dos dedos para levantar uma bola a 3,5 metros de distância, você acaba 'empurrando/conduzindo' a bola: use o impulso dos joelhos para a bola sair rápida e limpa da mão!",
      "Mantenha a bola a 1,5 metro da rede para dar visão ampla ao atacante."
    ],
    "erroComum": "Receber a bola atrás da linha da cabeça e tentar empurrá-la para frente com o pescoço torto (condução clara); corrija dando meio passo para trás para atacar a bola de baixo para frente. Variações",
    "variacaoFacil": "A1 lança a bola com as duas mãos para garantir que ela chegue exatamente na testa de L1.",
    "variacaoDificil": "A1 avança após o passe e salta dentro da Zona Alvo para pegar a bola no ponto mais alto.",
    "meta": "Colocar 8 de 10 levantamentos de toque limpos dentro da Zona Alvo a 1,5m da rede."
  },
  {
    "numero": 94,
    "secao": 6,
    "nome": "Deslocamento para frente e parada equilibrada antes do toque",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "4 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Eliminar o hábito de tocar na bola ainda correndo na areia, aprendendo a chegar antes, cravar os dois pés e só então levantar de toque.",
    "comoMontar": "Na meia-quadra esquerda, coloque 1 cone de saída para L1 a 5 metros da rede (lado direito) e 1 cone de levantamento a 1,5 metro da rede no centro. A1 fica a 5,5m da rede na esquerda. Zona Alvo na entrada esquerda a 1,5m da rede.",
    "passoAPasso": [
      "L1 começa no fundo (5m da rede) ao lado de A1.",
      "Quando A1 passa a bola alta para o cone de 1,5m da rede, L1 dispara em velocidade pela areia fofa.",
      "Regra técnica inegociável: L1 precisa chegar no cone de 1,5m ANTES da bola descer, cravar os dois pés na areia ('um-dois' de frenagem) já virado para a Zona Alvo e fazer uma pausa visível de equilíbrio.",
      "Com o corpo 100% estático na areia, L1 executa o toque de dedos limpo para a Zona Alvo.",
      "Se L1 ainda estiver dando passo ou caindo para frente na hora do toque, o ponto é anulado; trocam a cada 8 bolas."
    ],
    "pontosAtencao": [
      "90% das faltas de toque no vôlei de praia acontecem porque o jogador tenta tocar de dedos enquanto ainda está correndo ou deslizando na areia.",
      "Corra forte nos primeiros 3 metros com os braços livres e suba as mãos para a testa apenas quando plantar os dois pés no chão.",
      "Plante o pé direito ligeiramente à frente (pé da rede) para travar a corrida e proteger a fita."
    ],
    "erroComum": "Correr devagar olhando para a bola no céu e chegar no último instante se jogando embaixo dela; corrija pedindo para olhar primeiro para o cone de destino, correr rápido e esperar a bola lá na frente. Variações",
    "variacaoFacil": "L1 sai de 3,5 metros da rede (corrida curta de apenas 2 metros).",
    "variacaoDificil": "A1 avança após o passe e finaliza a jogada com um ataque controlado por cima da rede.",
    "meta": "Realizar 7 de 10 levantamentos de toque após corrida de 3,5m com parada total dos pés e bola na Zona Alvo."
  },
  {
    "numero": 95,
    "secao": 6,
    "nome": "Deslocamento lateral e giro de ombros para o parceiro",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "4 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Correr lateralmente para buscar um passe deslocado e girar os ombros no último apoio para não levantar de toque com o tronco torto.",
    "comoMontar": "Coloque L1 no centro da rede (a 1,5m da fita) e coloque 1 cone de passe deslocado perto da linha lateral direita (a 2m da rede e 1m da lateral). A1 começa na esquerda (a 5,5m da rede). Demarque a Zona Alvo para A1 na entrada esquerda a 1,5m da rede.",
    "passoAPasso": [
      "A1 passa a bola deslocada para o lado direito da quadra (em direção ao cone lateral direito).",
      "L1 está no centro e precisa correr 3 metros para a direita (de costas para A1).",
      "Ao se aproximar do cone lateral direito, L1 NÃO toca na bola virado para fora da quadra: no último passo na areia, L1 planta o pé direito por fora da bola e gira 180 graus o quadril e os ombros de frente para A1 (na esquerda).",
      "Já enquadrado de frente para a Zona Alvo esquerda, L1 executa um levantamento de toque longo atravessando a quadra até a Zona Alvo de A1.",
      "Trocam de função a cada 8 repetições."
    ],
    "pontosAtencao": [
      "Se você tentar levantar de toque com os ombros virados para um lado e empurrar as mãos para o outro (torcendo os punhos), o árbitro de praia vai marcar dois toques na hora!",
      "Na praia, os seus dois ombros e os seus dois quadris precisam apontar como um farol exatamente para onde você vai mandar o toque.",
      "Use bastante impulso das pernas na areia porque a bola vai viajar 5 metros de uma ponta à outra."
    ],
    "erroComum": "Parar de lado e jogar a bola 'de orelha' (puxando as mãos para o lado da cabeça); corrija exigindo que o peito de L1 termine apontado diretamente para a Zona Alvo. Variações",
    "variacaoFacil": "Reduzir a distância do passe deslocado para apenas 1,5 metro do centro.",
    "variacaoDificil": "A1 alterna sem avisar se quer a bola longa na entrada esquerda ou se vai correr atrás de L1 para bater na direita.",
    "meta": "Conseguir 7 de 10 levantamentos longos de toque sem falta de giro após o deslocamento lateral e rotação de ombros."
  },
  {
    "numero": 96,
    "secao": 6,
    "nome": "Recuo em diagonal e toque de dentro para fora (a 4 metros da rede)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "4 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Recuar quando o passe fica no meio da quadra (4m), posicionar a cabeça embaixo da bola e empurrar o toque em diagonal até a rede sem conduzir.",
    "comoMontar": "Na meia-quadra esquerda, posicione L1 no cone a 1,5m da rede e coloque um segundo cone a 4 metros da rede no centro. A1 fica a 6m da rede na esquerda. Demarque a Zona Alvo na entrada esquerda a 1,5m da rede.",
    "passoAPasso": [
      "L1 começa perto da rede (1,5m); A1 envia uma recepção alta que fica curta no meio da quadra (no cone de 4 metros da rede).",
      "L1 abre o quadril e recua rápido até o cone de 4 metros, ultrapassando meio passo a linha da bola.",
      "Antes do toque, L1 planta o pé esquerdo atrás e aponta o pé direito e os dois ombros em diagonal para a Zona Alvo perto da rede.",
      "Quando a bola chega acima da testa, L1 transfere o peso das pernas de trás para frente e executa um toque limpo e firme que viaja dos 4 metros até cair a 1,5 metro da rede na Zona Alvo.",
      "Trocam de função a cada 8 bolas."
    ],
    "pontosAtencao": [
      "Para mandar um toque dos 4 metros até a rede sem 'carregar' a bola nas mãos, o segredo é transferir o peso do corpo do pé de trás para o pé da frente no momento exato do contato.",
      "Não deixe a bola cair atrás da sua testa durante o recuo: você precisa recuar MAIS RÁPIDO que a bola para atacá-la de trás para frente.",
      "Mantenha o arco alto para que o atacante consiga ajustar o tempo da bola que vem de trás."
    ],
    "erroComum": "Tocar na bola ainda andando de costas com o peso nos calcanhares, fazendo a bola subir frouxa ou ser conduzida; corrija exigindo que após o toque L1 dê 1 passo para FRENTE na direção da Zona Alvo. Variações",
    "variacaoFacil": "Posicionar o cone de recuo a 3 metros da rede.",
    "variacaoDificil": "A1 ataca a bola levantada dos 4 metros mirando nos cantos da quadra adversária.",
    "meta": "Colocar 7 de 10 levantamentos de toque saindo dos 4m dentro da Zona Alvo a 1,5m da rede sem cometer condução."
  },
  {
    "numero": 97,
    "secao": 6,
    "nome": "Levantamento de toque de costas (inversão de jogo)",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (ou 2 jogadores com troca de corredor do atacante)",
    "tempo": "10 minutos",
    "material": "4 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Executar o toque de costas limpo acima da testa para inverter o lado do ataque ou alimentar o parceiro que trocou de corredor.",
    "comoMontar": "Na meia-quadra esquerda, posicione L1 no centro a 1,5m da rede olhando para a entrada esquerda (Zona Alvo 1). Atrás das costas de L1, marque a Zona Alvo 2 na saída direita (a 1,5m da rede). A1 começa no meio- fundo (a 5,5m da rede).",
    "passoAPasso": [
      "A1 passa a bola alta para L1 no centro da rede e imediatamente corre para atacar na saída direita (atrás das costas de L1).",
      "L1 mantém o corpo alinhado olhando para a Zona Alvo 1 (esquerda), mas deixa a bola entrar 5 centímetros mais para trás (exatamente acima do topo da testa/cabelo).",
      "No contato, L1 empurra a areia com as pernas, projeta levemente o quadril à frente, arqueia o alto das costas e estende os braços para cima e para trás, virando os polegares para trás.",
      "A bola sai limpa e sem giro por cima da cabeça de L1, caindo dentro da Zona Alvo 2 para A1.",
      "Para treinar o disfarce tático, A1 varia a chamada: se gritar 'FRENTE!', corre para a Zona 1; se gritar 'BOLA DE COSTAS!', corre para a Zona 2."
    ],
    "pontosAtencao": [
      "No toque de costas na praia, a arbitragem observa muito se as duas mãos saem juntas: não jogue um ombro mais alto que o outro; suba os dois braços simétricos.",
      "Se a bola não estiver 100% em cima da sua cabeça (se ela tiver ficado longe à sua frente), NÃO tente puxar de toque para trás porque é condução certa — nesse caso, levante para frente ou use a manchete.",
      "Congele os braços estendidos para o alto/trás no final do movimento."
    ],
    "erroComum": "Jogar o pescoço e a cabeça violentamente para trás antes de tocar na bola, perdendo a referência; corrija mantendo o olhar na bola debaixo dela e acompanhando apenas com os olhos. Variações",
    "variacaoFacil": "Trabalhar apenas o toque de costas parado com bolas lançadas na mão de L1.",
    "variacaoDificil": "Adicionar 1 defensor do outro lado da rede que tenta adivinhar se L1 vai levantar de frente ou de costas.",
    "meta": "Acertar 7 de 10 levantamentos de toque de costas limpos (sem giro da bola) dentro da Zona Alvo 2."
  },
  {
    "numero": 98,
    "secao": 6,
    "nome": "Decisão rápida no ar: toque ou manchete?",
    "nivel": "Intermediário",
    "jogadores": "2 ou 3 jogadores (1 lançador/passador variando a bola, 1 levantador e 1 atacante)",
    "tempo": "10 minutos",
    "material": "6 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Desenvolver o filtro mental instantâneo para usar o toque apenas nas bolas favoráveis e abortar para a manchete nas bolas baixas, rápidas ou sujas.",
    "comoMontar": "Na meia-quadra esquerda, L1 começa a 3 metros da rede no lado direito. A1 (ou o treinador) fica a 5,5m da rede na esquerda com um cesto de bolas. Zona Alvo na entrada esquerda a 1,5m da rede.",
    "passoAPasso": [
      "Regra de Ouro do Levantador de Praia: você NUNCA decide que vai levantar de toque antes de ver como o passe saiu do braço do seu parceiro!",
      "A1 envia bolas variadas para o centro da quadra misturando dois tipos de passe sem avisar:",
      "Tipo A ('Bola Limpa'): passe alto, com pouco giro e onde L1 consegue parar os dois pés com a testa embaixo da bola -> L1 é OBRIGADO a levantar de TOQUE.",
      "Tipo B ('Bola Armadilha'): passe baixo na linha do peito, passe rápido chutado, bola girando muito no vento ou bola que obriga L1 a tocar nela ainda correndo -> L1 é OBRIGADO a abortar as mãos altas e levantar de MANCHETE.",
      "Sistema de pontuação: acertar a escolha técnica + colocar na Zona Alvo = +1 ponto; tentar dar toque numa 'Bola Armadilha' e cometer falta = -2 pontos!"
    ],
    "pontosAtencao": [
      "Essa tomada de decisão evita 95% dos pontos perdidos de graça por infração de toque em torneios de vôlei de praia.",
      "Corra para a bola com as mãos na altura do peito (prontas tanto para subir para a testa no toque quanto para fechar os antebraços na manchete).",
      "Se você chegou atrasado e um dos pés ainda está no ar, feche a manchete sem hesitar."
    ],
    "erroComum": "Teimosia técnica: já correr com as mãos na testa querendo dar toque de qualquer jeito e tentar pegar de dedos uma bola na altura do queixo; corrija gritando 'ABORTA!' quando o passe sair baixo. Variações",
    "variacaoFacil": "A1 grita 'ALTA!' ou 'BAIXA!' no momento em que solta a bola para ajudar na velocidade de reação inicial.",
    "variacaoDificil": "A1 faz a recepção real de saques difíceis vindos do outro lado da rede, gerando passes imprevisíveis reais para L1 decidir.",
    "meta": "Tomar a decisão correta em 9 de 10 bolas, colocando pelo menos 7 na Zona Alvo com zero faltas de toque."
  },
  {
    "numero": 99,
    "secao": 6,
    "nome": "Toque de dedos com vento contra e vento a favor",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Ajustar o tempo de espera da bola e a firmeza da extensão dos dedos quando o vento sopra contra ou a favor do levantamento.",
    "comoMontar": "Identifique a direção do vento na quadra. Posicione L1 no centro da rede (1,5m) e marque a Zona Alvo 1 (lado para onde o vento sopra CONTRA o levantamento) e a Zona Alvo 2 (lado para onde o vento sopra A FAVOR do levantamento).",
    "passoAPasso": [
      "Detalhe técnico vital: o vento afeta a bola ANTES mesmo de ela tocar na sua mão (na descida do passe) e DEPOIS que ela sai da sua mão.",
      "Nos primeiros 6 levantamentos (para a Zona 1 - CONTRA o vento): L1 espera um milissegundo a mais porque o vento empurra a bola que está caindo em cima dele, e executa um toque mais firme, rápido e com arco mais baixo (3 metros) para furar o vento.",
      "Nos 6 levantamentos seguintes (para a Zona 2 - A FAVOR do vento): L1 dá meio passo para frente buscando a bola e faz um toque curto e suave para o alto, deixando o vento carregar a bola até a Zona Alvo 2.",
      "Durante todo o exercício, L1 mantém os pés 100% plantados na areia para não deixar o vento causar um contato assimétrico nas mãos.",
      "Trocam de função após as 12 bolas."
    ],
    "pontosAtencao": [
      "O maior perigo do toque em dia de vento é a bola mudar de lugar nos últimos 20 centímetros antes de tocar nos seus dedos, fazendo ela pegar só em uma mão (dois toques): olhe fixamente para a bola até ela encaixar nos 10 dedos.",
      "Com vento forte contra, empurre mais com as pernas na areia para não ser tentado a 'conduzir' a bola com os braços.",
      "Deixe os dedos um pouco mais firmes (tensão muscular) nos dias de vento."
    ],
    "erroComum": "Relaxar demais os dedos no vento e a bola bater torta no polegar fazendo barulho e girando; corrija pedindo uma moldura mais compacta e firme acima da testa. Variações",
    "variacaoFacil": "Treinar apenas o toque curto a 2 metros de distância do parceiro para sentir o efeito do vento na bola.",
    "variacaoDificil": "A1 ataca todas as bolas levantadas, avaliando se o levantamento não fugiu da antena com o vento.",
    "meta": "Colocar 7 de 10 levantamentos de toque limpos nas Zonas Alvo (somando contra e a favor do vento)."
  },
  {
    "numero": 100,
    "secao": 6,
    "nome": "Toque com vento lateral (segurando a bola dentro da quadra)",
    "nivel": "Avançado",
    "jogadores": "2 ou 3 jogadores",
    "tempo": "10 minutos",
    "material": "5 bolas, 3 cones e 1 zona alvo",
    "objetivo": "Compensar o vento que sopra das costas do levantador para a rede (ou da rede para a quadra), mantendo o toque na distância perfeita da fita.",
    "comoMontar": "Escolha o lado da quadra onde o vento sopra da linha de fundo em direção à rede (vento pelas costas) ou da rede para o fundo. L1 no centro (a 2m da rede), A1 na entrada (5,5m) e Zona Alvo a 1,5m da rede.",
    "passoAPasso": [
      "Quando o vento sopra das costas da dupla em direção à rede, qualquer levantamento de toque normal é empurrado pelo vento para cima da fita ou para a mão do bloqueador adversário.",
      "A1 passa a bola para o centro; L1 se posiciona virado em diagonal (apontando o ombro direito levemente para DENTRO da própria quadra, aos 2,5m da rede, e não para a fita).",
      "L1 executa o toque limpo mirando a 2,5 metros da rede: enquanto a bola sobe e desce, o vento a empurra 1 metro para frente e ela cai exatamente na Zona Alvo aos 1,5m da rede.",
      "Em seguida, trocam de lado na quadra (agora o vento sopra da rede para o fundo): L1 mira o toque mais perto da fita (a 80 cm) para que o vento a traga para os 1,5m ideais.",
      "A1 faz a aproximação e salta para pegar ou atacar a bola no ponto ajustado."
    ],
    "pontosAtencao": [
      "O segredo da compensação de vento no toque de praia é: NUNCA entorte os punhos para compensar o vento!",
      "Gire os seus PÉS e os seus OMBROS para o ponto compensado e faça o toque reto na direção do seu peito.",
      "Se você tentar jogar a bola para trás/lado só mexendo a munheca, o árbitro apita condução.",
      "Comunique com o atacante: 'Tô segurando ela pra dentro por causa do vento!'."
    ],
    "erroComum": "Mirar direto na Zona Alvo ignorando o vento de costas e jogar a bola para o outro lado da rede; corrija colocando um cone de 'mira de pés' a 2,5m da rede para L1 apontar o corpo. Variações",
    "variacaoFacil": "Manter a dupla no mesmo lado da quadra por 8 bolas seguidas até calibrar o ângulo dos pés.",
    "variacaoDificil": "Trocar de lado da quadra a cada 3 bolas com ataque real contra bloqueio.",
    "meta": "Acertar 7 de 10 levantamentos de toque dentro da Zona Alvo (1,5m) usando o alinhamento compensado dos pés."
  },
  {
    "numero": 101,
    "secao": 6,
    "nome": "Bola de segunda de toque limpa no fundo da quadra",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (A1 passador, L1 levantador e D1 defensor adversário)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo no fundo adversário L1 A1 D1",
    "objetivo": "Usar a finta de levantamento de toque para enviar a bola de segunda nos cantos do fundo adversário cumprindo a regra da trajetória perpendicular aos ombros.",
    "comoMontar": "Na meia-quadra esquerda, A1 a 5,5m da rede e L1 próximo à rede (a 1,5m). Na meia-quadra direita, D1 posiciona-se no meio e há duas Zonas Alvo nos dois cantos da linha de fundo (a 7,5m da rede).",
    "passoAPasso": [
      "Atenção máxima à Regra do Vôlei de Praia para Bola de Segunda de Toque: você SÓ pode passar a bola para o outro lado de toque se o toque não for conduzido/girado E se a trajetória da bola for PERPENDICULAR à linha dos seus ombros (direto para frente ou direto para trás de você), a menos que você esteja tentando levantar para o seu parceiro!",
      "A1 faz uma recepção alta que chega perto da rede (a 1m ou 1,5m da fita).",
      "Para passar a bola de segunda dentro da regra, L1 tem duas técnicas legítimas que vai alternar:",
      "Técnica 1 (Giro de última hora): L1 entra embaixo da bola, gira os pés e os dois ombros de frente para o canto do fundo adversário no último instante e executa um toque alto e limpo reto à sua frente na Zona Alvo do fundo.",
      "Técnica 2 (Toque de costas / em direção ao parceiro com vento): L1 fica de costas para o canto fundo adversário (de frente para A1) e dá um toque de costas limpo e alto que passa por cima do bloqueio e cai na Zona Alvo de fundo."
    ],
    "pontosAtencao": [
      "O que é FALTA na bola de segunda de toque na praia?",
      "Ficar de frente para a linha lateral (como se fosse levantar para o parceiro) e entortar as mãos de lado jogando a bola para o outro lado da rede — isso é falta imediata!",
      "Se quiser passar de toque para o outro lado, vire os dois ombros de frente (ou de costas) para o alvo adversário e faça um toque alto de trajetória de levantamento.",
      "Se não der tempo de virar os ombros, use o 'poke' (nó dos dedos) ou uma cortada de mão aberta!"
    ],
    "erroComum": "Virar apenas o pescoço e o punho jogando a bola de lado por cima da rede (infração clássica de quem vem do vôlei de quadra); corrija exigindo que o peito ou as costas de L1 apontem 100% para a Zona Alvo no fundo. Variações",
    "variacaoFacil": "Treinar primeiro apenas a Técnica 1 (enquadrar o peito para o canto de fundo adversário e tocar alto lá atrás).",
    "variacaoDificil": "D1 no outro lado tenta ler os ombros de L1: se D1 recuar cedo, L1 levanta normal para A1 atacar; se D1 ficar parado ou correr para bloquear A1, L1 passa de segunda no fundo.",
    "meta": "Acertar 6 de 10 bolas de segunda de toque nos cantos de fundo com 100% de aprovação na regra (ombros alinhados e toque limpo)."
  },
  {
    "numero": 102,
    "secao": 6,
    "nome": "Sequência completa: recepção, toque de frente e ataque (Side-out 1)",
    "nivel": "Avançado",
    "jogadores": "3 ou 4 jogadores (Dupla A1 + L1 contra Sacador S1 + Bloqueador B1)",
    "tempo": "11 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo de ataque",
    "objetivo": "Executar o side-out completo aproveitando uma recepção alta para levantar de toque com ritmo acelerado ou bola na antena, vencendo o bloqueio.",
    "comoMontar": "No lado direito: S1 na linha de saque e B1 na rede para bloquear. No lado esquerdo: A1 e L1 a 5,5m da rede. Marque duas Zonas Alvo de Ataque no lado direito (Paralela e Diagonal).",
    "passoAPasso": [
      "S1 saca em direção a A1 na meia-quadra esquerda.",
      "A1 faz uma recepção alta e controlada para o centro da quadra (a 1,5m da rede).",
      "L1 infiltra rápido, estanca os dois pés na areia embaixo da bola e levanta de toque limpo de frente para A1.",
      "Como o levantamento de toque segura o bloqueador B1 no meio por mais tempo (pois o toque sai mais rápido da mão do que a manchete), A1 faz a chamada agressiva e ataca na paralela ou diagonal livre.",
      "A cada 6 side-outs (3 passando com A1 e 3 passando com L1), as duplas invertem de lado."
    ],
    "pontosAtencao": [
      "A grande vantagem de dominar o levantamento de toque no side-out é poder levantar uma bola um pouco mais 'esticada' (3 metros de altura) que chega na antena antes de o bloqueador adversário conseguir sair da rede ou fechar o canto.",
      "Mesmo acelerando um pouco a bola, nunca a deixe colada na fita: mantenha a linha de 1,2m a 1,5m da rede.",
      "Se a recepção de A1 sair ruim ou baixa, L1 aplica o aprendizado do exercício 098 e usa a manchete."
    ],
    "erroComum": "Tentar acelerar demais o levantamento de toque ('bola chutada de quadra') enquanto o parceiro ainda está preso na areia lá nos 5 metros; corrija olhando de relance para o parceiro antes de decidir a altura da bola. Variações",
    "variacaoFacil": "S1 saca controlado por cima e B1 apenas marca bloqueio passivo na rede.",
    "variacaoDificil": "L1 varia entre levantar para A1 na ponta ou inverter de toque de costas caso A1 chame a troca de corredor ('Cruza!').",
    "meta": "Converter 7 de 10 side-outs usando levantamento de toque limpo e ataque certeiro nas zonas alvo."
  },
  {
    "numero": 103,
    "secao": 6,
    "nome": "Defesa no fundo, transição e levantamento de toque no contra-ataque",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (A1 defensor/atacante, L1 bloqueador/levantador e P/T atacando do outro lado)",
    "tempo": "11 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Transformar uma boa defesa de fundo em um levantamento de toque de transição que coloca o parceiro no ponto alto sobre a rede.",
    "comoMontar": "Na meia-quadra esquerda, L1 começa na rede (bloqueando) e A1 começa a 6 metros da rede (defendendo). P/T fica do outro lado da rede com bolas. Zona Alvo de levantamento a 1,5m da rede na entrada.",
    "passoAPasso": [
      "L1 salta no bloqueio (ou faz a retirada rápida); P/T ataca uma bola firme na diagonal em cima de A1.",
      "A1 amortece a pancada defendendo a bola bem alta (5 metros de altura) para o centro da quadra (entre 2m e 3m da rede).",
      "Como a bola defendida por A1 subiu alta, L1 sai da rede em sprint curto, chega embaixo da bola com tempo de sobra e planta os dois pés na areia.",
      "Em vez de usar a manchete comum, L1 aproveita a altura da defesa, arma a moldura acima da testa e entrega um levantamento de toque perfeito na Zona Alvo para A1.",
      "A1 faz a aproximação do fundo e crava o contra-ataque na quadra de P/T; rodam a cada 6 bolas."
    ],
    "pontosAtencao": [
      "Bolas que sobem muito alto na defesa (4 a 6 metros de altura) ganham velocidade na queda: quando usar o toque de dedos nessa bola, flexione os joelhos JUNTOS com a entrada da bola nas mãos para amortecer sem fazer barulho de tapa!",
      "Dobre levemente os cotovelos e os joelhos de forma elástica e já empurre para o alto em um movimento contínuo (sem parar a bola lá embaixo).",
      "Esse levantamento de toque na transição dá uma precisão absurda para o defensor que vem cansado do fundo."
    ],
    "erroComum": "Esperar a bola que cai de 6 metros de altura com os braços e dedos duros, fazendo a bola bater e espirrar nos dedos (dois toques); corrija amortecendo com as pernas no instante do contato. Variações",
    "variacaoFacil": "P/T lança a bola em arco para A1 defender com tranquilidade no centro.",
    "variacaoDificil": "P/T ataca forte variando diagonal e paralela, e depois tenta defender o contra-ataque de A1.",
    "meta": "Completar 6 de 10 contra-ataques com levantamento de toque limpo na transição após defesa real."
  },
  {
    "numero": 104,
    "secao": 6,
    "nome": "Desafio sob pressão: Side-out com toque limpo valendo ponto dobrado",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (2 contra 2 em jogo condicionado)",
    "tempo": "12 minutos",
    "material": "5 bolas e 4 cones",
    "objetivo": "Incentivar o uso confiante e limpo do levantamento de toque em situação real de jogo sob pressão de arbitragem rigorosa.",
    "comoMontar": "Quadra oficial 16x8m pronta para jogo 2x2 entre Dupla A (lado esquerdo) e Dupla B (lado direito).",
    "passoAPasso": [
      "Disputa de um set até 15 pontos com regra especial de pontuação para o levantamento de toque:",
      "Regra 1 (Bônus de Toque): todo ponto de side-out ou contra-ataque vencido após um levantamento de TOQUE DE DEDOS 100% limpo vale 2 PONTOS no placar!",
      "Regra 2 (Segurança de Manchete): pontos vencidos com levantamento de manchete valem 1 ponto normal.",
      "Regra 3 (Rigor da Praia): se o jogador tentar levantar de toque (buscando os 2 pontos) e a bola sair girando mais de 1 volta ou for conduzida, a dupla adversária (ou o professor) grita 'SUJA!' e a dupla que cometeu a falta PERDE 1 ponto e entrega o saque.",
      "As duplas precisam equilibrar coragem técnica (entrar rápido com as pernas para ganhar 2 pontos no toque) e inteligência (usar a manchete quando o passe não permitir o toque)."
    ],
    "pontosAtencao": [
      "Para ganhar os 2 pontos do toque sob pressão, o passador/defensor precisa ajudar o parceiro mandando a primeira bola alta no meio da quadra.",
      "O levantador deve gritar cedo 'VOU DE TOQUE!' quando vê que já está com os dois pés plantados embaixo da bola.",
      "Não force o toque quando estiver desequilibrado na areia fofa com placar apertado."
    ],
    "erroComum": "Querer ganhar 2 pontos em todas as bolas e forçar o toque em recepções baixas ou longe do corpo, perdendo pontos por falta; corrija lembrando a regra do exercício 098 ('Pés parados e bola alta = Toque; correndo ou bola baixa = Manchete'). Variações",
    "variacaoFacil": "A falta de toque apenas dá 1 ponto normal ao adversário sem descontar do placar acumulado.",
    "variacaoDificil": "Nos últimos 3 pontos do set (a partir do 12º ponto), a dupla SÓ pode fechar o jogo através de um ponto construído com levantamento de toque limpo.",
    "meta": "Conquistar pelo menos 3 ataques de 2 pontos (construídos com toque limpo) por set mantendo menos de 2 faltas de toque."
  },
  {
    "numero": 105,
    "secao": 7,
    "nome": "Ritmo de passada de 3 passos e salto vertical na areia fofa",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 atacante A1 e 1 levantador/referência L1)",
    "tempo": "7 minutos",
    "material": "2 bolas, 4 cones e 1 zona alvo de salto",
    "objetivo": "Automatizar a passada de 3 apoios (esquerda-direita-esquerda para destros) na areia, transformando o avanço em salto estritamente vertical sem invadir a rede.",
    "comoMontar": "Na meia-quadra esquerda, posicione 1 cone de saída a 4,5 metros da rede (entrada esquerda) e demarque uma Zona de Decolagem com cones a 1,5 metro da rede. L1 fica no centro a 1,5m da rede segurando uma bola no alto.",
    "passoAPasso": [
      "A1 posiciona-se no cone de 4,5 metros com o pé direito levemente à frente (para atacantes destros; canhotos invertem os pés).",
      "Passo 1 (Direcionamento): A1 dá um passo curto com o pé esquerdo na direção da bola.",
      "Passos 2 e 3 (Chamada 'Direita-Esquerda'): A1 acelera os dois últimos passos quase simultâneos na areia, levando os dois braços estendidos bem para trás do quadril.",
      "Decolagem: A1 planta os dois pés paralelos dentro da Zona de Decolagem (a 1,5m da rede), lança os dois braços com força para cima e salta verticalmente para tocar na bola erguida por L1, caindo no mesmo buraco de onde pulou.",
      "Após 8 saltos na entrada esquerda, A1 faz 8 saltos na saída direita; depois troca com L1."
    ],
    "pontosAtencao": [
      "Na areia fofa, se você cravar apenas o calcanhar no penúltimo passo como na quadra dura, o seu pé afunda 15 cm e você perde o salto: apoie a planta inteira dos dois pés quase juntos na areia.",
      "Os dois braços precisam subir juntos como uma alavanca para tirar o peso do corpo da areia.",
      "Salte para CIMA e não para frente: o ponto de aterrissagem na areia deve ser o mesmo ponto da decolagem."
    ],
    "erroComum": "Saltar para a frente ('salto em distância') e cair quase encostando a barriga na rede; corrija olhando as marcas na areia e exigindo que os pés aterrissem dentro da Zona de Decolagem a 1,5m da fita. Variações",
    "variacaoFacil": "Desenhar dois círculos na areia aos 1,5m da rede onde os dois últimos pés devem pisar antes de subir.",
    "variacaoDificil": "L1 lança a bola para o alto a 1,5m da rede e A1 precisa coordenar o início dos 3 passos com a queda da bola para agarrá-la no ponto mais alto.",
    "meta": "Executar 9 de 10 chamadas de 3 passos aterrissando equilibrado exatamente no mesmo ponto da decolagem (a 1,5m da rede)."
  },
  {
    "numero": 106,
    "secao": 7,
    "nome": "Passada curta e explosiva de 2 passos na areia",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (A1 atacante e L1 levantador)",
    "tempo": "7 minutos",
    "material": "3 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Dominar a chamada curta de apenas 2 passos ('direita-esquerda' para destros), ideal para bolas levantadas perto do atacante ou quando a areia é muito fofa.",
    "comoMontar": "Na meia-quadra esquerda, posicione 1 cone de espera mais próximo da rede (a 3 metros da fita, na entrada esquerda). L1 fica no centro a 1,5m da rede. Zona Alvo de queda da bola no centro da quadra adversária.",
    "passoAPasso": [
      "A1 aguarda no cone de 3 metros da rede em base baixa e viva, esperando a definição do levantamento de L1.",
      "L1 lança (ou levanta) a bola a 1,5 metro da rede.",
      "Como A1 esperou até a bola subir, ele usa a passada rápida de 2 apoios: dá um passo explosivo com o pé direito levando os braços para trás e imediatamente fecha o pé esquerdo ao lado.",
      "Impulsiona a areia com as duas pernas e os dois braços subindo rápido, agarra a bola no topo do salto e a arremessa com as duas mãos por cima da rede na Zona Alvo adversária.",
      "Realizam 8 repetições e invertem as funções."
    ],
    "pontosAtencao": [
      "No vôlei de praia, a passada de 2 passos é muito usada porque você primeiro espera ver onde o vento vai levar o levantamento e só explode no último segundo.",
      "Mesmo sendo apenas 2 passos, o balanço duplo dos braços (para trás no 1º passo e para cima no 2º) é obrigatório para ganhar altura.",
      "Mantenha o peito levemente aberto para o levantador (em diagonal de 45 graus para a rede)."
    ],
    "erroComum": "Pular de um pé só na areia por pressa nos 2 passos; corrija exigindo o som simultâneo dos dois pés empurrando a areia antes da subida. Variações",
    "variacaoFacil": "Fazer os 2 passos sem bola, focando no ritmo verbal 'UM- DOIS-SOBE!'.",
    "variacaoDificil": "L1 varia a altura do lançamento (ora mais baixo, ora mais alto), exigindo que A1 espere no cone de 3m antes de dar os 2 passos.",
    "meta": "Completar 8 de 10 entradas de 2 passos no tempo exato da bola arremessando do ponto mais alto na Zona Alvo."
  },
  {
    "numero": 107,
    "secao": 7,
    "nome": "Mecânica do braço ('arco e flecha') e contato alto com autolançamento",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (trabalhando na linha de 3 metros em direção ao outro lado)",
    "tempo": "8 minutos",
    "material": "4 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Coordenar a abertura de peito ('arco e flecha'), o ponto de impacto com o braço totalmente estendido e a quebrada de punho na cortada.",
    "comoMontar": "Coloque 2 cones a 2,5 metros da rede na meia-quadra esquerda (um na esquerda para J1 e outro na direita para J2). Na meia-quadra direita, demarque duas Zonas Alvo a 5 metros da rede.",
    "passoAPasso": [
      "J1 e J2 posicionam-se nos cones a 2,5m da rede segurando uma bola cada um.",
      "Ainda com os pés na areia (ou com um pequeno salto vertical), lançam a bola 1 metro acima e levemente à frente do ombro de ataque.",
      "Armam o movimento de 'arco e flecha': a mão não dominante aponta para a bola no alto (mira) enquanto o cotovelo do braço de ataque puxa alto para trás da linha da orelha, abrindo o peito.",
      "Giram o tronco e golpeiam a bola no ponto mais alto possível com a palma da mão aberta, envolvendo a parte superior da bola com o punho para fazê-la girar para frente (topspin).",
      "A bola cruza a rede e cai dentro da Zona Alvo adversária; buscam as bolas e repetem 10 vezes."
    ],
    "pontosAtencao": [
      "Regra fundamental da praia: bater na bola com a mão aberta em movimento rápido de percussão (cortada) é 100% legal!",
      "Só é falta se você empurrar ou conduzir a bola com os dedos moles.",
      "Bata na bola sempre À FRENTE do seu ombro de ataque (às '11 horas' do relógio), nunca atrás da cabeça.",
      "A mão guia (mão esquerda para os destros) puxa para o peito enquanto a mão direita sobe para bater."
    ],
    "erroComum": "Bater na bola com o cotovelo dobrado ('braço de dinossauro'), mandando a bola na rede; corrija pedindo para tentar 'alcançar o céu' com o braço esticado no impacto. Variações",
    "variacaoFacil": "Executar a batida com os dois pés plantados na areia a 3 metros da rede até sentir a mão envolver a bola com topspin.",
    "variacaoDificil": "Autolançar a bola mais alta, dar os 2 passos na areia, saltar e bater no topo do salto.",
    "meta": "Acertar 8 de 10 cortadas com braço totalmente estendido e rotação topspin dentro da Zona Alvo."
  },
  {
    "numero": 108,
    "secao": 7,
    "nome": "Cortada de mão aberta a partir de bola lançada pelo levantador",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 levantador L1 e 1 atacante A1)",
    "tempo": "8 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Sincronizar a chamada de pés na areia com a bola que vem da mão do parceiro, batendo firme no centro da quadra adversária.",
    "comoMontar": "Na meia-quadra esquerda, L1 fica no centro a 1,5m da rede com o cesto de bolas. A1 começa no cone a 4 metros da rede na entrada esquerda. Demarque uma grande Zona Alvo central (4x4m) no meio-fundo da quadra direita.",
    "passoAPasso": [
      "A1 aguarda no cone de 4 metros olhando para L1.",
      "L1 lança a bola com as duas mãos em arco limpo de 4 metros de altura para cair a 1,5 metro da rede na frente de A1.",
      "Regra de tempo de bola na areia: A1 espera a bola atingir o ponto mais alto do lançamento de L1 para só então acelerar os últimos dois passos na areia.",
      "A1 salta equilibrado, mantém a bola à frente do ombro e executa a cortada firme de mão aberta mirando o meio da Zona Alvo adversária (passando com margem de 1 metro acima da fita).",
      "Após 8 ataques de A1, trocam de função."
    ],
    "pontosAtencao": [
      "Como a areia prende o pé, os iniciantes costumam sair correndo cedo demais e chegam embaixo da bola antes de ela cair: lembre-se da frase 'Bola no alto, pé na areia; bola descendo, eu subo!'.",
      "No vôlei de praia, não tente cravar a bola nos 2 metros da frente: bata longo mirando nos 5 a 7 metros da quadra adversária.",
      "Aterrisse sobre os dois pés semiflexionados sem tocar na rede."
    ],
    "erroComum": "Passar por baixo da bola (ultrapassar a linha da bola) e ter que bater arqueando as costas para trás, jogando a bola fora; corrija atrasando meio segundo a saída do cone de 4m. Variações",
    "variacaoFacil": "L1 segura a bola com o braço estendido em cima de um caixote (ou lança bem próximo) para A1 calibrar o ponto de impacto.",
    "variacaoDificil": "Em vez de L1 lançar direto, A1 primeiro faz um passe de manchete para L1, que levanta de toque ou manchete para o ataque.",
    "meta": "Converter 7 de 10 cortadas limpas passando sobre a rede e caindo dentro da Zona Alvo central."
  },
  {
    "numero": 109,
    "secao": 7,
    "nome": "Golpe de nó dos dedos ('poke' / coquinho) na zona curta",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores",
    "tempo": "8 minutos",
    "material": "5 bolas, 3 cones e 2 zonas alvo curtas",
    "objetivo": "Aprender a largada curta oficial do vôlei de praia usando as falanges dobradas e rígidas (poke), sem cometer falta de mão aberta.",
    "comoMontar": "L1 no centro da meia-quadra esquerda (a 1,5m da rede) e A1 no cone de ataque a 4m da rede. Na meia- quadra direita, demarque duas Zonas Alvo curtas logo atrás da rede (entre 1,5m e 3m da fita): Alvo 1 na paralela curta e Alvo 2 no meio curto.",
    "passoAPasso": [
      "Instrução técnica na areia: como na praia é proibido 'largar' a bola com as pontas dos dedos abertas e moles (como no vôlei de quadra), usamos o 'POKE' (dobrar os 4 dedos principais ao meio e tocar na bola com os nós rígidos das falanges médias, com o polegar fechado ao lado).",
      "L1 levanta a bola para a entrada esquerda (a 1,5m da rede).",
      "A1 faz a passada normal de ataque e sobe armando o braço alto exatamente como se fosse dar uma cortada forte.",
      "No topo do salto, A1 fecha os dedos em posição de 'poke' e dá um toque seco e curto de baixo para frente na bola, fazendo-a passar rasante à fita e cair morta na Zona Alvo 1 ou 2 (a 2 metros da rede).",
      "Após 10 repetições (5 na paralela curta e 5 no meio curto), invertem os papéis."
    ],
    "pontosAtencao": [
      "O contato do poke precisa ser um 'tec' seco e instantâneo com os nós dos dedos rígidos: nunca empurre nem acompanhe demais a bola.",
      "Mantenha o cotovelo alto na subida: se você baixar o cotovelo antes de pular, o defensor adversário já sabe que você vai largar curto.",
      "Use o poke também para passar bolas que vieram muito coladas na rede sem tocar na fita."
    ],
    "erroComum": "Tentar fazer a largadinha com a mão aberta e dedos separados (falta imediata apitada na praia); corrija mostrando os nós dos dedos brancos e firmes antes de cada saída. Variações",
    "variacaoFacil": "Treinar primeiro 5 pokes sem saltar (apenas na ponta dos pés a 1,5m da rede) para sentir o contato seco dos nós dos dedos.",
    "variacaoDificil": "Colocar um cone ou obstáculo alto na frente de A1 simulando as mãos do bloqueio para ele encobrir de poke por cima do bloqueio.",
    "meta": "Acertar 8 de 10 pokes curtos dentro das Zonas Alvo (1,5m a 3m da rede) com contato 100% rígido e legal."
  },
  {
    "numero": 110,
    "secao": 7,
    "nome": "Golpe de ponta de dedos rígidos ('cobra') mirando as linhas",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores",
    "tempo": "8 minutos",
    "material": "5 bolas, 4 cones e 2 zonas alvo nas linhas",
    "objetivo": "Dominar o golpe de 'cobra' (5 dedos unidos e totalmente estendidos e duros) para alcançar bolas altas e colocá-las com precisão nas linhas.",
    "comoMontar": "L1 no centro da rede esquerda (1,5m) e A1 no cone de aproximação (4m). Na meia-quadra direita, marque a Zona Alvo 1 no fundo da linha paralela (a 7m da rede) e a Zona Alvo 2 na lateral diagonal (a 5m da rede).",
    "passoAPasso": [
      "Explicação técnica: na 'COBRA', você junta os 5 dedos bem colados uns nos outros (como a cabeça de uma cobra ou uma faca rígida) com o punho travado. Isso dá 10 cm a mais de alcance no alto sem cometer falta!",
      "L1 levanta a bola alta a 1,5m da rede.",
      "A1 faz a chamada de salto, estende o braço ao máximo e toca na bola com as pontas dos dedos rigidamente unidas e duras.",
      "Nos primeiros 5 ataques, A1 empurra a 'cobra' com arco por cima de um bloqueio imaginário até cair na Zona Alvo 1 (fundo da paralela).",
      "Nos 5 ataques seguintes, A1 gira o ombro no ar e aplica a 'cobra' na Zona Alvo 2 (lateral diagonal); depois trocam."
    ],
    "pontosAtencao": [
      "Os dedos na 'cobra' NÃO podem dobrar nem amortecer a bola no impacto: eles funcionam como uma tábua dura batendo na bola.",
      "A grande vantagem da cobra sobre o poke é que você alcança a bola 10 centímetros mais alto, ótimo para passar por cima do bloqueio.",
      "Termine com os dedos apontando exatamente para o cone do alvo escolhido."
    ],
    "erroComum": "Deixar os dedos separados ou moles na hora do toque, fazendo a bola afundar na mão (falta de largada aberta); corrija pedindo para colar o polegar ao lado do indicador formando um bloco único. Variações",
    "variacaoFacil": "Mirar em uma única zona maior no meio-fundo da quadra adversária.",
    "variacaoDificil": "Alternar obrigatoriamente: 1 ataque de poke curto (exercício 109) e 1 ataque de cobra longo no fundo (exercício 110).",
    "meta": "Colocar 7 de 10 golpes de cobra dentro das Zonas Alvo das linhas com dedos unidos e rígidos."
  },
  {
    "numero": 111,
    "secao": 7,
    "nome": "Cortada potente no corredor da paralela",
    "nivel": "Iniciante",
    "jogadores": "2 ou 3 jogadores (A1 atacante, L1 levantador e 1 coletor)",
    "tempo": "9 minutos",
    "material": "5 bolas, 4 cones e 2 corredores alvo nas paralelas",
    "objetivo": "Aprender a manter a bola à frente do ombro de ataque e finalizar com o braço reto para cravar a cortada no corredor lateral de 1,5m.",
    "comoMontar": "Na meia-quadra esquerda, A1 começa a 4,5m da rede e a 1m da linha lateral esquerda; L1 no centro a 1,5m da rede. Na meia-quadra direita, demarque um corredor alvo de 1,5m de largura ao longo da linha lateral superior (dos 4m aos 8m de fundo) e outro na linha lateral inferior.",
    "passoAPasso": [
      "A1 passa a bola para L1 e se posiciona aberto próximo à linha lateral esquerda.",
      "L1 levanta a bola alta até 1 metro da antena esquerda (a 1,5m da rede).",
      "Para atacar na paralela sem jogar a bola na antena nem para fora, A1 faz a chamada mantendo a bola exatamente em frente ao seu ombro direito (não deixa a bola passar demais para fora).",
      "No ar, A1 aponta a mão guia para o corredor reto à sua frente e bate de mão aberta quebrando o punho reto na linha da coxa, fazendo a bola cair dentro do corredor de 1,5m da paralela.",
      "Após 6 ataques na paralela esquerda, mudam para a saída de rede direita e treinam 6 ataques na paralela direita."
    ],
    "pontosAtencao": [
      "Na praia, para bater na paralela quando você entra aberto na ponta, você precisa girar levemente o peito no ar de volta para a linha lateral (ou bater por fora da bola).",
      "Olhe com a visão periférica a antena antes de bater: a bola na paralela passa a 50 cm por dentro da antena.",
      "Use bastante topspin (quebrada de munheca) para a bola mergulhar antes da linha de fundo de 8 metros."
    ],
    "erroComum": "Entrar na diagonal apontando os pés para o meio da quadra e tentar bater na paralela só entortando o braço, jogando a bola fora pela lateral; corrija alinhando os dois últimos passos mais retos em direção à antena. Variações",
    "variacaoFacil": "Alargar o corredor alvo da paralela para 2 metros de largura.",
    "variacaoDificil": "Colocar 1 cone alto em cima da rede a 1,5m da antena (simulando um bloqueio que deixou o corredor da linha aberto) para A1 bater entre o cone e a antena.",
    "meta": "Acertar 6 de 10 cortadas potentes dentro do corredor de 1,5m da paralela sem tocar na antena."
  },
  {
    "numero": 112,
    "secao": 7,
    "nome": "Cortada potente na diagonal longa",
    "nivel": "Iniciante",
    "jogadores": "2 ou 3 jogadores",
    "tempo": "9 minutos",
    "material": "5 bolas, 4 cones e 2 zonas alvo nas diagonais",
    "objetivo": "Aproveitar o ângulo natural da corrida de dentro para fora (ou de fora para dentro) para atacar com força máxima na diagonal da quadra.",
    "comoMontar": "Na meia-quadra esquerda, A1 começa a 5m da rede e L1 no centro (1,5m). Na meia-quadra direita, demarque uma Zona Alvo de 3x3m na diagonal longa inferior (canto direito do fundo) e outra na diagonal longa superior (para quando atacarem da direita).",
    "passoAPasso": [
      "A1 começa a corrida de aproximação abrindo 1 passo para fora da linha lateral esquerda para ganhar ângulo natural de diagonal.",
      "L1 levanta a bola a 1,5m da rede e 1,5m da antena.",
      "A1 entra em um ângulo de 45 graus em relação à rede (os dois pés e o peito já apontam naturalmente para a Zona Alvo na diagonal oposta).",
      "No ponto mais alto do salto, A1 solta o braço em potência máxima na direção do seu peito, fazendo a bola cruzar toda a quadra até a Zona Alvo da diagonal longa.",
      "Fazem 6 ataques da esquerda para a diagonal direita e 6 ataques da direita para a diagonal esquerda; depois trocam com L1."
    ],
    "pontosAtencao": [
      "A cortada na diagonal é o golpe de força mais seguro da praia porque a quadra tem quase 10 metros de comprimento em diagonal do ponto do salto até o canto oposto.",
      "Para um destro atacando na direita (saída de rede), a bola já vem pelo lado do braço forte: cuidado para não bater cedo demais e mandar fora na lateral; espere a bola cruzar a frente do seu rosto.",
      "Finalize o movimento do braço ao lado do quadril oposto."
    ],
    "erroComum": "Saltar muito perto da bola (debaixo dela) e não conseguir jogar o peso do tronco na diagonal; corrija mantendo a bola meio braço à frente do ombro. Variações",
    "variacaoFacil": "L1 lança a bola manualmente na altura ideal para A1 focar 100% na corrida em ângulo de 45 graus.",
    "variacaoDificil": "Exigir que a cortada diagonal quique primeiro entre os 5 e 7 metros da quadra adversária com velocidade alta.",
    "meta": "Cravar 7 de 10 cortadas em potência dentro da Zona Alvo da diagonal longa."
  },
  {
    "numero": 113,
    "secao": 7,
    "nome": "Bola de 'cut shot' (diagonal curtíssima rente à rede)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "5 bolas, 4 cones e 2 zonas alvo de cut shot",
    "objetivo": "Executar o giro fino de punho (ou golpe de ponta de dedo rígida lateral) para fazer a bola cruzar a rede em ângulo fechado e cair nos primeiros 2 metros da lateral oposta.",
    "comoMontar": "L1 no centro da meia-quadra esquerda (1,5m) e A1 na entrada esquerda (4,5m). Na meia-quadra direita, demarque a Zona Alvo de Cut Shot colada à linha lateral oposta, entre 1 metro e 3 metros da rede (logo atrás da antena oposta).",
    "passoAPasso": [
      "O 'Cut Shot' (diagonal curtíssima) é um dos golpes mais famosos e letais do vôlei de praia quando o bloqueador fecha a paralela e o defensor fica lá no fundo da diagonal.",
      "A1 faz a aproximação de ataque exatamente igual à da cortada forte na diagonal (peito apontado em 45 graus).",
      "No topo do salto, em vez de bater atrás da bola, A1 desacelera o braço a 30% de força e 'corta' a face externa da bola girando o polegar para baixo (para destros na esquerda, gira o punho da esquerda para a direita como se virasse uma maçaneta).",
      "A bola sai com efeito lateral/topspin, cruza a fita em ângulo agudo e cai a 2 metros da rede perto da linha lateral oposta (Zona de Cut Shot).",
      "Realizam 6 cuts da esquerda e 6 cuts da direita (onde o destro puxa o punho para dentro do peito); depois trocam."
    ],
    "pontosAtencao": [
      "Para o cut shot funcionar no jogo real, você NÃO pode virar o corpo antes de pular: suba fingindo que vai dar uma bomba no fundo e gire apenas o ombro/punho no último milissegundo.",
      "Não bata por baixo da bola no cut shot (senão ela faz um balão alto e o defensor alcança correndo): toque do meio para cima da bola com rotação para ela cair rápido na areia.",
      "Você pode executar o cut shot batendo leve de mão aberta (com giro rápido de punho sem conduzir) ou usando a 'cobra' rígida cortando o lado da bola."
    ],
    "erroComum": "Empurrar a bola com os dedos moles tentando colocá-la na diagonal curta (infração de toque na praia); corrija exigindo um tapa curto de punho que faça a bola sair rodando. Variações",
    "variacaoFacil": "Aumentar a Zona de Cut Shot para até 4 metros da rede.",
    "variacaoDificil": "Colocar 1 jogador ou cone alto bloqueando a paralela e 1 defensor aos 6,5m na diagonal que tenta arrancar para salvar o cut shot.",
    "meta": "Colocar 6 de 10 bolas de cut shot dentro da zona curta lateral (1m a 3m da rede) sem bater na rede."
  },
  {
    "numero": 114,
    "secao": 7,
    "nome": "Bola alta por cima do bloqueio ('lob' / chute para o canto de fundo)",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (A1 atacante, L1 levantador e B1 bloqueador de referência)",
    "tempo": "9 minutos",
    "material": "5 bolas, 4 cones e 2 zonas alvo nos cantos de",
    "objetivo": "Encobrir o bloqueador na rede com um golpe alto de topspin ou cobra que caia exatamente nos últimos 1,5 metro dos cantos de fundo.",
    "comoMontar": "Na meia-quadra esquerda, L1 no centro (1,5m) e A1 na entrada esquerda (5m). Na meia-quadra direita, posicione B1 junto à rede com os braços levantados (bloqueando a linha de A1) e demarque duas Zonas Alvo (2x2m) nos dois cantos extremos da linha de fundo (aos 8m).",
    "passoAPasso": [
      "A1 passa a bola para L1 e inicia a aproximação de ataque.",
      "B1 (do outro lado da rede) posiciona-se fechando a frente de A1 e salta com os braços bem altos.",
      "Vendo o paredão de B1 à sua frente, A1 mantém o braço alto e executa o 'Lob de Praia' (usando um tapa de mão aberta de baixo para cima com muito giro de punho topspin, ou um golpe de 'cobra/poke' firme de baixo para cima).",
      "A bola passa 1 metro acima da ponta dos dedos do bloqueio de B1 e viaja até cair dentro da Zona Alvo no canto da linha de fundo (a 7,5m–8m da rede).",
      "A1 alterna 4 lobs no canto fundo da paralela (por cima da cabeça de B1) e 4 lobs no canto fundo da diagonal; rodam a cada 8 bolas."
    ],
    "pontosAtencao": [
      "O bom lob na praia NÃO é um balão lento que sobe 10 metros: ele tem a altura exata para passar a 50 cm das mãos do bloqueador e viaja rápido com rotação topspin para cair antes de o defensor chegar!",
      "Bata na parte traseira-inferior da bola e quebre o punho por cima dela para ela mergulhar em cima da fita de fundo.",
      "Mire sempre nos 2 cantos da linha de fundo (onde as duas fitas se encontram), que são os pontos mais distantes da quadra."
    ],
    "erroComum": "Bater reto demais tentando encobrir o bloqueio e levar um bloqueio na cabeça, ou bater sem giro de punho mandando a bola 2 metros para fora; corrija olhando para a ponta dos dedos de B1 e quebrando a munheca no alto. Variações",
    "variacaoFacil": "B1 fica em pé na areia com os braços erguidos sem saltar (obstáculo mais baixo).",
    "variacaoDificil": "B1 salta para bloquear e, assim que a bola passa por cima dele, B1 precisa abrir o quadril e correr até o canto de fundo tentando salvar o lob!",
    "meta": "Acertar 6 de 10 lobs por cima do bloqueio de B1 caindo dentro dos quadrados de 2x2m nos cantos da linha de fundo."
  },
  {
    "numero": 115,
    "secao": 7,
    "nome": "Ataque de segunda bola (surpresa após recepção alta no centro)",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (A1 passador, J2 atacante de segunda e D1 defensor adversário)",
    "tempo": "9 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Aproveitar uma recepção ou defesa que subiu alta perto da rede para atacar de segunda bola pegando o bloqueio e a defesa adversária desprevenidos.",
    "comoMontar": "Na meia-quadra esquerda, A1 (receptor) fica a 5,5m da rede na esquerda e J2 (parceiro que seria o levantador) começa a 5m da rede na direita. Na meia-quadra direita, D1 aguarda na defesa com duas Zonas Alvo abertas.",
    "passoAPasso": [
      "D1 saca ou envia uma bola para A1 na meia-quadra esquerda.",
      "A1 faz uma recepção alta e perfeita que sobe a 1,5 metro da rede no centro da quadra.",
      "Em vez de entrar devagar para levantar, J2 lê que a bola está perfeita, grita 'MINHA DE SEGUNDA!' e acelera em ritmo de passada de ataque ('direita-esquerda' na areia).",
      "J2 salta no ponto mais alto e ataca a segunda bola de mão aberta (ou aplica um cut shot/poke se D1 estiver plantado no fundo) mirando nas Zonas Alvo da quadra direita.",
      "A cada 6 bolas, invertem quem passa e quem ataca de segunda."
    ],
    "pontosAtencao": [
      "No vôlei de praia, como os dois jogadores são permitidos atacar de qualquer posição (não existe zona de frente ou de fundo), a bola de segunda é uma jogada mortal para quebrar o ritmo de bloqueio do adversário.",
      "Quando você vai atacar de segunda vindo do fundo em diagonal para a rede, a bola está caindo de frente para você: tome cuidado para não saltar cedo demais.",
      "Avise o seu parceiro (A1) gritando 'DEIXA!' ou 'VOU BATER!' para ele não correr para a rede à toa e já ficar cobrindo o seu ataque."
    ],
    "erroComum": "Decidir atacar de segunda uma bola que ficou longe da rede (aos 3,5m) ou muito baixa, entregando uma bola fácil para o adversário; corrija permitindo o ataque de segunda apenas quando o passe cair dentro da faixa de 1m a 2m da rede. Variações",
    "variacaoFacil": "A1 lança a bola alta no centro da rede para J2 treinar exclusivamente o tempo de corrida e batida de segunda.",
    "variacaoDificil": "Colocar uma dupla completa do outro lado (bloqueador + defensor): J2 pode fingir que vai levantar (olhando para A1) e atacar de segunda, ou fingir que vai bater de segunda e levantar no ar para A1!",
    "meta": "Converter 7 de 10 ataques de segunda bola dentro das Zonas Alvo sem tocar na rede."
  },
  {
    "numero": 116,
    "secao": 7,
    "nome": "Ataque de bola mal levantada: afastada da rede (a 3,5 metros)",
    "nivel": "Intermediário",
    "jogadores": "2 ou 3 jogadores (A1 atacante, L1 levantador e D1 defensor)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo no fundo A1 L1",
    "objetivo": "Ajustar o freio da passada para não correr para debaixo da rede quando o levantamento fica curto (aos 3,5m), atacando com arco alto e topspin no fundo.",
    "comoMontar": "Na meia-quadra esquerda, coloque 1 cone de referência aos 3,5 metros da rede (onde o levantamento ruim vai cair). A1 começa aos 5,5m da rede. Na meia-quadra direita, marque duas Zonas Alvo nos últimos 2,5 metros do fundo (dos 5,5m aos 8m).",
    "passoAPasso": [
      "A1 passa a bola para L1; L1 simula um levantamento em dia difícil que fica preso atrás na quadra (caindo no cone de 3,5 metros da rede, longe da fita).",
      "Disciplina de pés na areia: A1 NÃO corre até a rede! Ele lê que a bola ficou atrás, faz apenas 1 ou 2 passos curtos freando aos 3,5 metros (atrás da linha da bola).",
      "A1 salta equilibrado aos 3,5 metros da rede e golpeia a bola de baixo para a frente/cima, aplicando máximo giro de punho (topspin).",
      "A bola faz um arco que limpa a rede com segurança e mergulha pesada nas Zonas Alvo do fundo da quadra direita (aos 7 metros).",
      "Após 8 bolas afastadas, trocam os papéis."
    ],
    "pontosAtencao": [
      "O maior erro de ataque no vôlei de praia amador é o jogador correr no automático até a rede antes de ver o levantamento, deixando a bola cair nas suas costas aos 3,5m!",
      "Quando você ataca dos 3,5 metros da rede, é proibido bater para baixo (a bola vai direto na fita): bata para FRENTE e para o ALTO com muito topspin mirando nos últimos 2 metros do fundo.",
      "Nos 3,5 metros da rede o bloqueador adversário não consegue te alcançar — use a quadra toda a seu favor."
    ],
    "erroComum": "Correr para a frente, perceber que a bola ficou atrás e tentar pular andando de costas (perdendo toda a força e errando na rede); corrija exigindo que A1 espere no cone de 5,5m até a bola sair da mão de L1. Variações",
    "variacaoFacil": "L1 avisa 'FICOU ATRÁS!' no momento do levantamento para A1 frear os pés.",
    "variacaoDificil": "L1 alterna sem avisar entre uma bola normal na rede (1,5m) e uma bola afastada (3,5m), testando a leitura de corrida de A1.",
    "meta": "Colocar 7 de 10 bolas levantadas aos 3,5m da rede dentro das Zonas Alvo de fundo com topspin e zero bolas na rede."
  },
  {
    "numero": 117,
    "secao": 7,
    "nome": "Ataque de bola baixa ou passada demais perto da antena",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Resolver bolas levantadas muito baixas ou que fugiram para fora da antena usando velocidade de pés e golpes técnicos de segurança (poke/cobra diagonal).",
    "comoMontar": "Na meia-quadra esquerda, L1 no centro (1,5m) e A1 na entrada esquerda (4,5m). Coloque 1 cone colado à linha lateral esquerda a 1,5m da rede. Na meia-quadra direita, marque a Zona Alvo 1 (meio-fundo) e a Zona Alvo 2 (diagonal curta).",
    "passoAPasso": [
      "L1 envia propositalmente dois tipos de 'bolas de sufoco' na ponta esquerda:",
      "Bola Sufoco 1 (Bola Baixa/Chutada): o levantamento sai baixo, mal passando da altura da fita. A1 não perde tempo armando um salto lento: dá 1 passo rápido, sobe enxuto e usa o 'poke' ou 'cobra' de baixo para cima enviando a bola na Zona Alvo 2 (diagonal curta).",
      "Bola Sufoco 2 (Bola Passada na Antena): o levantamento corre demais para a linha lateral. A1 abre os passos para fora da quadra, não tenta bater na paralela (pois bateria na antena) e vira o punho/cobra para dentro da quadra na Zona Alvo 1 (diagonal).",
      "Realizam 8 bolas de sufoco e invertem as funções."
    ],
    "pontosAtencao": [
      "Mentalidade de campeão na areia: 'Bola boa eu mato; bola ruim eu coloco no ponto mais difícil para o adversário e mantenho o rally vivo!'.",
      "Quando a bola passa demais para fora perto da antena, o único caminho seguro que não toca na antena é cruzar na diagonal.",
      "Nunca tente dar uma pancada para baixo quando o levantamento vier na altura da fita."
    ],
    "erroComum": "Frustrar-se com o levantamento ruim do parceiro e sentar o braço na rede ou na antena; corrija premiando com ponto dobrado o atacante que transformar uma bola horrível em uma largada perfeita na diagonal. Variações",
    "variacaoFacil": "Treinar primeiro 5 bolas baixas seguidas e depois 5 bolas abertas na antena.",
    "variacaoDificil": "Colocar 1 bloqueador na rede fechando a antena para obrigar A1 a contornar o bloqueio com golpe técnico.",
    "meta": "Salvar e colocar nas Zonas Alvo pelo menos 7 de 10 levantamentos ruins (baixos ou abertos demais) sem errar na rede ou antena."
  },
  {
    "numero": 118,
    "secao": 7,
    "nome": "Leitura visual do bloqueio fixo (fechando paralela vs. fechando diagonal)",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (A1 atacante, L1 levantador e B1 bloqueador na rede)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Olhar de relance para o bloqueador durante os dois últimos passos na areia e atacar exatamente no corredor que o bloqueio deixou aberto.",
    "comoMontar": "Na meia-quadra esquerda: A1 na entrada (5m) e L1 no centro (1,5m). Na meia-quadra direita: B1 junto à rede (em frente a A1) e duas Zonas Alvo demarcadas — Zona 1 na Paralela e Zona 2 na Diagonal.",
    "passoAPasso": [
      "A1 passa a bola para L1; L1 levanta alto e a 1,5m–2m da rede.",
      "Quando a bola sai da mão de L1 (enquanto A1 está fazendo a chamada de pés na areia), B1 dá um passo claro na rede:",
      "Opção A: B1 dá um passo para a linha lateral fechando a PARALELA -> A1 enxerga o movimento de B1 com a visão periférica e ataca (cortada ou cut shot) na Zona 2 (DIAGONAL).",
      "Opção B: B1 dá um passo para o meio da rede fechando a DIAGONAL -> A1 lê o corredor livre na linha e ataca (cortada ou lob na linha) na Zona 1 (PARALELA).",
      "Se A1 bater em cima das mãos de B1, o ponto é do bloqueador; se atacar no corredor aberto e cair na Zona Alvo, ponto de A1. Rodam a cada 8 bolas."
    ],
    "pontosAtencao": [
      "Como enxergar a bola e o bloqueador ao mesmo tempo na praia?",
      "Você olha para a bola até ela atingir o ponto mais alto do levantamento, baixa o olhar por 0,2 segundo para o peito de B1 enquanto salta e volta o olho para a bola na batida!",
      "Por isso o levantamento a 1,5m–2m da rede é tão importante: ele coloca a bola e o bloqueador na mesma linha de visão do atacante.",
      "Mantenha o corpo apontado em diagonal para poder bater nos dois lados sem denunciar."
    ],
    "erroComum": "Decidir onde vai bater antes de sair do chão (olhando só para a bola no céu) e carimbar o peito do bloqueador; corrija fazendo B1 levantar um cartão colorido ou mostrar 1/2 dedos no salto para provar que A1 olhou para ele. Variações",
    "variacaoFacil": "B1 escolhe a posição (Paralela ou Diagonal) um pouco mais cedo, assim que A1 faz a recepção.",
    "variacaoDificil": "B1 finge que vai fechar a paralela e dá um passo rápido para a diagonal no último segundo ('finta de bloqueio').",
    "meta": "Ler corretamente a posição de B1 e acertar o corredor livre em pelo menos 7 de 10 ataques."
  },
  {
    "numero": 119,
    "secao": 7,
    "nome": "Ataque guiado pelo chamado verbal do parceiro ('Linha!' ou 'Cruzado!')",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (A1 atacante, L1 levantador/chamador e B1 bloqueador)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Obedecer em pleno ar ao grito tático do levantador (que está olhando de frente para o bloqueio e defesa adversária) e mudar a direção do golpe.",
    "comoMontar": "Mesma estrutura na rede: A1 e L1 na meia-quadra esquerda; B1 (bloqueador/defensor) na meia-quadra direita com a Zona Alvo 'Linha' (paralela) e a Zona Alvo 'Cruzado' (diagonal).",
    "passoAPasso": [
      "No vôlei de praia, enquanto o atacante está olhando para a bola lá no céu (muitas vezes contra o sol), quem tem a visão limpa da movimentação adversária é o LEVANTADOR (L1)!",
      "A1 passa a bola para L1; L1 levanta alto para a entrada.",
      "Assim que a bola sai de suas mãos, L1 olha imediatamente para B1 do outro lado da rede.",
      "Quando B1 se move para fechar um dos lados, L1 grita alto e claro para A1 antes da batida: 'LINHA!' (se a paralela estiver livre) ou 'CRUZADO!' (se a diagonal estiver livre).",
      "A1 confia 100% na voz do parceiro, ajusta o punho/ombro no ar e coloca a bola na zona chamada por L1."
    ],
    "pontosAtencao": [
      "A chamada do levantador precisa ser curta, única e acontecer enquanto o atacante está subindo no salto (se gritar quando o atacante já está batendo na bola, é tarde demais).",
      "Padronize o código da dupla: use sempre as mesmas palavras curtas ('Linha!', 'Diago!', 'Chuta no fundo!').",
      "Para o atacante: suba com o cotovelo alto e pronto para girar o punho para qualquer um dos dois lados no último instante."
    ],
    "erroComum": "O levantador levantar a bola e ficar admirando o próprio levantamento em vez de olhar para o bloqueador adversário para cantar a jogada; corrija tirando 1 ponto da dupla se L1 não gritar antes de A1 atingir o topo do salto. Variações",
    "variacaoFacil": "B1 se move cedo logo após o levantamento de L1, dando tempo tranquilo para L1 ler e gritar.",
    "variacaoDificil": "Incluir uma 3ª chamada de L1: 'POR CIMA!' (quando B1 fica parado e baixo, pedindo o lob no fundo).",
    "meta": "Executar 8 de 10 ataques exatamente na direção gritada pelo parceiro acertando as Zonas Alvo."
  },
  {
    "numero": 120,
    "secao": 7,
    "nome": "Leitura periférica do defensor no fundo (cortada forte vs. bola curta)",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (A1 atacante, L1 levantador e D1 defensor móvel)",
    "tempo": "10 minutos",
    "material": "5 bolas, 3 cones e 3 zonas alvo",
    "objetivo": "Enxergar a profundidade do defensor adversário (sem bloqueio ou no corredor livre) para escolher entre soltar o braço, largar curto ou encobrir.",
    "comoMontar": "Na meia-quadra esquerda: A1 e L1. Na meia-quadra direita: D1 começa no cone central a 5 metros da rede. Demarque 3 Zonas Alvo na direita: Zona Curta (aos 2m da rede), Zona Fundo (aos 7,5m) e Zona Lateral Oposta.",
    "passoAPasso": [
      "A1 passa para L1 e faz a aproximação de ataque olhando pelo canto do olho para D1 no outro lado da quadra.",
      "Quando A1 inicia a chamada de salto, D1 faz uma das três movimentações claras na areia:",
      "Movimento 1: D1 recua para os 7 metros esperando pancada -> A1 freia o braço no ar e aplica um 'poke' ou 'cut shot' na Zona Curta (aos 2m).",
      "Movimento 2: D1 corre para a frente (aos 3m) tentando adivinhar a largada -> A1 aplica um 'lob/cobra' alto ou cortada longa na Zona Fundo (aos 7,5m, nas costas de D1).",
      "Movimento 3: D1 fica plantado no meio -> A1 solta a cortada potente na Zona Lateral longe do alcance dele."
    ],
    "pontosAtencao": [
      "Quando o adversário retira da rede e joga com 2 defensores lá atrás (sem bloqueio), você tem todo o tempo do mundo para olhar para onde eles estão correndo antes de bater na bola!",
      "Nunca bata a 100% de força no peito de um defensor que já está plantado esperando sua bola: na praia, 'bola onde não tem ninguém' sempre vence 'bola forte em cima do defensor'.",
      "Arme o braço sempre igual para D1 não ler a sua intenção."
    ],
    "erroComum": "Bater forte de olhos fechados exatamente para onde D1 acabou de correr; corrija dando 2 pontos para D1 toda vez que o ataque de A1 for na direção dele. Variações",
    "variacaoFacil": "Usar apenas 2 opções para D1 (ou recua tudo para os 7m, ou avança tudo para os 2,5m).",
    "variacaoDificil": "Colocar 2 defensores reais no fundo (D1 na paralela e D2 na diagonal): um deles avança na curta e o outro fica no fundo, exigindo que A1 ache o buraco vazio.",
    "meta": "Colocar 7 de 10 bolas na zona vazia oposta ao movimento do defensor D1."
  },
  {
    "numero": 121,
    "secao": 7,
    "nome": "Ataque com vento contra (cortada chapada para baixo e bola curta de poke ou cut)",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (A1, L1 e D1 defensor)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Aproveitar o vento que sopra de frente para o atacante para bater a cortada com força máxima (que o vento segura na quadra) ou matar o ponto na bola curta que cai como pedra.",
    "comoMontar": "Posicione A1 e L1 no lado da quadra que ataca CONTRA o vento (o vento bate no rosto do atacante). Na quadra oposta, D1 defende e há duas Zonas Alvo: Zona 1 (Fundo com força total) e Zona 2 (Curta a 2m da rede).",
    "passoAPasso": [
      "Quando você ataca CONTRA o vento na praia, o vento é o maior aliado do seu ataque por dois motivos:",
      "Vantagem 1 (Soltar o braço sem medo): como o vento freia a bola e a empurra para baixo, uma cortada que iria 1 metro fora em dia sem vento vai cair dentro da linha de fundo! Nos primeiros 5 ataques, A1 bate a cortada a 100% de potência com trajetória tensa mirando na Zona 1.",
      "Vantagem 2 (A bola curta mortal): quando você dá um 'poke' ou 'cut shot' contra o vento, assim que a bola perde velocidade sobre a rede, o vento a derruba verticalmente na areia aos 2 metros! Nos 5 ataques seguintes, A1 usa a bola curta (poke ou cut) na Zona 2.",
      "Observação importante na subida: como o vento está soprando a bola do levantamento para trás (para longe da rede), A1 não pode invadir demais a rede; ele espera meio passo atrás para a bola não passar da sua cabeça.",
      "Trocam após 10 ataques."
    ],
    "pontosAtencao": [
      "Contra o vento, NUNCA dê um 'lob' alto e mole para o fundo da quadra: o vento vai segurar a bola no meio do ar e o defensor adversário vai chegar caminhando para pegar!",
      "Se quiser atacar no fundo contra o vento, tem que ser batida forte e tensa; se quiser usar jeito, use a bola curta na frente.",
      "Ajuste a passada porque o vento empurra o levantamento na direção do seu peito."
    ],
    "erroComum": "Tentar dar um lob alto e lento no fundo contra o vento forte, entregando uma bola parada no meio da quadra para D1; corrija proibindo bolas altas lentas no lado contra o vento. Variações",
    "variacaoFacil": "Treinar separadamente 5 cortadas fortes contra o vento e 5 pokes curtos contra o vento.",
    "variacaoDificil": "D1 defende pra valer no outro lado tentando ler se A1 vai soltar a bomba presa pelo vento ou o pingo curto.",
    "meta": "Converter 7 de 10 ataques contra o vento (combinando cortadas potentes que caem dentro e bolas curtas a 2m)."
  },
  {
    "numero": 122,
    "secao": 7,
    "nome": "Ataque com vento a favor e lateral (topspin máximo e margem de segurança)",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (A1, L1 e D1)",
    "tempo": "10 minutos",
    "material": "5 bolas, 4 cones e 2 zonas alvo recuadas das linhas",
    "objetivo": "Controlar o ataque quando o vento sopra pelas costas (empurrando a bola para fora), exagerando na quebrada de punho topspin e mirando 1 metro antes das linhas.",
    "comoMontar": "Agora posicione A1 e L1 no lado da quadra que ataca A FAVOR do vento (o vento sopra nas costas do atacante em direção à quadra adversária). Na quadra adversária, coloque cones a 1,5 metro de distância das linhas de fundo e lateral, demarcando uma 'Zona Segura Interna'.",
    "passoAPasso": [
      "Atacar A FAVOR do vento é o momento em que mais se comete erros de ataque para fora no vôlei de praia, porque a brisa nas costas faz a bola 'planar' e passar das linhas.",
      "Ajuste 1 (Na corrida): como o vento empurra o levantamento para cima da rede, A1 acelera a entrada para pegar a bola antes que ela passe para o outro lado.",
      "Ajuste 2 (Na batida): é proibido bater chapado no meio da bola; A1 precisa entrar com a mão por CIMA da bola e exagerar no chicote de punho (topspin máximo) para forçar a bola a mergulhar na areia.",
      "Ajuste 3 (Nos golpes colocados): se usar o lob ou cobra a favor do vento, A1 mira no MEIO da quadra adversária (aos 4,5 metros), pois o vento vai carregar a bola até os 7,5 metros na linha de fundo!",
      "Qualquer bola que passar para fora das linhas desconta 2 pontos; acertar a Zona Segura vale 1 ponto."
    ],
    "pontosAtencao": [
      "Regra mental com vento nas costas: 'Tire 20% da força bruta e coloque 100% de giro de munheca (topspin) para baixo!'.",
      "Se houver vento lateral soprando para fora de uma das linhas laterais, nunca mire colado naquela linha: mire a 1,5 metro para dentro.",
      "Com vento a favor, o lob curto que você toca no meio da quadra viaja rápido pelo alto e encobre o defensor no fundo."
    ],
    "erroComum": "Bater reto e forte com o braço duro a favor do vento, mandando 3 bolas seguidas no alambrado de fundo; corrija obrigando o atacante a mirar na linha de 5 metros da quadra adversária. Variações",
    "variacaoFacil": "Atacar apenas de levantamentos mais altos a 1,5m da rede focando na quebrada de punho para baixo.",
    "variacaoDificil": "A dupla faz 2 ataques no lado contra o vento (exercício 121) e imediatamente corre para o outro lado da rede para fazer 2 ataques a favor do vento (exercício 122).",
    "meta": "Manter 8 de 10 ataques a favor do vento dentro da quadra (Zona Segura) sem cometer erros de bola fora no fundo."
  },
  {
    "numero": 123,
    "secao": 7,
    "nome": "Explorando as mãos altas e laterais do bloqueio ('block-out' técnico)",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (A1 atacante, L1 levantador e B1 bloqueador ativo)",
    "tempo": "10 minutos",
    "material": "5 bolas e 2 cones A1 L1 B1",
    "objetivo": "Usar o bloqueio adversário como alvo quando a bola está colada na rede ou o bloqueador salta muito perto, tirando da mão dele para fora da quadra.",
    "comoMontar": "Na meia-quadra esquerda, A1 na entrada e L1 no centro. Na meia-quadra direita, B1 posicionado na rede para bloquear agressivamente.",
    "passoAPasso": [
      "Quando o levantamento vem mais perto da rede (a 80 cm– 1m) e o bloqueador B1 chega inteiro fechando os espaços, tentar passar a bola por baixo dele dá ponto de bloqueio.",
      "A1 sobe equilibrado, mantém o olhar nas mãos de B1 e aplica uma das duas técnicas de 'Explorar o Bloqueio':",
      "Técnica 1 (Pontas dos dedos altas): A1 mira nos últimos 5 centímetros da ponta dos dedos de B1 com uma batida firme e alta para o fundo, fazendo a bola raspar na mão de B1 e viajar para fora da linha de fundo.",
      "Técnica 2 (Mão externa para a antena): A1 gira o punho para fora batendo contra a borda externa da mão esquerda de B1, fazendo a bola ricochetear para fora da linha lateral.",
      "Só vale ponto se a bola tocar em B1 e cair fora da quadra (ou se B1 encolher a mão e a bola cair na linha)."
    ],
    "pontosAtencao": [
      "Para explorar o bloqueio na praia, você precisa estar com os olhos ABERTOS olhando exatamente para a mão do bloqueador no momento do impacto!",
      "Nunca bata no meio da palma da mão do bloqueador (senão a bola volta na sua cabeça): mire nas BORDAS (ponta superior dos dedos ou lateral do dedo mínimo externo).",
      "Esse recurso salva o atacante quando o levantamento veio colado demais na fita."
    ],
    "erroComum": "Tentar tirar do bloqueio dando um toquinho fraco na mão de B1, fazendo a bola subir amortecida e fácil para o defensor adversário pegar; corrija exigindo batida firme e rápida nas bordas da mão. Variações",
    "variacaoFacil": "L1 levanta a bola controlada a 1m da rede e B1 salta sem mexer as mãos lateralmente no ar.",
    "variacaoDificil": "B1 pode tentar 'puxar as mãos' no último segundo quando percebe que A1 vai explorar o bloqueio, exigindo que A1 mire na borda da mão mas dentro da direção da linha de fundo.",
    "meta": "Conseguir 6 de 10 pontos explorando as extremidades do bloqueio (ou forçando o bloqueador a tirar a mão na linha)."
  },
  {
    "numero": 124,
    "secao": 7,
    "nome": "Finta de cortada máxima (braço rápido) mudando para 'cut' ou 'poke' no ar",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (A1 + L1 contra Bloqueador B1 + Defensor D1)",
    "tempo": "10 minutos",
    "material": "5 bolas e 2 zonas alvo curtas",
    "objetivo": "Congelar o defensor adversário no fundo da quadra através de uma armada de braço agressiva e soltar uma bola curta mortal no último milissegundo.",
    "comoMontar": "Dupla A1 + L1 na esquerda; Dupla B1 (bloqueio) + D1 (defesa no fundo aos 6m) na direita. Marque duas Zonas Alvo curtas (Zona de Cut Shot e Zona de Poke atrás do bloqueio).",
    "passoAPasso": [
      "No alto nível do vôlei de praia, o grande defensor lê a velocidade do seu cotovelo: se você subir com o braço mole, D1 já dispara para a frente antes de você tocar na bola.",
      "A1 recebe o levantamento de L1, faz uma corrida explosiva na areia, salta alto e abre o peito ('arco e flecha') com expressão e velocidade de quem vai dar uma pancada de 100 km/h.",
      "Vendo o braço armado para a porrada, D1 crava os calcanhares na areia lá nos 6 metros para defender o tiro.",
      "A apenas 20 centímetros da bola, A1 freia o ombro e transforma a batida em um 'cut shot' curto na diagonal ou um 'poke' por cima de B1 na paralela curta.",
      "Se D1 conseguir correr e alcançar a bola curta porque leu que A1 ia largar, o ponto é da defesa!"
    ],
    "pontosAtencao": [
      "O disfarce perfeito está na corrida e na abertura do cotovelo: 90% do movimento é idêntico à cortada forte; só os últimos 10% mudam na mão.",
      "Para enganar de verdade, a cada 3 ou 4 bolas você DEVE soltar o braço forte lá no fundo onde D1 está para mantê-lo honesto e recuado.",
      "Mantenha o olhar apontado para o fundo da quadra mesmo quando for cortar curto na frente."
    ],
    "erroComum": "Desacelerar a corrida na areia e subir com o braço já dobrado na frente da testa, avisando o estádio inteiro que vai largar; corrija invalidando o ponto se o cotovelo não passar para trás da linha da orelha na subida. Variações",
    "variacaoFacil": "Treinar sem o bloqueador B1 (apenas enganando o defensor D1 no fundo).",
    "variacaoDificil": "D1 tem liberdade total para dar 'finta de defesa' (fingir que vai correr para a frente e voltar para trás).",
    "meta": "Conseguir 6 de 10 bolas curtas disfarçadas que caiam na areia deixando o defensor D1 preso no fundo."
  },
  {
    "numero": 125,
    "secao": 7,
    "nome": "Ataque após recepção na 'costura' com cruzamento ou abertura rápida",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Dupla A1 + L1 contra S1 + B1)",
    "tempo": "11 minutos",
    "material": "5 bolas e 2 cones A1 L1 B1 S1",
    "objetivo": "Reorganizar os pés para o ataque quando o sacador adversário joga a bola no meio da dupla, escolhendo entre abrir de volta para a ponta ou atacar pelo meio/cruzando.",
    "comoMontar": "S1 saca da direita mirando exclusivamente na costura central entre A1 (esquerda) e L1 (direita). B1 bloqueia na rede direita.",
    "passoAPasso": [
      "Quando S1 saca na costura central e A1 (jogador da esquerda) fecha para o meio da quadra para recepcionar, A1 termina o passe exatamente no centro da quadra (fora da sua posição normal de ponta).",
      "A partir daí, A1 e L1 treinam duas chamadas táticas de ataque para confundir o bloqueador B1:",
      "Jogada 1 ('Abre!'): A1 passa no meio e dá 2 passos rápidos em diagonal para trás/fora voltando para a antena esquerda, enquanto L1 levanta a bola de dentro para fora na ponta.",
      "Jogada 2 ('Cruza!' ou 'Meio!'): A1 passa no meio e continua a corrida reto pelo centro (ou cruzando por trás de L1 para a direita), e L1 levanta uma bola curta no meio ou de costas, deixando o bloqueador B1 totalmente perdido na rede!",
      "Executam 4 bolas abrindo para a ponta e 4 bolas atacando no meio/cruzando; depois trocam."
    ],
    "pontosAtencao": [
      "Por que os adversários sacam tanto no meio da quadra na praia?",
      "Porque o atacante que recebe no meio perde a referência da linha lateral e costuma correr torto.",
      "Se você escolheu 'Abrir' de volta para a sua ponta após passar no meio, passe a bola um pouco mais ALTA para dar tempo de você voltar até a linha lateral e entrar de frente.",
      "Se o passe ficou mais baixo no meio, não tente correr até a antena: grite 'MEIO!' e bata a bola pelo centro mesmo!"
    ],
    "erroComum": "Receber no meio da quadra e correr de lado ('caranguejo') olhando para a bola até a antena, saltando desequilibrado; corrija dando 1 passo rápido de abertura para fora antes de virar de frente para a rede. Variações",
    "variacaoFacil": "S1 envia um saque fácil no centro e a dupla combina antes se vai 'Abrir' ou 'Cruzar'.",
    "variacaoDificil": "B1 tenta perseguir A1 na rede e S1 defende no fundo em ponto real.",
    "meta": "Converter 7 de 10 ataques originados de recepções na costura central sem perder o equilíbrio do salto."
  },
  {
    "numero": 126,
    "secao": 7,
    "nome": "Desafio valendo ponto: 'Só Golpes de Jeito' vs. 'Só Pancada' contra defesa real",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (2 contra 2 em quadra completa)",
    "tempo": "11 minutos",
    "material": "5 bolas A1 L1 B1 D1",
    "objetivo": "Treinar o domínio extremo tanto dos golpes colocados quanto da cortada potente sob restrição tática, aprendendo como um prepara o outro.",
    "comoMontar": "Dupla A (A1 + L1) no lado esquerdo atacando; Dupla B (B1 bloqueando + D1 defendendo) no lado direito.",
    "passoAPasso": [
      "A Dupla A vai atacar uma série de 9 bolas divididas em 3 blocos de 3 bolas, valendo ponto real contra B1 e D1:",
      "Bloco 1 (Bolas 1 a 3 — 'Proibido Bater Forte'): A1 só pode pontuar usando golpes colocados regulamentares (cut shot, lob no fundo, poke ou cobra). A defesa (B1 + D1) SABE disso, mas ainda assim precisa cobrir toda a quadra 8x8m.",
      "Bloco 2 (Bolas 4 a 6 — 'Proibido Largar'): A1 é obrigado a bater cortada potente de mão aberta a mais de 80% de força (buscando as linhas, a costura da defesa ou as mãos altas do bloqueio).",
      "Bloco 3 (Bolas 7 a 9 — 'Arsenal Livre'): A1 pode misturar tudo livremente aplicando o que aprendeu nos dois blocos anteriores para enganar B1 e D1.",
      "Ao final das 9 bolas, contam-se os pontos e as duplas invertem de lado."
    ],
    "pontosAtencao": [
      "No Bloco 1 (só colocadas), mesmo que o defensor saiba que você não pode bater forte, se você esperar ele dar o primeiro passo e colocar no canto oposto, a bola cai!",
      "No Bloco 2 (só pancada), não bata cego no peito do defensor: bata forte na altura do tornozelo dele, na linha paralela ou explore o bloqueio alto.",
      "No Bloco 3, use a mesma armada de braço do Bloco 2 para aplicar as largadas do Bloco 1."
    ],
    "erroComum": "No bloco de pancada, achar que 'bater forte' significa bater para baixo na rede; corrija lembrando que a pancada inteligente na praia é batida longa nos últimos 2 metros da quadra. Variações",
    "variacaoFacil": "Jogar contra apenas 1 defensor no fundo (sem bloqueador na rede) nos dois primeiros blocos.",
    "variacaoDificil": "Se a defesa (B1 + D1) defender a bola e virar o contra- ataque, ela rouba 1 ponto do placar dos atacantes.",
    "meta": "Marcar pelo menos 6 pontos nas 9 bolas da série (mínimo de 2 pontos em cada um dos três blocos)."
  },
  {
    "numero": 127,
    "secao": 7,
    "nome": "Sequência valendo ponto: Side-out completo contra bloqueio e defesa agressiva",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Jogo 2x2 focado na eficiência de ataque do side-out)",
    "tempo": "12 minutos",
    "material": "5 bolas A1 L1 B1 S1",
    "objetivo": "Manter mais de 70% de virada de bola (side-out) sob pressão real de saque, combinando leitura individual e chamada do parceiro.",
    "comoMontar": "Quadra 16x8m com Dupla A (receptora/atacante) no lado esquerdo e Dupla B (sacadora/bloqueio/defesa) no lado direito.",
    "passoAPasso": [
      "A Dupla B tem 8 saques seguidos contra a Dupla A.",
      "A Dupla B combina antes de cada saque o seu sistema defensivo (bloqueio na paralela + defesa na diagonal, bloqueio na diagonal + defesa na paralela, ou finta de retirada com 2 defensores no fundo).",
      "A Dupla A recebe o saque, constrói o levantamento e precisa ler o esquema da Dupla B para matar o ponto no primeiro ataque.",
      "Sistema de placar do exercício: se a Dupla A matar o ponto de primeira no ataque = +2 pontos; se precisar de uma segunda tentativa no mesmo rally = +1 ponto; se tomar bloqueio ou errar o ataque para fora/rede = 0 ponto (e +2 pontos para a Dupla B).",
      "Após os 8 saques, as duplas invertem de papel e vence quem somar mais pontos ao final."
    ],
    "pontosAtencao": [
      "No vôlei de praia, a dupla que vira o seu ataque de side-out sem precisar de segunda tentativa economiza metade da energia física debaixo do sol!",
      "Se o saque adversário foi muito bom e te deixou longe da rede, jogue uma bola alta no canto fundo para se reorganizar em vez de dar o ponto de graça errando na rede.",
      "A dupla atacante precisa conversar a cada ponto sobre o que o bloqueador adversário está fazendo."
    ],
    "erroComum": "Repetir o mesmo golpe 3 vezes seguidas no mesmo lugar onde o defensor adversário já está esperando; corrija obrigando o atacante a alternar entre bola forte e bola colocada. Variações",
    "variacaoFacil": "O sacador da Dupla B saca com 75% de potência para garantir que todas as 8 bolas tenham ataque.",
    "variacaoDificil": "O sacador saca sempre no jogador que acabou de errar o ataque anterior, aumentando a pressão psicológica.",
    "meta": "Virar pelo menos 6 dos 8 side-outs da série (sendo no mínimo 4 de primeira batida)."
  },
  {
    "numero": 128,
    "secao": 7,
    "nome": "Desafio final 'Tríplice Coroa do Ataque': 3 bolas seguidas valendo o trono",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (2 contra 2 + professor/lançador de transição)",
    "tempo": "12 minutos",
    "material": "6 bolas A1 L1 B1 D1",
    "objetivo": "Vencer três cenários seguidos de ataque (1 side-out, 1 bola de sufoco afastada e 1 contra-ataque sob fadiga) contra defesa máxima.",
    "comoMontar": "Dupla Desafiante (A1 + L1) no lado esquerdo; Dupla Defensora do Trono (B1 + D1) no lado direito. O professor (ou próximo da fila) fica na lateral com 2 bolas extras na mão.",
    "passoAPasso": [
      "Para conquistar o 'Trono do Ataque', a dupla A1 + L1 precisa vencer a sequência ininterrupta de 3 bolas de ataque:",
      "Bola 1 (Side-out Real): D1 saca da linha de fundo direita; A1 recepciona, L1 levanta e A1 ataca para pontuar.",
      "Bola 2 (Bola de Sufoco Imediata): assim que a Bola 1 termina, o professor lança uma bola difícil aos 4 metros da rede na quadra esquerda; L1 levanta do fundo e A1 precisa atacar essa bola afastada com inteligência sem errar.",
      "Bola 3 (Contra-ataque sob Fadiga): imediatamente após a Bola 2, o professor bate uma bola em cima de A1 no fundo; A1 defende na areia, L1 sai da rede para levantar e A1 arranca com a perna queimando para fechar a 3ª bola!",
      "A dupla que converter pelo menos 2 das 3 bolas assume o lado do Trono e defende contra a próxima dupla."
    ],
    "pontosAtencao": [
      "Na Bola 1 (Side-out), você está descansado: use salto máximo e agressividade.",
      "Na Bola 2 (Afastada aos 4m), use a cabeça: não force para baixo; use topspin longo nos cantos ou cut shot.",
      "Na Bola 3 (Sob fadiga após defender), quando a perna pesa na areia, confie no chamado do seu levantador e use o golpe mais seguro do seu repertório (cobra/cut na diagonal ou pancada cruzada)."
    ],
    "erroComum": "Perder a lucidez na 3ª bola por causa do cansaço e tentar fechar os olhos e bater de qualquer jeito; corrija exigindo que L1 grite 'CALMA, OLHA O BURACO!' enquanto levanta a última bola. Variações",
    "variacaoFacil": "Dar 5 segundos de respiro entre a Bola 1, a Bola 2 e a Bola 3.",
    "variacaoDificil": "Exigir que o MESMO jogador (A1) finalize as 3 bolas seguidas e que só conquiste o trono se acertar 3 de 3!",
    "meta": "Converter pelo menos 2 das 3 bolas da Tríplice Coroa em 70% das entradas na quadra."
  },
  {
    "numero": 129,
    "secao": 8,
    "nome": "Posição de base na rede, mãos altas e tempo de salto vertical",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 bloqueador B1 e 1 atacante/lançador A1 do outro lado)",
    "tempo": "7 minutos",
    "material": "2 bolas e 2 cones",
    "objetivo": "Automatizar a postura pronta junto à rede (mãos na altura dos ombros e joelhos carregados na areia) e o atraso de meio segundo no salto.",
    "comoMontar": "Posicione B1 na meia-quadra direita a 40 centímetros da fita da rede, entre 2 cones. Do outro lado da rede (meia-quadra esquerda), A1 fica a 1,5 metro da fita com uma bola nas mãos.",
    "passoAPasso": [
      "B1 assume a posição de base na rede: pés paralelos na largura dos ombros a 40 cm da linha central, joelhos flexionados na areia e as duas mãos abertas já erguidas na altura das orelhas/ombros.",
      "A1 lança a bola 1 metro para o alto e salta como se fosse atacar.",
      "Regra de Ouro do Tempo na Areia: como na areia fofa o atacante demora mais para subir, B1 NÃO salta junto com o início do salto de A1; B1 espera os pés de A1 saírem da areia para então explodir verticalmente.",
      "B1 sobe reto sem jogar os cotovelos para trás (evitando tocar na rede) e toca as duas mãos firmes na bola que A1 segura no ponto mais alto acima da fita.",
      "Realizam 10 repetições e invertem os papéis."
    ],
    "pontosAtencao": [
      "Na praia, nunca abaixe as mãos até a coxa para tomar impulso no bloqueio: além de ser lento, o seu cotovelo vai bater na fita inferior da rede ao subir.",
      "Impulsione a areia com as duas plantas dos pés inteiras para não afundar apenas a ponta do pé.",
      "Contraia o abdômen no ar para não ser projetado para frente contra a rede."
    ],
    "erroComum": "Saltar cedo demais (junto com a corrida do atacante) e já estar descendo quando o atacante bate na bola; corrija com o comando verbal 'Ele sobe... EU SUBO!'. Variações",
    "variacaoFacil": "A1 não salta: apenas fica na ponta dos pés erguendo a bola sobre a fita no sinal combinado.",
    "variacaoDificil": "A1 faz uma finta rápida de joelhos antes de saltar de verdade, testando se B1 mantém a calma na areia.",
    "meta": "Completar 9 de 10 saltos verticais tocando a bola no ponto mais alto sem encostar um fio de cabelo na rede."
  },
  {
    "numero": 130,
    "secao": 8,
    "nome": "Deslocamento lateral na rede (passo lateral e passo cruzado) antes do salto",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (B1 bloqueador e L1/A1 referência do outro lado)",
    "tempo": "8 minutos",
    "material": "2 bolas e 3 cones",
    "objetivo": "Sair do centro da rede até a ponta da antena usando passo lateral (curto) ou passo cruzado (longo) e estancar os dois pés na areia antes de subir.",
    "comoMontar": "Na meia-quadra direita, coloque 1 cone central a 50 cm da rede (saída de B1) e 2 cones nas extremidades (a 1,5m de cada antena). Do outro lado (esquerda), A1 e L1 ficam posicionados nas duas pontas com bolas.",
    "passoAPasso": [
      "B1 começa sempre no cone central da rede (onde o bloqueador aguarda para ler o levantamento).",
      "Nos primeiros 5 saltos (Deslocamento Curto de 1,5m): B1 usa 2 passadas laterais rápidas sem cruzar os pés, planta o pé de fora na areia e salta verticalmente em frente a A1.",
      "Nos 5 saltos seguintes (Deslocamento Longo de 3m até a antena): B1 gira o quadril, dá 1 passo cruzado amplo correndo paralelo à rede, enquadra os dois pés de volta para a fita no cone da ponta e salta.",
      "No topo do salto, B1 deve estar 100% equilibrado (sem continuar voando de lado para fora da antena) e tocar na bola erguida por A1.",
      "Volta ao cone central e repete para a ponta oposta; trocam a cada 10 saltos."
    ],
    "pontosAtencao": [
      "No vôlei de praia, você começa no meio da rede para ameaçar a bola de segunda e só abre para a ponta quando a bola sai da mão do levantador!",
      "Use o pé de fora (mais próximo da antena) como um 'freio de mão' na areia fofa para transformar a velocidade horizontal em salto vertical.",
      "Mantenha as mãos acima da linha do peito durante toda a corrida lateral."
    ],
    "erroComum": "Saltar ainda correndo de lado ('flutuando' no ar), abrindo um buraco entre o bloqueio e a bola; corrija exigindo que os dois pés parem na areia por uma fração de segundo antes da decolagem. Variações",
    "variacaoFacil": "Fazer o deslocamento em ritmo moderado focando apenas na frenagem dos dois pés no cone da ponta.",
    "variacaoDificil": "L1 fica no meio do outro lado com uma bola e aponta de surpresa para a esquerda ou para a direita, exigindo reação imediata de B1.",
    "meta": "Realizar 8 de 10 deslocamentos (4 para a esquerda e 4 para a direita) saltando 100% equilibrado sem derivar no ar."
  },
  {
    "numero": 131,
    "secao": 8,
    "nome": "Penetração agressiva das mãos sobre a rede ('invadir o telhado')",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 atacante/lançador A1 e 1 bloqueador B1)",
    "tempo": "8 minutos",
    "material": "4 bolas, 2 cones e 1 zona alvo na quadra do atacante",
    "objetivo": "Passar os punhos e antebraços por cima da fita invadindo o espaço aéreo adversário com os dedos abertos e rígidos apontados para a areia.",
    "comoMontar": "B1 junto à rede na meia-quadra direita. Na meia- quadra esquerda, A1 fica a 1,5 metro da rede com 4 bolas e uma Zona Alvo desenhada no chão aos pés de A1 (entre 1m e 3m da rede).",
    "passoAPasso": [
      "Explicação da regra da praia: o bloqueador pode invadir as mãos por cima da rede para o lado adversário desde que NÃO toque na bola antes de o atacante executar o seu golpe de ataque (ou quando a bola já está viajando em direção à rede).",
      "A1 lança uma bola alta a 40–50 cm da fita do seu lado e dá um tapa controlado em direção ao topo da rede.",
      "B1 salta verticalmente, sobe os ombros até as orelhas e, assim que as mãos passam da fita branca, projeta os braços para a frente/baixo ('fazendo um telhado' de 45 graus para dentro da quadra de A1).",
      "Com os 10 dedos bem abertos, duros e polegares apontados para cima (separados por apenas 5 cm para a bola não passar no meio), B1 abafa a bola fazendo-a cair dentro da Zona Alvo aos pés de A1.",
      "Trocam de função a cada 8 bolas abafadas."
    ],
    "pontosAtencao": [
      "Não bata na bola com as mãos no bloqueio (dar tapa na bola é falta ou joga a bola para fora): apenas invada firme, trave os punhos para baixo e deixe a bola bater no seu paredão.",
      "Os polegares devem ficar alinhados e apontados para o céu, com os dedos mínimos virados levemente para dentro ('mãos em concha') para a bola não escapar pelas laterais.",
      "Tire as mãos de volta pelo alto na descida para não raspar o antebraço na fita."
    ],
    "erroComum": "Subir com as mãos retas apontadas para o céu ('mão de parede'), fazendo a bola bater e espirrar para fora da linha lateral; corrija pedindo para apontar a palma das mãos para os pés do atacante adversário. Variações",
    "variacaoFacil": "A1 segura a bola parada a 20 cm acima e à frente da fita para B1 saltar e empurrar a bola para baixo na quadra de A1.",
    "variacaoDificil": "A1 varia a distância da bola (30 cm a 80 cm da rede) e bate firme de cortada contra as mãos de B1.",
    "meta": "Abafar 7 de 10 bolas fazendo-as cair diretamente no chão da quadra adversária (Zona Alvo de 1m a 3m)."
  },
  {
    "numero": 132,
    "secao": 8,
    "nome": "Bloqueio direcional: fechar o corredor da paralela",
    "nivel": "Iniciante",
    "jogadores": "3 jogadores (A1 atacante, L1 levantador e B1 bloqueador)",
    "tempo": "9 minutos",
    "material": "5 bolas, 3 cones e 1 zona protegida",
    "objetivo": "Alinhar o corpo na rede para trancar 100% do ataque reto na linha paralela, protegendo toda a faixa lateral de 2 metros da sua quadra.",
    "comoMontar": "Na meia-quadra esquerda: A1 na entrada (ponta superior) e L1 no centro. Na meia-quadra direita: B1 na rede e 2 cones demarcando a 'Zona Protegida da Paralela' (um corredor de 2 metros de largura ao longo da linha lateral superior direita).",
    "passoAPasso": [
      "A1 passa a bola para L1 e se prepara para atacar na ponta esquerda; L1 levanta a 1,5m da rede.",
      "B1 desloca-se na rede até posicionar o seu OMBRO DE FORA (ombro direito, mais próximo da antena) exatamente na linha da bola e do braço de ataque de A1.",
      "B1 salta e vira a palma da mão direita (mão externa) 30 graus para dentro da quadra, para que, se a bola bater na borda da mão, ela rebata para o centro da quadra adversária e não saia em block-out!",
      "A1 tenta atacar exclusivamente no corredor da paralela: se a bola passar por B1 e cair dentro da Zona Protegida da Paralela, ponto de A1; se B1 bloquear ou obrigar A1 a jogar fora na antena, ponto de B1.",
      "Realizam 8 ataques na paralela e rodam as posições."
    ],
    "pontosAtencao": [
      "Quando você promete ao seu defensor que vai fechar a paralela, nenhuma bola batida forte pode passar entre você e a antena: deixe apenas 40 cm entre a sua mão de fora e a antena (espaço onde a bola forte sairia fora).",
      "A mão de fora SEMPRE vira levemente para dentro como a porta de um armário fechando o ângulo.",
      "Olhe para a bola no momento da batida de A1 até ela tocar nos seus punhos."
    ],
    "erroComum": "Parar muito aberto perto demais da antena (deixando o buraco por dentro) ou deixar a mão externa reta tomando block-out; corrija alinhando o nariz de B1 com o ombro de ataque de A1. Variações",
    "variacaoFacil": "L1 lança a bola em um ponto fixo marcado por um cone a 1m da antena para B1 já saber exatamente onde parar.",
    "variacaoDificil": "L1 varia a distância da bola em relação à antena (ora bem na ponta, ora 2 metros para dentro), exigindo que B1 ajuste a posição da paralela a cada bola.",
    "meta": "Impedir que o atacante acerte a Zona Protegida da Paralela em pelo menos 7 de 10 ataques."
  },
  {
    "numero": 133,
    "secao": 8,
    "nome": "Bloqueio direcional: fechar a diagonal e proteger o meio de quadra",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (A1 atacante, L1 levantador e B1 bloqueador)",
    "tempo": "9 minutos",
    "material": "5 bolas, 3 cones e 1 zona protegida na diagonal",
    "objetivo": "Posicionar-se um passo mais por dentro na rede para trancar o ataque cruzado forte na diagonal, deixando apenas o corredor estreito da linha para o defensor.",
    "comoMontar": "Na meia-quadra esquerda: A1 na ponta superior e L1 no centro. Na meia-quadra direita: B1 na rede e cones demarcando a 'Zona Protegida da Diagonal' (do centro da quadra até a lateral inferior).",
    "passoAPasso": [
      "Quando a tática da dupla é fechar a diagonal (o golpe favorito da maioria dos atacantes), B1 se posiciona 1 passo mais para o CENTRO da rede em relação à bola.",
      "A1 passa para L1 e entra para atacar na ponta com ângulo de 45 graus.",
      "B1 lê a linha do peito e do ombro de A1 apontando para a diagonal e alinha as suas duas mãos exatamente na frente do ombro de ataque de A1.",
      "No salto, B1 invade os braços em diagonal na direção de A1 (não invade reto para a linha de fundo, mas apontando os dois braços para o ombro do atacante!).",
      "A1 tenta bater forte na diagonal: se B1 tocar na bola ou se A1 for obrigado a tirar tanto do bloqueio que mande a bola fora na lateral, ponto de B1."
    ],
    "pontosAtencao": [
      "Segredo biomecânico do bloqueio de diagonal na praia: gire levemente os seus ombros no ar de frente para o atacante e invada as duas mãos na direção do braço dele!",
      "A mão interna (mais próxima do meio da rede) deve ficar firme para a bola não vazar pelo centro.",
      "Não tente adivinhar a paralela no último segundo: confie que o seu defensor está lá atrás cuidando da linha."
    ],
    "erroComum": "Parar na frente do corpo do atacante em vez de parar na linha cruzada do braço dele, deixando a diagonal passar ao lado da mão esquerda; corrija dando meio passo a mais para dentro da quadra. Variações",
    "variacaoFacil": "A1 só tem permissão para bater cortada forte na diagonal (proibido largar curto), focando 100% no encaixe das mãos de B1.",
    "variacaoDificil": "Colocar D1 defendendo no corredor da paralela: A1 pode bater na diagonal (contra B1) ou na paralela (contra D1).",
    "meta": "Bloquear, amortecer ou forçar o erro do atacante em 7 de 10 ataques fortes direcionados para a diagonal."
  },
  {
    "numero": 134,
    "secao": 8,
    "nome": "Sinais de bloqueio atrás das costas e combinação com o defensor",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (B1 bloqueador + D1 sacador/defensor contra A1 + L1)",
    "tempo": "10 minutos",
    "material": "5 bolas e 4 cones",
    "objetivo": "Praticar o código oficial de sinais de dedos atrás do quadril antes do saque e cumprir fielmente na rede o corredor prometido ao parceiro.",
    "comoMontar": "No lado direito: B1 na rede (de costas para o seu sacador D1) e D1 na linha de fundo para sacar. No lado esquerdo: A1 (na esquerda) e L1 (na direita) em posição de recepção.",
    "passoAPasso": [
      "Antes de cada saque de D1, B1 coloca as DUAS mãos atrás da lombar/quadril (fora da visão de A1 e L1) para mostrar o plano tático:",
      "Código Universal do Vôlei de Praia: a mão ESQUERDA de B1 indica o que B1 fará contra o atacante da esquerda (A1); a mão DIREITA indica o que B1 fará contra o atacante da direita (L1). 1 dedo = fecho a Paralela (Linha); 2 dedos = fecho a Diagonal; Mão fechada (punho) = não bloqueio / retiro; Mão aberta = bloqueio na bola.",
      "Exemplo da rodada: B1 mostra '1 dedo na mão esquerda e 2 dedos na mão direita'.",
      "D1 lê o sinal, saca em A1 (na esquerda) e já corre diretamente para defender a DIAGONAL (pois sabe que B1 mostrou 1 dedo para A1 e vai trancar a paralela!).",
      "B1 cumpre 100% o sinal fechando a paralela de A1; a cada 6 saques as duplas trocam de função."
    ],
    "pontosAtencao": [
      "Regra de honra da dupla de praia: o bloqueador NUNCA muda de ideia na rede sem avisar!",
      "Se você mostrou 1 dedo (paralela) no sinal e resolver pular na diagonal na hora H, você deixa o seu defensor correndo para o lugar errado e destrói a confiança da dupla.",
      "Mantenha os sinais baixos na linha do calção para a sombra na areia não entregar o sinal para o adversário!",
      "Se quiser pedir que o seu parceiro saque em um jogador específico, 'pisque/mexa' o dedo daquela mão."
    ],
    "erroComum": "Confundir qual mão representa qual atacante ou esquecer o sinal que acabou de mostrar quando a bola sobe; corrija obrigando D1 a confirmar verbalmente baixo antes de sacar ('Um na esquerda, dois na direita!'). Variações",
    "variacaoFacil": "Usar apenas uma mão no sinal porque o saque será sempre direcionado para o mesmo atacante (A1).",
    "variacaoDificil": "B1 pode gritar 'TROCA!' durante o levantamento caso o passe adversário saia muito longe da rede, mudando em voz alta o plano para retirada.",
    "meta": "Executar 10 de 10 pontos com 100% de fidelidade entre o sinal mostrado nas costas, o posicionamento de B1 e a corrida de D1."
  },
  {
    "numero": 135,
    "secao": 8,
    "nome": "Falso bloqueio (finta na rede e retirada para defender com 2 no fundo)",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (B1 + D1 contra A1 + L1)",
    "tempo": "10 minutos",
    "material": "5 bolas e 2 cones de base no fundo A1 L1 B1 D1",
    "objetivo": "Enganar o atacante adversário fazendo- o acreditar que haverá bloqueio na rede e recuar no último instante para fechar a quadra com dois defensores.",
    "comoMontar": "Na meia-quadra direita, B1 na rede e D1 no fundo; coloque 2 cones a 5,5 metros da rede (um na metade superior e outro na metade inferior) marcando onde B1 e D1 devem terminar posicionados. Na esquerda, A1 e L1.",
    "passoAPasso": [
      "No sinal atrás das costas, B1 mostra o 'Punho Fechado' (sinal de Falso Bloqueio / Retirada).",
      "D1 saca em A1 e já se posiciona no cone de 5,5m da diagonal.",
      "Enquanto A1 recepciona e L1 se prepara para levantar, B1 faz toda a encenação de quem vai bloquear pesado: fica colado na fita com as mãos altas, acompanha a bola e dá um pequeno passo ameaçador para a frente.",
      "No exato instante em que a bola sai das mãos de L1 (quando A1 já baixou o olhar na rede e achou que B1 ia pular), B1 abre o quadril em silêncio e dispara em velocidade até o cone de 5,5m da paralela!",
      "B1 estanca os dois pés na areia aos 5,5m antes da batida de A1, defendendo o lob ou o tiro na linha com os dois jogadores no fundo."
    ],
    "pontosAtencao": [
      "Se você sair correndo da rede cedo demais (antes de o levantador tocar na bola), o atacante vê que não tem bloqueio e senta o braço livre: espere a bola sair da mão do levantador para iniciar a retirada!",
      "Mais importante do que chegar aos 6 metros de profundidade é PARAR OS DOIS PÉS na areia no momento em que o atacante bate na bola.",
      "O falso bloqueio funciona perfeitamente contra atacantes que adoram dar 'lob' por cima do bloqueio: eles jogam o lob direto nas suas mãos!"
    ],
    "erroComum": "Virar de costas para a rede ao correr para o fundo, perdendo totalmente a visão do atacante; corrija exigindo corrida lateral/cruzada olhando por cima do ombro interno. Variações",
    "variacaoFacil": "L1 faz um levantamento bem alto (4,5m de altura) para dar tempo confortável de B1 encenar na rede e chegar ao cone de 5,5m.",
    "variacaoDificil": "B1 alterna no sinal entre Bloqueio Real e Falso Bloqueio, proibindo A1 de adivinhar antes da subida.",
    "meta": "Completar 8 de 10 retiradas de falso bloqueio estando com os dois pés 100% plantados no cone de 5,5m no momento da batida."
  },
  {
    "numero": 136,
    "secao": 8,
    "nome": "Sair do bloqueio ('Pulling') ao ler levantamento longe da rede",
    "nivel": "Intermediário",
    "jogadores": "3 ou 4 jogadores (B1 bloqueador, D1 defensor e A1 + L1)",
    "tempo": "10 minutos",
    "material": "5 bolas e 3 cones A1 L1 B1 D1",
    "objetivo": "Reconhecer em uma fração de segundo que o levantamento adversário ficou afastado da rede (a 3m ou mais) e abortar o salto de bloqueio para defender no fundo.",
    "comoMontar": "Na meia-quadra esquerda, L1 no centro e 1 cone a 3,5m da rede. Na meia-quadra direita, B1 na rede (com ordem inicial de bloquear) e D1 no fundo.",
    "passoAPasso": [
      "Regra Tática de Ouro da Praia: NUNCA salte para bloquear na rede se a bola foi levantada a mais de 2,5 ou 3 metros de distância da fita! De longe da rede o atacante não consegue bater para baixo e vai apenas te usar ou largar nos buracos.",
      "A1 passa a bola para L1; L1 varia a qualidade do levantamento: ora levanta na rede (1,2m), ora deixa a bola afastada aos 3,5 metros.",
      "Se a bola for na rede (1,2m), B1 mantém a decisão, salta e bloqueia firme.",
      "Se B1 ler que a bola saiu da mão de L1 para trás (caindo aos 3,5m da rede), B1 grita 'SAÍ! LIVRE!' para avisar D1, aborta o salto e faz o 'pulling' (retirada rápida em diagonal) para defender a quadra junto com D1.",
      "Após a defesa de B1 ou D1, a dupla constrói o contra- ataque."
    ],
    "pontosAtencao": [
      "Pular na rede quando o atacante está batendo lá dos 3,5 metros é o chamado 'bloqueio fantasma': você não bloqueia nada e ainda deixa o seu parceiro sozinho para cobrir 64m²!",
      "O grito 'SAÍ!' ou 'SEM BLOCO!' precisa ser imediato para que o seu defensor ajuste a posição dele no fundo.",
      "Quando você retira numa bola afastada de 3,5m, pare por volta dos 4,5 metros da rede (pronto para pegar o cut shot ou o tiro meia-força)."
    ],
    "erroComum": "Ficar na dúvida no meio do caminho (não pula na rede e também não recua, ficando parado aos 2 metros levando bolada no pé); corrija exigindo decisão explosiva assim que a bola sai da mão de L1. Variações",
    "variacaoFacil": "L1 faz apenas levantamentos afastados (aos 3,5m e 4m) para B1 automatizar o gatilho visual de retirada.",
    "variacaoDificil": "A1 também pode tentar um 'poke' curto na frente quando vê B1 retirando, exigindo que B1 pare equilibrado aos 4m pronto para avançar de volta.",
    "meta": "Tomar a decisão correta (bloquear na bola perto / retirar na bola longe) em 9 de 10 lances."
  },
  {
    "numero": 137,
    "secao": 8,
    "nome": "Leitura do atacante: observar a passada de aproximação e a linha do ombro",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (A1 atacante, L1 levantador e B1 bloqueador de leitura)",
    "tempo": "10 minutos",
    "material": "5 bolas e 2 cones SE",
    "objetivo": "Deixar de olhar para a bola durante toda a queda e focar os olhos no ângulo de corrida e no ombro do atacante para antecipar onde ele vai bater.",
    "comoMontar": "Na meia-quadra esquerda: A1 e L1. Na meia-quadra direita: B1 sozinho na rede (sem combinação prévia de sinal — B1 vai bloquear 'na leitura pura').",
    "passoAPasso": [
      "Sequência Visual de 3 Etapas do Grande Bloqueador de Praia: 1º Olhe para o recebedor; 2º Olhe para as mãos do levantador para ver onde a bola vai cair; 3º Tire o olho da bola e CRAVE O OLHAR NO ATACANTE (pés, quadril e ombro)!",
      "A1 passa para L1 e escolhe um de dois padrões claros de corrida na areia:",
      "Padrão A: A1 abre fora da quadra e corre em ângulo fechado apontando os dois pés e o peito para a DIAGONAL -> B1 lê os pés/ombro de A1 e fecha a diagonal.",
      "Padrão B: A1 corre reto paralelo à linha lateral com o ombro apontado para a PARALELA -> B1 lê o alinhamento reto de A1 e fecha a linha.",
      "No último milissegundo no ar, se A1 baixar o cotovelo para largar, B1 abre as mãos altas para abafar o lob/poke."
    ],
    "pontosAtencao": [
      "A bola não mente, mas a bola também não bate sozinha: quem decide a direção do ataque é o OMBRO e o PUNHO do atacante!",
      "Se você ficar olhando só para a bola no céu, você salta cego. 90% dos jogadores amadores e intermediários batem exatamente na direção para onde a ponta dos pés deles aponta no último passo na areia.",
      "Enquadre as suas duas mãos sempre na frente do ombro do braço que bate (cuidado com atacantes canhotos!)."
    ],
    "erroComum": "Acompanhar a bola com a cabeça levantada até o topo e só olhar para o atacante depois que já pulou; corrija obrigando B1 a gritar no chão 'ABERTO!' ou 'RETO!' conforme a corrida de A1. Variações",
    "variacaoFacil": "A1 é proibido de girar o punho no ar: ele deve bater exatamente para onde a sua corrida apontou.",
    "variacaoDificil": "A1 pode tentar correr apontando para a diagonal e girar o ombro no ar para a paralela, exigindo que B1 leia o giro do ombro no salto.",
    "meta": "Acertar a leitura da direção do ataque (tocando ou abafando a bola) em pelo menos 6 de 10 ataques sem sinal prévio."
  },
  {
    "numero": 138,
    "secao": 8,
    "nome": "Leitura do levantamento: bola colada na fita ('bola 50/50') vs. bola passada na antena",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (A1, L1 e B1)",
    "tempo": "10 minutos",
    "material": "5 bolas e 2 cones",
    "objetivo": "Mudar a postura de invasão e o posicionamento das mãos quando o levantamento adversário cola na fita ou foge demais para a antena.",
    "comoMontar": "A1 e L1 na meia-quadra esquerda; B1 na rede da meia- quadra direita.",
    "passoAPasso": [
      "L1 envia dois tipos específicos de levantamento que dão total vantagem ao bloqueador se ele souber ler:",
      "Situação 1 (Bola Colada na Fita / 'Bola de Dividida'): o levantamento sobe a apenas 20 cm da rede. B1 NÃO salta longe da fita nem espera: B1 se aproxima a 20 cm da rede, salta no mesmo tempo de A1 e envolve a bola com as duas mãos abertas e duras ('encapsulando' a bola), vencendo a dividida para baixo.",
      "Situação 2 (Bola Passada para Fora da Antena): o levantamento corre demais para a lateral. Como A1 é obrigado pelas leis da física a cruzar a bola de volta por dentro da antena (não tem como bater na paralela porque a antena está no meio!), B1 abandona a linha e fecha 100% a DIAGONAL a 1,5m da antena!",
      "Executam 5 bolas coladas na fita e 5 bolas passadas na antena; depois rodam."
    ],
    "pontosAtencao": [
      "Quando a bola está colada em cima da fita (50/50), não dê um tapa nela: coloque as duas mãos abertas e rígidas como uma parede a 2 cm da bola e empurre apenas os punhos quando o atacante tocar nela.",
      "Quando o levantamento passa para fora da antena adversária, qualquer bloqueador que continua fechando a paralela está bloqueando o vento (a bola nunca poderá passar por fora da antena!).",
      "Dê um passo para dentro e tranque a diagonal.",
      "Cuidado redobrado com os pés e a barriga nas bolas coladas para não cometer toque na rede."
    ],
    "erroComum": "Na bola passada para fora da antena, continuar colado na antena tentando bloquear a linha e deixar toda a diagonal aberta para o atacante salvar a bola; corrija colocando um cone a 1,5m da antena onde B1 deve parar nessa bola. Variações",
    "variacaoFacil": "Treinar separadamente: 5 bolas de dividida em cima da fita e depois 5 bolas abertas na antena.",
    "variacaoDificil": "L1 mistura livremente bola normal (1,5m), bola colada na fita e bola passada na antena.",
    "meta": "Vencer ou bloquear 7 de 10 lances aproveitando o erro de levantamento (colado na fita ou passado na antena)."
  },
  {
    "numero": 139,
    "secao": 8,
    "nome": "Bloqueio de bola de segunda e reação a ataque rápido do levantador",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (B1 + D1 contra A1 + L1)",
    "tempo": "10 minutos",
    "material": "5 bolas",
    "objetivo": "Manter a disciplina de posicionamento central na rede para desencorajar ou cravar a bola de segunda do levantador antes de abrir para o atacante.",
    "comoMontar": "Dupla A1 + L1 na meia-quadra esquerda; B1 na rede e D1 no fundo da meia-quadra direita.",
    "passoAPasso": [
      "Por que tantos jogadores levam bola de segunda na cabeça na praia? Porque o bloqueador corre desesperado para a frente do atacante assim que a recepção sobe, deixando o meio da rede escancarado para o levantador passar de segunda!",
      "D1 saca em A1; A1 faz uma recepção alta que sobe no centro da rede (a 1m–1,5m da fita).",
      "Regra de Posicionamento de B1: enquanto L1 está entrando embaixo da bola, B1 fica plantado exatamente EM FRENTE a L1 no meio da rede com as mãos altas ('respeitando a segunda bola').",
      "L1 tem liberdade para: ou tentar atacar/passar de segunda bola (e B1 salta na cara dele para bloquear!), ou levantar para A1 na ponta (e só então B1 usa o passo cruzado explosivo para fechar A1).",
      "Se L1 fizer ponto de segunda bola porque B1 saiu cedo demais do meio, conta 2 pontos para o ataque; se B1 bloquear a bola de segunda, conta 2 pontos para a defesa!"
    ],
    "pontosAtencao": [
      "Na praia, a presença física de um bloqueador alto parado na frente do levantador já elimina 80% das bolas de segunda sem você precisar nem pular.",
      "Olhe para os pés e para a linha dos ombros do levantador (L1): se ele pular ou virar os ombros para a rede, suba imediatamente bloqueando o meio.",
      "Assim que a bola sair da mão de L1 para o atacante A1, solte os quadris e dê o sprint lateral na rede."
    ],
    "erroComum": "Adivinhar o levantamento e correr para a antena antes de L1 tocar na bola, tomando bola de segunda fácil no meio da quadra; corrija desenhando uma caixa no centro da rede de onde B1 só pode sair após o toque de L1. Variações",
    "variacaoFacil": "A1 avisa quando o passe subiu 'Na mão!' (perigo de bola de segunda) para alertar B1.",
    "variacaoDificil": "L1 também pode levantar uma bola rápida no meio ('bola chutada') para A1, exigindo leitura rápida de B1 no centro.",
    "meta": "Neutralizar 8 de 10 tentativas de bola de segunda no centro e ainda chegar a tempo no bloqueio de ponta nas bolas levantadas."
  },
  {
    "numero": 140,
    "secao": 8,
    "nome": "Bloqueio de opção ('Spread block' / 'Toquinho no bloco'): amortecer para contra-atacar",
    "nivel": "Avançado",
    "jogadores": "3 ou 4 jogadores (B1 bloqueador, D1 defensor/levantador e A1 + L1)",
    "tempo": "10 minutos",
    "material": "5 bolas e 1 zona de amortecimento",
    "objetivo": "Usar o bloqueio não apenas para fechar um corredor, mas abrindo os braços no último instante ou suavizando os punhos para amortecer a bola para o alto na própria quadra.",
    "comoMontar": "A1 + L1 na meia-quadra esquerda; B1 na rede e D1 no fundo da meia-quadra direita.",
    "passoAPasso": [
      "Lembrete essencial da Regra da Praia: o toque da bola no bloqueio CONTA como o 1º contato da dupla! Após o toque no bloqueio, restam apenas mais 2 contatos (qualquer um dos dois jogadores pode dar o 2º contato).",
      "Quando o levantamento para A1 fica a 2 metros da rede (onde é difícil cravar um bloqueio direto para o chão), B1 usa duas técnicas avançadas:",
      "Técnica A ('Spread Block' / Abrir asas): B1 sobe com as mãos juntas e, no momento exato da batida de A1, abre os dois braços lateralmente em 'V' para cobrir mais largura e tocar na bola.",
      "Técnica B ('Soft Block' / Amortecer para cima): quando B1 vê que A1 vai bater um tiro alto ou que B1 pulou um pouco mais baixo, B1 inclina as palmas das mãos 20 graus para CIMA/TRÁS, fazendo a bola bater no bloqueio e subir mansa no meio da própria quadra!",
      "Assim que a bola sobe do bloqueio (1º toque), D1 (ou o próprio B1) faz o levantamento (2º toque) e o parceiro ataca (3º toque)."
    ],
    "pontosAtencao": [
      "No vôlei de praia, um bloqueio que amortece a bola 4 metros para o alto na sua própria quadra vale quase tanto quanto um bloqueio direto para o chão, porque gera um contra-ataque fácil!",
      "Assim que a bola raspar no seu dedo no bloqueio, grite imediatamente 'TOCOU!",
      "É DOIS!' para o seu defensor saber que aquele já foi o primeiro contato e que o próximo toque já é o levantamento!",
      "Na regola da praia, o próprio bloqueador que tocou na bola no bloqueio PODE dar o segundo toque seguido se a bola cair perto dele na rede."
    ],
    "erroComum": "A bola raspar no bloqueio e o defensor no fundo dar uma manchete achando que ainda tem 3 toques, obrigando o bloqueador a passar a bola de graça; corrija exigindo o grito 'TOCOU! LEVANTA!' no ato. Variações",
    "variacaoFacil": "A1 bate bolas a 70% de força na direção das mãos de B1 para B1 treinar o amortecimento para o alto e ele mesmo (ou D1) levantar.",
    "variacaoDificil": "Se a bola tocar no bloqueio de B1 e a dupla converter o contra-ataque nos 2 toques seguintes, vale 3 pontos no placar!",
    "meta": "Conseguir pelo menos 5 amortecimentos de bloqueio na série seguidos de levantamento no 2º toque e ataque no 3º toque."
  },
  {
    "numero": 141,
    "secao": 8,
    "nome": "Bloqueio com vento forte (ajuste de tempo, invasão e 'lob trap')",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (B1 + D1 contra A1 + L1)",
    "tempo": "10 minutos",
    "material": "5 bolas",
    "objetivo": "Adaptar a agressividade do salto e a inclinação das mãos quando o vento sopra contra o atacante ou a favor do atacante.",
    "comoMontar": "Treine 5 minutos com o vento soprando das costas de B1 contra o atacante (Vento a favor do bloqueio) e 5 minutos no lado oposto (Vento contra o bloqueio).",
    "passoAPasso": [
      "Situação 1 (Vento soprando das costas de B1 CONTRA a cara do atacante A1): o vento empurra o levantamento de A1 para longe da rede, mas freia qualquer bola que A1 tentar jogar por cima do bloqueio! Nesse lado, B1 atrasa um instante o salto, sobe com os braços mais altos (menos invadidos e mais verticais) para 'caçar' os lobs e pokes que o vento segura em cima da rede!",
      "Situação 2 (Vento soprando das costas do atacante A1 A FAVOR do ataque dele): o vento joga o levantamento de A1 para cima da fita da rede! Nesse lado, B1 fica colado na rede e invade o máximo possível ('telhado fechado') porque a bola vai cair no colo da rede e A1 vai tentar bater para baixo.",
      "Além disso, se houver vento lateral forte soprando para uma antena, B1 dá meio passo a mais para o lado para onde o vento carrega a bola.",
      "Executam 6 bolas de cada lado da quadra sentindo a diferença brutal do vento no bloqueio."
    ],
    "pontosAtencao": [
      "Quando o atacante está contra o vento e tenta dar um lob ou coquinho por cima de você, o vento para a bola em cima da fita: se você mantiver os braços altos na descida do salto, você pega a bola de segunda no ar!",
      "Quando o vento empurra o levantamento adversário para cima da fita, prepare-se para a bola de dividida (exercício 138).",
      "Com vento forte mexendo a fita superior da rede, deixe 5 cm a mais de margem nos cotovelos para a rede não bater no seu braço trazida pela rajada!"
    ],
    "erroComum": "Saltar muito colado na fita quando o vento está soprando a rede na direção do seu peito, cometendo falta de toque na rede trazida pelo vento; corrija mantendo 45 cm de distância da linha central. Variações",
    "variacaoFacil": "Manter a dupla no mesmo lado do vento por 8 bolas seguidas até dominar o tempo da bola no ar.",
    "variacaoDificil": "Trocar de lado da quadra a cada 3 pontos ajustando imediatamente a tática de bloqueio no vento.",
    "meta": "Conseguir 6 de 10 ações positivas de bloqueio (bloqueio direto ou amortecimento) nos dois lados do vento sem tocar na rede."
  },
  {
    "numero": 142,
    "secao": 8,
    "nome": "Bloqueio + Defesa + Contra-ataque: fechando a paralela com transição imediata",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (B1 + D1 contra A1 + L1)",
    "tempo": "11 minutos",
    "material": "5 bolas e 1 zona alvo de levantamento",
    "objetivo": "Encadear o salto de bloqueio na paralela com a defesa do parceiro na diagonal e a saída imediata do bloqueador da rede para levantar e virar o contra-ataque.",
    "comoMontar": "Dupla A1 + L1 na meia-quadra esquerda; B1 na rede direita (fechando a paralela) e D1 no fundo da diagonal direita. Zona Alvo de levantamento de transição no centro da quadra direita (a 2m da rede).",
    "passoAPasso": [
      "D1 saca em A1; B1 mostra 1 dedo no sinal (fechando a paralela) e D1 fecha a diagonal.",
      "L1 levanta na ponta para A1; B1 desloca-se, estanca os pés e salta trancando 100% do corredor da paralela.",
      "Como a paralela está fechada por B1, A1 é forçado a atacar na diagonal onde D1 já está plantado esperando.",
      "D1 defende o ataque de A1 subindo a bola alta no centro da quadra (Zona Alvo a 2m da rede).",
      "Transição imediata de B1: no exato milissegundo em que os pés de B1 tocam a areia na descida do bloqueio, B1 gira o pescoço para dentro da sua quadra, sai da rede em 2 passos até a Zona Alvo, para os pés e levanta (de toque ou manchete) para D1 entrar e cravar o contra-ataque!"
    ],
    "pontosAtencao": [
      "O trabalho do bloqueador na praia NÃO termina quando a bola passa por ele: se a bola passou pelo seu bloqueio para o seu defensor, você acaba de virar o LEVANTADOR da dupla!",
      "Nunca caia do bloqueio olhando para o atacante adversário e reclamando que quase pegou a bola: aterrisse já girando os ombros para o centro da sua quadra.",
      "Levante a bola de transição na ponta de onde o seu defensor D1 já está vindo (não cruze a bola para o lado oposto fazendo D1 correr o dobro na areia)."
    ],
    "erroComum": "B1 continuar colado na fita da rede após o salto de bloqueio e ter que levantar a bola de costas/correndo quando a defesa de D1 sobe aos 3 metros; corrija obrigando B1 a dar 2 passos para dentro da quadra assim que aterrissar. Variações",
    "variacaoFacil": "A1 ataca com 75% de potência na diagonal de D1 para garantir a defesa e treinar a transição de B1.",
    "variacaoDificil": "A1 pode tentar explorar a paralela de B1, largar curto atrás de B1 ou bater na diagonal de D1 em ritmo real de jogo.",
    "meta": "Completar 6 de 10 sequências completas de Bloqueio de linha + Defesa de diagonal + Levantamento de B1 + Contra-ataque de D1."
  },
  {
    "numero": 143,
    "secao": 8,
    "nome": "Bloqueio + Defesa + Contra-ataque: reconstrução após toque no bloco ('É dois!')",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (B1 + D1 contra A1 + L1)",
    "tempo": "11 minutos",
    "material": "5 bolas A1 B1 D1",
    "objetivo": "Dominar as duas formas de reconstruir o contra-ataque quando a bola raspa no bloqueio (1º toque): ou o defensor levanta no 2º toque para o bloqueador atacar, ou o bloqueador levanta no 2º toque para o defensor atacar.",
    "comoMontar": "Dupla A1 + L1 na esquerda; B1 na rede e D1 no fundo da meia-quadra direita.",
    "passoAPasso": [
      "A1 ataca contra o bloqueio de B1; B1 consegue amortecer/raspar na bola no bloqueio (1º toque da dupla!) e grita imediatamente: 'TOCOU! É DOIS!'.",
      "Dependendo de onde a bola amortecida pelo bloqueio cair, a dupla executa uma das duas reconstruções:",
      "Caso 1 (A bola amortecida passa alta para o meio/fundo da quadra): D1 avança, usa o 2º contato para LEVANTAR direto para a rede (não defende para o meio, já levanta na ponta!), e B1 (que acabou de descer do bloqueio) abre 2 passos e ATACA no 3º toque!",
      "Caso 2 (A bola amortecida cai curtinha logo atrás de B1 junto à rede): como a regra da praia permite que o bloqueador dê o 2º contato seguido, o próprio B1 vira na areia e LEVANTA no 2º toque para D1 vir correndo do fundo e ATACAR no 3º toque!",
      "Realizam 8 lances variando entre o Caso 1 e o Caso 2."
    ],
    "pontosAtencao": [
      "Essa é a jogada que separa os jogadores experientes de praia dos iniciantes: no Caso 1, quando a bola toca no bloco e vai para o fundo, o defensor D1 tem que lembrar que o toque dele já é o LEVANTAMENTO para o bloqueador bater!",
      "Para o bloqueador B1 no Caso 1: depois que a bola raspou na sua mão e foi para trás, não vá atrás dela — abra rápido para a antena gritando 'LEVANTA PRA MIM!' para você atacar!",
      "No Caso 2, B1 aproveita a regra exclusiva do bloqueio para dar dois toques seguidos (1º no bloqueio + 2º levantando de manchete ou toque)."
    ],
    "erroComum": "Depois do toque no bloqueio, os dois jogadores correrem juntos para a bola para levantar e ninguém abrir para atacar no 3º toque; corrija com a chamada 'Tocou! Abre pra bater!'. Variações",
    "variacaoFacil": "O professor lança a bola batendo na mão de B1 no salto para simular o amortecimento de forma controlada.",
    "variacaoDificil": "Jogo real onde A1 tenta furar o bloqueio e B1 busca ativamente o toque de amortecimento para armar a transição de 2 toques restantes.",
    "meta": "Executar com sucesso 7 de 10 reconstruções após toque no bloqueio (sem cometer 4 toques e com ataque válido no 3º contato)."
  },
  {
    "numero": 144,
    "secao": 8,
    "nome": "Desafio 'Rei do Paredão': sequência valendo ponto de Bloqueio + Defesa + Transição",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (2 contra 2 em desafio competitivo na areia)",
    "tempo": "12 minutos",
    "material": "6 bolas",
    "objetivo": "Aplicar sob pressão de placar todo o repertório tático da seção (sinais nas costas, fechar linha/diagonal, falso bloqueio, pulling e transição de contra-ataque).",
    "comoMontar": "Quadra oficial 16x8m em disputa 2x2: Dupla do Paredão (B1 + D1) no lado direito sacando e defendendo; Dupla Desafiante (A1 + L1) no lado esquerdo recepcionando e atacando.",
    "passoAPasso": [
      "Disputa de sets até 12 pontos onde apenas a dupla que está sacando/bloqueando (Dupla do Paredão) marca pontos especiais de sistema defensivo:",
      "Regra de Pontuação do Paredão: Bloqueio direto no chão ('Monster Block') = 3 PONTOS imediatos! Toque de amortecimento no bloqueio seguido de ponto no contra- ataque = 2 PONTOS! Falso bloqueio/retirada ou fechamento perfeito que gera defesa do parceiro e ponto de contra-ataque = 2 PONTOS!",
      "Se a Dupla Desafiante (A1 + L1) virar o side-out, ela ganha 1 ponto normal e rouba o direito de ir para o lado do Paredão sacar e bloquear.",
      "Antes de cada saque, é obrigatório mostrar o sinal atrás das costas combinando o sistema entre B1 e D1.",
      "Vence o desafio a dupla que alcançar 12 pontos primeiro somando seus bloqueios e contra-ataques."
    ],
    "pontosAtencao": [
      "Para ganhar o desafio, o bloqueador não pode ser previsível: misture 2 bolas fechando a paralela, 1 bola de falso bloqueio retirando no último segundo e 1 bola fechando a diagonal na leitura!",
      "Quando você varia entre pular na rede e retirar de surpresa, você entra na cabeça do atacante adversário e força o erro dele.",
      "Mantenha a comunicação energética após cada ponto entre bloqueador e defensor."
    ],
    "erroComum": "Querer ganhar 3 pontos em todas as bolas tentando saltar até em levantamentos que ficaram a 4 metros da rede; corrija lembrando que o falso bloqueio + contra-ataque também vale 2 pontos preciosos. Variações",
    "variacaoFacil": "A Dupla do Paredão tem direito a 3 saques seguidos garantidos antes de rodar, independentemente de levar o side-out.",
    "variacaoDificil": "Se o atacante explorar o bloqueio para fora (block-out) ou se B1 tocar na rede, a Dupla do Paredão perde 2 pontos do seu placar!",
    "meta": "Conquistar pelo menos 3 ações diretas ou indiretas de bloqueio (bloqueio no chão, amortecimento ou indução para a defesa) por set."
  },
  {
    "numero": 145,
    "secao": 9,
    "nome": "Base de defesa na areia e ativação da plataforma",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 atacante/batedor A1 na rede e 1 defensor J1 no fundo)",
    "tempo": "7 minutos",
    "material": "4 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Construir a postura baixa equilibrada na areia fofa (pés afastados, quadril abaixo dos joelhos e braços à frente) para defender bolas batidas a 5 metros.",
    "comoMontar": "Na meia-quadra direita, posicione 2 cones a 5 metros da rede afastados 1,5m entre si (base de J1). Demarque uma Zona Alvo de 2x2m no centro da quadra direita a 1,5m da rede. A1 fica junto à rede do lado esquerdo com as bolas.",
    "passoAPasso": [
      "J1 posiciona-se entre os 2 cones a 5 metros da rede com os pés um pouco mais largos que os ombros, pontas dos pés ativas na areia e quadril baixo.",
      "Os braços de J1 começam semiflexionados e abertos à frente da linha dos joelhos, com as palmas voltadas para cima prontas para unir.",
      "Quando A1 levanta o braço para bater na bola, J1 faz uma leve pressão dos antepés contra a areia (ativação da base) congelando a cabeça.",
      "A1 bate a bola controlada na direção da cintura de J1; J1 une a plataforma firme e levanta a bola a 4 metros de altura para cair dentro da Zona Alvo central.",
      "Após 10 defesas consecutivas, J1 e A1 trocam de função."
    ],
    "pontosAtencao": [
      "Manter o peito inclinado à frente dos joelhos: se o peso ficar nos calcanhares na areia fofa, a bolada derruba o defensor sentado.",
      "Nunca esperar a bola com as mãos já entrelaçadas; una os polegares apenas na fração de segundo do impacto.",
      "Direcionar a bola para o centro da quadra com arco alto, dando tempo para a transição."
    ],
    "erroComum": "Subir o quadril e esticar as pernas no momento em que o atacante bate na bola; corrija exigindo que os cotovelos permaneçam à frente dos joelhos dobrados até a bola subir. Variações",
    "variacaoFacil": "A1 lança a bola com as duas mãos por cima da cabeça em trajetória firme na cintura de J1.",
    "variacaoDificil": "A1 bate bolas variando meio metro para a esquerda ou para a direita de J1, exigindo um passo lateral curto de ajuste.",
    "meta": "Colocar 8 de 10 bolas defendidas com altura mínima de 4 metros dentro da Zona Alvo central."
  },
  {
    "numero": 146,
    "secao": 9,
    "nome": "Defesa de ataque forte no corpo (amortecimento de ombros e quadril)",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 atacante A1 e 1 defensor J1)",
    "tempo": "8 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Aprender a absorver a velocidade de uma cortada potente encolhendo o abdômen e cedendo os ombros para trás no milissegundo do impacto.",
    "comoMontar": "A1 fica a 1,5m da rede na meia-quadra esquerda (ou sobre um caixote) com as bolas. J1 fica a 5,5 metros da rede na meia-quadra direita. Zona Alvo central demarcada a 2 metros da rede na quadra direita.",
    "passoAPasso": [
      "J1 assume a base baixa aos 5,5 metros da rede.",
      "A1 faz o autolançamento e bate uma cortada forte diretamente na linha do estômago/quadril de J1.",
      "No instante do contato da bola nos antebraços, J1 NÃO empurra os braços para frente: ele contrai o abdômen em formato de 'C' (arredondando levemente as costas para trás) e cede 5 centímetros com a plataforma para tirar o peso da pancada.",
      "A energia da cortada é absorvida e a bola sobe macia a 4,5 metros de altura caindo na Zona Alvo no centro da quadra.",
      "Realizam 8 pancadas seguidas e invertem os papéis."
    ],
    "pontosAtencao": [
      "Contra bola forte na praia, qualquer movimento dos braços para cima faz a bola voltar de graça para o outro lado da rede ou sair no fundo.",
      "Incline a plataforma um pouco mais vertical (polegares apontando mais para frente/baixo) para a bola subir reta no seu próprio lado.",
      "Se a pancada for muito forte, permita que o quadril recue ou sente na areia após a bola sair limpa do braço."
    ],
    "erroComum": "Travar o corpo duro e balançar os braços contra a cortada, devolvendo a bola na mão do atacante adversário; corrija pedindo para 'puxar o umbigo para dentro' na hora da batida. Variações",
    "variacaoFacil": "A1 bate a cortada com os pés no chão a 3 metros da rede (70% de potência).",
    "variacaoDificil": "A1 salta na rede e bate com 90% de potência variando entre cintura e coxas de J1.",
    "meta": "Amortecer 7 de 10 cortadas fortes fazendo a bola subir alta dentro da própria quadra na Zona Alvo."
  },
  {
    "numero": 147,
    "secao": 9,
    "nome": "Defesa reflexa na altura do rosto e ombros (toque de defesa / mãos espalmadas)",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 atacante A1 e 1 defensor J1)",
    "tempo": "8 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Usar o recurso oficial da regra do vôlei de praia para bolas atacadas forte na altura da cabeça: defesa por cima com mãos espalmadas/concha firme.",
    "comoMontar": "A1 posiciona-se a 2m da rede na meia-quadra esquerda. J1 posiciona-se a 5 metros da rede na meia- quadra direita. Zona Alvo central a 2m da rede na direita.",
    "passoAPasso": [
      "Explicação da Regra da Praia: no vôlei de praia, quando a bola vem de um ATAQUE FORTE (hard-driven ball), a regra permite que o defensor faça o toque de defesa por cima mesmo que a bola seja levemente retida ou saia girando, desde que seja uma ação reflexa defensiva!",
      "J1 fica na base aos 5 metros com as mãos abertas na altura da cintura/peito.",
      "A1 bate bolas rápidas e tensas mirando especificamente na linha do peito, ombros e testa de J1.",
      "Em vez de tentar encolher os braços para fazer manchete no pescoço, J1 sobe rapidamente as duas mãos abertas e tensas acima do peito/testa (polegares próximos formando um escudo firme) e amortece a bola para o alto.",
      "A bola sobe no centro da quadra caindo na Zona Alvo; trocam a cada 8 bolas."
    ],
    "pontosAtencao": [
      "A permissão da regra vale EXCLUSIVAMENTE para bolas atacadas com velocidade/força: se a bola vier lenta (largada ou saque), não pode reter nos dedos!",
      "Deixe os dedos abertos e os punhos firmes inclinados para cima para que a bola suba em vez de bater no seu rosto.",
      "Flexione levemente os joelhos no impacto para ajudar a amortecer a pancada alta."
    ],
    "erroComum": "Virar o rosto de lado com medo da bola alta ou tentar juntar as mãos em soco mandando a bola longe; corrija mantendo o queixo baixo e as duas palmas firmes voltadas para frente/cima. Variações",
    "variacaoFacil": "A1 avisa 'ALTA!' antes de bater na linha da testa de J1 para treinar o posicionamento do escudo das mãos.",
    "variacaoDificil": "A1 mistura sem avisar: 1 bola forte na barriga (manchete) e 1 bola forte na testa (defesa alta de mãos abertas).",
    "meta": "Defender 7 de 10 bolas fortes altas controlando-as para o alto dentro da Zona Alvo central."
  },
  {
    "numero": 148,
    "secao": 9,
    "nome": "Avanço explosivo na bola curta (pingo e poke) mantendo o equilíbrio",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 atacante A1 e 1 defensor J1)",
    "tempo": "8 minutos",
    "material": "5 bolas, 3 cones e 1 zona alvo",
    "objetivo": "Acelerar da base de 5 metros até os 2 metros da rede para levantar bolas largadas curtas sem tocar na rede e sem perder o controle do corpo.",
    "comoMontar": "Na meia-quadra direita, coloque 1 cone a 5m da rede (base de J1) e 2 cones a 2m da rede (ponto de queda da bola curta). Demarque a Zona Alvo no centro a 2m da rede. A1 fica junto à rede na esquerda.",
    "passoAPasso": [
      "J1 aguarda em base baixa aos 5 metros da rede, com o peso na ponta dos pés.",
      "A1 simula que vai bater forte, mas aplica um 'poke' (nó dos dedos) ou largada curta que cruza a rede e cai em direção aos cones de 2 metros.",
      "J1 lê a desaceleração do braço de A1, explode para frente em 3 passadas rasantes e entra com a perna dominante em afundo amplo aos 2 metros.",
      "Com a manchete (ou uma mão fechada com dorso plano) paralela à areia, J1 levanta a bola antes que ela toque o chão, colocando-a na Zona Alvo ao lado.",
      "Retorna de costas até o cone de 5m e repete; trocam a cada 8 bolas."
    ],
    "pontosAtencao": [
      "Não corra olhando para o chão: mantenha os olhos na parte inferior da bola durante toda a arrancada.",
      "Como você está correndo rápido em direção à rede, incline a plataforma para trás/cima (quase 80 graus) para a bola subir verticalmente e não passar direto pela rede.",
      "Use o pé da frente deslizando na areia fofa para frear antes da linha central."
    ],
    "erroComum": "Balançar o braço para frente enquanto corre na bola curta, jogando a bola na fita da rede; corrija pedindo para apenas 'colocar a raquete do braço embaixo da bola' e deixar ela quicar para cima. Variações",
    "variacaoFacil": "J1 começa um pouco mais adiantado (a 4 metros da rede) e A1 faz um arco um pouco mais alto na largada.",
    "variacaoDificil": "J1 começa com um joelho apoiado na areia aos 5 metros; ao ver o movimento de A1, levanta e arranca para buscar a bola curta aos 2m.",
    "meta": "Alcançar e colocar 7 de 10 bolas curtas dentro da Zona Alvo sem encostar na rede."
  },
  {
    "numero": 149,
    "secao": 9,
    "nome": "Recuo com giro de quadril na bola alta no fundo (defesa de lob)",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (1 atacante A1 e 1 defensor J1)",
    "tempo": "8 minutos",
    "material": "5 bolas, 3 cones e 1 zona alvo",
    "objetivo": "Abandonar o hábito lento de correr de costas na areia, abrindo o quadril para correr de lado/frente e recuperar o lob a 7,5 metros da rede.",
    "comoMontar": "Na meia-quadra direita, coloque 1 cone adiantado a 3,5 metros da rede (posição inicial de J1) e 2 cones nos cantos de fundo a 7,5 metros da rede. Zona Alvo central a 2m da rede. A1 na rede esquerda.",
    "passoAPasso": [
      "J1 inicia no cone de 3,5 metros da rede (simulando um defensor que adiantou esperando largada).",
      "A1 aplica um 'lob' (bola alta por cobertura) enviando a bola por cima da cabeça de J1 em direção a um dos cones de 7,5 metros lá no fundo.",
      "Assim que vê a trajetória alta, J1 gira imediatamente o quadril 135 graus para o lado da bola e corre de frente/diagonal olhando por cima do ombro.",
      "Ao chegar no cone de 7,5m antes da bola cair, J1 planta o pé externo na areia, gira os ombros de volta para o centro da quadra e executa uma manchete alta e longa até a Zona Alvo.",
      "Alterna um lob no fundo esquerdo e um no fundo direito; trocam a cada 8 bolas."
    ],
    "pontosAtencao": [
      "Na areia fofa, tentar recuar pulando de costas faz o calcanhar travar nos buracos e o jogador cair sentado: gire o quadril no primeiro passo!",
      "Corra mirando meio passo ATRÁS de onde a bola vai cair para conseguir bater nela de trás para frente rumo à rede.",
      "Como a defesa vem lá dos 7,5 metros, use a extensão potente das pernas para a bola chegar na Zona Alvo aos 2m."
    ],
    "erroComum": "Tocar na bola ainda virado de costas para a rede, jogando a bola para fora da quadra de fundo; corrija exigindo que o pé mais próximo da linha de fundo pare atrás da bola virando o peito para a rede. Variações",
    "variacaoFacil": "Colocar os cones de fundo a 6 metros da rede (recuo mais curto de 2,5 metros).",
    "variacaoDificil": "A1 primeiro finge que vai largar curto (fazendo J1 dar 1 passo para frente aos 3m) e só então lança o lob aos 7,5m.",
    "meta": "Recuperar 7 de 10 bolas de lob no fundo (7,5m) trazendo-as altas para dentro da Zona Alvo a 2m da rede."
  },
  {
    "numero": 150,
    "secao": 9,
    "nome": "Leitura do ombro e do cotovelo do atacante (antecipação visual)",
    "nivel": "Intermediário",
    "jogadores": "2 ou 3 jogadores (1 atacante A1, 1 levantador L1 e 1 defensor J1)",
    "tempo": "9 minutos",
    "material": "5 bolas, 3 cones e 1 zona alvo",
    "objetivo": "Treinar os olhos do defensor para ler o giro de ombro (paralela vs. diagonal) e a queda do cotovelo (forte vs. largada) antes da mão tocar na bola.",
    "comoMontar": "A1 e L1 na meia-quadra esquerda. Na meia-quadra direita, J1 começa no cone central a 5,5m da rede, com 1 cone à sua esquerda (paralela), 1 à sua direita (diagonal) e 1 à frente (curta). Zona Alvo a 2m da rede.",
    "passoAPasso": [
      "L1 levanta a bola para A1 na entrada esquerda; J1 mantém o olhar fixo no OMBRO e no COTOVELO de A1 (não olha apenas para a bola)."
    ],
    "pontosAtencao": [
      "No ar, A1 dá uma pista corporal clara antes de bater:2 Pista 1: A1 mantém o cotovelo alto e aponta o peito/ombro para a linha -> J1 antecipa 1 passo lateral para a esquerda e defende o ataque na paralela. 3 Pista 2: A1 gira o peito para o meio da quadra -> J1 antecipa 1 passo para a direita e defende na diagonal. 4 Pista 3: A1 abaixa o cotovelo ou desacelera o braço -> J1 grita 'CURTA!' antes mesmo do toque na bola e dispara para a frente salvando o pingo! 5 Todas as defesas devem subir na Zona Alvo central; trocam a cada 10 ataques. 6 Um defensor que espera a bola sair da mão do atacante para começar a ler chega sempre atrasado na areia: a leitura acontece nos últimos 0,3 segundos ANTES do impacto!",
      "Cotovelo alto + costas arqueadas = vem pancada; cotovelo baixo ou mão na frente da testa = vem bola curta.",
      "Faça o 'split-step' (destrave dos pés na areia) no exato momento em que o atacante tira os pés do chão."
    ],
    "erroComum": "Ficar hipnotizado olhando só para a bola subindo e descendo sem olhar para o corpo do atacante; corrija pedindo para J1 gritar 'FORTE!' ou 'CURTA!' um instante antes da batida. Variações",
    "variacaoFacil": "A1 faz o ataque com os pés no chão sobre um caixote, exagerando no giro de ombros para facilitar a leitura inicial.",
    "variacaoDificil": "A1 tenta esconder o golpe até o último milissegundo, testando a reação pura de J1.",
    "meta": "Antecipar corretamente a direção/velocidade e defender 7 de 10 ataques dentro da Zona Alvo."
  },
  {
    "numero": 151,
    "secao": 9,
    "nome": "Leitura da qualidade do levantamento (ajustando a profundidade da base)",
    "nivel": "Intermediário",
    "jogadores": "3 jogadores (A1 atacante, L1 levantador e J1 defensor)",
    "tempo": "9 minutos",
    "material": "5 bolas, 4 cones e 1 zona alvo",
    "objetivo": "Aprender a recuar ou adiantar a base de defesa na areia conforme o levantamento adversário saia perfeito na rede ou afastado no fundo.",
    "comoMontar": "A1 e L1 na meia-quadra esquerda. Na meia-quadra direita, marque duas linhas de cones para J1: Linha Recuada (a 6 metros da rede) e Linha Adiantada (a 4 metros da rede). Zona Alvo a 2m da rede.",
    "passoAPasso": [
      "Regra Tática de Leitura na Praia: a posição do levantamento adversário dita onde a bola pode cair na sua quadra!",
      "A1 passa a bola para L1; L1 varia propositalmente o levantamento entre duas distâncias:",
      "Situação A (Levantamento Perfeito a 1m–1,5m da rede): como A1 tem ângulo para cravar para baixo com força total, J1 permanece firme na Linha Recuada (aos 6m) em postura baixa para amortecer a pancada.",
      "Situação B (Levantamento Ruim/Afastado a 3,5m–4m da rede): como de longe da rede A1 NÃO consegue bater para baixo (a rede impede!) e só pode mandar bola com arco ou largada curta, J1 avança imediatamente 2 metros na areia até a Linha Adiantada (aos 4m) enquanto a bola ainda está no ar!",
      "J1 estanca aos 4m e defende fácil a bola colocada ou o ataque em arco; rodam a cada 8 bolas."
    ],
    "pontosAtencao": [
      "Muitos defensores ficam enterrados lá nos 6,5 metros mesmo quando o adversário vai atacar lá do fundo da quadra dele, levando ponto bobo de largada no meio: se o levantamento deles ficou longe da rede, AVANCE!",
      "Da mesma forma, se o levantamento ficou muito baixo (abaixo da fita da rede), o atacante só pode empurrar a bola para cima: dê 2 passos para frente!",
      "Sempre pare os dois pés na nova base antes da mão do atacante tocar na bola."
    ],
    "erroComum": "Continuar correndo para a frente na hora exata em que o atacante bate na bola lá dos 4m e tomar um lob por cima da cabeça; corrija exigindo parada total na linha de 4m no instante do golpe. Variações",
    "variacaoFacil": "L1 grita 'PERTO!' ou 'LONGE!' ao levantar para criar o reflexo de ajuste de base em J1.",
    "variacaoDificil": "Incluir uma 3ª situação: levantamento passado demais para fora da antena (onde J1 fecha tudo para a diagonal porque A1 não pode bater na paralela).",
    "meta": "Ajustar a base no tempo certo e defender 7 de 10 bolas colocando-as na Zona Alvo central."
  },
  {
    "numero": 152,
    "secao": 9,
    "nome": "Técnica segura de peixinho e deslize na areia fofa",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (1 lançador/atacante A1 e 1 defensor J1)",
    "tempo": "9 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Executar o mergulho frontal (peixinho) entrando rente à areia sem bater os joelhos ou cotovelos, salvando bolas a 3 metros de distância.",
    "comoMontar": "J1 começa no cone a 5,5 metros da rede na meia- quadra direita. A1 fica junto à rede na esquerda com bolas. Zona Alvo central a 2 metros da rede na direita.",
    "passoAPasso": [
      "J1 posiciona-se em base bem baixa aos 5,5 metros.",
      "A1 envia uma bola curta e rápida a cerca de 2,5 a 3 metros à frente/diagonal de J1 (uma bola que não dá para alcançar apenas correndo em pé).",
      "J1 dá 2 passos explosivos mantendo o peito próximo ao joelho da frente e, no último apoio, projeta o corpo horizontalmente rente à areia (nunca pulando para cima antes de cair!).",
      "Toca por baixo da bola (com a manchete ou com o dorso/nó da mão fechada) antes de o corpo tocar o solo, levanta o queixo olhando para a bola subir e desliza sobre o peito/abdômen amortecendo com as mãos ao lado do peito.",
      "Empurra a areia imediatamente para ficar de pé; trocam a cada 6 peixinhos."
    ],
    "pontosAtencao": [
      "Segurança na areia: NUNCA mergulhe apontando a ponta do joelho ou a ponta do cotovelo para baixo!",
      "Entre rasante como um avião pousando de barriga na areia e mantenha o queixo erguido.",
      "Se a bola estiver a 1 centímetro da areia, use uma mão só espalmada no chão ou fechada em punho para criar um calço embaixo da bola.",
      "Toque na bola de baixo para cima (dando arco de 4 metros) para dar tempo de você se levantar."
    ],
    "erroComum": "Parar de correr cedo demais e se jogar de cima para baixo batendo pesado na areia; corrija pedindo um passo de afundo longo antes de deslizar o peito. Variações",
    "variacaoFacil": "Começar ajoelhado com um pé à frente a 3,5m da rede para treinar apenas o impulso rasante, o toque na bola e o deslize de peito.",
    "variacaoDificil": "Logo após salvar a primeira bola de peixinho, A1 solta uma segunda bola a 2 metros para o outro lado obrigando J1 a levantar em 1 segundo.",
    "meta": "Salvar 6 de 10 bolas no mergulho frontal fazendo-as subir limpas até a Zona Alvo com queda suave e segura."
  },
  {
    "numero": 153,
    "secao": 9,
    "nome": "Mergulho lateral com extensão de um braço (alcance máximo nas linhas)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (1 atacante/lançador A1 e 1 defensor J1)",
    "tempo": "9 minutos",
    "material": "5 bolas, 3 cones e 1 zona alvo",
    "objetivo": "Aumentar o raio de alcance lateral usando a impulsão da perna externa e a defesa de um braço só (punho/antebraço) quando não dá tempo de unir as duas mãos.",
    "comoMontar": "Na meia-quadra direita, coloque 1 cone central a 5m da rede (J1) e 2 cones junto às linhas laterais (a 3,5m de cada lado de J1). Zona Alvo no centro a 2m da rede. A1 na rede esquerda.",
    "passoAPasso": [
      "J1 começa no cone central (5m).",
      "A1 bate ou lança uma bola rápida e baixa bem aberta na direção de um dos cones da linha lateral (3,5 metros longe de J1).",
      "Quando a bola vai muito longe para o lado, tentar correr com as duas mãos juntas reduz o seu alcance em meio metro! J1 dá 1 passo cruzado explosivo e se projeta lateralmente esticando apenas o BRAÇO DE FORA.",
      "J1 toca por baixo da bola com o terço firme do antebraço ou com o punho fechado virado para cima, trazendo a bola alta de volta para o centro da quadra (Zona Alvo).",
      "Amortece a queda rolando sobre a lateral da coxa/costas na areia fofa e levanta rápido; realiza 4 para a direita e 4 para a esquerda."
    ],
    "pontosAtencao": [
      "Quando usar um braço só na defesa de praia, trave o punho rígido e aponte a superfície interna do antebraço para o centro da sua quadra (nunca para fora da linha lateral).",
      "Caia absorvendo o impacto na lateral do glúteo e das costas (rolamento lateral), nunca apoiando a mão esticada para trás para não forçar o punho ou o ombro.",
      "Mire a bola bem alta (5 metros) no meio da quadra para o seu parceiro alcançar."
    ],
    "erroComum": "Tentar levar as duas mãos juntas numa bola a 3,5 metros de distância lateral e a bola bater na ponta dos dedos indo para fora; corrija liberando o uso de um braço só nas bolas nos cones extremos. Variações",
    "variacaoFacil": "Posicionar os cones laterais a 2,5 metros do centro.",
    "variacaoDificil": "A1 finta o olhar para um lado e lança a bola rápida no cone lateral oposto.",
    "meta": "Recuperar 6 de 10 bolas extremas nas linhas laterais com um braço trazendo-as para dentro da Zona Alvo."
  },
  {
    "numero": 154,
    "secao": 9,
    "nome": "Defesa no corredor da paralela (com bloqueio fechando a diagonal - Sinal 2)",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (B1 bloqueador + J1 defensor contra A1 atacante + L1 levantador)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Posicionar-se corretamente na 'janela limpa' ao lado do bloqueio quando o parceiro mostra 2 dedos (fecha a diagonal), cobrindo o tiro na linha e o lob.",
    "comoMontar": "Na meia-quadra esquerda: A1 na ponta superior e L1 no centro. Na meia-quadra direita: B1 na rede mostrando 2 dedos (fecha a diagonal) e J1 posicionado no corredor da paralela superior a 5,5m da rede e a 1,2m da linha lateral. Zona Alvo a 2m da rede.",
    "passoAPasso": [
      "Antes da jogada, B1 mostra o sinal de 2 dedos nas costas para J1 (indicando que B1 vai trancar a diagonal de A1).",
      "L1 levanta para A1 na ponta; B1 dá um passo para dentro na rede fechando toda a sombra da diagonal.",
      "Enquanto B1 se posiciona, J1 ajusta a sua base a 5,5m da rede e a 1,2m da linha lateral, garantindo que consiga enxergar a bola e o braço de A1 PELA LATERAL EXTERNA do bloqueio de B1 (nunca fique escondido atrás das costas do seu bloqueador!).",
      "A1 ataca no corredor livre da paralela (cortada forte na linha, lob no fundo da linha ou pingo atrás do bloqueio).",
      "J1 defende no corredor da paralela subindo a bola na Zona Alvo central para B1 sair da rede e levantar; trocam após 8 bolas."
    ],
    "pontosAtencao": [
      "Regra de Ouro do Defensor com Bloqueio: se você não está enxergando os olhos e o ombro do atacante porque o seu bloqueador está na sua frente, VOCÊ está no lugar errado!",
      "Dê meio passo para o lado até sair da sombra do bloqueio.",
      "No corredor da paralela, mantenha o seu pé de fora (pé próximo à linha lateral) levemente à frente para rebater a bola para o centro da quadra e não deixá-la espirrar para a arquibancada.",
      "Fique atento a duas bolas principais na paralela: a pancada no seu peito (aos 5,5m) e o lob por cima do bloqueio lá no canto de 8m."
    ],
    "erroComum": "Ficar muito no meio da quadra desconfiando do bloqueio de B1 e tomar ponto na linha paralela que era sua responsabilidade; corrija desenhando o corredor de 3m da paralela que pertence a J1. Variações",
    "variacaoFacil": "A1 só pode atacar na paralela (batida forte ou lob), respeitando 100% o bloqueio de diagonal de B1.",
    "variacaoDificil": "A1 tem liberdade total e J1 precisa ler se a bola passou limpa na linha ou se desviou no dedo de B1.",
    "meta": "Defender 7 de 10 bolas atacadas no corredor da paralela colocando-as altas na Zona Alvo."
  },
  {
    "numero": 155,
    "secao": 9,
    "nome": "Defesa na diagonal (com bloqueio fechando a paralela - Sinal 1)",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (B1 bloqueador + J1 defensor contra A1 atacante + L1 levantador)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Cobrir toda a largura da diagonal aberta quando o bloqueador mostra 1 dedo (fecha a linha), ajustando o ângulo corporal para defender cortes fortes e cut shots.",
    "comoMontar": "Na meia-quadra esquerda: A1 na ponta superior e L1 no centro. Na meia-quadra direita: B1 na rede mostrando 1 dedo (fecha a paralela superior) e J1 posicionado na diagonal inferior a 5 metros da rede. Zona Alvo central a 2m da rede.",
    "passoAPasso": [
      "B1 mostra 1 dedo nas costas (fechando a paralela de A1).",
      "Quando o levantamento sobe para A1, B1 fecha a linha junto à antena e J1 corre para a posição de defesa na diagonal (a 5m da rede e a 2,5m da linha lateral oposta).",
      "Detalhe técnico vital na diagonal: J1 posiciona o corpo VIRADO DE FRENTE PARA O ATACANTE A1 (em diagonal de 45 graus, e não virado reto para a rede!).",
      "Como a diagonal é muito larga, J1 fica com o peso na ponta dos pés pronto para duas bolas: a pancada cruzada no corpo ou o 'cut shot' curto perto da linha lateral aos 2,5m.",
      "J1 defende o ataque cruzado de A1 mandando a bola alta na Zona Alvo central; rodam a cada 8 bolas."
    ],
    "pontosAtencao": [
      "Na defesa de diagonal, o seu pé mais próximo da linha lateral (pé da frente na diagonal) deve estar meio passo adiantado para fechar a porta e jogar a bola defendida de volta para o meio da quadra.",
      "Nunca fique a 7 metros de distância quando estiver defendendo a diagonal: a diagonal já é longa por natureza; posicione-se aos 4,5m–5m para alcançar também o cut shot!",
      "Enxergue o atacante por DENTRO do bloqueio do seu parceiro."
    ],
    "erroComum": "Ficar com os dois pés paralelos virados para a fita da rede ao defender uma bola que vem cruzada em diagonal, fazendo a bola bater num braço só e sair pela lateral; corrija alinhando o umbigo de J1 direto para o ombro de A1. Variações",
    "variacaoFacil": "A1 ataca apenas cortadas de meia-força e fortes na diagonal de J1.",
    "variacaoDificil": "A1 alterna livremente entre pancada na diagonal funda e cut shot curto na antena oposta.",
    "meta": "Defender 7 de 10 ataques cruzados na diagonal (fortes ou curtos) colocando a bola na Zona Alvo."
  },
  {
    "numero": 156,
    "secao": 9,
    "nome": "Defesa com dois jogadores no fundo (divisão 50/50 após saída do bloqueio)",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (J1 e J2 defensores contra A1 + L1)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Coordenar a divisão exata da quadra ao meio (4m de largura para cada defensor) quando o bloqueador faz o 'pulling' e recua para defender sem bloqueio.",
    "comoMontar": "A1 e L1 na meia-quadra esquerda. Na meia-quadra direita, J2 começa na rede (falso bloqueio) e J1 no fundo; coloque 2 cones a 5 metros da rede marcando o centro de cada metade da quadra (metade superior para J2 e metade inferior para J1). Zona Alvo a 2m da rede.",
    "passoAPasso": [
      "J2 mostra a mão fechada atrás das costas (sinal de que vai retirar da rede e jogar com 2 defensores no fundo).",
      "Assim que L1 levanta a bola para A1, J1 já ocupa o cone da metade inferior (diagonal) aos 5 metros e grita 'VEM PRA LINHA!'.",
      "J2 retira rápido da rede até o cone da metade superior (paralela) e estanca os dois pés aos 5 metros simultaneamente com J1.",
      "Com os dois plantados lado a lado cobrindo 4 metros cada um, A1 ataca em qualquer lugar da quadra.",
      "Quem estiver no lado da bola defende alto para a Zona Alvo central e o parceiro que não defendeu já avança imediatamente para levantar!"
    ],
    "pontosAtencao": [
      "Quando os dois defendem no fundo sem bloqueio, quem manda nas bolas que vêm na 'costura' (no meio entre os dois)?",
      "Regra padrão da praia: o defensor que JÁ estava no fundo (J1) tem a preferência de fechar o meio porque está mais equilibrado que o parceiro que acabou de correr da rede!",
      "Se A1 largar uma bola curta na frente da paralelo, é responsabilidade de quem retirou da rede (J2) voltar para pegar, pois está no corredor dele.",
      "Ambos precisam estar 100% parados na areia na hora da batida."
    ],
    "erroComum": "O bloqueador que retira (J2) correr demais para o meio da quadra invadindo o espaço de J1 e deixando o corredor da linha totalmente vazio; corrija marcando uma linha divisória na areia no meio da quadra. Variações",
    "variacaoFacil": "L1 faz levantamentos altos e afastados (aos 3m da rede) dando bastante tempo para J2 retirar e dividir a quadra com J1.",
    "variacaoDificil": "J2 decide na leitura (se o levantamento for perto ele bloqueia; se for longe ele grita 'SAÍ!' e retira), exigindo que J1 adapte sua posição no fundo em tempo real.",
    "meta": "Defender 7 de 10 ataques no sistema com 2 defensores no fundo sem bater cabeça no meio e colocando na Zona Alvo."
  },
  {
    "numero": 157,
    "secao": 9,
    "nome": "Cobertura do ataque do próprio parceiro (recuperando o bloqueio adversário)",
    "nivel": "Intermediário",
    "jogadores": "3 ou 4 jogadores (A1 atacante + J1 levantador/cobertura contra B1 bloqueador)",
    "tempo": "9 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Criar o hábito automático no levantador de nunca ficar parado olhando o parceiro atacar, aproximando-se em base baixa para salvar a bola que volta do bloqueio.",
    "comoMontar": "Na meia-quadra esquerda: A1 na ponta superior e J1 (levantador que fará a cobertura) no centro. Na meia- quadra direita: B1 na rede com a missão de bloquear todas as bolas de A1 para baixo.",
    "passoAPasso": [
      "J1 faz o levantamento para A1 na ponta esquerda.",
      "O que 90% dos amadores fazem após levantar? Ficam em pé com os joelhos esticados olhando A1 bater e levam ponto quando a bola bate no bloqueio de B1 e cai a 2 metros deles!",
      "Movimento obrigatório de J1: assim que a bola sai de suas mãos no levantamento, J1 dá 2 passos formando um semicírculo atrás de A1 (posicionando-se a 2,5 metros de distância de A1, no centro-curto da quadra) e ABAIXA O QUADRIL quase tocando a areia!",
      "A1 bate propositalmente contra o paredão de mãos de B1 para a bola rebater de volta na quadra esquerda.",
      "J1 reage em mergulho ou manchete baixa salvando a bola do bloqueio (1º toque) bem alta no centro para A1 levantar (2º toque) e J1 atacar na segunda chance (3º toque)!"
    ],
    "pontosAtencao": [
      "Na praia, cobrir o ataque do parceiro ganha jogos: o adversário comemora achando que fez um 'Monster Block', você salva a bola a 5 cm da areia e vira o ponto!",
      "Posicione-se a 2,5m–3m atrás e por dentro do seu atacante, exatamente no ângulo para onde as mãos do bloqueador B1 estão apontando.",
      "Fique muito baixo (peito quase no joelho), porque a bola que volta do bloqueio desce muito rápido."
    ],
    "erroComum": "Colar demais embaixo dos pés do próprio atacante (a 50 cm dele) e levar a bolada do bloqueio no rosto ou nas costas; corrija mantendo um raio de 2,5 metros ao redor do atacante. Variações",
    "variacaoFacil": "O professor fica do outro lado da rede segurando um escudo ou bola e rebate o ataque de A1 de forma controlada na direção da cobertura de J1.",
    "variacaoDificil": "B1 salta bloqueando pra valer e A1 tenta passar por B1; toda bola que bater em B1 e voltar na quadra esquerda vale 3 pontos se J1 salvar na cobertura!",
    "meta": "Recuperar para o alto pelo menos 6 de 10 bolas que rebateram no bloqueio adversário reconstruindo a jogada."
  },
  {
    "numero": 158,
    "secao": 9,
    "nome": "Defesa de bola que desvia na borda do bloqueio (reação e mudança de direção)",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (B1 + J1 contra A1 + L1)",
    "tempo": "10 minutos",
    "material": "5 bolas e 1 zona alvo",
    "objetivo": "Manter os pés destravados para mudar bruscamente de direção na areia quando o ataque raspa no dedo do seu bloqueador e perde velocidade ou muda de rota.",
    "comoMontar": "A1 + L1 na meia-quadra esquerda; B1 na rede e J1 no fundo da meia-quadra direita.",
    "passoAPasso": [
      "Uma das bolas mais difíceis de defender na areia é aquela em que você já armou o corpo para defender uma pancada na diagonal, mas a bola raspa na pontinha do dedo do seu bloqueador B1 e cai morta no meio ou sobe para fora da linha!",
      "L1 levanta para A1; B1 salta no bloqueio tentando tocar na bola e J1 faz o destrave no fundo.",
      "A1 bate mirando nas bordas das mãos de B1 (ou B1 abre as mãos em 'spread block' para raspar na bola).",
      "Assim que a bola desvia na mão de B1 (1º toque da dupla!), J1 freia o pé de apoio na areia, muda de direção para perseguir a bola desviada e usa o 2º contato já como LEVANTAMENTO alto para B1 (que desceu da rede) atacar no 3º toque!",
      "Lembrete: como tocou no bloqueio de B1, o contato de J1 no fundo já é o 2º toque da dupla!"
    ],
    "pontosAtencao": [
      "Para conseguir mudar de direção quando a bola raspa no bloqueio, você NUNCA pode cravar os calcanhares na areia nem adivinhar o lado correndo antes da batida: fique na ponta dos pés em equilíbrio!",
      "Ouça o barulho do impacto na rede e o grito 'TOCOU!' do seu bloqueador: se tocou no bloco, a sua defesa já tem que ir direto para a ponta da rede como levantamento.",
      "Se a bola raspou no bloqueio e está indo para fora da quadra na lateral, corra para fora da fita e traga-a alta para os 2 metros da rede."
    ],
    "erroComum": "Comprometer todo o peso do corpo caindo para um lado antes de a bola passar pelo bloqueio, ficando preso na areia quando a bola desvia; corrija exigindo base equilibrada nos dois pés no instante do salto de B1. Variações",
    "variacaoFacil": "O treinador fica na rede e desvia manualmente as bolas atacadas por A1 para J1 reagir e levantar no 2º toque.",
    "variacaoDificil": "A1 mistura bolas que passam limpas sem tocar no bloco (3 toques disponíveis) e bolas que raspam na mão de B1 (apenas 2 toques restantes).",
    "meta": "Reagir ao desvio no bloqueio e entregar um levantamento atacável no 2º contato em 6 de 10 bolas desviadas."
  },
  {
    "numero": 159,
    "secao": 9,
    "nome": "Defesa do 'cut shot' extremo (diagonal curtíssima junto à antena)",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (B1 + J1 contra A1 + L1)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 1 zona alvo",
    "objetivo": "Antecipar o giro de punho do atacante e cruzar a quadra em sprint diagonal máximo para salvar o cut shot a 1,5 metro da rede e da linha lateral.",
    "comoMontar": "A1 na ponta superior esquerda e L1 no centro. Na meia-quadra direita, B1 fecha a paralela superior na rede; J1 começa na base de diagonal (a 5m da rede). Coloque 2 cones demarcando a 'Zona Crítica de Cut Shot' na lateral inferior direita (a 2m da rede).",
    "passoAPasso": [
      "Quando B1 tranca bem a linha paralela, a jogada favorita dos atacantes avançados na praia é o 'cut shot' (cortar a bola fininha cruzando a rede para morrer aos 2 metros perto da antena oposta).",
      "J1 posiciona-se na diagonal a 4,5m–5m da rede.",
      "Quando A1 sobe para atacar, J1 observa a velocidade do braço e o giro do polegar de A1: ao perceber que A1 virou o punho para fora cortando o ângulo, J1 dispara em diagonal para a frente/direita em velocidade máxima.",
      "No último passo dentro da Zona Crítica de Cut Shot (aos 2m da rede), J1 mergulha estendendo o braço direito por baixo da bola com o punho/antebraço virado para DENTRO da quadra.",
      "A bola sobe alta para a Zona Alvo central onde B1 (saindo do bloqueio) levanta para J1!"
    ],
    "pontosAtencao": [
      "Detalhe técnico que salva o cut shot: quando você corre em direção à linha lateral para salvar o cut shot, se você tocar na bola com o braço reto, a bola continua indo para fora da lateral!",
      "Você precisa virar o polegar/antebraço para trás (para o centro da sua quadra).",
      "Se você perceber que o atacante tem o vício de dar cut shot toda hora, dê meio passo mais para a frente e para a lateral antes da batida.",
      "Levante da areia imediatamente após o mergulho porque você já está embaixo da rede pronto para bater o contra- ataque!"
    ],
    "erroComum": "Correr em linha reta para a frente e depois tentar virar para o lado, fazendo um 'L' lento na areia; corrija correndo em linha reta diagonal diretamente para o ponto onde a bola vai tocar a areia. Variações",
    "variacaoFacil": "A1 ataca exclusivamente bolas de cut shot (variando entre 2m e 3,5m da rede) para J1 calibrar o ângulo do sprint e do punho.",
    "variacaoDificil": "A1 finta a pancada forte no fundo e solta o cut shot (ou bate forte se J1 sair cedo demais da base de 5m).",
    "meta": "Salvar 6 de 10 bolas de cut shot extremo trazendo-as altas para dentro da Zona Alvo central."
  },
  {
    "numero": 160,
    "secao": 9,
    "nome": "Jogo de 'Gato e Rato': finta de defesa para induzir o erro do atacante",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (B1 + J1 contra A1 + L1)",
    "tempo": "10 minutos",
    "material": "5 bolas e 2 cones",
    "objetivo": "Enganar a visão periférica do atacante mostrando um corredor aberto enquanto ele olha para a quadra e correr para fechar esse mesmo corredor quando ele olha para a bola.",
    "comoMontar": "Dupla A1 + L1 na esquerda; Dupla B1 (bloqueio) + J1 (defesa) na direita.",
    "passoAPasso": [
      "Como funciona o 'Gato e Rato' no vôlei de praia? O atacante A1 sempre dá uma olhada rápida para a sua quadra quando o levantamento sobe e depois precisa voltar os olhos para a bola na hora de bater.",
      "Antes do saque, B1 mostra 1 dedo (vai bloquear a paralela) e J1 sabe que sua responsabilidade real é defender a DIAGONAL.",
      "Finta Visual de J1 (O 'Queijo'): enquanto o levantamento de L1 está subindo (e A1 está espiando a defesa), J1 fica parado atrás de B1 na PARALELA, deixando toda a diagonal escancarada e vazia de propósito!",
      "A1 vê a diagonal vazia e decide na cabeça dele: 'Vou bater na diagonal!'.",
      "No exato instante em que A1 levanta a cabeça para olhar a bola e saltar, J1 dá 2 passos cruzados explosivos em silêncio para a DIAGONAL, estanca os dois pés e a bola batida por A1 vem direto no peito de J1!"
    ],
    "pontosAtencao": [
      "Regra de ouro do Gato e Rato: você tem que começar a finta cedo (mostrando o lugar falso) e terminar de correr para o lugar verdadeiro ANTES da mão do atacante bater na bola!",
      "Se você ainda estiver correndo na hora da batida, você toma contrapé.",
      "Você também pode fazer a finta de profundidade: mostrar que está colado aos 3,5m (convidando o atacante a dar um lob no fundo) e recuar rápido aos 6,5m para pegar o lob na mão!",
      "Use o Gato e Rato de forma cirúrgica (2 ou 3 vezes por set nos pontos importantes) para confundir a leitura do adversário."
    ],
    "erroComum": "Sair atrasado da posição de finta e passar correndo na hora do ataque sem parar os pés; corrija sincronizando a corrida com o penúltimo passo de salto de A1. Variações",
    "variacaoFacil": "Treinar a finta sem bloqueador na rede (J1 mostra a paralela aberta e corre para a diagonal quando A1 salta).",
    "variacaoDificil": "A1 tenta ler no último milissegundo se J1 ficou ou correu, criando um duelo mental real entre atacante e defensor.",
    "meta": "Induzir e defender com sucesso pelo menos 6 de 10 ataques usando a finta visual de posicionamento."
  },
  {
    "numero": 161,
    "secao": 9,
    "nome": "Defesa com vento forte (ajuste de profundidade contra o vento e a favor)",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (B1 + J1 contra A1 + L1)",
    "tempo": "10 minutos",
    "material": "5 bolas e 4 cones",
    "objetivo": "Reposicionar a base de defesa 1,5m mais à frente quando o adversário ataca contra o vento e 1m mais ao fundo quando o adversário ataca a favor do vento.",
    "comoMontar": "Posicione cones de referência de profundidade nos dois lados da quadra: no lado onde o ataque adversário vem CONTRA o vento, coloque cones aos 4,5 metros; no lado onde o ataque adversário vem A FAVOR do vento, coloque cones aos 6,5 metros.",
    "passoAPasso": [
      "O vento muda completamente a geometria da defesa no vôlei de praia:",
      "Cenário 1 (O adversário A1 está atacando CONTRA o vento — o vento sopra das costas de J1 para a cara de A1): qualquer bola que A1 bater ou largar vai ser freada pelo vento e cair muito mais curta! Por isso, J1 adianta sua base para os 4,5 metros da rede (quase não existe bola longa no fundo contra o vento forte).",
      "Além disso, na hora de defender no Cenário 1, como o vento sopra das costas de J1 para a rede, J1 amortece a bola para os 2,5m da rede para o vento não jogar a defesa para o outro lado!",
      "Cenário 2 (O adversário A1 está atacando A FAVOR do vento): até um lob fraco de A1 viaja até a linha de 8 metros! J1 recua sua base para os 6,5 metros e deixa sair as bolas fortes na altura do peito (pois o vento vai jogá-las fora).",
      "Após 6 bolas no Cenário 1, as duplas trocam de lado da quadra para treinar 6 bolas no Cenário 2."
    ],
    "pontosAtencao": [
      "Quando o atacante adversário está com vento FORTE nas costas dele, a sua melhor defesa muitas vezes é a 'ESQUIVA': se ele bater forte da linha do seu quadril para cima quando você está aos 6,5m, abaixe-se que a bola vai 2 metros fora!",
      "Quando o atacante adversário está com vento na cara dele, esqueça a linha de fundo: proteja tudo dos 4,5 metros para a frente porque o pingo contra o vento cai feito chumbo.",
      "Ajuste também a força da sua manchete de defesa conforme o vento."
    ],
    "erroComum": "Tentar defender pancadas na altura do ombro quando o atacante está batendo a favor do vento, salvando bolas que iam cair longe fora da quadra; corrija premiando com 2 pontos cada bola fora deixada sair com leitura correta. Variações",
    "variacaoFacil": "Treinar 8 bolas seguidas no mesmo lado antes de inverter a quadra.",
    "variacaoDificil": "Trocar de lado da quadra a cada 2 pontos obrigando a dupla a reconfigurar a profundidade da defesa imediatamente.",
    "meta": "Conseguir 7 de 10 ações defensivas corretas (defesas na zona ou esquivas certas de bolas fora) nos dois lados do vento."
  },
  {
    "numero": 162,
    "secao": 9,
    "nome": "Defesa + Levantamento + Contra-ataque 1: pancada na diagonal e transição padrão",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (B1 + J1 contra A1 + L1)",
    "tempo": "11 minutos",
    "material": "5 bolas e 2 zonas alvo",
    "objetivo": "Transformar a defesa de uma cortada potente na diagonal em um contra-ataque mortal, conectando o amortecimento de J1, a saída da rede de B1 e a chamada de ataque de J1.",
    "comoMontar": "A1 + L1 na meia-quadra esquerda; B1 na rede (bloqueando a paralela) e J1 na diagonal (a 5,5m) na meia-quadra direita. Zona de Levantamento no centro direito (2m da rede).",
    "passoAPasso": [
      "L1 levanta para A1 na ponta; B1 fecha a linha paralela.",
      "A1 bate uma cortada forte na diagonal contra J1.",
      "1º Contato (Defesa): J1 planta os pés na areia, amortece a pancada recolhendo o abdômen e faz a bola subir a 4,5 metros de altura no centro da quadra (a 2m da rede).",
      "2º Contato (Transição do Bloqueador): B1 aterrissa do bloqueio já virando o pescoço, corre até o centro (2m), para os dois pés e levanta na ponta onde J1 já está entrando.",
      "3º Contato (Contra-ataque): J1, que não ficou admirando a própria defesa, abre meio passo para ajustar o ângulo, acelera na areia e finaliza o contra-ataque vencendo a defesa de A1 e L1!"
    ],
    "pontosAtencao": [
      "Para o defensor (J1): quanto mais alta você mandar a sua defesa (entre 4m e 5m de altura), mais tempo você dá para o seu bloqueador B1 sair da rede e para você mesmo correr para atacar!",
      "Defesa baixa e rápida no vôlei de praia mata o contra-ataque da própria dupla.",
      "Assim que defender, já grite onde você quer a bola ('Bola aqui na direita!' ou 'Deixa no meio!')."
    ],
    "erroComum": "O defensor amortecer a bola, cair sentado na areia e demorar 2 segundos para levantar, chegando atrasado no levantamento de B1; corrija usando o próprio impulso de recuo para já quicar de pé e abrir para a chamada. Variações",
    "variacaoFacil": "A1 bate na diagonal com 75% de força para garantir um alto volume de repetições completas de transição.",
    "variacaoDificil": "Ponto disputado até cair na areia: após o contra-ataque de J1, A1 e L1 tentam defender e contra-atacar de volta.",
    "meta": "Converter 6 de 10 sequências completas de Defesa de bola forte + Levantamento de B1 + Contra-ataque de J1."
  },
  {
    "numero": 163,
    "secao": 9,
    "nome": "Defesa + Levantamento + Contra-ataque 2: mergulho na curta, levantar da areia e atacar",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (B1 + J1 contra A1 + L1)",
    "tempo": "11 minutos",
    "material": "5 bolas",
    "objetivo": "Treinar a recuperação física explosiva de salvar uma bola curta de peixinho aos 2 metros da rede, levantar da areia, recuar 1 passo para tomar impulso e atacar.",
    "comoMontar": "A1 + L1 na esquerda; B1 na rede e J1 a 5,5m na direita.",
    "passoAPasso": [
      "L1 levanta para A1; B1 salta no bloqueio.",
      "A1 aplica uma largada curta (poke ou cut shot) que cai aos 2,5 metros da rede na quadra direita.",
      "J1 arranca dos 5,5m e mergulha de peixinho salvando a bola a poucos centímetros da areia, mandando-a bem alta (5m de altura) para o meio da quadra.",
      "Enquanto B1 sai da rede para levantar a bola, J1 (que está deitado na areia aos 2 metros da fita!) empurra a areia com os dois braços em uma flexão explosiva, fica de pé e dá 1 passo rápido para TRÁS/FORA (aos 3,5m) para reconstruir sua distância de chamada!",
      "B1 levanta a bola alta e a 1,5m–2m da rede, e J1 entra atacando para fechar o ponto!"
    ],
    "pontosAtencao": [
      "Se você mergulhou na frente aos 2 metros da rede e só levantar em pé parado no mesmo lugar, a bola levantada pelo seu parceiro vai cair nas suas costas: levante do chão JÁ dando 1 passo para trás/lado para abrir espaço de corrida!",
      "Dica para o levantador (B1): quando o seu parceiro está no chão depois de um peixinho na frente, levante a bola 1 metro mais ALTA e um pouco mais afastada da rede para salvá-lo!",
      "Caso não dê tempo de J1 dar 3 passos após levantar da areia, use o salto de 1 passo e aplique um 'poke' ou 'cut shot' inteligente."
    ],
    "erroComum": "Salvar a bola de peixinho dando um toquinho baixo de 2 metros de altura, sem dar tempo nem de B1 chegar nem de J1 levantar da areia; corrija exigindo que a bola de peixinho suba acima do topo das antenas. Variações",
    "variacaoFacil": "A1 solta a bola curta um pouco mais alta para J1 salvar em afundo profundo sem precisar deitar totalmente o peito.",
    "variacaoDificil": "A1 mistura sem aviso pancada no fundo (exercício 162) e pingo curto na frente (exercício 163).",
    "meta": "Completar 6 de 10 transições de mergulho na bola curta seguidas de recuperação do solo e ataque válido."
  },
  {
    "numero": 164,
    "secao": 9,
    "nome": "Defesa + Levantamento + Contra-ataque 3: busca do lob no fundo e inversão de atacante",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (B1 + J1 contra A1 + L1)",
    "tempo": "11 minutos",
    "material": "5 bolas",
    "objetivo": "Resolver a situação extrema em que o lob encobre o bloqueador e o defensor busca a bola lá nos 8 metros de fundo, decidindo entre atacar vindo do fundo ou inverter para o bloqueador atacar.",
    "comoMontar": "A1 + L1 na esquerda; B1 na rede (fechando a linha) e J1 na diagonal (a 4,5m) na direita.",
    "passoAPasso": [
      "A1 vê B1 na rede e J1 aos 4,5m e solta um 'lob' perfeito por cobertura que viaja até o canto de 8 metros da linha de fundo!",
      "J1 abre o quadril e corre em velocidade máxima até a linha de fundo (8m) perseguindo a bola.",
      "Lá na linha de 8 metros, a dupla treina as duas soluções táticas de alto nível:",
      "Solução A (Padrão): J1 chega atrás da bola aos 8m, vira o peito e manda uma defesa alta até os 2,5m da rede; B1 sai do bloqueio, levanta alto e J1 vem correndo os 6,5m para atacar.",
      "Solução B (Inversão Tática 'Você Bate!' quando J1 está caindo fora da quadra no fundo): J1 está tão longe lá atrás que não vai conseguir correr 8 metros na areia para atacar a tempo! Então J1 grita 'BATE VOCÊ!' e já manda o 1º toque (ou B1 dá o 1º e J1 dá o 2º do fundo) para o próprio bloqueador B1 abrir e atacar na rede!"
    ],
    "pontosAtencao": [
      "Muitas vezes na praia é o próprio BLOQUEADOR (B1) quem corre de volta para buscar o lob que passou por cima da cabeça dele!",
      "Se B1 correr do bloqueio e salvar o lob no fundo no 1º toque, J1 levanta no 2º toque e B1 (ou J1) ataca!",
      "Comunique-se durante a corrida para o fundo: quem tiver melhor ângulo pega o lob e o outro já se prepara na frente para levantar.",
      "Quando a defesa vem lá dos 8 metros de fundo, o levantador nunca deve acelerar o levantamento: levante uma bola bem alta!"
    ],
    "erroComum": "Os dois jogadores desistirem do lob achando que o parceiro vai buscar ou os dois correrem juntos para o canto de fundo deixando a rede vazia para o levantamento; corrija definindo: 'Lob na linha é do defensor; se o defensor estiver na diagonal extrema, o bloqueador busca!'. Variações",
    "variacaoFacil": "Treinar primeiro apenas a Solução A com J1 buscando o lob nos 7,5m e B1 levantando alto no centro.",
    "variacaoDificil": "A1 pode mandar o lob em qualquer um dos dois cantos de 8m da quadra (atrás de B1 na paralela ou atrás de J1 na diagonal).",
    "meta": "Salvar e converter em contra-ataque 6 de 10 bolas de lob enviadas nos últimos 1,5m do fundo da quadra."
  },
  {
    "numero": 165,
    "secao": 9,
    "nome": "Defesa + Levantamento + Contra-ataque 4: transição a partir de 2 defensores no fundo",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (J1 + J2 na defesa sem bloqueio contra A1 + L1)",
    "tempo": "11 minutos",
    "material": "5 bolas",
    "objetivo": "Acelerar a infiltração do defensor que NÃO tocou na bola quando os dois estão posicionados a 5,5 metros da rede (após falso bloqueio/retirada).",
    "comoMontar": "A1 + L1 na esquerda; J1 (inferior) e J2 (superior, que acabou de retirar da rede) lado a lado a 5,5 metros da rede na direita.",
    "passoAPasso": [
      "Quando a dupla escolhe jogar sem bloqueio (com J1 e J2 lá no fundo aos 5,5m), é muito mais fácil defender o ataque adversário, MAS o levantamento fica mais difícil porque os dois jogadores estão longe da rede!",
      "L1 levanta para A1; J2 retira da rede e para aos 5,5m ao lado de J1.",
      "A1 ataca (ex.: bate forte em cima de J1).",
      "No exato milissegundo em que a bola vai na direção de J1, J2 (que está aos 5,5m e NÃO vai defender a bola) já dispara em sprint máximo rumo à Zona de Levantamento (a 1,5m da rede)!",
      "J1 defende a bola bem alta (5m de altura) no centro para dar tempo de J2 percorrer os 4 metros de areia, frear os dois pés, levantar e J1 concluir o contra-ataque!"
    ],
    "pontosAtencao": [
      "Segredo da transição com 2 no fundo: se o parceiro que não defendeu esperar a bola subir da manchete do colega para só então começar a correr dos 5,5m até a rede, ele nunca vai chegar a tempo!",
      "Ele precisa arrancar no instante em que vê que a bola foi no parceiro!",
      "Por isso, quem defende com os dois no fundo tem a obrigação de mandar a defesa 1 metro MAIS ALTA que o normal.",
      "Se a bola defendida ficar curta aos 3,5m da rede, J2 freia aos 3,5m e levanta de dentro para fora."
    ],
    "erroComum": "Os dois defensores ficarem parados aos 5,5m olhando a defesa subir e só decidirem quem vai correr para levantar quando a bola já está caindo; corrija exigindo o grito 'SUA BOLA, EU LEVANTO!' na saída do ataque. Variações",
    "variacaoFacil": "A1 avisa antes em qual dos dois defensores vai bater para o outro já treinar o gatilho de arrancada para a rede.",
    "variacaoDificil": "A1 ataca nas costuras e nos cantos tentando dificultar tanto a defesa quanto a corrida de infiltração do levantador.",
    "meta": "Converter 7 de 10 contra-ataques saindo com os dois jogadores da linha de 5,5 metros sem atraso no levantamento."
  },
  {
    "numero": 166,
    "secao": 9,
    "nome": "Desafio sob pressão 'Muralha da Areia': só pontua quem defende e vira!",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (2 contra 2 em desafio de alta intensidade)",
    "tempo": "12 minutos",
    "material": "6 bolas",
    "objetivo": "Colocar à prova todo o sistema defensivo sob fadiga e pressão de placar em um jogo onde apenas a dupla que está defendendo pode somar pontos.",
    "comoMontar": "Quadra oficial 16x8m: Dupla da Muralha (B1 + J1) no lado direito sacando e defendendo; Dupla Atacante (A1 + L1) no lado esquerdo recepcionando.",
    "passoAPasso": [
      "Regras do Desafio 'Muralha da Areia': apenas o lado direito (Muralha) marca pontos no placar! Para marcar 1 ponto, a Dupla da Muralha precisa sacar, defender o ataque de A1/L1 e converter o contra-ataque!",
      "Bônus de Defesa Espetacular: se o contra-ataque vier após um mergulho de peixinho na areia ou busca de lob na linha de 8m, vale 2 PONTOS!",
      "Se a Dupla da Muralha defender e virar o ponto, o treinador já lança imediatamente uma 'Bola Extra de Pressão' do meio da quadra esquerda para A1/L1 atacarem de novo sem descanso!",
      "Se a Dupla Atacante (A1 + L1) matar o side-out na quadra da Muralha, eles não ganham ponto, mas ROUBAM o lado da Muralha e passam a sacar para tentar pontuar!",
      "Vence o desafio a primeira dupla a alcançar 10 pontos de defesa + contra-ataque."
    ],
    "pontosAtencao": [
      "Na praia, a defesa é antes de tudo ATITUDE MENTAL: a dupla que decide que 'nenhuma bola cai na nossa areia sem alguém estar deitado embaixo dela' intimida qualquer atacante!",
      "Converse antes de CADA saque: mudem os sinais atrás das costas (ora fechando linha, ora diagonal, ora falso bloqueio com Gato e Rato).",
      "Quando ganhar o direito à Bola Extra de Pressão sob cansaço, levante a bola de transição alta e segura no meio."
    ],
    "erroComum": "Deixar uma bola pingar na areia olhando para o parceiro sem se jogar nela; neste desafio, se uma bola cair na quadra da Muralha sem que nenhum dos dois jogadores toque na bola ou vá ao chão tentando, a dupla perde 1 ponto acumulado! Variações",
    "variacaoFacil": "Disputar até 7 pontos sem a Bola Extra imediata (apenas saques normais).",
    "variacaoDificil": "Exigir 2 defesas convertidas seguidas na mesma passagem pela Muralha para validar os pontos no placar geral.",
    "meta": "Alcançar 10 pontos de defesa convertida em contra-ataque mantendo 100% de entrega física (zero bolas caindo sem tentativa)."
  },
  {
    "numero": 167,
    "secao": 10,
    "nome": "Engrenagem de side-out em ritmo controlado (passe, infiltração e ataque)",
    "nivel": "Iniciante",
    "jogadores": "3 ou 4 jogadores (Dupla J1 + J2 no side-out e S1 + D1 do outro lado)",
    "tempo": "8 minutos",
    "material": "4 bolas, 3 cones e 2 zonas alvo",
    "objetivo": "Sincronizar os tempos de infiltração do levantador e de espera do passador na areia em uma sequência completa de três toques.",
    "comoMontar": "Na meia-quadra esquerda, posicione J1 (entrada/superior) e J2 (saída/inferior) a 5,5 metros da rede. Coloque 1 cone na Zona de Levantamento (centro a 1,5m da rede). Na meia-quadra direita, S1 fica a 5m da rede com bolas e duas Zonas Alvo nos cantos de fundo.",
    "passoAPasso": [
      "S1 envia uma bola lançada em arco (ou saque por baixo controlado) na direção de J1 aos 5,5 metros.",
      "Assim que a bola vai para J1, J1 grita 'MINHA!' e J2 inicia imediatamente a corrida diagonal de infiltração rumo ao cone central a 1,5m da rede.",
      "J1 faz a recepção alta para o centro e, em vez de disparar cego para a rede, faz 1 passo calmo de ajuste esperando a bola chegar nas mãos de J2.",
      "J2 estanca os dois pés no cone central e levanta alto para a entrada (a 1,5m da rede).",
      "J1 acelera os dois últimos passos ('direita-esquerda'), salta equilibrado e ataca mirando nas Zonas Alvo do fundo direito; fazem 5 bolas em J1 e 5 bolas em J2."
    ],
    "pontosAtencao": [
      "Sincronia da dupla: quem NÃO vai passar corre na hora em que a bola sai da mão do sacador; quem PASSOU espera a bola subir para acelerar!",
      "Mantenha o passe e o levantamento na faixa de 1,5 metro da rede para evitar toques na fita.",
      "Após o ataque de J1, J2 já faz o passo de cobertura atrás do parceiro."
    ],
    "erroComum": "O passador (J1) correr para a rede junto com o próprio passe e chegar embaixo da rede antes de J2 levantar; corrija exigindo uma pausa de leitura aos 3,5 metros até J2 tocar na bola. Variações",
    "variacaoFacil": "J2 já começa adiantado a 3 metros da rede para reduzir a distância da corrida de infiltração.",
    "variacaoDificil": "Exigir que o ataque final alterne obrigatoriamente entre 1 bola na paralela fundo e 1 bola na diagonal.",
    "meta": "Completar 8 de 10 sequências de side-out sem atraso nos pés e acertando as Zonas Alvo de fundo."
  },
  {
    "numero": 168,
    "secao": 10,
    "nome": "Side-out completo em ritmo de jogo a partir de saque real",
    "nivel": "Iniciante",
    "jogadores": "4 jogadores (Dupla J1 + J2 recebendo contra Dupla S1 + B1 sacando)",
    "tempo": "9 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Executar a rotina completa de side-out na velocidade real do saque vindo da linha de 8 metros, mantendo o equilíbrio na chamada de ataque.",
    "comoMontar": "Dupla J1 e J2 na meia-quadra esquerda a 5,5m da rede. Na meia-quadra direita, S1 atrás da linha de fundo (8m) para sacar por cima e B1 na rede marcando posição. Duas Zonas Alvo demarcadas na quadra direita.",
    "passoAPasso": [
      "S1 executa um saque por cima oficial da linha de 8 metros buscando qualquer ponto da meia-quadra esquerda.",
      "J1 e J2 definem na chamada verbal ('MINHA!' / 'VAI!') antes da bola cruzar a rede.",
      "O receptor escolhido desloca-se na areia, planta os pés e envia a recepção alta para a zona central (entre 1,5m e 2m da rede).",
      "O parceiro chega no centro, estabiliza a base e levanta na medida para o receptor fazer a aproximação e finalizar o ataque fugindo de B1 rumo às Zonas Alvo.",
      "Após 6 saques (3 em J1 e 3 em J2), as duas duplas invertem de função."
    ],
    "pontosAtencao": [
      "Como o saque agora vem com velocidade real da linha de 8m, o receptor precisa amortecer a bola para que o passe suba pelo menos 4 metros de altura.",
      "O atacante deve manter a bola sempre entre ele e o levantador durante a corrida.",
      "Não tente matar todas as bolas para baixo: use o fundo da quadra e os cantos."
    ],
    "erroComum": "Passar o saque rápido e baixo demais ('passe chutado'), impedindo que o parceiro chegue a tempo na areia fofa; corrija validando o ponto apenas se a recepção subir acima do topo da antena. Variações",
    "variacaoFacil": "S1 saca avisando previamente em qual dos dois receptores vai direcionar a bola.",
    "variacaoDificil": "S1 saca buscando a costura central ou as linhas laterais e entra rápido para tentar defender o ataque.",
    "meta": "Virar 7 de 10 side-outs a partir de saque real acertando o ataque dentro das Zonas Alvo."
  },
  {
    "numero": 169,
    "secao": 10,
    "nome": "Side-out com recepção fora da zona (passe preso aos 4 e 5 metros)",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (Dupla J1 + J2 contra S1 + B1)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo no fundo",
    "objetivo": "Adaptar a corrida do levantador e o freio do atacante quando o saque adversário quebra o passe e a bola sobe longe da rede (aos 4,5 metros).",
    "comoMontar": "Na meia-quadra esquerda, coloque 1 cone central a 4,5 metros da rede (onde a recepção deverá subir). J1 e J2 a 6m da rede. No lado direito, S1 saca e B1 fica na rede com duas Zonas Alvo nos últimos 3 metros do fundo.",
    "passoAPasso": [
      "S1 saca forte em J1; J1 amortece a bola fazendo-a subir alta no cone de 4,5 metros da rede (simulando um passe que ficou preso no meio-fundo da quadra).",
      "Ajuste do Levantador (J2): J2 NÃO corre para a fita da rede! Ele lê o passe curto, corre direto para o cone de 4,5m, planta o pé de trás e levanta em diagonal de dentro para fora tentando aproximar a bola até os 2m–2,5m da rede.",
      "Ajuste do Atacante (J1): vendo que J2 vai levantar lá dos 4,5m, J1 espera no fundo e freia a chamada mais longe da rede para não deixar a bola cair nas suas costas!",
      "J1 salta aos 2,5m da rede e ataca com arco alto e topspin (ou lob/cut) mirando nas Zonas Alvo do fundo direito (enquanto B1 faz o 'pulling' saindo da rede).",
      "Realizam 8 bolas e trocam de lado."
    ],
    "pontosAtencao": [
      "No vôlei de praia real, metade dos passes contra saques difíceis ficam a 3 ou 4 metros da rede: a dupla que não se desespera nessa bola vence o jogo!",
      "O atacante nunca deve passar da linha onde está o levantador antes da bola sair da mão dele.",
      "Quando atacar uma bola que veio de trás (dos 4,5m), olhe para a bola um instante a mais e bata para a frente/alto com giro de punho."
    ],
    "erroComum": "O atacante correr até a fita de 1 metro enquanto o parceiro está levantando lá nos 4,5 metros, tendo que voltar de costas sem saltar; corrija gritando 'ESPERA ATRÁS!' assim que o passe ficar curto. Variações",
    "variacaoFacil": "O professor lança a primeira bola direto no cone de 4,5m para J2 levantar e J1 ajustar a passada.",
    "variacaoDificil": "Ponto disputado até o fim: B1 lê que o passe ficou aos 4,5m, retira da rede e defende junto com S1.",
    "meta": "Converter 6 de 10 side-outs com recepção aos 4,5 metros sem bater nenhuma bola na rede."
  },
  {
    "numero": 170,
    "secao": 10,
    "nome": "Side-out com recepção espirrada na lateral (levantamento de ponta a ponta)",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (Dupla J1 + J2 contra S1 + D1)",
    "tempo": "10 minutos",
    "material": "5 bolas, 2 cones e 2 zonas alvo",
    "objetivo": "Reorganizar o ângulo de entrada do atacante quando o passe espirra para fora da linha lateral e o levantamento vem cruzando a quadra.",
    "comoMontar": "Na meia-quadra esquerda, coloque 1 cone a 1 metro fora da linha lateral superior (aos 4m da rede). J1 (superior) e J2 (inferior) na recepção. No lado direito, S1 saca e D1 defende.",
    "passoAPasso": [
      "S1 saca aberto na linha lateral de J1; a recepção de J1 espirra para fora da quadra na direção do cone lateral externo (ou J1 foi jogado lá fora para passar).",
      "J2 dispara do outro lado da quadra até o cone fora da linha lateral, planta o pé externo e levanta alto de volta para dentro da quadra (a 2m da rede e 2m da lateral).",
      "Reajuste do Atacante (J1): como J2 está levantando lá da linha lateral ao lado dele, J1 dá 2 passos para DENTRO da quadra antes de virar para atacar (entrando de dentro para fora) ou pede uma bola longa cruzando para o outro lado!",
      "J1 salta equilibrado longe da antena e ataca na diagonal ou paralela dentro da quadra direita.",
      "Fazem 4 bolas espirradas na esquerda e 4 na direita; depois invertem as duplas."
    ],
    "pontosAtencao": [
      "Quando o seu parceiro vai levantar uma bola fora da linha lateral do SEU lado, saia da frente dele abrindo para o meio da quadra para ter espaço de corrida!",
      "O levantador nunca deve mandar essa bola colada na rede (1m) para ela não cruzar por cima da antena.",
      "Ataque com segurança mirando do meio da quadra adversária para a diagonal."
    ],
    "erroComum": "J1 e J2 ficarem amontoados no mesmo metro quadrado fora da linha lateral sem espaço para levantar nem para saltar; corrija fazendo J1 correr para o centro da quadra assim que vê que seu passe fugiu para a lateral. Variações",
    "variacaoFacil": "O professor lança a bola no cone lateral externo enquanto J1 e J2 partem da base normal.",
    "variacaoDificil": "J2 levanta do cone lateral externo atravessando 6 metros de largura até a antena oposta para J1 cruzar toda a quadra e bater.",
    "meta": "Salvar e converter em ataque válido pelo menos 6 de 10 recepções espirradas na lateral sem tocar na antena."
  },
  {
    "numero": 171,
    "secao": 10,
    "nome": "Side-out contra bloqueio e defesa viva (leitura + chamada do levantador)",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (Dupla J1 + J2 contra Bloqueador B1 + Defensor D1)",
    "tempo": "10 minutos",
    "material": "5 bolas B1",
    "objetivo": "Integrar a qualidade da recepção e do levantamento com a comunicação em tempo real ('Linha!', 'Diago!', 'Por cima!') contra um sistema defensivo real.",
    "comoMontar": "Quadra oficial 16x8m em 2x2: J1 e J2 recebendo na esquerda; B1 na rede e D1 sacando/defendendo na direita.",
    "passoAPasso": [
      "Antes do saque de D1, B1 faz o sinal secreto nas costas (fechar linha, fechar diagonal ou retirar em falso bloqueio).",
      "D1 saca firme; J1 (ou J2) recepciona no centro da quadra a 1,5m da rede.",
      "Enquanto o parceiro levanta a bola, ele já levanta os olhos para ler o que B1 e D1 estão fazendo do outro lado da rede.",
      "Assim que a bola sobe no levantamento, o levantador grita a chamada tática clara para o seu atacante ('LINHA LIVRE!', 'CRUZADO CURTO!', 'SEM BLOCO, DOIS ATRÁS!').",
      "O atacante combina sua visão periférica com o grito do parceiro e finaliza o side-out; trocam a cada 6 saques."
    ],
    "pontosAtencao": [
      "No side-out de praia, o levantador é os 'olhos' do atacante: uma chamada rápida e certeira do levantador aumenta em 50% a chance de a bola cair no chão!",
      "Se B1 retirou da rede ('Dois atrás!'), avise imediatamente para o atacante não dar um lob inocente na mão de quem retirou.",
      "Varie o ritmo do levantamento (mais alto quando o passe foi longe, mais no ponto quando o passe veio na mão)."
    ],
    "erroComum": "O levantador ficar mudo após levantar e o atacante bater exatamente onde o bloqueador B1 e o defensor D1 armaram a armadilha; corrija anulando o ponto de ataque se o levantador não cantar a leitura em voz alta. Variações",
    "variacaoFacil": "B1 e D1 assumem suas posições finais cedo (logo após o passe de J1) para facilitar a leitura visual e o grito.",
    "variacaoDificil": "D1 aplica finta de 'Gato e Rato' no fundo, exigindo que o levantador faça duas chamadas ('Mostrou linha... FICOU NA LINHA, VAI DIAGO!').",
    "meta": "Virar 7 de 10 side-outs contra bloqueio e defesa viva com chamada tática em 100% das bolas."
  },
  {
    "numero": 172,
    "secao": 10,
    "nome": "Transição básica da defesa para o contra-ataque (defender, abrir e atacar)",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (B1 + J1 na transição de defesa contra A1 + L1)",
    "tempo": "10 minutos",
    "material": "5 bolas e 1 zona alvo de levantamento",
    "objetivo": "Automatizar a regra número 1 do contra-ataque na praia: quem defende a bola no fundo é quem se recompõe e corre para atacar!",
    "comoMontar": "Na meia-quadra direita: B1 na rede (bloqueador) e J1 no fundo a 5,5m (defensor), com uma Zona Alvo de levantamento marcada no centro a 2m da rede. Na meia-quadra esquerda: A1 e L1 atacando.",
    "passoAPasso": [
      "L1 levanta para A1 na esquerda; B1 salta no bloqueio na rede direita.",
      "A1 ataca na direção de J1 aos 5,5 metros da rede.",
      "Passo 1 (A Defesa Alta): J1 defende a bola subindo um arco alto (4,5m de altura) para a Zona Alvo central (aos 2m da rede) e grita 'SUBIU!'.",
      "Passo 2 (Saída da Rede do Bloqueador): B1 aterrissa do bloqueio, gira os ombros para dentro da quadra, corre até a Zona Alvo aos 2m e para os pés para levantar.",
      "Passo 3 (Abertura e Ataque do Defensor): imediatamente após defender, J1 dá 1 passo abrindo em direção à linha lateral (para ganhar ângulo de corrida), chama a bola ('AQUI NA PONTA!') e acelera para cravar o contra-ataque!"
    ],
    "pontosAtencao": [
      "Por que quem defendeu não corre em linha reta atrás da própria defesa?",
      "Porque se você correr reto atrás da bola que você mesmo subiu para o meio, você bate nas costas do seu levantador e fica sem ângulo para ver a quadra!",
      "Dê 1 passo para FORA (para a linha lateral) e depois entre!",
      "A altura da defesa é o que garante o tempo da transição: defesa baixa gera levantamento apressado.",
      "B1 deve levantar para o corredor de onde J1 já está vindo."
    ],
    "erroComum": "J1 defender a bola e ficar parado aos 5,5m esperando ver se B1 vai conseguir levantar para só depois começar a correr; corrija exigindo que o impulso pós-defesa já seja o primeiro passo de transição. Variações",
    "variacaoFacil": "A1 bate um ataque controlado na mão de J1 para treinar o desenho perfeito da corrida de abertura e chamada.",
    "variacaoDificil": "A1 ataca forte obrigando J1 a cair na areia na defesa, levantar rápido e ainda chegar a tempo de atacar.",
    "meta": "Completar 7 de 10 transições de defesa para contra-ataque com chegada equilibrada do atacante na rede."
  },
  {
    "numero": 173,
    "secao": 10,
    "nome": "Transição do bloqueador que sai da rede para atacar (após toque no bloco ou defesa do parceiro)",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (B1 bloqueador/atacante + J1 defensor/levantador contra A1 + L1)",
    "tempo": "10 minutos",
    "material": "5 bolas e 1 cone de recuo na antena A1 B1",
    "objetivo": "Treinar a mecânica de pés do bloqueador quando ele precisa sair da fita da rede, recuar 2,5m até a antena e voltar saltando para atacar o contra-ataque.",
    "comoMontar": "Na meia-quadra direita, B1 junto à rede, J1 no fundo e 1 cone de transição posicionado a 2,5 metros da rede junto à linha lateral superior. A1 e L1 na meia-quadra esquerda.",
    "passoAPasso": [
      "Quando é o BLOQUEADOR (B1) quem tem que atacar o contra-ataque na praia? Em duas situações clássicas: 1) Quando a bola tocou no bloqueio de B1 e sobrou para J1 levantar no 2º toque; ou 2) Quando J1 mergulhou tão longe lá fora da quadra no 1º toque que não consegue voltar para atacar e grita 'BATE VOCÊ!'!",
      "A1 ataca e a bola raspa no bloqueio de B1 (ou J1 salva caindo longe no fundo).",
      "Assim que B1 toca o chão após o salto de bloqueio, J1 grita 'ABRE QUE EU LEVANTO!'.",
      "B1 NÃO fica colado na fita: ele abre o quadril e faz um recuo explosivo de 2 passadas em diagonal para trás até pisar no cone de 2,5 metros na linha lateral!",
      "Do cone de 2,5m, B1 vira de frente e faz a chamada de 2 passos atacando o levantamento vindo de J1 lá do fundo!"
    ],
    "pontosAtencao": [
      "Se o bloqueador não recuar pelo menos até os 2,5 metros da rede antes de tentar atacar, ele não tem distância para saltar e a bola levantada do fundo passa por cima da cabeça dele!",
      "Essa transição 'Salta no bloco -> Recua em V até a antena -> Avança para bater' exige pernas rápidas na areia.",
      "Como o levantamento de J1 vem lá do fundo da quadra, B1 deve esperar a bola cruzar a frente do seu ombro antes de bater."
    ],
    "erroComum": "B1 descer do bloqueio e ficar parado a 50 cm da rede pedindo bola, conseguindo apenas empurrar a bola de ponta de dedo sem embalo; corrija obrigando B1 a tocar o pé no cone de 2,5m antes de saltar para atacar. Variações",
    "variacaoFacil": "O professor lança a bola alta no fundo para J1 levantar enquanto B1 salta no bloqueio, recua ao cone de 2,5m e ataca.",
    "variacaoDificil": "A1 varia entre uma bola que B1 amortece no bloco (B1 recua e ataca) e uma bola que passa limpa em J1 (B1 sai para levantar e J1 ataca).",
    "meta": "Executar 7 de 10 transições de recuo do bloqueador até os 2,5m seguidas de ataque potente sobre a rede."
  },
  {
    "numero": 174,
    "secao": 10,
    "nome": "Quebra de padrão: inversão de papéis quando o bloqueador defende a 1ª bola na rede",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (B1 + J1 contra A1 + L1)",
    "tempo": "10 minutos",
    "material": "5 bolas A1 B1",
    "objetivo": "Reagir instantaneamente quando o bloqueador retira ou amortece o 1º toque perto da rede, fazendo o jogador de fundo correr para levantar no 2º toque.",
    "comoMontar": "A1 + L1 na meia-quadra esquerda; B1 na rede e J1 no fundo (a 5,5m) na meia-quadra direita.",
    "passoAPasso": [
      "No padrão normal, J1 defende e B1 levanta. Mas o que acontece quando A1 larga uma bola curta ou bate em cima de B1 que estava retirando, e o PRÓPRIO B1 dá o 1º toque de defesa?!",
      "A1 vê B1 iniciando a retirada (ou vê um buraco curto) e joga a bola em cima de B1 aos 2,5 metros da rede.",
      "B1 reage no reflexo, defende a bola para o alto no centro da quadra (1º toque) e grita imediatamente: 'AJUDA! LEVANTA!'.",
      "Gatilho de Inversão: J1 (que estava lá nos 5,5m esperando defender) vê que B1 deu o 1º toque e dispara em sprint máximo do fundo até a rede para fazer o LEVANTAMENTO (2º toque)!",
      "Enquanto J1 corre para levantar, B1 se levanta da areia, abre 2 passos para a lateral e ATACA a bola no 3º toque!"
    ],
    "pontosAtencao": [
      "Essa 'quebra de padrão' pega muitas duplas de surpresa: se J1 ficar congelado no fundo olhando B1 defender a primeira bola na frente, ninguém chega para dar o segundo toque e a bola cai!",
      "Para B1: quando você der o 1º toque de defesa perto da rede, jogue a bola BEM ALTA (5 metros) porque o seu parceiro J1 vem correndo lá dos 5,5 metros!",
      "Lembrete da regra: se a bola bateu em B1 dentro da ação de bloqueio no alto da rede, o próprio B1 pode dar o 2º toque; mas se B1 já tinha saído do bloqueio e defendeu a bola aos 2,5m, ele NÃO pode tocar duas vezes seguidas — J1 tem que vir levantar!"
    ],
    "erroComum": "B1 defender a bola aos 2,5m fora da ação de bloqueio e dar um segundo toque seguido por instinto (cometendo falta de dois toques), ou a bola cair porque J1 não correu; corrija treinando o grito instantâneo 'LEVANTA VOCÊ!'. Variações",
    "variacaoFacil": "A1 joga todas as bolas curtas aos 2,5m na direção de B1 para automatizar a corrida de J1 do fundo para levantar.",
    "variacaoDificil": "A1 escolhe livremente entre bater em J1 no fundo (padrão normal) ou jogar em B1 aos 2,5m (quebra de padrão com inversão).",
    "meta": "Resolver 7 de 10 quebras de padrão com infiltração rápida de J1 e finalização de ataque de B1."
  },
  {
    "numero": 175,
    "secao": 10,
    "nome": "Transição relâmpago após defesa de bola curta (com opção de ataque de 2ª bola)",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (B1 + J1 contra A1 + L1)",
    "tempo": "10 minutos",
    "material": "5 bolas A1 B1",
    "objetivo": "Transformar uma largada curta adversária que obrigou o defensor a correr até a rede em um contra-ataque rápido de segunda bola ou levantamento curto.",
    "comoMontar": "A1 + L1 na meia-quadra esquerda; B1 na rede e J1 a 5m na meia-quadra direita.",
    "passoAPasso": [
      "Quando A1 aplica um 'poke' ou 'cut shot' curto e J1 corre até a frente para salvar a bola a 1,5 metro da rede, os dois jogadores (B1 e J1) terminam juntos colados na rede!",
      "Se a defesa de J1 na bola curta subir alta e próxima à fita (entre 1m e 1,5m da rede), B1 (que acabou de descer do bloqueio ao lado da bola) tem duas opções letais:",
      "Opção 1 (Ataque de Segunda Bola de Transição): como A1 e L1 ainda estão saindo do salto de ataque lá do outro lado, B1 grita 'DEIXA!' e já ataca a bola de segunda no espaço vazio!",
      "Opção 2 (Levantamento Curto / Chutado): se a defesa adversária já recuou esperando a bola de segunda, B1 levanta uma bola curta a 1 metro de distância para J1 (que já está na rede) saltar em 1 passo e cravar!",
      "Executam 8 bolas curtas alternando entre o ataque de segunda de B1 e a bola rápida para J1."
    ],
    "pontosAtencao": [
      "O contra-ataque de segunda bola após uma defesa perto da rede é devastador na praia porque o atacante adversário que largou a bola curta ainda está no chão junto à rede!",
      "Para permitir o ataque de segunda de B1, J1 precisa controlar o toque na defesa da bola curta para que ela suba limpa a 1,5m da fita.",
      "Se J1 continuar correndo depois de salvar a curta, cuidado para não esbarrar em B1 nem pisar na linha/rede."
    ],
    "erroComum": "Desperdiçar uma defesa que subiu perfeita na mão de B1 junto à rede fazendo um levantamento lento lá para a antena enquanto J1 já estava no meio da rede; corrija mantendo o jogo curto e rápido quando ambos estão na frente. Variações",
    "variacaoFacil": "A1 lança a bola curta aos 2m para J1 defender na mão de B1 e B1 atacar de segunda.",
    "variacaoDificil": "A1, após largar a bola curta, tenta bloquear B1 na rede caso B1 tente passar de segunda!",
    "meta": "Converter 7 de 10 transições de bola curta (usando 2ª bola de B1 ou ataque curto de J1)."
  },
  {
    "numero": 176,
    "secao": 10,
    "nome": "Desafio dos '5 Side-outs em Linha' (consistência máxima sob pressão)",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Dupla J1 + J2 no side-out contra S1 + B1)",
    "tempo": "11 minutos",
    "material": "6 bolas",
    "objetivo": "Treinar a regularidade mental e técnica para virar 5 bolas seguidas sem cometer erros não forçados, mesmo quando o sacador muda de estratégia.",
    "comoMontar": "Dupla J1 e J2 na meia-quadra esquerda (recebendo todos os saques); Dupla S1 e B1 na meia-quadra direita (sacando, bloqueando e defendendo).",
    "passoAPasso": [
      "Objetivo: Treinar a regularidade mental e técnica para virar 5 bolas seguidas sem cometer erros não forçados, mesmo quando o sacador muda de estratégia. Como montar na areia Dupla J1 e J2 na meia-quadra esquerda (recebendo todos os saques); Dupla S1 e B1 na meia-quadra direita (sacando, bloqueando e defendendo). Passo a passo Pontos de atenção Erro comum e correção: No 4º side-out seguido, ficar ansioso para acabar logo, acelerar a corrida de ataque antes do levantamento e bater na fita; corrija exigindo um 'toque de mãos' e 3 segundos de conversa da dupla antes da 4ª e 5ª bolas. Variações MAIS FÁCIL Meta reduzida para 3 side-outs seguidos (ou permitir '1 vida extra' onde o primeiro erro apenas congela a contagem sem zerar). MAIS DIFÍCIL Para fechar o 5º e último side-out da sequência, o ponto SÓ vale se for finalizado com um golpe colocado (cut shot, lob ou poke) na areia! Para aplicar em turma Em turmas de 4 a 12 alunos, coloque 2 duplas revezando no saque/defesa (lado direito) para manter a intensidade máxima tentando quebrar a sequência da dupla que está buscando os 5 em linha no lado esquerdo. Meta: Completar a sequência de 5 side-outs consecutivos em no máximo 2 séries de tentativa. Missão da Dupla J1 + J2: eles precisam conquistar 5 side- outs SEGUIDOS (5 pontos virados em sequência) para vencer a série!",
      "Regra de Pressão: se J1 e J2 estiverem com 3 ou 4 side- outs seguidos acumulados e errarem 1 ataque ou sofrerem 1 ponto de contra-ataque de S1/B1, o contador ZERA e eles voltam para o 0!",
      "Restrição de distribuição: nos 5 saques da sequência, S1 é obrigado a sacar pelo menos 2 vezes em J1, 2 vezes em J2 e 1 vez na costura central.",
      "Se J1 e J2 precisarem de uma segunda tentativa no mesmo rally (porque S1 defendeu o primeiro ataque) e mesmo assim vencerem o ponto, a sequência continua viva!",
      "Assim que batem os 5 seguidos (ou após 8 minutos), invertem os lados."
    ],
    "pontosAtencao": [
      "O que essa pressão de 'zerar no 4º ponto' ensina na quadra?",
      "Ensina que quando você precisa fechar uma sequência na praia, você NÃO arrisca uma bola na linha a 100 km/h: você passa alto no meio e usa o seu golpe de maior porcentagem de acerto!",
      "Se o primeiro ataque for defendido por S1, não entre em pânico: façam a transição de bloqueio e defesa e matem na segunda bola.",
      "Respirem juntos antes do 4º e do 5º saque."
    ],
    "erroComum": "No 4º side-out seguido, ficar ansioso para acabar logo, acelerar a corrida de ataque antes do levantamento e bater na fita; corrija exigindo um 'toque de mãos' e 3 segundos de conversa da dupla antes da 4ª e 5ª bolas. Variações",
    "variacaoFacil": "Meta reduzida para 3 side-outs seguidos (ou permitir '1 vida extra' onde o primeiro erro apenas congela a contagem sem zerar).",
    "variacaoDificil": "Para fechar o 5º e último side-out da sequência, o ponto SÓ vale se for finalizado com um golpe colocado (cut shot, lob ou poke) na areia!",
    "meta": "Virar 5 Side-outs seguidos (Erro zera a contagem!) Quadra 16x8m vista de cima. S1 e B1 na direita enviam bateria de 5 saques variados (setas 1a em J1, 1b na costura e 1c em J2). Na esquerda, J1 e J2 mantêm o padrão de passe no centro (seta 2), levantamento preciso (seta 3) e ataques de alta segurança (setas 4) para fechar 5/5 sem zerar o placar."
  },
  {
    "numero": 177,
    "secao": 10,
    "nome": "Side-out e transição com 'Bingo de Zonas' (vencer nos 3 setores da quadra)",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (2 contra 2 em quadra completa)",
    "tempo": "11 minutos",
    "material": "5 bolas e 6 cones demarcando 3 setores",
    "objetivo": "Forçar a dupla a variar o repertório de ataque tanto no side-out quanto na transição, proibindo o atacante de repetir o mesmo golpe toda hora.",
    "comoMontar": "Divida a meia-quadra direita em 3 Setores com cones nas laterais: Setor 1 (Curto: da rede até 3m), Setor 2 (Diagonal Média/Lateral: dos 3m aos 6m) e Setor 3 (Fundo: dos 6m aos 8m). J1 e J2 na esquerda; B1 e D1 na direita.",
    "passoAPasso": [
      "Para vencer uma rodada do 'Bingo da Areia', a dupla J1 + J2 precisa marcar pelo menos 1 ponto fazendo a bola cair na areia em CADA UM dos 3 setores (Setor 1 Curto + Setor 2 Diagonal/Meio + Setor 3 Fundo) E ainda marcar 1 ponto de Contra-ataque após defender!",
      "D1 saca e o rally corre livre valendo tudo.",
      "Se J1 matar o primeiro side-out com um cut shot no Setor 1 (Curto), o Setor 1 já está 'ticado/completo': se ele matar outra bola no Setor 1 depois, vale a posse mas não preenche os Setores 2 e 3 que faltam!",
      "Nos últimos pontos, B1 e D1 já sabem qual é o único setor que falta para J1 e J2 fecharem o Bingo e vão tentar proteger aquela zona com tudo, exigindo execução perfeita de J1/J2!",
      "Quem completar os 3 setores + 1 transição primeiro vence o set."
    ],
    "pontosAtencao": [
      "Esse exercício cura o vício de jogadores que só sabem bater diagonal forte ou só sabem largar curto: você é obrigado a ler a defesa e usar os 8 metros inteiros de profundidade da quadra!",
      "Quando faltar apenas o Setor 3 (Fundo) e o defensor D1 já estiver recuado lá atrás esperando, use a velocidade da batida na linha ou explore a mão alta do bloqueio para o fundo.",
      "Para conquistar o ponto obrigatório de transição, caprichem no bloqueio e na defesa quando virarem o saque."
    ],
    "erroComum": "Tentar forçar o setor que falta a partir de um levantamento horrível longe da rede; corrija ensinando a manter a bola viva em segurança primeiro e atacar o setor alvo na bola boa seguinte. Variações",
    "variacaoFacil": "Contar apenas o toque da bola no setor mesmo que o defensor D1 consiga tocar nela com dificuldade.",
    "variacaoDificil": "Exigir que TANTO J1 QUANTO J2 preencham individualmente os 3 setores cada um (total de 6 zonas carimbadas pela dupla).",
    "meta": "Completar os 4 requisitos (Setor 1 + Setor 2 + Setor 3 + 1 Ponto de Transição) em menos de 10 saques."
  },
  {
    "numero": 178,
    "secao": 10,
    "nome": "Jogo de 'Wash' clássico (Side-out + Bola de Transição para validar o ponto)",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (2 contra 2 + professor ou fila lançando a 2ª bola)",
    "tempo": "12 minutos",
    "material": "8 bolas",
    "objetivo": "Condicionar a dupla a nunca relaxar após virar o side-out, encadeando imediatamente uma defesa e um contra-ataque para conquistar 1 ponto real no placar.",
    "comoMontar": "Quadra oficial 16x8m: Dupla A (J1 + J2) na esquerda recebendo; Dupla B (B1 + D1) na direita sacando. Cesto de bolas ao lado do poste da rede.",
    "passoAPasso": [
      "Como funciona o famoso sistema 'WASH' do treinamento de elite do vôlei de praia? Nenhum ponto vale sozinho! Para ganhar 1 PONTO GRANDE no placar, a dupla precisa vencer DUAS bolas seguidas (o Side-out + a Transição)!",
      "Bola 1 (Side-out): D1 saca na Dupla A (J1 + J2). Eles jogam o ponto até o fim.",
      "Se a Dupla B (que sacou) vencer o rally da Bola 1, a Dupla B já recebe uma bola lançada na sua quadra para atacar e, se vencer de novo, ganha 1 Ponto Grande!",
      "Se a Dupla A (que recebeu) virar o Side-out na Bola 1, eles ainda NÃO ganharam o ponto: no mesmo segundo, o treinador (ou o próprio D1) bate/lança uma Bola 2 de ataque contra a defesa de J1 e J2!",
      "J1 e J2 precisam se posicionar rápido em bloqueio/defesa, defender a Bola 2, levantar e matar o contra-ataque para confirmar o seu 1 Ponto Grande (se perderem a Bola 2, dá 'Wash' = empate, 0 ponto para ninguém, e troca o saque!)."
    ],
    "pontosAtencao": [
      "Por que o treino de 'Wash' é o favorito dos treinadores de praia?",
      "Porque no jogo real, só virar side-out empata o jogo até 21x21; quem ganha campeonatos é quem vira o side-out E logo em seguida defende uma bola na transição!",
      "Assim que a Bola 1 cair no chão dando o side-out para você, NÃO comemore parado: um jogador já cola na rede para bloquear e o outro já recua aos 5,5m esperando a Bola 2!",
      "Se der 'Wash' (um ganhou a Bola 1 e o outro ganhou a Bola 2), ninguém pontua e a pressão sobe."
    ],
    "erroComum": "Virar um side-out lindo na Bola 1, relaxar a postura respirando fundo e levar a Bola 2 nas costas perdendo o ponto; corrija lançando a Bola 2 exatamente 2 segundos após a Bola 1 tocar a areia. Variações",
    "variacaoFacil": "A Bola 2 é enviada como uma 'bola de graça' alta por cima da rede para J1 e J2 organizarem a transição com mais facilidade.",
    "variacaoDificil": "A Bola 2 é batida forte sobre um caixote pelo treinador nos cantos da quadra de quem acabou de virar o side-out.",
    "meta": "Confirmar pelo menos 4 'Pontos Grandes' (vencendo Bola 1 de Side-out + Bola 2 de Transição seguidas)."
  },
  {
    "numero": 179,
    "secao": 10,
    "nome": "Maratona de Pontuação Tripla (Side-out + Defesa de Forte + Defesa de Curta/Lob)",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (2 contra 2 + lançador/treinador com cesto de bolas)",
    "tempo": "12 minutos",
    "material": "10 bolas",
    "objetivo": "Suportar um rally triplo de altíssima exigência física na areia fofa, mantendo a qualidade técnica do levantamento e do ataque até a 3ª bola.",
    "comoMontar": "Dupla A (J1 + J2) na meia-quadra esquerda; Dupla B (B1 + D1) na meia-quadra direita. Treinador (ou 3ª dupla) na lateral direita com bolas.",
    "passoAPasso": [
      "Cada entrada da Dupla A consiste em uma sequência ininterrupta de 3 bolas valendo até 3 pontos:",
      "Bola 1 (Side-out Oficial - vale 1 pt): D1 saca da linha de 8m; J1 e J2 precisam recepcionar, levantar e virar o ataque contra B1 e D1.",
      "Bola 2 (Transição de Pancada - vale 1 pt): no instante em que a Bola 1 termina, o treinador bate uma cortada forte no fundo da quadra esquerda; J1 (ou J2) amortece na defesa, o parceiro sai da rede para levantar e eles atacam contra B1 e D1!",
      "Bola 3 (Transição de Bola Curta ou Lob - vale 1 pt): assim que a Bola 2 termina, o treinador solta um pingo curto aos 2m da rede (ou um lob aos 8m); a dupla dá o último gás na areia, salva no peixinho, levanta alto e finaliza o 3º ataque!",
      "Se a Dupla A vencer as 3 bolas da série ('3 de 3'), ganha +1 ponto bônus (total 4 pontos); depois invertem os lados."
    ],
    "pontosAtencao": [
      "Entre a Bola 1 e a Bola 2, quem atacou na rede (ex.: J1) JÁ FICA NA REDE como bloqueador, e quem levantou (J2) já recua para defender no fundo!",
      "Não troquem de lugar à toa gastando perna na areia!",
      "Na Bola 3, com o pulmão queimando, a regra é: defesa a 5 metros de altura no centro da quadra para dar tempo ao parceiro.",
      "Na última batida sob fadiga, priorize o golpe de técnica (cut shot na diagonal ou cobra no fundo) em vez de pular baixo e bater na fita."
    ],
    "erroComum": "Quem acabou de atacar a Bola 1 na rede querer voltar correndo para o fundo mientras o parceiro que estava no meio corre para a rede, cruzando no caminho e levando a Bola 2 sem ninguém no fundo; corrija com a regra: 'Atacou na rede, vira bloqueador na hora!'. Variações",
    "variacaoFacil": "Dar 4 segundos entre cada bola da trinca para a dupla se reposicionar na base.",
    "variacaoDificil": "A Dupla A SÓ marca os pontos da rodada se vencer pelo menos 2 das 3 bolas (se fizer apenas 1 de 3, zera a rodada).",
    "meta": "Conquistar pelo menos 2 pontos por trinca em 80% das séries e alcançar pelo menos um '3 de 3' perfeito."
  },
  {
    "numero": 180,
    "secao": 10,
    "nome": "Cenário de Fim de Set (19x20): Side-out de sobrevivência e contra-ataque do título",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Jogo 2x2 com placar simulado de pressão)",
    "tempo": "12 minutos",
    "material": "5 bolas",
    "objetivo": "Treinar a tomada de decisão emocional e tática nos dois momentos mais tensos de uma partida: salvar um Set Point no side-out e virar o jogo na transição.",
    "comoMontar": "Quadra oficial 16x8m: Dupla A (J1 + J2) começa no lado esquerdo perdendo o set por 19 x 20 (recebendo o saque); Dupla B (B1 + D1) começa no lado direito vencendo por 20 x 19 (com o saque na mão para fechar o jogo).",
    "passoAPasso": [
      "O placar começa sempre em 19 x 20 contra a dupla receptora (Dupla A).",
      "Momento 1 (Side-out de Sobrevivência no 19x20): a Dupla B saca com tudo para fechar o set; a Dupla A tem a obrigação de manter a cabeça fria, passar na zona de segurança e virar o side-out para empatar em 20 x 20!",
      "Momento 2 (A Transição da Virada no 20x20): se a Dupla A empatou em 20x20, agora o saque passa para a mão da Dupla A! A Dupla A precisa combinar o sinal de bloqueio, sacar taticamente, defender o ataque da Dupla B e matar o contra-ataque para fazer 21 x 20!",
      "Momento 3 (Fechando na Diferença de 2 Pontos): o mini- set continua com a regra oficial (precisa abrir 2 pontos de vantagem: 22x20, 23x21...) até uma das duplas fechar.",
      "Ao terminar cada mini-set dramático, invertem quem começa no 19x20 e quem começa no 20x19."
    ],
    "pontosAtencao": [
      "Lição de ouro para o 19x20 (quando você está atrás no placar recebendo o saque): qual é o único pecado mortal no 19x20?",
      "Errar o ataque na rede ou para fora de graça!",
      "Obrigue o adversário a jogar e escolha o seu golpe mais confiável!",
      "Quando empatar em 20x20 e for sacar, cumpra 100% o sinal mostrado pelo bloqueador nas costas.",
      "Gerencie o tempo entre os pontos: use os 12 segundos permitidos para caminhar na areia, baixar a frequência cardíaca e combinar a jogada com o parceiro."
    ],
    "erroComum": "No 19x20, querer inventar um golpe que nunca treinou na vida (tentar um cut shot impossível caindo para trás) em vez de usar o 'feijão com arroz' bem feito na diagonal; corrija fazendo um breve feedback tático após cada mini-set. Variações",
    "variacaoFacil": "Começar o placar empatado em 19 x 19 (sem a desvantagem inicial de 1 ponto).",
    "variacaoDificil": "Começar em 18 x 20 (a Dupla A precisa salvar DOIS Set Points seguidos — 1 side-out + 1 transição de bloqueio/defesa — apenas para chegar ao 20x20!).",
    "meta": "Conseguir salvar o Set Point e vencer o mini-set de virada (saindo de 19x20 para 22x20 ou mais) em pelo menos 2 de 4 tentativas."
  },
  {
    "numero": 181,
    "secao": 11,
    "nome": "Chamada na costura e regra de prioridade ('Minha!' / 'Sua!')",
    "nivel": "Iniciante",
    "jogadores": "3 jogadores (Dupla J1 + J2 recebendo/defendendo e 1 sacador/lançador S1)",
    "tempo": "8 minutos",
    "material": "5 bolas, 4 cones e 1 zona alvo na rede",
    "objetivo": "Eliminar a hesitação nas bolas enviadas entre os dois jogadores aplicando o protocolo de chamada dupla ('Minha!' + resposta 'Vai/Sua!') e a regra de prioridade do ombro interno.",
    "comoMontar": "Na meia-quadra esquerda, posicione J1 (entrada/superior) e J2 (saída/inferior) a 5,5 metros da rede. Coloque 2 cones delimitando um corredor central de 2 metros de largura ('A Costura') exatamente entre eles, e demarque uma Zona Alvo a 1,5m da rede. S1 fica na linha de fundo direita (8m).",
    "passoAPasso": [
      "Antes de começar, a dupla estabelece a Regra de Prioridade da Costura: para dois jogadores destros, J1 (lado esquerdo) tem a prioridade nas bolas de dúvida no meio porque recebe de frente com o seu lado dominante; ou a prioridade é de quem estiver meio passo à frente.",
      "S1 saca ou lança todas as bolas buscando o corredor central de 2 metros entre J1 e J2.",
      "Protocolo de Dupla Voz Obrigatório: antes de a bola cruzar a fita da rede, quem vai tocar na bola grita alto 'MINHA!' e o parceiro é OBRIGADO a responder no mesmo segundo 'VAI!' ou 'SUA!' enquanto já dispara para a rede.",
      "Quem gritou 'MINHA!' fecha o passo em diagonal para frente cortando a trajetória da bola e passa para a Zona Alvo a 1,5m da rede.",
      "Quem respondeu 'VAI!' chega na Zona Alvo, estanca os pés e agarra/levanta a bola; a cada 6 bolas, invertem os lados de J1 e J2."
    ],
    "pontosAtencao": [
      "Não basta apenas um jogador gritar 'Minha!': a resposta 'Vai/Sua!' do parceiro destrava o cérebro do passador e garante que os dois não vão encolher o braço achando que o outro também falou.",
      "A chamada deve acontecer no primeiro terço do voo da bola (antes de ela passar por cima da fita da rede).",
      "Nas bolas altas de defesa no meio da quadra, quem vem correndo de FRENTE para a bola sempre tem prioridade sobre quem está recuando de costas."
    ],
    "erroComum": "Os dois gritarem 'Minha!' ao mesmo tempo e pararem no último metro olhando um para a cara do outro; corrija definindo antes do saque quem é o 'dono da costura' naquela rotação. Variações",
    "variacaoFacil": "S1 lança a bola em arco alto a partir de 4 metros da rede do outro lado, dando mais tempo para o diálogo 'Minha! - Vai!'.",
    "variacaoDificil": "S1 mistura bolas na costura curta (3m da rede) e na costura funda (7,5m), exigindo que quem está mais adiantado chame a curta e quem está mais recuado chame a funda.",
    "meta": "Executar 9 de 10 recepções na costura com diálogo completo ('Minha!' + 'Vai!') antes da rede e passe na Zona Alvo."
  },
  {
    "numero": 182,
    "secao": 11,
    "nome": "Dicionário prático de sinais de bloqueio atrás das costas (2 mãos)",
    "nivel": "Iniciante",
    "jogadores": "4 jogadores (B1 bloqueador + D1 sacador/defensor contra A1 + A2)",
    "tempo": "9 minutos",
    "material": "5 bolas e 4 cones 1",
    "objetivo": "Dominar a sinalização com as duas mãos atrás do quadril antes do saque (1 dedo, 2 dedos, mão fechada e mão aberta) e a confirmação visual/verbal do parceiro.",
    "comoMontar": "No lado direito: B1 junto à rede (a 0,5m da fita) de costas para D1 (que está na linha de fundo de 8m para sacar). No lado esquerdo: A1 (na esquerda) e A2 (na direita) a 5,5m da rede.",
    "passoAPasso": [
      "Antes do apito para o saque, B1 posiciona as duas mãos atrás do quadril: a mão ESQUERDA sinaliza o bloqueio contra A1 (receptor da esquerda) e a mão DIREITA sinaliza o bloqueio contra A2 (receptor da direita).",
      "A dupla treina os 4 sinais oficiais da praia em sequência: 1 Dedo = bloqueio fecha a Paralela (defensor vai na diagonal); 2 Dedos = bloqueio fecha a Diagonal (defensor vai na paralela); Mão Fechada (Punho) = bloqueio vai direto na Bola; Mão Aberta (5 dedos) = Falso bloqueio / Retirada ('Saio da rede').",
      "D1 lê as duas mãos de B1 e dá o sinal de confirmação dizendo baixinho ou acenando com a cabeça antes de sacar (ex.: B1 mostra `[1 | 2]` -> se D1 sacar em A1, B1 fecha a linha e D1 corre para a diagonal).",
      "Para indicar em QUEM D1 deve sacar, B1 'pisca' (dobra e estica repetidamente) os dedos da mão correspondente àquele receptor!",
      "Executam 8 saques passando por todos os 4 códigos e depois trocam com A1 e A2."
    ],
    "pontosAtencao": [
      "Mantenha as mãos coladas no calção/lombar e longe da luz lateral para que a sombra na areia não mostre o seu sinal para os adversários!",
      "Nunca tire as mãos das costas antes de ter certeza de que o seu sacador olhou e entendeu o sinal.",
      "Se durante o rali a bola mudar de atacante (ex.: A1 passou mal e A2 vai atacar de segunda), vale o sinal que estava na mão DIREITA!"
    ],
    "erroComum": "O bloqueador mostrar 1 dedo com a mão direita achando que está falando do atacante que está à esquerda dele; corrija lembrando a regra espacial: 'Mão do lado esquerdo do corpo = adversário daquele lado; mão do lado direito = adversário do outro lado'. Variações",
    "variacaoFacil": "Usar apenas os sinais de 1 dedo (Paralela) e 2 dedos (Diagonal) mantendo a mesma combinação para os dois lados (`[1 | 1]` ou `[2 | 2]`).",
    "variacaoDificil": "D1 tem direito de 'recusar/alterar' o sinal dando um assobio curto antes do saque caso prefira defender outro corredor, obrigando B1 a trocar o sinal nas costas na hora.",
    "meta": "Acertar 10 de 10 leituras e execuções dos sinais duplos atrás das costas sem nenhuma confusão entre B1 e D1."
  },
  {
    "numero": 183,
    "secao": 11,
    "nome": "O levantador como 'olhos' do atacante: chamada precoce do espaço vazio",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (J1 atacante + J2 levantador contra B1 bloqueador + D1 defensor)",
    "tempo": "10 minutos",
    "material": "5 bolas e 3 zonas alvo",
    "objetivo": "Treinar o levantador para tirar o olho da bola assim que ela sai das suas mãos, escanear a defesa adversária e gritar o golpe exato antes de o parceiro bater.",
    "comoMontar": "Na meia-quadra esquerda: J1 (atacante na entrada) e J2 (levantador no centro a 1,5m da rede). Na meia-quadra direita: B1 na rede e D1 no fundo, com 3 Zonas Alvo demarcadas (Linha Paralela, Diagonal Cruzada e Curta/Lob).",
    "passoAPasso": [
      "J1 faz a recepção para o centro da quadra (1,5m da rede) e inicia a corrida de ataque mantendo os olhos focados na bola no alto.",
      "J2 executa o levantamento limpo e, no exato instante em que a bola deixa as suas mãos, J2 vira o rosto para a quadra direita (olhando para B1 e D1).",
      "Enquanto J1 está nos dois últimos passos na areia, B1 e D1 se movimentam para fechar uma parte da quadra e deixar outra aberta de propósito.",
      "J2 precisa gritar UMA das 4 palavras-código em alto e bom som antes de J1 atingir o topo do salto: 'LINHA!' (paralela aberta), 'CRUZADO!' (diagonal aberta), 'CURTA!' (defensor recuado aos 7m) ou 'ALTA NO FUNDO!' (ambos adiantados).",
      "J1 ataca obedecendo cegamente ao comando de voz de J2; a cada 8 ataques, J1 e J2 trocam de função."
    ],
    "pontosAtencao": [
      "O erro clássico é gritar tarde demais (quando a mão do atacante já está batendo na bola): o grito tem que sair enquanto o atacante está SUBINDO do chão!",
      "Seja específico e use uma palavra só: não grite frases longas como 'Olha que ele abriu na diagonal!'; grite 'CRUZADO!' ou 'PINGA!'.",
      "Se os dois adversários deixarem o meio aberto ou se o levantamento ficou ruim, o comando de segurança é 'ALTA NO FUNDO!'."
    ],
    "erroComum": "O levantador J2 continuar olhando para cima acompanhando a própria bola levantada até a mão de J1, sem olhar para o bloqueio/defesa adversária; corrija obrigando J2 a falar quantos dedos D1 mostrou lá do outro lado após o levantamento. Variações",
    "variacaoFacil": "Trabalhar apenas com 2 comandos ('LINHA!' ou 'CRUZADO!') contra 1 bloqueador na rede.",
    "variacaoDificil": "D1 faz finta na defesa (finge que vai para a linha e volta para a diagonal), obrigando J2 a cantar a confirmação em duas etapas: 'Linha... FICOU LINHA!'.",
    "meta": "Cantar a zona livre no tempo certo e acertar o ataque guiado pela voz em 7 de 10 repetições."
  },
  {
    "numero": 184,
    "secao": 11,
    "nome": "Radar na rede: avisando a movimentação do bloqueador ('Subiu!', 'Saiu!', 'Dois atrás!')",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (J1 + J2 no ataque contra B1 + D1 variando bloqueio e retirada)",
    "tempo": "10 minutos",
    "material": "5 bolas e 2 cones",
    "objetivo": "Alertar imediatamente o atacante quando o bloqueador adversário finge o bloqueio e retira da rede, evitando que o atacante dê um lob fácil nas mãos dele.",
    "comoMontar": "Dupla J1 e J2 na meia-quadra esquerda; B1 na rede direita e D1 no fundo direito (a 5,5m).",
    "passoAPasso": [
      "Muitas vezes o atacante salta achando que B1 está bloqueando na sua frente e dá um 'lob' ou 'poke' por cima do bloqueio — sem perceber que B1 recuou ('pulling') e está parado esperando essa bola fácil!",
      "D1 saca em J1; J1 recepciona e J2 vai levantar.",
      "Assim que a bola sai da mão de J2, B1 faz uma de três ações na rede: 1) Fica e salta no bloqueio; 2) Retira rápido para a paralela; 3) Retira rápido para a diagonal.",
      "J2 acompanha B1 e grita imediatamente o status do bloqueio para J1: 'SUBIU BLOCO!' (há bloqueio real na frente), 'SAIU LINHA!' (bloqueador recuou para a paralela, pinga na frente dele!) ou 'DOIS ATRÁS!' (quadra sem bloqueio, pode sentar o braço ou pingar curto!).",
      "Quando J1 ouve 'SAIU LINHA!' ou 'DOIS ATRÁS!', é proibido dar lob no fundo: J1 ou bate forte nos 5 metros ou solta a largada curta aos 2 metros onde B1 abandonou a rede!"
    ],
    "pontosAtencao": [
      "O aviso 'SAIU!' ou 'SEM BLOCO!' vale ouro no vôlei de praia: ele libera o atacante para bater para baixo sem medo de paredão ou jogar um pingo curto na frente.",
      "Se o bloqueador adversário (B1) saiu da rede atrasado e ainda está correndo de costas aos 3 metros, o melhor aviso de J2 é: 'NO PÉ DELE!'.",
      "Mantenha o tom de voz firme e calmo para não assustar o atacante no ar."
    ],
    "erroComum": "Gritar apenas 'Olha o bloco!' sem dizer se o bloqueador FICOU na rede ou se SAIU para o fundo; corrija padronizando os dois termos opostos: 'FICOU!' vs. 'SAIU!'. Variações",
    "variacaoFacil": "B1 decide se fica ou se sai logo que a recepção de J1 sobe, dando 2 segundos inteiros para J2 avisar.",
    "variacaoDificil": "B1 faz o falso bloqueio até o último instante e só retira quando J2 toca na bola, exigindo reflexo vocal instantâneo de J2.",
    "meta": "Identificar 8 de 10 retiradas/permanências do bloqueio com aviso vocal preciso e escolha correta do golpe por J1."
  },
  {
    "numero": 185,
    "secao": 11,
    "nome": "Comunicação ativa de saque e chamada de 'Pulling' na transição defensiva",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (B1 + D1 sacando e comunicando na defesa contra A1 + A2)",
    "tempo": "10 minutos",
    "material": "5 bolas e 2 cones A1 A2 B1 D1 B1: 'SAÍ!",
    "objetivo": "Conectar o pedido de alvo de saque antes do ponto com a comunicação vocal durante o rali caso o bloqueador precise abortar o bloqueio ('Saí! Livre!').",
    "comoMontar": "B1 na rede direita e D1 na linha de saque direita (8m). A1 e A2 na recepção esquerda (5,5m).",
    "passoAPasso": [
      "Fase 1 (Comunicação Pré-Saque): B1 coloca as mãos atrás das costas mostrando o sinal e 'pisca' os dedos indicando exatamente onde quer que D1 saque (ex.: pisca o dedo da mão esquerda = sacar em A1 na linha; ou fecha e abre o polegar = sacar na costura central).",
      "D1 confirma e executa o saque tático combinado.",
      "Fase 2 (Comunicação em Movimento Pós-Recepção): se o passe de A1 foi perfeito na rede, B1 grita 'MEU BLOCO!' confirmando para D1 que vai saltar e fechar o corredor prometido.",
      "Porém, se o saque de D1 quebrou o passe de A1 para longe da rede (3,5m ou mais), B1 tem a obrigação de cancelar o sinal gritando alto 'SAÍ! LIVRE!' enquanto recua.",
      "Ao ouvir 'SAÍ! LIVRE!', D1 responde 'VEM PRA LINHA, TÔ NA DIAGO!' coordenando a divisão do fundo sem baterem cabeça!"
    ],
    "pontosAtencao": [
      "A comunicação da defesa tem duas metades: antes do saque ela é 100% silenciosa (sinais nas costas); depois que o adversário recepciona, ela é 100% VERBAL e alta!",
      "Quando o bloqueador grita 'SAÍ!', o defensor de fundo deve responder para qual lado está indo ('Tô na direita!') para o bloqueador saber qual metade da quadra sobrou para ele.",
      "Se a bola bater na fita ou passar de segunda, o grito imediato é 'CURTA!'."
    ],
    "erroComum": "O bloqueador abortar o bloqueio em silêncio absoluto e recuar justamente para o mesmo canto onde o defensor já estava esperando; corrija exigindo o diálogo duplo: 'SAÍ! — VEM LINHA!'. Variações",
    "variacaoFacil": "A1 e A2 avisam antes se vão passar a bola perto da rede (B1 grita 'Fico!') ou longe da rede (B1 grita 'Saí!').",
    "variacaoDificil": "A1 e A2 podem tentar passar a bola de segunda no fundo quando ouvem B1 e D1 conversando, testando a prontidão da dupla.",
    "meta": "Cumprir 8 de 10 sequências com saque no alvo pedido no sinal e comunicação verbal clara ('Meu bloco!' ou 'Saí! Vem linha!') na defesa."
  },
  {
    "numero": 186,
    "secao": 11,
    "nome": "Código visual silencioso para dias de vento forte e barulho na arena",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (2 contra 2 em quadra completa)",
    "tempo": "10 minutos",
    "material": "5 bolas",
    "objetivo": "Combinar toda a tática de levantamento (ponta, meio, chutada ou segunda bola) e de cobertura através de toques corporais e sinais visuais quando o vento ou a torcida impedem ouvir a voz.",
    "comoMontar": "Quadra 16x8m com Dupla J1 + J2 na esquerda e Dupla A1 + A2 na direita.",
    "passoAPasso": [
      "Em praias com vento acima de 30 km/h ou arenas com música/torcida alta, o seu parceiro a 5 metros de distância NÃO escuta o que você fala. As duplas profissionais usam códigos visuais rápidos antes de virar para receber o saque:",
      "Código Visual de Ataque (feito pelo receptor tocando no próprio corpo antes do saque): 1) Tocar no OMBRO = quero bola alta normal na antena; 2) Tocar no PEITO = quero bola rápida no MEIO junto de você; 3) Tocar na COXA/CALÇÃO = vou cruzar por trás de você após passar; 4) Mostrar 2 dedos na barriga = se o passe for na mão, bata você de SEGUNDA bola!",
      "Durante os primeiros 5 minutos do exercício, é PROIBIDO FALAR antes do saque e durante o levantamento: toda a combinação de side-out deve ser feita pelos toques no ombro/peito/coxa e pelos sinais de dedos nas costas!",
      "Nos 5 minutos finais, libera-se apenas 1 grito curto de direção no ar ('LINHA!' / 'DIAGO!') somado ao código gestual prévio."
    ],
    "pontosAtencao": [
      "Faça o gesto de toque no peito ou no ombro olhando para o seu parceiro ANTES de o adversário sacar, de forma discreta (parecendo que está apenas limpando a areia da camiseta!).",
      "Para o levantador: mesmo sob barulho extremo, após levantar você pode apontar com o braço para a linha ou para a diagonal caso o atacante olhe de relance para você na descida.",
      "Combine no máximo 3 ou 4 sinais visuais simples que a dupla nunca esqueça sob cansaço."
    ],
    "erroComum": "Fazer o sinal visual rápido demais enquanto o parceiro está olhando para o chão limpando os óculos; corrija exigindo contato visual ('olho no olho') + aceno de cabeça confirmando o gesto antes de abrir para a base. Variações",
    "variacaoFacil": "Usar apenas 2 sinais corporais no side-out: toque no ombro (bola na ponta) e toque no peito (bola no meio).",
    "variacaoDificil": "Colocar música alta na caixa de som da arena (ou proibição total de voz com penalidade de -1 ponto para quem falar antes da batida de ataque) durante um mini-set até 11 pontos.",
    "meta": "Executar 7 de 10 jogadas combinadas por gestos silenciosos (ponta, meio, cruzamento ou 2ª bola) em perfeita sincronia entre passador e levantador."
  },
  {
    "numero": 187,
    "secao": 11,
    "nome": "Ritual dos 12 segundos entre os pontos: leitura, ajuste tático e reset mental",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Jogo 2x2 com paradas estruturadas de 12 segundos)",
    "tempo": "11 minutos",
    "material": "5 bolas e 1 cronômetro/apito com o treinador",
    "objetivo": "Transformar o intervalo oficial de 12 segundos entre um rali e outro em uma reunião tática estruturada de 3 passos para ajustar a estratégia do set sem brigas nem silêncio.",
    "comoMontar": "Quadra oficial 16x8m com duas duplas disputando um set. Marque um 'Ponto de Encontro da Dupla' no centro de cada meia-quadra (a 4 metros da rede).",
    "passoAPasso": [
      "No vôlei de praia, quando uma dupla perde 2 pontos seguidos, o comum é cada um virar para um canto de cara fechada em silêncio (ou reclamar do erro do parceiro). Neste exercício, entre TODOS os pontos, as duas duplas têm exatamente 12 segundos para se encontrar no centro da quadra (a 4m da rede) e cumprir o Ritual de 3 Passos:",
      "Segundos 1 a 4 (O Toque Físico + Reset): bater as mãos (high-five) olhando nos olhos, mesmo que o parceiro tenha acabado de errar na rede, soltando o ar.",
      "Segundos 5 a 8 (1 Frase de Leitura do que aconteceu): falar apenas dados objetivos, sem culpa (ex.: 'Ele está largando toda bola na diagonal curta' ou 'O vento aumentou contra nós').",
      "Segundos 9 a 12 (A Decisão para o Próximo Ponto): definir a ação exata da próxima bola (ex.: 'Saca no 2 na linha e eu fecho a diagonal dele!' ou 'Passa mais alto no meio que eu vou chutar no fundo').",
      "No segundo 12 o professor apita autorizando o saque; se a dupla não tiver batido as mãos e combinado a jogada no centro, perde 1 ponto!"
    ],
    "pontosAtencao": [
      "Regra de comunicação emocional na praia: é proibido falar do PASSADO com tom de cobrança ('Por que você não pegou aquela bola?'); fale sempre do FUTURO ('Na próxima bola curta, deixa que eu entro na frente!').",
      "Na troca de lado a cada 7 pontos, a primeira frase obrigatória da dupla é sobre o VENTO e o SOL do lado novo ('Aqui estamos contra o vento, saca forte e passa perto da rede!').",
      "Fale baixo no encontro aos 4 metros para a dupla adversária não ouvir a mudança de tática de vocês."
    ],
    "erroComum": "Gastar os 12 segundos caminhando cabisbaixo lá na linha de fundo longe do parceiro sem trocar uma palavra; corrija desenhando um círculo no centro da quadra onde os dois precisam pisar juntos após cada apito final de rali. Variações",
    "variacaoFacil": "O professor faz perguntas rápidas entre os pontos ('Quem está atacando mais deles? Onde vocês vão sacar agora?') para guiar o raciocínio da dupla.",
    "variacaoDificil": "A dupla adversária recebe uma 'missão secreta' do professor a cada 3 pontos (ex.: passar a atacar só lob ou só de segunda bola), e a dupla precisa descobrir o padrão e combinar o antídoto no ritual de 12 segundos!",
    "meta": "Cumprir 100% dos intervalos entre pontos com o ritual completo (Toque de mãos + Leitura + Plano da próxima bola) dentro dos 12 segundos."
  },
  {
    "numero": 188,
    "secao": 11,
    "nome": "Desafio 'Ponto Mudo Não Vale': jogo real onde a comunicação decide o placar",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Disputa 2x2 oficial valendo pontuação especial de comunicação)",
    "tempo": "12 minutos",
    "material": "5 bolas e placar manual",
    "objetivo": "Encadear todos os elos de comunicação da seção (sinal pré-saque, chamada do 1º toque, canto do levantador e aviso de bloqueio) sob pressão competitiva de jogo.",
    "comoMontar": "Quadra oficial 16x8m pronta para partida 2x2 entre Dupla A (J1 + J2) na esquerda e Dupla B (A1 + A2) na direita.",
    "passoAPasso": [
      "Disputa de um set até 15 pontos onde a qualidade da comunicação da dupla multiplica ou anula os pontos conquistados na bola:",
      "Checklist dos 3 Elos Obrigatórios em cada rali: Elo 1 = Sinal de bloqueio atrás das costas antes do saque; Elo 2 = Grito 'MINHA! — VAI!' antes do 1º contato (recepção ou defesa); Elo 3 = Chamada alta do levantador ('LINHA!', 'CRUZADO!', 'CURTA!', 'SEM BLOCO!') antes do ataque do parceiro.",
      "Regra do 'Ponto Mudo Anulado': se uma dupla vencer o rali com um ataque lindo, mas tiver esquecido QUALQUER UM dos 3 elos de comunicação (ex.: passou calado ou o levantador não cantou o ataque), o ponto é ANULADO (0 ponto) e o saque vai para o adversário!",
      "Regra do 'Bônus de Sintonia Perfeita' (+2 pontos): se a dupla cumprir os 3 elos em voz alta e vencer o rali atacando exatamente na zona que o levantador cantou, o ponto vale 2 PONTOS no placar!",
      "Em caso de bola que toca no bloqueio, o grito imediato 'TOCOU! É DOIS!' também é obrigatório para validar o contra-ataque."
    ],
    "pontosAtencao": [
      "No começo do jogo, os jogadores percebem o quanto costumam ficar mudos quando estão cansados ou tensos; após 3 minutos, a quadra inteira ganha vida e energia de torneio profissional!",
      "Gritar alto também exerce pressão psicológica sobre a dupla adversária, mostrando confiança e domínio da quadra.",
      "Não grite apenas por gritar para cumprir a regra: olhe de verdade para o defensor adversário antes de cantar 'Linha!' ou 'Cruzado!'."
    ],
    "erroComum": "O levantador gritar 'LINHA!' e o atacante, por teimosia, bater no 'CRUZADO!' em cima do defensor; neste desafio, para ganhar o bônus de 2 pontos, o atacante é obrigado a obedecer à chamada do seu levantador! Variações",
    "variacaoFacil": "Validar o ponto normal (1 pt) se cumprirem pelo menos 2 dos 3 elos, e dar 2 pontos quando cumprirem os 3 elos completos.",
    "variacaoDificil": "Se duas bolas caírem na quadra de uma dupla por erro de comunicação (os dois pararem olhando na costura), a dupla perde todos os pontos acumulados no set!",
    "meta": "Vencer o set conquistando pelo menos 4 pontos de 'Bônus de Sintonia Perfeita' (2 pts) e tendo zero pontos anulados por silêncio."
  },
  {
    "numero": 189,
    "secao": 12,
    "nome": "Sorteio de quadra, sol de frente e escolha tática de lado e função",
    "nivel": "Iniciante",
    "jogadores": "4 jogadores (Dupla J1 + J2 contra Dupla A1 + A2)",
    "tempo": "10 minutos",
    "material": "4 bolas, 2 cones e moeda para sorteio",
    "objetivo": "Compreender na prática a vantagem de cada lado da quadra em relação ao sol e ao vento para tomar a decisão certa no sorteio e ajustar o levantamento sob sol frontal.",
    "comoMontar": "Identifique a posição do sol na arena. Posicione a Dupla J1 + J2 na meia-quadra que olha DIRETAMENTE CONTRA O SOL ao olhar para a rede (lado esquerdo do diagrama) e a Dupla A1 + A2 na meia-quadra com o sol pelas costas (lado direito). Marque uma Zona Alvo de levantamento a 2m da rede na esquerda.",
    "passoAPasso": [
      "Á O treinador reúne as duas duplas no centro da rede e explica a Regra de Ouro do Sorteio na Praia: 'Lado Bom' é quase sempre o lado que joga CONTRA o vento (facilita atacar forte) e com o SOL PELAS COSTAS (não cega o passador/atacante).",
      "A2 saca do lado direito; J1 e J2 (que estão no lado ruim, com o sol forte no rosto) aplicam as 3 adaptações táticas obrigatórias contra o sol:",
      "Adaptação 1 (Na Recepção): J1 passa a bola mais baixa/média (3m de altura) e 1 metro à frente de J2, para que J2 não precise olhar verticalmente para o disco solar.",
      "Adaptação 2 (No Levantamento): J2 vira os ombros em diagonal (de costas para o sol) e levanta a bola um pouco mais esticada para a ponta, tirando a bola da linha entre os olhos de J1 e o sol.",
      "Adaptação 3 (No Ataque): se a bola cruzar exatamente na frente do sol cegando J1 por meio segundo, J1 usa a mão guia como viseira até o salto e aplica um golpe de segurança (cobra ou cut shot) na quadra adversária; a cada 5 saques, trocam de lado."
    ],
    "pontosAtencao": [
      "No sorteio de início de jogo, se você vencer a moeda em dia de sol baixo ou vento forte, muitas vezes vale mais a pena escolher o LADO da quadra (para começar no lado bom ou terminar o tie-break no lado bom) do que escolher sacar!",
      "Quando você está no lado que tem o sol nas suas COSTAS (como A1 e A2), use o saque alto ('Jornada nas Estrelas') para forçar o adversário a olhar direto para o sol!",
      "Nunca levante uma bola vertical em cima da cabeça do seu parceiro quando ele está de frente para o sol."
    ],
    "erroComum": "No lado com sol de frente, passar e levantar bolas altíssimas de 6 metros de altura que passam exatamente na frente do sol, cegando o atacante; corrija limitando o arco a 3,5 metros e deslocando o levantamento em diagonal. Variações",
    "variacaoFacil": "A2 envia saques normais por baixo para J1 e J2 treinarem o ângulo de passe e levantamento fugindo da linha do sol.",
    "variacaoDificil": "A2 é obrigado a sacar apenas 'Jornada nas Estrelas' (saque altíssimo na linha do sol) contra J1 e J2.",
    "meta": "Converter 7 de 10 side-outs jogando no lado com sol de frente sem perder nenhuma bola por cegueira solar."
  },
  {
    "numero": 190,
    "secao": 12,
    "nome": "Tática do 'Lado Bom' vs. 'Lado Ruim' do vento (vento contra e a favor)",
    "nivel": "Iniciante",
    "jogadores": "4 jogadores (Dupla J1 + J2 contra Dupla A1 + A2)",
    "tempo": "10 minutos",
    "material": "5 bolas e 4 cones demarcando zonas de segurança",
    "objetivo": "Mudar completamente o estilo de saque, passe e ataque a cada troca de quadra de 7 pontos, sabendo que na praia o lado CONTRA o vento é o 'Lado Bom' para atacar.",
    "comoMontar": "Identifique o sentido do vento longitudinal. Na meia- quadra esquerda (que joga A FAVOR do vento = 'Lado Ruim' porque a bola voa para fora), marque uma Zona de Passe recuada aos 2,5m da rede. Na meia-quadra direita (que joga CONTRA o vento = 'Lado Bom' porque o vento segura a bola dentro), marque a Zona de Passe a 1m da rede.",
    "passoAPasso": [
      "Á Explicação Tática Essencial: ao contrário do que os iniciantes pensam, no vôlei de praia jogar CONTRA o vento é o 'LADO BOM' (porque você pode sacar forte e atacar com força total sem a bola sair!), enquanto jogar A FAVOR do vento é o 'LADO RUIM' (qualquer toque forte vai parar fora da quadra!).",
      "Disputa de um mini-set até 14 pontos com troca de lado obrigatória a cada 7 pontos somados (ex.: 4x3, 5x2).",
      "Quem está na Esquerda ('Lado Ruim' - vento nas costas): é obrigado a sacar mais curto ou com topspin suave, passar a bola segura a 2,5m da rede (para o vento não jogar o passe no bloqueio) e atacar usando topspin máximo ou largadas curtas!",
      "Quem está na Direita ('Lado Bom' - vento na cara): tem sinal verde para sacar flutuante agressivo/viagem forte, passar perto da rede (1m) e soltar o braço na cortada ou no pingo curto contra o vento!",
      "A dupla que errar saque ou ataque para fora no fundo quando estiver no 'Lado Ruim' (a favor do vento) perde 2 pontos!"
    ],
    "pontosAtencao": [
      "Mentalidade tática de campeonato: no 'Lado Bom' (contra o vento) você pontua no saque e no bloqueio abrindo vantagem; no 'Lado Ruim' (a favor do vento) você joga com paciência e erro zero apenas virando o seu side-out!",
      "A cada 7 pontos somados no placar (7, 14, 21...), na hora em que cruzarem pelo poste para trocar de lado, conversem: 'Agora estamos no lado bom, vamos forçar o saque!' ou 'Agora estamos a favor do vento, segura o braço!'.",
      "No lado a favor do vento, mire sempre no meio da quadra adversária."
    ],
    "erroComum": "Esquecer que acabou de trocar de lado aos 7 pontos e dar uma pancada de saque ou ataque a favor do vento, jogando a bola 3 metros fora; corrija com um aviso obrigatório do professor a cada troca de lado. Variações",
    "variacaoFacil": "Jogar 5 pontos seguidos sem contar erros e depois trocar de lado para sentir a diferença física da bola.",
    "variacaoDificil": "Partida rápida de Tie-break até 15 pontos com troca de lado a cada 5 pontos somados (5, 10, 15...).",
    "meta": "Completar o set de 14 pontos com no máximo 1 erro de bola fora no fundo quando estiver jogando no lado a favor do vento."
  },
  {
    "numero": 191,
    "secao": 12,
    "nome": "Jogar com vento lateral: a tática do 'Corredor que Ajuda' vs. 'Corredor que Expulsa'",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (Dupla J1 + J2 contra Dupla A1 + A2)",
    "tempo": "10 minutos",
    "material": "5 bolas e 4 cones nas laterais",
    "objetivo": "Usar o vento cruzado (que sopra de uma linha lateral para a outra) para escolher de qual lado da quadra atacar e em qual receptor sacar.",
    "comoMontar": "Considere que o vento lateral sopra de CIMA para BAIXO (da linha lateral esquerda para a linha lateral direita da quadra esquerda). Coloque cones destacando o Corredor Superior ('Vento traz pra dentro') e o Corredor Inferior ('Vento empurra pra fora').",
    "passoAPasso": [
      "Á Quando o vento sopra forte de uma lateral para a outra, os dois jogadores da dupla têm experiências completamente opostas na rede:",
      "Regra Tática 1 (No Levantamento): se J2 levantar uma bola longa para o Corredor Inferior (a favor do vento lateral), o vento joga a bola para fora da antena! Por isso, no corredor para onde o vento sopra, o levantamento deve parar 1,5m ANTES da antena.",
      "Regra Tática 2 (Em quem sacar?): a dupla que saca (A1 + A2) deve sacar prioritariamente no receptor que ataca no corredor onde o vento atrapalha a chegada da bola (ou sacar perto da linha para onde o vento está empurrando a bola para fora!).",
      "Regra Tática 3 (No Ataque e Bloqueio): o atacante que está no Corredor Superior pode bater na paralela tranquilo porque o vento traz a bola para dentro; já o atacante do Corredor Inferior deve evitar a paralela (o vento joga fora!) e priorizar a DIAGONAL contra o vento!",
      "Joguem 6 bolas explorando essa leitura e troquem de posição."
    ],
    "pontosAtencao": [
      "Dica de mestre para o Bloqueador em dia de vento lateral: quando você for bloquear o atacante que está no corredor onde o vento empurra a bola para FORA da linha lateral, NÃO feche a linha paralela (se ele bater na linha, o vento joga fora sozinho!).",
      "Dê um passo para dentro e feche a DIAGONAL!",
      "O levantador deve sempre tentar se posicionar de forma a levantar CONTRA o vento lateral (onde a bola freia na mão do atacante).",
      "Observe a inclinação das antenas antes de escolher o seu golpe."
    ],
    "erroComum": "O atacante que está na linha para onde o vento sopra tentar bater uma paralela cravada na linha e mandar a bola 1 metro para fora; corrija proibindo ataques na linha paralela no corredor de saída do vento. Variações",
    "variacaoFacil": "Treinar primeiro apenas a combinação de passe + levantamento + ataque nos dois corredores sentindo a diferença do vento lateral.",
    "variacaoDificil": "Jogo valendo ponto onde o bloqueio ganha 2 pontos toda vez que fechar a diagonal no lado onde o vento expulsa a bola pela linha.",
    "meta": "Acertar 7 de 10 escolhas de levantamento e direção de ataque respeitando a deriva do vento lateral."
  },
  {
    "numero": 192,
    "secao": 12,
    "nome": "Escolha tática do alvo de saque: sobrecarregar um atacante ('Isolamento') vs. quebrar ritmo",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (Dupla J1 + J2 sacando contra A1 + A2 recebendo)",
    "tempo": "10 minutos",
    "material": "6 bolas e 3 zonas táticas de saque",
    "objetivo": "Aplicar a tática clássica de sacar 4 vezes seguidas no mesmo jogador para esgotar o físico dele na areia e, no 5º saque, mudar de surpresa para o parceiro que estava 'frio'.",
    "comoMontar": "Dupla J1 (na rede) e J2 (no saque) no lado esquerdo; Dupla A1 (receptor esquerdo) e A2 (receptor direito) no lado direito.",
    "passoAPasso": [
      "Á No vôlei de praia, você nunca saca aleatoriamente 'uma em cada um': se você alternar os saques entre A1 e A2, os dois descansam! A tática profissional é o ISOLAMENTO seguido da QUEBRA DE RITMO.",
      "Saques 1, 2, 3 e 4 (Fase de Isolamento e Desgaste): J2 saca 4 bolas seguidas exclusivamente em A1 — mas mudando o local dentro da metade de A1 (Saque 1 curto na frente de A1; Saque 2 fundo no canto de A1; Saque 3 no meio deslocando A1; Saque 4 no ombro externo de A1).",
      "A1 é obrigado a correr na areia fofa, recepcionar e saltar para atacar 4 vezes seguidas sob sol, enquanto A2 apenas levanta sem atacar nenhuma bola (ficando com o braço 'frio').",
      "Saque 5 (A Armadilha da Quebra de Ritmo): quando A1 já está exausto esperando a 5ª bola e A2 está relaxado achando que só vai levantar, J1 pisca o sinal nas costas e J2 crava um saque rápido no peito de A2!",
      "Jogam os 5 pontos completos e depois invertem as duplas."
    ],
    "pontosAtencao": [
      "Sacar 10 vezes seguidas no mesmo jogador, mas sempre paradinho no peito dele, só treina o passe dele!",
      "Para o isolamento funcionar na areia, faça ele correr para a frente, para trás e para os lados antes de atacar.",
      "Depois que um atacante pulou 5 vezes seguidas na areia fofa, ele perde cerca de 15 cm de impulsão e começa a largar bolas previsíveis para a sua defesa.",
      "O saque de surpresa no jogador 'congelado' (que ficou 10 minutos sem atacar no set) costuma gerar erro imediato na hora decisiva."
    ],
    "erroComum": "Ter 'pena' de sacar sempre no mesmo jogador ou mudar de alvo logo no 2º saque sem criar desgaste físico nem congelar o outro; corrija exigindo o cumprimento rigoroso do roteiro 4+1. Variações",
    "variacaoFacil": "Fazer a sequência 3+1 (3 saques movimentando A1 e o 4º saque de surpresa em A2).",
    "variacaoDificil": "Se A1 conseguir virar os 4 ataques seguidos mesmo cansado, ele ganha 2 pontos extras para a sua dupla!",
    "meta": "Cumprir a estratégia de 4 saques de desgaste em A1 + 1 saque surpresa em A2, conquistando pelo menos 3 pontos na série de 5 bolas."
  },
  {
    "numero": 193,
    "secao": 12,
    "nome": "Explorar o elo fraco: sacar no pior passador vs. sacar no melhor levantador",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (Dupla J1 + J2 contra Dupla A1 + A2 com perfis simulados)",
    "tempo": "10 minutos",
    "material": "5 bolas e 2 cones",
    "objetivo": "Aprender o dilema tático mais inteligente da praia: quando sacar no jogador que recepciona pior e quando sacar no outro para obrigar o pior levantador a levantar!",
    "comoMontar": "Dupla J1 e J2 sacando/defendendo na esquerda; Dupla A1 e A2 recebendo na direita.",
    "passoAPasso": [
      "Á Enigma Tático do Vôlei de Praia: na dupla adversária, imagine que A1 é alto e ataca muito bem, mas levanta muito mal; já A2 é baixinho e levanta perfeitamente na mão de A1!",
      "Se você sacar em A1 (achando que vai cansá-lo), A2 vai fazer um levantamento perfeito e A1 vai cravar a bola na sua cabeça!",
      "Rodada 1 (5 bolas — Tática 'Tirar o Bom Levantador da Jogada'): J1 e J2 sacam exclusivamente em A2 (o bom levantador baixinho)! Por quê? Porque assim OBRIGAM A1 (que levanta mal) a fazer o levantamento, e ainda obrigam A2 (mais baixo) a atacar contra o bloqueio alto de J1!",
      "Rodada 2 (5 bolas — Tática 'Afastar o Passador da Rede'): agora A1 tem dificuldade de deslocamento lateral; J2 saca tirando A1 para fora da linha lateral para que ele não consiga entrar para atacar.",
      "Ao final das 10 bolas, analisam em qual das duas táticas a dupla J1 + J2 marcou mais pontos de bloqueio e defesa!"
    ],
    "pontosAtencao": [
      "Guarde essa lição para a vida toda na areia: 'Para parar um grande atacante quando o parceiro dele levanta muito bem, às vezes o segredo é sacar no PARCEIRO dele!'.",
      "Quando você saca no melhor levantador da dupla adversária, você mata dois coelhos: tira o melhor levantador do 2º toque e tira o melhor atacante do 3º toque!",
      "Observe nos primeiros 4 pontos do jogo quem da dupla adversária levanta melhor de manchete e de toque."
    ],
    "erroComum": "Continuar sacando teimosamente num jogador que está virando todas as bolas porque o parceiro dele põe a bola com a mão na cabeça dele; corrija trocando o alvo do saque imediatamente após levar 2 side-outs perfeitos seguidos. Variações",
    "variacaoFacil": "O treinador define antes da série qual jogador de A1/A2 só pode levantar de manchete longe da rede, simulando a deficiência técnica para J1/J2 explorarem.",
    "variacaoDificil": "O treinador dá um 'cartão de perfil secreto' para A1 e A2 (ex.: A1 não pode atacar na paralela; A2 só pode levantar de manchete), e J1/J2 precisam descobrir a falha nos primeiros 3 pontos e explorá-la!",
    "meta": "Diagnosticar corretamente o elo vulnerável (passe, levantamento ou estatura de ataque) e vencer pelo menos 6 de 10 ralis."
  },
  {
    "numero": 194,
    "secao": 12,
    "nome": "Mapear e trancar o golpe nº 1 do atacante adversário (tirar o 'golpe de estimação')",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (Dupla J1 + J2 no bloqueio/defesa contra A1 + A2 no ataque)",
    "tempo": "10 minutos",
    "material": "5 bolas e 2 zonas de tendência",
    "objetivo": "Identificar qual é a direção favorita de cada atacante adversário (especialmente sob pressão) e montar o sistema de bloqueio e defesa para trancar essa primeira opção.",
    "comoMontar": "Dupla J1 (bloqueador) e J2 (defensor) na meia-quadra esquerda; Dupla A1 (atacante da direita) e A2 (atacante da esquerda) na meia-quadra direita.",
    "passoAPasso": [
      "Á Todo jogador de vôlei de praia (do iniciante ao olímpico) tem um 'Golpe de Segurança / Estimação' que ele usa em 70% das bolas difíceis (ex.: a maioria dos destros na entrada adora bater na diagonal forte ou dar cut shot).",
      "Nos primeiros 4 ataques, A1 e A2 atacam usando prioritariamente o seu golpe favorito real, enquanto J1 e J2 fazem a leitura mental do padrão.",
      "A partir do 5º ataque, J1 e J2 ajustam os sinais atrás das costas especificamente para TRANCAR o golpe nº 1 daquele atacante (ex.: se A1 adora bater diagonal forte, J1 mostra 2 dedos fechando a diagonal no bloqueio OU mostra 1 dedo na linha e J2 fica plantado exatamente no trilho da diagonal de A1!).",
      "Regra Tática de Ouro: 'Nós não deixamos o adversário nos vencer com o melhor golpe dele! Se ele quiser fazer ponto na gente, vai ter que usar o golpe que ele NÃO gosta!'.",
      "Contam quantas defesas e bloqueios surgem assim que tiram a opção nº 1 do atacante."
    ],
    "pontosAtencao": [
      "Observe também de onde vem o levantamento: muitos atacantes batem na diagonal quando a bola vem de dentro, mas só conseguem bater na linha ou largar quando a bola fica presa na antena.",
      "Quando você defende 2 vezes seguidas o golpe favorito do atacante, ele perde a confiança e começa a forçar bolas para fora tentando fugir de você!",
      "Lembre-se de que cada um dos dois adversários tem um padrão diferente: ajuste o sinal conforme quem foi recepcionar."
    ],
    "erroComum": "Jogar o set inteiro usando sempre o mesmo esquema fixo (ex.: bloquear sempre a linha e defender sempre a diagonal) mesmo contra um adversário que bate 9 de 10 bolas na diagonal; corrija adaptando o bloqueio ao hábito do rival. Variações",
    "variacaoFacil": "O atacante A1 avisa antes quais são os seus 2 golpes principais (ex.: Diagonal Forte e Lob na Linha) e J1/J2 montam a armadilha para esses dois pontos.",
    "variacaoDificil": "Jogo até 11 pontos onde, se o atacante conseguir marcar 3 pontos usando o mesmo golpe no mesmo lugar da quadra, a dupla defensora perde o set por 'falha de leitura'!",
    "meta": "Neutralizar o golpe principal do atacante forçando o erro ou conquistando a defesa em pelo menos 6 de 10 ataques."
  },
  {
    "numero": 195,
    "secao": 12,
    "nome": "Atacar o defensor mais lento e explorar a retirada do bloqueador",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Dupla J1 + J2 atacando contra A1 bloqueador + A2 defensor)",
    "tempo": "11 minutos",
    "material": "5 bolas e 3 zonas táticas de ataque",
    "objetivo": "Deixar de olhar apenas para os espaços vazios estáticos e atacar estrategicamente o defensor adversário que está em movimento, desequilibrado ou que acabou de retirar da rede.",
    "comoMontar": "Dupla J1 e J2 no side-out na meia-quadra esquerda; Dupla A1 (na rede) e A2 (no fundo) na meia-quadra direita.",
    "passoAPasso": [
      "Á Quando a dupla adversária é muito bem posicionada, como abrir buracos na defesa deles? Usando as 3 Táticas de Ataque de Leitura:",
      "Tática 1 (Atacar o Bloqueador que Retira - 'Pulling'): quando A1 finge o bloqueio na rede e corre de costas/lado para defender na linha, ele quase sempre ainda está em movimento ou ofegante! J2 avisa 'SAIU LINHA!' e J1 ataca uma bola meia-força nos pés de A1 (aos 3,5m) ou no contrapé da corrida dele!",
      "Tática 2 (Pingar atrás do Bloqueador Alto): se A1 é muito alto e pesado na areia e salta inteiro para bloquear, ninguém busca a bola que cai a 1,5m atrás do calcanhar dele: J1 usa o 'poke' por cima de A1!",
      "Tática 3 (Forçar o Defensor a Correr para a Frente e depois para Trás): no primeiro rali, J1 solta um cut shot curto obrigando A2 a mergulhar na areia; no rali seguinte, como A2 vai ficar 1 passo adiantado com medo de outro cut shot, J1 solta o lob ou a bomba no fundo nas costas dele!",
      "Disputam 8 ralis aplicando essa construção sequencial de ataques."
    ],
    "pontosAtencao": [
      "Um bloqueador de 1,95m que acabou de correr da rede para o fundo na areia fofa tem metade da agilidade de um defensor de ofício: ataque na direção dele variando curto e fundo!",
      "Sempre pense o ataque em PARES de pontos: a bola curta que você mostra no Ponto 1 é a isca que abre a linha de fundo no Ponto 2!",
      "Bater a 70% de força na direção do quadril/pé de um defensor que ainda está correndo é muito mais eficiente do que bater a 100% no peito dele parado."
    ],
    "erroComum": "Ter medo do bloqueador que retirou da rede e atacar sempre na direção do defensor especialista (A2) que já estava plantado e descansado lá atrás; corrija dando 2 pontos toda vez que o ataque vencer o jogador que retirou da rede (A1). Variações",
    "variacaoFacil": "A1 faz a retirada da rede em todas as bolas para J1 e J2 treinarem atacar exclusivamente o corredor do bloqueador que recua (curto aos 2,5m ou no pé aos 5m).",
    "variacaoDificil": "A1 e A2 variam livremente entre bloqueio real, falso bloqueio e troca de lados no fundo.",
    "meta": "Converter 7 de 10 ataques explorando a movimentação do bloqueador/defensor adversário."
  },
  {
    "numero": 196,
    "secao": 12,
    "nome": "Mudança de plano tático durante o set ('Plano A para Plano B')",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Jogo tático 2x2 com gatilho de mudança obrigatória)",
    "tempo": "11 minutos",
    "material": "5 bolas e placar",
    "objetivo": "Desenvolver a capacidade de perceber rapidamente quando a estratégia inicial não está funcionando (após sofrer 3 pontos seguidos) e acionar imediatamente um Plano B oposto.",
    "comoMontar": "Quadra oficial 16x8m: Dupla J1 + J2 na esquerda contra Dupla A1 + A2 na direita.",
    "passoAPasso": [
      "Á Um dos maiores erros de duplas amadoras é perder um set de 21x12 fazendo exatamente a mesma coisa do início ao fim sem mudar nada! Neste exercício, antes de começar o set até 15 pontos, cada dupla define com o treinador o seu PLANO A e o seu PLANO B:",
      "Exemplo de Plano A (Início do Set): sacar em A1 na linha + bloquear a paralela com J1 + atacar bolas altas na ponta.",
      "Exemplo de Plano B (Mudança Radical): sacar na costura ou em A2 curto + J1 fingir bloqueio e retirar ('dois no fundo') + acelerar levantamentos no meio e usar bolas de segunda!",
      "Regra do Gatilho de Mudança: toda vez que uma dupla sofrer 3 pontos seguidos do adversário (ou na virada de lado do 7º ponto se estiver atrás no placar), é OBRIGATÓRIO pedir um 'Tempo Tático de 15 segundos' na areia e ativar o PLANO B imediatamente!",
      "A dupla que continuar repetindo o Plano A após sofrer 3 pontos seguidos perde mais 1 ponto de penalidade tática."
    ],
    "pontosAtencao": [
      "No vôlei de praia você tem direito a 1 Pedido de Tempo (Time-out) de 30 segundos por set (além do tempo técnico quando a soma dos pontos chega a 21): nunca termine um set perdendo sem ter usado o seu pedido de tempo para quebrar o ritmo do sacador adversário!",
      "Quando o ataque adversário está virando tudo contra o seu bloqueio de linha, mude no próximo ponto: mostre o bloqueio e retire para o fundo, ou inverta para fechar a diagonal!",
      "Mudar o alvo do saque por apenas 2 pontos já é suficiente para tirar o adversário do piloto automático."
    ],
    "erroComum": "Confundir 'mudar de tática' com 'começar a forçar bolas malucas': o Plano B deve ser uma mudança clara e organizada de alvo de saque e sistema de bloqueio/defesa. Variações",
    "variacaoFacil": "O treinador apita no meio do set gritando 'ACIONA PLANO B!' para acostumar as duplas a virarem a chave instantaneamente.",
    "variacaoDificil": "A dupla adversária ganha 1 ponto extra se descobrir em voz alta qual foi a mudança tática que a outra dupla acabou de ativar após o pedido de tempo!",
    "meta": "Reconhecer o momento de queda no set, acionar o Plano B sem atraso e quebrar a sequência de saques do adversário na primeira tentativa após o ajuste."
  },
  {
    "numero": 197,
    "secao": 12,
    "nome": "Gestão do placar ('Semáforo de Risco'): quando arriscar e quando jogar seguro",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Partida 2x2 com cenários de placar comandados)",
    "tempo": "12 minutos",
    "material": "5 bolas e placar visível",
    "objetivo": "Calibrar o nível de risco do saque e do ataque de acordo com a diferença de pontos no placar e o momento do set (Semáforo Verde, Amarelo e Vermelho).",
    "comoMontar": "Quadra oficial 16x8m com Dupla J1 + J2 na esquerda e Dupla A1 + A2 na direita.",
    "passoAPasso": [
      "Jogar vôlei de praia com inteligência significa entender o Semáforo de Risco do Placar em 3 cenários que as duplas vão jogar em sequência (4 minutos cada cenário):",
      "Cenário 1 — SINAL VERDE (Placar 14 x 9 a seu favor): você tem 5 pontos de vantagem! Aqui você tem margem para ARRISCAR: forçar o saque viagem/flutuante na linha buscando o ace, tentar bola de segunda e soltar o braço para fechar o set rápido.",
      "Cenário 2 — SINAL AMARELO (Placar 10 x 10 empatado no meio do set): equilíbrio total. Jogo tático padrão: saque firme mas com margem de 50 cm das linhas, passe alto no centro e ataque mesclando força e colocação.",
      "Cenário 3 — SINAL VERMELHO (Placar 19 x 19 ou 18 x 20 atrás no fim do set): PROIBIDO DAR PONTO DE GRAÇA! No Sinal Vermelho, qualquer erro de saque na rede ou ataque para fora custa o DOBRO (-2 pontos)! O saque tem que ser 100% dentro (tático na costura ou no receptor pressionado) e o ataque deve obrigar o adversário a defender!",
      "Vence o exercício a dupla que somar mais vitórias nos 3 cenários aplicando a gestão correta."
    ],
    "pontosAtencao": [
      "Estatística real do vôlei de praia: depois do ponto 18 em sets empatados, 75% dos sets são decididos não por uma jogada genial, mas por um ERRO NÃO FORÇADO da dupla que tentou dar uma pancada na linha sem necessidade!",
      "Se o seu parceiro acabou de errar o saque anterior, o seu próximo saque é SEMPRE em 'Sinal Vermelho' (proibido dois erros de saque seguidos pela mesma dupla!).",
      "Da mesma forma, se o adversário acabou de errar 2 bolas seguidas, não arrisque nada: coloque a bola dentro da quadra e deixe a pressão continuar do lado deles!"
    ],
    "erroComum": "Sacar um viagem a 100% de força na rede quando o placar está 19x20 contra você, entregando o jogo sem nem disputar o rali; corrija penalizando severamente erros diretos no Cenário 3. Variações",
    "variacaoFacil": "O treinador anuncia antes de cada ponto a cor do semáforo ('PONTO VERDE!' ou 'PONTO VERMELHO!') para guiar a decisão dos atletas.",
    "variacaoDificil": "Jogar um set começando em 15x15 onde qualquer erro direto (saque fora/rede ou ataque fora/rede sem bloqueio) vale 2 pontos para o adversário.",
    "meta": ""
  },
  {
    "numero": 198,
    "secao": 12,
    "nome": "Desafio 'Missão Tática Secreta': jogo real com execução de plano antes do ponto",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Jogo 2x2 oficial + treinador ou fila gerenciando as missões)",
    "tempo": "12 minutos",
    "material": "5 bolas e cartões/comandos de missões táticas",
    "objetivo": "Executar sob pressão de jogo real um plano tático específico sorteado antes do ponto, enquanto a dupla adversária tenta ler e neutralizar a missão.",
    "comoMontar": "Quadra oficial 16x8m em disputa 2x2: Dupla J1 + J2 na esquerda e Dupla A1 + A2 na direita. O treinador (T) fica próximo ao poste da rede com a lista de Missões Táticas.",
    "passoAPasso": [
      "Antes de cada bloco de 2 pontos, a dupla J1 + J2 vai até o treinador (T) na lateral e recebe em segredo uma Missão Tática de Jogo Real que vale 3 PONTOS se for cumprida com vitória no rali:",
      "Missão 1 ('Isca Curta + Bomba Fundo'): no 1º ponto, atacar obrigatoriamente uma bola curta aos 2m para puxar o defensor; no 2º ponto, atacar no fundo às costas dele!",
      "Missão 2 ('Armadilha de Falso Bloqueio'): sacar na linha lateral, mostrar bloqueio pesado na rede com J1, retirar no último segundo e defender a bola no fundo virando o contra-ataque!",
      "Missão 3 ('Congelamento + Ataque de 2ª'): sacar no melhor levantador adversário e, quando a defesa subir na mão, finalizar o contra-ataque de segunda bola!",
      "Missão 4 ('Gato e Rato na Diagonal'): J1 fecha a linha no bloqueio, J2 mostra que está escondido atrás do bloco e corre no último instante para defender a diagonal!",
      "A cada 2 pontos, é a vez da Dupla A1 + A2 receber uma Missão Secreta; vence quem chegar a 15 pontos primeiro!"
    ],
    "pontosAtencao": [
      "Para cumprir a Missão Tática valendo 3 pontos, a dupla precisa primeiro fazer bem o básico (recepção e levantamento na mão): não tente forçar a missão se a primeira bola espirrou para longe da quadra!",
      "A dupla que NÃO está com a missão secreta ganha 2 pontos extras se conseguir LER em tempo real o que o adversário está tramando e defender a jogada!",
      "Esse exercício simula exatamente a mente de uma dupla campeã: entrar em cada ponto sabendo exatamente como quer construir a vitória daquele rali."
    ],
    "erroComum": "Ficar tão ansioso para cumprir a missão que denuncia a jogada olhando fixamente para o alvo 3 segundos antes de bater; corrija exigindo disfarce corporal completo até o salto. Variações",
    "variacaoFacil": "As próprias duplas escolhem livremente 1 missão de uma lista de 3 opções e avisam ao treinador em segredo antes do saque.",
    "variacaoDificil": "Se a dupla tentar executar a Missão Tática e cometer erro direto (na rede ou fora), perde 1 ponto no placar!",
    "meta": "Cumprir com êxito pelo menos 3 Missões Táticas completas (conquistando os bônus de 3 pontos) ao longo do set."
  },
  {
    "numero": 199,
    "secao": 13,
    "nome": "Jogo 2x2 de iniciação com bola lançada e 1 agarrada permitida no passe",
    "nivel": "Iniciante",
    "jogadores": "4 jogadores (Dupla J1 + J2 contra Dupla A1 + A2)",
    "tempo": "10 minutos",
    "material": "4 bolas e 4 cones para encurtar a linha de fundo aos 6 metros",
    "objetivo": "Permitir que alunos iniciantes experimentem a dinâmica tática dos 3 toques do vôlei de praia (receber, levantar no centro e passar com intenção) sem que o rali morra no primeiro contato.",
    "comoMontar": "Use 4 cones para adiantar a linha de fundo de ambos os lados para 6 metros da rede (quadra reduzida de 12x8m). Posicione J1 e J2 na esquerda e A1 e A2 na direita.",
    "passoAPasso": [
      "O ponto começa não com saque batido, mas com A2 lançando a bola com as duas mãos por cima da rede da linha de 6 metros.",
      "Regra Adaptada do 1º Toque: quem recebe a bola (ex.: J1) pode fazer manchete direta OU, se a bola vier difícil, pode AGARRAR a bola em posição baixa de manchete (braços estendidos) e lançá-la imediatamente para o alto no centro da quadra.",
      "O 2º toque (levantamento de J2) e o 3º toque (ataque de J1 de toque, manchete ou poke) devem ser executados normalmente batendo na bola sem segurar!",
      "Do outro lado, A1 e A2 têm a mesma regra (podem segurar e lançar apenas o 1º contato de defesa, mas o 2º e 3º toques são normais).",
      "Disputam sets curtos até 11 pontos: todo ponto construído com 3 toques sem precisar agarrar a 1ª bola vale 2 pontos!"
    ],
    "pontosAtencao": [
      "Mesmo quando o aluno optar por agarrar o 1º toque, exija que ele chegue atrás da bola, abaixe o quadril na areia e grite 'MINHA!' antes de pegar.",
      "Quem não pegou a primeira bola deve correr imediatamente para o centro da rede (a 1,5m da fita) para executar o levantamento real.",
      "Incentive os alunos a olharem para o espaço vazio da quadra adversária antes do 3º toque."
    ],
    "erroComum": "Agarrar a bola em pé com preguiça de se deslocar e demorar 3 segundos segurando a bola; corrija permitindo no máximo 1 segundo com a bola na mão para autolançar no centro. Variações",
    "variacaoFacil": "Permitir agarrar e autolançar também o 2º toque (levantamento) para turmas no primeiro dia de aula na areia.",
    "variacaoDificil": "Proibir agarrar a bola: o 1º toque deve ser obrigatoriamente uma manchete de controle para o alto para si mesmo seguida de passe ao parceiro (4 toques na dupla).",
    "meta": "Conseguir pelo menos 6 ralis com mais de 3 trocas de bola sobre a rede e converter 4 pontos sem precisar agarrar o 1º toque."
  },
  {
    "numero": 200,
    "secao": 13,
    "nome": "Duelo 1x1 em mini-corredor curto (4x4m) com auto- levantamento",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores por corredor (ou 4 jogadores em 2 corredores simultâneos)",
    "tempo": "8 minutos",
    "material": "4 bolas e 6 cones demarcando os quadrados de 4x4m",
    "objetivo": "Desenvolver o controle fino de bola na areia, a leitura de bolas curtas/longas em espaço reduzido e a coordenação de passar para si mesmo antes de atacar.",
    "comoMontar": "Divida a largura da rede ao meio (4 metros para cada lado) e coloque cones a 4 metros de profundidade da rede, criando duas mini-quadras de 4x4m em cada lado da rede. J1 enfrenta A1 no corredor superior; J2 enfrenta A2 no corredor inferior.",
    "passoAPasso": [
      "O jogo acontece exclusivamente dentro do quadrado de 4x4 metros (da fita da rede até a linha de 4 metros).",
      "Regra de 2 Toques Obrigatórios por Jogador: é proibido passar a bola de primeira! Todo jogador que recebe a bola precisa dar o 1º toque (de manchete ou toque limpo) para o alto para si mesmo e usar o 2º toque para enviar a bola para o quadrado adversário.",
      "O início do ponto é feito com um saque de toque ou por baixo atrás da linha de 4 metros.",
      "Para passar a bola no 2º toque, valem apenas golpes controlados da praia: manchete, toque limpo perpendicular aos ombros, 'poke' (nó dos dedos) ou 'cobra'.",
      "Jogam sets de 7 pontos e depois os vencedores de cada corredor se enfrentam!"
    ],
    "pontosAtencao": [
      "Controle o seu 1º toque para que a bola suba no centro do seu quadrado de 4x4m (a 1,5m da rede), facilitando o seu 2º toque de ataque.",
      "Enquanto a bola está no ar no seu auto-levantamento, olhe de relance para ver se o adversário está colado na rede ou recuado na linha de 4m.",
      "Mantenha o centro de gravidade baixo na areia: em 4x4m a bola volta muito rápido!"
    ],
    "erroComum": "Dar o 1º toque muito baixo ou correndo para trás e ser obrigado a passar o 2º toque de qualquer jeito; corrija exigindo que o auto-levantamento tenha no mínimo 3 metros de altura. Variações",
    "variacaoFacil": "Permitir até 3 toques seguidos pelo mesmo jogador (1º controla, 2º prepara e 3º passa a rede).",
    "variacaoDificil": "Reduzir a área para 3x3 metros ou exigir que o 1º toque seja de manchete e o 2º toque seja obrigatoriamente de 'poke' (nó dos dedos).",
    "meta": "Vencer um mini-set de 7 pontos mantendo precisão de 80% no auto-levantamento sem cometer faltas de condução."
  },
  {
    "numero": 201,
    "secao": 13,
    "nome": "1x1 em meia-quadra longitudinal (8x4m) com 2 ou 3 toques individuais",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores por corredor (ou 4 jogadores ocupando os dois corredores de 8x4m)",
    "tempo": "10 minutos",
    "material": "4 bolas e 6 cones dividindo a quadra ao meio de fundo a fundo",
    "objetivo": "Treinar o deslocamento frente-fundo na areia fofa (8 metros de comprimento) e a capacidade de alternar bolas curtas na rede com bolas profundas na linha de 8m.",
    "comoMontar": "Coloque uma linha de cones dividindo a quadra ao meio de uma linha de fundo até a outra, formando dois corredores compridos de 8 metros de fundo por 4 metros de largura (16x4m cada pista). J1 x A1 na pista superior; J2 x A2 na pista inferior.",
    "passoAPasso": [
      "Cada jogador defende sozinho um corredor de 8m de profundidade por 4m de largura.",
      "O saque é feito normalmente atrás da linha de fundo de 8 metros.",
      "Regra Especial do 1x1 de Praia: o jogador pode usar 2 OU 3 toques seguidos sozinho (ex.: 1º recepciona de manchete para o meio da quadra, corre atrás da própria bola, 2º passa a bola ou levanta para si mesmo e 3º ataca!).",
      "Como a quadra é estreita (4m) mas comprida (8m), a estratégia vencedora é fazer o adversário correr para a frente (largada aos 2m) e na bola seguinte jogar no fundo (lob aos 8m).",
      "Disputam partidas de 4 minutos por bateria e trocam de adversário."
    ],
    "pontosAtencao": [
      "Quando você recepciona o saque lá nos 6 metros, jogue o seu 1º toque alto e para a FRENTE (para os 3 metros da rede) para você já avançar atacando a rede!",
      "Nunca fique parado no lugar onde você atacou: atacou na rede, recue imediatamente para o centro da sua pista (aos 4,5 metros da rede).",
      "Respeite a regra de toque limpo caso use os dedos para passar a bola para o outro lado."
    ],
    "erroComum": "Ficar pregado lá na linha de 7 metros com medo da bola funda e levar todos os pontos em largadas curtas perto da rede; corrija marcando um cone central aos 4,5m onde o jogador deve sempre voltar após passar a bola. Variações",
    "variacaoFacil": "Encurtar a profundidade da pista para 6 metros (corredor de 6x4m).",
    "variacaoDificil": "Permitir no máximo 2 toques individuais (1º recepciona/defende avançando e no 2º já é obrigado a atacar sobre a rede).",
    "meta": "Marcar pelo menos 5 pontos por partida alternando bolas nos primeiros 3 metros da rede e nos últimos 2 metros do fundo."
  },
  {
    "numero": 202,
    "secao": 13,
    "nome": "Jogo 2x2 na 'Caixa Curta' (zona até 5 metros) para domínio de jogo curto",
    "nivel": "Iniciante",
    "jogadores": "4 jogadores (Dupla J1 + J2 contra Dupla A1 + A2)",
    "tempo": "10 minutos",
    "material": "4 bolas e 6 cones demarcando a linha de 5 metros",
    "objetivo": "Aprimorar a leitura de bolas curtas, a comunicação rápida em espaço comprimido e o toque sutil sobre a rede.",
    "comoMontar": "Coloque cones ou uma fita reserva a 5 metros da rede em ambos os lados, excluindo os últimos 3 metros de fundo (a quadra válida passa a ter 5m de profundidade por 8m de largura de cada lado). J1/J2 na esquerda; A1/A2 na direita.",
    "passoAPasso": [
      "Toda bola que cair além da linha de 5 metros é considerada FORA!",
      "O saque deve ser feito obrigatoriamente atrás da linha de 5 metros usando saque por baixo ou flutuante curto controlado.",
      "Como a quadra tem apenas 5 metros de fundo (mas mantém os 8 metros inteiros de largura!), é proibido dar cortada forte para baixo; o jogo exige precisão cirúrgica nas laterais, nas diagonais curtas e nos pingos logo atrás da rede.",
      "A dupla é obrigada a usar os 3 toques (recepção + levantamento + golpe colocado dentro dos 5m).",
      "Jogam sets até 11 pontos."
    ],
    "pontosAtencao": [
      "Com apenas 5 metros de profundidade, a linha de base dos defensores sobe para 3,5 metros da rede!",
      "Explore toda a largura de 8 metros: faça a dupla adversária correr de uma antena até a outra.",
      "No levantamento, mantenha a bola controlada para não empurrar o parceiro para fora da quadra."
    ],
    "erroComum": "Esquecer que o fundo de 5 a 8 metros está fora de jogo e bater a bola longa demais; corrija exigindo arco curto e giro de punho (topspin/cut) para a bola mergulhar antes dos 5m. Variações",
    "variacaoFacil": "Permitir que o saque inicial seja feito a 3 metros da rede para garantir início fácil de todos os ralis.",
    "variacaoDificil": "Colocar 1 bloqueador obrigatório na rede em todos os pontos dentro da Caixa Curta de 5 metros!",
    "meta": "Vencer um set de 11 pontos cometendo no máximo 2 erros de bola longa além da linha dos 5 metros."
  },
  {
    "numero": 203,
    "secao": 13,
    "nome": "Duelo 1x1 cruzado (só vale diagonal de meia-quadra)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (ou 4 jogadores cruzando em X com bolas alternadas)",
    "tempo": "10 minutos",
    "material": "4 bolas e 6 cones dividindo os quadrantes diagonais",
    "objetivo": "Treinar os ângulos reais de diagonal (curta e longa) do vôlei de praia e o posicionamento corporal a 45 graus tanto no ataque quanto na defesa.",
    "comoMontar": "Divida cada meia-quadra em 2 corredores (esquerdo e direito, de 8x4m). J1 joga no corredor superior esquerdo (8x4m) enfrentando A1 que está no corredor INFERIOR direito (8x4m) — formando uma disputa 100% em diagonal! Os outros dois quadrantes ficam fora de jogo (ou são usados pela dupla J2 x A2 alternando o rali).",
    "passoAPasso": [
      "J1 (no corredor superior esquerdo) saca cruzado em diagonal para o corredor inferior direito de A1.",
      "Toda a partida acontece exclusivamente nessa diagonal cruzada: se a bola cair no corredor reto (paralela), é considerada FORA!",
      "Cada jogador tem direito a 2 toques individuais (1º toque defende/recepciona amortecendo na própria diagonal e no 2º toque ataca cruzado de volta para o quadrante diagonal adversário).",
      "Como a diagonal é mais comprida, o jogador precisa cobrir desde o 'cut shot' curtíssimo perto do centro da rede até a diagonal longa lá no canto de 8 metros.",
      "Jogam sets de 9 pontos e depois invertem a diagonal (corredor inferior esquerdo contra corredor superior direito) para treinar os dois ângulos do corpo!"
    ],
    "pontosAtencao": [
      "Posicione os seus dois pés e o seu umbigo sempre apontados em diagonal (45 graus) para o quadrante adversário.",
      "No seu 1º toque de defesa, levante a bola um pouco para dentro da sua meia-quadra (perto da linha divisória central) para ter ótimo ângulo de ataque cruzado no 2º toque.",
      "Use o 'cut shot' rente à rede quando vir o adversário recuado no canto fundo."
    ],
    "erroComum": "No 1º toque de defesa, deixar a bola espirrar para a linha lateral externa, ficando sem ângulo para cruzar a bola no 2º toque; corrija levantando o ombro de fora na manchete para trazer a bola para o centro. Variações",
    "variacaoFacil": "Permitir um 'Levantador Neutro Fixo' (ou um 2º colega) parado junto ao centro da rede de cada lado para transformar o jogo em 3 toques na diagonal.",
    "variacaoDificil": "Permitir que o jogador ataque de 1ª bola caso o adversário mande uma bola alta demais perto da rede.",
    "meta": "Marcar 9 pontos acertando pelo menos 3 bolas de 'cut shot' curto e 3 bolas no canto fundo da diagonal."
  },
  {
    "numero": 204,
    "secao": 13,
    "nome": "Jogo 2x2 em quadra estreita (corredor de 16x5m) para precisão linear",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (Dupla J1 + J2 contra Dupla A1 + A2)",
    "tempo": "10 minutos",
    "material": "4 bolas e 6 cones estreitando a largura para 5 metros",
    "objetivo": "Forçar a dupla a jogar de forma compacta, refinando o levantamento reto na linha e a coordenação frente-fundo entre bloqueador e defensor.",
    "comoMontar": "Coloque uma linha de cones a 3 metros de uma das linhas laterais de ponta a ponta, reduzindo a largura da quadra de 8 metros para 5 metros (quadra de 16m de comprimento por 5m de largura). J1 e J2 na esquerda; A1 e A2 na direita.",
    "passoAPasso": [
      "Com apenas 5 metros de largura para dois jogadores, quase não existe espaço lateral: o jogo passa a ser um duelo vertical de FRENTE vs. FUNDO e de exploração do bloqueio!",
      "Na recepção, J1 e J2 dividem os 5 metros (2,5m para cada um) com altíssima precisão para não baterem cabeça na costura.",
      "Na defesa, B1 é obrigado a bloquear na rede fechando metade do corredor de 5m, enquanto D1 fica atrás cuidando do corredor restante e dos lobs no fundo.",
      "Como a quadra é estreita, qualquer levantamento ou ataque que espalhe para os lados vai para fora: exige-se controle absoluto de ombros alinhados com a linha lateral.",
      "Jogam um set até 15 pontos."
    ],
    "pontosAtencao": [
      "Em uma quadra estreita de 5 metros, o bloqueio é rei: o atacante não consegue fugir abrindo muito ângulo, então precisa variar entre bater forte no corredor livre, usar o lob alto até os 8m ou explorar as bordas da mão do bloqueador!",
      "O levantador deve manter a bola no eixo central dos 5 metros.",
      "Comunique cada passo com o parceiro porque vocês estão muito próximos na areia."
    ],
    "erroComum": "Tentar dar cut shot muito angulado esquecendo que a quadra só tem 5 metros de largura e jogar a bola para fora dos cones; corrija trabalhando golpes retos no fundo e curtos na frente. Variações",
    "variacaoFacil": "Aumentar a largura do corredor para 6 metros.",
    "variacaoDificil": "Reduzir a largura para apenas 4 metros (2x2 em meia- quadra longitudinal!), exigindo precisão cirúrgica de passe e ataque.",
    "meta": "Vencer o set de 15 pontos com menos de 3 erros de ataque para fora das linhas laterais estreitas."
  },
  {
    "numero": 205,
    "secao": 13,
    "nome": "Jogo 2x2 condicionado: 'Proibido atacar na paralela' (só vale diagonal)",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (Dupla J1 + J2 contra Dupla A1 + A2)",
    "tempo": "10 minutos",
    "material": "5 bolas e 4 cones marcando a zona proibida da linha",
    "objetivo": "Treinar o atacante a superar um bloqueio e uma defesa que já sabem que a bola vai cruzar na diagonal, variando força, altura e cut shot.",
    "comoMontar": "Quadra oficial 16x8m. Em ambos os lados, coloque 2 cones demarcando um corredor de 2mx4m na linha paralela onde o ataque de 3ª bola é PROIBIDO de cair.",
    "passoAPasso": [
      "O saque, a recepção e o levantamento são normais na quadra inteira.",
      "Regra de Restrição no Ataque: toda bola de ataque (3º toque) precisa obrigatoriamente cruzar a quadra em DIAGONAL (caindo na metade oposta ao lado de onde o atacante pulou)!",
      "Se o atacante estiver na esquerda e atacar na paralela esquerda (mesmo que caia na quadra), é ponto automático do adversário!",
      "Desafio Mental: como o bloqueador e o defensor adversário JÁ SABEM que você é proibido de atacar na paralela, eles vão fechar a diagonal! Como fazer ponto então? Usando as 3 variações da diagonal: 1) Pancada na diagonal longa no fundo; 2) Cut shot curtíssimo perto da antena oposta; 3) Bater alto explorando os dedos do bloqueio na diagonal!",
      "Após 7 minutos, invertem a regra para 'Proibido atacar na diagonal — só vale atacar no corredor da paralela!'."
    ],
    "pontosAtencao": [
      "Quando a defesa já sabe que você vai na diagonal, bater meia-força a 5 metros da rede é entregar a bola na mão do defensor: ou você bate forte no fundo/costura, ou você corta curto nos 2 metros!",
      "Para o levantador: deixe a bola a 1,5m–2m da rede para dar ângulo ao atacante de fugir do bloqueio fechado na diagonal.",
      "Para a defesa: aproveitem a regra para treinar a leitura fina entre pancada cruzada e cut shot."
    ],
    "erroComum": "O atacante saltar muito colado na fita da rede e ficar trancado de frente com o bloqueador que já fechou a diagonal; corrija mantendo o salto afastado da rede para enxergar por onde contornar o bloqueio. Variações",
    "variacaoFacil": "Proibir o bloqueador de saltar na rede (jogar contra 2 defensores posicionados na diagonal).",
    "variacaoDificil": "O bloqueador fecha a diagonal média e o defensor fecha a diagonal funda, deixando apenas o cut shot curto ou o lob diagonal como janelas.",
    "meta": "Converter pelo menos 6 ataques na diagonal mesmo contra o sistema defensivo concentrado nesse setor."
  },
  {
    "numero": 206,
    "secao": 13,
    "nome": "Jogo 2x2 de habilidade pura: 'Proibido Cortar Forte' (Festival de Shots)",
    "nivel": "Intermediário",
    "jogadores": "4 jogadores (Dupla J1 + J2 contra Dupla A1 + A2)",
    "tempo": "11 minutos",
    "material": "5 bolas",
    "objetivo": "Desenvolver a visão periférica no ar, o toque refinado dos golpes colocados da areia (poke, cobra, cut shot e lob) e a leitura de defesa.",
    "comoMontar": "Quadra oficial 16x8m completa (8x8m de cada lado) com Dupla J1 + J2 na esquerda e Dupla A1 + A2 na direita.",
    "passoAPasso": [
      "Partida 2x2 em quadra inteira onde é TERMINANTEMENTE PROIBIDO dar cortada forte (bater de mão cheia com velocidade para baixo)!",
      "Para passar a bola no ataque (2º ou 3º toque), só são permitidos os golpes de habilidade regulamentares do vôlei de praia: 'Cut Shot' (giro de punho suave), 'Lob' (bola alta no canto de 8m), 'Poke' (nó dos dedos rígidos), 'Cobra' (pontas dos dedos unidas e duras) ou toque limpo perpendicular aos ombros.",
      "Atenção ao disfarce: apesar de ser proibido bater forte, o atacante é obrigado a saltar e armar o braço alto olhando para os defensores antes de escolher onde colocar a bola!",
      "Como ninguém pode matar o ponto na força bruta, os ralis ficam longos e cheios de peixinhos, exigindo que o atacante olhe onde os dois adversários estão parados para jogar a bola exatamente onde a areia está vazia!",
      "Qualquer largada ilegal (mão aberta com dedos moles empurrando a bola) ou batida forte dá ponto ao adversário."
    ],
    "pontosAtencao": [
      "Muitos jogadores que dependem só da força do ombro ficam perdidos neste jogo nos primeiros minutos — e logo descobrem que mirar nos 4 cantos extremos da quadra (2m na frente e 8m no fundo) mata mais pontos do que qualquer pancada!",
      "Na defesa: como não existe pancada no fundo, os dois defensores ficam mais centralizados aos 4 metros prontos para correr!",
      "Use o 'chamado do levantador' (Seção 11) em 100% das bolas para achar o buraco vazio."
    ],
    "erroComum": "Passar a bola de manchete para o meio da quadra adversária só para não errar, entregando contra-ataque fácil; corrija exigindo que todo 3º toque seja feito saltando e mirando nos cantos. Variações",
    "variacaoFacil": "Permitir o uso da manchete no 3º toque apenas quando o levantamento ficar atrás da linha de 4 metros.",
    "variacaoDificil": "Se a bola colocada cair na areia sem que nenhum dos dois adversários consiga sequer relar o dedo nela ('Shot Perfeito'), vale 2 pontos!",
    "meta": "Conquistar pelo menos 5 pontos de 'Shot Limpo' (bola tocando a areia vazia nos cantos) sem cometer faltas de largada aberta."
  },
  {
    "numero": 207,
    "secao": 13,
    "nome": "Rei da Quadra clássico ('King of the Court' com fila de duplas desafiantes)",
    "nivel": "Intermediário",
    "jogadores": "6 a 12 jogadores (3 a 6 duplas em rotação contínua)",
    "tempo": "12 minutos",
    "material": "6 bolas e cesto de bolas na linha de fundo desafiante",
    "objetivo": "Treinar a capacidade de virar o side-out na primeira tentativa sob pressão de eliminação imediata ('errou, saiu para a fila').",
    "comoMontar": "A meia-quadra DIREITA é o 'Lado do Rei/Trono' (onde fica a dupla detentora da coroa, A1 + A2). A meia- quadra ESQUERDA é o 'Lado Desafiante' (onde está a dupla J1 + J2). Atrás da linha de fundo esquerda ficam as demais duplas na fila de espera (F1 + F2) já com bola na mão.",
    "passoAPasso": [
      "Regras Oficiais do Rei da Quadra de Treino: apenas a dupla que está no Lado do Rei (direita) pode somar pontos no placar geral!",
      "O rali sempre começa com a dupla que está na fila de espera (ou a dupla Desafiante que acabou de entrar na esquerda) sacando para o Lado do Rei, OU com o treinador sacando na dupla Desafiante.",
      "Formato mais dinâmico (Saque no Desafiante): um jogador do Lado do Rei (A2) saca contra a dupla Desafiante (J1 + J2).",
      "Se a dupla Desafiante (J1 + J2) vencer o rali: eles NÃO ganham ponto ainda, mas DERRUBAM o Rei! A1 e A2 saem para o fim da fila, J1 e J2 correm por baixo da rede assumindo o Lado do Rei (direita), e a dupla da fila (F1 + F2) já entra na esquerda!",
      "Se a dupla do Rei (A1 + A2) defender o ataque desafiante e vencer o rali: o Rei marca +1 PONTO, continua no Trono e enfrenta imediatamente a próxima dupla da fila (F1 + F2)!"
    ],
    "pontosAtencao": [
      "Velocidade de transição entre ralis: assim que a bola cai no chão definindo o vencedor do rali, a dupla que perdeu tem 3 segundos para sair da quadra pelas laterais e o próximo saque já é autorizado!",
      "Quando você está no Lado Desafiante (esquerda), a sua única missão é virar o side-out sem errar de graça para conquistar o direito de ir para o Trono.",
      "Quando você chega no Lado do Rei (direita), capriche no saque e no bloqueio porque só ali você pontua!"
    ],
    "erroComum": "A dupla da fila (F1 + F2) ficar conversando distraída fora da quadra e demorar para entrar quando o ponto acaba; corrija descontando 1 ponto da dupla da fila se ela não estiver pisando na linha de fundo em 3 segundos. Variações",
    "variacaoFacil": "Se a dupla do Rei cometer erro de saque (na rede ou fora), eles não perdem o trono de primeira: têm direito a um '2º saque de vida extra', mas sem valer ponto se vencerem.",
    "variacaoDificil": "Falta de saque do Lado do Rei derruba o Rei na hora!",
    "meta": "Ser a primeira dupla a acumular 7 pontos no Lado do Rei (ou somar pelo menos 3 coroas de defesa no Trono)."
  },
  {
    "numero": 208,
    "secao": 13,
    "nome": "Giro rápido de 4 a 6 duplas: 'Para subir ao Trono precisa confirmar 2 bolas'",
    "nivel": "Intermediário",
    "jogadores": "8 a 12 jogadores (4 a 6 duplas em rodízio de alta intensidade)",
    "tempo": "12 minutos",
    "material": "8 bolas e cesto com o treinador na lateral",
    "objetivo": "Aumentar o tempo de cada dupla em quadra em turmas grandes exigindo que a dupla desafiante vença o side-out E uma bola de transição antes de assumir o trono.",
    "comoMontar": "Mesma estrutura de Trono (direita, A1 + A2) e Desafiantes (esquerda, J1 + J2), com as duplas F1/F2 aguardando no fundo esquerdo e o Treinador (T) no poste da rede com cesto de bolas.",
    "passoAPasso": [
      "Quando a turma é grande (4 a 6 duplas), o Rei da Quadra de 1 bola só às vezes passa rápido demais. Neste formato de 'Confirmação Dupla', cada desafiante joga 2 bolas encadeadas:",
      "Bola 1: A2 (do Trono) saca em J1 + J2 (Desafiantes). Se o Trono vencer a Bola 1, o Trono já ganha +1 ponto e entra a próxima dupla da fila (F1 + F2).",
      "Porém, se os Desafiantes (J1 + J2) vencerem a Bola 1 (virarem o side-out), eles ainda NÃO derrubaram o Rei: no mesmo segundo, o Treinador (T) lança uma Bola 2 de Confirmação para o Lado do Rei (A1 + A2) atacar!",
      "J1 e J2 precisam defender o ataque do Rei na Bola 2 e matar o contra-ataque para confirmar a queda do Rei e subir ao Trono já com +1 ponto bônus!",
      "Se o Rei vencer a Bola 2, o Rei salva a sua coroa ('defendeu o trono') e continua lá contra a próxima dupla da fila!"
    ],
    "pontosAtencao": [
      "Esse formato cria ralis espetaculares porque a dupla que está no Trono luta pela vida na Bola 2 mesmo depois de levar o side-out na Bola 1!",
      "Para os Desafiantes (J1 + J2): assim que matarem a Bola 1, já montem bloqueio e defesa imediatamente porque a Bola 2 do treinador já está subindo!",
      "As duplas da fila fora da quadra têm a função de buscar as bolas espalhadas e alimentar o cesto do treinador sem parar."
    ],
    "erroComum": "A dupla Desafiante comemorar a Bola 1 achando que já subiu para o Trono e levar a Bola 2 desprevenida; corrija lançando a Bola 2 sem esperar comemoração. Variações",
    "variacaoFacil": "A Bola 2 do treinador é lançada no lado dos próprios Desafiantes (J1 + J2) para eles apenas confirmarem um segundo ataque seguido.",
    "variacaoDificil": "Se a dupla do Trono vencer 3 duplas desafiantes seguidas, ganha um 'Super Bônus' de +2 pontos e tem direito a descansar 1 rodada sem perder a coroa.",
    "meta": "Conquistar o Trono vencendo as duas bolas seguidas (Side-out + Defesa de Confirmação) e somar 6 pontos no placar."
  },
  {
    "numero": 209,
    "secao": 13,
    "nome": "Jogo situado: rali iniciado a partir de 'Recepção Quebrada' (Sufoco Inicial)",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Dupla J1 + J2 contra Dupla A1 + A2 + lançador/treinador)",
    "tempo": "11 minutos",
    "material": "6 bolas e 3 cones marcando os pontos de sufoco",
    "objetivo": "Treinar a resiliência tática da dupla para vencer pontos que começam em desvantagem extrema (passe colado na antena, passe aos 6,5m no fundo ou fora da quadra).",
    "comoMontar": "Na meia-quadra esquerda (J1 + J2), coloque 3 cones de 'Recepção Quebrada': Cone A (aos 6,5m no fundo), Cone B (a 1,5m fora da linha lateral) e Cone C (colado na fita perto da antena). Dupla A1 + A2 na direita pronta para bloquear e defender.",
    "passoAPasso": [
      "Em vez de começar o ponto com saque normal, J1 e J2 começam na base de recepção aos 5,5m e o treinador (ou A2) lança a 1ª bola diretamente em um dos 3 Cones de Sufoco (simulando que o 1º toque já aconteceu e espirrou para lá!).",
      "Portanto, a bola que está caindo no Cone A, B ou C já é o 2º TOQUE (Levantamento de Emergência) da dupla J1 + J2!",
      "J2 corre em velocidade máxima até o cone onde a bola foi lançada, resgata de manchete alta trazendo para uma zona segura a 2m da rede, e J1 precisa atacar esse levantamento de sufoco contra o bloqueio e defesa montados de A1 + A2!",
      "A partir daí o rali corre livre até a bola cair na areia!",
      "Se J1 e J2 vencerem o ponto mesmo saindo do sufoco = 2 pontos; se A1 e A2 aproveitarem a vantagem e contra- atacarem = 1 ponto. Trocam a cada 6 bolas."
    ],
    "pontosAtencao": [
      "Para a dupla no sufoco (J1 + J2): você NÃO precisa cravar a bola de 3 metros quando está saindo do sufoco!",
      "Se o levantamento veio lá de fora da quadra, coloque uma bola alta e funda no canto de 8m de A1/A2, organize o seu bloqueio/defesa e vença o ponto na transição!",
      "Para a dupla na defesa (A1 + A2): quando o adversário está levantando lá do Cone A (6,5m no fundo) ou fora da quadra, o bloqueador A1 faz o 'pulling' (retira da rede) e os dois fecham os espaços esperando a bola colocada!",
      "Nunca entregue erro na rede numa bola de sufoco."
    ],
    "erroComum": "O atacante J1 tentar dar uma pancada para baixo numa bola que veio levantada lá de fora da quadra e carimbar a fita da rede; corrija premiando o uso de lob/cut shot na primeira bola para continuar vivo no rali. Variações",
    "variacaoFacil": "A bola lançada no cone conta como o 1º toque (a dupla ainda tem direito ao 2º toque de levantamento e ao 3º de ataque).",
    "variacaoDificil": "O treinador lança a bola baixa e rápida nos cones de sufoco, exigindo peixinho do levantador para salvar o 2º toque!",
    "meta": "Manter 9 de 10 bolas de sufoco vivas em jogo (zero erros diretos na rede) e vencer pelo menos 5 dos 10 ralis completos."
  },
  {
    "numero": 210,
    "secao": 13,
    "nome": "Jogo iniciado em 'Defesa de Guerra': só entra no rali quem salvar a 1ª pancada",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Dupla J1 + J2 contra Dupla A1 + A2 + Treinador atacando)",
    "tempo": "11 minutos",
    "material": "8 bolas e caixote para o treinador na lateral da rede",
    "objetivo": "Condicionar a transição imediata da defesa difícil na areia para o contra-ataque sob pressão competitiva real.",
    "comoMontar": "Dupla J1 (bloqueio) e J2 (defesa) na meia-quadra esquerda; Dupla A1 (bloqueio) e A2 (defesa) na meia- quadra direita. O Treinador (T) fica junto ao poste da rede com um cesto de bolas.",
    "passoAPasso": [
      "Nenhum ponto começa com saque: todo ponto começa com o Treinador (T) batendo uma bola difícil (cortada forte, cut shot ou lob) contra a defesa da Dupla J1 + J2!",
      "J1 e J2 precisam defender essa 1ª bola de guerra (1º toque), fazer o levantamento de transição (2º toque) e atacar (3º toque) contra A1 e A2!",
      "A partir do ataque de J1/J2, o rali segue valendo ponto normal entre as duas duplas!",
      "Regra do Gatilho de Ouro: se J1 e J2 deixarem a 1ª bola batida pelo treinador cair no chão sem conseguir passar os 3 toques para o outro lado, o treinador bate IMEDIATAMENTE a bola para o lado de A1 e A2 (que ganham a chance de contra-atacar e pontuar)!",
      "A cada 5 bolas iniciadas na esquerda, o treinador passa a iniciar 5 bolas batendo na direita."
    ],
    "pontosAtencao": [
      "Esse jogo elimina a preguiça defensiva: se você não defender a primeira pancada do treinador e não passar a bola para o outro lado, você nem participa do ponto!",
      "Para o bloqueador (J1): assim que o treinador bater a bola no seu defensor (J2), saia da rede como um raio para levantar na medida!",
      "A dupla que está do outro lado esperando o contra-ataque (A1 + A2) já fica com o bloqueio armado na rede e a defesa pronta no fundo."
    ],
    "erroComum": "Defender a pancada do treinador e comemorar que a bola subiu, esquecendo de abrir rápido para atacar contra o bloqueio de A1; corrija mantendo o ritmo acelerado até o ponto terminar. Variações",
    "variacaoFacil": "O treinador envia a primeira bola com 70% de força avisando antes se vai bater em J1 ou em J2.",
    "variacaoDificil": "Se a dupla que recebeu a pancada inicial do treinador defender, levantar e matar o ponto de primeira contra A1/A2, vale 2 pontos !",
    "meta": "Defender e construir o contra-ataque em pelo menos 7 de 10 bolas de guerra enviadas pelo treinador, vencendo 50% dos ralis."
  },
  {
    "numero": 211,
    "secao": 13,
    "nome": "Jogo de pontuação agressiva: 'Ace, Bloqueio e Bola de 2ª valem 3 Pontos!'",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Partida 2x2 oficial com placar bonificado)",
    "tempo": "12 minutos",
    "material": "5 bolas e placar",
    "objetivo": "Estimular a agressividade consciente no saque tático, na invasão de bloqueio na rede e na leitura de ataque de segunda bola.",
    "comoMontar": "Quadra oficial 16x8m com Dupla J1 + J2 na esquerda e Dupla A1 + A2 na direita.",
    "passoAPasso": [
      "Partida de 1 set até 21 pontos onde os pontos normais de ataque de 3ª bola ou erro adversário valem 1 ponto, mas existem 3 jogadas especiais que valem 3 PONTOS IMEDIATOS:",
      "Bônus 1 (Saque Ace = 3 pts): se o saque cair na areia adversária sem toque ou após tocar apenas em 1 receptor sem que o parceiro consiga dar o 2º toque.",
      "Bônus 2 (Ponto Direto de Bloqueio = 3 pts): quando o bloqueador abafa o ataque adversário fazendo a bola cair na quadra oponente.",
      "Bônus 3 (Ponto em Ataque de Segunda Bola = 3 pts): quando a recepção ou a defesa sobe boa e o levantador ataca (ou passa de toque limpo perpendicular/poke) matando o ponto no 2º contato da dupla!",
      "Equilíbrio de Risco (A Trava Tática): para evitar que os jogadores saquem tudo na rede tentando ganhar 3 pontos, cada erro de saque direto dá +2 pontos para o adversário!"
    ],
    "pontosAtencao": [
      "Como a Bola de Segunda vale 3 pontos neste jogo, o recebedor/defensor se esforça ao máximo para colocar o 1º toque alto e a 1,5m da rede na mão do parceiro!",
      "Da mesma forma, o bloqueador adversário fica muito mais atento no meio da rede respeitando a ameaça da segunda bola antes de abrir para a ponta.",
      "No saque: como o erro custa 2 pontos e o ace vale 3, o segredo não é sacar de olhos fechados, mas sacar tático na costura e nas linhas curtas!"
    ],
    "erroComum": "Tentar atacar de segunda bola até passes que ficaram lá nos 4 metros da rede, entregando bolas fáceis na mão da defesa adversária; corrija acionando a segunda bola apenas quando o passe subir dentro da zona de 1,5m da fita. Variações",
    "variacaoFacil": "Retirar a penalidade de -2 pontos no erro de saque nos primeiros 4 minutos para soltar o braço dos alunos.",
    "variacaoDificil": "Incluir um 4º bônus: 'Cut Shot que cai na areia sem ninguém tocar também vale 3 pontos!'.",
    "meta": "Conquistar pelo menos 3 jogadas bonificadas de 3 pontos (Ace, Bloqueio ou Bola de 2ª) ao longo do set."
  },
  {
    "numero": 212,
    "secao": 13,
    "nome": "Duelo 1x1 em quadra inteira (8x8m) com 'Levantador Fixo Neutro' na rede",
    "nivel": "Avançado",
    "jogadores": "4 jogadores em quadra (J1 duelando 1x1 contra A1, com L1 e L2 como levantadores fixos)",
    "tempo": "10 minutos",
    "material": "5 bolas 1x1 EM",
    "objetivo": "Exigir leitura máxima de espaços vazios, cobertura de 64m² na areia e condicionamento específico de transição em quadra oficial completa.",
    "comoMontar": "Quadra oficial 16x8m inteira (8x8m de cada lado). Na esquerda: J1 é o único jogador de linha e L1 fica fixo junto ao centro da rede apenas para levantar. Na direita: A1 é o único jogador de linha e L2 fica fixo junto ao centro da rede apenas para levantar.",
    "passoAPasso": [
      "Este é o clássico treino dos atletas profissionais de vôlei de praia para leitura de quadra: J1 enfrenta A1 no 1 contra 1 valendo toda a quadra de 8x8 metros!",
      "Qual é a função de L1 e L2 na rede? Eles são 'Levantadores Fixos': eles NÃO podem bloquear, NÃO podem defender o 1º toque e NÃO podem atacar! Eles só podem sair do centro da rede para dar o 2º toque (levantamento) após J1 ou A1 recepcionar/defender!",
      "Portanto, J1 precisa sozinho: 1) Recepcionar o saque na quadra 8x8m; 2) Correr para atacar o levantamento de L1; 3) Voltar imediatamente para o centro da quadra para defender o ataque de A1 nos 64m²!",
      "Como só há 1 defensor do outro lado cobrindo 8x8 metros, se o atacante apenas olhar para onde o adversário está correndo e colocar a bola no canto oposto, é ponto certo!",
      "Jogam mini-sets intensos de 5 pontos (para não exaurir) e trocam os papéis: L1 vira o jogador de 1x1 e J1 passa a ser o levantador fixo!"
    ],
    "pontosAtencao": [
      "Neste jogo, quem bate forte em cima do adversário perde o fôlego e perde o jogo: o objetivo é levantar a cabeça antes de bater e jogar a bola onde o adversário NÃO está!",
      "Para o defensor sozinho nos 8x8m: posicione-se no centro exato da quadra (a 4,5m da rede e 4m das laterais) e use a leitura de ombro/cotovelo (Seção 9) para antecipar o canto.",
      "Sempre mande a sua recepção e a sua defesa bem altas para o centro da rede onde o seu levantador fixo aguarda."
    ],
    "erroComum": "Atacar uma bola curta na frente, admirar o próprio golpe e ficar colado na rede levando um lob nas costas lá nos 8 metros; corrija recuando ao centro da quadra (4,5m) assim que os pés tocarem a areia após o ataque. Variações",
    "variacaoFacil": "Reduzir a largura da quadra para 6 metros (6x8m) mantendo o levantador fixo na rede.",
    "variacaoDificil": "O levantador fixo (L1/L2) só pode levantar do lugar onde estiver parado (proibido correr mais de 1 passo), obrigando J1 e A1 a colocarem a defesa cravada na mão dele!",
    "meta": "Vencer um mini-set de 5 pontos no 1x1 de quadra inteira convertendo pelo menos 4 bolas em espaços vazios sem que o oponente toque na bola."
  },
  {
    "numero": 213,
    "secao": 13,
    "nome": "Simulação de Fim de Set no Limite: placar começa em 18x18 (com 1 Time-out)",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Partida 2x2 oficial sob pressão de fechamento de set)",
    "tempo": "12 minutos",
    "material": "5 bolas, placar e apito",
    "objetivo": "Treinar a execução técnica e emocional nos últimos 3 pontos de um set oficial (18x18 até 21, com diferença de 2 pontos), incluindo o uso estratégico do pedido de tempo.",
    "comoMontar": "Quadra oficial 16x8m pronta para partida 2x2: Dupla J1 + J2 na esquerda e Dupla A1 + A2 na direita. Placar visível marcando 18 x 18.",
    "passoAPasso": [
      "Por que muitas duplas jogam super bem até o ponto 15 e travam na hora de fechar o set aos 18x18? Porque não treinam a pressão do fim de set todos os dias!",
      "Toda partida começa empatada em 18 x 18 (vai até 21 pontos, precisando abrir 2 pontos de vantagem: 21x19, 22x20...).",
      "Ferramenta Tática Obrigatória: cada dupla tem direito a 1 Pedido de Tempo (Time-out de 20 segundos) durante esses pontos finais — e é OBRIGATÓRIO usar esse pedido de tempo antes do jogo acabar (por exemplo: quando o adversário chegar a 20x19 ou antes de um saque decisivo)!",
      "Lembrete da Regra Oficial: como a soma dos pontos é múltiplo de 7 (no 18x18 a soma é 36; quando chegar a 21x20 a soma é 41; no 21x21 a soma é 42, múltiplo de 7!), no 21x21 as duplas trocam de lado na quadra!",
      "Cada dupla joga 3 finais de set seguidos (um começando com o saque, outro recebendo e o terceiro no sorteio)."
    ],
    "pontosAtencao": [
      "No 18x18, aplique o ritual dos 12 segundos (Seção 11) antes de cada bola: definam exatamente quem recebe a costura, qual é o sinal de bloqueio e qual golpe de segurança vão usar.",
      "Quando pedir o Time-out aos 19x20 contra você, use os 20 segundos para mudar o sinal de bloqueio ou mudar o receptor alvo do seu próximo saque.",
      "Proibido perder o set errando saque na rede no Set Point adversário!"
    ],
    "erroComum": "Guardar o pedido de tempo e perder o jogo de 21x19 sem ter parado a partida quando o adversário fez 20x19; corrija penalizando a dupla que terminar o mini-set sem ter usado o seu Time-out tático. Variações",
    "variacaoFacil": "Começar o placar em 19x19 sem obrigação do pedido de tempo.",
    "variacaoDificil": "A dupla principal (J1 + J2) começa todas as simulações perdendo por 17 x 19 (precisa buscar 1 ponto de bloqueio/defesa no saque além de virar todos os seus side-outs!).",
    "meta": "Vencer pelo menos 2 de 3 simulações de fim de set (18x18 a 21) utilizando o Time-out estrategicamente e sem cometer erros de saque."
  },
  {
    "numero": 214,
    "secao": 13,
    "nome": "Desafio Supremo de Tie-Break (12x12 até 15 pts com confirmação no Match Point)",
    "nivel": "Avançado",
    "jogadores": "4 jogadores (Disputa 2x2 decisiva de encerramento da seção)",
    "tempo": "12 minutos",
    "material": "6 bolas e placar",
    "objetivo": "Coroar o domínio técnico, tático e emocional em situações de jogo vencendo um final de Tie-Break com troca de lado a cada 5 pontos e confirmação de Match Point.",
    "comoMontar": "Quadra oficial 16x8m com Dupla J1 + J2 na esquerda e Dupla A1 + A2 na direita. Placar inicial cravado em 12 x 12 (3º set / Tie-break até 15 pontos).",
    "passoAPasso": [
      "No vôlei de praia, o 3º set (Tie-Break) vai até 15 pontos com troca de lado a cada 5 pontos somados (soma 5, 10, 15, 20, 25, 30...).",
      "O jogo começa em 12 x 12 (soma = 24 pontos): portanto, logo após o 1º ponto disputado (quando o placar for a 13 x 12, soma = 25, múltiplo de 5!), as duplas já precisam TROCAR DE LADO NA QUADRA adaptando-se imediatamente ao vento e ao sol do novo lado!",
      "Regra Especial do Match Point Confirmado: quando uma dupla chegar ao Match Point (ex.: 14 x 12 ou 14 x 13) e vencer o rali do 15º ponto, o treinador lança imediatamente uma Bola Final do Campeonato na quadra deles para eles confirmarem o último ataque (se errarem a bola de confirmação, o jogo volta para 14x13!).",
      "É obrigatório abrir 2 pontos de diferença E confirmar a Bola Final para ser proclamado campeão do desafio!"
    ],
    "pontosAtencao": [
      "Fique ligado na matemática da troca de lado do Tie-break: 13x12 (soma 25 = TROCA!), 15x15 (soma 30 = TROCA!).",
      "Essa troca constante exige adaptação instantânea ao vento!",
      "No Match Point (14x13), mantenha a agressividade nos pés (deslocamento e salto máximo) e a frieza na mão (escolha o golpe que o adversário deixou aberto).",
      "Na Bola Final de Confirmação lançada pelo treinador, comuniquem alto ('Minha! — Levanta na ponta!') para fechar com chave de ouro."
    ],
    "erroComum": "Esquecer de trocar de lado quando o placar chega a 13x12 (soma 25) ou relaxar antes de converter a Bola Final de Confirmação; corrija anunciando em voz alta a contagem da soma dos pontos. Variações",
    "variacaoFacil": "Tie-break normal de 12x12 até 15 pontos sem a necessidade da bola extra de confirmação no final.",
    "variacaoDificil": "Se a dupla tiver o Match Point na mão e errar o ataque para fora ou na rede, o adversário ganha 2 pontos automáticos virando o Match Point a favor dele!",
    "meta": "Vencer o Tie-break saindo de 12x12, adaptando-se perfeitamente à troca de lado do 25º ponto (13x12) e convertendo a Bola Final do Campeonato."
  },
  {
    "numero": 215,
    "secao": 14,
    "nome": "Circuito de força de base para pernas (agachamento, afundo e ponte)",
    "nivel": "Iniciante",
    "jogadores": "2 a 3 jogadores (1 em cada estação ou dupla sincronizada)",
    "tempo": "10 minutos (3 séries de 40s de execução por 30s de descanso)",
    "material": "3 cones demarcando as 3 estações na areia",
    "objetivo": "Construir resistência muscular localizada em quadríceps, glúteos e posteriores de coxa usando a instabilidade natural da areia sem equipamentos.",
    "comoMontar": "Na meia-quadra esquerda, posicione 3 cones alinhados a 4 metros da rede, separados por 2,5 metros entre si: Estação 1 (Agachamento Isométrico + Dinâmico) no topo, Estação 2 (Afundo Estático Alternado) no centro e Estação 3 (Ponte de Glúteo na Areia) na parte inferior.",
    "passoAPasso": [
      "Í Os jogadores posicionam-se nas estações demarcadas pelos cones.",
      "Estação 1 (Agachamento): afaste os pés na largura dos ombros, desça controlando o movimento até 90 graus de flexão dos joelhos, segure 2 segundos lá embaixo na base de defesa e suba empurrando a areia com o pé inteiro.",
      "Estação 2 (Afundo Estático): dê um passo à frente na areia, desça o joelho de trás em direção ao chão mantendo o tronco ereto, suba e troque a perna da frente a cada repetição.",
      "Estação 3 (Ponte de Glúteo): deite de barriga para cima na areia com os joelhos dobrados e os calcanhares fincados no chão; eleve o quadril contraindo os glúteos até alinhar joelhos, quadril e ombros, segure 2 segundos no alto e desça devagar.",
      "Volume e Pausa: execute 3 voltas completas nas 3 estações, com 40 segundos de atividade em cada cone e 30 segundos de descanso caminhando durante a troca de estação. Reduza a amplitude do movimento caso sinta desconforto articular nos joelhos."
    ],
    "pontosAtencao": [
      "No agachamento e no afundo, mantenha os joelhos alinhados com a ponta do segundo dedo do pé, evitando que caiam para dentro (valgo dinâmico).",
      "Distribua o peso na planta inteira do pé na areia para não sobrecarregar o tendão patelar.",
      "Na ponte de glúteo, suba usando a força do quadril e não arqueando excessivamente a coluna lombar."
    ],
    "erroComum": "Descer rápido demais no agachamento perdendo o alinhamento da coluna; corrija mantendo o peito aberto mirando a fita superior da rede. Variações",
    "variacaoFacil": "Reduzir o tempo de estímulo para 25 segundos por estação com 35 segundos de pausa e fazer meia amplitude nos agachamentos.",
    "variacaoDificil": "Na Estação 3, executar a ponte de glúteo de forma unilateral (uma perna estendida no ar, trocando a cada 20 segundos).",
    "meta": "Completar as 3 séries mantendo o controle postural e a cadência constante de execução durante todos os blocos de 40 segundos."
  },
  {
    "numero": 216,
    "secao": 14,
    "nome": "Estabilidade de core e cintura escapular (circuito de pranchas)",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores (lado a lado)",
    "tempo": "9 minutos (3 séries de 30s de estímulo por 30s de descanso)",
    "material": "4 cones demarcando os postos na areia",
    "objetivo": "Fortalecer a musculatura profunda do abdômen, lombar e estabilizadores da escápula para proteger a coluna nos giros de ataque e quedas na areia.",
    "comoMontar": "Na meia-quadra esquerda, posicione 2 cones a 3 metros da rede e 2 cones a 6 metros da rede, criando duas zonas de solo confortáveis para J1 e J2 trabalharem de frente para a rede.",
    "passoAPasso": [
      "Í Série 1 (Prancha Frontal Baixa): apoie os antebraços e as pontas dos pés na areia, mantendo o corpo em linha reta da cabeça aos calcanhares, contraindo abdômen e glúteos.",
      "Série 2 (Prancha Lateral): apoie um antebraço na areia e mantenha o quadril elevado lateralmente por 15 segundos de um lado e 15 segundos do outro lado.",
      "Série 3 (Prancha Alta com Toque no Ombro): em posição de flexão de braços com os pés um pouco mais afastados na areia, tire uma mão do chão e toque lentamente o ombro oposto sem deixar o quadril balançar para os lados.",
      "Volume e Pausa: realize 3 séries de 30 segundos de execução por 30 segundos de descanso para cada variação (total de 9 estímulos curtos). Se o quadril começar a desabar ou a lombar doer, apoie os joelhos na areia imediatamente para reduzir a alavanca."
    ],
    "pontosAtencao": [
      "Empurre a areia ativamente com os antebraços ou mãos para manter as escápulas firmes e longe das orelhas.",
      "Mantenha a respiração fluida e contínua durante a isometria (não prenda o ar).",
      "Na prancha alta com toque no ombro, afaste os pés a 60 cm um do outro para criar uma base antirotacional sólida na areia."
    ],
    "erroComum": "Deixar a região lombar afundar em direção à areia por fadiga abdominal; corrija encaixando levemente a pelve para dentro e ativando os glúteos. Variações",
    "variacaoFacil": "Realizar todas as pranchas com os joelhos apoiados na areia fofa e tempo de 20 segundos.",
    "variacaoDificil": "Na prancha frontal, alternar a elevação suave de um pé de cada vez a 10 cm da areia mantendo o tronco imóvel.",
    "meta": "Sustentar os blocos de 30 segundos mantendo o alinhamento neutro da coluna e o quadril estável sem oscilações laterais."
  },
  {
    "numero": 217,
    "secao": 14,
    "nome": "Prevenção de tornozelo e joelho: equilíbrio unipodal e alcance em Y",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores",
    "tempo": "9 minutos (3 séries de 8 repetições por perna com 40s de descanso)",
    "material": "6 cones pequenos (3 para cada jogador)",
    "objetivo": "Treinar a propriocepção do tornozelo e o controle de alinhamento do joelho em apoio de um pé só na areia fofa para prevenir entorses nas aterrissagens.",
    "comoMontar": "Para cada jogador (J1 e J2) na meia-quadra esquerda, posicione 3 cones ao redor de um ponto central formando a letra 'Y' a 70 centímetros de distância: Cone 1 à frente, Cone 2 na diagonal traseira direita e Cone 3 na diagonal traseira esquerda.",
    "passoAPasso": [
      "Í J1 e J2 apoiam apenas o pé direito no centro do 'Y' na parte de areia fofa, mantendo o joelho de apoio destravado (levemente flexionado) e as mãos na cintura.",
      "Com a perna esquerda suspensa no ar, o jogador flexiona o joelho de apoio e estende suavemente a ponta do pé livre para tocar de leve no Cone 1 (à frente), voltando ao centro sem apoiar o pé livre no chão.",
      "Em seguida, leva o pé livre para tocar no Cone 2 (diagonal traseira externa) e depois no Cone 3 (diagonal traseira cruzando por trás da perna de apoio), voltando sempre à postura ereta em 1 pé só.",
      "Volume e Pausa: faça 3 séries de 8 giros completos no Y (4 para a perna direita e 4 para a perna esquerda), com 40 segundos de descanso entre as séries. Caso perca o equilíbrio constantemente, alise a areia para deixá-la mais plana e reduza a distância dos cones."
    ],
    "pontosAtencao": [
      "Os dedos do pé que está na areia devem 'agarrar' o chão ativamente, trabalhando a musculatura intrínseca do pé.",
      "Mantenha a patela do joelho de apoio apontando sempre para o Cone 1 da frente, sem deixar o joelho tremer para dentro.",
      "Faça o movimento em câmera lenta (3 segundos para ir e 3 segundos para voltar): a qualidade do equilíbrio vale mais que a velocidade."
    ],
    "erroComum": "Travar o joelho de apoio totalmente esticado e inclinar apenas as costas para frente; corrija exigindo que o alcance venha da flexão do quadril e do joelho da perna de base. Variações",
    "variacaoFacil": "Aproximar os cones para 40 cm do pé central e permitir tocar a ponta do pé na areia entre uma direção e outra.",
    "variacaoDificil": "Segurar uma bola de vôlei nas mãos e passá-la ao redor da cintura enquanto executa o alcance nos 3 cones em um pé só.",
    "meta": "Completar 4 ciclos seguidos nos 3 pontos do Y com cada perna sem precisar apoiar o pé livre na areia para se salvar."
  },
  {
    "numero": 218,
    "secao": 14,
    "nome": "Saúde do ombro e lombar: circuito postural Y-T-W e extensão na areia",
    "nivel": "Iniciante",
    "jogadores": "2 jogadores",
    "tempo": "8 minutos (3 séries de 10 repetições controladas por 30s de descanso)",
    "material": "2 cones para marcar o alinhamento",
    "objetivo": "Ativar e fortalecer os retratores da escápula, manguito rotador posterior e paravertebrais lombares, prevenindo sobrecarga no ombro de ataque e saque.",
    "comoMontar": "Na meia-quadra esquerda, J1 e J2 deitam-se de barriga para baixo (decúbito ventral) sobre a areia nivelada, a 4 metros da rede, com espaço livre de 2 metros ao redor dos braços.",
    "passoAPasso": [
      "Í Deitado de peito na areia com a testa quase tocando o solo (olhar para baixo mantendo a cervical neutra) e glúteos levemente contraídos:",
      "Posição 'Y' (3 repetições): estenda os dois braços acima da cabeça formando a letra Y com os polegares apontados para o céu; tire os braços 10 cm da areia unindo as escápulas, segure 2 segundos e desça.",
      "Posição 'T' (3 repetições): abra os braços lateralmente na linha dos ombros formando a letra T (polegares para cima); eleve os braços 10 cm da areia apertando o meio das costas por 2 segundos e desça.",
      "Posição 'W' + Extensão Alternada (4 repetições): dobre os cotovelos a 90 graus ao lado das costelas formando um W, gire os punhos para cima e finalize elevando braço direito junto com perna esquerda (e vice-versa).",
      "Volume e Pausa: execute 3 séries de 10 repetições totais (3 em Y + 3 em T + 4 em W/Alternado) com 30 segundos de descanso entre as séries. Se sentir pinçamento na parte frontal do ombro, diminua a altura de elevação dos braços."
    ],
    "pontosAtencao": [
      "Mantenha os polegares sempre apontados para o alto: isso gira o ombro externamente e cria espaço livre na articulação.",
      "Não puxe os ombros na direção das orelhas (trapézio superior); puxe as escápulas para baixo em direção ao bolso do calção.",
      "Mantenha o umbigo levemente recolhido para proteger a lombar."
    ],
    "erroComum": "Levantar o queixo olhando para frente e forçar o pescoço em vez de usar os músculos das costas; corrija mantendo o nariz apontado para a areia durante toda a série. Variações",
    "variacaoFacil": "Realizar o movimento Y-T-W em pé com o tronco inclinado a 45 graus à frente e joelhos semiflexionados.",
    "variacaoDificil": "Segurar 3 segundos de isometria no ponto mais alto de cada letra (Y, T e W) antes de trocar a posição.",
    "meta": "Executar as 3 séries de 10 repetições lentas sentindo a ativação entre as escápulas e sem compensar com o pescoço."
  },
  {
    "numero": 219,
    "secao": 14,
    "nome": "Pliometria básica com aterrissagem amortecida (salto vertical + horizontal)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "10 minutos (4 séries de 6 saltos combinados com 60s de descanso)",
    "material": "4 cones demarcando corredores de 4,5 metros",
    "objetivo": "Aprender a gerar potência elástica na areia fofa e absorver o impacto da queda com tornozelos, joelhos e quadril alinhados.",
    "comoMontar": "Na meia-quadra esquerda, monte dois corredores paralelos da linha de fundo (8m) até os 3,5m da rede. J1 e J2 começam nos cones da linha de fundo.",
    "passoAPasso": [
      "Í J1 e J2 iniciam em base atlética nos cones de saída.",
      "Salto 1 (Vertical): lance os braços para cima e execute um salto vertical máximo no lugar, aterrissando na areia com os dois pés simultaneamente em meio-agachamento e segurando a posição congelada por 2 segundos.",
      "Salto 2 (Horizontal Curto): a partir dessa base congelada, impulsione a areia saltando 1,5 metro para a frente, aterrissando novamente de forma suave e silenciosa com os joelhos flexionados por mais 2 segundos.",
      "Repita a combinação (1 Salto Vertical + 1 Salto Horizontal de 1,5m) por 3 vezes até completar os 4,5 metros do corredor (totalizando 6 saltos por passagem).",
      "Volume e Pausa: cumpra 4 séries de 6 saltos (3 verticais + 3 horizontais), retornando em caminhada lenta durante os 60 segundos de descanso completo entre as séries. Reduza a altura do salto caso perceba que os joelhos estão tremendo na queda."
    ],
    "pontosAtencao": [
      "O foco principal está na ATERRISSAGEM: amorteça a queda tocando primeiro o antepé e logo em seguida o calcanhar na areia, flexionando quadril e joelhos juntos.",
      "Nunca pule de novo imediatamente se você caiu desequilibrado: estabilize os 2 segundos na base antes do próximo salto.",
      "Use o balanço vigoroso dos dois braços para ajudar a sair da areia fofa."
    ],
    "erroComum": "Aterrissar com as pernas duras e retas ou deixar os dois joelhos se baterem no meio; corrija pedindo uma 'queda macia' com o quadril recuado para trás. Variações",
    "variacaoFacil": "Fazer apenas 4 saltos verticais no lugar por série focando exclusivamente na mecânica de amortecimento da queda.",
    "variacaoDificil": "Eliminar a pausa de 2 segundos entre o salto vertical e o salto horizontal (assim que tocar a areia do salto vertical, já explodir para a frente de forma reativa).",
    "meta": "Realizar as 4 séries de 6 saltos mantendo 100% das aterrissagens equilibradas por 2 segundos sem passos extras de desequilíbrio."
  },
  {
    "numero": 220,
    "secao": 14,
    "nome": "Pliometria lateral sobre linha de cones (potência frontal e estabilização)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "10 minutos (4 séries de 8 saltos laterais com 60s de descanso)",
    "material": "8 cones baixos formando duas linhas de 4 cones",
    "objetivo": "Desenvolver potência de impulsão lateral na areia e estabilidade de tornozelo para saídas explosivas de bloqueio e defesa.",
    "comoMontar": "Na meia-quadra esquerda, monte duas fileiras de 4 cones baixos (uma fileira aos 3m da rede para J1 e outra aos 6m da rede para J2), com 1,2 metro de distância entre cada cone na mesma fileira.",
    "passoAPasso": [
      "Í J1 e J2 posicionam-se de lado para o primeiro cone da sua fileira (pés paralelos na largura dos quadris).",
      "Impulsionam a areia com os dois pés juntos saltando lateralmente por cima do 1º cone, aterrissam amortecendo no espaço entre os cones e prosseguem saltando sobre os 4 cones (ida = 4 saltos laterais para a direita).",
      "Ao passar pelo 4º cone, estabilizam por 1 segundo e retornam imediatamente fazendo 4 saltos laterais para a esquerda até a origem (total de 8 saltos laterais contínuos).",
      "Volume e Pausa: realize 4 séries de 8 saltos laterais (4 de ida + 4 de volta) com 60 segundos de descanso entre cada série. Se sentir fadiga nas panturrilhas, faça uma pausa de 1 segundo entre cada cone em vez de saltar direto."
    ],
    "pontosAtencao": [
      "Puxe os joelhos levemente em direção ao peito na fase aérea para limpar a altura do cone sem entortar os pés para o lado.",
      "Empurre a areia com a borda interna do pé de trás para gerar impulso lateral verdadeiro.",
      "Mantenha o tronco e o olhar voltados para a rede durante toda a série."
    ],
    "erroComum": "Saltar girando o quadril de frente para os cones (transformando em salto frontal) ou bater um pé no outro na queda; corrija mantendo uma distância de um palmo entre os dois pés durante todo o voo e aterrissagem. Variações",
    "variacaoFacil": "Passar pelos cones com saltos laterais baixos sem obstáculo (usando apenas riscos desenhados na areia).",
    "variacaoDificil": "Nas 2 últimas séries, realizar a ida (4 saltos) em apoio unipodal (um pé só) com a perna direita e a volta com a perna esquerda, pausando 2 segundos em cada queda.",
    "meta": "Completar as 4 séries de 8 saltos laterais sem derrubar nenhum cone e mantendo o alinhamento frontal do peito para a rede."
  },
  {
    "numero": 221,
    "secao": 14,
    "nome": "Sprints curtos de 3m, 5m e 8m (vai-e-vem de aceleração e frenagem)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "10 minutos (4 séries de 1 vai-e-vem completo por 60s de descanso)",
    "material": "8 cones demarcando as marcas de",
    "objetivo": "Treinar a potência de arrancada nos primeiros 3 passos na areia fofa e a capacidade de desacelerar baixando o centro de gravidade.",
    "comoMontar": "Na meia-quadra esquerda, monte duas raias paralelas da linha de fundo até a rede colocando cones na linha de fundo (0m), aos 3 metros, aos 5 metros e junto à rede (8 metros).",
    "passoAPasso": [
      "Í J1 e J2 partem da linha de fundo (0m) em posição baixa de largada (um pé à frente do outro).",
      "Arrancada 1 (3 metros): ao sinal, explodem até o cone de 3m, freiam afundando o quadril, tocam a areia com a mão direita e voltam de frente/diagonal até tocar a linha de fundo (0m).",
      "Arrancada 2 (5 metros): sem parar, viram e explodem até o cone de 5m, tocam a areia com a mão esquerda e voltam até a linha de fundo (0m).",
      "Arrancada 3 (8 metros): partem para o sprint final até a linha da rede (8m), simulam um salto curto de bloqueio na fita e encerram a passagem na rede.",
      "Volume e Pausa: execute 4 séries de 1 percurso completo (3m + 5m + 8m = 24 metros de aceleração/frenagem) com 60 a 75 segundos de descanso caminhando de volta ao fundo. Reduza para apenas as distâncias de 3m e 5m caso a técnica de corrida se degrade no final."
    ],
    "pontosAtencao": [
      "Nos primeiros 3 passos de cada saída, mantenha o tronco inclinado a 45 graus para frente e passos curtos e rápidos tracionando a areia.",
      "Para frear em cada cone sem escorregar na areia, baixe o quadril no penúltimo passo e crave o pé de fora virando de lado.",
      "Alterne a mão que toca a areia em cada cone para distribuir o esforço de rotação do tronco."
    ],
    "erroComum": "Tentar frear em pé com os joelhos esticados em cima do cone, escorregando meio metro além da marca; corrija pedindo para afundar o centro de gravidade 2 passos antes do cone. Variações",
    "variacaoFacil": "Fazer apenas o vai-e-vem de 3m e 5m (poupando o sprint final de 8m).",
    "variacaoDificil": "Fazer os retornos dos cones de 3m e 5m até a linha de fundo em deslocamento defensivo de costas/diagonal mantendo o olhar na rede.",
    "meta": "Completar cada passagem do vai-e-vem (3m-5m-8m) abaixo de 12 segundos mantendo frenagens limpas em todas as linhas."
  },
  {
    "numero": 222,
    "secao": 14,
    "nome": "Agilidade multidirecional no padrão em 'T' na areia",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (revezando no circuito)",
    "tempo": "10 minutos (4 séries de 2 repetições por 45s de descanso)",
    "material": "4 cones montados em formato de T",
    "objetivo": "Combinar num mesmo estímulo os três deslocamentos fundamentais do vôlei de praia: arrancada frontal, passada lateral e recuo controlado.",
    "comoMontar": "Na meia-quadra esquerda, monte um 'T' com 4 cones: Cone A na linha de fundo central (saída), Cone B 5 metros à frente (a 3m da rede, centro do T), Cone C 3 metros à esquerda de B e Cone D 3 metros à direita de B.",
    "passoAPasso": [
      "Í J1 inicia no Cone A (base do T na linha de fundo).",
      "Trecho 1: corre de frente em velocidade por 5 metros até o Cone B (centro) e toca sua ponta.",
      "Trecho 2: olhando sempre para a rede, desloca-se em passada lateral rápida por 3 metros para a esquerda até tocar o Cone C.",
      "Trecho 3: inverte a direção e atravessa os 6 metros de largura em passada lateral/cruzada até tocar o Cone D na direita.",
      "Trecho 4: volta lateralmente 3 metros até o Cone B (centro) e finaliza recuando de costas/diagonal por 5 metros até cruzar o Cone A inicial.",
      "Volume e Pausa: cada jogador realiza 4 séries de 2 passagens pelo T (na 1ª vai primeiro para a esquerda C; na 2ª vai primeiro para a direita D), descansando 45 segundos enquanto o parceiro J2 executa a sua vez."
    ],
    "pontosAtencao": [
      "Mantenha o peito e os olhos voltados para a rede durante toda a barra superior do T (trechos 2, 3 e 4).",
      "Não cruze os pés na saída lateral curta do Cone B para o Cone C: mantenha o quadril baixo empurrando a areia.",
      "No recuo final do Cone B para o Cone A, mantenha o peso no antepé para não cair sentado."
    ],
    "erroComum": "Levantar o tronco nos trechos laterais e bater um tornozelo no outro; corrija mantendo os joelhos flexionados na mesma linha horizontal do início ao fim. Variações",
    "variacaoFacil": "Reduzir a haste frontal para 4 metros e as laterais para 2 metros de cada lado.",
    "variacaoDificil": "No Cone B (centro), o parceiro J2 fica na rede e grita apenas quando J1 chega lá se ele deve ir primeiro para a 'ESQUERDA!' ou 'DIREITA!'.",
    "meta": "Completar cada passagem no circuito em 'T' em menos de 11 segundos sem cruzar os pés nas trocas de direção."
  },
  {
    "numero": 223,
    "secao": 14,
    "nome": "Agilidade no padrão em 'X' (cortes em diagonais curtas e longas)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "10 minutos (4 séries de 1 volta completa no X por 60s de descanso)",
    "material": "4 cones formando um quadrado de 6x6 metros",
    "objetivo": "Treinar as mudanças de direção em ângulo agudo (45 graus) que simulam a transição entre buscar uma bola de lob no fundo e uma largada na diagonal oposta.",
    "comoMontar": "Na meia-quadra esquerda, posicione 4 cones formando um quadrado de 6 x 6 metros: Cone 1 (fundo superior), Cone 2 (rede inferior - diagonal oposta), Cone 3 (rede superior) e Cone 4 (fundo inferior).",
    "passoAPasso": [
      "Í J1 começa no Cone 1 (fundo superior).",
      "Perna 1 (Diagonal de 8,5m): corre em sprint diagonal cruzando toda a quadra até o Cone 2 (perto da rede no lado inferior) e freia com o pé externo.",
      "Perna 2 (Lateral na Rede de 6m): desloca-se paralelo à rede em passada lateral/cruzada do Cone 2 até o Cone 3 (rede superior), onde realiza 1 salto vertical de bloqueio.",
      "Perna 3 (Diagonal de Recuo de 8,5m): ao aterrissar no Cone 3, abre o quadril e corre em diagonal de recuo (como se buscasse um lob) até o Cone 4 (fundo inferior).",
      "Perna 4 (Fundo de 6m): desloca-se lateralmente na linha de fundo do Cone 4 de volta ao Cone 1 inicial, fechando a ampulheta/X.",
      "Volume e Pausa: cumpra 4 séries de 1 volta completa no X (invertendo o lado de saída nas séries pares) com 60 segundos de descanso enquanto J2 realiza o circuito."
    ],
    "pontosAtencao": [
      "Nos vértices do X (Cones 2, 3 e 4), plante o pé de fora com firmeza na areia para cortar o ângulo de 45 graus sem derrapar.",
      "Na Perna 3 (recuo diagonal do Cone 3 para o Cone 4), corra de frente olhando por cima do ombro para o centro da rede.",
      "Controle o ritmo respiratório para manter a explosão até a última perna do X."
    ],
    "erroComum": "Fazer curvas abertas e redondas ao redor dos cones por não baixar o quadril na frenagem; corrija passando por dentro dos cones e cravando a borda interna do pé. Variações",
    "variacaoFacil": "Montar o quadrado menor (4 x 4 metros) e realizar sem o salto de bloqueio no Cone 3.",
    "variacaoDificil": "Incluir 1 salto de bloqueio no Cone 2 e outro no Cone 3, além de tocar o peito na areia (meio burpee) no Cone 4.",
    "meta": "Concluir a volta completa no circuito em 'X' abaixo de 14 segundos mantendo cortes precisos nos 4 cones."
  },
  {
    "numero": 224,
    "secao": 14,
    "nome": "Impulsão de bloqueio em sequência (3 pontos da rede)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores",
    "tempo": "10 minutos (4 séries de 6 saltos máximos por 60s de descanso)",
    "material": "3 cones posicionados junto à rede",
    "objetivo": "Desenvolver potência repetida de salto vertical na areia fofa após deslocamento lateral curto junto à rede.",
    "comoMontar": "Junto à rede da meia-quadra esquerda (a 40 cm da fita), posicione 3 cones: Cone 1 na entrada esquerda (a 1,5m da antena), Cone 2 no centro da rede e Cone 3 na saída direita (a 1,5m da outra antena).",
    "passoAPasso": [
      "Í J1 começa no Cone 1 (esquerda) em postura pronta de bloqueio (joelhos flexionados e mãos na altura dos ombros).",
      "Executa o 1º salto vertical máximo invadindo os braços por cima da fita da rede.",
      "Assim que aterrissa na areia de forma amortecida, usa o passo lateral/cruzado rápido por 2,5 metros até o Cone 2 (centro), para os dois pés e executa o 2º salto máximo.",
      "Desloca-se até o Cone 3 (direita) para o 3º salto; em seguida faz o caminho inverso (4º salto no Cone 3, 5º salto no Cone 2 e 6º salto final no Cone 1).",
      "Volume e Pausa: realize 4 séries de 6 saltos de bloqueio máximos com 60 segundos de descanso completo (revezando com J2). Caso o atleta comece a tocar na rede por fadiga nas pernas, reduza para 4 saltos por série."
    ],
    "pontosAtencao": [
      "Não sacrifique a altura do salto pela pressa: pare os dois pés paralelos na areia em cada cone e salte o mais alto possível.",
      "Mantenha as mãos sempre acima da linha do peito durante a transição entre um cone e outro.",
      "Amorteça cada descida antes de iniciar o passo lateral para proteger o tendão calcâneo (Aquiles)."
    ],
    "erroComum": "Pular ainda deslizando de lado na areia e cair desequilibrado em um pé só; corrija exigindo parada total dos dois pés antes de cada um dos 6 saltos. Variações",
    "variacaoFacil": "Realizar apenas 1 passagem de ida (3 saltos totais por série: Esquerda -> Meio -> Direita).",
    "variacaoDificil": "J2 fica do outro lado da rede segurando duas bolas no alto nos Cones 1 e 3, exigindo que J1 toque com as duas mãos nas bolas em cada salto.",
    "meta": "Completar as 4 séries de 6 saltos alcançando com os punhos acima da fita superior em todos os 24 saltos, com zero toques na rede."
  },
  {
    "numero": 225,
    "secao": 14,
    "nome": "Impulsão de ataque após recuo em V e chamada de 3 passos",
    "nivel": "Avançado",
    "jogadores": "2 jogadores",
    "tempo": "11 minutos (4 séries de 6 sequências de recuo + salto com 75s de descanso)",
    "material": "4 cones demarcando os pontos de recuo e de salto",
    "objetivo": "Treinar a potência específica das pernas para recuar na areia, frear e imediatamente explodir na passada de 3 apoios para o salto máximo de ataque.",
    "comoMontar": "Na meia-quadra esquerda, posicione 2 cones de salto a 1,5m da rede (Ponta Esquerda e Ponta Direita) e 2 cones de transição recuados a 4,5m da rede. J1 começa na rede.",
    "passoAPasso": [
      "Í J1 começa no cone de 1,5m da rede na ponta esquerda.",
      "Abre o quadril e recua rápido na areia até o cone de 4,5 metros, onde planta o pé de trás.",
      "Sem pausa no cone de 4,5m, acelera a chamada de 3 passos ('esquerda-direita-esquerda'), lança os dois braços para cima e executa um salto máximo de ataque a 1,5m da rede simulando a batida no ponto mais alto.",
      "Ao aterrissar equilibrado, repete o recuo e o salto mais 2 vezes na ponta esquerda (3 saltos) e atravessa trotando para fazer mais 3 recuos + saltos na ponta direita (total de 6 saltos de ataque na série).",
      "Volume e Pausa: cumpra 4 séries de 6 saltos de ataque após recuo, com 75 segundos de descanso entre as séries (enquanto J2 trabalha). Se a altura do salto cair visivelmente no 5º e 6º saltos, encerre a série no 4º salto para preservar a qualidade."
    ],
    "pontosAtencao": [
      "A transição entre o último passo de recuo nos 4,5m e o primeiro passo para frente deve ser elástica, empurrando a areia com o antepé.",
      "Nos dois últimos passos antes do salto, plante os dois pés quase juntos na areia fofa e use a alavanca máxima dos dois braços.",
      "Caia sobre os dois pés no mesmo ponto de onde decolou (a 1,5m da rede)."
    ],
    "erroComum": "Correr devagar na chamada e pular para a frente ('salto em distância') em vez de converter a velocidade em altura vertical; corrija marcando um quadrado na areia de onde o jogador deve saltar e onde deve pousar. Variações",
    "variacaoFacil": "Reduzir para 4 saltos por série (2 na esquerda e 2 na direita) com 5 segundos de caminhada no meio.",
    "variacaoDificil": "Incluir 1 salto de bloqueio na rede antes de iniciar cada recuo para os 4,5m (Salta Bloco -> Recua 4,5m -> Entra e Salta Ataque).",
    "meta": "Sustentar a potência máxima de impulsão e coordenação de braços durante os 6 saltos de cada uma das 4 séries."
  },
  {
    "numero": 226,
    "secao": 14,
    "nome": "Agilidade reativa em Estrela (5 pontas de velocidade e reação)",
    "nivel": "Avançado",
    "jogadores": "2 jogadores (1 no centro da estrela e 1 comandante na rede)",
    "tempo": "10 minutos (4 séries de 20s de estímulo máximo por 40s de descanso)",
    "material": "6 cones (1 central e 5 nas pontas da estrela)",
    "objetivo": "Aprimorar a velocidade de reação neuromuscular e a capacidade de acelerar e retornar à base em todos os ângulos da quadra.",
    "comoMontar": "Na meia-quadra esquerda, coloque 1 Cone Base no centro (a 4,5m da rede) e 5 Cones ao redor a 3 metros de distância formando uma Estrela de 5 pontas numeradas: 1 (Curta Esquerda), 2 (Centro Rede), 3 (Curta Direita), 4 (Fundo Direito) e 5 (Fundo Esquerdo).",
    "passoAPasso": [
      "Í J1 posiciona-se no Cone Base central em skipping baixo (mexendo rapidamente a ponta dos pés na areia); J2 fica na rede de frente para J1 controlando o tempo.",
      "Ao iniciar o cronômetro de 20 segundos, J2 grita aleatoriamente um número de 1 a 5 (ex.: '4!').",
      "J1 explode do centro até o Cone 4 usando a passada técnica daquele ângulo, toca o cone com a mão e retorna em velocidade máxima ao Cone Base central.",
      "No exato instante em que J1 pisa no Cone Base, J2 já chama o próximo número ('2!', '5!', '1!') sem deixar J1 parar, mantendo a intensidade máxima durante os 20 segundos.",
      "Volume e Pausa: realize 4 séries de 20 segundos de estímulo alático máximo por 40 segundos de recuperação completa (revezando com J2). Respeite rigorosamente os 40s de pausa para recuperar o sistema fosfagênio."
    ],
    "pontosAtencao": [
      "Sempre retorne ao Cone Base olhando para J2 na rede: nunca dê as costas para a rede ao voltar dos cones 1, 2 e 3.",
      "Para os cones traseiros (4 e 5), abra o quadril imediatamente e corra de frente.",
      "Toque os cones flexionando os joelhos e o quadril, mantendo as costas retas."
    ],
    "erroComum": "Começar a andar de volta para o Cone Base depois do 3º cone por cansaço; corrija mantendo o tempo curto de 20 segundos porém exigindo sprint tanto na ida quanto na volta. Variações",
    "variacaoFacil": "Reduzir o tempo de estímulo para 15 segundos ou seguir a ordem sequencial fixa (1, 2, 3, 4 e 5).",
    "variacaoDificil": "Em vez de gritar o número, J2 apenas aponta silenciosamente com a mão para a direção, exigindo foco visual ininterrupto de J1.",
    "meta": "Alcançar e retornar de pelo menos 5 a 6 pontas da estrela dentro de cada janela de 20 segundos."
  },
  {
    "numero": 227,
    "secao": 14,
    "nome": "Intervalado específico de rali (15s de alta intensidade por 20s de pausa)",
    "nivel": "Avançado",
    "jogadores": "2 a 4 jogadores",
    "tempo": "12 minutos (2 blocos de 6 repetições de 15s:20s, com 2 min entre blocos)",
    "material": "4 cones e 1 apito/cronômetro",
    "objetivo": "Condicionar o sistema cardiorrespiratório exatamente na relação esforço-pausa de um set longo de vôlei de praia (7 a 15 segundos de rali intenso por 15 a 20 segundos de intervalo).",
    "comoMontar": "Na meia-quadra esquerda, posicione cones marcando 4 ações de um rali real: Ponto 1 na rede (Salto de Bloqueio), Ponto 2 na diagonal aos 5,5m (Retirada), Ponto 3 na frente aos 2m (Peixinho Controlado) e Ponto 4 na ponta aos 1,5m (Salto de Ataque).",
    "passoAPasso": [
      "Ao apito inicial (início dos 15 segundos de esforço máximo), J1 e J2 executam encadeadamente a simulação física de um rali pesado:",
      "Segundos 0 a 4: fazem 1 salto máximo de bloqueio no Ponto 1 da rede e abrem o quadril retirando em sprint até o Ponto 2 (aos 5,5m).",
      "Segundos 5 a 9: do Ponto 2, arrancam para a frente até o Ponto 3 (aos 2m) e executam 1 descida rápida de peito/mãos na areia (peixinho controlado).",
      "Segundos 10 a 15: levantam da areia, recuam 2 passos, fazem a chamada e encerram os 15s com 1 salto máximo de ataque no Ponto 4 (repetindo se sobrar tempo dentro dos 15s!).",
      "Pausa Ativa de Jogo (20 segundos): ao apito de 15s, os atletas têm exatamente 20 segundos para caminhar até a linha de fundo, controlar a respiração pelo nariz/boca e voltar ao Ponto 1 para o próximo apito!",
      "Volume e Pausa: cumpra 2 blocos de 6 repetições (15s de estímulo por 20s de pausa), com 2 minutos de intervalo completo (hidratação na sombra) entre o 1º e o 2º bloco. Sob calor forte, reduza para 4 repetições por bloco."
    ],
    "pontosAtencao": [
      "Por que esse treino funciona tão bem na areia?",
      "Porque em vez de correr em volta da quadra em trote lento (que não existe no jogo), você ensina o corpo a explodir por 15 segundos e baixar os batimentos cardíacos em 20 segundos!",
      "Use os 20 segundos de pausa para treinar a respiração de recuperação (puxar o ar em 3s e soltar longo pela boca em 5s).",
      "Mantenha a técnica limpa no salto final de cada tiro de 15 segundos."
    ],
    "erroComum": "Sair a 100% nas duas primeiras repetições, hiperventilar na pausa e não conseguir sair do chão na 5ª e 6ª repetições; corrija mantendo intensidade alta e constante de 85–90% em todos os 6 tiros. Variações",
    "variacaoFacil": "Aumentar o tempo de recuperação entre os tiros para 30 segundos (relação 15s de estímulo por 30s de pausa) e retirar o peixinho no chão.",
    "variacaoDificil": "Reduzir a pausa para 15 segundos (relação 1:1 de 15s por 15s) simulando finais de set sob pressão.",
    "meta": ""
  },
  {
    "numero": 228,
    "secao": 14,
    "nome": "Circuito Físico + Bola 1: pliometria lateral e defesa reativa",
    "nivel": "Avançado",
    "jogadores": "2 jogadores (1 executante J1 e 1 lançador/atacante T ou J2)",
    "tempo": "11 minutos (4 séries de 4 sequências de saltos + defesa por 60s de descanso)",
    "material": "4 bolas, 3 cones e 1 zona alvo",
    "objetivo": "Transferir a potência pliométrica diretamente para a velocidade de reação defensiva na bola com as pernas já exigidas pelo salto.",
    "comoMontar": "Na meia-quadra esquerda, coloque 3 cones alinhados a 5,5m da rede para os saltos laterais de J1. Demarque uma Zona Alvo no centro a 2m da rede. O parceiro (T/J2) fica junto à rede com 4 bolas.",
    "passoAPasso": [
      "Í J1 posiciona-se nos cones de 5,5m e executa 4 saltos pliométricos laterais rápidos sobre os cones.",
      "No exato instante em que J1 aterrissa do 4º salto lateral, T/J2 (na rede) bate ou lança uma bola difícil (ou uma bola curta aos 2,5m, ou uma bola rápida na lateral oposta).",
      "J1 transforma o amortecimento do 4º salto em arrancada explosiva, salva a bola (de manchete ou peixinho) colocando-a alta dentro da Zona Alvo central!",
      "Sem pausa, J1 volta aos cones de 5,5m e repete imediatamente o ciclo (4 saltos laterais + 1 defesa difícil) por 4 bolas seguidas (totalizando 16 saltos + 4 defesas na série!).",
      "Volume e Pausa: cada jogador cumpre 4 séries de 4 bolas (com 4 saltos antes de cada bola), descansando 60 a 75 segundos enquanto atua como lançador para o parceiro."
    ],
    "pontosAtencao": [
      "No 4º e último salto lateral antes da bola, já aterrisse com os olhos cravados na mão do lançador na rede (fazendo o split-step de leitura).",
      "Mesmo com a frequência cardíaca alta pelos saltos, na hora de tocar na bola amorteça o impacto para a defesa subir limpa na Zona Alvo.",
      "Se sentir perda de estabilidade no tornozelo na última série, substitua os saltos sobre cones por deslocamentos laterais rasantes."
    ],
    "erroComum": "Olhar para os cones no chão durante os 4 saltos e perder o tempo de saída da bola da mão do lançador; corrija exigindo cabeça erguida olhando para a rede durante os saltos. Variações",
    "variacaoFacil": "Fazer apenas 2 saltos laterais antes de cada uma das 4 bolas lançadas.",
    "variacaoDificil": "Após defender a bola para a Zona Alvo, J1 ainda precisa levantar da areia e dar 1 salto de ataque na rede antes de voltar para os cones!",
    "meta": "Colocar pelo menos 3 das 4 bolas de cada série dentro da Zona Alvo central mantendo explosão nos saltos prévios."
  },
  {
    "numero": 229,
    "secao": 14,
    "nome": "Circuito Físico + Bola 2: agilidade em triângulo, recepção e ataque",
    "nivel": "Avançado",
    "jogadores": "3 jogadores (ou dupla J1 + J2 com bola lançada do outro lado)",
    "tempo": "12 minutos (4 séries de 3 sequências completas por 75s de descanso)",
    "material": "6 bolas, 3 cones e 2 zonas alvo",
    "objetivo": "Manter a precisão da plataforma de recepção e a altura do salto de ataque imediatamente após um estímulo intenso de agilidade na areia.",
    "comoMontar": "Na meia-quadra esquerda, monte um triângulo de 3 cones no fundo (entre 5m e 7,5m da rede) para J1. J2 fica como levantador na rede esquerda. Do outro lado da rede (direita), T (ou 3º jogador) fica com bolas e duas Zonas Alvo de ataque demarcadas.",
    "passoAPasso": [
      "Í J1 inicia no triângulo de cones no fundo e executa um giro explosivo de agilidade tocando nos 3 cones (sprint frontal de 2,5m + lateral de 3m + recuo diagonal de 3m).",
      "Assim que J1 toca no 3º cone, T (do outro lado da rede) envia um saque/bola alta na direção de J1.",
      "J1 freia a corrida, controla a respiração por uma fração de segundo, planta os dois pés na areia e executa a recepção de manchete para J2 na rede.",
      "Imediatamente após passar, J1 faz a aproximação de transição até a rede, salta e ataca o levantamento de J2 mirando nas Zonas Alvo da quadra direita!",
      "Assim que aterrissa do ataque, J1 corre de volta para o triângulo de cones e emenda a 2ª e a 3ª sequência sem parar!",
      "Volume e Pausa: cumpra 4 séries de 3 sequências contínuas (Triângulo + Passe + Ataque) com 75 segundos de descanso trocando de função com os parceiros."
    ],
    "pontosAtencao": [
      "O segredo técnico deste circuito está na transição entre a correria nos cones e a calma na manchete: 'Pés rápidos nos cones, corpo calmo e parado na hora do passe!'.",
      "Na 3ª bola da série, quando a perna estiver pesada na chamada de ataque, use o impulso vigoroso dos dois braços para manter a altura do ponto de impacto.",
      "Mire os ataques com segurança dentro das zonas alvo."
    ],
    "erroComum": "Tocar na bola da recepção ainda ofegante e correndo do último cone, espalhando o passe para longe do levantador; corrija exigindo a parada dos dois pés antes do toque na bola. Variações",
    "variacaoFacil": "Fazer apenas 2 cones de deslocamento lateral antes de receber e finalizar o ataque com golpe colocado (shot).",
    "variacaoDificil": "Aumentar para 4 sequências contínuas por série com saque real vindo da linha de 8 metros.",
    "meta": "Converter pelo menos 2 das 3 sequências de cada série com recepção na mão do levantador e ataque válido no alvo."
  },
  {
    "numero": 230,
    "secao": 14,
    "nome": "Circuito Físico + Bola 3: resistência de Tie-Break (bloqueio, retirada, defesa e contra-ataque)",
    "nivel": "Avançado",
    "jogadores": "3 a 4 jogadores (Dupla J1 + J2 contra lançador/defensor T)",
    "tempo": "12 minutos (3 séries de 4 transições completas por 90s de descanso)",
    "material": "3 cones e cesto de bolas",
    "objetivo": "Integrar todos os esforços físicos mais exigentes do vôlei de praia (salto de bloqueio, retirada na areia, defesa no fundo e salto de ataque) em fadiga controlada de final de partida.",
    "comoMontar": "Na meia-quadra esquerda, coloque 2 cones na rede (para os saltos de bloqueio de J1) e 1 cone aos 6 metros na diagonal (ponto de defesa). J2 atua como parceiro/levantador. T fica do outro lado da rede com cesto de bolas.",
    "passoAPasso": [
      "J1 começa na rede e realiza 2 saltos máximos de bloqueio deslocando-se entre os dois cones da fita.",
      "Ao aterrissar do 2º bloqueio, J1 abre o quadril e faz a retirada em sprint máximo ('pulling') até o cone de 6 metros no fundo.",
      "Quando J1 planta os pés no cone de 6m, T bate/lança uma bola de ataque na direção de J1.",
      "J1 defende a bola alta para o centro da quadra (onde J2 aguarda), arranca do fundo de volta até a rede (6 metros de transição na areia!) e salta para atacar o levantamento de J2!",
      "Sem descanso, assim que J1 pousa do ataque na rede, ele já faz novamente os 2 saltos de bloqueio iniciando a 2ª, 3ª e 4ª bola da bateria!",
      "Volume e Pausa: realize 3 séries de 4 transições completas ininterruptas (total por série: 8 saltos de bloqueio + 4 retiradas de 6m + 4 defesas + 4 corridas e saltos de ataque!), seguidas de 90 segundos de descanso completo na sombra. Se a técnica de aterrissagem comprometer a segurança articular na 4ª bola, reduza a série para 3 bolas."
    ],
    "pontosAtencao": [
      "Este é o estímulo físico mais próximo de um Tie-break disputado ponto a ponto sob sol: gerencie sua energia mantendo movimentos eficientes sem passos desperdiçados.",
      "Mande a sua defesa lá dos 6 metros bem alta (5m de altura) para dar tempo às suas próprias pernas de percorrerem a quadra de volta até a rede.",
      "Na 3ª e 4ª bolas da série, use a inteligência tática no ataque (cut shot, lob ou cobra nos cantos vazios) se sentir que a impulsão diminuiu."
    ],
    "erroComum": "Retirar da rede olhando para o chão e ainda estar correndo de costas quando T bate a bola aos 6 metros; corrija virando de frente no cone de 6m um instante antes do envio da bola. Variações",
    "variacaoFacil": "Fazer apenas 1 salto de bloqueio na rede antes de cada retirada e realizar 3 bolas por série.",
    "variacaoDificil": "T e um parceiro defendem o contra-ataque de J1 do outro lado, mantendo o rali vivo até a bola cair na areia em todas as 4 bolas!",
    "meta": ""
  },
  {
    "numero": 231,
    "secao": 15,
    "nome": "Controle individual de manchete e toque em deslocamento pelas linhas (Solo)",
    "nivel": "Iniciante",
    "jogadores": "1 jogador (treino solo com 1 bola)",
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
    "erroComum": "Bater na bola baixo demais (a 1 metro da cabeça), sendo obrigado a correr desesperado e perder a linha das fitas; corrija exigindo altura mínima da borda superior da rede em cada toque. Variações",
    "variacaoFacil": "Realizar o percurso usando exclusivamente toques de manchete contínua e permitindo 1 quique na areia batida caso perca o equilíbrio.",
    "variacaoDificil": "Incluir 1 giro completo de 360 graus na areia a cada 4 toques ou alternar: 1 manchete + 1 toque de dedos + 1 controle com um braço só (direito/esquerdo).",
    "meta": "Completar 2 voltas inteiras no quadrado de 8x8m (64 metros totais e cerca de 40 toques alternados) sem deixar a bola cair na areia."
  },
  {
    "numero": 232,
    "secao": 15,
    "nome": "Auto-lançamento, passada na areia e ataque em alvos (Solo)",
    "nivel": "Iniciante",
    "jogadores": "1 jogador (treino solo de ataque)",
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
    "erroComum": "Lançar a bola muito colada na rede ou muito para frente, saltando desequilibrado e tocando na fita; corrija desenhando um X na areia a 1,5m da rede onde a bola lançada deveria cair. Variações",
    "variacaoFacil": "Iniciar a apenas 2,5 metros da rede, fazer o auto-lançamento mais curto e atacar usando a passada rápida de 2 apoios.",
    "variacaoDificil": "Substituir o auto-lançamento com as mãos por um 'auto- levantamento de manchete': J1 joga a bola na própria frente, dá uma manchete alta para a rede, corre em transição e ataca!",
    "meta": "Acertar pelo menos 7 de 10 ataques dentro das 3 Zonas Alvo demarcadas (acertando no mínimo 2 vezes cada alvo)."
  },
  {
    "numero": 233,
    "secao": 15,
    "nome": "Rotina individual de saque em alvos com coleta ativa em sprint (Solo)",
    "nivel": "Iniciante",
    "jogadores": "1 jogador (treino solo de saque + condicionamento)",
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
    "erroComum": "Sacar rápido demais assim que pega a bola na mão ainda correndo, errando o lançamento; corrija parando os dois pés atrás da linha de 8m e soltando o ar antes de alçar a bola. Variações",
    "variacaoFacil": "Ampliar o tamanho das 4 Zonas Alvo para 3x3 metros e caminhar nos últimos 4 metros antes da linha de saque.",
    "variacaoDificil": "Exigir saque viagem ou flutuante rasante: toda bola que errar o alvo exige 1 sprint extra de rede a fundo antes do próximo saque.",
    "meta": "Acertar pelo menos 12 de 16 saques (4 passagens pelas 4 zonas) mantendo o ritmo de coleta ativa entre os lados."
  },
  {
    "numero": 234,
    "secao": 15,
    "nome": "Controle contínuo em dupla com toque na linha e chamada (Dupla)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (J1 e J2 na mesma meia-quadra ou um de cada lado)",
    "tempo": "9 minutos",
    "material": "1 bola e 4 cones laterais",
    "objetivo": "Desenvolver o controle de bola alto sob fadiga de deslocamento na areia fofa e a comunicação constante com o parceiro.",
    "comoMontar": "Na meia-quadra esquerda, posicione J1 e J2 frente a frente no centro da quadra (a 4 metros de distância um do outro). Coloque 2 cones sobre a linha lateral superior (atrás de J1) e 2 cones sobre a linha lateral inferior (atrás de J2), a 2 metros das costas de cada jogador.",
    "passoAPasso": [
      "J1 e J2 trocam passes contínuos (de manchete ou toque limpo) mantendo a bola sempre alta no centro da meia- quadra (mínimo de 4 metros de altura).",
      "Regra de Deslocamento Obrigatório: imediatamente após tocar na bola e enviá-la para o parceiro, o jogador precisa abrir o quadril, correr 2 metros para trás, tocar com a mão no cone da linha lateral e voltar rápido para o centro antes que o parceiro devolva a bola!",
      "Enquanto o jogador que acabou de passar está correndo para tocar na linha e voltando, o parceiro que está com a bola no centro grita a orientação ('DIREITA!', 'ESQUERDA!' ou 'CURTA!') e envia a bola 1 metro deslocada para aquele lado.",
      "O jogador retorna da linha lateral, freia os dois pés na areia, responde 'MINHA!' e devolve a bola alta no centro antes de ir tocar no cone novamente."
    ],
    "pontosAtencao": [
      "Para dar tempo de o seu parceiro ir tocar o cone na linha lateral e voltar aos 4 metros, você é OBRIGADO a mandar a bola com arco alto (4 a 5 metros de altura): passe baixo mata o exercício!",
      "Plante sempre os dois pés na areia ao voltar do cone antes de tocar na bola (nunca toque na bola ainda correndo).",
      "Use chamadas reais de jogo a cada contato."
    ],
    "erroComum": "Tocar na bola de qualquer jeito com o corpo caindo para trás e esquecer de dar altura para o colega que está voltando do cone; corrija invalidando a contagem se a bola subir menos que a altura da antena. Variações",
    "variacaoFacil": "Colocar os cones a apenas 1 metro atrás de cada jogador ou permitir que cada jogador dê 2 toques (1º controla para o alto e 2º passa para o parceiro).",
    "variacaoDificil": "Substituir o toque com a mão no cone por 1 salto de bloqueio na rede ou 1 descida de peito na areia após cada passe!",
    "meta": "Alcançar uma sequência ininterrupta de 24 contatos (12 toques na bola + 12 toques no cone por jogador) sem a bola cair na areia."
  },
  {
    "numero": 235,
    "secao": 15,
    "nome": "Auto-defesa de reação na rede, giro e transição individual (Solo)",
    "nivel": "Intermediário",
    "jogadores": "1 jogador (treino solo usando a elasticidade da rede)",
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
    "erroComum": "Bater a bola fraco na rede ou na fita branca superior (que não tem elasticidade), fazendo a bola morrer colada na rede; corrija mirando na malha preta a um palmo abaixo da fita superior. Variações",
    "variacaoFacil": "Pular o 2º toque: após defender o rebote da rede no 1º toque bem alto perto da fita, já atacar direto no 2º toque.",
    "variacaoDificil": "Antes de jogar a bola na malha da rede, J1 dá 1 salto de bloqueio na fita, aterrissa recuando aos 3 metros, arremessa na rede com giro de 360 graus e defende no reflexo!",
    "meta": "Completar 8 de 10 sequências completas de Rebote na Rede + Defesa + Auto-levantamento + Ataque válido nas Zonas Alvo."
  },
  {
    "numero": 236,
    "secao": 15,
    "nome": "Saque, recepção na zona alvo e auto-ataque entre parceiros (Dupla)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (J1 de um lado da rede e J2 do outro lado)",
    "tempo": "10 minutos",
    "material": "4 bolas, 4 cones e 2 zonas alvo de recepção na rede",
    "objetivo": "Treinar em dupla o duelo direto de Saque vs. Recepção seguido de auto-transição de ataque, sem precisar de um terceiro jogador para levantar.",
    "comoMontar": "J1 posiciona-se na meia-quadra esquerda (a 5,5m da rede) e J2 posiciona-se na linha de fundo da meia- quadra direita (8m da rede). Em cada lado da rede, demarque com cones uma 'Zona de Recepção Perfeita' (2x2m no centro, a 1,5m da fita).",
    "passoAPasso": [
      "Como treinar recepção e ataque de side-out quando só existem 2 jogadores na quadra? Usando a regra do 'Auto- side-out de 3 Toques Individuais'!",
      "J2 saca da linha de fundo direita (8m) buscando dificultar a recepção de J1 na quadra esquerda.",
      "1º Toque de J1 (A Recepção): J1 faz o destrave, desloca-se na areia e precisa recepcionar de manchete alta fazendo a bola subir e cair rumo à 'Zona de Recepção Perfeita' (no centro a 1,5m da rede).",
      "2º Toque de J1 (O Auto-levantamento): assim que a bola sai dos antebraços na recepção, J1 corre atrás da própria bola até a Zona Central (1,5m), para os pés e levanta de toque limpo (ou manchete) para a sua própria ponta!",
      "3º Toque de J1 (O Ataque): J1 dá os 2 passos finais e ataca para a quadra direita (onde J2 já entrou para defender e emendar os seus 3 toques de volta!)."
    ],
    "pontosAtencao": [
      "Por que esse exercício em dupla é tão eficiente?",
      "Porque se você errar a direção ou a altura da sua recepção (1º toque), é VOCÊ MESMO quem vai ter que correr feito louco na areia para salvar o seu 2º toque!",
      "Isso educa o passador a mandar a recepção alta (4,5m) e cravada no centro!",
      "Para o sacador (J2): logo após sacar, entre na quadra aos 5,5m para defender o ataque de J1 e manter o rali vivo!",
      "Use levantamentos altos para ter tempo de encadear o 2º e o 3º toque sozinho."
    ],
    "erroComum": "Recepcionar o saque baixo demais (2 metros de altura), tornando impossível sair dos 5,5m e chegar aos 1,5m antes de a bola cair; corrija exigindo arco de recepção acima de 4,5 metros. Variações",
    "variacaoFacil": "Permitir que a bola dê 1 quique único dentro da Zona Central de 1,5m após a recepção antes de J1 pegá-la para levantar e atacar.",
    "variacaoDificil": "Se a recepção (1º toque) já cair perfeita a 1,5m da rede com altura ótima, J1 pode atacar direto de 2ª bola tentando surpreender J2!",
    "meta": "Converter 7 de 10 auto-side-outs (Recepção alta na Zona Central + Auto-levantamento + Ataque válido) contra o saque real do parceiro."
  },
  {
    "numero": 237,
    "secao": 15,
    "nome": "Sequência cooperativa-competitiva em dupla: lançamento de defesa, levantamento e ataque (Dupla)",
    "nivel": "Intermediário",
    "jogadores": "2 jogadores (J1 e J2 trabalhando juntos na mesma dupla)",
    "tempo": "10 minutos",
    "material": "5 bolas, 4 cones e 4 zonas alvo nos cantos adversários",
    "objetivo": "Treinar em dupla toda a mecânica de Defesa + Levantamento + Ataque na velocidade real de jogo usando o próprio parceiro como batedor inicial.",
    "comoMontar": "Na meia-quadra esquerda: J1 começa junto à rede no centro com uma bola na mão, e J2 começa na base de defesa no fundo (a 5,5m da rede). Na meia-quadra direita: demarque 4 Zonas Alvo nos 4 cantos (2 curtas a 2m da rede e 2 fundas a 7,5m).",
    "passoAPasso": [
      "Como uma dupla treina defesa e contra-ataque de 3 toques quando não há adversário do outro lado da rede? O próprio levantador (J1) inicia a jogada batendo contra o seu defensor (J2)!",
      "Passo 1 (O Estímulo de Defesa): J1 (na rede, virado de frente para J2 no fundo da mesma quadra!) bate uma cortada controlada, solta uma largada curta aos 3m ou joga um lob alto nas costas de J2.",
      "Passo 2 (1º Toque — A Defesa de J2): J2 lê o golpe de J1, desloca-se na areia e defende a bola alta (4,5m) de volta para o centro da rede onde está J1.",
      "Passo 3 (2º Toque — O Levantamento de J1): assim que bateu a bola inicial, J1 já assume o papel de levantador da dupla! Ele entra embaixo da defesa de J2, para os pés e levanta na medida (toque ou manchete).",
      "Passo 4 (3º Toque — O Ataque + Canto de Alvo): enquanto J2 corre para atacar, J1 grita qual das 4 Zonas Alvo do outro lado J2 deve acertar ('CURTA LINHA!', 'FUNDO DIAGO!') e J2 crava a bola no alvo pedido!"
    ],
    "pontosAtencao": [
      "Essa é a rotina número 1 das duplas profissionais quando treinam sozinhas: em uma única bola, J1 treina batida de controle + levantamento + chamada de visão, e J2 treina leitura de defesa + transição + ataque direcionado!",
      "J1 deve variar o estímulo inicial: 1 bola forte no peito de J2, 1 bola curta obrigando J2 a avançar e 1 bola no canto.",
      "Troquem de papel (J2 vai para a rede bater/levantar e J1 vai para o fundo defender/atacar) a cada 8 bolas."
    ],
    "erroComum": "J1 bater a primeira bola forte demais e sem controle para fora da quadra, estragando a repetição; corrija batendo a 70% de força na direção do raio de alcance de J2. Variações",
    "variacaoFacil": "J1 inicia lançando a bola com as duas mãos nas laterais e na curta para J2 defender.",
    "variacaoDificil": "Se J2 acertar a Zona Alvo cantada por J1 no ataque final, J1 já pega imediatamente uma 2ª bola do cesto aos seus pés e solta um pingo curto para J2 salvar no peixinho sem descanso!",
    "meta": "Completar 12 de 16 sequências com defesa controlada, levantamento limpo e ataque certeiro na Zona Alvo chamada por J1."
  },
  {
    "numero": 238,
    "secao": 15,
    "nome": "Transição completa em dupla saindo da rede: bloqueio, retirada, defesa e ataque (Dupla)",
    "nivel": "Avançado",
    "jogadores": "2 jogadores (J1 e J2 trabalhando a transição completa da rede para o fundo)",
    "tempo": "11 minutos",
    "material": "5 bolas, 2 cones de fundo e 2 zonas alvo",
    "objetivo": "Treinar em dupla o movimento mais exigente da praia (saltar no bloqueio, retirar até os 5,5m, defender e voltar atacando) sem precisar de um treinador.",
    "comoMontar": "Na meia-quadra esquerda, TANTO J1 QUANTO J2 começam juntos perto da rede! Coloque 2 cones a 5,5 metros da rede (Ponto de Retirada). Na meia-quadra direita, demarque duas Zonas Alvo de ataque.",
    "passoAPasso": [
      "J1 começa colado na rede (bloqueador que vai retirar e atacar); J2 fica a 2 metros da rede com uma bola nas mãos.",
      "Passo 1 (O Salto de Bloqueio + Retirada): J1 executa um salto vertical máximo de bloqueio na fita. Assim que os pés de J1 tocam a areia, J1 abre o quadril e dispara em retirada ('pulling') até o cone de 5,5 metros no fundo!",
      "Passo 2 (O Ataque Simulado de J2): exatamente quando J1 chega e planta os pés no cone de 5,5m, J2 (que estava na frente com a bola) bate ou lança uma bola difícil na direção de J1 (ou uma bola curta, ou um lob, ou forte no corpo).",
      "Passo 3 (A Defesa + Levantamento): J1 defende a bola alta para o centro da quadra (a 2m da rede); J2 entra embaixo da bola e faz o levantamento na ponta.",
      "Passo 4 (O Contra-ataque): J1 arranca dos 5,5m de volta até a rede, salta e finaliza o contra-ataque nas Zonas Alvo da direita! Fazem 6 repetições seguidas e invertem os papéis."
    ],
    "pontosAtencao": [
      "Sincronia perfeita de J2: J2 deve esperar J1 saltar na rede e correr até os 5,5m para bater a bola no exato momento em que J1 faz o split-step no cone de fundo!",
      "Para J1: não corte caminho na retirada!",
      "Toque o pé na linha do cone de 5,5m antes de defender para simular a distância real de jogo.",
      "Após defender aos 5,5m, mande a bola com 4,5m a 5m de altura para dar tempo de você mesmo voltar à rede para bater."
    ],
    "erroComum": "J2 lançar a bola cedo demais enquanto J1 ainda está de costas correndo da rede para o fundo; corrija esperando J1 girar o peito de frente para a rede no cone de 5,5m. Variações",
    "variacaoFacil": "Reduzir a distância do cone de retirada para 4,5 metros da rede e enviar bolas em arco controlado.",
    "variacaoDificil": "Incluir a 'Quebra de Padrão' (Seção 10): em metade das bolas, após J1 saltar no bloqueio, J2 joga uma bola curtíssima aos 2m obrigando J1 a mergulhar na frente e J2 a levantar!",
    "meta": "Completar 5 de 6 transições completas (Bloqueio + Retirada 5,5m + Defesa + Levantamento + Ataque no alvo) por série."
  },
  {
    "numero": 239,
    "secao": 15,
    "nome": "Desafio cooperativo-competitivo em dupla: 'Rali de 3 Toques + Jogo Livre' (Dupla)",
    "nivel": "Avançado",
    "jogadores": "2 jogadores (1 contra 1 em meia-quadra com fase cooperativa prévia)",
    "tempo": "12 minutos",
    "material": "3 bolas e 4 cones delimitando o corredor de 16x5m (ou 16x4m)",
    "objetivo": "Transformar o treino de 2 jogadores em um jogo de altíssimo volume de toques onde os dois primeiro cooperam mantendo a bola viva e depois competem pelo ponto.",
    "comoMontar": "Use cones para delimitar um corredor longitudinal de 5 metros de largura por 16 metros de comprimento (8x5m de cada lado da rede). J1 fica no lado esquerdo e J2 fica no lado direito.",
    "passoAPasso": [
      "Quando você só tem 1 amigo para jogar (1 contra 1), se cada um tentar matar a bola de primeira o rali acaba em 2 segundos e ninguém treina! Este formato une Cooperação + Competição no mesmo rali:",
      "Fase 1 (Cooperação Obrigatória — As 2 primeiras idas e vindas sobre a rede): J1 saca para J2; J2 é obrigado a fazer 3 toques individuais (1º recepciona, 2º auto-levanta, 3º passa uma bola atacada/controlada na direção de J1). J1 também defende e faz 3 toques individuais devolvendo na mão de J2!",
      "Fase 2 (Grito de 'VALENDO!' — A Competição Abre!): a partir do momento em que a bola cruza a rede pela 3ª vez (após ambos já terem feito uma sequência completa de defesa + auto-levantamento + ataque!), quem está com a bola grita 'VALENDO!'.",
      "Após o grito de 'VALENDO!', vale matar o ponto nos cantos (usando 2 ou 3 toques individuais, cut shot, lob na linha de 8m ou poke curto aos 2m)!",
      "Se alguém errar durante a Fase 1 cooperativa, perde 1 ponto; quem vencer o rali na Fase 2 competitiva ganha +2 pontos!"
    ],
    "pontosAtencao": [
      "Olha a riqueza desse jogo para 2 pessoas: em TODO ponto disputado, cada jogador é garantido de fazer pelo menos 6 a 9 toques na bola antes de o ponto acabar!",
      "Na Fase 1 (Cooperativa), bata firme no peito do seu parceiro para aquecer a defesa dele; na Fase 2 ('Valendo!'), tire a bola dele mirando nos 4 cantos do corredor de 8x5m!",
      "Nos 3 toques individuais, capriche na altura do 1º e do 2º toque para atacar equilibrado no 3º."
    ],
    "erroComum": "Tentar matar o ponto antes de completar a Fase 1 cooperativa ou relaxar os pés depois de gritar 'Valendo!'; corrija contando em voz alta: 'Bola 1... Bola 2... VALENDO!'. Variações",
    "variacaoFacil": "Exigir apenas 2 toques individuais por vez no corredor mais estreito de 16x4m.",
    "variacaoDificil": "Na Fase 2 ('Valendo!'), para o ponto valer, o jogador precisa tocar a mão na fita da rede (ou na linha de fundo) após passar a bola para o outro lado!",
    "meta": "Disputar um set até 15 pontos com zero erros na Fase 1 cooperativa e ralis médios acima de 12 toques na bola."
  },
  {
    "numero": 240,
    "secao": 15,
    "nome": "Treino Autônomo Completo de 30 Minutos para Dupla (O 'Treino Perfeito' sem Professor)",
    "nivel": "Avançado",
    "jogadores": "2 jogadores (J1 e J2 seguindo o cronograma completo de 4 blocos)",
    "tempo": "30 minutos (divididos em 4 blocos cronometrados de 6 a 8 minutos)",
    "material": "2 a 4 bolas, 4 cones e 1 relógio/celular marcando os blocos",
    "objetivo": "Fornecer à dupla um roteiro estruturado de 30 minutos do início ao fim para realizar um treino técnico, tático e físico completo na arena mesmo quando estão apenas em dois.",
    "comoMontar": "Monte a quadra oficial 16x8m com 2 cones marcando a Zona Central de Levantamento (a 1,5m da rede) e 2 cones marcando alvos nos cantos opostos. Deixe o cronômetro visível junto ao poste.",
    "passoAPasso": [
      "Sempre que você e seu parceiro chegarem na arena e estiverem apenas em dois, sigam este Protocolo Oficial de 30 Minutos em 4 Blocos:",
      "BLOCO 1 — Aquecimento e Controle em Movimento (Minutos 0 a 6): 3 minutos de mobilidade articular na areia (Seção 1) + 3 minutos do controle contínuo com toque nos cones laterais (Exercício 234), aquecendo toque e manchete.",
      "BLOCO 2 — Calibragem de Levantamento de Precisão (Minutos 6 a 13): 20 levantamentos de manchete e 20 de toque limpo (Seções 5 e 6) saindo do fundo (5,5m) até a rede (1,5m) após passe do parceiro, cravando a bola na Zona Alvo.",
      "BLOCO 3 — Duelo de Saque, Recepção e Auto-Side-out (Minutos 13 a 21): 10 saques de J1 contra a recepção + auto-levantamento + ataque de J2 (Exercício 236), seguidos de 10 saques de J2 contra J1, trocando de lado na metade para treinar nos dois ventos!",
      "BLOCO 4 — Transição de Guerra e Jogo 'Valendo!' (Minutos 21 a 30): 5 minutos da transição de bloqueio + retirada + defesa + ataque (Exercício 238) e fechamento nos últimos 4 minutos com um Tie-Break até 15 pontos no corredor 1x1 Cooperativo-Competitivo (Exercício 239)!"
    ],
    "pontosAtencao": [
      "O segredo de treinar em dupla sem treinador é o RELÓGIO: não fiquem 25 minutos só batendo bola parados um na frente do outro!",
      "Respeitem a troca de bloco a cada 7 minutos com 1 minuto de água na sombra.",
      "Cobrem um do outro a limpeza do toque de dedos (zero giro) e a chamada verbal ('Minha!', 'Linha!', 'Cruzado!') durante todos os 4 blocos.",
      "Ao final dos 30 minutos, vocês terão executado mais de 150 contatos reais de jogo na bola!"
    ],
    "erroComum": "Chegar na quadra em dois, bater bola sem objetivo por 10 minutos e parar para conversar porque 'não tem mais dois para jogar'; corrija salvando este card #240 no celular para seguir os 4 blocos na areia. Variações",
    "variacaoFacil": "Reduzir cada bloco para 5 minutos (treino express de 20 minutos) mantendo a mesma ordem lógica de progressão.",
    "variacaoDificil": "Estender para 45 minutos adicionando 10 minutos de condicionamento físico específico da Seção 14 ao final do Bloco 4. Sempre que você e seu parceiro chegarem na arena e estiverem apenas em dois, sigam este Protocolo Oficial de 30 Minutos em 4 Blocos: 1 BLOCO 1 — Aquecimento e Controle em Movimento (Minutos 0 a 6): 3 minutos de mobilidade articular na areia (Seção 1) + 3 minutos do controle contínuo com toque nos cones laterais (Exercício 234), aquecendo toque e manchete. 2 BLOCO 2 — Calibragem de Levantamento de Precisão (Minutos 6 a 13): 20 levantamentos de manchete e 20 de toque limpo (Seções 5 e 6) saindo do fundo (5,5m) até a rede (1,5m) após passe do parceiro, cravando a bola na Zona Alvo. 3 BLOCO 3 — Duelo de Saque, Recepção e Auto-Side-out (Minutos 13 a 21): 10 saques de J1 contra a recepção + auto-levantamento + ataque de J2 (Exercício 236), seguidos de 10 saques de J2 contra J1, trocando de lado na metade para treinar nos dois ventos! 4 BLOCO 4 — Transição de Guerra e Jogo 'Valendo!' (Minutos 21 a 30): 5 minutos da transição de bloqueio + retirada + defesa + ataque (Exercício 238) e fechamento nos últimos 4 minutos com um Tie-Break até 15 pontos no corredor 1x1 Cooperativo-Competitivo (Exercício 239)! 5 O segredo de treinar em dupla sem treinador é o RELÓGIO: não fiquem 25 minutos só batendo bola parados um na frente do outro! Respeitem a troca de bloco a cada 7 minutos com 1 minuto de água na sombra. Cobrem um do outro a limpeza do toque de dedos (zero giro) e a chamada verbal ('Minha!', 'Linha!', 'Cruzado!') durante todos os 4 blocos. Ao final dos 30 minutos, vocês terão executado mais de 150 contatos reais de jogo na bola! Guia de Treinos • Vôlei de Praia 265",
    "meta": ""
  }
]
