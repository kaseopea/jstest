// Task 1.
//
// Create a function constructor for Person. Each Person must have:
// 1. properties firstname, lastname and age
// 	1.1. firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters
// 	1.2. age must always be a number in the range (0, 150), inclusive
// 		1.2.1. the setter of age can receive a convertible-to-number value
// 	1.3. if any of the above is not met, throw Error
//
// 2. property fullname
// 	2.1. the getter returns a string in the format 'FIRST_NAME LAST_NAME'
// 	2.2. the setter receives a string is the format 'FIRST_NAME LAST_NAME'
// 		2.2.1. it must parse it and set firstname and lastname
//
// 3. method introduce() that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old'
//
// 4. all methods and properties must be attached to the prototype of the Person

function Person(firstname, lastname, age) {

  // Firstname & lastname
  if (this.nameValidator(firstname) && this.nameValidator(lastname)) {
    this.firstname = firstname;
    this.lastname = lastname;
  } else {
    throw new Error('Check firstname and lastname. It must be a string, between 3..20 characters long');
  }
  if(this.ageValidator(age) && this.ageValidator(age)) {
    this.age = age;
  } else {
    throw new Error('Check age. It should be in range of ' + minAge + '..' + maxAge);
  }

  // Fullname property
  Object.defineProperty(this, 'fullname', {
    get: function () {
      return this.firstname + ' ' + this.lastname;
    },
    set: function (fullname) {
      var names = fullname.split(' ');
      var fname = names[0];
      var lname = names[1];

      if (this.nameValidator(fname) && this.nameValidator(lname)) {
        this.firstname = names[0];
        this.lastname = names[1];

      } else {
        throw new Error('Firstname or lastname is invalid');
      }
    }
  });

};


Person.prototype.nameValidator = function (name) {
  var nameRegexp = new RegExp('^[a-z]{3,20}', 'i');
  return (nameRegexp.test(name) && _.isString(name)) ? true : false;
};

Person.prototype.ageValidator = function(age) {
  var minAge = 0;
  var maxAge = 150;

  return (_.inRange(age, minAge, maxAge + 1) && (_.isNumber(age) || _.isString(age)) && !isNaN(parseInt(age))) ? true : false;
};

// Person.prototype.setFullName = function(fullname) {
//   var names = fullname.split(' ');
//   this.firstname = names[0];
//   this.lastname = names[1];
// };
//
// Person.prototype.getFullName = function() {
//   return this.firstname + ' ' + this.lastname;
// };

Person.prototype.introduce = function () {
  return 'Hello! My name is ' + this.firstname + ' ' + this.lastname + ' and I am ' + this.age + '-years-old';
};

var person1 = new Person('Ivan', 'Ivanov', 20);
var person2 = new Person('Vitaly', 'Rusov', '32');

console.log(person1.introduce());
console.log(person2.introduce());

console.log(person1);
console.log(person1.fullname);


console.log(person2);
console.log(person2.fullname);
