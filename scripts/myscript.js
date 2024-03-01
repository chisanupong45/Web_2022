var menu = document.getElementById("menu");
var logo = document.getElementById("logo");

function closemenu() {
    menu.style.top = "-100vh";
    logo.style.color = "#fff";
}

function openmenu() {
    menu.style.top = "0vh";
    logo.style.color = "#000";
}