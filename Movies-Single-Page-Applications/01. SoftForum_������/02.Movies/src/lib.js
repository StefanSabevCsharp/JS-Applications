import {html,render as renderer} from "../node_modules/lit-html/lit-html.js";

let root = document.querySelector("main");

function render (view) {
    return renderer(view,root);
    
}


export{
    html,
    render,
    
}