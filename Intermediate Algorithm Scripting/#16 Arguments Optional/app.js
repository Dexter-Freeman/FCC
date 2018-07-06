function addTogether() {
    // terrific solution
    const isNumber = value => (typeof value) === "number";
    const args = [...arguments];
    const [first, second] = args;
  
    if (args.length === 1) {
      if (isNumber(first)) {
        return function(num) {
          if (isNumber(num)) {
            return first + num;
          }
          return undefined;
        }
      } return undefined; 
    }
  
    if (isNumber(first) && isNumber(second)) {
      return first + second;
    }
    return undefined;
  }
  
  console.log(addTogether(2,3));
  document.write(addTogether(2,3));