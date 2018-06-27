import React from 'react'
import { connect } from 'react-redux'

const Footer = () => (
  <footer
    className="App-footer"
    style={{
      display: 'flex',
      justifyContent: 'space-around'
    }}
  >
    <button>Prev</button>
    <button>Next</button>
  </footer>
)

const mapStateToProps = state => ({
  form: state.form
})

export default connect(mapStateToProps)(Footer)
