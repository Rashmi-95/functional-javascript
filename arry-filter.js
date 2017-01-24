function getShortMessages(messages) {
    if (messages instanceof Array === true) {
        var filteredMessageObject = messages.filter(function isMessageShort(element) {
            return element.message.length < 50;
        });
        var filteredMessage = filteredMessageObject.map(function (element) {
            return element.message;
        });
        return filteredMessage;
    }
    else
    {
        var error = 'Input is incorrect. It is supposed to be array of objects with message property';
        return error;
    }

}
module.exports = getShortMessages;