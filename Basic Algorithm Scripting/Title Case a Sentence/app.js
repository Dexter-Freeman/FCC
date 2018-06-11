function titleCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result += str[i].toUpperCase();
    } else if (str[i] === " ") {
      result += str[i];
    } else if (str[i - 1] === " ") {
      result += str[i].toUpperCase(); // str[i] is first letter in the word
    } else if (str[i] !== " " && str[i-1] !== " ") {
      result += str[i].toLowerCase(); // str[i] is middle or last letter in the word
    }
  }
  return result;
}

document.write(titleCase("I'm a little tea pot"));