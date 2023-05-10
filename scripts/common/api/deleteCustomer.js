import { cafeLibrePensadorAPIAddress } from './apiAddress.js';

export async function deleteCustomer(customerEmail) {
    try {
        const deleteCustomerResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/Customers/${customerEmail}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
                //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
            }
        })
        
        if(deleteCustomerResponse.status >= 500) {
            console.error(`Error while deliting customer: ${getCardResponse.status}`);
            return undefined;
        }
        if(deleteCustomerResponse.status >= 400)
            return null;
    
        const deletedCustomerData = await deleteCustomerResponse.json();
        return deletedCustomerData;
    } catch (error) {
        console.error(`Caught an Unexpected Error while deleting a customer: ${error}`)
        return undefined;
    }
}