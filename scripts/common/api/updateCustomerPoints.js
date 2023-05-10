import { cafeLibrePensadorAPIAddress } from './apiAddress.js';

export async function addToCustomerPoints(customerLoyverseId, pointsToAdd) {
    try {
        const pointsToAddFloat = parseFloat(pointsToAdd);
        const putResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/loyverse/customers/${customerLoyverseId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
                //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
            },
            body: JSON.stringify(pointsToAddFloat)
        });
    
        if(putResponse.status >= 500) {
            console.error(`Error while adding points to a customer: ${getCardResponse.status}`);
            return undefined;
        }            
        if(putResponse.status >= 400)
            return null;
        const newCustomerBalance = await putResponse.json();
        return newCustomerBalance;
    } catch (error) {
        console.error(`Caught unexpected while adding points to a customer error: ${error}`);
        return undefined;
    }
}