const inputData = document.querySelector('#input-data');
const searchButton = document.querySelector('button');
const body = document.querySelector('body')


let user;
let userData;

searchButton.addEventListener('click', () => {
  user = inputData.value;
  // console.log(user)
  request();
})



const request = function() {
  const url = `https://api.github.com/users/${user}`;
  fetch(url)

    .then((resp) => resp.json())

    .then(function(data){
      //  console.log(data);
      userData = data;
    })
    .then(createProfile)
}

const createProfile = function() {
  let card = document.createElement('div');
  body.appendChild(card);
  card.id = "profileCard";

  addPhoto();
}



const addPhoto = function() {
  const bla = document.querySelector('#profileCard');
  let photo = document.createElement('img')
  bla.appendChild(photo)
  photo.src = userData.avatar_url;
}