import { html, render } from "../utils/lib.js";

const homeViewTemplate = () => html` 

    <section id="hero">
        <img src="./images/home.png" alt="home" />
        <p>We know who you are, we will contact you</p>
    </section> 
`;

export function showHomeView() {
    render(homeViewTemplate());
}
