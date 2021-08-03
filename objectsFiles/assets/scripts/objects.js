const addMovieBtn = document.getElementById("add-movie-btn");

const searchBtn = document.getElementById("search-btn");

const movieList = document.getElementById("movie-list");

const movieArray = [];

const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    const movie = {
        info: {
            title,
            [extraName]: extraValue,
        },
        id: Math.random(),
        getFormattedTitle: () => {
            return this.info.title.toUpperCase();
        },
    };

    movieArray.push(movie);

    renderMovieList();
};

const renderMovieList = (arr = movieArray) => {
    if (arr.length > 0) {
        movieList.classList.add("visible");
    }

    movieList.innerHTML = "";

    arr.forEach((movie) => {
        const listElm = document.createElement("li");
        let { getFormattedTitle } = movie;
        listElm.innerText = getFormattedTitle.call(movie);
        movieList.append(listElm);
    });
};

const searchBtnHandler = () => {
    const pattern = document.getElementById("filter-title").value;
    const filteredArr = movieArray.filter((e) => e.info.title.includes(pattern));
    renderMovieList(filteredArr);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchBtnHandler);
