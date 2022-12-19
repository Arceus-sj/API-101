const search_btn = document.querySelector('.search-bar svg');
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en';


search_btn.addEventListener('click', () => {
    // console.log("clicked");

    let word_searched = document.querySelector('#search').value;

    fetch(`${url}/${word_searched}`)
    .then((response) => { return response.json()})
    .then((data) => {
        
    })
    .catch((error) => {console.log(error)});




});