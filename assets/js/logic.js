

// Iterate over object of questions in a for loop to dispaly on the page



// GLOBAL VARIABLES: Creating a variable for the start button and screens

var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var choicesButtons = document.querySelector("#choices");
var buttons = document.querySelectorAll("button");
var questionTitle = document.querySelector("#question-title");

// Adding event listenr to hide start screen and show questions on click
startButton.addEventListener("click", showFirstQuestionScreen);


// FUNCTION: Add answers to buttons - to reuse 

function addAnswers (answerNumber) {
    choicesButtons.classList.remove('hide');
    choicesButtons.classList.add('show');
    
    for (var i=0; i< 4; i++) {
        buttons[i + 1].textContent = (quizQuestions[answerNumber].choice[i]);
    }
        }
    
    
    //  FUNCTION: to show the next question - to reuse
    
    function addQuestions(questionNumber) {
        questionTitle.textContent = (quizQuestions[questionNumber].question);
    }
    

// FUNCTION: to bring up the questions screen 

function showFirstQuestionScreen(){

    // Hide start screen
    startScreen.remove();

// Make divs visible
    questionsScreen.classList.remove('hide');
    questionsScreen.classList.add('show');

// Calling the function - Adding question 1 to the screen
 
addQuestions(0);

// Calling the function - Adding question 1 answers to the screen
addAnswers(0);

}

// When correct answer is clicked, go to next question - can we create logic to reuse??

// Trigger this function if user selection === correct answer 


