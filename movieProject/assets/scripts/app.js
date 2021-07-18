const addMovieBtn = document.querySelector("header button");

const addMovieScreen = document.getElementById("add-modal");
const backDrop = document.getElementById("backdrop");

const cancelBtn = addMovieScreen.querySelector(".modal__actions .btn--passive");
const addBtn = cancelBtn.nextElementSibling;
const inputArray = addMovieScreen.querySelectorAll("input");
const entryText = document.getElementById("entry-text");

const movieList = [];

const toggleBackdrop = () => {
    backDrop.classList.toggle("visible");
};

const toggleAddMovieScreen = () => {
    addMovieScreen.classList.toggle("visible");
    toggleBackdrop();
};

addMovieBtn.addEventListener("click", () => {
    toggleAddMovieScreen();
});

const backDropClickHandler = () => {
    toggleAddMovieScreen();
};

const clearUserInput = () => {
    for (const input of inputArray) {
        input.value = "";
    }
};

const validateUserInput = (valueArray) => {
    const name = valueArray[0].value;
    const url = valueArray[1].value;
    const rating = valueArray[2].value;

    if (name.trim() === "" || url.trim() === "" || rating.trim() === "") {
        return false;
    }

    if (rating < 1 || rating > 5) {
        return false;
    }

    return true;
};

const addBtnHandler = () => {
    if (validateUserInput(inputArray)) {
        const movie = {
            title: inputArray[0].value,
            url: inputArray[1].value,
            rating: inputArray[2].value,
        };

        movieList.push(movie);
        console.log(movieList);
        toggleAddMovieScreen();
        clearUserInput();
        renderElement(movie.title, movie.url, movie.rating);
        updateUI();
    } else {
        alert("Bro the input data is invalid");
    }
};

const cancelBtnHandler = () => {
    toggleAddMovieScreen();
    clearUserInput();
};

const updateUI = () => {
    if (movieList.length === 0) {
        entryText.style.display = "block";
    } else {
        entryText.style.display = "none";
    }
};

const renderElement = (title, url, rating) => {
    const listItem = document.createElement("li");
    listItem.classList.add("movie-element");

    listItem.innerHTML = `
    <div class = "movie-element-image">
        <img src = ${url} alt=${title}>
    </div>
    <div class = "movie-element__info">
        <h2> ${title} </h2>
        <p> ${rating} / 5 start </p>
    </div>
    `;

    const movieListHTML = document.getElementById("movie-list");
    movieListHTML.append(listItem);
};

backDrop.addEventListener("click", backDropClickHandler);

cancelBtn.addEventListener("click", cancelBtnHandler);

addBtn.addEventListener("click", addBtnHandler);
