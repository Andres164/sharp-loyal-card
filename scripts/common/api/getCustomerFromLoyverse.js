import { cafeLibrePensadorAPIAddress } from './apiAddress.js';

export async function getCustomerFromLoyverse(email) {
    try {
        const getCustomerRespons = await fetch(`${cafeLibrePensadorAPIAddress}/api/Loyverse/customers/${email}`, {
            method : "GET",
            headers: {
                "Content-Type" : "application/json"
                //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
            }
        });
    
        if(getCustomerRespons.status >= 500) {
            console.error(`Error getting the customer from loyverse: ${getCustomerRespons.status}`);
            return undefined;
        }
        if(getCustomerRespons.status >= 400)
            return null;
        const customerData = await getCustomerRespons.json();
        return customerData;
    } catch(error) {
        console.error(`Unexpected error while getting customer from loyverse: ${error}`);
        return undefined;
    }
    
}