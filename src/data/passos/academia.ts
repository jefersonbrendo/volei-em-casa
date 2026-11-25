import { e, type PassoDetalhado } from './tipos'

/** Exercícios de academia da aba Impulsão (196–207). */
export const PASSOS_ACADEMIA: Record<number, PassoDetalhado> = {
  196: { etapas: [
    e('Barra nas costas', 'Apoie a barra no alto das costas, mãos um pouco mais abertas que os ombros e pés na largura dos ombros.', 0),
    e('Descer', 'Puxe o ar, firme a barriga e leve o quadril para trás e para baixo até as coxas ficarem paralelas ao chão.', 0.45),
    e('Segurar embaixo', 'Peito aberto e joelhos na direção das pontas dos pés.', 0.55),
    e('Subir', 'Empurre o chão com o pé inteiro e solte o ar no final da subida.', 1),
  ], ritmo: 'Desça em 2 segundos e suba com força.' },
  197: { etapas: [
    e('Em pé com a barra', 'Segure a barra na frente das coxas, mãos na largura dos ombros, joelhos levemente dobrados.', 0),
    e('Quadril para trás', 'Leve o quadril para trás e incline o tronco, deslizando a barra rente às coxas.', 0.3),
    e('Ponto mais baixo', 'Pare quando sentir alongar a parte de trás da coxa, com as costas retas.', 0.5),
    e('Voltar', 'Empurre o quadril para a frente até ficar em pé, apertando os glúteos.', 1),
  ], ritmo: 'Desça em 3 segundos. Solte o ar ao subir.' },
  198: { etapas: [
    e('Costas no banco', 'Apoie a parte de cima das costas no banco, barra no quadril e pés no chão.', 0),
    e('Subir o quadril', 'Empurre o chão com os calcanhares até o tronco ficar alinhado com as coxas.', 0.4),
    e('Apertar no alto', 'Segure 1 segundo apertando os glúteos, com as canelas na vertical.', 0.5),
    e('Descer', 'Desça o quadril devagar, sem encostar no chão.', 1),
  ], ritmo: 'Solte o ar ao subir e puxe ao descer.' },
  199: { etapas: [
    e('Pé de trás no banco', 'Apoie o peito do pé de trás no banco e segure um halter em cada mão.', 0),
    e('Descer', 'Dobre o joelho da frente até a coxa ficar paralela ao chão.', 0.5),
    e('Subir', 'Empurre o chão com o pé da frente para voltar. A perna de trás só apoia.', 1),
  ], ritmo: 'Faça todas as repetições de uma perna antes de trocar.' },
  200: { etapas: [
    e('Em pé com halteres', 'Um halter em cada mão, braços esticados ao lado do corpo.', 0),
    e('Passo para trás', 'Dê um passo largo para trás e desça até o joelho de trás chegar perto do chão.', 0.45),
    e('Voltar', 'Empurre o chão com o pé da frente e volte para a posição inicial.', 1),
  ], ritmo: 'Alterne as pernas a cada repetição.' },
  201: { etapas: [
    e('De frente para o caixote', 'Um halter em cada mão, de frente para o caixote.', 0),
    e('Pé em cima', 'Apoie o pé inteiro de uma perna em cima do caixote.', 0.25),
    e('Subir', 'Empurre com a perna de cima até ficar em pé no caixote.', 0.5),
    e('Descer', 'Desça devagar com a outra perna, controlando o movimento.', 0.8),
  ], ritmo: 'Suba com força e desça em 2 segundos.' },
  202: { etapas: [
    e('Na frente do caixote', 'Fique a um passo do caixote, pés na largura do quadril.', 0),
    e('Carregar', 'Desça um pouco o quadril e leve os braços para trás.', 0.16),
    e('Saltar', 'Jogue os braços para cima, estique o corpo e puxe os joelhos.', 0.3),
    e('Aterrissar', 'Caia com os dois pés no caixote, joelhos dobrados e macios.', 0.42),
    e('Descer andando', 'Fique em pé no caixote e desça andando, um pé de cada vez.', 0.75),
  ], ritmo: 'Descanse alguns segundos entre os saltos.' },
  203: { etapas: [
    e('Em pé com halteres', 'Halteres leves nas mãos, braços colados ao corpo.', 0),
    e('Meio agachamento', 'Desça até a metade do agachamento.', 0.35),
    e('Saltar', 'Salte o mais alto que conseguir, esticando joelhos e quadril.', 0.5),
    e('Aterrissar', 'Caia com os joelhos dobrados e macios e reorganize a postura.', 0.75),
  ], ritmo: 'Cada salto com força máxima. Pare se a altura cair.' },
  204: { etapas: [
    e('Em pé com halteres', 'Um halter em cada mão, pés na largura do quadril.', 0),
    e('Subir', 'Suba na ponta dos pés o mais alto que conseguir.', 0.45),
    e('Segurar', 'Segure 1 segundo no alto.', 0.55),
    e('Descer devagar', 'Desça até os calcanhares quase tocarem o chão.', 1),
  ], ritmo: 'Suba em 1 segundo e desça em 2.' },
  205: { etapas: [
    e('Kettlebell no alto', 'Em pé, braços relaxados, kettlebell na altura do peito.', 0),
    e('Quadril para trás', 'Deixe o kettlebell cair entre as pernas levando o quadril para trás, costas retas.', 0.45),
    e('Empurrar o quadril', 'Estenda o quadril com força: é ele que faz o kettlebell subir.', 0.65),
    e('No alto de novo', 'O kettlebell chega à altura do peito com os braços soltos.', 0.8),
  ], ritmo: 'Solte o ar com força a cada empurrão do quadril.' },
  206: { etapas: [
    e('Posição inicial', 'Meio do pé embaixo da barra, mãos fora das pernas, costas retas e barra nas canelas.', 0),
    e('Subir', 'Empurre o chão com as pernas e suba a barra rente ao corpo.', 0.25),
    e('Em pé', 'Termine em pé, com o quadril estendido e os ombros para trás.', 0.45),
    e('Descer', 'Leve o quadril para trás e desça a barra pelo mesmo caminho.', 0.8),
  ], ritmo: 'Puxe o ar antes de subir e solte no alto.' },
  207: { etapas: [
    e('Em cima do caixote', 'Fique em pé em cima de um caixote baixo.', 0),
    e('Cair', 'Dê um passo para fora e caia com os dois pés juntos.', 0.3),
    e('Saltar na hora', 'Assim que tocar o chão, salte o mais alto que conseguir.', 0.5),
    e('Aterrissar', 'Caia com os joelhos dobrados e macios e volte ao caixote andando.', 0.65),
  ], ritmo: 'Contato curto com o chão, como se ele estivesse quente.' },
}
