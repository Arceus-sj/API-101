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
        if(json.image.url){
            heroImg.setAttribute('src', `${json.image.url}`);
        }else{
            alert("Error While Loading img")
        }
       
    });

    console.log(getRandomHeroId());

});





const searchBtn = document.querySelector('.search-btn');

const getSearchedSuperHero = (name) => {
    fetch(`${baseURL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
console.log(json.results)

        if(json.results ){
            const hero = json.results[0];
            console.log(hero.name);

            heroImg.setAttribute('src', `${hero.image.url}`);
        }
        else{
            alert("No data")
        }
        
     
    });
};


searchBtn.addEventListener('click', () => {
    let name = document.querySelector('#search-name').value;
    console.log(name);
    getSearchedSuperHero(name);
})
