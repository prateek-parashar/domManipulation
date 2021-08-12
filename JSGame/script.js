"use strict";

const player1 = {
    currentScore: 0,
    currentScoreText: document.getElementById("current--0"),
    totalScore: 0,
    totalScoreText: document.getElementById("score--0"),
    isActive: true,
};

const player2 = {
    currentScore: 0,
    currentScoreText: document.getElementById("current--1"),
    totalScore: 0,
    totalScoreText: document.getElementById("score--1"),
    isActive: true,
};

const rollDiceBtn = document.querySelector("btn-roll");
const holdBtn = document.querySelector("btn-hold");
const newGameBtn = document.querySelector("btn-new");

const init = () => {

}