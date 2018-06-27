import React, { Component } from 'react'
import { connect } from 'react-redux'

import { goToNext, goToPrev } from '../../../../reducers/form'

class Footer extends Component {
  render() {
    return (
      <footer
        className="App-footer"
        style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <button onClick={this.props.goToPrev}>Prev</button>
        <button onClick={this.props.goToNext}>Next</button>
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
