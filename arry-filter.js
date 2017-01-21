function getShortMessages(messages) {
    var filteredMessageObject = messages.filter(function isMessageShort(element) {
        return element.message.length < 50;
    });
    var filteredMessage = filteredMessageObject.map(function (element) {
        return element.message;
    });
    return filteredMessage;
}
module.exports = getShortMessages;