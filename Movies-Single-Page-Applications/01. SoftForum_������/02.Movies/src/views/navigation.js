import { getUserData } from "../userService/userData.js";

export function updateNav() {
    let guest = document.querySelectorAll("li.guest");
    let user = document.querySelectorAll("li.user");
    let userData = getUserData();
    if (userData) {
        user.forEach((el) => (el.style.display = "block"));
        guest.forEach((el) => (el.style.display = "none"));
    } else {
        user.forEach((el) => (el.style.display = "none"));
        guest.forEach((el) => (el.style.display = "block"));
    }
}
