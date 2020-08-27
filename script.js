/**
 * This is a simple rock paper scissor game,
 * played against the computer.
 * Date:07/31/2020
 * @author:Ruchik Chaudhari
 */

//create references to buttons
const btnRock = document.querySelector("#rock");
const btnScissor = document.querySelector("#scissor");
const btnPaper = document.querySelector("#paper");

//refrences to other elements
let resultOutput = document.querySelector("#display");
let userScore = document.querySelector("#user");
let compScore = document.querySelector("#computer");

//add event listeners to those button
btnRock.addEventListener("click", rockEvent);
btnScissor.addEventListener("click", scissorEvent);
btnPaper.addEventListener("click", paperEvent);

//initialize the scores
let user = 0;
let comp = 0;

/**
 * When user chooses rock
 */
function rockEvent() {
  let computerSelection = computerPlay();
  playRound("rock", computerSelection);
}
/**
 * When user chooses scissor
 */
function scissorEvent() {
  let computerSelection = computerPlay();
  playRound("scissor", computerSelection);
}
/**
 * When user chooses paper
 */
function paperEvent() {
  let computerSelection = computerPlay();
  playRound("paper", computerSelection);
}

/**
 * Generate a random selection for computer play
 */
function computerPlay() {
  let options = ["rock", "paper", "scissor"];
  //get the random selection from the array
  let computerSelection = Math.floor(Math.random() * options.length);
  console.log("CS Selection= " + options[computerSelection].toLowerCase());
  return options[computerSelection].toLowerCase();
}

/**
 * The logic behind a single game between  
 * the computer and the user. 
 * @param {*} userSelection 
 * @param {*} computerSelection 
 */
function playRound(userSelection, computerSelection) {
  let result;

  //conditions for winning
  if (
    (userSelection === "rock" && computerSelection === "scissor") ||
    (userSelection === "scissor" && computerSelection === "paper") ||
    (userSelection === "paper" && computerSelection === "rock")
  ) {
    result = "Won";
    user++;
    userScore.textContent = user;
    resultOutput.textContent = `Computer chose: ${computerSelection}, wahho you won this round. Keep it up!!`;
  }

  //conditions for loosing
  else if (
    (userSelection === "rock" && computerSelection === "rock") ||
    (userSelection === "scissor" && computerSelection === "scissor") ||
    (userSelection === "paper" && computerSelection === "paper")
  ) {
    result = "Tie";
    resultOutput.textContent = `Computer chose: ${computerSelection}, it's a tie`;
  }

  //else you lose
  else {
    result = "Lost";
    comp++;
    compScore.textContent = comp;
    resultOutput.textContent = `Computer chose: ${computerSelection}, you lost this round.`;
  }

  fiveRound(user, comp);
}

/**
 * Keep track of the score and alert 
 * when there is a winner.
 * @param {*} userScore 
 * @param {*} compScore 
 */
function fiveRound(userScore, compScore) {
  if (userScore == 5 || compScore == 5) {
    if (userScore == 5) {
      resultOutput.textContent = "Congratulations!! You won this game!!(refresh to play agin)";
    } else {
      resultOutput.textContent = "Oops!! You lost this game.(refresh to play again)";
    }
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissor.disabled = true;
  }
}
