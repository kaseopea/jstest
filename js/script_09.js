function isMerge(s, part1, part2) {
  var sArray = s.split('');

  console.log(sArray);

  checkPart(part1);
  console.log(sArray);
  console.log('-------------');
  checkPart(part2);
  console.log(sArray);

  function checkPart(part) {

    console.log(part);

    if (part) {
      var startIndex = 0;
      for ( i = 0; i < part.length; i++) {
        var line = sArray.join('');
        var charIndex = line.indexOf(part[i], startIndex);
        console.log(charIndex);
        console.log(line);
        if (charIndex !== -1) {
          sArray[charIndex] = '*';
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

console.log(isMerge("Bananas from Bahamas", "Bahas", "Bananas from am"));
