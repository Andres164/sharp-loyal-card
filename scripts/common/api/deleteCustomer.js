import { cafeLibrePensadorAPIAddress } from './apiAddress.js';
import { sendErrorLog } from './sendErrorLog.js';
import { generateErrorMessage } from '../errorMessages.js';

export async function deleteCustomer(customerEmail) {
    try {
        const deleteCustomerResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/Customers/${customerEmail}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include"
        })
        

        const responseJson = await deleteCustomerResponse.json();
        if(deleteCustomerResponse.status >= 500) {
            const errorMessage = generateErrorMessage(`${getCardResponse.status} Error while deliting customer `, JSON.stringify(responseJson.errors));
            await sendErrorLog(errorMessage);
            return undefined;
        }
        if(deleteCustomerResponse.status >= 400)
            return null;
    
        return responseJson;
    } catch (error) {
        const errorMessage = generateErrorMessage("Caught an Unexpected Error while deleting a customer", error);
        await sendErrorLog(errorMessage);
        return undefined;
    }
}