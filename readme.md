# Welcome to Nostr

ようこそ Nostr へ！

このサイトはとりあえず Nostr にアカウントを作ったものの、次の一歩がわからない人のための案内所です。このサイトが提供するのは以下のような情報です:

- SNS としての Nostr を歩くために必要な最低限の知識
- Nostr に備わっている、一般的な SNS としては珍しい種類の機能に関する簡単な導入
- Nostr を初めた直後に遭遇するかもしれないいくつかの現象に対するトラブルシューティング
- Nostr に関してユーザが抱くかもしれないささやかな疑問に対する答え
- 技術的な詳細に踏み込まない範囲での Nostr の仕組み

逆に、以下のような情報は取り扱いません:

- Nostr のアカウントの作り方
- プロトコルとしての Nostr に関する技術的な話題
  - https://scrapbox.io/nostr/NIP が代わりにあなたの助けになってくれるでしょう

## はじめに

本題に進む前に、Nostr という SNS を歩くために **すべての** 人が知っておかなければならないのは次の 3 点です:

- アカウントを作った際に覚えておくように言われたであろう、`nsec1` から始まる長い文字列 (秘密鍵; Secret Key; nsec) は **絶対に** **誰にも** 教えてはいけません。また、忘れてもいけません。
  - `npub1` から始まる長い文字列 (公開鍵; Public Key; npub) は誰に教えても問題ありません。
  - 参考: [なぜ秘密鍵を漏らしてはいけないの？](./faq.md#nsec-is-confidential)
- Nostr 上での投稿は原則として消すことができません。
- SNS としての Nostr はその仕組み上大量の通信を行う傾向にあります。もしあなたがモバイル回線で Nostr を歩こうとしている場合には心に留めておいてください。

以上のことだけ知っておけばひとまずは十分です。これであなたは自力で Nostr の世界を冒険することもできるでしょう。

しかし、Nostr はあなたが今までに経験してきた SNS とは少し違った姿をしていて、それに戸惑うこともあるかもしれません。そうした人は、またはそれに備えたいと思う人は、以下の目次から先に進むといいでしょう。順番に読む必要も、すべてを読む必要もありません。興味のあるものだけを読んで、あとは実際に Nostr に触れて確かめてみてください。

## 目次

### チュートリアル

- [プロフィール画像を設定しよう](./set-profile-image.md)
- [タイムラインを作ろう](./make-your-timeline.md)
- [お気に入りのクライアントを探そう](./explore-client.md)
- ~~認証マーク？をつけてみよう~~ (編集中)
  - → [NIP-05 認証バッジの付け方](https://scrapbox.io/nostr/NIP-05%E8%AA%8D%E8%A8%BC%E3%83%90%E3%83%83%E3%82%B8%E3%81%AE%E4%BB%98%E3%81%91%E6%96%B9) にも説明があります
- ~~ZAP⚡ を体験してみよう~~ (編集中)
  - → [ZAP](https://scrapbox.io/nostr/Zap) にも説明があります

### 基礎知識

- [公開鍵・秘密鍵って何？](./keys.md)
- [リレーって何？](./relay.md)

### 補遺

- [トラブルシューティング](./trouble-shooting.md)
  - [ユーザのアイコンと名前が見えないか、古いままである / 自分のアイコンと名前が他のユーザから見えないか、古いままである](./trouble-shooting.md#cannot-see-profile)
  - [フォローが勝手に外れてしまった](./trouble-shooting.md#lost-following)
- [FAQ](./faq.md)
  - [なぜ秘密鍵を漏らしてはいけないの？](./faq.md#nsec-is-confidential)
  - [投稿が消せないって本当？](./faq.md#cannot-i-delete-post)
  - [Kind ってなに？](./faq.md#what-is-kind)

## Nostr についてもっと詳しく知りたい

以下の資料が参考になるかもしれません

- [Nostr Scrapbox](https://scrapbox.io/nostr/)
  - 有志日本ユーザによって編集されている Nostr なんでも情報ノート。個人の日記から最新仕様の考察までなんでもござれ。
  - 特に、はじめましての人は[こちら](https://scrapbox.io/nostr/%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AENostr%E3%80%90%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AE%E6%96%B9%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%E3%80%91)
- [Nostr プロトコル(damus)を触ってみた - Qiita](https://qiita.com/gpsnmeajp/items/77eee9535fb1a092e286)
  - Nostr の技術的な概要について簡潔にまとまっています
- Nostr 勉強会: Nostr のはじめ方からサービス開発方法まで幅広く扱っている勉強会。動画とスライドが残っています。
  - #0: https://428lab.connpass.com/event/275748/
  - #1: https://428lab.connpass.com/event/276333/
  - #2: https://428lab.connpass.com/event/278107/
- [nostr-jp/awesome-nostr-japan](https://github.com/nostr-jp/awesome-nostr-japan)
  - 日本ユーザによって作られた Nostr 関連ツール/サービスの一覧
