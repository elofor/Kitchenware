function login() {

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    fetch("https://739527-2.web.fhgr.ch/php/login.php",
        {
            body: formData,
            method: "post",
        })

        .then((response) => {

            return response.json();

        })
        .then((data) => {

            console.log(data);
            document.querySelector('#nachricht').innerHTML = data[0];

            localStorage.setItem("userID", data[1]);
            localStorage.setItem("token", data[2]);

            if (data[1] != 0 && data[2] != 0) {

                window.location.href = "/index_loggedin.html";

            }

        })
}