import React, { Component } from 'react'
import { connect } from 'react-redux'

import QuestionWrapper from '../../../../components/Question/QuestionWrapper'
import './FormBody.css'

class FormBody extends Component {
  render() {
    const { form } = this.props
    const question = this.props.questions[form.currentStep - 1]
    return (
      <div className="FormBody">
        <QuestionWrapper question={question} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  form: state.form
})

export default connect(mapStateToProps)(FormBody)
