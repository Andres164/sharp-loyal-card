export function getCustomer(email) {
    // Example hard-coded customer object
    const customer = {
        name: "John Doe",
        phone_number: "555-1234",
        address: "123 Main St",
        total_points: 1000
    };

    if (email === "Andres@gmail.com") {
        return JSON.stringify(customer);
    } else {
        return null;
    }
}