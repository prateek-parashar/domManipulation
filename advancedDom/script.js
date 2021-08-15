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

// Implementation of smooth scrolling
const learnMoreBtn = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");

learnMoreBtn.addEventListener("click", () => {
    // const sectionCoord = section1.getBoundingClientRect();
    // window.scrollTo({
    // top: sectionCoord.top + window.pageYOffset,
    // left: 0,
    // behavior: "smooth",
    // });

    section1.scrollIntoView({ behavior: "smooth" });
});

const h1Elem = document.querySelector("h1");

h1Elem.addEventListener("click", () => {
    alert("Don't touch me bro");
});

h1Elem.onmouseenter = () => {
    console.log("Oh you wanna go at it?");
};

h1Elem.addEventListener("mouseleave", () => {
    alert("Wherer are you now running away bitch");
});
