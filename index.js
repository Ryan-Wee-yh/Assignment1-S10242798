navbar = document.querySelector(".navbar");              /* helps initiate custom dropdown for nav bar in phone version */
navbar.onclick = function() {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active")
}