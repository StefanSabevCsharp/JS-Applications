import { showView } from "./view.js";

export function createMovies(allMovies, userId) {

  let movies = [];

  allMovies.forEach(movie => {

    let li = document.createElement("li");
    li.className = "card mb-4"
    li.innerHTML = `
        <img src="${movie.img}">
        <h4>${movie.title}</h4>
        `;
    if (userId) {
      const button = document.createElement("button");
      button.textContent = "Details";
      button.dataset.id = movie._ownerId;
      li.appendChild(button);
      button.addEventListener("click", () => {
        showView("/details", movie);
      });
    };
    movies.push(li);
  }
  );
  return movies;
}

