import page from "../../node_modules/page/page.mjs";
import { getUserData } from "../userService/userData.js";
import { showDashboard } from "./dashboard.js";
import { get } from "../dataService/requester.js";
import { removeUserData } from "../userService/userData.js";

export async function onLogout(){
    let userData = getUserData();
    if(!userData){
        return;
    }
    let data =  await get("users/logout");
    
    console.log(data);
    removeUserData();
    showDashboard();

}