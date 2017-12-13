import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, Text } from 'react-form';
import gql from 'graphql-tag';
import Login from "./login.js";
import {graphql, ApolloProvider } from 'react-apollo'
import {client} from './Connection.js';

class App extends Component {

  constructor(props) {
      super(props);

//
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Hello World2</h1>
          </header>

         <Login asdf=""></Login>

        </div>
      </ApolloProvider>

    );
  }
}

export default App;
