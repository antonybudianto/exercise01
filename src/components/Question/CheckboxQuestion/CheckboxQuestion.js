import React, { Component } from 'react'

function validateField(value, question) {
  if (question.is_required) {
    return Object.values(value).some(v => v)
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

  handleCheck(e, i) {
    const { value, question } = this.props
    let updatedValue = { ...value }
    updatedValue[i] = e.target.checked
    if (!updatedValue[i]) {
      delete updatedValue[i]
    }
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
                onChange={e => this.handleCheck(e, i)}
                checked={value[i] || false}
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
