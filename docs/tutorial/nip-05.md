# ドメイン認証(NIP-05)をしてみよう

[NIP-05](https://github.com/nostr-jp/nips-ja/blob/main/05.md)では、ドメインを用いた同一性証明を行うことが可能です。一部クライアントでは、認証に成功した場合に認証マークのようなものがつきます。

## 必要なファイルを作成する

::: warning 注意
NIP-05関連ファイルはドメイン直下(サブドメイン可)に配置する必要があります。

**OK**: ``https://<domain>/.well-known/nostr.json``

**NG**: ``https://<domain>/...route/.well-known/nostr.json``
:::

::: details GitHub Pagesを使用する場合
[テンプレートリポジトリ](https://github.com/akazdayo/nostr-nip05-template)を利用すると楽です。

NIP-05関連ファイルはドメイン直下に配置する必要があるため、リポジトリ名は`<GitHub-UserName>.github.io`に設定する必要があります。
:::

### nostr.jsonの作成

ほとんどのフロントエンドフレームワークでは、`public/`に`.well-known/nostr.json`を配置することで`<DOMAIN>/.well-known/nostr.json`にアクセスできるようになるはずです。

`.well-known/nostr.json`:

```json
{
  "names": {
    "あなたの名前": "あなたの公開鍵(hex形式)"
  }
}
```

::: tip 名前の形式について
"あなたの名前" は a-z 0-9 - _ . の文字のみ使用可能で大文字小文字を区別しません。
:::

::: tip 公開鍵の形式について
Nostrの公開鍵には`npub1...`の形式(`bech32`)と`hex`形式の2種類があります。NIP-05では`hex`形式を使用します。

`npub1...`形式の公開鍵から`hex`に変換するには、[このページ](https://scrapbox.io/nostr/%E5%85%AC%E9%96%8B%E9%8D%B5%E2%87%9416%E9%80%B2%E6%95%B0%E8%A1%A8%E8%A8%98)を参照してください。
:::

::: tip 名前を省略表示したい
基本、クライアントでは`名前@ドメイン`の形式で表示されますが、名前の部分を省略することができます。

省略するには、`nostr.json`で名前を`_`に設定してください。
:::

### CORSの設定

Webサーバーで以下のヘッダーを返すように設定してください:

```
/.well-known/nostr.json
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Methods: GET
  Content-Type: application/json
```


## プロフィールに設定する

ファイルを作成したら、クライアントのプロフィール設定画面でNIP-05識別子を設定します。

設定する値は以下の形式です:

```
<名前>@<ドメイン>
```

## (任意) 複数のユーザーを設定する

1つのドメインで複数のユーザーを設定することも可能です:

```json
{
  "names": {
    "alice": "<pubkey>",
    "bob": "<pubkey>",
    "charlie": "<pubkey>"
  }
}
```

## (任意) リレーヒントを追加する

アカウントが存在するリレーを記述することができます。これはユーザーには表示されないことが多く、クライアントが内部的にアカウント情報を探すために使用されます。

`nostr.json`に`relays`フィールドを追加します:

```json
{
  "names": {
    "alice": "aaaaaaaaaa",
    "bob": "bbbbbbbbbb"
  },
  "relays": {
    "aaaaaaaaaa": [
      "wss://relay.damus.io",
      "wss://nos.lol"
    ],
    "bbbbbbbbbb": [
      "wss://yabu.me",
      "wss://relay.damus.io"
    ]
  }
}
```
