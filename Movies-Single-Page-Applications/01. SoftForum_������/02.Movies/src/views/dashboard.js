import { render, html } from "../lib.js";
import { getUserData } from "../userService/userData.js";
import { updateNav } from "./navigation.js";
import { get } from "../dataService/requester.js";
import page from "../../node_modules/page/page.mjs";

let dashboardTemplate = (userData,allMovies) => html`
    <section id="home-page" class="view-section">
        <div
            class="jumbotron jumbotron-fluid text-light"
            style="background-color: #343a40"
        >
            <img
                src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
                class="img-fluid"
                alt="Responsive image"
                style="width: 150%; height: 200px"
            />
            <h1 class="display-4">Movies</h1>
            <p class="lead">
                Unlimited movies, TV shows, and more. Watch anywhere. Cancel
                anytime.
            </p>
        </div>

        <h1 class="text-center">Movies</h1>
        ${userData
            ? html` <section id="add-movie-button" class="user">
                  <a href="/add" class="btn btn-warning">Add Movie</a>
              </section>`
            : ""}

        <!-- <section id="add-movie-button" class="user">
          <a href="#" class="btn btn-warning">Add Movie</a>
        </section> -->
        <section id="movie">
            <div class="mt-3">
                <div class="row d-flex d-wrap">
                    <ul
                        id="movies-list"
                        class="card-deck d-flex justify-content-center"
                    >
                        ${allMovies.map(movieTemplate)}
                        <!-- list item example -->
                    </ul>
                </div>
            </div>
        </section>
    </section>
`;

let movieTemplate = (movie) => html`
    <li class="card mb-4" data-set=${movie._id}>
        <img
            class="card-img-top"
            src=${movie.img}
            alt="Card image cap"
            width="400"
        />
        <div class="card-body">
            <h4 class="card-title">${movie.title}</h4>
            <a href="#"> </a>
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-info" @click=${() => redirect(movie)}>Details</button>
        </div>
    </li>
`;
export async function showDashboard() {
    let userData = getUserData();
    const allMovies = await showAllMovies();
    updateNav();
    render(dashboardTemplate(userData, allMovies));
}

export async function showAllMovies() {
    let movies = await get("data/movies");
 
    return movies;
}
function redirect(movie){
    page.redirect("/details/"+movie._id);
}
