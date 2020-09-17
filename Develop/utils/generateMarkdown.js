function generateMarkdown(data) {
  return `# ${data.title}

  ${data.username}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.contents}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

`;
}

module.exports = generateMarkdown;
