import { cafeLibrePensadorAPIAddress } from "./apiAddress.js";

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
    
        if(updateCardResponse.status >= 500) {
            console.error(`Error while updating card: ${getCardResponse.status}`);
            return undefined;
        }
        if(updateCardResponse.status >= 400)
            return null;
        
        const updateCard = await updateCardResponse.json();
        return updateCard;
    } catch (error) {
        console.error(`Caught unexpected error while updating card: ${error}`);
        return undefined;
    }
}