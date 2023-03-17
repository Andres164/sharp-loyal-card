const script = document.createElement("script");
script.src = "./node_modules/html5-qrcode/html5-qrcode.min.js";
document.head.prepend(script);

let SCANNER;

function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    SCANNER.clear();
    alert(`Code matched = ${decodedText}`, decodedResult);
  }
  
function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
}

function scanCard() {
    SCANNER = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: {width: 250, height: 250} },
      /* verbose= */ false);
      SCANNER.render(onScanSuccess, onScanFailure);
}