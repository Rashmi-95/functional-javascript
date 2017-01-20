function doubleAll(numbers) {
      var doubleOfNumbers = numbers.map(function(number) {
          return number * 2;
      });
      return doubleOfNumbers;
}

module.exports = doubleAll