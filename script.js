// Mobile navigation toggle. The markup calls showMenu()/hideMenu() from inline onclick handlers.
var navLinks = document.getElementById("nav-links");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}
