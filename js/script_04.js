/*
 Решение задачек по ссылке http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
 */


////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word,\nphrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.');

var test1 = 'race car';
var test2 = 'race far';
var test3 = 'Was it a car or a cat I saw?';

var palindromeOrNot = function(string) {
    var string = string;
    var str = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var reversed = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'').split('').reverse().join('');
    if(str === reversed && str != '') {
        return true;
    } else {
        return false;
    };
};
console.log(palindromeOrNot(test1));
console.log(palindromeOrNot(test2));
console.log(palindromeOrNot(test3));
console.log(palindromeOrNot(''));
/*
////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Write a JavaScript function that reverse a number. 32243 to 34223.');

var number = 32243;
console.log(number);

var numberRevers = function (number) {
    var iterations = Math.floor(number.toString().length/2);
    var digits = ("" + number).split("");
    for ( var i = 0; i < iterations; i++) {
        var left = digits[i];
        var right = digits[digits.length - i - 1];
        if (left != right) {
            digits[i] = right;
            digits[digits.length - i - 1] = left;
        }
    }
    return parseInt(digits.join(''));
};

var reverseNumber = function(n) {
    n = n + '';
    return parseInt(n.split('').reverse().join(''));
};

console.log(numberRevers(number));
console.log(reverseNumber(number));
*/