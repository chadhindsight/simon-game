const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

let level = 0;

$(document).keypress(function(){
    if(started) {
        $("#level-title").text(`"Level "${level}`);
        nextSequence();
        started = true;
    }
})

// Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$('btn').click(function(){
    let userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
})

function nextSequence() {
    let randomNumber = Math.round(Math.random() * 4);
    //Create a new variable called randomChosenColor and use the randomNumber from step 2 to select a random color from the buttonColours array.
    let randomChosenColor = buttonColors[randomNumber]
    // Push it to gamePattern array
    gamePattern.push(randomChosenColor)

    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
    
}

function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();

}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}