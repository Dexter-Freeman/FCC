function translatePigLatin(str) {
  const vowelIsFirst = (str) => /[aeiou]/.test(str[0]);
  const consToEnd = (word, end) => {
    if (vowelIsFirst(word)) {
      return `${word}${end}`;
    } else {
    const newEnd = `${end}${word[0]}`;
    const newWord = word.slice(1);
    return consToEnd(newWord, newEnd);
    }
  };
  return vowelIsFirst(str) ? `${str}way` : `${consToEnd(str, "")}ay`;
}

document.write(translatePigLatin("consonant"));