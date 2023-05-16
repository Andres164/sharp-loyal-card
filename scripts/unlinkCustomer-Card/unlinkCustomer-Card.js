import { updateCard } from '../common/api/updateCard.js';
import { deleteCustomer } from '../common/api/deleteCustomer.js';
import { initCustomerData } from '../common/initCustomerData.js';
import { generateErrorMessage } from '../common/errorMessages.js';
import { sendErrorLog } from '../common/api/sendErrorLog.js';
import { redirectIfSessionHasExpired } from '../common/checkSession.js';
import * as customAlerts from '../common/customAlerts.js';

document.addEventListener('DOMContentLoaded', async () => {
    await redirectIfSessionHasExpired("../../pages/logIn.html");
    await initCustomerData("scanner.html")
});

async function tryUnlinkCustomerFromCard(event) {
    event.preventDefault();
    const cardId = sessionStorage.getItem("scannedCardCode");
    const customerEmail = document.getElementById("email").value;
    
    const updatedCard = await updateCard(cardId, null);
    const deletedCustomer = await deleteCustomer(customerEmail);
    if(updatedCard == null || deletedCustomer == null) {
        await customAlerts.errorAlert("Ocurrio un error al intentar desenlazar la tarjeta del cliente");
        returnToScanner();
        return;
    }
    if(updatedCard.customerEmail != null)  {
        const errorMessage = generateErrorMessage("A card couldn't be unlinked from its customer", `The card whit Id: ${cardId} could't be inlink from its customer. 
                                                                                                    Customer email: ${updatedCard.customerEmail}`);
        await sendErrorLog(errorMessage);
        await customAlerts.errorAlert("Ocurrio un error, la tarjeta no fue desenlazada correctamente");
        returnToScanner();
        return;
    }
    if(deletedCustomer.email != customerEmail) {
        const errorMessage = generateErrorMessage("A customer was wrongfuly deleted in a card unlinking proccess", 
                                                  `The customer whit Email: ${deleteCustomer.email} was wrongfuly deleted when trying to unlink card whit Id: ${cardId}. 
                                                   The customer that should have been deleted has email: ${customerEmail} 
                                                   \nDeleted customer: \nloyverseId ${deletedCustomer.loyverseCustomerId} \nDate of birth: ${deleteCustomer.dateOfBirth}`);
        await sendErrorLog(errorMessage);
        await customAlerts.errorAlert(`Ocurrio un error, el cliente eliminado no es el cliente que estaba enlazado a la tarjeta escaneada \n Cliente eliminado: ${deletedCustomer.email}`);
        returnToScanner();
        return;
    }
    await customAlerts.successAlert(`La tarjeta escaneada fue desenlazada exitosamente del cliente con email: ${ deletedCustomer.email }`);
    returnToScanner();
}
function returnToScanner() {
    window.location.href = "scanner.html";
}

window.returnToScanner = returnToScanner;
window.tryUnlinkCustomerFromCard = tryUnlinkCustomerFromCard;