function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    const avgToPer = avg => Math.round(2 * Math.PI * Math.sqrt(Math.pow(avg + earthRadius, 3) / GM));
    return arr.map(obj => {
      return {name: obj.name, orbitalPeriod: avgToPer(obj.avgAlt)};
    });
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  document.write(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));