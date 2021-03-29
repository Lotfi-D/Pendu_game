let words = ['fort', 'ingénieux', 'determine', 'shonen', 'enveloppe', 'poste'];
let wordNow = '';

let changeWord = function getRandomInt() {
    let number = Math.floor(Math.random() * Math.floor(words.length));
    wordNow = [...words[number]];
    
    let tableau = [];
    tableau.push(wordNow[0]);

    for(i=1; i < wordNow.length-1; i++) {
        if(wordNow[0] === wordNow[i] || wordNow[wordNow.length-1] === wordNow[i]) {
            tableau.push(wordNow[i]);
        }
        else {
            tableau.push('_');
        }  
    }
    tableau.push(wordNow[wordNow.length-1]);
    document.querySelector('#word').textContent = tableau.join(' ').toUpperCase();
};

let findLetters = function letterToFind () {
    var x = document.querySelector("#findWord").value;
    alert(x);
}



changeWord();

let randomNumber = document.querySelector('#randomnumber');
randomNumber.addEventListener('click', changeWord);


document.querySelector('#jcpas').addEventListener('click', findLetters) ;












//permet de changer la ville et de relancer la fonction après si la ville est entrée
//let changerVille = document.querySelector('#changer');
//changerVille.addEventListener('click', () => {
//    ville = prompt('Entrez une ville');
//    if(ville != ""){
//        meteo(ville)
//    };
//})

// la fonction permet de récupérer la température de la ville
// function meteo(ville) {
//     const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=' + apiKey + '&units=metric';
//     let request = new XMLHttpRequest();
//     request.open('GET', url);
//     request.responseType = 'json';
//     request.send();

//     request.onload = function () {
//         if (request.readyState === XMLHttpRequest.DONE) {
//             if (request.status === 200) {
//                 let result = request.response;
//                 let temperature = result.main.temp;
//                 let ville = result.name;
//                 let icon= result.weather[0].icon;
//                 let description = result.weather[0].description;
//                 document.querySelector('#ville').textContent = ville;
//                 document.querySelector('#temperature_label').textContent = Math.floor(temperature);
//                 document.querySelector('#weather').innerHTML =  '<img src="http://openweathermap.org/img/wn/' + icon +'@2x.png"/>';
//                 document.querySelector('#description').textContent = description;
//             } else {
//                 alert('Veuillez entrer le nom d\'une ville correct');
//             }
//         }
//     }
// }

// la fonction meteo se lance au chargement de la page
//meteo(ville);