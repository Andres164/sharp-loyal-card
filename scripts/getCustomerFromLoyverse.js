export async function getCustomerFromLoyverse(email) {
    try {
        const getCustomerRespons = await fetch(`${cafeLibrePensadorAPIAddress}/api/Loyverse/customers/${email}`, {
            method : "GET",
            headers: {
                "Content-Type" : "application/json"
                //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
            }
        });
    
        if(!getCustomerRespons.ok == null)
            throw new Error(`Error getting the customer from loyverse: ${getCustomerRespons.status}`)
        return getCustomerRespons.json();
    } catch(error) {
        console.error(error);
        return null;
    }
    
}