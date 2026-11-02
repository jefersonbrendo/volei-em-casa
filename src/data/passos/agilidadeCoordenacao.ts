import { e, type PassoDetalhado } from './tipos'

export const PASSOS_AGILIDADE_COORDENACAO: Record<number, PassoDetalhado> = {
  // ---------- AGILIDADE ----------
  3: { etapas: [
    e('Marcas', 'Coloque dois chinelos ou garrafas a 3 passos de distância um do outro.', 0),
    e('Posição de defesa', 'Fique ao lado de uma marca, joelhos flexionados, quadril baixo e o peso na frente dos pés.', 0),
    e('Deslocar', 'Vá de lado até a outra marca, afastando e juntando os pés, sem cruzar. Toque o chão com a mão.', 0.33),
    e('Voltar', 'Volte pelo mesmo caminho, sem levantar o quadril.', 0.67),
  ], ritmo: 'Durante os 30 segundos, o mais rápido possível com controle. Descanse 30 segundos entre as rodadas.' },
  64: { etapas: [
    e('Posição inicial', 'Fique em pé, joelhos levemente flexionados e tronco um pouco inclinado à frente.', 0.25),
    e('Passos curtos', 'Corra no lugar com passos bem curtos e rápidos, na ponta dos pés.', 0),
    e('Manter', 'Os pés mal saem do chão. Mantenha os braços dobrados à frente.', 0.5),
  ], ritmo: 'O mais rápido possível durante os 20 segundos. Respire solto.' },
  65: { etapas: [
    e('Marcas', 'Coloque três marcas em linha, a 2 passos uma da outra.', 0),
    e('Posição de defesa', 'Fique ao lado da primeira marca, com o quadril baixo.', 0),
    e('Deslocar', 'Vá de lado até a segunda marca, depois até a terceira, sem cruzar os pés.', 0.25),
    e('Voltar', 'Volte pelo mesmo caminho, sempre baixo.', 0.75),
  ], ritmo: 'Ritmo forte durante os 30 segundos.' },
  66: { etapas: [
    e('Marcas', 'Marque 3 pontos em formato de L, a 3 passos um do outro.', 0),
    e('Corrida reta', 'Corra do primeiro ao segundo ponto em linha reta.', 0.21),
    e('Curva fechada', 'No segundo ponto, baixe o corpo e faça a curva o mais fechada possível.', 0.5),
    e('Até o fim', 'Corra até o terceiro ponto e volte caminhando.', 0.7),
  ], ritmo: 'Descanse 30 segundos entre as repetições.' },
  67: { etapas: [
    e('Quadrado', 'Desenhe um quadrado de 1 metro no chão.', 0),
    e('Entrar', 'Salte com os dois pés para dentro do quadrado.', 0.25),
    e('Sair', 'Salte para fora pela frente e volte para dentro.', 0.5),
    e('Variar', 'Repita saindo pelo lado e por trás, em sequência.', 0.75),
  ], ritmo: 'Saltos leves e rápidos durante os 20 segundos.' },
  68: { etapas: [
    e('Marcas', 'Marque os 4 cantos de um quadrado de 1 metro.', 0),
    e('Tocar os cantos', 'Toque um canto de cada vez com o pé, na ordem, em sentido horário.', 0.5),
    e('Inverter', 'Depois de uma série, faça no sentido contrário.', 1),
  ], ritmo: 'Rápido e na ponta dos pés.' },
  69: { etapas: [
    e('Posição inicial', 'Fique em pé em um ponto, com espaço livre à frente.', 0),
    e('Acelerar', 'Corra 3 passos à frente, acelerando.', 0.24),
    e('Frear', 'Pare com os dois pés, joelhos flexionados e o peso baixo.', 0.48),
    e('Segurar', 'Fique parado 2 segundos, equilibrado, e volte caminhando.', 0.7),
  ], ritmo: 'Uma corrida por vez.' },
  70: { etapas: [
    e('Posição de defesa', 'Fique com o quadril baixo, os pés afastados e os braços à frente.', 0),
    e('Deslocar', 'Vá de lado até uma marca e toque o chão.', 0.33),
    e('Voltar', 'Volte até a outra marca sem levantar o quadril.', 0.67),
  ], ritmo: 'Durante os 20 segundos, sem subir o corpo.' },
  71: { etapas: [
    e('Posição baixa', 'Fique a 3 metros da parede, em posição de defesa.', 0),
    e('Lançar', 'Lance a bola na parede com um ângulo, para ela voltar para um lado.', 0.35),
    e('Reagir', 'Desloque-se rápido e chegue à bola antes que ela quique duas vezes.', 0.5),
    e('Voltar', 'Volte à posição inicial e lance para o outro lado.', 0.9),
  ], ritmo: 'Varie o lado do lançamento.' },
  72: { etapas: [
    e('Marcas', 'Coloque duas marcas a 5 passos de distância.', 0),
    e('Ida', 'Corra até a marca da frente e toque o chão com a mão.', 0.42),
    e('Volta', 'Vire rápido e corra de volta à marca inicial.', 0.6),
  ], ritmo: 'O máximo de idas e voltas em 30 segundos, sem se desequilibrar.' },
  73: { etapas: [
    e('Posição inicial', 'Fique de frente, com os joelhos flexionados.', 0),
    e('Cruzar', 'Cruze o pé de trás na frente do outro.', 0.25),
    e('Abrir', 'Dê um passo lateral com o outro pé e cruze de novo.', 0.5),
    e('Continuar', 'Siga para o mesmo lado e mude de lado a cada série.', 0.75),
  ], ritmo: 'Quadril solto e tronco de frente durante os 20 segundos.' },
  74: { etapas: [
    e('Posição inicial', 'Fique com os pés juntos entre duas marcas, a um passo de cada uma.', 0),
    e('Saltar', 'Salte de lado até a primeira marca.', 0.25),
    e('Aterrissar', 'Caia com os joelhos flexionados.', 0),
    e('Voltar', 'Salte até a outra marca.', 0.5),
  ], ritmo: 'Ritmo constante durante os 20 segundos.' },
  75: { etapas: [
    e('Posição baixa', 'Fique em posição baixa, com um pé à frente.', 0),
    e('Arrancar', 'Saia correndo, empurrando forte o chão.', 0.15),
    e('Acelerar', 'Acelere durante 3 passos.', 0.3),
    e('Desacelerar', 'Desacelere e volte caminhando.', 0.6),
  ], ritmo: 'Descanse até recuperar o fôlego entre as arrancadas.' },
  76: { etapas: [
    e('Escada', 'Desenhe 6 quadrados lado a lado, de um palmo cada.', 0),
    e('Um pé', 'Passe correndo, colocando um pé dentro de cada quadrado.', 0.25),
    e('Dois pés', 'Na volta, coloque os dois pés dentro de cada quadrado.', 0.62),
  ], ritmo: 'Velocidade só depois de acertar o padrão.' },
  77: { etapas: [
    e('Posição inicial', 'Fique de costas para uma marca a 4 passos, em posição baixa.', 0),
    e('Girar', 'Gire rápido para ficar de frente para a marca.', 0.15),
    e('Correr', 'Corra até a marca o mais rápido possível.', 0.25),
    e('Voltar', 'Volte caminhando e repita.', 0.8),
  ], ritmo: 'Uma arrancada por vez.' },
  78: { etapas: [
    e('Marcas', 'Coloque 3 marcas em triângulo, a 2 passos uma da outra, e fique na marca do meio.', 0),
    e('Primeiro ponto', 'Vá de lado até uma marca e toque o chão.', 0.15),
    e('Centro', 'Volte ao centro e toque o chão à sua frente.', 0.48),
    e('Terceiro ponto', 'Vá até a outra marca e toque o chão.', 0.81),
  ], ritmo: 'Sempre baixo, em posição de defesa.' },
  162: { etapas: [
    e('Posição inicial', 'Fique na marca da frente, em posição de defesa.', 0),
    e('Recuar', 'Volte de costas, com passos curtos, até a marca de trás.', 0.24),
    e('Avançar', 'Corra para a frente até a primeira marca.', 0.65),
  ], ritmo: 'Repita até o fim dos 20 segundos.' },
  163: { etapas: [
    e('Deitado', 'Deite de barriga para baixo, com as mãos perto dos ombros.', 0),
    e('Levantar', 'Empurre o chão e traga os pés para baixo do corpo o mais rápido que conseguir.', 0.35),
    e('Posição de defesa', 'Termine com os pés afastados, joelhos flexionados e braços à frente.', 0.5),
    e('Voltar', 'Volte a deitar e repita.', 0.9),
  ], ritmo: 'Uma repetição a cada 5 segundos, mais ou menos.' },
  164: { etapas: [
    e('Posição inicial', 'Segure a bola com o braço esticado à frente, na altura do ombro.', 0),
    e('Soltar', 'Solte a bola e deixe quicar uma vez.', 0.1),
    e('Chegar', 'Corra até a bola e desça para pegar.', 0.3),
    e('Pegar', 'Pegue antes do segundo quique. A cada acerto, solte a bola mais longe.', 0.5),
  ], ritmo: 'Uma tentativa por vez.' },
  165: { etapas: [
    e('Marcas', 'Coloque quatro chinelos nos cantos de um quadrado e um no centro.', 0),
    e('Para o canto', 'Do centro, vá até um canto e toque o chinelo.', 0.25),
    e('Voltar ao centro', 'Volte para o centro, de frente o tempo todo.', 0.5),
    e('Próximo canto', 'Vá ao próximo canto e siga pelos quatro.', 0.75),
  ], ritmo: 'Durante os 30 segundos. Descanse 30 segundos entre as séries.' },
  166: { etapas: [
    e('Passinhos', 'Em posição de defesa, faça passinhos rápidos no lugar.', 0),
    e('Arrancada', 'Depois de 5 segundos, saia com três passos laterais rápidos para um lado.', 0.45),
    e('Voltar', 'Volte com passinhos para o centro.', 0.8),
  ], ritmo: 'Alterne o lado da arrancada.' },
  167: { etapas: [
    e('Posição inicial', 'Fique com as mãos na altura dos ombros, palmas para a frente.', 0),
    e('Passo lateral', 'Dê um passo lateral e junte o outro pé.', 0.15),
    e('Mãos para cima', 'Estenda os braços para cima, na ponta dos pés.', 0.4),
    e('Outro lado', 'Volte e repita para o outro lado.', 0.65),
  ], ritmo: 'As mãos não descem abaixo dos ombros.' },
  168: { etapas: [
    e('Marcas', 'Coloque quatro chinelos em forma de T.', 0),
    e('Frente', 'Comece no pé do T e corra até o chinelo do meio.', 0.21),
    e('Lados', 'Vá de lado até o chinelo da direita, depois até o da esquerda.', 0.5),
    e('De costas', 'Volte ao meio e corra de costas até o início.', 0.7),
  ], ritmo: 'Descanse entre as repetições.' },
  169: { etapas: [
    e('Agachar', 'Agache e apoie as mãos no chão.', 0.15),
    e('Prancha', 'Leve os pés para trás, ficando em prancha.', 0.3),
    e('Voltar os pés', 'Traga os pés de volta perto das mãos.', 0.6),
    e('Saltar', 'Levante e salte com os braços para cima.', 0.75),
  ], ritmo: 'Ritmo constante. Solte o ar no salto.' },
  170: { etapas: [
    e('Correr no lugar', 'Corra no lugar com passos rápidos.', 0),
    e('Virar', 'A cada 4 segundos, vire o corpo de lado com um pequeno salto.', 0.32),
    e('Continuar', 'Siga correndo e vire para o outro lado.', 0.86),
  ], ritmo: 'Sem parar de correr durante os 20 segundos.' },
  171: { etapas: [
    e('Posição de defesa', 'Fique em posição de defesa, bem baixo.', 0),
    e('Diagonal', 'Dê dois passos em diagonal para a frente e para a direita.', 0.15),
    e('Alcance', 'Estique o braço como se fosse buscar uma bola curta.', 0.3),
    e('Voltar', 'Volte de costas para o centro e faça para a esquerda.', 0.7),
  ], ritmo: 'A altura dos ombros fica sempre igual.' },
  172: { etapas: [
    e('Sentado', 'Sente-se no chão de frente para o espaço livre.', 0),
    e('Levantar', 'Levante rápido usando uma mão de apoio.', 0.22),
    e('Correr', 'Corra 5 metros o mais rápido que conseguir.', 0.46),
    e('Voltar', 'Volte andando e repita.', 0.9),
  ], ritmo: 'Descanse até recuperar o fôlego.' },
  173: { etapas: [
    e('Passos rápidos', 'Faça 1 minuto de passos rápidos no lugar.', 0),
    e('Lateral e recuo', 'Faça 1 minuto de deslocamento lateral e 1 minuto de recuo e avanço.', 0.33),
    e('X e chão', 'Faça 1 minuto de deslocamento em X e 1 minuto de do chão para a defesa.', 0.67),
    e('Arrancada lateral', 'Termine com 1 minuto de passos rápidos e arrancada lateral.', 1),
  ], ritmo: 'Sem pausa entre as partes. Beba água no fim.' },

  // ---------- COORDENAÇÃO ----------
  79: { etapas: [
    e('Posição inicial', 'Fique em pé, com os cotovelos junto ao corpo e as mãos à frente.', 0),
    e('Girar os punhos', 'Gire os punhos como se segurasse uma corda.', 0.5),
    e('Saltar', 'Salte de leve, com os pés juntos, no ritmo do giro.', 0.5),
  ], ritmo: 'Leve e constante durante os 30 segundos.' },
  80: { etapas: [
    e('Posição inicial', 'Fique com os pés juntos e os braços ao lado do corpo.', 0),
    e('Abrir', 'Salte abrindo as pernas e levando os braços para cima.', 0.5),
    e('Fechar', 'Salte de volta à posição inicial.', 1),
  ], ritmo: 'Ritmo constante. Respire solto.' },
  81: { etapas: [
    e('Joelho direito', 'Marche no lugar levando o joelho direito e o braço esquerdo ao mesmo tempo.', 0),
    e('Joelho esquerdo', 'Troque: joelho esquerdo e braço direito.', 0.5),
    e('Manter', 'Mantenha o ritmo e o tronco reto.', 1),
  ], ritmo: 'Durante os 30 segundos.' },
  82: { etapas: [
    e('Posição inicial', 'Fique em pé com a bola parada à sua frente.', 0.25),
    e('Toque', 'Encoste a sola de um pé em cima da bola, de leve.', 0),
    e('Trocar', 'Volte esse pé e toque com o outro, alternando.', 0.5),
  ], ritmo: 'Rápido e leve, sem deixar a bola fugir.' },
  83: { etapas: [
    e('Posição inicial', 'Segure a bola com as duas mãos à frente do peito.', 0),
    e('Lançar', 'Jogue a bola para cima, até a altura da cabeça.', 0.2),
    e('Pegar', 'Pegue com as duas mãos, amortecendo com os cotovelos.', 0.8),
  ], ritmo: 'Aumente a altura aos poucos.' },
  84: { etapas: [
    e('Lançar', 'Jogue a bola para cima, mais alto que a cabeça.', 0.15),
    e('Palma', 'Bata uma palma enquanto a bola está no ar.', 0.38),
    e('Pegar', 'Pegue a bola com as duas mãos.', 0.85),
  ], ritmo: 'Se ficar fácil, bata duas palmas.' },
  85: { etapas: [
    e('Posição inicial', 'Fique com as pernas abertas e os joelhos levemente flexionados.', 0),
    e('Oito', 'Passe a bola entre as pernas, de uma mão para a outra, desenhando um oito.', 0.5),
    e('Olhar à frente', 'Mantenha o ritmo constante, tentando olhar para a frente.', 1),
  ], ritmo: 'Durante os 30 segundos.' },
  86: { etapas: [
    e('Apoio', 'Fique em pé, apoiado em uma perna, com o joelho levemente flexionado.', 0),
    e('Braços', 'Abra os braços para ajudar no equilíbrio.', 0.5),
    e('Segurar', 'Fique parado pelo tempo combinado e troque de perna.', 1),
  ], ritmo: 'Respire normalmente. Olhe para um ponto fixo.' },
  87: { etapas: [
    e('Um pé', 'Fique em um pé só, com o joelho levemente flexionado.', 0),
    e('Passar a bola', 'Passe a bola em volta da cintura, de uma mão para a outra.', 0.5),
    e('Equilíbrio', 'Mantenha o tronco reto. Troque de perna ao fim do tempo.', 1),
  ], ritmo: 'Devagar no começo e mais rápido depois.' },
  88: { etapas: [
    e('Um pé', 'Fique em um pé, com o joelho flexionado.', 0),
    e('Trocar', 'Salte de leve para o outro pé.', 0.25),
    e('Aterrissar', 'Caia sempre em um pé só, com o joelho flexionado, e continue alternando.', 0.5),
  ], ritmo: 'No ritmo, durante os 20 segundos.' },
  89: { etapas: [
    e('Para a frente', 'Dê um passo à frente com o pé direito, depois com o esquerdo.', 0.25),
    e('Para trás', 'Dê um passo para trás com o direito, depois com o esquerdo.', 0.75),
    e('Acelerar', 'Repita a sequência, cada vez mais rápido.', 1),
  ], ritmo: 'Conte "1, 2, 3, 4" em voz alta.' },
  90: { etapas: [
    e('Posição inicial', 'Comece com os pés afastados e os braços para os lados.', 0),
    e('Cruzar', 'Salte cruzando as pernas e os braços à frente do corpo.', 0.25),
    e('Abrir', 'Salte abrindo pernas e braços.', 0.5),
    e('Cruzar ao contrário', 'No salto seguinte, cruze com a outra perna e o outro braço na frente.', 0.75),
  ], ritmo: 'Ritmo constante.' },
  91: { etapas: [
    e('Posição inicial', 'Fique em pé, com a bola em uma mão.', 0),
    e('Quicar', 'Quique a bola no chão em diagonal, para a outra mão.', 0.25),
    e('Receber', 'Receba com a outra mão e devolva do mesmo jeito.', 0.5),
  ], ritmo: 'Ritmo constante, sem olhar para a bola o tempo todo.' },
  92: { etapas: [
    e('Posição inicial', 'Fique a 2 metros da parede, com a bola em uma mão.', 0),
    e('Lançar', 'Lance a bola na parede com essa mão.', 0.2),
    e('Pegar com a outra', 'Pegue a bola com a outra mão.', 0.5),
    e('Trocar', 'Lance com a mão que pegou e siga alternando.', 0.7),
  ], ritmo: 'Aumente a velocidade aos poucos.' },
  93: { etapas: [
    e('Marchar', 'Marche no lugar com ritmo constante, com as mãos em triângulo acima da testa.', 0),
    e('Toque', 'Dê um toque na bola para cima a cada dois passos.', 0.25),
    e('Manter', 'Não pare a marcha para tocar.', 0.5),
  ], ritmo: 'Durante os 30 segundos.' },
  94: { etapas: [
    e('Polichinelo', 'Faça 1 minuto de polichinelo.', 0),
    e('Marcha', 'Faça 1 minuto de marcha com braço oposto.', 0),
    e('Lançar e pegar', 'Faça 1 minuto de lançar e pegar a bola.', 0.2),
    e('Equilíbrio e quique', 'Faça 1 minuto de equilíbrio em um pé (30 segundos cada) e termine com 1 minuto de quique alternado.', 0.8),
  ], ritmo: 'Sem pausa entre as partes.' },
  174: { etapas: [
    e('Lançar', 'Lance a bola para cima, um pouco acima da cabeça.', 0.15),
    e('Tocar o chão', 'Agache e toque o chão com uma mão, olhando para a bola.', 0.38),
    e('Pegar', 'Levante e pegue a bola antes que ela caia.', 0.62),
  ], ritmo: 'Alterne a mão que toca o chão.' },
  175: { etapas: [
    e('Posição inicial', 'Fique em pé com a bola em uma mão.', 0),
    e('Passar atrás', 'Leve a bola para trás e troque de mão nas costas.', 0.5),
    e('Passar na frente', 'Traga a bola para a frente e troque de mão de novo.', 1),
  ], ritmo: '10 voltas para um lado e 10 para o outro.' },
  176: { etapas: [
    e('Perto da parede', 'Fique perto de uma parede para apoiar se precisar.', 0),
    e('Um pé', 'Fique em um pé, com o outro joelho levemente dobrado.', 0),
    e('Fechar os olhos', 'Feche os olhos e mantenha a posição. Troque de perna no fim.', 0.5),
  ], ritmo: 'Respire devagar. Abra os olhos se perder o equilíbrio.' },
  177: { etapas: [
    e('Um pé', 'Fique em um pé só, com as mãos em triângulo acima da testa.', 0),
    e('Toques baixos', 'Faça toques para cima, a cerca de meio metro.', 0.38),
    e('Contar', 'Conte os toques sem apoiar o outro pé. Troque de perna.', 0.7),
  ], ritmo: 'Toques curtos e calmos.' },
  178: { etapas: [
    e('Posição inicial', 'Segure a bola atrás das costas com as duas mãos.', 0),
    e('Carregar', 'Incline um pouco o tronco e leve a bola para trás e para baixo.', 0.2),
    e('Lançar', 'Lance a bola por cima da cabeça para a frente.', 0.32),
    e('Pegar', 'Pegue a bola à sua frente antes que caia.', 0.7),
  ], ritmo: 'Ajuste a força: a bola passa pouco acima da cabeça.' },
  179: { etapas: [
    e('Quicar', 'Quique a bola forte no chão, à sua frente.', 0.12),
    e('Girar', 'Dê uma volta completa enquanto ela sobe.', 0.5),
    e('Pegar', 'Pegue a bola antes do segundo quique.', 0.85),
  ], ritmo: 'Alterne o lado do giro.' },
  180: { etapas: [
    e('Posição inicial', 'Fique em pé com os braços para cima.', 0),
    e('Primeiro lado', 'Suba o joelho direito e toque nele com a mão esquerda.', 0.25),
    e('Outro lado', 'Volte e faça com o joelho esquerdo e a mão direita.', 0.75),
  ], ritmo: 'Ritmo constante, tronco reto.' },
  181: { etapas: [
    e('Sentado', 'Sente-se no chão com a bola nas mãos.', 0),
    e('Lançar', 'Lance a bola bem alto e reto.', 0.12),
    e('Levantar', 'Levante rápido com apoio de uma mão.', 0.3),
    e('Pegar', 'Pegue a bola antes que ela caia e sente-se de novo.', 0.5),
  ], ritmo: 'Uma repetição por vez.' },
  182: { etapas: [
    e('Posição inicial', 'Fique em um pé, com os braços abertos.', 0),
    e('Inclinar', 'Incline o tronco à frente e leve a outra perna esticada para trás.', 0.3),
    e('Avião', 'Desça até o tronco e a perna ficarem quase paralelos ao chão.', 0.45),
    e('Voltar', 'Volte devagar à posição inicial.', 1),
  ], ritmo: 'Desça em 3 segundos e suba em 3 segundos.' },
  183: { etapas: [
    e('Começo', 'Comece em uma ponta, quicando a bola com uma mão.', 0),
    e('Andar', 'Ande até a outra ponta quicando a bola, com as pontas dos dedos.', 0.25),
    e('Trocar de mão', 'Na volta, quique com a outra mão.', 0.6),
  ], ritmo: 'Passos tranquilos, sem perder a bola.' },
  184: { etapas: [
    e('Mão fraca', 'Segure a bola com a mão que você menos usa.', 0),
    e('Lançar', 'Lance a bola para cima, a cerca de meio metro.', 0.2),
    e('Pegar', 'Pegue de volta com a mesma mão, amortecendo com o cotovelo.', 0.7),
  ], ritmo: 'Aumente a altura aos poucos.' },
  185: { etapas: [
    e('Na linha', 'Fique em cima de uma linha, um pé na frente do outro.', 0),
    e('Andar', 'Ande colocando o calcanhar encostado na ponta do outro pé.', 0.2),
    e('Lançar e pegar', 'A cada passo, lance a bola para cima e pegue.', 0.3),
    e('Voltar', 'Volte de costas pela linha.', 0.6),
  ], ritmo: 'Devagar, com os olhos na bola.' },
}
