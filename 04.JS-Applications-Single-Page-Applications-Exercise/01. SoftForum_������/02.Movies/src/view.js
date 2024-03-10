import { showHome } from "./home.js";
import { showLogin} from "./login.js";
import { logout } from "./logout.js";
import { register } from "./register.js";
import { showAddMovie } from "./addMovie.js";

let allSections = document.querySelectorAll(".view-section");

function clearSections(){
    allSections.forEach((section) => {
        section.style.display = "none";
    });
}

let sections = {
    "/Login" : showLogin,
    "/Register" : register,
    "/home" : showHome,
    "/Logout" : logout,
    "/add-movie": showAddMovie
}

let container = document.getElementById("container");
let navBar = document.querySelector(".navbar");

function showView(viewName){
    clearSections();
    // debugger;
    sections[viewName]();
}


export {showView,clearSections};