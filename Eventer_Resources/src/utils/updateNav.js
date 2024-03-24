import { getUserData } from "../dataService/userData.js";


export function updateNav() {
    let userNav = document.querySelector('.user');
    let guestNav = document.querySelector('.guest');

    let userData = getUserData();
    if(userData){
        userNav.style.display = 'block';
        guestNav.style.display = 'none';
    }else{
        userNav.style.display = 'none';
        guestNav.style.display = 'block';
    }
}