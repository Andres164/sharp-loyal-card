import { isAuthenticated } from "./api/authentication.js";

export async function redirectIfSessionHasExpired(redirectionPath) {
    const isntAuthenticated = !await isAuthenticated();
    if (isntAuthenticated || isntAuthenticated === undefined) {
        document.location.href = redirectionPath;
    }
}
