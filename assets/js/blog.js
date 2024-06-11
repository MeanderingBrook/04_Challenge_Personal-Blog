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