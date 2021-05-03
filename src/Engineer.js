const Employee = require('./Employee');
var role = 'Engineer';

class Engineer extends Employee {
    constructor(name, email, id, github){
        super(name, email, id);
        this.github = github;
    }


    getGithub(){
        return this.github
    }
}

module.exports = Engineer;
