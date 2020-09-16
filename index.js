const setupDiv = document.getElementById('setup')
const punchlineDiv = document.getElementById('punchline')
const punchlineBtn = document.getElementById('punchlineBtn')
const newJokeBtn = document.getElementById('newJokeBtn')
let punchline; 


async function getJoke(){
	const jokePromise = await fetch
	('https://official-joke-api.appspot.com/jokes/programming/random');
	const joke = await jokePromise.json()
	setupDiv.innerText = joke[0].setup
	punchline = joke[0].punchline

	punchlineBtn.classList.toggle('hidden');
	punchlineDiv.innerHTML = '';
	punchlineDiv.classList.remove('bubble')
	newJokeBtn.classList.toggle('hidden');
	console.log(joke)
}

punchlineBtn.addEventListener('click', getPunchline)

function getPunchline(){
	punchlineDiv.innerText = punchline;
	punchlineDiv.classList.toggle('bubble')
	punchlineBtn.classList.toggle('hidden');
	newJokeBtn.classList.toggle('hidden');
	console.log(punchline)
}

newJokeBtn.addEventListener('click', getJoke)
getJoke()