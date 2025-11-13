import fs from 'fs'
import satori from 'satori';
import { html } from "satori-html";

// フォントをキャッシュ
let fontData = null;
// 画像をキャッシュ
let backgroundImage = null

async function getFontData() {
  if (!fontData) {
    fontData = fs.readFileSync("docs/.vuepress/plugins/gemerate-ogp/font/Zen_Kaku_Gothic_New/ZenKakuGothicNew-Bold.ttf");
  }

  return fontData;
}

async function getBackGroundImage() {
  if (!backgroundImage) {
    // 背景画像ファイルの読み込み
    const imageBuffer = fs.readFileSync("docs/.vuepress/plugins/gemerate-ogp/ogp-background.jpg");
    const imageBase64 = Buffer.from(imageBuffer).toString("base64");
    backgroundImage = `data:image/jpeg;base64,${imageBase64}`;
  }

  return backgroundImage;
}

export default async function renderOGP({ title }) {
  const fontData = await getFontData();
  const imageData = await getBackGroundImage();

  // satoriでSVGを生成
  const vnode = html(`
    <div style="display:flex; justify-content:center; align-items:center; background-image: url(${imageData}); width:1200px; height:630px" >
    <div style="max-width: 780px; width: auto; height:280;font-size:64px; display:flex;">${title}</div>
    </div>
    `);

  return await satori(
    vnode,
    {
      width: 1200, height: 630,
      fonts: [
        {
          name: 'Zen Kaku Gothic New',
          data: fontData,
          style: 'normal',
        },
      ],
      embedFont: true,
    }
  );
}
