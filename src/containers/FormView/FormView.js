import React, { Component } from 'react'

import FormHeader from './components/FormHeader/FormHeader'
import FormBody from './components/FormBody/FormBody'
import FormFooter from './components/FormFooter/FormFooter'
import { FORM_DATA } from '../../data/form'

class FormView extends Component {
  render() {
    return (
      <div>
        <FormHeader title={FORM_DATA.title} />
        <FormBody questions={FORM_DATA.questions} />
        <FormFooter totalQuestions={FORM_DATA.questions.length} />
      </div>
    )
  }
}

export default FormView
