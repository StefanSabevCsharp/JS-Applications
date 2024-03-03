window.addEventListener("load",createNewRecipe);


function createNewRecipe(){
    document.querySelector("form").addEventListener("submit",createRecipe);

    async function createRecipe(e){
        e.preventDefault();

        console.log(e.target);
        //TO DO: Validate input

        let formData = new FormData(e.target);
        let name = formData.get("name");
        let img = formData.get("img");
        let ingredients = formData.get("ingredients").split("\n").map(l => l.trim()).filter(l => l != "");
        let steps = formData.get("steps").split("\n").map(l => l.trim()).filter(l => l != "");
         
        let newRecipe = {
            name,
            img,
            ingredients,
            steps
        }

        let url = `http://localhost:3030/data/recipes`;

        try{
            let response = await fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": JSON.parse(localStorage.getItem("user")).accessToken
                },
                body: JSON.stringify(newRecipe)
            });

            if(!response.ok){
                let err = await response.json();
                return alert(error.message);
            }
            let data = await response.json();
            //to do: redirect to recipe page

        }catch(err){
             alert(err.message);
        }

        
    }
}