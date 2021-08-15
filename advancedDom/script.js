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

///////////////////////////////////////
// Page Navigation
///////////////////////////////////////

// Implementation of smooth scrolling

const learnMoreBtn = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");

learnMoreBtn.addEventListener("click", () => {
    const sectionCoord = section1.getBoundingClientRect();
    window.scrollTo({
        top: sectionCoord.top + window.pageYOffset,
        left: 0,
        behavior: "smooth",
    });

    section1.scrollIntoView({ behavior: "smooth" });
});

const nav = document.querySelector(".nav");
const navContainer = document.querySelector(".nav__links");
const navLink = document.querySelector(".nav__link");

// Using the event delegation to select the event on the parent element ->
/**
 * - Assign the event listener to the common parent element
 * - Find the event target, ( the element where the event originated from)
 * - User the matching strategy to filter out the original elements from the parent
 */

navContainer.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("nav__link")) {
        const targetElemId = e.target.getAttribute("href").slice(1);
        document.getElementById(targetElemId).scrollIntoView({ behavior: "smooth" });
    }
});

///////////////////////////////////////
// Tabbed Component
///////////////////////////////////////
const tabsContainer = document.querySelector(".operations__tab-container");

const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("operations__tab")) {
        e.target.classList.add("operations__tab--active");

        document
            .querySelector(`.operations__content--${e.target.dataset.tab}`)
            .classList.add("operations__content--active");

        [...e.target.parentElement.children].forEach((element) => {
            if (element !== e.target) {
                element.classList.remove("operations__tab--active");

                document
                    .querySelector(`.operations__content--${element.dataset.tab}`)
                    .classList.remove("operations__content--active");
            }
        });
    }
});

///////////////////////////////////////
//const h1Elem = document.querySelector("h1");

//h1Elem.addEventListener("click", () => {
//alert("Don't touch me bro");
//});

//h1Elem.onmouseenter = () => {
//console.log("Oh you wanna go at it?");
//};

//h1Elem.addEventListener("mouseleave", () => {
//alert("Wherer are you now running away bitch");
//});

// Event capturing and bubbling phase

/**
 * Here you can see the event bubbles up and all the eventListeners above the dom tree in a particular element are fired from the same event
 */

//const header = document.querySelector(".nav");
//const navOl = document.querySelector(".nav__links");
//const navLink = document.querySelector(".nav__link");

//const getRandomNumber = (min, max) => {
//return Math.floor(Math.random() * (max - min) + min);
//};

//const randomColorString = () => {
//return `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
//};

//navLink.addEventListener("click", function () {
//this.href = "#";
//this.style.backgroundColor = randomColorString();
//});

//navOl.addEventListener("click", function () {
//this.href = "#";
//this.style.backgroundColor = randomColorString();
//});

//header.addEventListener("click", function () {
//this.href = "#";
//this.style.backgroundColor = randomColorString();
//});
