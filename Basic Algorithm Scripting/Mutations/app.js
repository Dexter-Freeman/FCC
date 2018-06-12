function mutation(arr) {
  const searchStr = Array.from(arr[0].toLowerCase());
  const searchWord = Array.from(arr[1].toLowerCase());
  let answer = true;
  for (let i = 0; i < searchWord.length; i++) {
    if (!searchStr.includes(searchWord[i])) {
      answer = false;
    }
  }
  return answer;
}

document.write(mutation(["hello", "hey"]));