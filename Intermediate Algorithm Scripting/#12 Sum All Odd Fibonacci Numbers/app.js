function sumFibs(num) {
  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  };
  const fibArrMake = (n) => {
    let result = [];
    for (let i = 0; ; i++) {
      if (fib(i) > n) {
        break;
      }
      result.push(fib(i));
    }
    return result;
  };
  const fibArr = fibArrMake(num);
  const filtered = fibArr.filter(el => el % 2);
  const sum = filtered.reduce((acc, el) => acc + el, 0);
  return sum;
}

// document.write(sumFibs(4));
document.write(sumFibs(4000000));