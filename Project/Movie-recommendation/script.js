const searchForm = document.querySelector('form');
const movieContainer = document.querySelector('.movie-container');
const inputBox = document.querySelector('input');



//function to fetch movie details usingONDB API
const getMovieInfo = async (movie) => {
    const APIKey = "*****"; 
const url = `******`;


    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        showMovieData(data);
    } catch (error) {
        console.log("Error:", error);
    }
};

//function to show movie data on screen
const showMovieData = (data) => {
    movieContainer.innerHTML = "";
    movieContainer.classList.remove('noBackground');
    //use Destructuring assignment to extract properties from data object
   const {
        Title,
        imdbRating,
        Genre,
        Released,
        Runtime,
        Actors,
        Plot,
        Poster
    } = data;

    const movieElement = document.createElement('div');
        movieElement.classList.add('movie-info');

    // movieElement.innerHTML = `
    //     <h2>${Title}</h2>
    //     <p><strong>Rating: ⭐</strong> ${imdbRating}</p>
    // `;

    const movieGenreElement = document.createElement('div');
    movieGenreElement.classList.add('movie-genre');

    Genre.split(",").forEach(element => {
    const p = document.createElement('p');
    p.innerText = element.trim();
    movieGenreElement.appendChild(p);
});



movieElement.innerHTML = `
    <h2>${Title}</h2>
    <p><strong>Rating: ⭐</strong> ${imdbRating}</p>
    <p><strong>Released Date:</strong> ${Released}</p>
    <p><strong>Duration:</strong> ${Runtime}</p>
    <p><strong>Cast:</strong> ${Actors}</p>
    <p><strong>Plot:</strong> ${Plot}</p>
`;

movieElement.appendChild(movieGenreElement);

// Create poster first
const moviePosterElement = document.createElement('div');
moviePosterElement.classList.add('movie-poster');
moviePosterElement.innerHTML = `<img src="${Poster}" alt="${Title}">`;

// Create movie box
const movieBox = document.createElement('div');
movieBox.classList.add('movie-box');

// Append poster and info
movieBox.appendChild(moviePosterElement);
movieBox.appendChild(movieElement);

// Add to container
movieContainer.appendChild(movieBox);
};



//Adding event listener to search form 
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const movieName = inputBox.value.trim();

    if (movieName !== '') {
        getMovieInfo(movieName);
    }
    else{
        movieContainer.innerHTML = `<h2>Enter movie name to get movie information</h2>`;
    }
});

