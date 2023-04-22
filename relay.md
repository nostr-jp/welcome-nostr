# リレーって何？

リレーはあなたと他のユーザを繋ぐ糸電話の中継所のようなものです。あなたが Nostr に何かを投稿したり、誰かの投稿にリアクションしたり、自分のプロフィールを更新したり……とにかく、あなたが Nostr で何か行動を起こしたとき、あなたのクライアントは設定されているすべてのリレー/糸電話に向かって、あなたの行動を発信します。糸電話の向こう側にたまたま誰か他のユーザがいれば、そのユーザはあなたの取った行動を認識することができます。……なお、このとき糸電話を通過する情報のことを **イベント** (event) と言います。

逆に、あなたが誰かの投稿を見たり、誰かからリアクションされたことを知ったり、誰かの最新のプロフィールを閲覧したりするためには、あなたのクライアントがあなたの代わりにリレー/糸電話に耳を傾け続け、偶然そのイベントを聞き取る必要があります。……原則としては。幸いにしてほとんどのリレーは過去にそこを通ったイベントをしばらくの間 (少なくとも数カ月程度は) 覚えておいてくれますから、あなたは友達からの返信を聞き逃すまいとずっと Nostr に齧りつく必要はありません。