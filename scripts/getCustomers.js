export async function getCustomer(email) {
    try {
        const getCustomerRespons = await fetch(`${cafeLibrePensadorAPIAddress}/api/customers/${email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
                //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
            }
        });
        if(!getCustomerRespons.ok)
            throw new Error(`Error getting customer: ${getCustomerRespons.status}`);
        return getCustomerRespons.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}