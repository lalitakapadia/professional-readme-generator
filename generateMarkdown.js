// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) { 
   if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT License") {                   
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU General Public License v3.0") {
    return "[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT License") {                   
    return "[MIT License](https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla Public License 2.0") {
    return "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let licenseBadge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);
  //let licenseSection = renderLicenseSection(data.license);

  return ` ${licenseBadge}

  # ${data.title}

  ## Table of Contents
* [Github](#Github)
* [Email](#Email) 
* [Title](#Title)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Description  
${data.description}

## Installation
${data.installation}


## Usage
${data.usage}


## License
${licenseLink}


## Contributing
${data.contributing}


## Tests
${data.tests}


## Questions
[Github](https://github.com/${data.username})
[Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
