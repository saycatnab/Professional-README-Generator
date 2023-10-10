//Create a function for the URL of the current license badge
// Copy url and change ${license} into a license e.g. MIT. You will get a button named that
function renderLicenseBadge(license){
  if (license !== "None"){
    return `![GitHub License](https://img.shields.io/badge/lisence-${license}-blue.svg)`
  }
  return ``
}

// Function to add in license if there actually chosen one.
// Rather than adding it similar to [usage] and have nothing in there if they dont choose.
// So this v will confirm if theres a need to add in the full licnese [](#) or not.
const renderLicense = (license) => {
  if(license !== "None"){
    return `* [License](#license)\n`
  }
  return ``
}

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description
  ${data.description}

  ### Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicense(data.license)}

  * [Contributing](#constributing)

  * [Test](#test)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the follwing command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license

  ## Cntributing

  ${data.contributing}

  ## Test

  To run tests, run the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ##Questions

  If you have any questions about the repo open an issue or contact me derectly at ${data.email}.

  You can find more of my work at [${data.github}](https://github.com/${data.github}).


`;
}

module.exports = generateMarkdown;
