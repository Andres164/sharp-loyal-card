import { getCard } from "./api/getCard.js";

const rootFolder = '../../';
let SCANNER;

async function onScanSuccess(decodedText, decodedResult, shouldRedirect) {
  const getCardResult = await getCard(decodedText);
  if(getCardResult === undefined) {
    alert("Se encontro un error al buscar la tarjeta escaneada");
    return;
  }
  if(getCardResult === null) {
    alert("La tarjeta escaneada no existe");
    return;
  }
  
  const shouldProceed = typeof shouldRedirect === 'function' ? await shouldRedirect(getCardResult) : true;
  if(!shouldProceed)
    return;
  SCANNER.clear();
  sessionStorage.setItem("scannedCardCode", decodedText);
  let locationToRedirectOnSuccess = sessionStorage.getItem("locationToRedirectOnSuccess");
  sessionStorage.removeItem("locationToRedirectOnSuccess");
  window.location.href = rootFolder + locationToRedirectOnSuccess;
}

function onScanFailure(error) {
  console.warn(`Code scan error = ${error}`);
}

export function scanCardAndRedirectOnSuccess(newLocation, shouldRedirect = () => true) {
  SCANNER = new Html5QrcodeScanner(
    "scanner",
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ false);
  sessionStorage.setItem("locationToRedirectOnSuccess", newLocation);
  SCANNER.render((decodedText, decodedResult) => onScanSuccess(decodedText, decodedResult, shouldRedirect), onScanFailure);
}