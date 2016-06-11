/*
 Решение задачек по ссылке http://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
 */

////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Write a JavaScript program to get the website URL (loading page).');
console.log(document.URL);


////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.');
var c = 60;
var f = 140;

var fConverter = function(c) {
    return (c*9)/5 + 32;
};
var cConverter = function(f) {
    return 5*(f-32)/9;
};
console.log(fConverter(60));
console.log(cConverter(140));
console.log(cConverter(45));


/*
////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Write a JavaScript program to calculate multiplication and division of two numbers (input from user).');
document.write('<form>1st Number : <input type="text" id="firstNumber" value="12" /><br>2nd Number: <input type="text" id="secondNumber" value="6" /><br><input type="button" onClick="multiplyBy()" Value="Multiply" /><input type="button" onClick="divideBy()" Value="Divide" /></form><p>The Result is : <br> <span id = "result"></span></p>');

var multiplyBy = function (num1,num2) {
    var num1 = document.getElementById('firstNumber').value;
    var num2 = document.getElementById('secondNumber').value;
    document.getElementById('result').innerHTML = num1 * num2;
    return num1 * num2;
}
var divideBy = function (num1, num2) {
    var num1 = document.getElementById('firstNumber').value;
    var num2 = document.getElementById('secondNumber').value;

    document.getElementById('result').innerHTML = num1 / num2;
    return num1 / num2;
}

//console.log(multiplyBy(num1,num2));
//console.log(divideBy(num1,num2));
*/

////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Write a JavaScript program to calculate days left until next Christmas.');

var oneday = 24*60*60*1000;
var today = new Date();
var christmas = new Date(today.getFullYear(),11,25);

var daysleft = Math.round(Math.abs((christmas.getTime() - today.getTime()) / oneday));
console.log("Hey! " + daysleft + " days left for Christmas!");

/*
////////////////////////////////////////////////////////////////////////////////////////////////////
 page.title('Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted\n' +
    'to input a guess number. If the user input matches with guess number, the program will display a message "Good Work"\n' +
    'otherwise display a message "Not matched". ');

var pcNumber = Math.ceil(10*Math.random());
console.log(pcNumber);

var userNumber = window.prompt("Input your choice [0..10]");
var result = (pcNumber == userNumber) ? 'Good Work!' : 'Not matched! The number was ' + pcNumber;
alert(result);
*/


/*
////////////////////////////////////////////////////////////////////////////////////////////////////
 page.title('Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.');
var date = new Date();
var startY = 2016;
var endY = 2030;
console.log(startY + " - " + endY);
for (var year = startY; year <= endY; year++) {
    var day = new Date(year, 3, 8);
    if (day.getDay() === 0) console.log("8th April is being a Sunday " + year);

};
for (var year = startY; year <= endY; year++) {
    var day = new Date(year, 3, 8);
    if (day.getDay() === 6) console.log("8th April is being a Saturday " + year);

};
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////
 page.title('Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.');
var date = new Date();
//var curYear = date.getFullYear();
//var yearPrompt = window.prompt('Input a year: ');
var leap = false;

var checkLeapYear = function(year) {
    var leap = false;
    var x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); // Нужно разобрать логику

    if (year % 400 == 0) {
        leap = true;
    } else if (year % 100 == 0) {
        leap = false;
    } else if (year % 4 == 0) {
        leap = true;
    }
    //return "Is current " + year + " year leap? " + leap;
    return "Is current " + year + " year leap? " + x;
};
console.log(checkLeapYear(1600));
console.log(checkLeapYear(2000));
console.log(checkLeapYear(1700));
console.log(checkLeapYear(1800));
console.log(checkLeapYear(1900));
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////
 page.title('Write a JavaScript program to display the current day and time in the following format:\nToday is : Friday.\nCurrent time is : 4PM:50:22');

var today = new Date();
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//console.log("Today is: " + weekdays[today.getDay()]);

function formatAMPM() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >=12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    var result = hours + ampm + ":" + minutes + ":" + seconds;
    console.log(result);
}
formatAMPM();
setInterval(function() { formatAMPM();}, 1000);
*/


/*
////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Write a JavaScript program to print the contents of the current window.');
console.log(window.print());
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Write a JavaScript program to get the current date.\nExpected Output: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy');
var today = new Date();
var dd = today.getDay();
var mm = today.getMonth() + 1; //0..11
var yyyy = today.getFullYear();

if (dd < 10) dd = '0'+dd;
if (mm < 10) mm = '0'+mm;

console.log(mm + '-' + dd + '-' + yyyy);
console.log(mm + '/' + dd + '/' + yyyy);
console.log(dd + '-' + mm + '-' + yyyy);
console.log(dd + '/' + mm + '/' + yyyy);
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.');
var a = 5;
var b = 6;
var c =7;
var p = (a+b+c)/2;
var S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log("p: " + p);
console.log("S: " + S.toFixed(2));
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Write a JavaScript program to rotate the string \'w3resource\' in right direction by periodically removing\none letter from the end of the string and attaching it to the front.');

document.write('<div id="textrotator"> w3resource </div>');

function animateText(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0];
    var text = textNode.data;

    setInterval(function(){
        text = text[text.length-1] + text.substring(0,text.length-1);
        textNode.data = text;
    },200);
}
animateText('textrotator');

var str = 'w3resource';
var strArray = str.split('');
//console.log(strArray);
for (var i = 0; i < strArray.length; i++) {
    var last = strArray.pop();
    strArray.unshift(last);
    console.log(i + ". " + strArray.join(''));
};
*/