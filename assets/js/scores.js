// Parsing array of scores from local storage

JSON.parse(window.localStorage.getItem('highscoreArray'));

//  Displaying the array on the page 

// GLOBAL VARIABLES:

var highscoreOrderedList = document.getElementById("highscores");

// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

//  Append list item to 
