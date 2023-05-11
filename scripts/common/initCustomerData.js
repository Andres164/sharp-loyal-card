import { fillCustomerFormDataByCardId } from './fillCustomerData.js';
import * as customAlerts from './customAlerts.js';

export async function initCustomerData(returnPathOnError) {
  const card_id = sessionStorage.getItem('scannedCardCode');
  if (!card_id) {
    customAlerts.errorAlert('No hay QR escaneado');
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