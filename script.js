const quizData = [
    {
        question: "Что означает логотип BMW?",
        a: "Пропеллер самолета на фоне голубого фона",
        b: "Шахматная доска",
        c: "Крылья бабочки",
        d: "Песочные часы",
        correct: "a",
    },
    {
        question: "Что означает Volkswagen в переводе с немецкого?",
        a: "Удобный автомобиль",
        b: "Автомобиль из будшего",
        c: "Автомобиль для людей",
        d: "Автомобиль для городской жизни",
        correct: "c",
    },
    {
        question: "В какой из этих стран принято левостороннее движение?",
        a: "Франция",
        b: "Германия",
        c: "Эстония",
        d: "Австралия",
        correct: "d",
    },
    {
        question: "От чего произошло слово фара?",
        a: "От слова фонарь",
        b: "От названия острова Фарос",
        c: "От святого Фарида",
        d: "От слова фанфары",
        correct: "b",
    },
    {
        question: "Какой автомобиль был у агента 007 Джеймса Бонда?",
        a: "Mercedes-Benz",
        b: "BMW",
        c: "Aston Martin",
        d: "Porsche",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
            <h2>Вы правильно ответили на ${score}/${quizData.length} вопросов</h2>
            <button onclick="history.go(0)">Пройти тест заново</button>
        `;
        }
    }
});