const rootFolder = document.location.origin + "/";

function includeFile(fileLocation) {
    const script = document.createElement("script");
    script.src = rootFolder + fileLocation;
    document.head.prepend(script);
}
