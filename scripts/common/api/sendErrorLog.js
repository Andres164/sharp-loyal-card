import { cafeLibrePensadorAPIAddress } from './apiAddress.js';

export async function sendErrorLog(message) {
    try {
        const accessToken = sessionStorage.getItem("accessToken");
        const sendErrorResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/ErrorLogs/send-error-log`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message),
            credentials: "include"
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