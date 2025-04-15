const number = document.getElementById("number");
const persent = document.getElementById("persent");
const answer  = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    const userGuess = (answer.value)
  
    if (isNaN(userGuess)) {
      persent.textContent = "Number!";
      return;
    }
  
    if (secretNumber < userGuess) {
      persent.textContent = "Less";
      number.textContent = secretNumber;
    } 
    else if (secretNumber > userGuess) {
      persent.textContent = "More";
      number.textContent = secretNumber;
    }
    else {
      persent.textContent = "Win!";
      number.textContent = secretNumber;
    }
  });