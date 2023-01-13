holeUser();

holeArtikel();

//Damit der User persönlich begrüsst wird, sobald er eingeloggt ist.
function holeUser() {

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);

    fetch("https://739527-2.web.fhgr.ch/php/holeUser.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),
            }
        })

        .then((res) => {

            // falls die Sitzung nicht abgelaufen ist, verarbeite die JSON antwort
            if (res.status >= 200 && res.status < 300) {

                return res.json();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html";
                console.log("Die Sitzung scheint abgelaufen zu sein");
            }

        })
        .then((data) => {

            document.querySelector("#username").innerHTML = data[0].name;

        })
}




function holeArtikel(){

    fetch("https://739527-2.web.fhgr.ch/php/holeArtikel.php")
        .then((res) => {

            // falls die Sitzung nicht abgelaufen ist, verarbeite die JSON antwort
            if (res.status >= 200 && res.status < 300) {

                return res.json();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html";

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


function logout(){

    localStorage.clear();
    window.location = "../";

}