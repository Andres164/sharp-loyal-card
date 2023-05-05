import { getCard } from "./getCard.js";
import { getCustomer } from "./getCustomers.js";
import { getCustomerFromLoyverse } from "./getCustomerFromLoyverse.js";

export async function fillCustomerFormData(email) {
    let customer = await getCustomer(email);
    if(customer === null)
      customer = await getCustomerFromLoyverse(email);
    if(customer == null)
      return null;

    document.getElementById("email").value = email;
    document.getElementById("name").value = customer.name;
    document.getElementById("phone_number").value = customer.phone;
    document.getElementById("address").value = customer.address;
    document.getElementById("total_points").value = customer.totalPoints;
    document.getElementById("date_of_birth").value = customer.dateOfBirth;
    return "Success";
}

export async function fillCustomerFormDataByCardId(card_id) {
  const card = await getCard(card_id);
  if (card == null) {
    alert("No se encontro ninguna tarjeta con el QR escaneado");
    return undefined;
  }
  return fillCustomerFormData(card.customerEmail);
}