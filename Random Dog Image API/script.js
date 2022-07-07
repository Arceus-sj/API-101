let dogImg = document.querySelector('.dog-img img');

// .then is a Promise
// asynchronous programming

let btn = document.querySelector('.btn button');

// console.log(btn)



btn.addEventListener('click', () => {
  // alert('working');
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      console.log(json.message);
      dogImg.setAttribute('src', `${json.message}`);
      dogImg.setAttribute('class', 'img-style')
    });
  
});

