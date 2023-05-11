import { fillCustomerFormData } from '../common/fillCustomerData.js';
import { clearFormFields } from '../common/formFieldsManipulation.js';
import { getCustomerFromLoyverse } from '../common/api/getCustomerFromLoyverse.js'
import { getCustomer } from '../common/api/getCustomers.js';
import * as customAlerts from '../common/customAlerts.js';

export function emailChanged() {
    document.getElementById("date_of_birth").required = false;
    document.getElementById("btnLinkCardAndCusotmer").disabled = true;
}
window.emailChanged = emailChanged;


window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById("customerForm");
    const emailInput = document.getElementById("email");
    const dobInput = document.getElementById("date_of_birth");
    const linkButton = document.getElementById("btnLinkCardAndCusotmer");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const email = emailInput.value;
        const dateOfBirth = dobInput.value;

        await clearFormFields(form);
        emailInput.value = email;
        dobInput.value = dateOfBirth;   

        if(await getCustomer(email)) {
            customAlerts.warningAlert(`El cliente con email: ${email} ya a sido enlazado con otra tarjeta`);
            return;
        }

        const customer = await getCustomerFromLoyverse(email);
        if(customer === undefined) {
            customAlerts.errorAlert("Ocurrio un error al intentar buscar el cliente en loyverse");
            return;
        }
        if (customer === null) {
            customAlerts.warningAlert( "No se encontro ningun cliente con el email: " + email );
            return;
        }
        fillCustomerFormData(customer);
        dobInput.required = true;
        linkButton.disabled = false;
    });
});