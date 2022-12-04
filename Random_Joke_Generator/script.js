const joke = document.querySelector('.joke');
const btn = document.querySelector('button');
const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
// console.log(joke, btn);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1fa918ddf1mshfdcb0392a4f45b8p1dd0a5jsn566f8aca75be',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

fetch(url, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));