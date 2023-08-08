const question = [
    {
        question: " What is the full form of HTML? ",
        answer:[
            { text: "Hypertext makeup language", correct: false},
            { text: "Hypertext markup language", correct: true},
            { text: "Hyphen markup language", correct: false},
            { text: "Hypertext marks language", correct: false},


        ]
    },
    {
        question: " What is the full form of CSS?",
        answer:[
            { text: "Cascading style sheep", correct: false},
            { text: "Cascading style sheets", correct: true},
            { text: "Cartoon style sheets", correct: false},
            { text: "Cascading super sheets", correct: false},


        ] 
    },
    {
        question: " What is the full form of JS?",
        answer:[
            { text: "JavaSuper", correct: false},
            { text: "JavaSection", correct: false},
            { text: "JustScript", correct: false},
            { text: "JavaScript", correct: true},


        ] 
    },
    {
        question: " What is the full form of HTTP?",
        answer:[
            { text: "Hypertext transfer protocol", correct: true},
            { text: "Hypertext transfer product", correct: false},
            { text: "Hey transfer protocol", correct: false},
            { text: "Hypertext test protocol", correct: false},


        ] 
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}


function showQuestion(){
    resetState();
let currentQuestion = question[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answer.forEach(answer => {
  const button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerButtons.appendChild(button);
  if(answer.correct){
    button.dataset.correct = answer.correct;
  }
  button.addEventListener("click", selectAnswer);

});

}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
   const selectBtn = e.target;
   const iscorrect = selectBtn.dataset.correct === "true";
   if(iscorrect){
    selectBtn.classList.add("correct");
    score++;

   }else{
    selectBtn.classList.add("incorrect");
   } 
   Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");

    }
    button.disabled = true;
   });
   nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
     nextButton.innerHTML = "Play Again";
     nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
if(currentQuestionIndex < question.length){
    showQuestion();

}else{
    showScore();

}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();

    }else{
        startQuiz();
    }
});


startQuiz();

