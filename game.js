const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

// Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$('btn').click(function(){
    let userChosenColor = $(this).attr('id');

    userClickedPattern.push(userChosenColor);
})

function nextSequence() {
    let randomNumber = Math.round(Math.random() * 4);
    //Create a new variable called randomChosenColor and use the randomNumber from step 2 to select a random color from the buttonColours array.
    let randomChosenColor = buttonColors[randomNumber]
    // Push it to gamePattern array
    gamePattern.push(randomChosenColor)

    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    
}

function playSound(name) {
    let audio = new Audio(`sounds/${randomChosenColor}.mp3`);
    audio.play();

}

