"""Gera as imagens de prévia dos exercícios com o stable-diffusion.cpp. Veja LEIA-ME.md.

Pode parar e rodar de novo a qualquer momento: imagens prontas são puladas.
  python gerar.py --teste            (6 imagens variadas, para aprovar o estilo)
  python gerar.py                    (todas)
  python gerar.py --perfil sd15      (modelo mais rápido, qualidade menor)
"""
import argparse
import json
import subprocess
import sys
import tempfile
import time
from pathlib import Path

from PIL import Image

AQUI = Path(__file__).resolve().parent
RAIZ = AQUI.parent.parent
TESTE = ["c1", "c44", "a61", "a80", "a121", "a140"]
LARGURA_FINAL, ALTURA_FINAL = 480, 360
FALHAS_SEGUIDAS_MAX = 3


def achar_programa(indicado):
    if indicado:
        return Path(indicado)
    for nome in ("sd-cli.exe", "sd.exe", "sd-cli", "sd"):
        achados = sorted((AQUI / "sd").rglob(nome))
        if achados:
            return achados[0]
    sys.exit("Não achei o programa. Extraia o zip do stable-diffusion.cpp em scripts/gerar-imagens/sd (veja o LEIA-ME).")


def achar_modelo(pasta, *padroes):
    for padrao in padroes:
        achados = sorted(pasta.glob(padrao))
        if achados:
            return achados[0]
    sys.exit(f"Faltou um arquivo em {pasta}: {' ou '.join(padroes)} (veja o LEIA-ME).")


def flags_opcionais(programa):
    """Usa só as opções de memória que esta versão do programa realmente tem."""
    r = subprocess.run([str(programa), "--help"], capture_output=True, text=True, errors="replace")
    ajuda = r.stdout + r.stderr
    return [f for f in ("--clip-on-cpu", "--vae-on-cpu", "--vae-tiling") if f in ajuda]


def base_flux(modelos):
    return [
        "--diffusion-model", str(achar_modelo(modelos, "flux1-schnell-*.gguf")),
        "--vae", str(achar_modelo(modelos, "ae.safetensors", "ae.sft")),
        "--clip_l", str(achar_modelo(modelos, "clip_l*.safetensors")),
        "--t5xxl", str(achar_modelo(modelos, "t5xxl*.safetensors", "t5xxl*.gguf")),
        "--cfg-scale", "1.0", "--sampling-method", "euler", "--steps", "4",
        "-W", "768", "-H", "576",
    ]


def base_sd15(modelos, negativo):
    return [
        "-m", str(achar_modelo(modelos, "sd15*.safetensors", "sd15*.gguf", "sd15*.ckpt")),
        "-n", negativo,
        "--cfg-scale", "7", "--sampling-method", "euler_a", "--steps", "25",
        "-W", "512", "-H", "384",
    ]


def gerar_uma(programa, base, extras, item, destino):
    with tempfile.TemporaryDirectory() as pasta:
        png = Path(pasta) / "saida.png"
        comando = [str(programa), *base, *extras, "-p", item["prompt"], "-s", str(1000 + item["numero"]), "-o", str(png)]
        r = subprocess.run(comando, capture_output=True, text=True, errors="replace")
        if r.returncode != 0 or not png.exists():
            print((r.stdout + r.stderr)[-1500:])
            return False
        temporario = destino.with_suffix(".tmp.webp")
        Image.open(png).convert("RGB").resize((LARGURA_FINAL, ALTURA_FINAL), Image.LANCZOS).save(temporario, quality=82, method=6)
        temporario.replace(destino)
        return True


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--perfil", choices=["flux", "sd15"], default="flux")
    p.add_argument("--teste", action="store_true")
    p.add_argument("--limite", type=int, default=0, help="para depois de gerar esta quantidade")
    p.add_argument("--sd", default="", help="caminho do programa, se não estiver na pasta sd")
    a = p.parse_args()

    dados = json.loads((AQUI / "prompts.json").read_text(encoding="utf-8"))
    programa = achar_programa(a.sd)
    modelos = AQUI / "modelos"
    base = base_flux(modelos) if a.perfil == "flux" else base_sd15(modelos, dados["negativo"])
    extras = flags_opcionais(programa)

    if a.teste:
        por_id = {e["id"]: e for e in dados["exercicios"]}
        fila, saida, prefixo = [por_id[i] for i in TESTE], AQUI / "teste", f"{a.perfil}-"
    else:
        fila, saida, prefixo = dados["exercicios"], RAIZ / "public" / "previa", ""
    saida.mkdir(parents=True, exist_ok=True)

    pendentes = [e for e in fila if not (saida / f"{prefixo}{e['id']}.webp").exists()]
    if a.limite:
        pendentes = pendentes[: a.limite]
    print(f"Faltam {len(pendentes)} de {len(fila)} imagens. Opções de memória: {' '.join(extras) or 'nenhuma'}")

    falhas, tempos = 0, []
    for n, item in enumerate(pendentes, 1):
        inicio = time.time()
        if gerar_uma(programa, base, extras, item, saida / f"{prefixo}{item['id']}.webp"):
            falhas = 0
            tempos.append(time.time() - inicio)
            media = sum(tempos) / len(tempos)
            restante = media * (len(pendentes) - n) / 3600
            print(f"[{n}/{len(pendentes)}] {item['id']} em {tempos[-1]:.0f}s. Tempo restante: {restante:.1f} h", flush=True)
        else:
            falhas += 1
            print(f"[{n}/{len(pendentes)}] {item['id']} FALHOU", flush=True)
            if falhas >= FALHAS_SEGUIDAS_MAX:
                sys.exit(f"Parei depois de {falhas} falhas seguidas. Mande a mensagem de erro acima.")
    erros = len(pendentes) - len(tempos)
    print(f"Terminou, com {erros} falha(s). Rode de novo para refazer as que falharam." if erros else "Terminou.")


if __name__ == "__main__":
    main()
