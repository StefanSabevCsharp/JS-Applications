
import page from "../node_modules/page/page.mjs";
import { updateNav } from "./views/navigation.js";
import { showLoginView } from "./views/login.js";
import { showDashboard } from "./views/dashboard.js";
import { showRegisterView } from "./views/register.js";
import { onLogout } from "./views/logout.js";
import { addNewMovie } from "./views/addMovie.js";
import { showDetails } from "./views/details.js";
import { onDelete } from "./views/deleteMovie.js";
import { onEdit } from "./views/editMovie.js";

let sections = Array.from(document.querySelectorAll(".container section"));

sections.forEach((section) => {
  section.style.display = "none";
  });

  updateNav();
let addBtn = document.querySelector(".btn.btn-warning");

  page("/",showDashboard);
  page("/login",showLoginView);
  page("/register",showRegisterView);
  page("/add",addNewMovie);
  page("/logout",onLogout);
  page("/details/:id",showDetails);
  page("/delete/:id",onDelete);
  page("/edit/:id",onEdit);
  
  
page();

