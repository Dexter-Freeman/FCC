function findLongestWordLength(str) {
  const wordsArr = str.split(" "); // Take an array of the words from str
  const wordsLengs = wordsArr.map(word => word.length); // Take length of the each word
  let answer = 0;
  for (let i = 0; i < wordsLengs.length; i++) {
    if (wordsLengs[i] > answer) {
      answer = wordsLengs[i];
    }
  }
  return answer;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");