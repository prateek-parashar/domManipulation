"use strict";

const showModalHandler = () => {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
};

const buttonList = document.querySelectorAll("button");

for (let btn of buttonList) {
    btn.addEventListener("click", showModalHandler);
}

const overLay = document.querySelector(".overlay");

overLay.addEventListener("click", showModalHandler);
