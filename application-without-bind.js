var slice = Array.prototype.slice

function logger(namespace) {
    return function modifiedLogger() {
        //console.log('original', namespace);
        var listOfNamespace = slice.call(arguments);
        console.log.apply(null,[namespace].concat(listOfNamespace));
    }
}

module.exports = logger