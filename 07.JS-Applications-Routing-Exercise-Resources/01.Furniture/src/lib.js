import { html,render  as litRender} from "../node_modules/lit-html/lit-html.js";
let root = document.querySelector(".container");

export function render(view){

    litRender(view,root);

}

export {
    html
}