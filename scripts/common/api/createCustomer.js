import { cafeLibrePensadorAPIAddress } from './apiAddress.js';

export async function createCustomer(loyverseCustomerId, email, date_of_birth) {
    try {
        const createCustomerResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/Customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
        },
        body: JSON.stringify({
          loyverseCustomerId: loyverseCustomerId,
          email: email,
          dateOfBirth: date_of_birth
        })
        });
    
      if (createCustomerResponse.status >= 500) {
        console.error(`Error creating customer: ${createCustomerResponse.status}`);
        return undefined;
      }
      if(createCustomerResponse.status >= 400)
        return null;
      const createdCustomer = await createCustomerResponse.json();
      return createdCustomer;
    } catch (error) {
        console.error(`Unexpected error when creating customer: ${error}`);
        return undefined;
    }
}