//Create a function for the URL of the current license badge
// Copy url and change ${license} into a license e.g. MIT. You will get a button named that
function renderLicenseBadge(license){
  if (license !== "None"){
    return `![GitHub Lisence](https://img.shields.io/badge/lisence-${license}-blue.svg)`
  }
  return `  `
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
