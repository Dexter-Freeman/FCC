function palindrome(str) {
    // Good luck!
    const clearStr = str.replace(/\W|_/g, '').toLowerCase();
    let end = clearStr.length - 1;
    for (let i = 0; i <= end; i++) {
      if (clearStr[i] !== clearStr[end]) {
        return false;
      }
      end--;
    }
    return true;
  }
  
  console.log(palindrome("eye"));
  document.write(palindrome("eye"));