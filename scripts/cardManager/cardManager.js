import { redirectIfSessionHasExpired } from "../common/checkSession.js";

window.addEventListener("DOMContentLoaded", async () => {
    await redirectIfSessionHasExpired("../login.html");

    const isLoggedInUserAdmin = localStorage.getItem("isLoggedInUserAdmin");
    if(!isLoggedInUserAdmin)
        document.location.href = "../../index.html";
    
    

    // Load cards in a table
})