import { get } from "../dataService/requester.js";
import { html, render } from "../utils/lib.js";

const dashboardTemplate = (allItems) => html` 
<h3 class="heading">Market</h3>
    <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
       
        <!-- if there is no items make it with terrary operator -->
        ${allItems.length > 0 ? allItems.map(singleItemTemplate) : html`<h3 class="empty">No Items Yet</h3>`}
        
       
    </section>`;

    let singleItemTemplate = (item) => html`
    <div class="item">
            <img src=".${item.imageUrl}" alt="example1" />
            <h3 class="model">${item.item}</h3>
            <div class="item-info">
                <p class="price">Price: €${item.price}</p>
                <p class="availability">
                   ${item.availability}
                </p>
                <p class="type">${item.type}</p>
            </div>
            <a class="details-btn" href="/${item._id}">Uncover More</a>
        </div>`;

export async function showDashboard() {
    let allItems = await getAllItems();

    render(dashboardTemplate(allItems));
}


async function getAllItems(){
    let url = "http://localhost:3030/data/cyberpunk?sortBy=_createdOn%20desc";
    let allData = await get(url);
    return allData;
}

