// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase



//   let fBottles =
//   console.log('With $' + input + 'you can initially buy' + fBottles + ' bottles');

//   let eBottles = fBottles;
//   fBottles = 0;
//   let caps = eBottles;

//   while(eBottles > 1 || caps > 3) {
//     let rBottles = Math.trunc(eBottles  / 2) + Math.trunc(caps / 4);
//     eBottles += rBottles
//     console.log('now you have gotten' + fBottles + ' bottles total')
//     eBottles -= eBottles
//     eBottles += fBottles
//     caps -= eBottles
//     caps += fBottles
//     console.log('you have ' + eBottles + ' empty bottles')
//     console.log()
//   }

//   return bottles;
// }

console.log(bottles(10));

console.log(bottles(20));

console.log(bottles(30));

console.log(bottles(40));



function bottles(input) {
  var bottlesDrank = 0;
  var newBottles = Math.trunc(input/2);
  //console.log(newBottles);
  var empties = newBottles;
  //console.log(empties);
  var caps = newBottles;
  //console.log(caps);
  while (caps > 3 || empties > 1) {
    bottlesDrank += newBottles;
    newBottles = 0;
    newBottles += Math.trunc(empties / 2);
    newBottles += Math.trunc(caps / 4);
    empties = empties % 2;
    caps = caps % 4;
    bottlesDrank += newBottles;
    //console.log(bottlesDrank);
    empties += newBottles;
    caps += newBottles;
    newBottles = 0;
  }
  return bottlesDrank;
}