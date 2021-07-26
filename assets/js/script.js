var questions = [
    {
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

var startButton = document.querySelector(".start-button");
var starterBox = document.querySelector(".starterbox")
var quizBox= document.querySelector(".quizbox")
var finishedBox =document.querySelector('#finishedbox')
var resultbox =document.querySelector('#resultsbox')
var restartbutton= document.querySelector("#restart-button");

var questionSection=document.getElementById("questiontext");
var firstOption= document.getElementById("answer1");
var secondOption= document.getElementById("answer2");
var thirdOption= document.getElementById("answer3");
var fourthOption= document.getElementById("answer4");

var timeEl=document.getElementById("countdown");
var timeLeft;

var currentQuestion= {};

// var correctAnswer= ();
// fuction startGame() {

// }
console.log(questions[0])
startButton.addEventListener("click", function() {
    playquiz();
})

function playquiz(){
    // quiz=setUpQuestions(setQuestion);
    quizBox.style.removeProperty("display");
    starterBox.setAttribute("style","display:none");
    setUpQuestions(1)
    startTimer()
}

function setUpQuestions(){
    questionSection.textContent = questions[0].question;
    firstOption.textContent = questions[0].options[0];
    secondOption.textContent = questions[0].options[1];
    thirdOption.textContent = questions[0].options[2];
    fourthOption.textContent = questions[0].options[3];
    
}

// firstoption.addEventListener("click", function() {
//      console.log("this was clicked")
//     if (firstOption === questions[0].answer) {
//         timeLeft+10;
//     }

//  })


// function setUpQuestions() {

// }
function startTimer () {
      timeLeft=75;
 }

var timeInterval= setInterval(function () {
     if (timeLeft > 1) {
         timeEl.textContent = timeLeft;
         timeLeft--;
     } else if (timeLeft === 1) {
        timeLeft--;
     } else {
         clearInterval(timeInterval);
         timeEl.textContent='';
     }

 }, 1000)

 
firstOption.addEventListener("click", function() {
    console.log("this was clicked")
   if (firstOption === questions[0].answer) {
       timeLeft+10;
   }

})
// function startTimer() {
//     timeLeft= 10

//     timer= setInterval(function) {
//         timerCount--
//   if (timeLeft > 0)   {

//   }   
//     }
// }