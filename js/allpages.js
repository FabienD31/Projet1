//TAILLE BALISE MAIN DYNAMIQUE
const nav = document.querySelector('nav');
let height = parseFloat(nav.clientHeight);

const main = document.querySelector('main');
main.style.marginTop = height + "px";