var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    this.getFullName = function() {
      return fullName;
    };
    this.getFirstName = function() {
      return `${fullName.split(" ")[0]}`;
    }
    this.getLastName = function() {
      return `${fullName.split(" ")[1]}`;
    }
    this.setFirstName = function(firstName) {
      fullName = `${firstName} ${fullName.split(" ")[1]}`;
    }
    this.setLastName = function(lastName) {
      fullName = `${fullName.split(" ")[0]} ${lastName}`;
    }
    this.setFullName = function(newFullName) {
      fullName = newFullName;
    }
  };
  
  var bob = new Person('Bob Ross');
  console.log(bob.getFullName());
  document.write(bob.getFullName());