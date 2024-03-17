import { createFormEntity } from "../dataService/formHandler.js";
import { html,render } from "../lib.js";
import { post } from "../dataService/requester.js";
import { setUserData } from "../userService/userData.js";
import page from "../../node_modules/page/page.mjs";


const regTemplate = () => html`
<section id="form-sign-up" class="view-section">
        <form
          id="register-form"
          class="text-center border border-light p-5"
          action=""
          method=""
          @submit=${onRegister}
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

          <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input
              id="repeatPassword"
              type="password"
              class="form-control"
              placeholder="Repeat-Password"
              name="repeatPassword"
              value=""
            />
          </div>

          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </section>`;


export function showRegisterView(){
    render(regTemplate());

}

async function onRegister(e){
    let data = createFormEntity(e);
    let responce = await post("users/register",data);
    setUserData(responce);
    debugger;
    page.redirect("/");
}