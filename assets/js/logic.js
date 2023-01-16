// Iterate over object of questions in a for loop to dispaly on the page

// GLOBAL VARIABLES: Creating a variable for the start button and screens

var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var choicesButtons = document.querySelector("#choices");
var buttons = document.querySelectorAll("button");
var questionTitle = document.querySelector("#question-title");
var buttonSelection = 0;
var questionSelection = 0;
var wrongAnswer = document.getElementById("#wrong");
var correctAnswer = document.getElementById("#correct");

// Button variables
var buttonOne = document.querySelector("#button-1");
var buttonTwo = document.querySelector("#button-2");
var buttonThree = document.querySelector("#button-3");
var buttonFour = document.querySelector("#button-4")

// Adding event listenr to hide start screen and show questions on click
startButton.addEventListener("click", showFirstQuestionScreen);


// FUNCTION: Add answers to buttons - to reuse

function addAnswers(answerNumber) {
  choicesButtons.classList.remove("hide");
  choicesButtons.classList.add("show");

  for (var i = 0; i < 4; i++) {
    buttons[i + 1].textContent = quizQuestions[answerNumber].choice[i];
    buttons[i + 1].addEventListener("click", function () {
    });
  }
}

//  FUNCTION: to show the next question - to reuse

function addQuestions(questionNumber) {
  questionTitle.textContent = quizQuestions[questionNumber].question;
}


// FUNCTION: to bring up the questions screen

function showFirstQuestionScreen() {
  // Hide start screen
  startScreen.remove();

  // Make divs visible
  questionsScreen.classList.remove("hide");
  questionsScreen.classList.add("show");

  // Calling the function - Adding question 1 to the screen

  addQuestions(0);

  // Calling the function - Adding question 1 answers to the screen
  addAnswers(0);
}

// Event listeners for buttons
buttonOne.addEventListener("click", function () {
    buttonSelection = 1;
    questionSelection ++;
    return buttonSelection;
    return questionSelection;
   
   });
   
   buttonTwo.addEventListener("click", function () {
     buttonSelection = 2;
     questionSelection ++;
     return buttonSelection;
     return questionSelection;
   });
   
   buttonThree.addEventListener("click", function () {
       buttonSelection = 3;
       questionSelection ++; 
       return buttonSelection;
       return questionSelection;
     });
   
     buttonFour.addEventListener("click", function () {
       buttonSelection = 4;
       questionSelection ++;
       return buttonSelection;
       return questionSelection;
     });
   
     console.log(buttonSelection);
     console.log(questionSelection);
   
   // Question 1 logic:
   
   if (buttonSelection = 4) {
       // Feedback 'Correct'
       console.log("Correct");

//  Display feedback

correctAnswer.classList.remove("hide");
correctAnswer.classList.add("show");


       // Add to score
       // addAnswers(questionSelection);
       // addQuestions(questionSelection);
     } else {
       // Feedback 'Incorrect'
// Display feedback
wrongAnswer.classList.remove("hide");
wrongAnswer.classList.add("show");

       // Takes away from timer
       // addAnswers(questionSelection);
       // addQuestions(questionSelection);
     }
     

