import React, { Component } from 'react'
import { connect } from 'react-redux'

import { saveInput } from '../../../../reducers/form'
import QuestionWrapper from '../../../../components/Question/QuestionWrapper'
import './FormBody.css'

class FormBody extends Component {
  handleChange = data => {
    this.props.saveInput(data)
  }

  render() {
    const { form } = this.props
    const question = this.props.questions[form.currentStep - 1]
    return (
      <div className="FormBody">
        <QuestionWrapper onChange={this.handleChange} question={question} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  form: state.form
})

const mapDispatchToProps = {
  saveInput
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormBody)
