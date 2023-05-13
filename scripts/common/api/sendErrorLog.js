import { cafeLibrePensadorAPIAddress } from './apiAddress.js';

export async function sendErrorLog(message) {
    try {
        const sendErrorResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/send-error-log`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                // Use bearer Authentication
            },
            body: JSON.stringify(message)
        });

        if(sendErrorResponse.status >= 500) {
            console.error(`A 500 level error ocurred while trying to send an error log: ${sendErrorLog.status}`);
            return undefined;
        }
        if(sendErrorResponse.status >= 400)
            return null;

        return "successful";
    } catch (error) {
        console.error(`Unexpected error while sending the error log to the api ${error}`);
        return undefined;
    }

}