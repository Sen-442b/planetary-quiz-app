var read_line_sync =  require("readline-sync"); //imported prompt alertnative 
var chalk =  require("chalk"); //imported chalk  ( it makes  ux better)

score = 0 ; //+1 when user enters right answer and vice-versa
var questions = [//Array

    questionOne ={//Obj inside array
        query : " How long does it take for light from the Sun to reach Earth?\n",  
        answer: "8 minutes"

},
    questionTwo ={
        query : "Oldest planet in our solar system is _____\n",
        answer: "jupiter"

},
    questionThree ={
        query : "What's the closest rogue planet to earth?\n",
        answer: "brown dwarf"

},
    questionFour ={
        query : "closest earth like exoplanet is ___\n",
        answer: "proxima b"

},
    questionFive ={
        query : "Which planet moves the fastest in our solar system?\n",
        answer: "mercury"

},
]
//Welcome message
console.log(chalk.green("Welcome to Planetary Quiz")); 
//user name
const current_user = read_line_sync.question(chalk.cyan("Enter you first name please\n"));


for ( let i=0;i<questions.length;i++){
   
        
    

    current_question = read_line_sync.question(chalk.yellowBright(questions[i].query));// this variable   contains every question key from  question[]array
    current_answer = questions[i].answer; // this variable   contains every answer key  from  question[]array
    console.log(`your answer is ${current_question}`);
    if (current_question===  current_answer){
        console.log(chalk.greenBright("right answer bud"));
        score ++ ;
        

    } else {
        if(current_question===''){
            console.log("You skipped the question"); //nested  if &else statment in else loop for exceptional cases 
        
        }
        else{
        console.log(chalk.red("wrong answer")); 
        score--;
        }
    }
    
    console.log(`your score is ${chalk.magentaBright(score)}`);
}


console.log(`high score is ${chalk.magentaBright(Math.max(score))} by ${chalk.grey.bold(current_user)}`);


