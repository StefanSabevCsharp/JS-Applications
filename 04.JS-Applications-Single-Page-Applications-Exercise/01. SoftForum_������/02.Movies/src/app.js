import { showNav } from "./nav.js";
import { get } from "./requester/requester.js";
import { getUserData } from "./requester/userData.js";
import { hasUserData } from "./requester/userData.js";
import { showView } from "./view.js";
import { createMovies } from "./createMovies.js";


let sectionAddMovie = document.getElementById("add-movie-button");
sectionAddMovie.style.display = "none";

export function start() {
    showView("/home");
    showNav();
    getMovies();

    if(hasUserData()){
        sectionAddMovie.style.display = "block";
        let welcome = document.getElementById("welcome-msg");
        let userData = getUserData();
        welcome.textContent = `Welcome, ${userData.email}`;
    }else{
        sectionAddMovie.style.display = "none";
    }
    sectionAddMovie.addEventListener("click", () => showView("/add-movie"));

}

async function getMovies() {
    
    let ul = document.getElementById("movies-list");
    ul.innerHTML = "";
    let url = "http://localhost:3030/data/movies";
    
    let allMovies = await get(url);
    let movies = createMovies(allMovies);
    movies.forEach(movie => {
        ul.appendChild(movie);
    });
}

start();