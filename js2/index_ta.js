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
    question: "O que são transtornos alimentares?",
    answers: [
      { text: "Apenas preocupações passageiras com a alimentação", correct: false },
      { text: " Escolhas conscientes de estilo de vida", correct: false },
      { text: " Distúrbios psicológicos que afetam os hábitos alimentares", correct: true },
      { text: "Problemas exclusivamente relacionados ao peso corporal", correct: false }
    ]
  },
  {
    question: "Como a mídia pode influenciar a percepção da imagem corporal?",
    answers: [
      { text: "Pode contribuir para padrões irrealistas e insalubres", correct: true },
      { text: "Não tem impacto na imagem corporal", correct: false },
      { text: "Promove uma variedade saudável de corpos", correct: false },
      { text: "Não está relacionada aos transtornos alimentares", correct: false }
    ]
  },
  {
    question: 'O que é a ortorexia?',
    answers: [
      { text: 'Uma preocupação obsessiva com alimentos saudáveis', correct: true },
      { text: 'Um transtorno alimentar relacionado à compulsão alimentar', correct: false },
      { text: ' Uma aversão extrema a determinados alimentos', correct: false },
      { text: "Nenhuma das alternativas", correct: false }
    ]
  },
  {
    question: 'A pressão da sociedade para ser magro não contribui para transtornos alimentares.',
    answers: [
      { text: "Verdade", correct: false },
      { text: "Mito", correct: true }
    ]
  },
  {
    question: 'Como é possível apoiar alguém que pode estar enfrentando um transtorno alimentar?',
    answers: [
      { text: 'Reforçar estereótipos alimentares', correct: false },
      { text: 'Oferecer apoio emocional e sugerir ajuda profissional', correct: true },
      { text: 'Ignorar o assunto para evitar desconforto', correct: false },
      { text: 'Criticar suas escolhas alimentares', correct: false }
    ]
  },
  {
    question: 'Qual é a importância da detecção precoce dos transtornos alimentares?',
    answers: [
      { text: 'Não é importante, pois os transtornos alimentares não são graves' },
      {text: 'Ajuda a prevenir complicações físicas e psicológicas', correct: true },
      { text: 'Pode agravar os sintomas', correct: false },
      { text: ' Detectar precocemente não faz diferença no tratamento', correct: false }
    ]
  },

]