includeFile("node_modules/html5-qrcode/html5-qrcode.min.js");
includeFile("scripts/updateCustomerPoints.js");

let SCANNER;

function onScanSuccess(decodedText, decodedResult) {
  SCANNER.clear();
  sessionStorage.setItem("scannedCardCode", decodedText);
  window.location.href = rootFolder + sessionStorage.getItem("locationToRedirectOnSuccess");
}
  
function onScanFailure(error) {
  console.warn(`Code scan error = ${error}`);
}

function scanCardAndRedirectOnSucces(newLocation) {
  SCANNER = new Html5QrcodeScanner(
    "scanner",
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ false);
  sessionStorage.setItem("locationToRedirectOnSuccess", newLocation);
  SCANNER.render(onScanSuccess, onScanFailure);
}
