import React from 'react'
import DisplayText from './DisplayText'
import Firebase from './Firebase'

class DisplayTextList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    this.watch() //初回読み込み
  }

  componentDidUpdate(prevProps) {
    if (this.props.messages !== prevProps.messages) {
      this.watch() //以後propsに変更があるたびにstateを更新
    }
  }

  watch() {
    Firebase.database()
      .ref('/')
      .on('child_added', e => {
        const message = e.val()
        let msgs = this.state.messages
        msgs.push({ text: message.text })
        return this.setState({ messages: msgs })
      })
  }

  render() {
    return (
      <>
        {this.state.messages.map((m, i) => {
          return <DisplayText key={i} text={m.text} />
        })}
      </>
    )
  }
}
export default DisplayTextList
