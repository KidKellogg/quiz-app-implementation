//handle starting the quiz
function startQuiz() {
    $('.startQuiz').on('click', function (event) {
        renderQuestion();
        console.log("Start Quiz");
    });
}
//render question
function renderQuestion() {
    //render question
    let question = STORE.questions[STORE.questionNum];
    updateQuestionScore();
    const questionHtml = $(`
        <div>
            <form class="question-area">
            <fieldset>
                <legend class="question-text">${question.question}</legend>
                <div class="choices">
                </div>
                <button type="submit" class="submit button">Submit</button>
                <button type="button" class="next-question button">Next</button>
            </fieldset>
            </form>
        </div>`);
    $("main").html(questionHtml);
    renderChoices();
    $(".next-question").hide();
}
//render choices
function renderChoices() {
    //render choices
    let question = STORE.questions[STORE.questionNum];
    for (let i = 0; i < question.options.length; i++) {
        $('.choices').append(`
        <input type = "radio" name="options" id="option${i + 1}" value= "${i + 1}" required> 
        <label for="option${i + 1}"> ${question.options[i]}</label>
        <div class="rightWrong${i + 1}"></div> <br/>
    `);
    }
}
//render question and score
function updateQuestionScore() {
    const html = $(`<ul>
      <li class="answeredDisplay">Question: ${STORE.questionNum + 1}/${STORE.questions.length}</li>
      <li class="scoreDisplay">Score: ${STORE.score}/${STORE.questions.length}</li>
    </ul>`);
    $(".question-and-score").html(html);
}
//handle answer
function handleAnswer() {
    $('main').on('submit', 'form', (event) => {
        event.preventDefault();
        const answer = event.target.options.value;
        const question = STORE.questions[STORE.questionNum];
        if (answer === question.answer) {
            STORE.score++;
            console.log("Correct");
            $(`.rightWrong${answer}`).html('Correct!');
        } else {
            $(`.rightWrong${question.answer}`).html('Wrong! This is the correct answer.');
        }
        $(".next-question").show();
        $(".submit").hide();
    });
}
//handle question
function nextQuestion() {
    //listen for next button click function
    $('body').on('click', '.next-question', (event) => {
        event.preventDefault();
        if (STORE.questionNum === STORE.questions.length - 1) {
            displayResults();
        } else {
            STORE.questionNum++; //Model
            renderQuestion();
        }
        updateQuestionScore();
    });
}
//render the final results
function displayResults() {
    const resultsHtml = $(`
        <div>
            <p>You got ${STORE.score} correct.</p>
            <button type="submit" class="reset button">Reset</button>
        </div>`);
    $("main").html(resultsHtml);
}
//handle resetting quiz
function resetQuiz() {
    //listen for reset button click function
    $('main').on('click', '.reset', (event) => {
        STORE.questionNum = 0;
        STORE.score = 0;
        renderQuestion();
    });
}
//main listener - entry point
function mainQuizApp() {
    startQuiz();
    handleAnswer();
    nextQuestion();
    resetQuiz();
}

$(mainQuizApp);