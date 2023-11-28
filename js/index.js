var menuButton = document.getElementById("menuButton");
var mobileMenu = document.getElementById("mobile-menu");

function toggleMenu() {
    var isOpen = mobileMenu.style.display === "block";

    mobileMenu.style.display = isOpen ? "none" : "block";
    menuButton.classList.toggle("active", !isOpen);
}

$(document).ready(function($) {

    console.clear();
  
    ScrollOut({
      cssProps: {
        visibleY: true,
        viewportY: true,
        scrollPercentY: true
      },
      threshold:0.2
    });
  
  });  