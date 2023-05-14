import { getCard } from './api/getCard.js';
import { getCustomer } from './api/getCustomers.js';
import { sendErrorLog } from './api/sendErrorLog.js';
import { generateErrorMessage } from './errorMessages.js';
import * as customAlerts from './customAlerts.js';

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
      await customAlerts.warningAlert("No se encontro ninguna tarjeta con el QR escaneado");
      return undefined;
    }
    if(card.customerEmail == null) {
      await customAlerts.warningAlert("La tarjeta escaneada no a sido enlazada a ningun cliente");
      return null
    }
    const customer = await getCustomer(card.customerEmail);
    if(customer == null) {
      const errorMessage = generateErrorMessage("Couldn't find the customer linked whit a card", 
                                                `The card whit Id: ${card_id} is linked whit a customer that could't be found in the local database. Customer Email: ${card.customerEmail}`);
      await sendErrorLog(errorMessage);
      await customAlerts.errorAlert("No se encontro el cliente enlazado con esta tarjeta", 'Error Inesperado');
      return undefined;
    }
    fillCustomerFormData(customer);
    return "Sueccess";
  }
