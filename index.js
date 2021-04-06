// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const util = require("util")

const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username?'

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'

    },
    {
        type: 'input',
        name: 'repoName',
        message: 'What is the name of your GitHub Repository?'

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project.'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the actions that must be taken to install your project in order for it to properly function.'

    },
    {
        type: 'input',
        name: 'instructions',
        message: 'For the usage section, please provide instructions for use of your project.'

    },
    {
        type: 'input',
        name: 'contributor',
        message: 'Provide guidelines as to how other developers may contribute to your project.'

    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please list and describe any tests for your application'

    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to pick?',
        choices: ['MIT', 'GPL', 'IPL']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let  = "#hello"
    // return fs.writeFileSync(README.md", README)
    fs.writeFile(fileName, data, err => {
        if(err){
            return console.log(err);
        }
        console.log("Congratulations! Your README file has successfully been generated.")
    });
    
}

const writeFileSync = (writeToFile);

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((data) => {
        // generateMarkdown(data)
    
    writeToFile('README.md', generateMarkdown(data));    
    })

}

// Function call to initialize app
init();
