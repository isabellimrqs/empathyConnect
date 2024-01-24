let currentQuestionIndex = 0;
let score = 0;
let timerValue = 10;
let timerInterval;

const startQuiz = () => {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    startTimer();
    showQuestion();
};

const startTimer = () => {
    timerInterval = setInterval(() => {
        timerValue--;

        document.getElementById("timer").textContent = timerValue;

        if (timerValue <= 0) {
            checkAnswer(null);
        }
    }, 1000);
};

const showQuestion = () => {
    const question = questions[currentQuestionIndex];

    document.getElementById("question").textContent = question.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i];

        const optionDiv = document.createElement("div");
        optionDiv.classList.add("option");

        const optionImg = document.createElement("img");
        optionImg.src = option;
        optionImg.dataset.optionIndex = i.toString();

        optionImg.onclick = checkAnswer;

        optionDiv.appendChild(optionImg);
        optionsContainer.appendChild(optionDiv);
    }
};

const checkAnswer = (event) => {
    clearInterval(timerInterval);

    const clickedOptionImg = event ? event.target : null;

    if (clickedOptionImg && clickedOptionImg.tagName === "IMG") {
        if (clickedOptionImg.dataset.optionIndex === questions[currentQuestionIndex].correctIndex.toString()) {
            clickedOptionImg.classList.add("correct");
            score++;
        } else {
            clickedOptionImg.classList.add("wrong");
        }
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        timerValue = 10;
        setTimeout(() => {
            showQuestion();
            startTimer();
        }, 1000);
    } else {
        showEndScreen();
    }
};

const showEndScreen = () => {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("end-screen").style.display = "block";

    const finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
};

const restartQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    timerValue = 10; 
    showQuestion();
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    startTimer();
};


