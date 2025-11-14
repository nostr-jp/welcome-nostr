# Generate OGP

ページごとのOGP画像を生成するプラグインです

## 機能

- ページごとにタイトルを読み込みます。
- 背景画像（`ogp-background.jpg`）とタイトルを組み合わせたHTMLをSVGに変換します。
- SVGをjpeg画像に変換し`dist/ogp/<slug>.jpg`としてファイル出力します。

## デザインの修正

背景画像を入れ替えたい場合は`ogp-background.jpg`を修正してください。
タイトル文字のレイアウトの調整は`worker.js`内のhtmlテンプレートのstyleを直接修正することができます。
satoriは一般的なCSSに対応していますが完全なCSS実装ではないことに注意してください。

FYI. https://github.com/vercel/satori?tab=readme-ov-file#css

## 注意点

- slugのみをファイル名として使用する仕様のためページのslugを重複させないようにしてください。
- 背景画像のファイルサイズが画像処理時間に直結するため必要最小限のサイズの画像を使用する必要があります。

## font

OGP画像の作成に必要なフォントファイルを設置しています

[Zen Kaku Gothic New](https://github.com/googlefonts/zen-kakugothic)を利用させていただいています。

**注意**

ライセンス違反となるためライセンスファイル(OFL.txt)を削除しないでください。
