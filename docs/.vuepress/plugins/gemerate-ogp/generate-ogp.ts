import fs from 'node:fs'
import path from 'node:path';
import sharp from 'sharp'
import { App } from 'vuepress'
import Piscina from 'piscina';

export const ogpGeneratorPlugin = () => ({
  name: 'ogp-generator',
  async onGenerated(app: App) {
    const pages = app.pages
    const outDir = app.dir.dest("ogp")
    fs.mkdirSync(outDir, { recursive: true })

    // satoriを用いたSVG画像生成時間の最適化のため
    const pool = new Piscina({
      filename: path.resolve('docs/.vuepress/plugins/gemerate-ogp/worker.js'),
      maxThreads: 2 // CPUコア数に合わせて調整
    });

    await Promise.all(pages.map(async (page) => {
      const title = page.title || 'ようこそ Nostr へ！'
      const svg = await pool.run({ title });
      const jpg = await sharp(Buffer.from(svg)).jpeg().toBuffer()
      const outPuth = `${outDir}/${page.slug || 'no-title'}.jpg`
      fs.writeFileSync(outPuth, jpg);
    }));
  },
})
