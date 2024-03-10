import {checkNav} from './app.js';

checkNav();
start();

function start() {
    // if(localStorage.getItem("user")){
    //     document.getElementById("guest").style.display = "none";
    //     document.getElementById("user").style.display = "inline-block";
    //     document.querySelector("p span").textContent = JSON.parse(localStorage.getItem("user")).email;
    // }else{
    //     document.getElementById("guest").style.display = "inline-block";
    //     document.getElementById("user").style.display = "none";
    //     document.querySelector("p span").textContent = "guest";
    // }
    // let logoutBtn = document.getElementById("logout");
    // logoutBtn.addEventListener("click", logout);
    // function logout(){
    //     localStorage.removeItem("user");
    //     window.location = "index.html";
    // }

    let form = document.querySelector('form');
    form.addEventListener("submit", login);

    async function login(e){
        e.preventDefault();

        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');

        let userObj = {
            email,
            password
        }

        let url = "http://localhost:3030/users/login";
        e.target.reset();

        
        let res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        });
        let data = await res.json();
        debugger;
        if(data.code == 403){
            return alert(data.message);
        }else{
            let userdata = localStorage.setItem('user', JSON.stringify(data));
            window.location = 'index.html';
        }
        

    }
}