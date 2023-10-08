const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
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

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
