export function successAlert(message, title = 'Operacion exitosa') {
    return Swal.fire({
        icon: 'success',
        title: title,
        text: message,
    });
}

export function errorAlert(message, title = 'Error inesperado') {
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