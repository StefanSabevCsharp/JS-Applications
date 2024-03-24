import { html, render } from "../utils/lib.js";

let dashboardTemplate = (allEvents) => html` <h2>Current Events</h2>
    <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
       ${allEvents.map(eventTemplate)}
    </section>`;

let eventTemplate = (event) => html` 
<div class="event">
    <img src="./${event.imageUrl}" alt="example1" />
    <p class="title">${event.name}</p>
    <p class="date">${event.date}</p>
    <a class="details-btn" href="/details/${event._id}">Details</a>
</div>`;

export async function showDashboardView() {

    let allEvents =  await getAllEvents();
    render(dashboardTemplate(allEvents));
}

async function getAllEvents() {
    let response = await fetch('http://localhost:3030/data/events');
    let data = await response.json();
    return data;
}
