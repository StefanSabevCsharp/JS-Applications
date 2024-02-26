function loadRepos() {
	let repos = document.getElementById('repos');
	let username = document.getElementById('username').value;

	fetch(`https://api.github.com/users/${username}/repos`)
	.then(response => response.json())
	.then(data => {
		console.log(Object.values(data));
		repos.innerHTML = data.map(repo => `<li><a href="${repo.html_url}">${repo.name}</a></li>`).join('');
	})
	.catch(error => {
		repos.innerHTML = `<li>Error: ${error.message}</li>`;
	});
}