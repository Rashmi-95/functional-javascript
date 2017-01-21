function isMessageShort(element) {
    return element.message .length < 50;
}

function getShortMessages(message) {
    var filteredMessage = message.filter(isMessageShort);
    //console.log(FilteredMessage)
    return Filteredmessage;
}
module.exports = getShortMessages;