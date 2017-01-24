function repeat(operation, num) {
  try {
    if ('function' === typeof (operation)) {
      if ('number' === typeof (num)) {
        if (num == 0) {
          return '';
        } else if (num < 0) {
          return 'Given number is not valid count';
        }
        for (var count = 0; count < num; count++) {
          operation();
        }
      } else {
        return 'Given number is not valid number';
      }
    }
    else {
      return 'Given operation is not valid function';
    }
  } catch (exception) {
    return 'error in code';
  }
}

module.exports = repeat