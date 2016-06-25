function getCard(){
  var result = [];
  var columns = ["B", "I", "N", "G", "O"];
  var colSize = 14;

  columns.map(function (el, i) {
    var start = i * (colSize + 1) + 1;
    var range = generateRange(start,colSize);
    if (el == "N") {
      var numbersCount = 4;
    } else {
      var numbersCount = 5;
    }
    var range = shuffleRange(range);
    for ( var i = 0; i < numbersCount; i++) {
      result.push(el + (range[i]));
    };
  });

  function generateRange(start, length) {
    var arr = [];
    for ( var i = start; i < start + length + 1 ; i++) {
      arr.push(i);
    }
    return arr;
  }

  function shuffleRange(a) {
    var j, x;
    for (var i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
  }

  return result;
}

console.log(getCard());
