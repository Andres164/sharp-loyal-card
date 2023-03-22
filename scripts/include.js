function includeFile(fileLocation) {
    const script = document.createElement("script");
    script.src = fileLocation;
    document.head.prepend(script);
}
