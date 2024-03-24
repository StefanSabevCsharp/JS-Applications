import { render,html } from "../src/utils/lib.js";
import { register } from "../src/utils/autentication.js";
import { getUserId, setUserData } from "../src/dataService/userData.js";
import { formHandler } from "../src/utils/formHandler.js";

let exampleTemplate = (data) => html`
    
<h1>Register</h1>
<form @submit=${onRegister}>
<label for="email">Email</label>
<input type="text" id="email" name="email">
<label for="password">Password</label>
<input type="password" id="password" name="password">
<label for="rePassword">Re-Password</label>
<input type="password" id="rePassword" name="rePassword">
<button type="submit">Login</button>
    `;

export function exampleView() {
    render(exampleTemplate());
}

async function onRegister(e) {
    let dataEntity = formHandler(e);
    debugger;
    let email = dataEntity['email'];
    let password = dataEntity['password'];
    let rePassword = dataEntity['rePassword'];
    if(password != rePassword){
        return alert('Passwords do not match');
    }
    debugger;
   let data = await register({email,password});
   setUserData(data);
   let id = getUserId();
    console.log(id);
}