import React, { Component } from 'react'
import './App.css'

import InputText from './components/InputText'
import DisplayTextList from './components/DisplayTextList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>励ましのメッセージを送ろう！</h1>
        <InputText />
        <h1>メッセージ一覧</h1>
        <DisplayTextList />
      </div>
    )
  }
}

export default App
