// Iterate over object of questions in a for loop to dispaly on the page

// GLOBAL VARIABLES: Creating a variable for the start button and screens

var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionsScreen = document.getElementById("questions");
var choicesButtons = document.getElementById("choices");
var buttons = document.querySelectorAll("button");
var questionTitle = document.getElementById("question-title");
var endScreen = document.getElementById("end-screen");
var wrongAnswer = document.getElementById("wrong");
var correctAnswer = document.getElementById("correct");
var currentQuestion = 0;


// Adding event listenr to hide start screen and show questions on click
startButton.addEventListener("click", showFirstQuestionScreen);


// FUNCTION: Add answers to buttons - to reuse

function addAnswers(answerNumber) {
  choicesButtons.classList.remove("hide");
  choicesButtons.classList.add("show");

  for (var i = 0; i < 4; i++) {
    buttons[i + 1].textContent = quizQuestions[answerNumber].choice[i];
   
  }
}

//  FUNCTION: to show the next question - to reuse

// BUG: Showing an error / undefined for the last question - Could take to ask BCS?

function addQuestions(questionNumber) {
  questionTitle.textContent = quizQuestions[questionNumber].question;
}


// FUNCTION: to bring up the first question screen

function showFirstQuestionScreen() {
  // Hide start screen
  startScreen.remove();

  // Make divs visible
  questionsScreen.classList.remove("hide");
  questionsScreen.classList.add("show");

  // Calling the function - Adding question 1 to the screen

  addQuestions(currentQuestion);

  // Calling the function - Adding question 1 answers to the screen
  addAnswers(currentQuestion);
}

// FUNCTION: Next question

function nextQuestion (event) {

if(currentQuestion >= 4) {

// Hide question screen
questionsScreen.classList.remove("show");
questionsScreen.classList.add("hide");

// Show end screen
endScreen.classList.remove("hide");
endScreen.classList.add("show");


}


    var clickedValue = event.target.textContent; 
  
    if(clickedValue === quizQuestions[currentQuestion].answer){
        console.log("This is correct!");
        currentQuestion++;
        addAnswers(currentQuestion);
        addQuestions(currentQuestion);

        // Show correct, then hide correct 
    }
    else {
        console.log("This is incorrect!");
        currentQuestion++;
        addAnswers(currentQuestion);
        addQuestions(currentQuestion);

        // Show incorrect, then hide incorrect
    }
}

// If statement if the current question > number of questions 