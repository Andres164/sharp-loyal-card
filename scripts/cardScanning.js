includeFile("./node_modules/html5-qrcode/html5-qrcode.min.js");
includeFile("scripts/updateCustomerPoints.js");

let SCANNER;

function onScanSuccess(decodedText, decodedResult) {
  SCANNER.clear();
  let customer = JSON.parse(addToCustomerPoints(10, decodedText));
  alert(`${customer.name} ahora tiene ${customer.total_points} puntos`, decodedResult);
}
  
function onScanFailure(error) {
  console.warn(`Code scan error = ${error}`);
}

function scanCard() {
  SCANNER = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ false);
    
  SCANNER.render(onScanSuccess, onScanFailure);
}
