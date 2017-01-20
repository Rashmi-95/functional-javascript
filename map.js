function doubleAll(numbers) {
      var doubleOfNumbers = numbers.map(function doubleIt (number) {
          return number * 2;
      });
      return doubleOfNumbers;
}

module.exports = doubleAll