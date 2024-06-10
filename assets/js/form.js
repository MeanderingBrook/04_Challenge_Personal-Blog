// Reference: https://blog.logrocket.com/localstorage-javascript-complete-guide/

const ul = document.querySelector('ul');
const input = document.getElementById('username')

// Loads existing User Names from Local Storage to postsArray, else: empty Array
let postsArray = localStorage.getItem('usernames') ? JSON.parse(localStorage.getItem('usernames')) : [];

// Creates <li> for each User Name, and adds to <ul>
postsArray.forEach(addPost);
function addPost(text) {
  const post = document.createElement('li')
  post.textContent = text;
  ul.appendChild(post);
}

function add() {
  postsArray.push(input.value);
  localStorage.setItem('usernames', JSON.stringify(postsArray));
  addPost(input.value);
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