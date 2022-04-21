const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieYear = document.querySelector('.userInputYear'); 
const movieYearToDisplay = document.querySelector('.movieYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlStored = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');

if(titleInStorage && imageUrlStored) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieYearToDisplay.textContent = yearInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 255, 0.421), rgba(68, 40, 40, 0.415)),
    url('${imageUrlStored}')`;
};

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let moviePosterUrlInpt = moviePosterUrl.value;
    let userInputYear = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', moviePosterUrlInpt);
    localStorage.setItem('year', userInputYear);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieYearToDisplay.textContent = userInputYear;
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 255, 0.421), rgba(68, 40, 40, 0.415)), 
    url('${moviePosterUrlInpt}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieYear.value = '';
});

