unction repeat(operation, num) {
      for(int count = 0; count < num; count++) {
          operation();
      }
}
module.exports = repeat