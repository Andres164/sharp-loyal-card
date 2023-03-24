includeFile("scripts/getCustomers.js");

function fillCustomerFormData() {
    let id_customer = document.getElementById("id_customer").value;
    if(id_customer == "")
        return;
    
    let customer = getCustomer(id_customer);
    // If the customer wasnt found alert to the user in some way
    if(customer == undefined)
        return;
    JSON.parse(customer);
    dicument.getElementById("id_customer").value = customer.id;
    document.getElementById("phone_number").value = customer.phone_number;
    document.getElementById("address").value = customer.address;
    document.getElementById("total_points").value = customer.total_points;
    // Fetch the date of birth in the database
}