import { get } from "../dataService/requester.js";
import { html, render } from "../utils/lib.js";
import { getUserData } from "../dataService/userData.js";
import { getSingleItem } from "../dataService/getItems.js";

const showDetailsTemplate = (item,userData,isCreator) => html`
<section id="details">
    <div id="details-wrapper">
        <div>
            <img id="details-img" src="../${item.imageUrl}" alt="example1" />
            <p id="details-title">${item.item}</p>
        </div>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="details-price">Price: €${item.price}</p>
                <p class="details-availability">
                    ${item.availability}
                </p>
                <p class="type">Type: ${item.type}</p>
                <p id="item-description">
                    ${item.description}
                </p>
            </div>
            <!--Edit and Delete are only for creator-->
            ${isCreator? html`
            <div id="action-buttons">
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a href="/delete/${item._id}" id="delete-btn">Delete</a>
            </div>` : ''}
        </div>
    </div>
</section>`;

export async function showDetailsView(ctx) {

    let itemId = ctx.params.id;
    let item = await getSingleItem(itemId);
    let userData = getUserData();
    let isCreator = userData? userData._id === item._ownerId : false;
    render(showDetailsTemplate(item,userData, isCreator));
}
