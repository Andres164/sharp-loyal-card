import { fillCustomerFormData } from '../fillCustomerData.js';
import { getCard } from '../getCard.js';
import { getCustomer } from '../getCustomers.js';

document.addEventListener('DOMContentLoaded', async () => {
    const card_id = sessionStorage.getItem('scannedCardCode');
    if (!card_id) {
      alert('No hay QR escaneado');
      returnToScanCard();
    }
    if (await fillCustomerFormDataByCardId(card_id) == undefined)
      returnToScanCard();
});

async function fillCustomerFormDataByCardId(card_id) {
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