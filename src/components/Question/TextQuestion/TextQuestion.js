import React, { Component } from 'react'

class TextQuestion extends Component {
  render() {
    const { question, required } = this.props
    return (
      <div>
        <h3>{question.prompt}</h3>
        <div>{required ? '*Required!' : '(optional)'}</div>
        <div>
          <textarea
            onChange={this.props.onChange}
            name="textQuestion"
            cols="30"
            rows="10"
          />
        </div>
      </div>
    )
  }
}

export default TextQuestion
