import React, { Component } from 'react'

function validateField(value, question) {
  if (question.is_required) {
    return value.length !== 0
  }
  return true
}

class CheckboxQuestion extends Component {
  constructor(props) {
    super(props)

    this.handleCheck = this.handleCheck.bind(this)
  }

  componentDidMount() {
    const { value, question } = this.props
    const valid = validateField(value, question)
    if (valid) {
      this.props.onChange({ valid, value })
    }
  }

  handleCheck(e, opt) {
    const { value, question } = this.props
    let updatedValue = { ...value }
    updatedValue[opt] = e.target.checked
    const valid = validateField(updatedValue, question)
    this.props.onChange({ valid, value: updatedValue })
  }

  render() {
    const { question, value } = this.props
    return (
      <div>
        {question.options.map((opt, i) => (
          <div
            key={i}
            style={{
              width: '30%',
              padding: '5px',
              margin: 'auto',
              textAlign: 'left'
            }}
          >
            <label htmlFor={opt}>
              <input
                onChange={e => this.handleCheck(e, opt)}
                checked={value[opt] || false}
                type="checkbox"
                name={opt}
                id={opt}
              />{' '}
              {opt}
            </label>
          </div>
        ))}
      </div>
    )
  }
}

export default CheckboxQuestion
