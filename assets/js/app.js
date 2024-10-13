const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`; //Le agregue las comillas invertidas que le faltaban (`)
// Corregi los selectores del DOM
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); //tambien le faltaba las comillas 
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = Algo salió mal: ${err};
}

displayUser('stolinski').catch(handleError);