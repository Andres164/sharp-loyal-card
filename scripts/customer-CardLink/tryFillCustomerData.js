import { fillCustomerFormData } from '../fillCustomerData.js';

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

        let email = emailInput.value;
        if (await fillCustomerFormData(email) == undefined) {
            alert ( "No se encontro ningun cliente con el email: " + email );
            return;
        }
        dobInput.required = true;
        linkButton.disabled = false;
    });
});
