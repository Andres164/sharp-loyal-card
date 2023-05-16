import { scanCardAndRedirectOnSuccess } from "../common/cardScanner.js";
import { redirectIfSessionHasExpired } from '../common/checkSession.js';
import * as customAlert from '../common/customAlerts.js';

await redirectIfSessionHasExpired("../../pages/logIn.html");
        
async function cardIsntLinkedToCustomer(card) {
    if(card.customerEmail == null)
        return true;
    customAlert.warningAlert("Esta tarjeta ya esta enlazada con un cliente");
    return false
}

scanCardAndRedirectOnSuccess('pages/customer-CardLink/customer-CardLink.html', cardIsntLinkedToCustomer);