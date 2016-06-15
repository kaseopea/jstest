var head = {
  glasses: 1
};

var table = {
  pen: 3
};

var bed = {
  sheet: 1,
  pillow: 2
};

var pockets = {
  money: 2000
};

//pockets -> bed -> table -> head

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

// console.log(pockets.pen);
// console.log(bed.glasses);
// console.log(table.money);

function f(a, b) {
  var sum = a + b;
  console.log( "привет - " + sum);
}

Function.prototype.defer = function (delay) {
  // var f = this;
  return function () {
    var args = arguments;
    var context = this;
    setTimeout(function() {
      f.apply(context, args);
    }, delay);
  };
}

f.defer(1000)(1,2);
