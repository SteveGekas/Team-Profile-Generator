const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const employee = require("./lib/Employee.js");
const engineer = require("/.lib/Engineer.js");
const intern = require("./lib/Intern.js");
const manager = require("./lib/Manager.js");
//const path = require('path');

function init() {
    createHTML();
    addTeamMember();
}

function addTeamMember() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your team member\'s name.',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your team member\'s id number.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your team member\'s email.',
        },
        {
            type: 'checkbox',
            name: 'role',
            message: 'Choose your team member\'s role.',
            choices: ['Engineer', 'Intern', 'Manager'],
        },

    ])

        .then(function ({ name, role, id, email }) {
            let teamRoleInfo = "";
            if (role === "Engineer") {
                teamRoleInfo = "GitHub username";
            } else if (role === "Intern") {
                teamRoleInfo = "school name";
            } else {
                teamRoleInfo = "office phone number";
            }
            inquirer.prompt([{
                type: 'input',
                name: "temRoleInfo",
                message: `Enter team member's ${teamRoleInfo}`,

            },
            {
                type: "list",
                name: "addAnother",
                message: "Would you like to add another team member?",
                choices: ['Yes', 'No'],

            }])
                .then(function ({ roleInfo, addAnother }) {
                    let newTeamMember;
                    if (role === "Engineer") {
                        newTeamMember = new engineer(name, id, email, roleInfo);
                    } else if (role === "Intern") {
                        newTeamMember = new intern(name, id, email, roleInfo);
                    } else {
                        newTeamMember = new manager(name, id, email, roleInfo);
                    }
                    employee.push(newTeamMember);
                    addHTML(newTeamMember)
                        .then(function () {
                            if (addAnother === "Yes") {
                                addTeamMember();
                            }
                            else {
                                createHTML();
                            }
                        });
                });
        });
}

function createHTML() {
    const HTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFileSync("/index.html", HTML, function(error){
        if(error) {
            console.log(error);
        }
    })
}

function createHTML(teamMember) {
    return new Promise(function (resolve, reject) {
        const name = teamMember.getName();
        const id = teamMember.getId();
        const email = teamMember.getEmail();
        const role = teamMember.getRole();
        let data = "";
        if (role === "engineer") {
            const gitHub = teamMember.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        }
        else if (role === "intern") {
            const school = teamMember.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        }
        else {
            const officePhone = teamMember.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("Adding Current Team Member");
        fs.appendFile("./index.html", HTML, function (error) {
            if (error) {
                return reject(error);
            }
            else {
                return resolve;
            }
        })

    });




    function createHTML() {
        const HTML = ` </div>
    </div>
    
</body>
</html>`;

        fs.appendFile("./index.html", HTML)

    }
}

    init();
