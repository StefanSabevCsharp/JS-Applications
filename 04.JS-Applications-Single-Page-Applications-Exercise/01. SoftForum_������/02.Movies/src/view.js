import { showHome } from "./home.js";
import { showLogin} from "./login.js";
import { logout } from "./logout.js";
import { register } from "./register.js";
import { showAddMovie } from "./addMovie.js";
import { getUserData } from "./requester/userData.js";
import { showDetails } from "./details.js";

let allSections = document.querySelectorAll(".view-section");

function clearSections(){
    allSections.forEach((section) => {
        section.style.display = "none";
    });
}
function showView(viewName, movie){
    clearSections();
    //  debugger;

    if(movie){

        sections[viewName](movie);
    }else{
        sections[viewName]();
    }
}

let sections = {
    "/Login" : showLogin,
    "/Register" : register,
    "/home" : showHome,
    "/Logout" : logout,
    "/add-movie": showAddMovie,
    "/details": (movie) => showDetails(movie)
    
}

let container = document.getElementById("container");
let navBar = document.querySelector(".navbar");

// function showView(viewName, movieId){
//     clearSections();
//      debugger;

//     if(movieId){

//         sections[viewName](movieId);
//     }else{
//         sections[viewName]();
//     }
// }


export {showView,clearSections};