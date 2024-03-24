import { html, render } from "../utils/lib.js";
import {formHandler} from "../utils/formHandler.js";
import {login} from "../utils/autentication.js";
import page from "../../node_modules/page/page.mjs";
import { setUserData } from "../dataService/userData.js";
import { updateNav } from "../utils/updateNav.js";


let loginTemplate = () => html` 
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${onSubmit}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
            />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>`;

export function showLoginView() {
    render(loginTemplate());
}

async function onSubmit(e) {
    let data = formHandler(e);
    let response = await login(data);
    setUserData(response);
    updateNav(); 

    page.redirect("/");

}