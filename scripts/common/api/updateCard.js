import { cafeLibrePensadorAPIAddress } from "./apiAddress.js";
import { sendErrorLog } from './sendErrorLog.js';
import { generateErrorMessage } from '../errorMessages.js';

export async function updateCard(cardId, updatedEmail) {
    try {
        const updateCardResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/cards/${cardId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
                //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
            },
            body: JSON.stringify({customerEmail: updatedEmail})
        });
    
        const responseJson = await updateCardResponse.json();
        if(updateCardResponse.status >= 500) {
            const errorMessage = generateErrorMessage(`${getCardResponse.status} Error while updating card`, JSON.stringify(responseJson.errors));
            await sendErrorLog(errorMessage);
            return undefined;
        }
        if(updateCardResponse.status >= 400)
            return null;
        
        return responseJson;
    } catch (error) {
        const errorMessage = generateErrorMessage("Caught unexpected error while updating card", error);
        await sendErrorLog(errorMessage);
        return undefined;
    }
}