import React from 'react'
import { connect } from 'react-redux'
import { FORM_DATA } from '../../../../data/form'

const FormResult = ({ data }) => {
  const result = Object.values(data)
  return (
    <div
      style={{
        textAlign: 'left',
        padding: '20px'
      }}
    >
      {FORM_DATA.questions.map((q, i) => (
        <div key={i}>
          <h3>{q.prompt}</h3>
          <div
            style={{
              overflow: 'auto',
              height: '50px'
            }}
          >
            Answer: {result[i].value}
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.form.data
})

export default connect(mapStateToProps)(FormResult)
