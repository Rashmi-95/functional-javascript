function doubleAll(numbers) {
    if (numbers instanceof Array) {
        var isnumber = true;
        var doubleOfNumbers = numbers.map(function doubleIt(number) {
            if (isNaN(number)) {
                isnumber = false;
            }
            return number * 2;
        });
        if (isnumber == false) {
            return 'Not a valid number array';
        }
        return doubleOfNumbers;
    } else {
        return 'Not an Array';
    }
}

module.exports = doubleAll