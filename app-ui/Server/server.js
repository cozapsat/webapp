var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors');
var User = require("./User.js")


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
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


var users = [{
    name: "test",
    passw: "ahoj"
},
{
    name: "admin",
    passw: "admin"
}

];

// The root provides a resolver function for each API endpoint
var root = {
    createUser: ({name}) => {
        return users.push(new User(name, "init").getObject())
    },

    loginUser:  ({name, passw}) => {
        for(var i = 0; i < users.length; i++)
        {
            var u = users[i];
            console.log(name, passw)
            if(u.name == name && u.passw == passw)
            {
                return "session1";
            }
        }
        return "";
    },

    user: (obj, args, context) => {
        return {
            name: "user",
            email: "email"
        };
    },

    users: (obj, args, context) => {
        return users;
    }
};

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/graphql', cors(), graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');