const addMovieBtn = document.querySelector("header button");
const addBtn = document.querySelector(".modal__actions .btn--active");
const cancelBtn = document.querySelector(".modal__actions .btn--passive");

const addMovieScreen = document.getElementById("add-modal");
const backDrop = document.getElementById("backdrop");

const toggleBackdrop = () => {
    backDrop.classList.toggle("visible");
};

const toggleAddMovieScreen = () => {
    addMovieScreen.classList.toggle("visible");
};

addMovieBtn.addEventListener("click", () => {
    toggleBackdrop();
    toggleAddMovieScreen();
});

cancelBtn.addEventListener("click", () => {
    toggleBackdrop();
    toggleAddMovieScreen();
});
