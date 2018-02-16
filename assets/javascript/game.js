
 alert("The Script is linked!");


var targetDiv = document.getElementById("photoPlaceHolder");

// We then use the JavaScript method ".innerHTML" to change the content to "Hello friends!"
targetDiv.innerHTML = "imgBank.[1]"

// All words will be pulled from the word bank

var wordBank =[
    "cat",
    "dog",
    "bird",
    "horse",
    "mouse",
    "cow" 
]

// letter bank will be used to show buttons
var letterBank = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"
]

// imgBank will be used for 
var imgBank =[
    "assets/images/bird.jpg",
    "assets/images/cat.jpg",
    "assets/images/cow.jpg",
    "assets/images/dog.jpg",
    "assets/images/horse.jpg"

]

// for( i=0; i<imgBank.length; i++){
//     console.log(imgBank[i]);
// }

// Create buttons from letter bank and append them to the info section

// I found this solution in the fridge exercise, just an fyi

for (i = 0; i < letterBank.length; i++){
    var letterBtn = $("<button>");
   letterBtn.addClass("letter-btn");
    letterBtn.attr("data-letter", letterBank [i]);
    letterBtn.text(letterBank[i]);
    letterBtn.appendTo("#info");
}


