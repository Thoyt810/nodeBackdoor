const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your Github Username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "github"
        },
        {
            type: "input",
            message: "What is your project name?",
            name: "projectName"
        },
        {
            type: "input",
            message: "Please write a short description of your project.",
            name: "projectDescription"
        },
        {
            type: "checkbox",
            message: "What kind of license should your project have?",
            name: "license",
            choices: [
                "MIT",
                "APache 2.0",
                "GPL 3.0",
                "BSD 3",
                "None",
            ]
        },
        {
            type: "checkbox",
            message: "What command should be run for to install dependencies?",
            name: "dependencies",
            choices: [
                "npm i"
            ]
        },
        {
            type: "checkbox",
            message: "What command should be run to run tests?",
            name: "tests",
            choices: [
                "npm test"
            ]
        },
        {
            type: "input",
            message: "What does the user need to know about this Repository?",
            name: "userInfo"
        },
        {
            type: "input",
            message: "What does the user need to know about CONTRIBUTING to this Repository?",
            name: "userInput"
        }
    ])
}

function makeReadMe(answers) {
    return(
`

Github Username

${answers.username}

##Github Email Address

${answers.github}

## Project Name

${answers.projectName}

## Project Description

${answers.projectDescription}

## Table of Contents

${answers.license}

${answers.dependencies}

${answers.tests}

## User Info

What does the user need to know about the Repository?

${answers.userInfo}

What does the User need to know about CONTRIBUTING to the Repository?

${answers.userInput}

`
    )
}

promptUser()
    .then(function (answers) {
        const readMe = makeReadMe(answers);
        return writeFile("READ.Me", readMe)
    })