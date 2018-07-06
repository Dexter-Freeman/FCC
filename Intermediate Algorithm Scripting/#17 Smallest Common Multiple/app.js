function smallestCommons(arr) {
// This solution work with RangeError: Maximum call stack size exceeded  (((
    const [start, end] = arr;
    if (start > end) {
      return smallestCommons([end, start]);
    }
    let range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    console.log(`range - ${range}`);
    const findMul = (range, num) => {
      const predicat = (n) => num % n === 0;
      if (range.every(predicat)) {
        return num;
      } else return findMul(range, num + 1);
      // for (let i = num; ; i++) {
      //   const predicat = (n) => i % n === 0;
      //   if (range.every(predicat)) {
      //     console.log(`i - ${i}`);
      //     return i;
      //   }
      // }
    }
    return findMul(range, end);
  }
  
  
  smallestCommons([1,13]);