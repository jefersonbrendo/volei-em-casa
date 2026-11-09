/**
 * Monta prompts.json: uma descrição em inglês para cada exercício (os modelos de imagem entendem melhor inglês).
 * Rode com: npx vite-node scripts/gerar-imagens/montar-prompts.ts
 */
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { NA_AREIA } from '../../src/data/areia'
import { TREINO_CASA } from '../../src/data/treinoCasa'

/** A primeira regra que combinar com o nome do exercício define a ação. Da mais específica para a mais geral. */
const ACOES: Array<[RegExp, string]> = [
  [/burpee/, 'doing a burpee, jumping up with arms overhead'],
  [/polichinelo/, 'doing jumping jacks, arms raised overhead and legs apart'],
  [/escalador/, 'doing mountain climbers in a push-up position, driving one knee to the chest'],
  [/prancha lateral/, 'holding a side plank on one forearm'],
  [/prancha/, 'holding a forearm plank, body in a straight line'],
  [/flex.* parede/, 'doing a standing push-up with both hands against a wall'],
  [/flexao|flexoes/, 'doing a push-up on the floor'],
  [/bicicleta/, 'doing bicycle crunches lying on the back'],
  [/abdominal|elevacao de pernas/, 'doing a sit-up crunch lying on the back'],
  [/ponte/, 'doing a glute bridge lying on the back with hips raised'],
  [/superman|extensao/, 'lying face down lifting chest and legs in a superman exercise'],
  [/toalha/, 'holding a towel stretched between both hands'],
  [/agachamento.*salto|salto.*agachamento/, 'doing a jump squat, explosively leaving the ground'],
  [/isometric/, 'holding a wall sit with the back against a wall'],
  [/agachamento|sumo|sentar e levantar|senta e levanta/, 'doing a deep bodyweight squat, thighs parallel to the floor'],
  [/bulgaro/, 'doing a Bulgarian split squat with the rear foot on a chair'],
  [/afundo|passada com alcance/, 'doing a deep lunge with the front knee bent'],
  [/panturrilha|calcanhar|tornozelo/, 'rising up on tiptoes doing calf raises'],
  [/triceps/, 'doing a triceps dip with the hands on a chair'],
  [/remada/, 'doing a bent-over row holding water bottles'],
  [/desenvolvimento/, 'pressing water bottles overhead'],
  [/elevacao lateral/, 'raising both arms to the sides holding water bottles'],
  [/elastico/, 'pulling a resistance band with one arm'],
  [/cortada|ataque|atacar|spike|largada|fechar o ponto/, 'jumping high and spiking a volleyball with one arm fully extended'],
  [/bloqueio|bloquear/, 'jumping at the net with both arms raised and hands open to block'],
  [/saque viagem|saque.*cima|saque por cima/, 'tossing a volleyball and serving overhead with one arm'],
  [/saque|sacar/, 'serving a volleyball with an underhand swing'],
  [/mergulho|peixinho|defesa de|defender|defesa/, 'diving low with arms reaching out to dig a volleyball'],
  [/manchete|recepcao|receber|passe/, 'in a low stance making a forearm pass, both arms straight and together under a volleyball'],
  [/toque|levantamento|levantar|levantador/, 'setting a volleyball overhead with both hands above the forehead, fingers spread'],
  [/elevacao de joelho|joelho/, 'running in place with high knees and swinging arms'],
  [/corda/, 'jumping rope with an imaginary rope, feet off the ground'],
  [/degrau/, 'stepping up onto a low step'],
  [/aterrissagem/, 'landing softly from a jump with knees bent'],
  [/lanc|quic|bola/, 'tossing a volleyball up and watching it with hands ready'],
  [/salto|saltos|pulo|impuls|vertical/, 'jumping high in the air, knees bent and arms swinging up'],
  [/corrida|arrancada|sprint|tiro/, 'sprinting forward with a powerful stride'],
  [/deslocamento|lateral|zigue|cruzado|escada|passos|movimentacao/, 'shuffling sideways quickly in a low athletic stance'],
  [/equilibrio|aviao|um pe|uma perna/, 'balancing on one leg with arms out to the sides'],
  [/caminhada|andar|marcha/, 'walking with high knees and swinging arms'],
  [/gato|camelo|crianca|cachorro/, 'on hands and knees doing a yoga stretch'],
  [/alongamento|mobilidade|circulo|rotacao|borboleta|portao|livro|ombro|punho|pescoco|quadril|coluna/, 'doing a slow mobility stretch with one arm reaching across the body'],
]

