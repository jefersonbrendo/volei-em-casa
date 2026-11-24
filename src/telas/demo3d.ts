import { MOVIMENTOS } from '../animacao/movimentos'
import { registrarAnimacao } from '../animacao/registro'
import { h } from '../ui/dom'
import { topoSimples } from './comum'

/**
 * Tela interna #demo3d~nome: o movimento em 3D, grande, com botão para gravar um vídeo (WebM) para a landing.
 * O Three.js só é baixado ao abrir esta tela.
 */
export function telaDemo3d(param: string): DocumentFragment {
  const nomes = Object.keys(MOVIMENTOS)
  const nome = nomes.includes(param) ? param : 'toqueAltoBaixo'
  const frag = document.createDocumentFragment()
  frag.append(topoSimples('Prévia 3D', nome))

  const escolha = h('select', { cls: 'demo3d-select' }, ...nomes.map((n) => {
    const o = h('option', { value: n }, n) as HTMLOptionElement
    if (n === nome) o.selected = true
    return o
  }))
  escolha.addEventListener('change', () => { window.location.hash = `#demo3d~${(escolha as HTMLSelectElement).value}` })

  const palco = h('div', { cls: 'demo3d-palco' })
  const gravar = h('button', { cls: 'btn-feito' }, 'Gravar vídeo (3 repetições)')
  const aviso = h('p', { cls: 'bloco-sub' }, '')
  frag.append(h('div', { cls: 'page' }, escolha, palco, gravar, aviso))

  void import('../animacao/boneco3d').then(({ criarBoneco3D }) => {
    const a = criarBoneco3D(MOVIMENTOS[nome]!, { orbitar: true })
    palco.append(a.el)
    registrarAnimacao(a.destruir)

    gravar.addEventListener('click', () => {
      // grava em 1080×1080, quadro a quadro, para não depender da velocidade do aparelho
      const lado = 1080, fps = 30
      a.renderer.setPixelRatio(1)
      a.redimensionar(lado, lado)
      const fluxo = a.el.captureStream(0)
      const faixa = fluxo.getVideoTracks()[0] as CanvasCaptureMediaStreamTrack
      const tipo = MediaRecorder.isTypeSupported('video/webm;codecs=vp9') ? 'video/webm;codecs=vp9' : 'video/webm'
      const rec = new MediaRecorder(fluxo, { mimeType: tipo, videoBitsPerSecond: 8_000_000 })
      const partes: Blob[] = []
      rec.ondataavailable = (e) => { if (e.data.size) partes.push(e.data) }
      rec.onstop = () => {
        const url = URL.createObjectURL(new Blob(partes, { type: 'video/webm' }))
        const link = h('a', { href: url, download: `${nome}-3d.webm` }, 'Baixar vídeo') as HTMLAnchorElement
        aviso.replaceChildren(link)
        link.click()
      }
      const total = Math.round(a.duracao * 3 * fps)
      let i = 0
      rec.start()
      aviso.textContent = 'Gravando...'
      const passo = (): void => {
        if (i > total) { rec.stop(); return }
        const seg = i / fps
        a.desenharEm((seg / a.duracao) % 1, seg)
        faixa.requestFrame()
        i++
        setTimeout(passo, 1000 / fps)
      }
      passo()
    })
  })
  return frag
}
