//Other Imports
const inquirer = require('inquirer');
const fs = require('fs')

//Local imports
const Employee = require('./src/Employee');
const Manager = require('./src/Manager');
const Engineer = require('./src/Engineer');
const Intern = require('./src/Intern');



//variables to be set 
var employees = []
let newTruthy = true


//First determine if you are appending an index.html or creating a new one  <- I wanna add this functionality but am running out of time, to do after class

const appendOrNew = () => {
     inquirer.prompt([{
        type: 'list',
        name:'typeOfEntry',
        message: 'Hello, welcome to the team profile generator. Will you be appending a previous team or creating a new one?',
        choices: [
            'Appending a prior team',
            'Making a new team'
        ]
    }]).then(function(answer){
        if(answer.typeOfEntry === 'Appending a prior team'){
            newTruthy = false
        }else{
            newTruthy = true;
        }
    })
}



var prompts = [{
    type: 'list',
    name: 'role',
    message: 'Welcome to the profile Generator! Please select which kind of employee information you will be entering',
    choices: [
        'Manager',
        'Engineer',
        'Intern'
    ]
},
{
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
  },{
    type: 'input',
    name: 'officeNumber',
    message: "Enter the manager's office number:" ,
    when: (answers) => answers.role === 'Manager'
}, {
    type: 'input',
    name: 'github',
    message: "Enter the engineer's github:",
    when: (answers) => answers.role === 'Engineer'
  }, 
  {
    type: 'input',
    name: 'school',
    message: "Enter the intern's school:", 
    when: (answers) => answers.role === 'Intern'
  }]


function mainPrompts(input){
    return inquirer.prompt(input)
            .then(function(answers){
                employees.push(answers)
                console.log(answers)
                })
        .then(() => checkIfMoreMembers(employees))
}

function checkIfMoreMembers(arr){
    inquirer.prompt([{
        type: "list",
        name: "new",
        message: "Would you like to add more team members?",
        choices: [
            "Yes",
            "No"
        ]
    }])
    .then(function(answer){
        if(answer.new == 'Yes'){
            mainPrompts(prompts)
        }else {
            generateHTML(arr);
            writeToFile('index.html', htmlTemplate )
        }
    })
}


var htmlTemplate = 
    `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
            />
            <title>Team Profile Generator</title>
        </head>
        <body>
    <h1 style="color:white; background-color:red; text-align: center; " class = 'jumbotron'> My Team </h1>
    
    
    `


function generateHTML(arr){
    fullArrHTML = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i].role == 'Manager'){
            let html ='';
            let manager = new Manager(arr[i].personName, arr[i].email,  arr[i].idNumber,  arr[i].officeNumber)
            html += `<section class = 'card' style="width: 18rem;">
                <section class="card-header">
                    <h2>${manager.getName()}</h2>
                    <h3>Manager</h3>
                </section>
                <section>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getID()}</li>
                    <li class="list-group-item">Email Address: ${manager.getEmail()}</li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
                <section>

            </section>
            `
            fullArrHTML.push(html)
        }else if (arr[i].role === 'Engineer'){
            let html='';
            let engineer = new Engineer(arr[i].personName, arr[i].email,  arr[i].idNumber,  arr[i].github)
            html += `
            <section class = 'card' style="width: 18rem;">
                <section class="card-header">
                    <h2>${engineer.getName()}</h2>
                    <h3>Engineer</h3>
                </section>
                <section>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getID()}</li>
                    <li class="list-group-item">Email Address: ${engineer.getEmail()}</li>
                    <li class="list-group-item">Github: ${engineer.getGithub()}</li>
                </ul>
                <section>

            </section>
            `
            fullArrHTML.push(html)
        }else {
            let html='';
            let intern = new Intern(arr[i].personName, arr[i].email,  arr[i].idNumber,  arr[i].school)
            html += `
            <section class = 'card' style="width: 18rem;">
                <section class="card-header">
                    <h2>${intern.getName()}</h2>
                    <h3>Intern</h3>
                </section>
                <section>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getID()}</li>
                    <li class="list-group-item">Email Address: ${intern.getEmail()}</li>
                    <li class="list-group-item">Github: ${intern.getSchool()}</li>
                </ul>
                <section>

            </section>
            `
            fullArrHTML.push(html)
        }
    }

    if (fullArrHTML.length > 0){
        for (var i = 0; i < fullArrHTML.length; i++){
        htmlTemplate += fullArrHTML[i]
        }
    }

    htmlTemplate += `
    
    </body>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>

    </html>
    `
}





function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
     err ? console.error(err) : console.log('')
   );
  }

const init = () => {

    mainPrompts(prompts)

    
    //.then(() => console.log('Congrats, your team profile was generated.'))
    //.then(console.log(employees))
    //.catch((err) => console.error(err));
}

init();