import { logout } from "../utils/autentication.js";
import page from "../../node_modules/page/page.mjs";
import { updateNav } from "../utils/updateNav.js";



export function showLogoutView() {
    logout();
    updateNav();
    page.redirect("/");
}