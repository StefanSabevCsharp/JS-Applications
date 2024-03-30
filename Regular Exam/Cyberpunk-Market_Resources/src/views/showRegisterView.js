import { formHandler } from "../utils/formHandler.js";
import { html, render } from "../utils/lib.js";
import page from "../../node_modules/page/page.mjs";
import { register } from "../utils/autentication.js";
import { setUserData } from "../dataService/userData.js";
import { updateNav } from "../utils/updateNav.js";
import { displayError } from "../utils/notification.js";

const registerTemplate = () => html` 
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="register-form" @submit=${onSubmit}>
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

async function onSubmit(event) {
    event.preventDefault();
    let data = formHandler(event);
    if (!data.email || !data.password || !data['re-password']) {
        displayError('All fields are required!');
        return;
    }
    if (data.password !== data['re-password']) {
        displayError('Passwords don\'t match!');
        return;
    }
    let response = await register(data);
    setUserData(response);
    updateNav();
    page.redirect('/home');
}
