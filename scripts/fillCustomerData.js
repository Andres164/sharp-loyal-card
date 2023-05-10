import { getCard } from './getCard.js';
import { getCustomer } from './getCustomers.js';

export async function fillCustomerFormData(customer) {
    sessionStorage.setItem("loyverseCustomerId", customer.loyverseCustomerId);
    document.getElementById("email").value = customer.email;
    document.getElementById("name").value = customer.name;
    document.getElementById("phone_number").value = customer.phone;
    document.getElementById("address").value = customer.address;
    document.getElementById("total_points").value = customer.totalPoints;
    document.getElementById("date_of_birth").value = customer.dateOfBirth;
}

export async function fillCustomerFormDataByCardId(card_id) {
    const card = await getCard(card_id);
    if (card == null) {
      alert("No se encontro ninguna tarjeta con el QR escaneado");
      return undefined;
    }
    if(card.customerEmail == null) {
      alert("La tarjeta escaneada no a sido enlazada a ningun cliente");
      return null
    }
    const customer = await getCustomer(card.customerEmail);
    if(customer == null) {
      alert("Error inesperado: no se encontro el cliente enlazado con esta tarjeta");
      return undefined;
    }
    fillCustomerFormData(customer);
    return "Sueccess";
  }
