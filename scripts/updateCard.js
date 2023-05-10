import { cafeLibrePensadorAPIAddress } from "./apiAddress.js";
import { ServerError } from "./errors.js";

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
    
        if(updateCardResponse.status >= 500)
            throw new ServerError(`Error getting customer: ${getCardResponse.status}`);
        if(updateCardResponse.status >= 400)
            return null;
        
        const updateCard = await updateCardResponse.json();
        return updateCard;
    } catch(error) {
        if(error instanceof ServerError)
            console.error("Caught 500 error while updating card:", error);
        else
            console.error("Caught unexpected error: ", error);
        return undefined;
    }
}