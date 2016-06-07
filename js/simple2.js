// -----------------------------------------
// Task 1 Minimum function
// -----------------------------------------

var min = function calcMin(a,b) {
    var res;
    if (a<b) 
        return a;
    else
        return b;
}

console.log(min(32,5));
console.log(min(0,-15));

// -----------------------------------------
// Task 2 Recursion
// -----------------------------------------
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}


console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));