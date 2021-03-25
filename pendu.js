let words = ['fort', 'ingénieux', 'déterminé', 'shonen', 'enveloppe', 'poste'];
let wordNow = '';

document.querySelector('#test').textContent = wordNow;

let changeWord = function getRandomInt() {
    let number = Math.floor(Math.random() * Math.floor(words.length));
    document.querySelector('#word').textContent = words[number];
    wordNow = words[number];
};

changeWord();

let randomNumber = document.querySelector('#randomnumber');
randomNumber.addEventListener('click', changeWord);

//wordNow permet de stocker le mot actuel


let wordHidden = Array.from(wordNow).join(' ');

document.querySelector('#test').textContent = wordHidden;










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