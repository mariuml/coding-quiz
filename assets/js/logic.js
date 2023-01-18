// GLOBAL VARIABLES:
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionsScreen = document.getElementById("questions");
var choicesButtons = document.getElementById("choices");
var buttons = document.querySelectorAll("button");
var questionTitle = document.getElementById("question-title");
var wrongAnswer = document.getElementById("wrong");
var correctAnswer = document.getElementById("correct");
var endScreen = document.getElementById("end-screen");
var currentQuestion = 0;
var initialsInput = document.getElementById("initials");

var finalScoreElement = document.getElementById("final-score");
var submitButton = document.getElementById("submit");
var clearScoresButton = document.getElementById("clear");
var timerElement = document.getElementById("time");
var timeLeft = 75;
var highscoreArray= [];




// Adding event listener to hide start screen and show questions on click
startButton.addEventListener("click", showFirstQuestionScreen);
startButton.addEventListener("click", timerCountdown);

// FUNCTION: Timer

//  Add a timer counting down from 75 seconds
function timerCountdown() {

  var timeInterval = setInterval(function () {
    // As long as 'timeleft is greater than 1
    if (timeLeft > 0) {
      // Adding text of timerElement to show the remaining seconds
      timerElement.textContent = timeLeft;
      timeLeft--;
    } else {
  // Hide question screen
  questionsScreen.classList.remove("show");
  questionsScreen.classList.add("hide");

  // Show end screen
  endScreen.classList.remove("hide");
  endScreen.classList.add("show");

  
// Save the time

timeLeft = timeLeft;

      // Stop the timer
  clearInterval(timeInterval);

    
    }
  }, 1000);
}

// ADDING SCORE: Final score display 

finalScoreElement.textContent = timeLeft;


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

function nextQuestion(event) {
  if (currentQuestion >= 4) {

    // Hide question screen
    questionsScreen.classList.remove("show");
    questionsScreen.classList.add("hide");

    // Show end screen
    endScreen.classList.remove("hide");
    endScreen.classList.add("show");

    // Hide timer
    timerElement.classList.add("hide");
  }

  var clickedValue = event.target.textContent;

  //    IF STATEMENTS: Testing if an answer is correct or incorrect

  if (clickedValue === quizQuestions[currentQuestion].answer) {
    currentQuestion++;
    addAnswers(currentQuestion);
    addQuestions(currentQuestion);

    correctAnswer.classList.remove("hide");

    // Hiding the feedback after time duration
    setTimeout(function () {
      correctAnswer.classList.add("hide");
    }, 500);

    // Show correct, then hide correct
  } else {
    currentQuestion++;
    addAnswers(currentQuestion);
    addQuestions(currentQuestion);
    wrongAnswer.classList.remove("hide");

    // Hiding feedback after time duration
    setTimeout(function () {
      wrongAnswer.classList.add("hide");
    }, 500);
    // Decrementing the timer by 10 seconds if wrong answer is selected

    timeLeft = timeLeft - 10;
  }
}



//  LOCAL STORAGE: Adding highscores initials to local storage on click of submit button

// Saving initials and score to local storage
submitButton.addEventListener("click", function () {

  //  Create variables to store final scores and initials
  var finalScore = finalScoreElement.textContent;
  var initials = initialsInput.value;
  
  // Push this into highscores array
highscoreArray.push(finalScore, initials);

// Save the array into local storage, stringify
localStorage.setItem('highscoreArray', JSON.stringify(highscoreArray));

// Redirecting to highscore page
window.location.assign("highscores.html");


});



