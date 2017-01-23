function perform(arr, operationFunction, initial, index) {
    if (arr[index]) {
        operationFunction(initial, arr[index], index, arr);
        index++;
        perform(arr, operationFunction, initial, index);
        return initial;
    }
}
function reduce(arr, operationFunction, initial) {
    var index = 0;
    return perform(arr, operationFunction, initial, index);
}

module.exports = reduce

