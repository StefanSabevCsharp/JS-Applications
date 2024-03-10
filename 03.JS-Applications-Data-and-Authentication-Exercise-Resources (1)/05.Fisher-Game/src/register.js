import {checkNav} from './app.js';

checkNav();

let form = document.querySelector('form');
form.addEventListener("submit", register);

let logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", logout);

function logout(){
    localStorage.removeItem("user");
    window.location = "index.html";
}

async function register(e){
    e.preventDefault();
    debugger;

    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('rePass');

    if(password != rePass){
        return alert('Password don\'t match');
    }
    let userObj = {
        email,
        password
    }
    e.target.reset();
    let url = "http://localhost:3030/users/register";
    let res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObj)
    });
    let data = await res.json();
    let userdata = localStorage.setItem('user', JSON.stringify(data));
    console.log(data);
    debugger;
    window.location = 'index.html';
    
}