const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
function nextSequence() {
    let randomNumber = Math.round(Math.random() * 4);
    
    //Create a new variable called randomChosenColor and use the randomNumber from step 2 to select a random color from the buttonColours array.
    let randomChosenColor = buttonColors[randomNumber]

    // Push it to gamePattern array
    gamePattern.push(randomChosenColor)
}

