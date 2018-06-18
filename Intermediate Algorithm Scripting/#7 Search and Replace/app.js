function myReplace(str, before, after) {
  const isCapitalize = (word) => word[0] === word[0].toUpperCase(); // Chec if the word is capital
  const capitalizeWord = (word) => { // Capitalize word
    const arrWord = word.split("");
    arrWord[0] = arrWord[0].toUpperCase();
    return arrWord.join('');
  };
  return isCapitalize(before) ? str.replace(before, capitalizeWord(after)) : str.replace(before, after);
}

document.write(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));