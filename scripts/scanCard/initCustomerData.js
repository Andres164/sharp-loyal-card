import { fillCustomerFormDataByCardId } from '../fillCustomerData.js';

export async function initCustomerData(returnPathOnError) {
const card_id = sessionStorage.getItem('scannedCardCode');
if (!card_id) {
  alert('No hay QR escaneado');
  window.location.href = returnPathOnError;
}
if (await fillCustomerFormDataByCardId(card_id) == undefined)
    window.location.href = returnPathOnError;
}