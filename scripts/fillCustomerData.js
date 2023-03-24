includeFile("scripts/getCustomers.js");

function fillCustomerFormData() {
    let id_customer = document.getElementById("id_customer").value;
    if(id_customer == "")
        return;
    
    let customer = getCustomer(id_customer);
    if(customer == undefined)
        return;
    JSON.parse(customer);
    document.getElementById("nombre").value = customer.name;
}