//https://www.codewars.com/kata/merged-string-checker/train/javascript


function isMerge(s, part1, part2) {
    var pattern = part1.concat(part2).split('');
    var sArray = s.split('');
    var i;

    if (pattern.length !== sArray.length) {
        return false;
    }
    // if ( part1 === part2) {
    //   return false;
    // }
    if (!part1 && !part2 && !s) return true;
    if (!part1 && !part2) return false;
    if (!s) return false;

    if (!part1 && (s.length !== part2.length)) return false;
    if (!part2 && (s.length !== part1.length)) return false;

    // if(part1 === ' ')

    if(!part1 && (s === part2)) return true;
    if(!part2 && (s === part1)) return true;

    // console.log('> '.trim().length);
    // var test = '';
    // console.log(part2);
    // if (!part2) {
    //   console.log('>>' + test.length);
    // }

    // console.log(checkPart(s, part1));
    // console.log(checkPart(s, part2));


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
