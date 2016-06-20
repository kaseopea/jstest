/**
 * Created by vitalyrusov on 25.03.16.
 */
// var counter = (function () {
//   var count = 0;
//
//   return function (num) {
//     count = num !== undefined ? num : count;
//     return count++;
//   }
// })();

var counter = function (num) {
    counter.count = num !== undefined ? num : counter.count;
    return counter.count++;
}
counter.count = 0;

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(10));
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());
console.log(counter());
