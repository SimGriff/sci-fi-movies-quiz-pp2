// Variables added
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const quizContainerElement = document.getElementById("quiz-question-container");
const questionElement = document.getElementById("quiz-question");
const answerButtonsElement = document.getElementById("quiz-selection");
/*const quizProgress = document.getElementById("quiz-progress");*/
const quizResults = document.getElementById("quiz-results");
const yourScore = document.getElementById("your-score");

let shuffledQuestions;
let currentQuestionIndex;
let questionNumber = 0;
let score = 0; /* keeping track of user score (correct answers) */

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
currentQuestionIndex++;
getNextQuestion();
quizProgress();
});

// Main functions - Main features/structure used following video tutorial at Web Dev Simplified, this was modified to fit my quiz with many new features added

// Starts running the quiz
function startQuiz() {
    quizResults.classList.add("hide");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    quizProgress();
    quizContainerElement.classList.remove("hide");
    getNextQuestion();
}

// To show user current question no. & total questions
function quizProgress() {
    var questionNumber = currentQuestionIndex+1;
    var element = document.getElementById("quiz-progress");
    element.innerHTML = "Question " + questionNumber + " of " + questions.length;
}

// Increments score
function correctAnswers(isCorrect) {
    if (!isCorrect){
        return;
    }
    score++;
}

// Prepares next question
function getNextQuestion() {
    resetPage();
    displayQuestion(shuffledQuestions[currentQuestionIndex]);
    questionNumber++;
}

// Shows Question
function displayQuestion(question) {
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

// Resets everything to default state before next question
function resetPage() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Responds to users selection, providing feedback on correct/incorrect answer
function chooseAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    correctAnswers(correct);/*got really stuck on the score increment - stackoverflow solution to similar problem*/
    setAnswerColor(selectedButton, correct);/*got really stuck on limiting color change to selected button - stackoverflow solution to similar problem*/
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    disable();
    nextButton.classList.remove("hide");
} else {
// setTimeout feature used following advice from Ger at Tutor Support,this allowed final question & user feedback (btn color)to be visible
    setTimeout(()  => endGame(), 1100)
}
}
// from stackoverflow & W3Schools this disabled all buttons including next.Changed start/next to have their own class to fix
function disable() {
    let buttons = document.querySelectorAll('.btn') /*selects all btn class*/
    for(let i = 0; i < buttons.length; i++){
        buttons[i].disabled = true;
    }
  }

// Sets selected button color to green/red if answer correct/incorrect
function setAnswerColor(element, correct) {
    clearAnswerColor(element);
    if(correct) {
        element.classList.add("btn-correct");
    } else {
        element.classList.add("btn-incorrect");
    }
}

// Resets button color to default ready for next question
function clearAnswerColor(element) {
    element.classList.remove("btn-correct");
    element.classList.remove("btn-incorrect");
}

// Shows final page after all questions answered,user score/message and restart button shown
function endGame() {
    quizContainerElement.classList.add("hide");
    quizResults.classList.remove("hide");
    disable();
    quizResults.innerText = "Your Score \r\n" + score + "/" + questions.length + "\r\n" + finalMessage();
    startButton.classList.remove("hide");
    startButton.innerText="Restart";
}
// Message to be displayed on results page-dependant on user's score
function finalMessage(){
    if (score < 4) {
        return "Better Luck Next Time";
      } else if (score > 4 && score < 10) {
        return "Well Done!"; 
      } else {
        return "Perfect Score!";
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
        question: "The android found by Starfleet in 2338 as sole survivor on Omicron Theta?",
        answers: [
            { text: "Wall-E", correct: false },
            { text: "Data", correct: true },
            { text: "Alpha", correct: false },
            { text: "Max", correct: false },
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
    {
        question: "Which of these popular sci-fi movies is NOT based on a book?",
        answers: [
            { text: "Ender’s Game", correct: false },
            { text: "Galaxy Quest", correct: true },
            { text: "Jurassic Park", correct: false },
            { text: "Blade Runner", correct: false },
        ]
    },
    {
        question: "Who directed the movie based on Do Androids Dream of Electric Sheep?",
        answers: [
            { text: "Tony Scott", correct: false },
            { text: "Steven Spielberg", correct: false },
            { text: "George Lucas", correct: false },
            { text: "Ridley Scott", correct: true },
        ]
    },
    {
        question: "Which Schwarzenegger movie is based on a story by Philip K. Dick??",
        answers: [
            { text: "The Terminator", correct: false },
            { text: "Total Recall", correct: true },
            { text: "Running Man", correct: false },
            { text: "Twins", correct: false },
        ]
    },
    {
        question: "'Judge Dredd' was based on the character from which comic?",
        answers: [
            { text: "Buck Rogers", correct: false },
            { text: "2000 A.D.", correct: true },
            { text: "Dan Dare", correct: false },
            { text: "Flash Gordon", correct: false },
        ]
    },
    {
        question: "Which character was described as 'part man, part machine, all cop'?",
        answers: [
            { text: "Ro-Man", correct: false },
            { text: "Bishop", correct: false },
            { text: "The Terminator", correct: false },
            { text: "Robocop", correct: true },
        ]
    },
    {
        question: "'2001: A Space Odyssey' was based on a short story by whom?",
        answers: [
            { text: "Arthur C. Clarke", correct: true },
            { text: "Philip K Dick", correct: false },
            { text: "H.G. Wells", correct: false },
            { text: "Frank Herbert", correct: false },
        ]
    },
    {
        question: "What was the title of the 2016 Star Trek movie outing?",
        answers: [
            { text: "The Wrath of Khan", correct: false },
            { text: "Nemesis", correct: false },
            { text: "Star Trek", correct: false },
            { text: "Beyond", correct: true },
        ]
    },

];
