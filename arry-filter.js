function isMessageShort(element) {
    console.log(element.message.length);
    return element.message.length < 50;
}

function getShortMessages(messages) {
    var filteredMessage = messages.filter(isMessageShort);
    //console.log(FilteredMessage)
    return filteredMessage;
}
module.exports = getShortMessages;