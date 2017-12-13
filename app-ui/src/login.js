import React from 'react';
import logo from './logo.svg';
import Intro from './intro.js';
import {client} from './Connection.js';
import { ApolloClient } from 'apollo-client';
import {graphql, ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag';

const loginQ = gql`
    query (\$name: String!, \$passw: String!) {
      loginUser(name: \$name, passw: \$passw)
    }
`;

export default class Login extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            otherChecked: false,
            name : "",
            passw : "",
            logged : false,
            session : ""
        };
    }

    updatePassw = (evt) => {
        this.setState({
            passw: evt.target.value
        });
    }

    updateName = (evt) => {
        let target = evt.target;
        this.setState({
            name: target.value
        });
    }

    onClick = (e) => {
        client.query({
            query: loginQ,
            variables: {name: this.state.name, passw: this.state.passw }
        }).then(
            (obj, props) => {
                if(obj.data.loginUser != "")
                {
                    this.setState({
                        logged: true,
                        session: obj.data.loginUser
                    });
                }
                else
                {
                    this.setState({
                        logged: false,
                        session: "",
                        name: "",
                        passw: ""
                    });
                }
            }
        );
    }

    render() {
        if(!this.state.logged)
        {
            return (
                <div>
                    <div>
                        <label> User: </label>
                        <input field="name" id="name"  value={this.state.name} onChange={this.updateName}/>
                    </div>
                    <div>
                        <label> Password: </label>
                        <input type="password" field="passw" id="passw"  value={this.state.passw} onChange={this.updatePassw}/>
                    </div>
                    <button type="submit" onClick={this.onClick}>Submit</button>
                </div>
            );
        }
        return (
            <Intro name={this.state.name}> </Intro>
        );
    }
}