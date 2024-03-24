import page  from "../node_modules/page/page.mjs";
import { showLoginView } from "./views/loginVIew.js";
import { showDashboardView } from "./views/dashboardView.js";
import { showRegisterView } from "./views/registerView.js";
import { showLogoutView } from "./views/logout.js";
import { updateNav } from "./utils/updateNav.js";
import { showCreateView } from "./views/createView.js";

console.log("working");
updateNav();

page("/login",showLoginView);
page("/",showDashboardView);
page("/register",showRegisterView);
page("/logout",showLogoutView);
page("/create",showCreateView);

page.start();