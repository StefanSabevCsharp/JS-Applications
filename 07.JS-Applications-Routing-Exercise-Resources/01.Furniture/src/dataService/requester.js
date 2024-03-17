import { getUserData } from "../userService/userData.js";

let baseUrl = "http://localhost:3030/"

async function requester(method,url,data){
    let options = {
        method,
        headers: {}
    }

    if(data){
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);

        let userData = getUserData();
        if(userData){
            const token = userData.accesToken;
            options.headers["X-Authorization"] = token;
        }
    }
    
    debugger;
    try{
        let responce = await fetch(baseUrl + url,options);
        // if(responce.status = 403){
        //     // to do
        // }
        let data = await responce.json();
        return data;
       

    }catch(error){
        alert(error.message)
        throw new Error("error vuv requester")
    }

}

let get = (url) => requester("GET", url);
let post = (url,data) => requester("POST",url,data);
let update = (url,data) => requester("PUT",url,data)
let del = () => requester("DELETE",url);

export {
    get,
    post,
    update,
    del
}