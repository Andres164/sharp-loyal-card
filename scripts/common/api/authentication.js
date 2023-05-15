import { generateErrorMessage } from "../errorMessages.js";
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
    
        const responseJson = await response.json();
        let logMessage;
        if(response.status == 401)
          logMessage = `Someone tried to authenticate whit user: ${username} and API returned ${response.status} status code`;
        else if(response.status >= 400) {
          const errorMEssage = generateErrorMessage(`${response.status} Status while trying to authenticate the user`, JSON.stringify(responseJson));
          await sendErrorLog(errorMEssage);
          return undefined;
        }
        else if (response.ok) {
          console.log(responseJson.token);
          localStorage.setItem('accessToken', responseJson.token);
          logMessage = `The user ${username} authenticated successfuly`;
        }
        // this should be sendLogMessage
        await sendErrorLog(`${logMessage} \nAt: ${Date.toLocaleString()}`); 
        return response.ok ? "Successful" : null;
    } catch(error) {
        const errorMessage = generateErrorMessage("Unexpected error while authenticating: ", error);
        await sendErrorLog(errorMessage);
        return undefined;
    }
}
