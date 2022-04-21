const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');

let titleInStorage = localStorage.getItem('title');
let imageUrlStored = localStorage.getItem('imageUrl');

if(titleInStorage && imageUrlStored) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 255, 0.421), rgba(68, 40, 40, 0.415)),
    url('${imageUrlStored}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let moviePosterUrlInpt = moviePosterUrl.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', moviePosterUrlInpt);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 255, 0.421), rgba(68, 40, 40, 0.415)), 
    url('${moviePosterUrlInpt}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
});

