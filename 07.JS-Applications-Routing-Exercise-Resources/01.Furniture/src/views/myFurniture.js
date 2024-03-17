import { html, render } from "../lib.js";
import { getUserData } from "../userService/userData.js";
import { getFurniture } from "./dashboard.js";

const myFurnitureTemplate = (myFurniture) => html` <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
        ${myFurniture.map(signleFurnitureTemp)}
    </div>`;

const signleFurnitureTemp = (furniture) => html`
 <div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src=../${furniture.img} />
            <p>${furniture.description}</p>
            <footer>
                <p>Price: <span>${furniture.price} $</span></p>
            </footer>
            <div>
                <a href="/details/${furniture._id}" class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>`;

export async function myfurnitureView() {
    const allFurniture = await getFurniture();
    let userData = getUserData();
    let userId = userData._id;
    if(!userId){
        return;
    }
    let myFurniture = allFurniture.filter((x) => x._ownerId == userId);
    render(myFurnitureTemplate(myFurniture));
}
