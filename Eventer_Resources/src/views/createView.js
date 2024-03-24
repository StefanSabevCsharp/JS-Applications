import { formHandler } from "../utils/formHandler.js";
import { render,html } from "../utils/lib.js";

let createTemplate = () => html` 
<section id="create">
    <div class="form">
        <h2>Add Event</h2>
        <form class="create-form" @submit=${onsubmit}>
            <input type="text" name="name" id="name" placeholder="Event" />
            <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image URL"
            />
            <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
            />

            <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
            ></textarea>

            <input type="text" name="date" id="date" placeholder="When?" />

            <button type="submit">Add</button>
        </form>
    </div>
</section>`;

export function showCreateView() {

    render(createTemplate());
}

function onsubmit(e) {
    let data = formHandler(e);
    //to finish create event
}
