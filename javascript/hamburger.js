/* Her har jeg brukt coden vi har lagd i timen */
const menu = document.getElementById("nav-menu");

const hamburgerMenu = () => {
    if(menu.style.display == "block") {
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }
}
