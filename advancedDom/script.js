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
    const clicked = e.target.closest(".operations__tab");

    if (!clicked) return;

    [...clicked.parentElement.children].forEach((element) => {
        element.classList.remove("operations__tab--active");
        document
            .querySelector(`.operations__content--${element.dataset.tab}`)
            .classList.remove("operations__content--active");
    });

    clicked.classList.add("operations__tab--active");

    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active");
});

///////////////////////////////////////
// Hover Effect
///////////////////////////////////////

const hoverHandler = (e, opacity) => {
    const link = e.target;
    if (link.classList.contains("nav__link")) {
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img");

        for (const element of siblings) {
            if (element != link) {
                element.style.opacity = opacity;
            }
        }

        logo.style.opacity = opacity;
    }
};

nav.addEventListener("mouseover", (e) => {
    hoverHandler(e, 0.5);
});

nav.addEventListener("mouseout", (e) => {
    hoverHandler(e, 1);
});

///////////////////////////////////////
// Sticky Navigation bar
///////////////////////////////////////

/**
 * Below methods works but is terribly inefficient
 */
//const initCoords = section1.getBoundingClientRect().y;
//console.log(initCoords);

//window.addEventListener("scroll", () => {
//if (window.scrollY >= initCoords) {
//nav.classList.add("sticky");
//}
//});

// Proper implementaion using the intersection Observer
const stickyImplementer = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};

//Using the Intersection Observer
const headerObserver = new IntersectionObserver(stickyImplementer, {
    root: null,
    threshold: 0,
    rootMargin: `-${window.getComputedStyle(nav).height}`,
});
const header = document.querySelector(".header");

headerObserver.observe(header);

///////////////////////////////////////
// Section transitioning upwards on scrolling
///////////////////////////////////////
const sections = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            entry.target.classList.remove("section--hidden");
            observer.unobserve(entry.target);
        }
    },
    {
        root: null,
        threshold: 0.2,
    }
);

for (const section of sections) {
    section.classList.add("section--hidden");
    sectionObserver.observe(section);
}

///////////////////////////////////////
// Lazy loading of images
///////////////////////////////////////

const images = section1.querySelectorAll("img");

const lazyloader = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        return;
    }
    const imageElm = entry.target;
    console.log("Triggered");
    imageElm.setAttribute("src", imageElm.dataset.src);
    imageElm.classList.remove("lazy-img");
    observer.unobserve(imageElm);
};

const imageObserver = new IntersectionObserver(lazyloader, {
    root: null,
    threshold: 0.3,
});

for (const image of images) {
    imageObserver.observe(image);
}

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
