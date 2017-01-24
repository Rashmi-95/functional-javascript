function countWords(inputWords) {
  if (inputWords instanceof Array) {
    var isString = true;
    var outputWords = inputWords.reduce(function checkAndAdd(allWords, eachWord) {

      (eachWord in allWords) ? (allWords[eachWord]++) : (allWords[eachWord] = 1);
      return allWords;
    }, {});
    return outputWords;
  } else {
    return 'Not an array';
  }
}

module.exports = countWords