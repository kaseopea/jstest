<<<<<<< .mine
var i = 20;
function m() {
  console.log(i);
  console.log(test);
=======
function isMerge(s, part1, part2) {
  var pattern = part1.concat(part2).split('');
  var sArray = s.split('');
  var i;
>>>>>>> .theirs

<<<<<<< .mine
  for (var i = 0; i < 10; i++) {
    var test = i;
  }
  console.log(i);
  console.log(test);
}



=======
  if (pattern.length !== sArray.length) {
    return false;
  }
  // if ( part1 === part2) {
  //   return false;
  // }
  if (!part1 && !part2 && !s) return true;
  if (!part1 && !part2) return false;
  if (!s) return false;
>>>>>>> .theirs

<<<<<<< .mine
m();

=======
  if (!part1 && (s.length !== part2.length)) return false;
  if (!part2 && (s.length !== part1.length)) return false;
>>>>>>> .theirs

<<<<<<< .mine
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
=======
  // if(part1 === ' ')









>>>>>>> .theirs

<<<<<<< .mine
var user1 = new User('Ivanov');
console.log(user1.stock);
user1.say();
=======
  if(!part1 && (s === part2)) return true;
  if(!part2 && (s === part1)) return true;

>>>>>>> .theirs

<<<<<<< .mine
console.log('\n');





=======
  // console.log('> '.trim().length);
  // var test = '';
  // console.log(part2);
  // if (!part2) {
  //   console.log('>>' + test.length);
  // }
>>>>>>> .theirs

<<<<<<< .mine
var user2 = new User('Petrov');
console.log(user2.stock);
user2.say();
=======
  // console.log(checkPart(s, part1));
  // console.log(checkPart(s, part2));

>>>>>>> .theirs


<<<<<<< .mine
console.log('\n');

var user3 = new User('Sidorov');
console.log(user3.stock);
user3.say();

console.log('\n');

var user4 = User('Sidorov');
console.log(user4.stock);
user4.say();


















































=======
  return (checkPart(s, part1) && checkPart(s, part2)) ? true : false;

  function checkPart(s, part) {

    if (part && s) {
      var startIndex = 0;
      for ( i = 0; i < part.length; i++) {
        var charIndex = s.indexOf(part[i], startIndex);
        if (charIndex !== -1) {
          startIndex = charIndex + 1;
        } else {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }

  }

}

// console.log(isMerge('codewars', 'code', 'wars'));
console.log(isMerge('  ', ' ', ' '));
// console.log(isMerge("Bananas from Bahamas", "Bahas", "Bananas from am"));
// console.log(!isMerge('codewars', 'cod', 'wars'));
// console.log(isMerge('codewars', 'code', 'code'));
// console.log(isMerge('manna codewars', 'mnacod', 'wasr'));

// console.log(!isMerge('codewars', 'cod', 'wars'));




function isMerge2(s, part1, part2) {
  var matchStr = [];
  var pattern = part1.concat(part2).split('');
  var i;

  console.log(s);
  console.log(pattern);

  if (pattern.length > s.length) return false;

  for (i = 0; i < pattern.length; i++) {
    var charIndex = s.indexOf(pattern[i]);
    console.log(charIndex);
    if (charIndex !== -1 ) {
      matchStr[charIndex] = pattern[i];
    } else {
      return false;
    }
  }
  matchStr = matchStr.join('');
  if (matchStr === s) {
      return true;
  } else {
    return false;
  }
}
>>>>>>> .theirs
