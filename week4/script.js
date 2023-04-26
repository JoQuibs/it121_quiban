const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn"); // buttons for results
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = checkWinner();
}));

function computerTurn(){ //this function is for the computer

  const randNum = Math.floor(Math.random() * 3) + 1;

  switch(randNum){
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}

function checkWinner(){ // this function is for the player
  if(player == computer){
    return "DRAW";
  }
  else if(computer == "ROCK"){
    return (player == "PAPER") ? "You WIN" : "You LOSE"
  }
  else if(computer == "PAPER"){
    return (player == "SCISSORS") ? "You WIN" : "You LOSE"
  }
  else if(computer == "SCISSORS"){
    return (player == "ROCK") ? "You WIN" : "You LOSE"
  }
  
}