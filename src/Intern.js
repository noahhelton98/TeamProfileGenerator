const Employee = require('./Employee');
var role = 'Intern';

class Intern extends Employee {
    constructor(name, email, id, school){
        super(name, email, id)
        this.school = school;
    }

    getSchool(){
        return this.school
    }

}

module.exports = Intern;
