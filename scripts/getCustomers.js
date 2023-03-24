function getCustomer(id_customer) {
    fetch(`https://api.loyverse.com/v1.0/customers/${id_customer}`).then(res => {
        return res.json();
    })
    .catch(error => console.error(`error while fetching customer = ${error}`));
    alert("Ocurrio un error al intentar buscar el cliente");
    return undefined;
}