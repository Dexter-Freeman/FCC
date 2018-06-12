function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  let answer;
  let sorted = arr.sort((a, b) => a - b); // sort input array
  for (let i = 0; i <= sorted.length;) {
    if (arr[i] < num) { 
    // if i = sorted.length num[i] = undefined and (undefined < num) return false
      i++;
    } else answer = i;
  }
  return answer;
}

document.write(getIndexToIns([40, 60], 50));