includeFile("scripts/apiCredentials");

async function createCustomer(email, date_of_birth) {
    try {

        const createCustomerResponse = await fetch(`https://${cafeLibrePensadorAPIAddress}/api/Customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
        },
        body: JSON.stringify({
          email: email,
          date_of_birth: date_of_birth
        })
        });
    
      if (!createCustomerResponse.ok)
        throw new Error(`Error creating customer: ${createCustomerResponse.status}`);
    } catch (error) {
        console.error(error);
        return 1;
    }
    return 0;
}

function makeCustomer_CardLink() {
    let email = document.getElementById("email").value;
    let date_of_birth = document.getElementById("date_of_birth").value;
    if (createCustomer(email, date_of_birth) == 1) {
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