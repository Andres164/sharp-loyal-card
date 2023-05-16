import { cafeLibrePensadorAPIAddress } from "./apiAddress.js";
import { sendErrorLog } from "./sendErrorLog.js";

export async function authenticate(username, password) {
    try {
        const response = await fetch(`${cafeLibrePensadorAPIAddress}/api/Authentication/authenticate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: username,
              password: password 
             })
        });
        
        if(response.status == 401)
          return null;
        if(response.status >= 400) {
          console.error(`Got a ${response.status} status code while authenticating the user`);
          return undefined;
        }

        // this should be sendLogMessage
        const currentTime = new Date().toLocaleString();
        await sendErrorLog(`The user ${username} authenticated successfuly \nAt: ${ currentTime }`); 
        return "Successful";
    } catch(error) {
        console.error(`Unexpected error while authenticating: ${ error }`);
        return undefined;
    }
}

export async function isAuthenticated() {
  try {
    const checkAuthResponse = await fetch(`${cafeLibrePensadorAPIAddress}/api/Authentication/checkIfAuthenticated`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    });

    if(checkAuthResponse.status == 401)
      return false;
    if(checkAuthResponse.status >= 400) {
      console.error(`The API returned status code ${checkAuthResponse.status} while trying to check authentication`);
      return undefined;
    }
    return true;
  } catch(error) {
    console.error("Unexpected error while trying to check if client is authenticated");
    return undefined;
  }
}
