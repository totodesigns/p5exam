const menu = document.querySelector(".menu");
const hamburger= document.querySelector(".hamburger");
const menuItems = document.getElementsByClassName("menuItem");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    document.getElementById("navneSkift").innerHTML = "Menu";
    document.getElementById("navneSkift").style.color = "white";
  } else {
    menu.classList.add("showMenu");
    document.getElementById("navneSkift").innerHTML = "Luk menu";
    document.getElementById("navneSkift").style.color = "black";
  }
}

hamburger.addEventListener("click", toggleMenu);

Array.from(menuItems).forEach(function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

