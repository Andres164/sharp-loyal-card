import { cafeLibrePensadorAPIAddress } from './apiAddress.js';
import { sendErrorLog } from './sendErrorLog.js';
import { generateErrorMessage } from '../errorMessages.js';

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
    
        const responseJson = await putResponse.json();
        if(putResponse.status >= 500) {
            const errorMessage = generateErrorMessage(`${getCardResponse.status} Error while adding points to a customer`, JSON.stringify(responseJson.errors));
            sendErrorLog(errorMessage);
            return undefined;
        }            
        if(putResponse.status >= 400)
            return null;

        return responseJson;
    } catch (error) {
        const errorMessage = generateErrorMessage("Caught unexpected error while adding points to a customer", error);
        sendErrorLog(errorMessage);
        return undefined;
    }
}