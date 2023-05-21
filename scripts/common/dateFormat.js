export function formatDate(date) {
    const splicedDate = date.split("-");
    if(splicedDate.length != 3)
        throw error(`Error formatting date: the date ${date} format is not accepted, instead use yyyy-mm-dd`);

    const day = splicedDate[2];
    const month = getMonthName(splicedDate[1]);
    const year  = splicedDate[0];
    return `${day}/${month}/${year}`;
}

function getMonthName(monthNumberStr) {
    const monthNumber = parseInt(monthNumberStr);
    if(isNaN(monthNumber))
        throw new Error("Error converting the mont number into a mont name: Input must be a valid number");
    if(monthNumber < 1 || monthNumber > 12)
        throw new Error("Error converting the mont number into a mont name: Month number must be between 1 and 12");

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return months[monthNumber - 1];
}