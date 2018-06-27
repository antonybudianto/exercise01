import React, { Component } from 'react'

class TextQuestion extends Component {
  handleChange = e => {
    const value = e.target.value
    const { question } = this.props
    let valid = false
    if (!question.is_required && value === '') {
      valid = true
    } else if (value.length >= question.min_char_length) {
      valid = true
    }
    this.props.onChange({ valid, value })
  }

  render() {
    const { question } = this.props
    return (
      <div>
        <h3>{question.prompt}</h3>
        <div>{question.is_required ? '*Required!' : '(optional)'}</div>
        <div>
          <textarea
            placeholder="Type in your message here"
            onChange={this.handleChange}
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
