function loadRepos() {
   let result = document.getElementById('res');

   fetch('https://api.github.com/users/testnakov/repos')
   .then(response => response.json())
   .then(data => {
      result.innerHTML = data.map(repo => `<li>${repo.name}</li>`).join('');
   })
}