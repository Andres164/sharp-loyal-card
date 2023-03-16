let VIDEO = null;
let CONTEXT = null;
let CANVAS = null;
let SCALER = 1;
let SIZE = { x: 0, y: 0, width: 0, height: 0 };

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
            let resizer = SCALER * Math.min(cameraContainer.clientWidth / VIDEO.videoWidth, cameraContainer.clientHeight / VIDEO.videoHeight);
            SIZE.width = resizer * VIDEO.videoWidth;
            SIZE.height = resizer * VIDEO.videoHeight;
            SIZE.x = cameraContainer.clientWidth/2 - SIZE.width/2;
            SIZE.y = cameraContainer.clientHeight/2 - SIZE.height/2;
            updateCanvas();
        }
    }).catch( function(err) {
        alert("Error al abrir la camara: " + err);
    });
}

function updateCanvas() {
    CONTEXT.drawImage(VIDEO, SIZE.x, SIZE.y, SIZE.width, SIZE.height);
    window.requestAnimationFrame(updateCanvas);
}