import React from 'react';
import {client} from './Connection.js';
import { ApolloClient } from 'apollo-client';
import {graphql, ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag';


export default class CreateUser extends React.Component  {
	 constructor(props) {
        super(props);
        this.state = {
            otherChecked: false,
        };
    }

    render() {
        return (
            <div> Ahoj </div>    
        );
    }
}