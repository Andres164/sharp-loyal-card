import { fillCustomerFormDataByCardId } from './fillCustomerData.js';

export async function initCustomerData(returnPathOnError) {
  const card_id = sessionStorage.getItem('scannedCardCode');
  if (!card_id) {
    alert('No hay QR escaneado');
    window.location.href = returnPathOnError;
    return;
  }
  if (await fillCustomerFormDataByCardId(card_id) == undefined) {
    window.location.href = returnPathOnError;
    return;
  }
    const btnAction = document.getElementById("btnAction");
    if(btnAction)
      btnAction.disabled = false;
}