import { addToCustomerPoints } from '../common/api/updateCustomerPoints.js';
import { initCustomerData } from '../common/initCustomerData.js';

document.addEventListener('DOMContentLoaded', async () => await initCustomerData("scanner.html"));

async function tryUpdateCustomerPoints(event) {
    event.preventDefault();

    const form = document.getElementById("customerForm");
    if(!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const loyverseCustomerId = sessionStorage.getItem("loyverseCustomerId");
    if(loyverseCustomerId == null) {
        alert("Error inesperado: no se pudo obtener el loyverseCustomerId");
        returnToScanner();
        return;
    }
    const pointsToAdd = document.getElementById("pointsToAdd").value;

    const updatedCsutomerBalance = await addToCustomerPoints(loyverseCustomerId, pointsToAdd);
    if(updatedCsutomerBalance == null) {
        alert("Error inesperado: ocurrio un error al intentar actualizar los puntos del cliente");
        returnToScanner();
        return;
    }
    const customerEmail = document.getElementById("email").value;
    alert(`Se le han añadido ${pointsToAdd} puntos al cliente con email: ${customerEmail} \nNuevo Balance: ${updatedCsutomerBalance}`)
    returnToScanner();
}

function returnToScanner() {
    window.location.href = "scanner.html";
}

window.returnToScanner = returnToScanner;
window.tryUpdateCustomerPoints = tryUpdateCustomerPoints;