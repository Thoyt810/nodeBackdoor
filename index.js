const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
    {
      type: "input",
      message: "",
      name: "username"
    },
    {
      type: "input",
      message: "",
      name: "github"
    },
    {
      type: "input",
      message: "",
      name: "confirm"
    }
  ])