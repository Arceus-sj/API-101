const random_btn = document.querySelector('.container-footer button');
const quote = document.querySelector('.anime-qoute q');
const character = document.querySelector('p .anime-character');
const anime = document.querySelector('p .anime-name'); 
const url = 'https://animechan.vercel.app/api/random';

const refresh = () => {
    fetch(url)
    .then((response) => {return response.json()})
    .then((data) => { 
        quote.innerHTML = data.quote;
        character.innerHTML = `— ${data.character}`;
        anime.innerHTML = `(${data.anime})`;
    })
    .catch((error) => {console.log(error)});
};

random_btn.addEventListener('click', refresh);