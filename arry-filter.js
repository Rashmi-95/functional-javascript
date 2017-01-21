function isMessageShort(element) {
    return element.message < 50;
}

function getShortMessages(message) {
    var Filteredmessage = message.filter(isMessageShort);
    return Filteredmessage;
}
module.exports = getShortMessages;