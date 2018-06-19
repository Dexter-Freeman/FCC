function sumPrimes(num) {
  const isPrime = (n) => {
    if (n === 2) {
      return true;
    }
    for (let div = 2; div < n; div++) {
      if (n % div === 0) {
        return false;
      }
    }
    return true;
  };
  const primeArrMake = (n) => {
    let result = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        result.push(i);
      }
    }
    return result;
  };
  const primeArr = primeArrMake(num);
  const sumPrimes = primeArr.reduce((el, acc) => acc + el, 0);
  return sumPrimes;
}

document.write(sumPrimes(10));