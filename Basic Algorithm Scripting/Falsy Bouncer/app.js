function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      res.push(arr[i]);
    }
  }
  return res;
}

document.write(bouncer([7, "ate", "", false, 9]));