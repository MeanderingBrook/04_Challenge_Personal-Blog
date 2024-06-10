// Reference: https://blog.logrocket.com/localstorage-javascript-complete-guide/

const ul = document.querySelector('ul');
const input = document.getElementById('user-name')

// Loads existing User Names from Local Storage to postsArray, else: empty Array
let postsArray = localStorage.getItem('userNames') ? JSON.parse(localStorage.getItem('userNames')) : [];

// Creates <li> for each User Name, and adds to <ul>
postsArray.forEach(addUserName);
function addUserName(text) {
  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);
}

function add() {
  postsArray.push(input.value);
  localStorage.setItem('userNames', JSON.stringify(postsArray));
  addUserName(input.value);
  input.value = '';
}

function del() {
  localStorage.clear();
  ul.innerHTML = '';
  postsArray = [];
}


// const ul = document.querySelector('ul');
// const input = document.getElementById('post');

// let postsArray = localStorage.getItem('userPosts') ? JSON.parse(localStorage.getItem('userPosts')) : [];


// console.log(postsArray);
// console.log(userPost);

// postsArray.forEach(addUserPost);
// function addUserPost(userPost) {
//   const li = document.createElement('li')
  
//   console.log(userPost);

//   li.textContent = userPost;
//   ul.appendChild(li);
// }

// function add() {

//   let userPost = {};

//   userPost.username = input.username;
//   userPost.posttitle = input.posttitle;

//   postsArray.push(userPost);
//   localStorage.setItem('userPosts', JSON.stringify(postsArray));
//   addUserPost(userPost);
//   input.value = '';

//   return userPost;
// }