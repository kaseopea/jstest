function revrot(str, sz) {
  var i = 0, j = 0;

  if ((sz <= 0) || (str.length <= 0) || (sz > str.length)) {
    return '';
  }

  var chunksPattern = new RegExp('.{1,' + sz + '}','g');
  var chunks = str.match(chunksPattern);

  if(chunks[chunks.length - 1].length < sz) {
    chunks.pop();
  }
  var chunks = chunks.map(function(el,i,arr) {
    var digits = el.split('');
    var result = digits.reduce(function(prev, cur) {
      return prev + Math.pow(cur,3);
    }, 0);
    if (result % 2 === 0) {
      digits.reverse();
    } else {
      var first = digits.shift();
      digits.push(first);
    }
    return digits.join('');
  });
  return chunks.join('');

}

console.log(revrot('123456987654', 6));
console.log(revrot('123456987653', 6));
