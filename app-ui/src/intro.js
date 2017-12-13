import React from 'react';
import logo from './logo.svg';
import {client} from './Connection.js';
import UsersView from './usersView.js';
import { ApolloClient } from 'apollo-client';
import {graphql, ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag';




export default class Intro extends React.Component  {
	 constructor(props) {
        super(props);
        this.state = {
            otherChecked: false,
            showUser: false
        };
    }

    handleShowU = (e) => {
    	this.setState({showUser: true});
    }

    render() {
        return (
        	<div>
	            <div> Welcome user {this.props.name}</div>
	            <button type="submit" onClick={this.handleShowA}>Show Articles</button>
	            {this.state.showUser && 
	            	<div> 
	            		<UsersView> </UsersView>
	            	</div>
	            }
	            <button type="submit" onClick={this.handleShowU}>Show Users</button>
	            <button type="submit" onClick={this.handleCreateU}>Create User</button>
            </div>
        );
    }
}