function showMe(yourID){
  function checkUpperCase(word) {
    var chars = word.split("");
    if (chars.length > 0) {
        return chars[0] === chars[0].toUpperCase() ? true : false;
    } else return false;
  }
  var name = yourID.split(" ");
  if (name.length < 2) {
    var hyphenated = name[0].split("-");
    for ( var i = 0; i < hyphenated.length; i++ ) {
      if (!checkUpperCase(hyphenated[i]) || !isNaN(parseInt(hyphenated[i]))) return false;
    }
    return true;
  } else return false;
}
console.log(showMe("Franc-"));
console.log(showMe("Francis"));
console.log(showMe("Jean-Eluard"));
console.log(showMe("Le Mec"));
console.log(showMe("Bernard-Henry-Levy"));
console.log(showMe("1-Henry-Levy"));
console.log(showMe("Mémé Gertrude"));

page.end();

function wordStep(str) {
  console.log(str);
  var words = str.split(" ");
  var output = [];
  var cols = 0, j = 0;
  for ( var i = 0; i < words.length; i+=2 ) {cols += words[i].length;}
  cols = cols - (Math.ceil(words.length / 2 ) - 1);
  var col = 0;
  for ( var i = 0; i < words.length; i++) {
    if ( i % 2 ) {
      for ( var j = 1; j < words[i].length-1; j++) {
        var chars = words[i].split("");
        var line = renderLine(chars[j], col, cols);
        output.push(line);
        // console.log(line);
      }
      if (i == words.length - 1 ) {
        var chars = words[i].split("");
        var line = renderLine(chars[words[i].length - 1], col, cols);
        output.push(line);
        // console.log(line);
      }

    } else {
      var line = renderLine(words[i], col, cols);
      col += words[i].length - 1;
      // console.log(line);
      output.push(line);
    }


  }
  //fillArrayWithChars
  function fillArrayWithChars(char, length) {
    var arr = Array.apply(null, Array(length));
    return arr.map(function (x, i) { return char; });
  }

  //renderLine
  function renderLine(content, pos, linelength) {
    var contentArray = content.split('');
    var line = fillArrayWithChars(" ", linelength); //empty spaces array with linelength length;
    var args = [pos, contentArray.length].concat(contentArray);
    Array.prototype.splice.apply(line, args);
    return line;
  }
   return output;
}

console.log(wordStep('SNAKES SHOE EFFORT TRUMP POTATO'));
page.end();
console.log(wordStep('HELLO OIL'));
page.end();
console.log(wordStep('CODEWARS SNAIL LAKE EEK'));
page.end();
