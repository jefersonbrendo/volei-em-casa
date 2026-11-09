# Gerar as imagens dos exercícios

Este guia é para rodar a geração em um PC com AMD RX 580 **de 8 GB**. Com a versão de 4 GB não deve funcionar.

Precisa de cerca de **25 GB livres** em disco e, de preferência, 16 GB de RAM ou mais. Feche jogos e programas pesados enquanto gera.

## 1. Preparar

1. Instale o [Git](https://git-scm.com/download/win) e o [Python](https://www.python.org/downloads/) (marque "Add Python to PATH").
2. Clone o projeto e instale o que falta:
   ```
   git clone https://github.com/jefersonbrendo/volei-em-casa.git
   cd volei-em-casa\scripts\gerar-imagens
   pip install pillow
   ```
3. Atualize o driver da placa pelo site da AMD.

## 2. Baixar o gerador

Abra as [versões do stable-diffusion.cpp](https://github.com/leejet/stable-diffusion.cpp/releases/latest), expanda **Assets** e baixe o zip para Windows que tenha **vulkan** no nome. Extraia tudo em `scripts\gerar-imagens\sd\`.

## 3. Baixar o modelo

Crie a pasta `scripts\gerar-imagens\modelos\` e coloque nela estes 4 arquivos:

| Arquivo | Onde baixar |
|---|---|
| `flux1-schnell-q4_k.gguf` | [leejet/FLUX.1-schnell-gguf](https://huggingface.co/leejet/FLUX.1-schnell-gguf/tree/main) |
| `ae.safetensors` | [black-forest-labs/FLUX.1-schnell](https://huggingface.co/black-forest-labs/FLUX.1-schnell/tree/main) |
| `clip_l.safetensors` | [flux_text_encoders](https://huggingface.co/comfyanonymous/flux_text_encoders/tree/main) |
| `t5xxl_fp16.safetensors` | [flux_text_encoders](https://huggingface.co/comfyanonymous/flux_text_encoders/tree/main) |

Se algum link pedir login, crie uma conta grátis no Hugging Face e aceite os termos da página do modelo.

## 4. Fazer o teste de 6 imagens

Dentro de `scripts\gerar-imagens`:

```
python gerar.py --teste
```

Pode levar perto de 1h30. Quando terminar, envie o resultado:

```
git add teste
git commit -m "Teste de 6 imagens"
git push
```

**Pare aqui** e espere a aprovação das imagens antes de gerar as demais.

## 5. Gerar todas

```
python gerar.py
```

São muitas horas, possivelmente alguns dias. O melhor é rodar em blocos, à noite: para parar, aperte `Ctrl+C`. Ao rodar o comando de novo, ele continua de onde parou. A tela mostra o tempo restante.

Para gerar um bloco com quantidade fixa, use `python gerar.py --limite 40`.

Ao final de cada bloco, envie o que ficou pronto (a partir da pasta `scripts\gerar-imagens`):

```
git add ..\..\public\previa
git commit -m "Imagens dos exercícios"
git pull --rebase
git push
```

## Se der erro

- **Falta de memória ou tela preta:** use o modelo menor `flux1-schnell-q2_k.gguf` no lugar do `q4_k`, deixando só um deles na pasta.
- **Para depois de 3 falhas seguidas:** copie a mensagem que apareceu na tela e envie.
- **Alternativa mais rápida e de qualidade menor:** coloque um modelo Stable Diffusion 1.5 em `modelos` com nome começando por `sd15` e rode `python gerar.py --teste --perfil sd15`.
