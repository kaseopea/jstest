var m = function() {
  var args = Array.prototype.slice.call(arguments, 0); //betterway
  var args = [].slice.call(arguments, 0); //works but not the betterway

  console.log(arguments instanceof Array);
  console.log(args instanceof Array);



  console.log(args);
  return args;
}

var argsToArray = function(args) {
  return Array.prototype.slice.call(args,0);
}

var partial = function() {
  var args = argsToArray(arguments);
  var fn = args.shift(); //first arg is a function

  return function() {
    var otherArgs = argsToArray(arguments);
    return fn.apply(this,args.concat(otherArgs));
  }
}

var twinkle = function(noun, wonderAbout) {
    return 'Twinkle, twinkle, little ' +
        noun + '\nHow I wonder where you ' +
        wonderAbout;
}
var twinkleBat = partial(twinkle, 'bat', 'are at');
var twinkleStar = partial(twinkle, 'star', 'are');
console.log(twinkleBat());
console.log(twinkleStar());
