let questions = [
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
var quizbox= document.querySelector(".quizbox")
var restartbutton= document.querySelector("#restart-button");
// var correctAnswer= ();
// fuction startGame() {

// }
startbutton.addEventListener("click", function() {
    quizbox.classList.add("activeinfo");
})

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