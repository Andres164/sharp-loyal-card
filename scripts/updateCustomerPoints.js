includeFile("scripts/getCustomers.js");

let TOKEN_NAME = '';
let AUTHORIZATION_TOKEN = '';

function addToCustomerPoints(pointsToAdd, customerId) {
    let customer = JSON.parse(getCustomer(customerId));

    fetch(`https://api.loyverse.com/v1.0/customers/${customerId}`, {
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
}