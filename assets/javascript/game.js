//=== I could not get this to work.  It would be helpful if I could get more than just a few minutes of one on one time with a teacher or TA Thanks.  


alert("The Script is linked!");


// We then use the JavaScript method ".innerHTML" to change the content to "Hello friends!"
// targetDiv.appendTo("<img>")

// All words will be pulled from the word bank

var wordBank = [
    "cat",
    "dog",
    "bird",
    "horse",
    "mouse",
    "cow"
]

var wins = 0
var losses = 0
var guesses = 10
var usedLetters = [];
var underscoreWord = "";
var gameOver = false
var currentWord = $("#currentWord");



// letter bank will be used to show buttons
var letterBank = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"
]

// imgBank will be used for 
var imgBank = [
    "./assets/images/bird.jpg",
    "./assets/images/cat.jpg",
    "./assets/images/cow.jpg",
    "./assets/images/dog.jpg",
    "./assets/images/horse.jpg"

]


// for( i=0; i<imgBank.length; i++){
//     console.log(imgBank[i]);
// }
// start the game when button is clicked
$("button").on("click", function () {
    //pick random word
    randWord = function () {
        wordBank[Math.floor(Math.random() * wordBank.length)]
    },
        //push random word to div
        document.getElementById("currentWord").innerHTML = (wordBank[Math.floor(Math.random() * wordBank.length)])

        // display as dashes




    console.log(wordBank[Math.floor(Math.random() * wordBank.length)])
})




for (i = 0; i < letterBank.length; i++) {
    var letterBtn = $("<button>");
    letterBtn.addClass("letter-btn");
    letterBtn.attr("data-letter", letterBank[i]);
    letterBtn.text(letterBank[i]);
    letterBtn.appendTo("#info");
}

// button are now on the page. now add words to the solution section



    //==========================================

// Display currentWord as blanks

// document.getElementById("#currentWord") .innerText = wordBank[1];




// var choice = wordBank[Math.floor(Math.random() * wordbank[].length)];
// console.log(wordBank);
// // get the underscores
// for (var i = 0; i < wordbank[].length; i++) {
//     spaces.push("_");
// }
// // print underscores to screen
// document.getElementById("currentWord").textContent = spaces.join(" ");




