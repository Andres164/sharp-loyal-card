import { cafeLibrePensadorAPIAddress } from './apiAddress.js';

export async function getCustomer(email) {
    try {
        const getCustomerResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/customers/${email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
                //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
            }
        });
        if(getCustomerResponse.status >= 500) {
            console.error(`Error getting customer: ${getCustomerResponse.status}`);
            return undefined;
        }
        if(getCustomerResponse.status >= 400)
            return null;
        const customerData = await getCustomerResponse.json();
        return customerData;
    } catch (error) {
        console.error(`Unexpected error while getting customer: ${error}`);
        return null;
    }
}