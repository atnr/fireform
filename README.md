# 事前準備

1. homebrew などで nvm を入れて Node.JS をインストールする（v8.12.0 で動作確認しています）
2. `brew install yarn` で Yarn をインストールする

# 環境構築手順

1. Firebase Console（ https://console.firebase.google.com/ ）でプロジェクトを作っておく
2. Firebase Console で Realtime Database のルールを以下の通りに設定する。
   　`{ "rules": { ".read": true, ".write": true } }`
3. 解凍したプロジェクトディレクトリターミナルで `yarn install` コマンドで必要な依存ファイルをインストールする
   （node_modules ディレクトリが作成されて必要なライブラリがインストールされます。）
4. `firebase login` コマンドを実行し Firebase にログインする
5. `firebase init -—project プロジェクトID`
   コマンドを実行し firebase プロジェクトとローカルのプロジェクトを紐づける
6. firebase.json の public（Firebase で公開されるディレクトリ）が build になっていることを確認する
7. src/components/Firebase.js の中に自分で用意したプロジェクトの API KEY などの情報を書き込む
8. `yarn build` を実行し React のプロジェクトをビルドする(build はビルドした React のファイルが書き出されるディレクトリ)
9. `firebase serve` コマンドでローカルサーバーを立て動作確認をする
   ( http://localhost:5005 などのローカルの URL がコマンド実行後に確認できるはず)
10. `firebase deploy --only hosting` 　コマンドで公開サーバーにアップロードする
11. デプロイに成功するとこのようなプログラムが公開される (サンプル: https://fireform-72e73.firebaseapp.com/ )
