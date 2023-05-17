import { authenticate } from '../common/api/authentication.js';
import * as customAlerts from '../common/customAlerts.js';

async function logIn(event) {
    event.preventDefault();
    const btnLogIn = document.getElementById("btnLogIn");
    btnLogIn.disabled = true;

    const form = document.getElementById("mainForm");
    if(!form.checkValidity()) {
        form.reportValidity();
        btnLogIn.disabled = false;
        return;
    }

    const username = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const authenticationResult = await authenticate(username, password);
    if(authenticationResult === undefined) {
        await customAlerts.errorAlert("Ocurrio un error al tratar de autenticar las credenciales");
        btnLogIn.disabled = false;
        return;
    }
    if(authenticationResult == null) {
        await customAlerts.warningAlert("El usuario y/o contraseña son icnorrectos");
        btnLogIn.disabled = false;
        return;
    }
    document.location.href = "../index.html";
    return;
}

window.logIn = logIn;