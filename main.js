//input
var read_line_sync = require("readline-sync"); //imported prompt alertnative
var chalk = require("chalk"); //imported chalk  ( it makes  ux better)

var questions = [
  //Array

  (questionOne = {
    //Obj inside array
    query: " How long does it take for light from the Sun to reach Earth?\n",
    answer: "8 minutes",
  }),
  (questionTwo = {
    query: "Oldest planet in our solar system is _____\n",
    answer: "jupiter",
  }),
  (questionThree = {
    query: "What's the closest rogue planet to earth?\n",
    answer: "brown dwarf",
  }),
  (questionFour = {
    query: "closest earth like exoplanet is ___\n",
    answer: "proxima b",
  }),
  (questionFive = {
    query: "Which planet moves the fastest in our solar system?\n",
    answer: "mercury",
  }),
];
//Welcome message
console.log(chalk.green("Welcome to Planetary Quiz"));
//user name
const total_users = read_line_sync.question(
  chalk.cyan("Enter the number of players\n")
);
var high_score = 0;
var top_performer;
var current_user;

for (let i = 0; i < total_users; i++) {
  score = 0; //+1 when user enters right answer and vice-versa
  current_user = read_line_sync.question(
    chalk.cyan("Enter you first name please\n")
  );
  for (let j = 0; j < questions.length; j++) {
    askQuestion(questions[j].query, questions[j].answer); // output
  }
}

function askQuestion(question, answer) {
  //processing

  current_question = read_line_sync.question(chalk.yellowBright(question)); // this variable   contains every question key from  question[]array

  console.log(`your answer is ${current_question}`);
  if (current_question === answer) {
    console.log(chalk.greenBright("right answer bud"));
    score++;
  } else {
    if (current_question === "") {
      console.log("You skipped the question"); //nested  if &else statement in else block for exceptional cases
    } else {
      console.log(chalk.red("wrong answer"));
      score--;
    }
  }
  console.log(`The right answer is ${answer}`);
  console.log(`your score is ${chalk.magentaBright(score)}`);
  if (score > high_score) {
    high_score = score;
    top_performer = current_user;
  }
}

console.log(
  `high score is ${chalk.magentaBright(high_score)} by ${chalk.green(
    top_performer
  )}`
);
