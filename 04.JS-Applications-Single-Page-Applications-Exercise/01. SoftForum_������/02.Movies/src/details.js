
import { start } from './app.js';
import { del } from './requester/requester.js';
import { getUserData } from './requester/userData.js';

function showDetails(movie) {
    let example = document.getElementById("movie-example");
    debugger;
    example.innerHTML = "";
    let userData = getUserData();
    let section = createSection(userData, movie, example);
    section.style.display = "block";
      
}

function createSection(userData, movie,example) {
    console.log("Creating section");
    debugger;
    let section = document.createElement("section");
    example.className = "view-section";
    // example.id = `${movie._ownerId}`;
    example.innerHTML = `
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>
            <div class="col-md-8">
                <img class="img-thumbnail" src="${movie.img}" alt="Movie" />
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3">Movie Description</h3>
                <p>${movie.description}</p>
                ${userData.id === movie._ownerId ? `
                    <a class="btn btn-danger delete-btn" href="#">Delete</a>
                    <a class="btn btn-warning edit-btn" href="#">Edit</a>
                ` : `
                    <a class="btn btn-primary like-btn" href="#">Like</a>
                `}
                <span class="enrolled-span">Liked 1</span>
            </div>
        </div>
    </div>`;

    // Add event listeners
    if (userData.id === movie._ownerId) {
        example.querySelector(".delete-btn").addEventListener("click", () => {
            del(`http://localhost:3030/data/movies/${movie._id}`);
            start();
        });
        example.querySelector(".edit-btn").addEventListener("click", () => {
            // Handle edit button click
        });
    } else {
        example.querySelector(".like-btn").addEventListener("click", () => {
            // Handle like button click
        });
    }

    return example;
}

export { showDetails };