"use strict";

const SUCCESS_TEXT = "Congratulations! You got it ";

const checkButton = document.querySelector(".check");
const resetButton = document.querySelector(".again");

let secretNumber = 0;

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const validateInput = (input, target) => {
    if (input < 0 || input > 20) {
        alert("Read the instructions dude");
        return { result: false, hint: "Invalid input" };
    }

    if (input === target) {
        return { result: true };
    }
    if (input < target) {
        return { result: false, hint: "Too low" };
    }

    return { result: false, hint: "Too high" };
};

const checkButtonHandler = (target) => {
    const userInput = +document.querySelector(".guess").value;
    const output = validateInput(userInput, target);

    if (output.result) {
        document.querySelector(".message").textContent = SUCCESS_TEXT;
        document.querySelector(".number").textContent = secretNumber;
        document.body.style.backgroundColor = "green";
        let currrentScore = +document.querySelector(".score").textContent;
        let highScore = +document.querySelector(".highscore").textContent;

        if (currrentScore > highScore) {
            highScore = currrentScore;
        }

        document.querySelector(".highscore").textContent = highScore;
    } else {
        document.querySelector(".message").textContent = output.hint;

        document.querySelector(".score").textContent -= 1;
    }
};

const init = () => {
    secretNumber = getRandomNumber(0, 20);
    checkButton.addEventListener("click", () => {
        checkButtonHandler(secretNumber);
    });
};

resetButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#222";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Go on, guess now";
});

init();
