import { addToCustomerPoints } from '../common/api/updateCustomerPoints.js';
import { initCustomerData } from '../common/initCustomerData.js';
import { redirectIfSessionHasExpired } from '../common/checkSession.js';
import * as customAlerts from '../common/customAlerts.js';

document.addEventListener('DOMContentLoaded', async () => {
    await redirectIfSessionHasExpired("../logIn.html");
    await initCustomerData("scanner.html")
});

async function tryUpdateCustomerPoints(event) {
    event.preventDefault();

    const form = document.getElementById("customerForm");
    if(!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const loyverseCustomerId = sessionStorage.getItem("loyverseCustomerId");
    if(loyverseCustomerId == null) {
        await customAlerts.errorAlert("No se pudo obtener el loyverseCustomerId", "Error inesperado");
        returnToScanner();
        return;
    }
    const pointsToAdd = document.getElementById("pointsToAdd").value;

    const updatedCustomerBalance = await addToCustomerPoints(loyverseCustomerId, pointsToAdd);
    if(updatedCustomerBalance == null) {
        await customAlerts.errorAlert("Ocurrio un error al intentar actualizar los puntos del cliente", "Error inesperado");
        returnToScanner();
        return;
    }
    const customerEmail = document.getElementById("email").value;
    await customAlerts.successAlert(`Se le han añadido ${pointsToAdd} puntos al cliente con email: ${customerEmail} \nNuevo Balance: ${updatedCustomerBalance}`);
    returnToScanner();
}

function returnToScanner() {
    window.location.href = "scanner.html";
}

window.returnToScanner = returnToScanner;
window.tryUpdateCustomerPoints = tryUpdateCustomerPoints;