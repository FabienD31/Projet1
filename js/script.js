/*
START FONCTIONS FOR CARDS.HTML
*/

// DATA CARDS
const cards = {
    "0": {
        "name" : "Adrien F",
        "img" : "./pictures/AdrienF.jpg",
        "alt" : "jason momoa",
        "liId" : "jason",
        "aId" : "adrien",
        "description" : `"Je suis parfait car je suis imparfait"`,
        "adjectifs" : "<b>Rocambolesque</b>, Mirobolant, <b>Hardi</b>, Vivable, <b>Cataclysmique</b>",
        "langage" : "JS",
        "projet" : "Sur le Japon (Mangas, culture nippone, nourriture)"
    },
    "1": {
        "name" : "Colas",
        "img" : "./pictures/colas.jpg",
        "alt" : "Keanu Reeves",
        "liId" : "Keanu",
        "aId" : "colas",
        "description" : `"Je suis beau, je suis fort et je suis drole !"`,
        "adjectifs" : "<b>Délectable</b>, Hardi, <b>Recyclé</b>, Libidineux, <b>Cataclysmique</b>",
        "langage" : "C#",
        "projet" : "Un site sur moi, relatant toutes mes qualités !"
    },
    "2": {
        "name" : "Léa",
        "img" : "./pictures/Léa.jpg",
        "alt" : "Gérard Depardieu",
        "liId" : "gerard",
        "aId" : "lea",
        "description" : `"je suis tout le temps fatiguée et j'aime beaucoup les jeux vidéos"`,
        "adjectifs" : "<b>Rocambolesque</b>, Passable, <b>Vivable</b>, Recyclé, <b>Cataclysmique</b>",
        "langage" : "JS",
        "projet" : "Avoir une bonne nuit de sommeil"
    },
    "3": {
        "name" : "Maxime",
        "img" : "./pictures/Maxime.jpeg",
        "alt" : "ppda",
        "liId" : "ppda",
        "aId" : "maxime",
        "description" : `"Je suis Toulous’hein et fier de l’être (TFC à fond) et j’aime les sport mécaniques"`,
        "adjectifs" : "<b>Délectable</b>, Passable, <b>Vivable</b>, Recyclé, <b>Cataclysmique</b>",
        "langage" : "JS",
        "projet" : "Être entrepreneur !"
    },
    "4": {
        "name" : "Adrien Z",
        "img" : "./pictures/AdrienZ.jpg",
        "alt" : "Georges Pompidou",
        "liId" : "georges",
        "aId" : "adrienf",
        "description" : `"Je cherche à être dehors et en mouvement. En intérieur, je mange et je fais joujou"`,
        "adjectifs" : "<b>Rocambolesque</b>, Hardi, <b>Vivable</b>, Recyclé, <b>Libidineux</b>",
        "langage" : "C#",
        "projet" : "L'autonomie sans électricité"
    },
    "5": {
        "name" : "Harold",
        "img" : "./pictures/Harold.jpg",
        "alt" : "Pete Doherty",
        "liId" : "pete",
        "aId" : "harold",
        "description" : `"Passionné de nouvelles technologies, de musique et de basket, j'aime profiter de chaque instant sur cette terre, avec mes amis, ma famille"`,
        "adjectifs" : "<b>Rocambolesque</b>, Délectable, <b>Hardi</b>, Vivable, <b>Cataclysmique</b>",
        "langage" : "JS",
        "projet" : "Dans lequel je peux m'épanouir et apprendre"
    },
    "6": {
        "name" : "Coline",
        "img" : "./pictures/Coline.jpeg",
        "alt" : "Mimi Mathy",
        "liId" : "mimi",
        "aId" : "coline",
        "description" : `"Ni jeune, ni vieille ; ni trop, ni pas assez; ni riche, ni pauvre; ni moche, ni belle : juste ce qu'il faut !"`,
        "adjectifs" : "<b>Rocambolesque</b>, Mirobolante, <b>Hardie</b>, Vivable, <b>Cataclysmique</b>",
        "langage" : "C#",
        "projet" : "Voyager"
    },
    "7": {
        "name" : "Geoffroy",
        "img" : "./pictures/Goeffroy.jpg",
        "alt" : "H.S Thompson",
        "liId" : "thompson",
        "aId" : "geoffroy",
        "description" : `"J'aime bien les hyènes et j'ai déjà fait 176 au bowling"`,
        "adjectifs" : "<b>Rocambolesque</b>, Mirobolant, <b>Hardi</b>, Recyclé, <b>Cataclysmique</b>",
        "langage" : "JS",
        "projet" : "L'appli web du comité des amis d'Alain Juppé"
    },
    "8": {
        "name" : "Corentin",
        "img" : "./pictures/Corentin.jpg",
        "alt" : "Linus Torvalds",
        "liId" : "linus",
        "aId" : "corentin",
        "description" : `"Je suis un homme de talent, solide et intelligent. Aussi, ma capacité à ne pas me définir au travers du regard des autres me rend exceptionnel."`,
        "adjectifs" : "<b>Rocambolesque</b>, Délectable, <b>Hardi</b>, Libidineux, <b>Cataclysmique</b>",
        "langage" : "C#",
        "projet" : "Un logiciel d'optimisation de licenciements"
    },
    "9": {
        "name" : "Flavien",
        "img" : "./pictures/Flavien.jpg",
        "alt" : "Hugh Jackman",
        "liId" : "hugh",
        "aId" : "flavien",
        "description" : `"J'aime la bonne boustifaille, les mangas, les jeux videos. J'aime les challenges dans ma vie professionnelle ou personnelle"`,
        "adjectifs" : "<b>Rocambolesque</b>, Délectable, <b>Vivable</b>, Libidineux, <b>Cataclysmique</b>",
        "langage" : "C#",
        "projet" : "Peut etre full stack dans creation web"
    },
    "10": {
        "name" : "François",
        "img" : "./pictures/François.jpg",
        "alt" : "Jackie Chan",
        "liId" : "jackie",
        "aId" : "françois",
        "description" : `"Je suis de retour pour vous jouer un mauvais tour. Plus rapide que la lumière."`,
        "adjectifs" : "<b>Rocambolesque</b>, Coquet, <b>Délectable</b>, Hardi, <b>Cataclysmique</b>",
        "langage" : "C#",
        "projet" : "Etendre mon pouvoir jusqu'à la voie lactée !"
    },
    "11": {
        "name" : "Jessica",
        "img" : "./pictures/Jessica.jpg",
        "alt" : "Scarlett Johanson",
        "liId" : "scarlett",
        "aId" : "jessica",
        "description" : `"Grande, blonde... pas à forte poitrine ! Je cuisine, un peu... Je regarde le foot, beaucoup, je peux prendre l'apéro, passionnément ou à la folie..."`,
        "adjectifs" : "<b>Rocambolesque</b>, Coquette, <b>Hardie</b>, Passable, <b>Vivable</b>",
        "langage" : "JS",
        "projet" : "Réussir ma reconversion !"
    },
    "12": {
        "name" : "Sophie",
        "img" : "./pictures/Sophie.jpg",
        "alt" : "Valérie Lemercier",
        "liId" : "valérie",
        "aId" : "sophie",
        "description" : `"Un peu (beaucoup) maniaque, plantophile (enfin vous savez, les gens qui aiment les plantes), et gentophile (les gens qui aiment les autres gens quoi)"`,
        "adjectifs" : "<b>Rocambolesque</b>, Coquette, <b>Vivable</b>, Recyclée, <b>Cataclysmique</b>",
        "langage" : "C#",
        "projet" : "Sauver le monde"
    },
    "13": {
        "name" : "Emilie D",
        "img" : "./pictures/Emilie D.jpg",
        "alt" : "Nina Hagen",
        "liId" : "nina",
        "aId" : "emilie",
        "description" : `"N'aime pas se décrire ^^"`,
        "adjectifs" : "<b>Rocambolesque</b>, Coquette, <b>Délectable</b>, Vivable, <b>Cataclysmique</b>",
        "langage" : "C#",
        "projet" : "Il est en cours.... ;)"
    },
    "14": {
        "name" : "Fabien G",
        "img" : "./pictures/Fabien G.jpg",
        "alt" : "Rowan Atkinson",
        "liId" : "rowan",
        "aId" : "fabien",
        "description" : `"Issue d'une famille d'un humour tendancieux, je reste sur du potache pour une semblance de normalité"`,
        "adjectifs" : "<b>Mirobolant</b>, Hardi, <b>Recyclé</b>, Libidineux, <b>Cataclysmique</b>",
        "langage" : "C#",
        "projet" : "Une application lave-vaisselle"
    },
    "15": {
        "name" : "Maïlys",
        "img" : "./pictures/Maïlys.jpg",
        "alt" : "Aragorn",
        "liId" : "aragorn",
        "aId" : "mailys",
        "description" : `"Je suis un Rôdeur, surnommé aussi Grand-Pas, descendant d'Isildur, héritier des trônes d'Arnor et de Gondor"`,
        "adjectifs" : "<b>Rocambolesque</b>, Hardie, <b>Recyclée</b>, Libidineuse, <b>Cataclysmique</b>",
        "langage" : "C#",
        "projet" : "Détruire le précieux"
    },
    "16": {
        "name" : "Marion",
        "img" : "./pictures/Marion.jpg",
        "alt" : "Nabila",
        "liId" : "nabila",
        "aId" : "marion",
        "description" : `"J'ai des gros seins et j'aime les frites"`,
        "adjectifs" : "<b>Rocambolesque</b>, Délectable, <b>Mirobolante</b>, Passable, <b>Recyclée</b>",
        "langage" : "JS",
        "projet" : "Secret Story 42"
    },
    "17": {
        "name" : "Samson",
        "img" : "./pictures/Samson.jpg",
        "alt" : "Elon Musk",
        "liId" : "elon",
        "aId" : "samson",
        "description" : `"Je suis jeune et dynamique !"`,
        "adjectifs" : "<b>Hardi</b>, Passable, <b>Vivable</b>, Recyclé, <b>Libidineux</b>",
        "langage" : "JS",
        "projet" : "Prendre la place d'Elon Musk"
    },
    "18": {
        "name" : "Hervé",
        "img" : "./pictures/Hervé.jpg",
        "alt" : "Bill Gates",
        "liId" : "bill",
        "aId" : "herve",
        "description" : `"J'aime l'argent et créer !  Mais surtout l'argent !"`,
        "adjectifs" : "<b>Rocambolesque</b>, Hardi, <b>Recyclé</b>, Libidineux, <b>Cataclysmique</b>",
        "langage" : "C#",
        "projet" : "Microsoft Open-space et redevenir 1er homme riche"
    },
    "19": {
        "name" : "Fabien D",
        "img" : "./pictures/Fabien D.png",
        "alt" : "Sangoku",
        "liId" : "sangoku",
        "aId" : "fabiend",
        "description" : `"Kamehameha ! !"`,
        "adjectifs" : "<b>Délectable</b>, Passable, <b>Vivable</b>, Libidineux, <b>Recyclé</b>",
        "langage" : "C#",
        "projet" : "Arrêter de mourir !"
    },
    "20": {
        "name" : "Coralie",
        "img" : "./pictures/Coralie.png",
        "alt" : "heidi",
        "liId" : "heidi",
        "aId" : "coralie",
        "description" : `"Petite fille des montagnes, j'habite dans la montagne avec mes chèvres et mon Grand-Père (je crois), j'ai pas la 4G..."`,
        "adjectifs" : "<b>Rocambolesque</b>, Coquette, <b>Délectable</b>, Libidineuse, <b>Vivable</b>",
        "langage" : "C#",
        "projet" : "Vivre en ville et manger des kiri"
    },
    "21": {
        "name" : "Emeric",
        "img" : "./pictures/Emeric.jpg",
        "alt" : "Charlie Sheen",
        "liId" : "charlie",
        "aId" : "emeric",
        "description" : `"Il développera vos sites web et autres applications. Mais il est également apte aux travaux des champs, et corvéable à merci"`,
        "adjectifs" : "<b>Rocambolesque</b>, Délectable, <b>Hardi</b>, Cataclysmique, <b>Vivable</b>",
        "langage" : "JS",
        "projet" : "Hacker le Pentagone"
    },
    "22": {
        "name" : "Sebastien",
        "img" : "./pictures/Seb.jpg",
        "alt" : "Will Smith",
        "liId" : "will",
        "aId" : "seb",
        "description" : `"Je suis une grande personne qui fixe sa barre très haut !"`,
        "adjectifs" : "<b>Délectable</b>, Vivable, <b>Hardi</b>, Cataclysmique, <b>Libidineux</b>",
        "langage" : "C#",
        "projet" : "Faire concurrence à Microsoft"
    }
}

