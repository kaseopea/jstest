// In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).
//
// If all angles are less than 90°, this triangle is acute and function should return 1.
//
// If one angle is strictly 90°, this triangle is right and function should return 2.
//
// If one angle more than 90°, this triangle is obtuse and function should return 3.
//
// If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.
//
// Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).
/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){
  //check if triangle is possible
  if (((a + b) <= c) || ((b + c) <= a) || ((a + c) <= b)) {
    return 0;
  } else {

    //angles
    var alpha = Math.acos((Math.pow(b,2) + Math.pow(c,2) - Math.pow(a,2))/(2*b*c))*180/Math.PI;
    var betta = Math.acos((Math.pow(a,2) + Math.pow(c,2) - Math.pow(b,2))/(2*a*c))*180/Math.PI;
    var gamma = Math.acos((Math.pow(a,2) + Math.pow(b,2) - Math.pow(c,2))/(2*a*b))*180/Math.PI;

    if ((alpha === 90) || (betta === 90) || (gamma === 90)) {
      return 2;
    }

    if ((alpha < 90) && (betta < 90) && (gamma < 90)) {
      return 1;
    }

    if (( alpha >=90) && (alpha <=180)) return 3;
    if (( betta >=90) && (betta <=180)) return 3;
    if (( gamma >=90) && (gamma <=180)) return 3;
  }
}

console.log(triangleType(7,3,2));
console.log(triangleType(2,4,6));
console.log(triangleType(8,5,7));
console.log(triangleType(3,4,5));
console.log(triangleType(7,12,8));
