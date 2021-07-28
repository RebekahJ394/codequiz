var questions = [
    {
        question: "What does HTML stand for?",
        correctAnswer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Markup Lingustics",
            "Heighted Text Makeup Langauge",
            "Hyper Tasted Markup Linguini",
            "Hyper Text Markup Language"
        ]
    },
    {
        question: "What does CSS stand for?",
        correctAnswer: "Cascading Style Sheet",
        options: [
            "Capable Style Sheet",
            "Colorful Stylistic Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
     },
    {
        question: "What does a String represent?",
        correctAnswer: "Text",
        options: [
            "Numbers",
            "Text",
            "Threads",
            "Every Variable Ever"
        ]
    },
    {
        question: "What's the most common title for your HTML code to be stored?",
        correctAnswer: "index.html",
        options: [
            "beginning.html",
            "introduction.code",
            "index.html",
            "barebones.code"
        ]
    },
        {
        question: "Who is considered the 'father of the computer'?",
        correctAnswer: "Charles Babbage",
        options: [
            "Albert Einstein",
            "Jeff Bezos",
            "Tom Lovington",
            "Charles Baggage"
        ]
    },
];

var startButton = document.querySelector(".start-button");
var starterBox = document.querySelector(".starterbox");
var quizBox= document.querySelector(".quizbox");
var finishedBox =document.querySelector('#finishedbox');
var submitButton = document.querySelector('#submitbutton');
var resultbox =document.querySelector('#resultsbox');
var restartbutton= document.querySelector("#restart-button");
var resultlist= document.querySelector("#results-list");

var questionSection=document.getElementById("questiontext");
var firstOption= document.getElementById("answer1");
var secondOption= document.getElementById("answer2");
var thirdOption= document.getElementById("answer3");
var fourthOption= document.getElementById("answer4");

var timeEl=document.getElementById("countdown");
var timeLeft;
var score = 0;
var scoreNum= document.getElementById("scoreNum");
var questionNum = 0;
var currentQuestion= {};



// var correctAnswer= ();
// fuction startGame() {

// }

console.log(questions)
startButton.addEventListener("click", function() {
    playquiz();
})

function playquiz(){
    // quiz=setUpQuestions(setQuestion);
    console.log("quiz started")
    quizBox.style.removeProperty("display");
    starterBox.setAttribute("style","display:none");
    setUpQuestions(1)
    startTimer()
}

function setUpQuestions(){
    questionSection.textContent = questions[questionNum].question;
    firstOption.textContent = questions[questionNum].options[0];
    secondOption.textContent = questions[questionNum].options[1];
    thirdOption.textContent = questions[questionNum].options[2];
    fourthOption.textContent = questions[questionNum].options[3];
    
}
 console.log(questions[0].correctAnswer)
 console.log(questions[0].options[3])


function startTimer () {
      timeLeft=75;
 

var timeInterval= setInterval(function () {
     if (timeLeft >= 0) {
         timeEl.textContent = timeLeft;
         timeLeft--;
     } else if (timeLeft === 1) {
        timeLeft--;
     } else {
         clearInterval(timeInterval);
         timeEl.textContent='';
     } 
 }, 1000)
}
 
fourthOption.addEventListener("click", function() {
    // console.log("this was clicked")
    console.log(fourthOption.textContent)
   if (fourthOption.textContent === questions[questionNum].correctAnswer) {
       score+=10;
       console.log(score);
   } else {
       timeLeft= timeLeft - 10;
   }
      // increment questionNumber
   questionNum += 1
   // evaluate whether or not quiz is done
   if (questionNum === 5 || timeLeft === 0) {
       endOfGame()
   }
   else {
       // run the function to render the next question
   setUpQuestions()
   }
})

firstOption.addEventListener("click", function() {
    // console.log("this was clicked")
    console.log(firstOption.textContent)
   if (firstOption.textContent === questions[questionNum].correctAnswer) {
       score+=10;
       console.log(score);
   } else {
       timeLeft= timeLeft - 10;
   }
      // increment questionNumber
   questionNum += 1
   // evaluate whether or not quiz is done
   if (questionNum === 5 || timeLeft === 0) {
       endOfGame()
   }
   else {
       // run the function to render the next question
   setUpQuestions()
   }
})

secondOption.addEventListener("click", function() {
    // console.log("this was clicked")
    console.log(secondOption.textContent)
   if (secondOption.textContent === questions[questionNum].correctAnswer) {
       score+=10;
       console.log(score);
   } else {
       timeLeft= timeLeft - 10;
   }
      // increment questionNumber
   questionNum += 1
   // evaluate whether or not quiz is done
   if (questionNum === 5 || timeLeft=== 0) {
       endOfGame()
   }
   else {
       // run the function to render the next question
   setUpQuestions()
   }
})

thirdOption.addEventListener("click", function() {
    // console.log("this was clicked")
    console.log(thirdOption.textContent)
   if (thirdOption.textContent === questions[questionNum].correctAnswer) {
       score+=10;
       console.log(score);
   } else {
       timeLeft= timeLeft - 10;
   }
   
   questionNum += 1
   
   if (questionNum === 5 || timeLeft === 0) {
       endOfGame()
   }
   else {
   setUpQuestions()
   }
})

function endOfGame() {
    finishedBox.style.removeProperty("display");
    quizBox.setAttribute("style","display:none");
    scoreNum.textContent = score
}

function saveResult(){
    var result = {
         resultlist: resultlist.nodeValue
     };
     localStorage.setItem("result",JSON.stringify(result));
 }

 function renderResult() {
     var postedResult = JSON.parse(localStorage.getItem("result"));

 if (postedResult !== null) {
     
     resultlist.innerHTML = result.resultlist;
 } else {
     return;
 }
 }

submitButton.addEventListener("click", function(event) {
    console.log("submitted clicked");
    resultbox.style.removeProperty("display");
    finishedBox.setAttribute("style","display:none");
    
    event.preventDefault();
    saveResult();
    renderResult();

})


