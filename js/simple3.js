// "use strict";
var char = "A";
var string1 = "Francis";
var string2 = "Bernard-Henry-Levy";
var arr1 = string1.split("-");
var arr2 = string2.split("-");
console.log(arr1);
console.log(arr2);
if ( char === char.toLowerCase()) {
  console.log(true);
}

function checkUpperCase(word) {
  var chars = word.split("");
  return chars[0] === chars[0].toUpperCase() ? true : false;
}

console.log(checkUpperCase(arr2[0]));
console.log(checkUpperCase("bernard"));
