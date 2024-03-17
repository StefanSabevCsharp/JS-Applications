import { createFormEntity } from "../dataService/formHandler.js";
import { post } from "../dataService/requester.js";
import { html, render } from "../lib.js";
import { setUserData } from "../userService/userData.js";
import { showDashboard } from "./dashboard.js";

const registerTemplate = () => html` <div class="row space-top">
    <div class="col-md-12">
      <h1>Register New User</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onRegister}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="email">Email</label>
          <input class="form-control" id="email" type="text" name="email" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="password">Password</label>
          <input
            class="form-control"
            id="password"
            type="password"
            name="password"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="rePass">Repeat</label>
          <input
            class="form-control"
            id="rePass"
            type="password"
            name="rePass"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
      </div>
    </div>
  </form>`;

export function showRegisterView(userData) {
    render(registerTemplate());
}


async function onRegister(e) {

    let data = createFormEntity(e);
    console.log("here register");
    let responce = await post("users/register", data);
    //to do implement error handling conflict
    setUserData(responce);
    showDashboard();

}