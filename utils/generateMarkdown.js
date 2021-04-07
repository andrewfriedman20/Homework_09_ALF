'[Title](#title)',
//  Function creates licenxe badge based on the user selection of a license badge
// should the user not choose a license in the terminal, the field shall remain blank
// 
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

// This returns the license link (or empty sting if user does not select a license)
function renderLicenseLink(license) {
  if (license === 'MIT') {
    "[![License: MIT](https://opensource.org/licenses/MIT)]" 
  }
  else if (license === 'GPL') {
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0),"
  } else {
    "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"    
  }


}

// This creates the license section of the README (or, if user fails to select one, an empty string)

function renderLicenseSection(license) {
  if (license === 'MIT') {
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" 
  }
  else if (license === 'GPL') {
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0),"
  } else {
    "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"    
  }

}

// This function generates the markdown for the README
function generateMarkdown(data) {
  let scribeToF = '## Table of Contents';

  if (data.installation !==''){scribeToF += '[Installation](#installation)'};

  if (data.instructions !==''){scribeToF += '[Instructions](#instructions)'};

  if (data.contributor !==''){scribeToF += '[Contributor](#contributor)'};

  if (data.tests !==''){scribeToF += '[Tests](#tests)'};

  
  console.log(data)
  
  return `# ${data.scribeToF}
  


  ![Badge for GitHub repo TL](https://img.shields.io/github/languages/top/${data.username}/${data.repoName}?style=flat&logo=appveyor), 
  ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.repo}?style=flat&logo=appveyor)
  [https://img.shields.io/github/license/${data.username}/${data.repoName}]

  # ${data.title}
  
  ## Table of Contents
  ${data.ToC}
  
  ## Description

  ${data.description}

 
  ## Installation
  ${data.installation}
  
  

  ## Usage
  ${data.instructions}


  ## Contribution Guidelines
  ${data.contributor}


  ## Tests
  ${data.tests}


  ## License
  ${data.license}

  `;
}

module.exports = generateMarkdown

