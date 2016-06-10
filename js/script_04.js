/*
 Решение задачек по ссылке http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
 */
////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.');

var vowelsCount = function(string) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;
    var str = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    //console.log("Original string: " + string.length);
    //console.log("Optimized string: " + str.length);

    for ( var i = 0; i < str.length; i++ ) {
        if ( vowel_list.indexOf(str[i]) != -1) vcount++;
    };

    return vcount;

}
console.log(vowelsCount('The quick brown fox'));
console.log(vowelsCount('Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string'));

////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.');

var test1 = 'Write a JavaScript function that accepts a string as a parameter_in_my_mind and find the longest word within the string';
var test2 = 'Web Development Tutorial';

var maxWordLength = function (string) {
    //Строку нужно регуляркой обработать, чтобы оставить только буквы и пробелы
    var longest = '';
    var words = string.split(' ');
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) longest = words[i]
    };

    return longest;
}
console.log(maxWordLength(test1));
console.log(maxWordLength(test2));


////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word\n' +
    'of the string in upper case. the quick brown fox - The Quick Brown Fox');

String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

var capWords = function (string) {
    var words = string.split(' ');
    for (var i = 0; i < words.length; i++) {
        var cap = words[i].charAt(0).toUpperCase();
        words[i] = words[i].replaceAt(0, cap);
    };

    return words.join(' ');
};

console.log(capWords('the quick brown fox'));

////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Write a JavaScript function that returns a passed string with letters in alphabetical order.');

var lettersSort = function (string) {
    var letters = string.split('');
    letters.sort();
    return letters.join('');
}

console.log(lettersSort('webmaster'));



////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Write a JavaScript function that generates all combinations of a string. dog - d,do,dog,o,og,g');

console.log('Разобраться с примерами по ссылке http://www.w3resource.com/javascript-exercises/javascript-function-exercise-3.php')


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