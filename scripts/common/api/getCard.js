import { cafeLibrePensadorAPIAddress } from './apiAddress.js';
import { sendErrorLog } from './sendErrorLog.js';
import { generateErrorMessage } from '../errorMessages.js';

export async function getCard(card_id) {
    try {
        const accessToken = sessionStorage.getItem("accessToken");
        const getCardResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/cards/${card_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }) 

        const responseJson = await getCardResponse.json();
        if(getCardResponse.status >= 500) {
            const errorMessage = generateErrorMessage(`${getCardResponse.status} Error getting card`, JSON.stringify(responseJson.errors) );
            await sendErrorLog(errorMessage);
            return undefined;
        }
        if(getCardResponse.status >= 400)
            return null;
        return responseJson;
    } catch (error) {
        const errorMessage = generateErrorMessage("Unexpected error while getting card", error);
        await sendErrorLog(errorMessage);
        return undefined;
    }
}