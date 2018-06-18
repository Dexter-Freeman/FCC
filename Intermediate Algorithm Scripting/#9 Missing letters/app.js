function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const checkRange = (range, index) => {
    if (range.length === 0) {
      return undefined;
    }
    return range[0] === alphabet[index] ? checkRange(range.slice(1), index + 1) : alphabet[index];
  };
  return checkRange(str, alphabet.indexOf(str[0]));
}

document.write(fearNotLetter("abce"));