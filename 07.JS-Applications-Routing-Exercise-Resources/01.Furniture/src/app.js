import page from "../node_modules/page/page.mjs";
import { update } from "./dataService/requester.js";
import { render,html } from "./lib.js";
import { updateNav } from "./updateNav.js";
import { showDashboard } from "./views/dashboard.js";
import { showLoginView } from "./views/login.js";
import { onLogout } from "./views/logout.js";
import { showRegisterView } from "./views/register.js";

updateNav();

page("/", showDashboard);
page("/dashboard", showDashboard);
page("/login",showLoginView);
page("/register",showRegisterView);
page("/logout",onLogout);

page();
