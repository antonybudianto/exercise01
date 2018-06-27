import React, { Component } from 'react'

function validateField(value, question) {
  let valid = false
  if (!question.is_required && value === '') {
    valid = true
  } else if (value.length >= question.min_char_length) {
    valid = true
  }
  return valid
}

class TextQuestion extends Component {
  componentDidMount() {
    const { value, question } = this.props
    const valid = validateField(value, question)
    if (valid) {
      this.props.onChange({ valid, value })
    }
  }

  handleChange = e => {
    const value = e.target.value
    const { question } = this.props
    const valid = validateField(value, question)
    this.props.onChange({ valid, value })
  }

  render() {
    const { value } = this.props
    return (
      <textarea
        style={{
          padding: '15px',
          borderRadius: '5px',
          border: '1px solid gray'
        }}
        placeholder="Type in your message here"
        onChange={this.handleChange}
        value={value}
        name="textQuestion"
        cols="30"
        rows="10"
      />
    )
  }
}

export default TextQuestion
