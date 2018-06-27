import React, { Component } from 'react'

import FormBody from './components/FormBody/FormBody'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FormBody />
        <Footer />
      </div>
    )
  }
}

export default App
