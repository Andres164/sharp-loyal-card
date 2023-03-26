function getCard(card_id) {
    fetch(`https://${cafeLibrePensadorAPIAddress}/cards/${card_id}`)
    .then( res => {
        return res.json();
    })
    .catch(error => console.error(`error while fetching card = ${error}`));
    alert("¡Ocurrio un error al buscar la tarjeta!");
    return undefined;
}