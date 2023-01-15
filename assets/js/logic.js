

// Iterate over object of questions in a for loop to dispaly on the page


// On click of 'Start' button, 

var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");


startButton.addEventListener("click", hideStartScreen);
startButton.addEventListener("click", showQuestionScreen);


startButton.addEventListener("click" ,() => { 
    hideStartScreen();
    showQuestionScreen();
});

// Hide start screen on click function

function hideStartScreen() {
startScreen.remove();
}
// Bring up question screen function

function showQuestionScreen(){
    var questionScreen = document.getElementById("#questions");
    if (questionScreen.style.display === "none") {
        questionScreen.style.display = "block";
    } else {
        questionScreen.style.display = "none";
    }
  }

//   const invokeMe = () => console.log('I live here outside the scope');
//   const alsoInvokeMe = () => console.log('I also live outside the scope'); 
  
//   element.addEventListener('event',() => {    
//        invokeMe();
//        alsoInvokeMe();    
//   });

// div id=start-screen disappears


// div id=questions appears


// In div ID=questions insert:

// question title into ID=question title


// multiple choices added as list items in the div ID=choices