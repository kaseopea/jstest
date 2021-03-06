////////////////////////////////////////////////////////////////////////////////////////////////////
function isPrime(num) {
  var isSimple = 0;
  if (num > 1) {
    for ( var i = 2; i <= num; i++ ) {
      if((num%i) == 0) isSimple++;
      if (isSimple == 2) break;
    }
    if (isSimple < 2) return true;
  } return false;
}

// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(151));
// console.log(isPrime(2560));

//////////////////////////////////////////////////////////////////////////////////////////////////

var arr = [1,3,4,4,4,4,5];
var exampleArr = [4,1,2,3,5];
//Result: [4,4,4,4,1,3,5]


var sortByExample = function (arr, exampleArr) {
  var result = [];
  for ( var i = 0; i < exampleArr.length; i++) {
    result = result.concat(arr.filter(function(value){
      return value == exampleArr[i];
    }));
  }
  return result;
}

console.log(sortByExample(arr,exampleArr));
