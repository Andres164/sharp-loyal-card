import { ServerError } from "./errors.js";

export async function getCard(card_id) {
    try {
        const getCardResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/cards/${card_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
            }
        }) 

        if(getCardResponse.status >= 500) 
            throw new ServerError(`Error getting customer: ${getCardResponse.status}`);
        if(getCardResponse.status >= 400)
            return null;
        const cardData = await getCardResponse.json();
        return cardData;
    } catch (error) {
        if (error instanceof ServerError)
            console.error("Caught 500 error:", error);
        else
            console.error("Caught other error:", error);
        return undefined;
    }
}