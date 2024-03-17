import { getUserData } from "./userService/userData.js";
let navRoot = document.querySelector("nav");
let userNav = document.getElementById("user");
let guestNav = document.getElementById("guest");

export function updateNav(){
    let userData = getUserData();
    if(userData){
        userNav.style.display = "inline-block";
        guestNav.style.display = "none";
    }else{
        userNav.style.display = "none";
        guestNav.style.display = "inline-block";
    }



}