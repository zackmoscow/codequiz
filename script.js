//VARIABLES
var secondsLeft = (15 * questions.length);
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");

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



//QUIZ START
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    $("#landing").hide();
    gameTimer();
}




