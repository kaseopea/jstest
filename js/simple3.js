// "use strict";
var char = "A";
var string1 = "Francis";
var string2 = "Bernard-Henry-Levy";
var arr1 = string1.split("-");
var arr2 = string2.split("-");
console.log(arr1);
console.log(arr2);
if ( char === char.toLowerCase()) {
  console.log(true);
}

function checkUpperCase(word) {
  var chars = word.split("");
  return chars[0] === chars[0].toUpperCase() ? true : false;
}

console.log(checkUpperCase(arr2[0]));
console.log(checkUpperCase("bernard"));

function Person(name, lastName, age, group) {
   this.name = name;
   this.lastName = lastName;
   this.age = age;
   this.group = group;
   this.toString = function () {
       return this.name + ' ' + this.lastName + ' [' + group +  '](' + this.age + 'yo)&#13;&#10;';
   }
}
 var people = new Array();

people.push(new Person("Ivan", "Ivanov", 26, 'designer'));
people.push(new Person("Peter", "Petrov", 26, 'developer'));
people.push(new Person("Sidor", "Sidorov", 26, 'developer'));
people.push(new Person("Anka", "Hodor", 19, 'designer'));
people.push(new Person("Ivan", "Petrov", 19, 'developer'));
people.push(new Person("Anka", "Ivanov", 26, 'developer'));
people.push(new Person("Mitri", "Valabanov", 27, 'developer'));
people.push(new Person("John", "Doe", 19, 'designer'));
// console.log(people);

var testString = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. ' +
'We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';

cons1.write(testString);
cons1.hr();
cons1.write(people);
cons1.error('Please, specify correct input.');
cons1.warn('Please, specify correct input.');
cons1.success('Good boy!');

var recommended_output = {
  'designer': [
    {name: "Ivan", lastName: "Ivanov", age: 27, group: "designer"},
    {name: "Anka", lastName: "Hodor", age: 19, group: "designer"},
    {name: "John", lastName: "Doe", age: 19, group: "designer"}
  ],
  'developer': [
    {name: "Sidor", lastName: "Sidorov", age: 26, group: "developer"},
    {name: "Peter", lastName: "Petrov", age: 26, group: "developer"}
  ]
};
cons1.write(recommended_output);
