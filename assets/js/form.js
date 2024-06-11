// Nav Menu Function
function navMenuDisplayForm() {
  var x = document.getElementById("site-links");

  if (x.style.display === "block") {
    x.style.display = "none";

  } else {
    x.style.display = "block";
  }
}


// Reference: https://blog.logrocket.com/localstorage-javascript-complete-guide/
// blogPosts1
const ul = document.querySelector('ul');
const inputUserName = document.getElementById('username');
const inputPostTitle = document.getElementById('posttitle');
const inputPostContent = document.getElementById('postcontent');

// Loads existing User Names from Local Storage to postsArray, else: empty Array
let postsArray = localStorage.getItem('blogPosts1') ? JSON.parse(localStorage.getItem('blogPosts1')) : [];

// Creates <li> for each User Name, and adds to <ul>
postsArray.forEach(addPost);
function addPost(text) {

  let textString = JSON.stringify(text);

  const post = document.createElement('li')
  post.textContent = textString;
  ul.appendChild(post);
}

function add() {
  newPost = {}; // Temporary Object to hold Blog Post inputs (User Name, Post Title)
  console.log(newPost);

  // Assigns User Input to temporary Blog Post Object, newPost
  newPost.userName = inputUserName.value;
  console.log(newPost.userName);

  newPost.postTitle = inputPostTitle.value;
  console.log(newPost.postTitle);

  newPost.postContent = inputPostContent.value;
  console.log(newPost.postContent);
  
  // Adds new Blog Post inputs to postsArray
  postsArray.push(newPost);
  console.log(newPost)

  // Adds values of postArray to Local Storage
  localStorage.setItem('blogPosts1', JSON.stringify(postsArray));
  
  // Passes newPost values to addPost() to be added to created HTML Element
  addPost(newPost);
  inputUserName.value = '';
  inputPostTitle.value = '';
  inputPostContent.value = '';

  console.log(postsArray);
}

function del() {
  localStorage.clear();
  ul.innerHTML = '';
  postsArray = [];
}


// THIS WORKS >> blogPosts
// const ul = document.querySelector('ul');
// const inputUserName = document.getElementById('username')
// const inputPostTitle = document.getElementById('posttitle')

// Loads existing User Names from Local Storage to postsArray, else: empty Array
// let postsArray = localStorage.getItem('blogPosts') ? JSON.parse(localStorage.getItem('blogPosts')) : [];
// console.log(postsArray)

// Creates <li> for each User Name, and adds to <ul>
// postsArray.forEach(addPost);
// function addPost(text) {
//   const post = document.createElement('li')
//   post.textContent = text;
//   ul.appendChild(post);
// }

// function add() {
//   postsArray.push(inputUserName.value);
//   localStorage.setItem('blogPosts', JSON.stringify(postsArray));
//   addPost(inputUserName.value);
//   inputUserName.value = '';

//   console.log(postsArray);
// }

// function del() {
//   localStorage.clear();
//   ul.innerHTML = '';
//   postsArray = [];
// }
// << THIS WORKS