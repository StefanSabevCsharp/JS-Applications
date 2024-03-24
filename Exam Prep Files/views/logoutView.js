import {render,html} from "../src/utils/lib.js";

import {logout} from "../src/utils/autentication.js";
import { clearUserData } from "../src/dataService/userData.js";

let logoutTemplate = () => html`
<h1>Logout</h1>
<button @click=${onLogout}>Logout</button>`;

export function showLogout(){
    render(logoutTemplate());
}

async function onLogout(){
    debugger;
    let data = await logout();
    clearUserData();

}