const POR_CATEGORIA_CASA: Record<string, string> = {
  'Com bola': 'practicing volleyball with a ball, hands ready',
  'Impulsão': 'jumping high in the air, knees bent and arms swinging up',
  'Força': 'doing a bodyweight strength exercise',
  'Agilidade': 'shuffling sideways quickly in a low athletic stance',
  'Coordenação': 'balancing on one leg while tossing a volleyball',
  'Mobilidade': 'doing a slow mobility stretch',
}
const POR_SECAO_AREIA: Record<number, string> = {
  1: 'warming up with high knees on the sand', 2: 'shuffling sideways quickly in a low athletic stance on the sand',
  3: 'serving a volleyball with an underhand swing', 4: 'in a low stance making a forearm pass under a volleyball',
  5: 'making a forearm set, both arms straight and together', 6: 'setting a volleyball overhead with both hands',
  7: 'jumping high and spiking a volleyball with one arm fully extended', 8: 'jumping at the net with both arms raised to block',
  9: 'diving low with arms reaching out to dig a volleyball', 10: 'jumping high and spiking a volleyball after a pass',
  11: 'pointing and calling to a teammate in an athletic stance', 12: 'in a ready stance reading the play, hands on knees',
  13: 'playing a rally, reaching for a volleyball', 14: 'sprinting forward on the sand', 15: 'practicing alone, passing a volleyball up',
}

const ESTILO = 'Flat vector sports illustration, landscape, single athlete shown full body, realistic human proportions and natural anatomy, dynamic pose, clean shapes, vibrant orange and teal color palette, no text, no logos, no watermark'
const NEGATIVO = 'deformed, extra limbs, extra fingers, missing arms, bad anatomy, blurry, text, watermark, logo, two heads, cropped body'

const normal = (s: string): string => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const pessoa = (n: number): string => (n % 2 ? 'A fit woman in a tank top, shorts and a visor' : 'A fit man in a tank top and shorts')

function acao(nome: string, reserva: string): { texto: string; reserva: boolean } {
  const n = normal(nome)
  for (const [regra, texto] of ACOES) if (regra.test(n)) return { texto, reserva: false }
  return { texto: reserva, reserva: true }
}

function cenaDeCasa(nome: string, material: readonly string[]): string {
  const extra = material.includes('parede') ? ', beside a plain wall' : material.includes('cadeira') ? ', with a wooden chair' : ''
  return `in a cozy home living room with a sofa, a bright window and a wooden floor${extra}`
}
const cenaDeAreia = (n: number): string => n % 2
  ? 'on a beach volleyball sand court with a net, warm orange sunset sky'
  : 'on a beach volleyball sand court with a net, teal sea and clear sky'

const lista = [
  ...TREINO_CASA.map((e) => {
    const a = acao(e.nome, POR_CATEGORIA_CASA[e.categoria] ?? 'exercising')
    return { id: `c${e.numero}`, nome: e.nome, numero: e.numero, reserva: a.reserva, prompt: `${ESTILO}. ${pessoa(e.numero)} ${a.texto}, ${cenaDeCasa(e.nome, e.material)}.` }
  }),
  ...NA_AREIA.map((e) => {
    const doFundamento = e.secao >= 3 && e.secao <= 9
    const sacaPorCima = e.secao === 3 && /cima|viagem/.test(normal(e.nome))
    const a = doFundamento
      ? { texto: sacaPorCima ? 'tossing a volleyball and serving overhead with one arm' : POR_SECAO_AREIA[e.secao]!, reserva: false }
      : acao(e.nome, POR_SECAO_AREIA[e.secao] ?? 'playing beach volleyball')
    return { id: `a${e.numero}`, nome: e.nome, numero: e.numero, reserva: a.reserva, prompt: `${ESTILO}. ${pessoa(e.numero)} ${a.texto}, ${cenaDeAreia(e.numero)}.` }
  }),
]

const saida = join(process.cwd(), 'scripts', 'gerar-imagens', 'prompts.json')
writeFileSync(saida, `${JSON.stringify({ negativo: NEGATIVO, exercicios: lista }, null, 1)}\n`, 'utf-8')
console.log(`${lista.length} descrições; ${lista.filter((x) => x.reserva).length} usaram a ação padrão da categoria.`)
for (const x of lista.filter((i) => i.reserva).slice(0, 60)) console.log(`  ${x.id}: ${x.nome}`)
