import { cafeLibrePensadorAPIAddress } from './apiAddress.js';
import { sendErrorLog } from './sendErrorLog.js';
import { generateErrorMessage } from '../errorMessages.js';

export async function getCustomer(email) {
    try {
        const getCustomerResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/customers/${email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
                //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
            }
        });

        const responseJson = await getCustomerResponse.json();
        if(getCustomerResponse.status >= 500) {
            const errorMessage = generateErrorMessage(`${getCustomerResponse.status} Error getting customer`, JSON.stringify(responseJson.errors));
            sendErrorLog(errorMessage);
            return undefined;
        }
        if(getCustomerResponse.status >= 400)
            return null;
        return responseJson;
    } catch (error) {
        const errorMessage = generateErrorMessage("Unexpected error while getting customer", error);
        sendErrorLog(errorMessage);
        return undefined;
    }
}