import { ServerError } from "./errors.js";
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
    
        if(putResponse.status >= 500)
            throw new ServerError(`Error getting customer: ${getCardResponse.status}`);
        if(putResponse.status >= 400)
            return null;
        const newCustomerBalance = await putResponse.json();
        return newCustomerBalance;
    } catch (error) {
        if(error instanceof ServerError)
            console.error("Caught 500 error:", error);
        else
            console.error("Caught other error:", error);
        return undefined;
    }
}