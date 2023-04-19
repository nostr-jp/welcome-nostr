# お気に入りのクライアントを探そう

コミュニティによって多くのクライアントが作成されています。具体的な一覧は次の記事に譲ることにするので、お気に入りのクライアントを見つけてみてください:

- [クライアント - Nostr Scrapbox](https://scrapbox.io/nostr/%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88)
- [Web Clients - nostr-jp/awesome-nostr-japan](https://github.com/nostr-jp/awesome-nostr-japan#web-clients)
- [Clients - aljazceru/awesome-nostr](https://github.com/aljazceru/awesome-nostr#clients)

さて、どのクライアントを使うにしても、あなたが新しいクライアントを使う際にはログインの方法について熟知しておく必要があります。クライアントにログインする方法は基本的に「公開鍵でログイン」「秘密鍵でログイン」「NIP-07 認証でログイン」の 3 通りです。この章ではこれらについて説明します。

_結論だけ先に述べると「秘密鍵でログイン」すべきではありません。_

## 公開鍵 (npub) でログイン

クライアントにあなたの公開鍵 (`npub1...`) を教えてログインする方法です。この方法でログインした場合、ダイレクトメッセージを除くすべての情報の読み取りだけが可能です。

ユーザの公開鍵はすべてのユーザに開かれた情報であることを思い出してください。公開鍵でログインできるサービスには他人の公開鍵でログインすることもできますし、逆に他人があなたの公開鍵でログインすることもできます。これは少し奇妙に思えるかもしれませんが、Nostr の上に置かれている情報は (ダイレクトメッセージ以外は) すべてオープンな情報なのです。

## 秘密鍵 (nsec) でログイン

クライアントにあなたの秘密鍵 (`nsec1...`) を教えてログインする方法です。この方法でログインした場合、クライアントが提供するすべての機能にアクセスできます。……が、基本的には推奨されません。

[絶対に誰にも秘密鍵を漏らしてはいけない](faq/nsec-is-confidential.md)といった話を覚えていますか？「誰にも」というのは「クライアントの開発者にも」です。もしクライアントの開発者に悪意があった場合、あるいは悪意がなくてもセキュリティ上の不具合があった場合、あなたの秘密鍵がクライアントを通じて外に漏れ出してしまうかもしれません。

あなたが Web クライアント (ブラウザで動作するクライアント) を使おうとしている場合にはより安全なログイン方法があります。それが次で説明する「NIP-07 認証でログイン」です。(スマートフォンアプリを使おうとしている場合には、残念ながら秘密鍵でログインするしかありません。今のところは。)

## NIP-07 認証でログイン

クライアントに秘密鍵を教える代わりに、NIP-07 対応のブラウザ拡張機能をインストールしそれに秘密鍵を教えることで間接的にログインする方法です。この方法でログインした場合も、秘密鍵で直接ログインした場合と同様に、クライアントが提供するすべての機能にアクセスすることができます。

ソースコードが公開されていて _信頼できる_ (重要) NIP-07 対応のブラウザ拡張機能を選ぶことで、秘密鍵漏洩のリスクを大きく下げることができます。

- [nos2x](https://chrome.google.com/webstore/detail/nos2x/kpgefcfmnafjgpblomihpgmejjdanjjp)
- [Alby](https://getalby.com/)

……などがよく知られ、広く使われている拡張機能です。

https://scrapbox.io/nostr/NIP-07 により詳しいリストがあります。

## おまけ: hex って何？

クライアントがログイン時に `npub` や `nsec` ではなく `hex` 形式の鍵を要求してくることがあります。これは `hex` は `npub` や `nsec` をより機械に取って読み取りやすい形に直したものです。[無限ツールズ](https://mugen-tools.com/tools/nostrkey.php)などで相互に変換できます。