import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gifloader from './Gifloader';
import TitleComponent from './TitleComponent'
class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleComponent/>
        <Gifloader/>
      </div>
    );
  }
}


export default App;
