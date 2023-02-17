
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
  question: "What keyword is used to check whether a given property is valid or not?",
  options1: "lies",
  options2: "in",
  options3: "exists",
  options4: "is in",
  correctAns: "in"
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
}
// {
//   question: "What will be the output of the following code snippet: print(typeof(NaN));",
//   options1: "Object",
//   options2: "Number",
//   options3: "String",
//   options4: "None of the above",
//   correctAns: "Number"
// },
// {
//   question: "Which of the following are closures in Javascript??",
//   options1: "Functions",
//   options2: "Variables",
//   options3: "Objects",
//   options4: "All of the above",
//   correctAns: "All of the above"
// },
// {
//   question: "Which of the following is not a Javascript framework?",
//   options1: "Node",
//   options2: "Vue",
//   options3: "React",
//   options4: "Cassandra",
//   correctAns: "Cassandra"
// },
// {
//   question: "How to stop an interval timer in Javascript?",
//   options1: "intervalOver",
//   options2: "clearTimer",
//   options3:"clearInterval",
//   options4: "None of the above",
//   correctAns: "clearInterval"
// },
// {
//   question: "How to stop an interval timer in Javascript?",
//   options1: "intervalOver",
//   options2: "clearTimer",
//   options3: "clearInterval",
//   options4: "None of the above",
//   correctAns: "clearInterval"
// }
]

var score = document.getElementById("score");
var time = document.getElementById("time");
var play = document.getElementById("play");
var scoreBtn = document.getElementById("scoreBtn");
var cardBody = document.querySelector(".card-body");
var submitButton = document.querySelector(".submit");
var yourInitials = document.getElementById("initials");
var yourScore = document.getElementById("finalScore");
var firstAnswer = document.getElementById("optionA");
var secondAnswer = document.getElementById("optionB");
var thirdAnswer = document.getElementById("optionC");
var fourthAnswer = document.getElementById("optionD");
var questions = document.getElementById("questions");
var correctWrong = document.getElementById("correctWrong");


// sets up the coutndown time
var timeLeft = 30;

function startTime() {
  var timeInterval = setInterval(function () {
    timeLeft--;

    time.textContent = "Time " + timeLeft;

    if (timeLeft === 0 || currentQuestion === 10) {
      clearInterval(timeInterval);
      document.getElementById("userData").classList.remove("hidden");
      yourScore.textContent = "Your score is " + timeLeft;
    } 
  }, 1000);
}

// generates all questions. populates the buttons with the anwers. moves to the next question. 
var currentQuestion = 0;
// Math.floor(Math.random() * allQuestions.length) => (if used math.floor to ranodmize the questions, some times will randomly stop rendering the desired amount of questions)

function renderQuestions() {
  var thisQuestion = allQuestions[currentQuestion];
  questions.textContent = thisQuestion.question;
  firstAnswer.textContent = thisQuestion.options1;
  secondAnswer.textContent = thisQuestion.options2;
  thirdAnswer.textContent = thisQuestion.options3;
  fourthAnswer.textContent = thisQuestion.options4;
}
 
  var optionsBtn = document.querySelectorAll('.optionBtn')

  for (var i = 0; i < optionsBtn.length; i++) {
    optionsBtn[i].addEventListener("click", function userAnswer(event){
      event.stopPropagation();
      if(event.currentTarget.textContent === allQuestions[currentQuestion].correctAns){
        correctWrong.textContent = "Correct";
        timeLeft = timeLeft + 5;
        console.log("Correct");
      } else{
        correctWrong.textContent = "Wrong";
        timeLeft = timeLeft - 5;
      }
      // console.log(currentQuestion);
      currentQuestion++;
      if(currentQuestion < 10){
        renderQuestions();
      } 
    });
    
  }

  // hides Play and High Score buttons on game start.
function hideContainer() {

  var container = document.getElementById("container");

  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}

// starts the game by clicking Play button.
function startGame() {

  cardBody.classList.remove("hidden");
  startTime();
  renderQuestions();
  hideContainer();

}
play.addEventListener("click", startGame);










































































// var highScore = JSON.parse(localStorage.getItem("finalScore")) || [];

// submitButton.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("click");

//   var initials = yourInitials.value;
//   var finalScore = { initials, timeLeft };
//   console.log("Final Score: " + finalScore);
//   console.log(initials + " your score is: " + secondsLeft);


//   highScore.push(finalScore);
//   localStorage.setItem("finalScore", JSON.stringify(highScore));

// });

