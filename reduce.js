function countWords(inputWords) {  
   return inputWords.reduce(function checkAndAdd(allWords,eachWord) {
       if(eachWord in allWords) {
        allWords[eachWord]++;
       }else {
           allWords[eachWord] = 1;
       }
       return allWords;
   },{});
}

module.exports = countWords