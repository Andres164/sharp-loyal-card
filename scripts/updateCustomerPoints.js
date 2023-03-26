includeFile("scripts/getCustomers.js");
includeFile("scripts/apiCredentials");

function addToCustomerPoints(pointsToAdd, email) {
    let customer = JSON.parse(getCustomer(email));

    fetch(`https://api.loyverse.com/v1.0/customers/${email}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': TOKEN_NAME + ' ' + AUTHORIZATION_TOKEN
        },
        body: JSON.stringify({
           name: customer.name,
           total_points: customer.total_points + pointsToAdd
        })
    }).then(res => {
        return res.json();
    })
    .catch(error => console.error(`error while updating customer = ${error}`));
    alert("¡Ocurrio un error al actualizar los puntos del usuario!");
}