// GENERATION DES CARDS
const divContainer = document.querySelector('.container');
let row;

// FCT GENERATION NOMBRE ALEATOIRE
function entierAleatoire(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (const i in cards) {

    if (row == 4 || row == undefined) {
        let hr = document.createElement('hr');
        var divRow = document.createElement('div');
        divRow.classList.add('row');
        divContainer.appendChild(hr);
        divContainer.appendChild(divRow);
        row = 0;
    }
    // DIV COL
    const divCol = document.createElement('div');
    divCol.classList.add('col-lg-3', 'my-3');
    divRow.appendChild(divCol);
    // DIV CARD
    const divCard = document.createElement('div');
    divCard.classList.add('card', 'text-center');
    divCol.appendChild(divCard);
    // IMG
    const img = document.createElement('img');
    img.setAttribute("src", cards[i].img);
    img.setAttribute("alt", cards[i].alt);
    img.classList.add('card-img-top');
    divCard.appendChild(img);
    // DIV CARD BODY
    const divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');
    divCard.appendChild(divCardBody);
    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.innerHTML = cards[i].name;
    const p = document.createElement('p');
    p.classList.add('card-text', 'font-italic');
    p.innerHTML = cards[i].description;
    divCardBody.appendChild(h5);
    divCardBody.appendChild(p);
    // UL
    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');
    divCard.appendChild(ul);
    // LI 1
    const li1 = document.createElement('li');
    li1.classList.add('list-group-item');
    li1.innerHTML = cards[i].adjectifs;
    ul.appendChild(li1);
    // LI 2
    const li2 = document.createElement('li');
    li2.classList.add('list-group-item');
    li2.innerHTML = cards[i].langage;
    ul.appendChild(li2);
    // LI 3
    const li3 = document.createElement('li');
    li3.classList.add('list-group-item', 'font-weight-bold');
    li3.innerHTML = cards[i].projet;
    ul.appendChild(li3);
    // LI 4
    const li4 = document.createElement('li');
    li4.classList.add('list-group-item', 'text-danger', 'font-weight-bold');
    li4.setAttribute('id', cards[i].liId);
    li4.innerHTML = entierAleatoire(100, 1000) + " €";
    ul.appendChild(li4);
    // DIV CARD BODY 2
    const divCardBody2 = document.createElement('div');
    divCardBody2.classList.add('card-body', 'text-center');
    divCard.appendChild(divCardBody2);
    // BUTTON
    const button = document.createElement('button');
    button.setAttribute('href', '#');
    button.setAttribute('id', cards[i].aId);
    button.classList.add('btn', 'btn-primary', 'price');
    button.innerHTML = "+ 100€";
    divCardBody2.appendChild(button);

    row++;
}

// EVENEMENTS BOUTONS
const btn = document.querySelectorAll(".price");
// Ajout évènement sur chaque bouton
for (let i = 0; i < btn.length; i++) {
    
    btn[i].addEventListener('click', () => {
        let li = document.getElementById(cards[i].liId);
        li.innerHTML = parseInt(li.innerHTML) + 100 + " €";
    });
    
}

// SECURITE DES CHECKBOX
let checkbox = document.querySelectorAll("[type=checkbox]");

for (let i = 0; i < checkbox.length; i++) {

	checkbox[i].addEventListener("change", function () {

        if (document.querySelectorAll(":checked").length > 5) 
        {
            this.checked = false;
        }
		
	}, false);
}
	

/*
END FONCTIONS FOR CARDS.HTML
*/