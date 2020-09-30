//START FONCTIONS FOR CARDS.HTML
const cards = {
    "seb" : "willsmith"
}

const btn = document.querySelectorAll(".btn");

for (let i = 0; i < btn.length; i++) {
    
    btn[i].addEventListener('click', () => {
        let id = btn[i].id;
        let li = document.getElementById(cards[id]);
        li.innerHTML = parseInt(li.innerHTML) + 100 + " €";
    });
    
}
//END FONCTIONS FOR CARDS.HTML