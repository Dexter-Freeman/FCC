function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  // I do not like this decision. But it works for these tests
  const strPrep = (str) => {
    let answer = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] === " " | str[i] === "_" | str[i] === "-") {
        answer += "-";
      } else if (str[i] !== " " && str[i] === str[i].toUpperCase() && str[i - 1] !== str[i - 1].toUpperCase()) {
        answer += `-${str[i]}`;
      } else {
        answer += str[i];
      }
    }
    console.info(`answer - ${answer}`);
    return answer;
  };
  return strPrep(str).toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));