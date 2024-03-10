checkNav();

export function checkNav(){
    if(localStorage.getItem("user")){
        document.getElementById("guest").style.display = "none";
        document.getElementById("user").style.display = "inline-block";
        document.querySelector("p span").textContent = JSON.parse(localStorage.getItem("user")).email;
    }else{
        document.getElementById("guest").style.display = "inline-block";
        document.getElementById("user").style.display = "none";
        document.querySelector("p span").textContent = "guest";
    }
    let logoutBtn = document.getElementById("logout");
    logoutBtn.addEventListener("click", logout);
    async function logout(){
        await fetch("http://localhost:3030/users/logout", {
            method: "GET",
            headers: {
                "X-Authorization": JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        
        localStorage.removeItem("user");
        window.location = "index.html";
    }
}
