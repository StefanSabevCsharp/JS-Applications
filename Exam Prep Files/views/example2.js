import { setUserData } from "../src/dataService/userData.js";
import { login } from "../src/utils/autentication.js";
import { render,html } from "../src/utils/lib.js";

let exampleTemplate = (data) => html`
    
    /* create form with email and password inputs */
  <form @submit=${onSubmit}>
    <label for="email">Email</label>
    <input type="text" id="email" name="email">
    <label for="password">Password</label>
    <input type="password" id="password" name="password">
    <button type="submit">Login</button>
        `;

export function exampleView2() {
    render(exampleTemplate());
}

async function onSubmit(e) {
    e.preventDefault();
    let formdata = new FormData(e.target);
    let email = formdata.get('email');
    let password = formdata.get('password');
    debugger;
   let data = await login({email,password});
   setUserData(data);

}