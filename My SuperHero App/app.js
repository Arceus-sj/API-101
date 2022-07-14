const randomHeroBtn = document.querySelector('.random-hero-btn');
const heroImg = document.querySelector('img');

const baseURL = `https://superheroapi.com/api.php/160583143163979`; 

const getRandomHeroId = () => {
    let randomHeroId = Math.floor(Math.random() * 731)+1;
    return randomHeroId;
};


randomHeroBtn.addEventListener('click', () => {
    fetch(`${baseURL}/${getRandomHeroId()}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.biography['full-name']);
        heroImg.setAttribute('src', `${json.image.url}`);
    });

    console.log(getRandomHeroId());

});





const searchBtn = document.querySelector('.search-btn');

const getSearchedSuperHero = (name) => {
    fetch(`${baseURL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0];
        console.log(hero.name);
        heroImg.setAttribute('src', `${hero.image.url}`);
    });
};


searchBtn.addEventListener('click', () => {
    let name = document.querySelector('#search-name').value;
    
    getSearchedSuperHero(name);
})
