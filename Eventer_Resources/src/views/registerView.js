import { formHandler } from "../utils/formHandler.js";
import { render, html } from "../utils/lib.js";
import { register } from "../utils/autentication.js";
import { setUserData } from "../dataService/userData.js";
import page from "../../node_modules/page/page.mjs";
import { updateNav } from "../utils/updateNav.js";

let registerTemplate = () => html`
<section id="register">
    <div class="form" @submit=${onSubmit}>
        <h2>Register</h2>
        <form class="register-form">
            <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
            />
            <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
            />
            <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
            />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;

export function showRegisterView() {
    render(registerTemplate());
}


async function onSubmit(e) {
    let dataObj = formHandler(e);
    let response = await register(dataObj);
    debugger;
    setUserData(response);
    updateNav();
    console.log(response);
    page.redirect("/");
}