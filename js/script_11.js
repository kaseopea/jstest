function mostFrequentDays(year){
  //your code here
  var week = [0,1,2,3,4,5,6];
  var daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var firstDay = new Date(year, 0, 1);
  var lastDay = new Date(year, 11, 31);
  var first = firstDay.getDay();
  var last = lastDay.getDay();

  var firstWeek = [];
  var lastWeek = [];
  var frequentDays = [];
  for ( var i = first; i < 7; i++ ) { firstWeek[i] = i; }
  for ( var i = 0; i <= last; i++ ) { lastWeek[i] = i; }

  week.map(function(el, i, arr) {
    if ((arr[i] === firstWeek[i]) && (arr[i] === lastWeek[i])) {
      frequentDays.push(arr[i]);
    };
  });

  return frequentDays.map(function(el,i,arr) {
      return daysInWeek[arr[i]];
  });

  var leap = leapYear(year);
  if (!leapYear(year)) {

  }

  // var endDate = new Date(year + 1, 0, 1, 0, 0, 0, 0);
  // var daysOfYear = [];
  // for (var d = new Date(year, 0, 1, 0, 0, 0, 0); d <= endDate; d.setDate(d.getDate() + 1)) {
  //     daysOfYear.push(new Date(d));
  // }
  // console.log(daysOfYear);
  function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }
}

console.log(mostFrequentDays(2015)); // ['Tuesday', 'Wednesday'], "Should be: ['Tuesday', 'Wednesday']"
console.log(mostFrequentDays(1084)); // ['Tuesday', 'Wednesday'], "Should be: ['Tuesday', 'Wednesday']"
console.log(mostFrequentDays(1167)); // ['Sunday'], "Should be: ['Sunday']");
console.log(mostFrequentDays(1216)); //['Friday', 'Saturday'], "Should be: ['Friday', 'Saturday']");
// console.log(mostFrequentDays(1492)); //['Friday', 'Saturday'], "Should be: ['Friday', 'Saturday']");
// console.log(mostFrequentDays(1770)); //['Monday'], "Should be: ['Monday']");
// console.log(mostFrequentDays(1785)); //['Saturday'], "Should be: ['Saturday']");
// console.log(mostFrequentDays(212)); //['Wednesday', 'Thursday'], "Should be: ['Wednesday', 'Thursday']");
// console.log(mostFrequentDays(1901));  //['Tuesday'], "Should be: ['Tuesday']");
// console.log(mostFrequentDays(2135)); //['Saturday'], "Should be: ['Saturday']");
// console.log(mostFrequentDays(3043)); //['Sunday'], "Should be: ['Sunday']");
// console.log(mostFrequentDays(2001)); //['Monday'], "Should be: ['Monday']");
// console.log(mostFrequentDays(3150)); //['Sunday'], "Should be: ['Sunday']");
// console.log(mostFrequentDays(3230)); //['Tuesday'], "Should be: ['Tuesday']");
// console.log(mostFrequentDays(328)); //['Monday', 'Sunday'], "Should be: ['Monday', 'Sunday']");
// console.log(mostFrequentDays(2016)); //['Friday', 'Saturday'], "Should be: ['Friday', 'Saturday']");
// console.log(mostFrequentDays(334)); //['Monday'], "Should be: ['Monday']");
// console.log(mostFrequentDays(1986)); //['Wednesday'], "Should be: ['Wednesday']");
// console.log(mostFrequentDays(3361)); //['Thursday'], "Should be: ['Thursday']");
// console.log(mostFrequentDays(5863)); //['Thursday'], "Should be: ['Thursday']");
// console.log(mostFrequentDays(1910)); //['Saturday'], "Should be: ['Saturday']");
// console.log(mostFrequentDays(1968)); //['Monday', 'Tuesday'], "Should be: ['Monday', 'Tuesday']");
// console.log(mostFrequentDays(7548)); //['Thursday', 'Friday'], "Should be: ['Thursday', 'Friday']");
// console.log(mostFrequentDays(8116)); //['Wednesday', 'Thursday'], "Should be: ['Wednesday', 'Thursday']");
// console.log(mostFrequentDays(9137)); //['Friday'], "Should be: ['Friday']");
// console.log(mostFrequentDays(1794)); //['Wednesday'], "Should be: ['Wednesday']");

// var countBits = function(n) {
//   var bin = parseInt(n, 10).toString(2);
//   var binChars = bin.split('');
//   var result =  +binChars.reduce(function (a,b) {
//     return parseInt(a,10) + parseInt(b,10);
//   });
//   return result;
// };
//
// console.log(countBits(0)); //0
// console.log(countBits(4)); //1
// console.log(countBits(7)); //3
// console.log(countBits(9)); //2
// console.log(countBits(10)); //2
