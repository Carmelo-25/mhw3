const bottone_cerca = document.getElementById("bottone_cerca");
const box_cerca = document.getElementById("box_cerca");

function Click_Cerca() {
    box_cerca.style.display = "block";
    box_cerca.focus();
    console.log("Cliccato");
}

function Focus_Cerca() {
    box_cerca.value = '';
    console.log('Focus');
}

function Blur_Cerca() {
    if (box_cerca.value === '') { 
        box_cerca.style.display = "none";
        console.log('Blur');
    }else{
        console.log ('Blur');
    }
}

bottone_cerca.addEventListener("click", Click_Cerca);
box_cerca.addEventListener("focus", Focus_Cerca);
box_cerca.addEventListener("blur", Blur_Cerca);

const bottone_icona_cerca = document.getElementById("bottone_icona_cerca");
const box_icona_cerca = document.getElementById("box_icona_cerca");

function Click_Icona_Cerca() {
    box_icona_cerca.style.display = "block";
    box_icona_cerca.focus();
    console.log("Cliccato");
}

function Focus_Icona_Cerca() {
    box_icona_cerca.value = '';
    console.log('Focus');
}

function Blur_Icona_Cerca() {
    if (box_icona_cerca.value === '') { 
        box_icona_cerca.style.display = "none";
        console.log('Blur');
    }else{
        console.log ('Blur');
    }
}

bottone_icona_cerca.addEventListener("click", Click_Icona_Cerca);
box_icona_cerca.addEventListener("focus", Focus_Icona_Cerca);
box_icona_cerca.addEventListener("blur", Blur_Icona_Cerca);

document.addEventListener("DOMContentLoaded", function() {
    const bottone_menu = document.getElementById("menu_bottone");
    const lista_menu = document.getElementById("menu_lista");

    function toggleMenu() {
        if (lista_menu.style.display === "block") {
            lista_menu.style.display = "none";
        } else {
            lista_menu.style.display = "block";
        }
    }

    if (bottone_menu && lista_menu) {
        bottone_menu.addEventListener("click", toggleMenu);
    } 
});

document.addEventListener("DOMContentLoaded", function() {
    const pulsantiAggiungi = document.querySelectorAll(".carrello");
    const messaggiAggiunto = document.querySelectorAll(".aggiunto");

    function aggiungiAlCarrello(event) {
        const pulsanteAggiungi = event.target; 
        const messaggioAggiunto = pulsanteAggiungi.nextElementSibling; 

        pulsanteAggiungi.style.display = "none"; 
        messaggioAggiunto.style.display = "flex"; 
        console.log("Aggiunto al carrello!");
    }

    pulsantiAggiungi.forEach(function(pulsante) {
        pulsante.addEventListener("click", aggiungiAlCarrello);
    });
});

document.addEventListener("DOMContentLoaded", function() { 
    const articolo_prefe = document.querySelectorAll(".salva_prefe");

    function aggiungiAlCarrello(event) {
        const pulsanteAggiungi = event.currentTarget; 
        const articolo_salvato = pulsanteAggiungi.querySelector('.prefe'); 

        articolo_salvato.style.display = "flex"; 
        console.log("Articolo salvato");
    }

    articolo_prefe.forEach(function(pulsante) {
        pulsante.addEventListener("click", aggiungiAlCarrello);
    });
});

function generate() {
    const YOUR_ACCESS_KEY = 'YVNBwp5FhiWJ1P_9TrRH-AdmTHRoPjzz-6-GSQButRU';

    const randomPage = Math.floor(Math.random() * 50) + 1;
    const url = 'https://api.unsplash.com/search/photos?query=fashion&orientation=landscape&per_page=1&page=' + randomPage;

    fetch(url, {
        headers: {
            Authorization: 'Client-ID ' + YOUR_ACCESS_KEY
        }
    })
    .then(onRes)
    .then(onJson);
}

function onRes(res) {
    return res.json();
}

function onJson(json) {
    const imageUrl = json.results[0].urls.full;
    console.log('Immagine di moda:', imageUrl);
    const header = document.querySelector('header');
    header.style.backgroundImage = 'url(' + imageUrl + ')';
}

generate();

const clientId = '9f507e1d409f4942ba829957a8284688'; 

function generaAlbum() {
    
    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    })

    .then(risposta => risposta.json())
    .then(datiToken => {
        const tokenAccesso = datiToken.access_token;

        
        return fetch('https://api.spotify.com/v1/browse/new-releases?limit=50', {
            headers: {
                'Authorization': 'Bearer ' + tokenAccesso
            }
        });
    })

    .then(risposta => risposta.json())
    .then(datiJson => {
        const albumList = datiJson.albums.items;
        const numeroCasuale = Math.floor(Math.random() * albumList.length);
        const albumCasuale = albumList[numeroCasuale];

        const contenitoreMusica = document.querySelector('.music');
        contenitoreMusica.innerHTML = 
            '<p>' + albumCasuale.name + '-' + albumCasuale.artists[0].name + '</p>' +
            '<a href="' + albumCasuale.external_urls.spotify + '" target="_blank">' +
            '<img src="' + albumCasuale.images[0].url + '" alt="' + albumCasuale.name + '" class="album-img">' +
            '</a>';
    });
}

generaAlbum();