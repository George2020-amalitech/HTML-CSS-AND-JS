const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

let currentQuestion ={};
let acceptingAnswers = true;
let score = 0;
let questionCounter= 0;
let availableQuestions =[];

let questions = [
  {
    question: "The development environment offers which standard construct for data validation ",
    choice1: "Super controlled loop constructs",
    choice2: "Case sensitivity check",
    choice3:"Validation constructs",
    choice4:"All of the mentioned",
    answer: 4
  },{
    question: "The main purpose of a Live Wire in NetScape is to ",
    choice1: "Create linkage between client side and server side",
    choice2: "Permit server side, JavaScript code, to connect to RDBMS",
    choice3:"Support only non relational database",
    choice4:"To interpret JavaScript code",
    answer: 2
  },{
    question: "The script tag must be placed in ",
    choice1: "head",
    choice2: "head and body",
    choice3:"title and head",
    choice4:"All of the mentioned",
    answer: 2
  },{
    question: "A JavaScript program developed on a Unix Machine ",
    choice1: "will throw errors and exceptions",
    choice2: "must be restricted to a Unix Machine only",
    choice3:"will work perfectly well on a Windows Machine",
    choice4:"will be displayed as a JavaScript text on the browser",
    answer: 3
  },{
    question: "JavaScript is ideal to ",
    choice1: "make computations in HTML simpler",
    choice2: "minimize storage requirements on the web server",
    choice3:"increase the download time for the client",
    choice4:"none of the mentioned",
    answer: 4
  }
];

//constants
const CORRECT_BONUS = 20;
const MAZ_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  questionCounter++;
const questionIndex =  Math.floor(Math.random() * availableQuestions.length);
currentQuestion = availableQuestions[questionIndex];
question.innerText= currentQuestion.question;
};

startGame();
