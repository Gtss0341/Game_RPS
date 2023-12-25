const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  switch (result) {
    case "YOU WIN!":
      document.getElementById("resultDisplay").style.color =
        "hsl(120, 100%, 50%)";
      playerScore++;
      playerScoreDisplay.innerHTML = playerScore;
      break;
    case "YOU LOSE!":
      document.getElementById("resultDisplay").style.color =
        "hsl(0, 100%, 50%)";
      computerScore++;
      computerScoreDisplay.innerHTML = computerScore;
      break;
    default:
      document.getElementById("resultDisplay").style.color = "black";
  }
}
