import { del } from "../dataService/requester.js";
import { showDashboard } from "./dashboard.js";
import page from "../../node_modules/page/page.mjs";


export async function deleteItem(ctx){

    let itemId = ctx.params.id;
    let responce = await del("data/catalog/" + itemId);
    debugger;
    page.redirect("/dashboard");

}