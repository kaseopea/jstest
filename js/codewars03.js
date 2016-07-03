
function longest(arr, n) {
  var lengthArr = [];
  var longestSize = 0;

  for ( var i = 0; i < arr.length; i ++) {

    var swaped = false;
    var j = 0;
    console.log(i);
    while (j < arr.length) {
      if (arr[j].length > arr[j+1].length ) {
        var c = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = c;
        swapped = true;
      }
      j++;
    }
  }
  // if(!swaped) break;
  // var arrObj = {};
  // arrObj.val = arr[i];
  // arrObj.len = arr[i].length;
  // arrObj.ind = i;
  // lengthArr.push(arrObj);
  console.log(arr);

  // arr.map(function(el, i, arr) {
  //   console.log(arr[i]);
  // });

  // console.log(lengthArr);
  // longestSize = Math.max.apply(null,lengthArr);
  // console.log(longestSize);

  //1
  arr.sort(function(a, b){
    console.log(a.length + ' | ' + b.length);
    if(a.length < b.length) return -1;
    if(a.length > b.length) return 1;
    if (a.length == b.length) return 0;
  });

  console.log(arr.reverse());
  return arr[arr.length - n];
}

var testArr1 = ['Hello','World','Codewars','Katas'];
console.log(testArr1);
console.log(longest(testArr1, 3));
console.log(longest(testArr1, 4));

// var testArr2 = ['aa', 'bb', 'cc', 'dd', 'eee', 'b', 'f', 'ff', 'hhh', 'gggg'];
// console.log(testArr2);
// console.log(longest(testArr2, 3));
// console.log(longest(testArr2, 4));
