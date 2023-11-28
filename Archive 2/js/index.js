var menuButton = document.getElementById("menuButton");
var mobileMenu = document.getElementById("mobile-menu");

function toggleMenu() {
    var isOpen = mobileMenu.style.display === "block";

    mobileMenu.style.display = isOpen ? "none" : "block";
    menuButton.classList.toggle("active", !isOpen);
}