export async function getCard(card_id) {
    try {
        const getCardResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/cards/${card_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
            }
        }) 

        if(!getCardResponse.ok)
            throw new Error(`Error getting card: ${createCustomerResponse.status}`);
        return getCardResponse.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}