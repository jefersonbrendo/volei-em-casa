import { e, type PassoDetalhado } from './tipos'

export const PASSOS_MOBILIDADE: Record<number, PassoDetalhado> = {
  95: { etapas: [
    e('Apoio', 'Apoie-se em uma parede ou móvel firme e levante um pé do chão, com o joelho um pouco à frente.', 0),
    e('Sentido horário', 'Gire o tornozelo em círculos grandes, desenhando com a ponta do pé.', 0.25),
    e('Sentido contrário', 'Repita girando para o outro lado e depois troque de pé.', 0.75),
  ], ritmo: 'Círculos lentos e grandes. Respire solto.' },
  96: { etapas: [
    e('Posição inicial', 'Fique em pé, pés afastados, mãos na cintura e joelhos levemente flexionados.', 0.25),
    e('Círculo', 'Leve o quadril para um lado, para trás, para o outro lado e para a frente, desenhando um círculo grande.', 0.5),
    e('Inverter', 'Depois de 10 voltas, gire no sentido contrário.', 1),
  ], ritmo: 'Devagar, com o tronco parado.' },
  97: { etapas: [
    e('Posição inicial', 'Fique em pé, com os braços soltos ao lado do corpo.', 0),
    e('Para trás', 'Gire os braços para trás em círculos grandes, passando por cima da cabeça.', 0.5),
    e('Para a frente', 'Depois de 10 voltas, gire para a frente.', 1),
  ], ritmo: 'Círculos lentos e controlados.' },
  98: { etapas: [
    e('Quatro apoios', 'Apoie as mãos embaixo dos ombros e os joelhos embaixo do quadril.', 0),
    e('Gato', 'Arredonde as costas, empurrando o chão e olhando para o umbigo.', 0),
    e('Camelo', 'Desça a barriga devagar e olhe para a frente, sem forçar o pescoço.', 0.5),
  ], ritmo: 'Solte o ar ao arredondar e puxe ao descer a barriga.' },
  99: { etapas: [
    e('Posição', 'Apoie as mãos na parede, com uma perna à frente e a outra esticada atrás.', 0),
    e('Calcanhar no chão', 'Mantenha o calcanhar de trás apoiado e a ponta do pé virada para a frente.', 0),
    e('Alongar', 'Flexione o joelho da frente e leve o quadril em direção à parede até sentir a panturrilha de trás.', 0.5),
  ], ritmo: 'Fique parado e respire devagar. Troque de perna no fim do tempo.' },
  100: { etapas: [
    e('Apoio', 'Apoie uma mão na parede e fique em pé em uma perna só.', 0),
    e('Segurar o pé', 'Dobre o outro joelho e segure o pé com a mão, trazendo o calcanhar perto do glúteo.', 0.5),
    e('Ajustar', 'Mantenha os joelhos próximos e o quadril encaixado. Fique parado e depois troque.', 1),
  ], ritmo: 'Respire devagar, sem puxar com força.' },
  101: { etapas: [
    e('Sentado', 'Sente-se no chão com uma perna esticada e a outra dobrada, com a sola do pé encostada na coxa.', 0),
    e('Inclinar', 'Incline o tronco à frente com as costas retas, levando as mãos em direção ao pé esticado.', 0.5),
    e('Segurar', 'Pare onde sentir a parte de trás da coxa, sem dor, e troque de perna no fim do tempo.', 0.5),
  ], ritmo: 'Respire devagar. A cada saída de ar, tente ir um pouco mais à frente.' },
  102: { etapas: [
    e('Posição', 'Fique de lado para a parede, com o braço esticado para trás e a palma apoiada nela, na altura do ombro.', 0),
    e('Girar', 'Gire o tronco devagar para o lado oposto até sentir o peito abrir.', 0.5),
    e('Segurar', 'Fique parado e depois troque de lado.', 1),
  ], ritmo: 'Respire devagar, sem forçar o ombro.' },
  103: { etapas: [
    e('Sentado', 'Sente-se na cadeira, com as costas retas e os pés no chão.', 0),
    e('Girar', 'Gire o tronco para um lado, olhando para trás, sem mexer o quadril.', 0),
    e('Outro lado', 'Volte ao centro e gire para o outro lado.', 0.5),
  ], ritmo: 'Solte o ar ao girar.' },
  104: { etapas: [
    e('Apoio', 'Fique de frente para um apoio firme e segure nele com as duas mãos.', 0),
    e('Descer', 'Agache o mais baixo que conseguir, sem dor, com os calcanhares no chão.', 0.45),
    e('Segurar', 'Fique embaixo com o peito aberto, balançando suavemente. Volte devagar.', 0.65),
  ], ritmo: 'Respire devagar durante todo o tempo.' },
  105: { etapas: [
    e('Afundo', 'Dê um passo à frente e desça em afundo, com a perna de trás dobrada.', 0.3),
    e('Girar', 'Gire o tronco levando os braços para o lado da perna da frente.', 0.5),
    e('Voltar', 'Volte ao centro, levante e troque de perna.', 1),
  ], ritmo: 'Solte o ar ao girar.' },
  106: { etapas: [
    e('Segurar a toalha', 'Segure uma toalha esticada à frente, com as mãos bem afastadas.', 0),
    e('Subir', 'Levante os braços acima da cabeça sem dobrar os cotovelos.', 0.5),
    e('Voltar', 'Leve a toalha para trás até onde for confortável e volte devagar à frente.', 1),
  ], ritmo: 'Devagar. Afaste mais as mãos se o ombro travar.' },
  107: { etapas: [
    e('Sentado', 'Sente-se no chão com as solas dos pés juntas e os joelhos abertos.', 0),
    e('Segurar', 'Segure os pés com as mãos e mantenha as costas retas.', 0.5),
    e('Inclinar', 'Incline o tronco à frente de leve e fique parado.', 1),
  ], ritmo: 'Respire devagar. Os joelhos descem sozinhos, sem empurrar.' },
  108: { etapas: [
    e('Posição', 'Sente-se ou fique em pé, com os ombros relaxados.', 0),
    e('Primeiro lado', 'Incline a cabeça devagar para um lado, aproximando a orelha do ombro, sem levantar o ombro.', 0.25),
    e('Outro lado', 'Volte ao centro e incline para o outro lado.', 0.75),
  ], ritmo: 'Movimentos lentos. Respire em cada lado.' },
  109: { etapas: [
    e('Deitado', 'Deite de barriga para baixo e apoie as mãos perto dos ombros.', 0),
    e('Subir o peito', 'Empurre o chão devagar e levante o peito, olhando para a frente.', 0.5),
    e('Voltar', 'Desça devagar até o peito encostar no chão.', 1),
  ], ritmo: 'Puxe o ar ao subir e solte ao descer. Sem forçar a lombar.' },
  110: { etapas: [
    e('Passada', 'Dê uma passada longa à frente e desça o quadril.', 0.3),
    e('Mão no chão', 'Leve a mão do mesmo lado do pé da frente ao chão, ao lado do pé.', 0.45),
    e('Abrir', 'Levante o outro braço para o alto, abrindo o peito, e volte à posição inicial.', 0.6),
  ], ritmo: 'Solte o ar ao abrir o braço.' },
  111: { etapas: [
    e('Ajoelhado', 'Ajoelhe-se no chão, com os joelhos um pouco afastados.', 0),
    e('Sentar nos calcanhares', 'Sente-se sobre os calcanhares e incline o tronco à frente.', 0.3),
    e('Braços à frente', 'Estique os braços à frente e descanse a testa no chão.', 0.6),
  ], ritmo: 'Respire devagar e fique parado.' },
  112: { etapas: [
    e('Tornozelo e quadril', 'Faça 1 minuto de círculos de tornozelo e de quadril.', 0),
    e('Ombro e tronco', 'Faça 1 minuto de círculos de ombro e rotação de tronco.', 0.25),
    e('Gato e camelo', 'Faça 1 minuto de gato e camelo.', 0.5),
    e('Afundo e criança', 'Faça 1 minuto de afundo com rotação e termine com 1 minuto na postura da criança.', 1),
  ], ritmo: 'Tudo devagar, respirando fundo.' },
  186: { etapas: [
    e('Braços à frente', 'Estique os braços à frente, na altura dos ombros.', 0),
    e('Círculos', 'Faça círculos com os punhos para um lado e depois para o outro.', 0.25),
    e('Abrir e fechar', 'Abra e feche as mãos com força, depois afaste e junte os dedos.', 0.75),
  ], ritmo: '10 círculos para cada lado.' },
  187: { etapas: [
    e('Palma para cima', 'Estique um braço à frente com a palma para cima.', 0),
    e('Puxar os dedos', 'Com a outra mão, puxe os dedos levemente para baixo e segure.', 0.5),
    e('Palma para baixo', 'Vire a palma para baixo e puxe a mão em sua direção. Troque de braço.', 1),
  ], ritmo: 'Alongamento leve, sem dor.' },
  188: { etapas: [
    e('Braço cruzado', 'Leve um braço esticado na frente do peito.', 0),
    e('Puxar', 'Com a outra mão, puxe o braço pelo cotovelo em direção ao peito.', 0.5),
    e('Ombro baixo', 'Mantenha o ombro baixo, longe da orelha. Troque de braço.', 1),
  ], ritmo: 'Respire devagar.' },
  189: { etapas: [
    e('Braço para cima', 'Levante um braço e dobre o cotovelo, levando a mão às costas.', 0),
    e('Empurrar', 'Com a outra mão, empurre o cotovelo levemente para baixo.', 0.5),
    e('Tronco reto', 'Mantenha o tronco reto, sem inclinar. Troque de braço.', 1),
  ], ritmo: 'Respire devagar.' },
  190: { etapas: [
    e('Apoio', 'Fique em pé, apoiado em uma parede se precisar.', 0),
    e('Joelho à frente', 'Suba o joelho à frente, na altura do quadril.', 0.25),
    e('Abrir', 'Gire o joelho para o lado, abrindo o quadril, e desça o pé.', 0.5),
    e('Inverter', 'Depois faça o caminho inverso: do lado para a frente.', 0.75),
  ], ritmo: 'Movimentos lentos e amplos.' },
  191: { etapas: [
    e('Deitado de lado', 'Deite de lado com os joelhos dobrados e os braços esticados à frente, um sobre o outro.', 0),
    e('Abrir', 'Abra o braço de cima para o outro lado, girando o tronco, e acompanhe a mão com os olhos.', 0.5),
    e('Fechar', 'Volte devagar. Troque de lado no fim da série.', 1),
  ], ritmo: 'Solte o ar ao abrir. Os joelhos ficam juntos e parados.' },
  192: { etapas: [
    e('Deitado', 'Deite de barriga para cima com os joelhos dobrados.', 0),
    e('Cruzar', 'Cruze o tornozelo direito sobre o joelho esquerdo.', 0),
    e('Puxar', 'Puxe a coxa esquerda em direção ao peito. Segure e troque de perna.', 0.5),
  ], ritmo: 'Respire devagar, com os ombros relaxados.' },
  193: { etapas: [
    e('Posição inicial', 'Fique em pé com os pés afastados.', 0.5),
    e('Inclinar', 'Levante um braço e incline o tronco para o lado oposto, com o quadril parado.', 0.25),
    e('Outro lado', 'Volte e faça para o outro lado.', 0.75),
  ], ritmo: 'Respire devagar em cada lado.' },
  194: { etapas: [
    e('Quatro apoios', 'Comece de quatro apoios.', 0),
    e('V invertido', 'Estique as pernas e suba o quadril, formando um V invertido.', 0.4),
    e('Empurrar o chão', 'Empurre o chão com as mãos e leve os calcanhares em direção ao chão.', 0.55),
  ], ritmo: 'Respire devagar e segure. Dobre os joelhos se precisar.' },
  195: { etapas: [
    e('Apoio', 'Fique de lado para a parede, com uma mão apoiada.', 0),
    e('Balançar', 'Balance a perna de fora para a frente e para trás.', 0.5),
    e('Aumentar', 'Aumente a amplitude aos poucos. Troque de perna no fim.', 1),
  ], ritmo: 'Ritmo de pêndulo, sem balançar o tronco.' },
}
