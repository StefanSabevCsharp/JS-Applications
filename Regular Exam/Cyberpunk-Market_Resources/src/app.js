
import page from "../node_modules/page/page.mjs"
import { updateNav } from "./utils/updateNav.js";
import { showCreateView } from "./views/createView.js";
import { showHomeView } from "./views/homeView.js"
import { showLoginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { showDashboard } from "./views/showDashboard.js";
import { showDeleteView } from "./views/showDeleteView.js";
import { showDetailsView } from "./views/showDetailsView.js";
import { showEditView } from "./views/showEditView.js";
import { showRegisterView } from "./views/showRegisterView.js";



updateNav();
page("/",showHomeView);
page("/home",showHomeView);
page("/login",showLoginView);
page("/register",showRegisterView);
page("/logout",logoutView);
page("/dashboard",showDashboard);
page("/create",showCreateView);
page("/:id",showDetailsView);
page("/edit/:id",showEditView);
page("/delete/:id",showDeleteView);


page.start();