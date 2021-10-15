const movieInput = document.querySelector('.movie-input');
const searchButton = document.querySelector('.search-button');
const movieList = document.querySelector('.movie-list');

searchButton.addEventListener('click', function(e) {
    e.preventDefault();

    const request = new XMLHttpRequest();
    let data;
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

    request.onload = function() {
        console.log(`Yay, this api succeed`);
        const data = JSON.parse(this.response);
        movieName = encodeURIComponent(movieInput.value);
        let movieInfo = data.results.filter(movie => movie.title.includes(movieName));

        for (let movie of movieInfo) {
            const movieTitle = document.createElement('span');
            movieTitle.innerHTML = `<b>${movie.title}</b>`;

            const voteAverage =document.createElement('span');
            voteAverage.innerHTML = `Vote_Average is: ${movie.vote_average}`

            const img = document.createElement('img');
            img.src = `${imageBaseUrl}${movie.backdrop_path}`;

            const movieDiv = document.createElement('li');
            movieDiv.classList.add('moive');
            
            movieDiv.append(movieTitle, voteAverage, img);
            movieList.append(movieDiv);
            movieInput.value = "";
        }
    }    
    request.onerror = function() {
        console.log(`Woops, api call failed`);
    }
})   
    request.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1');
    request.send();

