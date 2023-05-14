export function generateErrorMessage(title, details) {
    const currentTime = new Date().toLocaleString();

    const stackTrace = new Error().stack;
    const stackTraceLines = stackTrace.split('\n');
    const filteredStackTrace = stackTraceLines
        .filter((line) => !line.includes('generateErrorMessage'))
        .join('\n');

    return `${title} \n${details} \n\nStack trace: ${filteredStackTrace} \nAt ${currentTime}`;
}
 