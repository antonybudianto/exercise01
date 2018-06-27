import React, { Component } from 'react'

import Header from './components/Header/Header'
import FormBody from './components/FormBody/FormBody'
import Footer from './components/Footer/Footer'
import { FORM_DATA } from '../../data/form'

class FormView extends Component {
  render() {
    return (
      <div>
        <Header title={FORM_DATA.title} />
        <FormBody questions={FORM_DATA.questions} />
        <Footer totalQuestions={FORM_DATA.questions.length} />
      </div>
    )
  }
}

export default FormView
