export function getCustomer(customerId) {
    fetch(`https://api.loyverse.com/v1.0/customers/${customerID}`).then(res => {
        return res.json();
    })
    .catch(error => console.error(`error while fetching customer = ${error}`));
}