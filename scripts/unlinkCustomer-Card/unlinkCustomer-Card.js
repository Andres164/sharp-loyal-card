import { updateCard } from '../common/api/updateCard.js';
import { deleteCustomer } from '../common/api/deleteCustomer.js';
import { initCustomerData } from '../common/initCustomerData.js';

document.addEventListener('DOMContentLoaded', async () => await initCustomerData("scanner.html"));

async function tryUnlinkCustomerFromCard(event) {
    event.preventDefault();
    const cardId = sessionStorage.getItem("scannedCardCode");
    const customerEmail = document.getElementById("email").value;
    
    const updatedCard = await updateCard(cardId, null);
    const deletedCustomer = await deleteCustomer(customerEmail);
    if(updatedCard == null || deletedCustomer == null) {
        alert("Error inesperado: ocurrio un error al intentar desenlazar la tarjeta del cliente");
        returnToScanner();
        return;
    }
    if(updatedCard.customerEmail != null)  {
        alert("Error inesperado: la tarjeta no fue desenlazada correctamente");
        returnToScanner();
        return;
    }
    if(deletedCustomer.email != customerEmail) {
        alert("Error inesperado: el cliente eliminado no es el cliente que estaba enlazado a la tarjeta escaneada \n Cliente eliminado: " + deletedCustomer.email);
        returnToScanner();
        return;
    }
    alert(`La tarjeta escaneada fue desenlazada exitosamente del cliente con email: ${ deletedCustomer.email }`);
    returnToScanner();
}
function returnToScanner() {
    window.location.href = "scanner.html";
}

window.returnToScanner = returnToScanner;
window.tryUnlinkCustomerFromCard = tryUnlinkCustomerFromCard;