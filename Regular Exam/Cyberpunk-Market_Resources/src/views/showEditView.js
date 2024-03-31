import { get } from "../dataService/requester.js";
import { html, render } from "../utils/lib.js";
import { formHandler } from "../utils/formHandler.js";
import { put } from "../dataService/requester.js";
import page from "../../node_modules/page/page.mjs";
import { displayError } from "../utils/notification.js";
import { editSignleItem, getSingleItem } from "../dataService/getItems.js";


const editTemplate = (item) => html`
    <section id="edit">
        <div class="form form-item">
            <h2>Edit Your Item</h2>
            <form class="edit-form" @submit=${(event) => onSubmit(event,item)}>
                <!-- moje bi imam greshka tuka -->
                <input type="text" name="item" id="item" placeholder="Item" value=${item.item} />
                <input
                    type="text"
                    name="imageUrl"
                    id="item-image"
                    placeholder="Your item Image URL"
                    value=${item.imageUrl}
                />
                <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Price in Euro"
                    value=${item.price}
                />
                <input
                    type="text"
                    name="availability"
                    id="availability"
                    placeholder="Availability Information"
                    value=${item.availability}
                />
                <input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Item Type"
                    value=${item.type}
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="More About The Item"
                    rows="10"
                    cols="50"
                    
                >${item.description}</textarea>
                <button type="submit">Edit</button>
            </form>
        </div>
    </section>
`;

export async function showEditView(ctx) {
    let itemId = ctx.params.id;
    let item = await getSingleItem(itemId);
    render(editTemplate(item));

   
}

async function onSubmit(event,item) {
    event.preventDefault();
    let data = formHandler(event);
    if(Object.values(data).some(x => x === "")){
        displayError("All fields are required!");
        return;
    }
    await editSignleItem(item._id,data);
    page.redirect(`/${item._id}`);
    

}
