function destroyer(arr) {
  // Remove all the values
  const args = [].slice.call(arguments);
  // second ver: const args = [...arguments];
  const removeMe = args.slice(1);
  return arr.filter(elem => !removeMe.includes(elem));
};

// If don't use arguments

// function destroyer(arr, ... removeMe) {
//   // Remove all the values
//   return arr.filter(elem => !removeMe.includes(elem));
// }

document.write(destroyer([1, 2, 3, 1, 2, 3], 2, 3));