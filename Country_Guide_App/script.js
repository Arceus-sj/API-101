const search_btn = document.querySelector('#search-btn'); 


function capitalizeTheLetter (item) {
    let words = item.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    words.join(" ");

    // console.log(words.join(' '))
    return words.join(' ');
}

const get_search_item_info = () => {
    let search_item = document.querySelector('#search').value;
    let country_name = document.querySelector('.country-name');
    let capital = document.querySelector('.capital');
    let continent = document.querySelector('.continent');
    let population = document.querySelector('.population');
    let currency = document.querySelector('.currency');
    let language = document.querySelector('.language');
    let flag = document.querySelector('#flag');
    // console.log(search_item);

    let url = `https://restcountries.com/v3.1/name/${search_item}?fullText=true`;

    fetch(url)
    .then((response) => {return response.json()})
    .then((data) => {
        // console.log(data[0]);
        

        // let currency_property_name = Object.keys(data[0].currencies)[0];
        let currency_name = data[0].currencies[Object.keys(data[0].currencies)].name;
        let currency_symbol = data[0].currencies[Object.keys(data[0].currencies)].symbol;
        // language.innerHTML = `Common Language: ${data[0].languages}`;
        // console.log(data[0].altSpellings[2]);
        // console.log(data[0].capital[0]);
        // console.log(data[0].continents[0]);
        // console.log(data[0].population);
        // // console.log(data[0].currencies);
        // // console.log(currency_property_name);
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].symbol);
        // console.log(data[0].languages);
        // console.log(Object.values(data[0].languages).toString().split(',').join(', '));


        country_name.innerHTML = capitalizeTheLetter(search_item);
        capital.innerHTML = `Capital: ${data[0].capital[0]}`;
        continent.innerHTML = `Continent: ${data[0].continents[0]}`;
        population.innerHTML = `Population: ${data[0].population}`;
        currency.innerHTML = `Currency: (${data[0].currencies[Object.keys(data[0].currencies)].symbol}) ${data[0].currencies[Object.keys(data[0].currencies)].name} `;
        language.innerHTML = `Common Language: ${Object.values(data[0].languages).toString().split(',').join(', ')}`
        flag.setAttribute('src', `${data[0].flags.svg}`);
        console.log(data[0].flags.svg);
    })
    .catch((error) => {
        console.log(error);
        alert(error);
    })


}




// key-down event -->
document.addEventListener('keydown', (event) => {

    if(event.code == 'Enter') {
        get_search_item_info();
    }
    else {      
    }
})

// btn click event -->
search_btn.addEventListener('click', get_search_item_info);
