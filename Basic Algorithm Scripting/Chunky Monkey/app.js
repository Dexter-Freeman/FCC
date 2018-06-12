function chunkArrayInGroups(arr, size) {
  // Break it up.
  let result = [];
  let chunk = [];
  while (arr.length >= size) {
    chunk = arr.splice(0, size);
    result.push(chunk);
  }
  // return arr.length === 0 ? result : result.push(arr);
  if (arr.length === 0) {
    return result;
  } else if (arr.length < size) {
    result.push(arr);
  }
  return result;
}

document.write(chunkArrayInGroups(["a", "b", "c", "d"], 2));