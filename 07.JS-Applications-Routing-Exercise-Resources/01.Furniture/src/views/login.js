import { createFormEntity } from "../dataService/formHandler.js";
import { post } from "../dataService/requester.js";
import { html, render } from "../lib.js";
import { setUserData } from "../userService/userData.js";
import page from "../../node_modules/page/page.mjs"

let loginTemplate = () => html`
 <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onLogin}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>`;


export function showLoginView(){
   render(loginTemplate());
}


async function onLogin(e){
    e.preventDefault();
    console.log("in onLogin");
    let dataObj = createFormEntity(e);
    let response = await post("users/login",dataObj);
    console.log(response);
    setUserData(response);
    page.redirect("/");
    

}