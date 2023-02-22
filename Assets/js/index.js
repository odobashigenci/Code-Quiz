// All the questions.
var allQuestions = [{
  question: "Javascript is an _______ language?",
  options1: "Object-Oriented",
  options2: "Object-Based",
  options3: "Procedural",
  options4: "None of the above",
  correctAns: "Object-Based"
},
{
  question: "Which of the following keywords is used to define a variable in Javascript?",
  options1: "var",
  options2: "let",
  options3: "const",
  options4: "All of the above",
  correctAns: "All of the above"
},
{
  question: "Which of the following methods is used to access HTML elements using Javascript?",
  options1: "getElementById()",
  options2: "querySelector()",
  options3: "Both of the above",
  options4: "None of the above",
  correctAns: "Both of the above"
},
{
  question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
  options1: "Ignores the statement",
  options2: "Throws and error",
  options3: "Gives a worning",
  options4: "None of the above",
  correctAns: "Ignores the statement"
},
{
  question: "Which of the following methods can be used to display data in some form using Javascript?",
  options1: "console.log()",
  options2: "document.write()",
  options3: "window.alert()",
  options4: "All of the above",
  correctAns: "All of the above"
},
{
  question: "How can a datatype be declared to be a constant type?",
  options1: "let",
  options2: "constant",
  options3: "var",
  options4: "const",
  correctAns: "const"
},
{
  question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
  options1: "Undefined",
  options2: "Integer",
  options3: "Boolean",
  options4: "Object",
  correctAns: "Object"
},
{
  question: "What is the output of the following code snippet: print(NaN === NaN);",
  options1: "true",
  options2: "false",
  options3: "undefined",
  options4: "Error",
  correctAns: "true"
},
{
  question: "Which function is used to serialize an object into a JSON string in Javascript?",
  options1: "stringify()",
  options2: "convert()",
  options3: "parse()",
  options4: "None of the above",
  correctAns: "stringify()"
},
{
  question: "How to stop an interval timer in Javascript?",
  options1: "intervalOver",
  options2: "clearTimer",
  options3:"clearInterval",
  options4: "None of the above",
  correctAns: "clearInterval"
}
]

// Declared vars.
var score = document.getElementById("score");
var time = document.getElementById("time");
var play = document.getElementById("play");
var scoreBtn = document.getElementById("scoreBtn");
var cardBody = document.querySelector(".card-body");
var yourScore = document.getElementById("finalScore");
var firstAnswer = document.getElementById("optionA");
var secondAnswer = document.getElementById("optionB");
var thirdAnswer = document.getElementById("optionC");
var fourthAnswer = document.getElementById("optionD");
var questions = document.getElementById("questions");
var correctWrong = document.getElementById("correctWrong");
var optionsBtn = document.querySelectorAll('.optionBtn');

// Setting up "read more" button on welcome text.
function toggle() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("readMore");
  var btnText = document.getElementById("myBtn");
}
// sets up the coutndown time
var timeLeft = 30;

function startTime() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    time.textContent = "Time " + timeLeft;
    if (timeLeft === 0 || allQuestions.length === 0) {
      clearInterval(timeInterval);
      document.getElementById("userData").classList.remove("hidden");
      yourScore.textContent = "Your score is " + timeLeft;
    } 
  }, 1000);
}

var currentQuestion = Math.floor(Math.random() * allQuestions.length);

// Generating all questions, populating the buttons with the anwers, and moving on to the next question.
function renderQuestions() {
  var thisQuestion = allQuestions[currentQuestion];
  questions.textContent = thisQuestion.question;
  firstAnswer.textContent = thisQuestion.options1;
  secondAnswer.textContent = thisQuestion.options2;
  thirdAnswer.textContent = thisQuestion.options3;
  fourthAnswer.textContent = thisQuestion.options4;
  console.log(thisQuestion);
}
 
  
  for (var i = 0; i < optionsBtn.length; i++) {
    optionsBtn[i].addEventListener("click", function userAnswer(event){
      event.stopPropagation();
      if(event.currentTarget.textContent === allQuestions[currentQuestion].correctAns){
        correctWrong.textContent = "Correct";
        correctWrong.style.cssText = "color: green; font-weight: bold";
        timeLeft = timeLeft + 10;
      } else{
        correctWrong.textContent = "Wrong";
        correctWrong.style.cssText = "color: red; font-weight: bold";
        timeLeft = timeLeft - 10;
      }
      allQuestions = allQuestions.filter(function (item){
        return allQuestions[currentQuestion].question != item.question
      })
      console.log(allQuestions)
      currentQuestion = Math.floor(Math.random() * allQuestions.length)

      if(allQuestions.length > 0){
        renderQuestions();
      } 
    }); 
  }

  // Hiding Play and High Score buttons, and welcome text on game start.
function hideContainer() {

  var container = document.getElementById("container");

  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}

// Staring the game by clicking Play button.
function startGame() {

  cardBody.classList.remove("hidden");
  startTime();
  renderQuestions();
  hideContainer();
}
play.addEventListener("click", startGame);

// Setting up local storage

var submitButton = document.querySelector(".submit");
var yourInitials = document.getElementById("initials");


var highScore = JSON.parse(localStorage.getItem("score")) || [];

submitButton.addEventListener("click", function(event){
  event.stopPropagation();
 
  var initials = yourInitials.value;
  var score = {initials, timeLeft};
 
  if (yourInitials.value === "") {
    alert("Please enter your initials!");
    return;
} 

  highScore.push(score);
  localStorage.setItem("score", JSON.stringify(highScore));
});
