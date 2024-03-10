import { start } from "./app.js";
import{post} from "./requester/requester.js";

export function showAddMovie() {
    let sectionAddMovie = document.getElementById("add-movie");
    sectionAddMovie.style.display = "block";

    let form = document.querySelector("form")
    form.addEventListener("submit", addMovie);

}

async function addMovie(e) {
    console.log("Adding movie");
    e.preventDefault();
    let formData = new FormData(e.target);
    let title = formData.get("title");
    let description = formData.get("description");
    let img = formData.get("img");

    let movie = {
        title,
        description,
        img
    }

    debugger;
    let url = "http://localhost:3030/data/movies";
    let response = await post(url, movie);
    console.log(response);
    
    start();

};