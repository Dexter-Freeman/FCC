function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  const diff = (a1, a2, acc) => {
    for (let i = 0; i < a1.length; i++) {
    if (!a2.some(elem => elem === a1[i])) {
      acc.push(a1[i]);
    };
  };
    return acc;
  };
  return diff(arr1, arr2, diff(arr2, arr1, newArr));
}

document.write(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));