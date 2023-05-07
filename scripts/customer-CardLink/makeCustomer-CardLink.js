import { disableFormFields } from "../formFieldsManipulation.js";

async function createCustomer(loyverseCustomerId, email, date_of_birth) {
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
    
      if (!createCustomerResponse.ok)
        throw new Error(`Error creating customer: ${createCustomerResponse.status}`);
    } catch (error) {
        console.error(error);
        return 1;
    }
    return 0;
}

export async function makeCustomer_CardLink() {
  const form = document.getElementById("customerForm")
  if(!form.checkValidity()) {
    form.reportValidity();
    return 1;
  }
  const loyverseCustomerId = sessionStorage.getItem("loyverseCustomerId");
  if(loyverseCustomerId == null)
    throw new Error("Error: no se encontro el id de cliente de loyverse");
  const email = document.getElementById("email").value;
  const dateOfBirth = document.getElementById("date_of_birth").value;
  
  if (await createCustomer(loyverseCustomerId, email, dateOfBirth) == 1) {
      alert ("¡Ocurrio un error al crear el cliente!");
      return;
  }
  let scannedCardCode = sessionStorage.getItem("scannedCardCode"); // <---
  try {
      const linkCardResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/Cards/${scannedCardCode}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            // Add authentication : 'Authorization': `Bearer ${yourAuthToken}`
          },
          body: JSON.stringify(email)
        });
    
        if (!linkCardResponse.ok) {
          throw new Error(`Error linking card: ${linkCardResponse.status}`);
        }
  } catch (error) {
    console.error(error);
    return 1;
  }
  disableFormFields(form);
  alert("La tarjeta a sido enlazada EXITOSAMENTE con el cliente con email: " + email);
  return 0;
}