import { start } from "./app.js";
import { get } from "./requester/requester.js";
import { removeUserData } from "./requester/userData.js";

export async function logout(){

    let userData = JSON.parse(localStorage.getItem("user"));
    let token = userData.accessToken;
    let url = "http://localhost:3030/users/logout";

    let obj = {
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token
        }
    }
    let responce = await get(url, obj);
    if(responce.status === 204){
        alert("loged out successfully")
    }
    removeUserData();  
    start();
}