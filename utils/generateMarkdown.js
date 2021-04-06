// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" 
  }
  else if (license === 'GPL') {
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0),"
  } else {
    "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"    
  }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let scribeToF = '## Table of Contents';

  if (data.installation !==''){scribeToF +='*[Installation](#installation)'};

  if (data.instructions !==''){scribeToF +='*[Instructions](#instructions)'};

  if (data.contributor !==''){scribeToF +='*[Contributor](#contributor)'};

  if (data.tests !==''){scribeToF +='*[Tests](#tests)'};

  
  console.log(data)
  
  return `# ${data.title}
  
  let freshMarkdown = '# ${data.title}

  ![Badge for GitHub repo TL](https://img.shields.io/github/languages/top/${data.username}/${data.repoName}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.repo}?style=flat&logo=appveyor)
  https://img.shields.io/github/license/$%7Bdata.username%7D/$%7Bdata.repoName%7D

  ## Description

  ${data.description}'

  freshMarkdown += ToC;

  freshMarkdown += '*[License](#license)';

  freshMarkdown += '
  
  ## Installation

  ${data.installation}'
  `;
}

module.exports = generateMarkdown
