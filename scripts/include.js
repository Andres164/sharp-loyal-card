export function include(fileLocation) {
    const script = document.createElement("script");
    script.src = fileLocation;
    document.head.prepend(script);
}