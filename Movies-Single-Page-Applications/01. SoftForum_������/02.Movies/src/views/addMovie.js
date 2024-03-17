import { createFormEntity } from "../dataService/formHandler.js";
import { post } from "../dataService/requester.js";
import { html, render } from "../lib.js";
import page from "../../node_modules/page/page.mjs";

const addMovieTemple = () => html`
 <section id="add-movie" class="view-section">
    <form
        id="add-movie-form"
        class="text-center border border-light p-5"
        action="#"
        method=""
        @submit=${onSubmit}
    >
        <h1>Add Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input
                id="title"
                type="text"
                class="form-control"
                placeholder="Title"
                name="title"
                value=""
            />
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea
                class="form-control"
                placeholder="Description"
                name="description"
            ></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input
                id="imageUrl"
                type="text"
                class="form-control"
                placeholder="Image Url"
                name="img"
                value=""
            />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>`;

export function addNewMovie() {

    console.log("add movie view");
    render(addMovieTemple());
}

async function onSubmit(e) {
    let data = createFormEntity(e);
    let responce = await post("data/movies", data);
    page.redirect("/");
}
