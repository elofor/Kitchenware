function registrieren(){

    let benutzername = document.querySelector("#benutzername").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let formData = new FormData();
    formData.append('benutzername', benutzername);
    formData.append('email', email);
    formData.append('password', password);

    fetch("https://739527-2.web.fhgr.ch/php/registrieren.php",
        {
            body: formData,
            method: "post",
        })

        .then((response) => {

            return response.text();

        })
        .then((data) => {

        document.querySelector('#nachricht').innerHTML = data;

            if (data [1] !=0 && data [2] !=0){
                window.setTimeout(weiterleitung, 2000);

                function weiterleitung(){ 
                    window.location.href="/login.html";
                }
            }
        })
}

