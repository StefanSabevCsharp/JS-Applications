import { getUserData } from "./userData.js";

async function requester(url, options) {
    try {
        let response = await fetch(url, options);
        if (!response.ok) {
            let error = await response.json();
            alert(error.message);

        }
        if(url.includes("logout")){
            return response;
        }
        return await response.json();

    } catch (err) {
        return response;
    }

}
let userData = getUserData();

function get(url,obj) {
    return requester(url,obj);
}
function post(url, data) {
    return requester(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": userData.accessToken
        },
        body: JSON.stringify(data)
    });
}
function put(url, data) {
    return requester(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": userData.accessToken
            
        },
        body: JSON.stringify(data)
    });
}
function del(url) {
    return requester(url, {
        method: "DELETE"
    });
}

export { get, post, put, del };