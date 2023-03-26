includeFile("/scripts/getCustomers.js");

function fillCustomerFormData(id_customer) {
    let customer = getCustomer(id_customer);
    if(customer === null)
        alert ( "No se encontro ningun cliente con el email ingresado" );
    if(customer == undefined)
        return;
    JSON.parse(customer);
    document.getElementById("id_customer").value = id_customer;
    document.getElementById("name").value = customer.name;
    document.getElementById("phone_number").value = customer.phone_number;
    document.getElementById("address").value = customer.address;
    document.getElementById("total_points").value = customer.total_points;
    // Fetch the date of birth in the local database if the user doesn't exist, return
}