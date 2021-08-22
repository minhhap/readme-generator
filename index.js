// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message:'What is the installation instruction?', 
        type:'input', 
        name: 'installation'
        },
    {
        message:'What info about usage can you provide?', 
        type:'input', 
        name: 'usage'
        },
    {
        message:'What are the contribution guidelines?', 
        type:'input', 
        name: 'contributing'
        },
    {
        message:'What are the test instructions?', 
        type:'input', 
        name: 'test'
        },
    {
        message:'Which license does this app use?', 
        type:'list', 
        name: 'license',
        choices:['MIT','Apache','BSD']
    },
    {
        message:'What is your GitHub user name?', 
        type:'input', 
        name: 'github'
        },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./readmenew.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                return: true,
            })    
        }); 
    }
   
)};

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(data => writeToFile(generateMarkdown(data)));
};
  

// Function call to initialize app
init();