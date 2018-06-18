function pairElement(str) {
  const dnaPair = { // Object of rules
    A: ["A","T"],
    T: ["T","A"],
    C: ["C","G"],
    G: ["G","C"]
  };
  let dna = [];
  for (let i = 0; i < str.length; i++) { // Make pair for each char
    dna.push(dnaPair[`${str[i]}`]);
  }
  return dna;
}

document.write(pairElement("GCG"));