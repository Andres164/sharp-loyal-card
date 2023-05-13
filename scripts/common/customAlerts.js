import { sendErrorLog } from "./api/sendErrorLog.js";

export function successAlert(message, title = 'Operacion exitosa') {
    return Swal.fire({
        icon: 'success',
        title: title,
        text: message,
    });
}

export function errorAlert(message, title = 'Error inesperado') {
    const currentTime = new Date().toLocaleString();
    sendErrorLog(`${title}: ${message}\nAt: ${currentTime}`);

    return Swal.fire({
        icon: 'error',
        title: title,
        text: message,
    });
}

export function warningAlert(message, title = 'Advertencia') {
    return Swal.fire({
        icon: 'warning',
        title: title,
        text: message,
    });
}