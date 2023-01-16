

// Iterate over object of questions in a for loop to dispaly on the page



// GLOBAL VARIABLES: Creating a variable for the start button and screens

var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var choicesButtons = document.querySelector("#choices");
var buttons = document.querySelectorAll("button");

// Adding event listenr to hide start screen and show questions on click
startButton.addEventListener("click", hideStartScreen);
startButton.addEventListener("click", showQuestionScreen);


// FUNCTION: to hide start screen

function hideStartScreen() {
startScreen.remove();
}
// FUNCTION: to bring up the questions screen 

function showQuestionScreen(){

// Make divs visible
    questionsScreen.classList.remove('hide');
    questionsScreen.classList.add('show');

// Adding questions to the screen
 var questionTitle = document.querySelector("#question-title");
questionTitle.textContent = (quizQuestions[0].question);
// Add choices 4 new buttons (styling will be auto applied)

// Showing the buttons
choicesButtons.classList.remove('hide');
choicesButtons.classList.add('show');

// Adding text to the buttons

for (var i=0; i< 4; i++) {
    buttons[i + 1].textContent = (quizQuestions[0].choice[i]);
}
    }


// FUNCTION: Showing the next question - call this on click of a correct answer 
// if answer element is clicked call this function - need to add answer element
// as one of the buttons 

// function showNextQuestion() {

//     for(i=0; i > 1 )
//     questionTitle.textContent = JSON.stringify(quizQuestions[i].question);
// }



