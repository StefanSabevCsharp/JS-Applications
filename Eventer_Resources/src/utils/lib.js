import {html,render as renderer} from "../../node_modules/lit-html/lit-html.js";

//TO DO CHECK IF THE ROOT IS SELECTED
let root = document.querySelector('main');

function render(view){
    renderer(view,root);
}

export {
    html,
    render
}