import page from "../node_modules/page/page.mjs";
import { update } from "./dataService/requester.js";
import { render,html } from "./lib.js";
import { updateNav } from "./updateNav.js";
import { showDashboard } from "./views/dashboard.js";
import { showLoginView } from "./views/login.js";
import { onLogout } from "./views/logout.js";
import { showRegisterView } from "./views/register.js";
import { showDetailsView } from "./views/details.js";
import { showCreateView } from "./views/create.js";
import { deleteItem } from "./views/deleteItem.js";
import { editItemView } from "./views/editItem.js";
import { myfurnitureView } from "./views/myFurniture.js";

updateNav();

page("/", showDashboard);
page("/dashboard", showDashboard);
page("/login",showLoginView);
page("/register",showRegisterView);
page("/logout",onLogout);
page("/create",showCreateView);
page("/myfurniture",myfurnitureView);
page("/details/:id",showDetailsView);
page("/delete/:id",deleteItem);
page("/edit/:id",editItemView);
page();
