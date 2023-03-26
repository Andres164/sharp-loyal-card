includeFile("scripts/apiCredentials.js");

function getCustomer(email) {
    fetch(`https://api.loyverse.com/v1.0/customers/${email}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': TOKEN_NAME + ' ' + AUTHORIZATION_TOKEN
        }
    }).then(res => {
        return res.json();
    })
    .catch(error => console.error(`error while fetching customer = ${error}`));
    alert("¡Ocurrio un error al intentar buscar el cliente!");
    return undefined;
}