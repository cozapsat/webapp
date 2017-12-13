var express = require('express');
var graphqlHTTP = require('express-graphql');
var schema = require('./Schema.js');
var cors = require('cors');
var User, {usersData} = require("./User.js");

var root = {
    createUser: ({name}) => {
        return usersData.push(new User(name, "init").getObject())
    },

    loginUser:  ({name, passw}) => {
        for(var i = 0; i < usersData.length; i++)
        {
            var u = usersData[i];
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
        return usersData;
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