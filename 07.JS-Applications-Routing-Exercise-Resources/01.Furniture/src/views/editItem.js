import { createFormEntity } from "../dataService/formHandler.js";
import { put } from "../dataService/requester.js";
import { html, render } from "../lib.js";
import { getFurniture } from "./dashboard.js";
import page from "../../node_modules/page/page.mjs"

let editTemplate = (searchedItem) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onEdit} data-set=${searchedItem._id}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make"
                        >Make</label
                    >
                    <input
                        class="form-control"
                        id="new-make"
                        type="text"
                        name="make"
                        value=${searchedItem.make}
                    />
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model"
                        >Model</label
                    >
                    <input
                        class="form-control is-valid"
                        id="new-model"
                        type="text"
                        name="model"
                        value=${searchedItem.model}
                    />
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year"
                        >Year</label
                    >
                    <input
                        class="form-control is-invalid"
                        id="new-year"
                        type="number"
                        name="year"
                        value=${searchedItem.year}
                    />
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description"
                        >Description</label
                    >
                    <input
                        class="form-control"
                        id="new-description"
                        type="text"
                        name="description"
                        value=${searchedItem.description}
                    />
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price"
                        >Price</label
                    >
                    <input
                        class="form-control"
                        id="new-price"
                        type="number"
                        name="price"
                        value=${searchedItem.price}
                    />
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image"
                        >Image</label
                    >
                    <input
                        class="form-control"
                        id="new-image"
                        type="text"
                        name="img"
                        value=../${searchedItem.img}
                    />
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material"
                        >Material (optional)</label
                    >
                    <input
                        class="form-control"
                        id="new-material"
                        type="text"
                        name="material"
                        value=${searchedItem.material}
                    />
                </div>
                <input type="submit" class="btn btn-info" value="Edit" />
            </div>
        </div>
    </form>
`;

export async function editItemView(ctx) {
   
    let allItem = await getFurniture();
    let searchedItem = allItem.find((x) => x._id == ctx.params.id);
    debugger;
    render(editTemplate(searchedItem));
}

async function onEdit(e) {

    let newObj = createFormEntity(e);
    let id = e.target.dataset.set;
    let data = await put("data/catalog/" + id, newObj);
    debugger;
    page.redirect("/dashboard");
   
}
