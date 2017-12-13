import React from 'react';
import logo from './logo.svg';
import {client} from './Connection.js';
import { ApolloClient } from 'apollo-client';
import {graphql, ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag';

const getUsersQ = gql`
    {
      users {
      	name
      }
    }
`;

export default class Intro extends React.Component  {
	 constructor(props) {
        super(props);
        this.state = {
            otherChecked: false,
            users: []
        };

        this.getUsers();
    }

    getUsers() {
    	client.query({
            query: getUsersQ
        }).then(
            (obj) => {
         	   this.setState({
         	   	users: obj.data.users
         	   });
         	   console.log(this.state.users);
        	}
        );
    }

    render() {
        return (
        	<div>
	         	   {this.state.users.map(function(object, i){
				        return <div>test </div>;
				   })}
            </div>
        );
    }
}