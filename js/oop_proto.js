var A = function() {};
A.prototype.b = 100;
var a = new A();
A.prototype.c = 101;
a.c = -100;
A.prototype = {};
A.prototype.b = 536;
console.log(a.__proto__.constructor.prototype.b === 536); //false
console.log(a);
// console.log(a.__proto__.__proto__.constructor === a.__proto__.constructor.protototype.constructor);
console.log(b instanceof A);
