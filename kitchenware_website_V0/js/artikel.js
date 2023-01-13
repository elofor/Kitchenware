var artikelID;

holeUserArtikel();


function neuerArtikel(){

    let artikel = document.querySelector("#artikel").value;
    let bild = document.querySelector("#bild").value;
    let kategorie_id = document.querySelector("#kategorie_id").value;
    let beschreibung = document.querySelector("#beschreibung").value;
    let status = document.querySelector("input[name='status']:checked").value;
    let preis = document.querySelector("#preis").value;

    let formData = new FormData();
    formData.append('artikel', artikel);
    formData.append('bild', bild);
    formData.append('kategorie_id', kategorie_id);
    formData.append('beschreibung', beschreibung);
    formData.append('status', status);
    formData.append('preis', preis);

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    formData.append('userID', userID);

    fetch("https://739527-2.web.fhgr.ch/php/neuerArtikel.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((response) => {

            return response.text();

        })
        .then((data) => {

        document.querySelector('#nachricht').innerHTML = data;

        })

}

function holeUserArtikel() {

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);

    fetch("https://739527-2.web.fhgr.ch/php/holeUserArtikel.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            if (res.status >= 200 && res.status < 300) {

                console.log(res);
                return res.json();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html";

            }

        })
        .then((data) => {

            console.log(data);

            // falls es noch keine WG zu diesem User gibt
            // falls es noch keine WG zu diesem User gibt
            // falls es noch keine WG zu diesem User gibt
            if (data.length == 0) {

                // zeige Infotext an
                document.querySelector('#infoText').innerHTML = "Fülle dieses Formular aus, um deinen Artikel aufzuschalten:"

                // zeige den korrekten Button an
                document.querySelector('#button-neue').classList.remove("hidden");

                // falls es bereits eine WG zu diesem User gibt
                // falls es bereits eine WG zu diesem User gibt
                // falls es bereits eine WG zu diesem User gibt
            } else {

                // speichere die wg ID in der globalen variable
                // diese brauchen wir später zum aktualisieren und löschen der WG
                artikelID = data[0].ID;

                console.log("Data von artikel:");
                console.log(data);

                // zeige Infotext an
                document.querySelector('#infoText').innerHTML = "Hier kannst du deinen Artikel bearbeiten:"

                // zeige den korrekten Button an
                document.querySelector('#button-aktualisieren').classList.remove("hidden");
                document.querySelector('#button-loeschen').classList.remove("hidden");

                // fülle das Formular mit den Werten aus der DB aus
                document.querySelector('#artikel').value = data[0].artikel;
                document.querySelector('#bild').value = data[0].bild;
                document.querySelector('#kategorie_id').value = data[0].kategorie_id;
                document.querySelector('#beschreibung').value = data[0].beschreibung;
                document.querySelector('#bild_vorschau').src = data[0].bild;
                document.querySelector('#preis').value = data[0].preis;

                console.log(data[0].status);

                // setze den korrekten Status (Radiobutton) aus den Infos der DB
                if (data[0].status == 1) {

                    document.querySelector('#status-frei').checked = true;

                } else {

                    document.querySelector('#status-besetzt').checked = true;

                }
            }
        })
}

function aktualisiereArtikel() {

    // get authentication variables from localstorage
    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    // Formulardaten in Body übertragen
    let artikel = document.querySelector('#artikel').value;
    let kategorie_id = document.querySelector('#kategorie_id').value;
    let beschreibung = document.querySelector('#beschreibung').value;
    let preis = document.querySelector('#preis').value;
    let bild = document.querySelector('#bild').value;
    let status = document.querySelector('input[name="status"]:checked').value;

    let formData = new FormData();
    formData.append('userID', userID);
    formData.append('artikel', artikel);
    formData.append('kategorie_id', kategorie_id);
    formData.append('beschreibung', beschreibung);
    formData.append('preis', preis);
    formData.append('status', status);
    formData.append('bild', bild);

    formData.append('artikelID', artikelID);

    fetch("https://739527-2.web.fhgr.ch/php/aktualisiereArtikel.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            // error handling if session is expired
            if (res.status >= 200 && res.status < 300) {

                return res.text();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html";

            }

        })
        .then((data) => {

            // zeige die Nachricht an
            document.querySelector('#nachricht').innerHTML = data;

        })
}

function loescheArtikel() {

    // get authentication variables from localstorage
    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);
    formData.append('artikelID', artikelID);

    fetch("https://739527-2.web.fhgr.ch/php/loescheArtikel.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            // error handling if session is expired
            if (res.status >= 200 && res.status < 300) {

                return res.text();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html";

            }

        })
        .then((data) => {

            console.log(data);
            
            document.querySelector('#nachricht').innerHTML = data;

            // button aktualisieren
            document.querySelector('#button-neue').classList.remove("hidden");
            document.querySelector('#button-aktualisieren').classList.add("hidden");
            document.querySelector('#button-loeschen').classList.add("hidden");
        

            // Formularfelder leeren
            document.querySelector('#artikel').value = "";
            document.querySelector('#kategorie_id').value = "";
            document.querySelector('#beschreibung').value = "";
            document.querySelector('#preis').value = "";
            document.querySelector('#bild').value = "";
            document.querySelector('#status-frei').checked = false;
            document.querySelector('#status-besetzt').checked = false;
            document.querySelector('#bild_vorschau').src = "";

            // Variablen leeren
            artikelID = "";
        })
};


// logout
// logout
// logout

function logout(){

    localStorage.clear();
    window.location = "../";

}