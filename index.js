var readlineSync = require("readline-sync");
const chalk = require('chalk');


var score = 0;

var questions = [{
  question: "Abu Dhabi ",
  answer: "Asia"
}, {
  question: "Tokyo ",
  answer: "Asia"
},
{
  question: "Brussels ",
  answer: "Europe"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log(chalk.blue("Welcome "+ userName))
  console.log("Cities by Continent")
  console.log("See a city, tell where is it located - Continent Name.")
  console.log("Simple, right? ")
}



function game() {
  for (var i=0; i<questions.length; i++) {
    var askQuestion = questions[i];
    play(askQuestion.question, askQuestion.answer)
  }
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log(chalk.green("Correct Answer!"))
    score = score + 1;
    
  } else {
    console.log(chalk.red("Oh No! You are wrong"))
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}


welcome();
game();
