import { fillCustomerFormDataByCardId } from '../fillCustomerData.js';

document.addEventListener('DOMContentLoaded', () => {
    const card_id = sessionStorage.getItem('scannedCardCode');
    if (!card_id) {
        alert('No hay QR escaneado');
        window.history.back();
    }
    if (fillCustomerFormDataByCardId(card_id) == undefined) {
        window.history.back();
    }
});
