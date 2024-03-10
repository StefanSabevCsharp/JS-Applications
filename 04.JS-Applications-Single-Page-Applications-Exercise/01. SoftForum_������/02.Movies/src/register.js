
import { post } from "./requester/requester.js";
import { setUserData } from "./requester/userData.js";
import { start } from "./app.js";

function register(){
    let sectionRegister = document.getElementById("form-sign-up");
    sectionRegister.style.display = "block";
    let form = document.getElementById("register-form");
    form.addEventListener("submit", onRegister);
}

async function onRegister(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get("email");
    let password = formData.get("password");
    let repeatPassword = formData.get("repeatPassword");
    if(password !== repeatPassword){
        alert("passwords do not match");
        return;
    }
    let obj = {
        email,
        password
    };
    debugger;
    let url = "http://localhost:3030/users/register";
    let responce = await post(url, obj);
    let userId = responce._id;
    let accessToken = responce.accessToken;
    setUserData(responce);
    start();
}

export { register };