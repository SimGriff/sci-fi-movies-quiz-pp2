// Variables added
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const quizContainerElement = document.getElementById("quiz-question-container");
const questionElement = document.getElementById("quiz-question");
const answerButtonsElement = document.getElementById("quiz-selection");
const quizProgress = document.getElementById("quiz-progress");
const quizResults = document.getElementById("quiz-results");
const yourScore = document.getElementById("your-score");

// Main functions

function startQuiz () {

}

function quizProgress () {

}

function displayQuestion () {

}
function chooseAnswer () {

}

function setAnswerColor () {

}

function clearAnswerColor () {
    
}

function getNextQuestion () {

}

function resetPage () {

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
