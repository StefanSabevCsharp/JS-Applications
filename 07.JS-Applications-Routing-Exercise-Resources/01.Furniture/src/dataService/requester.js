import { getUserData, removeUserData } from "../userService/userData.js";
import page from "../../node_modules/page/page.mjs";

let baseUrl = "http://localhost:3030/"

async function requester(method,url,data){
    let options = {
        method,
        headers: {}
    }

    if(data != undefined){
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);

        let userData = getUserData();
        debugger;
        if(userData){
            const token = userData.accessToken;
            options.headers["X-Authorization"] = token;
        }
    }
    if(method == "DELETE"){
        let userData = getUserData();
        const token = userData.accessToken;
        options.headers["X-Authorization"] = token;
    }
    try{
        let responce = await fetch(baseUrl + url,options);

        if(!responce.ok){
            if(responce.status == 403){
                removeUserData();
            }
            const err = await responce.json();
            throw new Error(err.message);

            //presentation
        }
       
        let data = await responce.json();
        return data;
       

    }catch(error){
        alert(error.message)
        console.log("error requester");
        throw error;
    }

}

let get = (url) => requester("GET", url);
let post = (url,data) => requester("POST",url,data);
let put = (url,data) => requester("PUT",url,data);
let update = (url,data) => requester("PUT",url,data)
let del = (url) => requester("DELETE",url);

export {
    get,
    post,
    put,
    update,
    del
}