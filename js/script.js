
clearLocalStorage();


holeArtikel();

function clearLocalStorage() {
    localStorage.clear();
}


function holeArtikel(){

    fetch("https://739527-2.web.fhgr.ch/php/holeArtikel.php")
    .then((res) => {

            // falls die Sitzung nicht abgelaufen ist, verarbeite die JSON antwort
            if (res.status >= 200 && res.status < 300) {

                return res.json();

            } else {

                alert('Ein Fehler ist aufgetreten. Kein einziger Artikel gefunden. Sorry.');
        

            }

        })
        .then((data) => {

            artikelAnzeigen(data);

        })
}




function artikelAnzeigen(data) {

    data.forEach(artikel => {

        
        if (parseInt(artikel.status)){

            artikel.status = "🟢";

        } else {

            artikel.status = "🔴";

        }

        
        let artikelContainer = document.createElement("div");
        artikelContainer.innerHTML =

            '<div class="artikel">' +
            '<h2>' + artikel.status + ' ' + artikel.artikel + '</h2>' +
            '<img class="artikel-image" src="' + artikel.bild + '">' +
            '<p> Beschreibung: ' + artikel.beschreibung + '</p>' +
            '<p> Kategorie: ' + artikel.kategorie + '</p>' +
            '<p> Preis: ' + artikel.preis + ' CHF </p>' +
            'E-Mail: <a target="_blank" href="mailto:'+ artikel.email + '">' + artikel.email + '</a>' +
            '</div>'

        document.getElementById("liste-artikel").appendChild(artikelContainer);

    });

}


