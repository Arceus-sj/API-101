const search_btn = document.querySelector('.search-bar svg');
const display_area = document.querySelector('.display');
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en';
const data_1_header = document.querySelector('.name');
let  speak_btn = document.querySelector('.speak-btn');
let audio = new Audio(``);
let example = document.querySelector('.example');


search_btn.addEventListener('click', () => {
    audio.remove();

    let word_searched = document.querySelector('#search').value;
    let word = document.querySelector('.word');
    let adj = document.querySelector('.adj');
   
    let data_1_name = document.querySelector('#data-1 .name');
    let data_1_defination = document.querySelector('#data-1 .defination');

    fetch(`${url}/${word_searched}`)
    .then((response) => { return response.json()})
    .then((data) => {
        // console.log(data[0]);
        word.textContent = data[0].word;
        adj.textContent = data[0].phonetics[0].text;



        data_1_defination.innerHTML = data[0].meanings[0].definitions[0].definition;

        if(data[0].meanings[0].definitions[0].example ) {
            console.log(data[0].meanings[0].definitions[0].example);    
            example.innerHTML = `<q>${data[0].meanings[0].definitions[0].example}</q>`;   
        }
        else {
            example.innerHTML = '';
        }


        speak_btn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up" viewBox="0 0 16 16">
                <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>
            </svg>
        `;

        if(data[0].phonetics[0].audio === '') {
            audio = new Audio(`${data[0].phonetics[1].audio}`);
        }
        else {
            audio = new Audio(`${data[0].phonetics[0].audio}`);
        }
        speak_btn.addEventListener('click', () => {
            audio.play();
        });

    })
    .catch((error) => {
        console.log(error)
    });
});




