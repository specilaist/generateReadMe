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
      },
      {
            type: "input",
            message: "What is your github Username?",
            name: "username"
      },
      {
            type: "input",
            message: "How would you describe this app?",
            name: "description"
      },
      {
            type: "input",
            message: "What does it contain?",
            name: "contents"
      },
      {
            type: "input",
            message: "How do you install the program?",
            name: "installation"
      },
      {
            type: "input",
            message: "How do you use this app in the computer?",
            name: "usage"
      },
      {
            type: "input",
            message: "What license do you need?",
            name: "license"
      },
      {
            type: "input",
            message: "Who contributed to this project?",
            name: "contributing"
      },
      {
            type: "input",
            message: "What do you need to run tests?",
            name: "tests"
      },
      {
            type: "input",
            message: "Do you have any additional questions?",
            name: "questions"
      },
      
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
                        fs.appendFile(data.owner.avatar_url);
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
