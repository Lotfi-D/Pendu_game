let words = ['fort', 'ingénieux', 'determine', 'shonen', 'enveloppe', 'poste', 'yzutzzpo'];
let wordNow = '';
let tableau = [];
let count = 0;
let error = 0;
let numberBefore = null;
let letterUsedBefore = [];

function changeWord() {
    
    document.querySelector('#dessin').innerHTML = "";
    document.querySelector('#message').innerHTML = "";
    
    count = 0;
    error = 0;

    let number = Math.floor(Math.random() * Math.floor(words.length));

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

    if (index != (-1)) {
        for (i = 0; i < wordNow.length; i++) {
            if (wordNow[i] === inputLetter) {
                tableau.splice(i, 1, inputLetter);
            }
        }
        document.querySelector('#word').textContent = tableau.join(' ').toUpperCase();
        document.querySelector('#message').innerHTML = "<p class=' text-success fw-bold mt-3'> Bonne réponse : La lettre "+ inputLetter.toUpperCase() +" fait bien partie du mot</p>";
    }
    if (index === (-1) && error < 8) {
        error++;
        let messageError;
        if((8-error) === 1){
            messageError = 'Vous avez encore le droit à ' + (8-error) + ' mauvaise réponse !';
        }
        else{
            messageError = 'Vous avez encore le droit à ' + (8-error) + ' mauvaises réponses !';
        }

        document.querySelector('#message').innerHTML = "<p class=' text-danger fw-bold mt-3'>Mauvaise réponse : La lettre "+ inputLetter.toUpperCase() +" ne fait pas partie du mot</p>";
        document.querySelector('#dessin').innerHTML = "<img src='" + error + ".png' class='img-fluid' style='width:15rem'><p class='mt-2'>"+ messageError + "</p>";
    }
    if (error === 8 || count === 10) {
        alert('Vous avez perdu la partie');
        document.querySelector('#dessin').innerHTML = "<img src='8.png' class='img-fluid' style='width:15rem'>";
    }
    count++;
    console.log('count', count);
    console.log('error', error);
}




changeWord();
let randomNumber = document.querySelector('#randomnumber');
randomNumber.addEventListener('click', changeWord);

document.querySelector('#validateLetter').addEventListener('click', letterToFind);