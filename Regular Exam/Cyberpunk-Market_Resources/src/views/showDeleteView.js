import { del } from "../dataService/requester.js";
import page from "../../node_modules/page/page.mjs";
import { displayError } from "../utils/notification.js";

// export async function showDeleteView(ctx) {
//     let itemId = ctx.params.id;
//     let url = `http://localhost:3030/data/cyberpunk/${itemId}`;
//     let response = await del(url);
//     displayError("Item deleted!");
//     page.redirect("/dashboard");
// }

export async function showDeleteView(ctx) {
    const itemId = ctx.params.id;
    const url = `http://localhost:3030/data/cyberpunk/${itemId}`;
    const userConfirmed = window.confirm(
        "Are you sure you want to delete this item?"
    );

    if (userConfirmed) {
        let response = await del(url);
        displayError("Item deleted!");
        page.redirect("/dashboard");
    } else {
        displayError("Item not deleted!");
    }

}
