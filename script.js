//VARIABLES
var secondsLeft = (15 * questions.length);
var timer = document.querySelector("#timer");


//TIMER

function gameTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timer.textContent = "Time's Up!";
        }
    }, 1000);
};

gameTimer();



