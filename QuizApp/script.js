const quizData = [{
        question: 'What does HTML stand for?',
        answerA: 'Hypertextual Making Looks',
        answerB: 'Hypertext Markup Language',
        answerC: 'Hypertexual Mark',
        answerD: 'Hypertext Marking Language',
        correct: 'answerB'
    },
    {
        question: 'What does CSS stand for?',
        answerA: 'Class Style Sheets',
        answerB: 'Cascading Style Sheets',
        answerC: 'All of these',
        answerD: 'Cascading Sheet Style',
        correct: 'answerB'
    },
    {
        question: 'HTML tags are composed of?',
        answerA: 'An opening tag',
        answerB: 'Content',
        answerC: 'All of these',
        answerD: '< >',
        correct: 'answerC'
    },
    {
        question: 'Tag for an ordered list?',
        answerA: '<dl>',
        answerB: '<ul>',
        answerC: '<tr>',
        answerD: '<ol>',
        correct: 'answerD'
    },
    {
        question: 'JavaScript was developed by?',
        answerA: 'Brendan Eich',
        answerB: 'Sir Java Script of Scotland',
        answerC: 'Elon Musk',
        answerD: 'I. P. Freely',
        correct: 'answerA'
    },
]

const quizEl = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.answerA;
    b_text.innerText = currentQuizData.answerB;
    c_text.innerText = currentQuizData.answerC;
    d_text.innerText = currentQuizData.answerD;
}

function getSelected() {
    // console.log(answersEl);
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    // console.log(answer);
    return answer;
}

function deselectAnswers() {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check the answer
    const answer = getSelected();
    // console.log(quizData[currentQuiz].correct);
    // console.log(answer);
    if (answer) {
        if (answer == quizData[currentQuiz].correct) {
            score++;
            //console.log(answer + score);
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h3>You answer correctly 
            ${score} out of ${quizData.length} questions.</h3>`;
        }
    }

});