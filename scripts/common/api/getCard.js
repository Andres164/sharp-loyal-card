import { cafeLibrePensadorAPIAddress } from './apiAddress.js';

export async function getCard(card_id) {
    try {
        const getCardResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/cards/${card_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
            }
        }) 

        if(getCardResponse.status >= 500) {
            console.error(`Error getting card: ${getCardResponse.status}`);
        }
        if(getCardResponse.status >= 400)
            return null;
        const cardData = await getCardResponse.json();
        return cardData;
    } catch (error) {
        console.error(`Unexpected error while getting card: ${error}`);
        return undefined;
    }
}