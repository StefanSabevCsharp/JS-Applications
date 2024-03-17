
import { html,render } from "../lib.js";
import { get, put } from "../dataService/requester.js"
import { createFormEntity } from "../dataService/formHandler.js";
import { showDashboard } from "./dashboard.js";

const editTemplate = (movie) => html`
 <section
    id="edit-movie"
    class="view-section"
>
    <form class="text-center border border-light p-5" action="#" method="" @submit=${editMovie} data-set=${movie._id}>
        <h1>Edit Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input
                id="title"
                type="text"
                class="form-control"
                placeholder=${movie.title}
                value=""
                name="title"
            />
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea
                class="form-control"
                placeholder=${movie.description}
                name="description"
            ></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input
                id="imageUrl"
                type="text"
                class="form-control"
                placeholder=${movie.img}
                value=""
                name="img"
            />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>`;


export async function onEdit(ctx) {
    let id = ctx.params.id;
    let movie = await get("data/movies/" + id);
    render(editTemplate(movie));
}

async function editMovie(e) {
    let data = createFormEntity(e);
    let id = e.target.dataset.set;
    debugger;
    let responce = put("data/movies/" + id, data);
    console.log(responce);
    showDashboard();
}
