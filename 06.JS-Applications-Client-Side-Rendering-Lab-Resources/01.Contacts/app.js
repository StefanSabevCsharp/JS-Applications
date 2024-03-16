import { html, render } from "../node_modules/lit-html/lit-html.js";
import { contacts } from "./contacts.js";

let root = document.getElementById("contacts");
root.addEventListener("click",showDetails)

let contactTemplate = (contact) => html` <div class="contact card">
  <div>
    <i class="far fa-user-circle gravatar"></i>
  </div>
  <div class="info">
    <h2>Name: ${contact.name}</h2>
    <button class="detailsBtn">Details</button>
    <div class="details" id=${contact.id}>
      <p>Phone number: ${contact.phoneNumber}</p>
      <p>Email: ${contact.email}</p>
    </div>
  </div>
</div>`;

console.log(root);
render(contacts.map(contactTemplate), root);

function showDetails(event){

    let divDetails = event.target.parentElement.querySelector(".details");
    const isHidden = divDetails.style.display != "block";
    divDetails.style.display = isHidden ? "block" : "none";
    



}
