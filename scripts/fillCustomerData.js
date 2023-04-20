import { getCard } from "./getCard.js";
import { getCustomer } from "./getCustomers.js";

function fillCustomerFormData(email) {
    let customer = getCustomer(email);
    if(customer === null)
        alert ( "No se encontro ningun cliente con el email ingresado" );
    if(customer == undefined)
        return undefined;
    document.getElementById("email").value = email;
    document.getElementById("name").value = customer.name;
    document.getElementById("phone_number").value = customer.phone_number;
    document.getElementById("address").value = customer.address;
    document.getElementById("total_points").value = customer.total_points;
    //document.getElementById("date_of_birth").value = customer.
    return "Success";
}

document.addEventListener("DOMContentLoaded", () => {
    const card_id = sessionStorage.getItem("scannedCardCode");
    if (card_id) {
      fillCustomerFormDataByCardId(card_id);
      return;
    }
    console.log("Theres no QR code scanned");
});
  
async function fillCustomerFormDataByCardId(card_id) {
  const card = await getCard(card_id);
  if (card === null) {
    alert("No se encontro ninguna tarjeta con el QR escaneado");
    return;
  }
  fillCustomerFormData(card.customerEmail);
}