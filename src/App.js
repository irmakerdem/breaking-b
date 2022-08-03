import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  render() {
    return(
      <main className='App'>
        <h1>Breaking Bad</h1>
        <p></p>
      </main>
    )
  }
}

export default App;