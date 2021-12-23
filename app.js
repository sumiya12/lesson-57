var birthYears = [1991, 2000, 1999, 1986, 2010];
// var ages = findOutAges();
// console.log(findOutAges());
// console.log(isFullAges());
// console.log(findOutMaxHeartRate());
// function findOutAges() {
//   var arr = [];

//   for (var i = 0; i < birthYears.length; i++) {
//     arr.push(new Date().getFullYear() - birthYears[i]);
//   }
//   return arr;
// }

// function isFullAges() {
//   var arr = [];

//   for (var i = 0; i < ages.length; i++) {
//     arr.push(ages[i] >= 18);
//   }
//   return arr;
// }

// function findOutMaxHeartRate() {
//   var arr = [];

//   for (var i = 0; i < ages.length; i++) {
//     arr.push(Math.round(206.9 - 0.67 * ages[i]));
//   }
//   return arr;
// }

var ages = processArray(birthYears, findOutAges);
console.log(ages);
console.log(processArray(ages, isFullAge));
console.log(processArray(ages, findOutMaxHeartRate));
console.log(processArray([2016, 1965, 1945], findOutAges));

console.log(
  processArray(ages, function (age) {
    return age >= 65;
  })
);

function processArray(myarr, fn) {
  var arr = [];
  for (var i = 0; i < myarr.length; i++) {
    arr.push(fn(myarr[i]));
  }
  return arr;
}
function findOutAges(el) {
  return new Date().getFullYear() - el;
}
function isFullAge(el) {
  return el >= 18;
}
function findOutMaxHeartRate(el) {
  return Math.round(206.9 - 0.67 * el);
}
