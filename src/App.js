import React, { Component } from 'react'

import FormBody from './components/FormBody/FormBody'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Form Title</h1>
        </header>
        <FormBody />
      </div>
    )
  }
}

export default App
