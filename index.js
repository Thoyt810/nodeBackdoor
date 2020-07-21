const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
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
        name: "projectName"
      },
      {
        type: "input", //change to multiple choice
        message: "What kind of license should your project have?",
        name: "license"
      },
      {
        type: "input", //change
        message: "What command should be run for to install dependencies?",
        name: "dependencies"
      },
      {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
      },
      {
        type: "input",
        message: "What does the user need to know about this Repository?",
        name: "userInfo"
      },
      {
        type: "input",
        message: "What does the user need to know about contributing to this Repository?",
        name: "userInput"
      }
  ])