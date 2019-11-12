//VARIABLES
var header = document.querySelector("#header");
var questionBody = document.querySelector("#questionBody");
var endQuiz = document.querySelector("#endQuiz");
var secondsLeft = (15 * questions.length);
var timer = document.querySelector("#timer");
var score = 0
var startButton = document.querySelector("#startButton");
var questionText = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var i = 0;
var submitButton = document.querySelector("#submitbutton");


//HIDE QUESTION BODY AND END QUIZ CONTAINERS
$("#questionBody").hide();
$("#endQuiz").hide();

//TIMER

function gameTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time remaining: " + secondsLeft;

        if (secondsLeft <=0) {
            clearInterval(timerInterval);
            timer.textContent = "Time's Up!";
            endTheQuiz();
        }
    }, 1000);
};

//QUIZ START

startButton.addEventListener("click", startQuiz)

function startQuiz() {
    $("#landing").hide();
    gameTimer();
    firstQuestion();
}

//QUESTIONS & VERIFICATION

function firstQuestion() {
    $("#questionBody").show();
    dispQuestions(i);
    $(answer1).click(function() {
        answerVerify(answer1);
    });
    $(answer2).click(function() {
        answerVerify(answer2);
    });
    $(answer3).click(function() {
        answerVerify(answer3);
    });
    $(answer4).click(function() {
        answerVerify(answer4);
    });
}

function dispQuestions(i) {
    questionText.textContent = questions[i].title;
    answer1.textContent = questions[i].choices[0];
    answer2.textContent = questions[i].choices[1];
    answer3.textContent = questions[i].choices[2];
    answer4.textContent = questions[i].choices[3];
}

function answerVerify(element) {
    if (element.textContent === questions[i].answer) {
      displayResult("Correct!");
      score = score + secondsLeft;
    } else {
      secondsLeft = secondsLeft - 10;
      displayResult("Wrong! Correct answer is: " + questions[i].answer);
    };
    i++;
    if (i === questions.length) {
        setTimeout(function(){
            endTheQuiz();
          }, 1000);
    } else {
        dispQuestions(i);
    };
}
  
function displayResult(message) {
    $("#verify").html(message);
}

//END QUIZ

function endTheQuiz() {
    $("#questionBody").hide();
    $("#endQuiz").show();
    secondsLeft = 0;
    timer.textContent = "Time's Up!";
    $("#score").html(score);
}

//LOCAL STORAGE

submitButton.addEventListener("click", tabulate);

function tabulate(event) {
    event.preventDefault();
    var userSubmission = document.querySelector("#initials").value + ": " + score;
    localStorage.setItem("UserScore", userSubmission);
    location.href = "https://zackmoscow.github.io/codequiz/highscores.html";
}
