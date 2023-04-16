

async function createCustomer(email, date_of_birth) {
    try {
        const createCustomerResponse = await fetch(`${cafeLibrePensadorAPIAddress}api/Customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          //  Add authentication:  'Authorization': `Bearer ${yourAuthToken}`
        },
        body: JSON.stringify({
          email: email,
          date_of_birth: date_of_birth
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

async function makeCustomer_CardLink() {
    let email = document.getElementById("email").value;
    let date_of_birth = document.getElementById("date_of_birth").value;
    if (createCustomer(email, date_of_birth) == 1) {
        alert ("¡Ocurrio un error al crear el cliente!");
        return;
    }

    let scannedCardCode = sessionStorage.getItem("scannedCardCode"); // <---
    try {
        const linkCardResponse = await fetch(`${cafeLibrePensadorAPIAddress}/Cards/${scannedCardCode}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              // Add authentication : 'Authorization': `Bearer ${yourAuthToken}`
            },
            body: JSON.stringify({
              customer_email: email
            })
          });
      
          if (!linkCardResponse.ok) {
            throw new Error(`Error linking card: ${linkCardResponse.status}`);
          }
    } catch (error) {
      console.error(error);
      return 1;
    }
    return 0;
}