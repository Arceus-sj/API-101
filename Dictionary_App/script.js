const search_btn = document.querySelector('.search-bar svg');
const display_area = document.querySelector('.display');
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en';

let  speak_btn = document.querySelector('.speak-btn');

let audio = new Audio(``);

let example = document.querySelector('.example q');


search_btn.addEventListener('click', () => {
    // console.log("clicked");
    audio.remove();
    let word_searched = document.querySelector('#search').value;
    let word = document.querySelector('.word');
    let adj = document.querySelector('.adj');
   
    let data_1_name = document.querySelector('#data-1 .name');
    let data_1_defination = document.querySelector('#data-1 .defination');
    // let data_1_example = document.querySelector('.defination .example');

    fetch(`${url}/${word_searched}`)
    .then((response) => { return response.json()})
    .then((data) => {
        console.log(data[0]);
        // console.log();
        
        word.textContent = data[0].word;
        adj.textContent = data[0].phonetics[0].text;
        data_1_defination.textContent = data[0].meanings[0].definitions[0].definition;
        // data_1_example.innerHTML = data[0].meanings[0].definitions[0].example;
        example.textContent = data[0].meanings[0].definitions[0].example;

        console.log(example);
        
        audio = new Audio(`${data[0].phonetics[0].audio}`);

        console.log(audio);

        speak_btn.addEventListener('click', () => {
            audio.play();
        });

    })
    .catch((error) => {console.log(error)});




});




