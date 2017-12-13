/**
 * Created by ondrej on 13/12/2017.
 */
var { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User {
        name : String!
        email : String
        passw : String!
    }    

    type Mutation {
      createUser(name: String!): User
    }

    type Query {
        user: User
        loginUser(name: String!, passw: String!): String!
        users: [User]!
    }
`);