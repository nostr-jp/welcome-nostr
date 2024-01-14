# ログイン拡張機能 (NIP-07)を使ってみよう

Nostrクライアントアプリを探していると、「拡張機能でログイン」や「Login with Extension」という表記やボタンを見かけることがあると思います。

これは、アプリに直接秘密鍵を入れる代わりに、秘密鍵の保存と取り扱いをブラウザ拡張機能(NIP-07)に集約することで、多種多様なクライアントアプリを安全に使えるようにする仕組みです。

アプリによっては、この拡張機能がないとそもそも利用できないこともあります。

よく知られている拡張機能には以下があります。

- [nos2x](https://chrome.google.com/webstore/detail/nos2x/kpgefcfmnafjgpblomihpgmejjdanjjp)
- [nos2x-fox](https://addons.mozilla.org/ja/firefox/addon/nos2x-fox/)
- [Alby](https://getalby.com/)
- [nostore](https://apps.apple.com/jp/app/nostore/id1666553677)

ここでは nos2x と Nostore の導入手順と使用方法についてステップバイステップで説明していきます。

+ Nostore  は iOS Safari 向けの拡張機能です。
+ nos2x (Firefox の場合は nos2x-fox) は PC 版 Microsoft Edge/Chrome/Firefox および Android 版 Firefox/Kiwi Browser 向けの拡張機能です。

## nos2x/nos2x-fox (PC/Android)

### 導入手順

+ Edge/Chrome/Kiwi Browserの場合: [nos2x](https://chromewebstore.google.com/detail/nos2x/kpgefcfmnafjgpblomihpgmejjdanjjp)
+ Firefoxの場合: [nos2x-fox](https://addons.mozilla.org/ja/firefox/addon/nos2x-fox/)

を開き、「インストール」ボタンをクリックします。  
以降の手順は、Microsoft Edgeを使用した場合を例示します。

![ストア画面](./images/nip-07/nos2x/01-store.webp)

これが出た場合は「許可」をクリックします。

![インストールダイアログ1](./images/nip-07/nos2x/02-install-dialog-1.webp)

「拡張機能の追加」をクリックします。

![インストールダイアログ2](./images/nip-07/nos2x/03-install-dialog-2.webp)

![インストール完了ダイアログ](./images/nip-07/nos2x/04-installed-dialog.webp)

正常にインストールされたら、拡張機能ボタン(パズルのピースのマーク)をクリックします。
nos2xの横の「・・・」をクリックし、「拡張機能のオプション」

![メニュー](./images/nip-07/nos2x/05-option-menu.webp)

**すでに秘密鍵を持っている人は、「private key:」の欄に入力してください。**  
もし今から新しいアカウントが欲しい場合は、「generate」ボタンをクリックします。

![設定画面](./images/nip-07/nos2x/06-settings.webp)

秘密鍵を入力、または新規作成したあと、「Save」ボタンがクリックできるようになります。  
必ずクリックしてください。

![設定保存ボタン](./images/nip-07/nos2x/07-settings-save-button.webp)

これで登録作業は完了です。

### 使い方

#### ログイン時

例えば[Rabbit](https://syusui-s.github.io/rabbit/)を開くとこのような表示が出ます。

![公開鍵読み出しダイアログ](./images/nip-07/nos2x/08-rabbit-dialog-read.webp)

「ログインのためにアプリケーションに公開鍵を渡してもよいか？」という通知で、

+ authorize forever (常に許可)
+ authorize just this (今回だけ許可)
+ reject forever (常に拒否)
+ reject (今回だけ拒否)

から選択します。

基本的に「authorize forever」(常に許可)で大丈夫です。

#### 投稿時

何かを投稿したりリアクションしようとしたときにも、以下のような表示が出ます。

![署名ダイアログ](./images/nip-07/nos2x/09-rabbit-dialog-sign.webp)

こちらは「あなたのアカウントで投稿(署名)してよいか？」という通知なので、

+ authorize forever (常に許可)
+ authorize kind 1 forever (短文投稿(kind 1)のみ常に許可)
+ authorize just this (今回だけ許可)
+ reject kind 1 forever (短文投稿(kind 1)のみ常に許可)
+ reject (今回だけ拒否)

から選択します。

基本的に「authorize forever」(常に許可)または、「authorize just this」(今回だけ許可)を選択します。

使い方は以上です。

## Nostore (iOS)

### 導入手順

[ここのアプリストアリンク](https://apps.apple.com/jp/app/nostore/id1666553677)または、App Storeを開いて「Nostore」で検索してください。

![ストア画面](./images/nip-07/nostore/01-store.webp)

インストールが終わったら、「設定」アプリを開きます。

![設定アイコン](./images/nip-07/nostore/02-settings-button.webp)

設定アプリ内の「Safari」をタップします。

![設定画面](./images/nip-07/nostore/03-settings-list-of-safari.webp)

「機能拡張」をタップします。

![Safari設定画面](./images/nip-07/nostore/04-safari-settings.webp)

「Nostore」をタップします。

![拡張機能の有効化画面](./images/nip-07/nostore/05-safari-extension-settings.webp)

「機能拡張を許可」をタップします。

![拡張機能の有効化画面(無効)](./images/nip-07/nostore/06-safari-extension-disable.webp)

これで有効化されました。

![拡張機能の有効化画面(有効)](./images/nip-07/nostore/07-safari-extension-enable.webp)

秘密鍵の設定は、利用時に行います。

### 使い方

#### ログイン時

例えば[Rabbit](https://syusui-s.github.io/rabbit/)を開くとこのような表示が出ます。
ブラウザのコンテキストメニュー「ぁあ」をタップします。

![Safari(Rabbit)の画面](./images/nip-07/nostore/08-rabbit.webp)

「Nostore」をタップします。

![ブラウザのコンテキストメニュー](./images/nip-07/nostore/09-rabbit-enable.webp)

確認メッセージが出ますので、好きな方を選択します。
おすすめは、「常に許可...」です。

![iOS拡張機能の確認1](./images/nip-07/nostore/10-enable-dialog-1.webp)

「常に許可...」を選択した場合、さらに確認メッセージが出ますので、好きな方を選択します。  
おすすめは、「このWebサイトで常に許可」です。

![iOS拡張機能の確認2](./images/nip-07/nostore/10-enable-dialog-2.webp)

ここまでの操作は、(選択肢によりますが)nostrを使いたいサイト1つごとに設定が必要です。

**初回利用時は、続いてアカウント(秘密鍵)の設定に入ります。**

Nostoreの設定画面が出るので「Settings」をタップします。

![Nostore設定画面](./images/nip-07/nostore/11-nostore-settings-1.webp)

新しいタブが開き、詳細設定画面になります。

**すでに秘密鍵を持っている人は、「Private Key:」の欄を消して自分の鍵を入力してください。**  
もし今から新しいアカウントが欲しい場合は、何もせずそのままタブを閉じます。

![Nostore詳細設定画面](./images/nip-07/nostore/12-nostore-details.webp)

秘密鍵を入力したあとは、「Save」ボタンがクリックできるようになります。  
必ずタップしてください。

**ここまでで初回設定は完了です**

タブを閉じるか戻ってください。

![Safariタブ](./images/nip-07/nostore/13-safari-tab.webp)

Webサイトの画面に戻ると

![Nostore公開鍵読み込みダイアログ](./images/nip-07/nostore/14-nostore-dialog-read.webp)

このような画面が出ます。(出ない場合は、サイトを開き直してください)。

「ログインのためにアプリケーションに公開鍵を渡してもよいか？」という通知で、
基本的に「Remember selection」(この選択を毎回使用する)をタップしてチェックを付けてから、「Allow」(許可)を選択します。

(チェックを付けない場合、何度も何度も出ることがあります。)

もしこのような画面になった場合は、「NIP-07 拡張機能でログイン」を再度タップしてから、許可を再度行います。

![Rabbit NIP-07画面](./images/nip-07/nostore/15-rabbit-nip-07.webp)

#### 投稿時
何かを投稿したりリアクションしようとしたときにも、以下のような表示が出ます。

![Nostore署名ダイアログ](./images/nip-07/nostore/16-nostore-dialog-sign.webp)

基本的に「Remember selection」(この選択を毎回使用する)をタップしてチェックを付けてから、「Allow」(許可)を選択します。

使い方は以上です。

