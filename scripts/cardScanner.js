const rootFolder = document.location.origin + "/sharp-loyal-card/";
let SCANNER;

function onScanSuccess(decodedText, decodedResult) {
  SCANNER.clear();
  sessionStorage.setItem("scannedCardCode", decodedText);
  let locationToRedirectOnSuccess = sessionStorage.getItem("locationToRedirectOnSuccess");
  sessionStorage.removeItem("locationToRedirectOnSuccess");
  window.location.href = rootFolder + locationToRedirectOnSuccess;
}

function onScanFailure(error) {
  console.warn(`Code scan error = ${error}`);
}

export function scanCardAndRedirectOnSuccess(newLocation) {
  SCANNER = new Html5QrcodeScanner(
    "scanner",
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ false);
  sessionStorage.setItem("locationToRedirectOnSuccess", newLocation);
  SCANNER.render(onScanSuccess, onScanFailure);
}