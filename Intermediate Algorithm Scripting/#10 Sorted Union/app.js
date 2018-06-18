function uniteUnique(arr) {
// I wanted to make a decision with the application. But so far it has not turned out
  const arrayOfArrays = Array.from(arguments);
  let result = [];
  for (let i = 0; i < arrayOfArrays.length; i++) {
    for (let j = 0; j < arrayOfArrays[i].length; j++) {
      if (!result.includes(arrayOfArrays[i][j])) {
        result.push(arrayOfArrays[i][j]); // with concat don't work
      }
    }
  }
  return result;
}

document.write(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));