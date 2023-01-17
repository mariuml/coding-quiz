// Parsing array of scores from local storage

var highscoreArray = JSON.parse(window.localStorage.getItem('highscoreArray'));

//  Displaying the array on the page 

// GLOBAL VARIABLES:

var highscoreOrderedList = document.getElementById("highscores");

displayHighscores();

function displayHighscores() {

    for (var i=0; i < highscoreArray.length -1; i++) {

// creating variables store scores and initials 
var score = highscoreArray[i];
var initials = highscoreArray[i+1]

 // create a li element (list item) that we will append to our list later
 var li = document.createElement("li"); 

//  Setting text content for li items
li.textContent = initials + " - " + score;

// Append list item
highscoreOrderedList.appendChild(li);


}

}
