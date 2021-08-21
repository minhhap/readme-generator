// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt(questions)
};

const questions = [
    {
        message:'What is your project title?', 
        type:'input', 
        name: 'title'
      },
    {
    message:'What is the project description?', 
    type:'input', 
    name: 'description'
        },
    {
        message:'Which license did you use?', 
        type:'list', 
        name: 'license',
        choices:['MIT','Apache','BSD']
      },
];

// TODO: Create a function to write README file
function writeToFile('./README.md', readMeData) {
    const readMeFile = generatePage(readMeData);
    fs.writeFile('./README.md',readMeFile) 
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
