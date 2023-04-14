function includeFile(fileLocation) {
    const rootFolder = document.location.origin + "/sharp-loyal-card/";
    const script = document.createElement("script");
    script.src = rootFolder + fileLocation;
    document.head.prepend(script);
}
