function repeatStringNumTimes(str, num) {
  // repeat after me
  let answer = "";
  if (num <= 0) {
    return answer;
  }
  for (let i = 1; i <= num; i++) {
    answer += str;
  }
  return answer;
}

repeatStringNumTimes("abc", 3);