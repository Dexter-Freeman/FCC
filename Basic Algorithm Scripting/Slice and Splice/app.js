function frankenSplice(arr1, arr2, n) {
  let res = arr2.slice(); // copy arr2 to res
  res.splice(n, 0, ...arr1); // add arr1 to res
  return res;
}

document.write(frankenSplice([1, 2, 3], [4, 5, 6], 1));