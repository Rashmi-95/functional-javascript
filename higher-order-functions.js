function repeat(operation, num) {
    if (typeof (operation) === 'function') {
        if (typeof (num) === 'number') {
            if(num == 0) {
                return '';
            } else if (num < 0) {
                return 'the given number is not valid count';
            }
            for (var count = 0; count < num; count++) {
                operation();
            }
        } else {
            return 'the given num is not valid number';
        }
    }
    else {
        return 'given operation is not valid';
    }

}

module.exports = repeat