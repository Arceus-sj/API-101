const random_btn = document.querySelector('.container-footer button');
const quote = document.querySelector('.anime-qoute q');
const character = document.querySelector('p .anime-character');
const anime = document.querySelector('p .anime-name'); 
const url = 'https://animechan.vercel.app/api/random';

// custom search
const search_btn = document.querySelector('#search-btn');

search_btn.addEventListener('click', () => {
    let user_input = document.querySelector('#search').value;
    
    console.log(user_input);

    fetch(`${url}/anime?title=${user_input}`)
    .then((response) => {return response.json()})
    .then((data) => { 
        quote.innerHTML = data.quote;
        character.innerHTML = `— ${data.character}`;
        anime.innerHTML = `(${data.anime})`;
    })
    .catch((error) => {
        console.log(error);
        quote.innerHTML = 'Anime not found!!!';
        character.innerHTML = ``;
        anime.innerHTML = ``;
    });

});




// random quotes
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