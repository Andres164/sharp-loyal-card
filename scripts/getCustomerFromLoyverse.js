export async function getCustomerFromLoyverse(email) {
    try {
        const getCustomerRespons = await fetch(`${cafeLibrePensadorAPIAddress}/api/Loyverse/customers/${email}`, {
            method : "GET",
            headers: {
                "Content-Type" : "application/json"
                //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
            }
        });
    
        if(getCustomerRespons.status >= 500)
            throw new Error(`Error getting the customer from loyverse: ${getCustomerRespons.status}`)
        if(getCustomerRespons.status >= 400)
            return null;
        const customerData = await getCustomerRespons.json();
        return customerData;
    } catch(error) {
        console.error(error);
        return undefined;
    }
    
}