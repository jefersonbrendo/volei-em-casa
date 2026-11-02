// Gera o guia em PDF: rode o servidor (npm run dev) e depois `node scripts/gerar-pdf.cjs [saida.pdf]`.
const { chromium } = require('playwright')
;(async () => {
  const saida = process.argv[2] || 'guia-volei-de-areia-em-casa.pdf'
  const url = process.env.URL || 'http://localhost:5181/pdf.html'
  const b = await chromium.launch()
  const p = await b.newPage()
  p.on('pageerror', (e) => console.log('ERRO', e.message))
  await p.goto(url, { waitUntil: 'networkidle' })
  await p.waitForSelector('body[data-pronto="1"]')
  await p.evaluate(() => document.fonts.ready)
  await p.pdf({
    path: saida, format: 'A4', printBackground: true, preferCSSPageSize: true,
    displayHeaderFooter: true, headerTemplate: '<span></span>',
    footerTemplate: '<div style="width:100%;font-size:7pt;color:#94a3b8;font-family:Inter,sans-serif;padding:0 12mm;display:flex;justify-content:space-between"><span>Vôlei de Areia em Casa · Guia em PDF</span><span class="pageNumber"></span></div>',
  })
  await b.close()
  console.log('PDF gerado:', saida)
})()
