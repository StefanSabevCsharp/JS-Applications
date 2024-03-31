
import { formHandler } from "../utils/formHandler.js";
import { html, render } from "../utils/lib.js";
import page from "../../node_modules/page/page.mjs";
import { displayError } from "../utils/notification.js";
import { createSingleItem } from "../dataService/getItems.js";

const createTemplate = () => html` 
<section id="create">
    <div class="form form-item">
        <h2>Share Your item</h2>
        <form class="create-form" @submit=${onCreate}>
            <input type="text" name="item" id="item" placeholder="Item" />
            <input
                type="text"
                name="imageUrl"
                id="item-image"
                placeholder="Your item Image URL"
            />
            <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
            />
            <input
                type="text"
                name="availability"
                id="availability"
                placeholder="Availability Information"
            />
            <input type="text" name="type" id="type" placeholder="Item Type" />
            <textarea
                id="description"
                name="description"
                placeholder="More About The Item"
                rows="10"
                cols="50"
            ></textarea>
            <button type="submit">Add</button>
        </form>
    </div>
</section>`;

export async function showCreateView() {
    render(createTemplate());
}

async function onCreate(event) {
    event.preventDefault();
    let data = formHandler(event);
    if(Object.values(data).some(x => x === "")){
        displayError("All fields are required!");
        return;
    }
    debugger;
    await createSingleItem(data);
    page.redirect("/dashboard");

}
