const startGameButton = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const SCISSORS = "SCISSORS";
const PAPER = "PAPER";
const DEFAULT_CHOICE = ROCK;
let isGameRunning = false;

const getPlayerSelection = function () {
    const playerChoice = prompt("Please select your choice", "").toUpperCase();

    if (playerChoice !== ROCK && playerChoice !== PAPER && playerChoice !== SCISSORS) {
        alert(`Your choice does not match the allowed values, selecting ${DEFAULT_CHOICE}`);

        return DEFAULT_CHOICE;
    }

    return playerChoice;
};

startGameButton.addEventListener("click", function () {
    if (isGameRunning) {
        return;
    }

    isGameRunning = true;
    console.log("The game is starting!");

    const playerChoice = getPlayerSelection();

    console.log(playerChoice);
});
