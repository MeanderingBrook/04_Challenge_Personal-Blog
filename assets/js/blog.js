// Logo Page Reload
function homeReload() {
  location.reload();
}

// Nav Menu Function
function navMenuDisplayHome() {
  var x = document.getElementById("site-links");
  // var y = document.getElementById("dev-name");

  if (x.style.display === "block") {
    x.style.display = "none";
    // y.style.display = "block";
  } else {
    x.style.display = "block";
    // y.style.display = "none";
  }
}


// THIS WORKS >> 
// Load Blog Posts from Local Storage on load >>

// Set Constant for target HTML Element to which Blog Posts will be added
// const targetDiv = document.getElementById('blogPosts')

// Loads existing User Names from Local Storage to permanent Array (postsArray), else: empty Array
// let postsArray = localStorage.getItem('blogPosts1') ? JSON.parse(localStorage.getItem('blogPosts1')) : [];

// Creates <li> for each User Input Object, and adds to <ul>
// postsArray.forEach(addPost);
// function addPost(text) {

//   let textString = JSON.stringify(text);

//   const post = document.createElement('li')
//   post.textContent = textString;
//   targetDiv.appendChild(post);
// }
// THIS WORKS <<


// TRIAL: THIS WORKS TOO >> 
// Load Blog Posts from Local Storage on load >>

// Set Constant for target HTML Element to which Blog Posts will be added
// const targetDiv = document.getElementById('blogPosts')

// Loads existing User Names from Local Storage to permanent Array (postsArray), else: empty Array
// let postsArray = localStorage.getItem('blogPosts1') ? JSON.parse(localStorage.getItem('blogPosts1')) : [];

// Creates <div> for each User Input Object, and adds to <ul>
// postsArray.forEach(addPost);
// function addPost(text) {

//   let textString = JSON.stringify(text);
//   console.log(textString);

//   const post = document.createElement('div')
//   post.classList.add('card');
//   post.textContent = textString;
//   targetDiv.appendChild(post);
// }
// << TRIAL: THIS WORKS TOO



// TRIAL >> 
// Load Blog Posts from Local Storage on load >>

// Set Constant for target HTML Element to which Blog Posts will be added
const targetDiv = document.getElementById('blogPosts')

// Loads existing User Names from Local Storage to permanent Array (postsArray), else: empty Array
let postsArray = localStorage.getItem('blogPosts1') ? JSON.parse(localStorage.getItem('blogPosts1')) : [];

// Creates <div> for each User Input Object, and adds to <ul>
postsArray.forEach(addPost);
function addPost(object) {

  // Assigns Blog Post Object Elements to Variables
  let userNameNode = object.userName;
  let postTitleNode = object.postTitle;
  let postContentNode = object.postContent;

  // let textString = JSON.stringify(text);
  // console.log(textString);

  // Creates (no-content) <div> to hold individual Blog Posts
  const postDiv = document.createElement('div')
  postDiv.classList.add('card');
  postDiv.setAttribute('id', 'postDiv');
  // post.textContent = textString;
  targetDiv.appendChild(postDiv);

  // Post Title >> 
  // Creates <div> to hold Blog Post - Post Title
  const postTitleDiv = document.createElement('div');
  postTitleDiv.classList.add('elementDiv');
  postTitleDiv.setAttribute('id', 'postTitleDiv');
  postDiv.appendChild(postTitleDiv);

  // Creates <h4> to hold Blog Post - Post Title
  const postTitleHeader = document.createElement('h4');
  postTitleHeader.classList.add('titleHeader')
  postTitleHeader.setAttribute('id', 'postTitleHeader');
  postTitleHeader.textContent = 'Post Title';
  postTitleDiv.appendChild(postTitleHeader);

  // Creates <p> to hold Blog Post - Post Title
  const postTitlePara = document.createElement('p');
  postTitlePara.textContent = postTitleNode;
  postTitleDiv.appendChild(postTitlePara);
  // << Post Title


  // Post Content >>
  // Creates <div> to hold Blog Post - Post Content
  const postContentDiv = document.createElement('div');
  postContentDiv.classList.add('elementDiv');
  postContentDiv.setAttribute('id', 'postContentDiv');
  postDiv.appendChild(postContentDiv);

  // Creates <h4> to hold Blog Post - Post Content
  const postContentHeader = document.createElement('h4');
  postContentHeader.classList.add('contentHeader')
  postContentHeader.setAttribute('id', 'postContentHeader');
  postContentHeader.textContent = 'Post Content';
  postContentDiv.appendChild(postContentHeader);

  // Creates <p> to hold Blog Post - Post Content
  const postContentPara = document.createElement('p');
  postContentPara.textContent = postContentNode;
  postContentDiv.appendChild(postContentPara);
  // << Post Content


  // User Name >>
  // Creates <div> to hold Blog Post - User Name
  const userNameDiv = document.createElement('div');
  userNameDiv.classList.add('elementDiv');
  userNameDiv.setAttribute('id', 'userNameDiv');
  postDiv.appendChild(userNameDiv);

  // Creates <h4> to hold Blog Post - User Name
  const userNameHeader = document.createElement('h4');
  userNameHeader.classList.add('userHeader')
  userNameHeader.setAttribute('id', 'userNameHeader');
  userNameHeader.textContent = 'User Name';
  userNameDiv.appendChild(userNameHeader);

  // Creates <p> to hold Blog Post - User Name
  const userNamePara = document.createElement('p');
  userNamePara.textContent = userNameNode;
  userNameDiv.appendChild(userNamePara);
  // << User Name



  // const post = document.createElement('div')
  // post.classList.add('card');
  // post.textContent = textString;
  // targetDiv.appendChild(post);
}
// << TRIAL