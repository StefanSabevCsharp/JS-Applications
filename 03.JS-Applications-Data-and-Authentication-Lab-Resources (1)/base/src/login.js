function onLoad(){

    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", logIn);

    function logIn(event){
        event.preventDefault();

        let formData = new FormData(loginForm);

        console.log(formData.get("email"));
        console.log(formData.get("password"));
        debugger;
    }

}


onLoad();