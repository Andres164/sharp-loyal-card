includeFile("scripts/getCustomers.js");

function fillCustomerFormData(email) {
    let customer = getCustomer(email);
    if(customer === null)
        alert ( "No se encontro ningun cliente con el email ingresado" );
    if(customer == undefined)
        return undefined;
    customer = JSON.parse(customer);
    document.getElementById("name").value = customer.name;
    document.getElementById("phone_number").value = customer.phone_number;
    document.getElementById("address").value = customer.address;
    document.getElementById("total_points").value = customer.total_points;
    return "Success";
    // Fetch the date of birth in the local database if the user doesn't exist, return
}