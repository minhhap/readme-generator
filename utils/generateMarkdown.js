// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} 

## Description
${data.description}


## Table of Content
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Usage](#usage)
* [Questions](#github)


## Installation
${data.installation}


## Usage
${data.usage}

## Contributing
${data.contributing}


## Tests
${data.tests}


## License
${data.license}


## Questions
Contact me at: github.com/${data.github}
or email: ${data.email}

`;
}

module.exports = generateMarkdown;