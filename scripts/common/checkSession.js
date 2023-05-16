import { isAuthenticated } from "./api/authentication.js";

export async function redirectToLogInIfSessionHasExpired() {
    const isntAuthenticated = !await isAuthenticated();
    if (isntAuthenticated || isntAuthenticated === undefined)
        document.location.href = 'pages/logIn.html';
}
