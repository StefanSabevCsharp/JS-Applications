import { setUserData } from "../dataService/userData.js";
import { login } from "../utils/autentication.js";
import { formHandler } from "../utils/formHandler.js";
import { html, render } from "../utils/lib.js";
import page from "../../node_modules/page/page.mjs";
import { updateNav } from "../utils/updateNav.js";
import { displayError } from "../utils/notification.js";

const loginTemplate = () => html` <section id="login">
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

async function onSubmit(event) {
    event.preventDefault();
    let data = formHandler(event);
    if(!data.email || !data.password){
        displayError("All fields are required!");
        return ;
    }
    let response = await login(data);
    setUserData(response);
    updateNav();
    page.redirect('/home');
   

}
