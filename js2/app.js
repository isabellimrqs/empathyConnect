const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");
let breathsLeft = 3;

// Watching for selected breaths from user
numberOfBreaths.addEventListener("change", () => {
  breathsLeft = numberOfBreaths.value;
  breathsText.innerText = breathsLeft;
});

// Grow/Shrink Circle
const growCircle = () => {
  circleProgress.classList.add("circle-grow");
  setTimeout(() => {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};

// Breathing Instructions
const breathTextUpdate = () => {
  breathsLeft--;
  breathsText.innerText = breathsLeft;
  instructions.innerText = "Inspire";
  setTimeout(() => {
    instructions.innerText = "Segure a respiração";
    setTimeout(() => {
      instructions.innerText = "Expire devagar";
    }, 4000);
  }, 4000);
};

// Breathing App Function
const breathingApp = () => {
  const breathingAnimtaion = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(breathingAnimtaion);
      instructions.innerText = "Sessão de respiração completa. Clique 'Começar' para iniciar outra sessão!";
      start.classList.remove("button-inactive");
      breathsLeft = numberOfBreaths.value;
      breathsText.innerText = breathsLeft;
      return;
    }
    growCircle();
    breathTextUpdate();
  }, 12000);
};

// Start Breathing
start.addEventListener("click", () => {
  start.classList.add("button-inactive");
  instructions.innerText = "Fique relaxado, e se prepare para começar a respirar";
  setTimeout(() => {
    instructions.innerText = "Respiração está prestes a se acalmar...";
    setTimeout(() => {
      breathingApp();
      growCircle();
      breathTextUpdate();
    }, 2000);
  }, 2000);
});