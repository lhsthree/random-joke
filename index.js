const setupDiv = document.getElementById('setup')
const punchlineDiv = document.getElementById('punchline')
const punchlineBtn = document.getElementById('punchlineBtn')
const newJokeBtn = document.getElementById('newJokeBtn')

async function getJoke(){
	const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
	const joke = await jokePromise.json()
	console.log(joke)
}

getJoke()