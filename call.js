function duckCount() {
    var arrayOfKeys = Object.keys(arguments); // find keys i.e 0,1,2 - useless but used in filter
    originalInputArgument = arguments; // we copy the arguments so that it an be used inside filter for using arguments[keys]
    var arrayOfDucks = arrayOfKeys.filter( function isArgumentDuck(eachKey) {
        var value = originalInputArgument[eachKey]; // we get the value for each key using the copied argument and key
        return {}.hasOwnProperty.call(value,'quack'); // return if its true
    });
    return  arrayOfDucks.length;
}
module.exports = duckCount