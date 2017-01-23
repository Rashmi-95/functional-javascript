function countWords(inputWords) {  
   var outputWords = inputWords.reduce(function checkAndAdd(allWords,eachWord) {
       (eachWord in allWords) ? (allWords[eachWord]++) : (allWords[eachWord] = 1);
       return allWords;
   },{});
   return outputWords;
}

module.exports = countWords