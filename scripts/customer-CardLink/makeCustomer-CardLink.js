import { disableFormFields } from "../common/formFieldsManipulation.js";
import { createCustomer } from '../common/api/createCustomer.js';
import { updateCard } from '../common/api/updateCard.js';


export async function makeCustomer_CardLink() {
  const form = document.getElementById("customerForm")
  if(!form.checkValidity()) {
    form.reportValidity();
    return 1;
  }
  const loyverseCustomerId = sessionStorage.getItem("loyverseCustomerId");
  if(loyverseCustomerId == null)
    throw new Error("Error: no se encontro el id de cliente de loyverse");
  const email = document.getElementById("email").value;
  const dateOfBirth = document.getElementById("date_of_birth").value;
  
  if (await createCustomer(loyverseCustomerId, email, dateOfBirth) == null) {
      alert ("¡Ocurrio un error al crear el cliente!");
      return;
  }
  const scannedCardCode = sessionStorage.getItem("scannedCardCode"); // <---
  const updatedCard = await updateCard(scannedCardCode, email);
  if(updatedCard == null) {
    alert("Error inesperado: Ocurrio un error inesperado al intentar actualizar la tarjeta");
    return 1;
  }
  disableFormFields(form);
  alert("La tarjeta a sido enlazada EXITOSAMENTE con el cliente con email: " + email);
  document.location.href = "scanner.html";
  return 0;
}

window.makeCustomer_CardLink = makeCustomer_CardLink;