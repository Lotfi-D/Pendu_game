let words = [
    'fort', 'ingénieux', 'determine', 'shonen', 'enveloppe', 'poste', 'Aquarium', 'Araignée', 'Arbalète', 'Archipel', 'Banquise', 'Batterie', 'Brocante',
    'Brouhaha', 'Capeline', 'Clavecin', 'Cloporte', 'Débutant', 'Diapason', 'Gangster', 'Gothique', 'Hautbois', 'Hérisson', 'Logiciel', 'Objectif',
    'Paranoïa', 'Parcours', 'Pastiche', 'Question', 'Quetsche', 'Scarabée', 'Scorpion', 'Symptôme', 'Tabouret', 'Tomahawk', 'Toujours', 'Tourisme',
    'Triangle', 'Utopique', 'Zeppelin', 'Accordéon', 'Ascenseur', 'Ascension', 'Aseptiser', 'Autoroute', 'Avalanche', 'Balalaïka', 'Bilboquet', 'Bourricot',
    'Brillance', 'Cabriolet', 'Contrario', 'Cornemuse', 'Dangereux', 'Épluchage', 'Féodalité', 'Forteresse', 'Gondolier', 'Graphique', 'Horoscope', 'Intrépide',
    'Klaxonner', 'Mascarade', 'Métaphore', 'Narrateur', 'Péripétie', 'Populaire', 'Printemps', 'Quémander', 'Tambourin', 'Vestiaire', 'Xylophone', 'Acrostiche', 
    'Apocalypse','Attraction', 'Aventurier', 'Bouillotte', 'Citrouille', 'Controverse', 'Coquelicot', 'Dissimuler', 'Flibustier', 'Forestière', 'Grenouille',
    'Impossible', 'Labyrinthe', 'Maharadjah', 'Prudemment', 'Quadriceps', 'Soliloquer', 'Subjective', 'Abriter', 'Ballast', 'Baryton', 'Bassine', 'Batavia',
    'Billard', 'Bretzel', 'Cithare', 'Chariot', 'Clairon', 'Corbeau', 'Cortège', 'Crapaud', 'Cymbale', 'Dentier', 'Djembé', 'Drapeau', 'Exemple',
    'Fourmis', 'Grandir', 'Iceberg', 'Javelot', 'Jockey', 'Journal', 'Journée', 'Jouxter', 'Losange', 'Macadam', 'Mondial', 'Notable', 'Oxygène',
    'Panique', 'Pétrole', 'Poterie', 'Pouvoir', 'Renégat', 'Scooter', 'Senteur', 'Sifflet', 'Spirale', 'Sucette', 'Strophe', 'Tonneau', 'Trousse',
    'Tunique', 'Ukulélé', 'Vautour', 'Zozoter', 'Acajou', 'Agneau', 'Alarme', 'Ananas', 'Angora', 'Animal', 'Arcade', 'Aviron', 'Azimut', 'Babine',
    'Balade', 'Bonzaï', 'Basson', 'Billet', 'Bouche', 'Boucle', 'Bronze', 'Cabane', 'Caïman', 'Cloche', 'Chèque', 'Cirage', 'Coccyx', 'Crayon', 'Garage',
    'Gospel', 'Goulot', 'Gramme', 'Grelot', 'Guenon', 'Hochet', 'Hormis', 'Humour', 'Hurler', 'Jargon', 'Limite', 'Lionne', 'Menthe', 'Oiseau', 'Podium',
    'Poulpe', 'Poumon', 'Puzzle', 'Quartz', 'Rapide', 'Séisme', 'Tétine', 'Tomate', 'Walabi', 'Whisky', 'Zipper', 'Accès', 'Aimer', 'Aloès', 'Assez', 'Avion', 
    'Awalé', 'Balai', 'Banjo', 'Barbe', 'Bonne', 'Bruit', 'Buche', 'Cache', 'Capot', 'Carte', 'Chien', 'Crâne', 'Cycle', 'Ébène', 'Essai', 'Gifle', 'Honni', 'Jambe', 
    'Koala', 'Livre', 'Lourd', 'Maman', 'Moult', 'Noeud', 'Ortie', 'Pêche', 'Poire', 'Pomme', 'Poste', 'Prune', 'Radar', 'Radis', 'Robot', 'Route', 'Rugby', 'Seuil', 
    'Taupe', 'Tenue', 'Texte', 'Tyran', 'Usuel', 'Valse',
    ];

