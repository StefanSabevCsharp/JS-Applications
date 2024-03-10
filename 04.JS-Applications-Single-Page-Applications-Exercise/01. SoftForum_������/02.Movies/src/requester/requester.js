import { getUserData } from "./userData.js";

async function requester(url, options) {
    let userData = getUserData();
    let header = {
        "Content-Type": "application/json",
        "X-Authorization": userData ? userData.accessToken : ""
    };
    if (options) {
        options.headers = header;
    } else {
        options = {
            headers: header
        };
    }
   
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
let header = {
    "Content-Type": "application/json",
    "X-Authorization": userData ? userData.accessToken : ""
};
function get(url,obj) {
    return requester(url,obj);
}
function post(url, data) {
    return requester(url, {
        method: "POST",
        header,
        body: JSON.stringify(data)
    });
}
function put(url, data) {

    return requester(url, {
        method: "PUT",
        header,
        body: JSON.stringify(data)
    });
}
function del(url) {
    return requester(url, {
        method: "DELETE",
        header
    });
}

export { get, post, put, del };