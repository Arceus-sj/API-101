const url = `https://picsum.photos/v2/list`;
const container = document.querySelector('.container');

fetch(url)
.then((response) => {return response.json()})
.then((data) => {
    console.log(data);
    container.innerHTML = `
        <img src="${data[0].url}">
    `;
})
.catch((error) => {console.log(error)})

