const joke = document.querySelector('.joke');
const btn = document.querySelector('button');

const url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

let getJoke = () => {
    console.log(url);
    fetch(url)
    .then((res) => {return res.json()})
    .then((data) => { 
        console.log(data);
        console.log(data.joke);
        joke.innerHTML = data.joke;
    })
    .catch((error) => { console.log(error)});
}

btn.addEventListener('click', getJoke)