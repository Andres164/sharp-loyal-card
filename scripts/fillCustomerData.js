export async function fillCustomerFormData(customer) {
    sessionStorage.setItem("loyverseCustomerId", customer.loyverseCustomerId);
    document.getElementById("email").value = customer.email;
    document.getElementById("name").value = customer.name;
    document.getElementById("phone_number").value = customer.phone;
    document.getElementById("address").value = customer.address;
    document.getElementById("total_points").value = customer.totalPoints;
    document.getElementById("date_of_birth").value = customer.dateOfBirth;
}