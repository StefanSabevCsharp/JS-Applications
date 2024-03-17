import { get } from "../dataService/requester.js";
import { getUserData, removeUserData } from "../userService/userData.js"
import { showDashboard } from "./dashboard.js";


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
