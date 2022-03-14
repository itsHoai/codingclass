


//questions arrays
var questions = [
{
    title: "",
    choices: [1,2,3,4],
    answer: "1",
},
{
    tile: "",
    choices: [1,2,3,4],
    answer: "1",
},
];

//varibles
var start = document.querySelector("#startQuiz");
var timer = document.querySelector("timer");
var questionsdiv = document.querySelector("questions");

//function to render questions
function render(questions) {
    questionsdiv.innerHTML = "";
    questionsdiv.textContent = questions;  
}

//click button to start quiz and timer
start.addEventListener("click", function() {
    render(questions);
});
