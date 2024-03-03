window.addEventListener("load", registerUser);

function registerUser(){
    let regForm = document.getElementById("regForm")
    regForm.addEventListener("submit", register);

    async function register(e){
        e.preventDefault();

        let formData = new FormData(e.target);

        let email = formData.get("email");
        let password = formData.get("password");
        let rePass = formData.get("rePass");

        console.log({email, password, rePass})
        debugger;

        if(email === "" || password === "" || rePass === ""){
            return;
        }

        if(password !== rePass){
            return;
        }

        let url = `http://localhost:3030/users/register`;

        try{
            let res = await fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})
            });

            let data = await res.json();
            let token = data.accessToken;
            let newUser = {
                email: email,
                password: password,
                id: data._id,
                accessToken: data.accessToken
            }
            let user = localStorage.setItem("user", JSON.stringify(newUser));
            window.location.href = "index.html";
        }catch(err){
            alert(err.message);
        }
    }

}