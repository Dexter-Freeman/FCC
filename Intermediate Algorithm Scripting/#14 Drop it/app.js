function dropElements(arr, func) {
  // Drop them elements.
  if (arr.length === 0 | func(arr[0])) {
      return arr;
    }
  const newArr = arr.slice(1);
  return dropElements(newArr, func);
}

document.write(dropElements([1, 2, 3], function(n) {return n < 3; }));