let wordNow = '';
let tableau = [];
let count = 0;
let error = 0;
let numberBefore = null;
let number = 0;
let finish = false

function changeWord() {
    document.querySelector('#dessin').innerHTML = "";
    document.querySelector('#message').innerHTML = "";
    document.querySelector('#messageRound').innerHTML = "";

    count = 0;
    error = 0;

    do {
        number = Math.floor(Math.random() * Math.floor(words.length));
    }
    while (numberBefore === number);

    wordNow = [...words[number]];
    tableau = [];
    tableau.push(wordNow[0]);

    for (i = 1; i < wordNow.length - 1; i++) {
        if (wordNow[0] === wordNow[i] || wordNow[wordNow.length - 1] === wordNow[i]) {
            tableau.push(wordNow[i]);
        } else {
            tableau.push('_');
        }
    }

    tableau.push(wordNow[wordNow.length - 1]);
    document.querySelector('#word').textContent = tableau.join(' ').toUpperCase();
    console.log('number: ' + number, 'numberBefore:' + numberBefore)
    numberBefore = number;
};

function letterToFind() {
    let inputLetter = document.querySelector("#findWord").value;
    let index = wordNow.indexOf(inputLetter);

    if (index !== (-1) && finish === false) {
        for (i = 0; i < wordNow.length; i++) {
            if (wordNow[i] === inputLetter) {
                tableau.splice(i, 1, inputLetter);
            }
        }
        document.querySelector('#word').textContent = tableau.join(' ').toUpperCase();
        document.querySelector('#message').innerHTML = "<p class=' text-success fw-bold mt-3'> Bonne réponse : La lettre " + inputLetter.toUpperCase() + " fait bien partie du mot</p>";
        if (count < 10) {
            count++;
        }
    }
    if (index === (-1) && error < 8 && finish === false) {
        if (error < 8 && count < 10) {
            error++;
            count++;
        }

        let messageError;

        if ((8 - error) === 1) {
            messageError = 'Vous avez encore le droit à ' + (8 - error) + ' mauvaise réponse !';
        } else {
            messageError = 'Vous avez encore le droit à ' + (8 - error) + ' mauvaises réponses !';
        }

        document.querySelector('#message').innerHTML = "<p class='text-danger fw-bold mt-3'>Mauvaise réponse : La lettre " + inputLetter.toUpperCase() + " ne fait pas partie du mot</p>";
        document.querySelector('#dessin').innerHTML = "<img src='" + error + ".png' class='img-fluid' style='width:15rem'><p class='mt-2'>" + messageError + "</p>";
    }

    //message à afficher en fonction des coups et des erreurs    
    if ((10 - count) === 1) {
        document.querySelector('#messageRound').textContent = "Il vous reste " + (10 - count) + " coup à jouer";
    } else {
        document.querySelector('#messageRound').textContent = "Il vous reste " + (10 - count) + " coups à jouer";
    };

    if (error === 8 || count === 10) {
        document.querySelector('#messageRound').innerHTML = "<p class='text-danger fw-bold'>La partie est finie, Vous avez perdu ! Le mot était "+ wordNow.join('').toUpperCase() +" </p>";
        document.querySelector('#message').innerHTML = "";
        finish = true;
        alert('Vous avez perdu la partie');
    }

    if (tableau.toString() === wordNow.toString()) {
        document.querySelector('#messageRound').innerHTML = "<p class='text-success fw-bold'>La partie est finie, Félicitations, vous avez gagné ! </p>";
        document.querySelector('#dessin').innerHTML = " ";
        document.querySelector('#message').innerHTML = "";
        finish = true;
        alert('Vous avez gagné la partie !');
    }
    console.log('count', count, 'error', error);
}

changeWord();
let randomNumber = document.querySelector('#randomnumber');
randomNumber.addEventListener('click', changeWord);

document.querySelector('#validateLetter').addEventListener('click', letterToFind);