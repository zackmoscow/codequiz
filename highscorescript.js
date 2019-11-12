var clearButton = document.querySelector("#clearbutton");

document.querySelector("#highscores").innerHTML = localStorage.getItem("UserScore");

clearButton.addEventListener("click", clear);

function clear(event) {
    event.preventDefault();
    localStorage.clear();
    document.querySelector("#highscores").innerHTML = localStorage.getItem("UserScore");
}