"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (const elem of btnsOpenModal) {
    elem.addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// Testing the dom manipulation techniques

// Selecting elements
const header = document.querySelector(".header");

const cookieAlert = document.createElement("div");

cookieAlert.textContent = `Click me if you don't want cookies!`;
cookieAlert.className = "cookie-message";

const cookieConfirmButton = document.createElement("button");
cookieConfirmButton.innerText = "Hell yeah Bitch";
cookieConfirmButton.className = "btn";

cookieAlert.insertAdjacentElement("beforeend", cookieConfirmButton);

header.append(cookieAlert);

header.before(cookieAlert.cloneNode(true));

cookieConfirmButton.addEventListener("click", () => {
    cookieAlert.remove();
});
