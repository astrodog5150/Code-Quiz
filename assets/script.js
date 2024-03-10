document.getElementById('start-btn').addEventListener('click', startQuiz);

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const timerElement = document.getElementById('timer');
let timer;
let timeRemaining = 60; // Set the initial time in seconds
let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Transfer Markup Language'],
        correctAnswer: 'Hyper Text Markup Language'
    },
    {
        question: 'Which of the following is used to style web pages?',
        options: ['HTML', 'CSS', 'JavaScript', 'XML'],
        correctAnswer: 'CSS'
    },
    {
        question: 'What does CSS stand for?',
        options: ['Counter Strike: Source', 'Corrective Style Sheet', 'Computer Style Sheet', 'Cascading Style Sheet'],
        correctAnswer: 'Cascading Style Sheet'
    },
    {
        question: 'Which keyword is used to declare a variable in JavaScript?',
        options: ['var', 'let', 'const', 'variable'],
        correctAnswer: 'var'
    },
    {
        question: 'In JavaScript, what is the purpose of the "console.log" statement?',
        options: ['To print something on the console', 'To create a new variable', 'To define a function', 'To add styles to an element'],
        correctAnswer: 'To print something on the console'
    },
    {
        question: 'Which HTML tag is used for creating a hyperlink?',
        options: ['<a>', '<link>', '<href>', '<url>'],
        correctAnswer: '<a>'
    },
    {
        question: 'What does the acronym DOM stand for in web development?',
        options: ['Document Object Model', 'Data Object Model', 'Dynamic Object Model', 'Document Oriented Model'],
        correctAnswer: 'Document Object Model'
    },
    {
        question: 'How do you comment in CSS?',
        options: ['// This is a comment', '/* This is a comment */', '<!-- This is a comment -->', '# This is a comment'],
        correctAnswer: '/* This is a comment */'
    }
];

function startQuiz() {
    startTimer();
    displayNextQuestion();
    document.getElementById('start-btn').style.display = 'none';
}

function startTimer() {
    timer = setInterval(function () {
        if (timeRemaining > 0) {
            timeRemaining--;
            timerElement.textContent = `Time: ${timeRemaining}s`;
        } else {
            endQuiz();
        }
    }, 1000);
}

function displayNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        quizContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;

        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', function () {
                checkAnswer(option, currentQuestion.correctAnswer);
            });
            quizContainer.appendChild(button);
        });
    } else {
        endQuiz();
    }
}

function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        score++;
    } else {
        timeRemaining -= 10; // Subtract 10 seconds for incorrect answers
    }

    currentQuestionIndex++;
    displayNextQuestion();
}

function endQuiz() {
    clearInterval(timer);
    timerElement.textContent = 'Time: 0s';
    quizContainer.innerHTML = `<h2>Quiz Over!</h2><p>Your final score is ${score}.</p>`;

    // You can add code here to store the score or perform any other end-of-quiz actions
}