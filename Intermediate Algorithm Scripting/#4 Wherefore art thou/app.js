function whatIsInAName(collection, source) {
  // What's in a name?
  const checkObj = (obj, question) => { // Function for check object
    for (let key in question) {
      if (!(obj.hasOwnProperty(key) && obj[key] === question[key])) {
        return false;
      }
    }
    return true; // If all key end value in question is contains in obj
  };
  return collection.filter(el => checkObj(el, source));

  // version vis partial apply
  // const check = (el) => checkObj(el, source); /
  // return collection.filter(check);
}

document.write(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));