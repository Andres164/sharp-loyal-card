import { isAuthenticated } from "./api/authentication.js";

export async function redirectIfSessionHasExpired(redirectionPath) {
    const isntAuthenticated = !await isAuthenticated();
    if (isntAuthenticated || isntAuthenticated === undefined) {
        alert("You are not authenticated");
        document.location.href = redirectionPath;
    }
}
