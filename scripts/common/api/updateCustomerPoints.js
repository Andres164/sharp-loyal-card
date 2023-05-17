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
            },
            body: JSON.stringify(pointsToAddFloat),
            credentials: "include"
        });
    
        const responseJson = await putResponse.json();
        if(putResponse.status >= 500) {
            const errorMessage = generateErrorMessage(`${getCardResponse.status} Error while adding points to the customer "${customerLoyverseId}". 
                                                       points to add: ${pointsToAdd}`, 
                                                        JSON.stringify(responseJson.errors));
            await sendErrorLog(errorMessage);
            return undefined;
        }            
        if(putResponse.status >= 400)
            return null;

        return responseJson;
    } catch (error) {
        const errorMessage = generateErrorMessage(`Caught unexpected error while adding points to the customer ${customerLoyverseId}. 
                                                    points to add: ${pointsToAdd}`, error);
        await sendErrorLog(errorMessage);
        return undefined;
    }
}