var m = function() {
  var args = Array.prototype.slice.call(arguments, 0); //betterway
  var args = [].slice.call(arguments, 0); //works but not the betterway

  console.log(arguments instanceof Array);
  console.log(args instanceof Array);

  console.log(args);
  return args;
}

m(1,2,3,4,5);
