var questions = [
    {
        numb:1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Markup Lingustics",
            "Heighted Text Makeup Langauge",
            "Hyper Tasted Markup Linguini",
            "Hyper Text Markup Language"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Capable Style Sheet",
            "Colorful Stylistic Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
     },
    {
        numb: 3,
        question: "What does a String represent?",
        answer: "Text",
        options: [
            "Numbers",
            "Text",
            "Threads",
            "Every Variable Ever"
        ]
    },
    {
        numb: 4,
        question: "What's the most common title for your HTML code to be stored?",
        answer: "index.html",
        options: [
            "beginning.html",
            "introduction.code",
            "index.html",
            "barebones.code"
        ]
    },
        {
        numb: 5,
        question: "Who is considered the 'father of the computer'?",
        answer: "Charles Babbage",
        options: [
            "Albert Einstein",
            "Jeff Bezos",
            "Tom Lovington",
            "Charles Baggage"
        ]
    },
];

var startbutton = document.querySelector(".start-button");
var starterbox = document.querySelector(".starterbox")
var quizbox= document.querySelector(".quizbox")
var finishedbox =document.querySelector('#finishedbox')
var resultbox =document.querySelector('#resultsbox')
var restartbutton= document.querySelector("#restart-button");
var questionsection=document.querySelector("#questiontext");
var firstoption= document.querySelector("#answer1");
var secondoption= document.querySelector("#answer2");
var thirdoption= document.querySelector("#answer3");
var fourthoption= document.querySelector("#answer4");
// var correctAnswer= ();
// fuction startGame() {

// }
console.log(questions[0])
startbutton.addEventListener("click", function() {
    playquiz(questions);
})

function playquiz(){
    // quiz=setUpQuestions(setQuestion);
    quizbox.style.removeProperty("display");
    starterbox.setAttribute("style","display:none");
    setUpQuestions(0)
}

function setUpQuestions(){
    questionsection.textContent= questions.question;
    
}
// function setUpQuestions() {

// }
// function startTimer () {
//     var timeLeft=75
// }

// var timeInterval= setInterval(function) {
//     timercount--;

// }
// function startTimer() {
//     timeLeft= 10

//     timer= setInterval(function) {
//         timerCount--
//   if (timeLeft > 0)   {

//   }   
//     }
// }