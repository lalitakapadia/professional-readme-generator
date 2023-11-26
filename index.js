// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        Validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter a project title");
                return false;
            }
        }
    }, 

    {
        type: "input",
        name: "description",
        message: "pleae enter a description of your project?",
        Validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter a description of your project");
                return false;
            }
        }

    },
    {
        type: 'confirm',
        name: 'confirmTable',
        message: 'Do you want a Table of Contents?',
        default: true
    },

    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?",
        Validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter information on how to install!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "What is your usage information?",
        Validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter any info usage!");
                return false;
            }
        }

    },
    {
        type: "list",
        name: "license",
        message: "Which license applies to your application?",
        //choices: [
        //     "Apache License 2.0",
        //     "GNU General Public License v3.0",
        //     "MIT License",
        //     "Mozilla Public License 2.0",
        //     "Boost Software License 1.0",
        //     "The Unlicense"
        // ]
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter any how to contribute info!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "What are the test instructions?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter any how to test info!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a username!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a email!');
                return false;
            }
        }
        
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile("README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
