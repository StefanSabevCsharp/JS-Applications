window.addEventListener("load", onLoad);

function onLoad() {

    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", logIn);

    async function logIn(event) {
        event.preventDefault();

        let formData = new FormData(loginForm);

        let userName = formData.get("email");
        let password = formData.get("password");

        if (userName === "" || password === "") {
            return;
        }

        let url = `http://localhost:3030/users/login`;

        try{
            let res = await fetch(url,{
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email: userName, password})
            });

            let data = await res.json();

            let token = data.accessToken;
            let newUser = {
                email: userName,
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

