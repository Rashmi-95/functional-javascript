/*module.exports = function arrayMap(arr, fn) {
    var index = 0, mappedArray = [];
    var mappedArr = arr.reduce(function applyMap(prev, curr) {
        curr = fn(curr);
        mappedArray[index++] = curr;
        return curr;
    }, 0);
    return mappedArray;
}
*/
module.exports = function arrayMap(arr, fn) {
    var mappedArray = arr.reduce(function applyMap(prev, curr) {
        curr = fn(curr);
        prev.push(curr);
        return prev;
    }, []);
    return mappedArray;
}