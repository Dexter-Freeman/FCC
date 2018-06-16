function sumAll(arr) {
  const [start, end] = arr; // start and end numbers of the range
  if (start > end) { // is start > end seing start and end
    return sumAll([end, start]);
  }
  let result = 0;
  for (let count = start; count <= end; count++) {
      result += count;
  }
  return result;
}

document.write(sumAll([1, 4]));