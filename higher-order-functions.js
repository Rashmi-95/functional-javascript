function repeat(operation, num) {
      for(var count = 0; count < num; count++) {
          operation();
      }
}

module.exports = repeat