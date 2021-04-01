let words = [
    'fort', 'ingénieux', 'determine', 'shonen', 'enveloppe', 'poste', 'yzutzzpo'
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
        document.querySelector('#messageRound').innerHTML = "<p class='text-danger fw-bold'>La partie est finie, Vous avez perdu ! </p>";
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