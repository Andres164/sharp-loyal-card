includeFile("scripts/getCustomers.js");
includeFile("scripts/getCard.js");

function fillCustomerFormData(email) {
    let customer = getCustomer(email);
    if(customer === null)
        alert ( "No se encontro ningun cliente con el email ingresado" );
    if(customer == undefined)
        return undefined;
    customer = JSON.parse(customer);
    document.getElementById("email").value = email;
    document.getElementById("name").value = customer.name;
    document.getElementById("phone_number").value = customer.phone_number;
    document.getElementById("address").value = customer.address;
    document.getElementById("total_points").value = customer.total_points;
    return "Success";
    // Fetch the date of birth in the local database if the user doesn't exist, return
}

document.addEventListener("DOMContentLoaded", () => {
    const card_id = sessionStorage.getItem("scannedCardCode");
    if (card_id) {
      fillCustomerFormDataByCardId(card_id);
    }
    console.log("Theres no QR code scanned");
  });
  
async function fillCustomerFormDataByCardId(card_id) {
  const card = await getCard(card_id);
  if (card === null) {
    alert("No se encontro ninguna tarjeta con el QR escaneado");
    return;
  }
  fillCustomerFormData(card.customer_email);
}