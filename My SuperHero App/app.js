const btn = document.querySelector('button');
const heroImg = document.querySelector('img');


const getRandomHeroId = () => {
    let randomHeroId = Math.floor(Math.random() * 731)+1;
    return randomHeroId;
};


btn.addEventListener('click', () => {
    fetch(`https://superheroapi.com/api.php/160583143163979/${getRandomHeroId()}`)
    .then(response => response.json())
    .then(json => {
        // document.querySelector('body').innerHTML += `<img src="${json.image.url}" class="heroImg"/>`; 
        heroImg.setAttribute('src', `${json.image.url}`);
        console.log(json.image.url);


    });

    console.log(getRandomHeroId());

});









