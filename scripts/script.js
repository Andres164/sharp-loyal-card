let VIDEO = null;
let CONTEXT = null;
let CANVAS = null    ;

function scanCard() {
    if(!('mediaDevices' in navigator) || !('getUserMedia' in navigator.mediaDevices)) {
        alert("Tu navegador no soporta esta funcionalidad");
        return;
    }
    let cameraContainer = document.getElementById("cameraContainer");
    CANVAS = document.getElementById("myCanvas");
    CONTEXT = CANVAS.getContext("2d");
    
    CANVAS.width = cameraContainer.clientWidth;
    CANVAS.height = cameraContainer.clientHeight;

    let promise = navigator.mediaDevices.getUserMedia({ video: true })
    promise.then(function(signal) {
        VIDEO = document.createElement("video");
        VIDEO.srcObject = signal;
        VIDEO.play();

        VIDEO.onloadeddata = function(){
            updateCanvas();
        }
    }).catch( function(err) {
        alert("Error al abrir la camara: " + err);
    });
}

function updateCanvas() {
    CONTEXT.drawImage(VIDEO, 0, 0);
    window.requestAnimationFrame(updateCanvas);
}