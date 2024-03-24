import { exampleView} from "../views/example.js";
import { exampleView2} from "../views/example2.js";
import page from "../node_modules/page/page.mjs"
import { showLogout } from  "../views/logoutView.js";

console.log("working");

page("/example",exampleView);
page("/example2",exampleView2);
page("/logout",showLogout);
page.start();