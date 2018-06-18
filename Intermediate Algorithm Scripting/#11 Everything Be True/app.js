function truthCheck(collection, pre) {
  // Is everyone being true?
 return collection.every(elem => elem[pre]);
}

document.write(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));