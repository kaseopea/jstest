var testString = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. ' +
'We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';
var nested = '<upcase>yellow <lowcase>submarine</lowcase></upcase>';

var newParser = function (string) {
  var result = string || '';
  var mixcasePattern = /<mixcase>(.*?)<\/mixcase>/gi;
  var upcasePattern = /<upcase>(.*?)<\/upcase>/gi;
  var lowcasePattern = /<lowcase>(.*?)<\/lowcase>/gi;

  if(_.isString(result)) {

    result = result.replace(mixcasePattern, function (match, inner) {
      console.log(match);
      console.log(inner);
      console.log('---------');
        var newMixCase = '';
        var upperOrLower;
        var replaced;
        for (i = 0; i < inner.length; i++) {
            upperOrLower = Math.round(Math.random());
            replaced = (upperOrLower) ? inner.charAt(i).toUpperCase() : inner.charAt(i).toLowerCase();
            newMixCase += replaced;
        }
        return newMixCase;
      });

    result = result.replace(upcasePattern, function (match, inner) {
      console.log(match);
      console.log(inner);
      console.log('---------');
      upcasePattern = /<upcase>(.*?)<\/upcase>$$/gi;
      match = match.replace(upcasePattern, inner.toUpperCase());
      return inner.toUpperCase();
    });
    result = result.replace(lowcasePattern, function (match, inner) {
      console.log(match);
      console.log(inner);
      console.log('---------');

      match = match.replace(lowcasePattern, inner.toLowerCase());
      return inner.toLowerCase();
    });
    return result;
  } else {
    throw new Error('Please specify string to parse;');
  }


}
console.log(newParser(testString));
console.log(newParser(nested));

var parseString = function(string) {
  var result = string;
  var i;

  console.log(string);

  if (_.isString(string)) {
    var result = string;


    // regular expressions
    var mixcasePattern = /<mixcase>(.*?)<\/mixcase>/gi;
    // var upcasePattern = /<upcase>(.*?)<\/upcase>/gim;

    var upcasePattern = /<upcase>(.*?)<\/upcase>/gi;
    var lowcasePattern = /<lowcase>(.*?)<\/lowcase>/gi;
    var anyTagsPattern = /<[^>]*>/gi;

    // console.log(result.match(anyTagsPattern));
    //проверяем строку на наличие тегов
    var j = 1;
    if (result.match(anyTagsPattern)) {
      console.log(result);
      console.log(j);

      j++;
    }
    return result;
  } else {
    throw new Error('No correct input data.');
  }
}
console.log('Task 4');
// console.log(parseString(testString));
// console.log(parseString(nested));
// console.log(parseString());
