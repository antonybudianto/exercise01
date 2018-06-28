import React from 'react'
import { connect } from 'react-redux'

import './FormProgress.css'

const FormProgress = ({ step, maxStep }) => {
  return (
    <div className="FormProgress">
      <div
        className="FormProgress__Bar"
        style={{
          width: (step / maxStep) * 100 + '%'
        }}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  step: state.form.currentStep - 1
})

export default connect(mapStateToProps)(FormProgress)
