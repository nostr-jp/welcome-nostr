---
sidebarDepth: 1
---

# トラブルシューティング

## ユーザのアイコンと名前が見えないか、古いままである / 自分のアイコンと名前が他のユーザから見えないか、古いままである{#cannot-see-profile}

### 解決方法

1. まず互いが少なくともひとつのリレーを共有していることを確認してください
2. 確認できたならば、「プロフィール情報がない、または古い」側のユーザはプロフィール変更ページを開いて何も変更せずに保存してください
3. アイコン以外の問題は以上の手順で解消します。アイコンに関して異常が残る場合、アイコンの設定方法が一般的でない可能性があります。

### 背景

Nostr でやりとりされる情報は基本的に「◯◯ という公開鍵の持ち主が、△△ を ×× した」という形式をしています。例えば「`npub123...`という公開鍵の持ち主が、"おはよう"を投稿した」といった具合です。

注意すべきなのは、ここで `npub123...` の持ち主はなんという名前で、どんなアイコンなのかといったプロフィール情報は先の情報からでは一切分からないことです。プロフィール情報を知るためには「`npub123...` の持ち主が、プロフィールを ×× に設定した」という情報 (kind0 と呼ばれることもあります →[Kind ってなに？](/faq.md#what-is-kind)) を受け取る必要があるのです。そこで上記の手順 2 では kind0 を再送信しています。

## フォローが勝手に外れてしまった

### 解決方法

[NostrFlu](https://heguro.github.io/nostr-following-list-util/) を利用してください。

### 背景

執筆中です！