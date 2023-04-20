export async function getCard(card_id) {
    try {
        const getCardResponse = await fetch(`https://${cafeLibrePensadorAPIAddress}/cards/${card_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
            },
            body: {}
        }) 

        if(!getCardResponse.ok)
            throw new Error(`Error getting card: ${createCustomerResponse.status}`);
        return JSON.parse(getCardResponse.body);
    } catch (error) {
        console.error(error);
        return null;
    }
}