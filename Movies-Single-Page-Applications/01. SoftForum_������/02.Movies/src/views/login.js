import { createFormEntity } from "../dataService/formHandler.js";
import { post } from "../dataService/requester.js";
import { html, render } from "../lib.js";
import page from "../../node_modules/page/page.mjs";
import { setUserData } from "../userService/userData.js";

let loginTemplate = () => html` 
<section id="form-login" class="view-section">
    <form
        id="login-form"
        class="text-center border border-light p-5"
        action=""
        method="" @submit=${onSubmit}
    >
        <div class="form-group">
            <label for="email">Email</label>
            <input
                id="email"
                type="email"
                class="form-control"
                placeholder="Email"
                name="email"
                value=""
            />
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input
                id="password"
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                value=""
            />
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</section>`;

export function showLoginView() {
    render(loginTemplate());
}

async function onSubmit(e) {

    let data = createFormEntity(e);
    let responce = await post("users/login",data);
    setUserData(responce);
    page.redirect("/");
};
