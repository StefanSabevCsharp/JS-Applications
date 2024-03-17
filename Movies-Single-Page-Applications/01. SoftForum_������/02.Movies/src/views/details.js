import page from "../../node_modules/page/page.mjs";
import { render, html } from "../lib.js";
import { getUserData } from "../userService/userData.js";
import { showAllMovies } from "./dashboard.js";

let detailsTemplate = (movie,isOwner) => html` <section
    id="movie-example"
    class="view-section"
>
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src=${movie.img} alt="Movie" />
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3">Movie Description</h3>
                <p>${movie.description}</p>
                ${isOwner
                    ? html` <a class="btn btn-danger" href="/delete/${movie._id}">Delete</a>
                          <a class="btn btn-warning" href="/edit/${movie._id}">Edit</a>`
                    : html`<a class="btn btn-primary" href="/like/${movie._id}">Like</a>`}
                
                <span class="enrolled-span">Liked 1</span>
            </div>
        </div>
    </div>
</section>`;

export async function showDetails(e) {
    let id = e.params.id;
    let userData = getUserData();
    let allMovies = await showAllMovies();
    
    let movie = allMovies.find((x) => x._id == id);
    let isOwner = movie._ownerId == userData._id;
    render(detailsTemplate(movie, isOwner));
}
