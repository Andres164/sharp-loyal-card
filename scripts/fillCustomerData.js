includeFile("/scripts/getCustomers.js");

function fillCustomerFormData(email) {
    let customer = getCustomer(email);
    if(customer === null)
        alert ( "No se encontro ningun cliente con el email ingresado" );
    if(customer == undefined)
        return undefined;
    JSON.parse(customer);
    document.getElementById("email").value = email;
    document.getElementById("name").value = customer.name;
    document.getElementById("phone_number").value = customer.phone_number;
    document.getElementById("address").value = customer.address;
    document.getElementById("total_points").value = customer.total_points;
    // Fetch the date of birth in the local database if the user doesn't exist, return
}