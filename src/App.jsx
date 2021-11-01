import React, { Component } from 'react';
import NavComponent from './components/NavComponent';
import JumbotronComponent from './components/JumbotronComponent';




class App extends Component {
  render() {
    return (
      <div className="">
        <NavComponent/>
        <JumbotronComponent />
      </div>
    )
  }
}

export default App
