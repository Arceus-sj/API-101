const search_btn = document.querySelector('.search-bar svg');
const display_area = document.querySelector('.display');
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en';






search_btn.addEventListener('click', () => {
    // console.log("clicked");

    let word_searched = document.querySelector('#search').value;
    let word = document.querySelector('.word');
    let adj = document.querySelector('.adj');
    let speak_btn = document.querySelector('.speak-btn');
    let data_1_name = document.querySelector('#data-1 .name');
    let data_1_defination = document.querySelector('#data-1 .defination');
    let data_1_example = document.querySelector('.defination .example');

    fetch(`${url}/${word_searched}`)
    .then((response) => { return response.json()})
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].meanings[0].definitions[0].example);
        
        word.textContent = data[0].word;
        adj.textContent = data[0].phonetic;
        data_1_defination.textContent = data[0].meanings[0].definitions[0].definition;
        data_1_example.innerHTML = data[0].meanings[0].definitions[0].example;

    })
    .catch((error) => {console.log(error)});




});



