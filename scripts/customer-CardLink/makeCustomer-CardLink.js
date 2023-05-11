import { disableFormFields } from "../common/formFieldsManipulation.js";
import { createCustomer } from '../common/api/createCustomer.js';
import { updateCard } from '../common/api/updateCard.js';
import * as customAlerts from '../common/customAlerts.js';


export async function makeCustomer_CardLink() {
  const form = document.getElementById("customerForm");
  if(!form.checkValidity()) {
    form.reportValidity();
    return 1;
  }
  const loyverseCustomerId = sessionStorage.getItem("loyverseCustomerId");
  if(loyverseCustomerId == null) {
    await customAlerts.errorAlert("No se encontro el id del cliente de loyverse");
    return 1;
  }
  const email = document.getElementById("email").value;
  const dateOfBirth = document.getElementById("date_of_birth").value;
  
  if (await createCustomer(loyverseCustomerId, email, dateOfBirth) == null) {
      await customAlerts.errorAlert("¡Ocurrio un error al crear el cliente!");
      return 1;
  }
  const scannedCardCode = sessionStorage.getItem("scannedCardCode"); // <---
  const updatedCard = await updateCard(scannedCardCode, email);
  if(updatedCard == null) {
    await customAlerts.errorAlert("Ocurrio un error al intentar actualizar la tarjeta!");
    return 1;
  }
  disableFormFields(form);
  await customAlerts.successAlert(`La tarjeta a sido enlazada al cliente con email: ${email}`)
    .then(() => {
        document.location.href = "scanner.html";
    });

  return 0;
}

window.makeCustomer_CardLink = makeCustomer_CardLink;