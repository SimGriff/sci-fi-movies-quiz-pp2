// Variables added
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const quizContainerElement = document.getElementById("quiz-question-container");
const questionElement = document.getElementById("quiz-question");
const answerButtonsElement = document.getElementById("quiz-selection");
const quizProgress = document.getElementById("quiz-progress");
const quizResults = document.getElementById("quiz-results");
const yourScore = document.getElementById("your-score");

let score = 0; /* keeping track of user score (correct answers) */

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
currentQuestionIndex++;
getNextQuestion();
quizProgress();
});

// Main functions

function startQuiz () {
    startButton.classList.Add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    quizContainerElement.classList.remove("hide");
    getNextQuestion();
}

function quizProgress() {

}

function displayQuestion() {
    questionElement.innerText = question.question;
    question.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerText = answers.text;
        button.classList.add("btn");
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", chooseAnswer);
        answerButtonsElement.appendChild(button);
    });
}
function chooseAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
} else {
    startButton.classList.remove("hide");
    startButton.innerText="Restart";
    }
}

function setAnswerColor(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add("btn-correct");
    } else {
        element.classList.add("btn-incorrect");
    }
}

function clearAnswerColor(element) {
    element.classList.remove("btn-correct");
    element.classList.remove("btn-incorrect");
}

function getNextQuestion() {
    resetPage();
    displayQuestions(shuffledQuestions[currentQuestionIndex]);
    questionNumber++;
}

function resetPage() {
    clearStatusClass(document.body); 
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}



// My list  of Questions
const questions = [
    {
        question: "What are the androids in Bladerunner called?",
        answers: [
            { text: "Doubles", correct: false },
            { text: "Replicants", correct: true },
            { text: "Cylons", correct: false },
            { text: "Carbon copies", correct: false },
        ]
    },
    {
        question: "Which of these popular sci-fi movie franchises has the most films?",
        answers: [
            { text: "Star Trek", correct: true },
            { text: "Star Wars", correct: false },
            { text: "The Matrix", correct: false },
            { text: "Terminator", correct: false },
        ]
    },
];
