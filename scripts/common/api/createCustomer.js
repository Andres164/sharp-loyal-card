import { generateErrorMessage } from '../errorMessages.js';
import { cafeLibrePensadorAPIAddress } from './apiAddress.js';
import { sendErrorLog } from './sendErrorLog.js';

export async function createCustomer(loyverseCustomerId, email, date_of_birth) {
    try {
        const createCustomerResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/Customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          loyverseCustomerId: loyverseCustomerId,
          email: email,
          dateOfBirth: date_of_birth
        }),
        credentials: "include"
      });
    
      const responseJson = await createCustomerResponse.json();
      if (!createCustomerResponse.ok) {
        const errorMessage = generateErrorMessage(`Error creating customer got a ${createCustomerResponse.status} status code`, JSON.stringify(responseJson.errors));
        await sendErrorLog(errorMessage);
        return undefined;
      }
      return responseJson;
    } catch (error) {
        const errorMessage = generateErrorMessage("Unexpected error when creating customer: ", error);
        await sendErrorLog(errorMessage);
        return undefined;
    }
}