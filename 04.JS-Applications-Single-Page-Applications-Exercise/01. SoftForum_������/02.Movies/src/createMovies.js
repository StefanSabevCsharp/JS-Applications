export function createMovies(allMovies) {

    let movies = [];

    allMovies.forEach(movie => {
        // let li = document.createElement("li");
        // li.className = "card mb-4";
        // let img = document.createElement("img");
        // let title = movie.title;
        // let description = movie.description;
        // img.src = movie.img;
        // li.appendChild(img);
        // let div  = document.createElement("div");
        // div.className = "card-body";
        // let h4 = document.createElement("h4");
        // h4.className = "card-title";
        // h4.textContent = title;
        // let a = document.createElement("a");
        // a.href = "#";
        // let div2 = document.createElement("div");
        // div2.className = "card-footer";
        // let btn = document.createElement("button");
        // btn.className = "btn btn-info";
        // btn.textContent = "Details";
        // movies.push(li);
        let li = document.createElement("li");
        li.innerHTML = `
        <li class="card mb-4">
                  <img class="card-img-top"  src=${movie.img} alt="Card image cap" width="400"/>
                  <div class="card-body">
                    <h4 class="card-title">${movie.title}</h4>
                    <a href="#">
                    </a>
                  </div>
                  <div class="card-footer">
                  <button type="button" class="btn btn-info">Details</button>
                  </div>
                </li>`
                // let div2 = document.createElement("div");
                // div2.className = "card-footer";
                // let btn = document.createElement("button");
                // btn.className = "btn btn-info";
                // btn.textContent = "Details";
                // div2.appendChild(btn);
                // li.appendChild(div2);

        movies.push(li);
    });
    return movies;
}