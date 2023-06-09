import { cafeLibrePensadorAPIAddress } from './apiAddress.js';
import { sendErrorLog } from './sendErrorLog.js';
import { generateErrorMessage } from '../errorMessages.js';

export async function getCustomerFromLoyverse(email) {
    try {
        const getCustomerRespons = await fetch(`${cafeLibrePensadorAPIAddress}/api/Loyverse/customers/${email}`, {
            method : "GET",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include"
        });
        
        const responseJson = await getCustomerRespons.json();
        if(getCustomerRespons.status >= 500) {
            const errorMessage = generateErrorMessage(`${getCustomerRespons.status} Error getting the customer whit email ${email} from loyverse`,
                                                        JSON.stringify(responseJson.errors));
            await sendErrorLog(errorMessage);
            return undefined;
        }
        if(getCustomerRespons.status >= 400)
            return null;
        return responseJson;
    } catch(error) {
        const errorMessage = generateErrorMessage(`Unexpected error while getting customer "${email}" from loyverse`, error);
        await sendErrorLog(errorMessage);
        return undefined;
    }
    
}