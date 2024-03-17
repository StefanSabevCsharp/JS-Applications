import { get } from "../dataService/requester.js";
import { render, html } from "../lib.js";
import { updateNav } from "../updateNav.js";

const dashBoardTemplate = (allFurniture) => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Welcome to Furniture System</h1>
      <p>Select furniture from the catalog to view details.</p>
    </div>
  </div>
  <div class="row space-top">
    
    ${allFurniture.map(furnitureTemplate)}
</div>
`;

let furnitureTemplate = (furniture) => html`

<div class="col-md-4">
  <div class="card text-white bg-primary">
    <div class="card-body">
      <img src=${furniture.img} />
      <p>${furniture.description}</p>
      <footer>
        <p>Price: <span>${furniture.price}$</span></p>
      </footer>
      <div>
        <a href="/details/${furniture._id}" class="btn btn-info">Details</a>
      </div>
    </div>
  </div>
</div>`;

export async function showDashboard() {
  let allFurniture = await getFurniture();
  render(dashBoardTemplate(allFurniture));
  updateNav();
}

 export async function getFurniture() {
  let data = await get("data/catalog");
  return data;
}
