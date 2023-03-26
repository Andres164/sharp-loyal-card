let cafeLibrePensadorAPIAddress = '';

function createCustomer(email, date_of_birth) {
    fetch(`https://${cafeLibrePensadorAPIAddress}/customers`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
            email: email,
            date_of_birth: date_of_birth
        })
    }).catch(erro => console.error(`error while making a new customer = ${error}`));
    return undefined;
}

function makeCustomer_CardLink() {
    let email = document.getElementById("email").value;
    let date_of_birth = document.getElementById("date_of_birth").value;
    if (createCustomer(email, date_of_birth) == undefined) {
        alert ("¡Ocurrio un error al crear el cliente!");
        return;
    }

    let scannedCardCode = sessionStorage.getItem("scannedCardCode");
    fetch(`https://${cafeLibrePensadorAPIAddress}/cards/${scannedCardCode}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           customerEmail: email
        })
    }).then(res => {
        return res.json();
    })
    .catch(error => console.error(`error while making customer-card link = ${error}`));
    alert("¡Ocurrio un error al crear el enlace cliente-tarjeta!");
    return undefined;
}