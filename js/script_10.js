var i = 20;
function m() {
  console.log(i);
  console.log(test);

  for (var i = 0; i < 10; i++) {
    var test = i;
  }
  console.log(i);
  console.log(test);
}

m();

function User(name) {
  if(!(this instanceof User)) {
    return new User(name);
  }
  this.name = name;
}
User.prototype.say = function() {
  console.log('Hello! My name is ' + this.name + '!');
}
User.prototype.stock = 'people';

var user1 = new User('Ivanov');
console.log(user1.stock);
user1.say();

console.log('\n');

var user2 = new User('Petrov');
console.log(user2.stock);
user2.say();


console.log('\n');

var user3 = new User('Sidorov');
console.log(user3.stock);
user3.say();

console.log('\n');

var user4 = User('Sidorov');
console.log(user4.stock);
user4.say();
