import * as firebase from 'firebase'

const config = {
  apiKey: 'APIキーを入力',
  authDomain: 'xxxxxxx.firebaseapp.com',
  databaseURL: 'https://xxxxxx.firebaseio.com',
  projectId: 'プロジェクトIDを入力',
  storageBucket: 'プロジェクトID.appspot.com',
  messagingSenderId: 'xxxxxxxxxxxxx'
}

const Firebase = firebase.initializeApp(config)
export default Firebase
