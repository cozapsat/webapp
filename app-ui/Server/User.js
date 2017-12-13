/**
 * Created by ondrej on 13/12/2017.
 */

module.exports.usersData = [{
    name: "test",
    passw: "ahoj"
    },
    {
        name: "admin",
        passw: "admin"
    }

];


class User  {
    constructor(name, passw, email)
    {
        this.name = name;
        this.passw = passw;
        this.email = email || "email";
    }

    getObject()
    {
        return {name: this.name, passw : this.passw, email: this.email };
    }
}