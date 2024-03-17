import { render } from "../lib.js";
import { getUserData } from "../userService/userData.js";
import { getFurniture } from "./dashboard.js";
import { html } from "../lib.js";

const detailsTemplate = (item,isOwner) => html` <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src=../${item.img}/>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${item.make}</span></p>
            <p>Model: <span>${item.model}</span></p>
            <p>Year: <span>${item.year}</span></p>
            <p>Description: <span>${item.description}</span></p>
            <p>Price: <span>${item.price}</span></p>
            <p>Material: <span>${item.material}</span></p>
            ${isOwner ? html`<div>
                <a href="/edit/${item._id}" class="btn btn-info">Edit</a>
                <a href="/delete/${item._id}" class="btn btn-red">Delete</a>
            </div>` : ""}
           
        </div>
    </div>`;

    

export async function showDetailsView(ctx) {
    let allItems = await getFurniture();
    let searchedItem = allItems.find((x) => x._id == ctx.params.id);

    let userId = getUserData()?._id;
    
    let isOwner = searchedItem._ownerId == userId;

    render(detailsTemplate(searchedItem, isOwner));
    
}
