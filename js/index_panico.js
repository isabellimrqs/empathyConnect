const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState();
  
  if (questions.length === currentQuestionIndex) {
    return finishGame();
  }

  $questionText.textContent = questions[currentQuestionIndex].question;
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAnswer = document.createElement("button");
    newAnswer.classList.add("button", "answer");
    newAnswer.textContent = answer.text;
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct;
    }
    $answersContainer.appendChild(newAnswer);

    newAnswer.addEventListener("click", selectAnswer);
  });
}


function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "O que é trantorno do pânico?",
    answers: [
      { text: "Uma fobia específica de lugares fechados.", correct: false },
      { text: " Uma condição caracterizada por medo intenso e repentino, acompanhado por sintomas físicos.", correct: true },
      { text: " Uma forma de ansiedade social.", correct: false },
      { text: " Um distúrbio do sono, relacionado a pesadelos frequentes.", correct: false }
    ]
  },
  {
    question: "Quanto tempo dura, em geral, um episódio de ataque de pânico?",
    answers: [
      { text: "Minutos", correct: true },
      { text: "Horas", correct: false },
      { text: "Dias", correct: false },
      { text: "Semanas", correct: false }
    ]
  },
  {
    question: 'O trantorno do pânico está mais associado a qual faixa etária?',
    answers: [
      { text: 'Adolecentes', correct: false },,
      { text: 'Crianças', correct: false },
      { text: ' Idosos', correct: false },
      { text: "Adultos jovens", correct: true }
    ]
  },
  {
    question: ' Pessoas com trantornos do pânico estão sempre em pânico; é um condição constante.',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: 'Como é possível apoiar alguém que pode esta enfrentando o transtorno do pânico?',
    answers: [
      { text: 'Desvalorizar ou minimizar a experiência da pessoa.', correct: false },
      { text: 'Forçar a enfrentar os medos.', correct: false },
      { text: 'Oferecer uma solução única, pois todas as pessoas são iguais.', correct: false },
      { text: 'Oferecer apoio emocional, e ajuda de um profissional.', correct: true }
    ]
  },
  {
    question: 'Qual é a importância da detecção precoce do trantorno do pânico?',
    answers: [
      { text: 'Não é importante, pois o transtorno do pânico não é grave', correct: false},
      {text: 'Elimina a necessidade de tratamento psicológico.', correct: false },
      { text: 'Possibilita a intervenção e tratamento mais eficaz ', correct: true },
      { text: 'Piora o sintoma, pois as pessoas não querem ser ajudadas', correct: false }
    ]
  },

]