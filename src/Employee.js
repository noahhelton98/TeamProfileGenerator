//const { throws } = require("node:assert");

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() { 
        return this.name
    }

    getID() {
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(role){
        return role
    }

}

var questionList = [{
    type: 'input',
    name: 'personName',
    message: "Enter the employee's name:"  
  },
  {
      type: 'input',
      name:'email',
      message: "Enter the employee's email:" 
  },
  {
      type: 'input',
      name: 'idNumber',
      message: "Enter the employee's ID:" 
  }]

module.exports = Employee;