import { hasUserData } from './requester/userData.js';
import { showView } from './view.js';


const navBtns = document.querySelectorAll("nav ul li").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target);
        if(e.target.tagName !== "A" || !e.target.href){
            return;
        }
        const url = new URL(e.target.href);
        const path = url.pathname;
        showView(path);
    });
});

let welcome = document.querySelector(".navbar-brand").addEventListener("click", (e) => {
    e.preventDefault();
    e
     showView("/home")
});
let userNav = document.querySelectorAll("li.user");
let guestNav = document.querySelectorAll("li.guest");

function showNav() {
    let userData = hasUserData();
    
    if (userData) {
       userNav.forEach((el) => {
           el.style.display = "block";
           
       });
       guestNav.forEach((el) => {
        el.style.display = "none";
    });
    } else {
        userNav.forEach((el) => {
            el.style.display = "none";
            
        });
        guestNav.forEach((el) => {
            el.style.display = "block";
        });
    }
}

showNav();
export { showNav };