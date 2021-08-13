"use strict";

let ACTIVE_PLAYER = 0;

const player0 = {
    number: 0,
    currentScore: 0,
    currentScoreElm: document.getElementById("current--0"),
    totalScore: 0,
    totalScoreElm: document.getElementById("score--0"),
    isActive: true,
};

const player1 = {
    number: 1,
    currentScore: 0,
    currentScoreElm: document.getElementById("current--1"),
    totalScore: 0,
    totalScoreElm: document.getElementById("score--1"),
    isActive: false,
};

const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newGameBtn = document.querySelector(".btn--new");

const dice = document.querySelector(".dice");

const init = () => {
    console.log("Hola, we are starting");
    // Reset the player scores
    player0.currentScoreElm.textContent = "0";
    player0.totalScoreElm.textContent = "0";
    player1.currentScoreElm.textContent = "0";
    player1.totalScoreElm.textContent = "0";

    // Default the active player to 0
    player0.isActive = true;

    //Hide the dice
    dice.classList.add("hidden");

    //Backdrop of the current Active Player
    document.querySelector(`.player--${getActivePlayer().number}`).classList.add("player--active");

    rollDiceBtn.addEventListener("click", rollDiceBtnHandler);
    holdBtn.addEventListener("click", holdButtonHandler);
};

const rollDiceBtnHandler = () => {
    // Get a random number and show the image on the dom
    // If the dice rolls !== 1
    // Add the score the the currentActive player's currentScore
    // else switch the players

    const randomNumber = generateRandomNumber(1, 6);
    dice.classList.remove("hidden");
    dice.src = `dice-${randomNumber}.png`;
    const activePlayer = getActivePlayer();

    if (randomNumber !== 1) {
        activePlayer.currentScore += randomNumber;
        activePlayer.currentScoreElm.textContent = activePlayer.currentScore;
    } else {
        activePlayer.currentScore = 0;
        activePlayer.currentScoreElm.textContent = activePlayer.currentScore;
        switchPlayer();
    }
};

const holdButtonHandler = () => {
    const activePlayer = getActivePlayer();
    activePlayer.totalScore += activePlayer.currentScore;
    activePlayer.totalScoreElm.textContent = activePlayer.totalScore;
    activePlayer.currentScore = 0;
    activePlayer.currentScoreElm.textContent = activePlayer.currentScore;
    switchPlayer();
};

const switchPlayer = () => {
    let currentPlayer = getActivePlayer();
    let inActivePlayer = getInactivePlayer();

    currentPlayer.isActive = false;
    inActivePlayer.isActive = true;

    document.querySelector(`.player--${getActivePlayer().number}`).classList.add("player--active");
    document.querySelector(`.player--${getInactivePlayer().number}`).classList.remove("player--active");
};

const getActivePlayer = () => {
    if (player0.isActive) {
        return player0;
    }

    return player1;
};

const getInactivePlayer = () => {
    if (!player0.isActive) {
        return player0;
    }

    return player1;
};

const generateRandomNumber = (low, high) => {
    return Math.floor(Math.random() * (high - low + 1) + low);
};

init();

newGameBtn.addEventListener("click", init);
