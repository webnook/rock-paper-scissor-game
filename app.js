// ROCK PAPER SCISSOR PROJECT
const choices = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;
// compare between playerChoice and computerChoice
const checkWinner = (player, computer) => {
  if (player === computer) return "draw";

  if (player === "rock") return computer === "scissor" ? "player" : "computer";

  if (player === "paper") return computer === "rock" ? "player" : "computer";

  return computer === "paper" ? "player" : "computer";
};
// show result function
const showResult = (result) => {
  if (result === "player") {
    console.log("You Win!");
    playerScore++;
  } else if (result === "computer") {
    console.log("You Lose!");
    computerScore++;
  } else {
    console.log("It's a Tie!!");
  }
  console.log(`Your Score : ${playerScore}`);
  console.log(`computer Score : ${computerScore}`);
  if (playerScore === 3) {
    console.log("You Are Winner");
  }
  if (computerScore === 3) {
    console.log("You lost the Game!");
  }
  console.log(".............");
};
const play = () => {
  // player choice given by prompt
  const playerChoice = prompt("Choose Rock,Paper,Scissor");
  // condition for player select cancel button or ok button with empty string
  if (choices.indexOf(playerChoice?.toLocaleLowerCase()) !== -1) {
    console.log(`You Choose ${playerChoice.toLocaleLowerCase()}`);
  } else {
    console.log("You Cheated");
    return;
  }
  // computer choice selection with choices array
  // generate random number that shows index of array choices number between 0-2
  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  console.log(`computer Chooses ${computerChoice}`);
  const gameResult = checkWinner(playerChoice, computerChoice);
  showResult(gameResult);
  play();
};
play();
