import React from 'react'
import Firebase from './Firebase.js'

class InputText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: this.props.index,
      placeholder: this.props.placeholder,
      name: this.props.name,
      className: this.props.className
    }
  }
  update(e) {
    this.setState({ value: e.target.value })
  }

  keydown(e) {
    if (e.keyCode === 13) {
      alert('送信しました')
      Firebase.database()
        .ref('/')
        .push({ text: e.target.value })
      this.setState({ value: '' })
    }
  }

  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        type="text"
        key={this.props.index}
        value={this.state.value}
        onChange={e => this.update(e)}
        onBlur={e => this.update(e)}
        onKeyDown={e => this.keydown(e)}
        className={this.props.className}
      />
    )
  }
}
export default InputText
