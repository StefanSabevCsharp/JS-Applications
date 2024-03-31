
import page from "../../node_modules/page/page.mjs";
import { displayError } from "../utils/notification.js";
import { deleteSingleItem } from "../dataService/getItems.js";



export async function showDeleteView(ctx) {
    const itemId = ctx.params.id;

    const userConfirmed = window.confirm(
        "Are you sure you want to delete this item?"
    );

    if (userConfirmed) {
        deleteSingleItem(itemId);
        displayError("Item deleted!");
        page.redirect("/dashboard");
    } else {
        displayError("Item not deleted!");
    }

}
