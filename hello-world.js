function upperCaser(inputString) {
    if(typeof(inputString) === 'string') {
        return inputString.toUpperCase();
    } else {
        return 'not a valid string to convert to uppercase';
    } 
}
module.exports = upperCaser;