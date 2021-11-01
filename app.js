const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./page-template');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const outputPath = path.join('./Output/', 'team.html');

// an array to store the created members
const teamMembers = [];

const runApp = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'role',
        choices: ['Manager','Engineer','Intern', 'Exit'],
        message: 'What is your role?'
    }])
    .then(
        answer => {
            if (answer.role === 'Manager') {
                // function that runs the inquirer questions for manager
                getManager();
            } else if (answer.role === 'Engineer') {
                getEngineer();
            } else if (answer.role === 'Intern') {
                getIntern();
            } else {
                outputTeam();

            }
        }
    )
}

// create the getX functions for each of the occupations
const getManager = () => {
    inquirer.prompt([
    {
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    }, 
    {
        type: 'text',
        name: 'id',
        message: 'What is your work ID?'
    },
    {
        type: 'text',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'text',
        name: 'officenumber',
        message: 'What is your office number?'
    }
    ])
    .then(answer => {
        const manager = new Manager(answer.name, answer.id, answer.email, answer.officenumber);
        console.log(manager);

        teamMembers.push(manager);
        runApp();
    })
}

const getEngineer = () => {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        }, 
        {
            type: 'text',
            name: 'id',
            message: 'What is your work ID?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'text',
            name: 'githubuser',
            message: 'What is your GitHub Username?'
        }
    ])
    .then(answer => {
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.githubuser);
        console.log(engineer);

        teamMembers.push(engineer);
        runApp();
    })
}

const getIntern = () => {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        }, 
        {
            type: 'text',
            name: 'id',
            message: 'What is your work ID?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'text',
            name: 'school',
            message: 'What school are, or were, you attending?'
        }
    ])
    .then(answer => {
        const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        console.log(intern);

        teamMembers.push(intern);
        runApp();
    })
}

// function that creates the html file
const outputTeam = () => {
    fs.writeFileSync(outputPath, render(teamMembers), 'utf-8');
}

runApp();