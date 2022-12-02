
setTimeout(function(){
        window.location.href = 'allmovies.html';
    }, 5000);



const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


//ფილმების წამოღება
getMovies(API_URL)
//ასინქრონული ჯავასკრიპტი
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
    console.log(data.results)
}


// წამოღება თითოეული ფილმის,სურათის,რეიტინგის,აღწერის
function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
        main.appendChild(movieEl)
   

  const modal = document.getElementById("myModal");
  const modalcontent = document.getElementById("modal-content");
  const span = document.getElementsByClassName("close")[0];
  movieEl.addEventListener("click", () => {
    console.log(movie);
    modal.style.display = "block";

span.onclick = () => {
  modal.style.display = "none";
};
window.onclick = (event) =>{
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
    modalcontent.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="movie-info">
    <h3>${title}</h3>
    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
    <h3>Overview</h3>
    ${overview}
    </div>
    `;
    ;
})
})
}

        // გაფერადება რეიტინგის მიხედვით
function getClassByRate(vote) {
    if (vote >= 7 & vote <= 8) {
        return 'green'
    } else if (vote >= 5 & vote <= 7) {
        return 'orange'
    } else {
        return 'red'
    }
}

//სერჩი
form.addEventListener('submit', (e) => {
    e.preventDefault()

    searchValue = search.value
    if (searchValue && searchValue !== '') {
        getMovies(SEARCH_API + searchValue)
        searchValue = ''

    } else {
        window.location.reload()
    }
})



    // loadingის ტაიმერი
// setTimeout(function(){
//         window.location.href = 'Mainpage.html';
//     }, 5000);


var favorite = "../src/image/icons8-favorite-48.png"

function addFavorite () {
    favorite = "../src/image/icons8-favorite-50.png"

}