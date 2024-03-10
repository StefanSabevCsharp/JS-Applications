
import { start } from "./app.js";
import { post } from "./requester/requester.js";
import { setUserData } from "./requester/userData.js";

function showLogin() {

    let sectionLogin = document.getElementById("form-login");
    sectionLogin.style.display = "block";

    let form = document.getElementById("login-form");
    form.addEventListener("submit", onLogin);
}

 async function onLogin(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get("email");
    let password = formData.get("password");
    let obj = {
        email,
        password
    };
    let url = "http://localhost:3030/users/login";
   
   let responce = await post(url, obj);
   let userId = responce._id;
   let accessToken = responce.accessToken;
   setUserData(responce);
   start();
};

export { showLogin };