const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// Questions for the user - this will make the readme file according to their choosing.
const questions = [
    {
        type: `input`,
        name: `github`,
        message: `What is your GitHub Username? ⋆˚✿˖`

    },
    {
        type: `input`,
        name: `email`,
        message: `What is your email address? ⋆˚✉˖`

    },
    {
        type: `input`,
        name: `title`,
        message: `What is your projects name? ⋆｡𖦹˖`

    },
    {
        type: `input`,
        name: `description`,
        message: `Write a short description of your project ⋆｡𖦹˖`

    },
    {
        type: `list`,
        name: `license`,
        message: `What kind of license would you like? ⋆｡𖦹˖`,
        choices: ["MIT", "APACHE 2.0", "GPL", "None"]

    },
    {
        type: `input`,
        name: `installation`,
        message: `What command should be run to install dependencies? ⋆｡𖦹˖`,
        default: `npm i`

    },
    {
        type: `input`,
        name: `test`,
        message: `What command should be run to run test? ⋆｡𖦹˖`,
        default: `npm test`

    },
    {
        type: `input`,
        name: `usage`,
        message: `What does the user need to know about using the repo? ⋆｡𖦹˖`

    },
    {
        type: `input`,
        name: `contributing`,
        message: `What does the user need to know about contributing to the repo? ⋆｡𖦹˖`

    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
