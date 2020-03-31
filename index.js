function startQuiz() {
    $('.startQuiz').on('click', function (event) {
        renderQuestion();
        renderChoices();
        console.log("Start Quiz");
    });
}

function renderQuestion() {
    //render question
}

function renderChoices() {
    //render choices
}

function submitAnswer() {
    //listen for click function
    let selected = $('input:checked');
    let answer = selected.val();
    let correct = STORE[questionNumber].correctAnswer;
    if (answer === correct) {
        correctAnswer();
    } else {
        wrongAnswer();
    }
}

function updateScore() {
    //when right answer is selected, increment score
}

function updateQuestion() {
    //do this no matter what when an answer is submitted
}

function rightAnswer() {
    updateScoreandQuestion();
}

function wrongAnswer() {
    //don't need to increment question or score
}

function nextQuestion() {
    //listen for next button click function
}

function resetQuiz() {
    //listen for reset button click function
}

function mainQuizApp() {
    startQuiz();
    renderQuestion();
    renderChoices();
    resetQuiz();
  }
  
  $(mainQuizApp);