
import page from "../../node_modules/page/page.mjs";
import { logout } from "../utils/autentication.js";
import { updateNav } from "../utils/updateNav.js";

export function logoutView(){
    logout();
    updateNav();
    page.redirect('/home');
}