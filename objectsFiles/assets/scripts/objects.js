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
    };

    movieArray.push(movie);

    console.log(movieArray);
    if (movieArray.length > 0) {
        movieList.classList.add("visible");
    }
};

addMovieBtn.addEventListener("click", addMovieHandler);
