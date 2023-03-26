includeFile("scripts/getCard.js");

function isCardLinked(card_id) {
    let card = getCard(card_id);
    if(card == undefined)
        return undefined;
    JSON.parse(card);
    return card.customerEmail != null;
}