import { del } from "../dataService/requester.js";


export async function onDelete(ctx){
    debugger;
    console.log(ctx);
    let responce = del("data/movies/" + ctx.params.id);
    console.log(responce);
    ctx.page.redirect("/");

}