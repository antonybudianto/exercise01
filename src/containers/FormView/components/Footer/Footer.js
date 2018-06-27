import React, { Component } from 'react'
import { connect } from 'react-redux'

import { goToNext, goToPrev } from '../../../../reducers/form'

class Footer extends Component {
  render() {
    const { form } = this.props
    let isSuccess = form.successData[form.currentStep - 1]
    isSuccess = isSuccess === undefined ? false : isSuccess
    const disablePrev = form.currentStep === 1
    return (
      <footer
        className="App-footer"
        style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <button disabled={disablePrev} onClick={this.props.goToPrev}>
          Prev
        </button>
        <button disabled={!isSuccess} onClick={this.props.goToNext}>
          Next
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
)(Footer)
