import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World2</h1>
        </header>
        <span>User: </span>
        <input type="text" name="title" />
      </div>
    );
  }
}

export default App;
