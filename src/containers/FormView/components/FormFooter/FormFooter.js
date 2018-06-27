import React, { Component } from 'react'
import { connect } from 'react-redux'

import { goToNext, goToPrev } from '../../../../reducers/form'
import './FormFooter.css'

class FormFooter extends Component {
  render() {
    const { form, totalQuestions } = this.props

    if (form.currentStep - 1 === totalQuestions) {
      return <div>You've submitted the form, thank you!</div>
    }

    let questionData = form.data[form.currentStep - 1] || {}
    let isValid = questionData.valid === undefined ? false : questionData.valid
    const disablePrev = form.currentStep === 1
    return (
      <footer
        className="FormFooter"
        style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <button
          className="FormFooter__Btn"
          disabled={disablePrev}
          onClick={this.props.goToPrev}
        >
          {'<'} Prev
        </button>
        <button
          className="FormFooter__Btn"
          disabled={!isValid}
          onClick={this.props.goToNext}
        >
          {form.currentStep === totalQuestions ? 'Submit' : 'Next >'}
        </button>
      </footer>
    )
  }
}

const mapStateToProps = state => ({
  form: state.form
})

const mapDispatchToProps = {
  goToNext,
  goToPrev
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormFooter)
