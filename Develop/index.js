const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const axios = require('axios');


const questions = [
      {
            type: "input",
            message: "what would you like to call your new readMe file?",
            name: "fileName"
      },
      {
            type: "input",
            message: "what would you like the title of the readMe to say?",
            name: "title"
      }
];


function writeToFile(fileName, data) {
      fs.writeFileSync(fileName, data);
}

function init() {
      inquirer
            .prompt(questions)
            .then((answers) => {
                  console.log(answers);
                  const queryUrl = `https://api.github.com/users/${answers.username}/repos?per_page=100`;
                  axios.get(queryUrl).then(function ({ data }) {
                        console.log(data);
                        let userAnswers = generateMarkdown(answers);
                        writeToFile(answers.fileName + '.md', userAnswers);
                  })
            })
            .catch((e) => {
                  return e;
            })



}

init();

// when i run the program it asks the user various questions
      // use the inquirer prompt to ask the array of questions

// Those answers to the questions are pushed to an object that inquirer give me
      // get the object with different answers
      // pass the answers to generate markdown function
      // store the results of calling genrateMarkdown in a variable
// That array is then used to create a readMe file
