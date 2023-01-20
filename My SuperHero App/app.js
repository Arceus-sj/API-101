const randomHeroBtn = document.querySelector('.random-hero-btn');
const heroImg = document.querySelector('img');


const baseURL = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api`;

const getRandomHeroId = () => {
    let randomHeroId = Math.floor(Math.random() * 731)+1;
    return randomHeroId;
};


randomHeroBtn.addEventListener('click', () => {
    fetch(`${baseURL}/id/${getRandomHeroId()}.json`)
    .then(response => {return response.json()})
    .then((data) => {console.log(data)})
    .catch((error) => console.log(error))


});
