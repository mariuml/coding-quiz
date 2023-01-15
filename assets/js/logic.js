

// Iterate over object of questions in a for loop to dispaly on the page



// GLOBAL VARIABLES: Creating a variable for the start button and screens

var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions")

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

// Go through object an insert text content 
 var questionTitle = document.querySelector("#question-title");


 
 questionTitle.textContent = JSON.stringify(quizQuestions[0].question);




// Add question title in the h2 (ID question-title)


// Add choices 4 new buttons (styling will be auto applied)

// Add button class to the inserted choices
    }




// div id=start-screen disappears


// div id=questions appears


// In div ID=questions insert:

// question title into ID=question title


// multiple choices added as list items in the div ID=choices