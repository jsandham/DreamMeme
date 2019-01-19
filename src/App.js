import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gifloader from './Gifloader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Gifloader/>
        <header className="App-link">
        <img src={ require('./god.jpg') } />
        </header>
      </div>
    );
  }
}

export default App;
