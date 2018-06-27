import React, { Component } from 'react'

import FormBody from './components/FormBody/FormBody'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { FORM_DATA } from './data/form'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={FORM_DATA.title} />
        <FormBody />
        <Footer />
      </div>
    )
  }
}

export default App
